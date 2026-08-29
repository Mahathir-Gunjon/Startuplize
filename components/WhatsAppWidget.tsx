"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Send, Sparkles, CheckCheck } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(
    "Hi Startuplize! I'd like to discuss a new design & development project."
  );

  // Direct WhatsApp Phone Number
  const phoneNumber = "15551234567";

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      {/* =========================================================================
          1. INTERACTIVE CLOSABLE WHATSAPP POPUP CARD
          ========================================================================= */}
      {isOpen && (
        <div className="mb-4 w-[330px] sm:w-[370px] rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.28)] border border-zinc-200/90 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 sm:p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-[#25D366] bg-zinc-900 shrink-0">
                <Image
                  src="/images/founder.jpg"
                  alt="Startuplize Concierge"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#25D366] ring-2 ring-[#075E54]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-white font-sans leading-tight">
                    Startuplize Team
                  </h4>
                  <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
                </div>
                <p className="text-[11px] text-emerald-100 font-medium mt-0.5">
                  Online • Typically replies in 5m
                </p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat"
              className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* WhatsApp Chat Body */}
          <div className="bg-[#ECE5DD]/40 p-4 sm:p-5 space-y-3 min-h-[140px] flex flex-col justify-end">
            <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-zinc-200/40 text-xs sm:text-sm text-zinc-800 leading-relaxed max-w-[90%] self-start">
              <p className="font-medium">
                👋 Hey there! Welcome to Startuplize.
              </p>
              <p className="mt-1 text-zinc-600">
                Looking to scale your product, build a custom Webflow/Next.js flagship, or discuss a sprint roadmap? Chat directly with us!
              </p>
              <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-zinc-400 font-mono">
                <span>Just now</span>
                <CheckCheck className="w-3.5 h-3.5 text-[#34B7F1]" />
              </div>
            </div>
          </div>

          {/* Action & Input Footer */}
          <form onSubmit={handleSend} className="p-3.5 bg-white border-t border-zinc-100 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 bg-zinc-100 rounded-2xl px-3.5 py-2 border border-zinc-200 focus-within:border-[#25D366] focus-within:bg-white transition-colors">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full bg-transparent text-xs sm:text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#25D366]/30 transition-transform active:scale-95 cursor-pointer"
                title="Send via WhatsApp"
              >
                <Send className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#25D366]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Open WhatsApp Direct</span>
            </button>
          </form>
        </div>
      )}

      {/* =========================================================================
          2. 64x64 WHATSAPP FLOATING BUTTON (Fixed Bottom Right)
          ========================================================================= */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Chat"
        className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_10px_35px_rgba(37,211,102,0.45)] hover:shadow-[0_14px_45px_rgba(37,211,102,0.6)] hover:scale-108 active:scale-95 transition-all duration-300 relative group cursor-pointer border-[2.5px] border-white"
      >
        {/* Notification Ping Badge */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-4 w-4 -mt-0.5 -mr-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34B7F1] opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#128C7E] text-[9px] font-bold text-white items-center justify-center ring-2 ring-white">
              1
            </span>
          </span>
        )}

        {isOpen ? (
          <X className="w-7 h-7 text-white stroke-[2.5]" />
        ) : (
          /* Official WhatsApp SVG Icon (34x34) */
          <svg
            viewBox="0 0 24 24"
            width="34"
            height="34"
            fill="currentColor"
            className="text-white drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        )}
      </button>
    </div>
  );
}
