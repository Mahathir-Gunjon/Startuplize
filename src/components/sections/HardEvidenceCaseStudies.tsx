'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Gauge,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  ShieldCheck,
  Quote,
} from 'lucide-react';
import { caseStudiesData } from '@/data/caseStudies';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface HardEvidenceCaseStudiesProps {
  onOpenBooking: (service?: string) => void;
}

export function HardEvidenceCaseStudies({ onOpenBooking }: HardEvidenceCaseStudiesProps) {
  return (
    <section id="case-studies" className="py-24 sm:py-32 px-4 sm:px-8 bg-[#08090C] relative">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#E06927]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E06927] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#10B981] radar-ping inline-block" />
              DEEP-DIVE AUDITS // HARD VERIFIED ROI
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mt-3">
              Hard-Evidence Case Studies
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9CA3AF] max-w-md">
            Drag the Before/After sliders to see how our custom engineering and local search systems eliminate bloat and multiply revenue.
          </p>
        </div>

        {/* Case Studies Deep Dive List */}
        <div className="space-y-16 sm:space-y-24">
          {caseStudiesData.map((study, idx) => (
            <div
              key={study.id}
              className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Header Telemetry Row */}
              <div className="flex flex-wrap items-center justify-between pb-8 mb-8 border-b border-white/10 gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#10B981] tracking-wider uppercase font-bold">
                    CASE STUDY 0{idx + 1} // {study.industry}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-display font-black text-white">
                    {study.client}
                  </h3>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-[#9CA3AF]">
                  <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    TIMELINE: {study.timeline}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] font-bold">
                    VERIFIED POSITIVE ROI
                  </span>
                </div>
              </div>

              {/* Grid: Left Before/After Slider, Right Engineering Blueprint */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left: Interactive Slider */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF]">
                    <span>DRAG SLIDER TO COMPARE REAL FIELD PERFORMANCE</span>
                    <span className="text-[#E06927] font-bold">INTERACTIVE</span>
                  </div>

                  <BeforeAfterSlider
                    beforeImage={study.beforeImage}
                    afterImage={study.afterImage}
                    beforeStats={{
                      lcp: study.beforeStats.lcp,
                      traffic: study.beforeStats.traffic,
                      conversion: study.beforeStats.conversion,
                    }}
                    afterStats={{
                      lcp: study.afterStats.lcp,
                      traffic: study.afterStats.traffic,
                      conversion: study.afterStats.conversion,
                    }}
                  />
                </div>

                {/* Right: Challenge, Execution & Verified Metrics */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* The Problem / Challenge */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-red-500/10 border border-red-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase">
                      <AlertTriangle className="w-4 h-4" />
                      THE INITIAL ARCHITECTURAL BOTTLENECK
                    </div>
                    <p className="text-xs sm:text-sm text-[#F3F4F6] leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* The Engineering Solution */}
                  <div className="space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#10B981] font-bold">
                      VANGUARD ENGINEERING ROADMAP DEPLOYED
                    </div>
                    <ul className="space-y-2">
                      {study.engineeringExecution.map((step, sIdx) => (
                        <li
                          key={sIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9CA3AF]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3 Verified Impact Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {study.verifiedImpact.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1"
                      >
                        <div className="text-lg sm:text-xl font-display font-extrabold text-[#E06927]">
                          {item.metric}
                        </div>
                        <p className="text-[11px] text-[#9CA3AF] leading-tight">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Client Quote Card */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 relative">
                    <Quote className="w-6 h-6 text-[#E06927]/30 absolute top-4 right-4 pointer-events-none" />
                    <p className="text-xs sm:text-sm italic text-[#F3F4F6] leading-relaxed">
                      &ldquo;{study.quote.text}&rdquo;
                    </p>
                    <div className="text-xs font-mono text-[#9CA3AF]">
                      <strong className="text-white not-italic">{study.quote.author}</strong> — {study.quote.role}
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="pt-2">
                    <MagneticButton
                      size="md"
                      variant="primary"
                      showRadar={true}
                      onClick={() => onOpenBooking(study.client)}
                    >
                      REQUEST SIMILAR ROI AUDIT
                    </MagneticButton>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
