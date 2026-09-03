'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, MapPin, Gauge, Star, Zap, ShieldCheck } from 'lucide-react';

export function PageSpeedProofCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-panel rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/10 w-full max-w-[280px] sm:max-w-[310px] backdrop-blur-xl relative group overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#10B981]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#10B981]/20 transition-all duration-500" />
      
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#10B981]/15 text-[#10B981]">
            <Gauge className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">PageSpeed Audit</div>
            <div className="text-[10px] text-[#9CA3AF]">Core Web Vitals Pass</div>
          </div>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#10B981]/20 text-[#10B981] text-[10px] font-mono font-bold">
          <Zap className="w-3 h-3 fill-current" />
          MOBILE
        </div>
      </div>

      {/* Main Score Dial */}
      <div className="py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-14 h-14 rounded-full border-4 border-[#10B981] bg-[#10B981]/10 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <span className="font-display font-extrabold text-xl text-white">100</span>
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-1">
              PERFECT SCORE <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            </div>
            <div className="text-[10px] text-[#9CA3AF]">Field Data Verified</div>
          </div>
        </div>
      </div>

      {/* Metric Breakdown */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.06] text-center font-mono">
        <div className="bg-white/[0.03] p-1.5 rounded-lg">
          <div className="text-[9px] text-[#9CA3AF]">LCP</div>
          <div className="text-xs font-bold text-[#10B981]">0.58s</div>
        </div>
        <div className="bg-white/[0.03] p-1.5 rounded-lg">
          <div className="text-[9px] text-[#9CA3AF]">INP</div>
          <div className="text-xs font-bold text-[#10B981]">14ms</div>
        </div>
        <div className="bg-white/[0.03] p-1.5 rounded-lg">
          <div className="text-[9px] text-[#9CA3AF]">CLS</div>
          <div className="text-xs font-bold text-[#10B981]">0.000</div>
        </div>
      </div>
    </motion.div>
  );
}

export function SeoTrafficProofCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-panel rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/10 w-full max-w-[280px] sm:max-w-[310px] backdrop-blur-xl relative group overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#E06927]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#E06927]/20 transition-all duration-500" />
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#E06927]/15 text-[#E06927]">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">GA4 Organic Growth</div>
            <div className="text-[10px] text-[#9CA3AF]">Google Search Console</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[#E06927]/20 text-[#E06927] text-[10px] font-mono font-bold">
          +340%
        </span>
      </div>

      {/* Main Metric */}
      <div className="py-2.5">
        <div className="flex items-baseline justify-between">
          <div>
            <div className="text-2xl font-extrabold text-white tracking-tight">148,920</div>
            <div className="text-[10px] text-[#9CA3AF]">Organic Monthly Clicks</div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-[#10B981]">+$1.8M ARR</div>
            <div className="text-[9px] text-[#9CA3AF]">Attributed Value</div>
          </div>
        </div>

        {/* Sparkline Visual SVG */}
        <div className="mt-3 h-10 w-full">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 200 40">
            <defs>
              <linearGradient id="gradient-curve" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E06927" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#E06927" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0,35 Q30,32 60,25 T120,18 T160,8 T200,2 L200,40 L0,40 Z"
              fill="url(#gradient-curve)"
            />
            <path
              d="M0,35 Q30,32 60,25 T120,18 T160,8 T200,2"
              fill="none"
              stroke="#E06927"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="200" cy="2" r="3.5" fill="#E06927" className="animate-ping" />
            <circle cx="200" cy="2" r="3.5" fill="#FFFFFF" />
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-[#9CA3AF] pt-2 border-t border-white/[0.06] font-mono">
        <span>TOPICAL CLUSTERS: 120+</span>
        <span className="text-[#10B981]">PASSING INDEXNOW</span>
      </div>
    </motion.div>
  );
}

export function Local3PackProofCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-panel rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/10 w-full max-w-[280px] sm:max-w-[310px] backdrop-blur-xl relative group overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#2563EB]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#2563EB]/20 transition-all duration-500" />
      
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#2563EB]/15 text-[#2563EB]">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Google Maps 3-Pack</div>
            <div className="text-[10px] text-[#9CA3AF]">Local Geo-Grid Dominance</div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-bold text-amber-400">
          <Star className="w-3 h-3 fill-current" />
          5.0 (620+)
        </div>
      </div>

      {/* Main Ranking Badge */}
      <div className="py-2.5 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#2563EB] text-white font-bold text-sm shadow-[0_0_10px_rgba(37,99,235,0.5)]">
              #1
            </span>
            <div>
              <div className="text-xs font-bold text-white">Metro Top Ranking</div>
              <div className="text-[10px] text-[#9CA3AF]">15-Mile Service Radius</div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-[#10B981]">380+ Calls</div>
          <div className="text-[9px] text-[#9CA3AF]">Inbound / mo</div>
        </div>
      </div>

      {/* Geo Mini Pins */}
      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] font-mono">
        <span className="flex items-center gap-1 text-[#10B981]">
          <ShieldCheck className="w-3.5 h-3.5" /> GBP VERIFIED
        </span>
        <span className="text-[#9CA3AF]">GEO-GRID: 100% GREEN</span>
      </div>
    </motion.div>
  );
}
