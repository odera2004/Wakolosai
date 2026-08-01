"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ArrowLeft, X, Trash2, Check, Smartphone, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

interface ColorOption {
  colorName: string;
  hex: string;
  frontImage: string;
  backImage: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  badge?: string;
  description: string;
  sizes: string[];
  colors?: ColorOption[];
  singleImage?: string;
}

interface CartItem {
  cartId: string;
  product: Product;
  selectedColor?: string;
  selectedSize: string;
  quantity: number;
}

const merchProducts: Product[] = [
  {
    id: "wakolosai-hoodie",
    name: "Wakolosai Heavyweight Pullover",
    category: "Hoodies",
    price: 3500,
    badge: "BESTSELLER",
    singleImage: "/images/rs-13.jpg",
    description: "480 GSM Ultra-Thick Cotton, Drop Shoulder Streetwear Fit",
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: "wakolosai-tee",
    name: "Wakolosai Oversized Heavyweight Tee",
    category: "Tees",
    price: 1200,
    badge: "NEW COLORS",
    description: "240 GSM Combed Cotton, Front & Back Custom Screen Print",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        colorName: "Beige",
        hex: "#D4C3A3",
        frontImage: "/images/Wakolosai Merch Beige - Front.png",
        backImage: "/images/Wakolosai Merch Beige - Back.png",
      },
      {
        colorName: "Black",
        hex: "#1A1A1A",
        frontImage: "/images/Wakolosai Merch Black - Front.png",
        backImage: "/images/Wakolosai Merch Black - Back.png",
      },
      {
        colorName: "Maroon",
        hex: "#6B1D2F",
        frontImage: "/images/Wakolosai Merch Maroon - Front.png",
        backImage: "/images/Wakolosai Merch Maroon - Back.png",
      },
      {
        colorName: "Pink",
        hex: "#E8A5C8",
        frontImage: "/images/Wakolosai Merch Pink - Front.png",
        backImage: "/images/Wakolosai Merch Pink - Back.png",
      },
      {
        colorName: "Turquoise",
        hex: "#30A2A2",
        frontImage: "/images/Wakolosai Merch Turquoise - Front.png",
        backImage: "/images/Wakolosai Merch Turquoise - Back.png",
      },
    ],
  },
];

