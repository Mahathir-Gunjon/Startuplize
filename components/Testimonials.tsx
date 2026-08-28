"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS_EXPANDED } from "@/lib/data";
import { Star, ShieldCheck, MessageSquare } from "lucide-react";

function ReviewCard({ review }: { review: (typeof TESTIMONIALS_EXPANDED)[0] }) {
  return (
    <div className="rounded-3xl p-7 bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:border-[#00D28F] transition-all duration-300 flex flex-col justify-between select-none mb-6">
      <div>
        {/* Rating & Verified Platform */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-1 text-[#00B87D]">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#00D28F] text-[#00D28F]" />
            ))}
          </div>

          <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold text-zinc-700 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00B87D]" />
            <span>Verified Founder</span>
          </span>
        </div>

        <div className="inline-block px-3 py-1 rounded-xl bg-[#00D28F]/10 border border-[#00D28F]/30 text-xs font-bold text-[#00A870] font-mono mb-4">
          {review.service}
        </div>

        {/* Editorial Testimonial Text */}
        <p className="text-sm sm:text-base text-zinc-700 font-normal leading-relaxed italic mb-6">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-3.5 pt-5 border-t border-zinc-100">
        <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#00D28F]/40 shrink-0">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-[#1A1A1A]">
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

export default function Testimonials() {
  const half = Math.ceil(TESTIMONIALS_EXPANDED.length / 2);
  const col1 = TESTIMONIALS_EXPANDED.slice(0, half).concat(TESTIMONIALS_EXPANDED.slice(0, half));
  const col2 = TESTIMONIALS_EXPANDED.slice(half).concat(TESTIMONIALS_EXPANDED.slice(half));
  const col3 = TESTIMONIALS_EXPANDED.concat(TESTIMONIALS_EXPANDED);

  return (
    <section id="reviews" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] text-[#1A1A1A] relative overflow-hidden border-t border-zinc-200">
      <div className="max-w-[1366px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-[#00D28F] text-[#00D28F]" />
            <span>Verified Client Feedback</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1A1A1A] font-sans max-w-3xl">
            Real Founders.{" "}
            <span className="font-serif italic font-normal text-[#00B87D]">
              Quantifiable Returns.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-zinc-600 max-w-2xl mt-4 font-normal leading-relaxed">
            Here is what high-growth CMOs, SaaS founders, and enterprise teams say about
            collaborating with Startuplize.
          </p>
        </div>

        {/* Continuous Dual/Triple VERTICAL Marquee Container */}
        <div className="relative h-[650px] overflow-hidden">
          {/* Top and Bottom Gradient Masks */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            {/* Column 1: Scrolls UP */}
            <div className="flex flex-col animate-marquee-vertical-up hover:[animation-play-state:paused]">
              {col1.map((item, idx) => (
                <ReviewCard key={`col1-${idx}`} review={item} />
              ))}
            </div>

            {/* Column 2: Scrolls DOWN */}
            <div className="flex flex-col animate-marquee-vertical-down hover:[animation-play-state:paused]">
              {col2.map((item, idx) => (
                <ReviewCard key={`col2-${idx}`} review={item} />
              ))}
            </div>

            {/* Column 3: Scrolls UP (Desktop Only) */}
            <div className="hidden lg:flex flex-col animate-marquee-vertical-up hover:[animation-play-state:paused]">
              {col3.map((item, idx) => (
                <ReviewCard key={`col3-${idx}`} review={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Hover Hint */}
        <div className="flex items-center justify-center gap-2 text-xs text-zinc-500 mt-8">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Hover over any review card to pause vertical marquee</span>
        </div>
      </div>
    </section>
  );
}
