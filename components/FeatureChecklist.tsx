"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function FeatureChecklist() {
  const containerRef = useRef<HTMLDivElement>(null);

  const checklistItems = [
    {
      title: "Programmatic Technical SEO & Indexing Architecture",
      desc: "Deep crawl optimization, automated schema injection, and high-converting keyword dominance.",
    },
    {
      title: "Decoupled Headless WordPress & Next.js Builds",
      desc: "Sub-second load times, ACF custom blocks, and enterprise security with zero bloat.",
    },
    {
      title: "Bespoke 3D Shaders & Webflow Scale Systems",
      desc: "Award-winning micro-interactions, GSAP timeline choreography, and client-first CMS scaling.",
    },
    {
      title: "Direct-Response Meta Ads & UGC Testing Funnels",
      desc: "Aggressive creative iteration and Advantage+ shopping campaigns scaling beyond $100k/mo.",
    },
    {
      title: "Google Ads Intent Fortresses & Performance Max",
      desc: "Laser-targeted search capture, negative keyword walls, and offline conversion sync.",
    },
    {
      title: "Server-Side CAPI & Closed-Loop Attribution",
      desc: "First-party data tracking that bypasses iOS signal loss for accurate media ROAS.",
    },
    {
      title: "Fluid Breakpoint Wix Studio Architecture",
      desc: "Proportional fluid scaling and bespoke Velo code interactions built for agile brands.",
    },
    {
      title: "High-Status Brand Visual Guidelines & 3D Assets",
      desc: "Custom typography systems, motion design tokens, and pitch-ready visual collateral.",
    },
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const items = containerRef.current?.querySelectorAll(".expressive-item");
      if (!items || items.length === 0) return;

      items.forEach((item) => {
        const words = item.querySelectorAll(".expressive-word");
        gsap.fromTo(
          words,
          { scale: 0.9, opacity: 0, y: 8 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            stagger: 0.03,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-[#1A1A1A] relative border-t border-zinc-200">
      <div className="max-w-[1366px] mx-auto" ref={containerRef}>
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[14px] md:text-[16px] font-bold uppercase tracking-wider mb-4 font-mono">
            <ShieldCheck className="w-4 h-4 text-[#00B87D]" />
            <span>Turnkey Standards &amp; Deliverables</span>
          </div>

          {/* Strictly H2 (text-3xl md:text-5xl) */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans max-w-3xl">
            Engineered To Be Your{" "}
            <span className="font-serif italic font-normal text-[#00B87D]">
              Growth Benchmark.
            </span>
          </h2>
          {/* Normal Body Tier */}
          <p className="text-[16px] md:text-[18px] text-zinc-600 max-w-2xl mt-4 font-normal">
            Every Startuplize engagement adheres to our strict, battle-tested engineering checklist to
            guarantee compounding conversion efficiency.
          </p>
        </div>

        {/* 2-Column Checklist with Sharper rounded-2xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {checklistItems.map((item, idx) => (
            <div
              key={idx}
              className="expressive-item p-6 sm:p-8 rounded-2xl bg-[#FAFAFA] border border-zinc-200/80 flex items-start gap-4 hover:border-[#00D28F] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-[#00D28F]/20 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5 text-[#00A870] stroke-[2.5]" />
              </div>

              <div>
                <h3 className="text-[16px] md:text-[18px] font-bold text-[#1A1A1A] tracking-tight mb-2 font-sans">
                  {item.title.split(" ").map((w, i) => (
                    <span key={i} className="expressive-word inline-block mr-1">
                      {w}
                    </span>
                  ))}
                </h3>
                {/* Small Body Tier */}
                <p className="text-[14px] md:text-[16px] text-zinc-600 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
