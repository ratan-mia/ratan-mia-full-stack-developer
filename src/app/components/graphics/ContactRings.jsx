// "Signal" graphic for the contact section: concentric rings around Dhaka,
// a slow radar sweep and a pulse at the centre. Animated in Contact.jsx.

export default function ContactRings({ className = '' }) {
  return (
    <svg viewBox="0 0 600 600" className={`pointer-events-none ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id="cr-sweep-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0b0b0b" stopOpacity="0" />
          <stop offset="1" stopColor="#0b0b0b" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      {[90, 190, 290].map((r, i) => (
        <circle
          key={r}
          className="cr-ring"
          cx="300"
          cy="300"
          r={r}
          fill="none"
          stroke="#0b0b0b"
          strokeOpacity={0.14 - i * 0.03}
          strokeWidth="1"
          
        />
      ))}
      <g className="cr-sweep">
        <path d="M300 300 L300 10 A290 290 0 0 1 467 63 Z" fill="url(#cr-sweep-grad)" />
        <path d="M300 300 L467 63" stroke="#0b0b0b" strokeOpacity="0.2" strokeWidth="1" />
      </g>
      <circle className="cr-pulse" cx="300" cy="300" r="9" fill="none" stroke="#0b0b0b" strokeWidth="1.5" />
      <circle cx="300" cy="300" r="7" fill="#0b0b0b" />
    </svg>
  );
}
