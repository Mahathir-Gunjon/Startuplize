"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Compass, Shield, CheckCircle2, Zap, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface DepthOfVisionProps {
  onOpenBooking?: () => void;
}

export default function DepthOfVision({ onOpenBooking }: DepthOfVisionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRevealRef = useRef<HTMLDivElement>(null);
  const imageElementRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // 1. Image Reveal Animation (Clip-path curtain wipe + smooth zoom scale)
      if (imageRevealRef.current && imageElementRef.current) {
        // Set initial state
        gsap.set(imageRevealRef.current, {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        });
        gsap.set(imageElementRef.current, { scale: 1.25 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });

        tl.to(imageRevealRef.current, {
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          duration: 1.2,
          ease: "power4.out",
        }).to(
          imageElementRef.current,
          {
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=1.2"
        );
      }

      // 2. Text Content Scrolling Animations
      if (textContentRef.current) {
        const textElements = textContentRef.current.querySelectorAll(".dov-scroll-anim");

        gsap.fromTo(
          textElements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textContentRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] overflow-hidden bg-[#FAFAFA] text-[#1A1A1A] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 flex items-center"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-100/60 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1366px] mx-auto w-full">
        {/* =========================================================================
            2-PART EDITORIAL LAYOUT: TEXT CONTENT (LEFT) + IMAGE REVEAL (RIGHT)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* =====================================================================
              PART 1: TEXT CONTENT WITH RICH SCROLLING ANIMATIONS
              ===================================================================== */}
          <div
            ref={textContentRef}
            className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
          >
            {/* Eyebrow Capsule */}
            <div className="dov-scroll-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider font-mono">
              <Compass className="w-3.5 h-3.5 text-[#00B87D]" />
              <span>Depth of Vision &amp; Architecture</span>
            </div>

            {/* H2 Title with Instrument Serif Contrast */}
            <h2 className="dov-scroll-anim text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-[#1A1A1A] font-sans leading-[1.1]">
              We don&apos;t just build interfaces. We build{" "}
              <span className="font-serif italic font-normal text-[#00A870]">
                perceptual dominance
              </span>{" "}
              for tier-1 brands.
            </h2>

            {/* Subtitle Paragraph */}
            <p className="dov-scroll-anim text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              Your website is your company&apos;s most valuable digital asset. When tier-1 investors,
              enterprise prospects, and elite talent land on your page, every millimeter of design
              either compounds trust or destroys it.
            </p>

            {/* Core Architectural Pillars with Checkmarks */}
            <div className="dov-scroll-anim space-y-3 w-full pt-2">
              {[
                { title: "Sub-Second Global LCP & Edge SLA", desc: "100/100 Core Web Vitals on mobile and desktop." },
                { title: "Bespoke WebGL & 3D Interactive Shaders", desc: "Awwwards Site of the Day creative direction." },
                { title: "Zero Client Retainer Lock-in", desc: "Clean modular Webflow & Next.js marketing autonomy." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-xs flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-full bg-[#00D28F]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00A870]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 font-sans">{item.title}</h4>
                    <p className="text-xs text-zinc-500 font-normal mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button Row */}
            <div className="dov-scroll-anim pt-4 flex flex-wrap items-center gap-4 w-full">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] shadow-xl shadow-[#00D28F]/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Schedule Architecture Review</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <Link
                href="/portfolio"
                className="px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-[#1A1A1A] bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Explore 30+ Works</span>
              </Link>
            </div>
          </div>

          {/* =====================================================================
              PART 2: HIGH-IMPACT FLAGSHIP IMAGE WITH "IMAGE REVEAL" ANIMATION
              ===================================================================== */}
          <div
            ref={imageContainerRef}
            className="lg:col-span-6 relative w-full flex justify-center lg:justify-end"
          >
            {/* Outer Container with Ambient Glow */}
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Glowing Mint Ambient Backdrop Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#00D28F]/30 via-emerald-200/40 to-transparent rounded-[3rem] blur-2xl -z-10 opacity-70" />

              {/* Image Reveal Wrapper with GSAP Clip-Path Wipe */}
              <div
                ref={imageRevealRef}
                className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-[2.5rem] overflow-hidden bg-zinc-950 shadow-2xl border border-zinc-200/90 group"
              >
                {/* Scaled Image Element */}
                <div ref={imageElementRef} className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
                    alt="Startuplize High-Impact Web Architecture Mockup"
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                </div>

                {/* Top Floating Glassmorphic Badge */}
                <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-[#00D28F] flex items-center gap-1.5 shadow-lg">
                    <Shield className="w-3.5 h-3.5 text-[#00D28F]" />
                    <span>Awwwards Standard</span>
                  </span>
                </div>

                {/* Top Right 60FPS Performance Badge */}
                <div className="absolute top-5 right-5 z-10">
                  <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white flex items-center gap-1.5 shadow-lg">
                    <Zap className="w-3.5 h-3.5 text-[#33FFBA]" />
                    <span>60FPS Shaders</span>
                  </span>
                </div>

                {/* Bottom Floating Result Card */}
                <div className="absolute bottom-5 left-5 right-5 z-10 p-4 sm:p-5 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 text-white flex items-center justify-between shadow-2xl">
                  <div>
                    <span className="text-[10px] font-mono text-[#00D28F] font-bold uppercase tracking-wider block">
                      Proven Impact
                    </span>
                    <h5 className="text-sm sm:text-base font-bold font-sans">
                      ApexHQ 3D Flagship Platform
                    </h5>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-base sm:text-lg font-mono font-bold text-[#00D28F]">
                      +210% CRO
                    </span>
                    <span className="text-[10px] text-zinc-400 block">Post Launch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
