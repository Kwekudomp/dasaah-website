"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";
import { STATS } from "@/lib/data";

export function StatsBar() {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center md:border-r md:border-white/10 md:last:border-r-0"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-brand-slate text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
