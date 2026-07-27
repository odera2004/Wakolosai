require("dotenv").config();
const express = require("express");
const axios = require("axios");
const { createClient } = require("@supabase/supabase-js");
const QRCode = require("qrcode");
const nodemailer = require("nodemailer");
const cors = require("cors");
const WebSocket = require("ws");
const IntaSend = require("intasend-node");

const app = express();
app.use(express.json());

// --- CORS CONFIGURATION ---
const allowedOrigins = [
  "https://wakolosai.vercel.app",
  process.env.FRONTEND_URL,
  "http://localhost:3000",
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// --- BASE BACKEND URL RESOLUTION ---
const BACKEND_URL =
  process.env.BACKEND_URL ||
  process.env.NGROK_URL ||
  "https://wakolosai.onrender.com";

// --- SUPABASE CLIENT ---
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  {
    auth: { persistSession: false },
    realtime: { transport: WebSocket },
  }
);

// --- INTASEND CLIENT SETUP ---
const intasend = new IntaSend(
  process.env.INTASEND_PUBLISHABLE_KEY,
  process.env.INTASEND_SECRET_KEY,
  process.env.INTASEND_IS_TEST === "true"
);

// --- HELPER: FORMAT EMAIL WITH LOCATION & VENUE DETAILS ---
async function sendTicketEmail(email, checkoutID, quantity, venue, eventDate) {
  try {
    console.log(`⏳ Generating ${quantity} QR Code(s) for ${email}...`);
    let qrCodesHtml = "";

    for (let i = 1; i <= quantity; i++) {
      const ticketIdentifier = `WAK-${checkoutID.slice(-6)}-${i}`;
      const qrDataUrl = await QRCode.toDataURL(ticketIdentifier);
      qrCodesHtml += `
        <div style="border: 2px solid #FFB800; padding: 25px; margin-bottom: 25px; text-align: center; border-radius: 16px; background: #000000; color: #ffffff;">
          <p style="color: #FFB800; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; font-weight: bold; margin-bottom: 5px;">Live Event Pass ${i} of ${quantity}</p>
          <h3 style="color: #ffffff; font-family: serif; font-style: italic; font-size: 22px; margin: 5px 0 15px 0;">Wakolosai: The Awakening</h3>
          <div style="background: white; padding: 10px; display: inline-block; border-radius: 8px;">
            <img src="${qrDataUrl}" style="width: 220px; height: 220px; display: block;" />
          </div>
          <p style="color: #9ca3af; font-family: monospace; font-size: 12px; margin-top: 15px; letter-spacing: 1px;">PASS ID: ${ticketIdentifier}</p>
        </div>`;
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    console.log(`📡 Sending email via SMTP to ${email}...`);
    const info = await transporter.sendMail({
      from: '"Wakolosai Events" <tickets@wakolosai.com>',
      to: email,
      subject: `Your Passports to Wakolosai Live 🎟️`,
      html: `
        <div style="font-family: 'Times New Roman', serif; max-width: 600px; margin: auto; padding: 40px; background-color: #000000; color: #ffffff; border: 1px solid #333333; border-radius: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #FFB800; font-style: italic; font-size: 32px; letter-spacing: 2px; margin: 0;">WAKOLOSAI</h1>
            <p style="color: #9ca3af; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; margin-top: 5px;">Payment Confirmed</p>
          </div>

          <div style="background-color: #111111; border: 1px solid #222222; padding: 20px; border-radius: 12px; margin-bottom: 30px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #d1d5db;">
              <tr>
                <td style="padding: 6px 0; color: #FFB800; font-weight: bold;">LOCATION:</td>
                <td style="padding: 6px 0; text-align: right;">${venue}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #FFB800; font-weight: bold;">DATE & TIME:</td>
                <td style="padding: 6px 0; text-align: right;">${eventDate}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #FFB800; font-weight: bold;">TOTAL PASSES:</td>
                <td style="padding: 6px 0; text-align: right;">${quantity} Ticket(s)</td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 30px;">
            ${qrCodesHtml}
          </div>

          <p style="text-align: center; font-size: 11px; color: #FFB800; margin-top: 40px; letter-spacing: 2px; text-transform: uppercase;">
            "The Lord is great, and greatly to be praised."
          </p>
        </div>`,
    });

    console.log(`📧 SUCCESS: Email delivered to ${email}. Response ID: ${info.messageId}`);
    return true;
  } catch (err) {
    console.error("❌ EMAIL SMTP ERROR:", err);
    throw err;
  }
}

// --- M-PESA DARAJA AUTH ---
const generateMpesaToken = async (req, res, next) => {
  const secret = process.env.DARAJA_CONSUMER_SECRET;
  const consumer = process.env.DARAJA_CONSUMER_KEY;
  const auth = Buffer.from(`${consumer}:${secret}`).toString("base64");
  try {
    const { data } = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      { headers: { Authorization: `Basic ${auth}` } }
    );
    req.token = data.access_token;
    next();
  } catch (err) {
    console.error("❌ M-Pesa Token Error:", err.response ? err.response.data : err.message);
    res.status(400).json({ error: "M-Pesa Auth Failed" });
  }
};

