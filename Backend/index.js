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

// Guard: Early environment variable check
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
  process.env.INTASEND_TEST_MODE === "true" // Set to false for production
);

// Base URL detection
const BASE_URL = process.env.BACKEND_URL || (process.env.RENDER_EXTERNAL_HOSTNAME ? `https://${process.env.RENDER_EXTERNAL_HOSTNAME}` : "https://wakolosai.onrender.com");

// Helper: Format Phone Numbers to 254XXXXXXXXX
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

// Helper: Generate QR Code Buffer (Fixes email client inline base64 blocking)
const generateQRCodeBuffer = async (text) => {
  try {
    return await QRCode.toBuffer(text, {
      type: "png",
      margin: 2,
      width: 250,
      color: {
        dark: "#000000",
        light: "#FFFFFF",
      },
    });
  } catch (err) {
    console.error("❌ QR Code generation failed:", err);
    throw err;
  }
};

// Helper: Send Ticket Email via Resend API
const sendTicketEmail = async (email, ticketDetails) => {
  try {
    console.log(`⏳ Generating QR Code attachment for ${email}...`);
    const qrBuffer = await generateQRCodeBuffer(String(ticketDetails.ticketId));

    // Uses your custom sender domain if defined, or falls back to standard dev sender
    const senderEmail = process.env.RESEND_FROM_EMAIL || "Wakolosai Events <onboarding@resend.dev>";

    console.log(`📡 Sending ticket email via Resend API to ${email}...`);

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [email],
      subject: `Your Wakolosai Ticket [${ticketDetails.ticketId}]`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #111; max-width: 500px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #d4a000; margin-top: 0; text-transform: uppercase;">🎟️ Payment Confirmed!</h2>
          <p style="font-size: 14px; color: #444;">Here is your official pass for <strong>Wakolosai Live</strong>.</p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <p style="font-size: 14px; margin: 6px 0;"><strong>Ticket ID:</strong> <code style="background: #f4f4f4; padding: 4px 8px; border-radius: 4px; font-family: monospace;">${ticketDetails.ticketId}</code></p>
          <p style="font-size: 14px; margin: 6px 0;"><strong>Type / Details:</strong> ${ticketDetails.ticketType || "Standard Pass"}</p>
          <p style="font-size: 14px; margin: 6px 0;"><strong>Amount Paid:</strong> KES ${Number(ticketDetails.amount).toLocaleString()}</p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <p style="font-size: 14px; font-weight: bold; text-align: center; margin-bottom: 12px;">Scan QR Code at Entry:</p>
          <div style="text-align: center; margin: 15px 0;">
            <img src="cid:qrcode" alt="Ticket QR Code" style="width: 200px; height: 200px; display: inline-block;" />
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 11px; color: #888; text-align: center; margin-bottom: 0;">Wakolosai Experience • Keep this email for gate entrance.</p>
        </div>
      `,
      attachments: [
        {
          filename: "qrcode.png",
          content: qrBuffer,
          content_type: "image/png",
          cid: "qrcode", // Linked directly to <img src="cid:qrcode" />
        },
      ],
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
    await sendTicketEmail(email, { ticketId: "TEST-TICKET-12345", amount: "100", ticketType: "Test Pass" });
    res.json({ message: `✅ Test email successfully sent to ${email}` });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email", details: error.message });
  }
});

// 2. IntaSend M-Pesa STK Push Payment Initiation
app.post("/api/buy-ticket", async (req, res) => {
  const { phone, email, amount, ticketType, name } = req.body;

  if (!phone || !email || !amount) {
    return res.status(400).json({ error: "Missing required fields: phone, email, amount" });
  }

  const formattedPhone = formatPhoneNumber(phone);
  console.log(`📡 Initiating IntaSend STK Push for ${formattedPhone}...`);

  try {
    let collection = intasend.collection();
    const response = await collection.mpesaStkPush({
      first_name: name || "Customer",
      last_name: "User",
      email: email,
      amount: Number(amount),
      phone_number: formattedPhone,
      api_ref: `WAKOLOSAI-${Date.now()}`,
    });

    console.log("📲 IntaSend Response:", JSON.stringify(response, null, 2));

    const checkoutID = response.invoice?.invoice_id || response.id || response.api_ref;

    // Save initial record as 'pending' in Supabase DB
    const { data: ticket, error: dbError } = await supabase
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
      ])
      .select()
      .single();

    if (dbError) throw dbError;

    console.log(`✅ Saved pending ticket in DB for checkoutID: ${checkoutID}`);
    res.json({ success: true, checkoutID, message: "STK push sent to your phone" });
  } catch (err) {
    console.error("❌ IntaSend STK Push Error:", err.message || err);
    res.status(500).json({ error: err.message || "Payment initiation failed" });
  }
});

// 3. IntaSend Webhook / Callback Endpoint (Fired when payment is complete)
app.post("/api/callback", async (req, res) => {
  console.log("🔔 INCOMING CALLBACK RECEIVED FROM INTASEND!");
  console.log("Payload:", JSON.stringify(req.body, null, 2));

  try {
    const { invoice_id, state, api_ref, challenge } = req.body;

    // Support IntaSend challenge check if applicable
    if (challenge) {
      return res.json({ challenge });
    }

    const checkoutID = invoice_id || api_ref;

    if (state === "COMPLETE" || state === "SUCCESS" || req.body.status === "COMPLETE") {
      console.log(`🎉 IntaSend Payment Verified for Checkout ID: ${checkoutID}`);

      // Search matching row by checkout_id
      const { data: ticket, error: updateError } = await supabase
        .from("tickets")
        .update({ status: "paid" })
        .eq("checkout_id", checkoutID)
        .select()
        .single();

      if (updateError || !ticket) {
        console.error("❌ Failed to update DB row or ticket not found:", updateError);
        return res.status(500).send("Database record not found");
      }

      // Dispatch Ticket Email upon successful payment
      await sendTicketEmail(ticket.email, {
        ticketId: ticket.id,
        amount: ticket.amount,
        ticketType: ticket.ticket_type,
      });

      console.log(`✨ Ticket delivery complete for ${ticket.email}`);
    } else {
      console.warn(`⚠️ Payment state: ${state} for checkout: ${checkoutID}`);
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
