"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Calendar, Send, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import CalEmbed from "./CalEmbed";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage?: string;
}

export default function BookingModal({ isOpen, onClose, initialMessage }: BookingModalProps) {
  const [activeTab, setActiveTab] = useState<"cal" | "form">(initialMessage ? "form" : "cal");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "WordPress",
    message: initialMessage || "",
  });

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
      setActiveTab("form");
    }
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFormData({ name: "", email: "", service: "WordPress", message: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#0F0F0F] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80 z-10 my-6 overflow-hidden text-white"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00D28F] via-[#33FFBA] to-[#00B87D]" />

            {/* Header Controls */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#00D28F] flex items-center justify-center text-[#0A0A0A]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight font-sans">
                    Schedule Strategy Call
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Direct calendar access with Startuplize leadership
                  </p>
                </div>
              </div>

              {/* Tabs & Close */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center bg-white/[0.05] p-1 rounded-xl border border-white/10 text-xs">
                  <button
                    onClick={() => setActiveTab("cal")}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                      activeTab === "cal"
                        ? "bg-[#00D28F] text-[#0A0A0A]"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Direct Calendar
                  </button>
                  <button
                    onClick={() => setActiveTab("form")}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                      activeTab === "form"
                        ? "bg-[#00D28F] text-[#0A0A0A]"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Quick Brief
                  </button>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Area */}
            {activeTab === "cal" ? (
              <div className="w-full">
                <CalEmbed
                  id="modal-cal-embed"
                  className="w-full min-h-[550px] max-h-[70vh] rounded-2xl overflow-y-auto bg-white/[0.02] border border-white/10"
                />
              </div>
            ) : !formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto py-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00D28F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Work Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00D28F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Target Discipline
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00D28F]"
                  >
                    <option value="WordPress">WordPress Site ($400/10 Pgs)</option>
                    <option value="SEO">AI SEO & Local Search ($200/15 Pgs)</option>
                    <option value="Webflow">Webflow Platform ($600/10 Pgs)</option>
                    <option value="Meta Ads">Meta Ads & Paid Funnel ($250)</option>
                    <option value="Google Ads">Google Ads & PMax ($250)</option>
                    <option value="Next.js">Custom Next.js 14 ($800/10 Pgs)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your industry, timeline, and requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00D28F] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0A0A0A] bg-[#00D28F] hover:bg-[#00B87D] shadow-lg shadow-[#00D28F]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#00D28F]/20 text-[#00D28F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold">Brief Received</h4>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                  Thank you, {formData.name}. We will review your brief for {formData.service} and email {formData.email} within 2 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2 rounded-full bg-[#00D28F] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            )}

            {/* Bottom Footer Info */}
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D28F]" />
                <span>NDA & Confidentiality Guaranteed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#00D28F]" />
                <span>Senior Strategy Team</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
