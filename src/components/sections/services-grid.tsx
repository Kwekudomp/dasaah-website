"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { ServiceCard } from "@/components/service-card";
import { SERVICES } from "@/lib/data";

export function ServicesGrid() {
  return (
    <section className="bg-offwhite py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader label="WHAT WE DO" title="Our Services" light={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                slug={service.slug}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
