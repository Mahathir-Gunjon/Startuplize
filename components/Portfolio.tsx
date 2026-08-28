"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import { ArrowUpRight, Sparkles, Layers, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioProps {
  onOpenBooking: () => void;
}

function ParallaxProjectCard({
  project,
  onOpenBooking,
}: {
  project: (typeof PORTFOLIO_PROJECTS)[0];
  onOpenBooking: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl bg-white border border-zinc-200/90 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#00D28F] hover:shadow-2xl shadow-sm"
    >
      {/* Parallax Image Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-zinc-900">
        <motion.div
          style={{ y, scale: isHovered ? 1.05 : 1 }}
          className="relative w-full h-[120%] -top-[10%] transition-transform duration-700 ease-out"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1200px) 100vw, 600px"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        {/* Floating Custom 'Explore Case' Pill on Hover */}
        <div
          className={cn(
            "absolute top-6 right-6 z-20 transition-all duration-300 pointer-events-none",
            isHovered ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"
          )}
        >
          <div className="px-4 py-2 rounded-full bg-[#00D28F] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-xl shadow-[#00D28F]/30">
            <span>Explore Case</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </div>
        </div>

        {/* Top Floating Category & Year */}
        <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs font-semibold text-white">
            {project.category}
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium text-white">
            {project.year}
          </span>
        </div>

        {/* Bottom Headline on Image */}
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <span className="text-xs font-bold text-[#00D28F] uppercase tracking-wider mb-1 block">
            {project.client}
          </span>
          <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#00D28F] transition-colors font-sans">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Card Info & Metric Highlights */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-white">
        <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 mb-6 flex items-center justify-between">
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
            Verified Result
          </span>
          <span className="text-base font-mono font-bold text-[#00B87D]">
            {project.impact}
          </span>
        </div>

        {/* Bottom Capabilities & Booking Prompt */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-zinc-100">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full bg-zinc-100 text-xs font-medium text-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00B87D] hover:text-[#0A0A0A] transition-colors cursor-pointer"
          >
            <span>Request Similar System</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio({ onOpenBooking }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = [
    "All",
    "Web Development",
    "SEO Domination",
    "Brand Design",
    "Creative Ads",
  ];

  const filteredItems = PORTFOLIO_PROJECTS.filter((item) => {
    if (activeFilter === "All") return true;
    return item.category === activeFilter;
  }).slice(0, 6); // Display top 6 featured works on homepage

  return (
    <section id="work" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] text-[#1A1A1A] relative">
      <div className="max-w-[1366px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5 text-[#00B87D]" />
              <span>Selected Portfolio</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] font-sans">
              Crafted For{" "}
              <span className="font-serif italic font-normal text-[#00B87D]">
                Compounding Growth.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 max-w-xl mt-4 font-normal leading-relaxed">
              Every build is engineered to be an unfair competitive advantage. High-converting
              aesthetics, sub-second speed, and precision acquisition funnels.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 bg-zinc-100 p-1.5 rounded-full border border-zinc-200 self-start md:self-auto">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer",
                  activeFilter === cat
                    ? "bg-[#00D28F] text-[#0A0A0A] shadow-md shadow-[#00D28F]/20"
                    : "text-zinc-600 hover:text-[#1A1A1A] hover:bg-zinc-200/60"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Parallax Edge-to-Edge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((project) => (
              <ParallaxProjectCard
                key={project.id}
                project={project}
                onOpenBooking={onOpenBooking}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-2xl font-bold text-[#1A1A1A] font-sans">
              Looking for our complete catalogue of 30+ projects?
            </h3>
            <p className="text-sm text-zinc-600 mt-1">
              Explore our full portfolio archive filtered across all 4 growth disciplines.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/portfolio"
              className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-zinc-800 bg-zinc-100 hover:bg-zinc-200 transition-colors"
            >
              View All 30+ Works
            </Link>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] shadow-lg shadow-[#00D28F]/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Strategy</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
