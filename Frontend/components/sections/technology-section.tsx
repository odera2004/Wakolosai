// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";

// function ScrollRevealText({ text }: { text: string }) {
//   const containerRef = useRef<HTMLParagraphElement>(null);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!containerRef.current) return;
//       const rect = containerRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
//       const startOffset = windowHeight * 0.9;
//       const endOffset = windowHeight * 0.1;
//       const totalDistance = startOffset - endOffset;
//       const currentPosition = startOffset - rect.top;
//       const newProgress = Math.max(0, Math.min(1, currentPosition / totalDistance));
//       setProgress(newProgress);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const words = text.split(" ");
  
//   return (
//     <p ref={containerRef} className="font-serif italic text-3xl leading-relaxed md:text-4xl lg:text-5xl">
//       {words.map((word, index) => {
//         const wordProgress = index / words.length;
//         const isRevealed = progress > wordProgress;
//         return (
//           <span
//             key={index}
//             className="transition-colors duration-300"
//             style={{ color: isRevealed ? "#0f172a" : "#e2e2d5" }}
//           >
//             {word}{index < words.length - 1 ? " " : ""}
//           </span>
//         );
//       })}
//     </p>
//   );
// }

// const sideImages = [
//   { src: "/images/rs-21.jpg", alt: "Worship 1", position: "left", span: 1 },
//   { src: "/images/rs-20.jpg", alt: "Worship 2", position: "left", span: 1 },
//   { src: "/images/rs-19.jpg", alt: "Worship 3", position: "right", span: 1 },
//   { src: "/images/rs-18.jpg", alt: "Worship 4", position: "right", span: 1 },
// ];

// export function TechnologySection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const textSectionRef = useRef<HTMLDivElement>(null);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const scripturalText = "Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God. For the Lord is great, and greatly to be praised; He is to be feared above all gods. This is the awakening of the sound.";

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       const scrollableHeight = window.innerHeight * 2;
//       const scrolled = -rect.top;
//       const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
//       setScrollProgress(progress);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
//   const centerWidth = 100 - (imageProgress * 58);
//   const sideWidth = imageProgress * 22;
//   const sideOpacity = imageProgress;
//   const sideTranslateLeft = -100 + (imageProgress * 100);
//   const sideTranslateRight = 100 - (imageProgress * 100);
//   const borderRadius = imageProgress * 32;
//   const gap = imageProgress * 16;

//   return (
//     <section ref={sectionRef} className="relative bg-[#0f172a]">
//       <div className="sticky top-0 h-screen overflow-hidden">
//         <div className="flex h-full w-full items-center justify-center">
//           <div className="relative flex h-full w-full items-stretch justify-center" style={{ gap: `${gap}px`, padding: `${imageProgress * 20}px` }}>
            
//             {/* Left Column */}
//             <div className="flex flex-col will-change-transform" style={{ width: `${sideWidth}%`, gap: `${gap}px`, transform: `translateX(${sideTranslateLeft}%)`, opacity: sideOpacity }}>
//               {sideImages.filter(img => img.position === "left").map((img, idx) => (
//                 <div key={idx} className="relative overflow-hidden" style={{ flex: img.span, borderRadius: `${borderRadius}px` }}>
//                   <Image src={img.src} alt={img.alt} fill className="object-cover" />
//                 </div>
//               ))}
//             </div>

//             {/* Main Center Image */}
//             <div className="relative overflow-hidden will-change-transform" style={{ width: `${centerWidth}%`, height: "100%", flex: "0 0 auto", borderRadius: `${borderRadius}px` }}>
//               <Image src="/images/bill-4.png" alt="Wakolosai Main" fill className="object-cover" />
//               <div className="absolute inset-0 bg-[#0f172a]/40" />
              
//               <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
//                 <h2 className="max-w-4xl font-serif italic leading-tight text-[#fafaf0] text-5xl md:text-6xl lg:text-8xl">
//                   {["Deep", "Calls", "To", "Deep."].map((word, index) => {
//                     const wordFadeStart = index * 0.05;
//                     const wordFadeEnd = wordFadeStart + 0.05;
//                     const wordProgress = Math.max(0, Math.min(1, (scrollProgress - wordFadeStart) / (wordFadeEnd - wordFadeStart)));
//                     return (
//                       <span key={index} className="inline-block" style={{ opacity: 1 - wordProgress, filter: `blur(${wordProgress * 15}px)`, transition: 'all 0.1s linear', marginRight: '0.2em' }}>
//                         {word}
//                         {index === 1 && <br />}
//                       </span>
//                     );
//                   })}
//                 </h2>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="flex flex-col will-change-transform" style={{ width: `${sideWidth}%`, gap: `${gap}px`, transform: `translateX(${sideTranslateRight}%)`, opacity: sideOpacity }}>
//               {sideImages.filter(img => img.position === "right").map((img, idx) => (
//                 <div key={idx} className="relative overflow-hidden" style={{ flex: img.span, borderRadius: `${borderRadius}px` }}>
//                   <Image src={img.src} alt={img.alt} fill className="object-cover" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="h-[200vh]" />

//       {/* Description Section with Scripture Reveal */}
//       <div ref={textSectionRef} className="relative overflow-hidden bg-[#fafaf0] px-6 py-32 md:px-12 md:py-48 lg:px-20">
//         <div className="relative z-10 mx-auto max-w-5xl">
//           <p className="mb-8 text-[10px] uppercase tracking-[0.6em] font-bold text-[#8c6239]">Colossians 3:16</p>
//           <ScrollRevealText text={scripturalText} />
//         </div>
//       </div>
//     </section>
//   );
// }