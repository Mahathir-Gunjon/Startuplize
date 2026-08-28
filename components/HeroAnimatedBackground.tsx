"use client";

import React, { useEffect, useRef } from "react";

export default function HeroAnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes for floating ambient energy
    const particlesCount = 45;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
    }> = [];

    const colors = ["#00D28F", "#33FFBA", "#00B87D", "#5CFFD0", "#10B981"];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        alpha: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Glowing wave / beam parameters
    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw floating particles with connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect nearby particles with subtle mint threads
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "#00D28F";
            ctx.globalAlpha = (1 - dist / 130) * 0.15;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* 1. Canvas Interactive Glowing Particles & Kinetic Links */}
      <canvas ref={canvasRef} className="w-full h-full absolute inset-0 opacity-80" />

      {/* 2. Primary Massive Mint Aurora Blob (Rotating & Floating Top Left) */}
      <div className="absolute -top-40 -left-40 w-[950px] h-[950px] bg-gradient-to-br from-[#00D28F]/30 via-emerald-600/18 to-transparent rounded-full blur-[170px] animate-floatOrb1" />

      {/* 3. Secondary Cyan/Mint Aurora Blob (Center Pulsing Orbit) */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-[#00B87D]/25 via-[#33FFBA]/20 to-transparent rounded-full blur-[200px] animate-floatOrb2" />

      {/* 4. Tertiary Deep Emerald Nebula (Bottom Right Pulsing Light) */}
      <div className="absolute -bottom-40 right-0 w-[1000px] h-[850px] bg-gradient-to-tl from-[#00D28F]/30 via-teal-900/25 to-transparent rounded-full blur-[190px] animate-pulseGlow" />

      {/* 5. Animated Scanning Glowing Light Wave Bar */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,210,143,0.06)_50%,transparent_100%)] bg-[length:100%_400px] animate-marquee-vertical-up opacity-60" />

      {/* 6. Dynamic High-Tech Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] opacity-50" />

      {/* 7. Radial Top Green Light Cone Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_-15%,rgba(0,210,143,0.28),rgba(255,255,255,0))]" />
    </div>
  );
}
