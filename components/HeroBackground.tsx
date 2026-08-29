"use client";

import React, { useEffect, useRef } from "react";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Mouse coordinates with easing
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 260,
      active: false,
    };

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Particle Wave Grid Structure
    const cols = 55;
    const rows = 32;
    let time = 0;

    // Floating energetic embers
    const embers: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      maxAlpha: number;
      hue: string;
    }> = [];

    for (let i = 0; i < 40; i++) {
      embers.push({
        x: Math.random() * (width || 1200),
        y: Math.random() * (height || 800),
        vx: (Math.random() - 0.5) * 0.7,
        vy: -Math.random() * 0.9 - 0.3,
        size: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.6,
        maxAlpha: Math.random() * 0.7 + 0.3,
        hue: Math.random() > 0.3 ? "#00D28F" : "#33FFBA",
      });
    }

    const render = () => {
      time += 0.022;

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // 1. Deep Ambient Radial Aurora Glows
      const auroraGradient = ctx.createRadialGradient(
        width * 0.65 + Math.sin(time * 0.5) * 120,
        height * 0.45 + Math.cos(time * 0.4) * 80,
        40,
        width * 0.6,
        height * 0.4,
        Math.max(width, height) * 0.75
      );
      auroraGradient.addColorStop(0, "rgba(0, 210, 143, 0.18)");
      auroraGradient.addColorStop(0.35, "rgba(0, 120, 80, 0.09)");
      auroraGradient.addColorStop(0.7, "rgba(5, 21, 17, 0.04)");
      auroraGradient.addColorStop(1, "rgba(10, 10, 10, 0)");

      ctx.fillStyle = auroraGradient;
      ctx.fillRect(0, 0, width, height);

      // Interactive Cursor Spotlight Glow
      if (mouse.active) {
        const mouseGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.5
        );
        mouseGlow.addColorStop(0, "rgba(0, 245, 160, 0.22)");
        mouseGlow.addColorStop(0.5, "rgba(0, 210, 143, 0.08)");
        mouseGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = mouseGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. 3D Mathematical Wave Grid Simulation
      const spacingX = width / (cols - 1);
      const spacingY = height / (rows - 1);

      const gridPoints: Array<Array<{ x: number; y: number; z: number; alpha: number }>> = [];

      for (let r = 0; r < rows; r++) {
        gridPoints[r] = [];
        for (let c = 0; c < cols; c++) {
          const baseX = c * spacingX;
          const baseY = r * spacingY;

          // Harmonic 3D wave mathematics
          const wave1 = Math.sin(c * 0.22 + time + r * 0.15) * 22;
          const wave2 = Math.cos(r * 0.28 - time * 0.8 + c * 0.12) * 18;
          const wave3 = Math.sin((c + r) * 0.18 + time * 1.2) * 12;

          let z = wave1 + wave2 + wave3;
          let px = baseX;
          let py = baseY + z;

          // Interactive Cursor Repulsion & Ripple Distortion
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let mouseInfluence = 0;
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius);
            const angle = Math.atan2(dy, dx);
            px += Math.cos(angle) * force * 55;
            py += Math.sin(angle) * force * 55;
            mouseInfluence = force;
          }

          // Depth-based luminosity
          const normalizedZ = (z + 52) / 104;
          const baseAlpha = 0.12 + normalizedZ * 0.35 + mouseInfluence * 0.55;

          gridPoints[r][c] = {
            x: px,
            y: py,
            z: z,
            alpha: Math.min(Math.max(baseAlpha, 0.05), 0.95),
          };
        }
      }

      // 3. Connect Grid Lines (Horizontal & Vertical Wave Ribbons)
      ctx.lineWidth = 1;

      // Horizontal lines with neon pulse
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const pt = gridPoints[r][c];
          if (c === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            const prev = gridPoints[r][c - 1];
            const midX = (prev.x + pt.x) / 2;
            const midY = (prev.y + pt.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
          }
        }
        const rowAlpha = (gridPoints[r][Math.floor(cols / 2)]?.alpha || 0.2) * 0.5;
        ctx.strokeStyle = `rgba(0, 210, 143, ${Math.min(rowAlpha, 0.45)})`;
        ctx.stroke();
      }

      // 4. Render Glowing Particle Nodes
      for (let r = 0; r < rows; r += 2) {
        for (let c = 0; c < cols; c += 2) {
          const pt = gridPoints[r][c];
          const nodeRadius = 1.2 + (pt.z + 52) / 65;

          // Glowing Mint Node
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, nodeRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(51, 255, 186, ${pt.alpha})`;
          ctx.fill();

          // Extra luminous glow on crests or near cursor
          if (pt.alpha > 0.5) {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, nodeRadius * 2.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 210, 143, ${pt.alpha * 0.25})`;
            ctx.fill();
          }
        }
      }

      // 5. Floating Ambient Embers
      for (let i = 0; i < embers.length; i++) {
        const ember = embers[i];
        ember.x += ember.vx + Math.sin(time + i) * 0.3;
        ember.y += ember.vy;

        if (ember.y < -10) {
          ember.y = height + 10;
          ember.x = Math.random() * width;
        }
        if (ember.x < -10) ember.x = width + 10;
        if (ember.x > width + 10) ember.x = -10;

        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
        ctx.fillStyle = ember.hue;
        ctx.globalAlpha = ember.alpha * (0.8 + Math.sin(time * 3 + i) * 0.2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none select-none bg-[#0A0A0A]">
      {/* High-Performance Interactive 3D Wave & Light Shader Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* Cybernetic Ambient Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_45%,#000_65%,transparent_100%)] opacity-35" />

      {/* Cinematic Radial Vignette (Preserving absolute text contrast & readability) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(10,10,10,0.4)_0%,rgba(10,10,10,0.8)_60%,rgba(10,10,10,0.95)_100%)]" />
    </div>
  );
}
