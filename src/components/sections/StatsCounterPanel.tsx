'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ScrollBlurWords, ScrollSlideCard, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

export function StatsCounterPanel() {
  const stats = [
    {
      value: '250+',
      label: 'Systems Shipped',
      sublabel: 'WordPress, Elementor & Webflow platforms',
    },
    {
      value: '99.4%',
      label: 'Client Retention',
      sublabel: 'Long-term organic growth retainers',
    },
    {
      value: '100%',
      label: 'Core Web Vitals Pass Rate',
      sublabel: 'Sub-600ms mobile LCP verified globally',
    },
    {
      value: '$65M+',
      label: 'Client Revenue Generated',
      sublabel: 'Verified incremental GMV & lead value',
    },
  ];

  return (
    <section id="metrics" className="py-24 sm:py-32 px-6 sm:px-12 bg-[#faf9f8] select-none border-b border-[#e7e2dd]">
      <ScrollSlideCard
        delay={0.05}
        yOffset={24}
        className="max-w-[84rem] mx-auto bg-[#060612] text-white rounded-[2.5rem] p-8 sm:p-16 lg:p-20 shadow-2xl space-y-16 relative overflow-hidden"
      >
        {/* Subtle coral ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6321]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header: Eyebrow + Title with Word-by-Word Blur Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10 relative z-10">
          <div>
            <ScrollBlurFade>
              <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest block mb-2 font-semibold whitespace-nowrap">
                • BY THE NUMBERS
              </span>
            </ScrollBlurFade>
            <ScrollBlurWords
              className="font-heading font-medium text-3xl sm:text-5xl text-white tracking-tight"
              segments={['Proof in the data, not empty promises.']}
            />
          </div>
          <ScrollBlurFade delay={0.2}>
            <p className="text-body text-[#69686e] max-w-sm font-body">
              Mathematical outcomes verified across live production deployments and Google Search Console data since 2018.
            </p>
          </ScrollBlurFade>
        </div>

        {/* 4 Stats Grid with Staggered Slide Reveals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 relative z-10">
          {stats.map((stat, idx) => (
            <ScrollSlideCard
              key={idx}
              delay={0.15 + idx * 0.12}
              yOffset={20}
              className="space-y-2 border-l border-white/10 pl-6"
            >
              <div className="font-heading font-medium text-4xl sm:text-5xl md:text-6xl text-white tracking-tight whitespace-nowrap">
                {stat.value}
              </div>
              <div className="font-heading font-medium text-lg sm:text-xl text-[#ff6321] whitespace-nowrap">
                {stat.label}
              </div>
              <div className="text-body-sm text-[#69686e] leading-relaxed font-body">
                {stat.sublabel}
              </div>
            </ScrollSlideCard>
          ))}
        </div>

      </ScrollSlideCard>
    </section>
  );
}
