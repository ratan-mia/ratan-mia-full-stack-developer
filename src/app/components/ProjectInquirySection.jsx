'use client';

import { useState } from 'react';
import { ArrowUpRight, Check, Loader2 } from 'lucide-react';
import { PROFILE } from '@/app/data/site';

const SERVICES = [
  'Mobile app development',
  'Web application / SaaS',
  'E-commerce platform',
  'WhatsApp / CRM / AI automation',
  'API development & integration',
  'MVP development',
  'Technical consultation',
  'Other',
];
const BUDGETS = ['Under $5,000', '$5,000 – $10,000', '$10,000 – $25,000', '$25,000 – $50,000', '$50,000+', 'To be discussed'];

// Inquiry form shown at the end of every case study. Posts to /api/project-inquiry.
export default function ProjectInquirySection() {
  const [data, setData] = useState({ fullName: '', email: '', companyName: '', serviceRequired: '', projectBudget: '', projectDetails: '' });
  const [status, setStatus] = useState('idle');
  const set = (k) => (e) => setData({ ...data, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!data.fullName.trim() || !data.email.trim() || !data.serviceRequired || !data.projectBudget || !data.projectDetails.trim()) {
      setStatus('invalid');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/project-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? 'sent' : 'error');
      if (res.ok) setData({ fullName: '', email: '', companyName: '', serviceRequired: '', projectBudget: '', projectDetails: '' });
    } catch {
      setStatus('error');
    }
  };

  const field =
    'w-full border-b border-ink/25 bg-transparent py-4 text-lg text-ink placeholder:text-ink/45 focus:border-ink focus:outline-none transition-colors';

  return (
    <section id="project-inquiry-section" className="bg-lime text-ink">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-12 px-5 py-24 sm:px-8 sm:py-28 lg:px-12">
        <div className="col-span-12 lg:col-span-5">
          <p data-reveal className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/60">Start a project</p>
          <h2 data-reveal className="mt-4 font-display text-[clamp(40px,6vw,96px)] font-extrabold uppercase leading-[0.86] tracking-[-0.055em]">
            Need something <span className="font-serif font-normal normal-case italic">similar?</span>
          </h2>
          <p data-reveal className="mt-6 max-w-md text-lg text-ink/70">
            Tell me a little about it — you’ll hear back within 24 hours. Or email{' '}
            <a href={`mailto:${PROFILE.email}`} className="font-semibold underline underline-offset-4">
              {PROFILE.email}
            </a>
            .
          </p>
        </div>

        <form onSubmit={submit} noValidate className="col-span-12 lg:col-span-6 lg:col-start-7">
          <div data-reveal className="grid gap-2 sm:grid-cols-2 sm:gap-x-8">
            <input className={field} placeholder="Full name *" value={data.fullName} onChange={set('fullName')} autoComplete="name" aria-label="Full name" />
            <input className={field} type="email" placeholder="Email *" value={data.email} onChange={set('email')} autoComplete="email" aria-label="Email" />
            <input className={`${field} sm:col-span-2`} placeholder="Company (optional)" value={data.companyName} onChange={set('companyName')} autoComplete="organization" aria-label="Company" />
            <select className={field} value={data.serviceRequired} onChange={set('serviceRequired')} aria-label="Service required">
              <option value="">Service required *</option>
              {SERVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
            <select className={field} value={data.projectBudget} onChange={set('projectBudget')} aria-label="Project budget">
              <option value="">Budget *</option>
              {BUDGETS.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>
          <textarea data-reveal rows={4} className={`${field} mt-2 resize-none`} placeholder="Project details *" value={data.projectDetails} onChange={set('projectDetails')} aria-label="Project details" />
          <div data-reveal className="mt-8 flex flex-wrap items-center gap-5">
            <button type="submit" disabled={status === 'loading'} className="inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-lime disabled:opacity-60">
              {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : status === 'sent' ? <Check className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
              {status === 'sent' ? 'Inquiry sent' : 'Send inquiry'}
            </button>
            <p className="text-sm text-ink/70" role="status" aria-live="polite">
              {status === 'sent' && 'Thanks — I’ll reply within 24 hours.'}
              {status === 'invalid' && 'Please fill in the required fields.'}
              {status === 'error' && `Something went wrong — email ${PROFILE.email}.`}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
