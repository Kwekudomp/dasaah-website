import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { TEAM } from "@/lib/data";

export const metadata = {
  title: "Team | DASAAH Company Limited",
  description:
    "Meet the managing partners behind DASAAH Company Limited — Daniel Asaah and Allan Kweku Otoo Idun.",
};

export default function TeamPage() {
  return (
    <>
      {/* ── Section 1: Hero ── */}
      <section className="bg-navy pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white">
            Our Team
          </h1>
          <p className="text-brand-slate text-lg mt-4">
            The leaders driving DASAAH&apos;s vision forward.
          </p>
        </div>
      </section>

      {/* ── Section 2: Team Members ── */}
      <section className="bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6">
          {TEAM.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.15}>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-12 last:mb-0">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative min-h-[300px] md:min-h-full bg-steel-blue">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Bio content */}
                  <div className="md:col-span-2 p-8 md:p-12">
                    <h2 className="font-heading text-2xl font-extrabold text-navy">
                      {member.name}
                    </h2>
                    <p className="text-amber font-heading font-bold text-sm mt-1">
                      {member.role}
                    </p>
                    <p className="text-navy/70 mt-4 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
