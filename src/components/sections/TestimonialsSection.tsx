'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Play, CheckCircle2, ShieldCheck, Quote, Sparkles } from 'lucide-react';
import { testimonialsData } from '@/data/testimonials';

export function TestimonialsSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section id="testimonials" className="py-24 sm:py-32 px-4 sm:px-8 bg-[#08090C] relative">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#10B981]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header with Google Verified 5.0 Star badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#10B981] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#10B981] radar-ping inline-block" />
              CLIENT VALIDATION // EXECUTIVE TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mt-3">
              Trusted By High-Growth <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#10B981] to-[#E06927]">
                CEOs & Enterprise Leaders.
              </span>
            </h2>
          </div>

          {/* Google Verified 5.0 Star Badge Card */}
          <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-center gap-4 shrink-0 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs font-bold text-white ml-1">5.0 / 5.0</span>
              </div>
              <div className="text-xs text-[#9CA3AF] mt-0.5">
                Verified Google Business Reviews (140+)
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Asymmetric Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-2xl relative group"
            >
              <div className="space-y-4">
                {/* Top Row: Stars & Metric Pill */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] text-[10px] font-mono font-bold">
                    {item.verifiedMetric}
                  </span>
                </div>

                {/* Quote Body */}
                <p className="text-sm text-[#F3F4F6] leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Video Mockup Card */}
                {item.videoThumb && (
                  <div className="relative h-36 rounded-2xl overflow-hidden border border-white/10 group/video cursor-pointer">
                    <Image
                      src={item.videoThumb}
                      alt={`${item.name} Video Review`}
                      fill
                      className="object-cover group-hover/video:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-colors" />

                    {/* Center Play Trigger */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#E06927] text-white flex items-center justify-center shadow-[0_0_20px_rgba(224,105,39,0.7)] group-hover/video:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white">
                      <span>VIDEO CASE STUDY</span>
                      <span>{item.duration}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10 shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-display">
                    {item.name}
                  </h3>
                  <div className="text-xs text-[#9CA3AF]">{item.role}</div>
                  <div className="text-[10px] font-mono text-[#E06927]">
                    {item.company}
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
