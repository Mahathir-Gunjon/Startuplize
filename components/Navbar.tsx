"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, ArrowUpRight, Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import MegaMenu from "./MegaMenu";
import OffCanvasMenu from "./OffCanvasMenu";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isDarkPage = false; // Navbar adapts to theme smoothly

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Services", isMega: true },
    { name: "Works", href: "/portfolio" },
    { name: "Reviews", href: "/testimonials" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3.5",
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-black/30 backdrop-blur-md border-b border-white/10"
        )}
      >
        <div className="max-w-[1366px] mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded-xl bg-[#00D28F] flex items-center justify-center shadow-lg shadow-[#00D28F]/25 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-4 h-4 text-[#0A0A0A] stroke-[2.5]" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-white font-sans">
                Startuplize
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D28F] inline-block animate-pulse" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.06] border border-white/10 rounded-full px-4 py-1 backdrop-blur-md">
            {navLinks.map((link) => {
              if (link.isMega) {
                return (
                  <button
                    key={link.name}
                    onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                    onMouseEnter={() => setMegaMenuOpen(true)}
                    className={cn(
                      "px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer",
                      megaMenuOpen
                        ? "bg-[#00D28F] text-[#0A0A0A]"
                        : "text-zinc-300 hover:text-white hover:bg-white/[0.08]"
                    )}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={cn(
                        "w-3 h-3 transition-transform duration-200",
                        megaMenuOpen ? "rotate-180 text-[#0A0A0A]" : "text-zinc-400"
                      )}
                    />
                  </button>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href!}
                  className={cn(
                    "px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200",
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.08]"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Availability Badge, CTA & Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Live Availability Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D28F]/10 border border-[#00D28F]/30 text-[#00D28F] text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D28F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D28F]" />
              </span>
              <span>Available for Q3/Q4</span>
            </div>

            {/* Quick Consultation CTA */}
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 rounded-full font-semibold text-xs tracking-wide text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] shadow-lg shadow-[#00D28F]/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0A0A0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Hamburger Button for Off-Canvas Menu */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 text-white transition-colors cursor-pointer flex items-center justify-center md:hidden"
              aria-label="Open full menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Desktop Mega Menu Dropdown */}
      <MegaMenu
        isOpen={megaMenuOpen}
        onClose={() => setMegaMenuOpen(false)}
        onOpenBooking={onOpenBooking}
      />

      {/* Mobile Off-Canvas Slider */}
      <OffCanvasMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenBooking={onOpenBooking}
      />
    </>
  );
}
