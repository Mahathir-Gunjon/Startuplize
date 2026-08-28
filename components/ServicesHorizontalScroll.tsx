"use client";

import React, { useRef, useState } from "react";
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
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServicesHorizontalScrollProps {
  onOpenBooking: () => void;
}

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
        const distanceToScroll = scrollWidth - viewportWidth + 160;

        const tween = gsap.to(track, {
          x: -distanceToScroll,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top top",
            end: () => `+=${Math.max(distanceToScroll * 1.1, 1200)}`,
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
      {/* CRITICAL MANDATE FIX 2: Container MUST be perfectly vertically centered while pinned */}
      <div className="h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[1366px] w-full mx-auto mb-8">
          {/* Header & Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-3">
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

            {/* CRITICAL MANDATE FIX 1: Filter pills MUST NOT line break */}
            <div className="flex flex-nowrap whitespace-nowrap overflow-x-auto no-scrollbar gap-2 bg-zinc-100 p-1.5 rounded-full border border-zinc-200 self-start lg:self-auto max-w-full">
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

        {/* Horizontal Scrolling Track */}
        <div className="w-full overflow-x-auto lg:overflow-x-visible no-scrollbar">
          <div
            ref={trackRef}
            className="flex flex-col lg:flex-row gap-6 will-change-transform w-full lg:w-max pb-6 lg:pb-0"
          >
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="w-full lg:w-[440px] shrink-0 rounded-3xl p-7 sm:p-8 bg-white border border-zinc-200 shadow-sm hover:border-[#00D28F] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center shadow-sm">
                      {getIcon(service.id)}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-[11px] font-bold text-zinc-600 uppercase tracking-wider">
                        {service.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#00D28F]/15 border border-[#00D28F]/40 text-[11px] font-bold text-[#00A870] uppercase tracking-wider">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight mb-2.5 font-sans">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed mb-5 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#00B87D] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-wider">
                      Target Impact
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#00B87D] font-mono">
                      {service.metrics}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-zinc-900 hover:text-[#00B87D] transition-colors"
                    >
                      <span>Explore Scope</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={onOpenBooking}
                      className="p-2 rounded-full bg-[#00D28F] hover:bg-[#00B87D] text-[#0A0A0A] shadow-md transition-all cursor-pointer"
                      title="Book Discovery Call"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
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
