'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Loader2 } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { PROFILE } from '@/app/data/site';

const TYPES = ['Mobile app', 'Web app / SaaS', 'Online store', 'AI & automation', 'WordPress site', 'IT management', 'Landing page', 'Something else'];
const FEATURES = ['User accounts & login', 'Online payments', 'Admin dashboard', 'Mobile app (iOS/Android)', 'WhatsApp / CRM integration', 'AI features', 'CMS / blog', 'Multi-language'];
const BUDGETS = ['Under $2,000', '$2,000 – $5,000', '$5,000 – $10,000', '$10,000 – $20,000', '$20,000+', 'Let’s discuss'];
const TIMELINES = ['ASAP', '1–2 weeks', '1 month', '2–3 months', '3–6 months', 'Flexible'];
const PRIORITIES = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'urgent', label: 'Urgent' },
];
const STEPS = ['Project', 'Budget & timing', 'About you'];

function Chip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-5 py-3 text-[15px] font-medium transition-colors ${
        active ? 'border-ink bg-ink text-lime' : 'border-ink/20 hover:border-ink'
      }`}
    >
      {children}
    </button>
  );
}

export default function QuoteWizard() {
  const params = useSearchParams();
  const panel = useRef(null);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [ref, setRef] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState({
    projectType: '',
    features: [],
    budget: '',
    timeline: '',
    priority: 'medium',
    name: '',
    email: '',
    company: '',
    phone: '',
    description: '',
  });

  useEffect(() => {
    const t = params.get('type');
    if (t && TYPES.includes(t)) setData((d) => ({ ...d, projectType: t }));
  }, [params]);

  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const toggleFeature = (f) =>
    set('features', data.features.includes(f) ? data.features.filter((x) => x !== f) : [...data.features, f]);

  const canNext = [
    Boolean(data.projectType),
    Boolean(data.budget && data.timeline),
    Boolean(data.name.trim() && /\S+@\S+\.\S+/.test(data.email) && data.description.trim()),
  ];

  const go = (dir) => {
    const next = step + dir;
    if (next < 0 || next >= STEPS.length) return;
    setError('');
    gsap.fromTo(panel.current, { x: dir * 40, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.6, ease: 'expo.out' });
    setStep(next);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!canNext[2]) {
      setError('Please add your name, a valid email and a short description.');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error();
      setRef(json.referenceId || '');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const field =
    'w-full border-b border-ink/20 bg-transparent py-4 text-lg text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none transition-colors';

  if (status === 'sent') {
    return (
      <div className="rounded-3xl bg-ink p-10 text-paper sm:p-16">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-lime text-ink">
          <Check className="h-6 w-6" />
        </span>
        <h2 className="mt-8 font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">Request received.</h2>
        <p className="mt-4 max-w-lg text-lg text-paper/65">
          Thanks, {data.name.split(' ')[0]}. You’ll get a detailed quote within 24 hours at {data.email}.
          {ref && (
            <>
              {' '}Your reference is <span className="font-mono text-lime">#{ref}</span>.
            </>
          )}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-ink/15 bg-paper p-6 sm:p-10 lg:p-14">
      {/* Progress */}
      <ol className="flex items-center gap-3">
        {STEPS.map((s, i) => (
          <li key={s} className="flex flex-1 items-center gap-3">
            <span
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full font-mono text-xs transition-colors ${
                i < step ? 'bg-ink text-lime' : i === step ? 'bg-lime text-ink' : 'border border-ink/20 text-ink/40'
              }`}
            >
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </span>
            <span className={`hidden text-sm font-medium sm:block ${i === step ? '' : 'text-ink/45'}`}>{s}</span>
            {i < STEPS.length - 1 && <span className="h-px flex-1 bg-ink/15" />}
          </li>
        ))}
      </ol>

      <div ref={panel} className="mt-12 min-h-[320px]">
        {step === 0 && (
          <div className="space-y-10">
            <fieldset>
              <legend className="font-display text-3xl font-bold tracking-[-0.03em]">What are we building?</legend>
              <div className="mt-6 flex flex-wrap gap-2">
                {TYPES.map((t) => (
                  <Chip key={t} active={data.projectType === t} onClick={() => set('projectType', t)}>
                    {t}
                  </Chip>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">Must-have features (optional)</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {FEATURES.map((f) => (
                  <Chip key={f} active={data.features.includes(f)} onClick={() => toggleFeature(f)}>
                    {f}
                  </Chip>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-10">
            <fieldset>
              <legend className="font-display text-3xl font-bold tracking-[-0.03em]">Budget range</legend>
              <div className="mt-6 flex flex-wrap gap-2">
                {BUDGETS.map((b) => (
                  <Chip key={b} active={data.budget === b} onClick={() => set('budget', b)}>
                    {b}
                  </Chip>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-display text-3xl font-bold tracking-[-0.03em]">Timeline</legend>
              <div className="mt-6 flex flex-wrap gap-2">
                {TIMELINES.map((t) => (
                  <Chip key={t} active={data.timeline === t} onClick={() => set('timeline', t)}>
                    {t}
                  </Chip>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">Priority</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {PRIORITIES.map((p) => (
                  <Chip key={p.value} active={data.priority === p.value} onClick={() => set('priority', p.value)}>
                    {p.label}
                  </Chip>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        {step === 2 && (
          <div>
            <p className="font-display text-3xl font-bold tracking-[-0.03em]">Where should the quote go?</p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2 sm:gap-x-8">
              <input className={field} placeholder="Your name *" value={data.name} onChange={(e) => set('name', e.target.value)} autoComplete="name" aria-label="Your name" />
              <input className={field} type="email" placeholder="Email *" value={data.email} onChange={(e) => set('email', e.target.value)} autoComplete="email" aria-label="Email" />
              <input className={field} placeholder="Company (optional)" value={data.company} onChange={(e) => set('company', e.target.value)} autoComplete="organization" aria-label="Company" />
              <input className={field} type="tel" placeholder="Phone / WhatsApp (optional)" value={data.phone} onChange={(e) => set('phone', e.target.value)} autoComplete="tel" aria-label="Phone" />
            </div>
            <textarea
              rows={4}
              className={`${field} mt-2 resize-none`}
              placeholder="Describe the project: who it’s for, what it should do, links to anything similar *"
              value={data.description}
              onChange={(e) => set('description', e.target.value)}
              aria-label="Project description"
            />
            <p className="mt-6 text-sm text-ink/55">
              {data.projectType} · {data.budget} · {data.timeline}
              {data.features.length > 0 && ` · ${data.features.length} feature${data.features.length > 1 ? 's' : ''}`}
            </p>
          </div>
        )}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink/15 pt-8">
        <button
          type="button"
          onClick={() => go(-1)}
          disabled={step === 0}
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 transition-colors hover:text-ink disabled:invisible"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
        <p className="order-last w-full text-sm text-ink/70 sm:order-none sm:w-auto" role="status" aria-live="polite">
          {error}
          {status === 'error' && `Something went wrong — email me at ${PROFILE.email}.`}
        </p>
        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={() => (canNext[step] ? go(1) : setError(step === 0 ? 'Pick a project type to continue.' : 'Pick a budget and timeline to continue.'))}
            className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-lime"
          >
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink disabled:opacity-60"
          >
            {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
            Request my quote
          </button>
        )}
      </div>
    </form>
  );
}
