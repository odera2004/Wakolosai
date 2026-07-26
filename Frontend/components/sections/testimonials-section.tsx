"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-black text-white select-none border-t border-white/10"> {/* Matching the Dark High-Contrast Theme */}
      
      {/* The Mission Statement */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto max-w-5xl">
          {/* Subtle Gold Label */}
          <p className="mb-8 text-[10px] uppercase tracking-[0.4em] font-black text-[#FFB800]">
            The Sound of a Generation
          </p>
          
          {/* Main Statement in Serif Light Italic style */}
          <p className="font-serif italic text-3xl leading-relaxed text-white md:text-4xl lg:text-[2.8rem] lg:leading-[1.2]">
            Wakolosai is a powerful blend of old-school Kenyan praise songs, 
            crafted to <span className="text-[#FFB800]">stir your spirit</span> and fill your heart with 
            joy, peace, and hope. We believe the Lord is great — and greatly to be praised.
          </p>
          
          {/* Special Thanks Signature */}
          <p className="mt-12 text-sm font-medium text-gray-500 tracking-wide">
            Special thanks to <span className="text-[#FFB800]">Ruach</span> for this incredible journey.
          </p>
        </div>
      </div>

      {/* Cinematic Image with Dark Fade */}
      <div className="relative aspect-[21/9] w-full overflow-hidden border-y border-white/10">
        <Image
          src="/images/rs-2.jpg" // Maintaining your image link
          alt="Wakolosai Worship Experience"
          fill
          className="object-cover grayscale contrast-125 hover:grayscale-0 transition-transform duration-1000 hover:scale-105"
        />
        
        {/* Dark Gradient Overlay */}
        {/* Fades from the Black background at the bottom up to transparency */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        
        {/* Subtle texture overlay for an 'analog' feel */}
        <div className="absolute inset-0 bg-[#FFB800]/5 mix-blend-overlay pointer-events-none" />
      </div>
      
      {/* Decorative Branding Line */}
      <div className="flex justify-center py-12">
        <div className="h-16 w-[1px] bg-gradient-to-b from-[#FFB800] to-transparent" />
      </div>
    </section>
  );
}