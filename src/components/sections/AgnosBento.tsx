'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { ScrollBlurWords, ScrollSlideCard, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

export function AgnosBento() {
  const teamAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 px-6 sm:px-12 bg-white select-none border-b border-[#e7e2dd]">
      <div className="max-w-[84rem] mx-auto space-y-16">
        
        {/* Header with Word-by-Word Blur Reveal */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <ScrollBlurFade>
            <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest font-semibold block whitespace-nowrap">
              • WHY STARTUPLIZE
            </span>
          </ScrollBlurFade>
          <ScrollBlurWords
            className="font-heading font-medium text-3xl sm:text-5xl text-[#060612] tracking-tight leading-tight"
            segments={[
              'Engineered for founders who refuse to settle for',
              { text: 'average.', isCoral: true, isItalic: true },
            ]}
          />
        </div>

        {/* 4-Block Bento Grid with Staggered Slide Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1: Team Collaborative Sprint Photo (Span 7) */}
          <ScrollSlideCard
            delay={0.1}
            className="lg:col-span-7 bg-[#f5f4f3] rounded-[2rem] p-8 sm:p-10 border border-[#e7e2dd] flex flex-col justify-between overflow-hidden relative min-h-[380px] shadow-sm"
          >
            <div className="space-y-2 z-10">
              <span className="text-body-sm font-mono text-[#ff6321] font-semibold uppercase tracking-wider">
                RAPID DEPLOYMENT
              </span>
              <h3 className="font-heading font-medium text-2xl sm:text-3xl text-[#060612]">
                Agile Sprints with Zero Bloat
              </h3>
              <p className="text-body-sm text-[#69686e] max-w-md font-body">
                We work in intense 2-to-4 week sprints. Direct communication, transparent GitHub commits, and no account-manager bureaucracy.
              </p>
            </div>

            <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden mt-6 shadow-md border border-[#e7e2dd]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Engineering sprint"
                fill
                className="object-cover"
              />
            </div>
          </ScrollSlideCard>

          {/* Card 2: Coral Banner (Span 5) with Senior Talent */}
          <ScrollSlideCard
            delay={0.2}
            className="lg:col-span-5 bg-[#ff6321] text-white rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between shadow-xl min-h-[380px]"
          >
            <div className="space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-white/20 text-[11px] font-mono font-bold tracking-wider uppercase border border-white/30 whitespace-nowrap shrink-0 inline-block">
                SENIOR TALENT ONLY
              </span>
              <h3 className="font-heading font-medium text-2xl sm:text-3xl text-white">
                Direct Work with Seasoned Engineers
              </h3>
              <p className="text-body-sm text-white/90 font-body leading-relaxed">
                Your project is built exclusively by senior developers with 8+ years of production experience in WordPress, Elementor Pro, Webflow, and Local SEO.
              </p>
            </div>

            <div className="pt-8 border-t border-white/20 flex items-center justify-between">
              <div className="flex -space-x-2">
                {teamAvatars.map((url, i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs">
                    <Image src={url} alt="Senior engineer" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-body-sm font-mono font-bold text-white whitespace-nowrap">
                100% IN-HOUSE
              </span>
            </div>
          </ScrollSlideCard>

          {/* Card 3: 3 Live Performance Gauges (Span 8) */}
          <ScrollSlideCard
            delay={0.3}
            className="lg:col-span-8 bg-[#060612] text-white rounded-[2rem] p-8 sm:p-12 flex flex-col justify-between shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-body-sm font-mono text-[#ff6321] font-semibold uppercase tracking-wider">
                  VERIFIED FIELD STANDARDS
                </span>
                <h3 className="font-heading font-medium text-2xl sm:text-3xl text-white mt-1">
                  Speed As A Mathematical Weapon
                </h3>
              </div>
              <span className="text-body-sm font-mono text-white/50">
                AUDITED ON CRUX DATA
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="font-heading font-medium text-4xl text-[#ff6321]">99.4%</div>
                <div className="font-heading font-medium text-base text-white">Client Retention</div>
                <div className="text-[11px] font-mono text-[#69686e]">Annual Growth Retainers</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="font-heading font-medium text-4xl text-white">0.6s</div>
                <div className="font-heading font-medium text-base text-white">Mobile LCP Speed</div>
                <div className="text-[11px] font-mono text-[#69686e]">Sub-Second Render</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="font-heading font-medium text-4xl text-[#ff6321]">100%</div>
                <div className="font-heading font-medium text-base text-white">CWV Pass Rate</div>
                <div className="text-[11px] font-mono text-[#69686e]">Google Search Console</div>
              </div>
            </div>
          </ScrollSlideCard>

          {/* Card 4: Architecture Portrait (Span 4) */}
          <ScrollSlideCard
            delay={0.4}
            className="lg:col-span-4 bg-[#f5f4f3] rounded-[2rem] p-8 sm:p-10 border border-[#e7e2dd] flex flex-col justify-between shadow-sm"
          >
            <div className="space-y-2">
              <span className="text-body-sm font-mono text-[#69686e] uppercase tracking-wider">
                CORE PHILOSOPHY
              </span>
              <h3 className="font-heading font-medium text-2xl text-[#060612]">
                Mathematical Precision & High Conversion
              </h3>
              <p className="text-body-sm text-[#69686e] font-body leading-relaxed">
                Design that wins awards is good. Design that accelerates qualified inquiries and customer revenue is unbeatable.
              </p>
            </div>

            <div className="pt-6 border-t border-[#e7e2dd] flex items-center justify-between text-body-sm font-mono text-[#060612] font-semibold">
              <span>ZERO BLOAT THEMES</span>
              <span className="text-[#ff6321]">✓ GUARANTEED</span>
            </div>
          </ScrollSlideCard>

        </div>

      </div>
    </section>
  );
}
