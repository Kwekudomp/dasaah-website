"use client";

import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { CLIENTS } from "@/lib/data";

const PLACEHOLDER_PROJECTS = [
  { title: "Highway Construction", category: "Construction", large: true },
  { title: "Office Complex Renovation", category: "Real Estate", large: false },
  { title: "Industrial Cleaning Contract", category: "Cleaning", large: false },
];

export function FeaturedProjects() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader label="OUR WORK" title="Featured Projects" />

        {/* Project gallery — masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PLACEHOLDER_PROJECTS.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div
                className={`relative rounded-lg overflow-hidden group bg-steel-blue ${
                  project.large ? "md:row-span-2 min-h-[400px]" : "min-h-[190px]"
                }`}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white font-heading font-bold text-xl">
                      {project.title}
                    </p>
                    <p className="text-amber text-sm mt-1">{project.category}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

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
