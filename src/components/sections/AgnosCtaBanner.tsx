'use client';

import React from 'react';
import { PillButton } from '@/components/ui/PillButton';
import { ScrollBlurWords, ScrollSlideCard, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

interface AgnosCtaBannerProps {
  onOpenBooking: () => void;
}

export function AgnosCtaBanner({ onOpenBooking }: AgnosCtaBannerProps) {
  return (
    <section className="relative z-20 pt-8 sm:pt-12 md:pt-16 lg:pt-20 -mb-24 sm:-mb-28 lg:-mb-32 px-4 sm:px-6 lg:px-12 select-none pointer-events-none">
      <div className="pointer-events-auto">
        <ScrollSlideCard
          delay={0.05}
          yOffset={30}
          className="max-w-[80rem] mx-auto bg-[#ff6321] rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-20 text-white shadow-2xl shadow-black/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10"
        >
        {/* Subtle background circular watermark */}
        <div className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full border-4 border-white/10 pointer-events-none" />
        <div className="absolute -right-32 -bottom-32 w-[520px] h-[520px] rounded-full border border-white/10 pointer-events-none" />

        {/* Left Copy */}
        <div className="space-y-3 sm:space-y-4 max-w-2xl relative z-10 text-center lg:text-left">
          <ScrollBlurFade>
            <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/20 text-sm font-mono font-bold tracking-wider uppercase border border-white/30 whitespace-nowrap shrink-0 inline-block">
              READY TO SCALE?
            </span>
          </ScrollBlurFade>
          <ScrollBlurWords
            className="font-heading font-medium text-[2rem] sm:text-4xl lg:text-6xl text-white tracking-tight leading-[1.18] sm:leading-tight"
            segments={['Ready to start your next project?']}
          />
          <ScrollBlurFade delay={0.25}>
            <p className="text-body-sm sm:text-body text-white/95 font-body leading-relaxed max-w-xl">
              Let&apos;s build your platform for sub-second LCP speed, seamless conversions, and local search dominance.
            </p>
          </ScrollBlurFade>
        </div>

        {/* Right CTA Button */}
        <div className="w-full lg:w-auto relative z-10 shrink-0 flex justify-center lg:justify-end">
          <ScrollSlideCard delay={0.3} yOffset={16} className="w-fit flex justify-center">
            <PillButton
              variant="dark"
              size="lg"
              href="/contact"
              showArrow={true}
              className="w-fit self-center shadow-2xl hover:scale-105"
            >
              Start project
            </PillButton>
          </ScrollSlideCard>
        </div>

      </ScrollSlideCard>
      </div>
    </section>
  );
}
