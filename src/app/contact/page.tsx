"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/data";

/* ------------------------------------------------------------------ */
/*  Inner form component (needs useSearchParams -> must be in Suspense) */
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
    "w-full bg-white border border-navy/20 rounded-lg px-4 py-3 text-navy placeholder:text-brand-slate focus:outline-none focus:border-amber transition-colors";
  const labelClass = "block text-navy font-medium text-sm mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          placeholder="Your full name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          placeholder="you@example.com"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className={labelClass}>
          Phone
        </label>
        <input
          id="contact-phone"
          type="tel"
          placeholder="+233 xxx xxx xxx"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="contact-service" className={labelClass}>
          Service
        </label>
        <select
          id="contact-service"
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
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
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
            status.startsWith("Message sent")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Contact Page                                                  */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white">
            Contact Us
          </h1>
          <p className="text-brand-slate text-lg mt-4">
            Let&apos;s discuss your next project.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left column — Contact Form */}
            <div>
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Right column — Contact Details + Map */}
            <div>
              {/* Contact Info Card */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="font-heading font-bold text-navy text-xl mb-6">
                  Get in Touch
                </h2>

                <ul className="space-y-4">
                  {COMPANY.phones.map((phone) => (
                    <li key={phone} className="flex items-start">
                      <Phone size={20} className="text-amber shrink-0" />
                      <span className="text-navy/70 text-sm ml-3">
                        {phone}
                      </span>
                    </li>
                  ))}
                  <li className="flex items-start">
                    <Mail size={20} className="text-amber shrink-0" />
                    <span className="text-navy/70 text-sm ml-3">
                      {COMPANY.email}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <MapPin size={20} className="text-amber shrink-0" />
                    <span className="text-navy/70 text-sm ml-3">
                      {COMPANY.address}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-6 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.9!2d-0.17!3d5.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAmerican+House+Accra!5e0!3m2!1sen!2sgh!4v1"
                  width="100%"
                  height={250}
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DASAAH Company Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
