# TurfNations Case Study - Complete Structure Guide

## Page Architecture

### 1. Hero Section (Full Width)

- Uses `HeroSection` component
- Full width, no sidebar interference

### 2. Main Content with Fixed Sidebar

**Sidebar (Fixed Left):**

- Position: `fixed left-8 top-32 w-80 z-30`
- Fades out when scrolling to inquiry section
- Contains:
  - Project details card (bg-gray-50 rounded-2xl p-8)
  - Company name (text-2xl font-extrabold)
  - Category (text-xl font-bold)
  - Live URL link
  - Timeline (text-2xl font-extrabold)
  - Services list (px-4 py-2 bg-white rounded-xl)
  - Share buttons (w-12 h-12 rounded-full)

**Main Content Area:**

- Margin: `lg:ml-96 lg:mr-8` (384px left margin)
- All sections inside this container

---

## Section Types & Patterns

### Type 1: Overview Section (bg-gray-50)

```jsx
<section id="overview" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="space-y-12">
      <div className="max-w-7xl">
        <h2 className="text-4xl font-extrabold mb-6">About the Project</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
          ...
        </p>
        <p className="text-lg text-gray-700 leading-relaxed font-medium">...</p>
      </div>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
        <Image fill className="object-contain" />
      </div>
    </div>
  </div>
</section>
```

### Type 2: Centered Section with Badge (bg-gray-50)

```jsx
<section id="challenge" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
        <Icon className="w-4 h-4" />
        LABEL
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Title</h2>
      <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
        Description with{" "}
        <span className="font-bold text-black">highlighted text</span>
      </p>
    </div>
  </div>
</section>
```

### Type 3: Section with Multiple Image+Content Grids (bg-white)

```jsx
<section id="solution" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Centered header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
        <Icon className="w-4 h-4" />
        LABEL
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Title</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">Description</p>
    </div>

    {/* Grid 1 - Image Left */}
    <div className="grid lg:grid-cols-2 gap-0 items-center mb-16 bg-gray-50 rounded-3xl overflow-hidden">
      <div className="w-full">
        <Image width={2000} height={2000} className="w-full h-auto" />
      </div>
      <div className="p-8 md:p-12">
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
          <Icon className="w-4 h-4" />
          BADGE
        </div>
        <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Title</h3>
        <p className="text-lg text-gray-600 mb-8">Description</p>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-black" />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Feature Title</h4>
              <p className="text-gray-600 text-sm">Feature description</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Grid 2 - Image Right */}
    <div className="grid lg:grid-cols-2 gap-0 items-center mb-16 bg-gray-50 rounded-3xl overflow-hidden">
      <div className="p-8 md:p-12 order-2 lg:order-1">
        {/* Same content structure */}
      </div>
      <div className="w-full order-1 lg:order-2">
        <Image width={2000} height={2000} className="w-full h-auto" />
      </div>
    </div>
  </div>
</section>
```

### Type 4: Full Width Image+Content (No rounded container)

```jsx
<section className="py-20 bg-white">
  <div className="grid lg:grid-cols-2 gap-0 items-center">
    <div className="w-full">
      <Image width={1410} height={1182} className="w-full h-auto" />
    </div>
    <div className="px-8 md:px-12 lg:px-16 py-12">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
        <Icon className="w-4 h-4" />
        BADGE
      </div>
      <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Title</h3>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">Description</p>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
            <Icon className="w-6 h-6 text-black" />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-1">Feature</h4>
            <p className="text-gray-600 text-sm">Description</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Note:** Type 4 uses:

- `w-12 h-12` icon boxes (not w-10 h-10)
- `w-6 h-6` icons (not w-5 h-5)
- `space-y-6` (not space-y-4)
- `text-4xl md:text-5xl` titles (not text-3xl md:text-4xl)
- `px-8 md:px-12 lg:px-16 py-12` padding (not p-8 md:p-12)

### Type 5: Special Platform Showcase (bg-gray-50)

```jsx
<section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    {/* Lime gradient card */}
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-accent-lime via-accent-lime to-accent-lime/70 p-12">
      <div className="text-center mb-8">
        <h3 className="text-4xl font-extrabold mb-3">
          Complete Platform Solution
        </h3>
        <p className="text-lg text-black/80 font-medium">
          Player Mobile App + Owner Dashboard
        </p>
      </div>
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-black/10">
        <Image fill className="object-contain" />
      </div>
    </div>

    {/* Mobile slider section */}
    <div className="grid lg:grid-cols-2 gap-12 items-center mt-16 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl border-2 border-gray-100">
      {/* Left: Mobile mockup with slider */}
      {/* Right: Interactive feature list */}
    </div>
  </div>
