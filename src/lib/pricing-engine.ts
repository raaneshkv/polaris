export type Tier = 'scout' | 'voyager' | 'polaris';
export type Cycle = 'monthly' | 'annual';
export type Currency = 'INR' | 'USD' | 'EUR';

export const PRICING_MATRIX = {
  tiers: {
    scout: {
      name: 'Scout',
      baseUsdMonthly: 19,
    },
    voyager: {
      name: 'Voyager',
      baseUsdMonthly: 49,
    },
    polaris: {
      name: 'Polaris',
      baseUsdMonthly: 129,
    },
  },
  cycles: {
    monthly: {
      label: 'Monthly',
      months: 1,
      discountMultiplier: 1,
    },
    annual: {
      label: 'Annual',
      months: 12,
      discountMultiplier: 0.8,
    },
  },
  currencies: {
    USD: {
      symbol: '$',
      tariff: 1,
      locale: 'en-US',
    },
    EUR: {
      symbol: '€',
      tariff: 0.93,
      locale: 'de-DE',
    },
    INR: {
      symbol: '₹',
      tariff: 83.2,
      locale: 'en-IN',
    },
  },
} as const;

export function computePrice(tier: Tier, cycle: Cycle, currency: Currency): number {
  const tierConfig = PRICING_MATRIX.tiers[tier];
  const cycleConfig = PRICING_MATRIX.cycles[cycle];
  const currencyConfig = PRICING_MATRIX.currencies[currency];

  return (
    tierConfig.baseUsdMonthly *
    cycleConfig.months *
    cycleConfig.discountMultiplier *
    currencyConfig.tariff
  );
}

export function formatPrice(value: number, currency: Currency): string {
  const config = PRICING_MATRIX.currencies[currency];

  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value);
}
