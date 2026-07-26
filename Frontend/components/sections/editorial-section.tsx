"use client";

const impact = [
  { label: "The Movement", value: "2026" },
  { label: "Worshippers", value: "1,500+" },
  { label: "The Frequency", value: "432Hz" },
  { label: "The Promise", value: "Joy" },
];

export function EditorialSection() {
  return (
    <section className="bg-black text-white select-none border-t border-white/10">
      {/* Decorative Branding */}
      <div className="flex flex-col items-center justify-center pt-24 pb-12">
         <span className="text-[10px] uppercase tracking-[0.6em] font-black text-[#FFB800] mb-4">
           The Awakening
         </span>
         <div className="h-[40px] w-[1px] bg-gradient-to-b from-[#FFB800] to-transparent" />
      </div>

      {/* Impact/Stats Grid */}
      <div className="grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
        {impact.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-r border-white/10 p-12 text-center last:border-r-0 md:border-b-0 group hover:bg-white/5 transition-colors duration-500"
          >
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] font-black text-[#FFB800]">
              {stat.label}
            </p>
            <p className="font-serif italic text-white text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-700">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Premium Visual Quote Block */}
      <div className="relative py-32 md:py-48 px-6 flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle Background Watermark Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full opacity-[0.04] pointer-events-none select-none">
            <span className="text-[20vw] font-serif italic text-white whitespace-nowrap">
              Wakolosai Awakening
            </span>
        </div>

        {/* The Core Message */}
        <div className="relative z-10 max-w-4xl text-center">
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif italic leading-[1.1]">
              "A powerful blend of <span className="text-[#FFB800]">old-school</span> Kenyan praise, 
              sure to stir your spirit and fill you with joy."
            </h2>
            <p className="mt-12 text-[10px] uppercase tracking-[0.5em] font-black text-[#FFB800]">
              The Lord is great and greatly to be praised
            </p>
        </div>
        
        {/* Floating Accent Image Space */}
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 opacity-10 pointer-events-none">
             {/* Reserved for subtle decorative visual overlay if needed */}
        </div>
      </div>
      
      {/* Final Divider before Footer */}
      <div className="flex justify-center pb-20">
         <div className="h-[60px] w-[1px] bg-gradient-to-b from-[#FFB800] to-transparent opacity-30" />
      </div>
    </section>
  );
}