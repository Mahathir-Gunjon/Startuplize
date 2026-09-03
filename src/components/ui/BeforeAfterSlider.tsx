'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeStats?: {
    lcp: string;
    traffic: string;
    conversion: string;
  };
  afterStats?: {
    lcp: string;
    traffic: string;
    conversion: string;
  };
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'LEGACY SLOW THEME (4.8s LCP)',
  afterLabel = 'APEX HIGH-SPEED ENGINE (0.6s LCP)',
  beforeStats,
  afterStats,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    percentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleStart = () => setIsDragging(true);
  const handleEnd = () => setIsDragging(false);

  return (
    <div className="w-full space-y-4">
      {/* Slider Visual Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[320px] sm:h-[440px] md:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/10 shadow-2xl"
        onMouseDown={handleStart}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onMouseMove={handleMouseMove}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Full background layer) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="After Vanguard Optimization"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090C]/80 via-transparent to-black/30" />
          {/* After Tag */}
          <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-[#10B981]/90 backdrop-blur-md text-black font-mono font-bold text-xs flex items-center gap-1.5 shadow-lg">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {afterLabel}
          </div>
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <Image
            src={beforeImage}
            alt="Before Optimization"
            fill
            className="object-cover filter grayscale contrast-125 brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          {/* Before Tag */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-red-500/90 backdrop-blur-md text-white font-mono font-bold text-xs flex items-center gap-1.5 shadow-lg">
            <AlertTriangle className="w-3.5 h-3.5" />
            {beforeLabel}
          </div>
        </div>

        {/* Draggable Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0F1117] border-2 border-white flex items-center justify-center text-white shadow-[0_0_20px_rgba(224,105,39,0.5)]">
            <div className="flex items-center gap-1 text-[10px] font-bold tracking-tighter">
              <span>◀</span>
              <span>▶</span>
            </div>
          </div>
        </div>
      </div>

      {/* Real-time stats comparison cards under the slider */}
      {(beforeStats || afterStats) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {beforeStats && (
            <div className="glass-panel rounded-xl p-3.5 border-l-4 border-l-red-500 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-red-400 uppercase tracking-wider font-bold">
                  Legacy Architecture
                </span>
                <div className="text-xs text-[#9CA3AF] mt-0.5">LCP: {beforeStats.lcp} • CVR: {beforeStats.conversion}</div>
              </div>
              <span className="text-xs font-mono font-bold text-red-400">{beforeStats.traffic}</span>
            </div>
          )}
          {afterStats && (
            <div className="glass-panel rounded-xl p-3.5 border-l-4 border-l-[#10B981] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#10B981] uppercase tracking-wider font-bold">
                  Vanguard Engine
                </span>
                <div className="text-xs text-[#9CA3AF] mt-0.5">LCP: {afterStats.lcp} • CVR: {afterStats.conversion}</div>
              </div>
              <span className="text-xs font-mono font-bold text-[#10B981]">{afterStats.traffic}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
