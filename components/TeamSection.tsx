"use client";

import React from "react";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/data";
import { Users, ArrowUpRight, Sparkles } from "lucide-react";

interface TeamSectionProps {
  onOpenBooking?: () => void;
}

export default function TeamSection({ onOpenBooking }: TeamSectionProps) {
  return (
    <section
      id="team"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-white text-[#1A1A1A] relative border-t border-zinc-200"
    >
      <div className="max-w-[1366px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Users className="w-3.5 h-3.5 text-[#00B87D]" />
              <span>The Creative Minds</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] font-sans">
              Led By Visionary{" "}
              <span className="font-serif italic font-normal text-[#00B87D]">
                Architects &amp; Directors.
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-zinc-600 max-w-md font-normal leading-relaxed">
            Zero junior offshore handoffs. You partner directly with the senior creative minds and
            technical directors orchestrating your brand&apos;s digital prestige.
          </p>
        </div>

        {/* Grayscale to Full-Color Interactive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={member.name}
              className="group relative rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-sm hover:border-[#00D28F] hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with Grayscale-to-Color + Scale Zoom on Hover */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Floating Role Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-[#00D28F] uppercase tracking-wider">
                    {member.role}
                  </span>
                </div>

                {/* Bottom Name & Bio */}
                <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                  <h3 className="text-xl font-bold tracking-tight mb-1 font-sans">
                    {member.name}
                  </h3>
                  <p className="text-xs text-zinc-300 font-normal leading-relaxed line-clamp-2">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Skills / Action Bar */}
              <div className="p-5 bg-white border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-zinc-500">
                  0{idx + 1} • Specialist
                </span>

                <button
                  onClick={onOpenBooking}
                  className="p-2 rounded-full bg-zinc-100 group-hover:bg-[#00D28F] text-zinc-600 group-hover:text-[#0A0A0A] transition-colors cursor-pointer"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
