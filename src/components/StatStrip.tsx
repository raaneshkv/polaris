"use client";

import { useEffect, useRef } from "react";

interface StatItemProps {
  target: number;
  decimals?: number;
  suffix: string;
  label: string;
}

function StatItem({ target, decimals = 0, suffix, label }: StatItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const valRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const triggerCountUp = () => {
      if (!valRef.current) return;

      const span = valRef.current;
      const duration = 2000;
      const animation = span.animate(
        [
          { opacity: 0.99 },
          { opacity: 1.0 },
        ],
        {
          duration,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "both",
        }
      );

      let active = true;
      const startTime = performance.now();

      const tick = (now: number) => {
        if (!active) return;
        
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = easeProgress * target;

        if (span) {
          span.textContent = currentVal.toFixed(decimals);
        }

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          if (span) {
            span.textContent = target.toFixed(decimals);
          }
        }
      };

      requestAnimationFrame(tick);

      return () => {
        active = false;
        animation.cancel();
      };
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerCountUp();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, decimals]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center p-6 bg-nocturnal-expedition/30 rounded-2xl border border-mystic-mint/10 backdrop-blur-sm"
    >
      <div className="flex items-baseline text-3xl md:text-5xl font-display font-black text-forsythia mb-2">
        <span ref={valRef}>0</span>
        <span>{suffix}</span>
      </div>
      <span className="text-xs md:text-sm text-arctic-powder/75 font-body font-medium uppercase tracking-wider text-center">
        {label}
      </span>
    </div>
  );
}

export function StatStrip() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20 md:mt-28">
      <StatItem target={10} suffix="x" label="Faster Data Pipelines" />
      <StatItem target={99.9} decimals={1} suffix="%" label="Guaranteed Uptime" />
      <StatItem target={40} suffix="%" label="Reduction in Manual tasks" />
    </div>
  );
}
