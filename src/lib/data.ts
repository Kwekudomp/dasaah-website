import type { LucideIcon } from "lucide-react";
import {
  Flame,
  Building2,
  Route,
  Ship,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Company Info                                                       */
/* ------------------------------------------------------------------ */

export const COMPANY = {
  name: "DASAAH Company Limited",
  shortName: "DASAAH",
  tagline: "Building Ghana's Future.",
  subtitle: "Full-service construction, procurement & facility management.",
  email: "dasaah137@gmail.com",
  phones: ["+233 244 739 386", "+233 201 414 360"],
  address:
    "No. 74 Boundary Road, American House 7157, GD-185, Accra, Ghana",
} as const;

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

/* ------------------------------------------------------------------ */
/*  Stats                                                              */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */

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
      "Reliable fuel distribution and petroleum product marketing across Ghana.",
    fullDescription:
      "DASAAH Company Limited provides comprehensive oil and gas marketing services, ensuring reliable distribution of petroleum products to businesses and consumers across Ghana. We leverage strong industry partnerships and logistics expertise to deliver fuel and lubricants on time and at competitive prices.",
    icon: Flame,
    benefits: [
      "Dependable supply chain for petroleum products",
      "Competitive pricing through strategic partnerships",
      "Timely delivery across all regions of Ghana",
      "Compliance with industry safety and regulatory standards",
    ],
  },
  {
    slug: "real-estate-development",
    title: "Real Estate Development",
    shortDescription:
      "Residential and commercial property development built for modern living.",
    fullDescription:
      "Our real estate development division delivers residential and commercial properties designed for modern living and business needs. From concept to completion, we manage every phase of development, ensuring quality craftsmanship, timely delivery, and lasting value for investors and homeowners alike.",
    icon: Building2,
    benefits: [
      "End-to-end project management from design to handover",
      "Quality construction with durable, modern finishes",
      "Strategic location selection for maximum value",
      "Transparent processes and timely project completion",
    ],
  },
  {
    slug: "road-and-building-construction",
    title: "Road & Building Construction",
    shortDescription:
      "Infrastructure and building construction to the highest engineering standards.",
    fullDescription:
      "DASAAH Company Limited undertakes road construction, building projects, and civil engineering works across Ghana. Our experienced team and modern equipment enable us to deliver infrastructure projects that meet the highest engineering standards, supporting national development and community growth.",
    icon: Route,
    benefits: [
      "Experienced engineering and construction teams",
      "Modern equipment and proven construction methods",
      "Adherence to national and international building codes",
      "Track record of on-time, on-budget project delivery",
    ],
  },
  {
    slug: "import-and-export-services",
    title: "Import & Export Services",
    shortDescription:
      "Seamless international trade logistics and customs clearance.",
    fullDescription:
      "We facilitate seamless international trade by managing the import and export of goods across borders. Our team handles logistics, customs clearance, and documentation to ensure your products reach their destination efficiently and in full compliance with trade regulations.",
    icon: Ship,
    benefits: [
      "End-to-end import and export logistics management",
      "Expert customs clearance and documentation handling",
      "Reliable freight forwarding partnerships",
      "Full compliance with international trade regulations",
    ],
  },
  {
    slug: "purchase-and-supply-services",
    title: "Purchase & Supply Services",
    shortDescription:
      "Bulk procurement and supply of construction materials, equipment, and general goods.",
    fullDescription:
      "DASAAH Company Limited offers procurement and supply services for construction materials, industrial equipment, office supplies, and general goods. We source products from trusted manufacturers and suppliers, delivering them to your site or facility at competitive rates with consistent quality assurance.",
    icon: ShoppingCart,
    benefits: [
      "Bulk procurement at competitive wholesale rates",
      "Verified and trusted supplier network",
      "Timely delivery to project sites and facilities",
      "Quality assurance on all supplied materials and goods",
    ],
  },
  {
    slug: "cleaning-services",
    title: "Cleaning Services",
    shortDescription:
      "Professional cleaning and facility maintenance for offices, residences, and commercial spaces.",
    fullDescription:
      "Our professional cleaning division provides thorough cleaning and facility maintenance services for offices, residential properties, and commercial spaces. We employ trained staff and use industry-grade equipment to maintain clean, safe, and hygienic environments for our clients.",
    icon: Sparkles,
    benefits: [
      "Trained and vetted cleaning professionals",
      "Industry-grade equipment and eco-friendly products",
      "Flexible scheduling for regular or one-off services",
      "Coverage for offices, residences, and commercial spaces",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Team                                                               */
/* ------------------------------------------------------------------ */

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
    bio: "Daniel Asaah is a driven entrepreneur with a passion for problem-solving and building sustainable businesses. With extensive experience as a PRO (Public Relations Officer) and business development professional, Daniel has honed his skills in stakeholder engagement, operations management, and strategic planning. He is a co-founder of Caswell Capital Partners Limited and has a strong background in events planning and management. Daniel brings vision, resilience, and hands-on leadership to DASAAH Company Limited.",
    image: "/images/team/daniel-asaah.png",
  },
  {
    name: "Allan Kweku Otoo Idun",
    role: "Managing Partner",
    bio: "Allan Kweku Otoo Idun is a skilled project manager and marketing professional with a track record of delivering results across diverse industries. He brings valuable experience from his work with MakeMake Engineering and other ventures. Allan holds qualifications from the University of Pune and GIMPA (Ghana Institute of Management and Public Administration), equipping him with a strong foundation in management, strategy, and business operations. His analytical approach and commitment to excellence drive DASAAH's project delivery and client relationships.",
    image: "/images/team/allan-idun.png",
  },
];

/* ------------------------------------------------------------------ */
/*  Core Values                                                        */
/* ------------------------------------------------------------------ */

export interface CoreValue {
  title: string;
  description: string;
}

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Integrity",
    description:
      "We uphold honesty and transparency in every interaction, building trust with our clients, partners, and communities.",
  },
  {
    title: "Team Work",
    description:
      "We believe in the power of collaboration, working together across disciplines to deliver outstanding results on every project.",
  },
  {
    title: "Innovation",
    description:
      "We embrace new ideas, technologies, and methods to continuously improve our services and deliver forward-thinking solutions.",
  },
  {
    title: "Excellence",
    description:
      "We are committed to the highest standards of quality in everything we do, striving to exceed expectations at every turn.",
  },
];

/* ------------------------------------------------------------------ */
/*  Clients                                                            */
/* ------------------------------------------------------------------ */

export const CLIENTS: string[] = [
  "Ayawaso West Municipal Assembly",
  "Caswell Capital Partners Limited",
  "Carbon AV",
  "Anthill Company Limited",
];

/* ------------------------------------------------------------------ */
/*  Why Choose Us                                                      */
/* ------------------------------------------------------------------ */

export const WHY_CHOOSE_US: string[] = [
  "Over a decade of experience across construction, procurement, and facility management",
  "A proven track record of delivering 150+ projects on time and on budget",
  "Comprehensive service offering spanning six core business areas",
  "Dedicated and experienced team of professionals and tradespeople",
  "Strong relationships with trusted suppliers and industry partners",
  "Commitment to safety, quality, and regulatory compliance on every project",
  "Client-centred approach with transparent communication and reporting",
  "Deep knowledge of Ghana's business landscape and local market conditions",
];