</section>
```

### Type 6: Tech Stack Section (bg-gray-50, centered)

```jsx
<section id="tech-stack" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
        <Code className="w-4 h-4" />
        TECHNOLOGY STACK
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Built with Modern Technologies
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
        Paragraph with{" "}
        <span className="font-bold text-black">inline tech names</span>
      </p>
    </div>
  </div>
</section>
```

### Type 7: Results with Metrics Grid (bg-white)

```jsx
<section id="results" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
        <BarChart className="w-4 h-4" />
        RESULTS & METRICS
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Outstanding Performance
      </h2>
    </div>

    {/* 4-column metrics */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <div className="bg-accent-lime p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
        <Icon className="w-12 h-12 mx-auto mb-4 text-black" />
        <div className="text-5xl font-extrabold mb-2">5K+</div>
        <p className="text-black/80 font-bold">Label</p>
      </div>
    </div>

    {/* 2-column image showcase */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-gray-50 p-6 rounded-3xl border-2 border-gray-100">
        <h3 className="text-xl font-extrabold mb-4">Title</h3>
        <div className="rounded-xl overflow-hidden mb-4">
          <Image width={2000} height={2000} className="w-full h-auto" />
        </div>
        <p className="text-sm text-gray-600">Caption</p>
      </div>
    </div>
  </div>
</section>
```

### Type 8: Business Impact with Cards (bg-gray-50)

```jsx
<section id="impact" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
        🚀 BUSINESS IMPACT
      </div>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Transforming Sports Booking
      </h2>
    </div>

    {/* 2-column benefit cards */}
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100">
        <h3 className="text-2xl font-extrabold mb-6">For Players</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-6 h-6 bg-accent-lime rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-4 h-4 text-black" />
            </div>
            <span className="text-gray-700 leading-relaxed">Benefit text</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Lime achievements card */}
    <div className="bg-accent-lime p-8 rounded-3xl">
      <h3 className="text-2xl font-extrabold mb-6 text-center">
        Key Achievements
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-4xl font-extrabold mb-2">100%</div>
          <p className="text-black/80 font-medium">Label</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Type 9: CTA Section (bg-accent-lime)

```jsx
<section className="py-20 px-4 md:px-6 lg:px-8 bg-accent-lime">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
      Need a Booking Platform?
    </h2>
    <p className="text-xl text-black/80 mb-10 font-medium">Subtitle text</p>
    <div className="flex flex-wrap justify-center gap-4">
      <Link className="px-10 py-5 bg-black text-accent-lime rounded-xl font-extrabold hover:shadow-2xl transition-all hover:scale-105">
        Start Your Project
      </Link>
      <Link className="px-10 py-5 border-2 border-black text-black rounded-xl font-extrabold hover:bg-black hover:text-accent-lime transition-all">
        More Case Studies
      </Link>
    </div>
  </div>
</section>
```

---

## Key Design Patterns

### Icon Boxes

- **Inside rounded containers**: `w-10 h-10` with `w-5 h-5` icons, `space-y-4`
- **Full-width sections**: `w-12 h-12` with `w-6 h-6` icons, `space-y-6`

### Titles

- **Section titles**: `text-4xl md:text-5xl font-extrabold`
- **Grid content titles**: `text-3xl md:text-4xl font-extrabold`
- **Full-width titles**: `text-4xl md:text-5xl font-extrabold`

### Padding

- **Grid containers (rounded)**: `p-8 md:p-12`
- **Full-width grids**: `px-8 md:px-12 lg:px-16 py-12`
- **Section padding**: `py-20 px-4 md:px-6 lg:px-8`

### Containers

- **Rounded grids**: `bg-gray-50 rounded-3xl overflow-hidden`
- **Max width wrapper**: `max-w-7xl mx-auto`
- **Cards**: `bg-white p-8 rounded-3xl shadow-lg border-2 border-gray-100`

### Colors

- `bg-gray-50` - Light sections
- `bg-white` - Main sections
- `bg-accent-lime` - Highlight sections
- `bg-accent-lime/20` - Badges
