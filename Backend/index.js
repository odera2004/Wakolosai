require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const { Resend } = require("resend");
const IntaSend = require("intasend-node");

const app = express();
app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));
app.use(express.json());

// Environment check guard
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  console.error("❌ CRITICAL ERROR: SUPABASE_URL or SUPABASE_ANON_KEY is missing!");
  process.exit(1);
}

// Initialize SDKs
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

const intasend = new IntaSend(
  process.env.INTASEND_PUBLISHABLE_KEY,
  process.env.INTASEND_SECRET_KEY,
  process.env.INTASEND_TEST_MODE === "true"
);

const BASE_URL = process.env.BACKEND_URL || (process.env.RENDER_EXTERNAL_HOSTNAME ? `https://${process.env.RENDER_EXTERNAL_HOSTNAME}` : "https://wakolosai.onrender.com");

// Format Phone Numbers to 254XXXXXXXXX
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

// Send Dark-Mode Email Receipt via Resend (Tickets, Support & Merch)
const sendReceiptEmail = async (email, details) => {
  try {
    const senderEmail = process.env.RESEND_FROM_EMAIL || "Wakolosai Events <onboarding@resend.dev>";
    console.log(`📡 Sending receipt email via Resend to ${email}...`);

    const isMerch = details.type === "merch";
    const isSupport = details.ticketType?.toLowerCase().includes("support");

    let subject = `🎟️ Ticket Confirmed: ${details.ticketType || "Wakolosai Live"} [${details.ticketId.slice(0, 8)}]`;
    if (isMerch) {
      subject = `🛍️ Merch Order Confirmed: Wakolosai Store [${details.ticketId.slice(0, 8)}]`;
    } else if (isSupport) {
      subject = `❤️ Support Received: Wakolosai Event [${details.ticketId.slice(0, 8)}]`;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { background-color: #000000; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; padding: 40px 10px; }
          .card { max-width: 520px; margin: 0 auto; background-color: #0a0a0a; border: 1px solid #222222; border-radius: 16px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
          .header { text-align: center; border-bottom: 1px solid #222222; padding-bottom: 24px; margin-bottom: 24px; }
          .brand { color: #FFB800; font-size: 22px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin: 0; }
          .sub-brand { color: #888888; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin-top: 4px; }
          .badge { display: inline-block; background-color: rgba(255, 184, 0, 0.1); color: #FFB800; border: 1px solid #FFB800; font-size: 11px; font-weight: 600; padding: 6px 16px; border-radius: 20px; margin-top: 16px; text-transform: uppercase; letter-spacing: 1px; }
          .details-box { background-color: #141414; border: 1px solid #262626; border-radius: 12px; padding: 20px; margin: 24px 0; }
          .row { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; }
          .row:last-child { margin-bottom: 0; }
          .label { color: #888888; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; }
          .value { color: #ffffff; font-weight: 600; text-align: right; }
          .code-box { background-color: #000000; border: 1px dashed #333333; padding: 14px; border-radius: 8px; text-align: center; margin-top: 20px; }
          .code-text { font-family: monospace; font-size: 14px; color: #FFB800; letter-spacing: 1px; }
          .footer { text-align: center; color: #555555; font-size: 12px; margin-top: 32px; border-top: 1px solid #1a1a1a; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h1 class="brand">WAKOLOSAI</h1>
            <p class="sub-brand">${isMerch ? "Official Apparel Vault" : "Live Worship Experience"}</p>
            <div class="badge">${isMerch ? "Order Confirmed" : isSupport ? "Support Receipt" : "Payment Verified"}</div>
          </div>

          <p style="font-size: 15px; line-height: 1.5; color: #cccccc; text-align: center;">
            ${isMerch 
              ? "Thank you for rocking Wakolosai Merch! Your order is being processed." 
              : isSupport 
                ? "Thank you for your generous contribution towards the Wakolosai awakening!" 
                : "Your access pass to Wakolosai Live has been confirmed!"}
          </p>

          <div class="details-box">
            <div class="row">
              <span class="label">Item / Description</span>
              <span class="value">${details.ticketType || "Wakolosai Purchase"}</span>
            </div>
            <div class="row">
              <span class="label">Amount Paid</span>
              <span class="value" style="color: #FFB800;">KES ${Number(details.amount).toLocaleString()}</span>
            </div>
            <div class="row">
              <span class="label">Status</span>
              <span class="value" style="color: #4ADE80;">PAID & CONFIRMED</span>
            </div>
          </div>

          <div class="code-box">
            <div style="font-size: 10px; color: #777777; text-transform: uppercase; margin-bottom: 4px;">Reference ID</div>
            <div class="code-text">${details.ticketId}</div>
          </div>

          <div class="footer">
            <p style="margin: 0;">Saturday, November 28, 2026 &bull; ICC Nairobi Frontrunners</p>
            <p style="margin: 6px 0 0 0;">&copy; 2026 Wakolosai. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [email],
      subject,
      html: htmlContent,
    });

    if (error) {
      console.error("❌ RESEND ERROR:", error);
      throw error;
    }

    console.log(`📧 SUCCESS: Email delivered to ${email}. ID: ${data?.id}`);
    return data;
  } catch (err) {
    console.error("❌ Email dispatch failed:", err.message);
    throw err;
  }
};

// GET: Fetch live capacity and pricing for ticket tiers
app.get("/api/ticket-tiers", async (req, res) => {
  try {
    const { data: tiers, error } = await supabase.from("ticket_tiers").select("*");
    if (error) throw error;
    res.json(tiers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tier data" });
  }
});

// POST: Initiate Ticket Payment
app.post("/api/buy-ticket", async (req, res) => {
  const { phone, email, amount, ticketType, name, tierBreakdown, isSupport } = req.body;

  if (!phone || !email || !amount || Number(amount) <= 0) {
    return res.status(400).json({ error: "Missing or invalid fields: phone, email, and amount" });
  }

  // Early Bird Capacity Check
  if (!isSupport && tierBreakdown && tierBreakdown["early-bird"] > 0) {
    const { data: ebTier } = await supabase
      .from("ticket_tiers")
      .select("*")
      .eq("id", "early-bird")
      .single();

    if (ebTier && ebTier.tickets_sold + tierBreakdown["early-bird"] > ebTier.total_capacity) {
      const remaining = Math.max(0, ebTier.total_capacity - ebTier.tickets_sold);
      return res.status(400).json({
        error: remaining === 0 
          ? "Early Bird tickets are completely SOLD OUT!" 
          : `Only ${remaining} Early Bird ticket(s) remaining.`
      });
    }
  }

  const formattedPhone = formatPhoneNumber(phone);
  const transactionType = isSupport ? "Support Contribution" : (ticketType || "Event Pass");
  console.log(`📡 Initiating IntaSend STK Push [${transactionType}] for ${formattedPhone}...`);

  try {
    let collection = intasend.collection();
    const apiRef = `WAKOLOSAI-${Date.now()}`;

    const response = await collection.mpesaStkPush({
      first_name: name || "Customer",
      last_name: "User",
      email: email,
      amount: Number(amount),
      phone_number: formattedPhone,
      api_ref: apiRef,
    });

    const checkoutID = response.invoice?.invoice_id || response.id || apiRef;

    // Save pending record in Supabase DB
    const { error: dbError } = await supabase
      .from("tickets")
      .insert([
        {
          checkout_id: checkoutID,
          email: email.toLowerCase().trim(),
          phone: formattedPhone,
          amount,
          ticket_type: transactionType,
          status: "pending",
        },
      ]);

    if (dbError) throw dbError;

    console.log(`✅ Saved pending record in DB for checkoutID: ${checkoutID}`);
    res.json({ success: true, checkoutID, message: "STK push sent to your phone" });
  } catch (err) {
    console.error("❌ IntaSend STK Push Error:", err.message || err);
    res.status(500).json({ error: err.message || "Payment initiation failed" });
  }
});

// POST: Initiate Merch Payment via IntaSend
app.post("/api/buy-merch", async (req, res) => {
  const { fullName, phone, email, amount, cart } = req.body;

  if (!phone || !amount || Number(amount) <= 0) {
    return res.status(400).json({ error: "Missing required fields: phone or amount" });
  }

  const formattedPhone = formatPhoneNumber(phone);
  const customerEmail = email ? email.toLowerCase().trim() : "customer@wakolosai.xyz";

  // Build item names summary for database & receipt
  const cartSummary = cart && cart.length > 0 
    ? cart.map(item => `${item.name} (${item.size}) x${item.quantity}`).join(", ") 
    : "Wakolosai Merch";

  console.log(`📡 Initiating Merch IntaSend STK Push for ${formattedPhone} (Total: KES ${amount})...`);

  try {
    let collection = intasend.collection();
    const apiRef = `MERCH-${Date.now()}`;

    const response = await collection.mpesaStkPush({
      first_name: fullName || "Merch Customer",
      last_name: "User",
      email: customerEmail,
      amount: Number(amount),
      phone_number: formattedPhone,
      api_ref: apiRef,
    });

    const checkoutID = response.invoice?.invoice_id || response.id || apiRef;

    // Insert pending merch record into Supabase tickets table
    const { error: dbError } = await supabase
      .from("tickets")
      .insert([
        {
          checkout_id: checkoutID,
          email: customerEmail,
          phone: formattedPhone,
          amount: Number(amount),
          ticket_type: `Merch: ${cartSummary}`,
          status: "pending",
        },
      ]);

    if (dbError) {
      console.error("⚠️ Supabase Merch DB Insert Error:", dbError.message);
    } else {
      console.log(`✅ Saved pending merch record in DB for checkoutID: ${checkoutID}`);
    }

    res.json({ success: true, checkoutID, message: "STK push sent to your phone" });
  } catch (err) {
    console.error("❌ Merch IntaSend STK Push Error:", err.message || err);
    res.status(500).json({ error: err.message || "Merch payment initiation failed" });
  }
});

// POST: Webhook / Callback Endpoint (Handles IntaSend Callbacks for all payments)
app.post("/api/callback", async (req, res) => {
  console.log("🔔 INCOMING CALLBACK RECEIVED FROM INTASEND!");

  try {
    const { invoice_id, state, api_ref, challenge } = req.body;

    if (challenge && !state) {
      return res.json({ challenge });
    }

    if (state === "COMPLETE" || state === "SUCCESS" || req.body.status === "COMPLETE") {
      const searchRef = invoice_id || api_ref;
      console.log(`🎉 Payment Verified for Invoice/Ref: ${searchRef}`);

      const { data: ticket, error: updateError } = await supabase
        .from("tickets")
        .update({ status: "paid" })
        .or(`checkout_id.eq.${invoice_id},checkout_id.eq.${api_ref}`)
        .select()
        .single();

      if (updateError || !ticket) {
        console.error("❌ Record update issue:", updateError);
        return res.status(200).json({ status: "ACK", warning: "Record not found" });
      }

      // Increment Early Bird counter if ticket
      if (ticket.ticket_type && ticket.ticket_type.includes("Early Bird")) {
        await supabase.rpc("increment_tier_sales", { tier_id_param: "early-bird", qty_param: 1 });
      }

      // Dispatch Email Receipt via Resend if email is present and not fallback placeholder
      if (ticket.email && !ticket.email.includes("wakolosai.xyz")) {
        const isMerch = ticket.ticket_type?.startsWith("Merch:");
        await sendReceiptEmail(ticket.email, {
          ticketId: ticket.id,
          amount: ticket.amount,
          ticketType: ticket.ticket_type,
          type: isMerch ? "merch" : "ticket"
        });
      }

      console.log(`✨ Process complete for ${ticket.email}`);
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
  console.log(`🌐 Base URL set to: ${BASE_URL}`);
});
