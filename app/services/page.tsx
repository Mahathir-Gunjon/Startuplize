"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MegaFooter from "@/components/MegaFooter";
import GlobalCTA from "@/components/GlobalCTA";
import BookingModal from "@/components/BookingModal";
import CustomCursor from "@/components/CustomCursor";
import { SERVICES } from "@/lib/data";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Code2,
  TrendingUp,
  Palette,
  Megaphone,
} from "lucide-react";

export default function ServicesDirectoryPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] relative selection:bg-[#00D28F] selection:text-[#0A0A0A]">
      <CustomCursor />
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content Curtain Layer */}
      <div className="relative z-10 bg-[#FAFAFA] shadow-[0_45px_100px_rgba(0,0,0,0.55)]">
        {/* Hero Header */}
        <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] text-white relative overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#00D28F]/15 rounded-full blur-[190px] pointer-events-none -z-10" />

          <div className="max-w-[1366px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-bold uppercase tracking-wider text-[#00D28F] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enterprise Growth Disciplines</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans max-w-4xl mb-6">
              Engineered For{" "}
              <span className="font-serif italic font-normal text-[#00D28F]">
                Category Dominance.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-10">
              We don&apos;t build cookie-cutter templates. Every discipline is executed by senior
              specialists using bespoke animations, sub-second architectures, and conversion psychology.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1366px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, idx) => (
                <div
                  key={service.slug}
                  className="group rounded-3xl bg-white border border-zinc-200 shadow-sm hover:border-[#00D28F] hover:shadow-2xl transition-all duration-300 p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span className="px-3 py-1 rounded-full bg-[#00D28F]/15 text-[#00A870] font-mono text-xs font-bold uppercase tracking-wider">
                        {service.category}
                      </span>
                      <span className="text-xs font-semibold text-zinc-400 font-mono">
                        0{idx + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight text-[#1A1A1A] font-sans mb-3 group-hover:text-[#00B87D] transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                      {service.valueProp}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-zinc-100 mb-8">
                      {service.deliverables.slice(0, 4).map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00A870] shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00B87D]">
                      {service.metrics}
                    </span>

                    <Link
                      href={`/services/${service.slug}`}
                      className="px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] transition-all flex items-center gap-1.5"
                    >
                      <span>View Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Universal Global CTA Banner (Light Mode) */}
        <GlobalCTA onOpenBooking={() => setIsBookingOpen(true)} />
      </div>

      <MegaFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
