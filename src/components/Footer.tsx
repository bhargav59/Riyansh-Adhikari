import { ArrowUp } from "lucide-react";
import { profile, socials } from "@/data/site";
import { socialIconMap } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-8 px-5 py-14 md:px-10">
        <a
          href="#top"
          className="font-serif text-2xl font-semibold tracking-[0.25em] text-white transition-colors hover:text-gold"
        >
          RIYANSH<span className="text-gold">.</span>
        </a>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {[
            ["Profile", "#profile"],
            ["Press", "#press"],
            ["Gallery", "#gallery"],
            ["Connect", "#connect"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-gold"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          {socials.map((social) => {
            const Icon = socialIconMap[social.name];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        <p className="text-center text-xs leading-relaxed text-white/30">
          © {new Date().getFullYear()} {profile.stageName} ({profile.legalName}) —
          {profile.title} · All rights reserved.
          <br />
          Photography &amp; media credits per Rajya Dainik, TV Today
          Entertainment &amp; official channels.
        </p>

        <a
          href="#top"
          aria-label="Back to top"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.25em] text-white/50 transition-all hover:border-gold hover:text-gold"
        >
          <ArrowUp className="h-3.5 w-3.5" />
          Top
        </a>
      </div>
    </footer>
  );
}