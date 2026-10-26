'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';

interface HeroAgnosProps {
  onOpenBooking: () => void;
}

export function HeroAgnos({ onOpenBooking }: HeroAgnosProps) {
  // Services list for the orange ribbon (local-business friendly, no headless/Next.js)
  const servicesList = [
    'WordPress Development',
    'Webflow Systems',
    'Elementor Pro Architecture',
    'Local SEO & GMB Optimization',
    'Custom ACF Pro Theme Builds',
    'Sub-Second WooCommerce',
    'Mobile Speed Optimization',
    'Google Map Pack Visibility',
  ];

  // Build standards list for the black ribbon (no fake rank promises)
  const standardsList = [
    'Senior Developers Only',
    '100% Core Web Vitals Pass',
    'Over 140+ Deployments',
    'Sub-Second Mobile Speed',
    'Clean Zero-Bloat Code',
    'Zero Junior Hand-Offs',
    'Direct Senior Support',
    'High Conversion Results',
  ];

  return (
    <section
      id="home"
      className="relative z-30 min-h-[100dvh] pt-36 sm:pt-40 md:pt-44 pb-40 sm:pb-48 md:pb-52 lg:min-h-screen lg:py-20 bg-[#faf9f8] flex items-center justify-center select-none overflow-x-clip"
    >
      {/* ========================================================================= */}
      {/* Background Concentric Radar Rings                                         */}
      {/* ========================================================================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 flex items-center justify-center">
        <div className="relative w-[1100px] sm:w-[1450px] lg:w-[1780px] xl:w-[1950px] h-[1100px] sm:h-[1450px] lg:h-[1780px] xl:h-[1950px] flex items-center justify-center">

          {/* Outer Ambient Ring */}
          <div className="absolute inset-0 rounded-full border border-[#060612]/[0.04] animate-radar-pulse" />

          {/* Main Orbit Ring */}
          <div className="absolute inset-16 sm:inset-28 lg:inset-36 rounded-full border border-[#060612]/[0.08] shadow-[0_0_80px_rgba(255,99,33,0.03)]" />

          {/* Inner Dashed Ring */}
          <div className="absolute inset-36 sm:inset-56 lg:inset-72 rounded-full border border-[#060612]/[0.06] border-dashed" />

          {/* Core Accent Ring */}
          <div className="absolute inset-56 sm:inset-80 lg:inset-[26rem] rounded-full border border-[#ff6321]/15" />

          {/* Radar Marker Nodes (Desktop & Tablet only to avoid stray dots on mobile) */}
          <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#ff6321] opacity-60 animate-ping" />
          <div className="hidden sm:block absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#060612] opacity-40" />
          <div className="hidden sm:block absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[#ff6321] opacity-50" />

        </div>
      </div>



      {/* ========================================================================= */}
      {/* Hero Content: 2x Slower Smooth Blur Reveal Animations                     */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto text-center px-5 sm:px-8 lg:px-12 space-y-5 sm:space-y-6 lg:space-y-8">

        {/* Eyebrow Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border border-[#e7e2dd] shadow-2xs whitespace-nowrap shrink-0 mx-auto"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff6321] animate-ping shrink-0" />
          <span className="text-[11px] sm:text-xs md:text-body-sm font-mono text-[#060612] font-semibold uppercase tracking-wider whitespace-nowrap">
            BUILT FOR LOCAL GROWTH
          </span>
        </motion.div>

        {/* Main Headline: Word-by-Word Smooth Blur Reveal */}
        <h1 className="font-heading font-medium text-[2.75rem] sm:text-4xl md:text-[42px] lg:text-[48px] xl:text-[54px] text-[#060612] tracking-tight leading-[1.12] sm:leading-[1.18] max-w-5xl xl:max-w-6xl mx-auto text-balance">
          {/* Line 1: Get Found Locally. */}
          <span className="block whitespace-normal xl:whitespace-nowrap">
            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.50, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#060612]"
            >
              Get
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#060612]"
            >
              Found
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.74, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#060612]"
            >
              Locally.
            </motion.span>
          </span>

          {/* Line 2: Turn More Searches Into Customers. */}
          <span className="block mt-1.5 sm:mt-3 whitespace-normal xl:whitespace-nowrap">
            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.88, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#060612]"
            >
              Turn
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.98, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#060612]"
            >
              More
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 1.08, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#060612]"
            >
              Searches
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 1.18, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#ff6321]"
            >
              Into
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 1.28, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#ff6321]"
            >
              Customers.
            </motion.span>
          </span>
        </h1>

        {/* Subheading: Rock-solid, consistent, high-contrast typography */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.42, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg lg:text-xl text-[#444452] max-w-xl lg:max-w-3xl mx-auto font-body font-normal leading-relaxed px-2 sm:px-0"
          style={{ color: '#444452' }}
        >
          We build new websites, redesign outdated ones, and improve local search visibility to help service businesses attract qualified leads and win more customers.
        </motion.p>

        {/* Dual Action CTA Buttons (Centered, Natural Width - Not Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.72 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-3 w-fit mx-auto"
        >
          <PillButton
            variant="coral"
            size="md"
            href="/contact"
            showArrow={true}
            className="w-fit self-center shadow-xs"
          >
            Claim Your Growth Audit
          </PillButton>

          <PillButton
            variant="outline"
            size="md"
            href="#works"
            showArrow={true}
            className="w-fit self-center shadow-xs"
          >
            Explore Our Work
          </PillButton>
        </motion.div>

        {/* 5-Star Social Proof Row (Reveals After CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.86 }}
          className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 pt-1 text-center"
        >
          <div className="flex text-[#ff6321] gap-0.5 shrink-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
            ))}
          </div>
          <span className="text-sm font-medium text-[#060612]">
            5.0 <span className="text-[#69686e]">(Trusted across 140+ live deployments nationwide)</span>
          </span>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* Full-Width Intersecting Infinite Marquee (Anchored at bottom, z-40 on top of next section) */}
      {/* ========================================================================= */}
      <div className="absolute bottom-0 inset-x-0 z-40 w-full pointer-events-none translate-y-[35%] sm:translate-y-[38%]">
        <div className="relative h-36 sm:h-44 w-full flex items-center justify-center">

          {/* Black Ribbon: Angled diagonally upward-right (+2.6deg), moving right */}
          <div
            className="absolute w-[200vw] left-1/2 -translate-x-1/2 bg-[#060612] text-white py-3.5 sm:py-4.5 shadow-[0_20px_45px_rgba(0,0,0,0.45)] z-20 overflow-hidden select-none"
            style={{ transform: 'rotate(2.6deg)' }}
          >
            <div className="animate-ticker-right flex items-center whitespace-nowrap select-none">
              {/* Set A (50%) */}
              <div className="flex items-center shrink-0">
                {standardsList.map((text, i) => (
                  <div key={i} className="flex items-center gap-5 sm:gap-7 mx-3 sm:mx-4 shrink-0">
                    <span className="font-heading font-medium text-base sm:text-xl text-white tracking-tight uppercase whitespace-nowrap">
                      {text}
                    </span>
                    <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current shrink-0 text-[#ff6321]">
                      <path d="M8 0L14 8L8 16L2 8L8 0Z" />
                    </svg>
                  </div>
                ))}
              </div>
              {/* Set B (50% - duplicate for seamless continuous looping) */}
              <div className="flex items-center shrink-0">
                {standardsList.map((text, i) => (
                  <div key={`dup-${i}`} className="flex items-center gap-5 sm:gap-7 mx-3 sm:mx-4 shrink-0">
                    <span className="font-heading font-medium text-base sm:text-xl text-white tracking-tight uppercase whitespace-nowrap">
                      {text}
                    </span>
                    <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current shrink-0 text-[#ff6321]">
                      <path d="M8 0L14 8L8 16L2 8L8 0Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Orange Ribbon: Angled diagonally downward-right (-2.6deg), crossing black ribbon */}
          <div
            className="absolute w-[200vw] left-1/2 -translate-x-1/2 bg-[#ff6321] text-white py-3.5 sm:py-4.5 shadow-[0_25px_50px_rgba(255,99,33,0.45)] z-30 overflow-hidden select-none"
            style={{ transform: 'rotate(-2.6deg)' }}
          >
            <div className="animate-ticker-left flex items-center whitespace-nowrap select-none">
              {/* Set A (50%) */}
              <div className="flex items-center shrink-0">
                {servicesList.map((service, i) => (
                  <div key={i} className="flex items-center gap-5 sm:gap-7 mx-3 sm:mx-4 shrink-0">
                    <span className="font-heading font-medium text-base sm:text-xl text-white tracking-tight uppercase whitespace-nowrap">
                      {service}
                    </span>
                    <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current shrink-0 text-[#060612]">
                      <path d="M8 0L14 8L8 16L2 8L8 0Z" />
                    </svg>
                  </div>
                ))}
              </div>
              {/* Set B (50% - duplicate for seamless continuous looping) */}
              <div className="flex items-center shrink-0">
                {servicesList.map((service, i) => (
                  <div key={`dup-${i}`} className="flex items-center gap-5 sm:gap-7 mx-3 sm:mx-4 shrink-0">
                    <span className="font-heading font-medium text-base sm:text-xl text-white tracking-tight uppercase whitespace-nowrap">
                      {service}
                    </span>
                    <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current shrink-0 text-[#060612]">
                      <path d="M8 0L14 8L8 16L2 8L8 0Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
