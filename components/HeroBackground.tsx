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

    // Mouse coordinates with smooth easing
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
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
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX - width / 2) / (width / 2);
      mouse.targetY = (clientY - height / 2) / (height / 2);
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    // Mathematical parameters for ONE Massive 3D Fluid Liquid Torus / Celestial Sphere
    const sphereRings = 42;
    const pointsPerRing = 58;

    const render = () => {
      time += 0.018;

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Center position of the ONE giant 3D element (balanced toward center-right)
      const isMobile = width < 768;
      const centerX = isMobile ? width * 0.5 : width * 0.68;
      const centerY = isMobile ? height * 0.5 : height * 0.48;
      const baseRadius = isMobile ? Math.min(width, height) * 0.38 : Math.min(width, height) * 0.42;

      // 1. Ambient Volumetric Backlight Glow for the Big Element
      const ambientGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        baseRadius * 0.2,
        centerX,
        centerY,
        baseRadius * 1.7
      );
      ambientGlow.addColorStop(0, "rgba(0, 210, 143, 0.22)");
      ambientGlow.addColorStop(0.4, "rgba(0, 150, 100, 0.1)");
      ambientGlow.addColorStop(0.8, "rgba(5, 21, 17, 0.03)");
      ambientGlow.addColorStop(1, "rgba(10, 10, 10, 0)");

      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // 2. 3D Rotation Matrix with mouse parallax
      const rotX = time * 0.35 + mouse.y * 0.6;
      const rotY = time * 0.5 + mouse.x * 0.8;
      const rotZ = Math.sin(time * 0.25) * 0.2;

      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

      // 3. Generate and project 3D wireframe points of the ONE massive liquid sphere
      const projectedRings: Array<Array<{ x: number; y: number; z: number; alpha: number }>> = [];

      for (let i = 0; i < sphereRings; i++) {
        const u = (i / (sphereRings - 1)) * Math.PI; // Latitude 0 to PI
        projectedRings[i] = [];

        for (let j = 0; j < pointsPerRing; j++) {
          const v = (j / pointsPerRing) * Math.PI * 2; // Longitude 0 to 2PI

          // Organic harmonic liquid surface undulation
          const noise =
            Math.sin(u * 4 + time * 1.5 + v * 3) * 0.12 +
            Math.cos(v * 5 - time * 1.2 + u * 2) * 0.09 +
            Math.sin((u + v) * 3 + time * 2) * 0.06;

          const r = baseRadius * (1 + noise);

          // 3D Cartesian coordinates
          let x0 = r * Math.sin(u) * Math.cos(v);
          let y0 = r * Math.cos(u);
          let z0 = r * Math.sin(u) * Math.sin(v);

          // Rotate Y
          let x1 = x0 * cosY + z0 * sinY;
          let y1 = y0;
          let z1 = -x0 * sinY + z0 * cosY;

          // Rotate X
          let x2 = x1;
          let y2 = y1 * cosX - z1 * sinX;
          let z2 = y1 * sinX + z1 * cosX;

          // Rotate Z
          let x3 = x2 * cosZ - y2 * sinZ;
          let y3 = x2 * sinZ + y2 * cosZ;
          let z3 = z2;

          // Perspective Projection
          const fov = 750;
          const scale = fov / (fov + z3 + baseRadius);
          const px = centerX + x3 * scale;
          const py = centerY + y3 * scale;

          // Depth-based luminosity & rim lighting
          const depthNorm = (z3 + baseRadius) / (baseRadius * 2);
          const alpha = Math.min(Math.max(0.08 + depthNorm * 0.7, 0.05), 0.95);

          projectedRings[i].push({
            x: px,
            y: py,
            z: z3,
            alpha: alpha,
          });
        }
      }

      // 4. Render Ring Ribbons (Latitude curves)
      ctx.lineWidth = 1.2;

      for (let i = 1; i < sphereRings - 1; i += 2) {
        ctx.beginPath();
        const ring = projectedRings[i];
        for (let j = 0; j <= pointsPerRing; j++) {
          const pt = ring[j % pointsPerRing];
          if (j === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            const prev = ring[(j - 1) % pointsPerRing];
            const midX = (prev.x + pt.x) / 2;
            const midY = (prev.y + pt.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
          }
        }
        const samplePt = ring[0];
        const ringAlpha = Math.min(samplePt.alpha * 0.7, 0.6);
        ctx.strokeStyle = `rgba(0, 210, 143, ${ringAlpha})`;
        ctx.stroke();
      }

      // 5. Render Longitude Meridian Ribbons
      for (let j = 0; j < pointsPerRing; j += 3) {
        ctx.beginPath();
        for (let i = 0; i < sphereRings; i++) {
          const pt = projectedRings[i][j];
          if (i === 0) {
            ctx.moveTo(pt.x, pt.y);
          } else {
            const prev = projectedRings[i - 1][j];
            const midX = (prev.x + pt.x) / 2;
            const midY = (prev.y + pt.y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
          }
        }
        const midPt = projectedRings[Math.floor(sphereRings / 2)][j];
        const meridianAlpha = Math.min(midPt.alpha * 0.55, 0.5);
        ctx.strokeStyle = `rgba(51, 255, 186, ${meridianAlpha})`;
        ctx.stroke();
      }

      // 6. Glowing Luminous Nodes on Crests & Rim
      for (let i = 2; i < sphereRings - 2; i += 3) {
        for (let j = 0; j < pointsPerRing; j += 4) {
          const pt = projectedRings[i][j];
          if (pt.z > 0) {
            // Front facing nodes
            const nodeSize = 1.2 + (pt.z / baseRadius) * 1.8;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, nodeSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(51, 255, 186, ${pt.alpha})`;
            ctx.fill();

            // Luminous halo on closest nodes
            if (pt.z > baseRadius * 0.4) {
              ctx.beginPath();
              ctx.arc(pt.x, pt.y, nodeSize * 2.8, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(0, 210, 143, ${pt.alpha * 0.28})`;
              ctx.fill();
            }
          }
        }
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
      {/* High-Performance Canvas Rendering ONE Massive 3D Liquid Sphere */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* Cybernetic Ambient Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_45%,#000_65%,transparent_100%)] opacity-35" />

      {/* Cinematic Radial Vignette (Guarantees 100% crisp typography on the left) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(10,10,10,0.35)_0%,rgba(10,10,10,0.75)_60%,rgba(10,10,10,0.95)_100%)]" />
    </div>
  );
}
