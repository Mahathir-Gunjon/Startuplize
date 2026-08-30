"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MegaFooter from "@/components/MegaFooter";
import GlobalCTA from "@/components/GlobalCTA";
import BookingModal from "@/components/BookingModal";
import CustomCursor from "@/components/CustomCursor";
import ProjectCalculator from "@/components/ProjectCalculator";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Zap,
  HelpCircle,
  Plus,
  Minus,
  Sliders,
  DollarSign,
  TrendingDown,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

const PRICING_PACKAGES = [
  {
    name: "Starter Sprint Flagship",
    badge: "Fastest Time-to-Market",
    price: "$399",
    unit: "Single Page / Landing Flagship",
    description:
      "Engineered for early-stage tech ventures, product launches, and high-converting single-page sales flagships.",
    features: [
      "1 High-converting flagship landing page",
      "Full SEO metadata & schema markup included",
      "Sub-second load speed (100/100 Core Web Vitals)",
      "Bespoke GSAP scroll animations & micro-interactions",
      "Figma design system source files included",
      "Ready in 7-10 business days",
    ],
    popular: false,
    cta: "Launch Starter Sprint",
  },
  {
    name: "Growth Multi-Page Platform",
    badge: "Most Popular For Scaling SaaS",
    price: "$999",
    unit: "Up to 5 Pages • Volume Pricing",
    description:
      "Complete multi-page web platform featuring volume-discounted page pricing ($100 first page, $80 second, $70 third).",
    features: [
      "Up to 5 custom-designed responsive pages",
      "Programmatic SEO architecture & blog CMS",
      "Interactive 3D shaders or Webflow/Next.js CMS",
      "Closed-loop analytics, GTM & CRM lead routing",
      "Comprehensive typography & component tokens",
      "Weekly staging previews & 14-day warranty",
    ],
    popular: true,
    cta: "Book Growth Platform",
  },
  {
    name: "Enterprise Architecture",
    badge: "Dedicated Senior Squad",
    price: "$2,499",
    unit: "Full Platform & Continuous Sprints",
    description:
      "Bespoke headless Next.js, complex WebGL visual visualizers, custom web apps, and continuous monthly CRO sprints.",
    features: [
      "Unlimited responsive pages & custom post types",
      "Decoupled headless architecture (Next.js 14 + CMS)",
      "Advanced 3D Three.js / WebGL canvas visualizers",
      "Dedicated Senior Architect & Creative Director",
      "Continuous A/B conversion testing & CRO sprints",
      "24/7 Priority SLA & direct Slack channel access",
    ],
    popular: false,
    cta: "Request Enterprise Scope",
  },
];

const VOLUME_TIERS = [
  { pages: "1 Page (Landing)", price: "$100", savings: "Standard Baseline", time: "5-7 Days" },
  { pages: "2 Pages", price: "$180", savings: "Save $20 (10% Off)", time: "7-10 Days" },
  { pages: "3 Pages", price: "$250", savings: "Save $50 (17% Off)", time: "10-12 Days" },
  { pages: "4 Pages", price: "$310", savings: "Save $90 (22% Off)", time: "12-14 Days" },
  { pages: "5 Pages (Flagship)", price: "$360", savings: "Save $140 (28% Off)", time: "14-16 Days" },
  { pages: "8 Pages (Full Platform)", price: "$520", savings: "Save $280 (35% Off)", time: "18-20 Days" },
  { pages: "12 Pages (Enterprise)", price: "$720", savings: "Save $480 (40% Off)", time: "21-25 Days" },
];

