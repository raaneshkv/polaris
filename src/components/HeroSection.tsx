"use client";

import { StatStrip } from "./StatStrip";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero — Polaris AI data automation platform"
      className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-oceanic-noir to-nocturnal-expedition overflow-hidden"
    >
      {/* Animated bottom edge radial glow — pulsing brand signature */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[900px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #FFC801 0%, #FF9932 40%, transparent 70%)",
          opacity: 0.22,
          animation: "glow-pulse 4s ease-in-out infinite",
        }}
      />

      {/* Secondary smaller glow for depth */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[400px] h-[200px] rounded-full pointer-events-none blur-[60px]"
        style={{
          background: "radial-gradient(ellipse, #FFC801 0%, transparent 70%)",
          opacity: 0.35,
          animation: "glow-pulse 4s ease-in-out infinite 1s",
        }}
      />

      {/* Decorative coordinate grid for nav theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Top-right accent star */}
      <div className="absolute top-32 right-12 w-2 h-2 rounded-full bg-forsythia/60 pointer-events-none" style={{ animation: "glow-pulse 3s ease-in-out infinite 0.5s" }} />
      <div className="absolute top-48 right-32 w-1.5 h-1.5 rounded-full bg-forsythia/40 pointer-events-none" style={{ animation: "glow-pulse 3s ease-in-out infinite 1.5s" }} />
      <div className="absolute top-40 left-16 w-1 h-1 rounded-full bg-deep-saffron/50 pointer-events-none" style={{ animation: "glow-pulse 3s ease-in-out infinite 0.8s" }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10 flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <div className="mb-6 opacity-0 animate-stagger-fade">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-nocturnal-expedition/80 border border-forsythia/20 rounded-full text-xs font-display font-bold tracking-widest text-forsythia uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-forsythia inline-block" style={{ animation: "glow-pulse 2s ease-in-out infinite" }} />
            Now in Open Beta — Arctic-Grade AI Pipelines
          </span>
        </div>

        {/* Headline with stagger entry */}
        <h1 className="max-w-4xl text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-arctic-powder opacity-0 animate-stagger-fade [animation-delay:60ms]">
          Navigate your data work through the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-deep-saffron">
            noise.
          </span>
        </h1>

        {/* Subhead with stagger entry */}
        <p className="max-w-2xl mt-6 text-base sm:text-lg md:text-xl text-arctic-powder/85 font-body leading-relaxed opacity-0 animate-stagger-fade [animation-delay:120ms]">
          Polaris is a production-grade, autonomous AI data engine that connects, syncs, and automates pipelines with arctic-grade speed and reliability.
        </p>

        {/* CTA Buttons with stagger entry */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 opacity-0 animate-stagger-fade [animation-delay:180ms]">
          <a
            href="#pricing"
            className="px-8 py-4 bg-gradient-to-r from-forsythia to-deep-saffron text-oceanic-noir font-display font-black text-sm rounded-xl hover:shadow-lg hover:shadow-forsythia/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-micro"
          >
            Deploy Polaris
          </a>
          <a
            href="#features"
            className="px-8 py-4 bg-nocturnal-expedition text-arctic-powder border border-mystic-mint/10 hover:border-forsythia/40 hover:bg-nocturnal-expedition/80 hover:text-forsythia font-display font-bold text-sm rounded-xl transition-all duration-micro"
          >
            Explore features →
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 opacity-0 animate-stagger-fade [animation-delay:240ms]">
          {["SOC 2 Compliant", "GDPR Ready", "99.9% Uptime SLA", "Zero-lock-in"].map((badge) => (
            <span key={badge} className="text-xs font-display font-bold text-arctic-powder/50 flex items-center gap-1.5">
              <span className="text-forsythia">✓</span> {badge}
            </span>
          ))}
        </div>

        {/* Count-up Stat Strip */}
        <StatStrip />
      </div>
    </section>
  );
}
