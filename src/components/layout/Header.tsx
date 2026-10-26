'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, LayoutGrid, Zap, HelpCircle, ArrowUpRight, Menu, X } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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
    { label: 'Services', href: '/#services', icon: Sparkles },
    { label: 'Work', href: '/#works', icon: LayoutGrid },
    { label: 'Why Us', href: '/#why-us', icon: Zap },
    { label: 'FAQ', href: '/#faq', icon: HelpCircle },
  ];

  const servicesData = [
    {
      id: 'wordpress',
      title: 'WordPress & Elementor Development',
      subtitle: 'Custom ACF Pro theme architecture, zero bloat & sub-second Core Web Vitals.',
      tag: 'Web Development',
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
      highlight: 'Comprehensive identity systems crafted to make early-stage ventures look established.',
    },
    {
      id: 'meta-ads',
      title: 'Meta Ads & Paid Acquisition',
      subtitle: 'Direct-response ad creative, Conversions API (CAPI) & high-ROAS funnels.',
      tag: 'Paid Media',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop',
      highlight: 'Server-side attribution, high-CTR hook creative & landing pages built to convert.',
    },
  ];

  return (
    <>
      {/* ── TOP HEADER (With Pure Apple Glass Dynamic Sticky Phase Pill) ── */}
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none select-none">
        <div
          className={`w-full flex justify-center transition-all duration-300 ${isScrolled ? 'pt-3 sm:pt-4 px-3 sm:px-6' : 'pt-4 sm:pt-7 px-4 sm:px-6 md:px-12'
            }`}
        >
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 360, damping: 30 }}
            className={`relative pointer-events-auto flex items-center justify-between transition-all duration-300 ${isScrolled
                ? 'w-full lg:w-auto lg:max-w-fit rounded-none pl-3 sm:pl-3.5 pr-1.5 sm:pr-2 py-1.5 sm:py-2 gap-3 sm:gap-4.5 border border-black/[0.08] shadow-none'
                : 'w-full max-w-[90rem] bg-transparent border-0 border-transparent shadow-none gap-4 sm:gap-6'
              }`}
            style={{
              background: isScrolled
                ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.18) 100%)'
                : 'transparent',
              backdropFilter: isScrolled
                ? 'blur(20px) saturate(190%) contrast(100%)'
                : 'none',
              WebkitBackdropFilter: isScrolled
                ? 'blur(20px) saturate(190%) contrast(100%)'
                : 'none',
              boxShadow: 'none',
            }}
          >
            {/* Left: Logo (Full with Wordmark when at top; ONLY the Icon in the sticky phase) */}
            <a
              href="/"
              aria-label="Startuplize Home"
              className="flex items-center gap-2 sm:gap-2.5 group whitespace-nowrap shrink-0"
            >
              <img
                src="/startuplize-logo.png"
                alt="Startuplize Logo"
                className={`object-contain shrink-0 group-hover:scale-105 transition-transform ${isScrolled ? 'h-6 sm:h-7 w-auto pl-0.5' : 'h-7.5 sm:h-8.5 w-auto'
                  }`}
              />
              <AnimatePresence initial={false}>
                {!isScrolled && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: '#060612' }}
                    className="font-heading font-bold tracking-tight whitespace-nowrap text-lg sm:text-xl overflow-hidden"
                  >
                    startuplize<span className="text-[#ff6321]">.</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </a>

            {/* Hairline Divider in Sticky Mode (Desktop only) */}
            {isScrolled && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                className="hidden lg:block h-4 w-px bg-black/10 shrink-0 -ml-0.5"
              />
            )}

            {/* Center Navigation Links with Large Mega-Menu - DESKTOP ONLY */}
            <div className="relative hidden lg:flex items-center">

              {/* Large Services Mega-Menu Flyout Card */}
              <AnimatePresence>
                {isServicesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: 'easeOut' }}
                    onMouseEnter={handleMouseEnterFlyout}
                    onMouseLeave={handleMouseLeaveFlyout}
                    className="absolute top-full mt-3.5 left-1/2 -translate-x-1/2 w-[95vw] max-w-[960px] max-h-[82vh] overflow-y-auto bg-white/95 backdrop-blur-2xl rounded-none border border-[#e7e2dd] shadow-[0_30px_90px_rgba(0,0,0,0.18)] p-6 sm:p-8 select-none z-[70]"
                  >
                    {/* Invisible hover bridge */}
                    <div className="absolute -top-5 inset-x-0 h-5 bg-transparent" />

                    {/* Upward pointer notch pointing directly to Services pill */}
                    <div
                      className={`absolute -top-2 w-4 h-4 bg-white rotate-45 border-l border-t border-[#e7e2dd] ${isScrolled ? 'left-[calc(50%-130px)]' : 'left-[calc(50%-120px)]'
                        }`}
                    />

                    <div className="flex flex-col md:flex-row gap-6 relative z-10">

                      {/* Left Column: 6 Startuplize Core Capabilities */}
                      <div className="w-full md:w-[58%] flex flex-col justify-between space-y-1.5">
                        <div className="text-sm font-mono text-[#ff6321] uppercase tracking-wider font-bold px-3 mb-1 flex items-center gap-2">
                          <span>•</span>
                          <span>STARTUPLIZE CORE CAPABILITIES</span>
                          <span className="text-[#69686e]/50">//</span>
                          <span className="text-[#52525b] font-normal">WEB & GROWTH SUITE</span>
                        </div>

                        {servicesData.map((srv, idx) => (
                          <a
                            key={srv.id}
                            href="/#services"
                            onClick={() => setIsServicesHovered(false)}
                            onMouseEnter={() => setActiveServiceIdx(idx)}
                            className={`p-3 sm:p-3.5 rounded-none transition-all block group ${activeServiceIdx === idx
                                ? 'bg-black/[0.05] text-[#ff6321]'
                                : 'hover:bg-black/[0.03]'
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
                                <span className="text-sm font-mono px-2 py-0.5 rounded-full bg-black/5 text-[#52525b]">
                                  {srv.tag}
                                </span>
                              </div>
                              <ArrowUpRight
                                className={`w-4 h-4 transition-transform ${activeServiceIdx === idx
                                    ? 'opacity-100 text-[#ff6321] translate-x-0.5 -translate-y-0.5'
                                    : 'opacity-0'
                                  }`}
                              />
                            </div>
                            <p
                              className="text-sm font-body mt-1 line-clamp-1"
                              style={{ color: '#444452' }}
                            >
                              {srv.subtitle}
                            </p>
                          </a>
                        ))}
                      </div>

                      {/* Right Column: Large Interactive Showcase Preview */}
                      <div className="hidden md:flex md:w-[42%] flex-col">
                        <div className="relative w-full h-full min-h-[440px] rounded-none overflow-hidden bg-[#060612] p-6 flex flex-col justify-between text-white border border-[#e7e2dd]/20 shadow-2xl group">
                          {/* Background dynamic service preview image */}
                          <img
                            src={servicesData[activeServiceIdx].image}
                            alt={servicesData[activeServiceIdx].title}
                            className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity scale-105 transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#060612] via-[#060612]/80 to-transparent" />

                          {/* Top Tag & Indicator */}
                          <div className="relative z-10 flex items-center justify-between">
                            <span className="px-3 py-1 rounded-none bg-white/10 backdrop-blur-md border border-white/15 text-sm font-mono tracking-wider text-white">
                              {servicesData[activeServiceIdx].tag}
                            </span>
                            <div className="w-7 h-7 rounded-none bg-[#ff6321]/20 flex items-center justify-center text-[#ff6321]">
                              <span className="text-sm font-bold leading-none">↗</span>
                            </div>
                          </div>

                          {/* Center Startuplize Logo Mark Badge */}
                          <div className="relative z-10 self-center my-auto">
                            <div className="w-16 h-16 rounded-none bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 p-2.5">
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
                            <div className="text-sm font-body text-zinc-300 mt-1 line-clamp-2">
                              {servicesData[activeServiceIdx].highlight}
                            </div>
                            <a
                              href="/#services"
                              onClick={() => setIsServicesHovered(false)}
                              className="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-[#ff7e47] mt-3 hover:underline"
                            >
                              <span>Explore Service Architecture</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                            <div className="mt-2 text-sm font-mono text-zinc-400 tracking-wider">
                              100% IN-HOUSE · DIRECT SENIOR TALENT · ZERO BLOAT
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Menu Links with Pure Apple Glass in Unscrolled State */}
              <div
                className={`flex items-center transition-all ${isScrolled
                    ? 'gap-1 sm:gap-1.5'
                    : 'gap-2 sm:gap-3 px-5 sm:px-6 py-2 rounded-none border border-black/[0.07] shadow-none'
                  }`}
                style={{
                  background: !isScrolled
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.18) 100%)'
                    : 'transparent',
                  backdropFilter: !isScrolled
                    ? 'blur(20px) saturate(190%) contrast(100%)'
                    : 'none',
                  WebkitBackdropFilter: !isScrolled
                    ? 'blur(20px) saturate(190%) contrast(100%)'
                    : 'none',
                  boxShadow: 'none',
                }}
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
                    className={`px-3 py-1.5 rounded-none text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${isServicesHovered
                        ? 'bg-black/[0.06] text-[#ff6321]'
                        : 'text-[#060612] hover:text-[#ff6321] hover:bg-black/[0.04]'
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
                      className="px-2.5 sm:px-3 py-1.5 rounded-none text-xs sm:text-sm font-medium text-[#060612] hover:text-[#ff6321] hover:bg-black/[0.04] transition-colors flex items-center gap-1.5"
                    >
                      <IconComp className="w-3.5 h-3.5 text-[#52525b]" />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right: Desktop Primary Coral PillButton (Visible on lg: >=1024px) */}
            <div className="hidden lg:inline-flex items-center">
              <PillButton
                variant="coral"
                size={isScrolled ? 'sm' : 'md'}
                href="/contact"
                onClick={onOpenBooking}
                className="hover:scale-105"
              >
                Start project
              </PillButton>
            </div>

            {/* Right: Mobile & Tablet Trigger Bar (Visible on < lg: <1024px) */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-2.5 shrink-0">
              <PillButton
                variant="coral"
                size="sm"
                href="/contact"
                onClick={onOpenBooking}
                showArrow={true}
                className="font-semibold whitespace-nowrap shadow-none"
              >
                Start project
              </PillButton>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                className={`min-w-[36px] min-h-[36px] rounded-none border border-black/[0.07] flex items-center justify-center text-[#060612] active:scale-95 transition-all cursor-pointer shadow-none ${isScrolled ? 'w-9 h-9' : 'w-11 h-11 min-w-[44px] min-h-[44px]'
                  }`}
                style={{
                  background:
                    'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.18) 100%)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  boxShadow: 'none',
                }}
              >
                <Menu className={`${isScrolled ? 'w-4 h-4' : 'w-5 h-5'} text-[#060612]`} />
              </button>
            </div>

          </motion.div>
        </div>
      </header>

      {/* ── OFF-CANVAS MOBILE DRAWER MENU (Slide-in from right) ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] select-none">
            {/* Blurred Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-md"
            />

            {/* Slide-in Drawer Container */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 320 }}
              className="fixed top-0 right-0 bottom-0 w-[86vw] max-w-sm bg-white/95 backdrop-blur-2xl border-l border-[#e7e2dd] shadow-[-10px_0_40px_rgba(0,0,0,0.15)] flex flex-col justify-between p-6 overflow-y-auto"
            >
              {/* Drawer Header */}
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-[#e7e2dd]">
                  <a
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 group"
                  >
                    <img
                      src="/startuplize-logo.png"
                      alt="Startuplize"
                      className="h-7 w-auto object-contain"
                    />
                    <span className="font-heading font-bold text-lg text-[#060612]">
                      startuplize<span className="text-[#ff6321]">.</span>
                    </span>
                  </a>

                  {/* Prominent Close Button (44px touch target) */}
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close navigation menu"
                    className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-none bg-[#f5f4f3] hover:bg-[#eeecea] text-[#060612] flex items-center justify-center transition-colors cursor-pointer active:scale-95 border border-[#e7e2dd]"
                  >
                    <X className="w-5 h-5 text-[#060612]" />
                  </button>
                </div>

                {/* Vertical Navigation Links */}
                <nav className="py-6 flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    const IconComp = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between py-3.5 px-3 rounded-none text-[#060612] hover:bg-[#f5f4f3] hover:text-[#ff6321] transition-all group font-heading font-medium text-xl"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-none bg-[#f5f4f3] group-hover:bg-[#ff6321]/10 flex items-center justify-center text-[#ff6321] transition-colors">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <span>{link.label}</span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#52525b] group-hover:text-[#ff6321] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    );
                  })}

                  <a
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3.5 px-3 rounded-none text-[#060612] hover:bg-[#f5f4f3] hover:text-[#ff6321] transition-all group font-heading font-medium text-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-none bg-[#f5f4f3] group-hover:bg-[#ff6321]/10 flex items-center justify-center text-[#ff6321] transition-colors">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <span>Book a Call</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#52525b] group-hover:text-[#ff6321] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </nav>

                {/* Core Capabilities Pill Summary */}
                <div className="p-4 rounded-none bg-[#faf9f8] border border-[#e7e2dd] mb-4">
                  <div className="text-sm font-mono text-[#ff6321] uppercase tracking-wider font-bold mb-2">
                    STARTUPLIZE CORE DISCIPLINES
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['WordPress', 'Webflow', 'Technical SEO', 'Local 3-Pack', 'Brand Design', 'Meta Ads'].map((tag) => (
                      <span
                        key={tag}
                        className="text-sm font-mono px-2.5 py-1 rounded-none bg-white border border-[#e7e2dd] text-[#060612]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Drawer Footer & Primary CTA */}
              <div className="space-y-3 pt-4 border-t border-[#e7e2dd]">
                <PillButton
                  variant="coral"
                  size="lg"
                  href="/contact"
                  showArrow={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full justify-center shadow-lg"
                >
                  Start project
                </PillButton>

                <div className="text-center pt-1">
                  <span className="text-sm font-mono text-[#52525b]">
                    100% In-House · Direct Senior Talent · Zero Bloat
                  </span>
                </div>
              </div>

            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
