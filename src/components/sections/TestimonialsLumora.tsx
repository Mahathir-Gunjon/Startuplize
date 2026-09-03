'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { StackedLines } from '@/components/ui/StackedLines';

export function TestimonialsLumora() {
  const reviews = [
    {
      name: 'Alexander Vance',
      role: 'Chief Executive Officer',
      company: 'Vance Capital Partners',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      metric: '+$4.1M Deal Flow',
      review:
        'ApexStudio is in a league of their own. They took our slow WordPress site and turned it into a sub-second headless platform that completely repositioned our firm in private equity.',
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Growth',
      company: 'Krypton AI Analytics',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      metric: '142% Inbound Demo Lift',
      review:
        'The Webflow cinema-motion system ApexStudio engineered for us won Awwwards SOTD on day one. Our inbound demo conversions doubled within eight weeks.',
    },
    {
      name: 'David Chen',
      role: 'Managing Director',
      company: 'Metropolitan Healthcare Group',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      metric: '#1 Local Map Pin (8 Clinics)',
      review:
        'We cut our Google Ads spend by 40% because our Google Local 3-Pack rankings took off. Our phones ring every single day with high-intent patient inquiries.',
    },
  ];

  return (
    <section className="py-28 sm:py-36 px-6 sm:px-12 bg-white select-none">
      <div className="max-w-[88rem] mx-auto space-y-16">
        
        {/* Header with Google Verified 5.0 Star badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-body-sm font-mono text-[#b15f2c] uppercase tracking-widest font-bold block mb-2">
              CLIENT VALIDATION
            </span>
            <h2 className="font-h2 text-[#111111] tracking-tight">
              <StackedLines
                trigger={true}
                delay={0.05}
                lines={['Endorsed by founders', 'and growth leaders.']}
              />
            </h2>
          </div>

          {/* Google 5-Star Card */}
          <div className="bg-[#f1f0ee] px-5 py-3 rounded-2xl border border-[#e6e5e2] flex items-center gap-3 shrink-0">
            <div className="flex text-[#b15f2c]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <div className="text-body-sm font-mono text-[#111111] font-bold">
              5.0 / 5.0 GOOGLE VERIFIED (140+ REVIEWS)
            </div>
          </div>
        </div>

        {/* 3-Column Asymmetric Cards on #f1f0ee Light Gray */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#f1f0ee] rounded-[2rem] p-8 sm:p-10 border border-[#e6e5e2] flex flex-col justify-between hover:border-[#b15f2c]/40 transition-all duration-300 shadow-xs"
            >
              <div className="space-y-6">
                {/* Quotation Glyph */}
                <div className="w-10 h-10 rounded-full bg-white border border-[#e6e5e2] flex items-center justify-center text-[#b15f2c] shadow-xs">
                  <Quote className="w-4 h-4 fill-current" />
                </div>

                {/* Review Copy in Manrope text-body (18px) */}
                <p className="text-body text-[#111111]/90 leading-relaxed font-body">
                  "{rev.review}"
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-8 border-t border-[#e6e5e2] flex items-center justify-between mt-8">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#e6e5e2]">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    {/* Name in Bricolage Grotesque 500 (font-h4 = 24px or 1.125rem) */}
                    <div className="font-heading font-medium text-lg text-[#111111]">
                      {rev.name}
                    </div>
                    <div className="text-body-sm text-[#8d8d8d] font-body">
                      {rev.role}, {rev.company}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-white border border-[#e6e5e2] text-body-sm font-mono font-bold text-[#b15f2c]">
                    {rev.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
