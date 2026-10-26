'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PillButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'coral' | 'dark' | 'light' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  className?: string;
}

export function PillButton({
  children,
  onClick,
  href,
  variant = 'coral',
  size = 'md',
  showArrow = true,
  className = '',
}: PillButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Proportional sizing - ZERO rounded corners (sharp architectural geometry)
  const sizeStyles = {
    sm: {
      button: 'h-10 pl-1 pr-3.5 gap-2.5 rounded-none',
      badge: 'w-7 h-7 rounded-none',
      fillRadius: 'rounded-none',
      icon: 'w-3.5 h-3.5 stroke-[2.5]',
      text: 'text-xs sm:text-sm',
    },
    md: {
      button: 'h-11 sm:h-12 pl-1.5 pr-4.5 sm:pr-5 gap-3 rounded-none',
      badge: 'w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-none',
      fillRadius: 'rounded-none',
      icon: 'w-4 h-4 stroke-[2.5]',
      text: 'text-sm sm:text-base',
    },
    lg: {
      button: 'h-13 sm:h-14 pl-1.5 sm:pl-2 pr-5 sm:pr-6 gap-3.5 rounded-none',
      badge: 'w-9.5 h-9.5 sm:w-10 sm:h-10 rounded-none',
      fillRadius: 'rounded-none',
      icon: 'w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.5]',
      text: 'text-base sm:text-lg',
    },
  };

  const currentSize = sizeStyles[size];

  // 1. Primary ('coral'): Boldly colored orange (#ff6321) in normal mode. On hover, black (#060612) fills left-to-right.
  // 2. Ghost ('outline' / 'ghost' / 'light'): Ghost transparent in normal mode. On hover, orange (#ff6321) fills left-to-right.
  // 3. Dark ('dark'): For orange banner. Obsidian black in normal mode. On hover, white fills left-to-right.
  const isGhost = variant === 'outline' || variant === 'ghost' || variant === 'light';
  const isDark = variant === 'dark';

  let containerBg = 'bg-[#ff6321] text-white border border-[#ff6321]';
  let badgeBg = 'bg-[#060612] text-white';
  let fillColor = 'bg-[#060612]';
  let normalTextColor = '#ffffff';
  let hoverTextColor = '#ffffff';

  if (isGhost) {
    containerBg = 'bg-white text-[#060612] border border-[#e7e2dd] hover:border-[#ff6321]';
    badgeBg = 'bg-[#ff6321] text-white';
    fillColor = 'bg-[#ff6321]';
    normalTextColor = '#060612';
    hoverTextColor = '#ffffff';
  } else if (isDark) {
    containerBg = 'bg-[#060612] text-white border border-white/20';
    badgeBg = 'bg-[#ff6321] text-white';
    fillColor = 'bg-white';
    normalTextColor = '#ffffff';
    hoverTextColor = '#060612';
  }

  const content = (
    <>
      {/* 1. Liquid Color Fill Layer from Left to Right (Sharp 0px edges) */}
      <motion.div
        initial={false}
        animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: 0 }}
        className={`absolute inset-0 ${currentSize.fillRadius} ${fillColor} pointer-events-none z-0`}
      />

      {/* 2. Left Arrow Badge (Sharp square with right arrow) */}
      {showArrow && (
        <motion.span
          animate={isHovered ? { x: 3 } : { x: 0 }}
          transition={{ type: 'spring', stiffness: 450, damping: 25 }}
          className={`${currentSize.badge} ${badgeBg} flex items-center justify-center shrink-0 shadow-xs relative z-10`}
        >
          <ArrowRight className={currentSize.icon} />
        </motion.span>
      )}

      {/* 3. Rolling Dual-Text Slide Up ("text will slide up twice") */}
      <span className="relative z-10 overflow-hidden inline-flex flex-col h-[1.35em] leading-[1.35em] justify-center select-none">
        {/* Line 1: Normal text that slides up and out */}
        <motion.span
          initial={false}
          animate={isHovered ? { y: '-100%' } : { y: '0%' }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block font-heading font-semibold tracking-tight whitespace-nowrap transition-colors duration-200 ${currentSize.text}`}
          style={{
            color: isHovered ? hoverTextColor : normalTextColor,
          }}
        >
          {children}
        </motion.span>

        {/* Line 2: Duplicate hover text that slides up into place from below */}
        <motion.span
          initial={false}
          animate={isHovered ? { y: '-100%' } : { y: '0%' }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block font-heading font-semibold tracking-tight whitespace-nowrap absolute top-full left-0 pointer-events-none ${currentSize.text}`}
          style={{
            color: hoverTextColor,
          }}
          aria-hidden="true"
        >
          {children}
        </motion.span>
      </span>
    </>
  );

  const baseClasses = `group relative inline-flex items-center justify-center cursor-pointer select-none overflow-hidden transition-all duration-200 active:scale-[0.98] font-medium whitespace-nowrap shrink-0 ${containerBg} ${currentSize.button} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={baseClasses}
    >
      {content}
    </button>
  );
}
