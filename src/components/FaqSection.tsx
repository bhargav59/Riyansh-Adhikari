import { Plus } from "lucide-react";
import { faq } from "@/data/site";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto max-w-screen-2xl scroll-mt-24 px-5 py-24 md:px-10 md:py-32"
    >
      <Reveal>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, Answered"
          description="Quick answers about Riyansh Adhikari, his title and how to book him."
        />
      </Reveal>

      <div className="mx-auto max-w-3xl space-y-4">
        {faq.map((item, index) => (
          <Reveal key={item.question} delay={index * 0.05}>
            <details className="group rounded-2xl border border-white/10 bg-charcoal transition-colors open:border-gold/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-serif text-lg font-semibold leading-snug text-white md:text-xl">
                  {item.question}
                </h3>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-transform duration-300 group-open:rotate-45">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="border-t border-white/5 px-6 pb-6 pt-4 text-sm leading-relaxed text-white/60">
                {item.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}