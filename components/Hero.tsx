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
    <section className="px-4 sm:px-6 lg:px-8 pt-4 pb-2 bg-[#FAFAFA]">
      {/* =========================================================================
          MASSIVE ROUNDED-3XL HERO CARD CONTAINER (Confined Animated Canvas)
          ========================================================================= */}
      <div
        ref={containerRef}
        className="max-w-[1366px] mx-auto rounded-3xl overflow-hidden relative mt-20 sm:mt-22 p-8 sm:p-14 lg:p-20 bg-[#0A0A0A] text-white shadow-2xl min-h-[580px] lg:min-h-[640px] flex flex-col justify-center"
      >
        {/* Confined Heavy Animated Background */}
        <HeroBackground />

        {/* =========================================================================
            STRICTLY LEFT-ALIGNED HERO FOREGROUND CONTENT
            ========================================================================= */}
        <div
          ref={contentRef}
          className="relative z-10 flex flex-col items-start text-left max-w-4xl"
        >
          {/* Eyebrow Capsule Text Tag (Top Left) */}
          <div className="hero-stagger-item inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#00D28F]/15 border border-[#00D28F]/40 text-xs font-mono font-bold tracking-wider uppercase text-[#00D28F] mb-6 self-start backdrop-blur-md shadow-lg shadow-[#00D28F]/10">
            <span className="w-2 h-2 rounded-full bg-[#00D28F] animate-ping" />
            <span>Creative Partner for Ambitious Brands</span>
          </div>

          {/* High-Impact H1 Statement with Instrument Serif Contrast */}
          <h1 className="hero-stagger-item text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.4rem] font-medium tracking-tight leading-[1.04] text-white font-sans mb-6">
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

          {/* =========================================================================
              CTA ROW: Solid Mint Green Button + Clean Unwrapped Trust Section
              ========================================================================= */}
          <div className="hero-stagger-item flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 w-full">
            {/* Primary Solid Mint Green Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-9 sm:py-4.5 rounded-full bg-[#00D28F] hover:bg-[#00B87D] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-xl shadow-[#00D28F]/30 hover:shadow-2xl hover:shadow-[#00D28F]/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shrink-0 group"
            >
              <Calendar className="w-4 h-4 shrink-0 text-[#0A0A0A]" />
              <span className="whitespace-nowrap font-bold">Start Your Project</span>
              <ArrowUpRight className="w-4 h-4 shrink-0 text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Clean Unwrapped Trust Signals (No capsule/pill border around this) */}
            <div className="flex items-center gap-3.5 shrink-0">
              {/* Overlapping Avatars */}
              <div className="flex items-center -space-x-2.5 overflow-hidden shrink-0">
                {SOCIAL_AVATARS.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="inline-block relative w-8 h-8 rounded-full ring-2 ring-[#0A0A0A] overflow-hidden bg-zinc-800 shrink-0"
                  >
                    <Image
                      src={avatar}
                      alt="Client Founder"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Stars & Text on standard background */}
              <div className="flex flex-col text-left shrink-0">
                <div className="flex items-center gap-0.5 text-[#00D28F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#00D28F]" />
                  ))}
                </div>
                <span className="text-xs font-medium text-zinc-300 whitespace-nowrap mt-0.5">
                  Trusted by 50+ scaling brands
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
