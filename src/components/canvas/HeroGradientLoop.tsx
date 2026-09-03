'use client';

import React, { useEffect, useRef } from 'react';

export function HeroGradientLoop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    let time = 0;

    const render = () => {
      time += 0.008;

      ctx.clearRect(0, 0, width, height);

      // Base background fill: pure light alabaster stone
      ctx.fillStyle = '#f5f4f0';
      ctx.fillRect(0, 0, width, height);

      // Smooth oscillating gradient coordinates (replicates continuous looping ambient video)
      const cx1 = width * (0.68 + 0.12 * Math.sin(time * 0.7));
      const cy1 = height * (0.35 + 0.15 * Math.cos(time * 0.9));
      const r1 = Math.min(width, height) * 0.65;

      const grad1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, r1);
      grad1.addColorStop(0, 'rgba(207, 128, 71, 0.26)');
      grad1.addColorStop(0.45, 'rgba(177, 95, 44, 0.14)');
      grad1.addColorStop(0.8, 'rgba(245, 244, 240, 0.05)');
      grad1.addColorStop(1, 'rgba(245, 244, 240, 0)');

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const cx2 = width * (0.28 + 0.14 * Math.cos(time * 0.6));
      const cy2 = height * (0.65 + 0.12 * Math.sin(time * 0.8));
      const r2 = Math.min(width, height) * 0.55;

      const grad2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, r2);
      grad2.addColorStop(0, 'rgba(232, 168, 124, 0.22)');
      grad2.addColorStop(0.5, 'rgba(207, 128, 71, 0.08)');
      grad2.addColorStop(1, 'rgba(245, 244, 240, 0)');

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      const cx3 = width * (0.85 + 0.1 * Math.sin(time * 0.5 + 2));
      const cy3 = height * (0.75 + 0.12 * Math.cos(time * 0.7 + 1));
      const r3 = Math.min(width, height) * 0.45;

      const grad3 = ctx.createRadialGradient(cx3, cy3, 0, cx3, cy3, r3);
      grad3.addColorStop(0, 'rgba(177, 95, 44, 0.18)');
      grad3.addColorStop(0.6, 'rgba(245, 244, 240, 0.04)');
      grad3.addColorStop(1, 'rgba(245, 244, 240, 0)');

      ctx.fillStyle = grad3;
      ctx.fillRect(0, 0, width, height);

      // Swiss Design Signature: Precise geometric grid lines (subtle, non-distracting)
      ctx.save();
      const colStep = width / 12; // 12-column Swiss modular grid
      ctx.strokeStyle = 'rgba(10, 10, 10, 0.035)';
      ctx.lineWidth = 1;

      for (let x = colStep; x < width; x += colStep) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal baseline guides
      const rowStep = 96;
      for (let y = rowStep; y < height; y += rowStep) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Swiss alignment markers (+)
      ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
      for (let x = colStep; x < width; x += colStep * 2) {
        for (let y = rowStep; y < height; y += rowStep * 2) {
          ctx.fillRect(x - 3, y, 7, 1);
          ctx.fillRect(x, y - 3, 1, 7);
        }
      }
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      {/* Subtle organic noise/film texture to give video-grade warmth */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
