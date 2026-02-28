"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { SERVICES } from "@/lib/data";

export function ServicesOverviewGrid() {
  return (
    <section className="bg-offwhite py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.slug} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
                  <Icon size={40} className="text-amber mb-4" />
                  <h3 className="font-heading font-bold text-navy text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-slate text-sm leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-amber font-heading font-bold text-sm hover:underline"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
