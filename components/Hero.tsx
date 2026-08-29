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
  Calendar,
  ShieldCheck,
  Award,
  TrendingUp,
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

  return (
    <section
      ref={containerRef}
      className="w-full min-h-[92vh] lg:min-h-screen relative bg-[#0A0A0A] text-white flex flex-col justify-center pt-36 pb-20 overflow-hidden"
    >
      {/* 100% Full-Width Interactive 3D Canvas Animated Background */}
      <HeroBackground />

      {/* =========================================================================
          HERO FOREGROUND CONTAINER (Left-Aligned Content + Right-Bottom Apple Glass Card)
          ========================================================================= */}
      <div className="max-w-[1366px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end"
        >
          {/* =====================================================================
              LEFT COLUMN: HERO HEADLINE, SUBHEADING & DUAL CTA BUTTONS
              ===================================================================== */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Eyebrow Capsule Text Tag (Top Left) */}
            <div className="hero-stagger-item inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#00D28F]/15 border border-[#00D28F]/40 text-xs font-mono font-bold tracking-wider uppercase text-[#00D28F] mb-6 self-start backdrop-blur-md shadow-lg shadow-[#00D28F]/10">
              <span className="w-2 h-2 rounded-full bg-[#00D28F] animate-ping" />
              <span>Creative Partner for Ambitious Brands</span>
            </div>

            {/* High-Impact H1 Statement with Instrument Serif Contrast */}
            <h1 className="hero-stagger-item text-4xl sm:text-6xl md:text-7xl lg:text-[4.5rem] xl:text-[5.2rem] font-medium tracking-tight leading-[1.04] text-white font-sans mb-6">
              Crafting Digital{" "}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#00D28F] via-[#33FFBA] to-[#00B87D] inline-block px-1">
                Masterpieces
              </span>{" "}
              for Visionary Brands.
            </h1>

            {/* Subheading */}
            <p className="hero-stagger-item text-base sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-10">
              We engineer high-converting Webflow flagships, headless Next.js platforms, and bespoke brand
              architectures for tier-1 tech founders who demand visual prestige and category dominance.
            </p>

            {/* Dual CTA Buttons: [Start Your Project] + [Our Works] */}
            <div className="hero-stagger-item flex flex-wrap items-center gap-4 sm:gap-5 w-full">
              {/* Primary Solid Mint Green Button */}
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:px-9 sm:py-4.5 rounded-full bg-[#00D28F] hover:bg-[#00B87D] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-xl shadow-[#00D28F]/30 hover:shadow-2xl hover:shadow-[#00D28F]/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 group"
              >
                <Calendar className="w-4 h-4 shrink-0 text-[#0A0A0A]" />
                <span className="whitespace-nowrap font-bold">Start Your Project</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Secondary Frosted "Our Works" Button */}
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:px-8 sm:py-4.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 hover:border-[#00D28F]/50 text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap backdrop-blur-md shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 group"
              >
                <span>Our Works</span>
                <ArrowUpRight className="w-4 h-4 text-[#00D28F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* =====================================================================
              RIGHT-BOTTOM COLUMN: APPLE GLASS BACK TRANSPARENT SOCIAL PROOF CARD
              ===================================================================== */}
          <div className="lg:col-span-4 hero-stagger-item w-full flex justify-start lg:justify-end">
            <div className="w-full max-w-md rounded-3xl bg-white/[0.06] hover:bg-white/[0.09] backdrop-blur-2xl border border-white/15 p-6 sm:p-7 shadow-2xl shadow-black/40 transition-all duration-300 group">
              {/* Top Row: Avatars & 5.0 Star Rating */}
              <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                {/* Overlapping Client Avatars */}
                <div className="flex items-center -space-x-2.5 overflow-hidden shrink-0">
                  {SOCIAL_AVATARS.map((avatar, idx) => (
                    <div
                      key={idx}
                      className="inline-block relative w-9 h-9 rounded-full ring-2 ring-[#0A0A0A] overflow-hidden bg-zinc-800 shrink-0"
                    >
                      <Image
                        src={avatar}
                        alt="Client Founder"
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Rating Badge */}
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-0.5 text-[#00D28F]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#00D28F]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-white mt-0.5">
                    5.0 / 5.0 Rating
                  </span>
                </div>
              </div>

              {/* Title & Founder Review Quote */}
              <div className="space-y-2 mb-4">
                <h4 className="text-sm font-bold text-white font-sans flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#00D28F]" />
                  <span>Trusted by 50+ Scaling Brands</span>
                </h4>
                <p className="text-xs sm:text-[13px] text-zinc-300 font-normal leading-relaxed italic">
                  &ldquo;Startuplize engineered our flagship 3D web experience in 2 weeks. Our conversion rate surged by <span className="text-[#00D28F] font-bold not-italic">+210%</span> post-launch.&rdquo;
                </p>
                <div className="text-[11px] text-zinc-400 font-medium">
                  — Alex Vance, Founder &amp; CEO at ApexHQ
                </div>
              </div>

              {/* Bottom Verified Metric Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/10 text-[10px] font-mono text-zinc-300">
                <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[#00D28F] font-bold">
                  • 99.8% CSAT
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white">
                  • 100/100 LCP
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white">
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
