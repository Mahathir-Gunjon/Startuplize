"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Calendar,
  X,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function FloatingMenu({
  isOpen,
  onClose,
  onOpenBooking,
}: FloatingMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      // delay attachment to avoid immediate trigger
      const timer = setTimeout(() => {
        window.addEventListener("click", handleClickOutside);
      }, 50);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "WORK", href: "/portfolio" },
    { label: "ABOUT", href: "/about" },
    { label: "REVIEWS", href: "/testimonials" },
    {
      label: "CAREERS",
      href: "/about#careers",
      badge: "HIRING",
    },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.94, y: -12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: -12 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-20 right-4 sm:right-6 lg:right-8 z-50 w-[300px] sm:w-[340px] bg-[#0A1612]/95 backdrop-blur-2xl border border-[#00D28F]/30 rounded-[28px] p-7 shadow-2xl shadow-black/80 overflow-hidden"
          style={{
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.75), 0 0 30px 2px rgba(0, 210, 143, 0.15)",
          }}
        >
          {/* Subtle Ambient Mint Light Cone */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#00D28F]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Navigation Links List */}
          <nav className="flex flex-col space-y-3.5 relative z-10">
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between transition-all duration-200 py-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    {/* Active bullet dot */}
                    {isActive ? (
                      <span className="text-[#00D28F] font-black text-xl leading-none">
                        •
                      </span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#00D28F]/60 transition-colors" />
                    )}

                    <span
                      className={cn(
                        "text-xl sm:text-2xl font-bold tracking-tight font-sans transition-all duration-200",
                        isActive
                          ? "text-white"
                          : "text-zinc-400 group-hover:text-white group-hover:translate-x-1"
                      )}
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* Optional Hiring or Extra Badge */}
                  {item.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider text-[#00D28F] bg-[#00D28F]/15 border border-[#00D28F]/40 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D28F] animate-pulse" />
                      <span>{item.badge}</span>
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="h-[1px] bg-white/10 my-6 relative z-10" />

          {/* Bottom "Let's Talk" Section */}
          <div className="relative z-10">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#00D28F]/80 mb-3 font-semibold">
              LET&apos;S TALK
            </div>

            <div className="flex flex-col space-y-2.5">
              {/* Direct Email Link */}
              <a
                href="mailto:hello@startuplize.com"
                className="flex items-center gap-2.5 text-xs text-zinc-300 hover:text-white transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-[#00D28F] shrink-0" />
                <span className="truncate group-hover:underline">
                  hello@startuplize.com
                </span>
              </a>

              {/* Direct Booking Action */}
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="flex items-center gap-2.5 text-xs text-zinc-300 hover:text-[#00D28F] transition-colors group text-left cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#00D28F] shrink-0" />
                <span className="group-hover:underline">
                  Book an Intro Strategy Call
                </span>
                <ArrowUpRight className="w-3 h-3 text-[#00D28F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
