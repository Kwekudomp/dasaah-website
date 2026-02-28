"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { SERVICES } from "@/lib/data";

interface ServiceDetailProps {
  slug: string;
}

function useService(slug: string) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) throw new Error(`Service not found: ${slug}`);
  return service;
}

export function ServiceDetailHero({ slug }: ServiceDetailProps) {
  const service = useService(slug);
  const Icon = service.icon;
  return (
    <section className="bg-navy pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <Icon size={48} className="text-amber mb-4" />
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white">
            {service.title}
          </h1>
        </FadeIn>
      </div>
    </section>
  );
}

export function ServiceDetailBody({ slug }: ServiceDetailProps) {
  const service = useService(slug);
  return (
    <section className="bg-offwhite py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <p className="text-navy/80 text-lg leading-relaxed">
              {service.fullDescription}
            </p>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="font-heading font-bold text-navy text-xl mb-6">
                Key Benefits
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex">
                    <Check
                      size={20}
                      className="text-amber shrink-0 mt-0.5"
                    />
                    <span className="text-navy/80 text-sm ml-3">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function ServiceDetailCTA({ slug }: ServiceDetailProps) {
  const service = useService(slug);
  return (
    <section className="bg-navy py-16 text-center">
      <FadeIn>
        <h2 className="font-heading text-2xl font-bold text-white mb-6">
          Get a Quote for {service.title}
        </h2>
        <Link
          href={`/contact?service=${service.slug}`}
          className="inline-block bg-amber text-navy px-8 py-3 rounded-lg font-heading font-bold hover:bg-amber/90 transition-colors"
        >
          Request a Quote
        </Link>
      </FadeIn>
    </section>
  );
}
