"use client";

import React from "react";

import { ChevronUpSolidIcon } from "./icons";

export function Footer() {
  const marqueeText = "POLARIS • DATA ENGINE • AUTOMATION • SYNC PIPELINES • ";

  return (
    <footer className="bg-oceanic-noir border-t border-mystic-mint/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background soft accent light */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[150px] bg-nocturnal-expedition/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Giant Marquee Wordmark Section */}
      <div className="w-full overflow-hidden flex select-none pointer-events-none mb-16 border-b border-mystic-mint/5">
        <div className="animate-marquee flex whitespace-nowrap text-[clamp(3.5rem,14vw,10rem)] font-display font-black tracking-tighter uppercase text-arctic-powder/[0.03] pb-8">
          <span>{marqueeText}</span>
          <span>{marqueeText}</span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2">
            <span className="text-lg font-display font-black tracking-widest text-forsythia">
              POLARIS
            </span>
            <p className="mt-4 text-sm text-arctic-powder/70 font-body max-w-sm leading-relaxed">
              Arctic-grade autonomous AI workflows and continuous sync pipelines built to navigate through execution noise.
            </p>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-forsythia mb-4">
              Platform
            </h4>
            <ul className="space-y-3 text-xs md:text-sm text-arctic-powder/75 font-body">
              <li>
                <a href="#features" className="hover:text-forsythia transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-forsythia transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forsythia transition-colors">
                  API Status
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="text-xs font-display font-bold uppercase tracking-wider text-forsythia mb-4">
              Security & Legal
            </h4>
            <ul className="space-y-3 text-xs md:text-sm text-arctic-powder/75 font-body">
              <li>
                <a href="#" className="hover:text-forsythia transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forsythia transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-forsythia transition-colors">
                  GDPR / Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-mystic-mint/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-2xs md:text-xs text-arctic-powder/55 font-body">
          <span>
            © {new Date().getFullYear()} Polaris Platform Inc. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <span className="text-forsythia font-display font-semibold">
              IIT BHUBANESWAR • FRONTEND BATTLE 3.0
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2.5 bg-nocturnal-expedition hover:bg-forsythia hover:text-oceanic-noir text-forsythia rounded-full border border-mystic-mint/10 transition-all duration-micro shadow-md cursor-pointer flex items-center justify-center"
              aria-label="Back to top"
            >
              <ChevronUpSolidIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
