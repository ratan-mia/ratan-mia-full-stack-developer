/**
 * Section header: numbered mono label on the left, large title on the right.
 * `tone` is 'light' (ink text on paper) or 'dark' (paper text on ink).
 */
export default function SectionHead({ label, title, accent, intro, tone = 'light', className = '' }) {
  const muted = tone === 'dark' ? 'text-mute' : 'text-ink/50';
  const introColor = tone === 'dark' ? 'text-paper/60' : 'text-ink/65';
  return (
    <div className={`grid grid-cols-12 gap-x-4 gap-y-4 ${className}`}>
      <p data-reveal className={`col-span-12 font-mono text-[11px] uppercase tracking-[0.2em] lg:col-span-3 ${muted}`}>
        {label}
      </p>
      <div className="col-span-12 lg:col-span-9">
        <h2
          data-reveal
          className="font-display text-[clamp(36px,5.5vw,88px)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em]"
        >
          {title}
          {accent && (
            <>
              {' '}
              <span className={`font-serif font-normal normal-case italic tracking-[-0.02em] ${tone === 'dark' ? 'text-lime' : ''}`}>
                {accent}
              </span>
            </>
          )}
        </h2>
        {intro && (
          <p data-reveal className={`mt-6 max-w-2xl text-lg leading-relaxed ${introColor}`}>
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
