// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { ShoppingBag, Check, Sparkles, Filter, ArrowUpRight } from "lucide-react";

// interface Product {
//   id: string;
//   name: string;
//   category: "hoodies" | "tees" | "accessories";
//   price: number;
//   originalPrice: number;
//   discount: string;
//   badge?: string;
//   image: string;
//   description: string;
//   sizes?: string[];
// }

// const merchProducts: Product[] = [
//   {
//     id: "hoodie-heavyweight",
//     name: "Wakolosai Heavyweight Pullover",
//     category: "hoodies",
//     price: 3500,
//     originalPrice: 4500,
//     discount: "-22%",
//     badge: "BESTSELLER",
//     image: "/images/rs-13.jpg", // Fallback to your asset or hoodie render
//     description: "480 GSM Ultra-Thick Cotton, Drop Shoulder Streetwear Fit",
//     sizes: ["M", "L", "XL", "XXL"],
//   },
//   {
//     id: "hoodie-acidwash",
//     name: "Acid Wash Vintage Hoodie",
//     category: "hoodies",
//     price: 3800,
//     originalPrice: 4800,
//     discount: "-20%",
//     badge: "LIMITED DROP",
//     image: "/images/rs-14.jpg",
//     description: "Custom Vintage Distressed Finish, Gold Embroidered Logo",
//     sizes: ["S", "M", "L", "XL"],
//   },
//   {
//     id: "tee-oversized-black",
//     name: "Mkolooo Oversized Heavy Tee",
//     category: "tees",
//     price: 2200,
//     originalPrice: 2800,
//     discount: "-21%",
//     badge: "NEW",
//     image: "/images/rs-15.jpg",
//     description: "240 GSM Combed Cotton, High Density Front Graphic Print",
//     sizes: ["S", "M", "L", "XL", "XXL"],
//   },
//   {
//     id: "tee-praise-gold",
//     name: "Praise & Glory Boxy Tee",
//     category: "tees",
//     price: 2000,
//     originalPrice: 2500,
//     discount: "-20%",
//     image: "/images/rs-16.jpg",
//     description: "Minimalist Gold Typography on Washed Charcoal Cotton",
//     sizes: ["M", "L", "XL"],
//   },
//   {
//     id: "cap-embroidered",
//     name: "Wakolosai Signature Cap",
//     category: "accessories",
//     price: 1500,
//     originalPrice: 1800,
//     discount: "-16%",
//     image: "/images/rs-9.jpg",
//     description: "Structured 6-Panel Strapback with Metallic Gold Stitching",
//   },
//   {
//     id: "tote-bag-heavy",
//     name: "Movement Canvas Tote",
//     category: "accessories",
//     price: 1200,
//     originalPrice: 1500,
//     discount: "-20%",
//     image: "/images/rs-10.jpg",
//     description: "Heavy-duty 16oz Canvas with Internal Zip Pocket",
//   },
// ];

// export function MerchSection() {
//   const [activeCategory, setActiveCategory] = useState<string>("all");
//   const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({});
//   const [addedItems, setAddedItems] = useState<{ [key: string]: boolean }>({});

//   const filteredProducts =
//     activeCategory === "all"
//       ? merchProducts
//       : merchProducts.filter((p) => p.category === activeCategory);

//   const handleSizeSelect = (productId: string, size: string) => {
//     setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
//   };

//   const handleAddToCart = (product: Product) => {
//     setAddedItems((prev) => ({ ...prev, [product.id]: true }));
//     setTimeout(() => {
//       setAddedItems((prev) => ({ ...prev, [product.id]: false }));
//     }, 2000);
//   };

//   return (
//     <section id="merch-section" className="bg-black text-white py-28 px-6 md:px-12 lg:px-20 border-t border-white/10 select-none">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Title */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//           <div>
//             <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] font-black text-[#FFB800] mb-3">
//               <Sparkles size={14} />
//               <span>Official Apparel & Gear</span>
//             </div>
//             <h2 className="text-4xl md:text-6xl font-serif italic uppercase text-white">
//               Wear The <span className="text-[#FFB800]">Movement</span>
//             </h2>
//           </div>

//           {/* Category Filter Tabs */}
//           <div className="flex flex-wrap gap-2 bg-white/[0.03] p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
//             {["all", "hoodies", "tees", "accessories"].map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
//                   activeCategory === cat
//                     ? "bg-[#FFB800] text-black shadow-[0_0_20px_rgba(255,184,0,0.3)]"
//                     : "text-gray-400 hover:text-white hover:bg-white/5"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProducts.map((product) => {
//             const isAdded = addedItems[product.id];
//             const currentSize = selectedSizes[product.id] || product.sizes?.[0];

//             return (
//               <div
//                 key={product.id}
//                 className="group relative flex flex-col bg-neutral-950 border border-white/10 rounded-3xl overflow-hidden hover:border-[#FFB800]/50 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
//               >
//                 {/* Image Container */}
//                 <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     fill
//                     className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

//                   {/* Badges */}
//                   <div className="absolute top-4 left-4 flex flex-col gap-2">
//                     <span className="bg-[#FFB800] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md shadow-md">
//                       {product.discount}
//                     </span>
//                     {product.badge && (
//                       <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md">
//                         {product.badge}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 {/* Product Meta */}
//                 <div className="flex flex-col flex-1 p-6">
//                   <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FFB800] mb-1">
//                     {product.category}
//                   </p>
//                   <h3 className="text-xl font-serif italic text-white mb-2 group-hover:text-[#FFB800] transition-colors">
//                     {product.name}
//                   </h3>
//                   <p className="text-xs text-gray-400 line-clamp-2 mb-6">
//                     {product.description}
//                   </p>

//                   {/* Size Selector (If applicable) */}
//                   {product.sizes && (
//                     <div className="mb-6">
//                       <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">
//                         Select Size
//                       </p>
//                       <div className="flex gap-2">
//                         {product.sizes.map((size) => (
//                           <button
//                             key={size}
//                             onClick={() => handleSizeSelect(product.id, size)}
//                             className={`h-8 min-w-[32px] px-2 rounded-lg text-xs font-bold transition-all ${
//                               currentSize === size
//                                 ? "bg-white text-black font-black"
//                                 : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/30"
//                             }`}
//                           >
//                             {size}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Price & Action */}
//                   <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
//                     <div>
//                       <p className="text-xs text-gray-500 line-through">
//                         KES {product.originalPrice.toLocaleString()}
//                       </p>
//                       <p className="text-xl font-black text-white">
//                         KES {product.price.toLocaleString()}
//                       </p>
//                     </div>

//                     <button
//                       onClick={() => handleAddToCart(product)}
//                       className={`flex items-center gap-2 px-5 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 ${
//                         isAdded
//                           ? "bg-green-500 text-black"
//                           : "bg-[#FFB800] hover:bg-[#e5a600] text-black shadow-[0_0_15px_rgba(255,184,0,0.2)] active:scale-95"
//                       }`}
//                     >
//                       {isAdded ? (
//                         <>
//                           <Check size={14} />
//                           <span>Added</span>
//                         </>
//                       ) : (
//                         <>
//                           <ShoppingBag size={14} />
//                           <span>Buy Now</span>
//                         </>
//                       )}
//                     </button>
//                   </div>

//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }