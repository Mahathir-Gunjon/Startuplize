"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Zap } from "lucide-react";

export default function UnfairAdvantage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      // Desktop Only: Pinned Sticky Scrollytelling
      mm.add("(min-width: 1024px)", () => {
        const words = textRef.current?.querySelectorAll(".advantage-word");
        if (!words || words.length === 0) return;

        const tween = gsap.fromTo(
          words,
          { opacity: 0.2, color: "#666666" },
          {
            opacity: 1,
            color: "#FFFFFF",
            stagger: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=1200",
              pin: true,
              scrub: 0.75,
              anticipatePin: 1,
            },
          }
        );

        return () => {
          tween.kill();
        };
      });

      // Mobile / Tablet: Graceful Static Degradation with simple entrance
      mm.add("(max-width: 1023px)", () => {
        const words = textRef.current?.querySelectorAll(".advantage-word");
        if (!words || words.length === 0) return;

        gsap.set(words, { opacity: 1, color: "#FFFFFF" });
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  const wordsList = [
    "Most",
    "agencies",
    "deliver",
    "code.",
    "We",
    "deliver",
    "cultural",
    "resonance.",
    "By",
    "unifying",
    "cinematic",
    "art",
    "direction,",
    "sub-second",
    "Next.js",
    "speed,",
    "and",
    "conversion-led",
    "growth",
    "architectures,",
    "we",
    "give",
    "your",
    "venture",
    "an",
    "irrefutable",
    "competitive",
    "edge."
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-20"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00D28F]/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-[1366px] w-full mx-auto flex flex-col items-center text-center">
        {/* Section Pill Badge: text-[14px], not uppercase, not bold */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[14px] font-normal text-[#00D28F] mb-8 font-mono">
          <Zap className="w-4 h-4" />
          <span>The Strategic Edge</span>
        </div>

        {/* Strictly H2 (text-3xl md:text-5xl) */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-300 font-sans mb-8">
          Crafted to be your{" "}
          <span className="font-serif italic font-normal text-[#00D28F]">
            creative unfair advantage.
          </span>
        </h2>

        {/* Word-by-Word Scrollytelling Reveal Container */}
        <div
          ref={textRef}
          className="max-w-4xl text-[24px] sm:text-[32px] md:text-[44px] font-bold tracking-tight leading-[1.3] font-sans text-center select-none"
        >
          {wordsList.map((word, i) => (
            <span
              key={i}
              className={`advantage-word inline-block mr-2 sm:mr-3 transition-colors duration-200 ${
                word.toLowerCase().includes("cinematic") ||
                word.toLowerCase().includes("irrefutable") ||
                word.toLowerCase().includes("edge")
                  ? "font-serif italic font-normal text-[#00D28F]"
                  : ""
              }`}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Bottom Proof Metrics */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/10 text-[14px] md:text-[16px] text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D28F]" />
            <span className="font-semibold text-white">4.9/5 Rating</span> (120+ Founders)
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D28F]" />
            <span className="font-semibold text-white">Top 1%</span> Global Talent
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00D28F]" />
            <span className="font-semibold text-white">2-Week</span> First Deploy
          </div>
        </div>
      </div>
    </section>
  );
}
