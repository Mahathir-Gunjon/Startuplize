"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowUpRight,
  Star,
  Calendar,
  Award,
} from "lucide-react";

// Performance Optimization: Dynamically load heavy 3D canvas background with ssr: false
const HeroBackground = dynamic(() => import("@/components/HeroBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#0A0A0A]" />,
});

interface HeroProps {
  onOpenBooking: () => void;
}

const SOCIAL_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
];

export default function Hero({ onOpenBooking }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (contentRef.current) {
        const animElements = contentRef.current.querySelectorAll(".hero-stagger-item");
        gsap.fromTo(
          animElements,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.1,
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full min-h-[92vh] lg:min-h-screen relative bg-[#0A0A0A] text-white flex flex-col justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* 100% Full-Width Interactive 3D Canvas Background */}
      <HeroBackground />

      {/* =========================================================================
          HERO FOREGROUND CONTAINER (12-Column Grid Alignment)
          ========================================================================= */}
      <div className="max-w-[1366px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end"
        >
          {/* =====================================================================
              LEFT COLUMN: HERO HEADLINE, SUBHEADING & DUAL CTA BUTTONS
              ===================================================================== */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Eyebrow Capsule Text Tag: text-[14px], not uppercase, not bold */}
            <div className="hero-stagger-item inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00D28F]/15 border border-[#00D28F]/40 text-[14px] font-normal font-mono text-[#00D28F] mb-6 self-start backdrop-blur-md shadow-lg shadow-[#00D28F]/10">
              <span className="w-2 h-2 rounded-full bg-[#00D28F] animate-ping" />
              <span>Creative Partner for Ambitious Brands</span>
            </div>

            {/* Strictly Single H1 per page (5xl md:7xl) with Instrument Serif Contrast */}
            <h1 className="hero-stagger-item text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-white font-sans mb-6">
              Crafting Digital{" "}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#00D28F] via-[#33FFBA] to-[#00B87D] inline-block px-1">
                Masterpieces
              </span>{" "}
              for Visionary Brands.
            </h1>

            {/* Body Text: Strictly Large Body Tier (text-[20px] md:text-[24px]) */}
            <p className="hero-stagger-item text-[20px] md:text-[24px] text-zinc-300 font-normal leading-relaxed max-w-2xl mb-8">
              We engineer high-converting Webflow flagships, headless Next.js platforms, and bespoke brand
              architectures for tier-1 tech founders who demand visual prestige and category dominance.
            </p>

            {/* Dual CTA Buttons (Standardized Button Micro-Interactions) */}
            <div className="hero-stagger-item flex flex-wrap items-center gap-4 w-full">
              {/* Primary Solid Mint Green Button */}
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00D28F] hover:bg-[#00B87D] text-[#0A0A0A] font-bold text-[14px] md:text-[16px] uppercase tracking-wider whitespace-nowrap shadow-lg shadow-[#00D28F]/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 group"
              >
                <Calendar className="w-4 h-4 shrink-0 text-[#0A0A0A]" />
                <span className="whitespace-nowrap font-bold">Start Your Project</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Secondary Frosted "Our Works" Button */}
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 hover:border-[#00D28F]/50 text-white font-bold text-[14px] md:text-[16px] uppercase tracking-wider whitespace-nowrap backdrop-blur-md shadow-md hover:scale-105 active:scale-95 transition-all duration-300 group"
              >
                <span>Our Works</span>
                <ArrowUpRight className="w-4 h-4 text-[#00D28F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* =====================================================================
              RIGHT-BOTTOM COLUMN: SHARPER APPLE GLASS CARD (rounded-2xl)
              ===================================================================== */}
          <div className="lg:col-span-4 hero-stagger-item w-full flex justify-start lg:justify-end">
            <div className="w-full max-w-md rounded-2xl bg-white/[0.06] hover:bg-white/[0.09] backdrop-blur-2xl border border-white/15 p-6 shadow-2xl shadow-black/40 transition-all duration-300 group">
              {/* Top Row: Avatars & 5.0 Star Rating */}
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                {/* Overlapping Client Avatars */}
                <div className="flex items-center -space-x-2.5 overflow-hidden shrink-0">
                  {SOCIAL_AVATARS.map((avatar, idx) => (
                    <div
                      key={idx}
                      className="inline-block relative w-8 h-8 rounded-full ring-2 ring-[#0A0A0A] overflow-hidden bg-zinc-800 shrink-0"
                    >
                      <Image
                        src={avatar}
                        alt="Client Founder"
                        width={32}
                        height={32}
                        sizes="32px"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>

                {/* Rating Badge */}
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1 text-[#00D28F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#00D28F]" />
                    ))}
                  </div>
                  <span className="text-[14px] md:text-[16px] font-mono font-bold text-white mt-1">
                    5.0 / 5.0 Rating
                  </span>
                </div>
              </div>

              {/* Title & Founder Review Quote: Small Body Tier */}
              <div className="space-y-2 mb-4">
                <h4 className="text-[16px] md:text-[18px] font-bold text-white font-sans flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#00D28F]" />
                  <span>Trusted by 50+ Scaling Brands</span>
                </h4>
                <p className="text-[14px] md:text-[16px] text-zinc-300 font-normal leading-relaxed italic">
                  &ldquo;Startuplize engineered our flagship 3D web experience in 2 weeks. Our conversion rate surged by <span className="text-[#00D28F] font-bold not-italic">+210%</span> post-launch.&rdquo;
                </p>
                <div className="text-[14px] text-zinc-400 font-medium">
                  — Alex Vance, Founder &amp; CEO at ApexHQ
                </div>
              </div>

              {/* Bottom Verified Metric Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/10 text-[14px] font-mono text-zinc-300">
                <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[#00D28F] font-normal">
                  • 99.8% CSAT
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white font-normal">
                  • 100/100 LCP
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white font-normal">
                  • 18 Awwwards
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
