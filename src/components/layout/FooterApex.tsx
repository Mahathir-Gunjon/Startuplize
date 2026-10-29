'use client';

import React, { useState } from 'react';
import { PillButton } from '@/components/ui/PillButton';

interface FooterApexProps {
  onOpenBooking?: () => void;
}

export function FooterApex({ onOpenBooking }: FooterApexProps = {}) {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Dispatch to internal audit API route
      await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // 2. Dispatch to FormSubmit for direct email delivery to contactmahthir@gmail.com
      try {
        await fetch('https://formsubmit.co/ajax/contactmahthir@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `New Free Website Audit Request from ${formData.name}`,
            'Full Name': formData.name,
            'Website URL': formData.website,
            'Email Address': formData.email,
            'Specific Focus / Goals': formData.message || 'General Performance & Conversion Audit',
            _template: 'table',
          }),
        });
      } catch (err) {
        // Fallback silently if CORS/adblock
      }

      setIsSubmitted(true);
      setFormData({ name: '', website: '', email: '', message: '' });
    } catch (err) {
      console.error('Audit submit error:', err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const navLinks = [
    { label: 'About', href: '#process' },
    { label: 'Services', href: '#services' },
    { label: 'Works', href: '/work' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <footer id="contact" className="w-full bg-[#faf9f8] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 select-none">
      {/* ── Expanded Floating Dark Card with Low Radius (Preserves Surrounding Whitespace, Max 60vh) ── */}
      <div className="w-full bg-[#07090d] rounded-[4px] sm:rounded-[6px] lg:rounded-[8px] p-6 sm:p-8 lg:p-10 text-white border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
        
        {/* Inner Content Container Constrained to 1280px */}
        <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-between space-y-6 sm:space-y-8">

        {/* Main 2-Column Split: 65% Free Audit Content vs 35% Audit Form */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 xl:gap-14">

          {/* Left Column (65% width): Free Audit Headline & Short Delivery Description */}
          <div className="w-full lg:w-[65%] flex flex-col justify-center pr-0 lg:pr-6">
            <h2 className="font-heading font-medium text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[3.15rem] text-white tracking-tight leading-[1.12]">
              Get Your Free Website &amp; Performance Audit.
            </h2>
            <p className="mt-3.5 sm:mt-4 text-zinc-400 font-body text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl">
              We will personally audit your site architecture, mobile speed bottlenecks, and conversion leaks — delivered straight to your inbox within 24 to 48 hours. 100% free with zero obligation.
            </p>
          </div>

          {/* Right Column (35% width): Free Audit Form with Underline Inputs & Vertical Divider */}
          <div className="w-full lg:w-[35%] lg:border-l lg:border-white/10 lg:pl-8 xl:pl-10">
            {isSubmitted ? (
              <div className="py-6 flex flex-col items-start gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                  <span>✓</span> Audit Request Received
                </div>
                <h3 className="font-heading font-medium text-xl sm:text-2xl text-white tracking-tight">
                  We’ll audit your website shortly.
                </h3>
                <p className="font-body text-zinc-400 text-xs sm:text-sm max-w-md leading-relaxed">
                  Your request has been dispatched to <span className="text-white font-medium">contactmahthir@gmail.com</span>. We will review your site architecture, speed, and conversion gaps within 24 to 48 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 w-full">
                {/* Name */}
                <div>
                  <label htmlFor="audit-name" className="sr-only">
                    Name*
                  </label>
                  <input
                    id="audit-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Name*"
                    className="w-full bg-transparent border-b border-white/20 focus:border-white py-2 text-white placeholder:text-zinc-500 font-body text-sm sm:text-base outline-none transition-colors"
                  />
                </div>

                {/* Website URL */}
                <div>
                  <label htmlFor="audit-website" className="sr-only">
                    Website URL*
                  </label>
                  <input
                    id="audit-website"
                    name="website"
                    type="text"
                    required
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="Website URL*"
                    className="w-full bg-transparent border-b border-white/20 focus:border-white py-2 text-white placeholder:text-zinc-500 font-body text-sm sm:text-base outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="audit-email" className="sr-only">
                    Email*
                  </label>
                  <input
                    id="audit-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email*"
                    className="w-full bg-transparent border-b border-white/20 focus:border-white py-2 text-white placeholder:text-zinc-500 font-body text-sm sm:text-base outline-none transition-colors"
                  />
                </div>

                {/* Message Box (If anything specific needed to check) */}
                <div>
                  <label htmlFor="audit-message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="audit-message"
                    name="message"
                    rows={1}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Message (anything specific to check?)"
                    className="w-full bg-transparent border-b border-white/20 focus:border-white py-2 text-white placeholder:text-zinc-500 font-body text-sm sm:text-base outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <PillButton
                    type="submit"
                    variant="coral"
                    size="md"
                    disabled={isSubmitting}
                    showArrow={true}
                  >
                    {isSubmitting ? 'Sending...' : 'Request Free Audit'}
                  </PillButton>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Navigation & Social Links */}
        <div className="border-t border-white/10 pt-5 sm:pt-6 mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          {/* Navigation Links: 18px Full White with Neon Orange Hover Effect */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[18px] font-body font-medium text-white hover:text-[#ff6321] hover:drop-shadow-[0_0_10px_rgba(255,99,33,0.85)] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons (X, Instagram, LinkedIn, Facebook) */}
          <div className="flex items-center gap-2.5">
            {/* X / Twitter */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/startuplize/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75c-.97 0-1.76.78-1.76 1.75s.79 1.76 1.76 1.76m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61558810646131"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Legal & Copyright Bar: 16px Font Size */}
        <div className="border-t border-white/10 pt-4 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[16px] font-mono text-zinc-400">
          <div>
            © 2026 - All rights reserved by Startuplize
          </div>
          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a
              href="mailto:contactmahthir@gmail.com"
              className="text-zinc-300 hover:text-[#ff6321] hover:drop-shadow-[0_0_8px_rgba(255,99,33,0.7)] transition-all duration-200"
            >
              contactmahthir@gmail.com
            </a>
          </div>
        </div>

        </div>
      </div>
    </footer>
  );
}

export default FooterApex;
