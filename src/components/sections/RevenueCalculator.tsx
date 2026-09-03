'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Zap, Sparkles, ArrowRight, DollarSign, ShieldAlert } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface RevenueCalculatorProps {
  onOpenBooking: () => void;
}

export function RevenueCalculator({ onOpenBooking }: RevenueCalculatorProps) {
  const [monthlyVisitors, setMonthlyVisitors] = useState(25000);
  const [avgOrderValue, setAvgOrderValue] = useState(350);
  const [currentConversionRate, setCurrentConversionRate] = useState(1.2);

  // Growth formulas
  // Vanguard optimization: +240% organic traffic increase (3.4x) and conversion rate boost to ~2.8% or +120%
  const currentMonthlyRevenue = (monthlyVisitors * (currentConversionRate / 100)) * avgOrderValue;
  
  const projectedVisitors = Math.round(monthlyVisitors * 2.8);
  const projectedConversionRate = Math.min(6.5, Number((currentConversionRate * 2.1).toFixed(1)));
  const projectedMonthlyRevenue = (projectedVisitors * (projectedConversionRate / 100)) * avgOrderValue;
  
  const monthlyRevenueLift = Math.max(0, projectedMonthlyRevenue - currentMonthlyRevenue);
  const annualRevenueLift = monthlyRevenueLift * 12;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat('en-US').format(val);
  };

  return (
    <section id="calculator" className="py-24 sm:py-32 px-4 sm:px-8 bg-[#08090C] relative">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E06927]/12 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E06927]/15 border border-[#E06927]/30 text-xs font-mono tracking-widest text-[#E06927] uppercase">
            <Calculator className="w-3.5 h-3.5" />
            ROI SIMULATOR // ORGANIC SCALE ENGINE
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white">
            Calculate Your Potential <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E06927] to-[#10B981]">
              Organic Revenue Lift.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF]">
            See how sub-second LCP engineering combined with Google Local 3-Pack and Technical SEO compounds your bottom line over 12 months.
          </p>
        </div>

        {/* Main Interactive Calculator Container */}
        <div className="glass-glow-amber rounded-3xl border border-[#E06927]/30 p-6 sm:p-10 lg:p-12 shadow-[0_0_80px_rgba(224,105,39,0.15)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Sliders Left Column */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Slider 1: Monthly Visitors */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">
                  Current Monthly Visitors
                </label>
                <span className="text-lg font-display font-bold text-white px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono">
                  {formatNumber(monthlyVisitors)} / mo
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="250000"
                step="1000"
                value={monthlyVisitors}
                onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E06927]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#9CA3AF]/60">
                <span>2,000</span>
                <span>100,000</span>
                <span>250,000+</span>
              </div>
            </div>

            {/* Slider 2: Average Order / Client Value */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">
                  Average Order / Client Deal Value
                </label>
                <span className="text-lg font-display font-bold text-white px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono">
                  {formatCurrency(avgOrderValue)}
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E06927]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#9CA3AF]/60">
                <span>$50</span>
                <span>$2,500</span>
                <span>$5,000+</span>
              </div>
            </div>

            {/* Slider 3: Current Conversion Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">
                  Current Conversion Rate (%)
                </label>
                <span className="text-lg font-display font-bold text-white px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono">
                  {currentConversionRate}%
                </span>
              </div>
              <input
                type="range"
                min="0.3"
                max="4.0"
                step="0.1"
                value={currentConversionRate}
                onChange={(e) => setCurrentConversionRate(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#9CA3AF]/60">
                <span>0.3% (Slow Site)</span>
                <span>2.0% (Average)</span>
                <span>4.0%</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-[#9CA3AF]">
              <Zap className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
              <span>
                Calculations based on verified performance upgrades: sub-600ms LCP (+40% conversion), +240% organic keyword crawl reach, and 1-click mobile checkouts.
              </span>
            </div>

          </div>

          {/* Projected Outcomes Right Column */}
          <div className="lg:col-span-6 bg-[#08090C]/90 rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="text-xs font-mono text-[#9CA3AF] uppercase">
                ESTIMATED 12-MONTH TRAJECTORY
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#10B981]/20 text-[#10B981] text-xs font-mono font-bold">
                HIGH CONFIDENCE
              </span>
            </div>

            {/* Massive Annual Lift Display */}
            <div className="space-y-1">
              <div className="text-xs font-mono text-[#E06927] uppercase tracking-wider font-bold">
                PROJECTED 12-MONTH REVENUE EXPANSION
              </div>
              <div className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white text-glow-amber">
                +{formatCurrency(annualRevenueLift)}
              </div>
              <div className="text-xs text-[#9CA3AF]">
                Additional gross revenue generated annually ({formatCurrency(monthlyRevenueLift)} / month)
              </div>
            </div>

            {/* Side-by-side comparison metrics */}
            <div className="grid grid-cols-2 gap-3 pt-2 font-mono">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-[10px] text-[#9CA3AF] uppercase">Monthly Revenue Now</div>
                <div className="text-base font-bold text-white mt-0.5">
                  {formatCurrency(currentMonthlyRevenue)}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30">
                <div className="text-[10px] text-[#10B981] uppercase font-bold">With Vanguard Engine</div>
                <div className="text-base font-bold text-[#10B981] mt-0.5">
                  {formatCurrency(projectedMonthlyRevenue)}
                </div>
              </div>
            </div>

            {/* Projected traffic & CVR */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02]">
                <div className="text-[10px] text-[#9CA3AF]">Projected Traffic</div>
                <div className="font-bold text-white mt-0.5">{formatNumber(projectedVisitors)} visits</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02]">
                <div className="text-[10px] text-[#9CA3AF]">Projected Conversion</div>
                <div className="font-bold text-[#10B981] mt-0.5">{projectedConversionRate}% CVR</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <MagneticButton
                size="lg"
                variant="primary"
                showRadar={true}
                onClick={onOpenBooking}
                className="w-full justify-center"
              >
                CLAIM YOUR STRATEGIC REVENUE AUDIT
              </MagneticButton>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
