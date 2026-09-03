'use client';

import React from 'react';

export function ClientLogosMarquee() {
  const brands = [
    { name: 'Vance Capital', category: 'Private Equity' },
    { name: 'Lumina Cloud', category: 'SaaS & AI' },
    { name: 'Aegis Horology', category: 'Luxury Retail' },
    { name: 'Apex Healthcare', category: 'Multi-Location Clinics' },
    { name: 'Quantix Analytics', category: 'FinTech Platform' },
    { name: 'Solis Architecture', category: 'Design Studio' },
    { name: 'Nordic Craft', category: 'eCommerce' },
    { name: 'Metropolitan Law', category: 'Enterprise Legal' },
  ];

  const repeated = [...brands, ...brands];

  return (
    <div className="py-14 sm:py-20 bg-[#08090C] border-y border-white/5 overflow-hidden select-none relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-8 text-center">
        <span className="text-xs font-mono text-[#9CA3AF]/70 uppercase tracking-widest">
          TRUSTED BY RAPIDLY SCALING ENTERPRISES & LOCAL MARKET LEADERS
        </span>
      </div>

      <div className="animate-marquee-left flex gap-10 sm:gap-16 items-center">
        {repeated.map((brand, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 shrink-0 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#E06927]/40 transition-all duration-300 opacity-40 hover:opacity-100 group cursor-default"
          >
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-display font-extrabold text-xs text-white group-hover:bg-[#E06927] transition-colors">
              {brand.name.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <div className="text-sm font-display font-bold text-white group-hover:text-[#E06927] transition-colors">
                {brand.name}
              </div>
              <div className="text-[10px] font-mono text-[#9CA3AF]">
                {brand.category}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
