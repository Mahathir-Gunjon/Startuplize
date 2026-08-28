"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowUpRight,
  Sparkles,
  Star,
  ChevronDown,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

interface HeroProps {
  onOpenBooking: () => void;
}

const SOCIAL_AVATARS = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
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
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.1,
          }
        );
      }
    },
    { scope: containerRef }
  );

  const scrollToNextSection = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight * 0.9,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] text-white overflow-hidden flex flex-col justify-between items-center"
    >
      {/* =========================================================================
          1. HEAVILY ANIMATED FLUID MESH BACKGROUND (Framer Motion + Ambient Light)
          ========================================================================= */}
      <HeroBackground />

      {/* =========================================================================
          2. UPGRADED FOREGROUND UI (Center-Aligned Cinematic Hierarchy)
          ========================================================================= */}
      <div
        ref={contentRef}
        className="max-w-[1366px] w-full mx-auto flex flex-col items-center text-center my-auto relative z-10"
      >
        {/* Eyebrow Pill Tag */}
        <div className="hero-stagger-item inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#00D28F]/15 border border-[#00D28F]/40 text-xs font-mono font-medium tracking-widest uppercase text-[#00D28F] mb-8 backdrop-blur-md shadow-lg shadow-[#00D28F]/10">
          <span className="w-2 h-2 rounded-full bg-[#00D28F] animate-ping" />
          <span>Creative Partner for Ambitious Brands</span>
        </div>

        {/* Massive H1 Headline with 500/600 Refined Weight */}
        <h1 className="hero-stagger-item text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-medium tracking-tight text-white font-sans leading-[1.03] max-w-5xl mb-8">
          Conversion-led{" "}
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#00D28F] via-[#33FFBA] to-[#00B87D] inline-block px-1">
            Design &amp; Growth
          </span>{" "}
          Partner.
        </h1>

        {/* Tight Subheadline */}
        <p className="hero-stagger-item text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          We engineer high-converting Webflow flagships, headless Next.js platforms, and bespoke brand
          architectures for tier-1 tech founders who demand visual prestige and category dominance.
        </p>

        {/* =========================================================================
            CTA UNIT: Fixed Single-Line Button + Balanced Social Proof
            ========================================================================= */}
        <div className="hero-stagger-item flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-2xl mx-auto">
          {/* Primary Magnetic CTA Button (Strictly Single-Line with whitespace-nowrap) */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto h-14 shrink-0 inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-9 sm:py-4 rounded-full bg-[#00D28F] hover:bg-[#00B87D] text-[#0A0A0A] font-bold text-sm sm:text-base tracking-normal whitespace-nowrap shadow-xl shadow-[#00D28F]/35 hover:shadow-2xl hover:shadow-[#00D28F]/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
          >
            <Calendar className="w-4 h-4 shrink-0 text-[#0A0A0A]" />
            <span className="whitespace-nowrap font-bold">Start Your Project</span>
            <ArrowUpRight className="w-4 h-4 shrink-0 text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Secondary Element: 4 Overlapping Avatars + Social Proof */}
          <div className="w-full sm:w-auto h-14 shrink-0 inline-flex items-center justify-center gap-3.5 px-5 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.1] border border-white/12 backdrop-blur-xl shadow-lg transition-colors">
            {/* Avatars Cluster */}
            <div className="flex items-center -space-x-2.5 overflow-hidden shrink-0">
              {SOCIAL_AVATARS.map((avatar, idx) => (
                <div
                  key={idx}
                  className="inline-block relative w-7 h-7 rounded-full ring-2 ring-[#0A0A0A] overflow-hidden bg-zinc-800 shrink-0"
                >
                  <Image
                    src={avatar}
                    alt="Client Founder"
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Stars & Text */}
            <div className="flex flex-col text-left shrink-0">
              <div className="flex items-center gap-0.5 text-[#00D28F]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#00D28F]" />
                ))}
              </div>
              <span className="text-[11px] font-medium text-zinc-200 whitespace-nowrap">
                Trusted by 50+ scaling brands
              </span>
            </div>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div className="hero-stagger-item flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-12 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D28F]" />
            <span>4.9/5 Clutch Verified</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D28F]" />
            <span>18x Awwwards &amp; FWA</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D28F]" />
            <span>+184% Avg. CRO Lift</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. ANIMATED SCROLL INDICATOR
          ========================================================================= */}
      <button
        onClick={scrollToNextSection}
        aria-label="Scroll down"
        className="relative z-10 mt-10 flex flex-col items-center gap-2 text-zinc-400 hover:text-[#00D28F] transition-colors cursor-pointer group"
      >
        <div className="w-5 h-8 rounded-full border-2 border-white/20 group-hover:border-[#00D28F] flex items-start justify-center p-1 transition-colors">
          <div className="w-1 h-2 rounded-full bg-[#00D28F] animate-bounce" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">
          Scroll to explore
        </span>
      </button>
    </section>
  );
}
