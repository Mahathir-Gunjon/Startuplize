"use client";

import React, { useState, useMemo } from "react";
import {
  Check,
  Sparkles,
  Zap,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Sliders,
  Copy,
  CheckCircle2,
  TrendingDown,
  Info,
  Globe,
  Search,
  Code2,
  TrendingUp,
  Gauge,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCalculatorProps {
  onOpenBookingWithScope?: (scopeDetails: {
    serviceType: string;
    pages: number;
    needContent: boolean;
    needAI_SEO: boolean;
    needBooking: boolean;
    timeline: string;
    estimatedCost: number;
  }) => void;
}

// Strictly ordered: WordPress > SEO > Webflow > Meta Ads > Google Ads > Custom Next.js
type ServiceType = "wordpress" | "seo" | "webflow" | "meta-ads" | "google-ads" | "nextjs";
type TimelineType = "regular" | "fast" | "rush";

export default function ProjectCalculator({
  onOpenBookingWithScope,
}: ProjectCalculatorProps) {
  // Calculator States
  const [serviceType, setServiceType] = useState<ServiceType>("wordpress");
  const [pages, setPages] = useState<number>(10);
  const [needContent, setNeedContent] = useState<boolean>(false);
  const [needAI_SEO, setNeedAI_SEO] = useState<boolean>(true);
  const [needBooking, setNeedBooking] = useState<boolean>(true);
  const [timeline, setTimeline] = useState<TimelineType>("regular");
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  // Exact Transparent Pricing Ratios:
  // WordPress: $400 for 10 pages (Includes On-Page SEO, Speed Optimization, GMB)
  // SEO (GEO/AEO/AIO): $200 for 15 pages
  // Webflow: $600 for 10 pages
  // Meta Ads: $250 flat setup/sprint
  // Google Ads: $250 flat setup/sprint
  // Custom Next.js: $800 for 10 pages
  const { startuplizeCost, agencyCost, freelancerCost, savingsAmount } = useMemo(() => {
    let basePrice = 400;
    let effectiveCost = 400;

    if (serviceType === "wordpress") {
      // $400 for 10 pages ($120 base for 1 page + $31.11 per extra page)
      const base = 120;
      const perPage = 31.11;
      effectiveCost = Math.round(base + (pages - 1) * perPage);
    } else if (serviceType === "seo") {
      // $200 for 15 pages ($90 base for 1-5 pages + $11 per page beyond 5)
      const base = 90;
      const perPage = 11;
      effectiveCost = pages <= 5 ? base : Math.round(base + (pages - 5) * perPage);
    } else if (serviceType === "webflow") {
      // $600 for 10 pages ($180 base for 1 page + $46.67 per extra page)
      const base = 180;
      const perPage = 46.67;
      effectiveCost = Math.round(base + (pages - 1) * perPage);
    } else if (serviceType === "meta-ads") {
      effectiveCost = 250;
    } else if (serviceType === "google-ads") {
      effectiveCost = 250;
    } else if (serviceType === "nextjs") {
      // $800 for 10 pages ($240 base for 1 page + $62.22 per extra page)
      const base = 240;
      const perPage = 62.22;
      effectiveCost = Math.round(base + (pages - 1) * perPage);
    }

    // Add-on calculations
    let addOns = 0;
    if (needContent) addOns += pages * 20; // $20/page copy
    if (needAI_SEO && serviceType !== "seo") addOns += Math.min(100, pages * 10); // $10/page capped at $100
    if (needBooking) addOns += 40; // $40 calendar sync

    // Timeline speed fee
    let speedFee = 0;
    if (timeline === "rush") speedFee += pages * 25;
    if (timeline === "fast") speedFee += pages * 12;

    const startuplizeTotal = Math.round(effectiveCost + addOns + speedFee);

    // Realistic market comparisons for local businesses
    const agencyTotal = Math.max(3500, Math.round(startuplizeTotal * 7.5));
    const freelancerTotal = Math.max(1200, Math.round(startuplizeTotal * 2.8));
    const savings = agencyTotal - startuplizeTotal;

    return {
      startuplizeCost: startuplizeTotal,
      agencyCost: agencyTotal,
      freelancerCost: freelancerTotal,
      savingsAmount: savings,
    };
  }, [serviceType, pages, needContent, needAI_SEO, needBooking, timeline]);

  const handleCopyEstimate = () => {
    const serviceNameMap: Record<ServiceType, string> = {
      wordpress: "WordPress Site (SEO, Speed & GMB Included)",
      seo: "Full Cutting-Edge SEO (SEO, GEO, AEO, AIO & Local SEO)",
      webflow: "Webflow Interactive Platform",
      "meta-ads": "Meta Ads & Paid Social Funnel",
      "google-ads": "Google Ads & Local Performance Max",
      nextjs: "Custom Next.js 14 Architecture",
    };

    const summary = `Startuplize Transparent Project Estimate:
• Primary Discipline: ${serviceNameMap[serviceType]}
• Page Volume: ${serviceType === "meta-ads" || serviceType === "google-ads" ? "Full Funnel" : `${pages} Pages`}
• AI SEO & GMB Optimization: ${needAI_SEO ? "Included / Yes" : "No"}
• Booking Calendar Sync: ${needBooking ? "Yes (Cal.com / Calendly)" : "No"}
• Content Copywriting: ${needContent ? `Yes (+$${pages * 20})` : "No"}
• Delivery Timeline: ${timeline === "rush" ? "Rush (Within 3-5 Days)" : timeline === "fast" ? "Fast (Within 7 Days)" : "Regular (7-14 Days)"}
• Fixed Investment: $${startuplizeCost.toLocaleString()}
• Typical Agency Cost: $${agencyCost.toLocaleString()} (You Save ~$${savingsAmount.toLocaleString()})`;

    navigator.clipboard.writeText(summary);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 3000);
  };

  const handleBookScope = () => {
    if (onOpenBookingWithScope) {
      const serviceNameMap: Record<ServiceType, string> = {
        wordpress: "WordPress Site ($400/10 Pgs)",
        seo: "Full AI SEO ($200/15 Pgs)",
        webflow: "Webflow Platform ($600/10 Pgs)",
        "meta-ads": "Meta Ads Funnel ($250)",
        "google-ads": "Google Ads Intent ($250)",
        nextjs: "Custom Next.js 14 ($800/10 Pgs)",
      };

      onOpenBookingWithScope({
        serviceType: serviceNameMap[serviceType],
        pages,
        needContent,
        needAI_SEO,
        needBooking,
        timeline,
        estimatedCost: startuplizeCost,
      });
    }
  };

  return (
    <section id="calculator-section" className="py-16 md:py-28 px-4 sm:px-6 lg:px-16 bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#00D28F]/10 rounded-full blur-[200px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header: Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Section Capsule: text-[14px], font-normal, not uppercase, not bold */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[14px] font-normal text-[#00D28F] mb-4 font-mono">
            <Sliders className="w-4 h-4" />
            <span>Try project estimation calculator</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white font-sans leading-[1.15]">
            Get premium website{" "}
            <span className="font-serif italic font-normal text-[#00D28F]">
              within your budget.
            </span>
          </h2>

          <p className="text-[16px] md:text-[18px] text-zinc-400 font-normal mt-4 max-w-2xl mx-auto leading-relaxed">
            Transparent pricing calibrated for local businesses, dental practices, trade contractors, listing directories, and e-commerce brands. Zero agency markup.
          </p>
        </div>

        {/* 2-COLUMN GRID CALCULATOR CONTAINER (rounded-2xl, no gap, overflow-hidden) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0D0D0D]">
          {/* =========================================================================
              LEFT COLUMN (Calculator Form - 7 Columns)
              ========================================================================= */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-12 divide-y divide-[#1E1E1E] flex flex-col justify-between space-y-8 bg-[#0D0D0D]">
            {/* Section 1: Service Type (Prioritized: WordPress > SEO > Webflow > Meta Ads > Google Ads > Next.js) */}
            <div className="pt-0">
              <h3 className="text-[16px] md:text-[18px] font-bold text-white font-sans mb-4 flex items-center justify-between">
                <span>Select Primary Growth Discipline</span>
                <span className="text-[12px] font-mono font-normal text-[#00D28F]">Prioritized Hierarchy</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    id: "wordpress" as ServiceType,
                    label: "1. WordPress Site",
                    ratio: "$400 / 10 Pgs",
                    desc: "On-Page SEO + Speed + GMB Included",
                    icon: Globe,
                  },
                  {
                    id: "seo" as ServiceType,
                    label: "2. Full Cutting-Edge SEO",
                    ratio: "$200 / 15 Pgs",
                    desc: "SEO, GEO, AEO, AIO & Local SEO",
                    icon: Search,
                  },
                  {
                    id: "webflow" as ServiceType,
                    label: "3. Webflow Platform",
                    ratio: "$600 / 10 Pgs",
                    desc: "Bespoke 3D animations & CMS",
                    icon: Sparkles,
                  },
                  {
                    id: "meta-ads" as ServiceType,
                    label: "4. Meta Ads & UGC Funnel",
                    ratio: "$250 Flat",
                    desc: "High-hook creative & CAPI",
                    icon: TrendingUp,
                  },
                  {
                    id: "google-ads" as ServiceType,
                    label: "5. Google Ads & PMax",
                    ratio: "$250 Flat",
                    desc: "Search intent & Call ads",
                    icon: Gauge,
                  },
                  {
                    id: "nextjs" as ServiceType,
                    label: "6. Custom Next.js 14",
                    ratio: "$800 / 10 Pgs",
                    desc: "Headless React edge architecture",
                    icon: Code2,
                  },
                ].map((opt) => {
                  const isSelected = serviceType === opt.id;
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setServiceType(opt.id)}
                      className={cn(
                        "p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between gap-2 cursor-pointer",
                        isSelected
                          ? "bg-white/[0.08] border-[#00D28F] shadow-lg shadow-[#00D28F]/15"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {/* Custom Radio Circle */}
                          <div
                            className={cn(
                              "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors shrink-0",
                              isSelected ? "border-[#00D28F]" : "border-zinc-600"
                            )}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#00D28F]" />}
                          </div>
                          <Icon className={cn("w-4 h-4", isSelected ? "text-[#00D28F]" : "text-zinc-400")} />
                        </div>
                        <span className="text-[12px] font-mono font-bold text-[#00D28F]">
                          {opt.ratio}
                        </span>
                      </div>
                      <div>
                        <span className="text-[14px] font-semibold text-white block">
                          {opt.label}
                        </span>
                        <span className="text-[11px] text-zinc-400 font-normal line-clamp-1">
                          {opt.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section 2: Number of Pages Slider (1 to 30 Pages) */}
            {serviceType !== "meta-ads" && serviceType !== "google-ads" && (
              <div className="pt-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[16px] md:text-[18px] font-bold text-white font-sans">
                    Number of Pages / Views
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[20px] font-mono font-bold text-[#00D28F]">
                      {pages} {pages === 1 ? "Page" : "Pages"}
                    </span>
                    {pages === 10 && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#00D28F]/20 text-[#00D28F] text-[11px] font-mono font-bold">
                        Target Ratio Benchmark
                      </span>
                    )}
                  </div>
                </div>

                {/* Slider Input with Custom Range Track */}
                <div className="space-y-2">
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={pages}
                    onChange={(e) => setPages(parseInt(e.target.value, 10))}
                    className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#00D28F] focus:outline-none"
                    style={{
                      background: `linear-gradient(to right, #00D28F 0%, #00D28F ${((pages - 1) / 29) * 100}%, #27272a ${((pages - 1) / 29) * 100}%, #27272a 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-[12px] font-mono text-zinc-500">
                    <span>1 Page (Landing)</span>
                    <span className="text-[#00D28F]">10 Pages (Standard)</span>
                    <span>15 Pages (SEO Hub)</span>
                    <span>30 Pages (Listing Portal)</span>
                  </div>
                </div>

                {/* Ratio Guideline Note */}
                <div className="mt-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5 text-[12px] text-zinc-400 font-mono">
                  <Info className="w-4 h-4 text-[#00D28F] shrink-0" />
                  <span>
                    Ratio: WordPress $400 / 10 pgs • Webflow $600 / 10 pgs • Next.js $800 / 10 pgs • SEO $200 / 15 pgs.
                  </span>
                </div>
              </div>
            )}

            {/* Section 3: Add-ons & Business Accelerators (Checkboxes) */}
            <div className="pt-8">
              <h3 className="text-[16px] md:text-[18px] font-bold text-white font-sans mb-4">
                Included Features &amp; Add-ons
              </h3>

              <div className="space-y-3">
                {/* Add-on 1: Cutting-Edge AI SEO (GEO, AEO, AIO, GMB) */}
                <label
                  onClick={() => setNeedAI_SEO(!needAI_SEO)}
                  className={cn(
                    "p-4 rounded-xl border flex items-center justify-between gap-4 cursor-pointer transition-all duration-200 select-none",
                    needAI_SEO
                      ? "bg-white/[0.08] border-[#00D28F]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors shrink-0",
                        needAI_SEO ? "border-[#00D28F] bg-[#00D28F]" : "border-zinc-600 bg-transparent"
                      )}
                    >
                      {needAI_SEO && (
                        <svg className="w-3.5 h-3.5 text-[#0A0A0A] stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <span className="text-[14px] font-medium text-white block">
                        AI-Driven Search &amp; GMB Map Pack (SEO, GEO, AEO, AIO)
                      </span>
                      <span className="text-[12px] text-zinc-400 font-normal">
                        Advanced on-page, local schema &amp; AI answer engine optimization
                      </span>
                    </div>
                  </div>

                  <span className="text-[13px] font-mono font-bold text-[#00D28F] shrink-0">
                    {serviceType === "seo" ? "Primary Core" : "Included"}
                  </span>
                </label>

                {/* Add-on 2: Automated Booking Engine Sync */}
                <label
                  onClick={() => setNeedBooking(!needBooking)}
                  className={cn(
                    "p-4 rounded-xl border flex items-center justify-between gap-4 cursor-pointer transition-all duration-200 select-none",
                    needBooking
                      ? "bg-white/[0.08] border-[#00D28F]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors shrink-0",
                        needBooking ? "border-[#00D28F] bg-[#00D28F]" : "border-zinc-600 bg-transparent"
                      )}
                    >
                      {needBooking && (
                        <svg className="w-3.5 h-3.5 text-[#0A0A0A] stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <span className="text-[14px] font-medium text-white block">
                        Appointment &amp; Calendar Booking System
                      </span>
                      <span className="text-[12px] text-zinc-400 font-normal">
                        Cal.com / Calendly / Acuity sync for dentists, plumbers &amp; local clinics
                      </span>
                    </div>
                  </div>

                  <span className="text-[13px] font-mono font-bold text-[#00D28F] shrink-0">
                    +$40 Flat
                  </span>
                </label>

                {/* Add-on 3: Copywriting */}
                <label
                  onClick={() => setNeedContent(!needContent)}
                  className={cn(
                    "p-4 rounded-xl border flex items-center justify-between gap-4 cursor-pointer transition-all duration-200 select-none",
                    needContent
                      ? "bg-white/[0.08] border-[#00D28F]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors shrink-0",
                        needContent ? "border-[#00D28F] bg-[#00D28F]" : "border-zinc-600 bg-transparent"
                      )}
                    >
                      {needContent && (
                        <svg className="w-3.5 h-3.5 text-[#0A0A0A] stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <span className="text-[14px] font-medium text-white block">
                        Local Business Copywriting &amp; Service Pages
                      </span>
                      <span className="text-[12px] text-zinc-400 font-normal">
                        High-converting sales copy written for your specific local trade
                      </span>
                    </div>
                  </div>

                  <span className="text-[13px] font-mono font-bold text-[#00D28F] shrink-0">
                    +$20/page
                  </span>
                </label>
              </div>
            </div>

            {/* Section 4: Turnaround Timeline */}
            <div className="pt-8">
              <h3 className="text-[16px] md:text-[18px] font-bold text-white font-sans mb-4">
                Delivery Timeline
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "rush" as TimelineType, label: "Rush (3-5 Days)", badge: "+$25/pg", desc: "Emergency priority deploy" },
                  { id: "fast" as TimelineType, label: "Fast (7 Days)", badge: "+$12/pg", desc: "1-Week fast turnaround" },
                  { id: "regular" as TimelineType, label: "Regular (7-14 Days)", badge: "Standard", desc: "Agile 2-week sprint" },
                ].map((t) => {
                  const isSelected = timeline === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTimeline(t.id)}
                      className={cn(
                        "p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between gap-1.5 cursor-pointer",
                        isSelected
                          ? "bg-white/[0.08] border-[#00D28F] shadow-lg shadow-[#00D28F]/10"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className={cn(
                            "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors",
                            isSelected ? "border-[#00D28F]" : "border-zinc-600"
                          )}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#00D28F]" />}
                        </div>
                        <span className="text-[11px] font-mono text-[#00D28F]">{t.badge}</span>
                      </div>
                      <span className="text-[13px] font-medium text-white block">{t.label}</span>
                      <span className="text-[11px] text-zinc-500">{t.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN (Live Cost Estimation & Transparent Savings - 5 Columns)
              ========================================================================= */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between bg-gradient-to-b from-[#121212] via-[#0E0E0E] to-[#0A0A0A]">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-2xl font-bold tracking-tight text-white font-sans">
                  Transparent Cost
                </h3>
                <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-mono font-normal text-zinc-300">
                  Fixed Pricing
                </span>
              </div>
              <p className="text-[14px] text-zinc-400 font-normal mb-6">
                Fair, accessible pricing tailored for local businesses &amp; digital portals. No hidden retainers.
              </p>

              {/* 3 Stacked Comparative Cards */}
              <div className="space-y-4 mb-8">
                {/* 1. Typical Agency */}
                <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium text-zinc-400">
                      Traditional Agency Minimum
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">2-4 Months</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-zinc-300 font-mono">
                    ${agencyCost.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-rose-400/80">
                    + Slow turnaround &amp; costly monthly retainers
                  </p>
                </div>

                {/* 2. Generic Freelancer */}
                <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-medium text-zinc-400">
                      Average Freelancer
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">Hit or miss</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-zinc-300 font-mono">
                    ${freelancerCost.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-amber-400/80">
                    + No guaranteed speed or Google Maps SEO
                  </p>
                </div>

                {/* 3. With Startuplize Studio (Calibrated Price) */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-[#00D28F] via-[#00B87D] to-emerald-800 text-[#0A0A0A] space-y-3 relative overflow-hidden shadow-2xl shadow-[#00D28F]/20 border border-white/20">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[13px] font-bold uppercase tracking-wider text-[#0A0A0A] font-mono flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 fill-[#0A0A0A]" />
                      <span>With Startuplize</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black/15 text-[11px] font-mono font-bold text-[#0A0A0A]">
                      Save ~${savingsAmount.toLocaleString()}
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] font-mono">
                    ${startuplizeCost.toLocaleString()}
                  </div>

                  <p className="text-[13px] font-semibold text-[#0A0A0A]/90">
                    100/100 Speed + On-Page SEO + GMB Included
                  </p>

                  <div className="pt-1 flex flex-wrap gap-1.5 text-[11px] font-mono text-[#0A0A0A]/85">
                    <span>✓ 100% Code Ownership</span>
                    <span>•</span>
                    <span>✓ 14-Day Warranty</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleBookScope}
                className="w-full sm:flex-1 py-4 px-6 rounded-full font-bold text-[14px] uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-white shadow-xl shadow-[#00D28F]/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lock In Scope (${startuplizeCost})</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleCopyEstimate}
                className="w-full sm:w-auto py-4 px-5 rounded-full font-mono text-[13px] text-zinc-300 hover:text-white bg-white/[0.06] hover:bg-white/10 border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
                title="Copy full scope calculation"
              >
                {copiedToast ? (
                  <>
                    <Check className="w-4 h-4 text-[#00D28F]" />
                    <span className="text-[#00D28F]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
