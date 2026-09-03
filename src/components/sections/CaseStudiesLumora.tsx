'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, TrendingUp, Zap, MapPin, ArrowRight } from 'lucide-react';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { PillButton } from '@/components/ui/PillButton';
import { ScrollBlurWords, ScrollSlideCard, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

interface CaseStudiesLumoraProps {
  onOpenBooking: (service?: string) => void;
}

export function CaseStudiesLumora({ onOpenBooking }: CaseStudiesLumoraProps) {
  const caseStudies = [
    {
      id: 'aegis',
      client: 'Aegis Horology UK',
      industry: 'Luxury Horology & High-Ticket Retail',
      challenge:
        'A legacy WooCommerce installation bogged down with 48 plugins, uncompressed imagery, and database locking during sales. Mobile LCP lagged at 4.8 seconds, producing an alarming 68% checkout abandonment rate.',
      solution:
        'Re-architected the store with a clean custom WordPress & WooCommerce build, purging 34 conflicting plugins, indexing database tables, and implementing streamlined checkout with 1-click Apple Pay.',
      verifiedMetrics: [
        { label: 'Mobile LCP Speed', value: '0.62s (100/100 Green)', note: 'From 4.8s failure' },
        { label: 'Organic GA4 Traffic', value: '+340% Sessions', note: 'Documented in GSC' },
        { label: 'Direct Incremental Sales', value: '+$3.2M Revenue', note: 'First 120 days post-launch' },
      ],
      techStack: ['Custom WordPress Theme', 'Fast WooCommerce', 'Redis Cache', 'Stripe Elements'],
      beforeImg: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      afterImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'apex',
      client: 'Apex Multi-Location Healthcare',
      industry: 'Regional Healthcare & Dental Group (6 Clinics)',
      challenge:
        'Fragmented Google Business Profiles with 2 suspended listings, inconsistent NAP citations across directories, zero automated review pipelines, and an outdated desktop layout that failed mobile emergency patients.',
      solution:
        'Successfully reinstated all suspended profiles with ironclad Google appeals. Deployed automated post-appointment SMS review sequences and localized service area landing pages for 45 zip codes.',
      verifiedMetrics: [
        { label: 'Google Map Pack', value: '+340% Map Views', note: '15-mile verified radius' },
        { label: 'Direct Phone Leads', value: '380+ Inbound/mo', note: 'Verified via CallRail AI' },
        { label: '5-Star Google Reviews', value: '620+ Verified', note: '4.9★ Aggregate Rating' },
      ],
      techStack: ['Google Business Profile API', 'CallRail AI', 'Twilio Review Funnel', 'Local Schema Mesh'],
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
      afterImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <section id="proof" className="py-28 sm:py-36 px-6 sm:px-12 bg-[#faf9f8] select-none border-t border-[#e7e2dd]">
      <div className="max-w-[88rem] mx-auto space-y-24">
        
        {/* Section Header with Word-by-Word Blur Reveal */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <ScrollBlurFade>
              <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest font-bold block mb-2">
                HARD PROOF // DEEP AUDITS
              </span>
            </ScrollBlurFade>
            <ScrollBlurWords
              className="font-heading font-medium text-3xl sm:text-5xl text-[#060612] tracking-tight"
              segments={['Measured in revenue, not aesthetics alone.']}
            />
          </div>
          <ScrollBlurFade delay={0.2}>
            <p className="text-body text-[#69686e] max-w-md font-body">
              Compare real client systems before and after our engineering transformation. Drag the interactive sliders below.
            </p>
          </ScrollBlurFade>
        </div>

        {/* 2 Deep Dive Studies with Slide Reveal & Staggered Delay */}
        <div className="space-y-20">
          {caseStudies.map((study, idx) => (
            <ScrollSlideCard
              key={study.id}
              delay={idx * 0.2 + 0.15}
              className="bg-white rounded-[2rem] border border-[#e7e2dd] p-6 sm:p-10 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Column: Challenge, Solution, Metrics */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="text-body-sm font-mono text-[#b15f2c] font-bold uppercase tracking-wider">
                    STUDY 0{idx + 1} // {study.industry}
                  </div>
                  {/* H3 in Bricolage Grotesque 500 (font-h3 = 32px) */}
                  <h3 className="font-h3 text-[#111111] mt-1">
                    {study.client}
                  </h3>
                </div>

                {/* Challenge Card */}
                <div className="p-4 rounded-xl bg-[#f1f0ee] border border-[#e6e5e2] space-y-1.5">
                  <div className="flex items-center gap-2 text-body-sm font-mono font-bold text-red-600 uppercase">
                    <AlertCircle className="w-3.5 h-3.5" />
                    INITIAL BOTTLENECK
                  </div>
                  <p className="text-body-sm text-[#111111]/80 leading-relaxed font-body">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution Card */}
                <div className="p-4 rounded-xl bg-white border border-[#e6e5e2] space-y-1.5 shadow-xs">
                  <div className="flex items-center gap-2 text-body-sm font-mono font-bold text-[#b15f2c] uppercase">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    ENGINEERING EXECUTION
                  </div>
                  <p className="text-body-sm text-[#111111]/80 leading-relaxed font-body">
                    {study.solution}
                  </p>
                </div>

                {/* 3 Verified Metric Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {study.verifiedMetrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-3.5 rounded-xl bg-[#f1f0ee] border border-[#e6e5e2] space-y-1"
                    >
                      <div className="text-body-sm font-mono text-[#8d8d8d]">{m.label}</div>
                      <div className="font-heading font-medium text-lg sm:text-xl text-[#111111]">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-mono text-[#b15f2c] font-medium">
                        {m.note}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white border border-[#e6e5e2] text-body-sm font-mono text-[#111111]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <PillButton
                    variant="dark"
                    size="md"
                    onClick={() => onOpenBooking(study.client)}
                  >
                    Request similar audit
                  </PillButton>
                </div>
              </div>

              {/* Right Column: Interactive Before/After Image Comparison Slider */}
              <div className="lg:col-span-6 space-y-3">
                <div className="flex items-center justify-between text-body-sm font-mono text-[#8d8d8d]">
                  <span>INTERACTIVE SPLIT COMPARISON</span>
                  <span className="text-[#b15f2c] font-bold">DRAG SLIDER ◀ ▶</span>
                </div>

                <div className="rounded-2xl overflow-hidden border border-[#e6e5e2] shadow-sm">
                  <BeforeAfterSlider
                    beforeImage={study.beforeImg}
                    afterImage={study.afterImg}
                    beforeLabel="BEFORE: LEGACY BLOAT"
                    afterLabel="AFTER: APEX HIGH-SPEED ENGINE"
                  />
                </div>
              </div>
            </ScrollSlideCard>
          ))}
        </div>

      </div>
    </section>
  );
}
