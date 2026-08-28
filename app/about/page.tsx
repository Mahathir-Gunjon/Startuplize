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
import { TEAM_MEMBERS } from "@/lib/data";
import {
  Sparkles,
  ArrowUpRight,
  Globe,
  Compass,
  Award,
  ShieldCheck,
  Zap,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (manifestoRef.current) {
        const words = manifestoRef.current.querySelectorAll(".manifesto-word");
        gsap.fromTo(
          words,
          { opacity: 0.2, y: 10 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.04,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: manifestoRef.current,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 0.8,
            },
          }
        );
      }
    },
    { scope: heroRef }
  );

  const locations = [
    { city: "San Francisco", timezone: "PST / UTC-8", role: "Design Strategy Hub", lat: "37.7749° N" },
    { city: "London", timezone: "GMT / UTC+0", role: "Creative Direction Lab", lat: "51.5074° N" },
    { city: "Dubai", timezone: "GST / UTC+4", role: "Venture Partnerships", lat: "25.2048° N" },
    { city: "Tokyo", timezone: "JST / UTC+9", role: "3D & Motion Engineering", lat: "35.6762° N" },
    { city: "Singapore", timezone: "SGT / UTC+8", role: "APAC Growth Ops", lat: "1.3521° N" },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] relative selection:bg-[#00D28F] selection:text-[#0A0A0A]">
      <CustomCursor />
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero */}
      <section
        ref={heroRef}
        className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] text-white relative overflow-hidden"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#00D28F]/15 rounded-full blur-[190px] pointer-events-none -z-10" />

        <div className="max-w-[1366px] mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-bold uppercase tracking-wider text-[#00D28F] mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>Our Origin &amp; Manifesto</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-tight text-white font-sans max-w-5xl leading-[1.08] mb-8">
            We Are The Creative Partners To The{" "}
            <span className="font-serif italic font-normal text-[#00D28F]">
              Top 1% Of Tech.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-10">
            Startuplize was founded on a singular conviction: that exceptional art direction and
            ruthless conversion engineering should exist under one roof.
          </p>
        </div>
      </section>

      {/* Founder Spotlight: Mahathir */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200">
        <div className="max-w-[1366px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Founder Circular / High-Resolution Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 sm:w-96 aspect-square rounded-full p-2 bg-gradient-to-tr from-[#00D28F] via-yellow-400 to-[#00B87D] shadow-2xl shadow-[#00D28F]/20">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src="/images/founder.jpg"
                    alt="Mahathir - Founder & Creative Director"
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="absolute bottom-4 right-4 px-4 py-1.5 rounded-full bg-[#0A0A0A] text-white text-xs font-bold uppercase tracking-wider border border-white/20 shadow-xl">
                  Founder &amp; Creative Lead
                </div>
              </div>
            </div>

            {/* Right: Vision & Ethos */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-800">
                <Sparkles className="w-3.5 h-3.5 text-[#00B87D]" />
                <span>Founder&apos;s Letter</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans leading-[1.12]">
                &ldquo;Design is not just how it looks. It is the{" "}
                <span className="font-serif italic font-normal text-[#00B87D]">
                  irrefutable proof of your ambition
                </span>
                .&rdquo;
              </h2>

              <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
                When I founded <strong className="text-zinc-900">Startuplize</strong>, I saw high-potential
                founders losing millions in enterprise deals simply because their website looked like
                a generic template. We built Startuplize to give tier-1 tech founders the unfair visual
                advantage they deserve.
              </p>

              <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
                Every member of our team is a senior specialist. We obsess over typography curves,
                sub-second edge load times, and conversion psychology with equal rigor.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] font-sans">
                    Mahathir
                  </h4>
                  <p className="text-xs text-zinc-500 font-mono">
                    Founder &amp; Creative Director, Startuplize
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Creative Manifesto (Expressive Scrollytelling Typography) */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] border-b border-zinc-200">
        <div className="max-w-[1366px] mx-auto text-center" ref={manifestoRef}>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-6">
            The Startuplize Manifesto
          </span>

          <div className="max-w-4xl mx-auto text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 font-sans leading-[1.35]">
            {[
              "We", "believe", "that", "mediocrity", "is", "expensive.",
              "In", "a", "world", "drowning", "in", "AI", "templates,",
              "bespoke", "cinematic", "craft", "is", "the", "only", "defensible",
              "moat.", "We", "engineer", "visual", "prestige", "that",
              "turns", "skeptical", "buyers", "into", "loyal", "evangelists."
            ].map((w, idx) => (
              <span
                key={idx}
                className={`manifesto-word inline-block mr-2.5 sm:mr-3.5 transition-all ${
                  w.toLowerCase().includes("cinematic") ||
                  w.toLowerCase().includes("prestige") ||
                  w.toLowerCase().includes("evangelists")
                    ? "font-serif italic font-normal text-[#00B87D]"
                    : ""
                }`}
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200">
        <div className="max-w-[1366px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold uppercase tracking-wider text-zinc-800 mb-4">
              <Globe className="w-3.5 h-3.5 text-[#00B87D]" />
              <span>Global Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans">
              Worldwide Reach,{" "}
              <span className="font-serif italic font-normal text-[#00B87D]">
                Synchronized Delivery.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FAFAFA] border border-zinc-200/90 shadow-sm hover:border-[#00D28F] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#00B87D]" />
                    <span>{loc.lat}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] font-sans mb-1">
                    {loc.city}
                  </h3>
                  <p className="text-xs text-[#00B87D] font-bold uppercase tracking-wider mb-4">
                    {loc.role}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200/60 text-xs text-zinc-500 font-mono">
                  {loc.timezone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universal Global CTA Banner */}
      <GlobalCTA onOpenBooking={() => setIsBookingOpen(true)} />

      <MegaFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
