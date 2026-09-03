'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Shield, Zap, Clock, MessageSquare } from 'lucide-react';
import { FooterApex } from '@/components/layout/FooterApex';

export default function ContactPage() {
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

  return (
    <div className="min-h-screen bg-[#faf9f8] text-[#060612] flex flex-col justify-between selection:bg-[#ff6321] selection:text-white">
      
      {/* Top Navbar */}
      <nav className="w-full max-w-[90rem] mx-auto px-6 sm:px-12 py-6 flex items-center justify-between border-b border-[#e7e2dd]">
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/startuplize-logo.png"
            alt="Startuplize Logo"
            className="h-8 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
          />
          <span className="font-heading font-bold text-xl tracking-tight text-[#060612]">
            startuplize<span className="text-[#ff6321]">.</span>
          </span>
        </Link>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e7e2dd] bg-white hover:bg-[#f5f4f3] text-xs sm:text-sm font-medium text-[#060612] hover:text-[#ff6321] transition-all shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </nav>

      {/* Hero Header */}
      <main className="flex-1 w-full max-w-[84rem] mx-auto px-6 sm:px-12 py-12 sm:py-16">
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-mono text-[#ff6321] font-semibold tracking-wider uppercase">
            <span>•</span>
            <span>DIRECT STRATEGY CONSULTATION</span>
          </div>

          <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#060612] tracking-tight leading-[1.1]">
            Book your 1-on-1 engineering sprint call.
          </h1>

          <p className="text-base sm:text-lg text-[#69686e] font-body leading-relaxed max-w-2xl">
            Select a convenient time slot below. You will speak directly with our senior development engineers — no account-manager bureaucracy, no sales fluff.
          </p>

          {/* Value Pills */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#e7e2dd] text-xs font-mono text-[#060612] shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#ff6321]" />
              <span>30-Min Diagnostic</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#e7e2dd] text-xs font-mono text-[#060612] shadow-xs">
              <Zap className="w-3.5 h-3.5 text-[#ff6321]" />
              <span>Live Architecture Audit</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#e7e2dd] text-xs font-mono text-[#060612] shadow-xs">
              <Shield className="w-3.5 h-3.5 text-[#ff6321]" />
              <span>Transparent Pricing & Scope</span>
            </div>
          </div>
        </div>

        {/* Cal.com Embed Card */}
        <div className="w-full bg-white rounded-3xl border border-[#e7e2dd] shadow-xl p-4 sm:p-8 mb-16 overflow-hidden">
          <div
            id="my-cal-inline-website"
            className="w-full min-h-[680px] sm:min-h-[720px] overflow-auto"
          />
        </div>

        {/* Alternative Direct Channels Grid */}
        <div className="bg-white rounded-3xl border border-[#e7e2dd] p-6 sm:p-10 mb-16 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#e7e2dd]">
            <div>
              <span className="text-xs font-mono text-[#ff6321] uppercase tracking-wider font-bold block mb-1">
                • PREFER INSTANT MESSAGING?
              </span>
              <h3 className="font-heading font-semibold text-2xl text-[#060612]">
                Reach out directly on your favorite platform
              </h3>
            </div>
            <span className="text-xs font-mono text-[#69686e]">
              Average response time: &lt; 15 minutes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <a
              href="https://wa.me/8801570211287"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-[#e7e2dd] bg-[#faf9f8] hover:bg-white hover:border-[#25D366] hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div>
                <span className="font-heading font-semibold text-sm text-[#060612] group-hover:text-[#25D366] transition-colors block">
                  WhatsApp
                </span>
                <span className="text-xs font-body text-[#69686e]">01570211287</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#69686e] group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.instagram.com/startuplize"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-[#e7e2dd] bg-[#faf9f8] hover:bg-white hover:border-[#E4405F] hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div>
                <span className="font-heading font-semibold text-sm text-[#060612] group-hover:text-[#E4405F] transition-colors block">
                  Instagram
                </span>
                <span className="text-xs font-body text-[#69686e]">@startuplize</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#69686e] group-hover:text-[#E4405F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61558810646131"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-[#e7e2dd] bg-[#faf9f8] hover:bg-white hover:border-[#0084FF] hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div>
                <span className="font-heading font-semibold text-sm text-[#060612] group-hover:text-[#0084FF] transition-colors block">
                  Messenger / FB
                </span>
                <span className="text-xs font-body text-[#69686e]">startuplize</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#69686e] group-hover:text-[#0084FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.linkedin.com/company/startuplize/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl border border-[#e7e2dd] bg-[#faf9f8] hover:bg-white hover:border-[#0A66C2] hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div>
                <span className="font-heading font-semibold text-sm text-[#060612] group-hover:text-[#0A66C2] transition-colors block">
                  LinkedIn
                </span>
                <span className="text-xs font-body text-[#69686e]">company/startuplize</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#69686e] group-hover:text-[#0A66C2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <FooterApex onOpenBooking={() => {}} />
    </div>
  );
}
