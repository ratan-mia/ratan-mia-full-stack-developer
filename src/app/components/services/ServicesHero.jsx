import { ArrowUpRight, Asterisk } from 'lucide-react';

const serviceList = [
  { num: '01', name: 'Mobile Apps',     tech: 'React Native · Expo · TypeScript' },
  { num: '02', name: 'Full Stack Dev',  tech: 'Next.js · Laravel · Node.js' },
  { num: '03', name: 'E-Commerce',      tech: 'Shopify · WooCommerce · Stripe' },
  { num: '04', name: 'WordPress',       tech: 'Themes · Plugins · WooCommerce' },
  { num: '05', name: 'DevOps & Cloud',  tech: 'AWS · Docker · CI/CD' },
  { num: '06', name: 'Performance',     tech: 'Core Web Vitals · Lighthouse' },
  { num: '07', name: 'AI Integration',  tech: 'OpenAI · NLP · Automation' },
];

export default function ServicesHero() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row min-h-screen">

      {/* ── LEFT PANEL — White editorial ── */}
      <div className="relative flex-1 bg-white flex flex-col justify-between px-8 md:px-14 pt-20 pb-10 lg:min-h-screen overflow-hidden">

        {/* Corner accent blob */}
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-64 h-64 bg-accent-lime/20 rounded-full blur-3xl" />

        {/* Top meta row */}
        <div className="relative flex items-center justify-between">
          <span className="text-xs font-bold text-black/30 uppercase tracking-[0.2em]">
            Est. 2016 · Full Stack Developer
          </span>
          <div className="w-8 h-8 bg-accent-lime rounded-full flex items-center justify-center">
            <Asterisk className="w-4 h-4 text-black" />
          </div>
        </div>

        {/* Main headline */}
        <div className="relative flex-1 flex flex-col justify-center py-10 lg:py-0">
          <h1
            className="font-black uppercase tracking-tighter leading-[0.88]"
            style={{ fontSize: 'clamp(58px, 7.5vw, 108px)' }}
          >
            <span className="block text-black">We</span>
            <span
              className="block italic"
              style={{ color: 'transparent', WebkitTextStroke: '2.5px black' }}
            >
              Craft
            </span>
            <span className="block text-black">Digital</span>
            <span className="block bg-black text-accent-lime px-3 -mx-1 inline-block mt-1">
              Products.
            </span>
          </h1>

          <p className="mt-8 text-base text-black/45 max-w-sm leading-relaxed font-medium">
            7 specialized services. 150+ delivered projects. Trusted across 25+ countries — built to grow your business.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-accent-lime font-extrabold rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              Start a Project <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black/15 text-black font-extrabold rounded-2xl hover:border-black transition-colors duration-300"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Stats footer row */}
        <div className="relative grid grid-cols-3 gap-4 pt-8 border-t-2 border-black/8">
          {[['150+', 'Projects'], ['8+', 'Years'], ['98%', 'Success']].map(([v, l]) => (
            <div key={l}>
              <div className="text-3xl font-black text-black leading-none">{v}</div>
              <div className="text-xs text-black/35 font-semibold uppercase tracking-wider mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Vertical divider ── */}
      <div className="hidden lg:block w-px bg-black/10 self-stretch" />

      {/* ── RIGHT PANEL — Black service directory ── */}
      <div className="lg:w-[44%] bg-black flex flex-col justify-center px-8 md:px-12 py-16 lg:min-h-screen">

        {/* Section label */}
        <p className="text-[10px] font-extrabold text-white/25 uppercase tracking-[0.25em] mb-8">
          // What I Build
        </p>

        {/* Directory list */}
        <div>
          {serviceList.map((s) => (
            <div
              key={s.num}
              className="group flex items-center justify-between py-[18px] border-b border-white/[0.07] hover:border-accent-lime/30 cursor-default transition-all duration-300 hover:pl-2"
            >
              <div className="flex items-center gap-5">
                <span className="text-xs font-bold text-white/20 group-hover:text-accent-lime transition-colors duration-300 w-5 shrink-0">
                  {s.num}
                </span>
                <div>
                  <div className="text-[17px] font-extrabold text-white group-hover:text-accent-lime transition-colors duration-300 leading-tight">
                    {s.name}
                  </div>
                  <div className="text-xs text-white/25 font-medium mt-0.5">{s.tech}</div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/0 group-hover:text-accent-lime transition-all duration-300 shrink-0" />
            </div>
          ))}
        </div>

        {/* Lime CTA card */}
        <div className="mt-10 p-6 bg-accent-lime rounded-2xl">
          <p className="text-black font-extrabold text-lg leading-tight">Need something custom?</p>
          <p className="text-black/55 text-sm font-medium mt-1 mb-5">
            Let's talk about your project requirements.
          </p>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-accent-lime font-extrabold text-sm rounded-xl hover:scale-105 transition-transform duration-300"
          >
            Get a Free Quote <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
