"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Play } from "lucide-react";
import { gallery, galleryFilters, type GalleryCategory } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";

export default function PortfolioGallery() {
  const [active, setActive] = useState<GalleryCategory>("All");

  const visible =
    active === "All"
      ? gallery
      : gallery.filter((item) => item.category === active);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="mx-auto max-w-screen-2xl scroll-mt-24 px-5 py-24 md:px-10 md:py-32"
    >
      <SectionHeading
        eyebrow="Portfolio"
        title="The Lookbook"
        description="Runway, editorial and behind-the-scenes frames from Sarlahi to Kathmandu. Tap a play badge to watch the full segment."
      />

      <div
        role="tablist"
        aria-label="Gallery filters"
        className="mb-10 flex flex-wrap justify-center gap-3"
      >
        {galleryFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={active === filter}
            onClick={() => setActive(filter)}
            className={`rounded-full border px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all ${
              active === filter
                ? "border-gold bg-gold text-ink"
                : "border-white/15 bg-charcoal text-white/60 hover:border-gold/50 hover:text-gold"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="flex flex-wrap gap-5"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((item) => {
            const ratio = item.width / item.height;
            const media = (
              <>
                <Image
                  src={item.src}
                  alt={item.caption}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {item.videoUrl ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ink shadow-[0_10px_40px_rgba(212,175,55,0.4)] transition-transform duration-300 group-hover:scale-110">
                      <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true" />
                    </span>
                  </div>
                ) : null}
              </>
            );

            return (
              <motion.figure
                layout
                key={item.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ flex: `${ratio} ${ratio} ${ratio * 280}px` }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-charcoal"
              >
                {item.videoUrl ? (
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch video — ${item.caption}`}
                    className="relative block h-full w-full"
                  >
                    {media}
                  </a>
                ) : (
                  <div className="relative block h-full w-full">{media}</div>
                )}

                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-serif text-lg leading-snug text-white">
                    {item.caption}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-gold">
                    <MapPin className="h-3 w-3" aria-hidden="true" />
                    {item.location}
                  </p>
                </figcaption>
                <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                  {item.category}
                </span>
              </motion.figure>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}