// --- ROUTE 1: BUY TICKET (M-PESA STK) ---
app.post("/api/buy-ticket", generateMpesaToken, async (req, res) => {
  let { phone, email, amount } = req.body;

  phone = phone.replace(/\D/g, "");
  if (phone.startsWith("0")) phone = "254" + phone.slice(1);
  else if (phone.length === 9) phone = "254" + phone;

  let qtyRequested = amount === 1 ? 1 : amount >= 2000 ? Math.floor(amount / 2000) : Math.floor(amount / 1500);

  if (qtyRequested < 1) return res.status(400).json({ error: "Amount too low." });
  if (qtyRequested > 3) return res.status(400).json({ error: "Max 3 tickets allowed per number." });

  try {
    const timestamp = new Date().toISOString().replace(/[-:T.Z]/g, "").slice(0, 14);
    const password = Buffer.from("174379" + process.env.DARAJA_PASSKEY + timestamp).toString("base64");
    
    // UPDATED: Dynamic Live Callback URL
    const callbackUrl = `${BACKEND_URL.replace(/\/$/, "")}/api/callback`;

    console.log(`📡 Initiating Ticket STK Push for ${phone}. Callback URL: ${callbackUrl}`);

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: 174379,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: 174379,
        PhoneNumber: phone,
        CallBackURL: callbackUrl,
        AccountReference: "Wakolosai Ticket",
        TransactionDesc: `Wakolosai Event Ticket Purchase`,
      },
      { headers: { Authorization: `Bearer ${req.token}` } }
    );

    const { error: dbError } = await supabase.from("tickets").insert([
      {
        email,
        phone,
        checkout_id: response.data.CheckoutRequestID,
        merchant_request_id: response.data.MerchantRequestID,
        amount_paid: amount,
        payment_method: "mpesa_stk",
        status: "pending",
        quantity: qtyRequested,
      },
    ]);

    if (dbError) {
      console.error("❌ SUPABASE TICKET INSERT ERROR:", dbError);
    } else {
      console.log(`✅ Saved pending ticket in DB for checkoutID: ${response.data.CheckoutRequestID}`);
    }

    res.status(200).json({ message: "STK Sent", checkoutID: response.data.CheckoutRequestID });
  } catch (err) {
    console.error("❌ Ticket STK Error:", err.response ? err.response.data : err.message);
    res.status(500).json({ error: "Ticket STK Push Failed" });
  }
});

// --- ROUTE 2: BUY MERCH (M-PESA STK) ---
app.post("/api/buy-merch", generateMpesaToken, async (req, res) => {
  let { fullName, phone, email, amount, cart } = req.body;

  if (!phone || !amount || !cart || cart.length === 0) {
    return res.status(400).json({ error: "Missing required merch order details." });
  }

  phone = phone.replace(/\D/g, "");
  if (phone.startsWith("0")) phone = "254" + phone.slice(1);
  else if (phone.length === 9) phone = "254" + phone;

  try {
    const timestamp = new Date().toISOString().replace(/[-:T.Z]/g, "").slice(0, 14);
    const password = Buffer.from("174379" + process.env.DARAJA_PASSKEY + timestamp).toString("base64");
    
    // UPDATED: Dynamic Live Callback URL
    const callbackUrl = `${BACKEND_URL.replace(/\/$/, "")}/api/callback`;

    console.log(`📡 Initiating Merch STK Push of KES ${amount} for ${phone}...`);

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: 174379,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: 174379,
        PhoneNumber: phone,
        CallBackURL: callbackUrl,
        AccountReference: "Wakolosai Merch",
        TransactionDesc: `Wakolosai Merch Store Purchase`,
      },
      { headers: { Authorization: `Bearer ${req.token}` } }
    );

    const { error: dbError } = await supabase.from("merch_orders").insert([
      {
        checkout_id: response.data.CheckoutRequestID,
        full_name: fullName || "Wakolosai Supporter",
        phone,
        email: email || null,
        total_amount: amount,
        items: cart,
        payment_method: "mpesa_stk",
        status: "pending",
      },
    ]);

    if (dbError) {
      console.error("❌ SUPABASE MERCH INSERT ERROR:", dbError);
    } else {
      console.log(`✅ Saved pending merch order in DB for checkoutID: ${response.data.CheckoutRequestID}`);
    }

    res.status(200).json({ message: "STK Push Sent", checkoutID: response.data.CheckoutRequestID });
  } catch (err) {
    console.error("❌ Merch STK Error:", err.response ? err.response.data : err.message);
    res.status(500).json({ error: "Merch STK Push Failed" });
  }
});

