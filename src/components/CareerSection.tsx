import { Briefcase, Languages, BadgeCheck } from "lucide-react";
import { career, careerSkills, languages } from "@/data/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function CareerSection() {
  return (
    <section
      id="career"
      aria-labelledby="career-heading"
      className="mx-auto max-w-screen-2xl scroll-mt-24 px-5 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Sales Career"
          title="Hospitality Sales & Front Office"
          description="Two years of hotel sales, marketing and front office operations — driving room sales, managing OTA platforms and building client relationships."
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <ol className="relative border-l border-gold/30 pl-6">
            {career.map((job) => (
              <li key={job.company} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-ink"
                  aria-hidden="true"
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold">
                  {job.period}
                </p>
                <h3 className="mt-1 font-serif text-2xl font-light leading-snug text-white">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
                  {job.company} · {job.location}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-white/60">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex h-full flex-col gap-6">
            <article className="rounded-2xl border border-white/10 bg-charcoal p-8">
              <h3 className="mb-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/40">
                <Briefcase className="h-4 w-4 text-gold" aria-hidden="true" />
                Skills
              </h3>
              <ul className="space-y-4">
                {careerSkills.map(({ skill, detail }) => (
                  <li key={skill} className="flex items-start gap-3">
                    <BadgeCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-semibold text-white">{skill}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/40">
                        {detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-white/10 bg-charcoal p-8">
              <h3 className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/40">
                <Languages className="h-4 w-4 text-gold" aria-hidden="true" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span
                    key={language}
                    className="rounded-full border border-gold/30 bg-ink px-4 py-2 text-xs font-medium text-white/70"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}