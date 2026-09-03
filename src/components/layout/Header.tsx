'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, LayoutGrid, ShieldCheck, Zap, HelpCircle, ArrowUpRight } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';

interface HeaderProps {
  onOpenBooking: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollY > 90);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnterServices = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsServicesHovered(true);
  };

  const handleMouseLeaveServices = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
    }, 280);
  };

  const handleMouseEnterFlyout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleMouseLeaveFlyout = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false);
    }, 220);
  };

  const navLinks = [
    { label: 'Services', href: '#services', icon: Sparkles },
    { label: 'Work', href: '#works', icon: LayoutGrid },
    { label: 'Proof', href: '#proof', icon: ShieldCheck },
    { label: 'Why Us', href: '#why-us', icon: Zap },
    { label: 'FAQ', href: '#faq', icon: HelpCircle },
  ];

  const servicesData = [
    {
      id: 'wordpress',
      title: 'WordPress & Elementor Engineering',
      subtitle: 'Custom ACF Pro theme architecture, zero bloat & sub-second Core Web Vitals.',
      tag: 'Web Engineering',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      highlight: 'Sub-second mobile speed & clean custom ACF architecture with zero plugin bloat.',
    },
    {
      id: 'webflow',
      title: 'Webflow CMS Architecture',
      subtitle: 'Dynamic CMS collections, scalable component systems & client editor mode.',
      tag: 'CMS Systems',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
      highlight: 'Enterprise CMS structures with reusable design tokens and native interactions.',
    },
    {
      id: 'technical-seo',
      title: 'Technical & On-Page SEO',
      subtitle: 'Semantic schema markup, crawl architecture & 100% Core Web Vitals dominance.',
      tag: 'Organic Search',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop',
      highlight: 'Structured data graphs, crawl budget optimization & programmatic landing pages.',
    },
    {
      id: 'local-seo',
      title: 'Local SEO & Google Business Profile',
      subtitle: 'Google Map 3-pack dominance, geo-citations & automated 5-star review funnels.',
      tag: 'Local Rank',
      image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=800&auto=format&fit=crop',
      highlight: 'Hyper-local landing pages, GBP signals & verified high-intent local inbound calls.',
    },
    {
      id: 'brand-design',
      title: 'Brand Design & Visual Identity',
      subtitle: 'Bespoke vector logo suites, typography rules, brand guidelines & pitch decks.',
      tag: 'Visual Identity',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop',
      highlight: 'Comprehensive identity systems engineered to make early-stage ventures look established.',
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads & Paid Acquisition',
      subtitle: 'Direct-response ad creative, Conversions API (CAPI) & high-ROAS funnels.',
      tag: 'Paid Media',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop',
      highlight: 'Server-side attribution, high-CTR hook creative & landing pages engineered to convert.',
    },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none select-none">
      <div
        className={`w-full flex justify-center transition-all duration-300 ${
          isScrolled ? 'pt-3 sm:pt-4 px-3 sm:px-6' : 'pt-5 sm:pt-7 px-6 sm:px-12'
        }`}
      >
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 360, damping: 30 }}
          className={`relative pointer-events-auto flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'max-w-fit rounded-full pl-3.5 sm:pl-4 pr-1.5 sm:pr-2 py-1.5 sm:py-2 gap-3 sm:gap-5 border border-black/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.06)]'
              : 'w-full max-w-[90rem] bg-transparent border-transparent gap-6'
          }`}
          style={{
            backdropFilter: isScrolled ? 'blur(32px) saturate(190%)' : 'none',
            WebkitBackdropFilter: isScrolled ? 'blur(32px) saturate(190%)' : 'none',
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.22)' : 'transparent',
          }}
        >
          {/* Left: Full Logo with Mark & Wordmark (Always visible in both normal & sticky) */}
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-2.5 group whitespace-nowrap shrink-0"
          >
            <img
              src="/startuplize-logo.png"
              alt="Startuplize Logo"
              className={`object-contain shrink-0 group-hover:scale-105 transition-transform ${
                isScrolled ? 'h-6 sm:h-7 w-auto' : 'h-7.5 sm:h-8.5 w-auto'
              }`}
            />
            <span
              style={{ color: '#060612' }}
              className={`font-heading font-bold tracking-tight whitespace-nowrap transition-all ${
                isScrolled ? 'text-sm sm:text-base' : 'text-lg sm:text-xl'
              }`}
            >
              startuplize<span className="text-[#ff6321]">.</span>
            </span>
          </a>

          {/* Hairline Divider in Sticky Mode */}
          {isScrolled && <div className="h-4 w-px bg-black/20 shrink-0 -ml-1" />}

          {/* Center Navigation Links with Large Mega-Menu */}
          <div className="relative flex items-center">
            
            {/* Large Services Mega-Menu Flyout Card */}
            <AnimatePresence>
              {isServicesHovered && (
                <motion.div
                  initial={{ opacity: 0, y: -12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={handleMouseEnterFlyout}
                  onMouseLeave={handleMouseLeaveFlyout}
                  className="absolute top-full mt-3.5 left-1/2 -translate-x-1/2 w-[95vw] max-w-[960px] bg-white rounded-3xl border border-[#e7e2dd] shadow-[0_30px_90px_rgba(0,0,0,0.18)] p-6 sm:p-8 select-none z-[70]"
                >
                  {/* Invisible hover bridge */}
                  <div className="absolute -top-5 inset-x-0 h-5 bg-transparent" />

                  {/* Upward pointer notch pointing directly to Services pill */}
                  <div
                    className={`absolute -top-2 w-4 h-4 bg-white rotate-45 border-l border-t border-[#e7e2dd] ${
                      isScrolled ? 'left-[calc(50%-135px)]' : 'left-[calc(50%-120px)]'
                    }`}
                  />

                  <div className="flex flex-col md:flex-row gap-6 relative z-10">
                    
                    {/* Left Column: 6 Startuplize Core Capabilities */}
                    <div className="w-full md:w-[58%] flex flex-col justify-between space-y-1.5">
                      <div className="text-[11px] font-mono text-[#ff6321] uppercase tracking-wider font-bold px-3 mb-1 flex items-center gap-2">
                        <span>•</span>
                        <span>STARTUPLIZE CORE CAPABILITIES</span>
                        <span className="text-[#69686e]/50">//</span>
                        <span className="text-[#69686e] font-normal">ENGINEERING & GROWTH SUITE</span>
                      </div>

                      {servicesData.map((srv, idx) => (
                        <a
                          key={srv.id}
                          href="#services"
                          onClick={() => setIsServicesHovered(false)}
                          onMouseEnter={() => setActiveServiceIdx(idx)}
                          className={`p-3 sm:p-3.5 rounded-2xl transition-all block group ${
                            activeServiceIdx === idx
                              ? 'bg-[#f5f4f3] text-[#ff6321]'
                              : 'hover:bg-[#faf9f8]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <span
                                className="font-heading font-semibold text-sm sm:text-base transition-colors"
                                style={{ color: activeServiceIdx === idx ? '#ff6321' : '#060612' }}
                              >
                                {srv.title}
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/5 text-[#69686e]">
                                {srv.tag}
                              </span>
                            </div>
                            <ArrowUpRight
                              className={`w-4 h-4 transition-transform ${
                                activeServiceIdx === idx
                                  ? 'opacity-100 text-[#ff6321] translate-x-0.5 -translate-y-0.5'
                                  : 'opacity-0'
                              }`}
                            />
                          </div>
                          <p
                            className="text-xs sm:text-sm font-body mt-1 line-clamp-1"
                            style={{ color: '#555562' }}
                          >
                            {srv.subtitle}
                          </p>
                        </a>
                      ))}
                    </div>

                    {/* Right Column: Large Interactive Showcase Preview */}
                    <div className="hidden md:flex md:w-[42%] flex-col">
                      <div className="relative w-full h-full min-h-[440px] rounded-2xl overflow-hidden bg-[#060612] p-6 flex flex-col justify-between text-white border border-[#e7e2dd]/20 shadow-2xl group">
                        {/* Background dynamic service preview image */}
                        <img
                          src={servicesData[activeServiceIdx].image}
                          alt={servicesData[activeServiceIdx].title}
                          className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity scale-105 transition-all duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060612] via-[#060612]/80 to-transparent" />

                        {/* Top Tag & Indicator */}
                        <div className="relative z-10 flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-white">
                            {servicesData[activeServiceIdx].tag}
                          </span>
                          <div className="w-7 h-7 rounded-full bg-[#ff6321]/20 flex items-center justify-center text-[#ff6321]">
                            <span className="text-sm font-bold leading-none">↗</span>
                          </div>
                        </div>

                        {/* Center Startuplize Logo Mark Badge */}
                        <div className="relative z-10 self-center my-auto">
                          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 p-2.5">
                            <img
                              src="/startuplize-logo.png"
                              alt="Startuplize"
                              className="w-full h-full object-contain drop-shadow-md"
                            />
                          </div>
                        </div>

                        {/* Bottom Info & Action */}
                        <div className="relative z-10 pt-4 border-t border-white/15">
                          <div className="font-heading font-medium text-lg text-white">
                            {servicesData[activeServiceIdx].title}
                          </div>
                          <div className="text-xs sm:text-sm font-body text-white/70 mt-1 line-clamp-2">
                            {servicesData[activeServiceIdx].highlight}
                          </div>
                          <a
                            href="#services"
                            onClick={() => setIsServicesHovered(false)}
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#ff6321] mt-3 hover:underline"
                          >
                            <span>Explore Service Architecture</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                          <div className="mt-2 text-[10px] font-mono text-white/40 tracking-wider">
                            100% IN-HOUSE · DIRECT SENIOR TALENT · ZERO BLOAT
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Menu Links */}
            <div
              className={`flex items-center transition-all ${
                isScrolled
                  ? 'gap-1 sm:gap-1.5'
                  : 'gap-2 sm:gap-3 bg-white/90 backdrop-blur-md px-5 sm:px-6 py-2 rounded-full border border-[#e7e2dd] shadow-xs'
              }`}
            >
              {/* Services Button with Mega-Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterServices}
                onMouseLeave={handleMouseLeaveServices}
              >
                <button
                  type="button"
                  onClick={() => setIsServicesHovered((prev) => !prev)}
                  className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isServicesHovered
                      ? 'bg-[#f5f4f3] text-[#ff6321]'
                      : 'text-[#060612] hover:text-[#ff6321]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#ff6321]" />
                  <span>Services</span>
                </button>
              </div>

              {/* Other Navigation Links */}
              {navLinks.slice(1).map((link) => {
                const IconComp = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-2.5 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-[#060612] hover:text-[#ff6321] transition-colors hidden sm:flex items-center gap-1.5"
                  >
                    <IconComp className="w-3.5 h-3.5 text-[#69686e]" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Primary Coral PillButton (Identical across all phases) */}
          <PillButton
            variant="coral"
            size={isScrolled ? 'sm' : 'md'}
            href="/contact"
            className={`shadow-md hover:scale-105 whitespace-nowrap shrink-0 font-semibold ${
              isScrolled ? 'text-xs sm:text-sm' : 'text-sm'
            }`}
          >
            Start project
          </PillButton>
        </motion.div>
      </div>
    </header>
  );
}
