'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';

interface HeroAgnosProps {
  onOpenBooking: () => void;
}

// Interactive Mouse-Tracking Dual Eyes (👀 Emoji Style) Component
function TrackingEyes() {
  const containerRef = React.useRef<HTMLSpanElement>(null);
  const [pupilPos, setPupilPos] = React.useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = React.useState(false);

  React.useEffect(() => {
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.hypot(dx, dy);

      // Max pupil movement radius within each larger eye socket
      const maxRadiusX = 7.5;
      const maxRadiusY = 5.5;

      // Soft pull curve
      const pull = Math.min(1, distance / 220);

      targetX = Math.cos(angle) * maxRadiusX * pull;
      targetY = Math.sin(angle) * maxRadiusY * pull;
    };

    // Smooth lerp update loop for silky, organic eye tracking
    const updateLoop = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setPupilPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateLoop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Periodic natural blink every 4.2 seconds
  React.useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
      }, 130);
    }, 4200);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span
      ref={containerRef}
      onMouseEnter={() => {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 120);
      }}
      className="relative inline-flex items-center justify-center align-middle gap-1.5 sm:gap-2 xl:gap-2.5 px-2.5 sm:px-3 xl:px-3.5 mx-1.5 sm:mx-2.5 h-[46px] sm:h-[52px] xl:h-[58px] rounded-full shadow-lg border-2 sm:border-[2.5px] border-white bg-white/95 backdrop-blur-sm shrink-0 -translate-y-1 sm:-translate-y-1.5 select-none cursor-pointer hover:scale-106 transition-all duration-300"
      style={{
        transform: `translateY(-4px) ${isBlinking ? 'scaleY(0.12)' : 'scaleY(1)'}`,
        transition: 'transform 0.12s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      title="👀 Looking right where your mouse goes!"
    >
      {/* Left Eye Sphere */}
      <span className="relative w-8 h-8 sm:w-9.5 sm:h-9.5 xl:w-11 xl:h-11 rounded-full bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#ede9e3] shadow-inner border border-black/15 flex items-center justify-center overflow-hidden">
        {/* Pupil */}
        <span
          className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 xl:w-6.5 xl:h-6.5 rounded-full bg-[#060612] relative flex items-start justify-end p-0.5 sm:p-1 pointer-events-none transition-transform duration-75 ease-out shadow-xs"
          style={{
            transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
          }}
        >
          {/* Glossy catchlight glint dot */}
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 xl:w-2.5 xl:h-2.5 rounded-full bg-white shadow-xs" />
        </span>
      </span>

      {/* Right Eye Sphere */}
      <span className="relative w-8 h-8 sm:w-9.5 sm:h-9.5 xl:w-11 xl:h-11 rounded-full bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#ede9e3] shadow-inner border border-black/15 flex items-center justify-center overflow-hidden">
        {/* Pupil */}
        <span
          className="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 xl:w-6.5 xl:h-6.5 rounded-full bg-[#060612] relative flex items-start justify-end p-0.5 sm:p-1 pointer-events-none transition-transform duration-75 ease-out shadow-xs"
          style={{
            transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)`,
          }}
        >
          {/* Glossy catchlight glint dot */}
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 xl:w-2.5 xl:h-2.5 rounded-full bg-white shadow-xs" />
        </span>
      </span>
    </span>
  );
}

export function HeroAgnos({ onOpenBooking }: HeroAgnosProps) {
  // Services list for the orange ribbon (local-business friendly, no headless/Next.js)
  const servicesList = [
    'WordPress Engineering',
    'Webflow Systems',
    'Elementor Pro Architecture',
    'Local SEO & GMB Optimization',
    'Custom ACF Pro Theme Builds',
    'Sub-Second WooCommerce',
    'Mobile Speed Optimization',
    'Google Map Pack Visibility',
  ];

  // Engineering standards list for the black ribbon (no fake rank promises)
  const standardsList = [
    'Senior Developers Only',
    '100% Core Web Vitals Pass',
    'Over 140+ Deployments',
    'Sub-Second Mobile Speed',
    'Clean Zero-Bloat Code',
    'Zero Junior Hand-Offs',
    'Direct Senior Support',
    'High Conversion Results',
  ];

  return (
    <section
      id="home"
      className="relative z-30 h-screen min-h-[640px] lg:h-screen lg:min-h-screen bg-[#faf9f8] flex items-center justify-center select-none"
    >
      {/* ========================================================================= */}
      {/* Background Concentric Radar Rings                                         */}
      {/* ========================================================================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 flex items-center justify-center">
        <div className="relative w-[1100px] sm:w-[1450px] lg:w-[1780px] xl:w-[1950px] h-[1100px] sm:h-[1450px] lg:h-[1780px] xl:h-[1950px] flex items-center justify-center">
          
          {/* Outer Ambient Ring */}
          <div className="absolute inset-0 rounded-full border border-[#060612]/[0.04] animate-radar-pulse" />
          
          {/* Main Orbit Ring */}
          <div className="absolute inset-16 sm:inset-28 lg:inset-36 rounded-full border border-[#060612]/[0.08] shadow-[0_0_80px_rgba(255,99,33,0.03)]" />

          {/* Inner Dashed Ring */}
          <div className="absolute inset-36 sm:inset-56 lg:inset-72 rounded-full border border-[#060612]/[0.06] border-dashed" />
          
          {/* Core Accent Ring */}
          <div className="absolute inset-56 sm:inset-80 lg:inset-[26rem] rounded-full border border-[#ff6321]/15" />

          {/* Radar Marker Nodes */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#ff6321] opacity-60 animate-ping" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#060612] opacity-40" />
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[#ff6321] opacity-50" />

        </div>
      </div>

      {/* ========================================================================= */}
      {/* Orbiting Brand & Local SEO Logos (Blur Reveal AFTER Texts Reveal, 2x Slow) */}
      {/* Positioned on Left and Right flanks so they are 100% visible and not hidden */}
      {/* ========================================================================= */}
      <div className="hidden lg:block pointer-events-none absolute inset-0 z-20 max-w-[1720px] mx-auto">
        
        {/* 1. Elementor Logo (Upper-Left Flank) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.65, filter: 'blur(16px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[1.5%] xl:left-[3%] 2xl:left-[4.5%] top-[17%] pointer-events-auto"
          title="Elementor Pro"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, -3, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-13 h-13 xl:w-15 xl:h-15 rounded-full bg-white/95 backdrop-blur-md border border-[#e7e2dd] shadow-xl hover:border-[#ff6321] hover:scale-115 transition-all duration-300 cursor-pointer flex items-center justify-center p-2.5 sm:p-3 group shrink-0"
          >
            <img
              src="/logos/elementor.png"
              alt="Elementor"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform"
            />
          </motion.div>
        </motion.div>

        {/* 2. WordPress Logo (Mid-Left Flank) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.65, filter: 'blur(16px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 2.75, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[4.5%] xl:left-[6.5%] 2xl:left-[8.5%] top-[45%] pointer-events-auto"
          title="WordPress"
        >
          <motion.div
            animate={{
              y: [0, -9, 0],
              x: [0, 4, 0],
              rotate: [0, 2.5, 0],
            }}
            transition={{
              duration: 10.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-white/95 backdrop-blur-md border border-[#e7e2dd] shadow-xl hover:border-[#ff6321] hover:scale-115 transition-all duration-300 cursor-pointer flex items-center justify-center p-2 sm:p-2.5 group shrink-0"
          >
            <img
              src="/logos/wordpress.png"
              alt="WordPress"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform"
            />
          </motion.div>
        </motion.div>

        {/* 3. Webflow Logo (Upper-Right Flank) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.65, filter: 'blur(16px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 2.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-[1.5%] xl:right-[3%] 2xl:right-[4.5%] top-[17%] pointer-events-auto"
          title="Webflow"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              x: [0, 3, 0],
              rotate: [0, 3, 0],
            }}
            transition={{
              duration: 9.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
            className="w-13 h-13 xl:w-15 xl:h-15 rounded-full bg-white/95 backdrop-blur-md border border-[#e7e2dd] shadow-xl hover:border-[#ff6321] hover:scale-115 transition-all duration-300 cursor-pointer flex items-center justify-center p-3 sm:p-3.5 group shrink-0"
          >
            <img
              src="/logos/webflow.png"
              alt="Webflow"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform"
            />
          </motion.div>
        </motion.div>

        {/* 4. Moz Local SEO (Mid-Right Flank) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.65, filter: 'blur(16px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 3.05, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-[4.5%] xl:right-[6.5%] 2xl:right-[8.5%] top-[45%] pointer-events-auto"
          title="Moz Local SEO"
        >
          <motion.div
            animate={{
              y: [0, -9, 0],
              x: [0, -4, 0],
              rotate: [0, -2.5, 0],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.7,
            }}
            className="w-14 h-14 xl:w-16 xl:h-16 rounded-full bg-white/95 backdrop-blur-md border border-[#e7e2dd] shadow-xl hover:border-[#ff6321] hover:scale-115 transition-all duration-300 cursor-pointer flex items-center justify-center p-3 sm:p-3.5 group shrink-0"
          >
            <img
              src="/logos/moz.png"
              alt="Moz Local SEO"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform"
            />
          </motion.div>
        </motion.div>

        {/* 5. Growth Analytics Chart (Lower-Right Flank) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.65, filter: 'blur(16px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-[1.5%] xl:right-[2.5%] 2xl:right-[4%] top-[67%] pointer-events-auto"
          title="Local Growth Analytics"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              x: [0, 3, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.9,
            }}
            className="w-13 h-13 xl:w-15 xl:h-15 rounded-full bg-white/95 backdrop-blur-md border border-[#e7e2dd] shadow-xl hover:border-[#ff6321] hover:scale-115 transition-all duration-300 cursor-pointer flex items-center justify-center p-3 group shrink-0"
          >
            <img
              src="/logos/growth-chart.png"
              alt="Local Growth Analytics"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform"
            />
          </motion.div>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* Hero Content: 2x Slower Smooth Blur Reveal Animations                     */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-6xl xl:max-w-7xl mx-auto text-center px-4 sm:px-6 space-y-5 sm:space-y-6 lg:space-y-7 -translate-y-2 sm:-translate-y-3">
        
        {/* Eyebrow Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#e7e2dd] shadow-2xs whitespace-nowrap shrink-0 mx-auto"
        >
          <span className="w-2 h-2 rounded-full bg-[#ff6321] animate-ping shrink-0" />
          <span className="text-body-sm font-mono text-[#060612] font-semibold uppercase tracking-wider whitespace-nowrap">
            DIGITAL GROWTH & WEB ENGINEERING
          </span>
        </motion.div>

        {/* Main Headline: Word-by-Word & Wide Pill Image Badges Reveal */}
        <h1 className="font-heading font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] text-[#060612] tracking-tight leading-[1.24] sm:leading-[1.18] max-w-5xl xl:max-w-6xl mx-auto">
          {/* Line 1: A Better Website [Wide Pill 1] Changes */}
          <span className="block whitespace-normal xl:whitespace-nowrap">
            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.50, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#060612]"
            >
              A
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.61, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#060612]"
            >
              Better
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#060612]"
            >
              Website
            </motion.span>

            {/* Wide Pill Image Badge 1: Sleek Laptop / Web Design UI (+20px Height) */}
            <motion.span
              initial={{ opacity: 0, scale: 0.75, filter: 'blur(16px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.83, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center justify-center align-middle mx-1.5 sm:mx-2.5 w-18 sm:w-22 xl:w-26 h-[46px] sm:h-[52px] xl:h-[58px] rounded-full overflow-hidden shadow-lg border-2 sm:border-[2.5px] border-white bg-[#060612] shrink-0 -translate-y-1 sm:-translate-y-1.5 hover:scale-106 transition-transform duration-300"
              title="Modern Web Experience"
            >
              <img
                src="/hero-badges/badge-developer.jpg"
                alt="Modern Web Experience"
                className="w-full h-full object-cover"
              />
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.94, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#060612]"
            >
              Changes
            </motion.span>
          </span>

          {/* Line 2: How People See [Interactive Tracking Dual Eyes] Your Business. */}
          <span className="block mt-2 sm:mt-3 whitespace-normal xl:whitespace-nowrap">
            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#060612]"
            >
              How
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 1.16, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#060612]"
            >
              People
            </motion.span>

            {/* Interactive Mouse-Tracking Dual Eyes (👀 Emoji Style) replacing 'See' (+20px Height) */}
            <motion.span
              initial={{ opacity: 0, scale: 0.75, filter: 'blur(16px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 1.27, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center justify-center align-middle"
            >
              <TrackingEyes />
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 1.38, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#ff6321]"
            >
              Your
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 1.49, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em] sm:mr-[0.28em] text-[#ff6321]"
            >
              Business.
            </motion.span>
          </span>
        </h1>

        {/* Subheading: Word-by-Word Blur-to-Focus Reveal */}
        <p className="text-body-lg text-[#69686e] max-w-3xl mx-auto font-body font-normal leading-relaxed">
          {'We build premium digital experiences that make your brand more credible, your message clearer, and your customers more confident to take action.'
            .split(' ')
            .map((word, i) => (
              <motion.span
                key={`sub-w-${i}`}
                initial={{ opacity: 0, y: 12, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 1.0,
                  delay: 1.55 + i * 0.055,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block mr-[0.26em]"
              >
                {word}
              </motion.span>
            ))}
        </p>

        {/* Dual Action CTA Buttons (Reveals After Subheading) */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 2.9 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2 whitespace-nowrap"
        >
          <PillButton
            variant="coral"
            size="lg"
            href="/contact"
            showArrow={true}
            className="shadow-lg whitespace-nowrap shrink-0"
          >
            Book a call
          </PillButton>

          <PillButton
            variant="dark"
            size="lg"
            href="#works"
            showArrow={true}
            className="shadow-sm whitespace-nowrap shrink-0"
          >
            Our work
          </PillButton>
        </motion.div>

        {/* 5-Star Social Proof Row (Reveals After CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 3.1 }}
          className="flex items-center justify-center gap-3 pt-1 whitespace-nowrap shrink-0"
        >
          <div className="flex text-[#ff6321] gap-0.5 shrink-0">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current shrink-0" />
            ))}
          </div>
          <span className="text-body-sm font-medium text-[#060612] whitespace-nowrap">
            5.0 <span className="text-[#69686e]">(from 140+ verified client deployments)</span>
          </span>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* Full-Width Intersecting Infinite Marquee (Anchored at bottom, z-40 on top of next section) */}
      {/* ========================================================================= */}
      <div className="absolute bottom-0 inset-x-0 z-40 w-full pointer-events-none translate-y-[35%] sm:translate-y-[38%]">
        <div className="relative h-36 sm:h-44 w-full flex items-center justify-center">
          
          {/* Black Ribbon: Angled diagonally upward-right (+2.6deg), moving right */}
          <div
            className="absolute w-[200vw] left-1/2 -translate-x-1/2 bg-[#060612] text-white py-3.5 sm:py-4.5 shadow-[0_20px_45px_rgba(0,0,0,0.45)] z-20 overflow-hidden select-none"
            style={{ transform: 'rotate(2.6deg)' }}
          >
            <div className="animate-ticker-right flex items-center whitespace-nowrap select-none">
              {/* Set A (50%) */}
              <div className="flex items-center shrink-0">
                {standardsList.map((text, i) => (
                  <div key={i} className="flex items-center gap-5 sm:gap-7 mx-3 sm:mx-4 shrink-0">
                    <span className="font-heading font-medium text-base sm:text-xl text-white tracking-tight uppercase whitespace-nowrap">
                      {text}
                    </span>
                    <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current shrink-0 text-[#ff6321]">
                      <path d="M8 0L14 8L8 16L2 8L8 0Z" />
                    </svg>
                  </div>
                ))}
              </div>
              {/* Set B (50% - duplicate for seamless continuous looping) */}
              <div className="flex items-center shrink-0">
                {standardsList.map((text, i) => (
                  <div key={`dup-${i}`} className="flex items-center gap-5 sm:gap-7 mx-3 sm:mx-4 shrink-0">
                    <span className="font-heading font-medium text-base sm:text-xl text-white tracking-tight uppercase whitespace-nowrap">
                      {text}
                    </span>
                    <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current shrink-0 text-[#ff6321]">
                      <path d="M8 0L14 8L8 16L2 8L8 0Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Orange Ribbon: Angled diagonally downward-right (-2.6deg), crossing black ribbon */}
          <div
            className="absolute w-[200vw] left-1/2 -translate-x-1/2 bg-[#ff6321] text-white py-3.5 sm:py-4.5 shadow-[0_25px_50px_rgba(255,99,33,0.45)] z-30 overflow-hidden select-none"
            style={{ transform: 'rotate(-2.6deg)' }}
          >
            <div className="animate-ticker-left flex items-center whitespace-nowrap select-none">
              {/* Set A (50%) */}
              <div className="flex items-center shrink-0">
                {servicesList.map((service, i) => (
                  <div key={i} className="flex items-center gap-5 sm:gap-7 mx-3 sm:mx-4 shrink-0">
                    <span className="font-heading font-medium text-base sm:text-xl text-white tracking-tight uppercase whitespace-nowrap">
                      {service}
                    </span>
                    <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current shrink-0 text-[#060612]">
                      <path d="M8 0L14 8L8 16L2 8L8 0Z" />
                    </svg>
                  </div>
                ))}
              </div>
              {/* Set B (50% - duplicate for seamless continuous looping) */}
              <div className="flex items-center shrink-0">
                {servicesList.map((service, i) => (
                  <div key={`dup-${i}`} className="flex items-center gap-5 sm:gap-7 mx-3 sm:mx-4 shrink-0">
                    <span className="font-heading font-medium text-base sm:text-xl text-white tracking-tight uppercase whitespace-nowrap">
                      {service}
                    </span>
                    <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current shrink-0 text-[#060612]">
                      <path d="M8 0L14 8L8 16L2 8L8 0Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
