// Line illustrations for the capability cards. Stroked shapes carry
// `cg-draw` (drawn in with DrawSVG), accent blocks carry `cg-pop`, and a few
// elements loop (`cg-blink`, `cg-pulse`, `cg-dot`). Animated in Capabilities.jsx.

const LIME = '#ccff00';
const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.2, strokeLinecap: 'round', strokeLinejoin: 'round' };
const A = { ...S, stroke: LIME };

function Browser() {
  return (
    <>
      <rect className="cg-draw" x="20" y="24" width="360" height="252" rx="14" {...S} />
      <path className="cg-draw" d="M20 60 H380" {...S} />
      {[44, 60, 76].map((cx) => (
        <circle key={cx} className="cg-pop" cx={cx} cy="42" r="4" fill="currentColor" opacity="0.6" />
      ))}
      <rect className="cg-draw" x="150" y="34" width="150" height="16" rx="8" {...S} opacity="0.6" />
      <rect className="cg-draw" x="36" y="76" width="74" height="184" rx="8" {...S} />
      {[96, 114, 132, 150, 168].map((y, i) => (
        <path key={y} className="cg-draw" d={`M48 ${y} H${i % 2 ? 84 : 98}`} {...S} opacity="0.6" />
      ))}
      <rect className="cg-pop" x="124" y="76" width="240" height="78" rx="8" fill={LIME} opacity="0.14" />
      <rect className="cg-draw" x="124" y="76" width="240" height="78" rx="8" {...A} />
      <path className="cg-draw" d="M140 100 H260" {...A} strokeWidth="3" />
      <path className="cg-draw" d="M140 118 H220" {...S} opacity="0.7" />
      <rect className="cg-blink" x="224" y="112" width="2" height="12" fill={LIME} />
      <rect className="cg-draw" x="124" y="168" width="114" height="92" rx="8" {...S} />
      <rect className="cg-draw" x="250" y="168" width="114" height="92" rx="8" {...S} />
      <path className="cg-draw" d="M136 242 L160 222 L182 232 L206 198 L226 210" {...A} />
      {[192, 210, 228].map((y) => (
        <path key={y} className="cg-draw" d={`M262 ${y} H${y === 210 ? 330 : 350}`} {...S} opacity="0.6" />
      ))}
    </>
  );
}

function Phone() {
  return (
    <>
      <circle className="cg-pulse" cx="96" cy="196" r="14" {...A} />
      <circle className="cg-pulse" cx="96" cy="196" r="14" {...A} />
      <circle className="cg-pop" cx="96" cy="196" r="6" fill={LIME} />
      <rect className="cg-draw" x="140" y="14" width="124" height="272" rx="24" {...S} />
      <rect className="cg-pop" x="182" y="24" width="40" height="8" rx="4" fill="currentColor" opacity="0.5" />
      <rect className="cg-pop" x="156" y="46" width="92" height="54" rx="10" fill={LIME} opacity="0.9" />
      <path className="cg-draw" d="M156 116 H248 M156 134 H216" {...S} />
      <rect className="cg-draw" x="170" y="152" width="64" height="64" rx="6" {...S} />
      {[0, 1, 2].flatMap((r) =>
        [0, 1, 2].map((c) =>
          (r + c) % 2 === 0 ? (
            <rect key={`${r}${c}`} className="cg-pop" x={178 + c * 18} y={160 + r * 18} width="12" height="12" rx="2" fill="currentColor" opacity="0.7" />
          ) : null
        )
      )}
      <path className="cg-draw" d="M140 252 H264" {...S} opacity="0.6" />
      {[166, 190, 214, 238].map((cx, i) => (
        <circle key={cx} className="cg-pop" cx={cx} cy="268" r="3.5" fill={i === 0 ? LIME : 'currentColor'} opacity={i === 0 ? 1 : 0.5} />
      ))}
      <rect className="cg-draw" x="276" y="58" width="108" height="44" rx="12" {...A} />
      <circle className="cg-pop" cx="296" cy="80" r="7" fill={LIME} />
      <path className="cg-draw" d="M310 74 H368 M310 88 H348" {...S} />
      <path className="cg-draw" d="M264 92 C270 92 270 80 276 80" {...A} strokeDasharray="2 4" />
    </>
  );
}

