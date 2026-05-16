"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const word = "WAKOLOSAI";

const sideImages = [
  { src: "/images/bill-1.png", alt: "Wakolosai 1", position: "left" },
  { src: "/images/bill-2.png", alt: "Wakolosai 2", position: "left" },
  { src: "/images/bill-3.png", alt: "Wakolosai 3", position: "right" },
  { src: "/images/bill-4.png", alt: "Wakolosai 4", position: "right" },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // We calculate based on the 300vh height
      const totalScrollable = rect.height - windowHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text fades fast
  const textOpacity = Math.max(0, 1 - scrollProgress * 5);
  // Images expand smoothly
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.1) / 0.7));

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-background">
      
      {/* 1. STICKY IMAGE LAYER (Foreground) */}
      <div className="sticky top-0 z-10 h-screen w-full overflow-hidden bg-background flex items-center justify-center">
        <div 
          className="relative flex h-full w-full items-center justify-center gap-4 transition-all duration-300"
          style={{ padding: `${imageProgress * 20}px` }}
        >
          {/* Left Column */}
          <div 
            className="flex flex-col h-full gap-4 will-change-transform"
            style={{
              width: `${imageProgress * 30}%`,
              opacity: imageProgress,
              transform: `translateX(${(1 - imageProgress) * -200}px)`,
            }}
          >
            {sideImages.filter(i => i.position === "left").map((img, i) => (
              <div key={i} className="relative flex-1 overflow-hidden rounded-[2.5rem]">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Center Main Image */}
          <div 
            className="relative overflow-hidden will-change-transform"
            style={{
              width: `${100 - (imageProgress * 40)}%`,
              height: `${100 - (imageProgress * 15)}%`,
              borderRadius: `${imageProgress * 48}px`,
            }}
          >
            <Image src="/images/bill-5.png" alt="Wakolosai Main" fill className="object-cover" priority />
            <div className="absolute inset-0 flex items-center justify-center" style={{ opacity: textOpacity }}>
              <h1 className="text-[14vw] font-bold tracking-tighter text-white uppercase italic">{word}</h1>
            </div>
          </div>

          {/* Right Column */}
          <div 
            className="flex flex-col h-full gap-4 will-change-transform"
            style={{
              width: `${imageProgress * 30}%`,
              opacity: imageProgress,
              transform: `translateX(${(1 - imageProgress) * 200}px)`,
            }}
          >
            {sideImages.filter(i => i.position === "right").map((img, i) => (
              <div key={i} className="relative flex-1 overflow-hidden rounded-[2.5rem]">
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. REVEAL LAYER (Background) */}
      {/* This sits "under" the sticky images because z-0 < z-10 */}
      <div className="relative z-0 h-screen w-full flex items-center justify-center bg-background px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-8 text-sm font-bold uppercase tracking-[0.4em] text-primary/40">
            The Wakolosai Standard
          </h2>
          <p className="text-5xl leading-[1.05] font-medium text-foreground md:text-8xl tracking-tight">
            Crafted for the <br /> modern wanderer.
          </p>
          <p className="mt-10 text-2xl text-muted-foreground italic">
            Uncompromising durability for every journey.
          </p>
        </div>
      </div>
      
    </section>
  );
}