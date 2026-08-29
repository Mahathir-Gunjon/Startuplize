"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Clock,
  MessageSquare,
  Send,
  Calendar,
} from "lucide-react";

interface GlobalCTAProps {
  onOpenBooking: () => void;
}

export default function GlobalCTA({ onOpenBooking }: GlobalCTAProps) {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] text-[#1A1A1A] relative overflow-hidden">
      {/* Subtle Ambient Mint Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00D28F]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-[1366px] mx-auto">
        {/* Luxury Light Card Container (Distinct from Dark Footer) */}
        <div className="relative rounded-[2.5rem] bg-white border border-zinc-200/90 p-8 sm:p-14 lg:p-18 overflow-hidden shadow-2xl shadow-zinc-950/8 transition-all duration-300">
          {/* Subtle Top Gradient Shimmer Line */}
          <div className="absolute top-0 left-12 right-12 h-[2px] bg-gradient-to-r from-transparent via-[#00D28F]/60 to-transparent" />

          {/* Top Pill Status Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D28F]/15 border border-[#00D28F]/40 text-xs font-bold text-[#008A5E] uppercase tracking-wider font-mono">
              <span className="w-2 h-2 rounded-full bg-[#00D28F] animate-pulse" />
              <span>Available For Q3/Q4 Sprints</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#008A5E]" />
              <span>Avg. Response Time: Under 2 Hours</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0A0A] font-sans leading-[1.06]">
                Ready to Build Your{" "}
                <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#00A870] to-[#00D28F]">
                  Unfair Visual Moat?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-600 font-normal max-w-2xl leading-relaxed">
                Whether you need a high-converting Webflow flagship, a custom Next.js product
                architecture, or scaled paid acquisition, we deliver within fixed 2-4 week sprints.
              </p>

              {/* Guarantees Checklist */}
              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-zinc-600 pt-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#008A5E]" />
                  <span>Strict Confidentiality NDA</span>
                </span>
                <span className="text-zinc-300">•</span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#008A5E]" />
                  <span>Senior Specialists Only</span>
                </span>
                <span className="text-zinc-300">•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#008A5E]" />
                  <span>Weekly Client Staging Previews</span>
                </span>
              </div>
            </div>

            {/* Right Column: Action Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3.5">
              {/* Primary Strategy Call Button */}
              <button
                onClick={onOpenBooking}
                className="w-full py-4.5 px-8 rounded-full font-bold text-xs uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] shadow-xl shadow-[#00D28F]/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-[#0A0A0A]" />
                <span>Book 30-Min Strategy Call</span>
                <ArrowUpRight className="w-4 h-4 text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Secondary Browse Portfolio Button */}
              <Link
                href="/portfolio"
                className="w-full py-4 px-8 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-[#0A0A0A] hover:bg-zinc-800 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Browse 30+ Client Flagships</span>
              </Link>

              {/* Instant VIP Messenger Buttons */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 text-xs font-semibold text-zinc-800 hover:text-black transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#008A5E]" />
                  <span>WhatsApp VIP</span>
                </a>
                <a
                  href="https://t.me/startuplize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 text-xs font-semibold text-zinc-800 hover:text-black transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#008A5E]" />
                  <span>Telegram VIP</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
