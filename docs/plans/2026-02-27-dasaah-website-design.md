# Dasaah Company Limited — Website Design Document

**Date:** 2026-02-27
**Status:** Approved
**Approach:** "The Monolith" — cinematic single-scroll homepage with dedicated subpages

---

## Company Context

Dasaah Company Limited is a Ghana-based B2B services company offering:
1. Oil & Gas Marketing
2. Real Estate Development
3. Road & Building Construction
4. Import & Export Services
5. Purchase & Supply Services
6. Cleaning Services

**Managing Partners:** Daniel Asaah, Allan Kweku Otoo Idun
**Location:** No. 74 Boundary Road, American House 7157, GD-185, Accra, Ghana
**Contact:** +233 244 739 386 / +233 201 414 360 | dasaah137@gmail.com

---

## Brand Direction

**Vibe:** Bold & Industrial
- Dark backgrounds, strong typography, construction imagery front-and-center
- Conveys power, capability, and scale

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| Deep Navy | `#0A1628` | Primary backgrounds, headers |
| Steel Blue | `#1E3A5F` | Secondary backgrounds, gradients |
| Amber/Gold | `#D4A843` | CTAs, accents, highlights, hover states |
| Pure White | `#FFFFFF` | Text on dark, card backgrounds |
| Slate Gray | `#94A3B8` | Body text on dark backgrounds |
| Off-White | `#F8F9FA` | Light section backgrounds |

### Typography

| Role | Font | Weight |
|---|---|---|
| Headings | Plus Jakarta Sans | ExtraBold (800) |
| Body | Inter | Regular (400) / Medium (500) |
| Accents/Labels | Plus Jakarta Sans | Light (300) |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, SSG) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Contact Form | Resend API |
| Hosting | Vercel |
| Icons | Lucide React |

---

## Site Map

```
Home (cinematic single-scroll)
├── About
├── Services (overview)
│   ├── Oil & Gas Marketing
│   ├── Real Estate Development
│   ├── Road & Building Construction
│   ├── Import & Export Services
│   ├── Purchase & Supply Services
│   └── Cleaning Services
├── Projects (filterable gallery)
├── Team
└── Contact
```

**Total pages:** 13

---

## Homepage Sections (in scroll order)

### 1. Navbar (sticky)
- Transparent over hero → solid deep navy on scroll (60px threshold)
- Logo left, nav links center-right, amber "Contact" CTA button
- Mobile: hamburger icon → full-screen overlay menu with stagger animation
- Links: Services, Projects, About, Team, Contact

### 2. Hero (100vh)
- Full-viewport dark overlay (gradient) on construction site background image
- Headline: bold white, large (clamp responsive sizing)
- Subtext: slate gray, one line
- Two CTAs: "Request a Quote" (amber filled) + "Our Services" (white outlined)
- Scroll indicator: pulsing chevron at bottom
- Background: subtle Ken Burns effect (slow zoom)
- Text entry: stagger fade-up with Framer Motion

### 3. Stats Bar
- Dark navy section, narrow height
- 4 stats in a row: Projects Completed (150+), Services Offered (6), Years Experience (10+), Sectors Served (4)
- Amber numbers, white labels
- Count-up animation triggered on scroll into viewport
- Vertical dividers between stats (slate gray, thin)

