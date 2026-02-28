"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/data";

/* ------------------------------------------------------------------ */
/*  Inner form component (needs useSearchParams → must be in Suspense) */
/* ------------------------------------------------------------------ */

function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") ?? "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedService,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setStatus("Message sent successfully! We'll be in touch.");
    } catch {
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-brand-slate focus:outline-none focus:border-amber transition-colors";
  const labelClass = "block text-brand-slate text-sm mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="Your full name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="+233 xxx xxx xxx"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className={inputClass}
        >
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          placeholder="How can we help?"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber text-navy font-heading font-bold py-3 rounded-lg hover:bg-amber/90 transition-colors disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p
          className={`text-sm text-center ${
            status.startsWith("Message sent") ? "text-green-400" : "text-red-400"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Main exported section                                              */
/* ------------------------------------------------------------------ */

export function ContactCTA() {
  return (
    <section className="bg-gradient-to-br from-navy to-steel-blue py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left column — Headline + Form */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-8">
              READY TO BUILD SOMETHING EXTRAORDINARY?
            </h2>

            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Right column — Contact Details */}
          <div className="md:mt-16">
            <h3 className="font-heading font-bold text-white text-xl mb-6">
              Get in Touch
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="text-amber shrink-0" />
                <span className="text-brand-slate text-sm ml-3">
                  {COMPANY.phones.join(" / ")}
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-amber shrink-0" />
                <span className="text-brand-slate text-sm ml-3">
                  {COMPANY.email}
                </span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-amber shrink-0" />
                <span className="text-brand-slate text-sm ml-3">
                  {COMPANY.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
