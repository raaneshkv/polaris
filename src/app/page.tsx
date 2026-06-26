import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { PricingSection } from "@/components/PricingSection";
import { SocialProof } from "@/components/SocialProof";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Skip navigation link — keyboard accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-forsythia focus:text-oceanic-noir focus:font-bold focus:rounded-lg focus:text-sm"
      >
        Skip to main content
      </a>

      {/* Navigation landmark */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full">
        {/* Hero Section (Dark) */}
        <HeroSection />

        {/* Feature Matrix Bento / Accordion Section (Light) */}
        <FeatureShowcase />

        {/* Dynamic Pricing Section (Dark) */}
        <PricingSection />

        {/* Client Social Proof Section (Light) */}
        <SocialProof />
      </main>

      {/* Footer landmark (Dark) */}
      <Footer />

      {/* No-JS fallback notice */}
      <noscript>
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "#FFC801", color: "#172B36", padding: "12px", textAlign: "center", fontFamily: "sans-serif", fontSize: "14px", fontWeight: "bold", zIndex: 9999 }}>
          JavaScript is required for full interactivity. Pricing toggles and animations need JS enabled.
        </div>
      </noscript>
    </>
  );
}
