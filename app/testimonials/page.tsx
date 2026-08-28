"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import MegaFooter from "@/components/MegaFooter";
import GlobalCTA from "@/components/GlobalCTA";
import BookingModal from "@/components/BookingModal";
import CustomCursor from "@/components/CustomCursor";
import { TESTIMONIALS_EXPANDED } from "@/lib/data";
import { Star, ShieldCheck, MessageSquare, Award, Sparkles, CheckCircle2 } from "lucide-react";

function ReviewCard({ review }: { review: (typeof TESTIMONIALS_EXPANDED)[0] }) {
  return (
    <div className="rounded-3xl p-8 bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:border-[#00D28F] transition-all duration-300 flex flex-col justify-between select-none mb-6">
      <div>
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-1 text-[#00B87D]">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#00D28F] text-[#00D28F]" />
            ))}
          </div>

          <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-700 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00B87D]" />
            <span>Verified Founder</span>
          </span>
        </div>

        <div className="inline-block px-3 py-1 rounded-xl bg-[#00D28F]/15 border border-[#00D28F]/40 text-xs font-bold text-[#00A870] font-mono mb-4">
          {review.service}
        </div>

        <p className="text-base text-zinc-700 font-normal leading-relaxed italic mb-6">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-3.5 pt-5 border-t border-zinc-100">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#00D28F]/40 shrink-0">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold text-[#1A1A1A]">
            {review.name}
          </span>
          <span className="text-xs text-zinc-500 font-normal">
            {review.role}, <span className="text-[#00B87D] font-semibold">{review.company}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const half = Math.ceil(TESTIMONIALS_EXPANDED.length / 2);
  const leftCol = TESTIMONIALS_EXPANDED.slice(0, half).concat(TESTIMONIALS_EXPANDED.slice(0, half));
  const rightCol = TESTIMONIALS_EXPANDED.slice(half).concat(TESTIMONIALS_EXPANDED.slice(half));

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] relative selection:bg-[#00D28F] selection:text-[#0A0A0A]">
      <CustomCursor />
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] text-white relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#00D28F]/15 rounded-full blur-[190px] pointer-events-none -z-10" />

        <div className="max-w-[1366px] mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-bold uppercase tracking-wider text-[#00D28F] mb-6">
            <Star className="w-3.5 h-3.5 fill-[#00D28F]" />
            <span>Verified Founder Love</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-sans max-w-4xl mb-6">
            Trusted By The World&apos;s Most{" "}
            <span className="font-serif italic font-normal text-[#00D28F]">
              Ambitious Founders.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-10">
            Read unfiltered feedback and quantifiable conversion metrics from CMOs, VCs, and tech
            executives who scaled their digital presence with Startuplize.
          </p>

          {/* Aggregate Proof Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
            {[
              { label: "Clutch Rating", value: "4.9 / 5.0", sub: "Top Creative Agency" },
              { label: "Awwwards Wins", value: "18 Honors", sub: "Site of the Day" },
              { label: "Client Retainers", value: "94% Renewal", sub: "Long-Term Growth" },
              { label: "Avg. ROI Lift", value: "+184% CRO", sub: "In First 90 Days" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-center"
              >
                <div className="text-xl sm:text-2xl font-mono font-bold text-[#00D28F]">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[10px] text-zinc-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opposing Vertical Marquees Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1366px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
              Endless Social Proof
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans">
              Dual Opposing{" "}
              <span className="font-serif italic font-normal text-[#00B87D]">
                Vertical Feeds.
              </span>
            </h2>
            <p className="text-xs text-zinc-500 mt-2">
              Hover over any card to pause scrolling
            </p>
          </div>

          <div className="relative h-[850px] overflow-hidden">
            {/* Top and Bottom Gradient Fade Masks */}
            <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              {/* Left Column: Endlessly scrolling UP */}
              <div className="flex flex-col animate-marquee-vertical-up hover:[animation-play-state:paused]">
                {leftCol.map((review, idx) => (
                  <ReviewCard key={`left-${idx}`} review={review} />
                ))}
              </div>

              {/* Right Column: Endlessly scrolling DOWN */}
              <div className="flex flex-col animate-marquee-vertical-down hover:[animation-play-state:paused]">
                {rightCol.map((review, idx) => (
                  <ReviewCard key={`right-${idx}`} review={review} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Global CTA Banner */}
      <GlobalCTA onOpenBooking={() => setIsBookingOpen(true)} />

      <MegaFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
