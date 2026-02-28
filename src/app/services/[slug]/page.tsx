import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/data";
import {
  ServiceDetailHero,
  ServiceDetailBody,
  ServiceDetailCTA,
} from "@/components/sections/service-detail";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  return {
    title: `${service?.title || "Service"} | Dasaah Company Limited`,
    description: service?.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetailHero slug={slug} />
      <ServiceDetailBody slug={slug} />
      <ServiceDetailCTA slug={slug} />
    </>
  );
}
