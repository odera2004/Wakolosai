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

// Initialize Supabase & Resend
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ Correct IntaSend SDK Initialization
const isTestMode = process.env.INTASEND_TEST_MODE === "true";
const intasend = new IntaSend(
  process.env.INTASEND_PUBLISHABLE_KEY,
  process.env.INTASEND_SECRET_KEY,
  isTestMode
);
const mpesa = intasend.Mpesa();

// Base URLs
const BASE_URL = process.env.BACKEND_URL || (process.env.RENDER_EXTERNAL_HOSTNAME ? `https://${process.env.RENDER_EXTERNAL_HOSTNAME}` : "https://wakolosai.onrender.com");

// Helper: Format Phone Numbers strictly to 254XXXXXXXXX
const formatPhoneNumber = (phone) => {
  if (!phone) return "";
  let cleaned = phone.toString().trim().replace(/\D/g, "");
  if (cleaned.startsWith("0")) {
    return "254" + cleaned.substring(1);
  } else if (cleaned.startsWith("7") || cleaned.startsWith("1")) {
    return "254" + cleaned;
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

// Helper: Send Ticket / Purchase Email via Resend API
const sendTicketEmail = async (email, details) => {
  try {
    console.log(`⏳ Generating QR Code for ${email}...`);
    const referenceId = details.ticketId || details.orderId || "WAKOLOSAI-ORDER";
    const qrCodeUrl = await generateQRCode(String(referenceId));
    
    // Note: If using onboarding@resend.dev, Resend will ONLY deliver emails to your account email!
    const senderEmail = process.env.RESEND_FROM_EMAIL || "Wakolosai Events <onboarding@resend.dev>";

    console.log(`📡 Sending email via Resend API to ${email}...`);
    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [email],
      subject: `Your Wakolosai Confirmation [${referenceId}]`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #FFB800;">🎟️ Payment Confirmed!</h2>
          <p>Thank you for your purchase with Wakolosai.</p>
          <p><strong>Order/Ticket ID:</strong> ${referenceId}</p>
          <p><strong>Item:</strong> ${details.item || 'Wakolosai Live Ticket'}</p>
          <p><strong>Amount Paid:</strong> KES ${details.amount}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p>Present this QR code at entry or collection:</p>
          <div style="text-align: center; margin: 20px 0;">
            <img src="${qrCodeUrl}" alt="Order QR Code" style="width: 200px; height: 200px;" />
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <p style="font-size: 12px; color: #777; text-align: center;">Sent via Wakolosai Platform</p>
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

// -------------------------------------------------------------
// ROUTES
// -------------------------------------------------------------

// 1. Direct Email Test Endpoint
app.post("/api/test-email", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    console.log(`🧪 Testing email dispatch to: ${email}`);
    await sendTicketEmail(email, { ticketId: "TEST-TICKET-12345", amount: "100", item: "Test Item" });
    res.json({ message: `✅ Test email successfully sent to ${email}` });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email", details: error.message });
  }
});

// 2. Buy Ticket (M-Pesa STK Push)
app.post("/api/buy-ticket", async (req, res) => {
  const { phone, email, amount, ticketType, name } = req.body;

  if (!phone || !email || !amount) {
    return res.status(400).json({ error: "Missing required fields: phone, email, amount" });
  }

  const formattedPhone = formatPhoneNumber(phone);
  console.log(`📡 Initiating Ticket STK Push for ${formattedPhone}...`);

  try {
    const response = await mpesa.stkPush({
      phone_number: formattedPhone,
      email: email,
      amount: Number(amount),
      api_ref: `TICKET-${Date.now()}`,
      comment: ticketType || "Ticket Purchase",
    });

    console.log("📲 IntaSend Response:", JSON.stringify(response, null, 2));

    const checkoutID = response.invoice?.invoice_id || response.id || response.api_ref;

    // Save initial record in Supabase DB
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

    if (dbError) console.error("⚠️ DB Insert Warning:", dbError.message);

    console.log(`✅ Saved pending ticket in DB for checkoutID: ${checkoutID}`);
    res.json({ success: true, checkoutID, message: "STK push sent to your phone" });
  } catch (err) {
    console.error("❌ Ticket STK Push Error:", err.message || err);
    res.status(500).json({ error: err.message || "Payment initiation failed" });
  }
});

// 3. Buy Merch (M-Pesa STK Push)
app.post("/api/buy-merch", async (req, res) => {
  const { phone, email, amount, cart, fullName } = req.body;

  if (!phone || !email || !amount) {
    return res.status(400).json({ error: "Missing required fields: phone, email, amount" });
  }

  const formattedPhone = formatPhoneNumber(phone);
  console.log(`📡 Initiating Merch STK Push for ${formattedPhone}...`);

  try {
    const response = await mpesa.stkPush({
      phone_number: formattedPhone,
      email: email,
      amount: Number(amount),
      api_ref: `MERCH-${Date.now()}`,
      comment: "Wakolosai Merch Purchase",
    });

    console.log("📲 IntaSend Merch Response:", JSON.stringify(response, null, 2));

    const checkoutID = response.invoice?.invoice_id || response.id || response.api_ref;

    // Optional: Save to 'merch_orders' or fallback to 'tickets' table depending on your DB schema
    const { error: dbError } = await supabase
      .from("tickets")
      .insert([
        {
          checkout_id: checkoutID,
          email,
          phone: formattedPhone,
          amount,
          ticket_type: "Merch Order",
          status: "pending",
        },
      ]);

    if (dbError) console.error("⚠️ DB Insert Warning:", dbError.message);

    console.log(`✅ Saved pending merch order for checkoutID: ${checkoutID}`);
    res.json({ success: true, checkoutID, message: "STK push sent to your phone" });
  } catch (err) {
    console.error("❌ Merch STK Push Error:", err.message || err);
    res.status(500).json({ error: err.message || "Payment initiation failed" });
  }
});

// 4. IntaSend Webhook / Callback Endpoint
app.post("/api/callback", async (req, res) => {
  console.log("🔔 INCOMING CALLBACK RECEIVED FROM INTASEND!");
  console.log("Payload:", JSON.stringify(req.body, null, 2));

  try {
    const { invoice_id, state, api_ref, challenge, status } = req.body;

    // Handle initial webhook setup verification challenge from IntaSend
    if (challenge) {
      return res.json({ challenge });
    }

    const checkoutID = invoice_id || api_ref || req.body.id;
    const paymentState = state || status;

    if (paymentState === "COMPLETE" || paymentState === "SUCCESS") {
      console.log(`🎉 IntaSend Payment Verified for Checkout ID: ${checkoutID}`);

      // Update Database status
      const { data: ticket, error: updateError } = await supabase
        .from("tickets")
        .update({ status: "paid" })
        .eq("checkout_id", checkoutID)
        .select()
        .single();

      if (updateError || !ticket) {
        console.error("❌ DB Record Update Warning:", updateError?.message || "Record not found");
      }

      // Trigger Email Notification
      const targetEmail = ticket ? ticket.email : req.body.email;
      const targetAmount = ticket ? ticket.amount : req.body.amount;

      if (targetEmail) {
        await sendTicketEmail(targetEmail, {
          ticketId: checkoutID,
          amount: targetAmount || "Paid",
          item: ticket?.ticket_type || "Wakolosai Order",
        });
        console.log(`✨ Confirmation email sent for ${targetEmail}`);
      }
    } else {
      console.warn(`⚠️ Payment state: ${paymentState} for checkout: ${checkoutID}`);
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
