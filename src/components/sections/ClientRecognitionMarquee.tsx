'use client';

import React from 'react';

export function ClientRecognitionMarquee() {
  const partners = [
    { name: 'NORTHPEAK', type: 'Growth Equity' },
    { name: 'VELLUM', type: 'Creative Studio' },
    { name: 'ORBIT', type: 'FinTech Platform' },
    { name: 'COBALT', type: 'SaaS Infrastructure' },
    { name: 'HORIZON', type: 'Luxury Horology' },
    { name: 'METRO CLINICS', type: 'Healthcare' },
    { name: 'AEGIS GROUP', type: 'eCommerce' },
  ];

  const repeated = [...partners, ...partners];

  return (
    <div className="py-14 sm:py-18 bg-white border-y border-[#e6e5e2] overflow-hidden select-none">
      <div className="max-w-[88rem] mx-auto px-6 sm:px-12 mb-6 text-center">
        <span className="text-xs font-mono text-[#8d8d8d] uppercase tracking-widest">
          PARTNER NETWORK & TRUSTED ENTERPRISE COLLABORATORS
        </span>
      </div>

      <div className="animate-ticker-left flex gap-10 sm:gap-16 items-center">
        {repeated.map((partner, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 shrink-0 px-6 py-2.5 rounded-full border border-[#e6e5e2] bg-[#f1f0ee]/40 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            <span className="font-sans font-bold text-sm sm:text-base text-[#111111] tracking-wider">
              {partner.name}
            </span>
            <span className="text-[10px] font-mono text-[#8d8d8d] ml-1">
              ({partner.type})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
