"use client";

import { useState } from "react";
import { FadeImage } from "@/components/ui/fade-image";
import { Loader2, Ticket, Calendar, MapPin, Clock, ShieldCheck, Sparkles } from "lucide-react";

const ticketTiers = [
  {
    id: "early-bird",
    name: "Early Bird Praise",
    description: "Limited availability for the early seekers of the awakening.",
    price: 1, // UPDATED FOR TESTING
    image: "/images/bill-6.png",
  },
  {
    id: "regular",
    name: "Regular Gate",
    description: "Full access to the cinematic worship experience.",
    price: 1, // UPDATED FOR TESTING
    image: "/images/bill-10.png",
  }
];

export function CollectionSection() {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({ 
    "early-bird": 0, 
    "regular": 0 
  });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const updateQty = (id: string, delta: number) => {
    const total = Object.values(quantities).reduce((a, b) => a + b, 0);
    if (delta > 0 && total >= 3) return alert("Maximum 3 tickets per person.");
    
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, prev[id] + delta)
    }));
  };

  const totalAmount = (quantities["early-bird"] * 1) + (quantities["regular"] * 1);

  const handleCheckout = async () => {
    if (!email.trim() || !phone.trim() || totalAmount === 0) {
      return alert("Please fill in your details and select at least one ticket.");
    }
  
    setLoading(true);
    try {
      // Toggle URL depending on environment (Local vs Production)
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://wakolosai.onrender.com";
      
      const res = await fetch(`${apiUrl}/api/buy-ticket`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phone.trim(), 
          email: email.toLowerCase().trim(),
          amount: totalAmount
        })
      });
  
      const data = await res.json();
      
      if (res.ok) {
        alert("✅ STK Push sent! Enter your M-Pesa PIN on your phone to complete the awakening.");
        setQuantities({ "early-bird": 0, "regular": 0 });
      } else {
        alert(`❌ ${data.error || "Something went wrong."}`);
      }
    } catch (err) {
      console.error("Connection Error:", err);
      alert("❌ Connection failed. Ensure your backend server is online.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="tickets-section" className="bg-black font-serif italic text-white py-24 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <span className="text-[#FFB800] uppercase tracking-[0.3em] font-serif italic text-xs font-black flex items-center justify-center gap-2 mb-3">
            <Sparkles size={14} className="text-[#FFB800]" /> Live Experience Access
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif italic font-black uppercase tracking-tight text-white">
            SECURE YOUR <span className="text-[#FFB800]">PLACE</span>
          </h2>
          <p className="mt-3 text-gray-400 text-xs font-serif italic sm:text-sm uppercase tracking-widest font-semibold">
            Limited capacity for the awakening. Mobile Ticket issued instantly.
          </p>
        </div>

        {/* MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: TICKET TIERS (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-serif italic font-black uppercase tracking-widest text-gray-400 mb-2">
              1. Select Pass Tier
            </h3>

            {ticketTiers.map((tier) => {
              const count = quantities[tier.id];
              return (
                <div 
                  key={tier.id} 
                  className={`group relative flex flex-col sm:flex-row bg-neutral-900/80 rounded-2xl overflow-hidden border transition-all duration-300 ${
                    count > 0 ? "border-[#FFB800] ring-1 ring-[#FFB800]/50" : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-square">
                    <FadeImage src={tier.image} alt={tier.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:hidden" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">{tier.name}</h3>
                        <span className="text-xs font-serif italic bg-[#FFB800]/10 text-[#FFB800] font-bold px-2.5 py-1 rounded-full border border-[#FFB800]/20">
                          Instant E-Pass
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">{tier.description}</p>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                      <div>
                        <span className="text-2xl font-black text-[#FFB800]">{tier.price} KES</span>
                        <span className="text-[10px] font-serif italic text-gray-500 uppercase block">per ticket</span>
                      </div>

                      {/* COUNTER BUTTONS */}
                      <div className="flex items-center gap-3 bg-black/60 border border-white/10 rounded-xl px-3 py-1.5">
                        <button 
                          onClick={() => updateQty(tier.id, -1)} 
                          className="text-gray-400 hover:text-white font-black text-lg px-2 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-base font-mono font-bold text-[#FFB800] w-5 text-center">{count}</span>
                        <button 
                          onClick={() => updateQty(tier.id, 1)} 
                          className="text-gray-400 hover:text-white font-black text-lg px-2 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* EVENT DETAILS ACCORDION / SUMMARY BADGE */}
            <div className="bg-neutral-900/40 rounded-2xl p-6 border border-white/5 space-y-4">
              <h4 className="text-xs font-serif italic font-black uppercase tracking-widest text-[#FFB800] flex items-center gap-2">
                <ShieldCheck size={16} /> Important Event Guidelines
              </h4>
              <ul className="text-xs font-serif italic text-gray-400 space-y-2 list-disc list-inside leading-relaxed">
                <li>Tickets will be sent instantly to your <strong>Email</strong> upon M-Pesa verification.</li>
                <li>QR code on the E-Pass must be presented at the gate for scanning.</li>
                <li>Dress Code: <strong>Minimalist / Urban Black & Gold</strong> recommended.</li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: CHECKOUT & EVENT METADATA (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            {/* EVENT LOGISTICS CARD */}
            <div className="bg-gradient-to-br from-neutral-900 to-black p-6 rounded-2xl border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">EVENT SCHEDULE</span>
                <span className="text-[10px] font-bold text-[#FFB800] bg-[#FFB800]/10 px-2 py-0.5 rounded-md">LIVE CONCERT</span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <Calendar className="text-[#FFB800] shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-serif italic font-bold">Date</span>
                    <span className="font-bold text-white font-serif italic text-sm">Saturday, November 28, 2026</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-[#FFB800] shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-serif italic font-bold">Doors Open</span>
                    <span className="font-bold text-white font-serif italic text-sm">4:00 PM EAT till Late</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-[#FFB800] shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="text-gray-400 block text-[10px] uppercase font-serif italic font-bold">Location & Venue</span>
                    <span className="font-bold text-white font-serif italic text-sm">The Dome Arena, Carnivore Grounds</span>
                    <span className="text-gray-500 font-serif italic block text-[11px]">Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CHECKOUT FORM CARD */}
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
                  <label className="text-[10px] font-serif italic  font-black uppercase tracking-widest text-gray-400 block mb-2">
                    Email for Ticket Delivery
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
                      <span className="text-[10px] font-serif italic text-gray-400 uppercase tracking-widest font-bold block">Total Investment</span>
                      <span className="text-xs font-serif italic text-gray-500">Includes all taxes</span>
                    </div>
                    <span className="text-3xl font-black text-[#FFB800]">{totalAmount.toLocaleString()} KES</span>
                  </div>

                  <button 
                    onClick={handleCheckout}
                    disabled={loading || totalAmount === 0}
                    className="w-full bg-[#FFB800] hover:bg-[#e0a200] active:scale-[0.98] text-black font-extrabold text-xs md:text-sm uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-200 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-[#FFB800]"
                  >
                    {loading ? <Loader2 className="animate-spin text-black" size={18} /> : <Ticket size={18} />}
                    {loading ? "Triggering M-Pesa..." : "Buy Ticket via M-Pesa"}
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