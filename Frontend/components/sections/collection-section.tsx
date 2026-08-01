"use client";

import { useState, useEffect } from "react";
import { FadeImage } from "@/components/ui/fade-image";
import { Loader2, Ticket, Calendar, MapPin, Clock, ShieldCheck, Sparkles, Heart } from "lucide-react";

interface TicketTier {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  capacity: number | null;
  sold: number;
}

const INITIAL_TIERS: TicketTier[] = [
  {
    id: "early-bird",
    name: "Early Bird",
    description: "Limited early availability.",
    price: 800,
    image: "/images/bill-6.png",
    capacity: 20,
    sold: 0,
  },
  {
    id: "advanced",
    name: "Advanced Ticket",
    description: "Standard advance pass for full entry to the worship experience.",
    price: 1000,
    image: "/images/bill-10.png",
    capacity: null,
    sold: 0,
  },
  {
    id: "gate",
    name: "At The Gate",
    description: "Gate pass available on the event day at the entrance.",
    price: 1200,
    image: "/images/rs-13.jpg",
    capacity: null,
    sold: 0,
  }
];

export function CollectionSection() {
  const [tiers, setTiers] = useState<TicketTier[]>(INITIAL_TIERS);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    "early-bird": 0,
    "advanced": 0,
    "gate": 0,
  });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  // Support / Donation state
  const [supportAmount, setSupportAmount] = useState<string>("");
  const [supportPhone, setSupportPhone] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [supportLoading, setSupportLoading] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://wakolosai.onrender.com";

  // Sync inventory with DB
  useEffect(() => {
    fetch(`${apiUrl}/api/ticket-tiers`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTiers((prev) =>
            prev.map((t) => {
              const fetched = data.find((d: any) => d.id === t.id);
              return fetched ? { ...t, price: Number(fetched.price), sold: fetched.tickets_sold } : t;
            })
          );
        }
      })
      .catch((err) => console.log("Note: Could not load live tier count", err));
  }, [apiUrl]);

  const updateQty = (id: string, delta: number) => {
    const tier = tiers.find((t) => t.id === id);
    if (!tier) return;

    if (delta > 0 && tier.capacity !== null && tier.sold >= tier.capacity) {
      return alert("Early Bird tickets are completely SOLD OUT!");
    }

    const total = Object.values(quantities).reduce((a, b) => a + b, 0);
    if (delta > 0 && total >= 5) return alert("Maximum 5 tickets allowed per transaction.");

    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const totalAmount = tiers.reduce(
    (sum, tier) => sum + tier.price * (quantities[tier.id] || 0),
    0
  );

  // Ticket Checkout Handler
  const handleCheckout = async () => {
    if (!email.trim() || !phone.trim() || totalAmount === 0) {
      return alert("Please fill in your details and select at least one ticket.");
    }

    setLoading(true);

    const ticketSummary = Object.entries(quantities)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => {
        const tierName = tiers.find((t) => t.id === id)?.name;
        return `${qty}x ${tierName}`;
      })
      .join(", ");

    try {
      const res = await fetch(`${apiUrl}/api/buy-ticket`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phone.trim(),
          email: email.toLowerCase().trim(),
          amount: totalAmount,
          ticketType: ticketSummary,
          tierBreakdown: quantities,
          isSupport: false,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ M-Pesa STK Push Sent! Enter your PIN on your phone to complete your ticket purchase.");
        setQuantities({ "early-bird": 0, advanced: 0, gate: 0 });
      } else {
        alert(`❌ ${data.error || "STK Push failed."}`);
      }
    } catch (err) {
      console.error("Connection Error:", err);
      alert("❌ Connection failed. Ensure your server is online.");
    } font-serif italic {
      setLoading(false);
    }
  };

  // Support / Offering Handler
  const handleSupportCheckout = async () => {
    const amt = Number(supportAmount);
    if (!supportEmail.trim() || !supportPhone.trim() || !amt || amt <= 0) {
      return alert("Please enter a valid amount, phone number, and email to send support.");
    }

    setSupportLoading(true);

    try {
      const res = await fetch(`${apiUrl}/api/buy-ticket`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: supportPhone.trim(),
          email: supportEmail.toLowerCase().trim(),
          amount: amt,
          ticketType: `Support Offering (KES ${amt})`,
          isSupport: true,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ STK Push Sent for Support Contribution! Enter your M-Pesa PIN to complete.");
        setSupportAmount("");
      } else {
        alert(`❌ ${data.error || "Failed to trigger STK Push."}`);
      }
    } catch (err) {
      console.error("Support Checkout Error:", err);
      alert("❌ Connection failed. Please try again.");
    } finally {
      setSupportLoading(false);
    }
  };

  return (
    <section id="tickets-section" className="bg-black font-serif italic text-white py-24 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-[#FFB800] uppercase tracking-[0.3em] font-serif italic text-xs font-black flex items-center justify-center gap-2 mb-3">
            <Sparkles size={14} className="text-[#FFB800]" /> Live Worship Experience
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic font-black uppercase tracking-tight text-white">
            SECURE YOUR <span className="text-[#FFB800]">TICKET</span>
          </h2>
          <p className="mt-3 text-gray-400 text-xs font-serif italic sm:text-sm uppercase tracking-widest font-semibold">
            Instant E-Pass delivered to your email upon M-Pesa verification.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* TICKET TIERS & GUIDELINES (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-serif italic font-black uppercase tracking-widest text-gray-400 mb-2">
              1. Select Pass Tier
            </h3>

            {tiers.map((tier) => {
              const count = quantities[tier.id] || 0;
              const isSoldOut = tier.capacity !== null && tier.sold >= tier.capacity;

              return (
                <div
                  key={tier.id}
                  className={`group relative flex flex-col sm:flex-row bg-neutral-900/80 rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isSoldOut
                      ? "border-red-900/40 opacity-60"
                      : count > 0
                      ? "border-[#FFB800] ring-1 ring-[#FFB800]/50"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-square">
                    <FadeImage src={tier.image} alt={tier.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:hidden" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">{tier.name}</h3>
                        
                        {isSoldOut ? (
                          <span className="text-[10px] font-serif italic bg-red-500/20 text-red-400 font-bold px-2.5 py-1 rounded-full border border-red-500/30 uppercase">
                            Sold Out
                          </span>
                        ) : tier.capacity !== null ? (
                          <span className="text-[10px] font-serif italic bg-[#FFB800]/10 text-[#FFB800] font-bold px-2.5 py-1 rounded-full border border-[#FFB800]/30 uppercase">
                            Limited Spots
                          </span>
                        ) : (
                          <span className="text-[10px] font-serif italic bg-white/10 text-gray-300 font-bold px-2.5 py-1 rounded-full border border-white/20 uppercase">
                            Available
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">{tier.description}</p>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                      <div>
                        <span className="text-2xl font-black text-[#FFB800]">KES {tier.price.toLocaleString()}</span>
                        <span className="text-[10px] font-serif italic text-gray-500 uppercase block">per pass</span>
                      </div>

                      {/* COUNTER BUTTONS */}
                      <div className="flex items-center gap-3 bg-black/60 border border-white/10 rounded-xl px-3 py-1.5">
                        <button
                          onClick={() => updateQty(tier.id, -1)}
                          disabled={isSoldOut || count === 0}
                          className="text-gray-400 hover:text-white disabled:opacity-30 font-black text-lg px-2 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-base font-mono font-bold text-[#FFB800] w-5 text-center">{count}</span>
                        <button
                          onClick={() => updateQty(tier.id, 1)}
                          disabled={isSoldOut}
                          className="text-gray-400 hover:text-white disabled:opacity-30 font-black text-lg px-2 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* EVENT GUIDELINES */}
            <div className="bg-neutral-900/40 rounded-2xl p-6 border border-white/5 space-y-4">
              <h4 className="text-xs font-serif italic font-black uppercase tracking-widest text-[#FFB800] flex items-center gap-2">
                <ShieldCheck size={16} /> Important Event Guidelines
              </h4>
              <ul className="text-xs font-serif italic text-gray-400 space-y-2 list-disc list-inside leading-relaxed">
                <li>E-Pass confirmation will be delivered instantly to your <strong>Email Address</strong> upon M-Pesa approval.</li>
                <li>Present your digital email receipt with Reference ID at entry for verification.</li>
              </ul>
            </div>

            {/* SUPPORT / LOVE OFFERING SECTION */}
            <div className="bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-6 md:p-8 rounded-3xl border border-[#FFB800]/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2 text-[#FFB800]">
                <Heart size={18} className="fill-[#FFB800]" />
                <h3 className="text-sm font-serif italic font-black uppercase tracking-widest">
                  Support The Event
                </h3>
              </div>
              <p className="text-xs text-gray-400 font-serif italic mb-6 leading-relaxed">
                Want to partner with us or send a love offering? You can support the awakening with any amount via M-Pesa.
              </p>

              <div className="space-y-4">
                {/* PRESET AMOUNT BUTTONS */}
                <div className="flex flex-wrap gap-2">
                  {[200, 500, 1000, 2500, 5000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setSupportAmount(preset.toString())}
                      className={`text-xs font-bold font-mono px-3.5 py-2 rounded-lg border transition-all ${
                        supportAmount === preset.toString()
                          ? "bg-[#FFB800] text-black border-[#FFB800]"
                          : "bg-black/60 text-gray-300 border-white/10 hover:border-white/30"
                      }`}
                    >
                      + KES {preset}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Amount (KES)</label>
                    <input
                      type="number"
                      placeholder="e.g. 500"
                      className="w-full bg-black border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 outline-none focus:border-[#FFB800]"
                      value={supportAmount}
                      onChange={(e) => setSupportAmount(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-400 block mb-1">M-Pesa Phone</label>
                    <input
                      type="tel"
                      placeholder="07XX XXX XXX"
                      className="w-full bg-black border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 outline-none focus:border-[#FFB800]"
                      value={supportPhone}
                      onChange={(e) => setSupportPhone(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Your Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-black border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 outline-none focus:border-[#FFB800]"
                      value={supportEmail}
                      onChange={(e) => setSupportEmail(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  onClick={handleSupportCheckout}
                  disabled={supportLoading || !supportAmount || Number(supportAmount) <= 0}
                  className="w-full bg-gradient-to-r from-[#FFB800] to-[#e0a200] hover:opacity-90 active:scale-[0.98] text-black font-extrabold text-xs uppercase tracking-widest py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {supportLoading ? <Loader2 className="animate-spin text-black" size={16} /> : <Heart size={16} className="fill-black" />}
                  {supportLoading ? "Sending STK Push..." : `Send Support (KES ${Number(supportAmount || 0).toLocaleString()})`}
                </button>
              </div>
            </div>

          </div>

          {/* CHECKOUT FORM & EVENT DETAILS (5 COLS) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            {/* EVENT SCHEDULE CARD */}
            <div className="bg-gradient-to-br from-neutral-900 to-black p-6 rounded-2xl border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">EVENT DETAILS</span>
                <span className="text-[10px] font-bold text-[#FFB800] bg-[#FFB800]/10 px-2 py-0.5 rounded-md">LIVE CONCERT</span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <Calendar className="text-[#FFB800] shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-serif italic font-bold">Date</span>
                    <span className="font-bold text-white font-serif italic text-sm">Sunday, September 13, 2026</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-[#FFB800] shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-serif italic font-bold">Doors Open</span>
                    <span className="font-bold text-white font-serif italic text-sm">3:00 PM EAT till Late</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-[#FFB800] shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-serif italic font-bold">Venue & Location</span>
                    <span className="font-bold text-white font-serif italic text-sm">ICC Nairobi Frontrunners</span>
                    <span className="text-gray-500 font-serif italic block text-[11px]">Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CHECKOUT CARD */}
            <div className="bg-neutral-900 p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h3 className="text-sm font-serif italic font-black uppercase tracking-widest text-gray-400 mb-6">
                2. Reservation Details
              </h3>
              
              <div className="space-y-5">
                <div>
                  <label className="text-[10px] font-serif italic font-black uppercase tracking-widest text-gray-400 block mb-2">
                    M-Pesa Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="07XX XXX XXX or 2547..."
                    className="w-full bg-black border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none focus:border-[#FFB800] transition-colors"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-[10px] font-serif italic font-black uppercase tracking-widest text-gray-400 block mb-2">
                    Email for Pass Delivery
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-black border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none focus:border-[#FFB800] transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="pt-5 border-t border-white/10">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <span className="text-[10px] font-serif italic text-gray-400 uppercase tracking-widest font-bold block">Total Amount</span>
                      <span className="text-xs font-serif italic text-gray-500">Includes all taxes</span>
                    </div>
                    <span className="text-3xl font-black text-[#FFB800]">KES {totalAmount.toLocaleString()}</span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    disabled={loading || totalAmount === 0}
                    className="w-full bg-[#FFB800] hover:bg-[#e0a200] active:scale-[0.98] text-black font-extrabold text-xs md:text-sm uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-200 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#FFB800]"
                  >
                    {loading ? <Loader2 className="animate-spin text-black" size={18} /> : <Ticket size={18} />}
                    {loading ? "Triggering M-Pesa..." : "Buy Pass via M-Pesa"}
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
