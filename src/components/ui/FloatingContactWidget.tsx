'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';

export function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close widget when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const contactChannels = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      handle: '01570211287',
      action: 'Instant Chat',
      href: 'https://wa.me/8801570211287',
      bgColor: 'bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white',
      badgeColor: 'bg-[#25D366]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.077-1.748-.387-.962-.401-1.631-1.341-1.713-1.452-.082-.111-.667-.887-.667-1.691 0-.804.421-1.2.571-1.36.15-.161.328-.201.438-.201.11 0 .22.001.316.006.102.005.239-.039.373.284.144.348.491 1.199.534 1.286.044.088.073.191.015.306-.059.115-.088.187-.175.29-.088.102-.185.228-.264.306-.088.088-.18.184-.077.361.103.177.457.753.981 1.22.674.6 1.242.787 1.419.875.177.088.281.077.385-.044.103-.121.443-.516.562-.693.118-.177.236-.148.398-.088.162.059 1.026.484 1.203.573.177.088.295.133.339.207.044.074.044.428-.1.833zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.436 5.176L2 22l4.981-1.393A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.156c-1.625 0-3.136-.505-4.394-1.369l-.315-.213-2.956.827.844-2.885-.236-.347A8.136 8.136 0 013.844 12c0-4.505 3.651-8.156 8.156-8.156 4.504 0 8.156 3.651 8.156 8.156 0 4.505-3.652 8.156-8.156 8.156z" />
        </svg>
      ),
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@startuplize',
      action: 'Direct Message',
      href: 'https://www.instagram.com/startuplize',
      bgColor: 'bg-[#E4405F]/10 text-[#E4405F] hover:bg-[#E4405F] hover:text-white',
      badgeColor: 'bg-[#E4405F]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      id: 'messenger',
      name: 'Messenger',
      handle: 'Startuplize on Facebook',
      action: 'Send Message',
      href: 'https://www.facebook.com/profile.php?id=61558810646131',
      bgColor: 'bg-[#0084FF]/10 text-[#0084FF] hover:bg-[#0084FF] hover:text-white',
      badgeColor: 'bg-[#0084FF]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.51 3.734 7.158v3.584l3.435-1.887c.883.245 1.815.378 2.781.378 5.523 0 10-4.145 10-9.233C22 6.145 17.523 2 12 2zm1.07 12.441l-2.617-2.793-5.105 2.793 5.617-5.962 2.684 2.793 5.038-2.793-5.617 5.962z" />
        </svg>
      ),
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'company/startuplize',
      action: 'Connect',
      href: 'https://www.linkedin.com/company/startuplize/',
      bgColor: 'bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white',
      badgeColor: 'bg-[#0A66C2]',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75c-.97 0-1.76.78-1.76 1.75s.79 1.76 1.76 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
        </svg>
      ),
    },
  ];

  return (
    <div ref={widgetRef} className="fixed bottom-6 right-6 z-50 select-none">
      
      {/* 4-Channel Floating Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
            className="absolute bottom-16 right-0 mb-3 w-[290px] sm:w-[320px] bg-white/95 backdrop-blur-2xl border border-[#e7e2dd] shadow-[0_25px_65px_rgba(0,0,0,0.18)] rounded-3xl p-4 sm:p-5 select-none"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#e7e2dd]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
                  <span className="text-xs font-mono text-[#ff6321] uppercase tracking-wider font-bold">
                    ONLINE // DIRECT CHAT
                  </span>
                </div>
                <h4 style={{ color: '#060612' }} className="font-heading font-semibold text-base mt-0.5">
                  Reach Out Instantly
                </h4>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-[#f5f4f3] hover:bg-[#eeecea] text-[#060612] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close contact options"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 4 Direct Channels */}
            <div className="space-y-2 mt-3.5">
              {contactChannels.map((channel) => (
                <a
                  key={channel.id}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-2xl border border-[#e7e2dd]/70 bg-[#faf9f8] hover:bg-white hover:border-[#ff6321]/40 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${channel.bgColor}`}
                    >
                      {channel.icon}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-sm text-[#060612] group-hover:text-[#ff6321] transition-colors flex items-center gap-1.5">
                        <span>{channel.name}</span>
                      </div>
                      <p className="text-xs font-body text-[#69686e]">
                        {channel.handle}
                      </p>
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-[#f5f4f3] group-hover:bg-[#ff6321] group-hover:text-white text-[#69686e] flex items-center justify-center transition-colors shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom Help Note */}
            <div className="mt-3 pt-2.5 border-t border-[#e7e2dd]/60 text-center">
              <span className="text-[11px] font-mono text-[#69686e]">
                Direct response from senior team within 15 mins
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Message Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#ff6321] hover:bg-[#e54c0e] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(255,99,33,0.38)] cursor-pointer transition-colors relative"
        aria-label="Open social contact channels"
      >
        {/* Pulsing online indicator dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#22c55e] border-2 border-white shadow-xs" />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageSquare className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

    </div>
  );
}
