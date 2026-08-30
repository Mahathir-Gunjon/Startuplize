"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TopServicesTriptych from "@/components/TopServicesTriptych";
import Marquee from "@/components/Marquee";
import DepthOfVision from "@/components/DepthOfVision";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import UnfairAdvantage from "@/components/UnfairAdvantage";
import StackedPortfolio from "@/components/StackedPortfolio";
import ImpactPinSection from "@/components/ImpactPinSection";
import ServicesHorizontalScroll from "@/components/ServicesHorizontalScroll";
import FeatureChecklist from "@/components/FeatureChecklist";
import InteractiveServicesHover from "@/components/InteractiveServicesHover";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import GlobalCTA from "@/components/GlobalCTA";
import MegaFooter from "@/components/MegaFooter";
import BookingModal from "@/components/BookingModal";
import CustomCursor from "@/components/CustomCursor";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const handleOpenBooking = (industryName?: string) => {
    if (industryName) {
      setSelectedIndustry(`Industry Inquiry: ${industryName}`);
    } else {
      setSelectedIndustry(null);
    }
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] relative selection:bg-[#00D28F] selection:text-[#0A0A0A]">
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Floating Modern Header with Clean Minimal Menu */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* =========================================================================
          MAIN PAGE CONTENT (Curtain Layer: z-10 over Parallax Footer)
          ========================================================================= */}
      <div className="relative z-10 bg-[#FAFAFA] shadow-[0_45px_100px_rgba(0,0,0,0.55)]">
        {/* 1. Cinematic Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Top 3 Flagship Services Triptych (Business Website, Custom Development, SEO) */}
        <TopServicesTriptych onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Partner Social Proof Badges & Kinetic Infinite Tag Marquee */}
        <Marquee />

        {/* 4. Depth of Vision: 3-Layer Spatial Parallax Experience */}
        <DepthOfVision onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Who We Work With (Local Booking, Listing Portals, E-Commerce) */}
        <WhoWeWorkWith onOpenBooking={handleOpenBooking} />

        {/* 6. The "Unfair Advantage" Sticky Scrollytelling Typography */}
        <UnfairAdvantage />

        {/* 7. 5-Card Stacked Website Template Portfolio with Layering Effect */}
        <StackedPortfolio onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Real Results: Left Column Pinned with Vertical Metric Cards */}
        <ImpactPinSection onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Specialized Growth Disciplines: Centered Horizontal Wheel Pin */}
        <ServicesHorizontalScroll onOpenBooking={() => handleOpenBooking()} />

        {/* 10. Feature Checklists with Word-Scaling Typography */}
        <FeatureChecklist />

        {/* 11. Visual Excellence Showcase: Text Hover Image Follower */}
        <InteractiveServicesHover onOpenBooking={() => handleOpenBooking()} />

        {/* 12. Client Love: Dual Opposing Vertical Testimonial Marquees */}
        <Testimonials />

        {/* 13. The Creative Minds: Grayscale-to-Color Team Showcase */}
        <TeamSection onOpenBooking={() => handleOpenBooking()} />

        {/* 14. 4-Step Process Timeline & Collapsible FAQ Accordion */}
        <ProcessTimeline onOpenBooking={() => handleOpenBooking()} />

        {/* Universal Global High-Conversion CTA Banner */}
        <GlobalCTA onOpenBooking={() => handleOpenBooking()} />
      </div>

      {/* 15. Mega Footer with Underneath Parallax Reveal */}
      <MegaFooter onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Cal.com Scheduling & Quick Brief Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialMessage={selectedIndustry || undefined}
      />
    </main>
  );
}
