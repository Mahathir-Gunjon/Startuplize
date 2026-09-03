'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ScrollBlurWords, ScrollSlideCard, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

export function FaqApex() {
  const [openId, setOpenId] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Why custom WordPress/Webflow over off-the-shelf templates?',
      a: 'Off-the-shelf commercial themes load dozens of unneeded CSS/JS libraries, bloated page builders, and unoptimized SQL queries that severely harm mobile speed and search visibility. Our custom architectures run with clean semantic markup, sub-second load times, and zero unnecessary plugins.',
    },
    {
      q: 'How long does local SEO and Google Business Profile optimization take to show results?',
      a: 'Initial technical fixes, category adjustments, and profile verification updates often show visibility improvements within 14 to 30 days. Broad local map presence and consistent call flow typically compound over 60 to 90 days as citations index and automated customer review generation builds momentum.',
    },
    {
      q: 'What is your Core Web Vitals guarantee?',
      a: 'Every platform we build is mathematically guaranteed to pass 100% of Google field data for Core Web Vitals (Largest Contentful Paint < 1.2s, Interaction to Next Paint < 50ms, and Cumulative Layout Shift = 0.000) on both mobile and desktop.',
    },
    {
      q: 'How does the migration process work without losing existing search traffic?',
      a: 'We map every single legacy URL into a 1-to-1 301 redirection matrix, preserve critical internal linking structures and schema entity graphs, sanitize database records, and submit immediate search console sitemaps upon deployment to preserve and improve organic traffic.',
    },
    {
      q: 'What are your ongoing support and maintenance retainers?',
      a: 'We provide dedicated monthly support covering continuous speed monitoring, WordPress/plugin security updates, Google Business Profile management, local citation maintenance, and lead conversion optimization.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenId(openId === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-36 px-6 sm:px-12 bg-white select-none border-b border-[#e7e2dd]">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header with Word-by-Word Blur Reveal */}
        <div className="text-center space-y-3">
          <ScrollBlurFade>
            <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest font-semibold block whitespace-nowrap">
              • PROTOCOL & ANSWERS
            </span>
          </ScrollBlurFade>
          <ScrollBlurWords
            className="font-heading font-medium text-3xl sm:text-5xl text-[#060612] tracking-tight"
            segments={['Frequently Asked Questions']}
          />
          <ScrollBlurFade delay={0.2}>
            <p className="text-body text-[#69686e] max-w-lg mx-auto font-body">
              Everything you need to know about our engineering standards, migration safeguards, and delivery timelines.
            </p>
          </ScrollBlurFade>
        </div>

        {/* 5 Targeted FAQ Items with Hairline Borders & Staggered Slide Reveals */}
        <div className="border-b border-[#e7e2dd]">
          {faqs.map((item, idx) => {
            const isOpen = openId === idx;
            return (
              <ScrollSlideCard
                key={idx}
                delay={idx * 0.08 + 0.1}
                yOffset={20}
                className="border-t border-[#e7e2dd]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between gap-4 text-left cursor-pointer group whitespace-normal"
                >
                  <span className="font-heading font-medium text-lg sm:text-xl text-[#060612] group-hover:text-[#ff6321] transition-colors leading-snug">
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring' as const, stiffness: 350, damping: 25 }}
                    className="w-8 h-8 rounded-full bg-[#f5f4f3] border border-[#e7e2dd] flex items-center justify-center shrink-0 text-[#060612] group-hover:bg-[#ff6321] group-hover:text-white transition-colors"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: 'spring' as const, stiffness: 350, damping: 30 }}
                    >
                      <p className="pb-6 text-body text-[#69686e] leading-relaxed font-body max-w-3xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ScrollSlideCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
