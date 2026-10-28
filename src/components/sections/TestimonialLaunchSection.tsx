'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, X, Star, Volume2, VolumeX, CheckCircle } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';
import { ScrollBlurWords, ScrollBlurFade } from '@/components/ui/ScrollAnimations';

interface TestimonialLaunchSectionProps {
  onOpenBooking?: () => void;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  stars: number;
  date: string;
  platform: 'google' | 'linkedin';
  image: string;
  isVideo?: boolean;
  videoDuration?: string;
  videoStats?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Founder',
    company: 'Vance Commercial Roofing',
    location: 'Melbourne, AU',
    quote:
      'Our old WordPress site was built back in 2018 and barely functioned on mobile. Within three weeks of launching the redesign, our quote request forms doubled. The communication was direct, transparent, and completely free of technical jargon.',
    stars: 5,
    date: '08/14/2026',
    platform: 'google',
    image: '/testimonials/marcus-vance.jpg',
  },
  {
    id: 'david-sterling',
    name: 'David Sterling',
    role: 'Managing Partner',
    company: 'Sterling Legal Group',
    location: 'Chicago, IL',
    quote:
      'We went from invisible on Google Maps to ranking in the local top 3 across our primary practice areas.',
    stars: 5,
    date: '09/02/2026',
    platform: 'google',
    image: '/testimonials/david-sterling.jpg',
    isVideo: true,
    videoDuration: '1:42 min watch',
    videoStats: '+310% Inbound Phone Consultations in 90 Days',
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Owner',
    company: 'Apex Physical Therapy',
    location: 'Sydney, AU',
    quote:
      'Most agencies we spoke with tried to lock us into a 12-month retainer with zero guarantees. Here, the scope was fixed, we kept 100% ownership of our domain and website assets, and direct phone calls from Google Maps increased noticeably within the first two months.',
    stars: 5,
    date: '09/28/2026',
    platform: 'google',
    image: '/testimonials/elena-rostova.jpg',
  },
  {
    id: 'jason-miller',
    name: 'Jason Miller',
    role: 'Operations Director',
    company: 'ClearLine Tree Services',
    location: 'Texas, US',
    quote:
      'The page speed difference is night and day—loads instantly even on weak cell reception out in the field. The new brand identity looks clean, professional, and finally matches the high standard of work our crew actually delivers.',
    stars: 5,
    date: '10/11/2026',
    platform: 'linkedin',
    image: '/testimonials/jason-miller.jpg',
  },
];

function GoogleIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.95 0-1.72-.77-1.72-1.72s.77-1.72 1.72-1.72 1.73.77 1.73 1.72-.78 1.72-1.73 1.72m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

