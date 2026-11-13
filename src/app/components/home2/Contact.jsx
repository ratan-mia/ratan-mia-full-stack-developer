'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { ArrowUpRight, Check, Loader2 } from 'lucide-react';
import Magnetic from '@/components/motion/Magnetic';
import { gsap, MOTION_OK, SplitText, useGSAP } from '@/lib/gsap';
import { PROFILE } from '@/app/data/site';

const TOPICS = ['New product / SaaS', 'Mobile app', 'Shopify / e-commerce', 'WhatsApp & AI automation', 'Something else'];

export default function Contact() {
  const root = useRef(null);
  const [topic, setTopic] = useState(TOPICS[0]);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      const split = SplitText.create('.cta-big', { type: 'words,chars', mask: 'chars' });
      gsap.from(split.chars, {
        yPercent: 110,
        stagger: 0.025,
        duration: 1.3,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.cta-big', start: 'top 85%' },
      });
      gsap.from('.contact-in', {
        y: 30,
        autoAlpha: 0,
        stagger: 0.07,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.contact-grid', start: 'top 85%' },
      });
      return () => split.revert();
    });
  }, { scope: root });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, subject: topic }),
      });
      setStatus(res.ok ? 'sent' : 'error');
      if (res.ok) setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const field =
    'w-full border-b border-ink/20 bg-transparent py-4 text-lg text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none transition-colors';

  return (
    <section ref={root} id="get-in-touch" className="relative overflow-hidden bg-lime text-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">(05) — Contact</p>
        <h2 className="cta-big mt-6 font-display text-[clamp(44px,12.5vw,220px)] font-extrabold uppercase leading-[0.82] tracking-[-0.06em]">
          Let’s build
          <br />
          <span className="font-serif font-normal normal-case italic tracking-[-0.03em]">something</span> good
        </h2>

        <div className="contact-grid mt-16 grid grid-cols-12 gap-x-4 gap-y-14 lg:mt-24 lg:gap-10">
          <div className="col-span-12 lg:col-span-5">
            <p className="contact-in max-w-md text-lg leading-relaxed text-ink/75">
              Tell me what you’re building. I reply within a day — usually with a few questions and a rough plan.
            </p>
            <Magnetic className="contact-in mt-8" strength={0.2}>
              <a
                href={`mailto:${PROFILE.email}`}
                data-cursor="Write"
                className="group inline-flex items-center gap-3 border-b-2 border-ink pb-1 font-display text-[clamp(20px,5.5vw,36px)] font-bold tracking-[-0.02em]"
              >
                {PROFILE.email}
                <ArrowUpRight className="h-7 w-7 transition-transform duration-500 group-hover:rotate-45" />
              </a>
            </Magnetic>
            <p className="contact-in mt-8 text-sm text-ink/70">
              Prefer more detail? Use the{' '}
              <Link href="/contact" className="font-semibold underline underline-offset-4">contact page</Link> or{' '}
              <Link href="/quote" className="font-semibold underline underline-offset-4">request a quote</Link>.
            </p>
            <ul className="contact-in mt-6 flex flex-wrap gap-2">
              {PROFILE.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex rounded-full border border-ink/25 px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-lime"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={submit} className="col-span-12 lg:col-span-6 lg:col-start-7" noValidate>
            <fieldset className="contact-in">
              <legend className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">I need help with</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {TOPICS.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTopic(t)}
                    aria-pressed={topic === t}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      topic === t ? 'border-ink bg-ink text-lime' : 'border-ink/25 hover:border-ink'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="contact-in mt-8 grid gap-2 sm:grid-cols-2 sm:gap-8">
              <label className="block">
                <span className="sr-only">Your name</span>
                <input
                  className={field}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  type="email"
                  className={field}
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </label>
            </div>
            <label className="contact-in mt-2 block">
              <span className="sr-only">Project details</span>
              <textarea
                rows={4}
                className={`${field} resize-none`}
                placeholder="A few lines about the project, timeline and budget"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </label>

            <div className="contact-in mt-8 flex flex-wrap items-center gap-5">
              <Magnetic>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-lime transition-transform disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : status === 'sent' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4" />
                  )}
                  {status === 'sent' ? 'Message sent' : 'Send message'}
                </button>
              </Magnetic>
              <p className="text-sm text-ink/70" role="status" aria-live="polite">
                {status === 'sent' && 'Thanks — I’ll be in touch shortly.'}
                {status === 'error' && `Something went wrong. Email me at ${PROFILE.email}.`}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
