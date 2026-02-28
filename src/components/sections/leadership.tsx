"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeIn } from "@/components/ui/fade-in";
import { TEAM } from "@/lib/data";

export function Leadership() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader label="OUR LEADERS" title="Meet the Team" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.2}>
              <TeamCard
                name={member.name}
                role={member.role}
                bio={member.bio}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Team Card (local component)                                        */
/* ------------------------------------------------------------------ */

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
}

function TeamCard({ name, role, bio }: TeamCardProps) {
  const [expanded, setExpanded] = useState(false);

  const truncated = bio.length > 150 ? bio.slice(0, 150) + "..." : bio;
  const needsTruncation = bio.length > 150;

  return (
    <div className="bg-steel-blue/30 rounded-lg overflow-hidden">
      {/* Image placeholder — will be replaced with actual photos later */}
      <div className="bg-steel-blue h-64 w-full" />

      <div className="p-6">
        <h3 className="font-heading font-bold text-white text-xl">{name}</h3>
        <p className="text-amber text-sm mt-1">{role}</p>

        <p className="text-brand-slate text-sm mt-3 leading-relaxed">
          {expanded ? bio : truncated}
        </p>

        {needsTruncation && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-amber text-sm mt-3 cursor-pointer hover:underline"
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
}
