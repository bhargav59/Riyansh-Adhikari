"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Crown } from "lucide-react";
import { profile } from "@/data/site";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Hero"
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden"
    >
      {/* SWAP: Replace with a full-bleed editorial portrait of Riyansh */}
      <div className="absolute inset-0">
        <Image
          src="https://i.ytimg.com/vi/erHy7L1pwcs/maxresdefault.jpg"
          alt="Riyansh Adhikari — Mr. Sarlahi 2021, award moment on the runway"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-screen-2xl px-5 pb-28 pt-40 md:px-10 md:pb-36"
      >
        <motion.p
          variants={fadeUp}
          custom={0.1}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-ink/60 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold backdrop-blur-sm md:text-xs"
        >
          <Crown className="h-3.5 w-3.5" />
          Sarlahi Fashion Runway 2021 · Winner
        </motion.p>

        <motion.h1
          variants={fadeUp}
          custom={0.25}
          className="font-serif text-[13vw] font-light leading-[0.95] tracking-[0.08em] text-white sm:text-7xl md:text-8xl lg:text-9xl"
        >
          RIYANSH
          <br />
          <span className="text-gold">ADHIKARI</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={0.4}
          className="mt-6 max-w-xl text-sm font-medium uppercase tracking-[0.25em] text-white/70 md:text-base"
        >
          {profile.subtitle}
        </motion.p>

        <motion.p
          variants={fadeUp}
          custom={0.5}
          className="mt-3 max-w-lg text-sm leading-relaxed text-white/50"
        >
          {profile.legalName} — the first Mr. Model of Sarlahi, Nepal. Runway
          athlete, editorial face and former Brand Ambassador of Pageant Nepal
          International.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={0.65}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-[13px] font-bold uppercase tracking-[0.2em] text-ink transition-all hover:bg-gold-soft hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]"
          >
            Book for Campaigns
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-white/80 transition-all hover:border-gold hover:text-gold"
          >
            View Portfolio
          </a>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-6">
        <a
          href="#profile"
          aria-label="Scroll to profile"
          className="animate-bounce text-gold/70 transition-colors hover:text-gold"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}