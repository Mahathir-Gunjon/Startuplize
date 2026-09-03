'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Gauge, TrendingUp, MapPin, Zap } from 'lucide-react';

export function ProjectMarqueeLumora() {
  const showcaseItems = [
    {
      title: 'Lumina Cloud Infrastructure',
      category: 'Webflow Architecture & 3D Shaders',
      metric: '100/100 Mobile Speed',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      icon: <Gauge className="w-3.5 h-3.5 text-[#b15f2c]" />,
    },
    {
      title: 'Aegis High-Performance Store',
      category: 'Headless WordPress & WooCommerce',
      metric: '0.52s LCP · +64% Sales',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      icon: <Zap className="w-3.5 h-3.5 text-[#b15f2c]" />,
    },
    {
      title: 'Apex Healthcare 3-Pack Supremacy',
      category: 'Local Business & Google 3-Pack',
      metric: '#1 Rank in 8 Metro Areas',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      icon: <MapPin className="w-3.5 h-3.5 text-[#b15f2c]" />,
    },
    {
      title: 'Quantix Programmatic Scale Engine',
      category: 'Enterprise Technical SEO',
      metric: '+340% GA4 Traffic Surge',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
      icon: <TrendingUp className="w-3.5 h-3.5 text-[#b15f2c]" />,
    },
  ];

  const repeated = [...showcaseItems, ...showcaseItems];

  return (
    <section className="py-20 bg-white overflow-hidden select-none border-b border-[#e6e5e2]">
      
      {/* Header Info */}
      <div className="max-w-[88rem] mx-auto px-6 sm:px-12 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-[#b15f2c] uppercase tracking-widest font-semibold">
            CONTINUOUS FEED
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#111111] mt-1">
            Recent Deployments & Verified Field Data
          </h2>
        </div>
        <p className="text-xs font-mono text-[#8d8d8d]">
          HOVER CARDS TO PAUSE FEED AND EXAMINE BROWSER FRAMES
        </p>
      </div>

      {/* Smooth Marquee Ticker */}
      <div className="w-full">
        <div className="animate-ticker-left flex gap-6">
          {repeated.map((item, idx) => (
            <div
              key={idx}
              className="w-[340px] sm:w-[420px] shrink-0 rounded-2xl overflow-hidden bg-[#f1f0ee] border border-[#e6e5e2] hover:border-[#b15f2c]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xs group"
            >
              {/* Browser Header Bar */}
              <div className="bg-[#e3e2df] px-4 py-2.5 flex items-center justify-between border-b border-[#e6e5e2]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b6b6b6]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b6b6b6]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b6b6b6]" />
                </div>
                <span className="text-[10px] font-mono text-[#8d8d8d] truncate max-w-[200px]">
                  https://{item.title.toLowerCase().replace(/\s+/g, '-')}.com
                </span>
                <div className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#b15f2c]">
                  {item.icon}
                  <span>LIVE</span>
                </div>
              </div>

              {/* Mockup Frame */}
              <div className="relative h-[220px] sm:h-[250px] w-full bg-white">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Card Meta Footer */}
              <div className="p-4 sm:p-5 bg-white border-t border-[#e6e5e2] flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-sans font-bold text-[#111111] group-hover:text-[#b15f2c] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-[#8d8d8d]">{item.category}</div>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-[#f1f0ee] border border-[#e6e5e2] text-[11px] font-mono font-semibold text-[#111111]">
                    {item.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
