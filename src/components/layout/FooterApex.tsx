'use client';

import React from 'react';
import { PillButton } from '@/components/ui/PillButton';

interface FooterApexProps {
  onOpenBooking: () => void;
}

export function FooterApex({ onOpenBooking }: FooterApexProps) {
  return (
    <footer id="contact" className="relative bg-[#060612] text-white rounded-t-[2.5rem] pt-24 sm:pt-36 pb-12 px-6 sm:px-12 overflow-hidden select-none">
      
      {/* Giant Bottom Watermark: "STARTUPLIZE" */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[9rem] sm:text-[13rem] md:text-[17rem] font-heading font-medium text-white/[0.035] tracking-tighter uppercase whitespace-nowrap leading-none z-0">
        STARTUPLIZE
      </div>

      <div className="max-w-[84rem] mx-auto relative z-10 space-y-20 sm:space-y-28">
        
        {/* Top CTA: H2 + PillButton */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div>
            <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest block mb-2 font-semibold whitespace-nowrap">
              • NEXT SPRINT
            </span>
            <div className="max-w-2xl">
              <h2 className="font-heading font-medium text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                Have an ambitious project in mind? Let&apos;s engineer it.
              </h2>
            </div>
          </div>

          <div className="shrink-0 whitespace-nowrap">
            <PillButton
              variant="coral"
              size="lg"
              onClick={onOpenBooking}
              showArrow={true}
              className="shadow-2xl hover:scale-105 whitespace-nowrap shrink-0"
            >
              Start project
            </PillButton>
          </div>
        </div>

        {/* 4-Column Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          
          {/* Col 1: Brand Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                <span className="text-[#ff6321] text-base leading-none">●</span>
              </div>
              <span className="font-heading font-medium text-xl text-white">startuplize.</span>
            </div>
            <p className="text-body-sm text-[#69686e] leading-relaxed font-body">
              We engineer ultra-fast WordPress & Webflow platforms, programmatic SEO systems, and local search dominance for ambitious businesses.
            </p>
            <div className="text-body-sm font-mono text-white/50 whitespace-nowrap">
              EST. 2018 · SCALING NATIONWIDE
            </div>
          </div>

          {/* Col 2: Capabilities */}
          <div className="space-y-4">
            <div className="text-body-sm font-mono uppercase text-[#69686e] tracking-wider font-semibold whitespace-nowrap">
              Capabilities
            </div>
            <ul className="space-y-2 text-body-sm font-body text-white/80">
              <li><a href="#services" className="hover:text-[#ff6321] transition-colors whitespace-nowrap">Custom WordPress Builds</a></li>
              <li><a href="#services" className="hover:text-[#ff6321] transition-colors whitespace-nowrap">Elementor Pro Architecture</a></li>
              <li><a href="#services" className="hover:text-[#ff6321] transition-colors whitespace-nowrap">Webflow CMS Systems</a></li>
              <li><a href="#services" className="hover:text-[#ff6321] transition-colors whitespace-nowrap">Fast WooCommerce Stores</a></li>
              <li><a href="#services" className="hover:text-[#ff6321] transition-colors whitespace-nowrap">Mobile Speed Optimization</a></li>
            </ul>
          </div>

          {/* Col 3: Growth Systems */}
          <div className="space-y-4">
            <div className="text-body-sm font-mono uppercase text-[#69686e] tracking-wider font-semibold whitespace-nowrap">
              Growth Systems
            </div>
            <ul className="space-y-2 text-body-sm font-body text-white/80">
              <li><a href="#services" className="hover:text-[#ff6321] transition-colors whitespace-nowrap">Google Business Profile (GBP)</a></li>
              <li><a href="#services" className="hover:text-[#ff6321] transition-colors whitespace-nowrap">Local Map Pack Visibility</a></li>
              <li><a href="#services" className="hover:text-[#ff6321] transition-colors whitespace-nowrap">Local Citation Directory Sync</a></li>
              <li><a href="#services" className="hover:text-[#ff6321] transition-colors whitespace-nowrap">Automated 5★ Review Systems</a></li>
              <li><a href="#services" className="hover:text-[#ff6321] transition-colors whitespace-nowrap">Technical On-Page SEO</a></li>
            </ul>
          </div>

          {/* Col 4: Direct Lines */}
          <div className="space-y-4">
            <div className="text-body-sm font-mono uppercase text-[#69686e] tracking-wider font-semibold whitespace-nowrap">
              Direct Lines
            </div>
            <div className="space-y-2.5 text-body-sm text-white/80 font-body">
              <div>
                <a
                  href="https://cal.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ff6321] transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>Schedule via Cal.com</span>
                  <span>↗</span>
                </a>
              </div>
              <div>
                <a
                  href="mailto:partner@startuplize.com"
                  className="hover:text-[#ff6321] transition-colors whitespace-nowrap"
                >
                  partner@startuplize.com
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ff6321] transition-colors whitespace-nowrap"
                >
                  Direct WhatsApp Line ↗
                </a>
              </div>
              <div className="pt-2 text-body-sm text-[#69686e]">
                120 Court Lane, Suite 400 · Global Remote
              </div>
            </div>
          </div>

        </div>

        {/* Legal Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-body-sm font-mono text-[#69686e] border-t border-white/10 pt-8 gap-4">
          <div className="whitespace-nowrap">
            © 2026 STARTUPLIZE DIGITAL ENGINEERING. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6 whitespace-nowrap">
            <span>120 Court Lane, Suite 400</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
