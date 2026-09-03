'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Globe, Lightbulb, BarChart2 } from 'lucide-react';

export function AboutBentoGrid() {
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
  ];

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 bg-white select-none">
      <div className="max-w-[84rem] mx-auto space-y-16 sm:space-y-20">
        
        {/* Centered Eyebrow & Bold Headline with Inline Badges */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="text-body-sm font-mono text-[#111111] uppercase tracking-widest font-semibold">
            • ABOUT US
          </div>
          
          <h2 className="font-heading font-medium text-3xl sm:text-5xl lg:text-[3.25rem] text-[#111111] tracking-tight leading-[1.2]">
            A global consulting partner dedicated to building{' '}
            <span className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#38bdf8] text-white align-middle mx-1 shadow-sm">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>{' '}
            smarter and{' '}
            <span className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#bef264] text-[#0a0a0a] align-middle mx-1 shadow-sm">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>{' '}
            more adaptive
          </h2>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Card 1 (Left Tall Card — Span 4): Blue Container with IPSUM, Photo & 120+ stat */}
          <div className="lg:col-span-4 bg-[#38bdf8] rounded-[2rem] p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[480px]">
            {/* Top Bar: IPSUM Logo + Signal Icon */}
            <div className="flex items-center justify-between z-10">
              <span className="font-heading font-black text-2xl tracking-tighter text-white">
                IPSUM
              </span>
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0284c7] shadow-sm">
                <BarChart2 className="w-4 h-4" />
              </div>
            </div>

            {/* Photo of person looking upwards */}
            <div className="absolute inset-x-6 top-16 bottom-36 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80"
                alt="Partner portrait"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom White Overlay Card: 120+ */}
            <div className="bg-white rounded-2xl p-5 shadow-lg z-10 mt-auto">
              <div className="font-heading font-medium text-3xl sm:text-4xl text-[#0a0a0a]">
                120+
              </div>
              <p className="text-body-sm text-[#8d8d8d] mt-1 font-body leading-snug">
                Collaborating with leading AI and cloud technology providers.
              </p>
            </div>
          </div>

          {/* Card 2 (Middle Card — Span 4): Commitment to measurable / 100% + Avatars + Quote */}
          <div className="lg:col-span-4 bg-[#f5f4f0] rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between shadow-sm border border-[#e6e5e2] min-h-[480px]">
            <div className="space-y-2">
              <div className="text-body-sm font-mono text-[#8d8d8d]">
                Commitment to measurable
              </div>
              <div className="font-heading font-medium text-5xl sm:text-6xl text-[#0a0a0a]">
                100%
              </div>
            </div>

            <div className="space-y-5 pt-8 border-t border-[#e6e5e2]">
              {/* Overlapping Avatar Stack */}
              <div className="flex -space-x-2">
                {avatars.map((url, i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs">
                    <Image src={url} alt="Client avatar" fill className="object-cover" />
                  </div>
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="text-body text-[#111111]/90 font-body leading-relaxed">
                &ldquo;Their automation strategy completely reshaped how we work. It&apos;s efficient, intelligent, and seamless.&rdquo;
              </p>
            </div>
          </div>

          {/* Column 3 (Right Column — Span 4): Lime Card (520k+) + Dark Card (20+ Continents) */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 justify-between">
            
            {/* Card 3: Neon Lime Data Points Card */}
            <div className="bg-[#bef264] rounded-[2rem] p-7 sm:p-8 flex-1 flex flex-col justify-between shadow-md">
              <div className="text-body-sm font-mono text-[#0a0a0a]/70 uppercase font-semibold">
                Data Points
              </div>
              <div className="font-heading font-medium text-4xl sm:text-5xl text-[#0a0a0a] my-3">
                520k+
              </div>
              <p className="text-body-sm text-[#0a0a0a]/80 font-body leading-snug">
                Analyzed monthly to power smarter business strategies.
              </p>
            </div>

            {/* Card 4: Sleek Black Continents Card */}
            <div className="bg-[#0a0a0a] text-white rounded-[2rem] p-7 sm:p-8 flex items-center justify-between shadow-xl">
              <span className="text-body text-white/80 font-mono">
                Continents
              </span>
              <span className="font-heading font-medium text-4xl sm:text-5xl text-white">
                20+
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
