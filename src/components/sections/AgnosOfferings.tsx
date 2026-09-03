'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';
import { ScrollBlurWords, ScrollSlideCard, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

interface AgnosOfferingsProps {
  onOpenBooking: (offering?: string) => void;
}

export function AgnosOfferings({ onOpenBooking }: AgnosOfferingsProps) {
  const offerings = [
    {
      id: 'audit',
      badge: 'NO COMMITMENT REQUIRED',
      title: 'Free Website & Local Audit',
      description:
        'A comprehensive diagnostic uncovering every single speed bottleneck, plugin conflict, and local search visibility deficit holding your business back.',
      deliverables: [
        'Mobile Speed & PageSpeed Analysis',
        'Google Business Profile Visibility Audit',
        'Conversion & Lead Capture Diagnostic',
        '48-Hour Actionable Video Strategy',
      ],
      isPopular: false,
      btnText: 'Request free audit',
      btnVariant: 'dark' as const,
    },
    {
      id: 'sprint',
      badge: 'DEDICATED 4-WEEK SPRINT',
      title: 'Full Production Sprint',
      description:
        'Complete end-to-end website build. We craft custom WordPress, Elementor Pro, or Webflow websites engineered to turn local visitors into booked calls.',
      deliverables: [
        'Custom WordPress, Elementor, or Webflow Build',
        '100% Mobile Core Web Vitals Pass',
        'Google Business Profile & Local Search Setup',
        'Direct Access to Senior Developers',
      ],
      isPopular: true,
      btnText: 'Book production sprint',
      btnVariant: 'light' as const,
    },
  ];

  return (
    <section className="relative z-10 pt-28 sm:pt-36 pb-24 sm:pb-32 px-6 sm:px-12 bg-[#faf9f8] select-none border-b border-[#e7e2dd]">
      <div className="max-w-[84rem] mx-auto space-y-16">
        
        {/* Section Headline with Hero-Style Word-by-Word Blur Reveal */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <ScrollBlurFade>
            <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest font-semibold block whitespace-nowrap">
              • HOW WE COLLABORATE
            </span>
          </ScrollBlurFade>
          <ScrollBlurWords
            className="font-heading font-medium text-3xl sm:text-5xl text-[#060612] tracking-tight leading-tight"
            segments={[
              'We are a studio of engineers dedicated to building platforms that',
              { text: 'convert.', isCoral: true, isItalic: true },
            ]}
          />
        </div>

        {/* 2 Comparison Cards with Slide Reveal & Staggered Delay */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {offerings.map((card, idx) => (
            <ScrollSlideCard
              key={card.id}
              delay={idx * 0.2 + 0.15}
              className={`rounded-[2rem] p-8 sm:p-12 flex flex-col justify-between shadow-xl transition-all duration-300 relative overflow-hidden ${
                card.isPopular
                  ? 'bg-[#ff6321] text-white'
                  : 'bg-white text-[#060612] border border-[#e7e2dd]'
              }`}
            >
              <div className="space-y-6">
                {/* Badge Pill */}
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase whitespace-nowrap shrink-0 ${
                      card.isPopular
                        ? 'bg-white/20 text-white border border-white/30'
                        : 'bg-[#f5f4f3] text-[#ff6321] border border-[#e7e2dd]'
                    }`}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3
                    className={`font-heading font-medium text-2xl sm:text-3xl tracking-tight ${
                      card.isPopular ? 'text-white' : 'text-[#060612]'
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-body-sm mt-3 leading-relaxed font-body ${
                      card.isPopular ? 'text-white/90' : 'text-[#69686e]'
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3 pt-4 border-t border-current/15">
                  {card.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          card.isPopular ? 'bg-white text-[#ff6321]' : 'bg-[#060612] text-white'
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span
                        className={`text-body-sm font-medium ${
                          card.isPopular ? 'text-white' : 'text-[#060612]'
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="pt-8">
                <PillButton
                  variant={card.btnVariant}
                  size="md"
                  onClick={() => onOpenBooking(card.title)}
                  showArrow={true}
                  className="w-full justify-between shadow-md"
                >
                  {card.btnText}
                </PillButton>
              </div>
            </ScrollSlideCard>
          ))}
        </div>

      </div>
    </section>
  );
}
