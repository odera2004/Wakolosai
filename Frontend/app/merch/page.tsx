'use client';

import React, { useState } from 'react';

interface MerchItem {
  id: 'hoodie' | 'cap';
  name: string;
  price: number;
  image: string;
  description: string;
  sizes: string[];
}

export default function MerchPage() {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    hoodie: 'M',
    cap: 'One Size'
  });

  const merchItems: MerchItem[] = [
    {
      id: 'hoodie',
      name: 'Wakoloo "Live Worship" Hoodie',
      price: 3500,
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800',
      description: 'Heavyweight premium cotton blend with embroidered chest design.',
      sizes: ['S', 'M', 'L', 'XL', '2XL']
    },
    {
      id: 'cap',
      name: 'Wakoloo Worship Snapback Cap',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800',
      description: 'Structured 6-panel cap featuring high-density front embroidery.',
      sizes: ['One Size']
    }
  ];

  const handleSizeChange = (itemId: string, size: string) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [itemId]: size
    }));
  };

  const handleOrder = (item: MerchItem) => {
    const size = selectedSizes[item.id];
    alert(`Added to cart: ${item.name} (Size: ${size}) - KES ${item.price.toLocaleString()}`);
  };

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-[#FFB800]">
            Official Merch
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Wear the worship experience. Limited stock available for pickup or delivery.
          </p>
        </div>

        {/* 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {merchItems.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden flex flex-col hover:border-[#FFB800]/50 transition-all duration-300"
            >
              {/* Product Image */}
              <div className="h-64 w-full bg-neutral-800 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <span className="text-[#FFB800] font-bold text-lg whitespace-nowrap">
                      KES {item.price.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">{item.description}</p>

                  {/* Size Selector */}
                  <div className="mb-6">
                    <label className="text-xs uppercase tracking-wider text-gray-400 block mb-2">
                      Select Size
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {item.sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => handleSizeChange(item.id, size)}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                            selectedSizes[item.id] === size
                              ? 'bg-[#FFB800] text-black border-[#FFB800]'
                              : 'bg-black text-gray-300 border-neutral-700 hover:border-gray-500'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Buy Button */}
                <button
                  type="button"
                  onClick={() => handleOrder(item)}
                  className="w-full py-3 px-4 bg-[#FFB800] text-black font-bold rounded-xl hover:bg-[#e0a200] transition-colors"
                >
                  Order Merch
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
