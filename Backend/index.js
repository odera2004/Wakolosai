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

// Helper: Generate QR Code Buffer
const generateQRCodeBuffer = async (text) => {
  try {
    return await QRCode.toBuffer(text, {
      type: "png",
      margin: 2,
      width: 250,
      color: { dark: "#000000", light: "#FFFFFF" },
    });
  } catch (err) {
    console.error("❌ QR Code generation failed:", err);
    throw err;
  }
};

// Helper: Send Ticket Email via Resend
const sendTicketEmail = async (email, ticketDetails) => {
  try {
    console.log(`⏳ Generating QR Code attachment for ${email}...`);
    const qrBuffer = await generateQRCodeBuffer(String(ticketDetails.ticketId));

    // Fallback to onboarding@resend.dev if custom domain is not set up / verified
    const senderEmail = process.env.RESEND_FROM_EMAIL || "Wakolosai Events <onboarding@resend.dev>";

    console.log(`📧 Dispatching Resend Email: [From: ${senderEmail} -> To: ${email}]`);

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [email],
      subject: `Your Wakolosai Ticket [${ticketDetails.ticketId}]`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #111; max-width: 500px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #FFB800; margin-top: 0; text-transform: uppercase;">🎟️ Payment Confirmed!</h2>
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
          cid: "qrcode",
        },
      ],
    });

    if (error) {
      console.error("❌ RESEND API ERROR:", JSON.stringify(error, null, 2));
      throw error;
    }

    console.log(`🚀 SUCCESS! Ticket email delivered to ${email}. Resend ID: ${data?.id}`);
    return data;
  } catch (err) {
    console.error("❌ Email dispatch failed:", err.message || err);
    throw err;
  }
};

