"use client";

import { useState, type FormEvent } from "react";
import { CalendarDays, CheckCircle2, Loader2, MapPin, Send } from "lucide-react";
import { profile } from "@/data/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type FormState = {
  fullName: string;
  brand: string;
  eventDate: string;
  location: string;
  message: string;
};

const initialForm: FormState = {
  fullName: "",
  brand: "",
  eventDate: "",
  location: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (form.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }
  if (form.brand.trim().length < 2) {
    errors.brand = "Please enter your brand or company.";
  }
  if (!form.eventDate) {
    errors.eventDate = "Please pick an event date.";
  }
  if (form.location.trim().length < 2) {
    errors.location = "Please enter the event location.";
  }
  if (form.message.trim().length < 10) {
    errors.message = "Tell us a little more (at least 10 characters).";
  }
  return errors;
}

const fieldClasses = (hasError: boolean) =>
  `w-full rounded-xl border bg-ink px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-all focus:ring-2 ${
    hasError
      ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/20"
      : "border-white/10 focus:border-gold/60 focus:ring-gold/20"
  }`;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const setField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("sending");

    const subject = encodeURIComponent(
      `Campaign / Booking Inquiry — ${form.brand} (${form.fullName})`,
    );
    const body = encodeURIComponent(
      [
        `Full Name: ${form.fullName}`,
        `Brand / Company: ${form.brand}`,
        `Event Date: ${form.eventDate}`,
        `Location: ${form.location}`,
        "",
        "Message:",
        form.message,
        "",
        "— Sent from the Riyansh Adhikari portfolio website",
      ].join("\n"),
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    window.setTimeout(() => setStatus("sent"), 600);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-screen-2xl scroll-mt-24 px-5 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Booking"
          title="Book for Campaigns"
          description="Ramp walks, editorial print, campaign shoots and brand appearances. Send the details and the management team will reply shortly."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-charcoal p-7 shadow-[0_30px_80px_rgba(0,0,0,0.5)] md:p-12">
          {status === "sent" ? (
            <div
              role="status"
              className="flex flex-col items-center gap-4 py-10 text-center"
            >
              <CheckCircle2 className="h-14 w-14 text-gold" aria-hidden="true" />
              <h3 className="font-serif text-3xl text-white">
                Inquiry prepared
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-white/50">
                Your email draft has been opened with all the booking details
                prefilled. Just hit send — or reach out directly at{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="text-gold underline-offset-4 hover:underline"
                >
                  {profile.email}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(initialForm);
                  setStatus("idle");
                }}
                className="mt-2 rounded-full border border-gold/50 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
                  >
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(e) => setField("fullName", e.target.value)}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    placeholder="Your name"
                    className={fieldClasses(Boolean(errors.fullName))}
                  />
                  {errors.fullName ? (
                    <p id="fullName-error" role="alert" className="mt-2 text-xs text-red-400">
                      {errors.fullName}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="brand"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
                  >
                    Brand / Company *
                  </label>
                  <input
                    id="brand"
                    type="text"
                    autoComplete="organization"
                    value={form.brand}
                    onChange={(e) => setField("brand", e.target.value)}
                    aria-invalid={Boolean(errors.brand)}
                    aria-describedby={errors.brand ? "brand-error" : undefined}
                    placeholder="Fashion house, label, agency…"
                    className={fieldClasses(Boolean(errors.brand))}
                  />
                  {errors.brand ? (
                    <p id="brand-error" role="alert" className="mt-2 text-xs text-red-400">
                      {errors.brand}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="eventDate"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
                  >
                    Event Date *
                  </label>
                  <div className="relative">
                    <input
                      id="eventDate"
                      type="date"
                      value={form.eventDate}
                      onChange={(e) => setField("eventDate", e.target.value)}
                      aria-invalid={Boolean(errors.eventDate)}
                      aria-describedby={errors.eventDate ? "eventDate-error" : undefined}
                      className={fieldClasses(Boolean(errors.eventDate))}
                    />
                    <CalendarDays
                      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30"
                      aria-hidden="true"
                    />
                  </div>
                  {errors.eventDate ? (
                    <p id="eventDate-error" role="alert" className="mt-2 text-xs text-red-400">
                      {errors.eventDate}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
                  >
                    Location *
                  </label>
                  <div className="relative">
                    <input
                      id="location"
                      type="text"
                      autoComplete="address-level2"
                      value={form.location}
                      onChange={(e) => setField("location", e.target.value)}
                      aria-invalid={Boolean(errors.location)}
                      aria-describedby={errors.location ? "location-error" : undefined}
                      placeholder="City, venue…"
                      className={fieldClasses(Boolean(errors.location))}
                    />
                    <MapPin
                      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30"
                      aria-hidden="true"
                    />
                  </div>
                  {errors.location ? (
                    <p id="location-error" role="alert" className="mt-2 text-xs text-red-400">
                      {errors.location}
                    </p>
                  ) : null}
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="Campaign concept, show details, usage rights…"
                    className={`${fieldClasses(Boolean(errors.message))} resize-none`}
                  />
                  {errors.message ? (
                    <p id="message-error" role="alert" className="mt-2 text-xs text-red-400">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-3 rounded-full bg-gold px-10 py-4 text-[13px] font-bold uppercase tracking-[0.2em] text-ink transition-all hover:bg-gold-soft hover:shadow-[0_0_40px_rgba(212,175,55,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Preparing…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" aria-hidden="true" />
                      Submit Inquiry
                    </>
                  )}
                </button>
                <p className="text-xs text-white/35">
                  Opens your email client with the inquiry prefilled
                </p>
              </div>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}