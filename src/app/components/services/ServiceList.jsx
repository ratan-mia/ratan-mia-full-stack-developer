'use client';

import { useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import { SERVICES } from '@/app/data/pages';

// Numbered service rows that expand to show what's included.
export default function ServiceList() {
  const [open, setOpen] = useState(0);
  return (
    <ul className="border-t border-ink/15">
      {SERVICES.map((s, i) => {
        const isOpen = open === i;
        return (
          <li key={s.id} id={s.id} data-reveal className="border-b border-ink/15">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={`svc-${s.id}`}
              className="group grid w-full grid-cols-12 items-center gap-x-4 py-8 text-left sm:py-10"
            >
              <span className="col-span-2 font-mono text-sm text-ink/40 sm:col-span-1">{String(i + 1).padStart(2, '0')}</span>
              <span
                className={`col-span-8 font-display text-[clamp(26px,4vw,56px)] font-bold leading-none tracking-[-0.04em] transition-transform duration-500 group-hover:translate-x-2 sm:col-span-10 ${
                  isOpen ? '' : 'text-ink/80'
                }`}
              >
                {s.title}
              </span>
              <span
                className={`col-span-2 grid h-12 w-12 place-items-center justify-self-end rounded-full border transition-all duration-500 sm:col-span-1 ${
                  isOpen ? 'rotate-0 border-ink bg-ink text-lime' : '-rotate-90 border-ink/20'
                }`}
              >
                <ArrowDownRight className="h-5 w-5" />
              </span>
            </button>
            <div
              id={`svc-${s.id}`}
              className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid grid-cols-12 gap-x-4 gap-y-6 pb-10">
                  <p className="col-span-12 text-lg leading-relaxed text-ink/70 sm:col-span-10 sm:col-start-2 lg:col-span-5 lg:col-start-2">
                    {s.summary}
                  </p>
                  <ul className="col-span-12 grid gap-2 sm:col-span-10 sm:col-start-2 sm:grid-cols-2 lg:col-span-5 lg:col-start-8">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 border-t border-ink/10 pt-3 text-[15px] text-ink/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
