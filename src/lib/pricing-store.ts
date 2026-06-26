import { Cycle, Currency } from "./pricing-engine";

type Listener = () => void;

let state = {
  cycle: "monthly" as Cycle,
  currency: "USD" as Currency,
};

const listeners = new Set<Listener>();

export const pricingStore = {
  get: () => state,
  set: (partial: Partial<typeof state>) => {
    state = { ...state, ...partial };
    listeners.forEach((l) => l());
  },
  subscribe: (l: Listener) => {
    listeners.add(l);
    return () => {
      listeners.delete(l);
    };
  },
};
