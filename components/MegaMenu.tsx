"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import {
  Palette,
  Layers,
  Sparkles,
  Layout,
  Smartphone,
  Gauge,
  Search,
  Code2,
  Cpu,
  Boxes,
  Zap,
  Film,
  Video,
  PlaySquare,
  TrendingUp,
  ArrowRight,
  Send,
  MessageSquare,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  ExternalLink,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function MegaMenu({ isOpen, onClose, onOpenBooking }: MegaMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !contentRef.current) return;

      if (isOpen) {
        gsap.to(containerRef.current, {
          autoAlpha: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.fromTo(
          contentRef.current,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
        );
      } else {
        gsap.to(containerRef.current, {
          autoAlpha: 0,
          duration: 0.25,
          ease: "power2.in",
        });
      }
    },
    { dependencies: [isOpen], scope: containerRef }
  );

  const serviceCategories = [
    {
      category: "Brand Design",
      items: [
        {
          title: "Logo & Branding Strategy",
          subtitle: "Innovative Visual Concepts",
          href: "/services/branding",
          icon: Palette,
        },
        {
          title: "Corporate Identity Design",
          subtitle: "Distinctive Brand Marks",
          href: "/services/branding",
          icon: Sparkles,
        },
        {
          title: "Content & Visual Systems",
          subtitle: "Engaging Storytelling",
          href: "/services/branding",
          icon: Layers,
        },
        {
          title: "Brand Guidelines & Kits",
          subtitle: "Multi-Platform Cohesion",
          href: "/services/branding",
          icon: Boxes,
        },
      ],
    },
    {
      category: "UI/UX Design",
      items: [
        {
          title: "Website Design",
          subtitle: "Seamless User Journeys",
          href: "/services/webflow",
          icon: Layout,
        },
        {
          title: "Web & Mobile App Design",
          subtitle: "Intuitive Interfaces",
          href: "/services/webflow",
          icon: Smartphone,
        },
        {
          title: "SAAS Product Design",
          subtitle: "Scalable Design Systems",
          href: "/services/webflow",
          icon: Cpu,
        },
        {
          title: "UX Conversion Audit",
          subtitle: "Insightful Evaluations",
          href: "/services/seo",
          icon: Search,
        },
      ],
    },
    {
      category: "Development",
      items: [
        {
          title: "Webflow Development",
          subtitle: "Robust 3D Web Builds",
          href: "/services/webflow",
          icon: Code2,
        },
        {
          title: "WordPress & Next.js Headless",
          subtitle: "High-Performance CMS",
          href: "/services/wordpress",
          icon: Cpu,
        },
        {
          title: "Wix Studio Modern Setup",
          subtitle: "Custom Responsive Architecture",
          href: "/services/wix",
          icon: Boxes,
        },
        {
          title: "Product MVP Build",
          subtitle: "Rapid Market Testing",
          href: "/services/webflow",
          icon: Zap,
        },
      ],
    },
    {
      category: "Motion & Paid Growth",
      items: [
        {
          title: "SaaS Product Animation",
          subtitle: "Fluid 3D Interactions",
          href: "/services/meta-ads",
          icon: Film,
        },
        {
          title: "Product Launch Video",
          subtitle: "Compelling Visual Storytelling",
          href: "/services/meta-ads",
          icon: Video,
        },
        {
          title: "Meta Ads Scaling Funnels",
          subtitle: "High-ROI Performance Creative",
          href: "/services/meta-ads",
          icon: TrendingUp,
        },
        {
          title: "Google Ads & Technical SEO",
          subtitle: "Dominating Search & PMax",
          href: "/services/google-ads",
          icon: Gauge,
        },
      ],
    },
  ];

  const expertTools = [
    { name: "Figma", label: "Design Systems", icon: "🎨" },
    { name: "Webflow", label: "Visual Dev", icon: "🌐" },
    { name: "Next.js", label: "React Engine", icon: "⚡" },
    { name: "Framer", label: "Interactive Motion", icon: "✨" },
    { name: "WordPress", label: "Enterprise CMS", icon: "📝" },
    { name: "Vercel", label: "Edge Delivery", icon: "▲" },
    { name: "OpenAI", label: "AI Workflows", icon: "🤖" },
    { name: "Slack", label: "Realtime Sync", icon: "💬" },
  ];

  return (
    <div
      ref={containerRef}
      className={`fixed inset-x-0 top-[72px] z-40 invisible opacity-0 transition-all pointer-events-auto`}
      onMouseLeave={onClose}
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 top-[72px] bg-black/40 backdrop-blur-sm -z-10"
        onClick={onClose}
      />

      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className="bg-white/95 backdrop-blur-2xl border border-zinc-200/80 rounded-3xl shadow-2xl shadow-zinc-900/10 p-8 lg:p-10 text-zinc-900 overflow-hidden"
        >
          {/* Top 4-Column Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-8 border-b border-zinc-200/70">
            {serviceCategories.map((col, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    {col.category}
                  </h4>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D28F]" />
                </div>
                <div className="space-y-3">
                  {col.items.map((item, itemIdx) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={itemIdx}
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-start gap-3.5 p-2.5 rounded-2xl hover:bg-zinc-50 transition-all duration-200"
                      >
                        <div className="w-8 h-8 rounded-xl bg-zinc-100 group-hover:bg-[#00D28F]/15 flex items-center justify-center shrink-0 transition-colors">
                          <IconComponent className="w-4 h-4 text-zinc-700 group-hover:text-[#00B87D] transition-colors" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-zinc-900 group-hover:text-[#00B87D] transition-colors flex items-center gap-1">
                            <span>{item.title}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#00B87D]" />
                          </div>
                          <div className="text-xs text-zinc-500 truncate font-normal mt-0.5">
                            {item.subtitle}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Bar: Expert Toolset + Connect with Startuplize */}
          <div className="pt-6 flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left: Powered By An Expert Toolset */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider whitespace-nowrap mr-2">
                Powered By An Expert Toolset:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {expertTools.map((tool, tIdx) => (
                  <div
                    key={tIdx}
                    title={`${tool.name} - ${tool.label}`}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100/80 hover:bg-[#00D28F]/10 border border-zinc-200 hover:border-[#00D28F]/40 text-xs font-medium text-zinc-700 transition-all duration-200 cursor-default"
                  >
                    <span>{tool.icon}</span>
                    <span className="font-semibold text-zinc-800">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Connect With Startuplize */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider whitespace-nowrap">
                Connect With Startuplize:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-[#00D28F] text-zinc-700 hover:text-[#0A0A0A] flex items-center justify-center transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="https://t.me/startuplize"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-[#00D28F] text-zinc-700 hover:text-[#0A0A0A] flex items-center justify-center transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com/startuplize"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-[#00D28F] text-zinc-700 hover:text-[#0A0A0A] flex items-center justify-center transition-all duration-200"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hello@startuplize.com"
                  aria-label="Email Us"
                  className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-[#00D28F] text-zinc-700 hover:text-[#0A0A0A] flex items-center justify-center transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
