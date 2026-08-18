"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
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
        description="Runway, editorial and behind-the-scenes frames from Sarlahi to Kathmandu. Tagged for easy swapping with full-resolution campaign imagery."
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
        className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-5"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((item) => (
            <motion.figure
              layout
              key={item.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-charcoal break-inside-avoid"
            >
              <div className="relative w-full">
                <Image
                  src={item.src}
                  alt={item.caption}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
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
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}