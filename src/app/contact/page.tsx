'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Clock, 
  Zap, 
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  ChevronDown, 
  Users, 
  Code2, 
  Cpu, 
  FileCheck2,
  CalendarCheck
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { FooterApex } from '@/components/layout/FooterApex';
import { PillButton } from '@/components/ui/PillButton';
import { ScrollBlurFade, ScrollSlideCard } from '@/components/ui/ScrollAnimations';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    // Cal.com inline embed initialization snippet
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api: any = function (...apiArgs: any[]) {
              p(api, apiArgs);
            };
            const namespace = args[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], args);
              p(cal, ['initNamespace', namespace]);
            } else {
              p(cal, args);
            }
            return;
          }
          p(cal, args);
        };
    })(window as any, 'https://app.cal.com/embed/embed.js', 'init');

    const Cal = (window as any).Cal;
    if (Cal) {
      Cal('init', 'website', { origin: 'https://app.cal.com' });
      Cal.config = Cal.config || {};
      Cal.config.forwardQueryParams = true;

      Cal.ns.website('inline', {
        elementOrSelector: '#my-cal-inline-website',
        config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
        calLink: 'mahthir-eklmy0/website',
      });

      Cal.ns.website('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    }
  }, []);

  const consultationSteps = [
    {
      step: '01',
      title: 'Pre-Call Architecture Diagnostics',
      desc: 'Before we join Google Meet, our senior team inspects your current website, PageSpeed performance, schema markup, and database bottlenecks so we arrive with actionable data.',
    },
    {
      step: '02',
      title: 'Live Technical Screen Share (15 Mins)',
      desc: 'We walk you through real diagnostics: why your site is losing mobile conversions, where plugin bloat is costing you search rank, and which CMS architecture suits your goals.',
    },
    {
      step: '03',
      title: 'Milestone Scope & Fixed Sprint Pricing (15 Mins)',
      desc: 'You receive an exact 2 to 4-week execution blueprint with fixed pricing, direct Slack access to developers, and guaranteed sub-second Core Web Vitals delivery.',
    },
  ];

  const bookingFaqs = [
    {
      q: 'What should I have prepared before our strategy call?',
      a: 'Just your current website URL and any reference sites or Figma designs you love. If you don’t have a website yet, simply bring your project goals. We handle all technical discovery.',
    },
    {
      q: 'Is this call a sales pitch or an engineering consultation?',
      a: 'Strictly technical. You speak directly with our senior developers and engineers — zero sales reps, zero pushy closes. Even if you don’t partner with us, you keep the entire audit.',
    },
    {
      q: 'Do you work on existing websites or only new custom builds?',
      a: 'Both. We execute complete performance revamps for existing slow WordPress and Webflow platforms, as well as greenfield custom builds engineered from scratch.',
    },
    {
      q: 'How fast can our project sprint start after the call?',
      a: 'Because we operate on a dedicated sprint model with senior developers only, client sprints typically launch within 3 to 5 business days after scope finalization.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f8] text-[#060612] flex flex-col justify-between selection:bg-[#ff6321] selection:text-white">
      
      {/* 1. Global Standard Startuplize Unified Morphing Navbar */}
      <Header />

      {/* 2. Main Strategic Consultation Body */}
      <main className="flex-1 w-full max-w-[88rem] mx-auto px-6 sm:px-12 pt-32 sm:pt-40 pb-20">
        
        {/* Page Hero Header */}
        <div className="max-w-4xl space-y-6 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-mono text-[#ff6321] font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6321] animate-pulse" />
            <span>DIRECT STRATEGY SPRINT // 1-ON-1 WITH SENIOR BUILDERS</span>
          </div>

          <h1 className="font-heading font-medium text-4xl sm:text-6xl lg:text-7xl text-[#060612] tracking-tight leading-[1.08]">
            Let&apos;s engineer your next digital platform.
          </h1>

          <p className="text-lg sm:text-xl text-[#69686e] font-body leading-relaxed max-w-3xl">
            Book a 30-minute high-impact consultation directly with our senior development team. We diagnose your bottlenecks, recommend the right stack, and give you an exact fixed-scope roadmap.
          </p>

          {/* Value Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e7e2dd] text-xs sm:text-sm font-mono text-[#060612] shadow-xs">
              <Clock className="w-4 h-4 text-[#ff6321]" />
              <span>30-Min Live Technical Screen Share</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e7e2dd] text-xs sm:text-sm font-mono text-[#060612] shadow-xs">
              <Zap className="w-4 h-4 text-[#ff6321]" />
              <span>100% Mobile Core Web Vitals Guarantee</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#e7e2dd] text-xs sm:text-sm font-mono text-[#060612] shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#ff6321]" />
              <span>Transparent Fixed Sprint Pricing</span>
            </div>
          </div>
        </div>

        {/* 3. Grid: Left Strategy Column & Right Calendar Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: What to Expect & Engineering Briefing (5 Cols) */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Consultation Blueprint Card */}
            <div className="bg-white rounded-3xl border border-[#e7e2dd] p-7 sm:p-9 shadow-lg space-y-8">
              <div className="space-y-2 border-b border-[#e7e2dd] pb-6">
                <span className="text-xs font-mono text-[#ff6321] uppercase tracking-wider font-bold block">
                  • WHAT WE COVER ON THIS CALL
                </span>
                <h3 style={{ color: '#060612' }} className="font-heading font-semibold text-2xl">
                  The 30-Minute Sprint Diagnostic Protocol
                </h3>
              </div>

              <div className="space-y-6">
                {consultationSteps.map((step) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#f5f4f3] border border-[#e7e2dd] flex items-center justify-center font-mono font-bold text-sm text-[#ff6321] shrink-0 mt-1 shadow-xs">
                      {step.step}
                    </div>
                    <div>
                      <h4 style={{ color: '#060612' }} className="font-heading font-semibold text-base">
                        {step.title}
                      </h4>
                      <p style={{ color: '#55545a' }} className="text-xs sm:text-sm font-body mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Senior Talent Guarantee Card */}
            <div className="bg-[#060612] text-white rounded-3xl p-7 sm:p-9 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/15 shrink-0">
                  <Cpu className="w-6 h-6 text-[#ff6321]" />
                </div>
                <div>
                  <h4 className="font-heading font-medium text-lg text-white">
                    Direct Senior Engineering
                  </h4>
                  <p className="text-xs font-mono text-white/60">
                    ZERO JUNIORS // ZERO OUTSOURCING
                  </p>
                </div>
              </div>

              <p className="text-sm font-body text-[#a19fa8] leading-relaxed">
                When you partner with Startuplize, your platform is built and architected exclusively by senior developers. No middle-tier account managers buffering communication.
              </p>

              <div className="pt-2 flex items-center gap-6 border-t border-white/10 text-xs font-mono text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6321]" />
                  <span>Direct Slack Channel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6321]" />
                  <span>2-4 Week Delivery</span>
                </div>
              </div>
            </div>

            {/* Pre-Booking FAQs */}
            <div className="bg-white rounded-3xl border border-[#e7e2dd] p-7 sm:p-9 shadow-lg space-y-6">
              <div className="border-b border-[#e7e2dd] pb-5">
                <span className="text-xs font-mono text-[#ff6321] uppercase tracking-wider font-bold block mb-1">
                  • COMMON QUESTIONS
                </span>
                <h3 style={{ color: '#060612' }} className="font-heading font-semibold text-xl">
                  Before You Schedule
                </h3>
              </div>

              <div className="space-y-4">
                {bookingFaqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className="border border-[#e7e2dd] rounded-2xl p-4 cursor-pointer hover:border-[#ff6321]/40 transition-colors"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h4 style={{ color: '#060612' }} className="font-heading font-semibold text-sm">
                        {faq.q}
                      </h4>
                      <ChevronDown className={`w-4 h-4 text-[#69686e] shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-[#ff6321]' : ''}`} />
                    </div>
                    {openFaq === idx && (
                      <p style={{ color: '#55545a' }} className="text-xs sm:text-sm font-body mt-2.5 pt-2.5 border-t border-[#e7e2dd]/60 leading-relaxed">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Cal.com Live Interactive Embed (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Calendar Embed Container Card */}
            <div className="bg-white rounded-3xl border border-[#e7e2dd] shadow-2xl p-4 sm:p-8 overflow-hidden">
              
              {/* Header inside calendar card */}
              <div className="flex items-center justify-between pb-6 mb-4 border-b border-[#e7e2dd]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ff6321]/10 flex items-center justify-center text-[#ff6321] shrink-0">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-[#060612]">
                      Select Date & Time
                    </h3>
                    <p className="text-xs font-body text-[#69686e]">
                      Automated Google Meet link generated instantly upon booking
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#22c55e]/10 text-[#22c55e] text-xs font-mono font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                  Live Calendar Active
                </span>
              </div>

              {/* The exact Cal inline embed container */}
              <div
                id="my-cal-inline-website"
                className="w-full min-h-[680px] sm:min-h-[720px] overflow-auto rounded-2xl"
              />
            </div>

            {/* Alternative Direct Channels (For users who want to message immediately) */}
            <div className="bg-white rounded-3xl border border-[#e7e2dd] p-6 sm:p-8 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#e7e2dd]">
                <div>
                  <span className="text-xs font-mono text-[#ff6321] uppercase tracking-wider font-bold block mb-0.5">
                    • PREFER INSTANT CHAT?
                  </span>
                  <h4 className="font-heading font-semibold text-lg text-[#060612]">
                    Connect with us directly on your favorite app
                  </h4>
                </div>
                <span className="text-xs font-mono text-[#69686e]">
                  Avg Response: &lt; 15 mins
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-5">
                <a
                  href="https://wa.me/8801570211287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl border border-[#e7e2dd] bg-[#faf9f8] hover:bg-white hover:border-[#25D366] hover:shadow-md transition-all group flex flex-col justify-between h-24"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold text-xs sm:text-sm text-[#060612] group-hover:text-[#25D366] transition-colors">
                      WhatsApp
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#69686e] group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="text-[11px] font-mono text-[#69686e]">01570211287</span>
                </a>

                <a
                  href="https://www.instagram.com/startuplize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl border border-[#e7e2dd] bg-[#faf9f8] hover:bg-white hover:border-[#E4405F] hover:shadow-md transition-all group flex flex-col justify-between h-24"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold text-xs sm:text-sm text-[#060612] group-hover:text-[#E4405F] transition-colors">
                      Instagram
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#69686e] group-hover:text-[#E4405F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="text-[11px] font-mono text-[#69686e]">@startuplize</span>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61558810646131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl border border-[#e7e2dd] bg-[#faf9f8] hover:bg-white hover:border-[#0084FF] hover:shadow-md transition-all group flex flex-col justify-between h-24"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold text-xs sm:text-sm text-[#060612] group-hover:text-[#0084FF] transition-colors">
                      Messenger
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#69686e] group-hover:text-[#0084FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="text-[11px] font-mono text-[#69686e]">startuplize</span>
                </a>

                <a
                  href="https://www.linkedin.com/company/startuplize/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl border border-[#e7e2dd] bg-[#faf9f8] hover:bg-white hover:border-[#0A66C2] hover:shadow-md transition-all group flex flex-col justify-between h-24"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold text-xs sm:text-sm text-[#060612] group-hover:text-[#0A66C2] transition-colors">
                      LinkedIn
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#69686e] group-hover:text-[#0A66C2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <span className="text-[11px] font-mono text-[#69686e]">company</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </main>

      {/* 4. Global Full-Fidelity Footer */}
      <FooterApex onOpenBooking={() => {}} />

    </div>
  );
}
