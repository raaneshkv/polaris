"use client";

import { useEffect, useRef } from "react";
import { pricingStore } from "@/lib/pricing-store";
import { PriceNode } from "./PriceNode";

// Separated Leaf Component for Billing Toggle to prevent Pricing Card re-renders
function BillingToggle() {
  const monthlyRef = useRef<HTMLButtonElement>(null);
  const annualRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => {
      const { cycle } = pricingStore.get();
      if (cycle === "monthly") {
        monthlyRef.current?.classList.add("bg-forsythia", "text-oceanic-noir", "font-bold");
        monthlyRef.current?.classList.remove("text-arctic-powder/70");
        monthlyRef.current?.setAttribute("aria-checked", "true");
        annualRef.current?.classList.remove("bg-forsythia", "text-oceanic-noir", "font-bold");
        annualRef.current?.classList.add("text-arctic-powder/70");
        annualRef.current?.setAttribute("aria-checked", "false");
      } else {
        annualRef.current?.classList.add("bg-forsythia", "text-oceanic-noir", "font-bold");
        annualRef.current?.classList.remove("text-arctic-powder/70");
        annualRef.current?.setAttribute("aria-checked", "true");
        monthlyRef.current?.classList.remove("bg-forsythia", "text-oceanic-noir", "font-bold");
        monthlyRef.current?.classList.add("text-arctic-powder/70");
        monthlyRef.current?.setAttribute("aria-checked", "false");
      }
    };
    update();
    return pricingStore.subscribe(update);
  }, []);

  return (
    <div
      role="radiogroup"
      aria-label="Billing cycle"
      className="inline-flex items-center gap-1 p-1 bg-nocturnal-expedition rounded-full border border-mystic-mint/10"
    >
      <button
        ref={monthlyRef}
        type="button"
        role="radio"
        aria-checked="false"
        onClick={() => pricingStore.set({ cycle: "monthly" })}
        className="px-4 py-2 text-xs md:text-sm font-display font-medium rounded-full transition-all duration-micro"
      >
        Monthly
      </button>
      <button
        ref={annualRef}
        type="button"
        role="radio"
        aria-checked="false"
        onClick={() => pricingStore.set({ cycle: "annual" })}
        className="px-4 py-2 text-xs md:text-sm font-display font-medium rounded-full transition-all duration-micro flex items-center gap-1.5"
      >
        Annually
        <span className="px-1.5 py-0.5 text-[10px] font-sans font-bold bg-deep-saffron text-oceanic-noir rounded-md">
          -20%
        </span>
      </button>
    </div>
  );
}

// Separated Leaf Component for Currency Selection to prevent Pricing Card re-renders
function CurrencyToggle() {
  const usdRef = useRef<HTMLButtonElement>(null);
  const eurRef = useRef<HTMLButtonElement>(null);
  const inrRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => {
      const { currency } = pricingStore.get();
      const refs = { USD: usdRef, EUR: eurRef, INR: inrRef };
      Object.entries(refs).forEach(([curr, ref]) => {
        if (currency === curr) {
          ref.current?.classList.add("bg-forsythia", "text-oceanic-noir", "font-bold");
          ref.current?.classList.remove("text-arctic-powder/70");
          ref.current?.setAttribute("aria-checked", "true");
        } else {
          ref.current?.classList.remove("bg-forsythia", "text-oceanic-noir", "font-bold");
          ref.current?.classList.add("text-arctic-powder/70");
          ref.current?.setAttribute("aria-checked", "false");
        }
      });
    };
    update();
    return pricingStore.subscribe(update);
  }, []);

  return (
    <div
      role="radiogroup"
      aria-label="Currency"
      className="inline-flex items-center gap-1 p-1 bg-nocturnal-expedition rounded-full border border-mystic-mint/10"
    >
      <button
        ref={usdRef}
        type="button"
        role="radio"
        aria-checked="false"
        onClick={() => pricingStore.set({ currency: "USD" })}
        className="w-12 h-8 flex items-center justify-center text-xs md:text-sm font-display font-semibold rounded-full transition-all duration-micro"
      >
        USD
      </button>
      <button
        ref={eurRef}
        type="button"
        role="radio"
        aria-checked="false"
        onClick={() => pricingStore.set({ currency: "EUR" })}
        className="w-12 h-8 flex items-center justify-center text-xs md:text-sm font-display font-semibold rounded-full transition-all duration-micro"
      >
        EUR
      </button>
      <button
        ref={inrRef}
        type="button"
        role="radio"
        aria-checked="false"
        onClick={() => pricingStore.set({ currency: "INR" })}
        className="w-12 h-8 flex items-center justify-center text-xs md:text-sm font-display font-semibold rounded-full transition-all duration-micro"
      >
        INR
      </button>
    </div>
  );
}

