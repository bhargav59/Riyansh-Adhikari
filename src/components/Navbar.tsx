"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { socialIconMap } from "@/components/SocialIcons";

const navLinks = [
  { label: "Profile", href: "#profile" },
  { label: "Press", href: "#press" },
  { label: "Gallery", href: "#gallery" },
  { label: "Connect", href: "#connect" },
  { label: "Contact", href: "#contact" },
];

const socialIcons = [
  { name: "Instagram", href: "https://www.instagram.com/adhikari.riyansh/" },
  { name: "Facebook", href: "https://www.facebook.com/adhikari.riyansh" },
  { name: "TikTok", href: "https://www.tiktok.com/@mr.sarlahi1" },
  { name: "YouTube", href: "https://www.youtube.com/@RiyanshAdhikari" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-5 md:px-10"
      >
        <a
          href="#top"
          className="font-serif text-lg font-semibold tracking-[0.25em] text-white transition-colors hover:text-gold"
        >
          RIYANSH<span className="text-gold">.</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          {socialIcons.map(({ name, href }) => {
            const Icon = socialIconMap[name];
            return (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-white/50 transition-colors hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-white/80 hover:text-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 bg-ink/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-serif text-2xl text-white/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}