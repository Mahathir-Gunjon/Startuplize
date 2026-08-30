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
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCalculatorProps {
  onOpenBookingWithScope?: (scopeDetails: {
    serviceType: string;
    pages: number;
    needContent: boolean;
    needSEO: boolean;
    timeline: string;
    estimatedCost: number;
  }) => void;
}

type ServiceType = "design" | "development" | "both";
type TimelineType = "regular" | "fast" | "rush";

export default function ProjectCalculator({
  onOpenBookingWithScope,
}: ProjectCalculatorProps) {
  // Calculator States
  const [serviceType, setServiceType] = useState<ServiceType>("both");
  const [pages, setPages] = useState<number>(5);
  const [needContent, setNeedContent] = useState<boolean>(false);
  const [needSEO, setNeedSEO] = useState<boolean>(true);
  const [timeline, setTimeline] = useState<TimelineType>("regular");
  const [copiedToast, setCopiedToast] = useState<boolean>(false);

  // Pricing Calculations
  const { startuplizeCost, agencyCost, freelancerCost, savingsAmount } = useMemo(() => {
    // 1. Startuplize Base Pricing Model with Volume Discount
    // Base prices by service: design: 399 base + 100/page, development: 199 base + 100/page, both: 499 base + 200/page
    // With volume curve: 1st page standard, additional pages get volume discount
    let base = 499;
    let perPage = 200;

    if (serviceType === "design") {
      base = 399;
      perPage = 100;
    } else if (serviceType === "development") {
      base = 199;
      perPage = 100;
    } else {
      base = 499;
      perPage = 200;
    }

    // Volume discount: As pages increase beyond 3, per-page drops by 10%
    const pageMultiplier = pages <= 1 ? 0 : pages - 1;
    let baseTotal = base + pageMultiplier * perPage;

    if (pages > 5) {
      // 10% discount on additional pages for 6+
      const standardAdditional = 4 * perPage;
      const discountedAdditional = (pages - 5) * (perPage * 0.85);
      baseTotal = base + standardAdditional + discountedAdditional;
    }

    let addOns = 0;
    if (needContent) addOns += pages * 50;
    if (needSEO) addOns += pages * 50;

    let speedFee = 0;
    if (timeline === "rush") speedFee += pages * 100;
    if (timeline === "fast") speedFee += pages * 25;

    const startuplizeTotal = Math.round(Math.max(base, baseTotal + addOns + speedFee));

    // 2. Typical Agency Cost
    const agencyPerPage = serviceType === "both" ? 1000 : 400;
    const agencyTotal = 8000 + (pages - 1) * agencyPerPage + (needSEO ? pages * 150 : 0) + (timeline === "rush" ? 3000 : 0);

    // 3. Regular Freelancer Cost
    const freelancerPerPage = serviceType === "both" ? 500 : 200;
    const freelancerTotal = 3000 + (pages - 1) * freelancerPerPage + (needSEO ? pages * 75 : 0) + (timeline === "rush" ? 1200 : 0);

    const savings = agencyTotal - startuplizeTotal;

    return {
      startuplizeCost: startuplizeTotal,
      agencyCost: agencyTotal,
      freelancerCost: freelancerTotal,
      savingsAmount: savings,
    };
  }, [serviceType, pages, needContent, needSEO, timeline]);

  const handleCopyEstimate = () => {
    const summary = `Startuplize Project Estimate:
• Service: ${serviceType === "both" ? "Design + Development" : serviceType === "design" ? "Only Design" : "Only Development"}
• Pages: ${pages}
• Content Help: ${needContent ? "Yes (+$50/page)" : "No"}
• SEO & Speed Optimization: ${needSEO ? "Yes (+$50/page)" : "No"}
• Timeline: ${timeline === "rush" ? "Within 7 Days (Rush)" : timeline === "fast" ? "Within 14 Days (Fast)" : "Regular Speed"}
• Estimated Investment: $${startuplizeCost.toLocaleString()}
• Estimated Agency Equivalent: $${agencyCost.toLocaleString()} (Save $${savingsAmount.toLocaleString()})`;

    navigator.clipboard.writeText(summary);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 3000);
  };

  const handleBookScope = () => {
    if (onOpenBookingWithScope) {
      onOpenBookingWithScope({
        serviceType: serviceType === "both" ? "Design + Development" : serviceType === "design" ? "Only Design" : "Only Development",
        pages,
        needContent,
        needSEO,
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

          <p className="text-[16px] md:text-[18px] text-zinc-400 font-normal mt-4 max-w-xl mx-auto leading-relaxed">
            Configure your technical requirements in real-time. Transparent pricing with built-in volume discounts and zero agency bloat.
          </p>
        </div>

        {/* 2-COLUMN GRID CALCULATOR CONTAINER (rounded-2xl, no gap, overflow-hidden) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0D0D0D]">
          {/* =========================================================================
              LEFT COLUMN (Calculator Form)
              ========================================================================= */}
          <div className="p-8 lg:p-12 divide-y divide-[#1E1E1E] flex flex-col justify-between space-y-8 bg-[#0D0D0D]">
            {/* Section 1: Service Type (Radio Buttons) */}
            <div className="pt-0">
              <h3 className="text-[16px] md:text-[18px] font-bold text-white font-sans mb-4 flex items-center justify-between">
                <span>What kind of service do you need?</span>
                <span className="text-[12px] font-mono font-normal text-zinc-500">Step 1 of 4</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "design" as ServiceType, label: "Only Design", price: "From $399" },
                  { id: "development" as ServiceType, label: "Only Development", price: "From $199" },
                  { id: "both" as ServiceType, label: "Design + Development", price: "From $499" },
                ].map((opt) => {
                  const isSelected = serviceType === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setServiceType(opt.id)}
                      className={cn(
                        "p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between gap-3 cursor-pointer",
                        isSelected
                          ? "bg-white/[0.08] border-[#00D28F] shadow-lg shadow-[#00D28F]/10"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        {/* Custom Radio Circle */}
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                            isSelected ? "border-[#00D28F]" : "border-zinc-600"
                          )}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-[#00D28F]" />}
                        </div>
                        <span className="text-[12px] font-mono font-normal text-zinc-400">
                          {opt.price}
                        </span>
                      </div>
                      <span className="text-[14px] font-medium text-white font-sans">
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section 2: Number of Pages (Interactive Slider with Live Value) */}
            <div className="pt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[16px] md:text-[18px] font-bold text-white font-sans">
                  Number of Pages
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-[20px] font-mono font-bold text-[#00D28F]">
                    {pages} {pages === 1 ? "Page" : "Pages"}
                  </span>
                  {pages >= 5 && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#00D28F]/20 text-[#00D28F] text-[11px] font-mono font-normal">
                      Volume Discount Applied
                    </span>
                  )}
                </div>
              </div>

              {/* Slider Input with Custom Styling */}
              <div className="space-y-3">
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
                  <span>15 Pages (Growth)</span>
                  <span>30 Pages (Enterprise)</span>
                </div>
              </div>

              {/* Volume Discount Explainer Pill */}
              <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5 text-[12px] text-zinc-400 font-mono">
                <Info className="w-4 h-4 text-[#00D28F] shrink-0" />
                <span>
                  Pricing per page automatically reduces as volume scales (1 page ~$100, 2 pages ~$180, 3 pages ~$250).
                </span>
              </div>
            </div>

            {/* Section 3: Add-ons (Checkboxes) */}
            <div className="pt-8">
              <h3 className="text-[16px] md:text-[18px] font-bold text-white font-sans mb-4">
                Optional Accelerators &amp; Add-ons
              </h3>

              <div className="space-y-3">
                {/* Add-on 1: Content */}
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
                    {/* Custom Checkbox */}
                    <div
                      className={cn(
                        "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors shrink-0",
                        needContent
                          ? "border-[#00D28F] bg-[#00D28F]"
                          : "border-zinc-600 bg-transparent"
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
                        I will need help with copywriting &amp; content
                      </span>
                      <span className="text-[12px] text-zinc-400 font-normal">
                        Conversion-led copy crafted by senior B2B tech copywriters
                      </span>
                    </div>
                  </div>

                  <span className="text-[14px] font-mono font-bold text-[#00D28F] shrink-0">
                    +$50/page
                  </span>
                </label>

                {/* Add-on 2: SEO */}
                <label
                  onClick={() => setNeedSEO(!needSEO)}
                  className={cn(
                    "p-4 rounded-xl border flex items-center justify-between gap-4 cursor-pointer transition-all duration-200 select-none",
                    needSEO
                      ? "bg-white/[0.08] border-[#00D28F]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                  )}
                >
                  <div className="flex items-center gap-3">
                    {/* Custom Checkbox */}
                    <div
                      className={cn(
                        "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors shrink-0",
                        needSEO
                          ? "border-[#00D28F] bg-[#00D28F]"
                          : "border-zinc-600 bg-transparent"
                      )}
                    >
                      {needSEO && (
                        <svg className="w-3.5 h-3.5 text-[#0A0A0A] stroke-[3]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <span className="text-[14px] font-medium text-white block">
                        I want to optimize my website for SEO &amp; Speed
                      </span>
                      <span className="text-[12px] text-zinc-400 font-normal">
                        Programmatic schema, 99+ Core Web Vitals &amp; meta tagging
                      </span>
                    </div>
                  </div>

                  <span className="text-[14px] font-mono font-bold text-[#00D28F] shrink-0">
                    +$50/page
                  </span>
                </label>
              </div>
            </div>

            {/* Section 4: Timeline (Radio Buttons) */}
            <div className="pt-8">
              <h3 className="text-[16px] md:text-[18px] font-bold text-white font-sans mb-4">
                How fast do you need this?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: "rush" as TimelineType,
                    label: "Within 7 Days",
                    badge: "+$100/page",
                    desc: "Expedited dedicated sprint",
                  },
                  {
                    id: "fast" as TimelineType,
                    label: "Within 14 Days",
                    badge: "+$25/page",
                    desc: "Accelerated release",
                  },
                  {
                    id: "regular" as TimelineType,
                    label: "Regular Speed",
                    badge: "No extra cost",
                    desc: "Standard 3-4 week sprint",
                  },
                ].map((t) => {
                  const isSelected = timeline === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTimeline(t.id)}
                      className={cn(
                        "p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between gap-2 cursor-pointer",
                        isSelected
                          ? "bg-white/[0.08] border-[#00D28F] shadow-lg shadow-[#00D28F]/10"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className={cn(
                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                            isSelected ? "border-[#00D28F]" : "border-zinc-600"
                          )}
                        >
                          {isSelected && <div className="w-2 h-2 rounded-full bg-[#00D28F]" />}
                        </div>
                        <span className="text-[11px] font-mono text-[#00D28F] font-normal">
                          {t.badge}
                        </span>
                      </div>
                      <div>
                        <span className="text-[14px] font-medium text-white block">
                          {t.label}
                        </span>
                        <span className="text-[11px] text-zinc-500 font-normal">
                          {t.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN (Cost Estimation & Benchmark Comparison)
              ========================================================================= */}
          <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between bg-gradient-to-b from-[#121212] via-[#0E0E0E] to-[#0A0A0A] min-h-[718px]">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-2xl font-bold tracking-tight text-white font-sans">
                  Estimated Cost
                </h3>
                <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[12px] font-mono font-normal text-zinc-300">
                  Instant Live Projection
                </span>
              </div>
              <p className="text-[14px] md:text-[16px] text-zinc-400 font-normal mb-6">
                Compare your custom scope against typical market alternatives. Transparent, fixed deliverables with zero surprise retainer billing.
              </p>

              {/* 3 Stacked Comparative Cards */}
              <div className="space-y-4 mb-8">
                {/* 1. Typical Agency Card */}
                <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/10 space-y-2 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-medium text-zinc-400">
                      Typical Agency charges minimum
                    </span>
                    <span className="text-[12px] font-mono text-zinc-500">
                      3-6 Month Timeline
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-zinc-300 font-mono">
                    ${agencyCost.toLocaleString()}
                  </div>
                  <p className="text-[12px] text-rose-400/80 font-normal">
                    + Too much extra time &amp; additional retainer bloat
                  </p>
                </div>

                {/* 2. Regular Freelancer Card */}
                <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/10 space-y-2 relative overflow-hidden">
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-medium text-zinc-400">
                      Regular Freelancer charges minimum
                    </span>
                    <span className="text-[12px] font-mono text-zinc-500">
                      Unpredictable QA
                    </span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-zinc-300 font-mono">
                    ${freelancerCost.toLocaleString()}
                  </div>
                  <p className="text-[12px] text-amber-400/80 font-normal">
                    + Too much headache &amp; endless back-and-forth
                  </p>
                </div>

                {/* 3. YOUR PRICE CARD (With Startuplize Studio) */}
                <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#00D28F] via-[#00B87D] to-emerald-800 text-[#0A0A0A] space-y-3 relative overflow-hidden shadow-2xl shadow-[#00D28F]/20 border border-white/20">
                  {/* Subtle top glare highlight */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between gap-2 relative z-10">
                    <span className="text-[14px] font-bold uppercase tracking-wider text-[#0A0A0A] font-mono flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 fill-[#0A0A0A]" />
                      <span>With Startuplize Studio</span>
                    </span>

                    <span className="px-3 py-1 rounded-full bg-black/15 text-[12px] font-mono font-bold text-[#0A0A0A] border border-black/10">
                      You Save ~${savingsAmount.toLocaleString()}
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-[#0A0A0A] font-mono py-1">
                    ${startuplizeCost.toLocaleString()}
                  </div>

                  <p className="text-[14px] font-semibold text-[#0A0A0A]/90">
                    Save your money, time &amp; headache • Sub-second 100/100 Speed Guaranteed
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2 text-[12px] font-mono text-[#0A0A0A]/80">
                    <span>✓ Dedicated Senior Architect</span>
                    <span>•</span>
                    <span>✓ Weekly Staging URL</span>
                    <span>•</span>
                    <span>✓ 100% Code Ownership</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handleBookScope}
                className="w-full sm:flex-1 py-4 px-8 rounded-full font-bold text-[14px] uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-white shadow-xl shadow-[#00D28F]/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lock In This Scope &amp; Book Call</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleCopyEstimate}
                className="w-full sm:w-auto py-4 px-6 rounded-full font-mono text-[14px] text-zinc-300 hover:text-white bg-white/[0.06] hover:bg-white/10 border border-white/15 transition-all flex items-center justify-center gap-2 cursor-pointer"
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
                    <span>Copy Summary</span>
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
