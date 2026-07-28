require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const { Resend } = require("resend");
const IntaSend = require("intasend-node");

const app = express();
app.use(cors({ origin: "*", methods: ["GET", "POST", "PUT", "DELETE"] }));
app.use(express.json());

// Guard: Early environment variable check
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

// Helper: Send Clean Dark-Mode Ticket Email via Resend API
// Helper: Send Ticket/Receipt Email via Resend
const sendTicketEmail = async (email, ticketDetails) => {
  try {
    const senderEmail = process.env.RESEND_FROM_EMAIL || "Wakolosai Events <onboarding@resend.dev>";
    const isMerch = ticketDetails.ticketType?.toLowerCase().includes("merch");
    const titleText = isMerch ? "ORDER CONFIRMED" : "TICKET CONFIRMED";

    console.log(`📡 Sending styled receipt via Resend to ${email}...`);
    
    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [email],
      subject: `🎟️ ${titleText}: ${ticketDetails.ticketType || "Wakolosai Order"} [${ticketDetails.ticketId.slice(0, 8)}]`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { background-color: #000000; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; padding: 40px 10px; }
            .card { max-width: 520px; margin: 0 auto; background-color: #0a0a0a; border: 1px solid #222222; border-radius: 16px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
            .header { text-align: center; border-bottom: 1px solid #222222; padding-bottom: 24px; margin-bottom: 24px; }
            .brand { color: #FFB800; font-size: 20px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin: 0; }
            .sub-brand { color: #888888; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin-top: 4px; }
            .badge { display: inline-block; background-color: rgba(255, 184, 0, 0.1); color: #FFB800; border: 1px solid #FFB800; font-size: 12px; font-weight: 600; padding: 6px 16px; rounded-radius: 20px; margin-top: 16px; text-transform: uppercase; letter-spacing: 1px; }
            .details-box { background-color: #141414; border: 1px solid #262626; border-radius: 12px; padding: 20px; margin: 24px 0; }
            .row { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 14px; }
            .row:last-child { margin-bottom: 0; }
            .label { color: #888888; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; }
            .value { color: #ffffff; font-weight: 600; text-align: right; }
            .code-box { background-color: #000000; border: 1px dashed #333333; padding: 12px; border-radius: 8px; text-align: center; margin-top: 20px; }
            .code-text { font-family: monospace; font-size: 13px; color: #FFB800; letter-spacing: 1px; }
            .footer { text-align: center; color: #555555; font-size: 12px; margin-top: 32px; border-top: 1px solid #1a1a1a; padding-top: 20px; }
          </style>
        </head>
        <body>
          <div class="card">
            
            <!-- HEADER -->
            <div class="header">
              <h1 class="brand">WAKOLOSAI</h1>
              <p class="sub-brand">Movement & Apparel</p>
              <div class="badge">Payment Verified</div>
            </div>

            <!-- MAIN NOTICE -->
            <p style="font-size: 15px; line-height: 1.5; color: #cccccc; text-align: center;">
              Thank you for your order! Your payment was processed successfully via M-Pesa.
            </p>

            <!-- ORDER DETAILS -->
            <div class="details-box">
              <div class="row">
                <span class="label">Item / Description</span>
                <span class="value">${ticketDetails.ticketType || "Wakolosai Item"}</span>
              </div>
              <div class="row">
                <span class="label">Amount Paid</span>
                <span class="value" style="color: #FFB800;">KES ${Number(ticketDetails.amount).toLocaleString()}</span>
              </div>
              <div class="row">
                <span class="label">Status</span>
                <span class="value" style="color: #4ADE80;">CONFIRMED</span>
              </div>
            </div>

            <!-- TICKET / ORDER REFERENCE BADGE -->
            <div class="code-box">
              <div style="font-size: 10px; color: #777777; text-transform: uppercase; margin-bottom: 4px;">Reference ID</div>
              <div class="code-text">${ticketDetails.ticketId}</div>
            </div>

            <!-- FOOTER -->
            <div class="footer">
              <p style="margin: 0;">Present this receipt at the entrance or pickup location.</p>
              <p style="margin: 5px 0 0 0;">&copy; 2026 Wakolosai. All rights reserved.</p>
            </div>

          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("❌ RESEND DELIVERY ERROR:", error);
      throw error;
    }

    console.log(`📧 SUCCESS: Styled receipt delivered to ${email}. ID: ${data?.id}`);
    return data;
  } catch (err) {
    console.error("❌ Email dispatch failed:", err.message);
    throw err;
  }
};

// GET: Fetch live capacity for ticket tiers
app.get("/api/ticket-tiers", async (req, res) => {
  try {
    const { data: tiers, error } = await supabase.from("ticket_tiers").select("*");
    if (error) throw error;
    res.json(tiers);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tier data" });
  }
});

// POST: Initiate Payment (Supports Ticket Tiers)
app.post("/api/buy-ticket", async (req, res) => {
  const { phone, email, amount, ticketType, name, tierBreakdown } = req.body;

  if (!phone || !email || !amount) {
    return res.status(400).json({ error: "Missing required fields: phone, email, amount" });
  }

  // Early Bird Capacity Check if Early Bird is included in purchase
  if (tierBreakdown && tierBreakdown["early-bird"] > 0) {
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
  console.log(`📡 Initiating IntaSend STK Push for ${formattedPhone}...`);

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

    console.log("📲 IntaSend Response:", JSON.stringify(response, null, 2));
    const checkoutID = response.invoice?.invoice_id || response.id || apiRef;

    // Save initial record as 'pending' in Supabase DB
    const { error: dbError } = await supabase
      .from("tickets")
      .insert([
        {
          checkout_id: checkoutID,
          email: email.toLowerCase().trim(),
          phone: formattedPhone,
          amount,
          ticket_type: ticketType || "Event Pass",
          status: "pending",
        },
      ]);

    if (dbError) throw dbError;

    console.log(`✅ Saved pending ticket in DB for checkoutID: ${checkoutID}`);
    res.json({ success: true, checkoutID, message: "STK push sent to your phone" });
  } catch (err) {
    console.error("❌ IntaSend STK Push Error:", err.message || err);
    res.status(500).json({ error: err.message || "Payment initiation failed" });
  }
});

// POST: Webhook / Callback Handler
app.post("/api/callback", async (req, res) => {
  console.log("🔔 INCOMING CALLBACK RECEIVED FROM INTASEND!");
  console.log("Payload:", JSON.stringify(req.body, null, 2));

  try {
    const { invoice_id, state, api_ref, challenge } = req.body;

    if (challenge && !state) {
      return res.json({ challenge });
    }

    if (state === "COMPLETE" || state === "SUCCESS" || req.body.status === "COMPLETE") {
      const searchRef = invoice_id || api_ref;
      console.log(`🎉 Payment Verified for Invoice/Ref: ${searchRef}`);

      // Search matching row by invoice_id OR api_ref
      const { data: ticket, error: updateError } = await supabase
        .from("tickets")
        .update({ status: "paid" })
        .or(`checkout_id.eq.${invoice_id},checkout_id.eq.${api_ref}`)
        .select()
        .single();

      if (updateError || !ticket) {
        console.error("❌ DB update failed or record not found:", updateError);
        return res.status(200).json({ status: "ACK", warning: "Record not matched yet" });
      }

      console.log(`🎟️ Match found for email: ${ticket.email}. Dispatching email...`);

      // Increment Early Bird counter in DB if ticket was Early Bird
      if (ticket.ticket_type && ticket.ticket_type.includes("Early Bird")) {
        await supabase.rpc("increment_tier_sales", { tier_id_param: "early-bird", qty_param: 1 });
      }

      // Dispatch Confirmation Email via Resend
      if (ticket.email && ticket.email !== "customer@wakolosai.app") {
        await sendTicketEmail(ticket.email, {
          ticketId: ticket.id,
          amount: ticket.amount,
          ticketType: ticket.ticket_type
        });
      }

      console.log(`✨ Process successfully completed for ${ticket.email}`);
    } else {
      console.warn(`⚠️ IntaSend state is '${state}'. Waiting...`);
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