### 4. Services Grid (off-white background)
- Section header: "WHAT WE DO" label (amber, small caps) + "Our Services" heading
- 3x2 grid of service cards (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- Each card: icon (Lucide), title, 2-line description
- Hover: amber left border slides in, card lifts with box-shadow
- Click navigates to dedicated service page
- Cards stagger fade-up on scroll

### 5. Featured Projects (dark navy background)
- Section header: "OUR WORK" label + "Featured Projects" heading
- Staggered/masonry layout: 1 large image + 2 smaller images
- Hover: overlay with project name + category tag
- Large image has subtle parallax scroll
- Below gallery: client logo strip (Ayawaso West, Caswell Capital, Carbon AV, Anthill)
- "View All Projects" CTA button

### 6. Why Choose Us (off-white background)
- Section header: "WHY DASAAH?" label + heading
- Two alternating rows: image left / text right, then text left / image right
- Text side: checklist items with amber checkmarks
- Row 1: Procurement expertise, competitive pricing, expert coordination, reliable workforce
- Row 2: Right tools & equipment, skilled staff, affiliate partner network, client-first approach
- Images slide in from respective sides on scroll

### 7. Leadership (dark navy background)
- Section header: "OUR LEADERS" label + heading
- Two team cards side by side (stack on mobile)
- Each card: photo (top), name, title, brief bio excerpt
- Hover/click: expands full bio with smooth height animation
- Subtle scale-up on hover

### 8. CTA + Contact Form (gradient: navy → steel blue)
- Headline: "READY TO BUILD SOMETHING EXTRAORDINARY?"
- Contact form: Name, Email, Phone, Service (dropdown), Message
- Amber submit button
- Form submission via Resend API
- Service dropdown pre-selects if arriving from a service page (via URL param)
- Contact details alongside form: phone numbers, email, address
- Success/error toast notifications

### 9. Footer (deep navy, darker)
- Logo, nav links, contact info
- Copyright line
- Optional: social media links if/when available

---

## Subpage Designs

### About Page
- Hero: company story with background image
- Vision & Mission: side-by-side cards on dark background
- Core Values: 4 cards (Integrity, Teamwork, Innovation, Excellence) with icons
- Company timeline (optional, if history milestones available)

### Services Overview Page
- Hero with headline
- 6 service cards (larger than homepage version) with descriptions
- Each links to individual service page

### Individual Service Pages (x6)
- Hero: service-specific background image + title
- Detailed description (2-3 paragraphs)
- Key benefits list with amber checkmarks
- Related projects section (if applicable)
- CTA: "Get a Quote for [Service Name]" → contact form with service pre-selected

### Projects Page
- Filter bar: All | Construction | Oil & Gas | Real Estate | Cleaning | Import/Export
- Grid of project cards with hover overlay
- Placeholder: stock images with project-type labels until real photos available

### Team Page
- Full bios for Daniel Asaah and Allan Kweku Otoo Idun
- Photos, roles, backgrounds, achievements
- Team culture section (optional)

### Contact Page
- Two-column: contact form + contact details
- Embedded Google Map (American House, Accra)
- Office hours section
- Phone, email, address

---

## Animations (Framer Motion)

| Element | Animation | Trigger |
|---|---|---|
| Hero text | Stagger fade-up (y: 30 → 0, opacity: 0 → 1) | Page load |
| Navbar background | Opacity transition (transparent → solid) | Scroll past 60px |
| Stats numbers | Count-up from 0 | Scroll into viewport |
| Service cards | Stagger fade-up | Scroll into viewport |
| Project images | Parallax (translateY on scroll) | Continuous scroll |
| Project hover | Overlay fade-in | Mouse enter |
| Why Choose Us images | Slide in from left/right | Scroll into viewport |
| Team cards | Fade-in with scale (0.95 → 1) | Scroll into viewport |
| Contact form | Fade-up | Scroll into viewport |
| Mobile menu | Full-screen overlay, links stagger in | Menu toggle |

---

## Imagery Strategy

**Current:** High-quality stock imagery (construction sites, cranes, blueprints, team meetings, cleaning crews, shipping containers)

**Future:** Replace with custom photography from Dasaah projects, team, and equipment as available. Site structure makes image swapping straightforward (image components with alt text).

**Style guidelines for stock:**
- Prefer images with African subjects/settings where possible
- Construction + industrial feel (not overly polished/corporate)
- Warm lighting to complement amber accent color
- Consistent dark/moody tone for hero and dark sections

---

## Responsive Breakpoints

| Breakpoint | Width | Layout adjustments |
|---|---|---|
| Mobile | < 768px | Single column, stacked sections, hamburger menu |
| Tablet | 768px–1024px | 2-column grids, condensed nav |
| Desktop | > 1024px | Full layout, 3-column service grid |
| Large | > 1280px | Max-width container (1280px), centered |

---

## SEO Considerations

- Static Site Generation (SSG) for all pages → fast load, crawlable
- Semantic HTML5 (header, main, section, article, footer)
- Meta titles and descriptions per page
- Open Graph tags for social sharing
- Structured data (Organization schema)
- Alt text on all images
- Sitemap.xml auto-generated by Next.js

---

## Future Enhancements (post-launch)

- Blog / News section for SEO content
- Custom domain email (info@dasaah.com instead of Gmail)
- Logo refinement
- CMS integration (Sanity or similar) for team content management
- Real project photography
- Testimonials / client quotes section
- WhatsApp chat widget (popular in Ghana)
- Social media links
