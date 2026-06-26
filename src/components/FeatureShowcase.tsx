"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { BentoGrid } from "./BentoGrid";
import { Accordion } from "./Accordion";

export function FeatureShowcase() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [accordionIndex, setAccordionIndex] = useState<number>(0);
  const lastActiveIndexRef = useRef<number>(0);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    
    // Event listener for screen size changes
    const handleBreakpointChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      setAccordionIndex(lastActiveIndexRef.current);
    };

    // Set initial layout asynchronously to satisfy react linter rules
    requestAnimationFrame(() => {
      setIsMobile(media.matches);
      setAccordionIndex(lastActiveIndexRef.current);
    });

    media.addEventListener("change", handleBreakpointChange);

    return () => {
      media.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  const handleHoverChange = useCallback((index: number) => {
    // Context lock: Store active card without causing re-renders
    lastActiveIndexRef.current = index;
  }, []);

  return (
    <section
      id="features"
      className="relative py-24 md:py-32 bg-arctic-powder text-oceanic-noir overflow-hidden"
      aria-label="Feature matrix"
    >
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-mystic-mint/45 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-forsythia/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-xs font-display font-bold tracking-widest text-nocturnal-expedition uppercase bg-mystic-mint px-3.5 py-1.5 rounded-full border border-nocturnal-expedition/10">
            Feature Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-oceanic-noir mt-4 mb-6">
            Autonomous workflows <br />
            <span className="text-nocturnal-expedition">built to guide work through noise.</span>
          </h2>
          <p className="text-base md:text-lg text-oceanic-noir/80 font-body max-w-2xl">
            Experience complete sync pipelines and analytics in a layout optimized for your device. Responsive, server-rendered, and interactive.
          </p>
        </div>

        {/* Responsive layout rendering with Context Lock */}
        {isMobile === null ? (
          // SSR / Initial paint loading skeleton placeholder to prevent flash
          <div className="w-full h-[500px] bg-mystic-mint/30 rounded-3xl animate-pulse" />
        ) : isMobile ? (
          <Accordion initialIndex={accordionIndex} />
        ) : (
          <BentoGrid onHoverChange={handleHoverChange} />
        )}
      </div>
    </section>
  );
}
