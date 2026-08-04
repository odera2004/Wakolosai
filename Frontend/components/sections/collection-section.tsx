import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Supabase & Resend
const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || ""
);

const resend = new Resend(process.env.RESEND_API_KEY || "");

// Helper: Send Pass Email
async function sendTicketEmail(toEmail, ticketType, amount, refId) {
  try {
    console.log(`📧 Sending ticket email to: ${toEmail}...`);
    const data = await resend.emails.send({
      from: "Wakoloo <onboarding@resend.dev>",
      to: [toEmail],
      subject: "Your Live Worship Pass Confirmation",
      html: `
        <div style="font-family: sans-serif; padding: 24px; background: #000; color: #fff; border-radius: 12px; border: 1px solid #FFB800;">
          <h2 style="color: #FFB800; margin-top: 0;">Worship Pass Confirmed!</h2>
          <p>Thank you for your purchase. Here are your ticket details:</p>
          <ul style="line-height: 1.8;">
            <li><strong>Pass Type:</strong> ${ticketType}</li>
            <li><strong>Amount Paid:</strong> KES ${amount}</li>
            <li><strong>Reference ID:</strong> ${refId}</li>
          </ul>
          <p style="color: #aaa; font-size: 12px; margin-top: 20px;">Present this digital confirmation at the entrance for verification.</p>
        </div>
      `,
    });
    console.log("✅ Resend Email Sent Successfully:", data);
  } catch (err) {
    console.error("❌ Resend Email Failed:", err);
  }
}

// 1. INITIATE PAYMENT ROUTE
app.post("/api/buy-ticket", async (req, res) => {
  try {
    const { phone, email, amount, ticketType } = req.body;

    if (!phone || !email || !amount) {
      return res.status(400).json({ error: "Phone, email, and amount are required." });
    }

    const apiRef = `REF-${Date.now()}`;

    // A. Trigger IntaSend STK Push
    const intasendResponse = await fetch("https://payment.intasend.com/api/v1/checkout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.INTASEND_SECRET_KEY}`,
      },
      body: JSON.stringify({
        public_key: process.env.INTASEND_PUBLIC_KEY,
        currency: "KES",
        email: email,
        phone_number: phone,
        amount: Number(amount),
        api_ref: apiRef,
        method: "M-PESA",
      }),
    });

    const intasendData = await intasendResponse.json();

    if (!intasendResponse.ok) {
      console.error("❌ IntaSend Error:", intasendData);
      return res.status(400).json({ error: intasendData.detail || "IntaSend STK Push failed." });
    }

    const merchantReqId = String(intasendData.id || intasendData.invoice?.invoice_id || apiRef);

    // B. Save Pending Sale into Supabase (Matching exact column names)
    try {
      const { error: dbError } = await supabase.from("ticket_sales").insert([
        {
          email: email,
          phone: phone,
          ticket_type: ticketType || "General Pass",
          amount: Number(amount),
          status: "pending",
          merchant_request_id: merchantReqId,
          api_ref: apiRef,
          payment_method: "M-PESA"
        },
      ]);

      if (dbError) {
        console.warn("⚠️ Supabase Insert Warning:", dbError.message);
      } else {
        console.log("✅ Recorded pending sale in Supabase");
      }
    } catch (dbErr) {
      console.warn("⚠️ Supabase Exception:", dbErr);
    }

    return res.status(200).json({
      success: true,
      message: "STK Push Sent",
      merchant_request_id: merchantReqId,
      apiRef,
    });
  } catch (error) {
    console.error("❌ Buy Ticket Route Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// 2. INTASEND CALLBACK / WEBHOOK ROUTE
app.post("/api/callback", async (req, res) => {
  try {
    console.log("🔔 Callback received from IntaSend:", JSON.stringify(req.body));

    const { state, status: bodyStatus, invoice_id, api_ref, value, account, phone } = req.body;

    const status = (state || bodyStatus || "").toUpperCase();

    if (status === "COMPLETE" || status === "SUCCESS" || status === "COMPLETED") {
      const customerEmail = account || req.body.email || "customer@example.com";
      const paidAmount = value || req.body.amount || 1;
      const refCode = invoice_id || api_ref || `PASS-${Date.now()}`;

      console.log(`🎉 Payment COMPLETE for ${customerEmail}! Processing Supabase & Resend...`);

      // A. Try updating existing pending record in Supabase
      const { data: updated } = await supabase
        .from("ticket_sales")
        .update({ status: "paid" })
        .or(`merchant_request_id.eq.${invoice_id},api_ref.eq.${api_ref}`)
        .select();

      // B. Fallback: Force-create record if initial insert was missed
      if (!updated || updated.length === 0) {
        console.log("⚠️ Force-creating paid record in Supabase...");
        await supabase.from("ticket_sales").insert([
          {
            email: customerEmail,
            phone: phone || "0700000000",
            ticket_type: "Pass Entry",
            amount: Number(paidAmount),
            status: "paid",
            merchant_request_id: String(invoice_id || ""),
            api_ref: api_ref || "",
            payment_method: "M-PESA"
          },
        ]);
      }

      // C. SEND RESEND EMAIL
      await sendTicketEmail(customerEmail, "Live Worship Pass", paidAmount, refCode);
    } else {
      console.log(`ℹ️ Callback status is '${status}' (not COMPLETE). Skipping email.`);
    }

    return res.status(200).json({ status: "processed" });
  } catch (err) {
    console.error("❌ Callback Processing Error:", err);
    return res.status(500).json({ error: "Callback Processing Failed" });
  }
});

// Fetch Live Inventory
app.get("/api/ticket-tiers", async (req, res) => {
  try {
    const { data, error } = await supabase.from("ticket_tiers").select("*");
    if (error) throw error;
    res.json(data || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
