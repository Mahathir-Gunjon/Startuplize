'use client';

import React, { useEffect, useRef } from 'react';

export function HeroLiquidRevealCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Offscreen mask canvas for pointer brush stamping and gradual decay
    const trailCanvas = document.createElement('canvas');
    trailCanvas.width = width;
    trailCanvas.height = height;
    const trailCtx = trailCanvas.getContext('2d');

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      trailCanvas.width = width;
      trailCanvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    // Dynamic particles that spawn when cursor moves
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }
    const particles: Particle[] = [];

    const brushRadius = 140;
    const decay = 0.025;

    let mouse = {
      x: width * 0.65,
      y: height * 0.45,
      prevX: width * 0.65,
      prevY: height * 0.45,
      isHovered: false,
      speed: 0,
    };

    const stampBrush = (x: number, y: number, r: number = brushRadius) => {
      if (!trailCtx) return;
      
      const grad = trailCtx.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, 'rgba(207, 128, 71, 0.45)');
      grad.addColorStop(0.4, 'rgba(177, 95, 44, 0.28)');
      grad.addColorStop(0.75, 'rgba(151, 80, 31, 0.1)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      trailCtx.fillStyle = grad;
      trailCtx.beginPath();
      trailCtx.arc(x, y, r, 0, Math.PI * 2);
      trailCtx.fill();
    };

    const spawnParticles = (x: number, y: number, count: number = 3) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 0.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5,
          size: Math.random() * 2.5 + 1,
          alpha: 0.8,
          color: Math.random() > 0.5 ? '#cf8047' : '#b15f2c',
        });
      }
      if (particles.length > 80) particles.splice(0, particles.length - 80);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = e.clientX - rect.left;
      const newY = e.clientY - rect.top;
      
      const dx = newX - mouse.prevX;
      const dy = newY - mouse.prevY;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);

      mouse.x = newX;
      mouse.y = newY;
      mouse.isHovered = true;

      // Stamp trail along movement path
      const steps = Math.min(Math.ceil(mouse.speed / 15), 10);
      for (let i = 0; i <= steps; i++) {
        const t = steps > 0 ? i / steps : 1;
        const px = mouse.prevX + dx * t;
        const py = mouse.prevY + dy * t;
        stampBrush(px, py, brushRadius * (0.8 + Math.random() * 0.4));
      }

      if (mouse.speed > 4) {
        spawnParticles(newX, newY, 2);
      }

      mouse.prevX = newX;
      mouse.prevY = newY;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Initial ambient reveal
    stampBrush(width * 0.7, height * 0.45, 200);
    stampBrush(width * 0.55, height * 0.55, 180);

    let time = 0;

    const render = () => {
      time += 0.015;

      // 1. Decay the trail canvas
      if (trailCtx) {
        trailCtx.save();
        trailCtx.globalCompositeOperation = 'destination-out';
        trailCtx.fillStyle = `rgba(0, 0, 0, ${decay})`;
        trailCtx.fillRect(0, 0, width, height);
        trailCtx.restore();
      }

      // If mouse is stationary inside canvas, keep soft stamp
      if (mouse.isHovered) {
        stampBrush(mouse.x, mouse.y, brushRadius * 0.7);
      }

      // 2. Clear main canvas
      ctx.clearRect(0, 0, width, height);

      // 3. Draw architectural base grid (subtle, clean, luxury feeling)
      ctx.save();
      const gridSize = 48;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.035)';
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw subtle coordinate crosses
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      for (let x = gridSize * 2; x < width - gridSize; x += gridSize * 4) {
        for (let y = gridSize * 2; y < height - gridSize; y += gridSize * 4) {
          ctx.fillRect(x - 3, y, 7, 1);
          ctx.fillRect(x, y - 3, 1, 7);
        }
      }
      ctx.restore();

      // 4. Composite the brush trail (liquid amber glow reveal)
      ctx.save();
      ctx.drawImage(trailCanvas, 0, 0);
      ctx.restore();

      // 5. Render animated particles
      ctx.save();
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.018;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ touchAction: 'none' }}
    />
  );
}
