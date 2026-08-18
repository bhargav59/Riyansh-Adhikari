type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl font-light tracking-wide text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-sm leading-relaxed text-white/60 md:text-base">
          {description}
        </p>
      ) : null}
      <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </div>
  );
}