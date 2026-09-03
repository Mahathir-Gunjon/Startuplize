'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  LayoutGrid,
  Search,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Zap,
  Layers,
  Sparkles,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { ServiceId } from '@/types';

interface ServicesMatrixProps {
  onOpenBooking: (service?: string) => void;
}

export function ServicesMatrix({ onOpenBooking }: ServicesMatrixProps) {
  const [activeServiceId, setActiveServiceId] = useState<ServiceId>('wordpress');
  const activeService =
    servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  const iconMap = {
    wordpress: <Code2 className="w-5 h-5" />,
    webflow: <LayoutGrid className="w-5 h-5" />,
    'technical-seo': <Search className="w-5 h-5" />,
    'local-growth': <MapPin className="w-5 h-5" />,
  };

  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-8 bg-[#08090C] relative">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#E06927]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E06927] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#10B981] radar-ping inline-block" />
              SERVICE MATRIX // HIGH-IMPACT CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mt-3 leading-tight">
              Engineered For Maximum <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E06927] to-[#10B981]">
                Speed & Organic Dominance.
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9CA3AF] max-w-md">
            We don’t do generic web design. We build high-throughput digital growth ecosystems with mathematical performance guarantees.
          </p>
        </div>

        {/* Service Navigation Tabs (Horizontal on mobile/tablet, Stackable) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {servicesData.map((service) => {
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 relative group overflow-hidden ${
                  isActive
                    ? 'bg-[#0F1117] border-[#E06927] shadow-[0_0_30px_-5px_rgba(224,105,39,0.3)]'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeServiceGlow"
                    className="absolute inset-0 bg-gradient-to-b from-[#E06927]/15 to-transparent pointer-events-none"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex items-center justify-between mb-3">
                  <div
                    className={`p-2.5 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-[#E06927] text-white'
                        : 'bg-white/5 text-[#9CA3AF] group-hover:text-white'
                    }`}
                  >
                    {iconMap[service.id]}
                  </div>
                  <span className="text-[10px] font-mono text-[#9CA3AF]">
                    {service.badge.split(' / ')[0]}
                  </span>
                </div>
                <h3
                  className={`text-sm sm:text-base font-display font-bold relative z-10 transition-colors ${
                    isActive ? 'text-white' : 'text-[#9CA3AF] group-hover:text-white'
                  }`}
                >
                  {service.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Service Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-panel rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background Corner Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E06927]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Details Column */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E06927]/15 text-[#E06927] text-xs font-mono font-bold tracking-wider uppercase mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    {activeService.badge}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
                    {activeService.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#E06927] font-medium mt-1">
                    {activeService.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                  {activeService.description}
                </p>

                {/* 3 Core Pillar Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {activeService.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1.5"
                    >
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span>{feature.title}</span>
                      </div>
                      <p className="text-[11px] text-[#9CA3AF] leading-snug">
                        {feature.desc}
                      </p>
                      <div className="text-[10px] font-mono text-[#10B981] font-semibold pt-1">
                        {feature.metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills & Deliverables */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">
                    PRODUCTION STACK & DELIVERABLES
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeService.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <MagneticButton
                    size="md"
                    variant="primary"
                    showRadar={true}
                    onClick={() => onOpenBooking(activeService.title)}
                  >
                    DEPLOY THIS ARCHITECTURE
                  </MagneticButton>
                  
                  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-xs">
                    <span className="text-2xl font-bold text-[#10B981]">
                      {activeService.highlightMetric.value}
                    </span>
                    <div>
                      <div className="text-white font-bold">
                        {activeService.highlightMetric.label}
                      </div>
                      <div className="text-[10px] text-[#9CA3AF]">
                        {activeService.highlightMetric.sublabel}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Mockup Preview Column */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
                  {/* Mockup Top Window Chrome Bar */}
                  <div className="bg-[#161922] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs font-mono text-[#9CA3AF]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    </div>
                    <span className="truncate max-w-[180px]">{activeService.mockup.title}</span>
                    <span className="text-[#10B981] font-bold text-[10px]">
                      LIVE INSTANCE
                    </span>
                  </div>

                  {/* Mockup Visual Image */}
                  <div className="relative h-[280px] sm:h-[340px] w-full">
                    <Image
                      src={activeService.mockup.image}
                      alt={activeService.mockup.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090C]/90 via-transparent to-transparent" />

                    {/* Floating Telemetry Badge on Mockup */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-panel border border-white/15 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#E06927]" />
                        <span className="text-xs font-bold text-white font-mono">
                          {activeService.mockup.metricBadge}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#10B981]/20 text-[#10B981] font-bold">
                        VERIFIED
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
