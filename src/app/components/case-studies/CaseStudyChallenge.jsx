import { Zap } from 'lucide-react';

// Requirements & challenges: numbered cards. Props unchanged.
export default function CaseStudyChallenge({
  id = 'challenge',
  label = 'Requirements & challenges',
  icon: Icon = Zap,
  title = 'Complex requirements',
  description,
  challenges = [],
}) {
  return (
    <section id={id} className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <p data-reveal className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
        <Icon className="h-3.5 w-3.5" /> {label}
      </p>
      <h2 data-reveal className="mt-4 max-w-4xl font-display text-[clamp(34px,4.5vw,64px)] font-extrabold leading-[0.95] tracking-[-0.045em]">
        {title}
      </h2>
      {description && (
        <p data-reveal className="mt-6 max-w-3xl text-lg leading-relaxed text-ink/70">
          {description}
        </p>
      )}
      <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-ink/10 md:grid-cols-2">
        {challenges.map((c, i) => {
          const CIcon = c.icon;
          return (
            <li key={c.title} data-reveal className="group bg-paper p-8 transition-colors duration-500 hover:bg-ink hover:text-paper">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-ink/40 transition-colors group-hover:text-lime">{String(i + 1).padStart(2, '0')}</span>
                {CIcon && <CIcon className="h-5 w-5 text-ink/40 transition-colors group-hover:text-lime" />}
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold tracking-[-0.03em]">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-ink/65 transition-colors group-hover:text-paper/65">{c.description}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
