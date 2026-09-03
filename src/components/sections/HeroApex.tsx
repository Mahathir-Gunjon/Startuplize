'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { HeroGradientLoop } from '@/components/canvas/HeroGradientLoop';
import { StackedLines } from '@/components/ui/StackedLines';
import { PillButton } from '@/components/ui/PillButton';

interface HeroApexProps {
  onOpenBooking: () => void;
  isReady: boolean;
}

export function HeroApex({ onOpenBooking, isReady }: HeroApexProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      caption: 'Custom WordPress',
      title: 'Sub-second headless & zero-bloat builds.',
      metric: '0.52s LCP · 100/100',
    },
    {
      caption: 'Webflow Architecture',
      title: 'Precision micro-interactions & CMS.',
      metric: '60 FPS · Zero Layout Shift',
    },
    {
      caption: 'Local Growth & SEO',
      title: 'Google Local 3-Pack rank #1 dominance.',
      metric: '#1 Map Pin in 90 Days',
    },
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const partnerBrands = ['Northpeak', 'Vellum', 'Orbit', 'Cobalt', 'Brightline'];

  return (
    <section
      id="home"
      className="relative min-h-[100lvh] bg-[#f5f4f0] rounded-b-[2rem] overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-8 px-6 sm:px-12 select-none isolate border-b border-[#e6e5e2]"
    >
      {/* Ambient Gradient Loop Video-Type Background (Zero mouse animations) */}
      <HeroGradientLoop />

      {/* Swiss Architectural Watermark (Low-opacity subtle backdrop) */}
      <div className="absolute bottom-12 inset-x-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="font-heading font-medium text-[13rem] sm:text-[18rem] md:text-[23rem] text-[#0a0a0a]/[0.035] tracking-tighter leading-none">
          APEX
        </span>
      </div>

      {/* Main Content Grid — Swiss 12-Column Asymmetric Layout */}
      <div className="max-w-[88rem] mx-auto w-full relative z-10 my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column (Span 7) — Swiss Typographic Anchor */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          
          {/* Swiss Studio Index & Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-body-sm text-[#b15f2c] uppercase font-bold tracking-wider">
              [01/CH] // SWISS EDITORIAL
            </span>
            <span className="w-1 h-1 rounded-full bg-[#b6b6b6]" />
            <span className="text-body-sm text-[#111111]/80 font-medium">
              High-Impact Web & Growth Studio
            </span>
          </div>

          {/* Masked H1 in Bricolage Grotesque 500 (font-h1 = 64px, font-medium) */}
          <div className="font-h1 text-[#0a0a0a]">
            <StackedLines
              trigger={isReady}
              delay={0.1}
              lines={[
                'Engineered speed,',
                'designed to convert,',
                'built to dominate.',
              ]}
            />
          </div>

          {/* Swiss Proof Telemetry in Manrope text-body-lg (20px) / text-body (18px) */}
          <div className="space-y-3 pt-1">
            <p className="text-body-lg text-[#111111]/90 max-w-xl font-normal leading-snug">
              We architect ultra-fast headless WordPress, Webflow systems, and programmatic SEO platforms engineered for mathematical market supremacy.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex text-[#b15f2c] gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-body-sm text-[#111111]/80 font-medium font-body">
                250+ systems shipped · $65M+ client revenue generated
              </span>
            </div>
          </div>

          {/* CTA row: PillButtons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <PillButton
              variant="dark"
              size="lg"
              onClick={onOpenBooking}
              showArrow={true}
            >
              Start project
            </PillButton>

            <PillButton
              variant="outline"
              size="lg"
              href="#works"
              showArrow={true}
              className="bg-white/80 backdrop-blur-md"
            >
              Explore Work
            </PillButton>
          </div>

        </div>

        {/* Right Column (Span 5) — Swiss Architectural Showcase */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Swiss HeroCard Carousel */}
          <div className="bg-white/90 backdrop-blur-xl rounded-[1.5rem] p-4 sm:p-5 border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.09)] transition-shadow">
            <div className="flex items-stretch gap-4 sm:gap-5">
              
              {/* Left tile: #0a0a0a square with orange LogoMark */}
              <div className="w-20 sm:w-24 rounded-2xl bg-[#0a0a0a] text-[#cf8047] flex flex-col items-center justify-center shrink-0 p-3 shadow-md">
                <svg viewBox="0 0 48 48" fill="currentColor" className="w-9 h-9">
                  <path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z" />
                </svg>
                <span className="text-[9px] font-mono tracking-widest text-[#8d8d8d] mt-1.5 font-bold">
                  APEX
                </span>
              </div>

              {/* Right panel: Cycles through 3 verified services */}
              <div className="flex-1 flex flex-col justify-between py-1 min-h-[110px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-body-sm font-mono text-[#b15f2c] font-bold tracking-wider uppercase">
                        {heroSlides[activeSlide].caption}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#f1f0ee] border border-[#e6e5e2] text-[#111111] font-semibold">
                        {heroSlides[activeSlide].metric}
                      </span>
                    </div>
                    {/* H4 in Bricolage Grotesque 500 (font-h4 = 24px) */}
                    <h4 className="font-h4 text-[#111111] leading-snug">
                      {heroSlides[activeSlide].title}
                    </h4>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom carousel control dashes + prev/next buttons */}
                <div className="flex items-center justify-between pt-3 border-t border-[#e6e5e2] mt-2">
                  <div className="flex items-center gap-1.5">
                    {heroSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          i === activeSlide ? 'w-6 bg-[#b15f2c]' : 'w-2 bg-[#b6b6b6]'
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={handlePrevSlide}
                      className="p-1.5 rounded-full bg-[#f1f0ee] hover:bg-white text-[#111111] border border-[#e6e5e2] transition-colors cursor-pointer"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="p-1.5 rounded-full bg-[#f1f0ee] hover:bg-white text-[#111111] border border-[#e6e5e2] transition-colors cursor-pointer"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Swiss Partner grid */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-1 gap-2">
            <span className="text-body-sm font-mono text-[#8d8d8d]">
              Trusted by fast-growing brands:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {partnerBrands.map((brand) => (
                <span
                  key={brand}
                  className="px-3 py-1 rounded-full bg-white/70 backdrop-blur-xs border border-[#e6e5e2] text-body-sm font-medium text-[#111111] shadow-2xs"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Swiss Bottom Status Bar */}
      <div className="max-w-[88rem] mx-auto w-full pt-6 border-t border-[#e6e5e2] relative z-10 flex flex-col sm:flex-row items-center justify-between text-body-sm font-mono text-[#111111]/75 gap-3">
        <div>SWISS GRID STANDARD · OPERATING SINCE 2018</div>
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#b15f2c]" />
          <span>100/100 Core Web Vitals Guaranteed</span>
        </div>
        <a href="#works" className="hover:text-[#b15f2c] transition-colors flex items-center gap-1">
          <span>Scroll to explore</span>
          <span>↓</span>
        </a>
      </div>

    </section>
  );
}
