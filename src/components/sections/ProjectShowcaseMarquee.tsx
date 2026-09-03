'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, CheckCircle, ShieldCheck } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function ProjectShowcaseMarquee() {
  const row1 = [...portfolioData, ...portfolioData];
  const row2 = [...portfolioData.slice().reverse(), ...portfolioData.slice().reverse()];

  return (
    <section className="py-20 bg-[#08090C] overflow-hidden relative select-none">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#E06927]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#10B981]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10 sm:mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E06927] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#10B981] radar-ping inline-block" />
            SHOWCASE STREAM // 60 FPS CONTINUOUS FEED
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-2">
            Selected Live Deployments
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-mono text-[#9CA3AF] max-w-sm">
          HOVER ANY PRODUCTION INSTANCE TO PAUSE TELEMETRY & VIEW CORE METRICS
        </p>
      </div>

      {/* Track 1: Moving Left */}
      <div className="relative w-full mb-6">
        <div className="animate-marquee-left flex gap-6">
          {row1.map((item, idx) => (
            <div
              key={`track1-${item.id}-${idx}`}
              className="w-[320px] sm:w-[420px] shrink-0 group relative rounded-2xl overflow-hidden glass-panel border border-white/10 transition-all duration-500 hover:scale-[1.04] hover:z-20 hover:border-[#E06927]/50 shadow-2xl"
            >
              {/* Image Frame */}
              <div className="relative h-[220px] sm:h-[260px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-black/30" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  {item.categoryLabel}
                </div>

                {/* Metric Overlay on Hover */}
                <div className="absolute inset-0 bg-[#08090C]/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#E06927]">VERIFIED OUTCOME</span>
                    <span className="p-1.5 rounded-full bg-white/10 text-white">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="space-y-2">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#9CA3AF]">{m.label}:</span>
                        <span className="text-[#10B981] font-bold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {item.techPills.map((tech) => (
                      <span key={tech} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#F3F4F6]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="p-4 bg-[#0F1117]/80 flex items-center justify-between border-t border-white/5">
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-[#E06927] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="text-[11px] text-[#9CA3AF]">{item.client}</div>
                </div>
                <div className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/15 px-2.5 py-1 rounded-full font-bold">
                  {item.metrics[0]?.value || '100/100'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Track 2: Moving Right */}
      <div className="relative w-full">
        <div className="animate-marquee-right flex gap-6">
          {row2.map((item, idx) => (
            <div
              key={`track2-${item.id}-${idx}`}
              className="w-[320px] sm:w-[420px] shrink-0 group relative rounded-2xl overflow-hidden glass-panel border border-white/10 transition-all duration-500 hover:scale-[1.04] hover:z-20 hover:border-[#10B981]/50 shadow-2xl"
            >
              {/* Image Frame */}
              <div className="relative h-[220px] sm:h-[260px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-black/30" />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E06927]" />
                  {item.categoryLabel}
                </div>

                {/* Metric Overlay on Hover */}
                <div className="absolute inset-0 bg-[#08090C]/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#10B981]">CORE ARCHITECTURE</span>
                    <span className="p-1.5 rounded-full bg-white/10 text-white">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="space-y-2">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#9CA3AF]">{m.label}:</span>
                        <span className="text-white font-bold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {item.techPills.map((tech) => (
                      <span key={tech} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/10 text-[#F3F4F6]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="p-4 bg-[#0F1117]/80 flex items-center justify-between border-t border-white/5">
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-[#10B981] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="text-[11px] text-[#9CA3AF]">{item.client}</div>
                </div>
                <div className="text-[10px] font-mono text-[#E06927] bg-[#E06927]/15 px-2.5 py-1 rounded-full font-bold">
                  {item.metrics[0]?.value || 'PASS'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
