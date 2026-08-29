"use client";

import React from "react";
import { Sparkles, Star, Award, ShieldCheck, Zap } from "lucide-react";

const CLIENT_LOGOS = [
  { name: "Stripe", category: "FinTech" },
  { name: "Vercel", category: "Infrastructure" },
  { name: "Figma", category: "Design Tools" },
  { name: "Linear", category: "Issue Tracking" },
  { name: "Supabase", category: "Database" },
  { name: "Raycast", category: "Productivity" },
  { name: "OpenAI", category: "AI Systems" },
  { name: "Ramp", category: "Finance" },
  { name: "Retool", category: "Developer Tools" },
  { name: "Webflow", category: "Visual Dev" },
  { name: "Loom", category: "Video Messaging" },
  { name: "Notion", category: "Workspace" },
  { name: "Framer", category: "Interactive Web" },
];

export default function Marquee() {
  const fullLogos = CLIENT_LOGOS.concat(CLIENT_LOGOS).concat(CLIENT_LOGOS);

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-10 bg-[#FAFAFA]">
      {/* =========================================================================
          SLIGHTLY ROUNDED FULL-WIDTH CLIENT LOGO MARQUEE CONTAINER
          ========================================================================= */}
      <div className="rounded-3xl bg-gray-200/50 max-w-[1366px] mx-auto mt-6 py-8 px-6 border border-gray-300/40 overflow-hidden shadow-sm select-none relative">
        {/* Subtle Fade Edge Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-gray-200/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-gray-200/90 to-transparent z-10 pointer-events-none" />

        {/* Header Label */}
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-zinc-500 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00A870]" />
            <span>Trusted By Venture-Backed Founders &amp; Global Leaders</span>
          </span>
        </div>

        {/* Infinite Horizontal Marquee Stream */}
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 items-center gap-8 sm:gap-12 animate-marquee">
            {fullLogos.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/70 hover:bg-white border border-gray-200/80 shadow-xs transition-colors group cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-[#00D28F] group-hover:scale-125 transition-transform" />
                <span className="text-sm sm:text-base font-bold text-zinc-800 group-hover:text-[#0A0A0A] font-sans tracking-tight">
                  {client.name}
                </span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase font-medium bg-zinc-100 px-2 py-0.5 rounded-md">
                  {client.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
