import { CheckCircle } from 'lucide-react';

// Solutions wrapper: header plus whatever blocks the page passes as children.
export default function CaseStudySolution({ id = 'solution', label = 'The solution', icon: Icon = CheckCircle, title = 'Our approach', description, children }) {
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
      <div className="mt-12">{children}</div>
    </section>
  );
}
