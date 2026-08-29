"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Layers,
  CheckCircle2,
  TrendingUp,
  Cpu,
  BarChart3,
  Globe2,
  ShieldCheck,
} from "lucide-react";

interface StackedPortfolioProps {
  onOpenBooking: () => void;
}

const TEMPLATES = [
  {
    id: "apex-flow",
    title: "Apex Flow — Lead Conversion SaaS Platform",
    client: "Apex AI Technologies",
    category: "Webflow & Headless Next.js 14",
    impact: "+240% Pipeline Velocity",
    year: "2024",
    tagline: "Every Lead Matters. Stop Letting Them Slip Away.",
    description:
      "A complete enterprise B2B SaaS marketing architecture featuring real-time conversion dashboards, interactive multi-step lead capture, and instant CRM sync.",
    accentColor: "#00D28F",
    bgGradient: "from-zinc-950 via-zinc-900 to-black",
    borderColor: "border-emerald-500/30",
    tags: ["Next.js 14", "Tailwind CSS", "GSAP", "Stripe Checkout", "Figma Design System"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    features: [
      "Sub-second interactive lead routing simulator",
      "Dynamic ROI tier calculator with live charts",
      "Comprehensive multi-platform analytics suite",
    ],
  },
  {
    id: "vanguard-studio",
    title: "Vanguard Studio — Creative Direction Agency Flagship",
    client: "Vanguard Global Media",
    category: "Brand Design & 3D Web Experience",
    impact: "18x Awwwards & FWA Honors",
    year: "2024",
    tagline: "Conversion-Led Design & Scaled Growth Partner.",
    description:
      "An award-winning editorial luxury agency web template featuring dark-mode glassmorphism, 3D WebGL mockup containers, and expressive serif typography.",
    accentColor: "#00E5FF",
    bgGradient: "from-slate-950 via-neutral-900 to-black",
    borderColor: "border-cyan-500/30",
    tags: ["Three.js", "Webflow CMS", "WebGL Shaders", "GSAP ScrollTrigger", "Dark UI"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1400&q=85",
    features: [
      "Smooth 60fps WebGL interactive fluid canvas",
      "4-column mega menu with live toolset integration",
      "Endless opposing vertical testimonial feeds",
    ],
  },
  {
    id: "forge-precision",
    title: "Forge Industrial — Precision Engineering E-Commerce",
    client: "Forge Tools Corporation",
    category: "Headless Shopify & Next.js Commerce",
    impact: "$14.8M Direct Online Revenue",
    year: "2024",
    tagline: "Precision Air Tools, Engineered For 50 Years.",
    description:
      "High-precision technical e-commerce platform built for heavy industrial equipment with live 360-degree tool inspections, CAD spec viewers, and distributor portals.",
    accentColor: "#FF9900",
    bgGradient: "from-stone-950 via-zinc-900 to-black",
    borderColor: "border-amber-500/30",
    tags: ["Headless Shopify", "Next.js App Router", "Algolia Search", "3D CAD Viewer"],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85",
    features: [
      "Ultra-fast faceted parametric product filter",
      "50-year engineering heritage interactive timeline",
      "B2B bulk requisition and wholesale quote engine",
    ],
  },
  {
    id: "aether-cloud",
    title: "Aether AI — Autonomous Logic & Orchestration Engine",
    client: "Aether Systems Inc.",
    category: "Full-Stack Web App & SaaS Architecture",
    impact: "0.42s Sub-Second Real-Time Latency",
    year: "2024",
    tagline: "Orchestrate Autonomous Intelligence at Global Scale.",
    description:
      "Futuristic neural network workflow visualizer and enterprise developer platform with interactive code sandbox, live latency monitors, and dark cyberpunk glow.",
    accentColor: "#A855F7",
    bgGradient: "from-purple-950/40 via-zinc-950 to-black",
    borderColor: "border-purple-500/30",
    tags: ["React Flow", "Next.js 14", "WebSockets", "Tailwind CSS", "Monaco Editor"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85",
    features: [
      "Drag-and-drop neural pipeline topology builder",
      "Real-time token cost and inference telemetry",
      "Enterprise SOC-2 compliance verification audit",
    ],
  },
  {
    id: "monolith-capital",
    title: "Monolith Capital — Next-Gen FinTech & VC Flagship",
    client: "Monolith Asset Management",
    category: "Enterprise Next.js & Financial Engineering",
    impact: "$1.2B Assets Managed On Platform",
    year: "2024",
    tagline: "Algorithmic Precision for High-Stakes Capital.",
    description:
      "Institutional wealth management and venture operating system combining timeless editorial elegance with high-density financial charting and biometric auth.",
    accentColor: "#00C853",
    bgGradient: "from-emerald-950/40 via-zinc-950 to-black",
    borderColor: "border-emerald-500/30",
    tags: ["Highcharts", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    features: [
      "Real-time institutional liquidity heatmaps",
      "Multi-jurisdictional tax optimization engine",
      "Cryptographic signature and audit log viewer",
    ],
  },
];

export default function StackedPortfolio({ onOpenBooking }: StackedPortfolioProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Section Header Scroll Animation
      gsap.fromTo(
        ".stacked-header-anim",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stacked-header-anim",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cards = gsap.utils.toArray<HTMLElement>(".stacked-card");

      cards.forEach((card, index) => {
        // Image reveal animation on each stacked card image
        const imgReveal = card.querySelector<HTMLElement>(".portfolio-image-reveal");
        const imgElem = card.querySelector<HTMLElement>(".portfolio-image-elem");
        if (imgReveal && imgElem) {
          gsap.fromTo(
            imgReveal,
            { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
            {
              clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
              duration: 1.1,
              ease: "power4.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
          gsap.fromTo(
            imgElem,
            { scale: 1.2 },
            {
              scale: 1,
              duration: 1.4,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Stacking scale effect
        if (index < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 100px",
            end: "bottom top",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.to(card, {
                scale: 1 - progress * 0.06,
                opacity: 1 - progress * 0.2,
                duration: 0.1,
                ease: "none",
              });
            },
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] text-[#1A1A1A] relative"
    >
      <div className="max-w-[1366px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="stacked-header-anim">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-4 font-mono">
              <Layers className="w-3.5 h-3.5 text-[#00B87D]" />
              <span>Stacked Digital Flagships</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] font-sans">
              Curated Website{" "}
              <span className="font-serif italic font-normal text-[#00B87D]">
                Templates &amp; Architectures.
              </span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="stacked-header-anim inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B87D] hover:text-[#0A0A0A] transition-colors"
          >
            <span>Explore All 30+ Works</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* =========================================================================
            STACKED CARDS CONTAINER: Layering On Top Of Each Other
            ========================================================================= */}
        <div className="space-y-16 lg:space-y-24 relative pb-20">
          {TEMPLATES.map((template, idx) => (
            <div
              key={template.id}
              style={{
                top: `calc(90px + ${idx * 24}px)`,
                zIndex: idx + 1,
              }}
              className={`stacked-card sticky rounded-[2.5rem] bg-gradient-to-br ${template.bgGradient} text-white border ${template.borderColor} p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden backdrop-blur-2xl transition-all duration-300`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Info Column */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Category & Year */}
                  <div className="flex items-center justify-between gap-4">
                    <span
                      style={{
                        backgroundColor: `${template.accentColor}20`,
                        borderColor: `${template.accentColor}50`,
                        color: template.accentColor,
                      }}
                      className="px-3.5 py-1 rounded-full border text-xs font-bold uppercase tracking-wider font-mono"
                    >
                      {template.category}
                    </span>

                    <span className="text-xs font-mono font-semibold text-zinc-400">
                      CASE 0{idx + 1} • {template.year}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans mb-2">
                      {template.title}
                    </h3>
                    <p
                      style={{ color: template.accentColor }}
                      className="text-sm sm:text-base font-serif italic font-normal"
                    >
                      &ldquo;{template.tagline}&rdquo;
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                    {template.description}
                  </p>

                  {/* Impact Benchmark */}
                  <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-mono">
                      Verified Result
                    </span>
                    <span
                      style={{ color: template.accentColor }}
                      className="text-base sm:text-lg font-mono font-bold"
                    >
                      {template.impact}
                    </span>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5">
                    {template.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2.5 text-xs text-zinc-300"
                      >
                        <CheckCircle2
                          style={{ color: template.accentColor }}
                          className="w-4 h-4 shrink-0"
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags & Action */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {template.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-full bg-white/[0.08] text-[11px] font-medium text-zinc-300 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={onOpenBooking}
                      style={{
                        backgroundColor: template.accentColor,
                      }}
                      className="px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-[#0A0A0A] hover:scale-105 transition-all flex items-center gap-1.5 shadow-lg cursor-pointer"
                    >
                      <span>Request Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Image / Mockup Preview with Image Reveal Animation */}
                <div className="lg:col-span-7">
                  <div className="portfolio-image-reveal relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/15 shadow-2xl group">
                    <div className="portfolio-image-elem relative w-full h-full">
                      <Image
                        src={template.image}
                        alt={template.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>

                    {/* Top Device Bar Simulation */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between px-3 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">
                        startuplize.design/{template.id}
                      </span>
                      <span className="w-2.5 h-2.5" />
                    </div>

                    {/* Bottom Client Floating Badge */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-[#00D28F] uppercase tracking-wider block font-mono">
                          Client Flagship
                        </span>
                        <span className="text-sm font-bold text-white">
                          {template.client}
                        </span>
                      </div>

                      <div className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5">
                        <span>Live Architecture</span>
                        <ExternalLink className="w-3 h-3 text-[#00D28F]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
