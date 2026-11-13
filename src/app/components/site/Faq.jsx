'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ } from '@/app/data/pages';

function Item({ q, a, open, onToggle, id }) {
  return (
    <li data-reveal className="border-b border-ink/15">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="group flex w-full items-center justify-between gap-6 py-7 text-left"
      >
        <span className="font-display text-xl font-semibold tracking-[-0.02em] sm:text-2xl">{q}</span>
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/20 transition-all duration-500 ${
            open ? 'rotate-45 border-ink bg-ink text-lime' : 'group-hover:border-ink'
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl pb-8 text-lg leading-relaxed text-ink/65">{a}</p>
        </div>
      </div>
    </li>
  );
}

export default function Faq({ items = FAQ, label = 'FAQ' }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-10 px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="col-span-12 lg:col-span-4">
          <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">
            {label}
          </p>
          <h2
            data-reveal
            className="mt-4 font-display text-[clamp(36px,5vw,72px)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em]"
          >
            Good <span className="font-serif font-normal normal-case italic">questions</span>
          </h2>
        </div>
        <ul className="col-span-12 border-t border-ink/15 lg:col-span-8">
          {items.map((it, i) => (
            <Item
              key={it.q}
              id={`faq-${i}`}
              {...it}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
