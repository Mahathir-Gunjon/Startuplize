'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { useAdaptiveRem } from '@/hooks/useAdaptiveRem';
import { PageLoader } from '@/components/ui/PageLoader';
import { Header } from '@/components/layout/Header';
import { HeroAgnos } from '@/components/sections/HeroAgnos';
import { LogoMarqueeStrip } from '@/components/sections/LogoMarqueeStrip';
import { AgnosOfferings } from '@/components/sections/AgnosOfferings';
import { AgnosBento } from '@/components/sections/AgnosBento';
import { ServicesStackLumora } from '@/components/sections/ServicesStackLumora';
import { PortfolioCardsApex } from '@/components/sections/PortfolioCardsApex';
import { StatsCounterPanel } from '@/components/sections/StatsCounterPanel';
import { CaseStudiesLumora } from '@/components/sections/CaseStudiesLumora';
import { FaqApex } from '@/components/sections/FaqApex';
import { AgnosCtaBanner } from '@/components/sections/AgnosCtaBanner';
import { FooterApex } from '@/components/layout/FooterApex';
import { useRouter } from 'next/navigation';

export default function Home() {
  // Adaptive rem scaling
  useAdaptiveRem();

  const router = useRouter();

  const handleOpenBooking = () => {
    router.push('/contact');
  };

  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#faf9f8] text-[#060612] overflow-x-hidden">
        {/* 2. Menu Navbar (Startuplize floating header, transparent sticky phase) */}
        <Header onOpenBooking={handleOpenBooking} />

        {/* 3. Hero Section (Agnos Concentric Radar & 50+ Systems Showcase Spread) */}
        <HeroAgnos onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Agnos Offerings (Free Audit vs Dedicated Sprint) */}
        <AgnosOfferings onOpenBooking={handleOpenBooking} />

        {/* 6. Agnos Bento Grid (Why Startuplize) */}
        <AgnosBento />

        {/* 7. Core Capabilities (WordPress, Webflow, SEO, Local 3-Pack) */}
        <ServicesStackLumora onOpenBooking={handleOpenBooking} />

        {/* 8. Selected Work (Verified Production Platforms) */}
        <PortfolioCardsApex onOpenBooking={handleOpenBooking} />

        {/* 9. By the Numbers (Obsidian & Coral Data Pillars) */}
        <StatsCounterPanel />

        {/* 10. Hard Proof Before/After Comparison Sliders */}
        <CaseStudiesLumora onOpenBooking={handleOpenBooking} />

        {/* 4. Client Logo Marquee Strip */}
        <LogoMarqueeStrip />

        {/* 11. FAQ Protocol Accordion */}
        <FaqApex />

        {/* 12. Pre-Footer Coral CTA Banner */}
        <AgnosCtaBanner onOpenBooking={() => handleOpenBooking()} />

        {/* 13. Agnos Footer (Startuplize Directory & Watermark) */}
        <FooterApex onOpenBooking={() => handleOpenBooking()} />
      </div>
    </SmoothScrollProvider>
  );
}