// --- ROUTE 3: INTASEND TILL PAYMENT / M-PESA PUSH ---
app.post("/api/intasend/pay-till", async (req, res) => {
  let { phone, email, amount, till_number } = req.body;

  try {
    const collection = intasend.collection();
    const response = await collection.mpesaStkPush({
      first_name: "Wakolosai",
      last_name: "Supporter",
      email: email,
      host: process.env.FRONTEND_URL || "https://wakolosai.vercel.app",
      amount: amount,
      phone_number: phone,
      api_ref: `TILL-${till_number || "WAKOLOSAI"}`,
    });

    await supabase.from("tickets").insert([
      {
        email,
        phone,
        checkout_id: response.invoice.invoice_id,
        amount_paid: amount,
        payment_method: "intasend_till",
        status: "pending",
        quantity: 1,
      },
    ]);

    res.status(200).json({ message: "IntaSend STK Push Triggered", invoice: response.invoice });
  } catch (err) {
    console.error("❌ IntaSend Payment Error:", err);
    res.status(500).json({ error: "IntaSend Payment Trigger Failed" });
  }
});

// --- ROUTE 4: SAFARICOM DARAJA CALLBACK (HANDLES BOTH TICKETS & MERCH) ---
app.post("/api/callback", async (req, res) => {
  console.log("🔔 INCOMING CALLBACK RECEIVED FROM SAFARICOM!");

  try {
    const callbackData = req.body.Body.stkCallback;
    const checkoutID = callbackData.CheckoutRequestID;
    const resultCode = callbackData.ResultCode;

    console.log(`CheckoutID: ${checkoutID} | ResultCode: ${resultCode} (${callbackData.ResultDesc})`);

    if (resultCode === 0) {
      // 1. Check if checkoutID belongs to a TICKET
      const { data: ticket } = await supabase
        .from("tickets")
        .select("email, quantity")
        .eq("checkout_id", checkoutID)
        .maybeSingle();

      if (ticket) {
        console.log(`🎉 Ticket Payment Verified! Updating ticket status and triggering email...`);
        await supabase.from("tickets").update({ status: "paid", updated_at: new Date() }).eq("checkout_id", checkoutID);
        await supabase.rpc("increment_tickets_sold", { event_row_id: 1, qty: ticket.quantity });

        const { data: eventData } = await supabase.from("events").select("venue, event_date").eq("id", 1).single();

        const venue = eventData?.venue || "Dome Arena / Carnivore Grounds, Nairobi";
        const eventDate = eventData?.event_date
          ? new Date(eventData.event_date).toLocaleString("en-KE", { dateStyle: "full", timeStyle: "short" })
          : "November 28, 2026 at 4:00 PM";

        await sendTicketEmail(ticket.email, checkoutID, ticket.quantity, venue, eventDate);
        return res.status(200).send("OK");
      }

      // 2. Check if checkoutID belongs to MERCH
      const { data: merchOrder } = await supabase
        .from("merch_orders")
        .select("*")
        .eq("checkout_id", checkoutID)
        .maybeSingle();

      if (merchOrder) {
        await supabase.from("merch_orders").update({ status: "paid" }).eq("checkout_id", checkoutID);
        console.log(`🎉 Merch Payment Verified! Order ID: ${merchOrder.id} marked as paid.`);
        return res.status(200).send("OK");
      }

      console.error(`⚠️ No ticket or merch record found for checkoutID: ${checkoutID}`);
    } else {
      console.log(`❌ Payment failed or cancelled by user for CheckoutID: ${checkoutID}`);
      await supabase.from("tickets").update({ status: "failed", updated_at: new Date() }).eq("checkout_id", checkoutID);
      await supabase.from("merch_orders").update({ status: "failed" }).eq("checkout_id", checkoutID);
    }
  } catch (err) {
    console.error("❌ ERROR PROCESSING CALLBACK:", err.message);
  }

  res.status(200).send("OK");
});

// --- ROUTE 5: INTASEND WEBHOOK CALLBACK ---
app.post("/api/intasend/webhook", async (req, res) => {
  console.log("🔔 INCOMING INTASEND WEBHOOK RECEIVED!");
  const { invoice_id, state } = req.body;

  if (state === "COMPLETE") {
    const { data: ticket } = await supabase.from("tickets").select("*").eq("checkout_id", invoice_id).single();

    if (ticket) {
      await supabase.from("tickets").update({ status: "paid" }).eq("checkout_id", invoice_id);
      await supabase.rpc("increment_tickets_sold", { event_row_id: 1, qty: ticket.quantity });

      await sendTicketEmail(
        ticket.email,
        invoice_id,
        ticket.quantity,
        "Dome Arena / Carnivore Grounds, Nairobi",
        "Saturday, Nov 28, 2026"
      );
    }
  }
  res.status(200).json({ status: "Webhook received" });
});

// --- ROUTE 6: DIRECT EMAIL TEST ---
app.get("/api/test-email", async (req, res) => {
  const targetEmail = req.query.email || process.env.EMAIL_USER;
  console.log(`🧪 Testing email dispatch to: ${targetEmail}`);
  try {
    await sendTicketEmail(
      targetEmail,
      "TEST-CHECKOUT-9999",
      1,
      "Dome Arena / Carnivore Grounds, Nairobi",
      "Saturday, Nov 28, 2026 at 4:00 PM"
    );
    res.status(200).send(`✅ Test email successfully sent to ${targetEmail}`);
  } catch (err) {
    res.status(500).json({ error: "Email Test Failed", details: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Wakolosai Engine V4 Online on Port ${PORT}`));