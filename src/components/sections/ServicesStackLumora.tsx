'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollBlurWords, ScrollSlideCard, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

interface ServicesStackLumoraProps {
  onOpenBooking: (service?: string) => void;
}

export function ServicesStackLumora({ onOpenBooking }: ServicesStackLumoraProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const services = [
    {
      num: '01',
      title: 'WordPress & Elementor Development',
      href: '#',
      parts: [
        {
          tag: '01 // BUILDS & REVAMPS',
          title: 'New Builds & Total Revamps',
          desc: 'We build high-converting new websites from scratch and completely revamp slow, outdated legacy WordPress sites into modern commercial assets.',
        },
        {
          tag: '02 // ZERO-BLOAT SPEED',
          title: 'Sub-Second Mobile Speed',
          desc: 'Zero plugin bloat with clean Elementor Pro and custom ACF architecture, passing Google Core Web Vitals with sub-1s load times.',
        },
        {
          tag: '03 // EASY CLIENT EDITING',
          title: 'Effortless Content Handover',
          desc: 'Intuitive backend your team can update in seconds, 100% full site ownership, and zero monthly developer dependency.',
        },
      ],
    },
    {
      num: '02',
      title: 'Webflow CMS Architecture',
      href: '#',
      parts: [
        {
          tag: '01 // BESPOKE DESIGN',
          title: 'Custom Brand Flagships',
          desc: 'Award-winning visual aesthetics with smooth 60fps micro-interactions tailored to make your business look like an established market leader.',
        },
        {
          tag: '02 // SCALABLE CMS',
          title: 'Dynamic Content Databases',
          desc: 'Structured relational CMS collections for projects, services, and team profiles that scale effortlessly as your business expands.',
        },
        {
          tag: '03 // CLIENT EDITOR',
          title: 'Visual On-Page Editing',
          desc: 'Publish case studies, services, and blogs in minutes with an intuitive visual editor that completely prevents broken layouts.',
        },
      ],
    },
    {
      num: '03',
      title: 'Technical & On-Page SEO',
      href: '#',
      parts: [
        {
          tag: '01 // CRAWL & INDEX',
          title: 'Search Architecture Fixes',
          desc: 'Eliminating crawl traps, broken redirects, and slow rendering so search engines index every high-intent commercial page.',
        },
        {
          tag: '02 // SCHEMA ENTITIES',
          title: 'Semantic JSON-LD Graphs',
          desc: 'Deploying rich structured schema for LocalBusiness, Services, and FAQs to earn high-visibility rich snippets on Google.',
        },
        {
          tag: '03 // SPEED RANKINGS',
          title: 'Core Web Vitals Pass',
          desc: '100% green scores across Google LCP, INP, and CLS performance metrics to maximize your search rankings over slow competitors.',
        },
      ],
    },
    {
      num: '04',
      title: 'Local SEO & Google Business Profile',
      href: '#',
      parts: [
        {
          tag: '01 // MAP 3-PACK',
          title: 'Google Maps Top 3 Rankings',
          desc: 'Complete GBP optimization, category calibration, and geo-targeted service signals to dominate local search results.',
        },
        {
          tag: '02 // CITATION MESH',
          title: '50+ Verified Directory Citations',
          desc: 'Synchronizing Name, Address, and Phone (NAP) across top business directories to build bulletproof local domain trust.',
        },
        {
          tag: '03 // REPUTATION FUNNEL',
          title: 'Automated 5★ Review Engine',
          desc: 'Automated 1-click SMS and email workflows that consistently convert happy customers into 5-star Google reviews.',
        },
      ],
    },
    {
      num: '05',
      title: 'Brand Design & Visual Identity',
      href: '#',
      parts: [
        {
          tag: '01 // LOGO SUITE',
          title: 'Bespoke Vector Logo Suites',
          desc: 'Distinctive primary, secondary, and sub-mark vector logos designed to look authoritative on screens and in print.',
        },
        {
          tag: '02 // BRAND SYSTEM',
          title: 'Color & Typography Standards',
          desc: 'Comprehensive brand guidelines book with tailored fonts and curated color palettes that command higher pricing.',
        },
        {
          tag: '03 // FULL COLLATERAL',
          title: 'Decks, Social & Print Assets',
          desc: 'Complete graphic design kits including business cards, pitch decks, social media templates, and marketing collateral.',
        },
      ],
    },
    {
      num: '06',
      title: 'Meta Ads & Paid Acquisition',
      href: '#',
      parts: [
        {
          tag: '01 // CREATIVE ADS',
          title: 'Scroll-Stopping Ad Creatives',
          desc: 'High-converting video and image ad sets designed to capture attention, stop scrolling, and lower customer acquisition costs.',
        },
        {
          tag: '02 // CONVERSION FUNNELS',
          title: 'Direct-Response Copy & Pages',
          desc: 'Persuasive ad copy and fast dedicated landing page funnels built to convert cold clicks into booked consultation calls.',
        },
        {
          tag: '03 // CAPI TRACKING',
          title: 'Server-Side Pixel & CAPI',
          desc: 'Bulletproof Meta Conversions API tracking setup so you can measure exact ROI, eliminate ad waste, and scale winners profitably.',
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-10 sm:py-12 md:py-24 lg:py-36 px-4 sm:px-6 lg:px-12 bg-white relative select-none border-b border-[#e7e2dd]"
    >
      <div className="max-w-[84rem] mx-auto">
        
        {/* Section Header with Word-by-Word Blur Reveal */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6">
          <div>
            <ScrollBlurFade>
              <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest font-semibold block mb-2 whitespace-nowrap">
                • CORE CAPABILITIES
              </span>
            </ScrollBlurFade>
            <ScrollBlurWords
              className="font-heading font-medium text-[2rem] sm:text-4xl lg:text-5xl text-[#060612] tracking-tight leading-[1.18] sm:leading-tight"
              segments={['What we build best.']}
            />
          </div>
          <ScrollBlurFade delay={0.2}>
            <p className="text-body text-[#52525b] max-w-md font-body leading-relaxed">
              Precision web development, brand identity, and organic search dominance. Every discipline is executed strictly in-house with zero outsourcing.
            </p>
          </ScrollBlurFade>
        </div>

        {/* 6 Interactive Service Rows with Staggered Slide Reveals */}
        <div className="border-b border-[#e7e2dd] relative">
          {services.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <ScrollSlideCard
                key={item.num}
                delay={idx * 0.08 + 0.1}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setHoveredIdx(hoveredIdx === idx ? null : idx)}
                className={`border-t border-[#e7e2dd] transition-all duration-300 group relative overflow-hidden py-4 sm:py-6 lg:py-8 px-3.5 sm:px-6 lg:px-8 rounded-md my-1 cursor-pointer ${
                  isHovered ? 'bg-[#f5f4f3] shadow-xs' : 'bg-transparent'
                }`}
              >
                {/* Header Row (Number, Title, Arrow) */}
                <div
                  className="flex items-center justify-between gap-3 sm:gap-6 relative z-10 w-full"
                >
                  {/* Left Number & Title */}
                  <div className="flex items-center gap-3 sm:gap-6 lg:gap-10 min-w-0">
                    <span className="font-mono text-sm sm:text-body text-[#52525b] whitespace-nowrap shrink-0">
                      {item.num}
                    </span>
                    <h3 className="font-heading font-medium text-lg sm:text-2xl lg:text-3xl text-[#060612] group-hover:text-[#ff6321] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Right Arrow Badge (Min 44px touch target) */}
                  <div className="w-11 flex items-center justify-end shrink-0 ml-auto">
                    <motion.div
                      animate={isHovered ? { x: 4 } : { x: 0 }}
                      transition={{ type: 'spring' as const, stiffness: 350, damping: 20 }}
                      className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#060612] text-white flex items-center justify-center shrink-0 group-hover:bg-[#ff6321] transition-colors shadow-xs"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                </div>

                {/* Description Drawer - 3 Clean Parts, NO CARDS, perfectly aligned */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      key="desc"
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden w-full relative z-20"
                    >
                      <div className="pt-6 border-t border-[#e7e2dd] w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e7e2dd] w-full">
                          {item.parts.map((part, pIdx) => (
                            <div
                              key={pIdx}
                              className={`${
                                pIdx === 0
                                  ? 'md:pr-6 lg:pr-10'
                                  : pIdx === 1
                                  ? 'pt-5 md:pt-0 md:px-6 lg:px-10'
                                  : 'pt-5 md:pt-0 md:pl-6 lg:pl-10'
                              } flex flex-col`}
                            >
                              <span className="text-sm font-mono font-bold text-[#ff6321] uppercase tracking-wider block">
                                {part.tag}
                              </span>
                              <h4
                                className="font-heading font-bold text-base sm:text-lg text-[#060612] mt-2 leading-snug"
                                style={{ color: '#060612' }}
                              >
                                {part.title}
                              </h4>
                              <p
                                className="text-body-sm font-body mt-2 leading-relaxed text-[#374151]"
                                style={{ color: '#374151' }}
                              >
                                {part.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
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
