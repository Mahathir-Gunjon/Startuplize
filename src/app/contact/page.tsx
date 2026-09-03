'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { 
  ArrowUpRight, 
  ChevronDown, 
  Code2, 
  Sparkles,
  Search,
  Users2,
  Calendar,
  MessageSquare
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { FooterApex } from '@/components/layout/FooterApex';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    // Cal.com inline embed initialization
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

  const capabilities = [
    {
      title: 'Custom Web Engineering',
      desc: 'Bespoke WordPress & Webflow platforms built with zero bloat and sub-second speed.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      tag: 'Web & CMS Architecture',
    },
    {
      title: 'Organic & Local Search',
      desc: 'Google Map 3-pack dominance and technical SEO designed to convert visitors into booked clients.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tag: 'Local 3-Pack & SEO',
    },
    {
      title: 'Direct Senior Collaboration',
      desc: 'Zero account managers or junior buffers. Work directly with the senior developers building your site.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      tag: 'Senior Talent Only',
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

  const quickFaqs = [
    {
      q: 'How long is the call?',
      a: 'As long as you need. There are no strict timers or rush — we take the time necessary to understand your project and goals.',
    },
    {
      q: 'What should I have prepared?',
      a: 'Just your vision, website URL, or project notes. We handle all technical discovery.',
    },
    {
      q: 'Can I message you instead of scheduling a call?',
      a: 'Yes! Reach out on WhatsApp or Instagram anytime for quick answers and quotes.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f8] text-[#060612] flex flex-col justify-between selection:bg-[#ff6321] selection:text-white">
      
      {/* 1. Global Startuplize Morphing Navbar */}
      <Header />

      {/* ========================================================================= */}
      {/* SECTION 1: Visual Hero — Flexible & Open (No Rigid Timers) */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[88rem] mx-auto px-6 sm:px-12 pt-36 sm:pt-48 pb-16 border-b border-[#e7e2dd]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-mono text-[#ff6321] font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6321] animate-pulse" />
              <span>DIRECT DISCOVERY SESSION // TAKE YOUR TIME</span>
            </div>

            <h1 
              style={{ color: '#060612' }}
              className="font-heading font-medium text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.08]"
            >
              Let&apos;s talk about your next big project.
            </h1>

            <p 
              style={{ color: '#55545a' }}
              className="text-lg sm:text-xl font-body leading-relaxed max-w-2xl"
            >
              Whether you have a fully formed brief or just an early concept, we are here to listen. No strict clocks, no pressure — speak directly with our senior team.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e7e2dd] text-xs sm:text-sm font-mono text-[#060612]">
                <Sparkles className="w-4 h-4 text-[#ff6321]" />
                <span>Flexible Session</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e7e2dd] text-xs sm:text-sm font-mono text-[#060612]">
                <Users2 className="w-4 h-4 text-[#ff6321]" />
                <span>Direct with Senior Builders</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Image Card */}
          <div className="lg:col-span-5 relative aspect-[16/11] rounded-3xl overflow-hidden bg-[#eeecea]">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
              alt="Startuplize Studio Workspace"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono flex items-center justify-between">
              <span>STARTUPLIZE LABS</span>
              <span className="text-[#ff7e47]">DIRECT COLLABORATION</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: Calendar Appointment (Cal.com Live Calendar) */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[88rem] mx-auto px-6 sm:px-12 py-20 border-b border-[#e7e2dd]">
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-mono text-[#ff6321] uppercase tracking-wider font-bold block">
            • SECTION 01 // CALENDAR
          </span>
          <h2 
            style={{ color: '#060612' }}
            className="font-heading font-medium text-3xl sm:text-5xl tracking-tight"
          >
            Pick a time that works for you.
          </h2>
          <p style={{ color: '#55545a' }} className="text-base sm:text-lg font-body">
            Choose a date and slot. We generate an automatic Google Meet link upon booking.
          </p>
        </div>

        {/* Clean Cal.com Embed Container */}
        <div className="w-full bg-white rounded-3xl border border-[#e7e2dd] p-4 sm:p-8 overflow-hidden">
          <div
            id="my-cal-inline-website"
            className="w-full min-h-[680px] sm:min-h-[720px] overflow-auto"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: Visual Showcase — How We Work (Image-First, Minimal Copy) */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[88rem] mx-auto px-6 sm:px-12 py-20 border-b border-[#e7e2dd]">
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-mono text-[#ff6321] uppercase tracking-wider font-bold block">
            • SECTION 02 // WHAT WE DELIVER
          </span>
          <h2 
            style={{ color: '#060612' }}
            className="font-heading font-medium text-3xl sm:text-5xl tracking-tight"
          >
            Built for growth. Engineered for speed.
          </h2>
        </div>

        {/* 3 Visual Image Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((item) => (
            <div key={item.title} className="space-y-4 group">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#eeecea]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-[#ff6321] uppercase tracking-wider font-semibold block">
                  {item.tag}
                </span>
                <h3 
                  style={{ color: '#060612' }}
                  className="font-heading font-semibold text-xl sm:text-2xl group-hover:text-[#ff6321] transition-colors"
                >
                  {item.title}
                </h3>
                <p style={{ color: '#55545a' }} className="text-sm font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: Direct Instant Messaging (Icons + Fast Response) */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[88rem] mx-auto px-6 sm:px-12 py-20 border-b border-[#e7e2dd]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#ff6321] uppercase tracking-wider font-bold block">
              • SECTION 03 // INSTANT CHAT
            </span>
            <h2 
              style={{ color: '#060612' }}
              className="font-heading font-medium text-3xl sm:text-5xl tracking-tight"
            >
              Prefer texting? We&apos;re online.
            </h2>
          </div>
          <p style={{ color: '#69686e' }} className="text-sm font-mono">
            Fastest reply via WhatsApp or Instagram.
          </p>
        </div>

        {/* 4 Branded Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl border border-[#e7e2dd] bg-white transition-all group flex flex-col justify-between h-40 ${channel.hoverColor}`}
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
                <p style={{ color: '#69686e' }} className="text-xs font-mono mt-0.5">
                  {channel.handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: Quick FAQ — Short & Clear */}
      {/* ========================================================================= */}
      <section className="w-full max-w-[88rem] mx-auto px-6 sm:px-12 py-20">
        <div className="max-w-3xl mb-10 space-y-2">
          <span className="text-xs font-mono text-[#ff6321] uppercase tracking-wider font-bold block">
            • SECTION 04 // QUICK ANSWERS
          </span>
          <h2 
            style={{ color: '#060612' }}
            className="font-heading font-medium text-3xl sm:text-5xl tracking-tight"
          >
            Quick answers.
          </h2>
        </div>

        {/* Minimal Accordion */}
        <div className="max-w-3xl divide-y divide-[#e7e2dd]">
          {quickFaqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="py-5 cursor-pointer group"
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 
                  style={{ color: '#060612' }}
                  className="font-heading font-semibold text-lg group-hover:text-[#ff6321] transition-colors"
                >
                  {faq.q}
                </h3>
                <ChevronDown className={`w-4 h-4 text-[#69686e] shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-[#ff6321]' : ''}`} />
              </div>

              {openFaq === idx && (
                <div className="pt-2 pr-6">
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

      {/* Footer */}
      <FooterApex onOpenBooking={() => {}} />

    </div>
  );
}
