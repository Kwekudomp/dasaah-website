# Dasaah Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a bold, industrial-themed website for Dasaah Company Limited — a cinematic single-scroll homepage with 12 additional subpages, using Next.js 15 + Tailwind CSS + Framer Motion.

**Architecture:** Next.js App Router with static site generation (SSG). All pages are pre-rendered at build time. Shared layout with sticky navbar and footer. Reusable UI components (SectionHeader, ServiceCard, AnimatedCounter, etc.) composed into page-level sections. Contact form calls a Next.js API route that sends via Resend.

**Tech Stack:** Next.js 15 (App Router), Tailwind CSS v4, Framer Motion, Lucide React, Resend API, Vercel hosting

**Design Doc:** `docs/plans/2026-02-27-dasaah-website-design.md`

---

## Task 1: Project Scaffold

**Files:**
- Create: `dasaah-website/` (entire Next.js project)

**Step 1: Create Next.js project**

```bash
cd c:/Users/kweku/Desktop/Startup
npx create-next-app@latest dasaah-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

Accept defaults. This creates the project with App Router, TypeScript, Tailwind, and src/ directory.

**Step 2: Install dependencies**

```bash
cd dasaah-website
npm install framer-motion lucide-react resend
```

**Step 3: Set up Tailwind config with brand tokens**

Modify: `dasaah-website/tailwind.config.ts`

Extend the theme with Dasaah brand colors and fonts:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          light: "#1E3A5F",
        },
        amber: {
          DEFAULT: "#D4A843",
        },
        slate: {
          custom: "#94A3B8",
        },
        offwhite: "#F8F9FA",
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

**Step 4: Set up fonts in root layout**

Modify: `dasaah-website/src/app/layout.tsx`

```tsx
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Dasaah Company Limited | Construction, Procurement & Services",
  description:
    "Full-service field marketing, real estate, facility management, procurement and cleaning company in Ghana.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-body bg-navy text-white antialiased">
        {children}
      </body>
    </html>
  );
}
```

**Step 5: Set up global CSS**

Modify: `dasaah-website/src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
}
```

**Step 6: Verify dev server runs**

```bash
npm run dev
```

Expected: App loads at http://localhost:3000 with no errors.

**Step 7: Commit**

```bash
git add .
git commit -m "chore: scaffold dasaah-website with Next.js, Tailwind, Framer Motion"
```

---

## Task 2: Site Data & Constants

**Files:**
- Create: `src/lib/data.ts`

**Step 1: Create data file with all site content**

This centralizes all text, stats, services, team bios, etc. so components stay clean.

```ts
import {
  Flame,
  Building2,
  Route,
  Ship,
  ShoppingCart,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const COMPANY = {
  name: "Dasaah Company Limited",
  shortName: "Dasaah",
  tagline: "Building Ghana's Future.",
  subtitle:
    "Full-service construction, procurement & facility management.",
  email: "dasaah137@gmail.com",
  phones: ["+233 244 739 386", "+233 201 414 360"],
  address: "No. 74 Boundary Road, American House 7157, GD-185, Accra, Ghana",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 6, suffix: "", label: "Services Offered" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 4, suffix: "", label: "Sectors Served" },
];

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  benefits: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "oil-and-gas-marketing",
    title: "Oil & Gas Marketing",
    shortDescription:
      "We raise awareness and help establish brands of oil and gas businesses using diverse strategies to drive customers.",
    fullDescription:
      "We raise awareness and help establish brands of oil and Gas businesses and use diverse strategies to drive customers and prospects toward doing business with them. Our team understands the dynamics of the energy sector in Ghana and Sub-Saharan Africa, enabling us to craft targeted marketing campaigns that deliver measurable results.",
    icon: Flame,
    benefits: [
      "Brand awareness and positioning",
      "Customer acquisition strategies",
      "Market analysis and insights",
      "Strategic campaign management",
    ],
  },
  {
    slug: "real-estate-development",
    title: "Real Estate Development",
    shortDescription:
      "We oversee building and renovation of property developments, from land acquisition to project financing.",
    fullDescription:
      "We oversee both human and operation activities involved in the building and renovation of property developments. We provide assistance in Land acquisition, approvals and permits, project financing, building development and renovations. Our experienced team manages every phase of the development lifecycle.",
    icon: Building2,
    benefits: [
      "Land acquisition and approvals",
      "Project financing assistance",
      "Building development",
      "Property renovation",
    ],
  },
  {
    slug: "road-and-building-construction",
    title: "Road & Building Construction",
    shortDescription:
      "We plan and deliver roads and buildings from major highways to remote access networks for mining and farming.",
    fullDescription:
      "We work with clients to plan and deliver roads and building projects from major highway projects to local roads, to remote access road networks for mining sites, fishing and farming communities. Our construction expertise spans both public infrastructure and private developments across Ghana.",
    icon: Route,
    benefits: [
      "Highway and local road construction",
      "Commercial building projects",
      "Mining access road networks",
      "Infrastructure for rural communities",
    ],
  },
  {
    slug: "import-and-export-services",
    title: "Import & Export Services",
    shortDescription:
      "We help clients comply with import and export requirements and assist with smooth shipping and customs.",
    fullDescription:
      "We help clients to comply with import and export requirements and assist with smooth shipping and customs clearance. Our team navigates the complexities of international trade regulations, ensuring your goods move efficiently across borders with full compliance.",
    icon: Ship,
    benefits: [
      "Customs clearance assistance",
      "Shipping logistics coordination",
      "Trade compliance management",
      "Import/export documentation",
    ],
  },
  {
    slug: "purchase-and-supply-services",
    title: "Purchase & Supply Services",
    shortDescription:
      "We research, evaluate and buy products for companies to resell or use in their everyday operations.",
    fullDescription:
      "We research, evaluate and buy products for companies to either resell to customers or use in their everyday operations. Our procurement expertise ensures you receive the best quality material, on time and at a competitive price, with no unexpected expenses.",
    icon: ShoppingCart,
    benefits: [
      "Procurement and sourcing",
      "Quality evaluation",
      "Competitive pricing",
      "Reliable supply chains",
    ],
  },
  {
    slug: "cleaning-services",
    title: "Cleaning Services",
    shortDescription:
      "We provide residential, commercial, and post-construction cleaning to take out all dirt and debris.",
    fullDescription:
      "We provide residential, commercial, post construction cleaning to take out all the dirt and debris. We have the right cleaning tools and equipment appropriate for cleaning all commercial buildings, ensuring spotless results every time.",
    icon: Sparkles,
    benefits: [
      "Residential cleaning",
      "Commercial building maintenance",
      "Post-construction cleanup",
      "Specialized equipment and tools",
    ],
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Daniel Asaah",
    role: "Managing Partner",
    bio: "Daniel Asaah is an Entrepreneur par excellence with years of proven problem-solving skills, strategic thinking, and organizational and administration skills. He has worked in various senior capacities in Ghana as Public Relations Officer and Special Assistant to the first Municipal Chief Executive of the Ayawaso West Municipal Assembly. He has considerable experience in private equity and financial advisory focusing primarily on financial services, real estate, events, media, information, education and commodities.",
    image: "/images/team/daniel-asaah.jpg",
  },
  {
    name: "Allan Kweku Otoo Idun",
    role: "Managing Partner",
    bio: "Allan Kweku Otoo Idun is a seasoned Entrepreneur and Project manager with experience in multiple markets and industries. An experienced Marketing Specialist skilled in Project Management, Marketing Management, Construction Business planning, New Markets Analysis, and Extensive Market Research. He is also a managing partner at MakeMake Engineering Company Limited and Managing Director of Just Dial Consults and Struthio Ghana Limited.",
    image: "/images/team/allan-idun.jpg",
  },
];

