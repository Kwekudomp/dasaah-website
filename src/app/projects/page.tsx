"use client";

import { useState } from "react";
import Image from "next/image";

const CATEGORIES = [
  "All",
  "Construction",
  "Oil & Gas",
  "Real Estate",
  "Cleaning",
  "Import/Export",
  "Procurement",
] as const;

const PROJECTS = [
  {
    title: "Ayawaso West Municipal Project",
    category: "Construction",
    description: "Municipal infrastructure development",
  },
  {
    title: "Caswell Capital Office Renovation",
    category: "Real Estate",
    description: "Corporate office renovation and fit-out",
  },
  {
    title: "Carbon AV Facility Setup",
    category: "Procurement",
    description: "Equipment procurement and facility setup",
  },
  {
    title: "Anthill Group Cleaning Contract",
    category: "Cleaning",
    description: "Commercial building maintenance",
  },
  {
    title: "Highway Access Road Network",
    category: "Construction",
    description: "Remote access road for mining community",
  },
  {
    title: "Oil & Gas Brand Campaign",
    category: "Oil & Gas",
    description: "Marketing and brand awareness campaign",
  },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section className="bg-navy pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white">
            Our Projects
          </h1>
          <p className="text-brand-slate text-lg mt-4">
            A showcase of our work across Ghana.
          </p>
        </div>
      </section>

      {/* ── Section 2: Filter + Gallery ── */}
      <section className="bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={
                  active === cat
                    ? "bg-amber text-navy font-heading font-bold text-sm px-4 py-2 rounded-lg"
                    : "bg-white text-navy font-heading font-medium text-sm px-4 py-2 rounded-lg hover:bg-amber/10 transition-colors"
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 w-full bg-steel-blue">
                  <Image
                    src="/images/projects/recent-projects.jpg"
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-amber text-xs font-heading font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-heading font-bold text-navy text-lg mb-1">
                    {project.title}
                  </h3>
                  <p className="text-brand-slate text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
