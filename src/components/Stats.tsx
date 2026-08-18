import { Ruler, Eye, Crown, Sparkles, Award, Star } from "lucide-react";
import { stats } from "@/data/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const icons = {
  ruler: Ruler,
  eye: Eye,
  crown: Crown,
  sparkles: Sparkles,
  award: Award,
  star: Star,
} as const;

export default function Stats() {
  return (
    <section
      id="profile"
      aria-labelledby="stats-heading"
      className="mx-auto max-w-screen-2xl scroll-mt-24 px-5 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <SectionHeading
          eyebrow="The Portfolio Card"
          title="Measurements of a Titleholder"
          description="The professional metrics behind the Mr. Sarlahi 2021 crown — standard runway measurements, editorial discipline and an avant-garde presence."
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = icons[stat.icon as keyof typeof icons];
          return (
            <Reveal key={stat.label} delay={index * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-charcoal p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] md:p-9">
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gold/10 blur-2xl transition-all duration-500 group-hover:bg-gold/20" />
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
                  {stat.label}
                </h3>
                <p className="mt-2 font-serif text-2xl font-medium leading-snug text-white md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-sm text-white/50">{stat.detail}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}