export default function MerchShopPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({});
  const [selectedColors, setSelectedColors] = useState<{ [key: string]: number }>({
    "wakolosai-tee": 0, // Default to first color (Beige)
  });
  const [activeView, setActiveView] = useState<{ [key: string]: "front" | "back" }>({
    "wakolosai-tee": "front",
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutStep, setIsCheckoutStep] = useState(false);

  // Checkout State
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isPaying, setIsPaying] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSizeSelect = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleColorSelect = (productId: string, index: number) => {
    setSelectedColors((prev) => ({ ...prev, [productId]: index }));
  };

  const toggleView = (productId: string) => {
    setActiveView((prev) => ({
      ...prev,
      [productId]: prev[productId] === "back" ? "front" : "back",
    }));
  };

  const addToCart = (product: Product) => {
    const size = selectedSizes[product.id] || product.sizes[0];
    let colorName: string | undefined = undefined;

    if (product.colors && product.colors.length > 0) {
      const colorIdx = selectedColors[product.id] || 0;
      colorName = product.colors[colorIdx].colorName;
    }

    const cartId = `${product.id}-${colorName || "default"}-${size}`;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.cartId === cartId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [
        ...prevCart,
        {
          cartId,
          product,
          selectedColor: colorName,
          selectedSize: size,
          quantity: 1,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSTKPush = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber) {
      alert("Please enter a valid M-Pesa phone number.");
      return;
    }

    setIsPaying(true);

    try {
      const response = await fetch("https://wakolosai.onrender.com/api/buy-merch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone: phoneNumber,
          email,
          amount: cartTotal,
          cart: cart.map((item) => ({
            id: item.product.id,
            name: item.selectedColor
              ? `${item.product.name} (${item.selectedColor})`
              : item.product.name,
            size: item.selectedSize,
            color: item.selectedColor || "N/A",
            quantity: item.quantity,
            price: item.product.price,
          })),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsPaying(false);
        setPaymentSuccess(true);
        setCart([]);
      } else {
        alert(data.error || "STK Push failed. Please check your phone number.");
        setIsPaying(false);
      }
    } catch (err) {
      console.error("❌ Live STK Push Error:", err);
      alert("Could not connect to the backend server.");
      setIsPaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-serif italic select-none">
      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 px-6 py-5 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#FFB800] transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="font-serif italic uppercase tracking-wider">Back to Movement</span>
          </Link>

          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-serif italic uppercase tracking-widest text-white">
              WAKOLOSAI <span className="text-[#FFB800]">STORE</span>
            </h1>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-all"
          >
            <ShoppingBag size={18} className="text-[#FFB800]" />
            <span className="font-serif italic text-xs uppercase text-white">Cart</span>
            {cartItemCount > 0 && (
              <span className="bg-[#FFB800] text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="px-6 py-16 md:px-12 md:py-20 text-center border-b border-white/10 bg-neutral-950">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#FFB800] mb-4">
            <Sparkles size={14} />
            <span>Official Drop 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif italic uppercase leading-tight mb-4">
            Official <span className="text-[#FFB800]">Apparel</span> Vault
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Jee wewe ni Mkoloo !
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <main className="max-w-6xl mx-auto px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {merchProducts.map((product) => {
            const currentSize = selectedSizes[product.id] || product.sizes[0];
            const colorIdx = selectedColors[product.id] || 0;
            const activeColor = product.colors ? product.colors[colorIdx] : null;
            const isBackView = activeView[product.id] === "back";

            const displayImage = activeColor
              ? isBackView
                ? activeColor.backImage
                : activeColor.frontImage
              : product.singleImage || "";

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-neutral-950 border border-white/10 rounded-3xl overflow-hidden hover:border-[#FFB800]/50 transition-all duration-500"
              >
                {/* Image Display */}
                <div className="relative aspect-square w-full bg-neutral-900 overflow-hidden">
                  <Image
                    src={displayImage}
                    alt={product.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-[#FFB800] text-black text-[10px] font-serif italic uppercase tracking-widest px-3 py-1 rounded-md z-10">
                      {product.badge}
                    </span>
                  )}

                  {/* Front/Back Flip Switcher for Tees */}
                  {activeColor && (
                    <button
                      onClick={() => toggleView(product.id)}
                      className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white border border-white/20 text-xs px-3 py-1.5 rounded-full hover:border-[#FFB800] transition-colors z-10 flex items-center gap-1 font-serif italic"
                    >
                      <span>View: {isBackView ? "Back" : "Front"}</span>
                      <ChevronRight size={14} />
                    </button>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-col flex-1 p-6">
                  <span className="text-xs uppercase text-[#FFB800] mb-1">
                    {product.category}
                  </span>
                  <h3 className="text-2xl font-serif italic text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-400 mb-6 font-serif italic">
                    {product.description}
                  </p>

                  {/* Color Selector (Tees) */}
                  {product.colors && (
                    <div className="mb-6">
                      <p className="text-xs uppercase text-gray-400 mb-2 font-serif italic">
                        Color: <span className="text-white">{activeColor?.colorName}</span>
                      </p>
                      <div className="flex gap-3">
                        {product.colors.map((col, idx) => (
                          <button
                            key={col.colorName}
                            onClick={() => handleColorSelect(product.id, idx)}
                            title={col.colorName}
                            className={`w-7 h-7 rounded-full border-2 transition-all ${
                              colorIdx === idx
                                ? "border-[#FFB800] scale-110"
                                : "border-white/20 hover:border-white/60"
                            }`}
                            style={{ backgroundColor: col.hex }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Size Selector */}
                  <div className="mb-6">
                    <p className="text-xs uppercase text-gray-400 mb-2 font-serif italic">Select Size</p>
                    <div className="flex gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(product.id, size)}
                          className={`h-8 px-3 rounded-lg text-xs font-serif italic transition-all ${
                            currentSize === size
                              ? "bg-white text-black font-bold"
                              : "bg-white/5 text-gray-400 border border-white/10 hover:border-white/30"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Price</p>
                      <p className="text-xl text-[#FFB800] font-serif italic">
                        KES {product.price.toLocaleString()}
                      </p>
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-2 bg-[#FFB800] hover:bg-[#e5a600] text-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-serif italic transition-all active:scale-95"
                    >
                      <ShoppingBag size={14} />
                      <span>Add To Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* DRAWER & CHECKOUT */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-md bg-neutral-950 border-l border-white/10 h-full flex flex-col p-6 z-10 overflow-y-auto">
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <h3 className="text-xl font-serif italic uppercase text-white">
                {isCheckoutStep ? "M-Pesa Checkout" : `Your Bag (${cartItemCount})`}
              </h3>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutStep(false);
                  setPaymentSuccess(false);
                }}
                className="text-gray-400 hover:text-white p-2"
              >
                <X size={20} />
              </button>
            </div>

            {paymentSuccess ? (
              <div className="my-auto text-center py-12">
                <div className="w-16 h-16 bg-[#FFB800]/20 border border-[#FFB800] rounded-full flex items-center justify-center mx-auto mb-6 text-[#FFB800]">
                  <Check size={32} />
                </div>
                <h4 className="text-2xl font-serif italic uppercase text-white mb-2">
                  STK Push Sent!
                </h4>
                <p className="text-sm text-gray-400 mb-6 font-serif italic">
                  Check your phone and enter your M-Pesa PIN to complete payment.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutStep(false);
                    setPaymentSuccess(false);
                  }}
                  className="w-full bg-[#FFB800] text-black py-3.5 rounded-xl text-xs uppercase tracking-wider font-serif italic"
                >
                  Done
                </button>
              </div>
            ) : isCheckoutStep ? (
              <form onSubmit={handleSTKPush} className="flex-1 flex flex-col justify-between py-6">
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase text-gray-400 mb-2 font-serif italic">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Ochieng"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB800] font-serif italic"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-gray-400 mb-2 font-serif italic">
                      M-Pesa Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0712345678 or 254..."
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB800] font-serif italic"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase text-gray-400 mb-2 font-serif italic">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FFB800] font-serif italic"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center gap-3 text-xs text-[#FFB800] font-serif italic">
                      <Smartphone size={18} />
                      <span>Instant M-Pesa STK Push Payment</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <div className="flex justify-between text-lg mb-6 font-serif italic">
                    <span className="text-gray-400 uppercase">Total Payable</span>
                    <span className="text-[#FFB800]">KES {cartTotal.toLocaleString()}</span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsCheckoutStep(false)}
                      className="w-1/3 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-xl text-xs uppercase font-serif italic"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isPaying}
                      className="w-2/3 bg-[#FFB800] hover:bg-[#e5a600] text-black py-3.5 rounded-xl text-xs uppercase tracking-wider font-serif italic flex items-center justify-center gap-2"
                    >
                      {isPaying ? "Sending Push..." : "Pay with M-Pesa"}
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="flex-1 flex flex-col justify-between pt-6">
                {cart.length === 0 ? (
                  <div className="my-auto text-center py-12">
                    <ShoppingBag size={48} className="mx-auto text-gray-600 mb-4" />
                    <p className="text-gray-400 text-sm font-serif italic">Your bag is currently empty.</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 overflow-y-auto pr-1">
                      {cart.map((item, index) => (
                        <div
                          key={item.cartId}
                          className="flex items-center gap-4 bg-white/[0.02] border border-white/10 p-3 rounded-2xl"
                        >
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-serif italic text-white truncate">
                              {item.product.name}
                            </h4>
                            <p className="text-xs text-gray-400 font-serif italic">
                              {item.selectedColor ? `Color: ${item.selectedColor} | ` : ""}
                              Size: {item.selectedSize} | Qty: {item.quantity}
                            </p>
                            <p className="text-xs text-[#FFB800] font-serif italic mt-1">
                              KES {(item.product.price * item.quantity).toLocaleString()}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(index)}
                            className="text-gray-500 hover:text-red-400 p-2"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-white/10 mt-6">
                      <div className="flex justify-between text-lg mb-6 font-serif italic">
                        <span className="text-gray-400 uppercase">Subtotal</span>
                        <span className="text-[#FFB800]">KES {cartTotal.toLocaleString()}</span>
                      </div>
                      <button
                        onClick={() => setIsCheckoutStep(true)}
                        className="w-full bg-[#FFB800] hover:bg-[#e5a600] text-black py-4 rounded-xl text-xs uppercase tracking-wider font-serif italic transition-all"
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
