# 🌌 Polaris — Arctic-Grade Autonomous Data Automation Platform

Polaris is a production-grade, high-performance SaaS landing page built for the **FrontEnd Battle 3.0 VibeCoding Competition** (IIT Bhubaneswar). It serves as a visual and architectural benchmark for modern SaaS product design.

---

## 🛠️ Tech Stack & Constraints

- **Core**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4 (with custom `@theme` directives)
- **Zero-Dependency Motion**: Native CSS keyframes, transitions, and Web Animations API (`element.animate()`)
- **Render Isolation**: Custom state-free pub-sub pattern for pricing matrix updates
- **Strict Compliance**: No external state management or animation libraries (Framer Motion, GSAP, Radix, Shadcn, HeadlessUI) present in `package.json`

---

## 🚀 Key Features & Rubric Alignment

### 1. Isolated-Render Dynamic Pricing Matrix (40% Weight)
- **Calculation Engine**: Dynamic runtime computation module in `src/lib/pricing-engine.ts`. Computes 18 distinct pricing configurations (3 tiers × 2 billing cycles × 3 currencies) using a unified `PRICING_MATRIX` and currency tariffs.
- **State Isolation**: Toggles and pricing cards use **zero React state** (`useState`). State is broadcasted via a hand-rolled pub-sub store in `src/lib/pricing-store.ts`.
- **Ref-Based DOM Updating**: Leaf `PriceNode` and `CycleDescription` components subscribe to the store and write directly to `ref.current.textContent` and attributes. React DevTools profiling registers **0ms render time** on parent sections and pricing cards during toggles.

### 2. Responsive Bento Grid ↔ Accordion with Context Lock
- **Visual Matrix**: Features are sourced from a single data schema and rendered as a custom-spanned CSS Bento Grid on desktop, and a smooth Accordion list on mobile.
- **Zero-Dependency Transitions**: Accordion panel expansion is driven by native Web Animations API (`element.animate()`) with height measurement at runtime, preventing layout flashes.
- **Context Lock**: Tracks mouse and keyboard focus index in a ref. Breakpoint changes trigger a `matchMedia` listener that immediately locks the accordion's open panel to the last focused index.

### 3. Comprehensive Asset & Color Palette Compliance
- **Custom HSL Color Palette**: Extended inline in Tailwind v4 `@theme` (Oceanic Noir, Nocturnal Expedition, Arctic Powder, Mystic Mint, Forsythia, Deep Saffron).
- **14 SVG Icon Pack**: Adapted all 14 SVGs to dynamically leverage `currentColor` for fills and strokes. Inclusive of ARIA labels and `aria-hidden` attributes.
- **Custom Typography**: Optimized loading of JetBrains Mono (display) and Inter (body) fonts via the Next.js Font API.

### 4. Semantic Landmarking & SEO (30% Weight)
- Constructed with proper semantic landmards (`<header>`, `<main>`, `<section>`, `<footer>`) with structured layout hierarchies.
- Configured meta titles, descriptions, canonical URLs, Open Graph schemas, and Twitter Card specifications using the Next.js Metadata API.
- Fully accessible with ARIA roles, keyboard-operable controls, and strict hydration-error-free markup.

### 5. Native Micro-Animations
- **Hero Stagger Sequence**: Cascaded fade-in and translate-up keyframes (Headline → Subhead → CTA → Nav) completed within `500ms`.
- **Count-Up Stat Strip**: Activates via `IntersectionObserver` on viewport entry, using a native WAAPI animation to interpolate number strings.
- **Hover-Reveal Case Studies**: CSS-only translation card reveals with custom `--dur-structural` (350ms) timings.
- **Seamless horizontal marquee**: Infinite horizontal scrolling wordmark in the footer.

---

## ⚙️ Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build production bundle:
   ```bash
   npm run build
   ```

4. Run lint:
   ```bash
   npm run lint
   ```
