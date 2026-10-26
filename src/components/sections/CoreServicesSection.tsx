'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MonitorSmartphone, MapPin, Palette } from 'lucide-react';
import { ScrollBlurRevealText } from '@/components/ui/ScrollAnimations';

interface CoreServicesSectionProps {
  onOpenBooking?: (service?: string) => void;
}

export function CoreServicesSection({ onOpenBooking }: CoreServicesSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);

  // Smooth scroll-driven parallax for background image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  const services = [
    {
      id: 'website-build',
      title: 'Build / Redesign Website',
      description:
        'Custom-crafted WordPress, Elementor Pro, and Webflow websites engineered from the ground up for sub-second mobile speeds, seamless conversion funnels, and effortless client management.',
      icon: MonitorSmartphone,
      metric: 'WordPress & Webflow',
      highlight: 'Sub-1s Speed Guarantee',
    },
    {
      id: 'local-seo',
      title: 'Local SEO for Better Visibility',
      description:
        'Dominate Google Maps and local 3-pack search results. We calibrate your Google Business Profile, synchronize 50+ verified citation directories, and drive steady high-intent inbound phone calls.',
      icon: MapPin,
      metric: 'Google Maps 3-Pack',
      highlight: 'GBP & Citation Audit',
    },
    {
      id: 'brand-identity',
      title: 'Brand Design Visual Identity',
      description:
        'Command instant trust and memorable market presence. We craft bespoke design systems, distinctive typography palettes, logo suites, and comprehensive digital asset kits.',
      icon: Palette,
      metric: 'Vector Brand Suite',
      highlight: 'Complete Digital Assets',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="core-services"
      className="relative w-full bg-[#060612] text-white select-none overflow-hidden z-10 border-y border-white/15"
    >
      {/* Cinematic Parallax Background Image with Dark Atmospheric Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute -top-[20%] left-0 w-full h-[140%]"
        >
          <Image
            src="/core-services-dark-bg.jpg"
            alt="Core services dark architecture background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.38] contrast-[1.12]"
          />
        </motion.div>

        {/* Ambient Dark Gradient Overlays for High Contrast & Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060612]/95 via-[#060612]/80 to-[#060612]/95" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#060612]/50 to-[#060612]/90" />
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#060612] to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#060612] to-transparent" />
      </div>

      {/* Full-Width Architectural Grid System (Zero Corner Radius, Full-Bleed Lines) */}
      <div className="relative z-10 w-full bg-[#0c0c16]/80 backdrop-blur-2xl">
        {/* Top Featured Row: The Agency Philosophy & Execution Standard */}
        <div className="w-full border-b border-white/15">
          <div className="max-w-[84rem] mx-auto p-8 sm:p-12 lg:p-16 xl:p-20">
            <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
              {/* Neon Orange Accent Mark */}
              <div className="flex items-center gap-1.5 sm:gap-2 pt-1.5 sm:pt-2 lg:pt-3.5 shrink-0" aria-hidden="true">
                <span className="w-1.5 sm:w-2 h-7 sm:h-9 md:h-11 lg:h-13 xl:h-14 bg-[#ff6321] rounded-xs inline-block shadow-lg shadow-orange-500/50" />
                <span className="w-1.5 sm:w-2 h-7 sm:h-9 md:h-11 lg:h-13 xl:h-14 bg-[#ff6321] rounded-xs inline-block shadow-lg shadow-orange-500/50" />
              </div>

              {/* Featured Core Statement with Desktop Scroll Text Reveal */}
              <div className="flex-1">
                {/* Desktop: Scroll-Linked Blur Reveal Text (White Typography) */}
                <div className="hidden lg:block">
                  <ScrollBlurRevealText
                    text="Your website should do more than look good — it should help your business grow. We build new websites, redesign outdated ones, and improve local search visibility to help customers find your business, trust your services, and take the next step."
                    className="font-heading font-medium text-[2.65rem] xl:text-[3.15rem] text-white tracking-tight leading-[1.15]"
                  />
                </div>

                {/* Mobile & Tablet: Crisp Clean White Text */}
                <div className="block lg:hidden">
                  <p className="font-heading font-medium text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-snug">
                    Your website should do more than look good — it should help your business grow. We build new websites, redesign outdated ones, and improve local search visibility to help customers find your business, trust your services, and take the next step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Columns Grid System (Full-Width, Separated by Hairline Borders) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15 bg-transparent">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="p-8 sm:p-10 lg:p-12 xl:p-14 space-y-6 relative"
              >
                {/* 1. Stacked Icon Design (48px Stack with 32px Icon - Static) */}
                <div className="relative w-12 h-12 shrink-0">
                  {/* Stacked offset layer behind */}
                  <div
                    className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl bg-white/[0.05] border border-white/10 -z-10"
                    aria-hidden="true"
                  />
                  
                  {/* Primary 48px Stack Tile */}
                  <div className="w-12 h-12 rounded-xl bg-[#ff6321]/10 border border-[#ff6321]/30 flex items-center justify-center text-[#ff6321] shadow-[0_0_16px_rgba(255,99,33,0.25)]">
                    <Icon size={32} className="w-8 h-8 stroke-[1.75]" />
                  </div>
                </div>

                {/* 2. Service Name */}
                <div
                  role="heading"
                  aria-level={3}
                  className="font-heading font-bold text-2xl sm:text-[1.65rem] text-white tracking-tight leading-snug"
                >
                  {service.title}
                </div>

                {/* 3. Short Description */}
                <p className="text-zinc-300 font-body text-sm sm:text-base leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* 4. Subtle Feature Highlights Tag */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="text-[#ff7e47] uppercase tracking-wider font-semibold">
                    {service.metric}
                  </span>
                  <span className="text-zinc-500">
                    {service.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
