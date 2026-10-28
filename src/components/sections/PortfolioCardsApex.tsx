'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, Palette, Layers, Shield, type LucideIcon } from 'lucide-react';
import { ScrollBlurWords, ScrollSlideCard, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

interface Project {
  id: string;
  title: string;
  year: string;
  stageBg: string;
  image: string;
  tags: string[];
  icon: LucideIcon;
}

interface PortfolioCardsApexProps {
  onOpenBooking: (service?: string) => void;
}

export function PortfolioCardsApex({ onOpenBooking }: PortfolioCardsApexProps) {
  const projects: Project[] = [
    {
      id: 'aeline',
      title: 'Aeline',
      year: '2026',
      stageBg: '#0284c7', // Sky Azure Blue
      image: '/portfolio/aeline.jpg',
      tags: ['AI Strategy', 'Consulting'],
      icon: Sparkles,
    },
    {
      id: 'stodio',
      title: 'Stodio',
      year: '2026',
      stageBg: '#450a0a', // Deep Wine Crimson
      image: '/portfolio/stodio.jpg',
      tags: ['Design Agency', 'Branding'],
      icon: Palette,
    },
    {
      id: 'artemis',
      title: 'Artemis',
      year: '2026',
      stageBg: '#23120b', // Deep Ember Charcoal
      image: '/portfolio/artemis.jpg',
      tags: ['Creative Studio', 'Webflow'],
      icon: Layers,
    },
    {
      id: 'sterling-marsh',
      title: 'Sterling & Marsh',
      year: '2026',
      stageBg: '#262626', // Titanium Dark Slate
      image: '/portfolio/sterling-marsh.png',
      tags: ['Legal Counsel', 'Corporate Law'],
      icon: Shield,
    },
  ];

  return (
    <section id="works" className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 bg-transparent select-none border-b border-[#e7e2dd]">
      <div className="max-w-[84rem] mx-auto space-y-6 sm:space-y-8 lg:space-y-10">
        
        {/* Section Header with Word-by-Word Blur Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-[#e7e2dd] pb-6 sm:pb-8">
          <div className="space-y-2 sm:space-y-3">
            <ScrollBlurFade>
              <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest font-semibold block whitespace-nowrap">
                • SELECTED CLIENT WORK
              </span>
            </ScrollBlurFade>
            <ScrollBlurWords
              className="font-heading font-medium text-[2rem] sm:text-4xl lg:text-5xl text-[#060612] tracking-tight leading-[1.18] sm:leading-tight"
              segments={[
                'Real Builds.',
                { text: 'Proven Inbound Growth.', isCoral: true, isItalic: true },
              ]}
            />
          </div>
          <ScrollBlurFade delay={0.2}>
            <p className="text-body-sm text-[#52525b] font-body max-w-md">
              Every project is built for sub-second mobile speed, Google Map visibility, and measurable client inquiries.
            </p>
          </ScrollBlurFade>
        </div>

        {/* Clean Editorial Portfolio Grid (2-col on tablet & desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((project, idx) => (
            <ScrollSlideCard
              key={project.id}
              delay={idx * 0.15 + 0.1}
              onClick={() => onOpenBooking(project.title)}
              className="group cursor-pointer rounded-md sm:rounded-lg border border-[#e5e2dd] p-2.5 sm:p-3 transition-all duration-300 hover:border-[#ff6321]/30 hover:shadow-lg"
              style={{
                backgroundColor: '#f4f3f0',
                backgroundImage:
                  'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(0, 0, 0, 0.02) 6px, rgba(0, 0, 0, 0.02) 7px)',
              }}
            >
              {/* Top Colored Stage with Elevated Browser Window Mockup (3:2 Aspect Ratio) */}
              <div
                className="relative w-full aspect-[3/2] rounded-xs sm:rounded-sm overflow-hidden pt-3 sm:pt-4 md:pt-4 px-3 sm:px-4 md:px-5 pb-0 flex justify-center items-start transition-colors duration-500"
                style={{ backgroundColor: project.stageBg, aspectRatio: '3 / 2' }}
              >
                {/* Floating Browser / Window Mockup Canvas with Rounded Top Corners */}
                <div className="relative w-full h-full rounded-t-xs sm:rounded-t-sm overflow-hidden bg-white shadow-[0_16px_36px_rgba(0,0,0,0.30)] group-hover:shadow-[0_22px_44px_rgba(0,0,0,0.42)] group-hover:-translate-y-1 transition-all duration-300 ease-out border-t border-x border-white/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Bottom Meta Bar: Dots + Title/Year on Left, Tags on Right */}
              <div className="pt-2.5 sm:pt-3 pb-0.5 px-0.5 sm:px-1 flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
                {/* Left: Category Icon + Title & Year */}
                <div className="flex items-center gap-2.5 sm:gap-3">
                  {/* Category Icon Badge */}
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-white border border-[#e5e2dd] flex items-center justify-center text-[#ff6321] group-hover:bg-[#ff6321] group-hover:text-white transition-all duration-300 shadow-2xs shrink-0">
                    <project.icon className="w-4 h-4 stroke-[2]" />
                  </div>

                  {/* Project Title and Year */}
                  <div className="flex flex-col">
                    <div
                      style={{ fontSize: '1.25rem', lineHeight: '1.3' }}
                      className="font-heading font-semibold !text-[1.25rem] text-[#060612] tracking-tight leading-snug group-hover:text-[#ff6321] transition-colors"
                    >
                      {project.title}
                    </div>
                    <span className="font-body text-xs text-[#71717a] mt-0.5">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Right: Category / Service Badges */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium bg-[#e7e5e0] text-[#18181b] hover:bg-[#dedbd5] transition-colors shadow-2xs whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollSlideCard>
          ))}
        </div>

        {/* Bottom Action: Link to Full /work page */}
        <div className="flex justify-center pt-2 sm:pt-4">
          <a
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/10 bg-white hover:bg-[#ff6321] text-[#060612] hover:text-white transition-all duration-300 font-heading font-medium text-sm shadow-xs group"
          >
            <span>Explore All 10 Production Builds</span>
            <span className="text-[#ff6321] group-hover:text-white transition-colors">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}
