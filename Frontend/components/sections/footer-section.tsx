"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

const footerLinks = {
  movement: [
    { label: "The Sound", href: "#about" },
    { label: "The Artistry", href: "#lineup" },
    { label: "The Gallery", href: "#gallery" },
    { label: "Secure Your Place", href: "#tickets-section" },
  ],
  connect: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Contact", href: "mailto:info@wakolosai.com" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-black text-white border-t border-white/10 select-none">
      {/* Main Footer Content */}
      <div className="px-6 py-16 md:px-12 md:py-20 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <Link href="/" className="text-2xl font-black tracking-[0.25em] text-white hover:text-[#FFB800] transition-colors">
              WAKOLOSAI
            </Link>
            <p className="mt-6 max-w-sm font-serif italic text-lg leading-relaxed text-gray-400">
              The Lord is great and greatly to be praised. A stir of joy, peace, and hope for a new generation.
            </p>
          </div>

          {/* The Movement Links */}
          <div>
            <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#FFB800]">The Movement</h4>
            <ul className="space-y-4">
              {footerLinks.movement.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-all duration-200 hover:text-white hover:pl-1.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Connect */}
          <div>
            <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#FFB800]">Connect</h4>
            <ul className="space-y-4">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 transition-all duration-200 hover:text-white hover:pl-1.5 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 px-6 py-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Trademark Info */}
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
            © 2026 WAKOLOSAI. All for His Glory.
          </p>

          {/* Credit */}
          <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
            Special thanks to <span className="text-[#FFB800]">Ruach</span>
          </p>

          {/* Minimalist Top Scroll */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[10px] font-black uppercase tracking-widest text-white hover:text-[#FFB800] transition-colors flex items-center gap-2 group"
          >
            Back to top <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}