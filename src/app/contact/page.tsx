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
  CalendarCheck,
  Search,
  MonitorPlay,
  Rocket,
  MessageCircle,
  HelpCircle,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { FooterApex } from '@/components/layout/FooterApex';

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

  const diagnosticSteps = [
    {
      step: '01',
      title: 'Pre-Call Architecture Diagnostics',
      desc: 'Before we join Google Meet, our senior engineering team runs comprehensive Lighthouse audits, evaluates server response times, checks schema, and tests database queries.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Live Technical Screen Share (15 Mins)',
      desc: 'We walk you through real data: why your site loses mobile visitors, where plugin bloat is harming search rank, and whether custom WordPress ACF or Webflow CMS fits your goals.',
      icon: MonitorPlay,
    },
    {
      step: '03',
      title: 'Fixed-Scope Sprint Roadmap (15 Mins)',
      desc: 'You receive an exact 2 to 4-week execution blueprint with guaranteed deliverables, direct Slack communication with builders, and flat transparent sprint pricing.',
      icon: Rocket,
    },
  ];

  const socialChannels = [
    {
      name: 'WhatsApp',
      handle: '01570211287',
      action: 'Instant Chat',
      href: 'https://wa.me/8801570211287',
      hoverColor: 'hover:border-[#25D366] text-[#25D366]',
      icon: (
        <svg className="w-6 h-6 fill-current text-[#25D366]" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.077-1.748-.387-.962-.401-1.631-1.341-1.713-1.452-.082-.111-.667-.887-.667-1.691 0-.804.421-1.2.571-1.36.15-.161.328-.201.438-.201.11 0 .22.001.316.006.102.005.239-.039.373.284.144.348.491 1.199.534 1.286.044.088.073.191.015.306-.059.115-.088.187-.175.29-.088.102-.185.228-.264.306-.088.088-.18.184-.077.361.103.177.457.753.981 1.22.674.6 1.242.787 1.419.875.177.088.281.077.385-.044.103-.121.443-.516.562-.693.118-.177.236-.148.398-.088.162.059 1.026.484 1.203.573.177.088.295.133.339.207.044.074.044.428-.1.833zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.436 5.176L2 22l4.981-1.393A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.156c-1.625 0-3.136-.505-4.394-1.369l-.315-.213-2.956.827.844-2.885-.236-.347A8.136 8.136 0 013.844 12c0-4.505 3.651-8.156 8.156-8.156 4.504 0 8.156 3.651 8.156 8.156 0 4.505-3.652 8.156-8.156 8.156z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      handle: '@startuplize',
      action: 'Direct Message',
      href: 'https://www.instagram.com/startuplize',
      hoverColor: 'hover:border-[#E4405F] text-[#E4405F]',
      icon: (
        <svg className="w-6 h-6 fill-current text-[#E4405F]" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Messenger',
      handle: 'Startuplize on Facebook',
      action: 'Send Message',
      href: 'https://www.facebook.com/profile.php?id=61558810646131',
      hoverColor: 'hover:border-[#0084FF] text-[#0084FF]',
      icon: (
        <svg className="w-6 h-6 fill-current text-[#0084FF]" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.51 3.734 7.158v3.584l3.435-1.887c.883.245 1.815.378 2.781.378 5.523 0 10-4.145 10-9.233C22 6.145 17.523 2 12 2zm1.07 12.441l-2.617-2.793-5.105 2.793 5.617-5.962 2.684 2.793 5.038-2.793-5.617 5.962z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      handle: 'company/startuplize',
      action: 'Connect',
      href: 'https://www.linkedin.com/company/startuplize/',
      hoverColor: 'hover:border-[#0A66C2] text-[#0A66C2]',
      icon: (
        <svg className="w-6 h-6 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75c-.97 0-1.76.78-1.76 1.75s.79 1.76 1.76 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
        </svg>
      ),
    },
  ];

  const bookingFaqs = [
    {
      q: 'What should I have prepared before our strategy call?',
      a: 'Just your current website URL and any reference sites or Figma designs you love. If you don’t have a website yet, simply bring your core project objectives. We handle all technical discovery.',
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
    {
      q: 'What technologies do you engineer with?',
      a: 'We specialize exclusively in custom ACF Pro WordPress themes, scalable Webflow CMS architectures, programmatic technical SEO, Google Map Local 3-Pack rank, and high-ROAS Meta ad creatives.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f8] text-[#060612] flex flex-col justify-between selection:bg-[#ff6321] selection:text-white">
      
      {/* 1. Global Standard Startuplize Unified Morphing Navbar */}
      <Header />

      {/* ========================================================================= */}
      {/* SECTION 1: Strategic Hero & Engineering Highlights (Clean & Editorial) */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[88rem] mx-auto px-6 sm:px-12 pt-36 sm:pt-48 pb-16 border-b border-[#e7e2dd]">
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-mono text-[#ff6321] font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6321] animate-pulse" />
            <span>DIRECT STRATEGY SPRINT // 1-ON-1 WITH SENIOR BUILDERS</span>
          </div>

          <h1 
            style={{ color: '#060612' }}
            className="font-heading font-medium text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08]"
          >
            Let&apos;s engineer your next digital platform.
          </h1>

          <p 
            style={{ color: '#55545a' }}
            className="text-lg sm:text-xl font-body leading-relaxed max-w-3xl"
          >
            Book a 30-minute high-impact consultation directly with our senior development team. We diagnose your bottlenecks, recommend the right stack, and map an exact fixed-scope sprint.
          </p>

          {/* 4 Clean Value Points with Icons (No heavy boxes) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#ff6321]/10 flex items-center justify-center text-[#ff6321] shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <h4 style={{ color: '#060612' }} className="font-heading font-semibold text-sm">
                  30-Min Diagnostic
                </h4>
                <p style={{ color: '#69686e' }} className="text-xs font-body mt-0.5">
                  Live technical screen share
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#ff6321]/10 flex items-center justify-center text-[#ff6321] shrink-0 mt-0.5">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 style={{ color: '#060612' }} className="font-heading font-semibold text-sm">
                  100% Core Web Vitals
                </h4>
                <p style={{ color: '#69686e' }} className="text-xs font-body mt-0.5">
                  Sub-second mobile speed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#ff6321]/10 flex items-center justify-center text-[#ff6321] shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 style={{ color: '#060612' }} className="font-heading font-semibold text-sm">
                  Fixed Sprint Scope
                </h4>
                <p style={{ color: '#69686e' }} className="text-xs font-body mt-0.5">
                  No hourly billing creep
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#ff6321]/10 flex items-center justify-center text-[#ff6321] shrink-0 mt-0.5">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h4 style={{ color: '#060612' }} className="font-heading font-semibold text-sm">
                  Direct Senior Talent
                </h4>
                <p style={{ color: '#69686e' }} className="text-xs font-body mt-0.5">
                  Zero junior hand-offs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: Cal.com Live Interactive Calendar (Clean & Open) */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[88rem] mx-auto px-6 sm:px-12 py-20 border-b border-[#e7e2dd]">
        <div className="max-w-3xl mb-10 space-y-3">
          <span className="text-xs font-mono text-[#ff6321] uppercase tracking-wider font-bold block">
            • SECTION 01 // CALENDAR APPOINTMENT
          </span>
          <h2 
            style={{ color: '#060612' }}
            className="font-heading font-medium text-3xl sm:text-5xl tracking-tight"
          >
            Select Date & Time.
          </h2>
          <p style={{ color: '#55545a' }} className="text-base sm:text-lg font-body">
            Choose a slot that works for you. Google Meet link is generated automatically upon booking confirmation.
          </p>
        </div>

        {/* Clean Cal.com Embed Container (No heavy shadows, no chunky borders) */}
        <div className="w-full bg-white rounded-3xl border border-[#e7e2dd] p-4 sm:p-8 overflow-hidden">
          <div
            id="my-cal-inline-website"
            className="w-full min-h-[680px] sm:min-h-[720px] overflow-auto"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: The 30-Minute Sprint Diagnostic Protocol */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[88rem] mx-auto px-6 sm:px-12 py-20 border-b border-[#e7e2dd]">
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-mono text-[#ff6321] uppercase tracking-wider font-bold block">
            • SECTION 02 // THE DIAGNOSTIC PROTOCOL
          </span>
          <h2 
            style={{ color: '#060612' }}
            className="font-heading font-medium text-3xl sm:text-5xl tracking-tight"
          >
            What happens on this call.
          </h2>
          <p style={{ color: '#55545a' }} className="text-base sm:text-lg font-body">
            Every minute is structured around tangible code audits, architecture decisions, and transparent pricing.
          </p>
        </div>

        {/* 3 Clean Horizontal Diagnostic Steps with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {diagnosticSteps.map((step) => {
            const IconComp = step.icon;
            return (
              <div key={step.step} className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-[#e7e2dd]">
                  <span className="font-mono font-bold text-lg text-[#ff6321]">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#f5f4f3] flex items-center justify-center text-[#060612]">
                    <IconComp className="w-5 h-5 text-[#ff6321]" />
                  </div>
                </div>

                <h3 
                  style={{ color: '#060612' }}
                  className="font-heading font-semibold text-xl sm:text-2xl"
                >
                  {step.title}
                </h3>

                <p 
                  style={{ color: '#55545a' }}
                  className="text-sm sm:text-base font-body leading-relaxed"
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: Direct Instant Messaging Channels (With Full Icons) */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[88rem] mx-auto px-6 sm:px-12 py-20 border-b border-[#e7e2dd]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#ff6321] uppercase tracking-wider font-bold block">
              • SECTION 03 // INSTANT CHANNELS
            </span>
            <h2 
              style={{ color: '#060612' }}
              className="font-heading font-medium text-3xl sm:text-5xl tracking-tight"
            >
              Prefer instant chat?
            </h2>
          </div>
          <p style={{ color: '#69686e' }} className="text-sm font-mono max-w-md">
            Reach our senior team directly on your preferred app. Average response time: &lt; 15 minutes.
          </p>
        </div>

        {/* 4 Channel Grid with Full Branded SVG Icons (Clean & Border-Light) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl border border-[#e7e2dd] bg-white transition-all group flex flex-col justify-between h-44 ${channel.hoverColor}`}
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#faf9f8] flex items-center justify-center">
                  {channel.icon}
                </div>
                <div className="w-8 h-8 rounded-full bg-[#faf9f8] group-hover:bg-[#ff6321] group-hover:text-white text-[#69686e] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              <div>
                <h4 
                  style={{ color: '#060612' }}
                  className="font-heading font-semibold text-lg"
                >
                  {channel.name}
                </h4>
                <p style={{ color: '#69686e' }} className="text-xs font-mono mt-1">
                  {channel.handle}
                </p>
                <span className="text-xs font-medium text-[#ff6321] inline-flex items-center gap-1 mt-2">
                  <span>{channel.action}</span>
                  <span>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: Pre-Booking FAQ Protocol (Clean Editorial Lines, No Heavy Box) */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[88rem] mx-auto px-6 sm:px-12 py-20">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-mono text-[#ff6321] uppercase tracking-wider font-bold block">
            • SECTION 04 // COMMON QUESTIONS
          </span>
          <h2 
            style={{ color: '#060612' }}
            className="font-heading font-medium text-3xl sm:text-5xl tracking-tight"
          >
            Before you schedule.
          </h2>
          <p style={{ color: '#55545a' }} className="text-base sm:text-lg font-body">
            Everything you need to know about our engineering consultations and sprint engagement.
          </p>
        </div>

        {/* Clean Editorial Accordion List (No box-in-box, clean hairlines) */}
        <div className="max-w-4xl divide-y divide-[#e7e2dd]">
          {bookingFaqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="py-6 cursor-pointer group"
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#f5f4f3] text-[#ff6321] flex items-center justify-center font-mono font-bold text-xs shrink-0 group-hover:bg-[#ff6321] group-hover:text-white transition-colors">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <h3 
                    style={{ color: '#060612' }}
                    className="font-heading font-semibold text-lg sm:text-xl group-hover:text-[#ff6321] transition-colors"
                  >
                    {faq.q}
                  </h3>
                </div>
                <ChevronDown className={`w-5 h-5 text-[#69686e] shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-[#ff6321]' : ''}`} />
              </div>

              {openFaq === idx && (
                <div className="pl-12 pt-4 pr-6">
                  <p 
                    style={{ color: '#55545a' }}
                    className="text-base font-body leading-relaxed"
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Global Full-Fidelity Footer */}
      <FooterApex onOpenBooking={() => {}} />

    </div>
  );
}
