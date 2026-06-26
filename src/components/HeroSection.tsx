"use client";

import { StatStrip } from "./StatStrip";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-oceanic-noir to-nocturnal-expedition overflow-hidden"
    >
      {/* Bottom edge soft radial glow brand signature */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-forsythia to-deep-saffron rounded-full blur-[140px] opacity-25 pointer-events-none" />

      {/* Decorative stars / coordinate grid for nav theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10 flex flex-col items-center text-center">
        {/* Headline with stagger entry */}
        <h1 className="max-w-4xl text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-arctic-powder opacity-0 animate-stagger-fade">
          Navigate your data work through the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-deep-saffron">
            noise.
          </span>
        </h1>

        {/* Subhead with stagger entry */}
        <p className="max-w-2xl mt-6 text-base sm:text-lg md:text-xl text-arctic-powder/85 font-body leading-relaxed opacity-0 animate-stagger-fade [animation-delay:60ms]">
          Polaris is a production-grade, autonomous AI data engine that connects, syncs, and automates pipelines with arctic-grade speed and reliability.
        </p>

        {/* CTA Buttons with stagger entry */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 opacity-0 animate-stagger-fade [animation-delay:120ms]">
          <a
            href="#pricing"
            className="px-8 py-4 bg-gradient-to-r from-forsythia to-deep-saffron text-oceanic-noir font-display font-black text-sm rounded-xl hover:shadow-lg hover:shadow-forsythia/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-micro"
          >
            Deploy Polaris
          </a>
          <a
            href="#features"
            className="px-8 py-4 bg-nocturnal-expedition text-arctic-powder border border-mystic-mint/10 hover:border-forsythia/30 font-display font-bold text-sm rounded-xl hover:bg-nocturnal-expedition/80 transition-all duration-micro"
          >
            Explore features
          </a>
        </div>

        {/* Count-up Stat Strip */}
        <StatStrip />
      </div>
    </section>
  );
}
