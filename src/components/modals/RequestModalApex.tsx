'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { PillButton } from '@/components/ui/PillButton';
import { useLenis } from '@/components/providers/SmoothScrollProvider';

interface RequestModalApexProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function RequestModalApex({
  isOpen,
  onClose,
  defaultService,
}: RequestModalApexProps) {
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

  const services = ['WordPress', 'Webflow', 'SEO', 'Local 3-Pack'];
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setIsSuccess(false);
      setFormData({ name: '', email: '', website: '', message: '' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#060612]/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative w-full max-w-xl bg-white rounded-[2rem] p-6 sm:p-10 shadow-2xl border border-[#e7e2dd] overflow-hidden z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#f5f4f3] hover:bg-[#eeecea] text-[#060612] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSuccess ? (
              <div className="space-y-6">
                
                {/* Header */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#ff6321] uppercase font-semibold whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6321]" />
                    STEP {step} OF 3 // STARTUPLIZE BRIEF
                  </div>
                  <h3 className="font-heading font-medium text-2xl sm:text-3xl text-[#060612]">
                    {step === 1 && 'Select Capabilities'}
                    {step === 2 && 'Budget & Investment'}
                    {step === 3 && 'Project Details'}
                  </h3>
                  <p className="text-body-sm text-[#69686e] font-body">
                    {step === 1 && 'Choose the core engineering architectures your brand requires.'}
                    {step === 2 && 'Estimated capital allocation for the production sprint.'}
                    {step === 3 && 'We will review your URL and deliver a custom architecture roadmap.'}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-[#f5f4f3] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#ff6321] transition-all duration-300"
                    style={{ width: `${(step / 3) * 100}%` }}
                  />
                </div>

                {/* Step 1: Service Selector Tabs */}
                {step === 1 && (
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-mono text-[#69686e] uppercase">
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
                            className={`p-4 rounded-xl border text-xs sm:text-sm font-sans font-semibold text-left transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? 'bg-[#060612] text-white border-[#060612]'
                                : 'bg-[#f5f4f3] text-[#060612] border-[#e7e2dd] hover:bg-[#eeecea]'
                            }`}
                          >
                            <span className="whitespace-nowrap">{item}</span>
                            {isSelected && <Check className="w-4 h-4 text-[#ff6321]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 2: Budget Selector Tabs */}
                {step === 2 && (
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-mono text-[#69686e] uppercase">
                      ESTIMATED PRODUCTION BUDGET (USD)
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {budgets.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setBudget(opt)}
                          className={`p-4 rounded-xl border text-xs sm:text-sm font-sans font-semibold text-left transition-all cursor-pointer ${
                            budget === opt
                              ? 'bg-[#060612] text-white border-[#060612]'
                              : 'bg-[#f5f4f3] text-[#060612] border-[#e7e2dd] hover:bg-[#eeecea]'
                          }`}
                        >
                          <span className="whitespace-nowrap">{opt}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Form */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-mono text-[#69686e] mb-1">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alexander Vance"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f5f4f3] border border-[#e7e2dd] text-sm text-[#060612] focus:outline-none focus:border-[#ff6321]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#69686e] mb-1">
                        WORK EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@vancecapital.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f5f4f3] border border-[#e7e2dd] text-sm text-[#060612] focus:outline-none focus:border-[#ff6321]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#69686e] mb-1">
                        CURRENT WEBSITE URL (OPTIONAL)
                      </label>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://vancecapital.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f5f4f3] border border-[#e7e2dd] text-sm text-[#060612] focus:outline-none focus:border-[#ff6321]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#69686e] mb-1">
                        PROJECT BRIEF / OBJECTIVES
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your conversion bottlenecks or timeline..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#f5f4f3] border border-[#e7e2dd] text-sm text-[#060612] focus:outline-none focus:border-[#ff6321] resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-full bg-[#ff6321] hover:bg-[#e54c0e] text-white font-medium text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 whitespace-nowrap"
                      >
                        {isSubmitting ? 'Engineering request...' : 'Transmit Project Brief ↗'}
                      </button>
                    </div>
                  </form>
                )}

                {/* Footer Controls for Step 1 and 2 */}
                {step < 3 && (
                  <div className="flex items-center justify-between pt-4 border-t border-[#e7e2dd]">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-xs font-mono text-[#69686e] hover:text-[#060612] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        ← PREVIOUS
                      </button>
                    ) : (
                      <div />
                    )}

                    <PillButton
                      variant="coral"
                      size="sm"
                      onClick={handleNext}
                      showArrow={true}
                      className="whitespace-nowrap shrink-0"
                    >
                      Next step
                    </PillButton>
                  </div>
                )}

              </div>
            ) : (
              /* Success State */
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#f5f4f3] border border-[#e7e2dd] text-[#ff6321] flex items-center justify-center mx-auto shadow-sm">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="font-heading font-medium text-2xl sm:text-3xl text-[#060612]">
                  Engineering Request Received
                </h3>
                <p className="text-body-sm text-[#69686e] max-w-sm mx-auto font-body">
                  Our senior engineering team at <span className="font-semibold text-[#060612]">startuplize</span> is reviewing your parameters. We will transmit a bespoke architectural roadmap within 24 business hours.
                </p>
                <div className="pt-4">
                  <PillButton
                    variant="dark"
                    size="sm"
                    onClick={handleClose}
                    showArrow={false}
                    className="whitespace-nowrap shrink-0"
                  >
                    Close Briefing
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