const COMPARISON_ROWS = [
  {
    feature: "Pricing Transparency",
    startuplize: "Fixed per-page with volume discounts",
    agency: "$15,000+ Minimum retainer with scope creep",
    freelancer: "Hourly with endless billing surprises",
  },
  {
    feature: "Page Load Speed & CWV",
    startuplize: "Guaranteed 99+ Core Web Vitals (Sub-Second)",
    agency: "Hit or miss (often bloated WordPress)",
    freelancer: "Rarely tested or audited",
  },
  {
    feature: "Technical SEO & Schema",
    startuplize: "Included in every single page ($0 extra)",
    agency: "$2,000+ Added SEO upsell fee",
    freelancer: "Basic meta tags only",
  },
  {
    feature: "Senior Access",
    startuplize: "Direct partnership with Creative Directors",
    agency: "Handed off to offshore junior contractors",
    freelancer: "Single person bottleneck",
  },
  {
    feature: "Turnaround Time",
    startuplize: "Fixed 1-3 Week Agile Sprints",
    agency: "3 to 6 Months of meetings & delay",
    freelancer: "Unpredictable delivery dates",
  },
  {
    feature: "Figma Source & Code Ownership",
    startuplize: "100% Full Commercial IP Transfer",
    agency: "Proprietary lock-in or extra fee",
    freelancer: "Often disorganised assets",
  },
];

const PRICING_FAQS = [
  {
    question: "How does the per-page volume pricing work?",
    answer:
      "Our base rate is $100 for your primary flagship page including full programmatic SEO, responsive layouts, and speed tuning. For every subsequent page, the marginal price drops automatically (e.g., 2 pages is $180, 3 pages is $250, 5 pages is $360). You save more as your platform scales.",
  },
  {
    question: "Are speed optimization and SEO really included?",
    answer:
      "Yes. We believe shipping a slow or unindexed website is unacceptable. Every page we deliver is optimized for 99+ Google Core Web Vitals, automated OpenGraph social preview tags, schema markup, and sub-second edge routing.",
  },
  {
    question: "What happens if I need extra pages or revisions later?",
    answer:
      "You can add additional pages at your discounted volume tier at any time. Every sprint includes 2 comprehensive revision rounds, followed by our 14-day post-launch warranty to fix any bug or adjustment for free.",
  },
  {
    question: "How do we get started?",
    answer:
      "Use our Project Estimation Calculator above or book a 30-minute discovery call directly on our calendar. We'll review your Figma designs or live site, confirm your scope, and kick off within 48 hours.",
  },
];

