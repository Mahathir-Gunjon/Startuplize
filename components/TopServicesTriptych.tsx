"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  Zap,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TopServicesTriptychProps {
  onOpenBooking?: () => void;
}

export default function TopServicesTriptych({ onOpenBooking }: TopServicesTriptychProps) {
  const sparkleCanvasRef = useRef<HTMLCanvasElement>(null);
  const flowCanvasRef = useRef<HTMLCanvasElement>(null);

  // Canvas 1: Sparkle drawing on Automate button
  useEffect(() => {
    const canvas = sparkleCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId = 0;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const sparkles = [
        { x: 0.1, y: 0.15, size: 0.45 },
        { x: 0.45, y: 0.35, size: 0.65 },
      ];

      const sparklePoints = [
        [0.5, 0.06],
        [0.59, 0.41],
        [0.94, 0.5],
        [0.59, 0.59],
        [0.5, 0.94],
        [0.41, 0.59],
        [0.06, 0.5],
        [0.41, 0.41],
      ];

      sparkles.forEach((s) => {
        const size = Math.min(w, h) * s.size;
        const offsetX = s.x * w;
        const offsetY = s.y * h;

        ctx.save();
        ctx.translate(offsetX, offsetY);

        ctx.beginPath();
        sparklePoints.forEach(([px, py], i) => {
          const x = px * size;
          const y = py * size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        ctx.closePath();

        ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
        ctx.shadowColor = "rgba(0, 210, 143, 0.8)";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();
      });
    };

    render();
    window.addEventListener("resize", render);

    return () => {
      window.removeEventListener("resize", render);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Canvas 2: Decision Flow Chart Ribbon Canvas
  useEffect(() => {
    const canvas = flowCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;

    const renderFlow = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      // Ribbon bands with Startuplize emerald & mint palettes
      const bands = [
        { source: [0.08, 0.26], target: [0.29, 0.32], color: "rgba(0, 210, 143, 0.30)" },
        { source: [0.23, 0.42], target: [0.30, 0.335], color: "rgba(0, 184, 125, 0.50)" },
        { source: [0.50, 0.75], target: [0.32, 0.355], color: "rgba(0, 168, 112, 0.65)" },
        { source: [0.69, 0.98], target: [0.33, 0.365], color: "rgba(0, 210, 143, 0.40)" },
        { source: [0.39, 0.51], target: [0.31, 0.345], color: "rgba(0, 210, 143, 0.95)" },
      ];

      const sourceHold = 0.38;
      const targetApproach = 0.74;

      bands.forEach((b) => {
        ctx.beginPath();
        ctx.moveTo(0, h * b.source[0]);
        ctx.bezierCurveTo(
          w * sourceHold,
          h * b.source[0],
          w * targetApproach,
          h * b.target[0],
          w,
          h * b.target[0]
        );
        ctx.lineTo(w, h * b.target[1]);
        ctx.bezierCurveTo(
          w * targetApproach,
          h * b.target[1],
          w * sourceHold,
          h * b.source[1],
          0,
          h * b.source[1]
        );
        ctx.closePath();
        ctx.fillStyle = b.color;
        ctx.fill();
      });

      // White overlay threads
      const threads = [
        { source: 0.05, target: 0.30, alpha: 0.68 },
        { source: 0.20, target: 0.315, alpha: 0.60 },
        { source: 0.62, target: 0.342, alpha: 0.84 },
        { source: 0.82, target: 0.352, alpha: 0.74 },
        { source: 0.97, target: 0.36, alpha: 0.64 },
      ];

      threads.forEach((t) => {
        ctx.beginPath();
        ctx.moveTo(0, h * t.source);
        ctx.bezierCurveTo(
          w * sourceHold,
          h * t.source,
          w * targetApproach,
          h * t.target,
          w,
          h * t.target
        );
        ctx.strokeStyle = `rgba(255, 255, 255, ${t.alpha})`;
        ctx.lineWidth = Math.max(1, w * 0.003);
        ctx.stroke();
      });
    };

    renderFlow();
    window.addEventListener("resize", renderFlow);

    return () => {
      window.removeEventListener("resize", renderFlow);
      if (animId) {
        cancelAnimationFrame(animId);
      }
    };
  }, []);

  const barHeights = [
    20, 33, 48, 56, 51, 47, 39, 31, 53, 55, 60, 56, 100, 92, 76, 67, 62, 65, 59, 70, 74, 87, 83, 77,
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] text-[#1A1A1A] relative border-b border-zinc-200">
      <div className="max-w-[1366px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            {/* Section Capsule: text-[14px], font-normal, not uppercase, not bold */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[14px] font-normal font-mono mb-4">
              <Sparkles className="w-4 h-4 text-[#00B87D]" />
              <span>Flagship Growth Offerings</span>
            </div>

            {/* Strictly H2 (text-3xl md:text-5xl) */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans">
              What We Are{" "}
              <span className="font-serif italic font-normal text-[#00B87D]">
                Most Known For.
              </span>
            </h2>
          </div>

          <p className="text-[16px] md:text-[18px] text-zinc-600 max-w-md font-normal leading-relaxed">
            Three specialized core disciplines engineered to build your category moat, unlock sub-second speed, and scale compounding revenue.
          </p>
        </div>

        {/* =========================================================================
            TRIPTYCH: 3 PEER PRODUCT CARDS
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* =========================================================================
              CARD 1 — High-Performance Business Websites (Instant Visibility)
              ========================================================================= */}
          <article className="group rounded-2xl bg-white border border-zinc-200/90 shadow-sm hover:border-[#00D28F] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Upper Visual Area */}
            <div className="relative h-[290px] w-full bg-gradient-to-b from-[#FAFDFB] via-[#F4FAF6] to-[#EBF6EE] border-b border-zinc-100 p-6 flex flex-col justify-between overflow-hidden">
              {/* Timeline Header */}
              <div className="flex items-center justify-between text-[12px] font-mono font-medium text-[#00A870] px-4">
                <span>06 AM</span>
                <div className="flex-1 mx-3 border-t border-dashed border-[#00D28F]/40" />
                <span>12 PM</span>
                <div className="flex-1 mx-3 border-t border-dashed border-[#00D28F]/40" />
                <span>06 PM</span>
              </div>

              {/* Floating $4.7M Pipeline Chip */}
              <div className="absolute top-16 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-[#00D28F] text-[#0A0A0A] text-[13px] font-mono font-bold shadow-lg shadow-[#00D28F]/30 border border-white flex items-center gap-1.5 animate-bounce-subtle">
                <Zap className="w-3.5 h-3.5 fill-[#0A0A0A]" />
                <span>$4.7M Pipeline</span>
              </div>

              {/* 24 Animated Bars */}
              <div className="h-32 flex items-end justify-between gap-1 px-2 pt-6">
                {barHeights.map((h, idx) => {
                  const isActive = idx === 12;
                  return (
                    <div
                      key={idx}
                      style={{ height: `${h}%` }}
                      className={cn(
                        "w-full rounded-full transition-all duration-500",
                        isActive
                          ? "bg-[#00D28F] shadow-lg shadow-[#00D28F]/40 scale-y-105"
                          : "bg-[#00D28F]/25 group-hover:bg-[#00D28F]/40"
                      )}
                    />
                  );
                })}
              </div>

              {/* Axis Label */}
              <div className="flex justify-between text-[11px] font-mono text-zinc-500 px-2 pt-2 border-t border-zinc-200/60">
                <span>START</span>
                <span>ACTIVE</span>
                <span className="text-[#00A870] font-bold">PEAK</span>
                <span>100/100 SPEED</span>
              </div>
            </div>

            {/* Lower Card Copy */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 relative">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#1A1A1A] font-sans mb-2 group-hover:text-[#00A870] transition-colors">
                  Business Websites
                </h3>
                {/* Small Body Tier */}
                <p className="text-[14px] md:text-[16px] text-zinc-600 font-normal leading-relaxed mb-6">
                  High-converting Webflow &amp; Next.js platforms built with sub-second page loads and cinematic art direction.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                <span className="text-[13px] font-mono font-bold text-[#00A870]">
                  99+ Core Web Vitals
                </span>

                <Link
                  href="/services/webflow"
                  className="w-10 h-10 rounded-full bg-[#00D28F]/15 border border-[#00D28F]/30 text-[#00A870] group-hover:bg-[#00D28F] group-hover:text-[#0A0A0A] flex items-center justify-center transition-all hover:scale-105"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>

          {/* =========================================================================
              CARD 2 — Custom Development & Autonomous Workflows (Centre Product Anchor)
              ========================================================================= */}
          <article className="group rounded-2xl bg-white border-2 border-[#00D28F] shadow-xl shadow-[#00D28F]/10 transition-all duration-300 flex flex-col justify-between overflow-hidden relative lg:-translate-y-2">
            {/* Top Recommended Tag */}
            <div className="absolute top-0 right-8 px-3 py-1 rounded-b-lg bg-[#00D28F] text-[#0A0A0A] text-[11px] font-bold font-mono uppercase tracking-wider shadow-sm z-20">
              Core Discipline
            </div>

            {/* Upper Visual Area */}
            <div className="relative h-[290px] w-full bg-gradient-to-b from-[#111111] via-[#0D0D0D] to-black p-6 flex flex-col justify-between overflow-hidden border-b border-zinc-800 text-white">
              {/* Assistant Header */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#00D28F] flex items-center justify-center text-[#0A0A0A]">
                  <Sparkles className="w-3.5 h-3.5 fill-[#0A0A0A]" />
                </div>
                <span className="text-[13px] font-mono font-bold text-white">
                  Startuplize Dev Studio
                </span>
              </div>

              {/* Question */}
              <p className="text-[14px] font-medium text-zinc-300 font-sans">
                How can we automate your customer pipeline?
              </p>

              {/* Interactive Code/Prompt Box */}
              <div className="p-3.5 rounded-xl bg-white/[0.06] border border-white/15 text-[12px] font-mono text-zinc-300 leading-relaxed relative">
                <span className="text-[#00D28F] block mb-0.5">// Automated Conversion Trigger</span>
                When a new lead submits on Webflow, sync to CRM, calculate ROI, and deploy Next.js edge instance.
              </div>

              {/* Automate Gradient Pill with Live Canvas Sparkles & Cursor */}
              <div className="flex items-center justify-between pt-1 relative">
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00D28F] via-[#00B87D] to-emerald-700 text-[#0A0A0A] text-[13px] font-bold font-mono flex items-center gap-2 shadow-lg shadow-[#00D28F]/30">
                  <span>Automate</span>
                  <canvas
                    ref={sparkleCanvasRef}
                    className="w-5 h-5 block"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>

                {/* Custom Simulated Mouse Cursor */}
                <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 text-[11px] font-mono text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-[#00D28F] animate-ping" />
                  <span>0.4s Execution</span>
                </div>
              </div>
            </div>

            {/* Lower Card Copy */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 relative bg-white">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#1A1A1A] font-sans mb-2 group-hover:text-[#00A870] transition-colors">
                  Custom Development
                </h3>
                {/* Small Body Tier */}
                <p className="text-[14px] md:text-[16px] text-zinc-600 font-normal leading-relaxed mb-6">
                  Decoupled full-stack architectures, headless CMS engineering, and bespoke 3D WebGL interactions.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                <span className="text-[13px] font-mono font-bold text-[#00A870]">
                  Headless Next.js 14
                </span>

                <Link
                  href="/services/wordpress"
                  className="w-10 h-10 rounded-full bg-[#00D28F] text-[#0A0A0A] flex items-center justify-center transition-all hover:scale-105 shadow-md shadow-[#00D28F]/25"
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </article>

          {/* =========================================================================
              CARD 3 — SEO & Growth Dominance (Faster Decisions)
              ========================================================================= */}
          <article className="group rounded-2xl bg-white border border-zinc-200/90 shadow-sm hover:border-[#00D28F] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Upper Visual Area */}
            <div className="relative h-[290px] w-full bg-gradient-to-b from-[#F9FBFA] via-[#F2F8F4] to-[#E6F4EB] border-b border-zinc-100 p-6 flex flex-col justify-between overflow-hidden">
              {/* Metric Row */}
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">
                  Measured Velocity Lift
                </span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl font-black font-mono tracking-tight text-[#00A870]">
                    128 Hrs
                  </span>
                  <span className="text-[13px] font-mono font-bold text-[#00A870] flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>↑ 184% CRO</span>
                  </span>
                </div>
              </div>

              {/* Converging Bezier Flow Canvas */}
              <div className="relative w-full h-24 my-1">
                <canvas
                  ref={flowCanvasRef}
                  className="w-full h-full block pointer-events-none"
                />

                {/* Floating Decision Tags */}
                <div className="absolute top-1 right-2 px-2.5 py-0.5 rounded-full bg-white/95 border border-zinc-200 text-[10px] font-mono font-bold text-zinc-800 shadow-sm">
                  Action: Rank #1
                </div>
                <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-white/95 border border-zinc-200 text-[10px] font-mono font-bold text-[#00A870] shadow-sm">
                  Confidence: 99%
                </div>
                <div className="absolute bottom-1 right-2 px-2.5 py-0.5 rounded-full bg-[#00D28F] text-[#0A0A0A] text-[10px] font-mono font-bold shadow-sm">
                  Path: Optimized
                </div>
              </div>

              {/* Bottom Subtext */}
              <div className="text-[11px] font-mono text-zinc-500 pt-1 border-t border-zinc-200/50 flex justify-between">
                <span>Crawl Index: 100%</span>
                <span className="text-[#00A870] font-semibold">Zero Keyword Bloat</span>
              </div>
            </div>

            {/* Lower Card Copy */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 relative">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#1A1A1A] font-sans mb-2 group-hover:text-[#00A870] transition-colors">
                  SEO &amp; Growth Dominance
                </h3>
                {/* Small Body Tier */}
                <p className="text-[14px] md:text-[16px] text-zinc-600 font-normal leading-relaxed mb-6">
                  Programmatic technical search dominance, automated schema injection, and high-intent buyer funnels.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                <span className="text-[13px] font-mono font-bold text-[#00A870]">
                  +340% Organic Pipeline
                </span>

                <Link
                  href="/services/seo"
                  className="w-10 h-10 rounded-full bg-[#00D28F]/15 border border-[#00D28F]/30 text-[#00A870] group-hover:bg-[#00D28F] group-hover:text-[#0A0A0A] flex items-center justify-center transition-all hover:scale-105"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
