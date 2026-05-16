"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Flame } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-500 ${
        isScrolled 
          ? "bg-[#0f172a]/40 backdrop-blur-xl border border-[#fafaf0]/10 rounded-full py-1" 
          : "bg-transparent py-4"
      }`}
      style={{
        boxShadow: isScrolled ? "0 20px 40px rgba(0,0,0,0.3)" : "none"
      }}
    >
      <div className="flex items-center justify-between px-6">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex flex-col">
            <span className={`text-xl font-bold tracking-[0.2em] transition-colors duration-300 ${isScrolled ? "text-[#fafaf0]" : "text-white"}`}>
              WAKOLOSAI
            </span>
            <span className={`text-[10px] uppercase tracking-widest font-serif italic transition-opacity duration-300 ${isScrolled ? "text-[#8c6239] opacity-100" : "opacity-0"}`}>
              The Awakening
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Curated for Wakolosai */}
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { name: "The Sound", id: "about" },
            { name: "The Movement", id: "gallery" },
            { name: "The Awakening", id: "lineup" }
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.id)}
              className={`text-xs uppercase tracking-widest transition-all hover:tracking-[0.3em] ${
                isScrolled ? "text-[#fafaf0]/70 hover:text-[#8c6239]" : "text-white/80 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* CTA Section */}
        <div className="hidden items-center gap-4 md:flex">
            <div className="flex items-center gap-2 mr-2">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8c6239] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8c6239]"></span>
                </span>
                <span className={`text-[10px] uppercase tracking-tighter ${isScrolled ? "text-[#fafaf0]/50" : "text-white/50"}`}>Live Now</span>
            </div>
          
          <button
            onClick={() => scrollTo("tickets")}
            className={`px-6 py-2.5 text-[11px] uppercase tracking-widest font-bold transition-all rounded-full ${
              isScrolled 
                ? "bg-[#8c6239] text-[#fafaf0] hover:bg-[#a67c52] shadow-lg shadow-[#8c6239]/20" 
                : "bg-white text-[#0f172a] hover:bg-[#fafaf0]"
            }`}
          >
            Secure Your Place
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`transition-colors md:hidden ${isScrolled ? "text-[#fafaf0]" : "text-white"}`}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu - Themed */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full mt-4 bg-[#0f172a]/95 backdrop-blur-2xl border border-[#fafaf0]/10 p-8 md:hidden rounded-3xl animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-8 text-center">
            <button onClick={() => scrollTo("about")} className="text-xl font-serif italic text-[#fafaf0]">The Sound</button>
            <button onClick={() => scrollTo("gallery")} className="text-xl font-serif italic text-[#fafaf0]">The Movement</button>
            <button onClick={() => scrollTo("lineup")} className="text-xl font-serif italic text-[#fafaf0]">The Awakening</button>
            <hr className="border-[#fafaf0]/10" />
            <button
              onClick={() => scrollTo("tickets")}
              className="bg-[#8c6239] py-4 text-sm font-bold uppercase tracking-widest text-[#fafaf0] rounded-full"
            >
              Secure Your Place
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}