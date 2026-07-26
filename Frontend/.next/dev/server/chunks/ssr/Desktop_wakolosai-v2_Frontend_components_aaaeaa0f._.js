module.exports = [
"[project]/Desktop/wakolosai-v2/Frontend/components/ui/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
"use client";
;
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
 // return (
 // <header 
 //   className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl transition-all duration-500 ${
 //     isScrolled 
 //       ? "bg-[#0f172a]/40 backdrop-blur-xl border border-[#fafaf0]/10 rounded-full py-1" 
 //       : "bg-transparent py-4"
 //   }`}
 //   style={{
 //     boxShadow: isScrolled ? "0 20px 40px rgba(0,0,0,0.3)" : "none"
 //   }}
 // >
 //   <div className="flex items-center justify-between px-6">
 //     {/* Logo Section */}
 //     <div className="flex items-center gap-3">
 //       <Link href="/" className="flex flex-col">
 //         <span className={`text-xl font-bold tracking-[0.2em] transition-colors duration-300 ${isScrolled ? "text-[#fafaf0]" : "text-white"}`}>
 //           WAKOLOSAI
 //         </span>
 //         <span className={`text-[10px] uppercase tracking-widest font-serif italic transition-opacity duration-300 ${isScrolled ? "text-[#8c6239] opacity-100" : "opacity-0"}`}>
 //           The Awakening
 //         </span>
 //       </Link>
 //     </div>
 //     {/* Desktop Navigation - Curated for Wakolosai */}
 //     <nav className="hidden items-center gap-8 md:flex">
 //       {[
 //         { name: "The Sound", id: "about" },
 //         { name: "The Movement", id: "gallery" },
 //         { name: "The Awakening", id: "lineup" }
 //       ].map((item) => (
 //         <button
 //           key={item.name}
 //           onClick={() => scrollTo(item.id)}
 //           className={`text-xs uppercase tracking-widest transition-all hover:tracking-[0.3em] ${
 //             isScrolled ? "text-[#fafaf0]/70 hover:text-[#8c6239]" : "text-white/80 hover:text-white"
 //           }`}
 //         >
 //           {item.name}
 //         </button>
 //       ))}
 //     </nav>
 //     {/* CTA Section */}
 //     <div className="hidden items-center gap-4 md:flex">
 //         <div className="flex items-center gap-2 mr-2">
 //             <span className="relative flex h-2 w-2">
 //                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8c6239] opacity-75"></span>
 //                 <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8c6239]"></span>
 //             </span>
 //             <span className={`text-[10px] uppercase tracking-tighter ${isScrolled ? "text-[#fafaf0]/50" : "text-white/50"}`}>Live Now</span>
 //         </div>
 //       <button
 //         onClick={() => scrollTo("tickets")}
 //         className={`px-6 py-2.5 text-[11px] uppercase tracking-widest font-bold transition-all rounded-full ${
 //           isScrolled 
 //             ? "bg-[#8c6239] text-[#fafaf0] hover:bg-[#a67c52] shadow-lg shadow-[#8c6239]/20" 
 //             : "bg-white text-[#0f172a] hover:bg-[#fafaf0]"
 //         }`}
 //       >
 //         Secure Your Place
 //       </button>
 //     </div>
 //     {/* Mobile Menu Button */}
 //     <button
 //       type="button"
 //       onClick={() => setIsMenuOpen(!isMenuOpen)}
 //       className={`transition-colors md:hidden ${isScrolled ? "text-[#fafaf0]" : "text-white"}`}
 //     >
 //       {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
 //     </button>
 //   </div>
 //   {/* Mobile Menu - Themed */}
 //   {isMenuOpen && (
 //     <div className="absolute top-full left-0 w-full mt-4 bg-[#0f172a]/95 backdrop-blur-2xl border border-[#fafaf0]/10 p-8 md:hidden rounded-3xl animate-in fade-in slide-in-from-top-4">
 //       <nav className="flex flex-col gap-8 text-center">
 //         <button onClick={() => scrollTo("about")} className="text-xl font-serif italic text-[#fafaf0]">The Sound</button>
 //         <button onClick={() => scrollTo("gallery")} className="text-xl font-serif italic text-[#fafaf0]">The Movement</button>
 //         <button onClick={() => scrollTo("lineup")} className="text-xl font-serif italic text-[#fafaf0]">The Awakening</button>
 //         <hr className="border-[#fafaf0]/10" />
 //         <button
 //           onClick={() => scrollTo("tickets")}
 //           className="bg-[#8c6239] py-4 text-sm font-bold uppercase tracking-widest text-[#fafaf0] rounded-full"
 //         >
 //           Secure Your Place
 //         </button>
 //       </nav>
 //     </div>
 //   )}
 // </header>
 //   );
 // }
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
function HeroSection({ onBuyTicketClick, onBuyMerchClick }) {
    const handleTicketClick = ()=>{
        if (onBuyTicketClick) {
            onBuyTicketClick();
        } else {
            const ticketSection = document.getElementById("tickets-section");
            ticketSection?.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    const handleMerchClick = ()=>{
        if (onBuyMerchClick) {
            onBuyMerchClick();
        } else {
            const merchSection = document.getElementById("merch-section");
            merchSection?.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-screen w-full overflow-hidden bg-black text-white font-sans select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/bill-5.png",
                        alt: "Wakolosai Live Experience",
                        fill: true,
                        className: "object-cover object-center grayscale contrast-125",
                        priority: true,
                        quality: 100
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/40"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-6 right-6 md:top-10 md:right-12 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[11px] md:text-xs font-black tracking-[0.25em] uppercase text-white",
                    children: "JOIN THE MOVEMENT"
                }, void 0, false, {
                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-full w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/2 max-w-[280px] sm:max-w-[340px] md:max-w-[420px] pointer-events-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/Wakolosailogo.png",
                            alt: "Wakolosai X Logo",
                            width: 400,
                            height: 400,
                            className: "w-full h-auto object-contain drop-shadow-xl",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1/2 text-right pointer-events-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1] uppercase tracking-tight leading-tight text-white drop-shadow-md",
                            children: [
                                "JE, WEWE NI ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                                    lineNumber: 71,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#FFB800]",
                                    children: "MKOLOOO?"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-0 right-0 z-20 px-6 md:px-12 max-w-7xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleTicketClick,
                            className: "bg-[#FFB800] rounded-md rounded-lg hover:bg-[#e0a200] text-black font-extrabold text-sm md:text-base uppercase tracking-wider px-8 md:px-12 py-3 md:py-3.5 transition-colors duration-200",
                            children: "Buy Ticket"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleMerchClick,
                            className: "bg-[#FFB800] hover:bg-[#e0a200] text-black font-extrabold text-sm md:text-base uppercase tracking-wider px-8 md:px-12 py-3 md:py-3.5 rounded-md md:rounded-lg shadow-md hover:scale-105 active:scale-95 transition-all duration-200",
                            children: "Buy merch"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/hero-section.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/ui/fade-image.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeImage",
    ()=>FadeImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function FadeImage({ className, fadeDelay = 0, ...props }) {
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                setTimeout(()=>{
                    setIsVisible(true);
                }, fadeDelay);
                observer.disconnect();
            }
        }, {
            threshold: 0.1,
            rootMargin: "50px"
        });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return ()=>observer.disconnect();
    }, [
        fadeDelay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "relative h-full w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            ...props,
            className: `${className || ""} transition-all duration-700 ease-out ${isVisible && isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"}`,
            onLoad: ()=>setIsLoaded(true)
        }, void 0, false, {
            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/ui/fade-image.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/ui/fade-image.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturedProductsSection",
    ()=>FeaturedProductsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$ui$2f$fade$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/ui/fade-image.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const artistry = [
    {
        title: "Old-School Kenyan Praise",
        description: "The Roots",
        image: "/images/rs-3.jpg"
    },
    {
        title: "Cinematic Worship Experience",
        description: "The Atmosphere",
        image: "/images/rs-4.jpg"
    },
    {
        title: "A Stirring of the Spirit",
        description: "The Impact",
        image: "/images/rs-5.jpg"
    },
    {
        title: "Harmonies of Joy & Hope",
        description: "The Sound",
        image: "/images/rs-6.jpg"
    },
    {
        title: "Cultural Heritage Reclaimed",
        description: "The Legacy",
        image: "/images/rs-7.jpg"
    },
    {
        title: "Unity in Divine Presence",
        description: "The Community",
        image: "/images/rs-8.jpg"
    }
];
function FeaturedProductsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "lineup",
        className: "bg-[#fafaf0]",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-serif italic tracking-tight text-[#0f172a] md:text-5xl lg:text-6xl",
                        children: [
                            "The Lord is Great.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#8c6239]",
                                children: "And Greatly to be Praised."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-6 max-w-md text-[10px] uppercase tracking-[0.3em] font-bold text-[#8c6239]",
                        children: "The Artistry of Wakolosai"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-8 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20",
                children: artistry.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#d6d3d1]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$ui$2f$fade$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeImage"], {
                                        src: item.image || "/placeholder.svg",
                                        alt: item.title,
                                        fill: true,
                                        className: "object-cover transition-transform duration-700 group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[#8c6239]/5 mix-blend-multiply opacity-50"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[#8c6239]",
                                        children: item.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-[#0f172a] text-2xl font-serif italic leading-tight",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 h-[1px] w-10 bg-[#8c6239]/40 transition-all duration-500 group-hover:w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.title, true, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center px-6 pb-28 text-center md:px-12 lg:px-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "max-w-2xl font-serif italic text-[#8c6239]/70 text-lg",
                    children: '"Stirring the spirit and filling the heart with joy, peace, and hope."'
                }, void 0, false, {
                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/featured-product-section.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TechnologySection",
    ()=>TechnologySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ScrollRevealText({ text }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const startOffset = windowHeight * 0.9;
            const endOffset = windowHeight * 0.1;
            const totalDistance = startOffset - endOffset;
            const currentPosition = startOffset - rect.top;
            const newProgress = Math.max(0, Math.min(1, currentPosition / totalDistance));
            setProgress(newProgress);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        handleScroll();
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const words = text.split(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: containerRef,
        className: "font-serif italic text-3xl leading-relaxed md:text-4xl lg:text-5xl",
        children: words.map((word, index)=>{
            const wordProgress = index / words.length;
            const isRevealed = progress > wordProgress;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "transition-colors duration-300",
                style: {
                    color: isRevealed ? "#0f172a" : "#e2e2d5"
                },
                children: [
                    word,
                    index < words.length - 1 ? " " : ""
                ]
            }, index, true, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                lineNumber: 36,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
const sideImages = [
    {
        src: "/images/rs-21.jpg",
        alt: "Worship 1",
        position: "left",
        span: 1
    },
    {
        src: "/images/rs-20.jpg",
        alt: "Worship 2",
        position: "left",
        span: 1
    },
    {
        src: "/images/rs-19.jpg",
        alt: "Worship 3",
        position: "right",
        span: 1
    },
    {
        src: "/images/rs-18.jpg",
        alt: "Worship 4",
        position: "right",
        span: 1
    }
];
function TechnologySection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scrollProgress, setScrollProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const scripturalText = "Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God. For the Lord is great, and greatly to be praised; He is to be feared above all gods. This is the awakening of the sound.";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const scrollableHeight = window.innerHeight * 2;
            const scrolled = -rect.top;
            const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
            setScrollProgress(progress);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        handleScroll();
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, []);
    const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
    const centerWidth = 100 - imageProgress * 58;
    const sideWidth = imageProgress * 22;
    const sideOpacity = imageProgress;
    const sideTranslateLeft = -100 + imageProgress * 100;
    const sideTranslateRight = 100 - imageProgress * 100;
    const borderRadius = imageProgress * 32;
    const gap = imageProgress * 16;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative bg-[#0f172a]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 h-screen overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full w-full items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex h-full w-full items-stretch justify-center",
                        style: {
                            gap: `${gap}px`,
                            padding: `${imageProgress * 20}px`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col will-change-transform",
                                style: {
                                    width: `${sideWidth}%`,
                                    gap: `${gap}px`,
                                    transform: `translateX(${sideTranslateLeft}%)`,
                                    opacity: sideOpacity
                                },
                                children: sideImages.filter((img)=>img.position === "left").map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative overflow-hidden",
                                        style: {
                                            flex: img.span,
                                            borderRadius: `${borderRadius}px`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: img.src,
                                            alt: img.alt,
                                            fill: true,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden will-change-transform",
                                style: {
                                    width: `${centerWidth}%`,
                                    height: "100%",
                                    flex: "0 0 auto",
                                    borderRadius: `${borderRadius}px`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/bill-4.png",
                                        alt: "Wakolosai Main",
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-[#0f172a]/40"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex flex-col items-center justify-center px-6 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "max-w-4xl font-serif italic leading-tight text-[#fafaf0] text-5xl md:text-6xl lg:text-8xl",
                                            children: [
                                                "Deep",
                                                "Calls",
                                                "To",
                                                "Deep."
                                            ].map((word, index)=>{
                                                const wordFadeStart = index * 0.05;
                                                const wordFadeEnd = wordFadeStart + 0.05;
                                                const wordProgress = Math.max(0, Math.min(1, (scrollProgress - wordFadeStart) / (wordFadeEnd - wordFadeStart)));
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-block",
                                                    style: {
                                                        opacity: 1 - wordProgress,
                                                        filter: `blur(${wordProgress * 15}px)`,
                                                        transition: 'all 0.1s linear',
                                                        marginRight: '0.2em'
                                                    },
                                                    children: [
                                                        word,
                                                        index === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col will-change-transform",
                                style: {
                                    width: `${sideWidth}%`,
                                    gap: `${gap}px`,
                                    transform: `translateX(${sideTranslateRight}%)`,
                                    opacity: sideOpacity
                                },
                                children: sideImages.filter((img)=>img.position === "right").map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative overflow-hidden",
                                        style: {
                                            flex: img.span,
                                            borderRadius: `${borderRadius}px`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: img.src,
                                            alt: img.alt,
                                            fill: true,
                                            className: "object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[200vh]"
            }, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: textSectionRef,
                className: "relative overflow-hidden bg-[#fafaf0] px-6 py-32 md:px-12 md:py-48 lg:px-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 mx-auto max-w-5xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-8 text-[10px] uppercase tracking-[0.6em] font-bold text-[#8c6239]",
                            children: "Colossians 3:16"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollRevealText, {
                            text: scripturalText
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/technology-section.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GallerySection",
    ()=>GallerySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function GallerySection() {
    const galleryRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [sectionHeight, setSectionHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("100vh");
    const [translateX, setTranslateX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const images = [
        {
            src: "/images/rs-9.jpg",
            alt: "Thermal bottle on bike"
        },
        {
            src: "/images/rs-10.jpg",
            alt: "Thermal bottle by lake"
        },
        {
            src: "/images/rs-11.jpg",
            alt: "Thermal bottle in water"
        },
        {
            src: "/images/rs-12.jpg",
            alt: "Thermal bottle by stream"
        },
        {
            src: "/images/rs-13.jpg",
            alt: "Thermal bottle by fire"
        },
        {
            src: "/images/rs-14.jpg",
            alt: "Thermal bottle in snow"
        },
        {
            src: "/images/rs-15.jpg",
            alt: "Thermal bottle on mountain"
        },
        {
            src: "/images/rs-16.jpg",
            alt: "Thermal bottle at canyon"
        }
    ];
    // Calculate section height based on content width
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const calculateHeight = ()=>{
            if (!containerRef.current) return;
            const containerWidth = containerRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            // Height = viewport height + the extra scroll needed to reveal all content
            const totalHeight = viewportHeight + (containerWidth - viewportWidth);
            setSectionHeight(`${totalHeight}px`);
        };
        // Small delay to ensure container is rendered
        const timer = setTimeout(calculateHeight, 100);
        window.addEventListener("resize", calculateHeight);
        return ()=>{
            clearTimeout(timer);
            window.removeEventListener("resize", calculateHeight);
        };
    }, []);
    const updateTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!galleryRef.current || !containerRef.current) return;
        const rect = galleryRef.current.getBoundingClientRect();
        const containerWidth = containerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Total scroll distance needed to reveal all images
        const totalScrollDistance = containerWidth - viewportWidth;
        // Current scroll position within this section
        const scrolled = Math.max(0, -rect.top);
        // Progress from 0 to 1
        const progress = Math.min(1, scrolled / totalScrollDistance);
        // Calculate new translateX
        const newTranslateX = progress * -totalScrollDistance;
        setTranslateX(newTranslateX);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            // Cancel any pending animation frame
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            // Use requestAnimationFrame for smooth updates
            rafRef.current = requestAnimationFrame(updateTransform);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        updateTransform();
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [
        updateTransform
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "gallery",
        ref: galleryRef,
        className: "relative bg-background",
        style: {
            height: sectionHeight
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 h-screen overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: "flex gap-6 px-6",
                    style: {
                        transform: `translate3d(${translateX}px, 0, 0)`,
                        WebkitTransform: `translate3d(${translateX}px, 0, 0)`,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        perspective: 1000,
                        WebkitPerspective: 1000,
                        touchAction: 'pan-y'
                    },
                    children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl md:w-[60vw] lg:w-[45vw]",
                            style: {
                                transform: 'translateZ(0)',
                                WebkitTransform: 'translateZ(0)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: image.src || "/placeholder.svg",
                                alt: image.alt,
                                fill: true,
                                className: "object-cover",
                                priority: index < 3
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx",
                                lineNumber: 123,
                                columnNumber: 17
                            }, this)
                        }, index, false, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/gallery-section.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollectionSection",
    ()=>CollectionSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$ui$2f$fade$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/components/ui/fade-image.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/lucide-react/dist/esm/icons/ticket.js [app-ssr] (ecmascript) <export default as Ticket>");
"use client";
;
;
;
;
const ticketTiers = [
    {
        id: "early-bird",
        name: "Early Bird Praise",
        description: "Limited availability for the early seekers of the awakening.",
        price: 1,
        image: "/images/bill-6.png"
    },
    {
        id: "regular",
        name: "Regular Gate",
        description: "Full access to the cinematic worship experience.",
        price: 1,
        image: "/images/bill-10.png"
    }
];
function CollectionSection() {
    const [quantities, setQuantities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        "early-bird": 0,
        "regular": 0
    });
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const updateQty = (id, delta)=>{
        const total = Object.values(quantities).reduce((a, b)=>a + b, 0);
        if (delta > 0 && total >= 3) return alert("Maximum 3 tickets per person.");
        setQuantities((prev)=>({
                ...prev,
                [id]: Math.max(0, prev[id] + delta)
            }));
    };
    // UPDATED CALCULATION FOR 1 KES TESTING
    const totalAmount = quantities["early-bird"] * 1 + quantities["regular"] * 1;
    const handleCheckout = async ()=>{
        if (!email.trim() || !phone.trim() || totalAmount === 0) {
            return alert("Please fill in your details and select at least one ticket.");
        }
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/buy-ticket", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phone: phone.trim(),
                    email: email.toLowerCase().trim(),
                    amount: totalAmount
                })
            });
            const data = await res.json();
            if (res.ok) {
                alert("✅ STK Push sent! Enter your M-Pesa PIN on your phone to complete the awakening.");
                setQuantities({
                    "early-bird": 0,
                    "regular": 0
                });
            } else {
                alert(`❌ ${data.error || "Something went wrong."}`);
            }
        } catch (err) {
            console.error("Connection Error:", err);
            alert("❌ Connection failed. Ensure your backend server is running on port 5000.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "tickets",
        className: "bg-[#fafaf0] py-24 border-t border-[#8c6239]/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-6 md:px-12 lg:px-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl font-serif italic text-[#0f172a] md:text-5xl",
                            children: "Secure Your Place"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-[#8c6239] uppercase tracking-widest text-[10px] font-bold",
                            children: "Limited capacity for the awakening"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-6",
                            children: ticketTiers.map((tier)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group flex bg-white rounded-3xl overflow-hidden border border-[#8c6239]/10 shadow-sm transition-all hover:shadow-md",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-1/3 aspect-square",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$components$2f$ui$2f$fade$2d$image$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FadeImage"], {
                                                src: tier.image,
                                                alt: tier.name,
                                                fill: true,
                                                className: "object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 flex-1 flex flex-col justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-serif italic text-[#0f172a]",
                                                            children: tier.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-[#8c6239]/70 mt-1",
                                                            children: tier.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-bold text-[#8c6239]",
                                                            children: [
                                                                tier.price,
                                                                " KES"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 bg-[#fafaf0] rounded-full px-3 py-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateQty(tier.id, -1),
                                                                    className: "text-[#8c6239] font-bold",
                                                                    children: "-"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                                    lineNumber: 100,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-mono",
                                                                    children: quantities[tier.id]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                                    lineNumber: 101,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>updateQty(tier.id, 1),
                                                                    className: "text-[#8c6239] font-bold",
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                                    lineNumber: 102,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, tier.id, true, {
                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#0f172a] p-8 md:p-10 rounded-[3rem] text-[#fafaf0] sticky top-32 shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-serif italic mb-6",
                                    children: "Reservation Details"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] uppercase tracking-widest opacity-50 block mb-2",
                                                    children: "M-Pesa Phone Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "0700 000 000",
                                                    className: "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#8c6239] transition-all",
                                                    value: phone,
                                                    onChange: (e)=>setPhone(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[10px] uppercase tracking-widest opacity-50 block mb-2",
                                                    children: "Email for Ticket Delivery"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    placeholder: "name@example.com",
                                                    className: "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#8c6239] transition-all",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-6 border-t border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-end mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm opacity-60",
                                                            children: "Total Investment"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-4xl font-serif italic text-[#8c6239]",
                                                            children: [
                                                                totalAmount.toLocaleString(),
                                                                " KES"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleCheckout,
                                                    disabled: loading || totalAmount === 0,
                                                    className: "w-full bg-[#8c6239] py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[12px] flex items-center justify-center gap-3 hover:bg-[#a67c52] transition-all disabled:opacity-30 disabled:cursor-not-allowed",
                                                    children: [
                                                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "animate-spin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 30
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 69
                                                        }, this),
                                                        loading ? "Processing..." : "Secure My Blessing"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/collection-section.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorialSection",
    ()=>EditorialSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const impact = [
    {
        label: "The Movement",
        value: "2026"
    },
    {
        label: "Worshippers",
        value: "1,500+"
    },
    {
        label: "The Frequency",
        value: "432Hz"
    },
    {
        label: "The Promise",
        value: "Joy"
    }
];
function EditorialSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#fafaf0]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center pt-24 pb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] uppercase tracking-[0.6em] font-bold text-[#8c6239] mb-4",
                        children: "The Awakening"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                        lineNumber: 17,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[40px] w-[1px] bg-gradient-to-b from-[#8c6239] to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                        lineNumber: 20,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 border-t border-[#8c6239]/10 md:grid-cols-4",
                children: impact.map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-r border-[#8c6239]/10 p-12 text-center last:border-r-0 md:border-b-0 group hover:bg-[#8c6239]/5 transition-colors duration-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-[10px] uppercase tracking-[0.3em] font-bold text-[#8c6239]",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-serif italic text-[#0f172a] text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-700",
                                children: stat.value
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, stat.label, true, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative py-32 md:py-48 px-6 flex flex-col items-center justify-center overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full opacity-[0.03] pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[20vw] font-serif italic text-[#8c6239] whitespace-nowrap",
                            children: "Wakolosai Awakening"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-4xl text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[#0f172a] text-3xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1]",
                                children: [
                                    '"A powerful blend of ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#8c6239]",
                                        children: "old-school"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                                        lineNumber: 52,
                                        columnNumber: 36
                                    }, this),
                                    ' Kenyan praise, sure to stir your spirit and fill you with joy."'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-12 text-[10px] uppercase tracking-[0.5em] font-bold text-[#8c6239]",
                                children: "The Lord is great and greatly to be praised"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-0 w-1/4 h-1/4 opacity-10"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center pb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[60px] w-[1px] bg-gradient-to-b from-[#8c6239] to-transparent opacity-20"
                }, void 0, false, {
                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                    lineNumber: 68,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/editorial-section.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TestimonialsSection",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
function TestimonialsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "bg-[#fafaf0]",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-5xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-8 text-[10px] uppercase tracking-[0.4em] font-bold text-[#8c6239]",
                            children: "The Sound of a Generation"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-serif italic text-3xl leading-relaxed text-[#0f172a] md:text-4xl lg:text-[2.8rem] lg:leading-[1.2]",
                            children: [
                                "Wakolosai is a powerful blend of old-school Kenyan praise songs, crafted to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#8c6239]",
                                    children: "stir your spirit"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx",
                                    lineNumber: 20,
                                    columnNumber: 24
                                }, this),
                                " and fill your heart with joy, peace, and hope. We believe the Lord is great — and greatly to be praised."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-12 text-sm font-medium text-[#8c6239]/60 tracking-wide",
                            children: "Special thanks to Ruach for this incredible journey."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[21/9] w-full overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/rs-2.jpg",
                        alt: "Wakolosai Worship Experience",
                        fill: true,
                        className: "object-cover transition-transform duration-1000 hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-[#fafaf0] via-[#fafaf0]/20 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[#8c6239]/5 mix-blend-overlay pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-16 w-[1px] bg-gradient-to-b from-[#8c6239] to-transparent"
                }, void 0, false, {
                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/testimonials-section.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FooterSection",
    ()=>FooterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/wakolosai-v2/Frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
const footerLinks = {
    movement: [
        {
            label: "The Sound",
            href: "#about"
        },
        {
            label: "The Artistry",
            href: "#lineup"
        },
        {
            label: "The Gallery",
            href: "#gallery"
        },
        {
            label: "Secure Your Place",
            href: "#tickets"
        }
    ],
    connect: [
        {
            label: "Instagram",
            href: "https://instagram.com"
        },
        {
            label: "YouTube",
            href: "https://youtube.com"
        },
        {
            label: "Contact",
            href: "mailto:info@wakolosai.com"
        }
    ]
};
function FooterSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[#fafaf0] border-t border-[#8c6239]/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-16 md:px-12 md:py-20 lg:px-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-1 md:col-span-1 lg:col-span-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-2xl font-bold tracking-[0.2em] text-[#0f172a]",
                                    children: "WAKOLOSAI"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 max-w-xs font-serif italic text-lg leading-relaxed text-[#8c6239]",
                                    children: "The Lord is great and greatly to be praised. A stir of joy, peace, and hope for a new generation."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f172a]",
                                    children: "The Movement"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: footerLinks.movement.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "text-sm text-[#8c6239]/70 transition-all hover:text-[#8c6239] hover:pl-2",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, this)
                                        }, link.label, false, {
                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f172a]",
                                    children: "Connect"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-4",
                                    children: footerLinks.connect.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                className: "text-sm text-[#8c6239]/70 transition-all hover:text-[#8c6239] hover:pl-2",
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this)
                                        }, link.label, false, {
                                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-[#8c6239]/5 px-6 py-8 md:px-12 lg:px-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-between gap-6 md:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] uppercase tracking-widest text-[#8c6239]/40",
                            children: "© 2026 WAKOLOSAI. All for His Glory."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] uppercase tracking-widest text-[#8c6239]/40",
                            children: [
                                "Special thanks to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#8c6239]/60",
                                    children: "Ruach"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                                    lineNumber: 82,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$wakolosai$2d$v2$2f$Frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth'
                                }),
                            className: "text-[10px] uppercase tracking-widest text-[#0f172a] hover:text-[#8c6239] transition-colors",
                            children: "Back to top ↑"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/wakolosai-v2/Frontend/components/sections/footer-section.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_wakolosai-v2_Frontend_components_aaaeaa0f._.js.map