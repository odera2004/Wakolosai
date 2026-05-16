"use client";

import { useState } from "react";
import { FadeImage } from "@/components/ui/fade-image";
import { Loader2, Ticket } from "lucide-react";

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
  const [quantities, setQuantities] = useState({ "early-bird": 0, "regular": 0 });
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const updateQty = (id, delta) => {
    const total = Object.values(quantities).reduce((a, b) => a + b, 0);
    if (delta > 0 && total >= 3) return alert("Maximum 3 tickets per person.");
    
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, prev[id] + delta)
    }));
  };

  // UPDATED CALCULATION FOR 1 KES TESTING
  const totalAmount = (quantities["early-bird"] * 1) + (quantities["regular"] * 1);

  const handleCheckout = async () => {
    if (!email.trim() || !phone.trim() || totalAmount === 0) {
      return alert("Please fill in your details and select at least one ticket.");
    }
  
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/buy-ticket", {
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
      alert("❌ Connection failed. Ensure your backend server is running on port 5000.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="tickets" className="bg-[#fafaf0] py-24 border-t border-[#8c6239]/10">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif italic text-[#0f172a] md:text-5xl">Secure Your Place</h2>
          <p className="mt-4 text-[#8c6239] uppercase tracking-widest text-[10px] font-bold">Limited capacity for the awakening</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Ticket Selection Grid */}
          <div className="grid grid-cols-1 gap-6">
            {ticketTiers.map((tier) => (
              <div key={tier.id} className="group flex bg-white rounded-3xl overflow-hidden border border-[#8c6239]/10 shadow-sm transition-all hover:shadow-md">
                <div className="relative w-1/3 aspect-square">
                  <FadeImage src={tier.image} alt={tier.name} fill className="object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif italic text-[#0f172a]">{tier.name}</h3>
                    <p className="text-xs text-[#8c6239]/70 mt-1">{tier.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-[#8c6239]">{tier.price} KES</span>
                    <div className="flex items-center gap-3 bg-[#fafaf0] rounded-full px-3 py-1">
                      <button onClick={() => updateQty(tier.id, -1)} className="text-[#8c6239] font-bold">-</button>
                      <span className="text-sm font-mono">{quantities[tier.id]}</span>
                      <button onClick={() => updateQty(tier.id, 1)} className="text-[#8c6239] font-bold">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Form Card */}
          <div className="bg-[#0f172a] p-8 md:p-10 rounded-[3rem] text-[#fafaf0] sticky top-32 shadow-2xl">
            <h3 className="text-2xl font-serif italic mb-6">Reservation Details</h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-[10px] uppercase tracking-widest opacity-50 block mb-2">M-Pesa Phone Number</label>
                <input 
                  type="text" 
                  placeholder="0700 000 000"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#8c6239] transition-all"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-widest opacity-50 block mb-2">Email for Ticket Delivery</label>
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#8c6239] transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex justify-between items-end mb-8">
                  <span className="text-sm opacity-60">Total Investment</span>
                  <span className="text-4xl font-serif italic text-[#8c6239]">{totalAmount.toLocaleString()} KES</span>
                </div>

                <button 
                  onClick={handleCheckout}
                  disabled={loading || totalAmount === 0}
                  className="w-full bg-[#8c6239] py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[12px] flex items-center justify-center gap-3 hover:bg-[#a67c52] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 className="animate-spin" /> : <Ticket size={18} />}
                  {loading ? "Processing..." : "Secure My Blessing"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}