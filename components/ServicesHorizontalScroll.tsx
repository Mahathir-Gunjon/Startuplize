"use client";

import React, { useRef, useState } from "react";
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
import { cn } from "@/lib/utils";

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
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = [
    "All",
    "Webflow & 3D",
    "WordPress & Headless",
    "Branding & Wix",
    "SEO & Paid Growth",
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case "webflow":
        return <Code2 className="w-5 h-5 text-[#00D28F]" />;
      case "wordpress":
        return <Cpu className="w-5 h-5 text-[#00D28F]" />;
      case "wix":
        return <Boxes className="w-5 h-5 text-[#00D28F]" />;
      case "seo":
        return <Search className="w-5 h-5 text-[#00D28F]" />;
      case "branding":
        return <Palette className="w-5 h-5 text-[#00D28F]" />;
      case "meta-ads":
        return <TrendingUp className="w-5 h-5 text-[#00D28F]" />;
      case "google-ads":
        return <Gauge className="w-5 h-5 text-[#00D28F]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#00D28F]" />;
    }
  };

  const filteredServices = SERVICES.filter((item) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Webflow & 3D") return item.id === "webflow";
    if (activeFilter === "WordPress & Headless") return item.id === "wordpress";
    if (activeFilter === "Branding & Wix") return item.id === "branding" || item.id === "wix";
    if (activeFilter === "SEO & Paid Growth") {
      return item.id === "seo" || item.id === "meta-ads" || item.id === "google-ads";
    }
    return true;
  });

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const trigger = triggerRef.current;
      const track = trackRef.current;
      if (!trigger || !track) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const scrollWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const distanceToScroll = scrollWidth - viewportWidth + 120;

        const tween = gsap.to(track, {
          x: -distanceToScroll,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top top",
            end: () => `+=${Math.max(distanceToScroll * 1.15, 1400)}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        return () => {
          tween.kill();
        };
      });
    },
    { dependencies: [activeFilter], scope: triggerRef }
  );

  return (
    <section
      id="services"
      ref={triggerRef}
      className="relative bg-[#FAFAFA] text-[#1A1A1A] border-t border-zinc-200 overflow-hidden"
    >
      {/* Centered Horizontal Viewport */}
      <div className="h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[1366px] w-full mx-auto mb-6">
          {/* Header & Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                <Layers className="w-3.5 h-3.5 text-[#00B87D]" />
                <span>Target Impact &amp; Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] font-sans">
                Specialized{" "}
                <span className="font-serif italic font-normal text-[#00B87D]">
                  Growth Disciplines.
                </span>
              </h2>
            </div>

            {/* Filter Pills (Non-Wrapping) */}
            <div className="flex flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar gap-2 bg-zinc-100 p-1.5 rounded-full border border-zinc-200 self-start lg:self-auto max-w-full font-mono">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer",
                    activeFilter === cat
                      ? "bg-[#00D28F] text-[#0A0A0A] shadow-md shadow-[#00D28F]/25"
                      : "text-zinc-600 hover:text-[#1A1A1A] hover:bg-zinc-200/60"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Track: 2 BIG CARDS PER VIEW */}
        <div className="w-full overflow-x-auto lg:overflow-x-visible no-scrollbar">
          <div
            ref={trackRef}
            className="flex flex-col lg:flex-row gap-8 will-change-transform w-full lg:w-max pb-6 lg:pb-0 px-2 sm:px-4"
          >
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="w-full lg:w-[660px] xl:w-[700px] shrink-0 rounded-[2.2rem] bg-white border border-zinc-200/90 shadow-lg hover:border-[#00D28F] hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden group"
              >
                {/* 1. Large High-Impact Image Preview Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={SERVICE_IMAGES[service.id] || SERVICE_IMAGES.webflow}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Cinematic Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Top Left Badges */}
                  <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                      {getIcon(service.id)}
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-bold text-white uppercase tracking-wider font-mono">
                      {service.category}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#00D28F] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider font-mono shadow-md">
                      {service.badge}
                    </span>
                  </div>

                  {/* Top Right Verified Metric Pill */}
                  <div className="absolute top-5 right-5 z-10">
                    <div className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-[#00D28F]/40 text-[#00D28F] text-xs font-mono font-bold flex items-center gap-1.5 shadow-xl">
                      <Zap className="w-3.5 h-3.5 text-[#00D28F]" />
                      <span>{service.metrics}</span>
                    </div>
                  </div>

                  {/* Bottom Headline inside Image */}
                  <div className="absolute bottom-5 left-6 right-6 z-10">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans group-hover:text-[#00D28F] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* 2. Structured Content Body */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* 3 Core Deliverables in Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                      {service.deliverables.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-800 font-medium">
                          <Check className="w-4 h-4 text-[#00A870] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. Bottom Action Bar */}
                  <div className="pt-5 border-t border-zinc-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-zinc-400 uppercase font-bold tracking-wider font-mono">
                        Guaranteed Benchmark
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#00A870] font-mono">
                        {service.metrics}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        href={`/services/${service.slug}`}
                        className="px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-zinc-900 bg-zinc-100 hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
                      >
                        <span>Explore Scope</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={onOpenBooking}
                        className="px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] shadow-md shadow-[#00D28F]/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                        title="Book Discovery Call"
                      >
                        <span>Book Sprint</span>
                        <ArrowUpRight className="w-4 h-4" />
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