export function TestimonialLaunchSection({ onOpenBooking }: TestimonialLaunchSectionProps = {}) {
  const [startIndex, setStartIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<Testimonial | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(42);

  const total = testimonials.length;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Compute 3 visible items on desktop based on startIndex
  const visibleCards = [
    testimonials[startIndex % total],
    testimonials[(startIndex + 1) % total],
    testimonials[(startIndex + 2) % total],
  ];

  return (
    <section id="reviews" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 bg-[#faf9f8] select-none border-b border-[#e7e2dd] relative z-10 overflow-hidden">
      {/* Anchor for backward compatibility with #testimonials */}
      <div id="testimonials" className="absolute -top-24 pointer-events-none opacity-0" />
      <div className="max-w-[84rem] mx-auto space-y-10 sm:space-y-14">
        
        {/* Section Header & Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-[#e7e2dd]">
          <div className="space-y-2 sm:space-y-3 max-w-3xl">
            <ScrollBlurFade>
              <span className="text-body-sm font-mono text-[#ff6321] uppercase tracking-widest font-semibold block whitespace-nowrap">
                • VERIFIED CLIENT FEEDBACK
              </span>
            </ScrollBlurFade>

            {/* Main Headline with ScrollBlurWords */}
            <ScrollBlurWords
              className="font-heading font-medium text-[2rem] sm:text-4xl lg:text-5xl text-[#060612] tracking-tight leading-[1.18] sm:leading-tight"
              segments={[
                'Real Feedback From',
                { text: 'Business Owners', isCoral: true, isItalic: true },
                'Who Scaled With Us.',
              ]}
            />
          </div>

          {/* Top Right Header Action Button */}
          <div className="shrink-0 flex items-center gap-3">
            <PillButton
              variant="dark"
              size="md"
              href="/contact"
              onClick={onOpenBooking}
              showArrow={true}
              className="whitespace-nowrap"
            >
              Book a Strategy Call
            </PillButton>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Cards Grid: Mobile 1 card, Tablet 2 cards, Desktop 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {visibleCards.map((item, idx) => {
              if (item.isVideo) {
                // Featured Video Testimonial Card (Center Highlight)
                return (
                  <motion.div
                    key={`${item.id}-${idx}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-3xl border border-[#e7e2dd] shadow-lg flex flex-col justify-between h-[480px] sm:h-[530px] relative overflow-hidden group cursor-pointer bg-[#060612]"
                    onClick={() => setActiveVideo(item)}
                  >
                    {/* Full-bleed portrait image */}
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      priority
                    />

                    {/* Gradient Overlays for Crisp Text Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90 pointer-events-none" />

                    {/* Top Row: Client Info + Platform Icon */}
                    <div className="relative z-10 p-6 sm:p-7 flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="font-heading font-semibold text-base sm:text-lg text-white tracking-tight leading-snug">
                          {item.name}
                        </div>
                        <div className="text-xs sm:text-sm text-white/80 font-body truncate mt-0.5">
                          {item.role}, {item.company}
                        </div>
                        <div className="text-[11px] font-mono text-white/60 uppercase tracking-wider mt-0.5">
                          {item.location}
                        </div>
                      </div>

                      {/* Platform Badge */}
                      <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 shadow-sm">
                        <GoogleIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Center: Glassmorphic Play Button & Video Duration Pill */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white text-[#060612] flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 pointer-events-auto cursor-pointer"
                      >
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-[#060612] stroke-none ml-1" />
                      </motion.div>
                      <span className="mt-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-xs font-mono font-medium border border-white/20 shadow-md">
                        {item.videoDuration}
                      </span>
                    </div>

                    {/* Bottom Row: Quote + Stars + Date */}
                    <div className="relative z-10 p-6 sm:p-7 space-y-4">
                      <p className="text-sm sm:text-base text-white font-body leading-relaxed font-medium drop-shadow-sm line-clamp-3">
                        &ldquo;{item.quote}&rdquo;
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-white/20">
                        <div className="flex items-center gap-1 text-[#f59e0b]">
                          {[...Array(item.stars)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#f59e0b] stroke-[#f59e0b]" />
                          ))}
                        </div>
                        <span className="text-xs font-mono text-white/70">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // Standard Review Card
              return (
                <motion.div
                  key={`${item.id}-${idx}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e7e2dd] shadow-xs flex flex-col justify-between h-[480px] sm:h-[530px] transition-all duration-300 hover:shadow-md hover:border-[#ff6321]/30 relative"
                >
                  {/* Top Row: Avatar + Name + Platform Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden border border-[#e7e2dd] shadow-2xs relative shrink-0 bg-zinc-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-heading font-semibold text-base sm:text-lg text-[#060612] tracking-tight leading-snug truncate">
                          {item.name}
                        </div>
                        <div className="text-xs sm:text-sm text-[#71717a] font-body truncate">
                          {item.role}, {item.company}
                        </div>
                        <div className="text-[11px] font-mono text-[#a1a1aa] uppercase tracking-wider">
                          {item.location}
                        </div>
                      </div>
                    </div>

                    {/* Platform Badge */}
                    <div className="w-9 h-9 rounded-full bg-[#f4f4f5] border border-[#e7e2dd] flex items-center justify-center shrink-0 shadow-2xs">
                      {item.platform === 'google' ? (
                        <GoogleIcon className="w-4 h-4" />
                      ) : (
                        <LinkedInIcon className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                  {/* Middle: Quotation text */}
                  <div className="my-auto py-4">
                    <p className="text-sm sm:text-[0.95rem] text-[#27272a] font-body leading-relaxed line-clamp-6">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Bottom Row: 5 Stars + Date */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#f0ece9]">
                    <div className="flex items-center gap-1 text-[#f59e0b]">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#f59e0b] stroke-[#f59e0b]" />
                      ))}
                    </div>
                    <span className="text-xs font-mono text-[#a1a1aa]">
                      {item.date}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Floating Next/Prev Arrow Controls (Matching Screenshot Circular Button) */}
          <button
            onClick={handleNext}
            aria-label="Next testimonials"
            className="absolute right-2 sm:-right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#060612] border border-[#e7e2dd] shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 z-20 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </button>

          <button
            onClick={handlePrev}
            aria-label="Previous testimonials"
            className="absolute left-2 sm:-left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-[#060612] border border-[#e7e2dd] shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 z-20 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          </button>

        </div>

        {/* Carousel Progress Indicators */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                idx === startIndex % total
                  ? 'w-8 bg-[#ff6321]'
                  : 'w-2 bg-[#e7e2dd] hover:bg-zinc-400'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Interactive Video Modal for Featured Testimonial */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0c0c16] border border-white/15 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0 border border-white/20">
                    <Image src={activeVideo.image} alt={activeVideo.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-sm sm:text-base text-white flex items-center gap-1.5">
                      {activeVideo.name}
                      <CheckCircle className="w-4 h-4 text-[#ff6321] inline" />
                    </div>
                    <div className="text-xs text-zinc-400">
                      {activeVideo.role}, {activeVideo.company} ({activeVideo.location})
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveVideo(null)}
                  aria-label="Close modal"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player Container */}
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                <Image
                  src={activeVideo.image}
                  alt={activeVideo.name}
                  fill
                  className={`object-cover object-center transition-opacity duration-500 ${isPlaying ? 'opacity-85' : 'opacity-60'}`}
                />

                {/* Subtitle / Quote Overlay */}
                <div className="absolute inset-x-4 bottom-14 p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-center">
                  <p className="text-xs sm:text-sm text-white font-body">
                    &ldquo;{activeVideo.quote}&rdquo;
                  </p>
                </div>

                {/* Play/Pause Center Indicator */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className="w-16 h-16 rounded-full bg-[#ff6321] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform z-10 cursor-pointer"
                >
                  {isPlaying ? (
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-6 bg-white rounded-full" />
                      <div className="w-1.5 h-6 bg-white rounded-full" />
                    </div>
                  ) : (
                    <Play className="w-7 h-7 fill-white stroke-none ml-1" />
                  )}
                </button>

                {/* Video Bottom Control Bar */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center gap-3 text-xs font-mono text-zinc-300">
                  <span className="text-white">0:43</span>
                  <div
                    className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer relative"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      setProgress(Math.round((clickX / rect.width) * 100));
                    }}
                  >
                    <div className="h-full bg-[#ff6321] rounded-full" style={{ width: `${progress}%` }} />
                  </div>
                  <span>1:42</span>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                    className="text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Modal Footer Key Stats */}
              <div className="p-4 sm:p-5 bg-white/[0.02] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-zinc-300 font-body">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{activeVideo.videoStats || 'Verified Client Deployment'}</span>
                </div>
                <PillButton
                  variant="coral"
                  size="sm"
                  href="/contact"
                  onClick={() => {
                    setActiveVideo(null);
                    onOpenBooking?.();
                  }}
                  showArrow={true}
                >
                  Book your audit
                </PillButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
