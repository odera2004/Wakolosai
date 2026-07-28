require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const { Resend } = require("resend");
const QRCode = require("qrcode");
const IntaSend = require("intasend-node");

const app = express();
app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));
app.use(express.json());

// Guard: Early environment variable check
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.error("❌ CRITICAL ERROR: SUPABASE_URL or SUPABASE_ANON_KEY is missing!");
  process.exit(1);
}

// Initialize Services
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

const intasend = new IntaSend(
  process.env.INTASEND_PUBLISHABLE_KEY,
  process.env.INTASEND_SECRET_KEY,
  process.env.INTASEND_TEST_MODE === "true"
);

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

// Helper: Generate QR Code
const generateQRCode = async (text) => {
  try {
    return await QRCode.toDataURL(text);
  } catch (err) {
    console.error("❌ QR Code generation failed:", err);
    throw err;
  }
};

// Helper: Send Ticket/Receipt Email via Resend
const sendTicketEmail = async (email, ticketDetails) => {
  try {
    console.log(`⏳ Generating QR Code for ${email}...`);
    const qrCodeUrl = await generateQRCode(ticketDetails.ticketId);
    const senderEmail = process.env.RESEND_FROM_EMAIL || "Wakolosai Events <onboarding@resend.dev>";

    console.log(`📡 Sending email via Resend API to ${email}...`);
    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [email],
      subject: `Your Wakolosai Confirmation [${ticketDetails.ticketId}]`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2>🎟️ Payment Confirmed! Thank you for your Wakolosai order.</h2>
          <p><strong>Order/Ticket ID:</strong> ${ticketDetails.ticketId}</p>
          <p><strong>Item/Type:</strong> ${ticketDetails.ticketType || "Wakolosai Item"}</p>
          <p><strong>Amount Paid:</strong> KES ${ticketDetails.amount}</p>
          <hr />
          <p>Present or save this QR code for verification:</p>
          <img src="${qrCodeUrl}" alt="Order QR Code" style="width: 200px; height: 200px;" />
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

// 1. Generic Handler for STK Push (Tickets & Merchandise)
const handlePaymentInitiation = async (req, res) => {
  const { phone, email, amount, ticketType, fullName, name } = req.body;
  const customerName = fullName || name || "Customer";

  if (!phone || !amount) {
    return res.status(400).json({ error: "Missing required fields: phone, amount" });
  }

  const formattedPhone = formatPhoneNumber(phone);
  console.log(`📡 Initiating IntaSend STK Push for ${formattedPhone}...`);

  try {
    let collection = intasend.collection();
    const apiRef = `WAKOLOSAI-${Date.now()}`;
    
    const response = await collection.mpesaStkPush({
      first_name: customerName,
      last_name: "User",
      email: email || "customer@wakolosai.app",
      amount: Number(amount),
      phone_number: formattedPhone,
      api_ref: apiRef,
    });

    console.log("📲 IntaSend Response:", JSON.stringify(response, null, 2));

    const checkoutID = response.invoice?.invoice_id || response.id || apiRef;

    // Save initial record as 'pending' in Supabase DB
    const { data: ticket, error: dbError } = await supabase
      .from("tickets")
      .insert([
        {
          checkout_id: checkoutID,
          email: email || "customer@wakolosai.app",
          phone: formattedPhone,
          amount,
          ticket_type: ticketType || "Merchandise Order",
          status: "pending",
        },
      ])
      .select()
      .single();

    if (dbError) throw dbError;

    console.log(`✅ Saved pending order in DB for checkoutID: ${checkoutID}`);
    res.json({ success: true, checkoutID, message: "STK push sent to your phone" });
  } catch (err) {
    console.error("❌ IntaSend STK Push Error:", err.message || err);
    res.status(500).json({ error: err.message || "Payment initiation failed" });
  }
};

// Endpoints
app.post("/api/buy-ticket", handlePaymentInitiation);
app.post("/api/buy-merch", handlePaymentInitiation);

// 2. IntaSend Webhook / Callback Endpoint
app.post("/api/callback", async (req, res) => {
  console.log("🔔 INCOMING CALLBACK RECEIVED FROM INTASEND!");
  console.log("Payload:", JSON.stringify(req.body, null, 2));

  try {
    const { invoice_id, state, api_ref, challenge } = req.body;

    if (challenge && !state) {
      return res.json({ challenge });
    }

    if (state === "COMPLETE" || state === "SUCCESS") {
      const searchRef = invoice_id || api_ref;
      console.log(`🎉 IntaSend Payment Verified for Ref/Invoice: ${searchRef}`);

      // Search Supabase using OR condition for checkout_id or api_ref
      const { data: ticket, error: updateError } = await supabase
        .from("tickets")
        .update({ status: "paid" })
        .or(`checkout_id.eq.${invoice_id},checkout_id.eq.${api_ref}`)
        .select()
        .single();

      if (updateError || !ticket) {
        console.error("❌ DB update failed or order not found:", updateError);
        return res.status(200).json({ status: "ACK", warning: "Record not matched yet" });
      }

      console.log(`🎟️ Match found for email: ${ticket.email}. Dispatching Resend email...`);

      // Dispatch Confirmation Email via Resend
      if (ticket.email && ticket.email !== "customer@wakolosai.app") {
        await sendTicketEmail(ticket.email, {
          ticketId: ticket.id,
          amount: ticket.amount,
          ticketType: ticket.ticket_type
        });
      }

      console.log(`✨ Order successfully processed for ${ticket.email}`);
    } else {
      console.warn(`⚠️ IntaSend state is '${state}'. Waiting for COMPLETE state...`);
    }

    res.status(200).json({ status: "ACK" });
  } catch (err) {
    console.error("❌ Callback Processing Error:", err.message);
    res.status(500).json({ error: "Callback processing failed" });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
