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

// Helper: Send Pass Email via Resend
async function sendTicketEmail(toEmail, ticketType, amount, refId) {
  try {
    console.log(`📧 Attempting to send ticket email to: ${toEmail}...`);
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
    return data;
  } catch (err) {
    console.error("❌ Resend Email Failed:", err);
  }
}

// 1. INITIATE PAYMENT ROUTE (Triggers IntaSend + Supabase + Fallback Email)
app.post("/api/buy-ticket", async (req, res) => {
  try {
    const { phone, email, amount, ticketType } = req.body;

    if (!phone || !email || !amount) {
      return res.status(400).json({ error: "Phone, email, and amount are required." });
    }

    const apiRef = `REF-${Date.now()}`;
    const cleanEmail = email.toLowerCase().trim();

    // A. Trigger IntaSend STK Push
    let intasendData = {};
    try {
      const intasendResponse = await fetch("https://payment.intasend.com/api/v1/checkout/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.INTASEND_SECRET_KEY}`,
        },
        body: JSON.stringify({
          public_key: process.env.INTASEND_PUBLIC_KEY || process.env.INTASEND_PUBLISHER_KEY,
          currency: "KES",
          email: cleanEmail,
          phone_number: phone,
          amount: Number(amount),
          api_ref: apiRef,
          method: "M-PESA",
        }),
      });

      intasendData = await intasendResponse.json();
    } catch (iErr) {
      console.warn("⚠️ IntaSend Trigger Warning:", iErr.message);
    }

    const merchantReqId = String(intasendData.id || intasendData.invoice?.invoice_id || apiRef);

    // B. Save Record to Supabase
    try {
      const { error: dbError } = await supabase.from("ticket_sales").insert([
        {
          email: cleanEmail,
          phone: phone,
          ticket_type: ticketType || "General Pass",
          amount: Number(amount),
          status: "pending",
          merchant_request_id: merchantReqId,
          api_ref: apiRef,
          payment_method: "M-PESA",
        },
      ]);

      if (dbError) console.warn("⚠️ Supabase Insert Issue:", dbError.message);
      else console.log("✅ Row created in Supabase!");
    } catch (dbErr) {
      console.warn("⚠️ Supabase Exception:", dbErr);
    }

    // C. Direct Email Trigger (Fallback so emails arrive immediately)
    await sendTicketEmail(cleanEmail, ticketType || "Live Worship Pass", amount, apiRef);

    return res.status(200).json({
      success: true,
      message: "STK Push Initiated & Email Dispatched",
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
    console.log("🔔 Callback payload received:", JSON.stringify(req.body));

    // A. Handle IntaSend Challenge
    if (req.body.challenge) {
      console.log("✅ Responding to IntaSend Challenge Handshake");
      return res.status(200).json({ challenge: req.body.challenge });
    }

    // B. Reconcile Database Entry by merchant_request_id or api_ref
    const payload = req.body;
    const invoice = payload.invoice || payload;
    const rawStatus = payload.state || payload.status || invoice.state || invoice.status || "";
    const status = String(rawStatus).toUpperCase();
    const refCode = payload.api_ref || invoice.api_ref || payload.invoice_id || invoice.invoice_id;

    if (status === "COMPLETE" || status === "SUCCESS" || status === "COMPLETED") {
      console.log(`🎉 Payment complete for reference: ${refCode}`);

      // Update Supabase ticket status using the reference code
      const { data: updatedRows, error: updateErr } = await supabase
        .from("ticket_sales")
        .update({ status: "paid" })
        .or(`merchant_request_id.eq.${refCode},api_ref.eq.${refCode}`)
        .select();

      if (updateErr) {
        console.error("❌ Supabase Update Failed:", updateErr.message);
      } else if (updatedRows && updatedRows.length > 0) {
        const row = updatedRows[0];
        console.log("✅ Supabase status updated to paid!");
        // Send email based on database record
        await sendTicketEmail(row.email, row.ticket_type, row.amount, row.api_ref);
      }
    }

    return res.status(200).json({ status: "processed" });
  } catch (err) {
    console.error("❌ Callback Error:", err);
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
