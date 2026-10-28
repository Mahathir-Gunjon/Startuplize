'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { useAdaptiveRem } from '@/hooks/useAdaptiveRem';
import { Header } from '@/components/layout/Header';
import { FooterApex } from '@/components/layout/FooterApex';
import { AgnosCtaBanner } from '@/components/sections/AgnosCtaBanner';
import { motion, AnimatePresence } from 'framer-motion';
import { PillButton } from '@/components/ui/PillButton';
import {
  Sparkles,
  Palette,
  Layers,
  Shield,
  Zap,
  TrendingUp,
  Activity,
  Cloud,
  Compass,
  ShoppingBag,
  Cpu,
  Scale,
  LayoutGrid,
  type LucideIcon,
} from 'lucide-react';

type FilterCategory = 'UI/UX' | 'Developments' | 'SEO' | 'Brand Design';

interface Project {
  id: string;
  title: string;
  year: string;
  stageBg: string;
  image: string;
  tags: string[];
  icon: LucideIcon;
  categories: FilterCategory[];
}

export default function WorkPage() {
  useAdaptiveRem();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<'All' | FilterCategory>('All');

  const handleOpenBooking = (projectTitle?: string) => {
    router.push('/contact');
  };

  const projects: Project[] = [
    {
      id: 'aeline',
      title: 'Aeline',
      year: '2026',
      stageBg: '#0284c7', // Sky Azure Blue
      image: '/portfolio/aeline.jpg',
      tags: ['AI Strategy', 'Consulting'],
      icon: Sparkles,
      categories: ['UI/UX', 'Brand Design'],
    },
    {
      id: 'stodio',
      title: 'Stodio',
      year: '2026',
      stageBg: '#450a0a', // Deep Wine Crimson
      image: '/portfolio/stodio.jpg',
      tags: ['Design Agency', 'Branding'],
      icon: Palette,
      categories: ['Brand Design', 'UI/UX'],
    },
    {
      id: 'artemis',
      title: 'Artemis',
      year: '2026',
      stageBg: '#23120b', // Deep Ember Charcoal
      image: '/portfolio/artemis.jpg',
      tags: ['Creative Studio', 'Webflow'],
      icon: Layers,
      categories: ['UI/UX'],
    },
    {
      id: 'sterling-marsh',
      title: 'Sterling & Marsh',
      year: '2026',
      stageBg: '#262626', // Titanium Dark Slate
      image: '/portfolio/sterling-marsh.png',
      tags: ['Legal Counsel', 'Corporate Law'],
      icon: Shield,
      categories: ['SEO'],
    },
    {
      id: 'apex-electric',
      title: 'Apex Electric & Solar',
      year: '2026',
      stageBg: '#1e3a8a', // Deep Sapphire Blue
      image: '/portfolio/apex-electric.jpg',
      tags: ['Commercial Solar', 'Local 3-Pack'],
      icon: Zap,
      categories: ['SEO', 'Developments'],
    },
    {
      id: 'brightpath-cfo',
      title: 'BrightPath CFO',
      year: '2026',
      stageBg: '#1e293b', // Rich Slate Navy
      image: '/portfolio/brightpath-cfo.png',
      tags: ['Financial Advisory', 'Custom ACF'],
      icon: TrendingUp,
      categories: ['Developments'],
    },
    {
      id: 'primecare-dental',
      title: 'PrimeCare Dental & Ortho',
      year: '2026',
      stageBg: '#0f766e', // Deep Emerald Teal
      image: '/portfolio/primecare-dental.jpg',
      tags: ['Healthcare Clinic', 'Google Maps #1'],
      icon: Activity,
      categories: ['SEO'],
    },
    {
      id: 'lumina-cloud',
      title: 'Lumina Cloud',
      year: '2026',
      stageBg: '#312e81', // Deep Indigo Night
      image: '/portfolio/lumina-cloud.jpg',
      tags: ['SaaS Platform', 'Webflow CMS'],
      icon: Cloud,
      categories: ['Developments', 'UI/UX'],
    },
    {
      id: 'solis-living',
      title: 'Solis Studio',
      year: '2026',
      stageBg: '#3f3f46', // Neutral Slate Stone
      image: '/portfolio/solis-living.jpg',
      tags: ['Architecture Studio', 'Cinema Motion'],
      icon: Compass,
      categories: ['UI/UX', 'Brand Design'],
    },
    {
      id: 'aegis-commerce',
      title: 'Aegis Horology',
      year: '2026',
      stageBg: '#18181b', // Pure Obsidian Black
      image: '/portfolio/aegis-commerce.jpg',
      tags: ['Headless Commerce', 'Next.js 15'],
      icon: ShoppingBag,
      categories: ['Developments'],
    },
    {
      id: 'forma-health',
      title: 'Forma Longevity',
      year: '2026',
      stageBg: '#1c3829', // Deep Forest Sage
      image: '/portfolio/forma-health.jpg',
      tags: ['HealthTech Portal', 'Design System'],
      icon: Activity,
      categories: ['UI/UX', 'Developments'],
    },
    {
      id: 'hyperion-logistics',
      title: 'Hyperion Logistics',
      year: '2026',
      stageBg: '#061325', // Deep Midnight Cyan
      image: '/portfolio/hyperion-logistics.jpg',
      tags: ['Global Freight API', 'Realtime Fleet'],
      icon: Cpu,
      categories: ['Developments'],
    },
    {
      id: 'summit-ridge-law',
      title: 'Summit Ridge Legal',
      year: '2026',
      stageBg: '#0a192f', // Executive Midnight Navy
      image: '/portfolio/summit-ridge-law.jpg',
      tags: ['Trial Attorneys', 'Local Geo-Rank #1'],
      icon: Scale,
      categories: ['SEO'],
    },
    {
      id: 'kroma-design',
      title: 'Kroma & Co.',
      year: '2026',
      stageBg: '#1c1917', // Warm Charcoal Onyx
      image: '/portfolio/kroma-design.png',
      tags: ['Brand Architecture', 'Custom Type'],
      icon: Palette,
      categories: ['Brand Design', 'UI/UX'],
    },
    {
      id: 'nexus-pay',
      title: 'NexusPay Treasury',
      year: '2026',
      stageBg: '#080b14', // Deep Quantum Obsidian
      image: '/portfolio/nexus-pay.png',
      tags: ['FinTech Protocol', 'Sub-Second API'],
      icon: Zap,
      categories: ['Developments', 'UI/UX'],
    },
  ];

  interface FilterTabItem {
    id: 'All' | FilterCategory;
    name: string;
    icon: LucideIcon;
  }

  const filterTabs: FilterTabItem[] = [
    { id: 'All', name: 'All', icon: LayoutGrid },
    { id: 'UI/UX', name: 'UI/UX', icon: Sparkles },
    { id: 'Developments', name: 'Developments', icon: Layers },
    { id: 'SEO', name: 'SEO', icon: TrendingUp },
    { id: 'Brand Design', name: 'Brand Design', icon: Palette },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

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

          {/* Interactive Filter Bar: Simple & clean design, sharp edges, tray padding, compact buttons, no underline */}
          <div className="w-full flex justify-center pt-8 sm:pt-10 pb-5 sm:pb-8 px-4 sm:px-6">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 border border-[#e5e2dd] bg-[#f4f3f0] overflow-x-auto max-w-full rounded-none shadow-2xs">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFilter(tab.id)}
                    style={{
                      backgroundColor: isActive ? '#060612' : 'transparent',
                      color: isActive ? '#ffffff' : '#52525b',
                    }}
                    className={`flex items-center justify-center gap-2 px-3.5 sm:px-4.5 py-1.5 sm:py-2 text-xs sm:text-sm font-heading tracking-wide transition-all duration-150 whitespace-nowrap cursor-pointer rounded-none border-none outline-none ${
                      isActive
                        ? '!text-white !bg-[#060612] font-semibold shadow-2xs'
                        : 'text-[#52525b] font-medium hover:!text-[#060612] hover:bg-black/5'
                    }`}
                  >
                    <tab.icon
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors"
                      style={{ color: isActive ? '#ff6321' : '#71717a' }}
                    />
                    <span
                      style={{ color: isActive ? '#ffffff' : '#374151' }}
                      className={isActive ? '!text-white font-semibold' : 'font-medium'}
                    >
                      {tab.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Full-Width Portfolio Grid: 3 Cards in a Row on Desktop */}
          <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pt-2 sm:pt-4">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 10 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                      delay: (idx % 3) * 0.04,
                    }}
                    onClick={() => handleOpenBooking(project.title)}
                    className="group cursor-pointer rounded-md sm:rounded-lg border border-[#e5e2dd] p-2.5 sm:p-3 transition-all duration-300 hover:border-[#ff6321]/30 hover:shadow-lg flex flex-col justify-between"
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
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>

                    {/* Bottom Meta Bar: Category Icon + Title & Year on Left, Tags on Right */}
                    <div className="pt-2.5 sm:pt-3 pb-0.5 px-0.5 sm:px-1 flex flex-wrap items-center justify-between gap-2.5">
                      {/* Left: Category Icon + Title & Year */}
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        {/* Category Icon Badge */}
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-white border border-[#e5e2dd] flex items-center justify-center text-[#ff6321] group-hover:bg-[#ff6321] group-hover:text-white transition-all duration-300 shadow-2xs shrink-0">
                          <project.icon className="w-4 h-4 stroke-[2]" />
                        </div>

                        {/* Project Title and Year */}
                        <div className="flex flex-col">
                          <div
                            style={{ fontSize: '1.2rem', lineHeight: '1.3' }}
                            className="font-heading font-semibold text-[#060612] tracking-tight leading-snug group-hover:text-[#ff6321] transition-colors"
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
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </section>

          {/* CTA Banner Section */}
          <div className="mt-14 sm:mt-20 lg:mt-28">
            <AgnosCtaBanner onOpenBooking={() => handleOpenBooking()} />
          </div>
        </main>

        {/* Global Footer */}
        <FooterApex onOpenBooking={() => handleOpenBooking()} />

      </div>
    </SmoothScrollProvider>
  );
}
