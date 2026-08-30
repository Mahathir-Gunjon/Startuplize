"use client";

import React from "react";

const SERVICES_ROW_1 = [
  "Webflow 3D Development",
  "Headless Next.js 14",
  "Brand Identity Design",
  "Wix Studio Architecture",
  "Data-Driven Technical SEO",
  "High-ROAS Meta Ads",
  "Google Ads & PMax",
  "Custom Three.js Shaders",
];

const SERVICES_ROW_2 = [
  "UI/UX Product Design",
  "SaaS MVP Engineering",
  "Interactive 3D Motion",
  "Conversion Rate Optimization",
  "Design Systems & Kits",
  "Programmatic CMS Engines",
  "Headless Shopify & E-commerce",
  "Enterprise SLA Support",
];

export default function Marquee() {
  const row1Items = SERVICES_ROW_1.concat(SERVICES_ROW_1).concat(SERVICES_ROW_1);
  const row2Items = SERVICES_ROW_2.concat(SERVICES_ROW_2).concat(SERVICES_ROW_2);

  return (
    <section className="w-full py-12 bg-transparent overflow-hidden select-none relative">
      {/* Side Fade Gradient Masks for Seamless Edge-to-Edge Floating Stream */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

      {/* Row 1: Forward Marquee Stream (Scrolling Left) */}
      <div className="flex overflow-hidden mb-4">
        <div className="flex shrink-0 items-center gap-6 animate-marquee">
          {row1Items.map((service, idx) => (
            <div
              key={`r1-${idx}`}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-zinc-200/90 shadow-sm hover:border-[#00D28F] hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#00D28F] shadow-[0_0_8px_#00D28F] group-hover:scale-125 transition-transform shrink-0" />
              <span className="text-[14px] md:text-[16px] font-bold text-zinc-900 group-hover:text-[#00A870] font-sans tracking-tight whitespace-nowrap transition-colors">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Reverse Marquee Stream (Scrolling Right) */}
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 items-center gap-6 animate-marquee-reverse">
          {row2Items.map((service, idx) => (
            <div
              key={`r2-${idx}`}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-zinc-200/90 shadow-sm hover:border-[#00D28F] hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#00B87D] shadow-[0_0_8px_#00B87D] group-hover:scale-125 transition-transform shrink-0" />
              <span className="text-[14px] md:text-[16px] font-bold text-zinc-900 group-hover:text-[#00A870] font-sans tracking-tight whitespace-nowrap transition-colors">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