// Helper: Send Merch Receipt Email via Resend
const sendMerchReceiptEmail = async (email, orderDetails) => {
  try {
    console.log(`📡 Sending merch receipt email to ${email}...`);
    const senderEmail = process.env.RESEND_FROM_EMAIL || "Wakolosai Store <onboarding@resend.dev>";

    const itemsTableRows = (orderDetails.cart || [])
      .map(
        (item) => `
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee;">
            <strong>${item.name}</strong><br/>
            <span style="font-size: 11px; color: #666;">Size: ${item.size || 'N/A'} | Qty: ${item.quantity || 1}</span>
          </td>
          <td style="padding: 8px 0; border-bottom: 1px solid #eee; text-align: right;">
            KES ${((item.price || 0) * (item.quantity || 1)).toLocaleString()}
          </td>
        </tr>
      `
      )
      .join("");

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [email],
      subject: `Your Wakolosai Store Order Confirmation [${orderDetails.orderId}]`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #111; max-width: 500px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #FFB800; margin-top: 0; text-transform: uppercase;">🛍️ Order Confirmed!</h2>
          <p style="font-size: 14px; color: #444;">Thank you for supporting the movement, <strong>${orderDetails.customerName || "Customer"}</strong>.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 14px; margin: 6px 0;"><strong>Order Ref:</strong> <code style="background: #f4f4f4; padding: 4px 8px; border-radius: 4px; font-family: monospace;">${orderDetails.orderId}</code></p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 13px;">
            <thead>
              <tr style="border-bottom: 2px solid #ddd; text-align: left;">
                <th style="padding-bottom: 6px;">Item</th>
                <th style="padding-bottom: 6px; text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsTableRows}
            </tbody>
          </table>
          <div style="text-align: right; margin-top: 15px; font-size: 16px;">
            <strong>Total Paid: KES ${Number(orderDetails.amount).toLocaleString()}</strong>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 11px; color: #888; text-align: center; margin-bottom: 0;">Wakolosai Official Apparel Vault • Keep this receipt for reference.</p>
        </div>
      `,
    });

    if (error) throw error;
    console.log(`📧 MERCH EMAIL SUCCESS: Delivered to ${email}. ID: ${data?.id}`);
    return data;
  } catch (err) {
    console.error("❌ Merch email dispatch failed:", err.message);
    throw err;
  }
};

// ----------------------------------------------------
// 1. EVENT TICKETS ROUTE
// ----------------------------------------------------
app.post("/api/buy-ticket", async (req, res) => {
  const { phone, email, amount, ticketType } = req.body;

  if (!phone || !email || !amount) {
    return res.status(400).json({ error: "Missing required fields: phone, email, amount" });
  }

  const formattedPhone = formatPhoneNumber(phone);
  const apiRef = `WAKOLOSAI-${Date.now()}`;
  console.log(`📡 Initiating Ticket STK Push for ${formattedPhone} with Ref: ${apiRef}...`);

  try {
    let collection = intasend.collection();
    const response = await collection.mpesaStkPush({
      first_name: "Event",
      last_name: "Attendee",
      email: email,
      amount: Number(amount),
      phone_number: formattedPhone,
      api_ref: apiRef,
    });

    const checkoutID = response.invoice?.invoice_id || response.id || apiRef;

    // Modified: Explicitly storing both checkout_id and api_ref
    const { data: ticket, error: dbError } = await supabase
      .from("tickets")
      .insert([
        {
          checkout_id: String(checkoutID),
          api_ref: apiRef,
          email,
          phone: formattedPhone,
          amount,
          ticket_type: ticketType || "Standard Pass",
          status: "pending",
        },
      ])
      .select()
      .single();

    if (dbError) throw dbError;

    console.log(`📌 Ticket recorded in DB (ID: ${ticket.id}) | checkout_id: ${checkoutID} | api_ref: ${apiRef}`);
    res.json({ success: true, checkoutID, apiRef, message: "STK push sent to your phone" });
  } catch (err) {
    console.error("❌ Ticket Payment Error:", err.message || err);
    res.status(500).json({ error: err.message || "Payment initiation failed" });
  }
});

// ----------------------------------------------------
// 2. STORE MERCH ROUTE
// ----------------------------------------------------
app.post("/api/buy-merch", async (req, res) => {
  const { fullName, phone, email, amount, cart } = req.body;

  if (!phone || !amount || !cart || cart.length === 0) {
    return res.status(400).json({ error: "Missing required checkout parameters." });
  }

  const formattedPhone = formatPhoneNumber(phone);
  const apiRef = `MERCH-${Date.now()}`;
  console.log(`📡 Initiating Merch STK Push for ${formattedPhone}... Amount: KES ${amount}`);

  try {
    let collection = intasend.collection();
    const response = await collection.mpesaStkPush({
      first_name: fullName || "Merch Customer",
      last_name: "User",
      email: email || "customer@wakolosai.com",
      amount: Number(amount),
      phone_number: formattedPhone,
      api_ref: apiRef,
    });

    const checkoutID = response.invoice?.invoice_id || response.id || apiRef;

    // Modified: Storing both checkout_id and api_ref for merch
    const orderPayload = {
      checkout_id: String(checkoutID),
      api_ref: apiRef,
      total_amount: Number(amount),
      payment_method: "M-PESA",
      status: "pending",
      items: {
        checkout_id: checkoutID,
        customer_name: fullName || "Customer",
        email: email || null,
        phone: formattedPhone,
        cart_items: cart,
      },
    };

    const { data: order, error: dbError } = await supabase
      .from("merch_orders")
      .insert([orderPayload])
      .select()
      .single();

    if (dbError) {
      console.error("⚠️ Merch DB Insert Error:", dbError.message);
    } else {
      console.log(`✅ Saved pending merch order #${order.id} [Checkout ID: ${checkoutID}]`);
    }

    res.json({ success: true, checkoutID, message: "STK push sent to your phone" });
  } catch (err) {
    console.error("❌ Merch STK Push Error:", err.message || err);
    res.status(500).json({ error: err.message || "Failed to trigger M-Pesa push." });
  }
});

