'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [telemetry, setTelemetry] = useState('INITIALIZING HYPERGROWTH ENGINES...');

  useEffect(() => {
    const duration = 1600; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Custom easeOutCubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easedProgress * 100);

      setCount(currentCount);

      if (currentCount < 30) {
        setTelemetry('INITIALIZING WP & WEBFLOW ENGINE...');
      } else if (currentCount < 65) {
        setTelemetry('CALIBRATING JSON-LD ENTITY SCHEMA...');
      } else if (currentCount < 90) {
        setTelemetry('OPTIMIZING LOCAL 3-PACK GEO-GRIDS...');
      } else {
        setTelemetry('SUB-SECOND ARCHITECTURE READY.');
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setTimeout(() => {
          onComplete();
        }, 350);
      }
    };

    const frameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  // Format with zero-padding (e.g. 000, 042, 100)
  const formattedCount = count.toString().padStart(3, '0');

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: '-100%',
        transition: {
          duration: 0.95,
          ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
        },
      }}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#08090C] p-6 md:p-12 text-[#F3F4F6] select-none"
    >
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E06927]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top telemetry bar */}
      <div className="relative z-10 flex items-center justify-between text-xs tracking-widest text-[#9CA3AF] uppercase font-mono">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] radar-ping" />
          <span>VANGUARD DIGITAL ARCHITECTURE</span>
        </div>
        <div className="hidden sm:block">SYSTEM BUILD V4.9 // NEXT.JS 15</div>
        <div>SYS_STATUS: 200_OK</div>
      </div>

      {/* Center massive digital counter */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center">
        <div className="overflow-hidden">
          <span className="font-display font-extrabold text-7xl sm:text-9xl md:text-[13rem] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40">
            {formattedCount}
            <span className="text-3xl sm:text-5xl md:text-7xl text-[#E06927] ml-2 font-mono">
              %
            </span>
          </span>
        </div>

        {/* Telemetry live status */}
        <div className="mt-4 sm:mt-6 flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-[#E06927] rounded-full animate-ping" />
          <p className="font-mono text-xs sm:text-sm tracking-widest text-[#9CA3AF]">
            {telemetry}
          </p>
        </div>
      </div>

      {/* Bottom hairline progress bar & signature */}
      <div className="relative z-10 space-y-4">
        <div className="relative h-[2px] w-full bg-white/10 overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-gradient-to-r from-[#E06927] via-[#2563EB] to-[#10B981]"
            style={{ width: `${count}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>

        <div className="flex items-center justify-between text-xs text-[#9CA3AF]/60 font-mono">
          <span>HIGH-PERFORMANCE WORDPRESS • WEBFLOW • TECHNICAL SEO • LOCAL 3-PACK</span>
          <span>© {new Date().getFullYear()} VANGUARD™</span>
        </div>
      </div>
    </motion.div>
  );
}
