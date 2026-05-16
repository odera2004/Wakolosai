require("dotenv").config();
const express = require("express");
const axios = require("axios");
const { createClient } = require("@supabase/supabase-js");
const QRCode = require('qrcode');
const nodemailer = require('nodemailer');
const cors = require('cors'); 
const WebSocket = require("ws");

const app = express();
app.use(express.json());
app.use(cors());

const supabase = createClient(
  process.env.SUPABASE_URL, 
  process.env.SUPABASE_KEY,
  {
    auth: { persistSession: false },
    realtime: { transport: WebSocket },
  }
);

// --- HELPER: GENERATE MULTIPLE TICKETS & EMAIL ---
async function sendTickets(email, checkoutID, quantity) {
  try {
    let qrCodesHtml = "";
    
    for (let i = 1; i <= quantity; i++) {
      const ticketIdentifier = `${checkoutID}-${i}`;
      const qrDataUrl = await QRCode.toDataURL(ticketIdentifier);
      qrCodesHtml += `
        <div style="border: 2px solid #8c6239; padding: 20px; margin-bottom: 20px; text-align: center; border-radius: 15px; background: white;">
          <h3 style="color: #0f172a; font-family: serif; margin-bottom: 10px;">Wakolosai Entry Pass ${i} of ${quantity}</h3>
          <img src="${qrDataUrl}" style="width: 250px;" />
          <p style="color: #8c6239; font-family: monospace; margin-top: 10px;">ID: ${ticketIdentifier}</p>
        </div>`;
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, 
      auth: { 
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS 
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    
    await transporter.sendMail({
      from: '"Wakolosai Events" <tickets@wakolosai.com>',
      to: email,
      subject: `Your Awakening Tickets are Here! 🎟️`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 40px; background-color: #fafaf0; color: #0f172a;">
          <h1 style="text-align: center; font-style: italic;">Payment Confirmed</h1>
          <p style="text-align: center; color: #4b5563;">Your sacrifice has been received. Present these codes at the sanctuary entrance.</p>
          <div style="margin-top: 30px;">
            ${qrCodesHtml}
          </div>
          <p style="text-align: center; font-size: 11px; color: #8c6239; margin-top: 40px; letter-spacing: 2px; text-transform: uppercase;">
            "The Lord is great, and greatly to be praised."
          </p>
        </div>`
    });
    console.log(`📧 SUCCESS: Email delivered to ${email}`);
  } catch (err) {
    console.error("❌ EMAIL ERROR:", err.message);
  }
}

// --- M-PESA AUTH ---
const generateToken = async (req, res, next) => {
  const secret = process.env.DARAJA_CONSUMER_SECRET;
  const consumer = process.env.DARAJA_CONSUMER_KEY;
  const auth = Buffer.from(`${consumer}:${secret}`).toString("base64");
  try {
    const { data } = await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
      headers: { Authorization: `Basic ${auth}` }
    });
    req.token = data.access_token;
    next();
  } catch (err) { res.status(400).json({ error: "M-Pesa Auth Failed" }); }
};

// --- ROUTE: BUY TICKET ---
app.post("/api/buy-ticket", generateToken, async (req, res) => {
  let { phone, email, amount } = req.body;

  phone = phone.replace(/\D/g, ""); 
  if (phone.startsWith("0")) phone = "254" + phone.slice(1);
  else if (phone.length === 9) phone = "254" + phone;

  let qtyRequested = (amount === 1) ? 1 : (amount >= 2000 ? Math.floor(amount / 2000) : Math.floor(amount / 1500));

  if (qtyRequested < 1) return res.status(400).json({ error: "Amount too low." });
  if (qtyRequested > 3) return res.status(400).json({ error: "Max 3 tickets." });

  try {
    const { data: existing } = await supabase.from("tickets").select("quantity").eq("phone", phone).eq("status", "paid");
    const totalOwned = existing?.reduce((sum, row) => sum + (row.quantity || 0), 0) || 0;

    if (totalOwned + qtyRequested > 3) {
      return res.status(400).json({ error: "Limit Reached", message: `You already have ${totalOwned} tickets.` });
    }

    const timestamp = new Date().toISOString().replace(/[-:T.Z]/g, "").slice(0, 14);
    const password = Buffer.from("174379" + process.env.DARAJA_PASSKEY + timestamp).toString("base64");

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
        CallBackURL: `${process.env.NGROK_URL}/api/callback`,
        AccountReference: "Wakolosai",
        TransactionDesc: `Wakolosai Purchase`
      },
      { headers: { Authorization: `Bearer ${req.token}` } }
    );

    await supabase.from("tickets").insert([{ 
        email, phone, checkout_id: response.data.CheckoutRequestID, status: "pending", quantity: qtyRequested 
    }]);

    console.log(`🚀 STK Push Sent to ${phone} for ${qtyRequested} ticket(s)`);
    res.status(200).json({ message: "STK Sent", checkoutID: response.data.CheckoutRequestID });

  } catch (err) {
    console.error("❌ STK Error:", err.response ? err.response.data : err.message);
    res.status(500).json({ error: "STK Push Failed" });
  }
});

// --- ROUTE: CALLBACK ---
app.post("/api/callback", async (req, res) => {
  console.log("📍 INCOMING CALLBACK FROM SAFARICOM...");
  const callbackData = req.body.Body.stkCallback;
  const checkoutID = callbackData.CheckoutRequestID;
  const resultCode = callbackData.ResultCode;

  console.log(`CheckoutID: ${checkoutID} | Result: ${resultCode}`);

  if (resultCode === 0) {
    console.log("✅ Payment Verified. Processing Supabase update...");
    
    const { data: ticket, error: fetchError } = await supabase
        .from("tickets")
        .select("email, quantity")
        .eq("checkout_id", checkoutID)
        .single();

    if (ticket) {
        // 1. Update status
        await supabase.from("tickets").update({ status: "paid" }).eq("checkout_id", checkoutID);
        
        // 2. Increment global counter
        await supabase.rpc('increment_tickets_sold', { 
            event_row_id: 1, 
            qty: ticket.quantity 
        });

        console.log(`🎉 DB Updated. Sending ${ticket.quantity} ticket(s) to ${ticket.email}...`);

        // 3. Send the Email
        await sendTickets(ticket.email, checkoutID, ticket.quantity);
    } else {
        console.error("⚠️ Ticket record not found in DB for CheckoutID:", checkoutID);
    }
  } else {
    console.log("❌ Payment Failed/Cancelled by User.");
    await supabase.from("tickets").update({ status: "failed" }).eq("checkout_id", checkoutID);
  }
  res.status(200).send("OK");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Wakolosai Engine V3 Online on Port ${PORT}`));