// ----------------------------------------------------
// 3. INTASEND WEBHOOK / CALLBACK (Bulletproof Matcher)
// ----------------------------------------------------
app.post("/api/callback", async (req, res) => {
  console.log("🔔 INCOMING CALLBACK PAYLOAD:", JSON.stringify(req.body, null, 2));

  try {
    const { challenge } = req.body;
    if (challenge) return res.json({ challenge });

    const invoiceId = req.body.invoice_id || req.body.invoice?.invoice_id || "";
    const apiRef = req.body.api_ref || req.body.invoice?.api_ref || "";

    const rawState = req.body.state || req.body.status || req.body.invoice?.state || "";
    const paymentStatus = rawState.toString().toUpperCase();

    console.log(`🔎 IntaSend Event -> Status: "${paymentStatus}" | Invoice ID: "${invoiceId}" | API Ref: "${apiRef}"`);

    if (["COMPLETE", "COMPLETED", "SUCCESS", "PAID"].includes(paymentStatus)) {
      
      // --- STEP 1: CHECK TICKETS TABLE ---
      let ticket = null;

      if (invoiceId) {
        const { data } = await supabase.from("tickets").select("*").eq("checkout_id", invoiceId).maybeSingle();
        ticket = data;
      }

      if (!ticket && apiRef) {
        const { data } = await supabase.from("tickets").select("*").eq("api_ref", apiRef).maybeSingle();
        ticket = data;
      }

      if (ticket) {
        console.log(`🎟️ TICKET MATCH FOUND! Row ID: ${ticket.id} | Email: ${ticket.email}`);

        // Update database to paid
        await supabase
          .from("tickets")
          .update({ status: "paid" })
          .eq("id", ticket.id);

        // DISPATCH EMAIL TO BUYER
        try {
          await sendTicketEmail(ticket.email, {
            ticketId: ticket.id,
            amount: ticket.amount,
            ticketType: ticket.ticket_type,
          });
          console.log(`✅ DISPATCH COMPLETE: Ticket Email sent to ${ticket.email}`);
        } catch (mailErr) {
          console.error("❌ RESEND DISPATCH CRASHED:", mailErr.message || mailErr);
        }

        return res.json({ status: "ACK_TICKET" });
      }

      // --- STEP 2: CHECK MERCH ORDERS TABLE ---
      let order = null;

      if (invoiceId) {
        const { data } = await supabase.from("merch_orders").select("*").eq("checkout_id", invoiceId).maybeSingle();
        order = data;
      }

      if (!order && apiRef) {
        const { data } = await supabase.from("merch_orders").select("*").eq("api_ref", apiRef).maybeSingle();
        order = data;
      }

      if (order) {
        console.log(`🛍️ MERCH MATCH FOUND! Row ID: ${order.id}`);

        await supabase
          .from("merch_orders")
          .update({ status: "paid" })
          .eq("id", order.id);

        const customerEmail = order.items?.email;
        if (customerEmail) {
          try {
            await sendMerchReceiptEmail(customerEmail, {
              orderId: order.id,
              customerName: order.items?.customer_name,
              amount: order.total_amount,
              cart: order.items?.cart_items || [],
            });
            console.log(`✅ DISPATCH COMPLETE: Merch Receipt sent to ${customerEmail}`);
          } catch (merchMailErr) {
            console.error("❌ RESEND MERCH DISPATCH CRASHED:", merchMailErr.message);
          }
        }
        return res.json({ status: "ACK_MERCH" });
      }

      console.warn(`⚠️ Payment marked ${paymentStatus}, but no record matched invoice_id "${invoiceId}" or api_ref "${apiRef}" in Supabase.`);
    } else {
      console.warn(`⚠️ Callback ignored: Payment status is "${paymentStatus}".`);
    }

    res.json({ status: "ACK" });
  } catch (err) {
    console.error("❌ Callback Fatal Processing Error:", err.message);
    res.status(500).json({ error: "Callback processing failed" });
  }
});

// ----------------------------------------------------
// 4. GET Endpoint for Ticket Tiers live count
// ----------------------------------------------------
app.get("/api/ticket-tiers", async (req, res) => {
  try {
    const { count } = await supabase
      .from("tickets")
      .select("*", { count: "exact", head: true })
      .ilike("ticket_type", "%Early Bird%")
      .neq("status", "failed");

    res.json([
      { id: "early-bird", name: "Early Bird", price: 800, tickets_sold: count || 0 },
      { id: "advanced", name: "Advanced Ticket", price: 1000, tickets_sold: 0 },
      { id: "gate", name: "At The Gate", price: 1200, tickets_sold: 0 },
    ]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
