'use client';

interface FooterApexProps {
  onOpenBooking?: () => void;
}

export function FooterApex({ onOpenBooking }: FooterApexProps) {
  return (
    <footer
      id="contact"
      className="relative z-10 bg-[#060612] text-white rounded-t-[2.5rem] sm:rounded-t-[3rem] lg:rounded-t-[3.5rem] pt-36 sm:pt-40 md:pt-44 lg:pt-52 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-12 overflow-hidden select-none"
    >

      {/* Giant Bottom Watermark: "STARTUPLIZE" */}
      <div className="absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[6rem] sm:text-[11rem] md:text-[17rem] font-heading font-medium text-white/[0.035] tracking-tighter uppercase whitespace-nowrap leading-none z-0">
        STARTUPLIZE
      </div>

      <div className="max-w-[84rem] mx-auto relative z-10 space-y-10 sm:space-y-16">

        {/* 4-Column Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

          {/* Col 1: Brand Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 whitespace-nowrap">
              <img
                src="/startuplize-logo.png"
                alt="Startuplize"
                className="h-7 w-auto object-contain shrink-0"
              />
              <span className="font-heading font-medium text-xl text-white">startuplize.</span>
            </div>
            <p className="text-body-sm text-zinc-300 leading-relaxed font-body">
              We build ultra-fast WordPress & Webflow platforms, programmatic SEO systems, and local search dominance for ambitious businesses.
            </p>
            <div className="text-body-sm font-mono text-zinc-400 whitespace-nowrap">
              EST. 2018 · SCALING NATIONWIDE
            </div>
          </div>

          {/* Col 2: Capabilities */}
          <div className="space-y-4">
            <div className="text-body-sm font-mono uppercase text-zinc-300 tracking-wider font-semibold whitespace-nowrap">
              Capabilities
            </div>
            <ul className="space-y-2 text-body-sm font-body text-white/85">
              <li><a href="#services" className="hover:text-[#ff7e47] transition-colors whitespace-nowrap">Custom WordPress Builds</a></li>
              <li><a href="#services" className="hover:text-[#ff7e47] transition-colors whitespace-nowrap">Elementor Pro Architecture</a></li>
              <li><a href="#services" className="hover:text-[#ff7e47] transition-colors whitespace-nowrap">Webflow CMS Systems</a></li>
              <li><a href="#services" className="hover:text-[#ff7e47] transition-colors whitespace-nowrap">Fast WooCommerce Stores</a></li>
              <li><a href="#services" className="hover:text-[#ff7e47] transition-colors whitespace-nowrap">Mobile Speed Optimization</a></li>
            </ul>
          </div>

          {/* Col 3: Growth Systems */}
          <div className="space-y-4">
            <div className="text-body-sm font-mono uppercase text-zinc-300 tracking-wider font-semibold whitespace-nowrap">
              Growth Systems
            </div>
            <ul className="space-y-2 text-body-sm font-body text-white/85">
              <li><a href="#services" className="hover:text-[#ff7e47] transition-colors whitespace-nowrap">Google Business Profile (GBP)</a></li>
              <li><a href="#services" className="hover:text-[#ff7e47] transition-colors whitespace-nowrap">Local Map Pack Visibility</a></li>
              <li><a href="#services" className="hover:text-[#ff7e47] transition-colors whitespace-nowrap">Local Citation Directory Sync</a></li>
              <li><a href="#services" className="hover:text-[#ff7e47] transition-colors whitespace-nowrap">Automated 5★ Review Systems</a></li>
              <li><a href="#services" className="hover:text-[#ff7e47] transition-colors whitespace-nowrap">Technical On-Page SEO</a></li>
            </ul>
          </div>

          {/* Col 4: Direct Lines */}
          <div className="space-y-4">
            <div className="text-body-sm font-mono uppercase text-zinc-300 tracking-wider font-semibold whitespace-nowrap">
              Direct Lines
            </div>
            <div className="space-y-2.5 text-body-sm text-white/85 font-body">
              <div>
                <a
                  href="https://cal.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ff7e47] transition-colors flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>Schedule via Cal.com</span>
                  <span>↗</span>
                </a>
              </div>
              <div>
                <a
                  href="mailto:partner@startuplize.com"
                  className="hover:text-[#ff7e47] transition-colors whitespace-nowrap"
                >
                  partner@startuplize.com
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#ff7e47] transition-colors whitespace-nowrap"
                >
                  Direct WhatsApp Line ↗
                </a>
              </div>
              <div className="pt-2 text-body-sm text-zinc-400">
                120 Court Lane, Suite 400 · Global Remote
              </div>
            </div>
          </div>

        </div>

        {/* Legal Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-body-sm font-mono text-zinc-400 border-t border-white/10 pt-6 sm:pt-8 gap-4 text-center sm:text-left">
          <div className="whitespace-normal sm:whitespace-nowrap">
            © 2026 STARTUPLIZE DIGITAL STUDIO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span>120 Court Lane, Suite 400</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
