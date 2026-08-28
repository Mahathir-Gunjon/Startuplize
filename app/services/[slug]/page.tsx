import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/data";
import ServiceDetailView from "@/components/ServiceDetailView";

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) {
    return {
      title: "Service Not Found | Startuplize",
    };
  }

  return {
    title: `${service.title} | Startuplize Elite Services`,
    description: service.valueProp,
    openGraph: {
      title: `${service.title} — Startuplize`,
      description: service.valueProp,
    },
  };
}

export default function DynamicServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}
