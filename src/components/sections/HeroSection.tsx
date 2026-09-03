'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Award, Activity } from 'lucide-react';
import { MagneticButton } from '@/components/ui/MagneticButton';
import {
  PageSpeedProofCard,
  SeoTrafficProofCard,
  Local3PackProofCard,
} from '@/components/ui/FloatingProofCard';

interface HeroSectionProps {
  onOpenBooking: () => void;
  isReady: boolean;
}

export function HeroSection({ onOpenBooking, isReady }: HeroSectionProps) {
  const headlineWords = [
    'We',
    'Engineer',
    'High-Converting',
    'Digital',
    'Ecosystems',
    '&',
    'Dominate',
    'Local',
    'Search.',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: isReady ? 0.1 : 0.6,
      },
    },
  };

  const wordVariants = {
    hidden: { y: '120%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 sm:pt-32 pb-12 px-4 sm:px-8 overflow-hidden bg-radial-gradient">
      {/* Dynamic Ambient Blur Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E06927]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#10B981]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10 py-6">
        
        {/* Top Agency Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isReady ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-white/10 text-xs font-mono tracking-widest text-[#9CA3AF] mb-6 self-start"
        >
          <span className="w-2 h-2 rounded-full bg-[#10B981] radar-ping" />
          <span className="text-[#F3F4F6] font-semibold">ELITE GROWTH ARCHITECTURE</span>
          <span className="text-[#E06927]">•</span>
          <span>AWWWARDS & FWA SOTD STANDARD</span>
        </motion.div>

        {/* Word-by-Word Masked Kinetic Typography */}
        <div className="mb-6 sm:mb-8">
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate={isReady ? 'visible' : 'hidden'}
            className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight leading-[1.04] text-white max-w-5xl"
          >
            {headlineWords.map((word, idx) => {
              const isHighlight =
                word === 'High-Converting' ||
                word === 'Dominate' ||
                word === 'Ecosystems';
              return (
                <span
                  key={idx}
                  className="inline-block overflow-hidden mr-2.5 sm:mr-4 align-bottom"
                >
                  <motion.span
                    variants={wordVariants}
                    className={`inline-block ${
                      isHighlight
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E06927] to-[#F97316] text-glow-amber'
                        : 'text-white'
                    }`}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </motion.h1>
        </div>

        {/* Subtitle & Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-[#9CA3AF] max-w-3xl leading-relaxed mb-8 sm:mb-10 font-normal"
        >
          We replace bloated templates with sub-second <strong className="text-white font-medium">Headless WordPress & Webflow</strong> architectures, multi-layered <strong className="text-white font-medium">Programmatic Technical SEO</strong>, and aggressive <strong className="text-white font-medium">Google Local 3-Pack Domination</strong> that turns organic search into your most lucrative revenue channel.
        </motion.p>

        {/* Dual Kinetic Action CTAs & Guarantee Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12"
        >
          <MagneticButton
            size="lg"
            variant="primary"
            showRadar={true}
            onClick={onOpenBooking}
          >
            START YOUR GROWTH ENGINE
          </MagneticButton>

          <MagneticButton
            size="lg"
            variant="ghost"
            href="#case-studies"
            showArrow={true}
          >
            VIEW VERIFIED PROOF
          </MagneticButton>

          <div className="flex items-center gap-2 text-xs font-mono text-[#9CA3AF] px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>GUARANTEED 100/100 CWV & POSITIVE ROI</span>
          </div>
        </motion.div>

        {/* Floating Visual Proof Cards (Desktop 3-Column Display / Mobile Stack) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 relative mt-4">
          <div className="flex justify-center md:justify-start">
            <PageSpeedProofCard />
          </div>
          <div className="flex justify-center">
            <SeoTrafficProofCard />
          </div>
          <div className="flex justify-center md:justify-end">
            <Local3PackProofCard />
          </div>
        </div>

      </div>

      {/* Live Telemetry Stats Ribbon */}
      <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/[0.08] relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1.5">
              140+
              <span className="text-xs font-mono text-[#10B981] font-normal px-2 py-0.5 rounded bg-[#10B981]/15">
                DEPLOYED
              </span>
            </div>
            <div className="text-xs text-[#9CA3AF] mt-1">High-Speed Platforms Built</div>
          </div>

          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1.5">
              0.58s
              <span className="text-xs font-mono text-[#E06927] font-normal px-2 py-0.5 rounded bg-[#E06927]/15">
                AVG LCP
              </span>
            </div>
            <div className="text-xs text-[#9CA3AF] mt-1">Mobile Core Web Vitals Pass</div>
          </div>

          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1.5">
              +$42M
              <span className="text-xs font-mono text-[#2563EB] font-normal px-2 py-0.5 rounded bg-[#2563EB]/15">
                GENERATED
              </span>
            </div>
            <div className="text-xs text-[#9CA3AF] mt-1">Verified Client Revenue Lift</div>
          </div>

          <div>
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-1.5">
              99.4%
              <span className="text-xs font-mono text-[#10B981] font-normal px-2 py-0.5 rounded bg-[#10B981]/15">
                #1 RANK
              </span>
            </div>
            <div className="text-xs text-[#9CA3AF] mt-1">Local 3-Pack Win Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
