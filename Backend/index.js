import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Guard: Verify keys on server boot
const requiredKeys = [
  "SUPABASE_URL",
  "SUPABASE_ANON_KEY",
  "INTASEND_SECRET_KEY",
  "RESEND_API_KEY",
];

const missingKeys = requiredKeys.filter((key) => !process.env[key]);
if (missingKeys.length > 0) {
  console.error(`❌ CRITICAL: Missing Render Environment Keys: ${missingKeys.join(", ")}`);
}

// Initialize Supabase & Resend
const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || ""
);

const resend = new Resend((process.env.RESEND_API_KEY || "").trim());

// Host selection based on test/live mode
const isTestMode = process.env.INTASEND_TEST_MODE === "true";
const INTASEND_BASE_URL = isTestMode
  ? "https://sandbox.intasend.com/api/v1"
  : "https://payment.intasend.com/api/v1";

// Helper: Format Phone Numbers to standard Kenya 254 Format
function formatPhoneNumber(phone) {
  if (!phone) return "";
  let cleaned = String(phone).trim().replace(/\D/g, "");
  if (cleaned.startsWith("0")) {
    return "254" + cleaned.substring(1);
  } else if (cleaned.startsWith("7") || cleaned.startsWith("1")) {
    return "254" + cleaned;
  }
  return cleaned;
}

