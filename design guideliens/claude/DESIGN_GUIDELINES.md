# Design Guidelines — ratanmia.pro (2026)

This document describes the design system of the portfolio as it stands on the `portfolio-refresh-2026` branch. Follow it when adding pages, sections or components so everything keeps the same look and motion.

**In one line:** a bold, high-contrast editorial look. Dark ink and warm paper sections alternate, there is a single electric-lime accent, huge condensed sans headlines get serif-italic accents, and everything moves with GSAP.

---

## 1. Principles

1. **Contrast first.** Sections alternate between `ink` (dark) and `paper` (light). Lime is the only accent colour.
2. **Type is the hero.** Oversized uppercase display headlines carry most of the design. A serif-italic word inside a headline adds the "voice".
3. **Graphics are line art.** Illustrations are thin-stroke SVG drawings in paper/white at low opacity, with lime highlights. There are no stock illustrations or emoji.
4. **Motion with purpose.** Things reveal, draw in and respond to scroll or pointer, and every motion has a reduced-motion fallback.
5. **Real content only.** Use the real projects, roles and numbers from `src/app/data/*`. Never invent clients, jobs or statistics.
6. **Multi-page site.** The home page links out to full pages (About, Services, Portfolio, Case studies, Blog, Resources, Contact, Quote). Home sections are previews, not the whole site.

---

## 2. Colour

Defined as Tailwind v4 theme tokens in `src/app/globals.css` (`@theme`):

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0b0b0b` | Dark sections, cards, primary text on paper |
| `paper` | `#f2f0e9` | Light sections, text on ink |
| `lime` | `#ccff00` | The single accent: CTAs, highlights, active states, dots, italic accent words on dark |
| `mute` | `#8a8a84` | Labels and meta text on dark backgrounds |