export const CORE_VALUES = [
  {
    title: "Integrity",
    description:
      "We strive to act with honesty, and openness and to take account of all our actions.",
  },
  {
    title: "Team Work",
    description:
      "We establish sustainable relationships with workers and clients by enforcing shared knowledge and expertise.",
  },
  {
    title: "Innovation",
    description:
      "We use innovative ideas and take the necessary risk to improve our service delivery.",
  },
  {
    title: "Excellence",
    description:
      "We provide world-class services that achieve the highest quality outcomes and real value for money.",
  },
];

export const CLIENTS = [
  "Ayawaso West Municipal Assembly",
  "Caswell Capital Partners Limited",
  "Carbon AV",
  "Anthill Company Limited",
];

export const WHY_CHOOSE_US = [
  "Renowned procurement expertise — best quality, on time, competitive price",
  "Pool of highly trained and skilled staff",
  "Strong team of experts for coordination and supervision at any scale",
  "Right cleaning tools and equipment for all commercial buildings",
  "Competitive and fair pricing — no unexpected expenses",
  "Affiliate partners ensuring delay-free and error-free delivery",
  "Reliable workforce with proven industry success",
  "Client-first approach — we understand needs before delivering",
];
```

**Step 2: Commit**

```bash
git add src/lib/data.ts
git commit -m "feat: add centralized site data and constants"
```

---

## Task 3: Reusable UI Components

**Files:**
- Create: `src/components/ui/section-header.tsx`
- Create: `src/components/ui/animated-counter.tsx`
- Create: `src/components/ui/fade-in.tsx`

**Step 1: Create SectionHeader component**

```tsx
// src/components/ui/section-header.tsx
interface SectionHeaderProps {
  label: string;
  title: string;
  light?: boolean;
}

