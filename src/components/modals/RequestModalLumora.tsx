'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Sparkles, Send } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';
import { useLenis } from '@/components/providers/SmoothScrollProvider';

interface RequestModalLumoraProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function RequestModalLumora({
  isOpen,
  onClose,
  defaultService,
}: RequestModalLumoraProps) {
  const { lockScroll } = useLenis();
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    defaultService ? [defaultService] : ['WordPress']
  );
  const [budget, setBudget] = useState('$10k – $25k');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    lockScroll(isOpen);
    return () => lockScroll(false);
  }, [isOpen, lockScroll]);

  const services = ['WordPress', 'Webflow', 'Technical SEO', 'Local 3-Pack'];
  const budgets = ['$5k – $10k', '$10k – $25k', '$25k – $50k', '$50k+'];

  const toggleService = (s: string) => {
    if (selectedServices.includes(s)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((item) => item !== s));
      }
    } else {
      setSelectedServices([...selectedServices, s]);
    }
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsSuccess(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop: rgba(17,17,17,0.4) with backdrop-blur-md */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#111111]/40 backdrop-blur-md"
          />

          {/* Modal Panel: Pure white #ffffff, rounded 2rem, p-8 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ type: 'spring' as const, stiffness: 350, damping: 25 }}
            className="relative z-10 w-full max-w-xl bg-white rounded-[2rem] p-6 sm:p-10 border border-[#e6e5e2] shadow-2xl overflow-hidden my-6 select-none"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#f1f0ee] hover:bg-[#e3e2df] text-[#111111] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSuccess ? (
              <div className="space-y-6">
                
                {/* Header */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#b15f2c] uppercase font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b15f2c]" />
                    STEP {step} OF 3 // STRATEGIC BRIEF
                  </div>
                  <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#111111]">
                    {step === 1 && 'Select Capabilities'}
                    {step === 2 && 'Budget & Investment'}
                    {step === 3 && 'Project Details'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8d8d8d]">
                    {step === 1 && 'Choose the core engineering architectures your brand requires.'}
                    {step === 2 && 'Estimated capital allocation for the production sprint.'}
                    {step === 3 && 'We will review your URL and deliver a custom architecture roadmap.'}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-[#f1f0ee] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#b15f2c] transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>

                {/* Step 1: Service Selector Tabs */}
                {step === 1 && (
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-mono text-[#8d8d8d] uppercase">
                      SELECT CORE DISCIPLINES
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((item) => {
                        const isSelected = selectedServices.includes(item);
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => toggleService(item)}
                            className={`p-4 rounded-xl border text-xs sm:text-sm font-sans font-semibold text-left transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                                : 'bg-[#f1f0ee] text-[#111111] border-[#e6e5e2] hover:bg-[#e3e2df]'
                            }`}
                          >
                            <span>{item}</span>
                            {isSelected && <Check className="w-4 h-4 text-[#cf8047]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 2: Budget Selector Tabs */}
                {step === 2 && (
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-mono text-[#8d8d8d] uppercase">
                      ESTIMATED PRODUCTION BUDGET (USD)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {budgets.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setBudget(opt)}
                          className={`p-4 rounded-xl border text-xs sm:text-sm font-sans font-semibold text-left transition-all ${
                            budget === opt
                              ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                              : 'bg-[#f1f0ee] text-[#111111] border-[#e6e5e2] hover:bg-[#e3e2df]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Form */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-mono text-[#8d8d8d] mb-1">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alexander Vance"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f1f0ee] border border-[#e6e5e2] text-sm text-[#111111] focus:outline-none focus:border-[#b15f2c]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#8d8d8d] mb-1">
                        WORK EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@vancecapital.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f1f0ee] border border-[#e6e5e2] text-sm text-[#111111] focus:outline-none focus:border-[#b15f2c]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#8d8d8d] mb-1">
                        CURRENT WEBSITE URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourwebsite.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f1f0ee] border border-[#e6e5e2] text-sm text-[#111111] focus:outline-none focus:border-[#b15f2c]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#8d8d8d] mb-1">
                        PROJECT BRIEF (OPTIONAL)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Key bottlenecks, timeline requirements, or migration notes..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f1f0ee] border border-[#e6e5e2] text-sm text-[#111111] focus:outline-none focus:border-[#b15f2c] resize-none"
                      />
                    </div>
                  </form>
                )}

                {/* Footer Controls */}
                <div className="pt-4 flex items-center justify-between border-t border-[#e6e5e2]">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-xs font-mono text-[#8d8d8d] hover:text-[#111111]"
                    >
                      ← BACK
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <PillButton variant="dark" size="md" onClick={handleNext}>
                      Continue
                    </PillButton>
                  ) : (
                    <PillButton
                      variant="dark"
                      size="md"
                      onClick={handleSubmit}
                      showArrow={!isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Transmit Project Brief'}
                    </PillButton>
                  )}
                </div>

              </div>
            ) : (
              /* Success Confirmation Card */
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#f1f0ee] border border-[#e6e5e2] flex items-center justify-center mx-auto text-[#b15f2c]">
                  <Check className="w-7 h-7 stroke-[2.5]" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#b15f2c] uppercase tracking-wider font-semibold">
                    DISPATCH CONFIRMED
                  </span>
                  <h3 className="font-sans font-bold text-2xl text-[#111111]">
                    Brief Received, {formData.name || 'Partner'}.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8d8d8d] max-w-sm mx-auto font-sans">
                    Our Senior Growth Architect is reviewing <span className="text-[#111111] font-mono">{formData.website || 'your project'}</span>. You will receive an actionable technical blueprint within 24 hours.
                  </p>
                </div>

                <div className="pt-4">
                  <PillButton variant="outline" size="sm" onClick={handleClose}>
                    Close Window
                  </PillButton>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
