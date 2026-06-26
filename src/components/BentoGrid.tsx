"use client";

import { FEATURES } from "@/data/features";

interface BentoGridProps {
  onHoverChange: (index: number) => void;
}

export function BentoGrid({ onHoverChange }: BentoGridProps) {
  // Array of grid class configurations for Bento layout
  const gridLayouts = [
    "md:col-span-2 md:row-span-1", // Card 1: Automate
    "md:col-span-1 md:row-span-2", // Card 2: Sync (Tall)
    "md:col-span-1 md:row-span-1", // Card 3: Connect
    "md:col-span-1 md:row-span-1", // Card 4: Unified
    "md:col-span-2 md:row-span-1", // Card 5: Analytics
    "md:col-span-1 md:row-span-1", // Card 6: Scale
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
      {FEATURES.map((feat, idx) => {
        const Icon = feat.icon;
        const gridClass = gridLayouts[idx] || "";

        return (
          <div
            key={feat.id}
            tabIndex={0}
            onMouseEnter={() => onHoverChange(idx)}
            onFocus={() => onHoverChange(idx)}
            className={`group relative flex flex-col justify-between p-6 rounded-3xl bg-mystic-mint border border-oceanic-noir/10 hover:border-nocturnal-expedition/40 hover:shadow-xl hover:shadow-nocturnal-expedition/5 transition-all duration-structural overflow-hidden cursor-pointer ${gridClass}`}
          >
            {/* Soft background grid glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-arctic-powder to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-structural pointer-events-none" />

            <div className="relative z-10 flex items-start justify-between">
              <div className="p-3 bg-oceanic-noir text-forsythia rounded-2xl shadow-inner shadow-black/10 group-hover:scale-110 group-hover:bg-nocturnal-expedition transition-all duration-micro">
                <Icon size={24} />
              </div>
              <span className="text-[10px] font-display font-bold tracking-wider text-oceanic-noir/50 bg-oceanic-noir/5 px-2.5 py-1 rounded-full uppercase border border-oceanic-noir/10">
                {feat.tag}
              </span>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-lg md:text-xl font-display font-bold text-oceanic-noir group-hover:text-nocturnal-expedition transition-colors duration-micro">
                {feat.title}
              </h3>
              <p className="text-sm text-oceanic-noir/80 font-body mt-2 line-clamp-2 group-hover:line-clamp-none transition-all duration-structural">
                {feat.shortDescription}
              </p>
              
              {/* Metric indicator inside Bento card for visual excellence */}
              <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-structural">
                <span className="text-xs font-display font-semibold text-nocturnal-expedition/70">
                  Target performance:
                </span>
                <span className="text-xs font-display font-black text-deep-saffron">
                  {feat.metric}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
