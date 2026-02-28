import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/data";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1 — Brand */}
          <div>
            <h3 className="font-heading text-xl font-extrabold text-white mb-2">
              {COMPANY.shortName}
            </h3>
            <p className="text-brand-slate text-sm">{COMPANY.subtitle}</p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-slate hover:text-amber text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="font-heading font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-amber mt-0.5 shrink-0" />
                <span className="text-sm text-brand-slate">
                  {COMPANY.phones.join(" / ")}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-amber mt-0.5 shrink-0" />
                <span className="text-sm text-brand-slate">
                  {COMPANY.email}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-amber mt-0.5 shrink-0" />
                <span className="text-sm text-brand-slate">
                  {COMPANY.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-brand-slate text-sm">
          &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
