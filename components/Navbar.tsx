"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, ArrowUpRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import FloatingMenu from "./FloatingMenu";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically close menu on route navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
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
              1. BRAND LOGO (Left)
              ========================================================================= */}
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

          {/* =========================================================================
              2. RIGHT ACTIONS: Availability Status Pill + Clean Menu Toggle Button
              ========================================================================= */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Availability Status Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#051511]/80 border border-[#00D28F]/30 text-[#00D28F] text-[11px] font-mono font-medium tracking-wider uppercase backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D28F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D28F]" />
              </span>
              <span>ACCEPTING NEW PROJECTS</span>
            </div>

            {/* Menu Toggle Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={cn(
                "group relative inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer border",
                menuOpen
                  ? "bg-[#00D28F] text-[#0A0A0A] border-[#00D28F] shadow-lg shadow-[#00D28F]/30 scale-105"
                  : "bg-white/[0.08] hover:bg-white/[0.15] text-white border-white/15 hover:border-[#00D28F]/50 shadow-md backdrop-blur-md"
              )}
            >
              <span>{menuOpen ? "CLOSE" : "MENU"}</span>
              {menuOpen ? (
                <X className="w-3.5 h-3.5 text-[#0A0A0A]" />
              ) : (
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00D28F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          3. BAYFI-STYLE FLOATING RIGHT-ALIGNED MENU CARD
          ========================================================================= */}
      <FloatingMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenBooking={onOpenBooking}
      />
    </>
  );
}
