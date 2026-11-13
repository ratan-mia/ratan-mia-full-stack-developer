// Decorative orbit system that sits behind the hero portrait: a tick ring,
// a sweeping lime arc and two counter-rotating rings carrying stack labels.
// All motion is driven from Hero.jsx so it respects reduced-motion.

const INNER = ['Next.js', 'React Native', 'Supabase'];
const OUTER = ['Shopify', 'TypeScript', 'WhatsApp API', 'Laravel', 'AI agents'];

function Ring({ size, items, cls, dashed, start = 0 }) {
  return (
    <div
      className={`${cls} absolute left-1/2 top-1/2 rounded-full border ${
        dashed ? 'border-white/[0.06]' : 'border-white/[0.09]'
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
              <span className="h-1.5 w-1.5 rounded-full bg-lime/90" />
              <span className="sr-only">{t}</span>
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
      <svg viewBox="0 0 200 200" className="orbit-ticks absolute inset-0 h-full w-full text-white/0">
        <circle cx="100" cy="100" r="44" fill="none" stroke="rgba(255,255,255,0)" strokeWidth="0.3" />
        <circle
          className="orbit-arc"
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="#ccff00"
          strokeWidth="0.35"
          strokeOpacity="0.8"
          strokeLinecap="round"
          strokeDasharray="38 566"
        />
      </svg>
      <Ring size={size * 0.62} items={INNER} cls="orbit-ring-a" start={-Math.PI / 3} />
      <Ring size={size * 0.9} items={OUTER} cls="orbit-ring-b" dashed start={Math.PI / 7} />
    </div>
  );
}
