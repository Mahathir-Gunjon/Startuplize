"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MegaFooter from "@/components/MegaFooter";
import BookingModal from "@/components/BookingModal";
import CustomCursor from "@/components/CustomCursor";
import ProjectCalculator from "@/components/ProjectCalculator";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import GlobalCTA from "@/components/GlobalCTA";
import {
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  TrendingUp,
  FileCheck,
  ChevronDown,
  Layers,
  Globe,
  Search,
  Code2,
  Gauge,
  Calendar,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const PRICING_FAQ = [
  {
    q: "Why is your pricing so affordable compared to standard $10k+ agencies?",
    a: "We have completely eliminated the bloated agency overhead — no account manager layers, no useless slide decks, and no commission salespeople. You work directly with senior architects using modular component systems, allowing us to deliver 100/100 performance at $400 - $800 fixed cost.",
  },
  {
    q: "What is included in the $400 WordPress (10 Pages) package?",
    a: "You get a custom 10-page WordPress build, sub-second speed optimization (0.4s load time), comprehensive on-page SEO according to our 40-point checklist, Google My Business (GMB) map pack optimization, automated booking calendar sync (Cal.com / Calendly), and full ownership handoff.",
  },
  {
    q: "What are your Cutting-Edge AI SEO strategies (GEO, AEO, AIO)?",
    a: "Traditional SEO is no longer enough. Our $200 (15 Pages) SEO sprint implements: SEO (Standard Google Search), GEO (Generative Engine Optimization for ChatGPT/Perplexity citations), AEO (Answer Engine Optimization for Voice/Siri/Gemini), AIO (AI-powered dynamic schema), and Google Map Pack Local SEO.",
  },
  {
    q: "Do you build directory & listing sites like car dealerships and hardware tool catalogs?",
    a: "Yes! We specialize in high-volume listing sites with parametric faceted filters (by make, price, condition, SKU, tonnage), VIN decoders, dynamic PDF spec sheet generators, and instant quote request engines.",
  },
  {
    q: "Are there any hidden monthly fees or lock-in retainers?",
    a: "Zero hidden fees. Our pricing is 100% transparent and fixed upfront. You receive 100% full source code and database ownership upon completion with no recurring hosting markups.",
  },
];

export default function PricingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [prefilledScope, setPrefilledScope] = useState<string | null>(null);

  const handleOpenBooking = (industryName?: string) => {
    if (industryName) {
      setPrefilledScope(`Industry Inquiry: ${industryName}`);
    }
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithScope = (scopeDetails: {
    serviceType: string;
    pages: number;
    needContent: boolean;
    needAI_SEO: boolean;
    needBooking: boolean;
    timeline: string;
    estimatedCost: number;
  }) => {
    const note = `Selected Scope: ${scopeDetails.serviceType} (${scopeDetails.pages} Pages) | AI SEO: ${scopeDetails.needAI_SEO ? "Yes" : "No"} | Booking: ${scopeDetails.needBooking ? "Yes" : "No"} | Delivery: ${scopeDetails.timeline} | Estimated: $${scopeDetails.estimatedCost}`;
    setPrefilledScope(note);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] relative selection:bg-[#00D28F] selection:text-[#0A0A0A]">
      <CustomCursor />
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* =========================================================================
          HERO HEADER: STRICTLY ONE H1
          ========================================================================= */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1366px] mx-auto text-center">
        {/* Eyebrow Capsule: text-[14px], font-normal, not uppercase, not bold */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[14px] font-normal font-mono mb-6">
          <Sparkles className="w-4 h-4 text-[#00B87D]" />
          <span>Fair &amp; Transparent Local Pricing</span>
        </div>

        {/* Strictly ONE H1 (text-5xl md:text-7xl) */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1A1A1A] font-sans max-w-5xl mx-auto leading-[1.1]">
          Transparent Pricing.{" "}
          <span className="font-serif italic font-normal text-[#00B87D]">
            Zero Retainer Bloat.
          </span>
        </h1>

        {/* Large Body Tier */}
        <p className="text-[20px] md:text-[24px] text-zinc-600 max-w-3xl mx-auto mt-6 font-normal leading-relaxed">
          Affordable, fixed-scope engineering calibrated for local dental clinics, trade contractors, listing directories, and e-commerce storefronts.
        </p>

        {/* Quick Anchor Links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#calculator-section"
            className="px-6 py-3 rounded-full bg-[#00D28F] text-[#0A0A0A] font-bold text-[14px] font-mono shadow-md shadow-[#00D28F]/20 hover:scale-105 active:scale-95 transition-all"
          >
            Open Live Calculator ↓
          </a>
          <a
            href="#packages"
            className="px-6 py-3 rounded-full bg-white text-zinc-800 border border-zinc-300 font-medium text-[14px] font-mono hover:bg-zinc-50 transition-all"
          >
            View Standard Packages
          </a>
          <a
            href="#industries"
            className="px-6 py-3 rounded-full bg-white text-zinc-800 border border-zinc-300 font-medium text-[14px] font-mono hover:bg-zinc-50 transition-all"
          >
            Who We Build For
          </a>
        </div>
      </section>

      {/* =========================================================================
          1. INTERACTIVE PROJECT ESTIMATION CALCULATOR SECTION
          ========================================================================= */}
      <ProjectCalculator onOpenBookingWithScope={handleOpenBookingWithScope} />

      {/* =========================================================================
          2. WHO WE WORK WITH (Local, Listing & E-Commerce)
          ========================================================================= */}
      <WhoWeWorkWith onOpenBooking={handleOpenBooking} />

      {/* =========================================================================
          3. TURNKEY PACKAGES & SPRINT TIERS
          ========================================================================= */}
      <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1366px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[14px] font-normal font-mono mb-4">
            <Zap className="w-4 h-4 text-[#00B87D]" />
            <span>Turnkey Growth Packages</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans">
            Transparent Sprints{" "}
            <span className="font-serif italic font-normal text-[#00B87D]">
              for Every Stage.
            </span>
          </h2>

          <p className="text-[16px] md:text-[18px] text-zinc-600 font-normal mt-4">
            Prioritized by proven ROI: WordPress &gt; Cutting-Edge SEO &gt; Webflow &gt; Paid Ads &gt; Custom Next.js.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Tier 1: WordPress VIP & Local Package (Most Popular for Local Businesses) */}
          <div className="p-8 rounded-2xl bg-white border-2 border-[#00D28F] shadow-xl shadow-[#00D28F]/10 flex flex-col justify-between relative">
            <div className="absolute top-0 right-6 px-3 py-1 rounded-b-lg bg-[#00D28F] text-[#0A0A0A] text-[11px] font-bold font-mono uppercase tracking-wider">
              #1 Local Pick
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 text-[#00A870]">
                <Globe className="w-5 h-5" />
                <span className="text-[13px] font-mono font-bold uppercase tracking-wider">
                  WordPress &amp; Local CMS
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-[#1A1A1A]">
                  $400
                </span>
                <span className="text-[14px] text-zinc-500 font-mono">/ 10 Pages</span>
              </div>

              <p className="text-[14px] text-zinc-600 font-normal leading-relaxed mb-6">
                Complete 10-page WordPress platform engineered for dental clinics, plumbers, contractors, and local booking businesses.
              </p>

              <div className="space-y-3 pt-4 border-t border-zinc-100 mb-8">
                {[
                  "10 Custom Responsive Pages",
                  "On-Page SEO (40-Point Checklist)",
                  "Google My Business (GMB) Setup",
                  "Sub-Second Speed Optimization",
                  "Cal.com / Calendly Booking Sync",
                  "1-2 Week Turnaround Delivery",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[13px] text-zinc-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00A870] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleOpenBooking("WordPress Site ($400/10 Pgs)")}
              className="w-full py-3.5 px-4 rounded-full font-bold text-[13px] uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#00D28F]/20"
            >
              <span>Get Started ($400)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tier 2: Full Cutting-Edge AI SEO Sprint */}
          <div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-[#00D28F] hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#00A870]">
                <Search className="w-5 h-5" />
                <span className="text-[13px] font-mono font-bold uppercase tracking-wider">
                  AI-Driven Search Domination
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-[#1A1A1A]">
                  $200
                </span>
                <span className="text-[14px] text-zinc-500 font-mono">/ 15 Pages</span>
              </div>

              <p className="text-[14px] text-zinc-600 font-normal leading-relaxed mb-6">
                Cutting-edge AI-driven search sprint covering SEO, GEO (ChatGPT), AEO (Voice), AIO, and Google Map Pack #1 ranking.
              </p>

              <div className="space-y-3 pt-4 border-t border-zinc-100 mb-8">
                {[
                  "Advance On-Page SEO for 15 Pages",
                  "Technical Crawler & Schema Audit",
                  "GEO (Generative Engine Citation)",
                  "AEO (Answer Engine Optimization)",
                  "Local SEO Map Pack Optimization",
                  "Detailed KPI & Ranking Report",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[13px] text-zinc-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00A870] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleOpenBooking("AI SEO Sprint ($200/15 Pgs)")}
              className="w-full py-3.5 px-4 rounded-full font-bold text-[13px] uppercase tracking-wider text-zinc-800 bg-zinc-100 hover:bg-[#00D28F] hover:text-[#0A0A0A] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Launch SEO ($200)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tier 3: Webflow 3D Interactive Platform */}
          <div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-[#00D28F] hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#00A870]">
                <Sparkles className="w-5 h-5" />
                <span className="text-[13px] font-mono font-bold uppercase tracking-wider">
                  Webflow Interactive
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-[#1A1A1A]">
                  $600
                </span>
                <span className="text-[14px] text-zinc-500 font-mono">/ 10 Pages</span>
              </div>

              <p className="text-[14px] text-zinc-600 font-normal leading-relaxed mb-6">
                Cinema-grade Webflow platform featuring fluid GSAP micro-animations, dynamic CMS databases, and Awwwards styling.
              </p>

              <div className="space-y-3 pt-4 border-t border-zinc-100 mb-8">
                {[
                  "10 Custom Webflow Pages",
                  "Fluid GSAP 3 Micro-Animations",
                  "Dynamic CMS Collection Architecture",
                  "100/100 Lighthouse Optimization",
                  "Figma-to-Webflow Pixel Precision",
                  "Client Handoff Video Library",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[13px] text-zinc-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00A870] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleOpenBooking("Webflow Platform ($600/10 Pgs)")}
              className="w-full py-3.5 px-4 rounded-full font-bold text-[13px] uppercase tracking-wider text-zinc-800 bg-zinc-100 hover:bg-[#00D28F] hover:text-[#0A0A0A] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Started ($600)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tier 4: Custom Next.js 14 Full-Stack Platform */}
          <div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:border-[#00D28F] hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#00A870]">
                <Code2 className="w-5 h-5" />
                <span className="text-[13px] font-mono font-bold uppercase tracking-wider">
                  Custom Next.js 14
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-[#1A1A1A]">
                  $800
                </span>
                <span className="text-[14px] text-zinc-500 font-mono">/ 10 Pages</span>
              </div>

              <p className="text-[14px] text-zinc-600 font-normal leading-relaxed mb-6">
                Decoupled full-stack React 18 &amp; Next.js 14 App Router platform for high-traffic listing directories and SaaS storefronts.
              </p>

              <div className="space-y-3 pt-4 border-t border-zinc-100 mb-8">
                {[
                  "10 Next.js 14 App Router Pages",
                  "Sub-Second Edge Rendering (0.4s LCP)",
                  "Custom Database / API Sync",
                  "Parametric Faceted Search Engine",
                  "Tailwind CSS & TypeScript Strict",
                  "Vercel Edge Global CI/CD Deploy",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-[13px] text-zinc-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00A870] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleOpenBooking("Custom Next.js ($800/10 Pgs)")}
              className="w-full py-3.5 px-4 rounded-full font-bold text-[13px] uppercase tracking-wider text-zinc-800 bg-zinc-100 hover:bg-[#00D28F] hover:text-[#0A0A0A] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Started ($800)</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. VOLUME PRICING RATIO SCALE TABLE
          ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1366px] mx-auto">
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-zinc-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 text-[13px] font-mono text-zinc-700 mb-3">
                <FileCheck className="w-4 h-4 text-[#00B87D]" />
                <span>Transparent Volume Ratio Matrix</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-sans">
                Clear Pricing by Page Count
              </h2>
            </div>
            <p className="text-[14px] text-zinc-500 max-w-md font-normal">
              Includes On-Page SEO, Speed Optimization, and GMB Map Pack Setup.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-[14px] border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 text-zinc-400 font-mono text-[12px] uppercase">
                  <th className="py-4 px-4 font-semibold">Scope / Pages</th>
                  <th className="py-4 px-4 font-semibold text-[#00A870]">1. WordPress Site</th>
                  <th className="py-4 px-4 font-semibold text-zinc-700">2. Full AI SEO</th>
                  <th className="py-4 px-4 font-semibold text-zinc-700">3. Webflow Platform</th>
                  <th className="py-4 px-4 font-semibold text-zinc-700">4. Custom Next.js</th>
                  <th className="py-4 px-4 font-semibold text-zinc-500">Turnaround</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 font-mono">
                {[
                  { pages: "1 Page (Landing)", wp: "$120", seo: "$90", wf: "$180", next: "$240", time: "3 Days" },
                  { pages: "3 Pages (Micro)", wp: "$180", seo: "$90", wf: "$270", next: "$360", time: "5 Days" },
                  { pages: "5 Pages (Starter)", wp: "$245", seo: "$90", wf: "$365", next: "$490", time: "7 Days" },
                  { pages: "10 Pages (Standard Benchmark)", wp: "$400", seo: "$145", wf: "$600", next: "$800", time: "10-14 Days", highlight: true },
                  { pages: "15 Pages (SEO Hub)", wp: "$555", seo: "$200", wf: "$830", next: "$1,110", time: "14 Days", highlightSeo: true },
                  { pages: "20 Pages (Listing Portal)", wp: "$710", seo: "$255", wf: "$1,065", next: "$1,420", time: "18 Days" },
                  { pages: "30 Pages (E-Commerce Catalog)", wp: "$1,020", seo: "$365", wf: "$1,530", next: "$2,040", time: "21 Days" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={cn(
                      "hover:bg-zinc-50/80 transition-colors",
                      row.highlight && "bg-[#00D28F]/5 font-bold"
                    )}
                  >
                    <td className="py-4 px-4 text-[#1A1A1A] font-medium flex items-center gap-2">
                      <span>{row.pages}</span>
                      {row.highlight && (
                        <span className="text-[10px] bg-[#00D28F] text-[#0A0A0A] px-2 py-0.5 rounded-full uppercase">
                          Target
                        </span>
                      )}
                      {row.highlightSeo && (
                        <span className="text-[10px] bg-zinc-900 text-[#00D28F] px-2 py-0.5 rounded-full uppercase">
                          SEO Core
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-[#00A870] font-bold">{row.wp}</td>
                    <td className="py-4 px-4 text-zinc-700">{row.seo}</td>
                    <td className="py-4 px-4 text-zinc-700">{row.wf}</td>
                    <td className="py-4 px-4 text-zinc-700">{row.next}</td>
                    <td className="py-4 px-4 text-zinc-500 text-[13px]">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. MARKET COMPARISON MATRIX
          ========================================================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1366px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A] font-sans">
            How We Compare to the Market
          </h2>
          <p className="text-[16px] text-zinc-600 font-normal mt-2">
            Why smart local businesses choose Startuplize over $10k+ traditional agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-zinc-500 font-sans">Traditional Agency</h3>
            <div className="text-3xl font-black font-mono text-zinc-400">$5,000 - $15,000+</div>
            <div className="space-y-2 text-[14px] text-zinc-500">
              <p>✗ 2-4 Months Turnaround</p>
              <p>✗ Heavy Retainer Lock-in</p>
              <p>✗ Multiple Account Managers</p>
              <p>✗ Extra charge for SEO &amp; GMB</p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-zinc-500 font-sans">Solo Freelancers</h3>
            <div className="text-3xl font-black font-mono text-zinc-400">$1,000 - $3,000</div>
            <div className="space-y-2 text-[14px] text-zinc-500">
              <p>✗ Unpredictable Deadlines</p>
              <p>✗ Slow bloated templates</p>
              <p>✗ No code quality guarantee</p>
              <p>✗ Ghosting after handoff</p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0A0A0A] text-white border-2 border-[#00D28F] shadow-2xl shadow-[#00D28F]/20 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#00D28F] font-sans">Startuplize Studio</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-[#00D28F]/20 text-[#00D28F] text-[11px] font-mono font-bold">
                Elite Value
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-black font-mono text-white">$400 - $800 Flat</div>
            <div className="space-y-2 text-[14px] text-zinc-300">
              <p className="text-[#00D28F]">✓ 1-2 Week Turnaround Sprints</p>
              <p className="text-[#00D28F]">✓ 100/100 Core Web Vitals Speed</p>
              <p className="text-[#00D28F]">✓ On-Page SEO + GMB Included</p>
              <p className="text-[#00D28F]">✓ Direct Senior Architect Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. PRICING & TERMS FAQ ACCORDION
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[900px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[14px] font-normal font-mono mb-4">
            <HelpCircle className="w-4 h-4 text-[#00B87D]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1A1A1A] font-sans">
            Clear Answers. Zero Confusion.
          </h2>
        </div>

        <div className="space-y-4">
          {PRICING_FAQ.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="text-[17px] font-bold text-[#1A1A1A] font-sans">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-zinc-500 shrink-0 transition-transform duration-300",
                      isOpen && "rotate-180 text-[#00A870]"
                    )}
                  />
                </button>
                {isOpen && (
                  <p className="mt-4 text-[15px] text-zinc-600 font-normal leading-relaxed pt-3 border-t border-zinc-100">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Universal Global CTA */}
      <GlobalCTA onOpenBooking={() => handleOpenBooking()} />

      <MegaFooter onOpenBooking={() => handleOpenBooking()} />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialMessage={prefilledScope || undefined}
      />
    </main>
  );
}
