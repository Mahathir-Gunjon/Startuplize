'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollBlurHeadingProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p';
}

interface WordSegment {
  text: string;
  isCoral?: boolean;
  isItalic?: boolean;
}

/**
 * Word-by-word blur-to-focus reveal animation on scroll,
 * matching the exact physics and duration of the hero headline.
 */
export function ScrollBlurWords({
  segments,
  className = '',
  delay = 0.1,
  stagger = 0.065,
  as: Component = 'h2',
}: {
  segments: (string | WordSegment)[];
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p';
}) {
  // Flatten into individual word items
  let wordCounter = 0;
  const wordItems: { word: string; isCoral?: boolean; isItalic?: boolean; index: number }[] = [];

  segments.forEach((seg) => {
    if (typeof seg === 'string') {
      const words = seg.trim().split(/\s+/);
      words.forEach((w) => {
        if (w) {
          wordItems.push({ word: w, index: wordCounter++ });
        }
      });
    } else {
      const words = seg.text.trim().split(/\s+/);
      words.forEach((w) => {
        if (w) {
          wordItems.push({
            word: w,
            isCoral: seg.isCoral,
            isItalic: seg.isItalic,
            index: wordCounter++,
          });
        }
      });
    }
  });

  return (
    <Component className={className}>
      {wordItems.map((item) => (
        <motion.span
          key={item.index}
          initial={{ opacity: 0, y: 16, filter: 'blur(16px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{
            duration: 1.1,
            delay: delay + item.index * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block mr-[0.26em] ${
            item.isCoral ? 'text-[#ff6321]' : ''
          } ${item.isItalic ? 'italic font-serif' : ''}`}
        >
          {item.word}
        </motion.span>
      ))}
    </Component>
  );
}

/**
 * Slide reveal animation for card divs on scroll with staggered delays.
 */
export function ScrollSlideCard({
  children,
  className = '',
  delay = 0.15,
  yOffset = 36,
  duration = 0.95,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.div>
  );
}

/**
 * Blur reveal animation for section eyebrow badges or subtitles on scroll.
 */
export function ScrollBlurFade({
  children,
  className = '',
  delay = 0.05,
  yOffset = 14,
  duration = 1.0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
