'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Zap,
  Code2,
  ShieldCheck,
  Sparkles,
  Database,
  LayoutTemplate,
  MapPin,
  Star,
  PhoneCall,
  Palette,
  Type,
  BookOpen,
  Gauge,
  Network,
  TrendingUp,
  Target,
  Activity,
  Flame,
  LucideIcon,
} from 'lucide-react';
import { ScrollBlurFade } from '@/components/ui/ScrollAnimations';
import { PillButton } from '@/components/ui/PillButton';

interface ServicesStackLumoraProps {
  onOpenBooking: (service?: string) => void;
}

interface CapabilityService {
  num: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  points: {
    icon: LucideIcon;
    text: string;
  }[];
  rating: string;
}

export function ServicesStackLumora({ onOpenBooking }: ServicesStackLumoraProps) {
  // First item open by default matching reference screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const services: CapabilityService[] = [
    {
      num: '01',
      tag: 'WORDPRESS',
      title: 'WordPress & Elementor Development',
      description:
        'Custom-crafted WordPress, Elementor Pro, and WooCommerce platforms engineered with clean ACF architecture, zero plugin bloat, and sub-second mobile speeds that convert visitors into paying clients.',
      image: '/services/service_wordpress.jpg',
      points: [
        { icon: Zap, text: 'Sub-1s Mobile Speed' },
        { icon: Code2, text: 'Custom ACF Fields' },
        { icon: ShieldCheck, text: 'Zero Plugin Bloat' },
      ],
      rating: '5.0',
    },
    {
      num: '02',
      tag: 'WEBFLOW',
      title: 'Webflow CMS Architecture',
      description:
        'Bespoke Webflow flagships built with silky 60fps micro-interactions, relational CMS collections, and visual on-page client editing for modern, ambitious brands looking to scale.',
      image: '/services/service_webflow.jpg',
      points: [
        { icon: Sparkles, text: '60fps Micro-Interactions' },
        { icon: Database, text: 'Relational CMS Collections' },
        { icon: LayoutTemplate, text: 'Visual On-Page Editor' },
      ],
      rating: '5.0',
    },
    {
      num: '03',
      tag: 'LOCAL SEO',
      title: 'Local SEO & Google Business Profile',
      description:
        'Dominate Google Maps and local 3-pack search results. We calibrate your Google Business Profile, synchronize 50+ tier-1 citation directories, and automate 5-star reviews to drive steady phone calls.',
      image: '/services/service_localseo.jpg',
      points: [
        { icon: MapPin, text: 'Google Maps Top 3 Rankings' },
        { icon: Star, text: '5-Star Review Automation' },
        { icon: PhoneCall, text: 'High-Intent Inbound Calls' },
      ],
      rating: '5.0',
    },
    {
      num: '04',
      tag: 'BRANDING',
      title: 'Brand Design & Visual Identity',
      description:
        'Command immediate industry authority and premium market perception with bespoke vector logo suites, curated typography and color systems, and comprehensive digital guidelines.',
      image: '/services/service_branding.jpg',
      points: [
        { icon: Palette, text: 'Bespoke Vector Logo Suites' },
        { icon: Type, text: 'Curated Typography & Palettes' },
        { icon: BookOpen, text: 'Full Digital Guidelines' },
      ],
      rating: '5.0',
    },
    {
      num: '05',
      tag: 'TECH SEO',
      title: 'Technical & On-Page SEO',
      description:
        'Enterprise-grade search architecture calibration. We build semantic JSON-LD schema graphs, optimize crawl efficiency, and guarantee 100% Core Web Vitals compliance for lasting organic growth.',
      image: '/services/service_seo.jpg',
      points: [
        { icon: Gauge, text: '100% Core Web Vitals Pass' },
        { icon: Network, text: 'Semantic JSON-LD Graphs' },
        { icon: TrendingUp, text: 'Crawl & Index Efficiency' },
      ],
      rating: '5.0',
    },
    {
      num: '06',
      tag: 'META ADS',
      title: 'Meta Ads & Paid Acquisition',
      description:
        'Turn paid traffic into profitable customer relationships with scroll-stopping ad creatives, fast-loading landing pages, and server-side CAPI tracking calibrated for predictable ROI.',
      image: '/services/service_metaads.jpg',
      points: [
        { icon: Target, text: 'High-Converting Funnel Pages' },
        { icon: Activity, text: 'Server-Side CAPI Setup' },
        { icon: Flame, text: 'Scroll-Stopping Ad Creatives' },
      ],
      rating: '5.0',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className="w-full bg-[#faf9f8] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 select-none"
    >
      {/* ── Floating Dark Card with Low Radius (Surrounded by Whitespace, Footer Theme) ── */}
      <div className="w-full bg-[#07090d] rounded-[4px] sm:rounded-[6px] lg:rounded-[8px] p-6 sm:p-10 lg:p-14 text-white border border-white/10 relative overflow-hidden">
        
        {/* Layer 1: Dot Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage:
              'radial-gradient(ellipse 90% 80% at 50% 50%, black 50%, transparent 95%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 90% 80% at 50% 50%, black 50%, transparent 95%)',
          }}
        />

        {/* Layer 2: Film Grain Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Layer 3: Burnt Orange Glow */}
        <div className="absolute top-1/4 right-[10%] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#ff6321]/[0.08] blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-[10%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />

        {/* ── Inner Content Container (1280px Maximum Width) ── */}
        <div className="relative z-10 w-full max-w-[1280px] mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 lg:mb-14 gap-4 sm:gap-6 border-b border-white/10 pb-6 sm:pb-8">
            <div>
              <ScrollBlurFade>
                <span className="text-xs sm:text-sm font-mono text-[#ff6321] uppercase tracking-widest font-semibold block mb-2">
                  • CORE CAPABILITIES
                </span>
              </ScrollBlurFade>
              <h2 className="font-heading font-medium text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15]">
                Solutions tailored to you
              </h2>
            </div>
            
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-zinc-400 uppercase tracking-widest shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#ff6321] inline-block animate-pulse" />
              <span>06 Disciplines</span>
            </div>
          </div>

          {/* ── Accordion List (Exact Layout Matching Reference Screenshot) ── */}
          <div className="divide-y divide-white/10">
            {services.map((service, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={service.num} className="transition-colors duration-200">
                  <AnimatePresence mode="wait" initial={false}>
                    {isOpen ? (
                      /* ── EXPANDED STATE (Matching Reference Image) ── */
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: 1,
                          height: 'auto',
                          transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                        }}
                        className="py-6 sm:py-8 lg:py-10 overflow-hidden"
                      >
                        <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12 w-full">
                          
                          {/* Column 1 (Far Left): Category Tag (in red/orange, no price) */}
                          <div className="w-24 sm:w-28 lg:w-32 shrink-0 pt-1.5">
                            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#ff6321] font-semibold select-none">
                              {service.tag}
                            </span>
                          </div>

                          {/* Column 2 (Center-Left): Large Featured Image with Rounded Corners */}
                          <div className="w-full sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[440px] shrink-0 aspect-[16/11] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden relative border border-white/10 bg-zinc-900 shadow-2xl group/img">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 440px"
                              className="object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors duration-300" />
                          </div>

                          {/* Column 3 (Right): Title + Larger Description + 3 Relatable Points with Proper Icons + Global Buttons */}
                          <div className="flex-1 w-full flex flex-col justify-between h-full space-y-4 sm:space-y-5">
                            
                            {/* Headline & Collapse Toggle */}
                            <div className="flex items-start justify-between gap-4">
                              <h3 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-[2rem] text-white tracking-tight leading-snug">
                                {service.title}
                              </h3>

                              {/* Circular Toggle Button on Far Right */}
                              <button
                                type="button"
                                onClick={() => toggleAccordion(index)}
                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/10 border border-white/15 text-white shrink-0 cursor-pointer hover:bg-white/20 transition-all"
                                aria-label="Collapse service details"
                              >
                                <ChevronDown size={18} className="rotate-180" />
                              </button>
                            </div>

                            {/* Increased Font Size Description (Explicitly Requested) */}
                            <p className="text-zinc-300 font-body text-base sm:text-lg lg:text-[1.125rem] leading-[1.65] max-w-2xl font-normal">
                              {service.description}
                            </p>

                            {/* 3 Relatable Points with Proper Lucide Icons + 5.0 Rating on Far Right */}
                            <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 sm:gap-x-8 text-xs sm:text-sm font-body text-zinc-300 py-3.5 sm:py-4.5 border-t border-white/10">
                              <div className="flex flex-wrap items-center gap-5 sm:gap-7">
                                {service.points.map((point, pIdx) => {
                                  const PointIcon = point.icon;
                                  return (
                                    <div
                                      key={pIdx}
                                      className="flex items-center gap-2 text-zinc-300 font-medium"
                                    >
                                      <PointIcon size={16} className="text-[#ff6321] shrink-0 stroke-[2.2]" />
                                      <span className="text-zinc-200">{point.text}</span>
                                    </div>
                                  );
                                })}
                              </div>

                              {/* Rating on Far Right matching reference image */}
                              <div className="flex items-center gap-1.5 text-amber-400 font-mono text-xs sm:text-sm font-medium shrink-0">
                                <Star size={14} className="fill-amber-400 text-amber-400" />
                                <span>{service.rating}</span>
                              </div>
                            </div>

                            {/* Website's Signature Global Buttons (PillButton with square badge and liquid hover) */}
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                              <PillButton
                                variant="coral"
                                size="sm"
                                onClick={() => onOpenBooking(service.title)}
                                showArrow={true}
                              >
                                Select Service
                              </PillButton>

                              <PillButton
                                variant="dark"
                                size="sm"
                                href="/work"
                                showArrow={true}
                              >
                                Explore Work
                              </PillButton>
                            </div>

                          </div>

                        </div>
                      </motion.div>
                    ) : (
                      /* ── COLLAPSED STATE (Matching Screenshot Row 1, 3, 4) ── */
                      <motion.div
                        key="collapsed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.25 } }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-between py-5 sm:py-6 lg:py-7 cursor-pointer group transition-colors duration-200"
                        role="button"
                        aria-expanded={false}
                      >
                        {/* Left: Tag + Title in Single Horizontal Line */}
                        <div className="flex items-center gap-6 sm:gap-10 lg:gap-12 min-w-0">
                          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400 font-medium w-24 sm:w-28 lg:w-32 shrink-0 select-none transition-colors">
                            {service.tag}
                          </span>
                          <h3 className="font-heading font-medium text-xl sm:text-2xl lg:text-[1.65rem] text-zinc-200 group-hover:text-white tracking-tight transition-colors truncate">
                            {service.title}
                          </h3>
                        </div>

                        {/* Right: Circular Chevron Dropdown Button */}
                        <div className="shrink-0 pl-4">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all">
                            <ChevronDown size={18} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServicesStackLumora;
