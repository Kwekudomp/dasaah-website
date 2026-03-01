"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { WHY_CHOOSE_US } from "@/lib/data";
import { Check } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="bg-offwhite py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          label="WHY DASAAH?"
          title="Why Choose Us"
          light={true}
        />

        {/* Row 1: Image left, text right */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src="/images/why-choose-us/construction-workers.jpg"
                alt="DASAAH construction team on site"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <h3 className="font-heading font-bold text-navy text-xl mb-4">
              Proven Expertise
            </h3>
            <ul className="space-y-3">
              {WHY_CHOOSE_US.slice(0, 4).map((item, index) => (
                <li key={index} className="flex">
                  <Check size={20} className="text-amber shrink-0 mt-0.5" />
                  <span className="text-navy/80 text-sm ml-3">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Row 2: Text left, image right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <FadeIn direction="left" delay={0.2}>
            <h3 className="font-heading font-bold text-navy text-xl mb-4">
              The Right Tools for the Job
            </h3>
            <ul className="space-y-3">
              {WHY_CHOOSE_US.slice(4, 8).map((item, index) => (
                <li key={index} className="flex">
                  <Check size={20} className="text-amber shrink-0 mt-0.5" />
                  <span className="text-navy/80 text-sm ml-3">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src="/images/why-choose-us/engineering-blueprints.jpg"
                alt="Engineering blueprints and planning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
