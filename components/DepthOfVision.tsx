"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Compass, Shield } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface DepthOfVisionProps {
  onOpenBooking?: () => void;
}

export default function DepthOfVision({ onOpenBooking }: DepthOfVisionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerBackRef = useRef<HTMLDivElement>(null);
  const layerMidRef = useRef<HTMLDivElement>(null);
  const layerForeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Layered Parallax: 3 distinct layers scrolling at drastically different velocities
      gsap.to(layerBackRef.current, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(layerMidRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(layerForeRef.current, {
        yPercent: -80,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.4,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[110vh] overflow-hidden bg-[#FAFAFA] text-[#1A1A1A] py-32 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 flex items-center"
    >
      {/* Layer 1: Background Depth Layer (Slowest Scroll) */}
      <div
        ref={layerBackRef}
        className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-30"
      >
        <div className="w-[900px] h-[500px] bg-gradient-to-tr from-[#00D28F]/20 via-emerald-100 to-transparent rounded-full blur-[140px]" />
      </div>

      {/* Layer 2: Midground Ambient Shapes & Badges (Moderate Velocity) */}
      <div
        ref={layerMidRef}
        className="absolute inset-0 pointer-events-none flex flex-col justify-between p-12 -z-5 max-w-[1366px] mx-auto"
      >
        <div className="self-end flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-zinc-200 shadow-xl">
          <Shield className="w-4 h-4 text-[#00B87D]" />
          <span className="text-xs font-mono font-bold text-zinc-700">
            Awwwards Site of the Day Standard
          </span>
        </div>

        <div className="self-start flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-zinc-200 shadow-xl">
          <Sparkles className="w-4 h-4 text-[#00B87D]" />
          <span className="text-xs font-mono font-bold text-zinc-700">
            60FPS GSAP Micro-Interactions
          </span>
        </div>
      </div>

      {/* Layer 3: Foreground Content (Highest Velocity & Crisp Editorial Focus) */}
      <div
        ref={layerForeRef}
        className="max-w-[1366px] mx-auto w-full relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-6">
            <Compass className="w-3.5 h-3.5 text-[#00B87D]" />
            <span>Depth of Vision</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] font-sans leading-[1.1] mb-8">
            We don&apos;t just build interfaces. We build{" "}
            <span className="font-serif italic font-normal text-[#00B87D]">
              perceptual dominance
            </span>{" "}
            for tier-1 brands.
          </h2>

          <p className="text-base sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            Your website is your company&apos;s most valuable digital asset. When tier-1 investors,
            enterprise prospects, and elite talent land on your page, every millimeter of design
            either compounds trust or destroys it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] shadow-xl shadow-[#00D28F]/25 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-[#1A1A1A] bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 transition-all flex items-center justify-center gap-2"
            >
              <span>Explore 30+ Works</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
