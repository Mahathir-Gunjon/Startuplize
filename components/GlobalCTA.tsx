"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, ShieldCheck, Clock, MessageSquare, Send, Calendar } from "lucide-react";

interface GlobalCTAProps {
  onOpenBooking: () => void;
}

export default function GlobalCTA({ onOpenBooking }: GlobalCTAProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-white/10">
      {/* Background Mint Glow Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00D28F]/15 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-[1366px] mx-auto">
        <div className="relative rounded-[2.5rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Top Pill */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D28F]/15 border border-[#00D28F]/40 text-xs font-bold text-[#00D28F] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#00D28F] animate-pulse" />
              <span>Available For Q3/Q4 Sprints</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Clock className="w-3.5 h-3.5 text-[#00D28F]" />
              <span>Avg. Response Time: Under 2 Hours</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans leading-[1.08]">
                Ready to Build Your{" "}
                <span className="font-serif italic font-normal text-[#00D28F]">
                  Unfair Visual Moat?
                </span>
              </h2>

              <p className="text-base sm:text-xl text-zinc-300 font-normal max-w-2xl leading-relaxed">
                Whether you need a high-converting Webflow flagship, a custom Next.js product
                architecture, or scaled paid acquisition, we deliver within fixed 2-4 week sprints.
              </p>

              {/* Guarantees */}
              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-zinc-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00D28F]" />
                  <span>Strict Confidentiality NDA</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#00D28F]" />
                  <span>Senior Specialists Only</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#00D28F]" />
                  <span>Weekly Client Staging Previews</span>
                </span>
              </div>
            </div>

            {/* Right Action Cards */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full py-5 px-8 rounded-full font-bold text-xs uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] shadow-2xl shadow-[#00D28F]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 30-Min Strategy Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <Link
                href="/portfolio"
                className="w-full py-4 px-8 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/15 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Browse 30+ Client Flagships</span>
              </Link>

              {/* Instant Messengers */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#00D28F]" />
                  <span>WhatsApp VIP</span>
                </a>
                <a
                  href="https://t.me/startuplize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#00D28F]" />
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
