'use client';

import React from 'react';
import { PillButton } from '@/components/ui/PillButton';
import { ScrollBlurWords, ScrollSlideCard, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

interface AgnosCtaBannerProps {
  onOpenBooking: () => void;
}

export function AgnosCtaBanner({ onOpenBooking }: AgnosCtaBannerProps) {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-12 bg-[#faf9f8] select-none">
      <ScrollSlideCard
        delay={0.05}
        yOffset={30}
        className="max-w-[84rem] mx-auto bg-gradient-to-br from-[#ff6321] via-[#ff7e47] to-[#e54c0e] rounded-[2.5rem] p-8 sm:p-16 lg:p-20 text-white shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        {/* Subtle background circular watermark */}
        <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full border-4 border-white/10 pointer-events-none" />
        <div className="absolute -right-32 -bottom-32 w-[520px] h-[520px] rounded-full border border-white/10 pointer-events-none" />

        {/* Left Copy */}
        <div className="space-y-4 max-w-2xl relative z-10 text-center lg:text-left">
          <ScrollBlurFade>
            <span className="px-4 py-1.5 rounded-full bg-white/20 text-[11px] font-mono font-bold tracking-wider uppercase border border-white/30 whitespace-nowrap shrink-0 inline-block">
              READY TO SCALE?
            </span>
          </ScrollBlurFade>
          <ScrollBlurWords
            className="font-heading font-medium text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
            segments={['Ready to start your next project?']}
          />
          <ScrollBlurFade delay={0.25}>
            <p className="text-body text-white/90 font-body leading-relaxed max-w-xl">
              Let&apos;s engineer your platform for sub-second LCP speed, seamless conversions, and local search dominance.
            </p>
          </ScrollBlurFade>
        </div>

        {/* Right CTA Button */}
        <div className="relative z-10 shrink-0 whitespace-nowrap">
          <ScrollSlideCard delay={0.3} yOffset={16}>
            <PillButton
              variant="dark"
              size="lg"
              onClick={onOpenBooking}
              showArrow={true}
              className="shadow-2xl hover:scale-105 whitespace-nowrap shrink-0"
            >
              Start your project
            </PillButton>
          </ScrollSlideCard>
        </div>

      </ScrollSlideCard>
    </section>
  );
}
