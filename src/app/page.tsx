'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { useAdaptiveRem } from '@/hooks/useAdaptiveRem';
import { PageLoader } from '@/components/ui/PageLoader';
import { Header } from '@/components/layout/Header';
import { HeroAgnos } from '@/components/sections/HeroAgnos';
import { CoreServicesSection } from '@/components/sections/CoreServicesSection';
import { AgnosOfferings } from '@/components/sections/AgnosOfferings';
import { AgnosBento } from '@/components/sections/AgnosBento';
import { ServicesStackLumora } from '@/components/sections/ServicesStackLumora';
import { PortfolioCardsApex } from '@/components/sections/PortfolioCardsApex';
import { TestimonialLaunchSection } from '@/components/sections/TestimonialLaunchSection';
import { WorkProcessSection } from '@/components/sections/WorkProcessSection';
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

        {/* 1. Hero Section (Agnos Concentric Radar & 50+ Systems Showcase Spread) */}
        <HeroAgnos onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Why Startuplize (Bento Grid: Global Footprint, Founder Partnership, Benchmarks, Audit CTA) */}
        <AgnosBento onOpenBooking={handleOpenBooking} />

        {/* 3. Our Core Services (3 Cards: Build/Redesign, Local SEO, Brand Design) */}
        <CoreServicesSection onOpenBooking={handleOpenBooking} />

        {/* 4. Selected Work (Verified Production Platforms - Portfolio) */}
        <PortfolioCardsApex onOpenBooking={handleOpenBooking} />

        {/* 5. Agnos Offerings (Free Audit vs Dedicated Sprint) */}
        <AgnosOfferings onOpenBooking={handleOpenBooking} />

        {/* 9. Core Capabilities (WordPress, Webflow, SEO, Local 3-Pack) */}
        <ServicesStackLumora onOpenBooking={handleOpenBooking} />

        {/* 7. How We Work (Start-to-Finish Work Process & Clients Marquee) */}
        <WorkProcessSection onOpenBooking={handleOpenBooking} />

        {/* 8. What They Say After Launch (Verified Client Feedback Carousel) */}
        <TestimonialLaunchSection onOpenBooking={handleOpenBooking} />

        {/* 9. FAQ Protocol Accordion */}
        <FaqApex />

        {/* 12. Pre-Footer Coral CTA Banner */}
        <AgnosCtaBanner onOpenBooking={() => handleOpenBooking()} />

        {/* 13. Agnos Footer (Startuplize Directory & Watermark) */}
        <FooterApex onOpenBooking={() => handleOpenBooking()} />
      </div>
    </SmoothScrollProvider>
  );
}
