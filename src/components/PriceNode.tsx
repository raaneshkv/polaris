"use client";

import { useEffect, useRef } from "react";
import { pricingStore } from "@/lib/pricing-store";
import { computePrice, formatPrice, Tier } from "@/lib/pricing-engine";

export function PriceNode({ tier }: { tier: Tier }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const write = () => {
      const { cycle, currency } = pricingStore.get();
      if (ref.current) {
        const computed = computePrice(tier, cycle, currency);
        ref.current.textContent = formatPrice(computed, currency);
      }
    };
    write(); // initial paint
    return pricingStore.subscribe(write); // subscribe to updates — bypasses React rendering!
  }, [tier]);

  // Fallback for initial server rendering
  const { cycle, currency } = pricingStore.get();
  const initialValue = formatPrice(computePrice(tier, cycle, currency), currency);

  return <span ref={ref}>{initialValue}</span>;
}
