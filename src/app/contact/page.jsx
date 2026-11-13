import Link from 'next/link';
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/site/ContactForm';
import Faq from '@/components/site/Faq';
import PageHero from '@/components/site/PageHero';
import { PROFILE } from '@/app/data/site';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Ratan Mia about a web, mobile, commerce or automation project. Replies within 24 hours.',
  alternates: { canonical: '/contact' },
};

const METHODS = [
  { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Phone, label: 'Phone / WhatsApp', value: '+880 1751-010966', href: 'tel:+8801751010966' },
  { icon: MapPin, label: 'Based in', value: PROFILE.location },
  { icon: Clock, label: 'Response time', value: 'Within 24 hours' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s"
        accent="talk"
        meta={['Open for new projects', 'GMT+6']}
        intro="Whether it’s a new product, an app, a store that needs to sell more or IT that needs sorting out — tell me about it."
      />

      <section className="bg-paper text-ink">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-16 px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="col-span-12 lg:col-span-4">
            <ul className="divide-y divide-ink/15 border-y border-ink/15">
              {METHODS.map((m) => {
                const Icon = m.icon;
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-lime">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">{m.label}</span>
                      <span className="mt-0.5 block text-lg font-semibold">{m.value}</span>
                    </span>
                    {m.href && <ArrowUpRight className="ml-auto h-4 w-4 text-ink/40 transition-transform duration-500 group-hover:rotate-45 group-hover:text-ink" />}
                  </>
                );
                return (
                  <li key={m.label} data-reveal>
                    {m.href ? (
                      <a href={m.href} className="group flex items-center gap-4 py-5">
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 py-5">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div data-reveal className="mt-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">Elsewhere</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {PROFILE.socials
                  .filter((s) => s.href.startsWith('http'))
                  .map((s) => (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-ink/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-lime">
                        {s.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <div data-reveal className="mt-10 rounded-3xl bg-ink p-7 text-paper">
              <p className="font-display text-2xl font-bold tracking-[-0.03em]">Have a bigger brief?</p>
              <p className="mt-2 text-paper/60">The quote form asks the right questions and gets you a written estimate.</p>
              <Link href="/quote" className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink">
                Get a quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <h2 data-reveal className="font-display text-[clamp(32px,4vw,56px)] font-extrabold leading-[0.95] tracking-[-0.045em]">
              Send a message
            </h2>
            <ContactForm tone="paper" withPhone className="mt-10" />
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
