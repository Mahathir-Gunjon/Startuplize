'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { ScrollBlurWords, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

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
    <section id="faq" className="relative py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 bg-white select-none">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header: "Questions" (Left) & "• FAQ" (Right) matching reference screenshot */}
        <div className="flex items-center justify-between mb-10 sm:mb-14 lg:mb-16">
          <ScrollBlurWords
            as="h2"
            className="font-heading font-medium text-4xl sm:text-5xl lg:text-[3.75rem] text-[#060612] tracking-tight leading-none"
            segments={['Questions']}
          />
          <ScrollBlurFade delay={0.15}>
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-zinc-500 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#ff6321] inline-block animate-pulse" />
              <span>FAQ</span>
            </div>
          </ScrollBlurFade>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-[#e7e2dd]">
          {faqs.map((item, idx) => {
            const isOpen = openId === idx;
            const numStr = String(idx + 1).padStart(2, '0') + '.';
            return (
              <div
                key={idx}
                className={`transition-colors duration-300 ${
                  isOpen ? 'border-b border-[#ffedd5]' : 'border-b border-[#e7e2dd]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full whitespace-normal py-7 sm:py-8 lg:py-9 flex items-start justify-between text-left cursor-pointer group"
                >
                  {/* Left Column: Number (01., 02., etc.) */}
                  <span
                    className={`font-mono text-base sm:text-lg lg:text-xl font-medium shrink-0 w-14 sm:w-20 lg:w-24 pt-0.5 transition-colors duration-200 ${
                      isOpen ? 'text-[#ff6321]' : 'text-[#060612] group-hover:text-[#ff6321]'
                    }`}
                  >
                    {numStr}
                  </span>

                  {/* Middle Column: Question & Expanded Answer */}
                  <div className="flex-1 min-w-0 pr-6 lg:pr-12">
                    <h3
                      className={`font-heading font-medium text-lg sm:text-xl lg:text-[1.45rem] tracking-tight leading-snug whitespace-normal break-words transition-colors duration-200 ${
                        isOpen ? 'text-[#ff6321]' : 'text-[#060612] group-hover:text-[#ff6321]'
                      }`}
                    >
                      {item.q}
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 350, damping: 30, mass: 0.8 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 sm:pt-4 text-xs sm:text-sm lg:text-[15px] text-zinc-500 font-body leading-relaxed max-w-3xl whitespace-normal break-words">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right Column: Minus (—) when open, Plus (+) when closed */}
                  <div className="shrink-0 pt-1 sm:pt-1.5 ml-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      {isOpen ? (
                        <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff6321] stroke-[1.5]" />
                      ) : (
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#060612] group-hover:text-[#ff6321] transition-colors stroke-[1.5]" />
                      )}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


