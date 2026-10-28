'use client';

import React from 'react';
import { Search, Palette, Laptop, Rocket } from 'lucide-react';
import { ScrollBlurWords, ScrollSlideCard, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

interface WorkProcessSectionProps {
  onOpenBooking?: (service?: string) => void;
}

export function WorkProcessSection({ onOpenBooking }: WorkProcessSectionProps = {}) {
  const steps = [
    {
      id: 'audit-strategy',
      time: '24h',
      title: 'Audit & Strategy',
      description:
        'We analyze your site speed, conversion leaks, and local search competitors to create a clear, data-driven roadmap to win local clients.',
      icon: Search,
      isTinted: true, // Card 1: Tinted like reference image
    },
    {
      id: 'ui-ux-design',
      time: '48h',
      title: 'UI & UX Design',
      description:
        'We craft a modern, authoritative brand presence with high-conversion layouts and polished typography designed to command immediate trust.',
      icon: Palette,
      isTinted: false, // Card 2: Crisp white
    },
    {
      id: 'clean-development',
      time: '2 Weeks',
      title: 'Clean Development',
      description:
        'We build lightweight, mobile-first pages with Google Map Pack sync, schema markup, and robust SEO foundations to capture local searches.',
      icon: Laptop,
      isTinted: false, // Card 3: Crisp white
    },
    {
      id: 'launch-qa',
      time: '48h',
      title: 'Launch & QA',
      description:
        'We test cross-device functionality, secure indexing on Google Search Console, and publish your new website with zero operational downtime.',
      icon: Rocket,
      isTinted: true, // Card 4: Tinted like reference image
    },
  ];

  return (
    <section
      id="process"
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white select-none border-b border-[#e7e2dd] relative z-10 overflow-hidden"
    >
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16 lg:space-y-20">
        
        {/* Section Header with Word-by-Word Blur Reveal (Same as Other Sections) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-[#e7e2dd]">
          <div className="space-y-2 sm:space-y-3">
            <ScrollBlurFade>
              <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest font-semibold block whitespace-nowrap">
                • HOW WE WORK
              </span>
            </ScrollBlurFade>

            {/* Main Headline with ScrollBlurWords */}
            <ScrollBlurWords
              className="font-heading font-medium text-[2rem] sm:text-4xl lg:text-5xl text-[#060612] tracking-tight leading-[1.18] sm:leading-tight"
              segments={[
                'Building a Seamless',
                { text: 'Growth Experience', isCoral: true, isItalic: true },
              ]}
            />
          </div>

          {/* Subheading on the Right Side */}
          <ScrollBlurFade delay={0.2}>
            <p className="text-body-sm text-[#52525b] font-body max-w-md">
              Beyond just building a website, we execute a streamlined 4-phase roadmap that transforms your online presence into a customer acquisition engine.
            </p>
          </ScrollBlurFade>
        </div>

        {/* Staggered Alternating Process Roadmap (Exact Flow Layout from Screenshot) */}
        <div className="max-w-4xl lg:max-w-5xl mx-auto space-y-6 sm:space-y-8 relative">
          
          {/* Card 1: Top Left */}
          <div className="flex justify-start relative">
            <ScrollSlideCard
              delay={0.1}
              className="w-full md:w-[440px] lg:w-[470px] rounded-[3px] p-4 sm:p-5 lg:p-6 flex items-stretch gap-3.5 sm:gap-4 lg:gap-5 shadow-xs transition-all duration-300 hover:shadow-md bg-[#fff7f2] border border-[#ff6321]/25 hover:border-[#ff6321]/40"
            >
              {/* Vertical Time Pill (Coral Tinted) */}
              <div className="w-8 sm:w-9 rounded-full flex items-center justify-center shrink-0 self-stretch my-auto py-3 min-h-[90px] sm:min-h-[105px] bg-[#ff6321] text-white shadow-xs">
                <span
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase whitespace-nowrap"
                >
                  {steps[0].time}
                </span>
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0 space-y-2 py-0.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 text-[#ff6321] bg-white border border-[#ff6321]/20 shadow-2xs">
                    <Search size={15} className="stroke-[2.2]" />
                  </div>
                  <div
                    role="heading"
                    aria-level={3}
                    className="font-heading font-semibold text-lg sm:text-[1.2rem] text-[#060612] tracking-tight leading-snug"
                  >
                    {steps[0].title}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#52525b] font-body leading-relaxed">
                  {steps[0].description}
                </p>
              </div>
            </ScrollSlideCard>
          </div>

          {/* Connecting Curved Arrow: Card 1 -> Card 2 */}
          <div className="hidden md:block relative h-16 lg:h-20 -my-3 pointer-events-none" aria-hidden="true">
            <svg className="w-full h-full" viewBox="0 0 800 80" fill="none">
              <defs>
                <marker
                  id="arrow-down-1"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 2 2 L 7 5 L 2 8" stroke="#71717a" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </marker>
              </defs>
              <path
                d="M 380 15 H 630 Q 650 15 650 35 V 70"
                stroke="#cbd5e1"
                strokeWidth="1.75"
                strokeDasharray="5 5"
                markerEnd="url(#arrow-down-1)"
              />
            </svg>
          </div>

          {/* Card 2: Right Aligned */}
          <div className="flex justify-end relative">
            <ScrollSlideCard
              delay={0.2}
              className="w-full md:w-[440px] lg:w-[470px] rounded-[3px] p-4 sm:p-5 lg:p-6 flex items-stretch gap-3.5 sm:gap-4 lg:gap-5 shadow-xs transition-all duration-300 hover:shadow-md bg-white border border-[#e7e2dd] hover:border-[#ff6321]/30"
            >
              {/* Vertical Time Pill (Obsidian Dark) */}
              <div className="w-8 sm:w-9 rounded-full flex items-center justify-center shrink-0 self-stretch my-auto py-3 min-h-[90px] sm:min-h-[105px] bg-[#060612] text-white shadow-xs">
                <span
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase whitespace-nowrap"
                >
                  {steps[1].time}
                </span>
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0 space-y-2 py-0.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 text-[#060612] bg-[#f5f4f3] border border-[#e7e2dd] shadow-2xs">
                    <Palette size={15} className="stroke-[2.2]" />
                  </div>
                  <div
                    role="heading"
                    aria-level={3}
                    className="font-heading font-semibold text-lg sm:text-[1.2rem] text-[#060612] tracking-tight leading-snug"
                  >
                    {steps[1].title}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#52525b] font-body leading-relaxed">
                  {steps[1].description}
                </p>
              </div>
            </ScrollSlideCard>
          </div>

          {/* Connecting Curved Arrow: Card 2 -> Card 3 */}
          <div className="hidden md:block relative h-16 lg:h-20 -my-3 pointer-events-none" aria-hidden="true">
            <svg className="w-full h-full" viewBox="0 0 800 80" fill="none">
              <defs>
                <marker
                  id="arrow-down-2"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 2 2 L 7 5 L 2 8" stroke="#71717a" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </marker>
              </defs>
              <path
                d="M 520 15 H 240 Q 220 15 220 35 V 70"
                stroke="#cbd5e1"
                strokeWidth="1.75"
                strokeDasharray="5 5"
                markerEnd="url(#arrow-down-2)"
              />
            </svg>
          </div>

          {/* Card 3: Left Aligned */}
          <div className="flex justify-start relative">
            <ScrollSlideCard
              delay={0.3}
              className="w-full md:w-[440px] lg:w-[470px] rounded-[3px] p-4 sm:p-5 lg:p-6 flex items-stretch gap-3.5 sm:gap-4 lg:gap-5 shadow-xs transition-all duration-300 hover:shadow-md bg-white border border-[#e7e2dd] hover:border-[#ff6321]/30"
            >
              {/* Vertical Time Pill (Obsidian Dark) */}
              <div className="w-8 sm:w-9 rounded-full flex items-center justify-center shrink-0 self-stretch my-auto py-3 min-h-[90px] sm:min-h-[105px] bg-[#060612] text-white shadow-xs">
                <span
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase whitespace-nowrap"
                >
                  {steps[2].time}
                </span>
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0 space-y-2 py-0.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 text-[#060612] bg-[#f5f4f3] border border-[#e7e2dd] shadow-2xs">
                    <Laptop size={15} className="stroke-[2.2]" />
                  </div>
                  <div
                    role="heading"
                    aria-level={3}
                    className="font-heading font-semibold text-lg sm:text-[1.2rem] text-[#060612] tracking-tight leading-snug"
                  >
                    {steps[2].title}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#52525b] font-body leading-relaxed">
                  {steps[2].description}
                </p>
              </div>
            </ScrollSlideCard>
          </div>

          {/* Connecting Curved Arrow: Card 3 -> Card 4 */}
          <div className="hidden md:block relative h-16 lg:h-20 -my-3 pointer-events-none" aria-hidden="true">
            <svg className="w-full h-full" viewBox="0 0 800 80" fill="none">
              <defs>
                <marker
                  id="arrow-down-3"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto"
                >
                  <path d="M 2 2 L 7 5 L 2 8" stroke="#71717a" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </marker>
              </defs>
              <path
                d="M 380 15 H 630 Q 650 15 650 35 V 70"
                stroke="#cbd5e1"
                strokeWidth="1.75"
                strokeDasharray="5 5"
                markerEnd="url(#arrow-down-3)"
              />
            </svg>
          </div>

          {/* Card 4: Right Aligned */}
          <div className="flex justify-end relative">
            <ScrollSlideCard
              delay={0.4}
              className="w-full md:w-[440px] lg:w-[470px] rounded-[3px] p-4 sm:p-5 lg:p-6 flex items-stretch gap-3.5 sm:gap-4 lg:gap-5 shadow-xs transition-all duration-300 hover:shadow-md bg-[#fff7f2] border border-[#ff6321]/25 hover:border-[#ff6321]/40"
            >
              {/* Vertical Time Pill (Coral Tinted) */}
              <div className="w-8 sm:w-9 rounded-full flex items-center justify-center shrink-0 self-stretch my-auto py-3 min-h-[90px] sm:min-h-[105px] bg-[#ff6321] text-white shadow-xs">
                <span
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase whitespace-nowrap"
                >
                  {steps[3].time}
                </span>
              </div>

              {/* Main Content */}
              <div className="flex-1 min-w-0 space-y-2 py-0.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 text-[#ff6321] bg-white border border-[#ff6321]/20 shadow-2xs">
                    <Rocket size={15} className="stroke-[2.2]" />
                  </div>
                  <div
                    role="heading"
                    aria-level={3}
                    className="font-heading font-semibold text-lg sm:text-[1.2rem] text-[#060612] tracking-tight leading-snug"
                  >
                    {steps[3].title}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#52525b] font-body leading-relaxed">
                  {steps[3].description}
                </p>
              </div>
            </ScrollSlideCard>
          </div>

        </div>

      </div>
    </section>
  );
}
