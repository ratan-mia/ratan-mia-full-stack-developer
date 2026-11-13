import { ImageResponse } from 'next/og';

export const alt = 'Ratan Mia — Full-Stack & Mobile Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Social share card, generated at build time.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0b0b0b',
          color: '#f2f0e9',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, letterSpacing: 4, color: '#8a8a84' }}>
          <span>FULL-STACK · MOBILE · IT</span>
          <span>RATANMIA.PRO</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 180, fontWeight: 800, lineHeight: 0.85, letterSpacing: -10 }}>RATAN</div>
          <div style={{ display: 'flex', fontSize: 180, fontWeight: 800, lineHeight: 0.85, letterSpacing: -10 }}>
            MIA<span style={{ color: '#ccff00' }}>.</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: 30, maxWidth: 760, color: '#c9c7c0' }}>
            SaaS products, React Native apps, headless Shopify and WhatsApp & AI automation — 10+ years.
          </div>
          <div style={{ width: 28, height: 28, borderRadius: 14, background: '#ccff00' }} />
        </div>
      </div>
    ),
    size
  );
}
