"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
}

export function ServiceCard({ title, description, icon: Icon, slug }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${slug}`}
      className="group block bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
    >
      {/* Amber left border on hover */}
      <div className="absolute left-0 top-0 h-full w-1 bg-amber transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

      <Icon size={32} className="text-amber mb-4" />

      <h3 className="font-heading font-bold text-navy text-lg mb-2">
        {title}
      </h3>

      <p className="text-brand-slate text-sm leading-relaxed">
        {description}
      </p>
    </Link>
  );
}
