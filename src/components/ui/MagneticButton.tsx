'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  showRadar?: boolean;
  showArrow?: boolean;
  className?: string;
  href?: string;
}

export function MagneticButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  showRadar = false,
  showArrow = true,
  className = '',
  href,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable magnetic physics on touch/mobile devices
    setIsTouchDevice(
      'ontouchstart' in window || navigator.maxTouchPoints > 0
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchDevice || !buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Pull toward cursor
    setPosition({
      x: distanceX * 0.32,
      y: distanceY * 0.32,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-3',
  };

  const variantClasses = {
    primary:
      'bg-[#E06927] hover:bg-[#F97316] text-white shadow-[0_0_25px_-4px_rgba(224,105,39,0.5)] border border-[#E06927]/40',
    secondary:
      'bg-[#0F1117] hover:bg-[#161922] text-[#F3F4F6] border border-white/10 hover:border-white/20 shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]',
    ghost:
      'bg-white/[0.03] hover:bg-white/[0.08] text-[#F3F4F6] border border-white/10 hover:border-white/25 backdrop-blur-md',
    emerald:
      'bg-[#10B981] hover:bg-[#34D399] text-black font-semibold shadow-[0_0_25px_-4px_rgba(16,185,129,0.5)] border border-[#10B981]/50',
  };

  const content = (
    <>
      {showRadar && (
        <span className="relative flex h-2 w-2 mr-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
      )}
      <span className="relative z-10 font-medium tracking-wide flex items-center">
        {children}
      </span>
      {showArrow && (
        <motion.span
          animate={
            isHovered
              ? { x: 3, y: -3, rotate: 45 }
              : { x: 0, y: 0, rotate: 0 }
          }
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="relative z-10 inline-block"
        >
          <ArrowUpRight className="w-4 h-4" />
        </motion.span>
      )}
      {/* Background ripple highlight on hover */}
      <span
        className={`absolute inset-0 -z-0 rounded-full transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } ${
          variant === 'primary'
            ? 'bg-gradient-to-r from-[#F97316] to-[#E06927]'
            : variant === 'emerald'
            ? 'bg-gradient-to-r from-[#34D399] to-[#10B981]'
            : 'bg-white/5'
        }`}
      />
    </>
  );

  const motionProps = {
    animate: { x: position.x, y: position.y },
    transition: { type: 'spring' as const, stiffness: 350, damping: 18, mass: 0.1 },
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: `relative inline-flex items-center justify-center rounded-full overflow-hidden transition-colors cursor-pointer select-none group ${sizeClasses[size]} ${variantClasses[variant]} ${className}`,
  };

  if (href) {
    return (
      <motion.a
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        href={href}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as React.Ref<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
