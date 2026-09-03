'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface StackedLinesProps {
  lines: string[];
  className?: string;
  delay?: number;
  stagger?: number;
  trigger?: boolean;
}

export function StackedLines({
  lines,
  className = '',
  delay = 0.1,
  stagger = 0.12,
  trigger = true,
}: StackedLinesProps) {
  return (
    <div className={`space-y-0.5 ${className}`}>
      {lines.map((line, idx) => (
        <span key={idx} className="overflow-hidden block leading-[1.02]">
          <motion.span
            initial={{ y: '115%' }}
            animate={trigger ? { y: '0%' } : { y: '115%' }}
            transition={{
              duration: 0.9,
              delay: delay + idx * stagger,
              ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
            }}
            className="block"
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
