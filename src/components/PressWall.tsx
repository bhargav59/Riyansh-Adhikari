import Image from "next/image";
import { ExternalLink, Play, Radio, Newspaper, Award } from "lucide-react";
import { press, videos } from "@/data/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function PressWall() {
  const rajyadainik = press[0];
  const tvToday = press[1];
  const pni = press[2];

  return (
    <section
      id="press"
      aria-labelledby="press-heading"
      className="mx-auto max-w-screen-2xl scroll-mt-24 px-5 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Press & Media Kit"
          title="As Covered by the Media"
          description="From the title night at Samrat Hotel, Harivan to the national runway — the press record of Mr. Sarlahi 2021."
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Rajya Dainik — newspaper clipping */}
        <Reveal className="lg:col-span-2">
          <article
            aria-label="Rajya Dainik article clipping"
            className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-cream text-ink shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          >
            <div className="flex flex-col gap-6 p-7 md:p-10 lg:p-12">
              <header className="border-b-4 border-double border-ink/80 pb-6 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-ink/50">
                  राष्ट्रिय दैनिक · National Daily
                </p>
                <h3 className="mt-3 font-serif text-3xl font-bold tracking-tight md:text-5xl">
                  {rajyadainik.brandNepali}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.35em] text-ink/60">
                  {rajyadainik.brand} · {rajyadainik.date}
                </p>
              </header>

              <div className="text-center">
                <h4 className="font-serif text-2xl font-bold leading-tight md:text-4xl">
                  {rajyadainik.headline}
                </h4>
                <p className="mt-1 text-sm font-medium italic text-ink/60">
                  {rajyadainik.headlineEn}
                </p>
              </div>

              <div className="flex flex-col gap-8 md:flex-row">
                <div className="md:w-2/3">
                  <div className="columns-1 gap-8 text-[15px] leading-relaxed text-ink/85 sm:columns-2">
                    {rajyadainik.body.map((paragraph, i) => (
                      <p
                        key={i}
                        className={`mb-4 ${i === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-ink" : ""}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <blockquote className="mt-6 border-l-4 border-gold bg-gold/10 p-5 font-serif text-lg italic leading-relaxed text-ink md:text-xl">
                    “{rajyadainik.pullQuote}”
                    <span className="mt-2 block text-xs font-sans not-italic font-semibold uppercase tracking-[0.25em] text-ink/50">
                      {rajyadainik.pullQuoteEn}
                    </span>
                  </blockquote>
                </div>

                <aside className="shrink-0 md:w-1/3">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-ink/10 bg-ink">
                    {/* SWAP: replace with a higher-resolution press photograph of Riyansh */}
                    <Image
                      src={rajyadainik.image ?? ""}
                      alt="Sarlahi Fashion Runway 2021 — press photograph"
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <a
                    href={rajyadainik.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ink/70 underline-offset-4 transition-colors hover:text-gold hover:underline"
                  >
                    <Newspaper className="h-4 w-4" />
                    Read the original article
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </aside>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Right rail: TV Today + Pageant Nepal International */}
        <div className="flex flex-col gap-6">
          <Reveal delay={0.1} className="flex-1">
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-charcoal p-7 md:p-8">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30">
                  <Radio className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-semibold text-white">
                    {tvToday.brand}
                  </h4>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    {tvToday.outlet}
                  </p>
                </div>
              </div>
              <p className="font-serif text-lg italic leading-relaxed text-white/70">
                “{tvToday.pullQuote}”
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                {tvToday.body[0]}
              </p>
              <div className="mt-6 rounded-xl border border-dashed border-gold/40 bg-ink/60 p-5 text-xs leading-relaxed text-white/45">
                {/* SWAP: Paste the published TV Today / YouTube interview embed above:
                    replace the block below with
                    <iframe src="https://www.youtube.com/embed/VIDEO_ID" ... /> */}
                Interview segment embed slot — paste the TV Today YouTube link
                here once the episode is published.
              </div>
              <a
                href={tvToday.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-soft"
              >
                <Play className="h-3.5 w-3.5" />
                Visit TV Today Entertainment
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </article>
          </Reveal>

          <Reveal delay={0.2} className="flex-1">
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-charcoal p-7 md:p-8">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-semibold text-white">
                    {pni.brand}
                  </h4>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    {pni.date}
                  </p>
                </div>
              </div>
              <p className="font-serif text-lg italic leading-relaxed text-white/70">
                “{pni.pullQuote}”
              </p>
              <div className="relative mt-5 aspect-[4/5] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={pni.image ?? ""}
                  alt="Riyansh Adhikari — official Pageant Nepal International studio portrait, photographed by Suman Raya Majhi"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                {pni.body[0]}
              </p>
              <a
                href={pni.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-soft"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                View the official shoot — Facebook
              </a>
            </article>
          </Reveal>
        </div>
      </div>

      {/* Featured video segments */}
      <Reveal className="mt-6">
        <h3 className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-white/50">
          <Play className="h-4 w-4 text-gold" aria-hidden="true" />
          Featured Media Segments
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {videos.map((video, index) => (
            <figure
              key={video.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-charcoal transition-colors hover:border-gold/40"
            >
              <div className="relative aspect-video overflow-hidden bg-ink">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading={index === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <figcaption className="p-5">
                <p className="font-serif text-lg leading-snug text-white">
                  {video.title}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                  {video.source}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}