"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { COMPANY } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-navy via-steel-blue to-navy">
      {/* Content */}
      <div className="max-w-4xl px-6 text-center">
        {/* Headline */}
        <motion.h1
          className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          BUILDING GHANA&apos;S
          <br />
          <span className="border-b-4 border-amber pb-1">FUTURE.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-brand-slate text-lg md:text-xl mt-6 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.3}
        >
          {COMPANY.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.5}
        >
          <Link
            href="/contact"
            className="bg-amber text-navy px-8 py-3 rounded-lg font-heading font-bold text-sm hover:bg-amber/90 transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            href="/services"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-heading font-bold text-sm hover:bg-white/10 transition-colors"
          >
            Our Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown size={24} className="text-brand-slate animate-bounce" />
      </div>
    </section>
  );
}
