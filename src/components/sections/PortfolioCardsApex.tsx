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
      title: 'Nexus Health',
      category: 'WordPress & Elementor',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      description:
        'Rebuilt slow medical clinic portal with a clean custom WordPress architecture, dropping load time to 0.6s and driving a 320% patient consultation booking increase.',
      tags: ['WordPress', 'Elementor Pro', 'Local SEO', 'Speed Optimization'],
      badge: '0.6s Mobile Speed · +320% Bookings',
    },
    {
      id: 'aura-living',
      title: 'Aura Living',
      category: 'Webflow / eCommerce',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      description:
        'Rebuilt from slow commercial template to custom Webflow eCommerce platform, increasing checkout conversion rate by 42% on mobile devices.',
      tags: ['Webflow', 'eCommerce', 'Responsive Design', 'Cart Flow'],
      badge: '+42% Conversion Lift',
    },
    {
      id: 'vanguard-legal',
      title: 'Vanguard Legal',
      category: 'Local SEO & WordPress',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      description:
        'Optimized Google Business Profile and local citations across 3 key metropolitan zones, generating 380+ direct inbound qualified phone consultations monthly.',
      tags: ['Google Maps', 'GBP Optimization', 'WordPress', 'Local Citations'],
      badge: '+380 Inbound Calls/Mo',
    },
    {
      id: 'kore-capital',
      title: 'Kore Capital',
      category: 'Webflow / Financial Platform',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
      description:
        'Clean high-trust layout with responsive interactive financial calculators, sub-second latency, and verified lead capture workflows.',
      tags: ['Webflow', 'FinTech', 'Calculators', 'Lead Capture'],
      badge: 'Sub-Second Latency',
    },
  ];

  return (
    <section id="works" className="py-24 sm:py-36 px-6 sm:px-12 bg-white select-none border-b border-[#e7e2dd]">
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

        {/* 4 Deep-Black Ink Cards with Staggered Slide Reveals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project, idx) => (
            <ScrollSlideCard
              key={project.id}
              delay={idx * 0.15 + 0.1}
              onClick={() => onOpenBooking(project.title)}
              className="bg-[#060612] text-white rounded-[2.5rem] p-6 sm:p-10 flex flex-col justify-between shadow-2xl hover:border-[#ff6321]/50 border border-white/5 transition-all duration-300 group cursor-pointer"
            >
              {/* Top Meta Row */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-body-sm font-mono text-[#69686e] uppercase tracking-wider block whitespace-nowrap">
                    {project.category}
                  </span>
                  <span className="text-body-sm font-mono text-white/50 whitespace-nowrap">
                    RELEASE // {project.year}
                  </span>
                </div>

                {/* Circular magnetic badge with ArrowUpRight */}
                <div className="w-12 h-12 rounded-full bg-white text-[#060612] flex items-center justify-center group-hover:bg-[#ff6321] group-hover:text-white transition-colors duration-300 shadow-md shrink-0">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300 stroke-[2.2]" />
                </div>
              </div>

              {/* Center: High-Fidelity Image Mockup Frame */}
              <div className="relative h-[280px] sm:h-[340px] w-full rounded-2xl overflow-hidden my-6 sm:my-8 bg-[#161922] border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                
                {/* Floating Metric Badge */}
                <div className="absolute bottom-4 left-4 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-body-sm font-mono text-[#ff7e47] font-bold whitespace-nowrap shrink-0">
                  {project.badge}
                </div>
              </div>

              {/* Bottom: Project Name, 2-line performance metric description & TagChips */}
              <div className="space-y-4">
                <h3 className="font-heading font-medium text-2xl sm:text-3xl text-white group-hover:text-[#ff6321] transition-colors">
                  {project.title}
                </h3>
                <p className="text-body text-[#69686e] leading-relaxed font-body">
                  {project.description}
                </p>

                {/* Tag Chips with strict whitespace-nowrap shrink-0 */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/10 text-body-sm font-mono text-white/90 border border-white/5 whitespace-nowrap shrink-0"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollSlideCard>
          ))}
        </div>

      </div>
    </section>
  );
}
