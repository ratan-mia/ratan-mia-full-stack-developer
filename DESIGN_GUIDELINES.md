# Design System Guidelines - Portfolio Theme

## 🎨 Core Design Philosophy

This design system follows a **minimal, bold, high-contrast aesthetic** with strategic use of accent colors to create visual hierarchy and draw attention to key elements.

### Design Principles

- **Minimalism First**: Clean layouts with ample white space
- **Bold Typography**: Large, impactful headings with strong font weights
- **Strategic Color**: Lime accent (#ccff00) used sparingly for maximum impact
- **Smooth Animations**: Framer Motion for fluid, professional interactions
- **Mobile-First**: Responsive design that scales beautifully

---

## 🎯 Color System

### Primary Colors

```css
--accent-lime: #ccff00; /* Primary accent - use for CTAs, highlights, hero backgrounds */
--accent-orange: #ff8c42; /* Secondary accent - use sparingly for variation */
```

### Color Usage Rules

**Lime Accent (#ccff00)**

- Primary CTA buttons and important action elements
- Hero section backgrounds
- Key highlights and important text
- Hover states for interactive elements
- Service cards and feature sections
- Icon backgrounds (with opacity)

**Black (#000000)**

- Primary text color
- Button backgrounds (on lime sections)
- Card overlays and shadows
- Typography for high contrast

**White (#FFFFFF)**

- Background color for most sections
- Text on dark backgrounds
- Card backgrounds

**Gray Scale**

```css
gray-50: #f9fafb; /* Light section backgrounds */
gray-100: #f3f4f6; /* Subtle backgrounds */
gray-200: #e5e7eb; /* Borders, dividers */
gray-600: #4b5563; /* Secondary text */
gray-700: #374151; /* Body text alternative */
gray-800: #1f2937; /* Dark elements */
```

### Color Combinations

**Hero/Primary Sections:**

```
Background: bg-accent-lime
Text: text-black
Buttons: bg-black text-accent-lime
```

**Content Sections (Alternating):**

```
White sections: bg-white text-black
Gray sections:  bg-gray-50 text-black
```

**Cards:**

```
Light mode: bg-white border-gray-200 text-black
Hover state: hover:border-accent-lime/50 hover:shadow-lg
```

---

## 📝 Typography System

### Font Family

```css
font-family: "Inter", system-ui, -apple-system, sans-serif;
```

### Text Hierarchy

**Hero Title** (.hero-title)

```css
font-size: clamp(60px, 8vw, 80px);
font-weight: 800;
line-height: 1.1;
letter-spacing: -0.025em;
```

Use for: Main hero headlines

**Section Header** (.section-header)

```css
font-size: clamp(32px, 4vw, 48px);
font-weight: 700;
line-height: 1.2;
letter-spacing: -0.02em;
```

Use for: Section titles (h2)

**Subsection Title**

```css
font-size: 24-32px;
font-weight: 700;
line-height: 1.3;
```

Use for: Card titles, feature headings (h3)

**Body Text** (.body-text)

```css
font-size: 18px;
font-weight: 400;
line-height: 1.7;
color: gray-700;
```

Use for: Main content, descriptions

**Body Small** (.body-text-small)

```css
font-size: 16px;
font-weight: 400;
line-height: 1.6;
color: gray-600;
```

Use for: Secondary content, feature lists

**Caption** (.caption-text)

```css
font-size: 14px;
font-weight: 300;
line-height: 1.5;
color: gray-500;
```

Use for: Labels, metadata, small details

---

## 🏗️ Layout Patterns

### Container Widths

```css
max-w-6xl   /* 1152px - Default content width */
max-w-7xl   /* 1280px - Wide content sections */
max-w-4xl   /* 896px  - Narrow content (about, testimonials) */
max-w-3xl   /* 768px  - Text-heavy sections */
```

### Spacing System

```css
Section Padding:
  - Desktop: py-20 (80px)
  - Mobile:  py-16 (64px)

Inner Spacing:
  - Between elements: mb-12 (48px)
  - Between cards: gap-8 (32px)
  - Between paragraphs: mb-6 (24px)

Container Padding:
  - Horizontal: px-4 md:px-6 lg:px-8
```

### Grid Layouts

**Services/Features (Cards):**

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* 3-column on desktop, 2 on tablet, 1 on mobile */}
</div>
```

**Projects/Portfolio:**

```jsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* 2-column on desktop, 1 on mobile */}
</div>
```

**Stats/Metrics:**

```jsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {/* 4 columns on desktop, 2 on mobile */}
</div>
```

---

## 🎴 Component Patterns

### 1. Hero Section

```jsx
<section className="relative min-h-screen w-full overflow-hidden bg-accent-lime">
  {/* Decorative floating icons - desktop only */}
  <div className="absolute inset-0 z-10 pointer-events-none">
    {/* Animated icons with low opacity */}
  </div>

  {/* Main content */}
  <div className="relative z-20 h-screen flex items-center">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      <motion.h1 className="hero-title text-black mb-6">
        {/* Hero title */}
      </motion.h1>
      <motion.p className="body-text text-black/80 mb-8 max-w-2xl">
        {/* Hero description */}
      </motion.p>
      <motion.div className="flex gap-4">
        <button className="bg-black text-accent-lime px-8 py-4 rounded-xl">
          Primary CTA
        </button>
      </motion.div>
    </div>
  </div>
</section>
```

**Key Features:**

- Full viewport height (min-h-screen)
- Lime background
- Black text for contrast
- Decorative animated elements (desktop)
- Prominent CTAs

---

### 2. Content Section (White Background)

```jsx
<section className="relative w-full py-20 px-4 bg-white">
  <div className="max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
          SECTION LABEL
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Section <span className="text-accent-lime">Title</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Section description</p>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Cards */}
      </div>
    </motion.div>
  </div>
</section>
```

---

### 3. Service/Feature Card

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  className="p-8 rounded-3xl bg-accent-lime text-black hover:shadow-2xl transition-all duration-500 group"
>
  {/* Icon */}
  <div className="mb-6 w-16 h-16 rounded-2xl flex items-center justify-center bg-black/15">
    <Icon className="w-8 h-8 text-black" />
  </div>

  {/* Title */}
  <h3 className="text-2xl lg:text-3xl font-extrabold mb-4">{title}</h3>

  {/* Description */}
  <p className="text-black/80 mb-6 leading-relaxed">{description}</p>

  {/* Features list */}
  <ul className="space-y-2 mb-6">
    {features.map((feature) => (
      <li className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-black/40"></div>
        <span className="text-sm">{feature}</span>
      </li>
    ))}
  </ul>

  {/* CTA */}
  <a
    href="#"
    className="flex items-center justify-between p-4 rounded-2xl bg-black/10 hover:bg-black/20"
  >
    <span className="font-semibold">Get Started</span>
    <ArrowRight className="w-5 h-5" />
  </a>
</motion.div>
```

**Card Design Rules:**

- Lime background (bg-accent-lime)
- Black text throughout
- Rounded corners (rounded-3xl = 24px)
- Padding: p-8 (32px)
- Subtle hover lift effect
- Icon in semi-transparent black background

---

### 4. Project Card (List Style)

```jsx
<motion.div className="group grid grid-cols-12 items-center gap-4 lg:gap-6 py-8 lg:py-12 border-b border-gray-200 hover:bg-gray-50 rounded-lg px-4 lg:px-6 transition-all">
  {/* Year and Icon - 2 columns */}
  <div className="col-span-3 lg:col-span-2 flex items-center gap-3">
    <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-accent-lime flex items-center justify-center">
      <Icon className="w-6 h-6" />
    </div>
    <div className="hidden lg:block">
      <div className="text-accent-lime font-bold text-lg">{year}</div>
      <div className="text-gray-500 text-sm">{category}</div>
    </div>
  </div>

  {/* Project Details - 6 columns */}
  <div className="col-span-8 lg:col-span-6">
    <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-accent-lime">
      {title}
    </h3>
    <p className="text-gray-600 mb-3">{description}</p>

    {/* Tech tags */}
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* Client Info - 4 columns */}
  <div className="col-span-1 lg:col-span-4 text-right">
    <div className="font-bold text-lg">{client}</div>
    <ExternalLink className="w-6 h-6 ml-auto mt-2 group-hover:text-accent-lime" />
  </div>
</motion.div>
```

---

### 5. Stat/Metric Card

```jsx
<motion.div className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-accent-lime/50 hover:shadow-lg transition-all">
  <Icon className="w-8 h-8 mx-auto mb-3 text-accent-lime" />
  <div className="text-3xl font-bold mb-1">{value}</div>
  <div className="text-sm text-gray-600">{label}</div>
</motion.div>
```

---

### 6. Button Styles

**Primary CTA (on lime background):**

```jsx
<button className="bg-black text-accent-lime px-8 py-4 font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
  Button Text
</button>
```

**Primary CTA (on white background):**

```jsx
<button className="bg-accent-lime text-black px-8 py-4 font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
  Button Text
</button>
```

**Secondary Button:**

```jsx
<button className="bg-white border-2 border-black text-black px-8 py-4 font-semibold rounded-xl hover:bg-black hover:text-white transition-all">
  Button Text
</button>
```

**Ghost Button:**

```jsx
<button className="bg-transparent border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-accent-lime hover:text-accent-lime transition-all">
  Button Text
</button>
```

---

## 🎬 Animation Patterns

### Entry Animations (Framer Motion)

**Fade Up:**

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

**Staggered Children:**

```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
>
  {items.map((item, index) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Item */}
    </motion.div>
  ))}
</motion.div>
```

**Hover Effects:**

```jsx
// Card lift
whileHover={{ y: -8, scale: 1.02 }}

// Button scale
whileHover={{ scale: 1.05 }}

// Icon rotation
whileHover={{ rotate: [0, -10, 10, 0] }}
```

---

## 📱 Responsive Design Rules

### Breakpoints (Tailwind)

```
sm:  640px   /* Small devices */
md:  768px   /* Tablets */
lg:  1024px  /* Desktops */
xl:  1280px  /* Large screens */
2xl: 1536px  /* Extra large */
```

### Mobile-First Approach

**Typography:**

```jsx
className = "text-3xl md:text-4xl lg:text-5xl"; // Scale up
className = "text-base md:text-lg"; // Body text
```

**Spacing:**

```jsx
className = "py-12 md:py-16 lg:py-20"; // Section padding
className = "gap-4 md:gap-6 lg:gap-8"; // Grid gaps
className = "px-4 md:px-6 lg:px-8"; // Container padding
```

**Grids:**

```jsx
className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
```

**Visibility:**

```jsx
className = "hidden lg:block"; // Desktop only
className = "block lg:hidden"; // Mobile only
className = "flex-col md:flex-row"; // Stack on mobile
```

---

## ✨ Special Effects

### Shadows

```css
/* Lime glow */
.shadow-lime-glow {
  box-shadow: 0 8px 25px rgba(204, 255, 0, 0.3);
}

/* Standard shadow */
shadow-lg
hover:shadow-2xl

/* Card shadow */
shadow-md
hover:shadow-xl
```

### Borders

```jsx
border border-gray-200              // Default
hover:border-accent-lime/50         // Hover state
border-2 border-accent-lime         // Highlighted
```

### Gradients

```jsx
// Background gradients
bg-gradient-to-b from-gray-50 to-white
bg-gradient-to-r from-blue-500 to-indigo-600

// Text gradients (use sparingly)
bg-gradient-to-r from-black via-accent-lime to-black bg-clip-text text-transparent
```

---

## 🎯 Section Layout Templates

### Full-Width Hero

```
┌─────────────────────────────────┐
│  bg-accent-lime, min-h-screen   │
│  ┌──────────────────────────┐   │
│  │  max-w-6xl mx-auto       │   │
│  │  - Large title           │   │
│  │  - Description           │   │
│  │  - CTA buttons           │   │
│  └──────────────────────────┘   │
└─────────────────────────────────┘
```

### Standard Content Section

```
┌─────────────────────────────────┐
│  bg-white, py-20                │
│  ┌──────────────────────────┐   │
│  │  max-w-6xl mx-auto       │   │
│  │  - Section badge         │   │
│  │  - Title (centered)      │   │
│  │  - Description           │   │
│  │  - Content grid          │   │
│  └──────────────────────────┘   │
└─────────────────────────────────┘
```

### Alternating Backgrounds

```
Section 1: bg-white
Section 2: bg-gray-50
Section 3: bg-white
Section 4: bg-gray-50
```

---

## 📋 Component Checklist

When creating new components, ensure:

✅ **Colors**

- [ ] Uses lime accent strategically
- [ ] Black text on light backgrounds
- [ ] White text on dark backgrounds
- [ ] Proper contrast ratios (WCAG AA)

✅ **Typography**

- [ ] Correct text sizes for hierarchy
- [ ] Proper font weights (700-800 for headings)
- [ ] Appropriate line heights
- [ ] Responsive text scaling

✅ **Spacing**

- [ ] Consistent padding (p-8 for cards)
- [ ] Section spacing (py-20)
- [ ] Grid gaps (gap-8)
- [ ] Mobile-friendly spacing

✅ **Animation**

- [ ] Fade-in on scroll (viewport once)
- [ ] Smooth transitions (duration-300-500)
- [ ] Hover effects on interactive elements
- [ ] Stagger animations for lists

✅ **Responsive**

- [ ] Mobile-first approach
- [ ] Breakpoint variations (md:, lg:)
- [ ] Touch-friendly sizes (min 44px)
- [ ] Hide decorative elements on mobile

✅ **Accessibility**

- [ ] Semantic HTML
- [ ] Keyboard navigation
- [ ] ARIA labels where needed
- [ ] Focus states visible

---

## 💡 Pro Tips

1. **Lime Accent Usage**: Don't overuse - reserve for CTAs, highlights, and section backgrounds
2. **White Space**: Generous spacing creates a premium feel
3. **Bold Typography**: Large, bold headings create impact
4. **Subtle Animations**: Keep animations smooth and purposeful
5. **Consistency**: Reuse component patterns throughout
6. **Mobile First**: Design for small screens, enhance for large
7. **Performance**: Optimize images, lazy load when possible
8. **Icons**: Use lucide-react for consistent icon style

---

## 🚀 Quick Start Prompts

### Creating a New Section

```
Create a new [section name] section following the portfolio design system:
- White or gray-50 background with py-20 spacing
- max-w-6xl centered container
- Section badge with lime accent (bg-accent-lime/20)
- Large bold heading (text-4xl md:text-5xl font-bold)
- Gray subtitle text (text-gray-600)
- Grid layout for content (grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8)
- Framer Motion fade-in animations
- Cards with white background, border-gray-200, and hover effects
```

### Creating a New Card Component

```
Create a [card type] card component with:
- Lime background (bg-accent-lime) with black text
- Rounded corners (rounded-3xl)
- Padding p-8
- Icon in semi-transparent black background (bg-black/15)
- Bold title (text-2xl lg:text-3xl font-extrabold)
- Black/80 description text
- Feature list with bullet points
- CTA button at bottom with hover effect
- Framer Motion hover animations (lift and scale)
```

### Creating a Button

```
Create a [button type] button:
- Primary CTA: bg-accent-lime text-black px-8 py-4 font-bold rounded-xl
- Secondary: bg-black text-accent-lime
- Ghost: border border-gray-300 text-gray-700
- Add hover:scale-105 and hover:shadow-lg
- Smooth transitions (transition-all duration-300)
```

---

## 📚 Reference Components

Study these components for patterns:

- `HeroMain.jsx` - Hero section structure
- `Services.jsx` - Card grid layout
- `Projects.jsx` - List-style project cards
- `About.jsx` - Stats and metrics display
- `Header.jsx` - Navigation patterns
- `CaseStudyDetail.jsx` - Content-heavy pages

---

**Remember**: Consistency is key. When in doubt, reference existing components and maintain the minimal, bold aesthetic with strategic lime accents.
