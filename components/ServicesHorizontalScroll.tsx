"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SERVICES } from "@/lib/data";
import {
  Layers,
  ArrowUpRight,
  Check,
  Sparkles,
  ChevronRight,
  Cpu,
  Code2,
  Boxes,
  Search,
  Palette,
  TrendingUp,
  Gauge,
  Zap,
} from "lucide-react";

interface ServicesHorizontalScrollProps {
  onOpenBooking: () => void;
}

const SERVICE_IMAGES: Record<string, string> = {
  webflow:
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  wordpress:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  wix:
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  seo:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  branding:
    "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
  "meta-ads":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  "google-ads":
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
};

export default function ServicesHorizontalScroll({
  onOpenBooking,
}: ServicesHorizontalScrollProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case "webflow":
        return <Code2 className="w-4 h-4 text-[#00D28F]" />;
      case "wordpress":
        return <Cpu className="w-4 h-4 text-[#00D28F]" />;
      case "wix":
        return <Boxes className="w-4 h-4 text-[#00D28F]" />;
      case "seo":
        return <Search className="w-4 h-4 text-[#00D28F]" />;
      case "branding":
        return <Palette className="w-4 h-4 text-[#00D28F]" />;
      case "meta-ads":
        return <TrendingUp className="w-4 h-4 text-[#00D28F]" />;
      case "google-ads":
        return <Gauge className="w-4 h-4 text-[#00D28F]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#00D28F]" />;
    }
  };

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const trigger = triggerRef.current;
      const track = trackRef.current;
      if (!trigger || !track) return;

      const mm = gsap.matchMedia();

      // Desktop (>= 1024px): Pinned Horizontal Scrolling Track with dynamic calculations
      mm.add("(min-width: 1024px)", () => {
        const getDistance = () => {
          if (!track) return 0;
          return Math.max(0, track.scrollWidth - window.innerWidth + 160);
        };

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top top",
            end: () => `+=${getDistance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        // Trigger refresh once fonts/layout are stable
        ScrollTrigger.refresh();

        return () => {
          tween.kill();
        };
      });

      // Mobile / Tablet (< 1024px): Clean natural vertical stack without pin locking
      mm.add("(max-width: 1023px)", () => {
        gsap.set(track, { clearProps: "all" });
      });
    },
    { scope: triggerRef }
  );

  return (
    <section
      id="services"
      ref={triggerRef}
      className="relative bg-[#FAFAFA] text-[#1A1A1A] border-t border-zinc-200 overflow-hidden"
    >
      {/* Viewport Container: Centered on desktop when pinned, natural padding on mobile */}
      <div className="lg:h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden py-16 lg:py-8">
        <div className="max-w-[1366px] w-full mx-auto mb-6 sm:mb-8">
          {/* Header Row without filter tabs */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              {/* Section Capsule: text-[14px], font-normal, not uppercase, not bold */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[14px] font-normal font-mono mb-2">
                <Layers className="w-4 h-4 text-[#00B87D]" />
                <span>Target Impact &amp; Capabilities</span>
              </div>
              {/* Strictly H2 (text-3xl md:text-5xl) */}
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans">
                Specialized{" "}
                <span className="font-serif italic font-normal text-[#00B87D]">
                  Growth Disciplines.
                </span>
              </h2>
            </div>

            {/* Right Meta Info Badge */}
            <div className="flex items-center gap-3 text-zinc-500 font-mono text-[14px] font-normal self-start sm:self-auto bg-zinc-100/80 px-4 py-2 rounded-full border border-zinc-200">
              <span className="flex items-center gap-1.5 text-[#00A870]">
                <Sparkles className="w-4 h-4" />
                <span>{SERVICES.length} Core Disciplines</span>
              </span>
              <span>•</span>
              <span className="hidden sm:inline text-zinc-600">Scroll to Explore</span>
            </div>
          </div>
        </div>

        {/* Scrolling Track Container: Smooth Horizontal Flow with 8pt Spacing */}
        <div className="w-full overflow-x-auto lg:overflow-visible no-scrollbar">
          <div
            ref={trackRef}
            className="flex flex-col lg:flex-row gap-8 will-change-transform w-full lg:w-max pb-8 lg:pb-0 px-2 sm:px-4"
          >
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className="w-full sm:w-[440px] lg:w-[460px] xl:w-[480px] shrink-0 rounded-2xl bg-white border border-zinc-200/90 shadow-md hover:border-[#00D28F] hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* 1. Aspect Ratio Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={SERVICE_IMAGES[service.id] || SERVICE_IMAGES.webflow}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Dark Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-black/65 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-md">
                      {getIcon(service.id)}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[12px] font-normal text-white font-mono">
                      {service.category}
                    </span>
                  </div>

                  {/* Top Right Verified Metric Chip */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#00D28F]/40 text-[#00D28F] text-[12px] font-mono font-normal flex items-center gap-1 shadow-lg">
                      <Zap className="w-3.5 h-3.5 text-[#00D28F]" />
                      <span>{service.metrics}</span>
                    </div>
                  </div>

                  {/* Title overlay inside Image */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="text-[12px] font-mono text-zinc-300 block mb-1">
                      0{idx + 1} • Architecture
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight font-sans group-hover:text-[#00D28F] transition-colors line-clamp-1">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* 2. Body Details with Strict Typography (Small Body Tier) */}
                <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <p className="text-[14px] md:text-[16px] text-zinc-600 font-normal leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Key Deliverables */}
                    <div className="space-y-2 mb-6 p-4 rounded-xl bg-zinc-50 border border-zinc-200/70">
                      {service.deliverables.slice(0, 3).map((item, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-[14px] text-zinc-700 font-normal">
                          <Check className="w-4 h-4 text-[#00A870] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Bottom Action Bar */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[12px] font-mono text-zinc-400 font-normal">
                        Target Impact
                      </span>
                      <span className="text-[14px] md:text-[16px] font-bold text-[#00A870] font-mono">
                        {service.metrics}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="px-4 py-2 rounded-full font-bold text-[14px] uppercase tracking-wider text-zinc-900 bg-zinc-100 hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all flex items-center gap-1"
                      >
                        <span>Scope</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={onOpenBooking}
                        className="px-4 py-2 rounded-full font-bold text-[14px] uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] shadow-md shadow-[#00D28F]/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                        title="Book Discovery Call"
                      >
                        <span>Book</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
