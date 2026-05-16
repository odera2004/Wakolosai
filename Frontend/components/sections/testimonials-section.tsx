"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-[#fafaf0]"> {/* Matching the Silk Cream Background */}
      
      {/* The Mission Statement */}
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto max-w-5xl">
          {/* Subtle Label */}
          <p className="mb-8 text-[10px] uppercase tracking-[0.4em] font-bold text-[#8c6239]">
            The Sound of a Generation
          </p>
          
          {/* Main Statement in Merriweather Light Italic style */}
          <p className="font-serif italic text-3xl leading-relaxed text-[#0f172a] md:text-4xl lg:text-[2.8rem] lg:leading-[1.2]">
            Wakolosai is a powerful blend of old-school Kenyan praise songs, 
            crafted to <span className="text-[#8c6239]">stir your spirit</span> and fill your heart with 
            joy, peace, and hope. We believe the Lord is great — and greatly to be praised.
          </p>
          
          {/* Special Thanks Signature */}
          <p className="mt-12 text-sm font-medium text-[#8c6239]/60 tracking-wide">
            Special thanks to Ruach for this incredible journey.
          </p>
        </div>
      </div>

      {/* Cinematic Image with Warm Fade */}
      <div className="relative aspect-[21/9] w-full overflow-hidden">
        <Image
          src="/images/rs-2.jpg" // Maintaining your image link
          alt="Wakolosai Worship Experience"
          fill
          className="object-cover transition-transform duration-1000 hover:scale-105"
        />
        
        {/* Warm Terracotta Gradient Overlay */}
        {/* Fades from the Silk Cream background at the bottom up to transparency */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf0] via-[#fafaf0]/20 to-transparent" />
        
        {/* Subtle texture overlay for an 'analog' feel */}
        <div className="absolute inset-0 bg-[#8c6239]/5 mix-blend-overlay pointer-events-none" />
      </div>
      
      {/* Decorative Branding Element */}
      <div className="flex justify-center py-12">
        <div className="h-16 w-[1px] bg-gradient-to-b from-[#8c6239] to-transparent" />
      </div>
    </section>
  );
}