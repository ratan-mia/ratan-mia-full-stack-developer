import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from '@/components/motion/Magnetic';

export default function CtaBand({
  title = 'Have a project in mind?',
  body = 'Tell me what you’re building — I reply within a day with questions and a rough plan.',
  primary = { label: 'Start a conversation', href: '/contact' },
  secondary = { label: 'Get a quote', href: '/quote' },
}) {
  return (
    <section className="bg-lime text-ink">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:flex-row lg:items-end lg:justify-between lg:px-12">
        <div>
          <h2
            data-reveal
            className="max-w-[14ch] font-display text-[clamp(40px,7vw,112px)] font-extrabold uppercase leading-[0.86] tracking-[-0.055em]"
          >
            {title}
          </h2>
          <p data-reveal className="mt-6 max-w-lg text-lg text-ink/70">
            {body}
          </p>
        </div>
        <div data-reveal className="flex flex-wrap gap-3">
          <Magnetic>
            <Link
              href={primary.href}
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-lime"
            >
              {primary.label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </Magnetic>
          {secondary && (
            <Magnetic>
              <Link
                href={secondary.href}
                className="inline-flex items-center rounded-full border border-ink/30 px-7 py-4 text-sm font-semibold transition-colors hover:border-ink"
              >
                {secondary.label}
              </Link>
            </Magnetic>
          )}
        </div>
      </div>
    </section>
  );
}
