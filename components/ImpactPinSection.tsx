"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TrendingUp, ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

interface ImpactPinSectionProps {
  onOpenBooking: () => void;
}

export default function ImpactPinSection({ onOpenBooking }: ImpactPinSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinColRef = useRef<HTMLDivElement>(null);

  const impactCards = [
    {
      metric: "+184%",
      label: "Conversion Rate Surge",
      client: "Lumina Global Wealth",
      category: "Webflow & 3D Interactive Web",
      description:
        "Complete brand overhaul and 3D architectural shader platform that turned organic enterprise visitors into booked discovery calls.",
      tags: ["Webflow", "3D Shaders", "CRO"],
    },
    {
      metric: "0.6s",
      label: "Sub-Second Page Load Speed",
      client: "Aetheria Health",
      category: "WordPress Headless Architecture",
      description:
        "Decoupled Next.js App Router with WP GraphQL database backend handling 300k+ monthly traffic with perfect 100/100 Core Web Vitals.",
      tags: ["Headless Next.js", "WordPress VIP", "Speed"],
    },
    {
      metric: "$42M+",
      label: "Attributed Revenue Pipeline",
      client: "Nexus Labs",
      category: "Technical SEO & Meta Ads",
      description:
        "Direct-response UGC creative testing paired with programmatic keyword clustering that scaled monthly revenue from $40k to $380k/mo.",
      tags: ["Meta ASC", "Technical SEO", "High Intent"],
    },
    {
      metric: "5.4x",
      label: "Consistent Paid Ads ROAS",
      client: "Strata Global Logistics",
      category: "Google Performance Max & PPC",
      description:
        "Full-funnel bottom-of-funnel capture capturing enterprise decision-makers with surgical keyword fortresses.",
      tags: ["Google PMax", "Search Ads", "Attribution"],
    },
  ];

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      const pinCol = pinColRef.current;
      if (!section || !pinCol) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 120px",
          end: "bottom bottom",
          pin: pinCol,
          pinSpacing: false,
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] text-[#1A1A1A] relative border-t border-zinc-200"
    >
      <div className="max-w-[1366px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Pinned on Scroll */}
          <div
            ref={pinColRef}
            className="lg:col-span-5 flex flex-col justify-between self-start pb-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-5">
                <TrendingUp className="w-3.5 h-3.5 text-[#00B87D]" />
                <span>Our Track Record</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] font-sans leading-[1.08] mb-6">
                Real results for{" "}
                <span className="font-serif italic font-normal text-[#00B87D]">
                  real companies.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed mb-8">
                We measure our craft by the compounding revenue, speed, and pipeline it unlocks for
                our partners. No vanity design—only quantifiable business prestige.
              </p>

              {/* Guarantees List */}
              <div className="space-y-3 mb-10">
                {[
                  "Average 4.8x Meta & Google Ads ROAS",
                  "Sub-Second 99+ Core Web Vitals Guaranteed",
                  "Direct Senior Architect & Art Director Access",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-zinc-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00B87D] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] shadow-lg shadow-[#00D28F]/25 transition-all self-start cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free Growth Audit</span>
            </button>
          </div>

          {/* Right Column: Outlined Metric Cards Scrolling Past Pinned Left */}
          <div className="lg:col-span-7 space-y-8">
            {impactCards.map((card, idx) => (
              <div
                key={idx}
                className="group rounded-3xl p-8 sm:p-10 bg-white border border-zinc-200 shadow-sm hover:border-[#00D28F] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span className="px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-700 uppercase tracking-wider">
                      {card.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#00B87D] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {card.client}
                    </span>
                  </div>

                  {/* Metric Value */}
                  <div className="text-5xl sm:text-7xl font-mono font-bold tracking-tight text-[#00B87D] mb-2">
                    {card.metric}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight mb-4 font-sans">
                    {card.label}
                  </h3>

                  <p className="text-base text-zinc-600 font-normal leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-100">
                  <div className="flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-zinc-50 text-xs font-medium text-zinc-600 border border-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#00B87D] hover:text-[#0A0A0A] transition-colors cursor-pointer"
                  >
                    <span>Request Similar Case</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
