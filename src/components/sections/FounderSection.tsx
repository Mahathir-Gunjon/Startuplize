'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FounderSectionProps {
  onOpenBooking?: (service?: string) => void;
}

export function FounderSection({ onOpenBooking }: FounderSectionProps = {}) {
  return (
    <section
      id="founder"
      className="relative w-full min-h-[110vh] flex flex-col justify-center bg-[#07090a] border-y border-white/10 py-16 sm:py-20 lg:py-24 overflow-hidden select-none"
    >
      {/* ── Background Texture Layers ── */}
      {/* Layer 1: Subtle Architectural Dot Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse 90% 80% at 50% 50%, black 50%, transparent 95%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 80% at 50% 50%, black 50%, transparent 95%)',
        }}
      />

      {/* Layer 2: Film Grain / Tactile Noise Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 3: Warm Studio Lighting (Burnt Orange Glow behind Subject) */}
      <div className="absolute top-1/2 left-[18%] -translate-y-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-[#ff6321]/[0.10] blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-[12%] -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />

      {/* ── Main Content Container (Max 1280px) ── */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          
          {/* ── Left Column: Transparent Founder Portrait (~1.3x Larger, 50% split) ── */}
          <div className="lg:col-span-6 w-full flex flex-col items-center lg:items-start lg:border-r lg:border-white/10 lg:pr-10 xl:pr-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[570px] xl:max-w-[600px]"
            >
              {/* Image Container with Transparent PNG and Soft Floor Fade (1.3x size) */}
              <div
                className="relative w-full aspect-[894/1024] flex items-end justify-center overflow-hidden"
                style={{
                  maskImage:
                    'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, black 85%, transparent 100%)',
                }}
              >
                <Image
                  src="/founder.png"
                  alt="Mahthir Mohammad — Founder of Startuplize"
                  width={894}
                  height={1024}
                  priority
                  className="w-full h-auto object-contain object-bottom drop-shadow-none filter contrast-[1.03] select-none pointer-events-none"
                />
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Editorial Architecture (50% split) ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center lg:pl-4 xl:pl-6"
          >
            {/* Narrative Paragraphs with High-Impact Words Highlighted in Full White */}
            <div className="space-y-5 text-lg sm:text-xl lg:text-[1.3rem] font-body font-normal leading-[1.65] text-zinc-400" style={{ color: '#a1a1aa' }}>
              <p style={{ color: '#a1a1aa' }}>
                I’m <span className="text-white font-medium" style={{ color: '#ffffff' }}>Mahthir Mohammad</span>, founder of <span className="text-white font-medium" style={{ color: '#ffffff' }}>Startuplize</span> and a web developer with <span className="text-white font-medium" style={{ color: '#ffffff' }}>3+ years of experience</span> building websites for <span className="text-white font-medium" style={{ color: '#ffffff' }}>businesses and agencies</span>.
              </p>
              <p style={{ color: '#a1a1aa' }}>
                Over the past <span className="text-white font-medium" style={{ color: '#ffffff' }}>2 years</span>, I’ve worked in <span className="text-white font-medium" style={{ color: '#ffffff' }}>remote roles</span>, collaborating with teams and clients across different projects. Today, I work on both <span className="text-white font-medium" style={{ color: '#ffffff' }}>white-label agency projects</span> and <span className="text-white font-medium" style={{ color: '#ffffff' }}>direct client engagements</span>, building websites designed around <span className="text-white font-medium" style={{ color: '#ffffff' }}>real business goals</span>.
              </p>
            </div>

            {/* Founder Signature Attribution (Clean minimal, no extra buttons) */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-white/10">
              <div className="font-heading font-bold text-lg sm:text-xl text-white tracking-tight">
                Mahthir Mohammad
              </div>
              <div className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 mt-1" style={{ color: '#a1a1aa' }}>
                Founder, Startuplize
              </div>
            </div>

            {/* Architectural Highlights Shelf with Vertical Grid Dividers */}
            <div className="mt-9 sm:mt-10 pt-7 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                <div className="pt-3 sm:pt-0 sm:pr-6">
                  <div className="font-heading font-bold text-xl sm:text-2xl lg:text-[1.65rem] text-white tracking-tight leading-none">
                    3+ Years
                  </div>
                  <div className="text-xs sm:text-sm font-body text-zinc-400 mt-2 leading-snug" style={{ color: '#a1a1aa' }}>
                    Experience Building Websites
                  </div>
                </div>

                <div className="pt-3 sm:pt-0 sm:px-6">
                  <div className="font-heading font-bold text-xl sm:text-2xl lg:text-[1.65rem] text-white tracking-tight leading-none">
                    2 Years
                  </div>
                  <div className="text-xs sm:text-sm font-body text-zinc-400 mt-2 leading-snug" style={{ color: '#a1a1aa' }}>
                    in Remote Roles
                  </div>
                </div>

                <div className="pt-3 sm:pt-0 sm:pl-6">
                  <div className="font-heading font-bold text-xl sm:text-2xl lg:text-[1.65rem] text-white tracking-tight leading-none">
                    Agency &amp; Direct
                  </div>
                  <div className="text-xs sm:text-sm font-body text-zinc-400 mt-2 leading-snug" style={{ color: '#a1a1aa' }}>
                    Client Projects
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default FounderSection;
