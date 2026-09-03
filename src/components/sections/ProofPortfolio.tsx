'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Award, Zap, Smartphone, Laptop, Tablet, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { PortfolioCategory } from '@/types';
import { MagneticButton } from '@/components/ui/MagneticButton';

interface ProofPortfolioProps {
  onOpenBooking: (service?: string) => void;
}

export function ProofPortfolio({ onOpenBooking }: ProofPortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all');

  const filteredProjects =
    activeCategory === 'all'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  const categories: { id: PortfolioCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Deployments', count: portfolioData.length },
    {
      id: 'wordpress',
      label: 'Headless WordPress & ACF',
      count: portfolioData.filter((p) => p.category === 'wordpress').length,
    },
    {
      id: 'webflow',
      label: 'Webflow Cinema Motion',
      count: portfolioData.filter((p) => p.category === 'webflow').length,
    },
    {
      id: 'seo-local',
      label: 'SEO & Local 3-Pack',
      count: portfolioData.filter((p) => p.category === 'seo-local').length,
    },
  ];

  const deviceIcons = {
    macbook: <Laptop className="w-4 h-4" />,
    ipad: <Tablet className="w-4 h-4" />,
    iphone: <Smartphone className="w-4 h-4" />,
    dual: <Laptop className="w-4 h-4" />,
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-4 sm:px-8 bg-[#08090C] relative">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#10B981]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#10B981] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#10B981] radar-ping inline-block" />
              HARD-EVIDENCE ARCHITECTURE // PRODUCTION PROOF
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white mt-3">
              Filterable Proof Portfolio
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9CA3AF] max-w-md">
            Explore live production builds. Every case study is verified with sub-second LCP metrics, Awwwards badges, and Google 3-Pack rank proof.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12 p-1.5 rounded-2xl bg-white/[0.02] border border-white/10 w-fit">
          {categories.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all relative ${
                  isActive
                    ? 'text-white'
                    : 'text-[#9CA3AF] hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePortfolioTab"
                    className="absolute inset-0 bg-[#E06927] rounded-xl -z-10 shadow-[0_0_20px_rgba(224,105,39,0.5)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
                <span>{tab.label}</span>
                <span className="ml-2 px-1.5 py-0.5 rounded-md bg-black/30 text-[10px] font-mono">
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-[#E06927]/60 transition-all duration-500 shadow-2xl flex flex-col justify-between"
              >
                {/* Visual Device Frame Top */}
                <div className="relative h-[260px] sm:h-[290px] w-full overflow-hidden bg-[#0D0F15]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-black/40" />

                  {/* Top Bar Device Tag & Awards */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white">
                      {deviceIcons[project.deviceType]}
                      <span>{project.categoryLabel}</span>
                    </div>

                    {project.awards && project.awards.length > 0 && (
                      <div className="px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-[10px] font-mono text-amber-400 font-bold flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        {project.awards[0]}
                      </div>
                    )}
                  </div>

                  {/* Circular Hover Badge ("Live Preview ↗") */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-20 h-20 rounded-full bg-[#E06927] text-white flex flex-col items-center justify-center shadow-[0_0_30px_rgba(224,105,39,0.8)] transform scale-75 group-hover:scale-100 transition-transform duration-300 font-mono text-[10px] font-bold tracking-tight">
                      <span>AUDIT</span>
                      <span className="flex items-center gap-0.5">
                        PROOF <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-[#E06927] uppercase tracking-wider">
                      {project.client}
                    </div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-[#E06927] transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    {/* Deliverables tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.deliverables.slice(0, 3).map((item, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#9CA3AF]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Verified Impact Stat Row */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 font-mono text-center">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-white/[0.02] p-2 rounded-xl">
                        <div className="text-[9px] text-[#9CA3AF] uppercase truncate">
                          {m.label}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-[#10B981] mt-0.5">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => onOpenBooking(project.title)}
                      className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#E06927] text-white text-xs font-mono font-medium transition-all duration-300 flex items-center justify-center gap-1.5 border border-white/10 hover:border-[#E06927]"
                    >
                      <span>REQUEST SIMILAR ARCHITECTURE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
