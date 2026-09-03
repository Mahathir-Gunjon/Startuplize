'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Award } from 'lucide-react';
import { StackedLines } from '@/components/ui/StackedLines';

interface PortfolioCardsLumoraProps {
  onOpenBooking: (service?: string) => void;
}

export function PortfolioCardsLumora({ onOpenBooking }: PortfolioCardsLumoraProps) {
  const projects = [
    {
      id: 'aegis-horology',
      title: 'Aegis Horology UK',
      category: 'Headless WordPress & WooCommerce',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      description:
        'Rebuilt legacy WooCommerce store to bespoke Headless Next.js architecture, dropping LCP to 0.52s and raising checkout conversions by +140%.',
      tags: ['Headless WP', 'Next.js App Router', 'Redis Cache', 'Sub-second LCP'],
      badge: '100/100 CWV',
    },
    {
      id: 'lumina-cloud',
      title: 'Lumina Cloud Infrastructure',
      category: 'Webflow Architecture & Motion',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      description:
        'Constructed custom Webflow CMS with 60fps GLSL shaders and Finsweet Client-First V2 standards. Won Awwwards Site of the Day.',
      tags: ['Webflow CMS', 'GSAP Motion', 'Finsweet V2', 'Awwwards SOTD'],
      badge: '60 FPS Motion',
    },
    {
      id: 'apex-healthcare',
      title: 'Apex Healthcare Partners',
      category: 'Local 3-Pack & GBP Domination',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      description:
        'Dominated the Google Local 3-Pack across 8 regional clinic territories, generating 380+ direct inbound qualified phone calls monthly.',
      tags: ['Google Business Profile', 'CallRail AI', 'Local Schema', 'SMS Funnel'],
      badge: '#1 Google Map Pin',
    },
    {
      id: 'quantix-analytics',
      title: 'Quantix Global Software',
      category: 'Enterprise Technical & Programmatic SEO',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
      description:
        'Engineered 1,200 automated programmatic comparison landing pages with JSON-LD entity schema, driving +340% organic GA4 session expansion.',
      tags: ['Programmatic SEO', 'JSON-LD Graphs', 'Edge Indexing', '+$1.8M ARR'],
      badge: '+340% Traffic',
    },
  ];

  return (
    <section id="works" className="py-28 sm:py-36 px-6 sm:px-12 bg-white select-none">
      <div className="max-w-[88rem] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-[#b15f2c] uppercase tracking-widest font-semibold block mb-2">
              SELECTED WORKS
            </span>
            <div className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight">
              <StackedLines
                trigger={true}
                delay={0.05}
                lines={['Engineered proof.', 'Not promises.']}
              />
            </div>
          </div>
          <p className="text-sm sm:text-base text-[#8d8d8d] max-w-md font-sans">
            Every project represents a verified turnaround in page speed, organic search indexation, and conversion rate.
          </p>
        </div>

        {/* 2-Column Grid of #0a0a0a Ink Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenBooking(project.title)}
              className="bg-[#0a0a0a] text-white rounded-[2rem] p-6 sm:p-10 flex flex-col justify-between shadow-2xl hover:border-[#cf8047]/40 border border-transparent transition-all duration-300 group cursor-pointer"
            >
              {/* Top Meta Row */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-[#8d8d8d] uppercase tracking-wider block">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-white/50">RELEASE // {project.year}</span>
                </div>

                {/* Circular magnetic badge with ArrowUpRight that rotates 45° on hover */}
                <div className="w-12 h-12 rounded-full bg-white text-[#0a0a0a] flex items-center justify-center group-hover:bg-[#cf8047] group-hover:text-white transition-colors duration-300 shadow-md">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300 stroke-[2.2]" />
                </div>
              </div>

              {/* Center High-Fidelity Mockup Frame */}
              <div className="relative h-[280px] sm:h-[360px] w-full rounded-2xl overflow-hidden my-6 sm:my-8 bg-[#161922] border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-104 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                
                {/* Floating Metric Badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-[#cf8047] font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>{project.badge}</span>
                </div>
              </div>

              {/* Bottom Details & TagChips */}
              <div className="space-y-4">
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-white group-hover:text-[#cf8047] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#8d8d8d] leading-relaxed">
                  {project.description}
                </p>

                {/* Tag Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/90 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
