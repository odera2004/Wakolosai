"use client";

import { FadeImage } from "@/components/ui/fade-image";

const artistry = [
  {
    image: "/images/rs-3.jpg",
  },

  {

    image: "/images/rs-4.jpg",
  },
  {
   
    image: "/images/rs-5.jpg",
  },
  {
  
    image: "/images/rs-6.jpg",
  },
  {
    
    image: "/images/rs-7.jpg",
  },
  {
   
    image: "/images/rs-8.jpg",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="lineup" className="bg-black text-white select-none border-t border-white/10">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-4xl font-serif italic tracking-tight text-white md:text-5xl lg:text-6xl">
          <span className="text-[#FFB800]">Colossians 1 :15-20</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-[10px] uppercase tracking-[0.3em] font-black text-[#FFB800]">
          The Artistry of Wakolosai
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-8 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {artistry.map((item) => (
          <div className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-900 border border-white/10">
              <FadeImage
                src={item.image || "/placeholder.svg"}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Overlay Accent */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="py-8">
             
              {/* Decorative line */}
              <div className="mt-4 h-[1px] w-10 bg-[#FFB800]/40 transition-all duration-500 group-hover:w-full group-hover:bg-[#FFB800]" />
            </div>
          </div>
        ))}
      </div>

      {/* Quote Footer */}
      <div className="flex justify-center px-6 pb-28 text-center md:px-12 lg:px-20">
        <p className="max-w-2xl font-serif italic text-gray-400 text-lg">
          "<span className="text-[#FFB800]">Be part of the wakolo community</span>."
        </p>
      </div>
    </section>
  );
}
