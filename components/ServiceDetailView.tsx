"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/Navbar";
import MegaFooter from "@/components/MegaFooter";
import GlobalCTA from "@/components/GlobalCTA";
import BookingModal from "@/components/BookingModal";
import CustomCursor from "@/components/CustomCursor";
import { ServiceDetail } from "@/lib/data";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck,
  Star,
  ChevronRight,
  Code2,
  ArrowRight,
} from "lucide-react";

export default function ServiceDetailView({ service }: { service: ServiceDetail }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const pinTriggerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll(".hero-anim"),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power3.out" }
        );
      }

      const timeline = timelineRef.current;
      const pinTrigger = pinTriggerRef.current;
      if (timeline && pinTrigger) {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          ScrollTrigger.create({
            trigger: pinTrigger,
            start: "top 120px",
            end: "bottom bottom",
            pin: timeline.querySelector(".pinned-timeline-header"),
            pinSpacing: false,
          });
        });
      }
    },
    { scope: heroRef }
  );

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] relative selection:bg-[#00D28F] selection:text-[#0A0A0A]">
      <CustomCursor />
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* SECTION 1: ANIMATED HERO */}
      <section
        ref={heroRef}
        className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] text-white relative overflow-hidden"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#00D28F]/15 rounded-full blur-[190px] pointer-events-none -z-10" />

        <div className="max-w-[1366px] mx-auto text-center flex flex-col items-center">
          <div className="hero-anim flex items-center gap-2 text-xs text-zinc-400 mb-6 bg-white/[0.05] border border-white/10 px-4 py-1.5 rounded-full">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#00D28F] font-semibold">{service.title}</span>
          </div>

          <div className="hero-anim inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D28F]/20 border border-[#00D28F]/40 text-[#00D28F] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.category}</span>
          </div>

          <h1 className="hero-anim text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-sans max-w-5xl leading-[1.08] mb-6">
            {service.heroHeadline.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="font-serif italic font-normal text-[#00D28F]">
              {service.heroHeadline.split(" ").slice(-2).join(" ")}
            </span>
          </h1>

          <p className="hero-anim text-base sm:text-xl text-zinc-300 font-normal max-w-3xl leading-relaxed mb-10">
            {service.heroSubtitle}
          </p>

          <div className="hero-anim flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] shadow-xl shadow-[#00D28F]/25 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book Service Discovery Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono font-bold text-[#00D28F]">
              <span>Verified Impact:</span>
              <span className="text-white">{service.metrics}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM VS. THE STARTUPLIZE SOLUTION */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200">
        <div className="max-w-[1366px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
              Strategic Diagnosis
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans">
              The Old Model vs.{" "}
              <span className="font-serif italic font-normal text-[#00B87D]">
                The Startuplize Architecture.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-rose-50/50 border border-rose-200/80">
              <div className="flex items-center gap-2.5 text-rose-800 text-xs font-bold uppercase tracking-wider mb-6">
                <XCircle className="w-5 h-5 text-rose-600" />
                <span>The Industry Bottlenecks</span>
              </div>
              <div className="space-y-4">
                {service.problemStatement.map((prob, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-700">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-emerald-50/50 border border-emerald-300/80 shadow-lg shadow-emerald-500/5">
              <div className="flex items-center gap-2.5 text-[#00A870] text-xs font-bold uppercase tracking-wider mb-6">
                <CheckCircle2 className="w-5 h-5 text-[#00A870]" />
                <span>The Startuplize Solution</span>
              </div>
              <div className="space-y-4">
                {service.solutionStatement.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-800 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#00D28F] mt-2 shrink-0" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE DELIVERABLES */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-b border-zinc-200">
        <div className="max-w-[1366px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
              Deliverable Scope
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans">
              What We Deliver For{" "}
              <span className="font-serif italic font-normal text-[#00B87D]">
                {service.title}.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:border-[#00D28F] hover:shadow-xl transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#00D28F]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-[#00A870]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-1 font-sans">
                    {item}
                  </h3>
                  <p className="text-xs text-zinc-500 font-normal">
                    Production-grade implementation adhering to strict enterprise standards.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: GSAP PINNED PROCESS TIMELINE */}
      <section
        ref={pinTriggerRef}
        className="py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200 relative"
      >
        <div className="max-w-[1366px] mx-auto" ref={timelineRef}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 pinned-timeline-header self-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-4">
                <Clock className="w-3.5 h-3.5 text-[#00B87D]" />
                <span>Sprint Timeline</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans mb-6">
                Our 4-Phase{" "}
                <span className="font-serif italic font-normal text-[#00B87D]">
                  Execution Sprint.
                </span>
              </h2>

              <p className="text-base text-zinc-600 font-normal leading-relaxed mb-8">
                Every project is structured into clear milestones with weekly client previews,
                ensuring zero guesswork and rapid time-to-market.
              </p>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] shadow-lg shadow-[#00D28F]/25 transition-all cursor-pointer"
              >
                Schedule Sprint Kickoff
              </button>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {service.timeline.map((step) => (
                <div
                  key={step.step}
                  className="p-8 rounded-3xl bg-[#FAFAFA] border border-zinc-200/90 shadow-sm hover:border-[#00D28F] hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="text-xs font-mono font-bold text-[#00A870] px-3 py-1 rounded-full bg-[#00D28F]/15">
                      PHASE {step.step}
                    </span>
                    <span className="text-xs font-semibold text-zinc-500 font-mono">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] font-sans mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TECH STACK MARQUEE */}
      <section className="py-16 bg-[#0A0A0A] text-white overflow-hidden select-none border-y border-white/10">
        <div className="max-w-[1366px] mx-auto px-4 mb-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#00D28F]">
            Tech Stack &amp; Toolset Methodology
          </span>
        </div>
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 items-center gap-6 animate-marquee">
            {service.techStack.concat(service.techStack).concat(service.techStack).map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/[0.05] border border-white/10 text-sm font-semibold text-zinc-200"
              >
                <Code2 className="w-4 h-4 text-[#00D28F]" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: RELATED CASE STUDIES */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-b border-zinc-200">
        <div className="max-w-[1366px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans">
                Related{" "}
                <span className="font-serif italic font-normal text-[#00B87D]">
                  Case Studies.
                </span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00B87D] hover:text-[#0A0A0A] transition-colors"
            >
              <span>Explore All 30+ Works</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.caseStudies.map((study, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white border border-zinc-200/90 overflow-hidden shadow-sm hover:border-[#00D28F] hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-xs font-bold text-[#00D28F] uppercase tracking-wider block mb-1">
                      {study.client}
                    </span>
                    <h3 className="text-xl font-bold text-white font-sans">
                      {study.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                      Result:
                    </span>
                    <span className="text-sm font-mono font-bold text-[#00B87D]">
                      {study.result}
                    </span>
                  </div>

                  <Link
                    href="/portfolio"
                    className="p-2 rounded-full bg-zinc-100 group-hover:bg-[#00D28F] transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4 text-zinc-700 group-hover:text-[#0A0A0A]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CLIENT TESTIMONIALS */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200">
        <div className="max-w-[1366px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-800 mb-4">
              <Star className="w-3.5 h-3.5 fill-[#00D28F] text-[#00D28F]" />
              <span>Verified Client Praise</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans">
              What Founders Say About Our{" "}
              <span className="font-serif italic font-normal text-[#00B87D]">
                {service.title}.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.testimonials.map((test, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FAFAFA] border border-zinc-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#00B87D] mb-4">
                    {[...Array(test.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4 h-4 fill-[#00D28F] text-[#00D28F]" />
                    ))}
                  </div>
                  <p className="text-base text-zinc-700 italic font-normal leading-relaxed mb-6">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3.5 pt-5 border-t border-zinc-200/60">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#00D28F]/40 shrink-0">
                    <Image
                      src={test.avatar}
                      alt={test.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#1A1A1A] block">
                      {test.name}
                    </span>
                    <span className="text-xs text-zinc-500">
                      {test.role}, <span className="text-[#00B87D] font-semibold">{test.company}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Global CTA Banner */}
      <GlobalCTA onOpenBooking={() => setIsBookingOpen(true)} />

      {/* SECTION 8: MEGA FOOTER */}
      <MegaFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
