"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import MegaFooter from "@/components/MegaFooter";
import BookingModal from "@/components/BookingModal";
import CustomCursor from "@/components/CustomCursor";
import CalEmbed from "@/components/CalEmbed";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] relative selection:bg-[#00D28F] selection:text-[#0A0A0A]">
      <CustomCursor />
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Content Curtain Layer */}
      <div className="relative z-10 bg-[#FAFAFA] shadow-[0_45px_100px_rgba(0,0,0,0.55)]">
        {/* Hero Header */}
        <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] text-white relative overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-[#00D28F]/15 rounded-full blur-[190px] pointer-events-none -z-10" />

          <div className="max-w-[1366px] mx-auto text-center flex flex-col items-center">
            {/* Section Capsule: text-[14px], font-normal, not uppercase, not bold */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[14px] font-normal text-[#00D28F] mb-6 font-mono">
              <Sparkles className="w-4 h-4" />
              <span>Direct Calendar Access</span>
            </div>

            {/* Strictly H1 (5xl md:7xl) */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white font-sans max-w-4xl mb-6">
              Let&apos;s Build Something{" "}
              <span className="font-serif italic font-normal text-[#00D28F]">
                Unfairly Remarkable.
              </span>
            </h1>

            {/* Large Body Tier */}
            <p className="text-[20px] md:text-[24px] text-zinc-300 max-w-2xl font-normal leading-relaxed mb-8">
              Pick a time directly on our calendar below for a 30-minute discovery strategy session.
              We will review your product and present a custom sprint roadmap.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-[14px] text-zinc-400 font-normal">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00D28F]" />
                <span>100% Confidential NDA</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00D28F]" />
                <span>Guaranteed Senior Access</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00D28F]" />
                <span>Tailored Sprint Proposal</span>
              </span>
            </div>
          </div>
        </section>

        {/* Main Cal.com Interactive Booking Embed Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1366px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Direct Channels & Guarantee */}
              <div className="lg:col-span-4 space-y-6">
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-6">
                  <h3 className="text-xl font-bold text-[#1A1A1A] font-sans">
                    Direct Leadership Channels
                  </h3>

                  <div className="space-y-4 text-[14px] md:text-[16px] text-zinc-600 font-normal">
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-[#00B87D] mt-1 shrink-0" />
                      <div>
                        <span className="text-[12px] font-mono font-normal text-zinc-400 block">
                          Work Email
                        </span>
                        <a href="mailto:hello@startuplize.com" className="text-zinc-900 font-semibold hover:text-[#00B87D] transition-colors">
                          hello@startuplize.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-[#00B87D] mt-1 shrink-0" />
                      <div>
                        <span className="text-[12px] font-mono font-normal text-zinc-400 block">
                          Direct Phone
                        </span>
                        <a href="tel:+18005557827" className="text-zinc-900 font-semibold hover:text-[#00B87D] transition-colors">
                          +1 (800) 555-START
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#00B87D] mt-1 shrink-0" />
                      <div>
                        <span className="text-[12px] font-mono font-normal text-zinc-400 block">
                          Headquarters
                        </span>
                        <span className="text-zinc-900 font-medium">
                          San Francisco, CA • Distributed Worldwide
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-zinc-100 flex flex-col gap-2.5">
                    <span className="text-[12px] font-mono font-normal text-zinc-400">
                      Instant Messaging VIP
                    </span>
                    <div className="flex gap-2">
                      <a
                        href="https://wa.me/15551234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl bg-zinc-100 hover:bg-[#00D28F]/20 text-[14px] font-normal text-zinc-800 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#00A870]" />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href="https://t.me/startuplize"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-xl bg-zinc-100 hover:bg-[#00D28F]/20 text-[14px] font-normal text-zinc-800 flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Send className="w-3.5 h-3.5 text-[#00A870]" />
                        <span>Telegram</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* What Happens Next Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 text-white shadow-xl space-y-4">
                  <span className="text-[12px] font-mono font-normal text-[#00D28F]">
                    Sprint Discovery Process
                  </span>
                  <h4 className="text-lg font-bold font-sans">What happens after you book:</h4>
                  <ul className="space-y-3 text-[14px] text-zinc-300 font-normal">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D28F] mt-1.5 shrink-0" />
                      <span>Instant Google Meet invite dispatched to your work email.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D28F] mt-1.5 shrink-0" />
                      <span>Our creative lead audits your current website and competitors beforehand.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D28F] mt-1.5 shrink-0" />
                      <span>30-minute structured strategy call with actionable conversion feedback.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Cal.com Inline Booking Component */}
              <div className="lg:col-span-8 bg-white rounded-2xl border border-zinc-200/90 p-4 sm:p-6 shadow-sm overflow-hidden min-h-[650px]">
                <CalEmbed
                  id="my-cal-inline-website"
                  className="w-full min-h-[600px] h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <MegaFooter onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