// Sub-component for cycle description underneath the price nodes
function CycleDescription() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const update = () => {
      const { cycle } = pricingStore.get();
      if (ref.current) {
        ref.current.textContent = cycle === "monthly" ? "per month" : "per year (billed annually)";
      }
    };
    update();
    return pricingStore.subscribe(update);
  }, []);

  return (
    <span ref={ref} className="text-xs text-arctic-powder/60 font-body transition-opacity duration-micro" />
  );
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 bg-oceanic-noir border-t border-mystic-mint/10"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-nocturnal-expedition/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-forsythia mb-4">
            Arctic-Grade Pricing
          </h2>
          <p className="text-lg text-arctic-powder/85 font-body max-w-2xl mx-auto">
            Choose a plan computed dynamically at runtime. Scaled to your workload, with zero hidden platform fees.
          </p>

          {/* Pricing Controls - Isolated triggers */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <BillingToggle />
            <CurrencyToggle />
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Scout */}
          <div className="flex flex-col justify-between p-8 rounded-3xl bg-nocturnal-expedition/50 backdrop-blur-sm border border-mystic-mint/10 hover:border-forsythia/35 transition-all duration-structural group">
            <div>
              <div className="mb-6">
                <span className="text-xs font-display font-bold tracking-widest text-mystic-mint uppercase bg-nocturnal-expedition px-3 py-1 rounded-full border border-mystic-mint/10">
                  Scout
                </span>
              </div>
              <p className="text-sm text-arctic-powder/75 font-body mb-6">
                For developers exploring autonomous automation and staging pipelines.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl md:text-5xl font-display font-bold text-forsythia">
                  <PriceNode tier="scout" />
                </span>
                <CycleDescription />
              </div>

              <div className="w-full h-px bg-mystic-mint/10 my-6" />

              <ul className="space-y-4 text-sm text-arctic-powder/80 font-body">
                <li className="flex items-center gap-3">
                  <span className="text-forsythia">✓</span> Up to 5 data pipelines
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-forsythia">✓</span> 10,000 automated runs/mo
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-forsythia">✓</span> Basic logging & monitoring
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-forsythia">✓</span> Discord community support
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button className="w-full py-3.5 px-4 rounded-xl font-display font-bold text-sm bg-nocturnal-expedition text-arctic-powder border border-mystic-mint/20 hover:border-forsythia hover:text-forsythia transition-all duration-micro">
                Get Started
              </button>
            </div>
          </div>

          {/* Card 2: Voyager (Most Popular) */}
          <div className="relative flex flex-col justify-between p-8 rounded-3xl bg-nocturnal-expedition border-2 border-forsythia shadow-xl shadow-forsythia/5 scale-100 lg:scale-[1.03] transition-all duration-structural group">
            {/* Best Seller Badge */}
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-display font-black tracking-widest text-oceanic-noir uppercase bg-forsythia rounded-full shadow-lg">
              Most Popular
            </span>

            <div>
              <div className="mb-6 flex justify-between items-center">
                <span className="text-xs font-display font-bold tracking-widest text-forsythia uppercase bg-oceanic-noir px-3 py-1 rounded-full border border-forsythia/20">
                  Voyager
                </span>
              </div>
              <p className="text-sm text-arctic-powder/85 font-body mb-6">
                Production-ready pipeline deployment with high-scale task triggers.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl md:text-5xl font-display font-bold text-forsythia">
                  <PriceNode tier="voyager" />
                </span>
                <CycleDescription />
              </div>

              <div className="w-full h-px bg-mystic-mint/20 my-6" />

              <ul className="space-y-4 text-sm text-arctic-powder/85 font-body">
                <li className="flex items-center gap-3 font-semibold text-arctic-powder">
                  <span className="text-forsythia">✓</span> Unlimited data pipelines
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-forsythia">✓</span> 500,000 automated runs/mo
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-forsythia">✓</span> Advanced analytics & alerts
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-forsythia">✓</span> API Access & Webhooks
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-forsythia">✓</span> Priority support (under 2h)
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button className="w-full py-3.5 px-4 rounded-xl font-display font-black text-sm bg-forsythia text-oceanic-noir hover:bg-deep-saffron hover:text-arctic-powder transition-all duration-micro shadow-lg shadow-forsythia/10">
                Deploy Now
              </button>
            </div>
          </div>

          {/* Card 3: Polaris */}
          <div className="flex flex-col justify-between p-8 rounded-3xl bg-nocturnal-expedition/50 backdrop-blur-sm border border-mystic-mint/10 hover:border-forsythia/35 transition-all duration-structural group">
            <div>
              <div className="mb-6">
                <span className="text-xs font-display font-bold tracking-widest text-mystic-mint uppercase bg-nocturnal-expedition px-3 py-1 rounded-full border border-mystic-mint/10">
                  Polaris
                </span>
              </div>
              <p className="text-sm text-arctic-powder/75 font-body mb-6">
                Enterprise autonomy for planet-scale workflows and dedicated nodes.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl md:text-5xl font-display font-bold text-forsythia">
                  <PriceNode tier="polaris" />
                </span>
                <CycleDescription />
              </div>

              <div className="w-full h-px bg-mystic-mint/10 my-6" />

              <ul className="space-y-4 text-sm text-arctic-powder/80 font-body">
                <li className="flex items-center gap-3">
                  <span className="text-forsythia">✓</span> Everything in Voyager
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-forsythia">✓</span> Unlimited automated runs
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-forsythia">✓</span> Custom SLA & dedicated support
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-forsythia">✓</span> Custom enterprise connectors
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-forsythia">✓</span> Role-based access control (RBAC)
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <button className="w-full py-3.5 px-4 rounded-xl font-display font-bold text-sm bg-nocturnal-expedition text-arctic-powder border border-mystic-mint/20 hover:border-forsythia hover:text-forsythia transition-all duration-micro">
                Contact Enterprise
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
