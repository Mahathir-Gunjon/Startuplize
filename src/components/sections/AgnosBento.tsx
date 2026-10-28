'use client';

import React from 'react';
import Image from 'next/image';
import { Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
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
          
          {/* Card 1: 76+ Businesses Scaled (Top Left - Span 7) */}
          <ScrollSlideCard
            delay={0.1}
            className="md:col-span-1 lg:col-span-7 bg-[#f5f4f3] rounded-md sm:rounded-lg p-6 sm:p-8 lg:p-10 border border-[#e7e2dd] flex flex-col justify-between overflow-hidden relative min-h-[340px] sm:min-h-[380px] shadow-xs group hover:border-[#ff6321]/30 transition-all duration-300"
          >
            <div className="space-y-3 sm:space-y-4 z-10">
              <div className="text-3xl sm:text-4xl lg:text-[2.6rem] font-heading font-extrabold text-[#ff6321] tracking-tight leading-none">
                76+
              </div>

              <p className="text-xl sm:text-2xl lg:text-[1.55rem] text-[#060612] font-heading font-medium leading-snug max-w-xl">
                Over 76 businesses scaled with custom WordPress &amp; Webflow redesigns, conversion funnels, and local SEO.
              </p>
            </div>

            {/* Senior Builders + 5-Star Rating + Upwork & Fiverr Logos */}
            <div className="pt-6 mt-6 border-t border-[#e7e2dd] flex flex-wrap items-center justify-between gap-4 z-10">
              {/* Headshots + Star Rating */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 shrink-0">
                  {teamAvatars.map((url, i) => (
                    <div key={i} className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-white shadow-xs">
                      <Image src={url} alt="Senior builder" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs font-mono font-bold text-[#060612] ml-1">5.0</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#69686e]">Top Rated Reviews</span>
                </div>
              </div>

              {/* Upwork & Fiverr Platform Badges */}
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e7e2dd] shadow-2xs">
                  <svg role="img" viewBox="0 0 24 24" fill="#14a800" className="w-4 h-4 shrink-0">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                  </svg>
                  <span className="text-xs font-heading font-semibold text-[#060612]">Upwork</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e7e2dd] shadow-2xs">
                  <svg role="img" viewBox="0 0 24 24" fill="#1dbf73" className="w-4 h-4 shrink-0">
                    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" />
                  </svg>
                  <span className="text-xs font-heading font-semibold text-[#060612]">Fiverr</span>
                </div>
              </div>
            </div>
          </ScrollSlideCard>

          {/* Card 2: White-Label Agency Partner (Top Right - Span 5) */}
          <ScrollSlideCard
            delay={0.2}
            className="md:col-span-1 lg:col-span-5 bg-[#ff6321] text-white rounded-md sm:rounded-lg p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-xl shadow-orange-500/25 min-h-[340px] sm:min-h-[380px] group hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="text-3xl sm:text-4xl lg:text-[2.6rem] font-heading font-extrabold text-white tracking-tight leading-none">
                White-Label
              </div>
              
              <p className="text-xl sm:text-2xl lg:text-[1.55rem] text-white font-heading font-medium leading-snug">
                Reliable, confidential WordPress &amp; Webflow partner for multiple creative agencies worldwide.
              </p>
            </div>

            {/* Clean bottom line - no pills */}
            <div className="pt-6 mt-6 border-t border-white/20 flex items-center justify-between text-white/90">
              <span className="text-xs font-mono font-bold tracking-wider uppercase">Multiple Agency Partner</span>
              <span className="text-xs font-mono font-medium text-white/80">Strict NDA Guaranteed</span>
            </div>
          </ScrollSlideCard>

          {/* Card 3: Post-Launch Performance (Bottom Left - Span 8 - Obsidian Dark) */}
          <ScrollSlideCard
            delay={0.3}
            className="md:col-span-2 lg:col-span-8 bg-[#060612] text-white rounded-md sm:rounded-lg p-6 sm:p-8 lg:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Radial Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff6321]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 sm:space-y-4 pb-6 border-b border-white/10 relative z-10">
              <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#ff7e47] tracking-tight">
                30 Days
              </div>
              
              <p className="text-xl sm:text-2xl lg:text-[1.55rem] text-zinc-200 font-heading font-medium leading-snug max-w-2xl">
                30 days of dedicated post-launch support with every WordPress &amp; Webflow build to guarantee zero bugs and complete peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 relative z-10">
              <div className="p-3.5 sm:p-4 rounded-md bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#ff7e47] shrink-0" />
                  <span className="font-heading font-bold text-xl sm:text-2xl text-[#ff7e47]">&lt; 24h</span>
                </div>
                <div className="font-heading font-medium text-xs sm:text-sm text-zinc-300">Fast Fixes</div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-md bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                  <span className="font-heading font-bold text-xl sm:text-2xl text-white">100%</span>
                </div>
                <div className="font-heading font-medium text-xs sm:text-sm text-zinc-300">Full Handover</div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-md bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ff7e47] shrink-0" />
                  <span className="font-heading font-bold text-xl sm:text-2xl text-[#ff7e47]">$0</span>
                </div>
                <div className="font-heading font-medium text-xs sm:text-sm text-zinc-300">Zero Extra Fees</div>
              </div>
            </div>
          </ScrollSlideCard>

          {/* Card 4: Action & Risk-Free Video Audit (Bottom Right - Span 4) */}
          <ScrollSlideCard
            delay={0.4}
            className="md:col-span-2 lg:col-span-4 bg-[#f5f4f3] rounded-md sm:rounded-lg p-6 sm:p-8 lg:p-10 border border-[#e7e2dd] flex flex-col justify-between shadow-xs group hover:border-[#ff6321]/30 transition-all duration-300 min-h-[340px] sm:min-h-[380px]"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
                  <Image src="/founder-audit.png" alt="Founder review" fill className="object-cover" />
                </div>
              </div>

              <p className="text-xl sm:text-2xl lg:text-[1.45rem] text-[#060612] font-heading font-medium leading-snug">
                Free 5-minute video review analyzing your WordPress speed, local SEO rank, and conversion leaks.
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
