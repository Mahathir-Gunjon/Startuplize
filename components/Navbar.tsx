"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenBooking: () => void;
}

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Review", href: "/testimonials" },
];

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4",
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1366px] mx-auto flex items-center justify-between">
        {/* =========================================================================
            1. FAR LEFT: BRAND LOGO
            ========================================================================= */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none shrink-0"
        >
          <div className="w-8 h-8 rounded-xl bg-[#00D28F] flex items-center justify-center shadow-lg shadow-[#00D28F]/30 group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 text-[#0A0A0A] stroke-[2.5]" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-bold tracking-tight text-white font-sans">
              Startuplize
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D28F] inline-block animate-pulse" />
          </div>
        </Link>

        {/* =========================================================================
            2. CENTER: LIGHT-GRAY / FROSTED PILL-SHAPED NAVIGATION LINKS
            ========================================================================= */}
        <nav className="hidden md:flex items-center gap-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 px-6 py-2 shadow-lg backdrop-blur-xl transition-colors">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3.5 py-1 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200",
                  isActive
                    ? "bg-white text-[#0A0A0A] shadow-md font-bold"
                    : "text-zinc-300 hover:text-white hover:bg-white/10"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* =========================================================================
            3. FAR RIGHT: USER AVATAR INSIDE SOLID MINT GREEN PILL
            ========================================================================= */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Solid Mint Green Pill with Avatar */}
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 bg-[#00D28F] hover:bg-[#00B87D] rounded-full shadow-lg shadow-[#00D28F]/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            {/* User Profile Avatar */}
            <div className="relative w-7 h-7 rounded-full overflow-hidden ring-2 ring-[#0A0A0A]/30 bg-zinc-900 shrink-0">
              <Image
                src="/images/founder.jpg"
                alt="Founder Avatar"
                fill
                sizes="28px"
                className="object-cover"
              />
            </div>

            {/* Label / CTA */}
            <span className="text-xs font-bold text-[#0A0A0A] tracking-tight font-sans whitespace-nowrap flex items-center gap-1">
              <span>Book Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/10 border border-white/15 text-white md:hidden flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-[1366px] mx-auto bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl flex flex-col space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors",
                pathname === link.href
                  ? "bg-white/15 text-[#00D28F] font-bold"
                  : "text-zinc-300 hover:bg-white/5 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3 px-4 rounded-full bg-[#00D28F] text-[#0A0A0A] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 mt-2"
          >
            <span>Book Discovery Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
