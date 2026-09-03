'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, LayoutGrid, ShieldCheck, Zap, HelpCircle } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';

interface HeaderProps {
  onOpenBooking: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollY > 120);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services', icon: Sparkles },
    { label: 'Work', href: '#works', icon: LayoutGrid },
    { label: 'Proof', href: '#proof', icon: ShieldCheck },
    { label: 'Why Us', href: '#why-us', icon: Zap },
    { label: 'FAQ', href: '#faq', icon: HelpCircle },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 select-none ${
        isScrolled
          ? 'py-4 px-6 sm:px-12 bg-transparent pointer-events-none'
          : 'py-6 sm:py-8 px-6 sm:px-12 bg-transparent pointer-events-auto'
      }`}
    >
      <div className="max-w-[90rem] mx-auto relative flex items-center justify-between">
        
        {/* Left: Brand LogoMark + "startuplize" with Agnos coral dot */}
        <div
          className={`transition-all duration-300 z-10 ${
            isScrolled
              ? 'opacity-0 -translate-y-4 pointer-events-none'
              : 'opacity-100 translate-y-0 pointer-events-auto'
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5 group whitespace-nowrap shrink-0">
            <div className="w-7.5 h-7.5 rounded-lg bg-[#060612] flex items-center justify-center text-white font-black text-sm shrink-0 shadow-sm">
              <span className="text-[#ff6321] text-base leading-none">●</span>
            </div>
            <span className="font-heading font-medium text-xl tracking-tight text-[#060612] whitespace-nowrap">
              startuplize<span className="text-[#ff6321]">.</span>
            </span>
          </a>
        </div>

        {/* Center: Desktop Nav Pill Container - Centered Absolutely in the Header */}
        <nav
          className={`hidden md:flex items-center gap-5 lg:gap-6 bg-white/95 backdrop-blur-md px-6 py-2.5 rounded-full border border-[#e7e2dd] shadow-xs transition-all duration-300 absolute left-1/2 -translate-x-1/2 z-10 ${
            isScrolled
              ? 'opacity-0 -translate-y-4 pointer-events-none'
              : 'opacity-100 translate-y-0 pointer-events-auto'
          }`}
        >
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

        {/* Right: Only Primary CTA button (enlarged to fit design, no hamburger) */}
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
  );
}
