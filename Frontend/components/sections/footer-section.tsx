"use client";

import Link from "next/link";

const footerLinks = {
  movement: [
    { label: "The Sound", href: "#about" },
    { label: "The Artistry", href: "#lineup" },
    { label: "The Gallery", href: "#gallery" },
    { label: "Secure Your Place", href: "#tickets" },
  ],
  connect: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Contact", href: "mailto:info@wakolosai.com" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-[#fafaf0] border-t border-[#8c6239]/10">
      {/* Main Footer Content */}
      <div className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          
          {/* Brand & Mission */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-[0.2em] text-[#0f172a]">
              WAKOLOSAI
            </Link>
            <p className="mt-6 max-w-xs font-serif italic text-lg leading-relaxed text-[#8c6239]">
              The Lord is great and greatly to be praised. A stir of joy, peace, and hope for a new generation.
            </p>
          </div>

          {/* The Movement Links */}
          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f172a]">The Movement</h4>
            <ul className="space-y-4">
              {footerLinks.movement.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8c6239]/70 transition-all hover:text-[#8c6239] hover:pl-2"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / Connect */}
          <div>
            <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f172a]">Connect</h4>
            <ul className="space-y-4">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8c6239]/70 transition-all hover:text-[#8c6239] hover:pl-2"
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
      <div className="border-t border-[#8c6239]/5 px-6 py-8 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Trademark Info */}
          <p className="text-[10px] uppercase tracking-widest text-[#8c6239]/40">
            © 2026 WAKOLOSAI. All for His Glory.
          </p>

          {/* Credit */}
          <p className="text-[10px] uppercase tracking-widest text-[#8c6239]/40">
            Special thanks to <span className="text-[#8c6239]/60">Ruach</span>
          </p>

          {/* Minimalist Top Scroll */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[10px] uppercase tracking-widest text-[#0f172a] hover:text-[#8c6239] transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}