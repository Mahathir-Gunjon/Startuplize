'use client';

import { useEffect } from 'react';

export function useAdaptiveRem() {
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const FONT_BASE = 16;
      const html = document.documentElement;

      if (width > 1920) {
        // Runtime scale-up damping above 1920px
        const dampedSize = FONT_BASE - (FONT_BASE * (((1920 - width) / 1920) * 100 * 0.6666)) / 100;
        html.style.fontSize = `${dampedSize}px`;
      } else {
        html.style.fontSize = '';
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
}
