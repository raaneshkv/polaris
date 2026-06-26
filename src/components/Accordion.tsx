"use client";

import { useState, useEffect, useRef } from "react";
import { FEATURES, Feature } from "@/data/features";
import { ChevronDownIcon, ChevronUpIcon } from "./icons";

interface AccordionProps {
  initialIndex: number;
}

interface AccordionItemProps {
  feature: Feature;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

function AccordionItem({ feature, isOpen, onClick, index }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const isFirstMount = useRef(true);
  const Icon = feature.icon;

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    if (isFirstMount.current) {
      isFirstMount.current = false;
      element.style.height = isOpen ? "auto" : "0px";
      element.style.opacity = isOpen ? "1" : "0";
      element.style.overflow = "hidden";
      return;
    }

    if (animationRef.current) {
      animationRef.current.cancel();
    }

    if (isOpen) {
      element.style.height = "auto";
      const targetHeight = element.scrollHeight;
      element.style.height = "0px";
      void element.offsetHeight; // force reflow

      animationRef.current = element.animate(
        [
          { height: "0px", opacity: 0 },
          { height: `${targetHeight}px`, opacity: 1 },
        ],
        {
          duration: 350,
          easing: "var(--ease-in-out-structural)",
          fill: "both",
        }
      );

      animationRef.current.onfinish = () => {
        element.style.height = "auto";
      };
    } else {
      const currentHeight = element.scrollHeight;
      element.style.height = `${currentHeight}px`;
      void element.offsetHeight; // force reflow

      animationRef.current = element.animate(
        [
          { height: `${currentHeight}px`, opacity: 1 },
          { height: "0px", opacity: 0 },
        ],
        {
          duration: 350,
          easing: "var(--ease-in-out-structural)",
          fill: "both",
        }
      );

      animationRef.current.onfinish = () => {
        element.style.height = "0px";
      };
    }
  }, [isOpen]);

  const buttonId = `accordion-btn-${index}`;
  const panelId = `accordion-panel-${index}`;

  return (
    <div className="border-b border-oceanic-noir/10 last:border-b-0 py-2">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 text-left font-display font-bold text-oceanic-noir hover:text-nocturnal-expedition focus:outline-none focus:text-nocturnal-expedition group transition-colors duration-micro"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-oceanic-noir text-forsythia rounded-lg group-hover:scale-105 transition-all duration-micro">
            <Icon size={18} />
          </div>
          <span className="text-base md:text-lg">{feature.title}</span>
        </div>
        <div className="text-oceanic-noir/60 group-hover:text-oceanic-noir transition-colors duration-micro">
          {isOpen ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
        </div>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        ref={contentRef}
        className="overflow-hidden"
      >
        <div className="pb-6 pt-2 pl-12 pr-4">
          <span className="inline-block text-[10px] font-display font-bold tracking-wider text-nocturnal-expedition bg-nocturnal-expedition/10 px-2 py-0.5 rounded uppercase mb-3">
            {feature.tag}
          </span>
          <p className="text-sm md:text-base text-oceanic-noir/80 font-body leading-relaxed">
            {feature.description}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <span className="text-xs font-display font-bold text-oceanic-noir/50">
              Metric performance:
            </span>
            <span className="text-xs font-display font-black text-deep-saffron">
              {feature.metric}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ initialIndex }: AccordionProps) {
  const [prevInitialIndex, setPrevInitialIndex] = useState<number>(initialIndex);
  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);

  if (initialIndex !== prevInitialIndex) {
    setPrevInitialIndex(initialIndex);
    setActiveIndex(initialIndex);
  }

  const handleItemClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="p-4 bg-mystic-mint rounded-3xl border border-oceanic-noir/10 shadow-lg">
      {FEATURES.map((feat, idx) => (
        <AccordionItem
          key={feat.id}
          feature={feat}
          index={idx}
          isOpen={activeIndex === idx}
          onClick={() => handleItemClick(idx)}
        />
      ))}
    </div>
  );
}
