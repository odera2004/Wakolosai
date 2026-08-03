require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const { Resend } = require("resend");
const QRCode = require("qrcode");
const IntaSend = require("intasend-node");

const app = express();
app.use(cors());
app.use(express.json());

// Guard: Check missing required environment variables
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.error("❌ CRITICAL ERROR: SUPABASE_URL or SUPABASE_ANON_KEY is missing!");
  process.exit(1);
}

// Initialize Supabase, Resend & IntaSend SDK
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

const intasend = new IntaSend(
  process.env.INTASEND_PUBLISHABLE_KEY,
  process.env.INTASEND_SECRET_KEY,
  process.env.INTASEND_TEST_MODE === "true" // Set to false in live production
);

// Base URLs
const BASE_URL = process.env.BACKEND_URL || (process.env.RENDER_EXTERNAL_HOSTNAME ? `https://${process.env.RENDER_EXTERNAL_HOSTNAME}` : "https://wakolosai.onrender.com");
const FRONTEND_URL = process.env.FRONTEND_URL || "https://wakolosai.xyz";

// Helper: Format Phone Numbers strictly to 254XXXXXXXXX (Prevents "Customer does not exist" Safaricom error)
const formatPhoneNumber = (phone) => {
  if (!phone) return "";
  let cleaned = phone.toString().trim().replace(/\D/g, "");
  if (cleaned.startsWith("0")) {
    return "254" + cleaned.substring(1);
  } else if (cleaned.startsWith("7") || cleaned.startsWith("1")) {
    return "254" + cleaned;
  } else if (cleaned.startsWith("254")) {
    return cleaned;
  }
  return cleaned;
};

// Helper: Generate QR Code Data URL
const generateQRCode = async (text) => {
  try {
    return await QRCode.toDataURL(text);
  } catch (err) {
    console.error("❌ QR Code generation failed:", err);
    throw err;
  }
};

// Helper: Send Ticket Email via Resend API
const sendTicketEmail = async (email, ticketDetails) => {
  try {
    console.log(`⏳ Generating QR Code for ${email}...`);
    const qrCodeUrl = await generateQRCode(ticketDetails.ticketId);
    const senderEmail = process.env.RESEND_FROM_EMAIL || "Wakolosai Events <onboarding@resend.dev>";

    console.log(`📡 Sending email via Resend API to ${email}...`);
    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [email],
      subject: `Your Wakolosai Ticket [${ticketDetails.ticketId}]`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2>🎟️ Payment Confirmed! Here is your ticket for Wakolosai.</h2>
          <p><strong>Ticket ID:</strong> ${ticketDetails.ticketId}</p>
          <p><strong>Event:</strong> Wakolosai Live</p>
          <p><strong>Amount Paid:</strong> KES ${ticketDetails.amount}</p>
          <hr />
          <p>Present this QR code at the entrance:</p>
          <img src="${qrCodeUrl}" alt="Ticket QR Code" style="width: 200px; height: 200px;" />
          <hr />
          <p style="font-size: 12px; color: #777;">Sent via Wakolosai Platform</p>
        </div>
      `,
    });

    if (error) {
      console.error("❌ RESEND DELIVERY ERROR:", error);
      throw error;
    }

    console.log(`📧 SUCCESS: Email delivered to ${email}. Response ID: ${data?.id}`);
    return data;
  } catch (err) {
    console.error("❌ Email dispatch failed:", err.message);
    throw err;
  }
};

// 1. Direct Email Test Endpoint
app.post("/api/test-email", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    console.log(`🧪 Testing email dispatch to: ${email}`);
    await sendTicketEmail(email, { ticketId: "TEST-TICKET-12345", amount: "100" });
    res.json({ message: `✅ Test email successfully sent to ${email}` });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email", details: error.message });
  }
});

// 2. Direct In-App M-Pesa STK Push Endpoint
app.post("/api/buy-ticket", async (req, res) => {
  const { phone, email, amount, ticketType } = req.body;

  if (!email || !amount || !phone) {
    return res.status(400).json({ error: "Missing required fields: phone, email, amount" });
  }

  const formattedPhone = formatPhoneNumber(phone);

  if (!formattedPhone || formattedPhone.length !== 12 || !formattedPhone.startsWith("254")) {
    return res.status(400).json({ error: "Invalid M-Pesa phone number. Use format: 0712345678 or 254712345678" });
  }

  console.log(`📡 Triggering Direct M-Pesa STK Push for ${formattedPhone} (${email})...`);

  try {
    const mpesa = intasend.mpesa();
    
    // Direct STK Push call (triggers M-Pesa popup directly on user phone)
    const response = await mpesa.stkPush({
      phone_number: formattedPhone,
      email: email,
      amount: Number(amount),
      api_ref: `WAKOLOSAI-${Date.now()}`,
      comment: ticketType || "Ticket Purchase",
    });

    console.log("📲 M-Pesa STK Push Sent:", JSON.stringify(response, null, 2));

    const checkoutID = response.invoice?.invoice_id || response.id || response.api_ref;

    // Save initial record as 'pending' in Supabase DB
    const { error: dbError } = await supabase
      .from("tickets")
      .insert([
        {
          checkout_id: checkoutID,
          email,
          phone: formattedPhone,
          amount,
          ticket_type: ticketType || "Standard",
          status: "pending",
        },
      ]);

    if (dbError) {
      console.error("⚠️ DB Insert Warning:", dbError.message);
    }

    res.json({
      success: true,
      message: "STK Push sent to phone!",
      checkoutID,
    });
  } catch (err) {
    console.error("❌ STK Push Error:", err.message || err);
    res.status(500).json({ error: err.message || "Failed to trigger M-Pesa STK Push" });
  }
});

// 3. IntaSend Webhook / Callback Endpoint
app.post("/api/callback", async (req, res) => {
  console.log("🔔 INCOMING CALLBACK RECEIVED FROM INTASEND!");
  console.log("Payload:", JSON.stringify(req.body, null, 2));

  try {
    const { invoice_id, state, api_ref, challenge, status } = req.body;

    // Support IntaSend challenge check
    if (challenge) {
      return res.json({ challenge });
    }

    const checkoutID = invoice_id || api_ref || req.body.id;
    const paymentState = state || status;

    if (paymentState === "COMPLETE" || paymentState === "SUCCESS") {
      console.log(`🎉 IntaSend Payment Verified for Checkout ID: ${checkoutID}`);

      // Search matching row by checkout_id
      const { data: ticket, error: updateError } = await supabase
        .from("tickets")
        .update({ status: "paid" })
        .eq("checkout_id", checkoutID)
        .select()
        .single();

      if (updateError || !ticket) {
        console.error("❌ Failed to update DB row:", updateError);
        return res.status(500).send("Database record not found");
      }

      // Dispatch Ticket Email with QR code
      await sendTicketEmail(ticket.email, {
        ticketId: ticket.id,
        amount: ticket.amount,
      });

      console.log(`✨ Ticket delivery complete for ${ticket.email}`);
    } else if (paymentState === "FAILED" || paymentState === "CANCELLED") {
      console.warn(`⚠️ Payment marked ${paymentState} for checkout: ${checkoutID}`);
      await supabase
        .from("tickets")
        .update({ status: "failed" })
        .eq("checkout_id", checkoutID);
    }

    res.json({ status: "ACK" });
  } catch (err) {
    console.error("❌ Callback Processing Error:", err.message);
    res.status(500).json({ error: "Callback processing failed" });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 Base URL set to: ${BASE_URL}`);
});
