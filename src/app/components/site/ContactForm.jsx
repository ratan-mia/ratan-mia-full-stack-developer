'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, Loader2 } from 'lucide-react';
import Magnetic from '@/components/motion/Magnetic';
import { PROFILE } from '@/app/data/site';

const TOPICS = ['New product / SaaS', 'Mobile app', 'Shopify / e-commerce', 'WhatsApp & AI automation', 'IT support', 'Something else'];

/**
 * Contact form posting to /api/contact. `tone="lime"` for the lime contact
 * section, `tone="paper"` on light pages. Optional phone field.
 */
export default function ContactForm({ tone = 'lime', withPhone = false, className = '' }) {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error | invalid

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('invalid');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, subject: topic }),
      });
      setStatus(res.ok ? 'sent' : 'error');
      if (res.ok) setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const chipOn = tone === 'lime' ? 'border-ink bg-ink text-lime' : 'border-ink bg-ink text-paper';
  const field =
    'w-full border-b border-ink/20 bg-transparent py-4 text-lg text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none transition-colors';

  return (
    <form onSubmit={submit} className={className} noValidate>
      <fieldset data-reveal>
        <legend className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">I need help with</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setTopic(t)}
              aria-pressed={topic === t}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                topic === t ? chipOn : 'border-ink/25 hover:border-ink'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div data-reveal className="mt-8 grid gap-2 sm:grid-cols-2 sm:gap-8">
        <label className="block">
          <span className="sr-only">Your name</span>
          <input className={field} placeholder="Your name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required autoComplete="name" />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input type="email" className={field} placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required autoComplete="email" />
        </label>
        {withPhone && (
          <label className="block sm:col-span-2">
            <span className="sr-only">Phone or WhatsApp</span>
            <input type="tel" className={field} placeholder="Phone / WhatsApp (optional)" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} autoComplete="tel" />
          </label>
        )}
      </div>
      <label data-reveal className="mt-2 block">
        <span className="sr-only">Project details</span>
        <textarea
          rows={4}
          className={`${field} resize-none`}
          placeholder="A few lines about the project, timeline and budget *"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
      </label>

      <div data-reveal className="mt-8 flex flex-wrap items-center gap-5">
        <Magnetic>
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-semibold disabled:opacity-60 ${
              tone === 'lime' ? 'text-lime' : 'text-paper'
            }`}
          >
            {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : status === 'sent' ? <Check className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
            {status === 'sent' ? 'Message sent' : 'Send message'}
          </button>
        </Magnetic>
        <p className="text-sm text-ink/70" role="status" aria-live="polite">
          {status === 'sent' && 'Thanks — I’ll be in touch shortly.'}
          {status === 'invalid' && 'Please add your name, email and a short message.'}
          {status === 'error' && `Something went wrong. Email me at ${PROFILE.email}.`}
        </p>
      </div>
    </form>
  );
}
