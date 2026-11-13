// "Signal" graphic for the contact section: concentric rings around Dhaka,
// a rotating radar sweep and pulsing client pins. Animated in Contact.jsx.

const PINS = [
  [430, 190],
  [170, 160],
  [380, 440],
  [120, 380],
  [500, 330],
];

export default function ContactRings({ className = '' }) {
  return (
    <svg viewBox="0 0 600 600" className={`pointer-events-none ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id="cr-sweep-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0b0b0b" stopOpacity="0" />
          <stop offset="1" stopColor="#0b0b0b" stopOpacity="0.14" />
        </linearGradient>
      </defs>
      {[60, 120, 180, 240, 290].map((r, i) => (
        <circle
          key={r}
          className="cr-ring"
          cx="300"
          cy="300"
          r={r}
          fill="none"
          stroke="#0b0b0b"
          strokeOpacity={0.18 - i * 0.02}
          strokeWidth="1"
          strokeDasharray={i % 2 ? '2 6' : undefined}
        />
      ))}
      <path className="cr-ring" d="M300 0 V600 M0 300 H600" stroke="#0b0b0b" strokeOpacity="0.08" />
      <g className="cr-sweep">
        <path d="M300 300 L300 10 A290 290 0 0 1 467 63 Z" fill="url(#cr-sweep-grad)" />
        <path d="M300 300 L467 63" stroke="#0b0b0b" strokeOpacity="0.35" strokeWidth="1" />
      </g>
      {PINS.map(([x, y]) => (
        <g key={`${x}${y}`}>
          <circle className="cr-pulse" cx={x} cy={y} r="5" fill="none" stroke="#0b0b0b" strokeWidth="1" />
          <circle cx={x} cy={y} r="3.5" fill="#0b0b0b" fillOpacity="0.55" />
        </g>
      ))}
      <circle className="cr-pulse" cx="300" cy="300" r="9" fill="none" stroke="#0b0b0b" strokeWidth="1.5" />
      <circle cx="300" cy="300" r="7" fill="#0b0b0b" />
      <text x="284" y="294" textAnchor="end" fill="#0b0b0b" fillOpacity="0.7" style={{ font: '500 11px var(--font-mono, monospace)', letterSpacing: 2 }}>
        DHAKA · GMT+6
      </text>
    </svg>
  );
}
