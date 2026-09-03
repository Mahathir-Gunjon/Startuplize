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
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const services = [
    {
      num: '01',
      title: 'WordPress & Elementor Engineering',
      tagline: 'Custom Theme Builds · Elementor Pro · Fast WooCommerce',
      description:
        'Zero-bloat custom WordPress and Elementor Pro systems. We eliminate messy third-party plugin bloat with clean theme architectures, optimized database queries, and lightning-fast customer checkout experiences.',
      deliverables: ['Sub-Second Mobile Speed', 'Custom Elementor & ACF Blocks', 'Fast WooCommerce Checkout'],
      previewImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '02',
      title: 'Webflow CMS Architecture',
      tagline: 'Visual Micro-Interactions · Clean CMS Structure',
      description:
        'Clean, scalable Webflow websites built with modern standards, responsive layouts, zero layout shifts, and an intuitive visual editor that allows your team to easily update content without breaking designs.',
      deliverables: ['60 FPS Smooth Navigation', 'Dynamic CMS Collections', 'Simple Visual Content Editing'],
      previewImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '03',
      title: 'Technical & On-Page SEO',
      tagline: 'Local Schema · Crawl Optimization · Content Hierarchy',
      description:
        'Search engines favor speed and clear information structure. We implement clean schema markup, logical URL structures, fast mobile rendering, and topical keyword mapping so search engines easily understand your services.',
      deliverables: ['Rich Local Business Schema', 'Speed & Crawl Optimization', '100% CWV Field Data Pass'],
      previewImg: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    },
    {
      num: '04',
      title: 'Local SEO & Google Business Profile',
      tagline: 'Google Business Profile · Map Pack Visibility · Lead Funnels',
      description:
        'Expanding your reach across local target service areas. We optimize your Google Business Profile (GBP), synchronize verified local directory citations, and establish automated review generation systems that drive real phone inquiries.',
      deliverables: ['Google Business Profile Optimization', 'Automated 5★ Review Workflow', 'Consistent Inbound Phone Calls'],
      previewImg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section
      id="services"
      className="py-28 sm:py-36 px-6 sm:px-12 bg-white relative select-none border-b border-[#e7e2dd]"
      onMouseMove={handleMouseMove}
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
              Precision web engineering and organic search dominance. Every discipline is executed strictly in-house with zero outsourcing.
            </p>
          </ScrollBlurFade>
        </div>

        {/* 4 Interactive Service Rows with Staggered Slide Reveals */}
        <div className="border-b border-[#e7e2dd] relative">
          {services.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <ScrollSlideCard
                key={item.num}
                delay={idx * 0.12 + 0.1}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => onOpenBooking(item.title)}
                className={`border-t border-[#e7e2dd] transition-all duration-300 cursor-pointer group relative overflow-hidden py-8 sm:py-10 ${
                  isHovered ? 'bg-[#f5f4f3] px-6 sm:px-10 rounded-2xl my-2' : 'bg-white px-2 sm:px-4'
                }`}
              >
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

                {/* Description */}
                <div className="mt-4 pt-3 border-t border-[#e7e2dd]/60 text-body text-[#69686e] max-w-2xl leading-relaxed font-body">
                  {item.description}
                </div>
              </ScrollSlideCard>
            );
          })}

          {/* Floating preview image following cursor */}
          <AnimatePresence>
            {hoveredIdx !== null && (
              <motion.div
                className="pointer-events-none fixed z-40 hidden lg:block rounded-xl overflow-hidden shadow-2xl border-2 border-white w-64 h-40"
                style={{
                  left: cursorPos.x + 25,
                  top: cursorPos.y - 80,
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.15 }}
              >
                <Image
                  src={services[hoveredIdx].previewImg}
                  alt="Service Preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded bg-black/60 backdrop-blur-xs text-body-sm font-mono text-white flex items-center justify-between whitespace-nowrap">
                  <span>{services[hoveredIdx].title}</span>
                  <span className="text-[#ff6321] font-bold">VERIFIED</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