export default function PricingPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleOpenBookingWithScope = (scopeDetails: {
    serviceType: string;
    pages: number;
    needContent: boolean;
    needSEO: boolean;
    timeline: string;
    estimatedCost: number;
  }) => {
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] relative selection:bg-[#00D28F] selection:text-[#0A0A0A]">
      <CustomCursor />
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content Curtain Layer */}
      <div className="relative z-10 bg-[#FAFAFA] shadow-[0_45px_100px_rgba(0,0,0,0.55)]">
        {/* =========================================================================
            SECTION 1: HERO
            ========================================================================= */}
        <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] text-white relative overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#00D28F]/15 rounded-full blur-[190px] pointer-events-none -z-10" />

          <div className="max-w-[1366px] mx-auto text-center flex flex-col items-center">
            {/* Section Capsule: text-[14px], font-normal, not uppercase, not bold */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[14px] font-normal text-[#00D28F] mb-6 font-mono">
              <DollarSign className="w-4 h-4" />
              <span>Predictable Growth Investment</span>
            </div>

            {/* Strictly H1 (5xl md:7xl) */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white font-sans max-w-4xl mb-6">
              Transparent Pricing.{" "}
              <span className="font-serif italic font-normal text-[#00D28F]">
                Zero Retainer Bloat.
              </span>
            </h1>

            {/* Large Body Tier */}
            <p className="text-[20px] md:text-[24px] text-zinc-300 max-w-2xl font-normal leading-relaxed mb-8">
              Bespoke digital flagships and high-velocity engineering with transparent volume pricing,
              built-in SEO &amp; speed optimization, and guaranteed 100/100 performance.
            </p>

            {/* Quick Jump Pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-[14px] font-mono font-normal">
              <a
                href="#calculator-section"
                className="px-6 py-3 rounded-full bg-[#00D28F] text-[#0A0A0A] font-bold uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-[#00D28F]/25 flex items-center gap-2 cursor-pointer"
              >
                <Sliders className="w-4 h-4 text-[#0A0A0A]" />
                <span>Launch Interactive Calculator</span>
              </a>

              <a
                href="#packages"
                className="px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white/15 border border-white/15 text-white transition-all"
              >
                <span>View Standard Packages</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: PROJECT ESTIMATION CALCULATOR (Custom Full-Width Dark Section)
            ========================================================================= */}
        <ProjectCalculator onOpenBookingWithScope={handleOpenBookingWithScope} />

        {/* =========================================================================
            SECTION 3: VOLUME DISCOUNT SCALE TABLE
            ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200">
          <div className="max-w-[1366px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[14px] font-normal font-mono mb-4">
                <TrendingDown className="w-4 h-4 text-[#00B87D]" />
                <span>Transparent Volume Discount Scale</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans">
                The More You Build,{" "}
                <span className="font-serif italic font-normal text-[#00B87D]">
                  The More You Save.
                </span>
              </h2>
              <p className="text-[16px] md:text-[18px] text-zinc-600 font-normal mt-4">
                Every page comes fully optimized with schema markup, Core Web Vitals tuning, and mobile fluid breakpoints.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-50 border-b border-zinc-200 text-[14px] font-mono text-zinc-500">
                    <th className="py-4 px-6 font-normal">Page Count Scope</th>
                    <th className="py-4 px-6 font-normal">Effective Price</th>
                    <th className="py-4 px-6 font-normal">Volume Advantage</th>
                    <th className="py-4 px-6 font-normal">Typical Sprint Delivery</th>
                    <th className="py-4 px-6 font-normal text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 text-[14px] font-normal text-zinc-700">
                  {VOLUME_TIERS.map((tier, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50/80 transition-colors">
                      <td className="py-4 px-6 font-bold text-zinc-900 font-sans">
                        {tier.pages}
                      </td>
                      <td className="py-4 px-6 font-mono font-bold text-[#00A870] text-[16px]">
                        {tier.price}
                      </td>
                      <td className="py-4 px-6">
                        <span className="px-2.5 py-1 rounded-full bg-[#00D28F]/15 text-[#00A870] font-mono text-[12px] font-normal border border-[#00D28F]/30">
                          {tier.savings}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-mono text-zinc-600 text-[13px]">
                        {tier.time}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => setIsBookingOpen(true)}
                          className="px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] transition-all cursor-pointer shadow-sm"
                        >
                          Book Scope
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: FIXED PACKAGE TIERS
            ========================================================================= */}
        <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-b border-zinc-200">
          <div className="max-w-[1366px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[14px] font-normal font-mono mb-4">
                <Layers className="w-4 h-4 text-[#00B87D]" />
                <span>Turnkey Sprint Packages</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans">
                Engineered For Your{" "}
                <span className="font-serif italic font-normal text-[#00B87D]">
                  Current Stage.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {PRICING_PACKAGES.map((pkg, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative",
                    pkg.popular
                      ? "bg-[#0A0A0A] text-white border-2 border-[#00D28F] shadow-2xl shadow-[#00D28F]/20 scale-100 lg:-translate-y-2"
                      : "bg-white text-zinc-900 border border-zinc-200 shadow-sm hover:border-[#00D28F] hover:shadow-xl"
                  )}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00D28F] text-[#0A0A0A] text-[12px] font-bold uppercase tracking-wider font-mono shadow-md">
                      Recommended Choice
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-[12px] font-mono font-normal",
                          pkg.popular
                            ? "bg-white/[0.08] text-[#00D28F] border border-white/10"
                            : "bg-zinc-100 text-zinc-700 border border-zinc-200"
                        )}
                      >
                        {pkg.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold font-sans tracking-tight mb-2">
                      {pkg.name}
                    </h3>
                    <p
                      className={cn(
                        "text-[14px] font-normal leading-relaxed mb-6",
                        pkg.popular ? "text-zinc-400" : "text-zinc-600"
                      )}
                    >
                      {pkg.description}
                    </p>

                    <div className="mb-6 pt-4 border-t border-zinc-200/40">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight">
                          {pkg.price}
                        </span>
                        <span
                          className={cn(
                            "text-[12px] font-mono font-normal",
                            pkg.popular ? "text-zinc-400" : "text-zinc-500"
                          )}
                        >
                          {pkg.unit}
                        </span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 pt-6 border-t border-zinc-200/40 mb-8">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-[14px]">
                          <CheckCircle2
                            className={cn(
                              "w-4 h-4 shrink-0 mt-0.5",
                              pkg.popular ? "text-[#00D28F]" : "text-[#00A870]"
                            )}
                          />
                          <span
                            className={
                              pkg.popular ? "text-zinc-300" : "text-zinc-700"
                            }
                          >
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className={cn(
                      "w-full py-4 px-6 rounded-full font-bold text-[14px] uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md",
                      pkg.popular
                        ? "bg-[#00D28F] text-[#0A0A0A] hover:bg-white shadow-[#00D28F]/25 hover:scale-105 active:scale-95"
                        : "bg-[#0A0A0A] text-white hover:bg-zinc-800 hover:scale-105 active:scale-95"
                    )}
                  >
                    <span>{pkg.cta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: MARKET BENCHMARK COMPARISON MATRIX
            ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200">
          <div className="max-w-[1366px] mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[14px] font-normal font-mono mb-4">
                <ShieldCheck className="w-4 h-4 text-[#00B87D]" />
                <span>Side-by-Side Market Benchmark</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans">
                Why Founders Choose{" "}
                <span className="font-serif italic font-normal text-[#00B87D]">
                  Startuplize.
                </span>
              </h2>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-zinc-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-900 text-white border-b border-zinc-800 text-[14px] font-mono">
                    <th className="py-5 px-6 font-normal w-1/4">Evaluation Metric</th>
                    <th className="py-5 px-6 font-bold text-[#00D28F] w-1/3 bg-zinc-950/80 border-x border-white/10">
                      With Startuplize Studio
                    </th>
                    <th className="py-5 px-6 font-normal text-zinc-400 w-1/5">
                      Typical $15k Agency
                    </th>
                    <th className="py-5 px-6 font-normal text-zinc-400 w-1/5">
                      Upwork / Freelancer
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 text-[14px]">
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-zinc-50/60 transition-colors">
                      <td className="py-4 px-6 font-bold text-zinc-900 font-sans">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 font-medium text-zinc-900 bg-emerald-50/30 border-x border-zinc-200">
                        <div className="flex items-center gap-2 text-[#008A5E]">
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          <span>{row.startuplize}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-zinc-500 font-normal">
                        <div className="flex items-center gap-2 text-rose-700">
                          <XCircle className="w-4 h-4 shrink-0 text-rose-500" />
                          <span>{row.agency}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-zinc-500 font-normal">
                        <div className="flex items-center gap-2 text-amber-700">
                          <XCircle className="w-4 h-4 shrink-0 text-amber-500" />
                          <span>{row.freelancer}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: FREQUENTLY ASKED QUESTIONS
            ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-b border-zinc-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[14px] font-normal font-mono mb-4">
                <HelpCircle className="w-4 h-4 text-[#00B87D]" />
                <span>Pricing Transparency &amp; Terms</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans">
                Pricing{" "}
                <span className="font-serif italic font-normal text-[#00B87D]">
                  Questions Answered.
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {PRICING_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className={cn(
                      "rounded-xl border transition-all duration-300 overflow-hidden bg-[#FAFAFA]",
                      isOpen ? "border-[#00D28F] shadow-md bg-white" : "border-zinc-200 hover:border-zinc-300"
                    )}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="text-[16px] md:text-[18px] font-bold text-[#1A1A1A] tracking-tight font-sans">
                        {faq.question}
                      </span>
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200",
                          isOpen ? "bg-[#00D28F] text-[#0A0A0A]" : "bg-zinc-200 text-zinc-600"
                        )}
                      >
                        {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-[14px] md:text-[16px] text-zinc-600 font-normal leading-relaxed border-t border-zinc-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Universal Global CTA Banner */}
        <GlobalCTA onOpenBooking={() => setIsBookingOpen(true)} />
      </div>

      <MegaFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
