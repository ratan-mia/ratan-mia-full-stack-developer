// Decorative orbit system that sits behind the hero portrait: a tick ring,
// a sweeping lime arc and two counter-rotating rings carrying stack labels.
// All motion is driven from Hero.jsx so it respects reduced-motion.

const INNER = ['Next.js', 'React Native', 'Supabase'];
const OUTER = ['Shopify', 'TypeScript', 'WhatsApp API', 'Laravel', 'AI agents'];

function Ring({ size, items, cls, dashed, start = 0 }) {
  return (
    <div
      className={`${cls} absolute left-1/2 top-1/2 rounded-full border ${
        dashed ? 'border-dashed border-white/15' : 'border-white/10'
      }`}
      style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
    >
      {items.map((t, i) => {
        const a = start + (i / items.length) * Math.PI * 2;
        return (
          <span
            key={t}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${50 + 50 * Math.cos(a)}%`, top: `${50 + 50 * Math.sin(a)}%` }}
          >
            <span className="orbit-label flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_12px_2px_rgba(204,255,0,0.6)]" />
              <span className="hidden whitespace-nowrap rounded-full border border-white/15 bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/80 backdrop-blur lg:inline-block">
                {t}
              </span>
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default function HeroOrbit({ size = 760 }) {
  return (
    <div
      className="hero-orbit pointer-events-none absolute left-1/2 top-1/2 -z-10"
      style={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" className="orbit-ticks absolute inset-0 h-full w-full text-white/25">
        {Array.from({ length: 120 }).map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="0.5"
            x2="100"
            y2={i % 10 === 0 ? 5 : 2.5}
            transform={`rotate(${i * 3} 100 100)`}
            stroke="currentColor"
            strokeWidth={i % 10 === 0 ? 0.5 : 0.3}
          />
        ))}
        <circle cx="100" cy="100" r="44" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" />
        <circle
          className="orbit-arc"
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="#ccff00"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeDasharray="38 566"
        />
        <circle className="orbit-arc-2" cx="100" cy="100" r="44" fill="none" stroke="#ccff00" strokeOpacity="0.5" strokeWidth="0.4" strokeDasharray="12 264" />
      </svg>
      <Ring size={size * 0.62} items={INNER} cls="orbit-ring-a" start={-Math.PI / 3} />
      <Ring size={size * 0.9} items={OUTER} cls="orbit-ring-b" dashed start={Math.PI / 7} />
    </div>
  );
}
