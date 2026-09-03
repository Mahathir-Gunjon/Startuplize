'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { StackedLines } from '@/components/ui/StackedLines';

export function FaqLumora() {
  const [openId, setOpenId] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do you guarantee a sub-600ms LCP and 95+ PageSpeed on WordPress?',
      a: 'We never deploy generic multi-purpose commercial themes. Every client project receives an object-oriented bespoke theme built with ACF Pro or headless Next.js App Router, inlined critical CSS, server-side Redis object caching, and zero unoptimized third-party JS scripts.',
    },
    {
      q: 'How seamless is the migration from legacy WordPress, Wix, or Shopify?',
      a: 'We handle 100% of data sanitization, SEO permalink redirects (301 matching matrices), media compression, and customer data preservation. Your search rankings remain completely intact or improve immediately upon launch.',
    },
    {
      q: 'When do we see verifiable rank lift in Google Local 3-Pack and organic search?',
      a: 'Technical SEO fixes and Core Web Vitals remediation reflect in Google Search Console crawl rate spikes within 14–21 days. Local 3-Pack geo-grid expansion typically compounds between days 45 and 90 as review velocity accelerates.',
    },
    {
      q: 'What does a standard 4 to 8-week production sprint look like?',
      a: 'Week 1 is Architectural Discovery & SEO Entity Mapping; Weeks 2-3 are Wireframing & High-Fidelity UI Prototyping; Weeks 4-6 are Production Engineering & 60fps Motion Coding; Week 7 is Rigorous QA & Field Auditing; Week 8 is DNS Cutover and Live Launch.',
    },
    {
      q: 'What is the investment range and partnership structure?',
      a: 'Our bespoke engineering builds typically range from $10,000 to $40,000 depending on complexity (headless vs Webflow CMS, custom WooCommerce, or programmatic SEO engine). We also offer monthly growth retainers for continuous optimization.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenId(openId === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 sm:py-36 px-6 sm:px-12 bg-white select-none border-t border-[#e6e5e2]">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono text-[#b15f2c] uppercase tracking-widest font-semibold block">
            CLARITY & PROTOCOL
          </span>
          <div className="font-sans font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-tight">
            <StackedLines trigger={true} delay={0.05} lines={['Frequently Asked Questions']} />
          </div>
          <p className="text-sm sm:text-base text-[#8d8d8d] max-w-lg mx-auto">
            Everything you need to know about our engineering standards, migration safeguards, and delivery timelines.
          </p>
        </div>

        {/* 5 Targeted FAQ Items with Hairline Borders */}
        <div className="border-b border-[#e6e5e2]">
          {faqs.map((item, idx) => {
            const isOpen = openId === idx;
            return (
              <div key={idx} className="border-t border-[#e6e5e2]">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-6 sm:py-7 flex items-center justify-between gap-4 text-left cursor-pointer group"
                >
                  <span className="font-sans font-bold text-lg sm:text-xl text-[#111111] group-hover:text-[#b15f2c] transition-colors">
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring' as const, stiffness: 350, damping: 25 }}
                    className="w-8 h-8 rounded-full bg-[#f1f0ee] border border-[#e6e5e2] flex items-center justify-center shrink-0 text-[#111111] group-hover:bg-[#0a0a0a] group-hover:text-white transition-colors"
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
                      <p className="pb-6 text-sm sm:text-base text-[#8d8d8d] leading-relaxed font-sans max-w-3xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