**Opacity scale** (use Tailwind's slash opacity rather than new colours):
- Body text on ink: `text-paper/60`–`/70`. On paper: `text-ink/60`–`/75`.
- Labels on paper: `text-ink/50`.
- Hairlines: `border-white/10`–`/15` on ink, `border-ink/10`–`/15` on paper.
- Glass surfaces: `bg-ink/55`–`/70` with `backdrop-blur`. Subtle fills: `bg-white/[0.03]`–`[0.06]`.
- Light tiles on paper: `bg-white/50` with `border-ink/10`.

**Rules**
- Never use more than one accent. Lime on ink reads well. Lime as text on paper does not, so on paper use a lime *background* with ink text.
- Second dark surface for alternating cards: `#121212`/`#141414`, or a soft radial (`#171716` → `#0b0b0b`).
- Project cards may use the project's own `accent` colour behind the image while it loads.

**Section rhythm on the home page**

| Section | Background |
|---|---|
| Hero | ink |
| Marquee | lime |
| About (bento) | paper |
| Work | ink |
| What I do | paper |
| Experience | ink |
| Contact | lime |
| Footer | ink |

---

## 3. Typography

Fonts are self-hosted with `@fontsource` (no Google Fonts request):

| Role | Family | Tailwind |
|---|---|---|
| Display / headings | Inter Variable | `font-display` |
| Body | Inter Variable | `font-sans` (default) |
| Accent | Instrument Serif (regular + italic) | `font-serif` |
| Labels / meta | JetBrains Mono Variable | `font-mono` |

### Headline recipe

```html
<h2 class="font-display text-[clamp(40px,6vw,96px)] font-extrabold uppercase leading-[0.88] tracking-[-0.05em]">
  One engineer,
  <span class="font-serif font-normal normal-case italic tracking-[-0.02em]">the whole stack</span>
</h2>
```

- The accent word is serif italic, `font-normal normal-case`, with tracking relaxed to `-0.02em`. On dark sections it is `text-lime`.
- Use fluid sizes with `clamp()`. Common scales:
  - Hero name: `text-[23vw] lg:text-[11.5vw] 2xl:text-[184px]`, `leading-[0.8]`, `tracking-[-0.065em]`
  - Section H2: `clamp(40px, 6vw, 96px)`
  - Big CTA: `clamp(44px, 12.5vw, 220px)`
  - Card titles: `clamp(30px, 3.4vw, 48px)`, `font-bold`, `tracking-[-0.04em]`
- Display text uses tight negative tracking (`-0.03em` to `-0.065em`) and tight leading (`0.8`–`0.95`).
- When a headline animates with SplitText, split by `'words,chars'` so words never break mid-word. Add `[word-break:keep-all]` on long titles.

### Body and labels

- **Body:** `text-base`/`text-lg`, `leading-relaxed`, max width around `max-w-xl` or `max-w-[52ch]`.
- **Section label (eyebrow):** a numbered mono label.

```html
<p class="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50">(03) — What I do</p>
```

- **Meta text** (years, categories, tags in cards): `font-mono text-[10px]–[11px] uppercase tracking-[0.15em]–[0.2em]`.
- **Stats:** `font-display font-bold leading-none tracking-[-0.05em]`, with the suffix (`+`, `M+`) at `text-ink/30` or `text-paper/30`.
- **Inline serif:** product names inside body copy can be `font-serif italic` at one size up.

---

## 4. Layout

- **Container:** `mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12`. The hero may go to `max-w-[1600px]`.
- **Section padding:** `py-24 sm:py-32` (`lg:py-40` for airy statement sections).
- **Grid:** a 12-column grid (`grid grid-cols-12`). The standard section head puts the label in `lg:col-span-3` and the title in `lg:col-span-9`.
- **Gutters:** use `gap-x-4` on mobile. A full `gap-10` on a 12-column grid overflows small screens.
- **Corner radii:**
  - Large media and cards: `rounded-[28px]`–`rounded-[32px]`
  - Small cards: `rounded-2xl`
  - Pills and buttons: `rounded-full`
- **Bento grids:** tiles with `rounded-[28px]` and `gap-3 sm:gap-4`. Mix ink tiles, one lime tile, and light `bg-white/50` tiles.
- **Sticky patterns:**
  - Sidebars use `lg:sticky lg:top-28`.
  - Sticky indexes, like the Work list, are desktop-only (`hidden lg:block`).
- **Mobile:** everything stacks to one column, decorative orbit and labels hide below `lg`, and the page must never scroll sideways. The page wrapper uses `overflow-x-clip`.

---

## 5. Components

### Buttons

| Type | Classes |
|---|---|
| Primary | `rounded-full bg-lime px-7 py-4 text-sm font-semibold text-ink hover:bg-paper` |
| Secondary on ink | `rounded-full border border-white/20 bg-white/[0.03] px-7 py-4 text-paper hover:border-paper backdrop-blur` |
| Primary on paper | `rounded-full bg-ink text-paper hover:bg-lime hover:text-ink` |
| Text link | `border-b border-ink pb-1 font-semibold`, plus an `ArrowUpRight` icon |

- Arrow icons come from `lucide-react` (`ArrowUpRight`, `ArrowDownRight`). On hover they rotate 45° with `transition-transform duration-500 group-hover:rotate-45`.
- Wrap key CTAs in `<Magnetic>` so they pull toward the pointer.

### Pills and tags
- **Tag:** `rounded-full bg-white/[0.06] px-3 py-1 text-xs text-paper/70`.
- **Outline mono pill:** `rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em]`.
- **Status chip:** a pulsing lime dot (`h-2 w-2 rounded-full bg-lime animate-pulse`) followed by mono text.

### Cards
- **Project card:**
  - The image sits in an `aspect-[16/10]` media box with an index badge (`01 / 2026`) top-left on a glass pill.
  - A lime round arrow button appears on hover.
  - Title, mono category, summary and tags sit underneath.
- **Capability card:** an ink card holding a `CapGraphic` illustration, a title, body text and mono pills.

### Shared site components (`src/app/components/site/`)
- **`SectionHead`:** label, title and serif accent, with `tone="light" | "dark"`.
- **`PageHero`:** hero for inner pages.
- **`CtaBand`:** closing call-to-action strip.
- **`Faq`:** accordion built on CSS grid rows.
- **`PricingGrid`:** links to `/quote?type=…`.
- **`ContactForm`:** accepts `tone="lime" | "paper"` and `withPhone`.

### Header and footer
- **Header:**
  - A centred pill nav with links to About, Services, Work (`/portfolio`), a Case studies dropdown, Blog and Contact.
  - The active link is set from the current path.
  - The bar hides on scroll down and returns on scroll up.
  - Phones get a full-screen GSAP menu.
- **Footer:**
  - A big CTA and a live Dhaka clock.
  - Link columns, social links and a résumé download.
  - A huge outlined `RATAN MIA` wordmark that fills with lime as you reach the bottom.
  - The PDF link uses `<a download>`, not `next/link`.

---

## 6. Graphics (`src/app/components/graphics/`)

All graphics are inline SVG or HTML, decorative (`aria-hidden`), and coloured with `currentColor` plus lime.

| Component | What it is | Where |
|---|---|---|
| `HeroOrbit` | Tick ring, rotating lime arc, two counter-rotating rings with stack labels that stay upright | Hero, straddling the photo panel |
| `RotatingBadge` | Circular text that spins (`textLength` fills the circle), with an icon or letter in the centre. Tones: `lime`, `ink`, `paper` | Hero, About portrait |
| `CapGraphic` | Four line illustrations (browser, phone, commerce chart, automation flow) | What I do cards |
| `ContactRings` | Radar rings around Dhaka with a sweep and pulsing client pins | Contact |

**Line-art rules**
- Stroke width is `1.2` (lime emphasis strokes up to `2–3`), with round caps and joins.
- Neutral strokes use `currentColor` with the parent at `text-paper/45`. Lime is `#ccff00`.
- Lime fills sit at `opacity 0.14–0.16` for panels and at full strength for small accents.
- Class hooks used by the animations:
  - `cg-draw`: stroked shapes that are drawn in.
  - `cg-pop`: fills that scale in.
  - `cg-blink`, `cg-pulse`, `cg-dot`: looping details. A `cg-dot` needs `data-path` pointing at a path id.

**Textures**
- **`.grain`:** an SVG-noise overlay at 7% opacity with an `overlay` blend. Add it to dark sections (Hero, Work, Experience).
- **`.hero-grid`:** a masked grid of hairlines. Use it on the hero and dark cards at 20–30% opacity.
- **Glow:** a radial lime gradient (`rgba(204,255,0,.15)` fading to transparent) that follows the cursor in the hero.
- **Outline text:** `.text-outline` (on lime) and `.text-outline-paper` (on ink) give stroked display type.

---

## 7. Motion

**Stack**
- GSAP 3 with ScrollTrigger, SplitText, DrawSVG, MotionPath and Flip, plus `@gsap/react`'s `useGSAP`.
- Lenis provides smooth scrolling. It is synced to the GSAP ticker and exposed as `window.__lenis`.
- All plugins are registered in `src/app/lib/gsap.js`. Always import from there:

```js
import { gsap, MOTION_OK, ScrollTrigger, SplitText, useGSAP } from '@/lib/gsap';
```

**Pattern** (every animated component follows it)

```js
useGSAP(() => {
  const mm = gsap.matchMedia();
  mm.add(MOTION_OK, () => {
    // animations…
    return () => { /* revert SplitText, remove listeners */ };
  });
  mm.add('(prefers-reduced-motion: reduce)', () => { /* static fallback */ });
}, { scope: root });
```

**Easing and timing**
- Reveals use `expo.out` over 1–1.4s. Character staggers are 0.025–0.05s, and item staggers 0.06–0.1s.
- Scrubbed effects use `ease: 'none'` with `scrub: true`.
- Pointer-follow effects use `gsap.quickTo` (duration 0.6–1.6s, `power3`).
- Magnetic buttons use `elastic.out(1, 0.4)`.

**Vocabulary** (reuse these before inventing new ones)

| Effect | How |
|---|---|
| Headline reveal | SplitText chars with `mask: 'chars'`, from `yPercent: 110` |
| Image reveal | `clipPath: inset(…)` from closed to open, plus inner image from `scale: 1.2–1.35` |
| Generic reveal | Add `data-reveal` (or `data-reveal="scale"`); `AutoReveal` batches them |
| Word light-up | SplitText words, opacity 0.12–0.15 → 1, scrubbed |
| Count-up stats | Tween a number on enter (`.stat-value[data-value]`) |
| Line drawing | `drawSVG: '0%'` on `.cg-draw` / `.cr-ring` |
| Loops | Infinite `rotation` with `ease: 'none'`; pulses scale 1 → 2.6–4 while fading |
| Parallax | `yPercent` scrub on inner images; pointer drift on orbit and photo |
| Marquee | Two rows moving in opposite directions; scroll speed and direction change their speed and skew |
| Sticky index | `ScrollTrigger.onToggle` sets the active project; clicking scrolls with Lenis |
| Tilt | `rotationX`/`rotationY` via `quickTo`, ±3°, inside a `[perspective:1400px]` parent |
| Cursor labels | `data-cursor="Visit" / "Case study" / "Open"` on links shows a label in the custom cursor ring |

**Rules**
- Animate only `transform`, `opacity`, `clip-path` and SVG stroke properties.
- Scope every selector with `{ scope: root }`, revert SplitText and remove listeners in the cleanup.
- Pointer effects only run on fine pointers (`(pointer: fine)`).
- Reduced motion:
  - Keep content visible and static.
  - CSS loops play once (`animation-iteration-count: 1`).
  - Tickers show their first item.
  - Travelling dots stay hidden.

---

## 8. Imagery

- Use `next/image` with correct `sizes`. Add `priority` only for the hero photo.
- **Portraits:**
  - Slight desaturation (`grayscale-[35%]`–`[40%]`).
  - A bottom gradient (`from-ink` or `from-black/70`) behind any text overlay.
  - A lime `mix-blend-overlay` tint is optional.
- **Project screenshots:** real captures or mockups live in `public/images/projects/<project>/`. Show them in `16:10` frames.
- Alt text names the project and its category, e.g. `NextPilot Chat — SaaS · WhatsApp CRM & AI`.

---

## 9. Accessibility

- Decorative SVGs and glows use `aria-hidden="true"`. Orbit labels keep an `sr-only` copy when they are hidden visually.
- Keep body text at 60% opacity or above on its background, and never put lime text on paper.
- Icon-only links need an `aria-label`, and `RotatingBadge` takes a `label` prop.
- Interactive elements keep visible hover and focus states. The custom cursor never replaces focus styles.

---

## 10. Content and data

All copy lives in data files. Components only render it.

| File | Contents |
|---|---|
| `src/app/data/site.js` | `PROFILE`, `STATS`, `MANIFESTO`, `STACK`, `PROJECTS`, `CAPABILITIES`, `EXPERIENCE`, `CERTIFICATIONS` |
| `src/app/data/pages.js` | Services, process, pricing, FAQ, journey, values, skills, education, résumé details, archive projects, blog, resources |
| `src/app/data/case-studies.js` | Case-study content |

**Voice**
- First person, plain and confident. Use short sentences and British/international spelling in prose.
- Numbers must match the résumé:
  - 10+ years
  - 100+ Shopify stores
  - $30M+ annual client sales
  - 150+ projects

---

## 11. File map

```
src/app/
  globals.css            tokens, fonts, grain, hero-grid, cursor, outline text
  layout.tsx             metadata, JSON-LD, SmoothScroll, AutoReveal, Cursor, Header, Footer
  page.tsx               Hero → Marquee → About → Work → Capabilities → Experience → Contact
  lib/gsap.js            plugin registration + MOTION_OK
  components/
    home2/               home page sections
    graphics/            HeroOrbit, RotatingBadge, CapGraphic, ContactRings
    motion/              SmoothScroll (Lenis), Cursor, Magnetic, AutoReveal
    site/                shared blocks for inner pages
    about/ services/ quote/ portfolio/ case-studies/   page-specific pieces
_archive/                retired components (excluded from build and Tailwind)
```

---

## 12. Checklist for a new section

- [ ] Alternates background with its neighbours (ink ↔ paper; lime only for marquee and contact).
- [ ] Starts with a numbered mono label and a display headline with one serif-italic accent.
- [ ] Uses the container, 12-column grid and section padding above.
- [ ] Content comes from `data/*`.
- [ ] Motion uses `useGSAP` + `matchMedia(MOTION_OK)` and has a reduced-motion fallback.
- [ ] Graphics are thin-line SVG in `currentColor` + lime and marked `aria-hidden`.
- [ ] Checked at 1440×900 and 390×844: no horizontal scroll, no console errors.
