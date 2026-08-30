"use client";

import React, { useState } from "react";
import {
  Calendar,
  Search,
  ShoppingCart,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Clock,
  Car,
  Wrench,
  Stethoscope,
  Building2,
  Briefcase,
  Store,
  Layers,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface WhoWeWorkWithProps {
  onOpenBooking?: (industryName?: string) => void;
}

const INDUSTRIES = [
  {
    id: "booking-services",
    tabTitle: "Local & Booking Businesses",
    icon: Calendar,
    headline: "Dentists, Plumbers, Contractors & Appointment Services",
    tagline: "Turn local searches into confirmed calendar bookings automatically.",
    description:
      "Engineered for local service providers, medical clinics, and trade contractors who need friction-free appointment scheduling, top-3 Google Maps (GMB) ranking, and automated lead capture.",
    accentColor: "#00D28F",
    examples: [
      { name: "Dental & Orthodontic Clinics", note: "Real-time patient intake & insurance booking" },
      { name: "Plumbers, HVAC & Electricians", note: "Emergency 1-click dispatch & quote calculator" },
      { name: "MedSpas & Wellness Clinics", note: "Service tier booking & treatment visualizer" },
      { name: "Law Firms & Attorneys", note: "Confidential case intake & consultation scheduling" },
      { name: "Auto Repair & Detailing", note: "Vehicle service tier selection & bay scheduling" },
      { name: "Accounting & CPA Firms", note: "Tax sprint discovery calls & document uploads" },
    ],
    features: [
      "Cal.com, Calendly & Acuity seamless calendar sync",
      "Local SEO & Google My Business (GMB) Map Pack optimization",
      "Automated SMS & email appointment confirmations",
      "Mobile tap-to-call floating bar and fast multi-step quote forms",
      "Verified Google Reviews & Trustpilot sync carousel",
    ],
    badge: "WordPress $400 (10 Pgs) • Cal Sync Included",
  },
  {
    id: "listing-platforms",
    tabTitle: "Car & Hardware Listing Sites",
    icon: Search,
    headline: "Automotive, Hardware Tools, Real Estate & Directory Portals",
    tagline: "Ultra-fast faceted parametric search handling 10,000+ inventory SKUs.",
    description:
      "Designed for dealerships, equipment wholesalers, and directory marketplaces requiring lightning-fast attribute filtering, detailed spec comparisons, and instant quote requisitions.",
    accentColor: "#00E5FF",
    examples: [
      { name: "Car Dealerships & Auto Lots", note: "VIN decoder, monthly payment calculator, 360 viewer" },
      { name: "Hardware & Industrial Tool Catalogs", note: "SKU specification sheets, CAD viewer, bulk quote" },
      { name: "Real Estate & Property Portals", note: "MLS/IDX sync, interactive neighborhood map filters" },
      { name: "Heavy Machinery & Equipment Rental", note: "Availability dates, tonnage filters & operator booking" },
      { name: "B2B Trade & Vendor Directories", note: "Verified supplier profiles & RFP submission engine" },
      { name: "Job Boards & Niche Marketplaces", note: "Instant faceted search & applicant tracking sync" },
    ],
    features: [
      "Instant faceted parametric filter (Price, Make, Condition, Specs)",
      "Dynamic PDF spec sheet export & automated quotation generator",
      "High-density image galleries with lazy-loaded media assets",
      "SEO schema markup for vehicle, product & real estate listings",
      "Custom WordPress or Headless Next.js database architecture",
    ],
    badge: "WordPress & Next.js • Faceted Search",
  },
  {
    id: "ecommerce-stores",
    tabTitle: "E-Commerce (WooCommerce & Shopify)",
    icon: ShoppingCart,
    headline: "High-Volume WordPress WooCommerce & Shopify Storefronts",
    tagline: "Sub-second checkout flows optimized for maximum average order value (AOV).",
    description:
      "Built for DTC brands, wholesale distributors, and hardware retailers looking for high-speed e-commerce, custom bundle builders, and frictionless 1-click mobile checkouts.",
    accentColor: "#FFB800",
    examples: [
      { name: "Hardware Tools & Equipment E-Commerce", note: "Bulk wholesale tier pricing & trade credit" },
      { name: "Direct-to-Consumer (DTC) Brands", note: "Sub-second Next.js / Shopify storefront with 1-click buy" },
      { name: "B2B Wholesale Ordering Systems", note: "Customer-specific price lists & PO number checkout" },
      { name: "Subscription Box & Membership Stores", note: "Recurring billing, customer portal & churn prevention" },
      { name: "Boutique Fashion & Luxury Goods", note: "High-res zoom visualizers, size guides & currency switch" },
      { name: "Specialized Food & Beverage Retailers", note: "Cold-chain delivery slots & recurring auto-ship" },
    ],
    features: [
      "Sub-second page load times with 100/100 Core Web Vitals",
      "Stripe, Apple Pay, Google Pay & Klarna 1-click express checkout",
      "Smart upsell & cross-sell drawers that increase AOV by 24%",
      "Server-side Meta CAPI & Google Ads conversion tracking",
      "Automated abandoned cart recovery and review collection flows",
    ],
    badge: "Shopify & WooCommerce • 1-Click Checkout",
  },
];

export default function WhoWeWorkWith({ onOpenBooking }: WhoWeWorkWithProps) {
  const [activeTab, setActiveTab] = useState<string>("booking-services");

  const currentIndustry = INDUSTRIES.find((i) => i.id === activeTab) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-[#1A1A1A] relative border-b border-zinc-200">
      <div className="max-w-[1366px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Section Capsule: text-[14px], font-normal, not uppercase, not bold */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-[14px] font-normal font-mono mb-4">
            <Building2 className="w-4 h-4 text-[#00B87D]" />
            <span>Who We Build For</span>
          </div>

          {/* Strictly H2 (text-3xl md:text-5xl) */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans max-w-4xl">
            Engineered For High-Intent{" "}
            <span className="font-serif italic font-normal text-[#00B87D]">
              Local Businesses &amp; Digital Portals.
            </span>
          </h2>

          {/* Normal Body Tier */}
          <p className="text-[16px] md:text-[18px] text-zinc-600 max-w-3xl mt-4 font-normal leading-relaxed">
            From local dental practices and emergency plumbers needing automated booking calendars, to automotive dealers, hardware tool catalogs, and high-volume Shopify/WordPress e-commerce storefronts.
          </p>
        </div>

        {/* Category Tab Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            const isActive = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={cn(
                  "px-5 py-3 rounded-full text-[14px] font-mono transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm",
                  isActive
                    ? "bg-[#0A0A0A] text-white border-2 border-[#00D28F] font-bold shadow-lg shadow-[#00D28F]/15"
                    : "bg-[#FAFAFA] text-zinc-700 hover:text-black hover:bg-zinc-100 border border-zinc-200"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-[#00D28F]" : "text-zinc-500")} />
                <span>{ind.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Master Active Industry Display Card */}
        <div className="rounded-2xl bg-[#FAFAFA] border border-zinc-200/90 p-6 sm:p-10 lg:p-12 shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Scope Overview & Guarantees (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-[#00D28F]/15 text-[#00A870] font-mono text-[12px] font-bold border border-[#00D28F]/30">
                  {currentIndustry.badge}
                </span>
                <span className="text-[12px] font-mono text-zinc-500 font-normal">
                  Turnkey Sprint • 1-2 Week Launch
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A] font-sans leading-[1.15]">
                {currentIndustry.headline}
              </h3>

              <p className="text-[16px] md:text-[18px] font-serif italic text-[#00A870]">
                &ldquo;{currentIndustry.tagline}&rdquo;
              </p>

              {/* Small Body Tier */}
              <p className="text-[14px] md:text-[16px] text-zinc-600 font-normal leading-relaxed">
                {currentIndustry.description}
              </p>

              {/* Key Technical Deliverables Checklist */}
              <div className="p-6 rounded-xl bg-white border border-zinc-200/80 shadow-sm space-y-3">
                <span className="text-[12px] font-mono font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  What Comes Built-In (Zero Extra Charge)
                </span>
                {currentIndustry.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[14px] text-zinc-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00A870] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBooking && onOpenBooking(currentIndustry.headline)}
                  className="px-8 py-4 rounded-full font-bold text-[14px] uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] shadow-lg shadow-[#00D28F]/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Request {currentIndustry.tabTitle} Scope</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-[13px] font-mono text-zinc-500">
                  <Clock className="w-4 h-4 text-[#00A870]" />
                  <span>Fixed 1-2 Week Turnaround</span>
                </div>
              </div>
            </div>

            {/* Right Column: Specific Business Types Grid (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[12px] font-mono font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                Specialized Business Types We Build:
              </span>

              <div className="space-y-3">
                {currentIndustry.examples.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm hover:border-[#00D28F] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-[15px] font-bold text-[#1A1A1A] font-sans">
                        {item.name}
                      </h4>
                      <span className="text-[11px] font-mono text-[#00A870] bg-[#00D28F]/10 px-2 py-0.5 rounded">
                        Turnkey
                      </span>
                    </div>
                    <p className="text-[12px] text-zinc-500 font-normal">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="p-4 rounded-xl bg-zinc-900 text-white flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <Star className="w-4 h-4 text-[#00D28F] fill-[#00D28F] shrink-0" />
                  <span className="text-[12px] font-mono text-zinc-300">
                    On-Page SEO + Speed + GMB Included
                  </span>
                </div>
                <span className="text-[12px] font-mono font-bold text-[#00D28F]">
                  $400 - $800 Flat
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
