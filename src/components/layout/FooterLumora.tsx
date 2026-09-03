'use client';

import React from 'react';
import { Sparkles, ArrowUpRight, MapPin, Globe, Mail, Phone, MessageSquare } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';
import { StackedLines } from '@/components/ui/StackedLines';

interface FooterLumoraProps {
  onOpenBooking: () => void;
}

export function FooterLumora({ onOpenBooking }: FooterLumoraProps) {
  return (
    <footer className="relative bg-[#0a0a0a] text-white rounded-t-[2rem] pt-24 sm:pt-36 pb-12 px-6 sm:px-12 overflow-hidden select-none">
      
      {/* Pinned Bottom Giant Low-Opacity Watermark */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[13rem] sm:text-[18rem] md:text-[22rem] font-sans font-black text-white/[0.05] tracking-tighter uppercase whitespace-nowrap leading-none z-0">
        LUMORA
      </div>

      <div className="max-w-[88rem] mx-auto relative z-10 space-y-20 sm:space-y-28">
        
        {/* Top CTA Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <span className="text-xs font-mono text-[#cf8047] uppercase tracking-widest block mb-2 font-semibold">
              NEXT STEPS
            </span>
            <div className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-2xl">
              <StackedLines
                trigger={true}
                delay={0.05}
                lines={['Have an ambitious project?', "Let's get to work."]}
              />
            </div>
          </div>

          <div className="shrink-0">
            <PillButton
              variant="light"
              size="lg"
              onClick={onOpenBooking}
              showArrow={true}
            >
              Start a project
            </PillButton>
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">
          
          {/* Col 1: Company */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase text-[#8d8d8d] tracking-wider">
              Company
            </div>
            <ul className="space-y-2.5 text-sm font-sans text-white/80">
              <li><a href="#home" className="hover:text-[#cf8047] transition-colors">Overview</a></li>
              <li><a href="#works" className="hover:text-[#cf8047] transition-colors">Selected Work</a></li>
              <li><a href="#proof" className="hover:text-[#cf8047] transition-colors">Before / After Proof</a></li>
              <li><a href="#metrics" className="hover:text-[#cf8047] transition-colors">Field Metrics</a></li>
              <li><a href="#faq" className="hover:text-[#cf8047] transition-colors">Protocol & FAQ</a></li>
            </ul>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase text-[#8d8d8d] tracking-wider">
              Core Architecture
            </div>
            <ul className="space-y-2.5 text-sm font-sans text-white/80">
              <li><a href="#services" className="hover:text-[#cf8047] transition-colors">Headless WordPress</a></li>
              <li><a href="#services" className="hover:text-[#cf8047] transition-colors">ACF Pro Bespoke Themes</a></li>
              <li><a href="#services" className="hover:text-[#cf8047] transition-colors">Webflow Cinema Motion</a></li>
              <li><a href="#services" className="hover:text-[#cf8047] transition-colors">High-Scale WooCommerce</a></li>
              <li><a href="#services" className="hover:text-[#cf8047] transition-colors">Next.js Edge Frontends</a></li>
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase text-[#8d8d8d] tracking-wider">
              Search & Scale
            </div>
            <ul className="space-y-2.5 text-sm font-sans text-white/80">
              <li><a href="#services" className="hover:text-[#cf8047] transition-colors">Enterprise Technical SEO</a></li>
              <li><a href="#services" className="hover:text-[#cf8047] transition-colors">Programmatic Page Engines</a></li>
              <li><a href="#services" className="hover:text-[#cf8047] transition-colors">Google Local 3-Pack</a></li>
              <li><a href="#services" className="hover:text-[#cf8047] transition-colors">GBP Reinstatement</a></li>
              <li><a href="#services" className="hover:text-[#cf8047] transition-colors">Core Web Vitals Remediation</a></li>
            </ul>
          </div>

          {/* Col 4: Connect & Headquarters */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase text-[#8d8d8d] tracking-wider">
              Global Presence
            </div>
            <div className="space-y-2.5 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#cf8047] shrink-0 mt-0.5" />
                <span>120 Court Lane / Remote Worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#8d8d8d] shrink-0" />
                <span>New York · Dhaka · London</span>
              </div>
              <div className="pt-2">
                <a
                  href="mailto:partner@lumoragrowth.io"
                  className="text-xs font-mono text-[#cf8047] hover:underline"
                >
                  partner@lumoragrowth.io
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal, Local Schema, Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8d8d8d] border-t border-white/10 pt-8 gap-4">
          <div>
            © {new Date().getFullYear()} LUMORA DIGITAL ARCHITECTURE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>JSON-LD LocalBusiness Verified</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
