"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Ticket, ShoppingBag, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onBuyTicketClick?: () => void;
  onBuyMerchClick?: () => void;
}

export function HeroSection({ onBuyTicketClick, onBuyMerchClick }: HeroSectionProps) {
  const handleTicketClick = () => {
    if (onBuyTicketClick) {
      onBuyTicketClick();
    } else {
      const ticketSection = document.getElementById("tickets-section");
      ticketSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const router = useRouter();

  const handleMerchClick = () => {
    if (onBuyMerchClick) {
      onBuyMerchClick();
    } else {
      router.push("/merch"); // Navigates to the secret merch page
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white font-sans select-none flex flex-col justify-between">
      
      {/* 1. BACKGROUND IMAGE LAYER WITH ATMOSPHERIC LIGHTING */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bill-5.png"
          alt="Wakolosai Live Experience"
          fill
          className="object-cover object-center grayscale contrast-125 scale-105 transition-transform duration-1000 ease-out"
          priority
          quality={100}
        />
        
        {/* Cinematic Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />

        {/* Dynamic Glow Elements */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FFB800]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FFB800]/20 blur-[140px] rounded-full pointer-events-none" />

        {/* Tactical Grid Pattern Layer */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* 2. TOP HEADER / STATUS BAR */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-8 md:px-12 flex items-center justify-between">
        {/* Live Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFB800] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB800]"></span>
          </span>
          <span className="text-[10px] md:text-xs font-black tracking-[0.25em] text-gray-300 uppercase">
            LIVE EXPERIENCE 2026
          </span>
        </div>

        {/* Sub-Header Callout */}
        <div className="hidden sm:flex items-center gap-2 text-[10px] md:text-xs font-black tracking-[0.25em] uppercase text-gray-400">
          <Sparkles size={13} className="text-[#FFB800]" />
          <span>JOIN THE MOVEMENT</span>
        </div>
      </header>

      {/* 3. MAIN HERO CONTENT GRID (Left Logo + Right Callout) */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between my-auto gap-8 pointer-events-none">
        
        {/* LEFT SIDE: Wakolosai Branding Logo (Untouched SVG Structure) */}
        <div className="w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px] pointer-events-auto filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]">
          <Image
            src="/images/Wakolosai-logo.svg"
            alt="Wakolosai Logo"
            width={400}
            height={400}
            className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02]"
            priority
          />
        </div>

        {/* RIGHT SIDE: High-Impact Typography Hook */}
        <div className="w-full md:w-1/2 text-center md:text-right pointer-events-auto">
          <div className="inline-block md:block">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#FFB800] mb-2 drop-shadow">
              A Stir of Joy & Hope
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-2xl font-serif italic uppercase tracking-tight leading-[1.05] text-white drop-shadow-2xl">
              JE, WEWE NI <br />
              <span className="text-[#FFB800] font-serif italic  font-black tracking-wider text-2xl sm:text-2xl md:text-5xl lg:text-4xl drop-shadow-[0_0_35px_rgba(255,184,0,0.3)]">
                MKOLOOO?
              </span>
            </h2>
          </div>
        </div>

      </main>

      {/* 4. BOTTOM DUAL ACTION CONTROLS */}
      <footer className="relative z-20 w-full max-w-7xl mx-auto px-6 pb-10 md:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 md:p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
          
          {/* Sub-text summary */}
          <div className="hidden md:flex items-center gap-3 pl-2">
            <div className="h-8 w-[2px] bg-[#FFB800]" />
            <p className="text-xs text-gray-400 font-serif italic">
              Old-school Kenyan praise <br />
              crafted for the modern spirit.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
            {/* Left CTA: Buy Ticket */}
            <button
              onClick={handleTicketClick}
              className="group relative font-serif italic  flex-1 sm:flex-none flex items-center justify-center gap-2.5 bg-[#FFB800] hover:bg-[#e5a600] text-black font-black text-xs md:text-sm uppercase tracking-wider px-6 md:px-10 py-3.5 md:py-4 rounded-xl shadow-[0_0_25px_rgba(255,184,0,0.35)] hover:shadow-[0_0_35px_rgba(255,184,0,0.5)] transition-all duration-300 active:scale-95 overflow-hidden"
            >
              <Ticket size={16} className="text-black transition-transform duration-300 group-hover:rotate-12" />
              <span>Buy Ticket</span>
              <ArrowUpRight size={16} className="text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Right CTA: Buy Merch */}
            <button
              onClick={handleMerchClick}
              className="group flex-1 sm:flex-none font-serif italic flex items-center justify-center gap-2.5 bg-black/40 hover:bg-white/10 text-white border border-white/20 hover:border-[#FFB800]/50 font-black text-xs md:text-sm uppercase tracking-wider px-6 md:px-10 py-3.5 md:py-4 rounded-xl backdrop-blur-md transition-all duration-300 active:scale-95"
            >
              <ShoppingBag size={16} className="text-[#FFB800] transition-transform duration-300 group-hover:scale-110" />
              <span>Buy Merch</span>
            </button>
          </div>

        </div>
      </footer>

    </section>
  );
}