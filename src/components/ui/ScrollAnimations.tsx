'use client';

import React from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

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
  style,
}: {
  segments: (string | WordSegment)[];
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p';
  style?: React.CSSProperties;
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
    <Component className={className} style={style}>
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
  yOffset = 24,
  duration = 0.8,
  onClick,
  onMouseEnter,
  onMouseLeave,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
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
  duration = 0.8,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Scroll-linked (scrubbed) blur reveal text on scroll.
 * Words dynamically un-blur and transition from 0.18 opacity to 1.0
 * in direct response to the user's scroll position.
 */
function ScrollProgressWord({
  children,
  range,
  progress,
}: {
  children: React.ReactNode;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const blur = useTransform(progress, range, ['blur(8px)', 'blur(0px)']);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <motion.span
      style={{
        opacity,
        filter: blur,
        y,
      }}
      className="inline-block mr-[0.26em] will-change-[filter,opacity,transform]"
    >
      {children}
    </motion.span>
  );
}

export function ScrollBlurRevealText({
  text,
  className = '',
  offset = ['start 0.88', 'start 0.28'],
}: {
  text: string;
  className?: string;
  offset?: any;
}) {
  const containerRef = React.useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  const words = text.split(/\s+/).filter(Boolean);

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, index) => {
        const start = index / words.length;
        const end = Math.min(1, start + 1.25 / words.length);

        return (
          <ScrollProgressWord
            key={index}
            range={[start, end]}
            progress={scrollYProgress}
          >
            {word}
          </ScrollProgressWord>
        );
      })}
    </p>
  );
}

