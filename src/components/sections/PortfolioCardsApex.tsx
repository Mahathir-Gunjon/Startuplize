'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { ScrollBlurWords, ScrollSlideCard, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

interface PortfolioCardsApexProps {
  onOpenBooking: (service?: string) => void;
}

export function PortfolioCardsApex({ onOpenBooking }: PortfolioCardsApexProps) {
  const projects = [
    {
      id: 'nexus-health',
      title: 'Nexus Health — Clinical Medical Portal',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
      tech: ['WordPress', 'Elementor Pro', 'Custom ACF', 'Local SEO', 'Speed Optimization'],
    },
    {
      id: 'aura-living',
      title: 'Aura Living — Direct-to-Consumer eCommerce',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
      tech: ['Webflow CMS', 'eCommerce', 'Custom Interactions', 'Responsive Design'],
    },
    {
      id: 'vanguard-legal',
      title: 'Vanguard Legal — Corporate Firm & Local Authority',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80',
      tech: ['WordPress', 'Google Map 3-Pack', 'GBP Optimization', 'Local Citations'],
    },
    {
      id: 'kore-capital',
      title: 'Kore Capital — Institutional FinTech Platform',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1400&q=80',
      tech: ['Webflow CMS', 'FinTech Architecture', 'Interactive Calculators', 'Lead Funnel'],
    },
  ];

  return (
    <section id="works" className="py-24 sm:py-36 px-6 sm:px-12 bg-transparent select-none">
      <div className="max-w-[84rem] mx-auto space-y-16">
        
        {/* Section Header with Word-by-Word Blur Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e7e2dd] pb-8">
          <div className="space-y-3">
            <ScrollBlurFade>
              <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest font-semibold block whitespace-nowrap">
                • SELECTED CLIENT WORK
              </span>
            </ScrollBlurFade>
            <ScrollBlurWords
              className="font-heading font-medium text-3xl sm:text-5xl text-[#060612] tracking-tight"
              segments={[
                'Real Builds.',
                { text: 'Proven Inbound Growth.', isCoral: true },
              ]}
            />
          </div>
          <ScrollBlurFade delay={0.2}>
            <p className="text-body-sm text-[#69686e] font-body max-w-md">
              Every project is engineered for sub-second mobile speed, Google Map visibility, and measurable client inquiries.
            </p>
          </ScrollBlurFade>
        </div>

        {/* Clean Editorial Portfolio Grid (No borders, no padding, no background) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-12 sm:gap-y-16">
          {projects.map((project, idx) => (
            <ScrollSlideCard
              key={project.id}
              delay={idx * 0.15 + 0.1}
              onClick={() => onOpenBooking(project.title)}
              className="group cursor-pointer flex flex-col space-y-4 sm:space-y-5"
            >
              {/* Clean Image Frame */}
              <div className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#eeecea]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Heading Title about the Project */}
              <div className="flex items-start justify-between gap-4 pt-1">
                <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-[#060612] group-hover:text-[#ff6321] transition-colors leading-snug">
                  {project.title}
                </h3>
                <div className="w-9 h-9 rounded-full bg-black/5 text-[#060612] group-hover:bg-[#ff6321] group-hover:text-white transition-all flex items-center justify-center shrink-0 mt-0.5">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Tech Stack Capsules */}
              <div className="flex flex-wrap gap-2 pt-0.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs sm:text-sm font-mono font-medium bg-[#f5f4f3] text-[#060612] border border-[#e7e2dd] whitespace-nowrap shrink-0 group-hover:border-[#ff6321]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollSlideCard>
          ))}
        </div>

      </div>
    </section>
  );
}
