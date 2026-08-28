"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// High-Impact GLSL Shader for Organic Liquid Mesh Gradient with Glowing Electric Mint Veins
const LiquidMeshShader = {
  uniforms: {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uColorDeep: { value: new THREE.Color("#03120E") },
    uColorEmerald: { value: new THREE.Color("#004D36") },
    uColorMint: { value: new THREE.Color("#00D28F") },
    uColorGlow: { value: new THREE.Color("#33FFBA") },
    uColorDark: { value: new THREE.Color("#0A0A0A") },
  },
  vertexShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;
    varying float vElevation;
    varying vec3 vNormal;

    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    void main() {
      vUv = uv;
      vNormal = normal;
      vec3 pos = position;

      // Mouse displacement interactive ripple
      float distToMouse = distance(uv, uMouse);
      float mouseWave = sin(distToMouse * 12.0 - uTime * 2.0) * smoothstep(0.5, 0.0, distToMouse) * 0.35;

      // Continuous organic multi-octave fluid wave
      float t = uTime * 0.35;
      float n1 = snoise(vec3(pos.x * 0.45 + t, pos.y * 0.45 - t * 0.8, t * 0.5));
      float n2 = snoise(vec3(pos.x * 0.9 - t * 0.6, pos.y * 0.9 + t * 0.4, t * 0.8));
      float n3 = snoise(vec3(pos.x * 1.8 + t * 0.4, pos.y * 1.8 - t * 0.3, t * 1.2)) * 0.5;

      float elevation = (n1 * 0.55 + n2 * 0.35 + n3 * 0.15) + mouseWave;
      pos.z += elevation * 1.1;
      vElevation = elevation;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec3 uColorDeep;
    uniform vec3 uColorEmerald;
    uniform vec3 uColorMint;
    uniform vec3 uColorGlow;
    uniform vec3 uColorDark;
    varying vec2 vUv;
    varying float vElevation;
    varying vec3 vNormal;

    void main() {
      // Dynamic breathing light pulse
      float pulse = sin(uTime * 0.6) * 0.5 + 0.5;
      
      // Base layer gradient: Deep dark to Emerald
      vec3 base = mix(uColorDark, uColorDeep, vUv.y * 0.7 + 0.3);
      
      // Mint highlights based on 3D liquid wave elevation
      float waveLight = smoothstep(-0.35, 0.65, vElevation);
      vec3 mintGradient = mix(uColorEmerald, uColorMint, waveLight);
      
      // Intense neon crest glows on peaks
      float crest = smoothstep(0.35, 0.95, vElevation);
      vec3 finalColor = mix(base, mintGradient, waveLight * 0.85);
      finalColor = mix(finalColor, uColorGlow, crest * (0.6 + pulse * 0.4));
      
      // Mouse proximity electric glow aura
      float mouseDist = distance(vUv, uMouse);
      float mouseGlow = smoothstep(0.4, 0.0, mouseDist);
      finalColor += uColorMint * mouseGlow * 0.35;

      // Soft vignette toward borders
      float borderDist = distance(vUv, vec2(0.5, 0.5));
      finalColor = mix(finalColor, uColorDark, smoothstep(0.35, 0.95, borderDist) * 0.45);

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `,
};

function FluidMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseTarget = useRef<THREE.Vector2>(new THREE.Vector2(0.5, 0.5));
  const mouseCurrent = useRef<THREE.Vector2>(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uColorDeep: { value: new THREE.Color("#031711") },
      uColorEmerald: { value: new THREE.Color("#00543B") },
      uColorMint: { value: new THREE.Color("#00D28F") },
      uColorGlow: { value: new THREE.Color("#33FFBA") },
      uColorDark: { value: new THREE.Color("#0A0A0A") },
    }),
    []
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseTarget.current.x = e.clientX / window.innerWidth;
      mouseTarget.current.y = 1.0 - e.clientY / window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const material = meshRef.current.material as THREE.ShaderMaterial;
    if (material && material.uniforms) {
      material.uniforms.uTime.value += delta;
      mouseCurrent.current.lerp(mouseTarget.current, 0.06);
      material.uniforms.uMouse.value.copy(mouseCurrent.current);
    }

    meshRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.06;
  });

  return (
    <mesh ref={meshRef} position={[0, -0.2, 0]} rotation={[-Math.PI / 4.2, 0, 0]}>
      <planeGeometry args={[16, 12, 140, 140]} />
      <shaderMaterial
        args={[LiquidMeshShader]}
        uniforms={uniforms}
        wireframe={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Particle Floating Sparks
function FloatingSparks() {
  const count = 75;
  const meshRef = useRef<THREE.Points>(null);

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
      sc[i] = Math.random() * 0.8 + 0.3;
    }
    return [pos, sc];
  }, [count]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.025;
    meshRef.current.rotation.x = Math.sin(time * 0.04) * 0.06;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#00D28F"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Hero3DCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-[#031510] to-[#0A0A0A] pointer-events-none -z-10" />
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden select-none">
      {/* 3D WebGL Canvas with High Dynamic Range & Alpha */}
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.8} />
        <FluidMesh />
        <FloatingSparks />
      </Canvas>

      {/* Radiant Mint Ambient Halo in Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-[#00D28F]/22 via-[#33FFBA]/12 to-transparent rounded-full blur-[160px] pointer-events-none -z-5" />

      {/* Top Left Organic Flow Orb */}
      <div className="absolute -top-32 -left-32 w-[750px] h-[750px] bg-gradient-to-br from-[#00D28F]/25 via-emerald-600/12 to-transparent rounded-full blur-[180px] pointer-events-none animate-floatOrb1" />

      {/* Bottom Right Glowing Aurora Orb */}
      <div className="absolute -bottom-32 -right-32 w-[850px] h-[850px] bg-gradient-to-tl from-[#00D28F]/25 via-teal-900/15 to-transparent rounded-full blur-[180px] pointer-events-none animate-pulseGlow" />

      {/* Soft Radial Vignette: Kept very light so the liquid wave remains vibrant */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,10,10,0.25)_65%,rgba(10,10,10,0.85)_100%)] pointer-events-none" />
    </div>
  );
}
