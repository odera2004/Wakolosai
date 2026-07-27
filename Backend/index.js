require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const { Resend } = require("resend");
const QRCode = require("qrcode");

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Supabase & Resend
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

// Determine standard server URL (defaults to Render's internal host variable if BACKEND_URL is missing)
const BASE_URL = process.env.BACKEND_URL || `https://${process.env.RENDER_EXTERNAL_HOSTNAME}`;

// Helper: Generate QR Code Data URL
const generateQRCode = async (text) => {
  try {
    return await QRCode.toDataURL(text);
  } catch (err) {
    console.error("❌ QR Code generation failed:", err);
    throw err;
  }
};

// Helper: Send Ticket Email via Resend HTTP API
const sendTicketEmail = async (email, ticketDetails) => {
  try {
    console.log(`⏳ Generating QR Code for ${email}...`);
    const qrCodeUrl = await generateQRCode(ticketDetails.ticketId);

    console.log(`📡 Sending email via Resend API to ${email}...`);
    const { data, error } = await resend.emails.send({
      from: "Wakolosai Events <tickets@wakolosai.xyz>",
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

// 1. Test Endpoint for Direct Email Sending
app.post("/api/test-email", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    console.log(`🧪 Testing email dispatch to: ${email}`);
    await sendTicketEmail(email, {
      ticketId: "TEST-TICKET-12345",
      amount: "100",
    });
    res.json({ message: `✅ Test email successfully sent to ${email}` });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email", details: error.message });
  }
});

// 2. STK Push Payment Initiation
app.post("/api/buy-ticket", async (req, res) => {
  const { phone, email, amount, ticketType } = req.body;

  try {
    const callbackUrl = `${BASE_URL}/api/callback`;
    console.log(`📡 Initiating Ticket STK Push for ${phone}. Callback URL: ${callbackUrl}`);

    // --- YOUR DARAJA STK PUSH CODE HERE ---
    // Make your request to Safaricom Daraja API using `callbackUrl`
    const checkoutID = "ws_CO_" + Date.now(); // Mock checkout ID for demonstration

    // Save initial status as 'pending' in Supabase
    const { data: ticket, error: dbError } = await supabase
      .from("tickets")
      .insert([
        {
          checkout_id: checkoutID,
          email,
          phone,
          amount,
          ticket_type: ticketType,
          status: "pending",
        },
      ])
      .select()
      .single();

    if (dbError) throw dbError;

    console.log(`✅ Saved pending ticket in DB for checkoutID: ${checkoutID}`);
    res.json({ success: true, checkoutID, message: "STK push initiated" });
  } catch (err) {
    console.error("❌ STK Push Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// 3. Daraja M-Pesa Callback Endpoint
app.post("/api/callback", async (req, res) => {
  console.log("🔔 INCOMING CALLBACK RECEIVED FROM SAFARICOM!");
  
  try {
    const { Body } = req.body;
    
    if (!Body || !Body.stkCallback) {
      return res.status(400).json({ error: "Invalid callback structure" });
    }

    const { CheckoutRequestID, ResultCode, ResultDesc } = Body.stkCallback;

    if (ResultCode === 0) {
      console.log(`🎉 Ticket Payment Verified for Checkout ID: ${CheckoutRequestID}`);

      // Update status to 'paid' in Supabase
      const { data: ticket, error: updateError } = await supabase
        .from("tickets")
        .update({ status: "paid" })
        .eq("checkout_id", CheckoutRequestID)
        .select()
        .single();

      if (updateError || !ticket) {
        console.error("❌ Failed to update DB row:", updateError);
        return res.status(500).send("Database error");
      }

      // Dispatch Ticket Email
      await sendTicketEmail(ticket.email, {
        ticketId: ticket.id,
        amount: ticket.amount,
      });

      console.log(`✨ Ticket process complete for ${ticket.email}`);
    } else {
      console.warn(`⚠️ Payment failed/cancelled by user: ${ResultDesc}`);
      await supabase
        .from("tickets")
        .update({ status: "failed" })
        .eq("checkout_id", CheckoutRequestID);
    }

    res.json({ ResultCode: 0, ResultDesc: "Accepted" });
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