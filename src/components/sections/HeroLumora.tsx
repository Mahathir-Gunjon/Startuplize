'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { HeroLiquidRevealCanvas } from '@/components/canvas/HeroLiquidRevealCanvas';
import { StackedLines } from '@/components/ui/StackedLines';
import { PillButton } from '@/components/ui/PillButton';

interface HeroLumoraProps {
  onOpenBooking: () => void;
  isReady: boolean;
}

export function HeroLumora({ onOpenBooking, isReady }: HeroLumoraProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: 'WordPress Architecture',
      tag: 'HEADLESS & ACF PRO',
      desc: 'Sub-600ms mobile LCP guarantee with zero-plugin theme builds.',
      metric: '0.58s Avg LCP',
    },
    {
      title: 'Webflow Cinema Motion',
      tag: 'CLIENT-FIRST CMS',
      desc: '60fps micro-interactions, custom GLSL shaders & clean scalability.',
      metric: '60 FPS Physics',
    },
    {
      title: 'Local 3-Pack Domination',
      tag: 'GEO-GRID DOMINANCE',
      desc: 'Google Business Profile supremacy and automated review funnels.',
      metric: '#1 Map Pin Rank',
    },
  ];

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const partnerBrands = ['Northpeak', 'Vellum', 'Orbit', 'Cobalt'];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] bg-[#c9c9c9] rounded-b-[2rem] overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-8 px-6 sm:px-12 select-none"
    >
      {/* Liquid Canvas in background */}
      <HeroLiquidRevealCanvas />

      {/* Giant Background Watermark "AGENCY" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="text-[13rem] sm:text-[16rem] md:text-[22rem] font-sans font-black text-[#111111]/[0.09] tracking-tighter leading-none">
          AGENCY
        </span>
      </div>

      {/* Interactive Brush Hint in Canvas */}
      <div className="absolute top-28 right-8 z-10 hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-[11px] font-mono text-[#111111]">
        <span className="w-2 h-2 rounded-full bg-[#b15f2c] pulse-dot" />
        <span>HOVER CANVAS TO BRUSH REVEAL REDESIGN</span>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-[88rem] mx-auto w-full relative z-10 my-auto py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        
        {/* Left Column (Span 7) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          
          {/* Eyebrow with leading orange dot */}
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#b15f2c]" />
            <span className="text-xs sm:text-sm font-medium tracking-tight text-[#111111]">
              Independent Engineering & Growth Studio
            </span>
          </div>

          {/* Masked H1 (Stacked Line Reveal) */}
          <div className="font-sans font-extrabold text-4xl sm:text-6xl lg:text-[4.6rem] tracking-tight text-[#111111] leading-[0.98]">
            <StackedLines
              trigger={isReady}
              delay={0.1}
              lines={[
                'High-impact web,',
                'engineered for',
                'market dominance.',
              ]}
            />
          </div>

          {/* Proof Row: 5 orange stars + text */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <div className="flex text-[#b15f2c]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium text-[#111111]/80">
              250+ systems shipped · $65M+ client revenue
            </span>
          </div>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <PillButton
              variant="dark"
              size="lg"
              onClick={onOpenBooking}
              showArrow={true}
            >
              Start a project
            </PillButton>

            <PillButton
              variant="outline"
              size="lg"
              href="#works"
              showArrow={true}
              className="bg-white/40 backdrop-blur-md"
            >
              Explore Work
            </PillButton>
          </div>

        </div>

        {/* Right Column (Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* HeroCard Carousel: Frosted glass card */}
          <div className="bg-white/75 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-[#e6e5e2] shadow-lg">
            <div className="flex items-stretch gap-4">
              
              {/* Left Tile: #0a0a0a square with orange logo mark */}
              <div className="w-20 sm:w-24 rounded-xl bg-[#0a0a0a] text-white flex flex-col items-center justify-center shrink-0 p-3 shadow-sm">
                <Sparkles className="w-8 h-8 text-[#cf8047] mb-1" />
                <span className="text-[9px] font-mono tracking-widest text-[#8d8d8d]">
                  VERIFIED
                </span>
              </div>

              {/* Right Panel: Cycles through 3 verified services */}
              <div className="flex-1 flex flex-col justify-between py-1 min-h-[96px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#b15f2c] font-bold tracking-wider">
                        {heroSlides[activeSlide].tag}
                      </span>
                      <span className="text-[10px] font-mono bg-[#0a0a0a] text-white px-2 py-0.5 rounded-full">
                        {heroSlides[activeSlide].metric}
                      </span>
                    </div>
                    <h2 className="text-base sm:text-lg font-sans font-bold text-[#111111]">
                      {heroSlides[activeSlide].title}
                    </h2>
                    <p className="text-xs text-[#8d8d8d] line-clamp-1">
                      {heroSlides[activeSlide].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom carousel control dashes + prev/next buttons */}
                <div className="flex items-center justify-between pt-3 border-t border-[#e6e5e2]/80 mt-2">
                  <div className="flex items-center gap-1.5">
                    {heroSlides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`h-1.5 rounded-full transition-all ${
                          i === activeSlide ? 'w-6 bg-[#b15f2c]' : 'w-2 bg-[#b6b6b6]'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={handlePrevSlide}
                      className="p-1 rounded-full bg-white/80 hover:bg-white text-[#111111] border border-[#e6e5e2] transition-colors"
                      aria-label="Previous service slide"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="p-1 rounded-full bg-white/80 hover:bg-white text-[#111111] border border-[#e6e5e2] transition-colors"
                      aria-label="Next service slide"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Partner Chips Grid */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-mono text-[#8d8d8d] uppercase">TRUSTED BY:</span>
            <div className="flex items-center gap-2">
              {partnerBrands.map((brand) => (
                <span
                  key={brand}
                  className="px-3 py-1 rounded-full bg-white/50 backdrop-blur-xs border border-[#e6e5e2] text-xs font-medium text-[#111111]"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Status Bar: Flex row with hairlines */}
      <div className="max-w-[88rem] mx-auto w-full pt-6 border-t border-[#e6e5e2]/80 relative z-10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#111111]/75 gap-3">
        <div>WORKING GLOBALLY SINCE 2018</div>
        <div className="hidden sm:block">ZERO-BLOAT PERFORMANCE (100/100 CWV)</div>
        <a href="#works" className="hover:text-[#b15f2c] transition-colors flex items-center gap-1">
          <span>SCROLL TO EXPLORE</span>
          <span>↓</span>
        </a>
      </div>

    </section>
  );
}
