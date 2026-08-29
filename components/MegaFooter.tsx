"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Check,
  ShieldCheck,
  Twitter,
  Instagram,
  Linkedin,
  MessageSquare,
} from "lucide-react";

interface MegaFooterProps {
  onOpenBooking?: () => void;
}

export default function MegaFooter({ onOpenBooking }: MegaFooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="relative z-0 overflow-hidden">
      {/* Sticky Bottom Container for the Underneath Parallax Curtain Reveal on Scroll */}
      <footer className="bg-[#0A0A0A] text-[#FAFAFA] pt-20 pb-0 border-t border-white/10 relative overflow-hidden">
        {/* Ambient Mint Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#00D28F]/12 rounded-full blur-[200px] pointer-events-none -z-10" />

        <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Status Bar: 'All Systems Operational Worldwide' */}
          <div className="pb-12 mb-16 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D28F] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00D28F]" />
              </span>
              <span className="text-xs font-bold text-[#00D28F] uppercase tracking-wider font-mono">
                All Systems Operational Worldwide
              </span>
            </div>

            <div className="flex items-center gap-6 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00D28F]" />
                <span>Enterprise SLA Guaranteed</span>
              </span>
              <span>•</span>
              <span>Direct Senior Access</span>
            </div>
          </div>

          {/* 4-Column Navigation & Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            {/* Column 1: Brand & Newsletter (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <Link href="/" className="flex items-center gap-2.5 mb-6 group">
                <div className="w-9 h-9 rounded-xl bg-[#00D28F] flex items-center justify-center shadow-lg shadow-[#00D28F]/25 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-4 h-4 text-[#0A0A0A] stroke-[2.5]" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white font-sans">
                  Startuplize<span className="text-[#00D28F]">.</span>
                </span>
              </Link>

              <p className="text-sm text-zinc-400 font-normal leading-relaxed mb-6 max-w-sm">
                We craft conversion-led digital platforms, bespoke Webflow designs, and scaled
                acquisition engines for ambitious founders globally.
              </p>

              {/* Newsletter Box */}
              <div className="w-full max-w-sm">
                <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider block mb-2 font-mono">
                  The Weekly Growth Brief
                </span>
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="founder@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-4 pr-28 py-3 rounded-full bg-white/[0.05] border border-white/15 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#00D28F] transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 px-4 py-2 rounded-full bg-[#00D28F] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider hover:bg-[#00B87D] transition-colors cursor-pointer font-mono"
                  >
                    {subscribed ? <Check className="w-3.5 h-3.5" /> : "Join"}
                  </button>
                </form>
                {subscribed && (
                  <p className="text-[11px] text-[#00D28F] mt-1.5 font-medium">
                    ✓ Welcome to the inner circle.
                  </p>
                )}
              </div>
            </div>

            {/* Column 2: Growth Disciplines (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-6 font-mono">
                Growth Disciplines
              </h4>
              <ul className="space-y-3.5 text-sm text-zinc-400">
                {[
                  { name: "Webflow Development", href: "/services/webflow" },
                  { name: "WordPress & Next.js", href: "/services/wordpress" },
                  { name: "Wix Studio Platforms", href: "/services/wix" },
                  { name: "SEO Domination", href: "/services/seo" },
                  { name: "Brand Identity Design", href: "/services/branding" },
                  { name: "Meta Ads & Paid Funnels", href: "/services/meta-ads" },
                  { name: "Google Ads & Performance Max", href: "/services/google-ads" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#00D28F] opacity-0 hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Navigation & Archive (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-6 font-mono">
                Company
              </h4>
              <ul className="space-y-3.5 text-sm text-zinc-400">
                {[
                  { name: "Portfolio Archive", href: "/portfolio" },
                  { name: "Client Testimonials", href: "/testimonials" },
                  { name: "About & Manifesto", href: "/about" },
                  { name: "Direct Contact", href: "/contact" },
                  { name: "Services Directory", href: "/services" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Global Headquarters & Socials (3 cols) */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-4 font-mono">
                  Headquarters
                </h4>
                <p className="text-sm text-zinc-300 flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#00D28F] shrink-0 mt-0.5" />
                  <span>San Francisco, CA • Distributed Globally</span>
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 font-mono">
                  Direct Inquiries
                </h4>
                <a
                  href="mailto:hello@startuplize.com"
                  className="text-sm text-white font-medium hover:text-[#00D28F] transition-colors block"
                >
                  hello@startuplize.com
                </a>
                <a
                  href="tel:+18005557827"
                  className="text-xs text-zinc-400 hover:text-white transition-colors block mt-1 font-mono"
                >
                  +1 (800) 555-START
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-3 font-mono">
                  Connect
                </span>
                <div className="flex items-center gap-2.5">
                  {[
                    { icon: Twitter, href: "https://twitter.com/startuplize", label: "Twitter" },
                    { icon: Linkedin, href: "https://linkedin.com/company/startuplize", label: "LinkedIn" },
                    { icon: Instagram, href: "https://instagram.com/startuplize", label: "Instagram" },
                    { icon: MessageSquare, href: "https://wa.me/15551234567", label: "WhatsApp" },
                  ].map((s, idx) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={idx}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 hover:border-[#00D28F] hover:bg-[#00D28F]/20 text-zinc-300 hover:text-[#00D28F] flex items-center justify-center transition-all"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
            <p>© {new Date().getFullYear()} Startuplize Agency Inc. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <Link href="/about" className="hover:text-zinc-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/about" className="hover:text-zinc-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/about" className="hover:text-zinc-300 transition-colors">
                Security Standards
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MASSIVE FULL-WIDTH SCREEN WATERMARK: ONLY TOP HALF VISIBLE FROM BOTTOM
            ========================================================================= */}
        <div className="w-full overflow-hidden select-none pointer-events-none text-center flex justify-center items-end leading-none">
          <span className="block w-full text-[14.2vw] font-black tracking-[-0.045em] leading-[0.78] translate-y-[45%] text-transparent bg-clip-text bg-gradient-to-b from-white/[0.18] via-white/[0.06] to-transparent font-sans whitespace-nowrap">
            STARTUPLIZE
          </span>
        </div>
      </footer>
    </div>
  );
}
