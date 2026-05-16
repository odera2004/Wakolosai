"use client";

import { FadeImage } from "@/components/ui/fade-image";

const artistry = [
  {
    title: "Old-School Kenyan Praise",
    description: "The Roots",
    image: "/images/rs-3.jpg",
  },
  {
    title: "Cinematic Worship Experience",
    description: "The Atmosphere",
    image: "/images/rs-4.jpg",
  },
  {
    title: "A Stirring of the Spirit",
    description: "The Impact",
    image: "/images/rs-5.jpg",
  },
  {
    title: "Harmonies of Joy & Hope",
    description: "The Sound",
    image: "/images/rs-6.jpg",
  },
  {
    title: "Cultural Heritage Reclaimed",
    description: "The Legacy",
    image: "/images/rs-7.jpg",
  },
  {
    title: "Unity in Divine Presence",
    description: "The Community",
    image: "/images/rs-8.jpg",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="lineup" className="bg-[#fafaf0]"> {/* Warm Silk Cream Background */}
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-4xl font-serif italic tracking-tight text-[#0f172a] md:text-5xl lg:text-6xl">
          The Lord is Great.
          <br />
          <span className="text-[#8c6239]">And Greatly to be Praised.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-[10px] uppercase tracking-[0.3em] font-bold text-[#8c6239]">
          The Artistry of Wakolosai
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-8 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {artistry.map((item) => (
          <div key={item.title} className="group">
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#d6d3d1]">
              <FadeImage
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105" // Gray scale removed, maintain original color
              />
              {/* Ultra-subtle Warm Overlay to tie images to the aesthetic */}
              <div className="absolute inset-0 bg-[#8c6239]/5 mix-blend-multiply opacity-50" />
            </div>

            {/* Content */}
            <div className="py-8">
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[#8c6239]">
                {item.description}
              </p>
              <h3 className="text-[#0f172a] text-2xl font-serif italic leading-tight">
                {item.title}
              </h3>
              {/* Decorative line */}
              <div className="mt-4 h-[1px] w-10 bg-[#8c6239]/40 transition-all duration-500 group-hover:w-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Quote Footer */}
      <div className="flex justify-center px-6 pb-28 text-center md:px-12 lg:px-20">
        <p className="max-w-2xl font-serif italic text-[#8c6239]/70 text-lg">
          "Stirring the spirit and filling the heart with joy, peace, and hope."
        </p>
      </div>
    </section>
  );
}