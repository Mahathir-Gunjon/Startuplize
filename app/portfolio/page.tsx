"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import MegaFooter from "@/components/MegaFooter";
import GlobalCTA from "@/components/GlobalCTA";
import BookingModal from "@/components/BookingModal";
import CustomCursor from "@/components/CustomCursor";
import { PORTFOLIO_PROJECTS } from "@/lib/data";
import {
  Sparkles,
  ArrowUpRight,
  Layers,
  X,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

function PortfolioCard({
  project,
  onSelect,
}: {
  project: (typeof PORTFOLIO_PROJECTS)[0];
  onSelect: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl bg-white border border-zinc-200/90 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#00D28F] hover:shadow-2xl shadow-sm cursor-pointer"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Hover Pill */}
        <div
          className={cn(
            "absolute top-4 right-4 z-20 transition-all duration-300 pointer-events-none",
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
        >
          <div className="px-3.5 py-1.5 rounded-full bg-[#00D28F] text-[#0A0A0A] text-[12px] font-normal uppercase tracking-wider flex items-center gap-1.5 shadow-xl shadow-[#00D28F]/30 font-mono">
            <span>View Case</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[12px] font-normal text-white font-mono">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[12px] font-normal text-white font-mono">
            {project.year}
          </span>
        </div>

        {/* Bottom Headline */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <span className="text-[12px] font-mono font-normal text-[#00D28F] mb-0.5 block">
            {project.client}
          </span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#00D28F] transition-colors font-sans">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-1 bg-white">
        {/* Small Body Tier */}
        <p className="text-[14px] md:text-[16px] text-zinc-600 font-normal leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 mb-4 flex items-center justify-between">
          <span className="text-[12px] font-mono font-normal text-zinc-500">
            Impact
          </span>
          <span className="text-[14px] md:text-[16px] font-mono font-bold text-[#00B87D]">
            {project.impact}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-zinc-100">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-[12px] font-mono font-normal text-zinc-600"
              >
                {t}
              </span>
            ))}
          </div>

          <span className="text-[14px] font-bold text-[#00B87D] flex items-center gap-1">
            <span>Explore</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<
    (typeof PORTFOLIO_PROJECTS)[0] | null
  >(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const categories = [
    "All",
    "Web Development",
    "SEO Domination",
    "Brand Design",
    "Creative Ads",
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((item) => {
    const matchesFilter = activeFilter === "All" || item.category === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] relative selection:bg-[#00D28F] selection:text-[#0A0A0A]">
      <CustomCursor />
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content Curtain Layer */}
      <div className="relative z-10 bg-[#FAFAFA] shadow-[0_45px_100px_rgba(0,0,0,0.55)]">
        {/* Hero */}
        <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] text-white relative overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#00D28F]/10 rounded-full blur-[190px] pointer-events-none -z-10" />

          <div className="max-w-[1366px] mx-auto text-center flex flex-col items-center">
            {/* Section Capsule: text-[14px], font-normal, not uppercase, not bold */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[14px] font-normal text-[#00D28F] mb-6 font-mono">
              <Layers className="w-4 h-4" />
              <span>30+ Curated Digital Flagships</span>
            </div>

            {/* Strictly H1 (5xl md:7xl) */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white font-sans max-w-4xl mb-6">
              Crafted For{" "}
              <span className="font-serif italic font-normal text-[#00D28F]">
                Category Dominance.
              </span>
            </h1>

            {/* Large Body Tier */}
            <p className="text-[20px] md:text-[24px] text-zinc-300 max-w-2xl font-normal leading-relaxed mb-8">
              A comprehensive archive of our high-conversion Webflow platforms, headless Next.js architectures,
              programmatic SEO engines, and scaling Meta &amp; Google ad campaigns.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-md relative">
              <Search className="absolute left-4 top-3.5 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search by client, technology, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white/[0.08] border border-white/15 text-white text-[14px] md:text-[16px] focus:outline-none focus:border-[#00D28F] placeholder:text-zinc-500 backdrop-blur-md"
              />
            </div>
          </div>
        </section>

        {/* Filter Tabs & Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1366px] mx-auto">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-zinc-200">
              <div className="flex flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar gap-2 bg-zinc-100 p-1.5 rounded-full border border-zinc-200 max-w-full font-mono">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={cn(
                      "px-4 py-2 rounded-full text-[14px] font-normal transition-all duration-200 shrink-0 cursor-pointer",
                      activeFilter === cat
                        ? "bg-[#00D28F] text-[#0A0A0A] shadow-md shadow-[#00D28F]/25 font-semibold"
                        : "text-zinc-600 hover:text-[#1A1A1A] hover:bg-zinc-200/60"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <span className="text-[14px] font-mono font-normal text-zinc-500">
                Showing {filteredProjects.length} of {PORTFOLIO_PROJECTS.length} Projects
              </span>
            </div>

            {/* 30+ Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <PortfolioCard
                  key={project.id}
                  project={project}
                  onSelect={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Universal Global CTA Banner */}
        <GlobalCTA onOpenBooking={() => setIsBookingOpen(true)} />
      </div>

      {/* Project Quick View Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl z-10 text-zinc-900 my-8"
            >
              <div className="relative aspect-video w-full bg-zinc-950">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  sizes="800px"
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[12px] font-mono font-normal text-[#00D28F] mb-1 block">
                    {selectedProject.client} • {selectedProject.year}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-[12px] font-mono font-normal text-zinc-500">
                    Verified Benchmark Impact
                  </span>
                  <span className="text-[18px] font-mono font-bold text-[#00B87D]">
                    {selectedProject.impact}
                  </span>
                </div>

                <p className="text-[16px] md:text-[18px] text-zinc-600 font-normal leading-relaxed">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="text-[14px] font-mono font-normal text-zinc-400 mb-3">
                    Technologies &amp; Scope
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-zinc-100 text-[12px] font-mono font-normal text-zinc-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setIsBookingOpen(true);
                    }}
                    className="px-8 py-3.5 rounded-full font-bold text-[14px] uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] hover:scale-105 active:scale-95 transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Request Similar Case Strategy</span>
                  </button>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-[14px] font-normal text-zinc-500 hover:text-zinc-900"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <MegaFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
