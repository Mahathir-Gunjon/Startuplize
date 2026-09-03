'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, Globe2, Menu, X, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [selectedCity, setSelectedCity] = useState<'dhaka' | 'london' | 'newyork'>('dhaka');
  const [timeString, setTimeString] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Live real-time clock for Dhaka / London / New York
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let timeZone = 'Asia/Dhaka';
      if (selectedCity === 'london') timeZone = 'Europe/London';
      if (selectedCity === 'newyork') timeZone = 'America/New_York';

      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);

      setTimeString(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [selectedCity]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Capabilities', href: '#services' },
    { label: 'Showcase', href: '#portfolio' },
    { label: 'Hard Proof', href: '#case-studies' },
    { label: 'ROI Engine', href: '#calculator' },
    { label: 'Client Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          isScrolled
            ? 'glass-panel shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-white/10'
            : 'bg-black/30 backdrop-blur-md border border-white/[0.06]'
        }`}
      >
        {/* Brand Logo with animated Spark */}
        <a href="#" className="flex items-center gap-2 group select-none">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#E06927] to-[#10B981] p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(224,105,39,0.4)]">
            <div className="w-full h-full bg-[#08090C] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#E06927] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-display font-black text-lg tracking-wider text-white">
            VANGUARD<span className="text-[#E06927]">.</span>
          </span>
        </a>

        {/* Live Multi-City Timezone Chip (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#9CA3AF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] radar-ping" />
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSelectedCity('dhaka')}
              className={`hover:text-white transition-colors ${selectedCity === 'dhaka' ? 'text-white font-bold' : ''}`}
            >
              DAC
            </button>
            <span className="opacity-30">/</span>
            <button
              onClick={() => setSelectedCity('london')}
              className={`hover:text-white transition-colors ${selectedCity === 'london' ? 'text-white font-bold' : ''}`}
            >
              LON
            </button>
            <span className="opacity-30">/</span>
            <button
              onClick={() => setSelectedCity('newyork')}
              className={`hover:text-white transition-colors ${selectedCity === 'newyork' ? 'text-white font-bold' : ''}`}
            >
              NYC
            </button>
          </div>
          <span className="text-white font-semibold ml-1">{timeString || 'LIVE'}</span>
        </div>

        {/* Desktop Navigation Links with Magnetic / Lift physics */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="text-xs tracking-wider uppercase font-medium text-[#9CA3AF] hover:text-white transition-colors relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#E06927] to-[#10B981] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <MagneticButton
            size="sm"
            variant="primary"
            showRadar={true}
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex"
          >
            BOOK GROWTH CALL
          </MagneticButton>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 p-5 rounded-2xl glass-panel border border-white/10 shadow-2xl max-w-7xl mx-auto space-y-4"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-[#9CA3AF] hover:text-white py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E06927]" />
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF] px-2 py-1 bg-white/5 rounded-lg">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#10B981]" />
                  {selectedCity.toUpperCase()}:
                </span>
                <span className="text-white font-bold">{timeString}</span>
              </div>
              <MagneticButton
                size="md"
                variant="primary"
                showRadar={true}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full"
              >
                START YOUR GROWTH ENGINE
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