export function SectionHeader({ label, title, light }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="text-amber font-heading text-sm font-light uppercase tracking-widest mb-2">
        {label}
      </p>
      <h2
        className={`font-heading text-3xl md:text-4xl font-extrabold ${
          light ? "text-navy" : "text-white"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
```

**Step 2: Create AnimatedCounter component**

```tsx
// src/components/ui/animated-counter.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="text-amber font-heading text-4xl md:text-5xl font-extrabold">
      {count}
      {suffix}
    </span>
  );
}
```

**Step 3: Create FadeIn wrapper component**

```tsx
// src/components/ui/fade-in.tsx
"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInProps) {
  const directionMap = {
    up: { y: 30, x: 0 },
    left: { x: -50, y: 0 },
    right: { x: 50, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

**Step 4: Verify build compiles**

```bash
npm run build
```

Expected: Build succeeds with no errors.

**Step 5: Commit**

```bash
git add src/components/
git commit -m "feat: add reusable UI components (SectionHeader, AnimatedCounter, FadeIn)"
```

---

## Task 4: Navbar Component

**Files:**
- Create: `src/components/navbar.tsx`

**Step 1: Build the Navbar**

```tsx
// src/components/navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-navy/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading text-2xl font-extrabold text-white">
            {COMPANY.shortName}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-custom hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-amber text-navy px-5 py-2 rounded font-heading font-bold text-sm hover:bg-amber/90 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-navy/98 flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-white font-heading text-2xl font-bold"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/navbar.tsx
git commit -m "feat: add sticky navbar with scroll transition and mobile menu"
```

---

## Task 5: Footer Component

**Files:**
- Create: `src/components/footer.tsx`

**Step 1: Build the Footer**

```tsx
// src/components/footer.tsx
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/data";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-extrabold text-white mb-2">
              {COMPANY.shortName}
            </h3>
            <p className="text-slate-custom text-sm">{COMPANY.subtitle}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-custom hover:text-amber text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-custom">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-amber mt-0.5 shrink-0" />
                <span>{COMPANY.phones.join(" / ")}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-amber mt-0.5 shrink-0" />
                <span>{COMPANY.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-amber mt-0.5 shrink-0" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-slate-custom text-sm">
          &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Wire Navbar and Footer into root layout**

Modify: `src/app/layout.tsx` — import and add `<Navbar />` and `<Footer />` wrapping `{children}`.

**Step 3: Commit**

```bash
git add src/components/footer.tsx src/app/layout.tsx
git commit -m "feat: add footer and wire navbar + footer into root layout"
```

---

## Task 6: Homepage — Hero Section

**Files:**
- Create: `src/components/sections/hero.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build the Hero section**

Full-viewport hero with dark overlay, animated text, two CTAs, and scroll indicator. Use Framer Motion for stagger animation. Background uses a stock construction image (placeholder path, will be swapped later).

**Step 2: Replace `src/app/page.tsx` with the Hero**

Import the Hero component and render it on the homepage.

**Step 3: Verify in browser**

```bash
npm run dev
```

Expected: Full-screen hero with dark background, headline, subtitle, two buttons, and pulsing scroll indicator.

**Step 4: Commit**

```bash
git add src/components/sections/hero.tsx src/app/page.tsx
git commit -m "feat: add cinematic hero section to homepage"
```

---

## Task 7: Homepage — Stats Bar

**Files:**
- Create: `src/components/sections/stats-bar.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build the StatsBar section**

Uses `AnimatedCounter` for each stat. Dark navy background, 4 stats in a row with vertical dividers. Responsive: 2x2 grid on mobile.

**Step 2: Add StatsBar to homepage below Hero**

**Step 3: Commit**

```bash
git add src/components/sections/stats-bar.tsx src/app/page.tsx
git commit -m "feat: add animated stats bar section"
```

---

## Task 8: Homepage — Services Grid

**Files:**
- Create: `src/components/sections/services-grid.tsx`
- Create: `src/components/service-card.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build ServiceCard component**

Card with Lucide icon, title, short description. Hover effect: amber left border slides in, card lifts with shadow. Links to `/services/[slug]`.

**Step 2: Build ServicesGrid section**

Off-white background. SectionHeader ("WHAT WE DO" / "Our Services"). 3x2 grid with stagger FadeIn animation.

**Step 3: Add to homepage**

**Step 4: Commit**

```bash
git add src/components/sections/services-grid.tsx src/components/service-card.tsx src/app/page.tsx
git commit -m "feat: add services grid section with animated cards"
```

---

## Task 9: Homepage — Featured Projects

**Files:**
- Create: `src/components/sections/featured-projects.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build FeaturedProjects section**

Dark navy background. Staggered layout (1 large + 2 small project images). Hover overlay with project name and category. Client logos strip below. "View All Projects" CTA. Use placeholder stock images.

**Step 2: Add to homepage**

**Step 3: Commit**

```bash
git add src/components/sections/featured-projects.tsx src/app/page.tsx
git commit -m "feat: add featured projects section with masonry layout"
```

---

## Task 10: Homepage — Why Choose Us

**Files:**
- Create: `src/components/sections/why-choose-us.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build WhyChooseUs section**

Off-white background. Alternating image/text rows. Amber checkmarks on list items. Images slide in from left/right using FadeIn with direction prop.

**Step 2: Add to homepage**

**Step 3: Commit**

```bash
git add src/components/sections/why-choose-us.tsx src/app/page.tsx
git commit -m "feat: add why choose us section with alternating layout"
```

---

## Task 11: Homepage — Leadership

**Files:**
- Create: `src/components/sections/leadership.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build Leadership section**

Dark navy background. Two team cards side-by-side (stack on mobile). Each card: placeholder photo, name, role, bio excerpt. Click/hover expands full bio with Framer Motion `AnimatePresence` height animation.

**Step 2: Add to homepage**

**Step 3: Commit**

```bash
git add src/components/sections/leadership.tsx src/app/page.tsx
git commit -m "feat: add leadership section with expandable bios"
```

---

## Task 12: Homepage — CTA + Contact Form

**Files:**
- Create: `src/components/sections/contact-cta.tsx`
- Create: `src/app/api/contact/route.ts`
- Modify: `src/app/page.tsx`

**Step 1: Build ContactCTA section**

Gradient background (navy → steel blue). Headline: "READY TO BUILD SOMETHING EXTRAORDINARY?" Contact form with Name, Email, Phone, Service dropdown, Message. Amber submit button. Contact details (phone, email, address) alongside form. Success/error toast inline.

**Step 2: Build API route for contact form**

```ts
// src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, service, message } = body;

  // Validate required fields
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Dasaah Website <onboarding@resend.dev>",
        to: "dasaah137@gmail.com",
        subject: `New inquiry from ${name} — ${service || "General"}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Service:</strong> ${service || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!res.ok) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
```

**Step 3: Create `.env.local` (not committed)**

```
RESEND_API_KEY=re_your_key_here
```

Add `.env.local` to `.gitignore` (should already be there from Next.js scaffold).

**Step 4: Add to homepage**

**Step 5: Commit**

```bash
git add src/components/sections/contact-cta.tsx src/app/api/contact/route.ts src/app/page.tsx
git commit -m "feat: add contact CTA section with form and Resend API route"
```

---

## Task 13: About Page

**Files:**
- Create: `src/app/about/page.tsx`

**Step 1: Build About page**

- Page hero with company story background
- Vision & Mission: side-by-side cards on dark background
- Core Values: 4-card grid (Integrity, Teamwork, Innovation, Excellence) using data from `CORE_VALUES`
- Reuses SectionHeader, FadeIn components

**Step 2: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "feat: add about page with vision, mission, and core values"
```

---

## Task 14: Services Overview Page

**Files:**
- Create: `src/app/services/page.tsx`

**Step 1: Build Services overview page**

Hero section with headline. 6 larger service cards (reuse ServiceCard but bigger variant) linking to individual pages. Uses SERVICES data.

**Step 2: Commit**

```bash
git add src/app/services/page.tsx
git commit -m "feat: add services overview page"
```

---

## Task 15: Individual Service Pages (Dynamic Route)

**Files:**
- Create: `src/app/services/[slug]/page.tsx`

**Step 1: Build dynamic service page**

Uses `generateStaticParams` to pre-render all 6 service pages from SERVICES data. Each page: hero with service title, full description, benefits list with amber checkmarks, CTA button linking to contact with `?service=slug` param.

```tsx
import { SERVICES } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}
```

**Step 2: Verify all 6 routes work**

Visit `/services/oil-and-gas-marketing`, `/services/cleaning-services`, etc.

**Step 3: Commit**

```bash
git add src/app/services/\[slug\]/page.tsx
git commit -m "feat: add individual service pages with dynamic routing"
```

---

## Task 16: Projects Page

**Files:**
- Create: `src/app/projects/page.tsx`

**Step 1: Build Projects page**

Filter bar with category tabs (All, Construction, Oil & Gas, Real Estate, Cleaning, Import/Export). Grid of project cards with hover overlay. Use placeholder stock images with category labels. Filter is client-side state toggle.

**Step 2: Commit**

```bash
git add src/app/projects/page.tsx
git commit -m "feat: add filterable projects gallery page"
```

---

## Task 17: Team Page

**Files:**
- Create: `src/app/team/page.tsx`

**Step 1: Build Team page**

Full bios for both managing partners using TEAM data. Larger photos, detailed bio sections. Reuses FadeIn for scroll animations.

**Step 2: Commit**

```bash
git add src/app/team/page.tsx
git commit -m "feat: add team page with full partner bios"
```

---

## Task 18: Contact Page

**Files:**
- Create: `src/app/contact/page.tsx`

**Step 1: Build Contact page**

Two-column layout: contact form (reuse form logic from ContactCTA) + contact details panel with icons. Google Maps embed (iframe for American House, Accra area). Reads `?service=` param to pre-select dropdown.

**Step 2: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "feat: add contact page with form, map, and contact details"
```

---

## Task 19: Stock Images & Placeholders

**Files:**
- Create: `public/images/` directory structure

**Step 1: Set up image directory structure**

```
public/images/
├── hero/
│   └── construction-site.jpg
├── services/
│   ├── oil-gas.jpg
│   ├── real-estate.jpg
│   ├── construction.jpg
│   ├── import-export.jpg
│   ├── procurement.jpg
│   └── cleaning.jpg
├── projects/
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── project-3.jpg
├── team/
│   ├── daniel-asaah.jpg
│   └── allan-idun.jpg
├── about/
│   └── company.jpg
└── why-choose-us/
    ├── expertise.jpg
    └── equipment.jpg
```

**Step 2: Source high-quality stock images**

Use free stock sources (Unsplash, Pexels) for placeholder images matching the industrial/construction theme. Download and place in the appropriate directories.

**Step 3: Commit**

```bash
git add public/images/
git commit -m "feat: add placeholder stock images for all sections"
```

---

## Task 20: SEO Metadata & Final Polish

**Files:**
- Modify: `src/app/layout.tsx` (global metadata)
- Modify: all page files (per-page metadata)
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`

**Step 1: Add per-page metadata exports**

Each page file exports a `metadata` object with title and description.

**Step 2: Create sitemap.ts**

```ts
import { SERVICES } from "@/lib/data";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dasaah.com";
  const servicePages = SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    ...servicePages,
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/team`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];
}
```

**Step 3: Create robots.ts**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://dasaah.com/sitemap.xml",
  };
}
```

**Step 4: Final build and verification**

```bash
npm run build
npm run start
```

Visit all 13 pages. Verify: animations work, responsive layout works on mobile viewport, no console errors, all links navigate correctly.

**Step 5: Commit**

```bash
git add .
git commit -m "feat: add SEO metadata, sitemap, robots.txt, and final polish"
```

---

## Task 21: Deploy to Vercel

**Step 1: Initialize git repo (if not already)**

```bash
cd c:/Users/kweku/Desktop/Startup/dasaah-website
git init
git add .
git commit -m "initial commit: dasaah website"
```

**Step 2: Push to GitHub**

```bash
gh repo create dasaah-website --private --source=. --push
```

**Step 3: Deploy to Vercel**

```bash
npx vercel --prod
```

Set environment variable `RESEND_API_KEY` in Vercel dashboard.

**Step 4: Verify production site**

Visit the Vercel URL. Test all pages, contact form, mobile responsiveness.

**Step 5: Commit any fixes**

```bash
git add .
git commit -m "chore: post-deploy fixes"
```
