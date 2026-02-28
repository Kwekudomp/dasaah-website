import { ServicesOverviewGrid } from "@/components/sections/services-overview-grid";

export const metadata = {
  title: "Services | Dasaah Company Limited",
  description:
    "Explore our full range of services — oil & gas marketing, real estate development, construction, import/export, procurement, and cleaning.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white">
            Our Services
          </h1>
          <p className="text-brand-slate text-lg mt-4">
            Comprehensive solutions for your business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesOverviewGrid />
    </>
  );
}
