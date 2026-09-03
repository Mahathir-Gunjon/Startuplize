'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface PillButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'coral' | 'dark' | 'light' | 'outline';
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

  const variantStyles = {
    coral: {
      button: 'bg-[#ff6321] text-[#ffffff] border border-transparent shadow-md hover:bg-[#e54c0e]',
      badge: 'bg-[#ffffff] text-[#ff6321]',
    },
    dark: {
      button: 'bg-[#060612] text-[#ffffff] border border-transparent shadow-sm hover:bg-[#1f1f2e]',
      badge: 'bg-[#ffffff] text-[#060612]',
    },
    light: {
      button: 'bg-[#ffffff] text-[#060612] hover:bg-[#f5f4f3] border border-[#e7e2dd]',
      badge: 'bg-[#060612] text-[#ffffff]',
    },
    outline: {
      button: 'bg-transparent text-[#060612] border border-[#e7e2dd] hover:border-[#ff6321] hover:text-[#ff6321]',
      badge: 'bg-[#060612] text-[#ffffff]',
    },
  };

  const sizeStyles = {
    sm: 'pl-4 pr-1.5 py-1 text-xs gap-2',
    md: 'pl-5 sm:pl-6 pr-2 py-1.5 text-xs sm:text-sm gap-3',
    lg: 'pl-7 pr-2.5 py-2 text-sm sm:text-base gap-4',
  };

  const badgeSize = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8 sm:w-8.5 sm:h-8.5',
    lg: 'w-10 h-10 sm:w-10.5 sm:h-10.5',
  };

  const currentVariant = variantStyles[variant];

  const content = (
    <>
      <span className="font-heading font-medium tracking-tight whitespace-nowrap shrink-0">{children}</span>
      {showArrow && (
        <motion.span
          animate={isHovered ? { rotate: 45 } : { rotate: 0 }}
          transition={{ type: 'spring' as const, stiffness: 400, damping: 20 }}
          className={`${badgeSize[size]} ${currentVariant.badge} rounded-full flex items-center justify-center shrink-0 ml-1 transition-colors duration-200`}
        >
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
        </motion.span>
      )}
    </>
  );

  const baseClasses = `relative inline-flex items-center justify-between rounded-full cursor-pointer select-none transition-all duration-200 font-medium whitespace-nowrap shrink-0 ${currentVariant.button} ${sizeStyles[size]} ${className}`;

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
