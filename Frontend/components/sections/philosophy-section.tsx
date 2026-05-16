// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState, useCallback } from "react";

// export function PhilosophySection() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const [progress, setProgress] = useState(0);
//   const rafRef = useRef<number | null>(null);

//   const updateTransforms = useCallback(() => {
//     if (!sectionRef.current) return;
    
//     const rect = sectionRef.current.getBoundingClientRect();
//     const windowHeight = window.innerHeight;
//     const sectionHeight = sectionRef.current.offsetHeight;
    
//     // Calculate progress based on scroll position within the 200vh
//     const scrollableRange = sectionHeight - windowHeight;
//     const scrolled = -rect.top;
//     const currentProgress = Math.max(0, Math.min(1, scrolled / scrollableRange));
    
//     setProgress(currentProgress);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       rafRef.current = requestAnimationFrame(updateTransforms);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     updateTransforms();
    
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [updateTransforms]);

//   // Logic: -100% (hidden) to 0% (center of screen)
//   const alpineTranslateX = (1 - progress) * -100;
//   const forestTranslateX = (1 - progress) * 100;
//   const titleOpacity = 1 - progress;

//   return (
//     <section id="products" className="bg-background overflow-hidden">
//       {/* 1. ANIMATION AREA */}
//       <div ref={sectionRef} className="relative h-[200vh]">
//         <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
//           {/* Title sits behind the images */}
//           <div 
//             className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 px-4"
//             style={{ opacity: titleOpacity }}
//           >
//             <h2 className="text-[9vw] font-bold tracking-tighter text-foreground text-center uppercase leading-none">
//               Meet Alpine <br /> & Forest.
//             </h2>
//           </div>

//           {/* Full-Screen Image Container (No Padding, No Gaps) */}
//           <div className="relative z-10 flex w-full h-full gap-0">
            
//             {/* Alpine - Slides from left */}
//             <div 
//               className="relative h-full w-1/2 overflow-hidden will-change-transform"
//               style={{ transform: `translateX(${alpineTranslateX}%)` }}
//             >
//               <Image
//                 src="/images/bill-2.png"
//                 alt="Alpine Edition"
//                 fill
//                 className="object-cover"
//                 sizes="50vw"
//               />
//               <div className="absolute bottom-10 left-10 z-20">
//                 <span className="backdrop-blur-md px-6 py-2 text-sm font-bold rounded-full bg-black/30 text-white border border-white/20 uppercase">
//                   Alpine $299
//                 </span>
//               </div>
//             </div>

//             {/* Forest - Slides from right */}
//             <div 
//               className="relative h-full w-1/2 overflow-hidden will-change-transform"
//               style={{ transform: `translateX(${forestTranslateX}%)` }}
//             >
//               <Image
//                 src="/images/bill-3.png"
//                 alt="Forest Edition"
//                 fill
//                 className="object-cover"
//                 sizes="50vw"
//               />
//               <div className="absolute bottom-10 right-10 z-20">
//                 <span className="backdrop-blur-md px-6 py-2 text-sm font-bold rounded-full bg-black/30 text-white border border-white/20 uppercase">
//                   Forest $199
//                 </span>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* 2. DESCRIPTION AREA */}
//       <div className="relative z-20 bg-background px-6 py-32 text-center">
//         <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
//           First Generation
//         </p>
//         <p className="mx-auto max-w-4xl text-3xl md:text-5xl font-medium leading-tight text-foreground tracking-tight">
//           Alpine & Forest are high-tech outdoor accessories designed for Wakolosai adventurers. 
//           Lightweight, durable, and engineered for extreme conditions.
//         </p>
//       </div>
//     </section>
//   );
// }