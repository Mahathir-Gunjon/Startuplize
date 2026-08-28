"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { X, ArrowUpRight, Sparkles, Mail, Phone, ExternalLink } from "lucide-react";

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function OffCanvasMenu({
  isOpen,
  onClose,
  onOpenBooking,
}: OffCanvasMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const navItems = [
    { number: "01", name: "Services", href: "/services", desc: "All 7 specialized disciplines" },
    { number: "02", name: "Selected Works", href: "/portfolio", desc: "30+ high-ROI case studies" },
    { number: "03", name: "Client Reviews", href: "/testimonials", desc: "Dual vertical marquee proof" },
    { number: "04", name: "About & Team", href: "/about", desc: "Manifesto & leadership" },
    { number: "05", name: "Schedule Call", href: "/contact", desc: "Direct Cal.com booking" },
  ];

  const serviceSublinks = [
    { name: "Webflow Development", href: "/services/webflow" },
    { name: "WordPress & Next.js", href: "/services/wordpress" },
    { name: "Wix Studio", href: "/services/wix" },
    { name: "Technical SEO", href: "/services/seo" },
    { name: "Brand Identity", href: "/services/branding" },
    { name: "Meta Ads Funnels", href: "/services/meta-ads" },
    { name: "Google Ads Scaling", href: "/services/google-ads" },
  ];

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const panel = panelRef.current;
      const links = linksRef.current?.querySelectorAll(".nav-link-item");
      const info = infoRef.current;

      if (!overlay || !panel) return;

      if (isOpen) {
        gsap.set(overlay, { display: "block" });
        const tl = gsap.timeline();
        tl.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" })
          .fromTo(
            panel,
            { x: "100%" },
            { x: "0%", duration: 0.55, ease: "power4.out" },
            "-=0.15"
          );

        if (links && links.length > 0) {
          tl.fromTo(
            links,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: "power3.out" },
            "-=0.3"
          );
        }

        if (info) {
          tl.fromTo(
            info,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
            "-=0.2"
          );
        }
      } else {
        const tl = gsap.timeline();
        tl.to(panel, { x: "100%", duration: 0.4, ease: "power3.in" })
          .to(overlay, { opacity: 0, duration: 0.2, ease: "power2.in" }, "-=0.15")
          .set(overlay, { display: "none" });
      }
    },
    { dependencies: [isOpen], scope: containerRef }
  );

  const handleNavigate = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <div ref={containerRef}>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[990] bg-black/80 backdrop-blur-md hidden opacity-0 transition-opacity"
        onClick={onClose}
      >
        {/* Slide-In Panel */}
        <div
          ref={panelRef}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-0 right-0 bottom-0 w-full sm:w-[540px] md:w-[620px] bg-[#0A0A0A] text-[#FAFAFA] border-l border-white/10 p-6 sm:p-10 lg:p-12 overflow-y-auto flex flex-col justify-between"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D28F] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#00D28F]">
                Startuplize Navigation
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Staggered Navigation Links */}
          <div ref={linksRef} className="py-6 space-y-3">
            {navItems.map((item) => (
              <div key={item.number} className="nav-link-item overflow-hidden">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-baseline justify-between py-3 border-b border-white/[0.06] hover:border-[#00D28F]/40 transition-colors cursor-pointer"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono font-medium text-zinc-500 group-hover:text-[#00D28F] transition-colors">
                      {item.number}
                    </span>
                    <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-white group-hover:text-[#00D28F] group-hover:translate-x-2 transition-all duration-300 font-sans">
                      {item.name}
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <span className="text-xs text-zinc-500 font-normal">
                      {item.desc}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-[#00D28F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            ))}

            {/* Direct Service Quick Links */}
            <div className="pt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-3">
                Quick Service Access
              </span>
              <div className="flex flex-wrap gap-2">
                {serviceSublinks.map((s, idx) => (
                  <Link
                    key={idx}
                    href={s.href}
                    onClick={onClose}
                    className="px-3 py-1 rounded-full bg-white/[0.04] hover:bg-[#00D28F]/15 border border-white/10 hover:border-[#00D28F]/40 text-xs text-zinc-300 hover:text-[#00D28F] transition-all"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer inside menu */}
          <div ref={infoRef} className="pt-6 border-t border-white/10 space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Mail className="w-3.5 h-3.5 text-[#00D28F]" />
                  <a href="mailto:hello@startuplize.com" className="hover:text-white transition-colors">
                    hello@startuplize.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Phone className="w-3.5 h-3.5 text-[#00D28F]" />
                  <a href="tel:+18005557827" className="hover:text-white transition-colors">
                    +1 (800) 555-START
                  </a>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] shadow-lg shadow-[#00D28F]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Discovery Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
