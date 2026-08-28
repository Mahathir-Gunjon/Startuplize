"use client";

import React from "react";
import { Star, ShieldCheck, Award, Sparkles } from "lucide-react";

export default function Marquee() {
  const partnerReviews = [
    { platform: "Clutch Verified", score: "4.9/5", reviewsCount: "48 Reviews" },
    { platform: "Awwwards Nominee", score: "18x", reviewsCount: "Site of the Day" },
    { platform: "Trustpilot Leader", score: "5.0/5", reviewsCount: "120+ Founders" },
    { platform: "Webflow Certified", score: "Enterprise", reviewsCount: "Top 1% Global" },
    { platform: "Meta Preferred Partner", score: "Scale", reviewsCount: "$35M+ Managed" },
    { platform: "Google Premier Partner", score: "PMax Certified", reviewsCount: "Tier-1 ROI" },
  ];

  const marqueeTags = [
    "Sub-Second Next.js 14 Architecture",
    "Bespoke WebGL & Three.js 3D Shaders",
    "Client-First Webflow Modular Systems",
    "High-Intent Programmatic SEO Clusters",
    "High-ROAS Meta Direct-Response Creative",
    "Hardened Headless WordPress VIP",
    "100/100 Core Web Vitals Guaranteed",
    "Senior Creative Directors Direct Access",
  ];

  return (
    <div className="relative w-full py-12 bg-[#FAFAFA] text-[#1A1A1A] border-y border-zinc-200/80 overflow-hidden select-none">
      {/* Side Fade Masks for Seamless Light Mode Blending */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

      {/* Row 1: Partner Badges & Scores */}
      <div className="flex overflow-hidden mb-4">
        <div className="flex shrink-0 items-center gap-6 animate-marquee">
          {partnerReviews.concat(partnerReviews).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-zinc-200 shadow-sm hover:border-[#00D28F] transition-colors"
            >
              <Award className="w-4 h-4 text-[#00B87D]" />
              <span className="text-xs sm:text-sm font-bold text-[#1A1A1A] tracking-tight">
                {item.platform}
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-300" />
              <div className="flex items-center gap-1 text-xs font-bold text-[#00B87D]">
                <Star className="w-3.5 h-3.5 fill-[#00D28F] text-[#00D28F]" />
                <span>{item.score}</span>
              </div>
              <span className="text-xs text-zinc-500 font-normal">({item.reviewsCount})</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Capabilities & Value Tags (Reverse Scroll) */}
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 items-center gap-6 animate-marquee-reverse">
          {marqueeTags.concat(marqueeTags).map((tag, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white border border-zinc-200/80 text-xs sm:text-sm font-medium text-zinc-700 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00B87D]" />
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
