'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLenis } from '@/components/providers/SmoothScrollProvider';

interface PageLoaderProps {
  onComplete: () => void;
}

export function PageLoader({ onComplete }: PageLoaderProps) {
  const [count, setCount] = useState(0);
  const { lockScroll } = useLenis();

  useEffect(() => {
    lockScroll(true);

    const FILL_MS = 1300;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / FILL_MS, 1);
      
      // easeInOutCubic
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;

      const currentCount = Math.floor(eased * 100);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setTimeout(() => {
          lockScroll(false);
          onComplete();
        }, 280);
      }
    };

    const frameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete, lockScroll]);

  const formattedCount = count.toString().padStart(3, '0');

  return (
    <motion.div
      initial={{ y: '0%' }}
      exit={{
        y: '-100%',
        transition: {
          type: 'spring' as const,
          stiffness: 220,
          damping: 30,
        },
      }}
      className="fixed inset-x-0 top-0 h-screen z-[120] bg-[#0a0a0a] text-white flex flex-col justify-between p-8 sm:p-14 rounded-b-[2rem] shadow-2xl select-none"
    >
      {/* Top Telemetry */}
      <div className="flex items-center justify-between text-xs font-mono text-[#8d8d8d]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#cf8047] pulse-dot" />
          <span>APEXSTUDIO // CORE INITIALIZATION</span>
        </div>
        <div>EST. 2018 · WORLDWIDE</div>
      </div>

      {/* Center Brand Row */}
      <div className="my-auto flex flex-col items-center justify-center text-center space-y-4">
        {/* Apex 4-Point Spark LogoMark */}
        <div className="w-12 h-12 flex items-center justify-center text-[#cf8047]">
          <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
            <path d="M24 2c2.2 13.8 7.9 19.6 22 22-14.1 2.4-19.8 8.2-22 22-2.2-13.8-7.9-19.6-22-22 14.1-2.4 19.8-8.2 22-22Z" />
          </svg>
        </div>

        <div>
          <h1 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
            ApexStudio
          </h1>
          <p className="text-xs sm:text-sm text-[#8d8d8d] font-sans mt-1.5">
            Engineering digital ecosystems & market dominance.
          </p>
        </div>

        {/* Progress block & 3-Digit Tabular Counter */}
        <div className="pt-6 space-y-3 w-[min(22rem,72vw)]">
          <div className="w-full h-[1px] bg-white/10 overflow-hidden relative">
            <motion.div
              className="h-full bg-[#cf8047]"
              style={{ width: `${count}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <div className="font-mono text-4xl sm:text-5xl font-bold tracking-tighter text-white">
            {formattedCount}
            <span className="text-lg sm:text-xl text-[#cf8047] ml-1">%</span>
          </div>
        </div>
      </div>

      {/* Bottom info */}
      <div className="flex items-center justify-between text-[11px] font-mono text-[#8d8d8d]">
        <span>WORDPRESS · WEBFLOW · TECHNICAL SEO · LOCAL 3-PACK</span>
        <span>STATUS: 200 OK</span>
      </div>
    </motion.div>
  );
}
