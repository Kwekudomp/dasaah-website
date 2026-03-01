"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { CLIENTS } from "@/lib/data";

export function FeaturedProjects() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader label="OUR WORK" title="Featured Projects" />

        {/* Project showcase image */}
        <FadeIn>
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/images/projects/recent-projects.jpg"
              alt="DASAAH recent projects — Ayawaso West Municipal Assembly, Caswell Capital Partners, Carbon AV, Anthill Company"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </FadeIn>

        {/* Client logos strip */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-brand-slate text-sm uppercase tracking-widest mb-6 text-center">
            Trusted By
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {CLIENTS.map((client) => (
              <span
                key={client}
                className="text-brand-slate text-sm font-medium hover:text-white transition-colors"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-block border-2 border-amber text-amber px-8 py-3 rounded-lg font-heading font-bold text-sm hover:bg-amber hover:text-navy transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
