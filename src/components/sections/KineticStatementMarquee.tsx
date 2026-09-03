'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function KineticStatementMarquee() {
  const items = [
    'HEADLESS WORDPRESS',
    'WEBFLOW ARCHITECTURE',
    'ENTERPRISE TECHNICAL SEO',
    'LOCAL 3-PACK DOMINATION',
    'SUB-SECOND LCP',
    'ZERO BLOAT',
    'MAXIMUM CONVERSION',
    'JSON-LD SCHEMA MESH',
  ];

  const repeated = [...items, ...items];

  return (
    <div className="py-12 sm:py-16 bg-[#08090C] border-y border-white/[0.08] overflow-hidden select-none relative">
      <div className="absolute inset-0 bg-radial-gradient opacity-50 pointer-events-none" />

      {/* Marquee Row */}
      <div className="animate-marquee-fast-left flex gap-8 sm:gap-12 items-center">
        {repeated.map((text, idx) => (
          <div
            key={idx}
            className="flex items-center gap-8 sm:gap-12 shrink-0 group"
          >
            <span className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white/20 hover:text-white transition-colors duration-300 uppercase cursor-default">
              {text}
            </span>
            <span className="w-3 h-3 rounded-full bg-[#E06927] shadow-[0_0_12px_rgba(224,105,39,0.8)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
