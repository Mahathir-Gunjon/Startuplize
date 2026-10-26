'use client';

import React from 'react';
import { Check, CheckCircle2, ShieldCheck, Wrench, ArrowRight } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';
import { ScrollBlurWords, ScrollSlideCard, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

interface MaintenanceCtaSectionProps {
  onOpenBooking?: (service?: string) => void;
}

export function MaintenanceCtaSection({ onOpenBooking }: MaintenanceCtaSectionProps = {}) {
  return (
    <section
      id="maintenance"
      className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-white select-none border-b border-[#e7e2dd] relative z-10"
    >
      <div className="max-w-[84rem] mx-auto space-y-10 sm:space-y-14 lg:space-y-16">
        
        {/* Section Header with Word-by-Word Blur Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-[#e7e2dd]">
          <div className="space-y-2 sm:space-y-3 max-w-2xl">
            <ScrollBlurFade>
              <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest font-semibold block whitespace-nowrap">
                • POST-LAUNCH & SUPPORT
              </span>
            </ScrollBlurFade>

            {/* Main Headline with ScrollBlurWords */}
            <ScrollBlurWords
              className="font-heading font-medium text-[2rem] sm:text-4xl lg:text-5xl text-[#060612] tracking-tight leading-[1.18] sm:leading-tight"
              segments={[
                'Ongoing Care for',
                { text: 'High-Performance', isCoral: true, isItalic: true },
                'Platforms.',
              ]}
            />
          </div>

          <ScrollBlurFade delay={0.2}>
            <p className="text-body-sm text-[#52525b] font-body max-w-md">
              Whether we built your site from day one or you need dedicated support for your existing platform, we keep your digital storefront fast, secure, and error-free.
            </p>
          </ScrollBlurFade>
        </div>

        {/* 2 Maintenance Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch max-w-5xl mx-auto">
          
          {/* Card A: Webflow & WordPress Builds */}
          <ScrollSlideCard
            delay={0.1}
            yOffset={24}
            className="bg-[#faf9f8] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#e7e2dd] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="space-y-6">
              
              {/* Top Row: Eyebrow Badge & Icon */}
              <div className="flex items-center justify-between gap-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#fff4ee] text-[#ff6321] border border-[#ff6321]/20 inline-flex items-center gap-1.5 whitespace-nowrap">
                  INCLUDED WITH EVERY BUILD
                </span>
                <div className="w-9 h-9 rounded-full bg-white border border-[#e7e2dd] flex items-center justify-center text-[#ff6321] shrink-0 shadow-2xs">
                  <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
                </div>
              </div>

              {/* Headline & Body */}
              <div>
                <div
                  role="heading"
                  aria-level={3}
                  className="font-heading font-semibold text-2xl sm:text-3xl text-[#060612] tracking-tight"
                >
                  30 Days Post-Launch Care
                </div>
                <p className="text-sm sm:text-base text-[#52525b] font-body leading-relaxed mt-3">
                  30 days of free troubleshooting, CMS adjustments, and mobile responsiveness checks. You receive full Webflow workspace transfer or WordPress admin ownership.
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-3 pt-4 border-t border-[#e7e2dd]/60">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white border border-[#e7e2dd] flex items-center justify-center shrink-0 text-[#ff6321]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm text-[#060612] font-medium font-body">
                    Complete Webflow workspace or WordPress admin transfer
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white border border-[#e7e2dd] flex items-center justify-center shrink-0 text-[#ff6321]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm text-[#060612] font-medium font-body">
                    30 days of priority hotfixes & responsive layout checks
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white border border-[#e7e2dd] flex items-center justify-center shrink-0 text-[#ff6321]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm text-[#060612] font-medium font-body">
                    Zero lock-in, zero ongoing retainers required
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Badge: 100% Admin Handover ($0) */}
            <div className="mt-8 pt-6 border-t border-[#e7e2dd] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs sm:text-sm font-bold shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2.5]" />
                <span>✓ 100% Admin Handover ($0)</span>
              </div>
              <span className="text-xs font-mono text-[#a1a1aa] uppercase tracking-wider">
                Built-in guarantee
              </span>
            </div>
          </ScrollSlideCard>

          {/* Card B: Existing Websites */}
          <ScrollSlideCard
            delay={0.25}
            yOffset={24}
            className="bg-[#060612] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-[#ff6321]/15 blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              
              {/* Top Row: Eyebrow Badge & Price Pill */}
              <div className="flex items-center justify-between gap-4">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-[#ff6321]/20 text-[#ff7e47] border border-[#ff6321]/30 inline-flex items-center gap-1.5 whitespace-nowrap">
                  14-DAY RISK-FREE TRIAL
                </span>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight flex items-baseline gap-1">
                  $50<span className="text-xs font-mono text-zinc-400 font-normal">/mo</span>
                </div>
              </div>

              {/* Headline & Body */}
              <div>
                <div
                  role="heading"
                  aria-level={3}
                  className="font-heading font-semibold text-2xl sm:text-3xl text-white tracking-tight"
                >
                  Hands-On Maintenance ($50/mo)
                </div>
                <p className="text-sm sm:text-base text-zinc-300 font-body leading-relaxed mt-3">
                  Test our plugin updates, CMS maintenance, cloud backups, and speed fixes free for 14 days. If it saves you time, keep it running for a flat $50/month per site.
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#ff7e47]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm text-zinc-200 font-medium font-body">
                    Weekly plugin, security, & theme core patching
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#ff7e47]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm text-zinc-200 font-medium font-body">
                    Automated off-site cloud backups & instant restore
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#ff7e47]">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm text-zinc-200 font-medium font-body">
                    Mobile Core Web Vitals speed monitoring & fixes
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Button & Subtext */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-3 relative z-10">
              <PillButton
                variant="coral"
                size="lg"
                href="/contact"
                onClick={() => onOpenBooking?.('maintenance')}
                showArrow={true}
                className="w-full justify-center shadow-lg shadow-orange-500/25 hover:scale-[1.02]"
              >
                Start 14-Day Free Trial
              </PillButton>
              <div className="text-center">
                <span className="text-xs font-mono text-zinc-400">
                  Cancel anytime • No credit card required upfront
                </span>
              </div>
            </div>
          </ScrollSlideCard>

        </div>

      </div>
    </section>
  );
}
