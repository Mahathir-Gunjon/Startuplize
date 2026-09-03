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
      title: 'WordPress & Elementor Engineering',
      tagline: 'New Custom Builds · Full Website Revamps · Zero-Bloat Performance',
      valueProp: 'We build high-converting new websites from scratch and perform complete redesign revamps for outdated, slow platforms.',
      description:
        'Whether your business needs an entirely new digital presence or your existing WordPress website is clunky, slow, and outdated, we provide a complete engineering solution. We eliminate bloated themes and messy third-party plugins with clean, tailored Elementor Pro and ACF architectures—slashing mobile load times to under 1 second and giving you a modern, credible website that turns local visitors into qualified inquiries.',
      process: [
        { step: '01. AUDIT', name: 'Bottleneck & UX Audit', detail: 'We dissect your existing site speed, plugin bloat, and conversion drop-offs.' },
        { step: '02. DESIGN', name: 'Custom High-Trust UI', detail: 'Bespoke layout design focused on client credibility and clear action funnels.' },
        { step: '03. BUILD', name: 'Clean Code Engineering', detail: 'Zero-bloat Elementor build with sub-second LCP and responsive mobile layout.' },
        { step: '04. LAUNCH', name: 'Safe Migration & Handover', detail: '1-to-1 301 URL redirect preservation, team training, and speed guarantee.' },
      ],
      deliverables: ['New Builds & Revamps', 'Sub-Second Speed', 'Custom ACF Blocks'],
      previewImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '02',
      title: 'Webflow CMS Architecture',
      tagline: 'Custom Webflow Flagships · Visual Systems · Dynamic CMS Collections',
      valueProp: 'Award-winning visual design with zero maintenance headaches and an intuitive visual editor for your team.',
      description:
        'Designed for ambitious brands that want seamless scroll animations, ultra-clean visual aesthetics, and total independence from developer bottlenecks. We build custom Webflow websites structured with clean class systems, dynamic CMS databases, and 60fps responsive micro-interactions. Your team can publish new case studies, blogs, and service updates in minutes without ever touching code.',
      process: [
        { step: '01. ARCHITECTURE', name: 'Content & CMS Modeling', detail: 'Mapping dynamic collections, service categories, and relational data fields.' },
        { step: '02. CRAFT', name: 'Visual System & Motion', detail: 'Translating brand guidelines into fluid typography and interactive scroll motion.' },
        { step: '03. DEVELOP', name: 'Clean Webflow Build', detail: 'Client-first class architecture, responsive breakpoints, and SEO optimization.' },
        { step: '04. HANDOVER', name: 'Video Training & Launch', detail: 'Dedicated Loom editor training so your team can edit content with confidence.' },
      ],
      deliverables: ['60 FPS Navigation', 'Dynamic Collections', 'Visual Client Editor'],
      previewImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '03',
      title: 'Technical & On-Page SEO',
      tagline: 'Search Architecture · Core Web Vitals · Keyword Entity Dominance',
      valueProp: 'We engineer the underlying technical foundation so Google easily crawls, understands, and ranks your services.',
      description:
        'A beautiful website is wasted if search engines cannot interpret your content. We systematically resolve indexation bottlenecks, crawl errors, slow rendering speeds, and missing metadata. By deploying structured semantic JSON-LD schema graphs and optimizing Core Web Vitals to 100% green scores, we position your core service pages to outrank competitors on high-intent search queries.',
      process: [
        { step: '01. DIAGNOSIS', name: 'Deep Crawl Inspection', detail: 'Analyzing Google Search Console, index coverage, crawl traps, and redirect chains.' },
        { step: '02. SCHEMA', name: 'Semantic Entity Graph', detail: 'Hard-coding JSON-LD LocalBusiness, Service, and FAQ rich snippet schema.' },
        { step: '03. SPEED', name: 'Core Web Vitals Pass', detail: 'Optimizing LCP, INP, and zero layout shift for Google mobile ranking algorithms.' },
        { step: '04. STRUCTURE', name: 'Content & URL Hierarchy', detail: 'Topical keyword mapping and internal linking silos for organic search authority.' },
      ],
      deliverables: ['Local Schema Markup', 'Speed & Crawl Audit', '100% CWV Field Pass'],
      previewImg: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '04',
      title: 'Local SEO & Google Business Profile',
      tagline: 'Google Map Pack · Local Directory Citations · Automated Review Funnels',
      valueProp: 'Capture local customers right when they are ready to call with Google Maps and 5-star review automation.',
      description:
        'Specifically engineered for local and regional business owners who rely on phone calls, estimate requests, and booked appointments. We optimize your Google Business Profile (GBP) for maximum 3-pack visibility, clean up inconsistent directory citations across the web, and deploy an automated post-service review collection workflow that converts happy customers into authentic 5-star Google ratings.',
      process: [
        { step: '01. GBP AUDIT', name: 'Profile Verification & Fixes', detail: 'Category calibration, service menu setup, geo-tagged photos, and compliance audit.' },
        { step: '02. CITATIONS', name: 'NAP Citation Network', detail: 'Synchronizing Name, Address, and Phone across top-tier business directories.' },
        { step: '03. REVIEWS', name: 'Automated Review Engine', detail: 'Deploying SMS/email 1-click review requests to build consistent 5-star proof.' },
        { step: '04. EXPANSION', name: 'Service-Area Landing Pages', detail: 'Targeted landing pages capturing high-intent searches across neighboring zip codes.' },
      ],
      deliverables: ['GBP 3-Pack Rankings', 'Automated 5★ Reviews', 'Inbound Call Funnels'],
      previewImg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '05',
      title: 'Brand Design & Visual Identity',
      tagline: 'Complete Graphic Design · Bespoke Logo Suites · Marketing Collateral',
      valueProp: 'A complete graphic design solution that makes your business look like an established, premium market leader.',
      description:
        'Everything your brand needs to look credible, professional, and memorable across every touchpoint. We provide full-spectrum graphic design services—from custom primary and secondary logo suites, typography pairings, and curated color palettes to business cards, marketing brochures, pitch decks, vehicle wraps, and social media creative kits. We give your business the visual authority to command higher rates.',
      process: [
        { step: '01. STRATEGY', name: 'Brand Discovery & Moodboard', detail: 'Defining your brand voice, market positioning, and visual aesthetic direction.' },
        { step: '02. LOGO SUITE', name: 'Concept & Vector Design', detail: 'Handcrafted primary, secondary, and sub-mark vector logos for web and print.' },
        { step: '03. SYSTEM', name: 'Brand Guidelines Book', detail: 'Defining typography rules, color formulas (HEX/CMYK), and clear space standards.' },
        { step: '04. ASSETS', name: 'Complete Collateral Suite', detail: 'Delivering print-ready files, presentation decks, social templates, and raw vectors.' },
      ],
      deliverables: ['Complete Logo Suite', 'Brand Guidelines Book', 'Social & Print Assets'],
      previewImg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '06',
      title: 'Meta Ads & Paid Acquisition',
      tagline: 'Facebook & Instagram Ads · Direct-Response Creative · Lead Generation Funnels',
      valueProp: 'Turn paid advertising into a predictable customer acquisition channel with high-converting ads and landing pages.',
      description:
        'Stop wasting budget on boosted posts that deliver vanity likes but zero paying customers. We engineer end-to-end Facebook and Instagram advertising campaigns designed for positive return on ad spend (ROAS). We produce scroll-stopping graphic and video ad creatives, write direct-response copy that speaks to customer pain points, configure bulletproof Meta Pixel & Conversions API (CAPI) tracking, and optimize high-speed landing pages that turn clicks into booked consultations.',
      process: [
        { step: '01. BLUEPRINT', name: 'Offer & Audience Strategy', detail: 'Crafting high-converting offers and building local radius and lookalike audience targets.' },
        { step: '02. CREATIVE', name: 'Direct-Response Ad Sets', detail: 'Designing persuasive image and video creatives with compelling copy and hooks.' },
        { step: '03. TRACKING', name: 'Pixel & CAPI Server Setup', detail: 'Server-side Conversions API integration to accurately track 100% of lead events.' },
        { step: '04. SCALE', name: 'A/B Testing & Daily Scaling', detail: 'Aggressively cutting unprofitable ads, scaling winners, and delivering weekly reports.' },
      ],
      deliverables: ['Creative Ad Production', 'Conversion API Setup', 'Daily ROAS Scaling'],
      previewImg: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section
      id="services"
      className="py-28 sm:py-36 px-6 sm:px-12 bg-white relative select-none border-b border-[#e7e2dd]"
    >
      <div className="max-w-[84rem] mx-auto">
        
        {/* Section Header with Word-by-Word Blur Reveal */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <ScrollBlurFade>
              <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest font-semibold block mb-2 whitespace-nowrap">
                • CORE CAPABILITIES
              </span>
            </ScrollBlurFade>
            <ScrollBlurWords
              className="font-heading font-medium text-3xl sm:text-5xl text-[#060612] tracking-tight"
              segments={['What we engineer best.']}
            />
          </div>
          <ScrollBlurFade delay={0.2}>
            <p className="text-body text-[#69686e] max-w-md font-body leading-relaxed">
              Precision web engineering, brand identity, and organic search dominance. Every discipline is executed strictly in-house with zero outsourcing.
            </p>
          </ScrollBlurFade>
        </div>

        {/* 6 Interactive Service Rows with Staggered Slide Reveals & Identical Hover Effects */}
        <div className="border-b border-[#e7e2dd] relative">
          {services.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <ScrollSlideCard
                key={item.num}
                delay={idx * 0.08 + 0.1}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => onOpenBooking(item.title)}
                className={`border-t border-[#e7e2dd] transition-all duration-300 cursor-pointer group relative overflow-hidden py-7 sm:py-8 px-6 sm:px-8 rounded-2xl my-1 ${
                  isHovered ? 'bg-[#f5f4f3] shadow-xs' : 'bg-transparent'
                }`}
              >
                {/* Header Row (Number, Title, Deliverables, Arrow) */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                  
                  {/* Left Number & Title */}
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-body text-[#69686e] whitespace-nowrap shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-heading font-medium text-2xl sm:text-3xl text-[#060612] group-hover:text-[#ff6321] transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-body-sm font-mono text-[#69686e] mt-1 whitespace-nowrap">
                        {item.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Middle Deliverables Tags (Strictly whitespace-nowrap) */}
                  <div className="hidden xl:flex items-center gap-2 whitespace-nowrap shrink-0">
                    {item.deliverables.map((del, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-3.5 py-1 rounded-full bg-white border border-[#e7e2dd] text-[11px] font-mono text-[#060612] shadow-2xs whitespace-nowrap shrink-0"
                      >
                        {del}
                      </span>
                    ))}
                  </div>

                  {/* Right Arrow Badge */}
                  <div className="flex items-center gap-4 whitespace-nowrap shrink-0">
                    <span className="text-body-sm font-mono text-[#69686e] hidden sm:inline-block whitespace-nowrap">
                      DISCOVER SPECS
                    </span>
                    <motion.div
                      animate={isHovered ? { x: 5 } : { x: 0 }}
                      transition={{ type: 'spring' as const, stiffness: 350, damping: 20 }}
                      className="w-10 h-10 rounded-full bg-[#060612] text-white flex items-center justify-center shrink-0 group-hover:bg-[#ff6321] transition-colors shadow-xs"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                </div>

                {/* Description - Fades in and expands smoothly on hover with BIG, FULL-WIDTH text & transparent process */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      key="desc"
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden w-full relative z-20"
                    >
                      <div className="pt-6 border-t border-[#e7e2dd]/80 w-full space-y-5">
                        
                        {/* Big Client-Focused Value Proposition */}
                        <h4 className="font-heading font-medium text-xl sm:text-2xl text-[#060612] leading-snug">
                          {item.valueProp}
                        </h4>

                        {/* Full-width Big Detailed Client Narrative */}
                        <p
                          className="text-base sm:text-lg md:text-[1.125rem] font-body leading-relaxed max-w-none font-normal"
                          style={{ color: '#060612' }}
                        >
                          {item.description}
                        </p>

                        {/* Transparent 4-Step Process Section */}
                        <div className="pt-5 border-t border-[#e7e2dd]/70 w-full">
                          <div className="text-[11px] font-mono font-bold text-[#ff6321] uppercase tracking-widest mb-3.5 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#ff6321] inline-block" />
                            <span>HOW WE DELIVER // THE TRANSPARENT PROCESS</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full">
                            {item.process.map((step, sIdx) => (
                              <div
                                key={sIdx}
                                className="bg-white border border-[#e7e2dd] rounded-xl p-4 shadow-2xs flex flex-col justify-between"
                              >
                                <div>
                                  <span className="text-[11px] font-mono font-bold text-[#ff6321] uppercase tracking-wider block">
                                    {step.step}
                                  </span>
                                  <div
                                    className="font-heading font-bold text-sm sm:text-base mt-1"
                                    style={{ color: '#060612' }}
                                  >
                                    {step.name}
                                  </div>
                                </div>
                                <p
                                  className="text-body-sm font-body mt-2 leading-relaxed"
                                  style={{ color: '#444452' }}
                                >
                                  {step.detail}
                                </p>
                              </div>
                            ))}
                          </div>
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
