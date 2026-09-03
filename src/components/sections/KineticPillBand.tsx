'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function KineticPillBand() {
  return (
    <section className="py-14 sm:py-20 px-6 sm:px-12 bg-[#faf9f7] border-y border-[#e6e5e2] select-none">
      <div className="max-w-[88rem] mx-auto">
        
        {/* Section Tag */}
        <div className="text-center mb-8">
          <span className="text-xs font-mono text-[#8d8d8d] uppercase tracking-widest">
            THE ARCHITECTURAL IMPERATIVE
          </span>
        </div>

        {/* 4 Kinetic Pills Band */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center">
          
          {/* Pill 1: We */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: 'spring' as const, stiffness: 350, damping: 20 }}
            className="h-28 sm:h-36 rounded-full bg-[#f1f0ee] border border-[#e6e5e2] flex flex-col items-center justify-center shadow-xs cursor-default hover:shadow-md transition-shadow group"
          >
            <span className="font-sans font-extrabold text-3xl sm:text-5xl text-[#111111] tracking-tight group-hover:text-[#b15f2c] transition-colors">
              We
            </span>
            <span className="text-[10px] font-mono text-[#8d8d8d] tracking-widest mt-1">
              DISCIPLINE
            </span>
          </motion.div>

          {/* Pill 2: Build */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: 'spring' as const, stiffness: 350, damping: 20 }}
            className="h-28 sm:h-36 rounded-full bg-gradient-to-br from-[#cf8047] to-[#97501f] flex flex-col items-center justify-center shadow-md cursor-default text-white hover:shadow-xl transition-shadow"
          >
            <span className="font-sans font-extrabold text-3xl sm:text-5xl tracking-tight">
              Build
            </span>
            <span className="text-[10px] font-mono text-white/70 tracking-widest mt-1">
              EXECUTION
            </span>
          </motion.div>

          {/* Pill 3: Arrow */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: 'spring' as const, stiffness: 350, damping: 20 }}
            className="h-28 sm:h-36 rounded-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center shadow-md cursor-default group hover:shadow-xl transition-shadow"
          >
            <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 group-hover:translate-x-2 transition-transform duration-300" />
            <span className="text-[10px] font-mono text-white/50 tracking-widest mt-1">
              DIRECTION
            </span>
          </motion.div>

          {/* Pill 4: Better */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: 'spring' as const, stiffness: 350, damping: 20 }}
            className="h-28 sm:h-36 rounded-full bg-white border border-[#e6e5e2] flex flex-col items-center justify-center shadow-xs cursor-default hover:shadow-md transition-shadow group"
          >
            <span className="font-sans font-extrabold text-3xl sm:text-5xl text-[#0a0a0a] tracking-tight group-hover:text-[#b15f2c] transition-colors">
              Better
            </span>
            <span className="text-[10px] font-mono text-[#8d8d8d] tracking-widest mt-1">
              STANDARD
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
