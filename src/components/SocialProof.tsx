"use client";

import { LinkSolidIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons";

interface ClientProof {
  name: string;
  industry: string;
  quote: string;
  author: string;
  stat: string;
}

const CLIENTS: ClientProof[] = [
  {
    name: "Aether Data",
    industry: "Enterprise AI Infrastructure",
    quote: "Polaris automated 85% of our ETL pipeline overhead in less than 48 hours. Absolute game changer.",
    author: "Elena Rostova, Chief Architect",
    stat: "+340% Pipeline Speed",
  },
  {
    name: "Helios Robotics",
    industry: "Autonomous Fleet Logistics",
    quote: "The CDC synchronization resolved all our concurrency glitches across edge hubs. Indispensable.",
    author: "Marc van der Berg, VP Engineering",
    stat: "12ms Sync Latency",
  },
  {
    name: "Hyperion Labs",
    industry: "Federated Biotech Search",
    quote: "One federated GraphQL endpoint replaced 12 isolated legacy services. Clean and hyper-performant.",
    author: "Dr. Sarah Chen, Director of IT",
    stat: "40% Manual Work Saved",
  },
  {
    name: "Apex Systems",
    industry: "High-Frequency Tech Fin",
    quote: "Serverless scaling handled our 10B+ daily query spikes without a single database lock. Arctic stable.",
    author: "David Vance, Principal Engineer",
    stat: "10B+ Daily Tasks Stable",
  },
];

export function SocialProof() {
  return (
    <section
      id="social"
      className="relative py-24 md:py-32 bg-mystic-mint/30 text-oceanic-noir border-t border-b border-oceanic-noir/5 overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-forsythia/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-display font-bold tracking-widest text-nocturnal-expedition uppercase bg-mystic-mint px-3.5 py-1.5 rounded-full border border-nocturnal-expedition/10">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-oceanic-noir mt-4">
            Validated by industry leaders.
          </h2>
        </div>

        {/* Hover-reveal list */}
        <div className="relative divide-y divide-oceanic-noir/10 border-y border-oceanic-noir/10">
          {CLIENTS.map((client, idx) => (
            <div
              key={client.name}
              className="group relative py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
            >
              {/* Left Column: Client Name */}
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <span className="text-2xl md:text-4xl font-display font-black tracking-tight text-oceanic-noir/40 group-hover:text-oceanic-noir transition-all duration-[350ms] ease-out-premium">
                  0{idx + 1}
                </span>
                <div>
                  <h3 className="text-xl md:text-3xl font-display font-black text-oceanic-noir group-hover:translate-x-2 transition-transform duration-[350ms] ease-out-premium flex items-center gap-2">
                    {client.name}
                    <LinkSolidIcon size={16} className="opacity-0 group-hover:opacity-100 text-deep-saffron transition-all duration-[350ms] ease-out-premium" />
                  </h3>
                  <p className="text-xs md:text-sm text-oceanic-noir/60 font-body mt-1 group-hover:translate-x-2 transition-transform duration-[350ms] ease-out-premium">
                    {client.industry}
                  </p>
                </div>
              </div>

              {/* Right Column: Mini Stat Display */}
              <div className="relative z-10 md:text-right">
                <span className="text-lg md:text-xl font-display font-black text-nocturnal-expedition group-hover:text-deep-saffron transition-colors duration-[350ms]">
                  {client.stat}
                </span>
              </div>

              {/* Hover-Reveal Card: Absolute Positioned on Hover */}
              <div className="opacity-0 scale-95 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto absolute top-1/2 left-1/2 md:left-2/3 -translate-x-1/2 -translate-y-1/2 md:-translate-y-1/2 z-30 w-80 md:w-96 p-6 rounded-2xl bg-gradient-to-br from-forsythia to-deep-saffron text-oceanic-noir shadow-2xl transition-all duration-[350ms] ease-out-premium pointer-events-none">
                <div className="absolute top-2 right-4 text-5xl font-display font-black text-oceanic-noir/10 select-none">
                  ”
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-2xs font-display font-black tracking-wider uppercase text-oceanic-noir/60 bg-white/20 px-2 py-0.5 rounded-md self-start">
                    {client.stat}
                  </span>
                  <p className="text-sm font-body font-semibold italic leading-relaxed">
                    &quot;{client.quote}&quot;
                  </p>
                  <div className="w-full h-px bg-oceanic-noir/10 my-1" />
                  <span className="text-xs font-display font-black">
                    {client.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Pager Navigation displaying ChevronLeft/Right */}
        <div className="mt-12 flex items-center justify-between text-xs font-display font-bold text-oceanic-noir/60">
          <span>Showing {CLIENTS.length} client stories</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous page"
              className="p-2 border border-oceanic-noir/10 hover:border-oceanic-noir/30 rounded-lg hover:text-oceanic-noir transition-colors cursor-pointer flex items-center justify-center"
            >
              <ChevronLeftIcon size={16} />
            </button>
            <span className="px-2">Page 1 / 1</span>
            <button
              type="button"
              aria-label="Next page"
              className="p-2 border border-oceanic-noir/10 hover:border-oceanic-noir/30 rounded-lg hover:text-oceanic-noir transition-colors cursor-pointer flex items-center justify-center"
            >
              <ChevronRightIcon size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
