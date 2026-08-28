"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  // Smooth mouse coordinates for parallax mesh distortion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 60 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 25;
      const y = (e.clientY - innerHeight / 2) / 25;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none select-none bg-[#0A0A0A]">
      {/* =========================================================================
          1. HEAVY ANIMATED FLUID MESH ORBS (Framer Motion Infinite Organic Motion)
          ========================================================================= */}
      
      {/* Orb 1: Primary Electric Mint Center Fluid Core */}
      <motion.div
        style={{ x: smoothMouseX, y: smoothMouseY }}
        animate={{
          scale: [1, 1.25, 0.95, 1.15, 1],
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.45, 0.65, 0.4, 0.6, 0.45],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[500px] sm:h-[700px] bg-gradient-to-tr from-[#00D28F]/40 via-[#00B87D]/30 to-[#33FFBA]/20 rounded-full blur-[140px]"
      />

      {/* Orb 2: Top-Left Deep Emerald Fluid Vortex */}
      <motion.div
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
        }}
        animate={{
          x: [0, 80, -60, 40, 0],
          y: [0, -70, 50, -40, 0],
          scale: [1, 1.3, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-[650px] sm:w-[900px] h-[650px] sm:h-[900px] bg-gradient-to-br from-[#00D28F]/35 via-[#00543B]/30 to-[#051511]/40 rounded-full blur-[160px]"
      />

      {/* Orb 3: Bottom-Right Luminous Mint Aurora Blob */}
      <motion.div
        style={{
          x: smoothMouseX,
          y: smoothMouseY,
        }}
        animate={{
          x: [0, -90, 70, -50, 0],
          y: [0, 60, -80, 50, 0],
          scale: [1.1, 0.85, 1.25, 0.95, 1.1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 -right-32 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] bg-gradient-to-tl from-[#00D28F]/35 via-[#003828]/35 to-emerald-950/40 rounded-full blur-[170px]"
      />

      {/* Orb 4: Floating Cyan Wave Pulse in Midground */}
      <motion.div
        animate={{
          opacity: [0.25, 0.5, 0.25],
          scale: [0.9, 1.15, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/3 w-[500px] sm:w-[700px] h-[400px] sm:h-[600px] bg-[#33FFBA]/15 rounded-full blur-[180px]"
      />

      {/* =========================================================================
          2. FLOATING NEON PARTICLES & KINETIC SPARKS
          ========================================================================= */}
      <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#00D28F] shadow-[0_0_15px_#00D28F] animate-ping" />
      <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-[#33FFBA] shadow-[0_0_18px_#33FFBA] animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[#00D28F] shadow-[0_0_14px_#00D28F] animate-bounce" />
      <div className="absolute top-2/3 right-1/5 w-3 h-3 rounded-full bg-[#00D28F]/80 shadow-[0_0_20px_#00D28F] animate-pulse" />

      {/* =========================================================================
          3. KINETIC SCANNING LIGHT WAVE & GRID OVERLAY
          ========================================================================= */}
      {/* Moving Ambient Light Sweep */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,210,143,0.08)_50%,transparent_100%)] bg-[length:100%_500px] animate-marquee-vertical-up opacity-75" />

      {/* Modern Perspective Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_75%,transparent_100%)] opacity-40" />

      {/* =========================================================================
          4. CINEMATIC RADIAL VIGNETTE OVERLAY (Guarantees 100% Crisp Typography)
          ========================================================================= */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,10,10,0.3)_60%,rgba(10,10,10,0.92)_100%)]" />
    </div>
  );
}
