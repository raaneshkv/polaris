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
      {/* Navigation landmark */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
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
    </>
  );
}
