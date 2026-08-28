"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Sparkles, Eye } from "lucide-react";

interface InteractiveServicesHoverProps {
  onOpenBooking: () => void;
}

export default function InteractiveServicesHover({
  onOpenBooking,
}: InteractiveServicesHoverProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const servicesList = [
    {
      id: "webflow",
      number: "01",
      name: "Webflow Development & 3D Interactive Web",
      tagline: "Bespoke animations, GSAP timelines, and scalable CMS",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      metric: "99+ Core Web Vitals",
      slug: "/services/webflow",
    },
    {
      id: "wordpress",
      number: "02",
      name: "WordPress & Headless Architecture",
      tagline: "Decoupled Next.js frontend with enterprise security",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      metric: "0.5s Load Time",
      slug: "/services/wordpress",
    },
    {
      id: "wix",
      number: "03",
      name: "Wix Studio Modern Fluid Systems",
      tagline: "Proportional fluid scaling & custom Velo code",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
      metric: "10-Day Launch Sprint",
      slug: "/services/wix",
    },
    {
      id: "seo",
      number: "04",
      name: "Data-Driven Technical SEO Dominance",
      tagline: "Programmatic indexing and high-converting keyword takeover",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
      metric: "+340% Organic Pipeline",
      slug: "/services/seo",
    },
    {
      id: "branding",
      number: "05",
      name: "Brand Identity & Visual Design Systems",
      tagline: "High-status design guidelines, typography & 3D assets",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
      metric: "Iconic Design Kits",
      slug: "/services/branding",
    },
    {
      id: "meta-ads",
      number: "06",
      name: "Meta Ads & Paid Social Scaling Funnels",
      tagline: "Direct-response UGC creative lab and Advantage+ campaigns",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1000&auto=format&fit=crop",
      metric: "4.8x Average ROAS",
      slug: "/services/meta-ads",
    },
    {
      id: "google-ads",
      number: "07",
      name: "Google Ads & Performance Max Capture",
      tagline: "Laser-intent search capture & closed-loop attribution",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      metric: "-64% Cost Per Lead",
      slug: "/services/google-ads",
    },
  ];

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    const xTo = gsap.quickTo(preview, "x", { duration: 0.3, ease: "power3.out" });
    const yTo = gsap.quickTo(preview, "y", { duration: 0.3, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA] text-[#1A1A1A] relative border-t border-zinc-200">
      <div className="max-w-[1366px] mx-auto" ref={containerRef}>
        {/* Floating Cursor-Following Image Preview Card */}
        <div
          ref={previewRef}
          className={`fixed top-0 left-0 w-80 h-48 rounded-3xl overflow-hidden pointer-events-none z-[990] -translate-x-1/2 -translate-y-1/2 shadow-2xl border-2 border-white/40 transition-opacity duration-300 ${
            activeImage ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {activeImage && (
            <div className="relative w-full h-full bg-zinc-900">
              <Image
                src={activeImage}
                alt="Service Visual Output"
                fill
                sizes="320px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          )}
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#00B87D]" />
              <span>Visual Excellence Showcase</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1A1A1A] font-sans">
              Precision Solutions For{" "}
              <span className="font-serif italic font-normal text-[#00B87D]">
                Every Growth Phase.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-zinc-600 max-w-sm font-normal">
            Hover over any discipline to preview its live output and benchmark deliverable.
          </p>
        </div>

        {/* Oversized Service List with Text Hover Skew & Image Reveal */}
        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {servicesList.map((service) => (
            <Link
              key={service.id}
              href={service.slug}
              onMouseEnter={() => setActiveImage(service.image)}
              onMouseLeave={() => setActiveImage(null)}
              className="group py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer hover:bg-zinc-100/70 px-4 sm:px-6 rounded-3xl transition-all duration-300"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-sm font-mono font-bold text-zinc-400 group-hover:text-[#00B87D] transition-colors">
                  {service.number}
                </span>
                <div>
                  {/* Slight skew effect on hover text */}
                  <h3 className="text-2xl sm:text-4xl font-bold text-[#1A1A1A] group-hover:text-[#00A870] group-hover:translate-x-3 group-hover:-skew-x-3 transition-all duration-300 font-sans tracking-tight">
                    {service.name}
                  </h3>
                  <p className="text-sm text-zinc-500 font-normal mt-1">
                    {service.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 self-start md:self-auto pl-12 md:pl-0">
                <span className="px-3.5 py-1.5 rounded-full bg-[#00D28F]/10 text-xs font-bold text-[#00A870] font-mono border border-[#00D28F]/30">
                  {service.metric}
                </span>
                <div className="w-11 h-11 rounded-full bg-white border border-zinc-200 flex items-center justify-center group-hover:bg-[#00D28F] group-hover:border-[#00D28F] transition-all shadow-sm">
                  <ArrowUpRight className="w-4 h-4 text-[#1A1A1A] group-hover:text-[#0A0A0A] transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
