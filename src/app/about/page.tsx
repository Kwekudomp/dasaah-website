import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { CORE_VALUES } from "@/lib/data";

export const metadata = {
  title: "About | DASAAH Company Limited",
  description:
    "Learn about DASAAH Company Limited — our vision, mission, and core values driving construction, procurement, and facility management in Ghana.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Section 1: Page Hero ── */}
      <section className="bg-navy pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white">
            About DASAAH
          </h1>
          <p className="text-brand-slate text-lg mt-4 max-w-2xl">
            A full-service field marketing, real estate, facility management,
            procurement and cleaning company.
          </p>
        </div>
      </section>

      {/* ── Section 2: Vision & Mission ── */}
      <section className="bg-navy py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-steel-blue/30 rounded-lg p-8">
              <p className="text-amber font-heading text-sm font-light uppercase tracking-widest mb-3">
                OUR VISION
              </p>
              <p className="text-brand-slate leading-relaxed">
                Our vision is to become the most trusted, valued and reliable
                service supply chain company in Ghana and Sub-Saharan Africa.
              </p>
            </div>

            <div className="bg-steel-blue/30 rounded-lg p-8">
              <p className="text-amber font-heading text-sm font-light uppercase tracking-widest mb-3">
                OUR MISSION
              </p>
              <p className="text-brand-slate leading-relaxed">
                Our mission is to grow our clients&apos; businesses by acting as
                a catalyst in ensuring they stay focused on the important
                internal tasks of their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Core Values ── */}
      <section className="bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            label="WHAT DRIVES US"
            title="Our Core Values"
            light={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-brand-slate text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
