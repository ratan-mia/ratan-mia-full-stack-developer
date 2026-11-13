import { useId } from 'react';

// A circular, slowly spinning text badge. The text is stretched to fill the
// full circle (textLength), so any phrase loops cleanly.
export default function RotatingBadge({
  text = 'Available for projects · 2026 · ',
  size = 132,
  className = '',
  tone = 'lime',
  href,
  label,
  children,
}) {
  const id = `rb-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const tones = {
    lime: 'bg-lime text-ink',
    ink: 'bg-ink text-paper',
    paper: 'bg-paper text-ink',
  };
  const Tag = href ? 'a' : 'div';

  return (
    <Tag
      href={href}
      aria-label={label || text}
      data-cursor={href ? 'Say hi' : undefined}
      className={`group grid place-items-center rounded-full shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] ${tones[tone]} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full animate-[spin_22s_linear_infinite] group-hover:[animation-duration:6s]"
        aria-hidden="true"
      >
        <defs>
          <path id={id} d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current font-mono uppercase" style={{ fontSize: 7.4, letterSpacing: 1 }}>
          <textPath href={`#${id}`} textLength="230" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="relative transition-transform duration-500 group-hover:rotate-45">{children}</span>
    </Tag>
  );
}
