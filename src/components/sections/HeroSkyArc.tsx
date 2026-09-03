'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ArrowUpRight, TrendingUp, Cpu, Plus, Sparkles } from 'lucide-react';

interface HeroSkyArcProps {
  onOpenBooking: () => void;
}

export function HeroSkyArc({ onOpenBooking }: HeroSkyArcProps) {
  return (
    <section
      id="home"
      className="relative min-h-[105vh] bg-gradient-to-b from-[#0284c7] via-[#0284c7] to-[#38bdf8] overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-12 select-none isolate"
    >
      {/* Realistic Cloud Atmosphere Layers */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-bottom opacity-85 z-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 35%, rgba(14,165,233,0) 75%),
                            radial-gradient(circle at 15% 75%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 45%),
                            radial-gradient(circle at 85% 75%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 45%)`,
        }}
      />

      {/* Cloud Texture Overlay */}
      <div
        className="absolute inset-x-0 bottom-0 h-[480px] pointer-events-none z-0"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2000&q=80")`,
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          mixBlendMode: 'screen',
          opacity: 0.75,
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Hero Top Content: Centered Title, Subtitle, & Dual CTAs */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 space-y-6 pt-4 sm:pt-8">
        
        {/* Main Headline in Bricolage Grotesque 500 (64px) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-medium text-4xl sm:text-6xl lg:text-[4rem] text-white tracking-tight leading-[1.08]"
        >
          Building the future with
          <span className="block text-white">AI and strategy</span>
        </motion.h1>

        {/* Subtitle in Manrope (20px / 18px) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-body-lg text-white/90 max-w-2xl mx-auto font-body font-normal leading-relaxed"
        >
          We help organizations unlock growth and efficiency through data-driven consulting and intelligent automation.
        </motion.p>

        {/* Action Buttons: VIEW DEMO + GET STARTED */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-4 pt-2"
        >
          {/* Frosted View Demo Button */}
          <button
            onClick={onOpenBooking}
            className="px-7 py-3 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-medium text-body-sm tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-sm hover:scale-103"
          >
            VIEW DEMO
          </button>

          {/* Neon Lime Get Started Button with Arrow */}
          <button
            onClick={onOpenBooking}
            className="px-6 py-2.5 rounded-full bg-[#d9f99d] hover:bg-[#bef264] text-[#0a0a0a] font-bold text-body-sm tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center gap-3 shadow-lg hover:scale-103"
          >
            <span>GET STARTED</span>
            <span className="w-8 h-8 rounded-full bg-[#0a0a0a] text-white flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </span>
          </button>
        </motion.div>

      </div>

      {/* 3D Curved Fan Arc of Floating Cards Hovering Over Clouds */}
      <div className="relative z-10 w-full overflow-hidden pt-10 sm:pt-14 pb-4">
        <div
          className="max-w-[94rem] mx-auto px-4 flex items-center justify-center"
          style={{ perspective: '1600px' }}
        >
          <div className="relative flex items-center justify-center gap-3 sm:gap-4 md:gap-5 w-full py-6">
            
            {/* Card 1: Far Left (Data Chart) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="w-32 sm:w-40 md:w-44 h-48 sm:h-56 bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-xl border border-white/60 shrink-0 transform -rotate-12 translate-y-6 sm:translate-y-8"
            >
              <div className="text-[10px] font-mono text-[#8d8d8d] uppercase">Intelligence in Every Decision</div>
              <div className="mt-4 flex items-end gap-1.5 h-24">
                <div className="w-3 bg-[#0ea5e9]/30 rounded-t h-10" />
                <div className="w-3 bg-[#0ea5e9]/50 rounded-t h-16" />
                <div className="w-3 bg-[#0ea5e9] rounded-t h-20" />
                <div className="w-3 bg-[#bef264] rounded-t h-24" />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#0a0a0a] font-bold">
                <span>Index</span>
                <span className="text-[#0284c7]">+68%</span>
              </div>
            </motion.div>

            {/* Card 2: Financial List Card ($4,900) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="w-36 sm:w-44 md:w-48 h-52 sm:h-60 bg-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-white/80 shrink-0 transform -rotate-6 translate-y-2 sm:translate-y-3"
            >
              <div className="text-body-sm font-mono text-[#8d8d8d]">REVENUE</div>
              <div className="font-heading font-medium text-xl sm:text-2xl text-[#0a0a0a] mt-0.5">$4,900</div>
              <div className="space-y-2 mt-4 text-[11px] font-mono">
                <div className="flex justify-between pb-1.5 border-b border-[#f1f0ee]">
                  <span className="text-[#8d8d8d]">Automations</span>
                  <span className="font-bold text-[#0a0a0a]">$900</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-[#f1f0ee]">
                  <span className="text-[#8d8d8d]">Model Fine-Tune</span>
                  <span className="font-bold text-[#0a0a0a]">$2,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8d8d8d]">API Throughput</span>
                  <span className="font-bold text-[#0a0a0a]">$1,600</span>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Photo Portrait Card + $2,670 / $1,200 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="w-36 sm:w-44 md:w-48 h-56 sm:h-64 bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/80 shrink-0 transform -rotate-2"
            >
              <div className="relative h-32 sm:h-36 w-full bg-[#10b981]">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
                  alt="Client portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 sm:p-3.5 space-y-2">
                <div className="flex justify-between items-center text-body-sm font-mono">
                  <div>
                    <div className="text-[10px] text-[#8d8d8d]">ROI GAIN</div>
                    <div className="font-bold text-[#0a0a0a]">$2,670</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-[#8d8d8d]">SAVINGS</div>
                    <div className="font-bold text-[#10b981]">$1,200</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4 (Center): "Intelligence in Every Decision" with Wave Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ y: -14, scale: 1.06 }}
              className="w-44 sm:w-52 md:w-56 h-60 sm:h-68 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-white shrink-0 z-20 transform translate-y-0"
            >
              <div className="flex items-center justify-between text-body-sm">
                <span className="font-mono text-[10px] text-[#8d8d8d] uppercase">Intelligence in</span>
                <span className="w-2 h-2 rounded-full bg-[#0284c7]" />
              </div>
              <div className="font-heading font-medium text-lg sm:text-xl text-[#0a0a0a] leading-tight mt-1">
                Every Decision
              </div>

              {/* Cyan Line Chart Area */}
              <div className="mt-4 h-24 sm:h-28 relative flex items-end">
                <svg viewBox="0 0 100 40" className="w-full h-full text-[#38bdf8] fill-none stroke-current stroke-2">
                  <path d="M0 32 Q 25 15, 50 25 T 100 8" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-[#38bdf8]/20 to-transparent rounded-lg pointer-events-none" />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-[#f1f0ee] text-[11px] font-mono text-[#8d8d8d]">
                <span>Data Flow</span>
                <span className="text-[#0284c7] font-bold">Optimal</span>
              </div>
            </motion.div>

            {/* Card 5: Dark Card ("Expertise that Combines Strategy, Data, and AI") */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="w-40 sm:w-48 md:w-52 h-56 sm:h-64 bg-[#0a0a0a] text-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/20 shrink-0 transform rotate-2"
            >
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#bef264]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bef264]" />
                <span>ACTIVE EXPERTISE</span>
              </div>
              <div className="font-heading font-medium text-base sm:text-lg text-white mt-3 leading-snug">
                Expertise that combines Strategy, Data, and Artificial Intelligence.
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-body-sm font-mono text-[#8d8d8d]">
                <span>AI Models</span>
                <span className="text-[#bef264] font-bold">100% Custom</span>
              </div>
            </motion.div>

            {/* Card 6: Cyan Glass Card ("+ Data training") */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="w-36 sm:w-44 md:w-48 h-52 sm:h-60 bg-gradient-to-br from-[#38bdf8]/90 to-[#0284c7]/90 text-white rounded-2xl p-4 shadow-xl border border-white/40 shrink-0 transform rotate-6 translate-y-2 sm:translate-y-3 flex flex-col justify-between"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Plus className="w-4 h-4" />
              </div>
              <div>
                <div className="font-heading font-medium text-lg sm:text-xl text-white">
                  Data training
                </div>
                <div className="text-[11px] font-mono text-white/80 mt-1">
                  Tailored to your pipeline
                </div>
              </div>
            </motion.div>

            {/* Card 7: White Card ("520k+ Data Points") */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="w-36 sm:w-44 md:w-48 h-52 sm:h-58 bg-white rounded-2xl p-4 shadow-xl border border-white/80 shrink-0 transform rotate-10 translate-y-4 sm:translate-y-6"
            >
              <div className="text-[10px] font-mono text-[#8d8d8d]">ENTERPRISE SCALE</div>
              <div className="font-heading font-medium text-2xl sm:text-3xl text-[#0a0a0a] mt-1">520k+</div>
              <div className="text-body-sm text-[#8d8d8d] leading-tight mt-2 font-body">
                Data Points analyzed monthly.
              </div>
            </motion.div>

            {/* Card 8: Far Right (Smartphone Frame / 49%) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="w-32 sm:w-36 md:w-40 h-48 sm:h-54 bg-[#0a0a0a] text-white rounded-2xl p-3 shadow-xl border border-white/20 shrink-0 transform rotate-14 translate-y-6 sm:translate-y-8"
            >
              <div className="w-8 h-1 bg-white/30 rounded-full mx-auto mb-2" />
              <div className="p-2 rounded-xl bg-white/10 text-center space-y-1">
                <div className="text-[10px] font-mono text-[#bef264]">AUTOMATION</div>
                <div className="font-heading font-medium text-2xl text-white">49%</div>
                <div className="text-[9px] text-[#8d8d8d]">Efficiency Lift</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Rating Bar: "Rated 4.9/5 by 4,900+ clients" with 5 Yellow Stars */}
      <div className="relative z-10 text-center space-y-2 pt-2">
        <div className="text-body-sm font-medium text-white/95">
          Rated 4.9/5 by 4,900+ clients
        </div>
        <div className="flex items-center justify-center gap-1 text-[#fde047]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current stroke-none" />
          ))}
        </div>
      </div>

    </section>
  );
}