function Commerce() {
  return (
    <>
      <rect className="cg-draw" x="24" y="34" width="156" height="232" rx="14" {...S} />
      <rect className="cg-pop" x="38" y="48" width="128" height="104" rx="8" fill={LIME} opacity="0.16" />
      <path className="cg-draw" d="M58 132 L88 96 L110 118 L126 104 L150 132 Z" {...A} />
      <circle className="cg-draw" cx="138" cy="72" r="8" {...A} />
      <path className="cg-draw" d="M38 172 H140 M38 190 H100" {...S} />
      <rect className="cg-pop" x="38" y="222" width="128" height="30" rx="15" fill={LIME} />
      <path className="cg-draw" d="M216 250 H382 M216 250 V60" {...S} opacity="0.6" />
      {[90, 130, 170, 210].map((y) => (
        <path key={y} className="cg-draw" d={`M216 ${y} H382`} {...S} opacity="0.15" />
      ))}
      <path className="cg-draw" d="M222 232 L256 214 L290 222 L322 172 L360 104" {...A} strokeWidth="2" />
      {[
        [256, 214],
        [290, 222],
        [322, 172],
      ].map(([cx, cy]) => (
        <circle key={cx} className="cg-pop" cx={cx} cy={cy} r="3.5" fill={LIME} />
      ))}
      <circle className="cg-pulse" cx="360" cy="104" r="6" {...A} />
      <circle className="cg-pop" cx="360" cy="104" r="5" fill={LIME} />
      <text className="cg-pop" x="300" y="84" fill={LIME} style={{ font: '600 15px var(--font-mono, monospace)' }}>
        +38%
      </text>
    </>
  );
}

function Automation() {
  const nodes = [
    { x: 56, y: 150, t: 'WA' },
    { x: 200, y: 70, t: 'AI' },
    { x: 200, y: 230, t: 'CRM' },
    { x: 344, y: 150, t: 'OK' },
  ];
  return (
    <>
      <path id="cg-p1" className="cg-draw" d="M82 140 C130 110 150 80 174 76" {...S} />
      <path id="cg-p2" className="cg-draw" d="M82 160 C130 190 150 220 174 224" {...S} />
      <path id="cg-p3" className="cg-draw" d="M226 76 C250 80 270 110 318 140" {...S} />
      <path id="cg-p4" className="cg-draw" d="M226 224 C250 220 270 190 318 160" {...S} />
      <path className="cg-draw" d="M200 96 V204" {...S} strokeDasharray="3 5" opacity="0.6" />
      {nodes.map((n, i) => (
        <g key={n.t}>
          {i === 3 && <circle className="cg-pulse" cx={n.x} cy={n.y} r="26" {...A} />}
          <circle className="cg-draw" cx={n.x} cy={n.y} r="26" {...(i === 1 || i === 3 ? A : S)} />
          {(i === 1 || i === 3) && <circle className="cg-pop" cx={n.x} cy={n.y} r="20" fill={LIME} opacity={i === 3 ? 1 : 0.15} />}
          <text
            className="cg-pop"
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            fill={i === 3 ? '#0b0b0b' : 'currentColor'}
            style={{ font: '600 11px var(--font-mono, monospace)', letterSpacing: 1 }}
          >
            {n.t}
          </text>
        </g>
      ))}
      {['cg-p1', 'cg-p3', 'cg-p2', 'cg-p4'].map((p) => (
        <circle key={p} className="cg-dot" data-path={p} r="4" fill={LIME} opacity="0" />
      ))}
    </>
  );
}

const VARIANTS = [Browser, Phone, Commerce, Automation];

export default function CapGraphic({ index = 0, className = '' }) {
  const Art = VARIANTS[index % VARIANTS.length];
  return (
    <svg viewBox="0 0 400 300" className={`cap-graphic h-auto w-full overflow-visible ${className}`} aria-hidden="true">
      <Art />
    </svg>
  );
}
