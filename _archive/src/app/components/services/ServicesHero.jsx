import { ArrowDownRight, ArrowRight, Bot, Code2, Globe, ShoppingCart, Smartphone, Zap } from 'lucide-react';

const services = [
  { icon: Smartphone, label: 'Mobile Apps', color: 'bg-accent-lime text-black' },
  { icon: Code2,      label: 'Full Stack',  color: 'bg-white text-black' },
  { icon: ShoppingCart, label: 'E-Commerce', color: 'bg-accent-lime text-black' },
  { icon: Globe,      label: 'WordPress',   color: 'bg-white text-black' },
  { icon: Bot,        label: 'AI & Automation', color: 'bg-accent-lime text-black' },
  { icon: Zap,        label: 'Performance', color: 'bg-white text-black' },
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '8+',   label: 'Years Experience' },
  { value: '25+',  label: 'Countries Served' },
  { value: '98%',  label: 'Client Satisfaction' },
];

const marqueeItems = [
  'React Native', 'Next.js', 'Laravel', 'Node.js', 'TypeScript',
  'Tailwind CSS', 'Supabase', 'AWS', 'Docker', 'OpenAI',
  'Shopify', 'WordPress', 'React', 'CI/CD', 'Firebase',
];

export default function ServicesHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden">

      {/* ── Oversized watermark text ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center z-0 overflow-hidden"
      >
        <span
          className="text-[22vw] font-black uppercase leading-none tracking-tighter whitespace-nowrap"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(204,255,0,0.07)',
          }}
        >
          SERVICES
        </span>
      </div>

      {/* ── Lime glow blobs ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent-lime/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] bg-accent-lime/6 rounded-full blur-[100px]" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-24 pb-0">

        {/* Top label row */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 border border-accent-lime/30 bg-accent-lime/8 text-accent-lime rounded-full text-xs font-extrabold uppercase tracking-widest">
            <span className="w-2 h-2 bg-accent-lime rounded-full animate-pulse" />
            Professional Services
          </div>
          <a
            href="#quote"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-accent-lime transition-colors duration-300"
          >
            Get a free quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Split layout: heading  +  service pills */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Giant heading */}
          <div>
            <h1 className="text-[clamp(52px,7vw,96px)] font-black leading-[0.95] tracking-tighter text-white uppercase">
              I Build<br />
              <span className="text-accent-lime">Digital</span><br />
              Products.
            </h1>
            <p className="mt-8 text-lg text-white/50 max-w-md leading-relaxed font-medium">
              From mobile apps to full-stack platforms — fast, scalable, and built to grow your business across every device and market.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent-lime text-black rounded-xl font-extrabold hover:scale-105 hover:shadow-2xl hover:shadow-accent-lime/20 transition-all duration-300"
              >
                Explore Services <ArrowDownRight className="w-5 h-5" />
              </a>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/15 text-white rounded-xl font-extrabold hover:border-accent-lime hover:text-accent-lime transition-all duration-300"
              >
                Start a Project
              </a>
            </div>
          </div>

          {/* Right — Service pills grid */}
          <div className="grid grid-cols-2 gap-4 lg:pt-4">
            {services.map(({ icon: Icon, label, color }, i) => (
              <div
                key={label}
                className={`group flex items-center gap-4 px-5 py-5 rounded-2xl font-extrabold text-sm cursor-default border-2 border-transparent hover:border-accent-lime/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${color}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={`py-8 px-6 ${i !== 0 ? 'border-l border-white/10' : ''} flex flex-col gap-1`}
            >
              <span className="text-4xl font-black text-accent-lime leading-none">{value}</span>
              <span className="text-sm text-white/40 font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Scrolling marquee strip ── */}
      <div className="relative z-10 mt-0 border-t border-white/10 bg-accent-lime overflow-hidden py-3">
        <div
          className="flex gap-10 whitespace-nowrap"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-black font-extrabold text-sm uppercase tracking-widest flex-shrink-0 flex items-center gap-3">
              {item}
              <span className="w-1.5 h-1.5 bg-black/30 rounded-full" />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
