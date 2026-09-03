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
      setIsScrolled(scrollY > 180);
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
    }, 250);
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
    }, 200);
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
      subtitle: 'New builds & full website revamps with zero bloat',
      tag: 'Web Engineering',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      highlight: 'Sub-second mobile speed & clean custom ACF architecture',
    },
    {
      id: 'webflow',
      title: 'Webflow CMS Architecture',
      subtitle: 'Visual design systems & dynamic CMS collections',
      tag: 'CMS Architecture',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      highlight: '60 FPS animations & intuitive on-page visual editor',
    },
    {
      id: 'seo',
      title: 'Technical & On-Page SEO',
      subtitle: 'Search architecture & Core Web Vitals dominance',
      tag: 'Search Dominance',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
      highlight: 'Semantic JSON-LD schema & 100% green CWV score pass',
    },
    {
      id: 'local-seo',
      title: 'Local SEO & Google Business Profile',
      subtitle: 'Google Map 3-pack & automated 5★ review funnels',
      tag: 'Local Visibility',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      highlight: '50+ directory citations & automated review generation',
    },
    {
      id: 'branding',
      title: 'Brand Design & Visual Identity',
      subtitle: 'Bespoke logo suites, guidelines & marketing collateral',
      tag: 'Graphic Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
      highlight: 'Vector logo suites, typography rules & pitch decks',
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads & Paid Acquisition',
      subtitle: 'Direct-response ad creative & CAPI conversion funnels',
      tag: 'Paid Performance',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
      highlight: 'High-converting ad sets, CAPI tracking & daily ROAS scaling',
    },
  ];

  return (
    <>
      {/* 1. NORMAL PHASE: Full Top Navbar (Image 1) - Natural top flow, not sticky */}
      <header className="absolute top-0 inset-x-0 z-40 py-6 sm:py-8 px-6 sm:px-12 select-none pointer-events-auto">
        <div className="max-w-[90rem] mx-auto relative flex items-center justify-between">
          
          {/* Left: Brand LogoMark + "startuplize" with Agnos coral dot */}
          <div className="z-10">
            <a href="#home" className="flex items-center gap-2.5 group whitespace-nowrap shrink-0">
              <div className="w-7.5 h-7.5 rounded-lg bg-[#060612] flex items-center justify-center text-white font-black text-sm shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <span className="text-[#ff6321] text-base leading-none">●</span>
              </div>
              <span className="font-heading font-medium text-xl tracking-tight text-[#060612] whitespace-nowrap">
                startuplize<span className="text-[#ff6321]">.</span>
              </span>
            </a>
          </div>

          {/* Center: Desktop Nav Pill Container with Icons */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6 bg-white/95 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#e7e2dd] shadow-xs absolute left-1/2 -translate-x-1/2 z-10">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ y: -1.5 }}
                  transition={{ type: 'spring' as const, stiffness: 400, damping: 20 }}
                  className="flex items-center gap-1.5 text-body-sm font-medium text-[#060612] hover:text-[#ff6321] transition-colors whitespace-nowrap shrink-0 group py-1"
                >
                  <IconComponent className="w-3.5 h-3.5 text-[#ff6321]/75 group-hover:text-[#ff6321] group-hover:scale-110 transition-transform shrink-0" />
                  <span>{link.label}</span>
                </motion.a>
              );
            })}
          </nav>

          {/* Right: Primary Orange CTA Button */}
          <div className="flex items-center ml-auto pointer-events-auto whitespace-nowrap shrink-0 z-10">
            <PillButton
              variant="coral"
              size="md"
              onClick={onOpenBooking}
              className="shadow-lg hover:scale-105 whitespace-nowrap shrink-0 text-sm font-semibold"
            >
              Start project
            </PillButton>
          </div>

        </div>
      </header>

      {/* 2. STICKY PHASE: Bottom Frosted Blur Backdrop (Image 3 Inspiration) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 inset-x-0 h-28 pointer-events-none z-40 bg-gradient-to-t from-[#faf9f8]/90 via-[#faf9f8]/40 to-transparent backdrop-blur-md"
            style={{
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)',
            }}
          />
        )}
      </AnimatePresence>

      {/* 3. STICKY PHASE: Bottom Center Floating Pill Dock (Image 2 & 4 Inspiration) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ y: 80, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            exit={{ y: 80, opacity: 0, x: '-50%' }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
          >
            <div className="relative">
              
              {/* Service Hover Mega-Menu Flyout Card (Image 4 Inspiration) */}
              <AnimatePresence>
                {isServicesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 14, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={handleMouseEnterFlyout}
                    onMouseLeave={handleMouseLeaveFlyout}
                    className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-[94vw] max-w-[760px] bg-white rounded-2xl border border-[#e7e2dd] shadow-[0_25px_60px_rgba(0,0,0,0.18)] p-4 sm:p-6 select-none z-[60]"
                  >
                    {/* Invisible hover bridge to prevent cursor gap drop */}
                    <div className="absolute -bottom-4 inset-x-0 h-4 bg-transparent" />

                    {/* Downward triangle notch pointing directly at Services button */}
                    <div className="absolute -bottom-2 left-[calc(50%-135px)] w-4 h-4 bg-white rotate-45 border-r border-b border-[#e7e2dd]" />

                    <div className="flex flex-col sm:flex-row gap-5 relative z-10">
                      
                      {/* Left: 6 Startuplize Core Capabilities */}
                      <div className="w-full sm:w-[56%] flex flex-col justify-between space-y-1">
                        <div className="text-[11px] font-mono text-[#ff6321] uppercase tracking-wider font-bold px-2 mb-1">
                          • STARTUPLIZE CORE CAPABILITIES
                        </div>
                        {servicesData.map((srv, idx) => (
                          <a
                            key={srv.id}
                            href="#services"
                            onClick={() => setIsServicesHovered(false)}
                            onMouseEnter={() => setActiveServiceIdx(idx)}
                            className={`p-2.5 rounded-xl transition-all block group ${
                              activeServiceIdx === idx
                                ? 'bg-[#f5f4f3] text-[#ff6321]'
                                : 'hover:bg-[#faf9f8]'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span
                                className="font-heading font-semibold text-sm sm:text-base group-hover:text-[#ff6321] transition-colors"
                                style={{ color: activeServiceIdx === idx ? '#ff6321' : '#060612' }}
                              >
                                {srv.title}
                              </span>
                              <ArrowUpRight
                                className={`w-3.5 h-3.5 transition-transform ${
                                  activeServiceIdx === idx
                                    ? 'opacity-100 text-[#ff6321] translate-x-0.5 -translate-y-0.5'
                                    : 'opacity-0'
                                }`}
                              />
                            </div>
                            <p
                              className="text-xs font-body mt-0.5 line-clamp-1"
                              style={{ color: '#555562' }}
                            >
                              {srv.subtitle}
                            </p>
                          </a>
                        ))}
                      </div>

                      {/* Right: Rich Interactive Visual Showcase Preview (Image 4 right side) */}
                      <div className="hidden sm:flex sm:w-[44%] flex-col">
                        <div className="relative w-full h-full min-h-[340px] rounded-xl overflow-hidden bg-[#060612] p-5 flex flex-col justify-between text-white border border-[#e7e2dd]/20 shadow-inner group">
                          {/* Background dynamic service preview image */}
                          <img
                            src={servicesData[activeServiceIdx].image}
                            alt={servicesData[activeServiceIdx].title}
                            className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity scale-105 transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#060612] via-[#060612]/75 to-transparent" />

                          {/* Top Tag & Indicator */}
                          <div className="relative z-10 flex items-center justify-between">
                            <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-wider text-white">
                              {servicesData[activeServiceIdx].tag}
                            </span>
                            <div className="w-6 h-6 rounded-full bg-[#ff6321]/20 flex items-center justify-center text-[#ff6321]">
                              <span className="text-xs font-bold leading-none">↗</span>
                            </div>
                          </div>

                          {/* Center Startuplize Logo Mark (Inspired by center smile badge in Image 4) */}
                          <div className="relative z-10 self-center my-auto">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <div className="w-8 h-8 rounded-xl bg-[#060612] flex items-center justify-center border border-white/20">
                                <span className="text-[#ff6321] text-lg leading-none">●</span>
                              </div>
                            </div>
                          </div>

                          {/* Bottom Info & Action */}
                          <div className="relative z-10 pt-3 border-t border-white/15">
                            <div className="font-heading font-medium text-base text-white">
                              {servicesData[activeServiceIdx].title}
                            </div>
                            <div className="text-xs font-body text-white/70 mt-1 line-clamp-2">
                              {servicesData[activeServiceIdx].highlight}
                            </div>
                            <a
                              href="#services"
                              onClick={() => setIsServicesHovered(false)}
                              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#ff6321] mt-3 hover:underline"
                            >
                              <span>Explore in Core Capabilities</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* The Bottom Floating Pill Dock (Image 2 design with Startuplize branding) */}
              <div className="bg-white/95 backdrop-blur-xl border border-[#e7e2dd] shadow-[0_15px_45px_rgba(0,0,0,0.12)] rounded-full px-2.5 sm:px-3 py-1.5 sm:py-2 flex items-center gap-2 sm:gap-4 select-none relative z-50">
                
                {/* Brand LogoMark + Divider */}
                <a href="#home" className="flex items-center gap-2 pl-1.5 sm:pl-2 group shrink-0">
                  <div className="w-7 h-7 rounded-lg bg-[#060612] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    <span className="text-[#ff6321] text-sm leading-none">●</span>
                  </div>
                </a>

                <div className="h-4 w-px bg-[#e7e2dd] shrink-0" />

                {/* Nav Links */}
                <div className="flex items-center gap-1 sm:gap-2">
                  
                  {/* Services Link with Hover & Click Mega-Menu Trigger */}
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

                  {/* Other navigation links */}
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

                {/* Right Primary CTA Button (Image 2 style pill button) */}
                <button
                  onClick={onOpenBooking}
                  className="ml-1 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#060612] hover:bg-[#ff6321] text-white text-xs sm:text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-sm flex items-center gap-1.5 whitespace-nowrap shrink-0"
                >
                  <span>Start project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

