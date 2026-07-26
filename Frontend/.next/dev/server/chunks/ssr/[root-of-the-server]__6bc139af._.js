module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/wakolosai-v2/Frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/ui/header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Menu, X, Flame } from "lucide-react";
// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   // Smooth scroll helper
//   const scrollTo = (id) => {
//     setIsMenuOpen(false);
//     const element = document.getElementById(id);
//     element?.scrollIntoView({ behavior: "smooth" });
//   };
//   return (
//     <header 
//       className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-500 ${
//         isScrolled 
//           ? "bg-[#0f172a]/40 backdrop-blur-xl border border-[#fafaf0]/10 rounded-full py-1" 
//           : "bg-transparent py-4"
//       }`}
//       style={{
//         boxShadow: isScrolled ? "0 20px 40px rgba(0,0,0,0.3)" : "none"
//       }}
//     >
//       <div className="flex items-center justify-between px-6">
//         {/* Logo Section */}
//         <div className="flex items-center gap-3">
//           <Link href="/" className="flex flex-col">
//             <span className={`text-xl font-bold tracking-[0.2em] transition-colors duration-300 ${isScrolled ? "text-[#fafaf0]" : "text-white"}`}>
//               WAKOLOSAI
//             </span>
//             <span className={`text-[10px] uppercase tracking-widest font-serif italic transition-opacity duration-300 ${isScrolled ? "text-[#8c6239] opacity-100" : "opacity-0"}`}>
//               The Awakening
//             </span>
//           </Link>
//         </div>
//         {/* Desktop Navigation - Curated for Wakolosai */}
//         <nav className="hidden items-center gap-8 md:flex">
//           {[
//             { name: "The Sound", id: "about" },
//             { name: "The Movement", id: "gallery" },
//             { name: "The Awakening", id: "lineup" }
//           ].map((item) => (
//             <button
//               key={item.name}
//               onClick={() => scrollTo(item.id)}
//               className={`text-xs uppercase tracking-widest transition-all hover:tracking-[0.3em] ${
//                 isScrolled ? "text-[#fafaf0]/70 hover:text-[#8c6239]" : "text-white/80 hover:text-white"
//               }`}
//             >
//               {item.name}
//             </button>
//           ))}
//         </nav>
//         {/* CTA Section */}
//         <div className="hidden items-center gap-4 md:flex">
//             <div className="flex items-center gap-2 mr-2">
//                 <span className="relative flex h-2 w-2">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8c6239] opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8c6239]"></span>
//                 </span>
//                 <span className={`text-[10px] uppercase tracking-tighter ${isScrolled ? "text-[#fafaf0]/50" : "text-white/50"}`}>Live Now</span>
//             </div>
//           <button
//             onClick={() => scrollTo("tickets")}
//             className={`px-6 py-2.5 text-[11px] uppercase tracking-widest font-bold transition-all rounded-full ${
//               isScrolled 
//                 ? "bg-[#8c6239] text-[#fafaf0] hover:bg-[#a67c52] shadow-lg shadow-[#8c6239]/20" 
//                 : "bg-white text-[#0f172a] hover:bg-[#fafaf0]"
//             }`}
//           >
//             Secure Your Place
//           </button>
//         </div>
//         {/* Mobile Menu Button */}
//         <button
//           type="button"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className={`transition-colors md:hidden ${isScrolled ? "text-[#fafaf0]" : "text-white"}`}
//         >
//           {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>
//       {/* Mobile Menu - Themed */}
//       {isMenuOpen && (
//         <div className="absolute top-full left-0 w-full mt-4 bg-[#0f172a]/95 backdrop-blur-2xl border border-[#fafaf0]/10 p-8 md:hidden rounded-3xl animate-in fade-in slide-in-from-top-4">
//           <nav className="flex flex-col gap-8 text-center">
//             <button onClick={() => scrollTo("about")} className="text-xl font-serif italic text-[#fafaf0]">The Sound</button>
//             <button onClick={() => scrollTo("gallery")} className="text-xl font-serif italic text-[#fafaf0]">The Movement</button>
//             <button onClick={() => scrollTo("lineup")} className="text-xl font-serif italic text-[#fafaf0]">The Awakening</button>
//             <hr className="border-[#fafaf0]/10" />
//             <button
//               onClick={() => scrollTo("tickets")}
//               className="bg-[#8c6239] py-4 text-sm font-bold uppercase tracking-widest text-[#fafaf0] rounded-full"
//             >
//               Secure Your Place
//             </button>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HeroSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HeroSection() from the server but HeroSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx <module evaluation>", "HeroSection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HeroSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HeroSection() from the server but HeroSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx", "HeroSection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "FeaturedProductsSection",
    ()=>FeaturedProductsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FeaturedProductsSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FeaturedProductsSection() from the server but FeaturedProductsSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx <module evaluation>", "FeaturedProductsSection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "FeaturedProductsSection",
    ()=>FeaturedProductsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FeaturedProductsSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FeaturedProductsSection() from the server but FeaturedProductsSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx", "FeaturedProductsSection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$featured$2d$product$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$featured$2d$product$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$featured$2d$product$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "TechnologySection",
    ()=>TechnologySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TechnologySection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TechnologySection() from the server but TechnologySection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx <module evaluation>", "TechnologySection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "TechnologySection",
    ()=>TechnologySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TechnologySection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TechnologySection() from the server but TechnologySection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx", "TechnologySection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$technology$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$technology$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$technology$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "GallerySection",
    ()=>GallerySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const GallerySection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GallerySection() from the server but GallerySection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx <module evaluation>", "GallerySection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "GallerySection",
    ()=>GallerySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const GallerySection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GallerySection() from the server but GallerySection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx", "GallerySection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$gallery$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$gallery$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$gallery$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "CollectionSection",
    ()=>CollectionSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CollectionSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CollectionSection() from the server but CollectionSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx <module evaluation>", "CollectionSection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "CollectionSection",
    ()=>CollectionSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const CollectionSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CollectionSection() from the server but CollectionSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx", "CollectionSection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$collection$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$collection$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$collection$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "EditorialSection",
    ()=>EditorialSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const EditorialSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditorialSection() from the server but EditorialSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx <module evaluation>", "EditorialSection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "EditorialSection",
    ()=>EditorialSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const EditorialSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditorialSection() from the server but EditorialSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx", "EditorialSection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$editorial$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$editorial$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$editorial$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "TestimonialsSection",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TestimonialsSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TestimonialsSection() from the server but TestimonialsSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx <module evaluation>", "TestimonialsSection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "TestimonialsSection",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TestimonialsSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TestimonialsSection() from the server but TestimonialsSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx", "TestimonialsSection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$testimonials$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$testimonials$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$testimonials$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "FooterSection",
    ()=>FooterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FooterSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FooterSection() from the server but FooterSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx <module evaluation>", "FooterSection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "FooterSection",
    ()=>FooterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FooterSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FooterSection() from the server but FooterSection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx", "FooterSection");
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$footer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$footer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$footer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/wakolosai-v2/Frontend/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$ui$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/ui/header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx [app-rsc] (ecmascript)");
// import { PhilosophySection } from "@/components/sections/philosophy-section";
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$featured$2d$product$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$technology$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$gallery$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$collection$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$editorial$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$testimonials$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$footer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$ui$2f$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$hero$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/app/page.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$featured$2d$product$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FeaturedProductsSection"], {}, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/app/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$technology$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TechnologySection"], {}, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$gallery$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GallerySection"], {}, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$collection$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollectionSection"], {}, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$editorial$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EditorialSection"], {}, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$testimonials$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TestimonialsSection"], {}, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/app/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$sections$2f$footer$2d$section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FooterSection"], {}, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wakolosai-v2/Frontend/app/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/wakolosai-v2/Frontend/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6bc139af._.js.map