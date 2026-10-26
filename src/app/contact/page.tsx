'use client';

import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { FooterApex } from '@/components/layout/FooterApex';

export default function ContactPage() {
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

  const socialChannels = [
    {
      name: 'WhatsApp',
      handle: '01570211287',
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
      href: 'https://www.linkedin.com/company/startuplize/',
      hoverColor: 'hover:border-[#0A66C2] text-[#0A66C2]',
      icon: (
        <svg className="w-6 h-6 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75c-.97 0-1.76.78-1.76 1.75s.79 1.76 1.76 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f8] text-[#060612] flex flex-col justify-between selection:bg-[#ff6321] selection:text-white">
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="w-full flex-1 pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-20">
        <div className="w-full max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading & Subheading Area */}
          <div className="text-center pb-8 sm:pb-10 max-w-3xl mx-auto space-y-3 sm:space-y-4">
            <h1
              className="font-heading font-medium text-[2.25rem] sm:text-[3rem] text-[#060612] tracking-tight leading-[1.15] text-center"
              style={{ fontSize: '3rem', lineHeight: 1.15, color: '#060612' }}
            >
              Book a Discovery Call<span className="text-[#ff6321]">.</span>
            </h1>
            <p
              className="text-base sm:text-lg text-[#060612] font-body max-w-2xl mx-auto leading-relaxed text-center font-normal block"
              style={{ color: '#060612', opacity: 1, display: 'block', visibility: 'visible' }}
            >
              Select a time on the calendar below. We will walk through your current website, analyze what your local search competitors are doing right, and determine the exact roadmap needed to turn your site into a reliable lead generator.
            </p>
          </div>

          {/* Cal.com Embed - Pure & Clean: NO padding, NO border, NO border-radius */}
          <div className="w-full">
            <div
              id="my-cal-inline-website"
              className="w-full min-h-[640px] sm:min-h-[700px] overflow-auto"
            />
          </div>

          {/* 4 Direct Contact Cards (Directly under calendar, NO heading, NO sub heading) */}
          <div className="pt-8 sm:pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {socialChannels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-5 sm:p-6 rounded-md border border-[#e7e2dd] bg-white transition-all group flex flex-col justify-between h-36 sm:h-40 active:scale-[0.98] ${channel.hoverColor}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-md bg-[#faf9f8] flex items-center justify-center">
                      {channel.icon}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#faf9f8] group-hover:bg-[#ff6321] group-hover:text-white text-[#52525b] flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  <div>
                    <h4
                      style={{ color: '#060612' }}
                      className="font-heading font-semibold text-base sm:text-lg"
                    >
                      {channel.name}
                    </h4>
                    <p className="text-sm font-mono mt-0.5 text-[#52525b]">
                      {channel.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <FooterApex onOpenBooking={() => {}} />
    </div>
  );
}
