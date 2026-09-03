'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Sparkles, ShieldCheck, Zap, Globe, MessageSquare, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function BookingModal({ isOpen, onClose, defaultService }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    defaultService ? [defaultService] : ['High-Performance WordPress']
  );
  const [budget, setBudget] = useState('$10k – $25k');
  const [timeline, setTimeline] = useState('4 – 6 Weeks');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    projectDetails: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    { id: 'wp', label: 'WordPress & Elementor Engineering', desc: 'New builds & revamps, custom Elementor Pro, sub-second speed' },
    { id: 'wf', label: 'Webflow Architecture & Motion', desc: 'Clean visual CMS, responsive design & fast navigation' },
    { id: 'seo', label: 'Technical & On-Page SEO', desc: 'Local schema, crawl optimization & organic traffic growth' },
    { id: 'local', label: 'Local SEO & Google Business Profile', desc: 'Google Business Profile setup, local citations & call funnels' },
    { id: 'brand', label: 'Brand Design & Visual Identity', desc: 'Complete graphic design, bespoke logo suites & marketing collateral' },
    { id: 'ads', label: 'Meta Ads & Paid Acquisition', desc: 'High-converting Facebook & Instagram ad campaigns & lead funnels' },
  ];

  const budgetOptions = ['$5,000 – $10,000', '$10,000 – $25,000', '$25,000 – $50,000', '$50,000+'];
  const timelineOptions = ['Immediate (Under 4 Weeks)', '4 – 6 Weeks', '6 – 8 Weeks', 'Flexible / Retainer'];

  const toggleService = (label: string) => {
    if (selectedServices.includes(label)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== label));
      }
    } else {
      setSelectedServices([...selectedServices, label]);
    }
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate elite async dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#E06927', '#10B981', '#2563EB', '#FFFFFF'],
      });
    }, 1200);
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsSubmitted(false);
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetAndClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative z-10 w-full max-w-2xl bg-[#0F1117] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden my-8"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#E06927]/15 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#10B981]/15 rounded-full blur-[100px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#9CA3AF] hover:text-white transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                {/* Modal Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E06927] uppercase">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] radar-ping inline-block" />
                    STEP {step} OF 3 // STRATEGIC DISCOVERY
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                    {step === 1 && 'Select Your Core Growth Objectives'}
                    {step === 2 && 'Define Scope, Budget & Timeline'}
                    {step === 3 && 'Finalize Architecture & Contact Details'}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] mt-1">
                    {step === 1 && 'Choose one or multiple services to engineer your high-converting system.'}
                    {step === 2 && 'Help us allocate the right senior engineers and growth architects.'}
                    {step === 3 && 'We will review your URL and deliver a custom roadmap in under 24 hours.'}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-white/10 rounded-full mb-8 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#E06927] via-[#2563EB] to-[#10B981] transition-all duration-500"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>

                {/* Step 1: Services Selection */}
                {step === 1 && (
                  <div className="space-y-3">
                    {servicesList.map((srv) => {
                      const isSelected = selectedServices.includes(srv.label);
                      return (
                        <div
                          key={srv.id}
                          onClick={() => toggleService(srv.label)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between ${
                            isSelected
                              ? 'bg-[#E06927]/10 border-[#E06927]/50 shadow-[0_0_20px_rgba(224,105,39,0.15)]'
                              : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
                          }`}
                        >
                          <div className="pr-4">
                            <div className="text-sm font-semibold text-white flex items-center gap-2">
                              {srv.label}
                            </div>
                            <div className="text-xs text-[#9CA3AF] mt-1">{srv.desc}</div>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              isSelected
                                ? 'bg-[#E06927] border-[#E06927] text-white'
                                : 'border-white/20'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Step 2: Budget & Timeline */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-mono text-[#9CA3AF] uppercase tracking-wider mb-3">
                        Estimated Budget Range (USD)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {budgetOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setBudget(opt)}
                            className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                              budget === opt
                                ? 'bg-[#E06927]/15 border-[#E06927] text-white shadow-[0_0_15px_rgba(224,105,39,0.2)]'
                                : 'bg-white/[0.02] border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/20'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#9CA3AF] uppercase tracking-wider mb-3">
                        Target Launch Timeline
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {timelineOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setTimeline(opt)}
                            className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                              timeline === opt
                                ? 'bg-[#10B981]/15 border-[#10B981] text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                                : 'bg-white/[0.02] border-white/10 text-[#9CA3AF] hover:text-white hover:border-white/20'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact & Scope Form */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[#9CA3AF] mb-1.5">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alexander Vance"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E06927] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-[#9CA3AF] mb-1.5">
                          WORK EMAIL *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@vancecapital.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E06927] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[#9CA3AF] mb-1.5">
                          COMPANY / BRAND
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Vance Capital Group"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E06927] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-[#9CA3AF] mb-1.5">
                          CURRENT WEBSITE URL *
                        </label>
                        <input
                          type="url"
                          required
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          placeholder="https://yourwebsite.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E06927] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#9CA3AF] mb-1.5">
                        PROJECT BRIEF / KEY PAIN POINTS
                      </label>
                      <textarea
                        rows={3}
                        value={formData.projectDetails}
                        onChange={(e) =>
                          setFormData({ ...formData, projectDetails: e.target.value })
                        }
                        placeholder="Slow WordPress speed, low mobile conversions, wanting to optimize Google Business Profile or redesign on WordPress/Webflow..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E06927] transition-colors resize-none"
                      />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-[#9CA3AF] pt-2">
                      <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                      <span>Non-Disclosure Agreement (NDA) & 24h Response Guarantee.</span>
                    </div>
                  </form>
                )}

                {/* Footer Controls */}
                <div className="mt-8 flex items-center justify-between pt-4 border-t border-white/10">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 rounded-full text-xs font-mono text-[#9CA3AF] hover:text-white transition-colors"
                    >
                      ← BACK
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-3 rounded-full bg-[#E06927] hover:bg-[#F97316] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(224,105,39,0.4)]"
                    >
                      <span>CONTINUE TO SCOPE</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="px-7 py-3 rounded-full bg-gradient-to-r from-[#E06927] to-[#10B981] hover:opacity-95 text-white text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(224,105,39,0.5)] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>TRANSMITTING ROADMAP...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>REQUEST STRATEGIC AUDIT</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Success confirmation state */
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border-2 border-[#10B981] text-[#10B981] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#10B981] uppercase tracking-widest">
                    SYSTEM CONFIRMATION // DISPATCH 200 OK
                  </div>
                  <h3 className="text-3xl font-display font-extrabold text-white">
                    Growth Roadmap Requested!
                  </h3>
                  <p className="text-sm text-[#9CA3AF] max-w-md mx-auto">
                    Thank you, <span className="text-white font-medium">{formData.name || 'Partner'}</span>. Our Principal Architect is auditing <span className="text-[#E06927] font-mono">{formData.website || 'your project'}</span>. You will receive an actionable technical blueprint within 24 hours.
                  </p>
                </div>

                <div className="glass-panel p-4 rounded-2xl max-w-sm mx-auto text-left text-xs font-mono space-y-1.5 text-[#9CA3AF]">
                  <div className="text-white font-bold">DISPATCH SUMMARY:</div>
                  <div>Services: {selectedServices.join(', ')}</div>
                  <div>Budget: {budget}</div>
                  <div>Timeline: {timeline}</div>
                </div>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors"
                >
                  CLOSE WINDOW
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
