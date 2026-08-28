"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import DepthOfVision from "@/components/DepthOfVision";
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

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] relative selection:bg-[#00D28F] selection:text-[#0A0A0A]">
      {/* Precision Custom Cursor */}
      <CustomCursor />

      {/* Floating Modern Header with Whiteframe.agency-Style Mega Menu */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 1. Cinematic 2-Sided Hero (Dark Mode + Dual Vertical Reviews) */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* 2. Partner Social Proof Badges & Kinetic Infinite Tag Marquee */}
      <Marquee />

      {/* 3. Depth of Vision: 3-Layer Spatial Parallax Experience */}
      <DepthOfVision onOpenBooking={handleOpenBooking} />

      {/* 4. The "Unfair Advantage" Sticky Scrollytelling Typography (Dark Mode) */}
      <UnfairAdvantage />

      {/* 5. 5-Card Stacked Website Template Portfolio with Layering Effect */}
      <StackedPortfolio onOpenBooking={handleOpenBooking} />

      {/* 6. Real Results: Left Column Pinned with Vertical Metric Cards */}
      <ImpactPinSection onOpenBooking={handleOpenBooking} />

      {/* 7. Specialized Growth Disciplines: Centered Horizontal Wheel Pin */}
      <ServicesHorizontalScroll onOpenBooking={handleOpenBooking} />

      {/* 8. Feature Checklists with Word-Scaling Typography */}
      <FeatureChecklist />

      {/* 9. Visual Excellence Showcase: Text Hover Image Follower */}
      <InteractiveServicesHover onOpenBooking={handleOpenBooking} />

      {/* 10. Client Love: Dual Opposing Vertical Testimonial Marquees */}
      <Testimonials />

      {/* 11. The Creative Minds: Grayscale-to-Color Team Showcase (Featuring Founder Mahathir) */}
      <TeamSection onOpenBooking={handleOpenBooking} />

      {/* 12. 4-Step Process Timeline & Collapsible FAQ Accordion */}
      <ProcessTimeline onOpenBooking={handleOpenBooking} />

      {/* Universal Global High-Conversion CTA Banner */}
      <GlobalCTA onOpenBooking={handleOpenBooking} />

      {/* 13. Mega Footer with Underneath Parallax Reveal */}
      <MegaFooter onOpenBooking={handleOpenBooking} />

      {/* Interactive Cal.com Scheduling & Quick Brief Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
