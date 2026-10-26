'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { useAdaptiveRem } from '@/hooks/useAdaptiveRem';
import { Header } from '@/components/layout/Header';
import { FooterApex } from '@/components/layout/FooterApex';
import { AgnosCtaBanner } from '@/components/sections/AgnosCtaBanner';
import { motion } from 'framer-motion';
import { PillButton } from '@/components/ui/PillButton';
import { ScrollSlideCard } from '@/components/ui/ScrollAnimations';

interface Project {
  id: string;
  title: string;
  year: string;
  stageBg: string;
  dots: boolean[];
  image: string;
  tags: string[];
}

export default function WorkPage() {
  useAdaptiveRem();
  const router = useRouter();

  const handleOpenBooking = (projectTitle?: string) => {
    router.push('/contact');
  };

  const projects: Project[] = [
    {
      id: 'aeline',
      title: 'Aeline',
      year: '2026',
      stageBg: '#0284c7', // Sky Azure Blue
      dots: [true, true, false, false],
      image: '/portfolio/aeline.jpg',
      tags: ['AI Strategy', 'Consulting'],
    },
    {
      id: 'stodio',
      title: 'Stodio',
      year: '2026',
      stageBg: '#450a0a', // Deep Wine Crimson
      dots: [true, true, true, false],
      image: '/portfolio/stodio.jpg',
      tags: ['Design Agency', 'Branding'],
    },
    {
      id: 'artemis',
      title: 'Artemis',
      year: '2026',
      stageBg: '#23120b', // Deep Ember Charcoal
      dots: [true, true, false, false],
      image: '/portfolio/artemis.jpg',
      tags: ['Creative Studio', 'Webflow'],
    },
    {
      id: 'sterling-marsh',
      title: 'Sterling & Marsh',
      year: '2026',
      stageBg: '#262626', // Titanium Dark Slate
      dots: [true, true, true, true],
      image: '/portfolio/sterling-marsh.png',
      tags: ['Legal Counsel', 'Corporate Law'],
    },
    {
      id: 'apex-electric',
      title: 'Apex Electric & Solar',
      year: '2026',
      stageBg: '#1e3a8a', // Deep Sapphire Blue
      dots: [true, true, true, false],
      image: '/portfolio/apex-electric.jpg',
      tags: ['Commercial Solar', 'Local 3-Pack'],
    },
    {
      id: 'brightpath-cfo',
      title: 'BrightPath CFO',
      year: '2026',
      stageBg: '#1e293b', // Rich Slate Navy
      dots: [true, true, false, false],
      image: '/portfolio/brightpath-cfo.png',
      tags: ['Financial Advisory', 'Custom ACF'],
    },
    {
      id: 'primecare-dental',
      title: 'PrimeCare Dental & Ortho',
      year: '2026',
      stageBg: '#0f766e', // Deep Emerald Teal
      dots: [true, true, true, true],
      image: '/portfolio/primecare-dental.jpg',
      tags: ['Healthcare Clinic', 'Google Maps #1'],
    },
    {
      id: 'lumina-cloud',
      title: 'Lumina Cloud',
      year: '2026',
      stageBg: '#312e81', // Deep Indigo Night
      dots: [true, true, true, false],
      image: '/portfolio/lumina-cloud.jpg',
      tags: ['SaaS Platform', 'Webflow CMS'],
    },
    {
      id: 'solis-living',
      title: 'Solis Studio',
      year: '2026',
      stageBg: '#3f3f46', // Neutral Slate Stone
      dots: [true, true, false, false],
      image: '/portfolio/solis-living.jpg',
      tags: ['Architecture Studio', 'Cinema Motion'],
    },
    {
      id: 'aegis-commerce',
      title: 'Aegis Horology',
      year: '2026',
      stageBg: '#18181b', // Pure Obsidian Black
      dots: [true, true, true, true],
      image: '/portfolio/aegis-commerce.jpg',
      tags: ['Headless Commerce', 'Next.js 15'],
    },
  ];

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#faf9f8] text-[#060612] selection:bg-[#ff6321] selection:text-white overflow-x-hidden flex flex-col justify-between">
        
        {/* Navigation Header */}
        <Header onOpenBooking={() => handleOpenBooking()} />

        <main className="w-full pt-28 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 lg:pb-24">
          
          {/* Page Hero Header: Centered Eyebrow, Hook Headline, Body Text & CTA Button */}
          <section className="w-full max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-12 pb-10 sm:pb-14 border-b border-[#e7e2dd] text-center">
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 max-w-4xl mx-auto">
              
              {/* Eyebrow: Same style as other sections */}
              <div>
                <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest font-semibold block whitespace-nowrap">
                  • SELECTED CLIENT WORK
                </span>
              </div>

              {/* Headline Hook: Exactly 3rem on desktop */}
              <h1
                className="font-heading font-medium text-[2.25rem] md:text-[3rem] text-[#060612] tracking-tight leading-[1.15] text-center"
                style={{ fontSize: '3rem', lineHeight: 1.15 }}
              >
                From Outdated and Overlooked<br className="hidden sm:block" />
                <span className="text-[#ff6321] italic font-normal">
                  To The Obvious Local Choice.
                </span>
              </h1>

              {/* Subheading: Dark text color (#060612), bold and crisp, 100% visible on desktop */}
              <p
                className="text-base sm:text-lg md:text-xl text-[#060612] font-body max-w-3xl mx-auto leading-relaxed text-center font-normal block"
                style={{ color: '#060612', opacity: 1, display: 'block', visibility: 'visible' }}
              >
                We rebuild underperforming websites into clean, high-converting digital storefronts, pairing strategic brand design with Google Maps visibility across your service area.
              </p>

              {/* Centered Button: Book a call */}
              <div className="pt-2 sm:pt-3 flex justify-center">
                <PillButton
                  variant="coral"
                  size="md"
                  href="/contact"
                  onClick={() => handleOpenBooking()}
                  showArrow={true}
                  className="shadow-sm hover:scale-105"
                >
                  Book a call
                </PillButton>
              </div>

            </div>
          </section>

          {/* 10-Portfolio Grid (Same structure and design as homepage) */}
          <section className="w-full max-w-[84rem] mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
              {projects.map((project, idx) => (
                <ScrollSlideCard
                  key={project.id}
                  delay={0.05 + (idx % 2) * 0.1}
                  onClick={() => handleOpenBooking(project.title)}
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
                    {/* Left: Indicator Dots + Title & Year */}
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      {/* 4 Status Dots */}
                      <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                        {project.dots.map((isActive, i) => (
                          <span
                            key={i}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              isActive ? 'bg-[#ff4d29]' : 'bg-[#d4d4d8]'
                            }`}
                          />
                        ))}
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
          </section>

          {/* CTA Banner Section */}
          <div className="mt-12 sm:mt-16 lg:mt-24">
            <AgnosCtaBanner onOpenBooking={() => handleOpenBooking()} />
          </div>
        </main>

        {/* Global Footer */}
        <FooterApex onOpenBooking={() => handleOpenBooking()} />

      </div>
    </SmoothScrollProvider>
  );
}
