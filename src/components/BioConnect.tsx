import { Quote, ArrowUpRight } from "lucide-react";
import { profile, socials } from "@/data/site";
import { socialIconMap } from "@/components/SocialIcons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const timeline = [
  {
    year: "2021",
    title: "Mr. Sarlahi — Title Night",
    detail:
      "Crowned winner of Sarlahi Fashion Runway 2021 at Samrat Hotel, Harivan — the first Mr. Model of Sarlahi.",
  },
  {
    year: "2021 — 2022",
    title: "Brand Ambassador, Pageant Nepal International",
    detail:
      "One-year ambassadorship with promotional shoots and national campaigns, per Rajya Dainik coverage.",
  },
  {
    year: "2023",
    title: "Runway & Content Circuit",
    detail:
      "Fashion shows across Sarlahi alongside music and editorial content from Kathmandu, Nagarkot and Pokhara.",
  },
  {
    year: "Now",
    title: "Open for Campaigns",
    detail:
      "Booking ramp walks, editorial print, and avant-garde collaborations across Nepal and beyond.",
  },
];

export default function BioConnect() {
  return (
    <section
      id="connect"
      aria-labelledby="connect-heading"
      className="mx-auto max-w-screen-2xl scroll-mt-24 px-5 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Biography & Connect"
          title="From Pageantry to the Runway"
          description="A Sarlahi boy who walked into the spotlight — and never looked back."
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <article className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-charcoal p-8 md:p-12">
            <Quote
              className="absolute right-8 top-8 h-16 w-16 text-gold/10"
              aria-hidden="true"
            />
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
              The Story
            </p>
            <h3 className="max-w-xl font-serif text-3xl font-light leading-snug text-white md:text-4xl">
              &ldquo;I&apos;m the first model of Sarlahi runway — and this is my
              award taking time.&rdquo;
            </h3>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-white/60">
              <p>
                Born and raised in Sarlahi, Nepal, {profile.stageName} — known
                to family and friends as {profile.legalName} — began his
                journey in the humble halls of his hometown. In October 2021,
                on the stage of the Sarlahi Fashion Runway at Samrat Hotel,
                Harivan, he claimed the crown among 17 competing models,
                becoming the first Mr. Model of Sarlahi.
              </p>
              <p>
                The title opened doors beyond the runway. As a one-year Brand
                Ambassador of Pageant Nepal International, he fronted
                promotional shoots and campaigns; his walk, choreographed by
                fashion veteran Dikpal Karki, drew national attention through
                Rajya Dainik and TV Today&apos;s entertainment programming.
              </p>
              <p>
                Today he moves between ramps in Sarlahi and the streets of
                Kathmandu — a runway athlete, editorial face and music-driven
                creative building a distinctly Nepali high-fashion identity.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold transition-colors hover:text-gold-soft"
            >
              Work with him <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article
            aria-label="Career timeline"
            className="flex h-full flex-col gap-7 rounded-2xl border border-white/10 bg-charcoal p-8 md:p-10"
          >
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/40">
              Timeline
            </h3>
            <ol className="relative border-l border-gold/30 pl-6">
              {timeline.map((entry) => (
                <li key={entry.title} className="relative pb-8 last:pb-0">
                  <span
                    className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-ink"
                    aria-hidden="true"
                  />
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
                    {entry.year}
                  </p>
                  <h4 className="mt-1 font-serif text-lg font-semibold leading-snug text-white">
                    {entry.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                    {entry.detail}
                  </p>
                </li>
              ))}
            </ol>
          </article>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-6 rounded-2xl border border-white/10 bg-charcoal p-8 md:p-10">
          <h3 className="mb-6 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-white/40">
            Follow the Runway
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {socials.map((social) => {
              const Icon = socialIconMap[social.name];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-ink p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
                >
                  <Icon className="h-6 w-6 text-white/60 transition-colors group-hover:text-gold" />
                  <span className="text-sm font-semibold text-white">
                    {social.name}
                  </span>
                  <span className="text-xs text-white/40">{social.handle}</span>
                </a>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}