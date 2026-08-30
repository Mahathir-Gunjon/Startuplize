"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FAQS } from "@/lib/data";
import { Check, Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessTimelineProps {
  onOpenBooking: () => void;
}

export default function ProcessTimeline({ onOpenBooking }: ProcessTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Category Wedge",
      duration: "Days 1 - 4",
      description: "We audit your competitor landscape, uncover commercial high-intent buyer pain points, and define your unique visual positioning.",
      points: ["Conversion Funnel Forensic Audit", "Target Buyer Persona Mapping", "Figma Moodboards & Art Direction Routes"]
    },
    {
      number: "02",
      title: "High-Fidelity Architecture & Motion",
      duration: "Days 5 - 12",
      description: "We design every pixel, micro-interaction, 3D shader, and responsive breakpoint in Figma before touching production code.",
      points: ["Component-Driven Design Systems", "WebGL & 3D Interactive Prototypes", "Investor-Ready Visual Prestige"]
    },
    {
      number: "03",
      title: "Full-Stack Development & Rigorous QA",
      duration: "Days 13 - 22",
      description: "We build on Webflow or Next.js 14 App Router with clean CSS tokens, GSAP scroll choreography, and sub-second speed tuning.",
      points: ["Client-First Clean Architecture", "Sub-Second Global Edge Routing", "Automated Form & Webhook Sync"]
    },
    {
      number: "04",
      title: "Global Cutover & Scaled Acquisition",
      duration: "Day 23 & Beyond",
      description: "Zero-downtime DNS migration, full technical SEO indexing validation, and launch of high-ROAS Meta & Google ad funnels.",
      points: ["100/100 Core Web Vitals Guarantee", "Google Search Console Zero-Error Index", "Weekly Conversion Rate Optimization"]
    }
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const timeline = timelineRef.current;
      const line = lineRef.current;
      if (!timeline || !line) return;

      // Line drawing animation calibrated to 85% threshold
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: timeline,
            start: "top 75%",
            end: "bottom 85%",
            scrub: 1,
          },
        }
      );
    },
    { scope: timelineRef }
  );

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-[#1A1A1A] relative border-t border-zinc-200">
      <div className="max-w-[1366px] mx-auto">
        {/* Part 1: Process Blueprint with Animated Line Drawing */}
        <div className="mb-24">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            {/* Section Capsule: text-[14px], font-normal, not uppercase, not bold */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[14px] font-normal font-mono mb-4">
              <span>Execution Framework</span>
            </div>
            {/* Strictly H2 (text-3xl md:text-5xl) */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans max-w-3xl">
              From Initial Blueprint To{" "}
              <span className="font-serif italic font-normal text-[#00B87D]">
                Market Dominance.
              </span>
            </h2>
            {/* Normal Body Tier */}
            <p className="text-[16px] md:text-[18px] text-zinc-600 max-w-xl mt-4 font-normal">
              A structured 4-phase agile sprint that guarantees predictable time-to-market and flawless execution.
            </p>
          </div>

          {/* Timeline with Vertical Drawing Line */}
          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            {/* Background Line */}
            <div className="absolute top-8 bottom-8 left-6 sm:left-8 w-0.5 bg-zinc-200 -translate-x-1/2" />
            {/* Active Drawing Line */}
            <div
              ref={lineRef}
              className="absolute top-8 bottom-8 left-6 sm:left-8 w-0.5 bg-[#00D28F] -translate-x-1/2 will-change-transform origin-top"
            />

            <div className="space-y-8">
              {processSteps.map((step) => (
                <div key={step.number} className="relative flex items-start gap-6 sm:gap-8">
                  {/* Step Node */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-white border-2 border-[#00D28F] shadow-md flex items-center justify-center shrink-0 z-10 font-mono font-normal text-[#00A870] text-[14px] sm:text-[16px]">
                    {step.number}
                  </div>

                  {/* Step Content Card (Sharper rounded-2xl) */}
                  <div className="flex-1 p-6 sm:p-8 rounded-2xl bg-[#FAFAFA] border border-zinc-200 shadow-sm hover:border-[#00D28F] hover:shadow-xl transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] font-sans tracking-tight">
                        {step.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full bg-[#00D28F]/15 text-[12px] font-mono font-normal text-[#00A870] border border-[#00D28F]/30">
                        {step.duration}
                      </span>
                    </div>

                    {/* Small Body Tier */}
                    <p className="text-[14px] md:text-[16px] text-zinc-600 font-normal leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-zinc-200">
                      {step.points.map((pt, i) => (
                        <div key={i} className="flex items-center gap-2 text-[14px] text-zinc-700 font-normal">
                          <Check className="w-4 h-4 text-[#00B87D] shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Part 2: Frequently Asked Questions */}
        <div id="faq" className="max-w-4xl mx-auto pt-16 border-t border-zinc-200">
          <div className="flex flex-col items-center text-center mb-16">
            {/* Section Capsule: text-[14px], font-normal, not uppercase, not bold */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[14px] font-normal font-mono mb-4">
              <HelpCircle className="w-4 h-4 text-[#00B87D]" />
              <span>Inquiries &amp; Transparency</span>
            </div>
            {/* Strictly H2 (text-3xl md:text-5xl) */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans">
              Frequently Asked{" "}
              <span className="font-serif italic font-normal text-[#00B87D]">Questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={cn(
                    "rounded-xl border transition-all duration-300 overflow-hidden bg-[#FAFAFA]",
                    isOpen ? "border-[#00D28F] shadow-md bg-white" : "border-zinc-200 hover:border-zinc-300"
                  )}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[16px] md:text-[18px] font-bold text-[#1A1A1A] tracking-tight font-sans">
                      {faq.question}
                    </span>

                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200",
                        isOpen ? "bg-[#00D28F] text-[#0A0A0A]" : "bg-zinc-200 text-zinc-600"
                      )}
                    >
                      {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-6 pt-1 text-[14px] md:text-[16px] text-zinc-600 font-normal leading-relaxed border-t border-zinc-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Help Card */}
          <div className="mt-12 text-center p-6 sm:p-8 rounded-2xl bg-[#FAFAFA] border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#00D28F]/20 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 text-[#00A870]" />
              </div>
              <div>
                <h4 className="text-[16px] md:text-[18px] font-bold text-[#1A1A1A]">Have a unique requirement?</h4>
                <p className="text-[14px] text-zinc-500 font-normal">Speak directly with our technical leadership.</p>
              </div>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full text-[14px] font-bold uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer shadow-md"
            >
              Ask A Question
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