// Helper: Send Pass Email via Resend
async function sendTicketEmail(toEmail, ticketType, amount, refId) {
  try {
    console.log(`📧 Attempting to send ticket email to: ${toEmail}...`);
    const { data, error } = await resend.emails.send({
      from: "Wakoloo <tickets@wakolosai.xyz>",
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

    if (error) {
      console.error("❌ Resend API Error:", error);
      return false;
    }

    console.log("✅ Resend Email Sent Successfully:", data);
    return true;
  } catch (err) {
    console.error("❌ Resend Email Exception:", err);
    return false;
  }
}

// 1. INITIATE DIRECT M-PESA STK PUSH
app.post("/api/buy-ticket", async (req, res) => {
  try {
    const { phone, email, amount, ticketType } = req.body;

    if (!phone || !email || !amount) {
      return res.status(400).json({ error: "Phone, email, and amount are required." });
    }

    console.log("📥 BUY TICKET REQUEST:", req.body);

    const formattedPhone = formatPhoneNumber(phone);
    const apiRef = `WAKOLOSAI-${Date.now()}`;
    const cleanEmail = email.toLowerCase().trim();

    // Step A: Pre-insert ticket in Supabase with "pending" status
    const { error: dbError } = await supabase.from("ticket_sales").insert([
      {
        email: cleanEmail,
        phone: formattedPhone,
        ticket_type: ticketType || "General Pass",
        amount: Number(amount),
        status: "pending",
        merchant_request_id: apiRef,
        api_ref: apiRef,
        payment_method: "M-PESA",
      },
    ]);

    if (dbError) {
      console.error("❌ Supabase Insert Error:", dbError);
      return res.status(500).json({ error: "Failed to create pending ticket record." });
    }

    console.log("✅ Pending ticket pre-inserted into Supabase with api_ref:", apiRef);

    // Step B: Direct Call to M-Pesa STK Push Endpoint
    const stkEndpoint = `${INTASEND_BASE_URL}/payment/mpesa-stk-push/`;
    const rawSecretKey = process.env.INTASEND_SECRET_KEY || "";
    const cleanSecretKey = rawSecretKey.trim().replace(/^["']|["']$/g, ""); // Strip any trailing spaces or quotes

    console.log(`📡 Sending STK Push to phone: ${formattedPhone} via ${stkEndpoint}`);

    let intasendResponse;
    let intasendData = {};

    try {
      intasendResponse = await fetch(stkEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cleanSecretKey}`,
        },
        body: JSON.stringify({
          currency: "KES",
          email: cleanEmail,
          phone_number: formattedPhone,
          amount: Number(amount),
          api_ref: apiRef,
        }),
      });

      intasendData = await intasendResponse.json();
    } catch (iErr) {
      console.error("❌ IntaSend Network Error:", iErr.message);
      await supabase.from("ticket_sales").delete().eq("api_ref", apiRef);
      return res.status(502).json({ error: "Failed to reach payment gateway." });
    }

    if (!intasendResponse.ok) {
      console.error("❌ IntaSend STK Push Failed:", JSON.stringify(intasendData, null, 2));
      await supabase.from("ticket_sales").delete().eq("api_ref", apiRef);
      return res.status(500).json({
        error: "Failed to send M-Pesa prompt.",
        details: intasendData,
      });
    }

    console.log("🟢 IntaSend STK Prompt Sent Successfully:", intasendData);

    const invoiceId = String(
      intasendData.invoice?.invoice_id || intasendData.id || apiRef
    );

    if (invoiceId !== apiRef) {
      await supabase
        .from("ticket_sales")
        .update({ merchant_request_id: invoiceId })
        .eq("api_ref", apiRef);
    }

    return res.status(200).json({
      success: true,
      message: "M-Pesa prompt sent to phone. Enter PIN to complete.",
      merchant_request_id: invoiceId,
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
    console.log("🔔 Callback payload received:", JSON.stringify(req.body, null, 2));

    // A. Challenge Handshake Verification
    if (
      req.body.challenge &&
      !req.body.state &&
      !req.body.status &&
      !req.body.invoice_id &&
      !req.body.api_ref
    ) {
      console.log("✅ Responding to IntaSend Challenge Handshake");
      return res.status(200).json({ challenge: req.body.challenge });
    }

    // B. Reconcile Payment Status
    const payload = req.body;
    const invoice = payload.invoice || payload;
    const rawStatus = payload.state || payload.status || invoice.state || invoice.status || "";
    const status = String(rawStatus).toUpperCase();
    const targetApiRef = payload.api_ref || invoice.api_ref;

    if (!targetApiRef) {
      console.error("❌ Callback missing api_ref identification");
      return res.status(400).json({ error: "Missing api_ref in payload" });
    }

    if (["COMPLETE", "SUCCESS", "COMPLETED"].includes(status)) {
      console.log(`🎉 Payment complete for reference: ${targetApiRef}`);

      const { data: sale, error: fetchError } = await supabase
        .from("ticket_sales")
        .select("*")
        .eq("api_ref", targetApiRef)
        .single();

      if (fetchError || !sale) {
        console.error("❌ Ticket not found for api_ref:", targetApiRef);
        return res.status(404).json({ error: "Ticket not found" });
      }

      // Avoid sending duplicate emails on repeated webhooks
      if (sale.status === "paid") {
        console.log("ℹ️ Ticket already processed and marked as paid.");
        return res.status(200).json({ status: "already_processed" });
      }

      const invoiceId = payload.invoice_id || invoice.invoice_id || sale.merchant_request_id;
      const { error: updateError } = await supabase
        .from("ticket_sales")
        .update({
          status: "paid",
          merchant_request_id: invoiceId,
        })
        .eq("api_ref", targetApiRef);

      if (updateError) {
        console.error("❌ Supabase Update Error:", updateError);
        return res.status(500).json({ error: "Database update failed" });
      }

      console.log("✅ Ticket status updated to paid in Supabase");

      const emailSent = await sendTicketEmail(
        sale.email,
        sale.ticket_type,
        sale.amount,
        sale.api_ref
      );

      return res.status(200).json({
        status: "processed",
        email_sent: emailSent,
      });
    }

    console.log(`ℹ️ Unhandled status state: ${status}`);
    return res.status(200).json({ status: "ignored_state" });
  } catch (err) {
    console.error("❌ Callback Error:", err);
    return res.status(500).json({ error: "Callback Processing Failed" });
  }
});

// 3. FETCH TICKET TIERS
app.get("/api/ticket-tiers", async (req, res) => {
  try {
    const { data, error } = await supabase.from("ticket_tiers").select("*");
    if (error) {
      console.error("❌ Supabase Fetch Error:", error);
      return res.status(500).json({ error: error.message });
    }
    return res.json(data || []);
  } catch (err) {
    console.error("❌ Ticket Tiers Route Error:", err);
    return res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
