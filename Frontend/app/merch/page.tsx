'use client';

import React, { useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  quantity: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
}

const PRODUCTS: Product[] = [
  {
    id: 'tshirt-01',
    name: 'Wakolosai Custom Tee',
    price: 1500,
    image: '/images/merch-tee.jpg', // Replace with your image paths
    description: '100% heavy cotton vintage wash edition.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'hoodie-01',
    name: 'Wakolosai Oversized Hoodie',
    price: 3500,
    image: '/images/merch-hoodie.jpg',
    description: 'Premium fleece inner lining with custom embroidered logo.',
    sizes: ['M', 'L', 'XL'],
  },
];

export default function MerchPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedSize, setSelectedSize] = useState<{ [key: string]: string }>({});
  
  // Checkout Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const addToCart = (product: Product) => {
    const size = selectedSize[product.id] || product.sizes[0];
    const existingIndex = cart.findIndex((item) => item.id === product.id && item.size === size);

    if (existingIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          size,
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      setStatusMsg('Please add at least one item to your cart.');
      return;
    }

    setIsProcessing(true);
    setStatusMsg('');

    try {
      const response = await fetch('https://wakolosai.onrender.com/api/buy-merch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone,
          email,
          fullName,
          amount: totalAmount,
          cart,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMsg('📱 STK push sent! Check your phone to enter your M-Pesa PIN.');
      } else {
        setStatusMsg(`❌ Payment Error: ${data.error || 'Failed to trigger STK push'}`);
      }
    } catch (err) {
      console.error(err);
      setStatusMsg('❌ Server connection error. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-[#FFB800] text-center mb-12">
          Official Merch Store
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Product Grid (2 Cols wide on desktop) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 flex flex-col justify-between hover:border-[#FFB800] transition"
              >
                <div>
                  <div className="w-full h-56 bg-zinc-800 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{product.description}</p>
                  <div className="text-xl font-bold text-[#FFB800] mb-4">
                    KES {product.price.toLocaleString()}
                  </div>

                  {/* Size Selector */}
                  <div className="mb-4">
                    <label className="text-xs text-gray-400 block mb-1">Select Size:</label>
                    <div className="flex gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() =>
                            setSelectedSize({ ...selectedSize, [product.id]: size })
                          }
                          className={`px-3 py-1 text-xs rounded border ${
                            (selectedSize[product.id] || product.sizes[0]) === size
                              ? 'border-[#FFB800] bg-[#FFB800] text-black font-bold'
                              : 'border-zinc-700 text-gray-300'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(product)}
                  className="w-full py-3 bg-zinc-800 text-white font-semibold rounded hover:bg-[#FFB800] hover:text-black transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Right Column: Cart Summary & M-Pesa Checkout */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-fit sticky top-8">
            <h2 className="text-2xl font-serif text-[#FFB800] mb-4">Order Summary</h2>

            {cart.length === 0 ? (
              <p className="text-gray-500 text-sm mb-6">Your shopping cart is empty.</p>
            ) : (
              <div className="space-y-3 mb-6 max-h-48 overflow-y-auto pr-2">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-sm border-b border-zinc-800 pb-2 text-gray-300"
                  >
                    <div>
                      <div className="font-semibold text-white">{item.name}</div>
                      <div className="text-xs text-gray-400">
                        Size: {item.size} | Qty: {item.quantity}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#FFB800] font-semibold">
                        KES {item.price * item.quantity}
                      </span>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-400 text-xs hover:text-red-300"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between text-lg font-bold border-t border-zinc-800 pt-4 mb-6">
              <span>Total:</span>
              <span className="text-[#FFB800]">KES {totalAmount.toLocaleString()}</span>
            </div>

            {/* M-Pesa Checkout Form */}
            <form onSubmit={handleCheckout} className="space-y-4">
              <div>
                <label className="block text-xs text-gray-400 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#FFB800]"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#FFB800]"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-400 mb-1">M-Pesa Phone Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0712345678"
                  className="w-full p-3 rounded bg-zinc-800 border border-zinc-700 text-white text-sm focus:outline-none focus:border-[#FFB800]"
                />
              </div>

              <button
                type="submit"
                disabled={isProcessing || cart.length === 0}
                className="w-full py-4 bg-[#FFB800] text-black font-bold uppercase rounded hover:bg-yellow-500 transition disabled:opacity-50 text-sm tracking-wider"
              >
                {isProcessing ? 'Processing STK Push...' : `Pay KES ${totalAmount} via M-Pesa`}
              </button>

              {statusMsg && (
                <div className="p-3 text-xs text-center bg-zinc-800 rounded border border-zinc-700 text-gray-200">
                  {statusMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
