'use client';

import React from 'react';
import { Sparkles, ArrowUpRight, ShieldCheck, Mail, MessageCircle, Phone, MapPin, Globe } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="relative bg-[#08090C] text-[#F3F4F6] pt-24 sm:pt-32 pb-12 px-4 sm:px-8 overflow-hidden border-t border-white/10">
      
      {/* Massive Background Watermark Text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[15vw] font-display font-black text-white/[0.02] tracking-tighter uppercase whitespace-nowrap leading-none z-0">
        DOMINATE
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E06927]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* Pre-Footer Action Banner */}
        <div className="glass-panel-subtle rounded-3xl border border-white/10 p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-xs font-mono text-[#10B981] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#10B981] radar-ping" />
            ACCEPTING 3 NEW ENTERPRISE CLIENTS THIS QUARTER
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Ready to Dominate Search & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E06927] to-[#10B981]">
              Convert Cold Traffic at Scale?
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#9CA3AF] max-w-xl mx-auto">
            Book a direct 30-minute discovery call with our Principal Growth Architect. We will deliver an actionable technical audit before you commit a single dollar.
          </p>

          <div className="pt-4 flex justify-center">
            <MagneticButton
              size="lg"
              variant="primary"
              showRadar={true}
              onClick={onOpenBooking}
            >
              BOOK YOUR STRATEGIC CALL NOW
            </MagneticButton>
          </div>
        </div>

        {/* Main Footer Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 pt-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2 group select-none">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#E06927] to-[#10B981] p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(224,105,39,0.4)]">
                <div className="w-full h-full bg-[#08090C] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#E06927]" />
                </div>
              </div>
              <span className="font-display font-black text-xl tracking-wider text-white">
                VANGUARD<span className="text-[#E06927]">.</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-sm leading-relaxed">
              Vanguard is an elite engineering and growth studio. We specialize in high-performance headless WordPress, cinema-grade Webflow platforms, and Google Local 3-Pack market dominance.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#10B981]/20 hover:text-[#10B981] text-[#9CA3AF] transition-colors border border-white/10"
                aria-label="Direct WhatsApp line"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:partner@vanguardgrowth.io"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#E06927]/20 hover:text-[#E06927] text-[#9CA3AF] transition-colors border border-white/10"
                aria-label="Email Vanguard"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+18005550199"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#2563EB]/20 hover:text-[#2563EB] text-[#9CA3AF] transition-colors border border-white/10"
                aria-label="Phone consultation"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Directory Column 1: Engineering */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-white font-bold uppercase tracking-wider text-sm font-display mb-4">
              Core Architecture
            </div>
            <ul className="space-y-2.5 text-[#9CA3AF]">
              <li><a href="#services" className="hover:text-white transition-colors">Headless WordPress</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">ACF Pro & Custom Themes</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Webflow Cinema Motion</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">WooCommerce High-Scale</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Core Web Vitals Remediation</a></li>
            </ul>
          </div>

          {/* Directory Column 2: Growth & SEO */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-white font-bold uppercase tracking-wider text-sm font-display mb-4">
              Search & Funnels
            </div>
            <ul className="space-y-2.5 text-[#9CA3AF]">
              <li><a href="#services" className="hover:text-white transition-colors">Enterprise Technical SEO</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Programmatic SEO Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Local 3-Pack Domination</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Google Business Profile Fixes</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">High-Converting Landing Funnels</a></li>
            </ul>
          </div>

          {/* Directory Column 3: Headquarters & Schema */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-white font-bold uppercase tracking-wider text-sm font-display mb-4">
              Global Headquarters
            </div>
            <div className="space-y-2 text-[#9CA3AF] leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E06927] shrink-0 mt-0.5" />
                <span>
                  One World Trade Center, Suite 8500, New York, NY 10007
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-white">
                <Globe className="w-4 h-4 text-[#10B981]" />
                <span>Dhaka • London • New York</span>
              </div>
              <div className="pt-2 text-[10px] text-[#9CA3AF]/60">
                JSON-LD LocalBusiness Schema Verified
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#9CA3AF]/60 gap-4">
          <div>
            © {new Date().getFullYear()} VANGUARD DIGITAL ARCHITECTURE GROUP. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security & SLA</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
