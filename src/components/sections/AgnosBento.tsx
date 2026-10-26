'use client';

import React from 'react';
import Image from 'next/image';
import { PillButton } from '@/components/ui/PillButton';
import { ScrollBlurWords, ScrollSlideCard, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

interface AgnosBentoProps {
  onOpenBooking?: (service?: string) => void;
}

export function AgnosBento({ onOpenBooking }: AgnosBentoProps = {}) {
  const teamAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  ];

  const countryTags = [
    'United States',
    'Australia',
    'United Kingdom',
    'Canada',
    'Germany',
    'UAE',
  ];

  return (
    <section id="why-us" className="py-10 sm:py-12 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white select-none border-b border-[#e7e2dd]">
      <div className="max-w-[84rem] mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
        
        {/* Header with Word-by-Word Blur Reveal */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <ScrollBlurFade>
            <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest font-semibold block whitespace-nowrap">
              • WHY STARTUPLIZE
            </span>
          </ScrollBlurFade>
          <ScrollBlurWords
            className="font-heading font-medium text-[2rem] sm:text-4xl lg:text-5xl text-[#060612] tracking-tight leading-[1.18] sm:leading-tight"
            segments={[
              'Built Worldwide.',
              { text: 'Trusted Everywhere.', isCoral: true, isItalic: true },
            ]}
          />
        </div>

        {/* 4-Block Bento Grid with Staggered Slide Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Global Footprint (Top Left - Span 7) */}
          <ScrollSlideCard
            delay={0.1}
            className="md:col-span-1 lg:col-span-7 bg-[#f5f4f3] rounded-md sm:rounded-lg p-6 sm:p-8 lg:p-10 border border-[#e7e2dd] flex flex-col justify-between overflow-hidden relative min-h-[340px] sm:min-h-[380px] shadow-xs group hover:border-[#ff6321]/30 transition-all duration-300"
          >
            <div className="space-y-4 z-10">
              <div className="flex items-center justify-between">
                <span className="text-body-sm font-mono text-[#ff6321] font-semibold uppercase tracking-wider">
                  CROSS-BORDER DELIVERY
                </span>
                <span className="text-xs font-mono text-[#52525b] bg-white px-2.5 py-1 rounded-full border border-[#e7e2dd]">
                  6+ TIME ZONES
                </span>
              </div>

              <div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-[#ff6321] tracking-tight leading-none mb-3">
                  6+
                </div>
                <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#060612]">
                  Countries Served
                </h3>
              </div>

              <p className="text-body-sm text-[#52525b] max-w-lg font-body leading-relaxed">
                Clean web design and local search architecture built to convert across any market or time zone.
              </p>
            </div>

            {/* Country Tags Strip */}
            <div className="pt-6 mt-6 border-t border-[#e7e2dd] flex flex-wrap gap-2 z-10">
              {countryTags.map((country) => (
                <span
                  key={country}
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white text-[#060612] border border-[#e7e2dd] shadow-2xs"
                >
                  {country}
                </span>
              ))}
            </div>
          </ScrollSlideCard>

          {/* Card 2: Direct Founder Partnership (Top Right - Span 5) */}
          <ScrollSlideCard
            delay={0.2}
            className="md:col-span-1 lg:col-span-5 bg-[#ff6321] text-white rounded-md sm:rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xl shadow-orange-500/25 min-h-[340px] sm:min-h-[380px] group hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-white/20 text-sm font-mono font-bold tracking-wider uppercase border border-white/30 whitespace-nowrap shrink-0 inline-block">
                DIRECT FOUNDER PARTNERSHIP
              </span>
              <div>
                <div className="text-5xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-none mb-3">
                  13+
                </div>
                <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-white">
                  Businesses We&apos;ve Helped
                </h3>
              </div>
              <p className="text-body-sm text-white/95 font-body leading-relaxed">
                No agency handoffs or middlemen. You talk directly with the person designing and coding your site.
              </p>
            </div>

            <div className="pt-8 border-t border-white/20 flex items-center justify-between">
              <div className="flex -space-x-2">
                {teamAvatars.map((url, i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs">
                    <Image src={url} alt="Senior builder" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-body-sm font-mono font-bold text-white whitespace-nowrap">
                100% IN-HOUSE
              </span>
            </div>
          </ScrollSlideCard>

          {/* Card 3: Post-Launch Performance / After-Sales Commitment (Bottom Left - Span 8 - Obsidian Dark) */}
          <ScrollSlideCard
            delay={0.3}
            className="md:col-span-2 lg:col-span-8 bg-[#060612] text-white rounded-md sm:rounded-lg p-6 sm:p-8 lg:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Radial Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff6321]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
              <div className="space-y-2">
                <span className="text-body-sm font-mono text-[#ff7e47] font-semibold uppercase tracking-wider">
                  AFTER-SALES COMMITMENT
                </span>
                <div className="text-4xl sm:text-5xl font-heading font-extrabold text-[#ff7e47] tracking-tight">
                  30 Days
                </div>
                <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-white">
                  Complimentary Post-Launch Care
                </h3>
              </div>
              <span className="text-body-sm font-mono text-zinc-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full self-start">
                INCLUDED WITH EVERY BUILD
              </span>
            </div>

            <p className="text-body-sm text-zinc-300 font-body leading-relaxed pt-4 max-w-2xl relative z-10">
              We never hand off a project and disappear. Every Webflow and WordPress build includes 30 days of hands-on support to ensure zero bugs, seamless forms, and complete peace of mind.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 relative z-10">
              <div className="p-4 sm:p-5 rounded-md bg-white/5 border border-white/10 space-y-1">
                <div className="font-heading font-bold text-3xl sm:text-4xl text-[#ff7e47]">&lt; 24h</div>
                <div className="font-heading font-medium text-base text-white">Issue Resolution</div>
                <div className="text-xs font-mono text-zinc-400">Fast fixes &amp; minor adjustments</div>
              </div>

              <div className="p-4 sm:p-5 rounded-md bg-white/5 border border-white/10 space-y-1">
                <div className="font-heading font-bold text-3xl sm:text-4xl text-white">100%</div>
                <div className="font-heading font-medium text-base text-white">Platform Handover</div>
                <div className="text-xs font-mono text-zinc-400">Full Webflow transfer &amp; WordPress admin</div>
              </div>

              <div className="p-4 sm:p-5 rounded-md bg-white/5 border border-white/10 space-y-1">
                <div className="font-heading font-bold text-3xl sm:text-4xl text-[#ff7e47]">$0</div>
                <div className="font-heading font-medium text-base text-white">Zero Hidden Fees</div>
                <div className="text-xs font-mono text-zinc-400">No retainers or forced contracts</div>
              </div>
            </div>
          </ScrollSlideCard>

          {/* Card 4: Action & Risk-Free CTA (Bottom Right - Span 4) */}
          <ScrollSlideCard
            delay={0.4}
            className="md:col-span-2 lg:col-span-4 bg-[#f5f4f3] rounded-md sm:rounded-lg p-6 sm:p-8 lg:p-10 border border-[#e7e2dd] flex flex-col justify-between shadow-xs group hover:border-[#ff6321]/30 transition-all duration-300 min-h-[340px] sm:min-h-[380px]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-wider font-semibold block">
                  NO-OBLIGATION AUDIT
                </span>
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                  <Image src="/founder-audit.png" alt="Founder review" fill className="object-cover" />
                </div>
              </div>

              <h3 className="font-heading font-semibold text-2xl text-[#060612] tracking-tight leading-snug">
                Want to Uncover Your Site&apos;s Leaks?
              </h3>
              
              <p className="text-body-sm text-[#52525b] font-body leading-relaxed">
                We will send you a 5-minute video review of your website speed, local SEO rank, and key conversion blockers.
              </p>
            </div>

            <div className="pt-6 flex justify-start">
              <PillButton
                variant="coral"
                size="md"
                onClick={() => onOpenBooking ? onOpenBooking('Free 5-Min Video Audit') : undefined}
                showArrow={true}
                className="w-fit self-start shadow-xs"
              >
                Get Free 5-Min Video Audit
              </PillButton>
            </div>
          </ScrollSlideCard>

        </div>

      </div>
    </section>
  );
}
