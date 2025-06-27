# Portfolio Design System - Complete Guidelines
## Theme Overview
This design system creates a bold, technical, and immersive experience centered around modern web development and professional expertise.

## Color System
### Primary Colors
- **Cyan Blue**: `#06b6d4` (cyan-500) - Primary accent, buttons, highlights, borders
- **Electric Blue**: `#3b82f6` (blue-500) - Secondary accent, links, active states
- **Deep Purple**: `#7c3aed` (violet-600) - Tertiary accent, gradients
- **Orange Accent**: `#f97316` (orange-500) - Warm accent, call-to-actions
- **Black**: `#000000` - Brand elements, high contrast elements

### Background Colors
- **Deep Grays**:
  - `slate-950` (#020617) - Primary dark backgrounds
  - `slate-900` (#0f172a) - Card backgrounds, secondary surfaces
  - `slate-800` (#1e293b) - Borders, dividers
  - `slate-700` (#334155) - Light borders, hover states

### Background Gradients
- **Main Section**: `bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800`
- **Hero Gradient**: `bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900`
- **Card Gradient**: `bg-gradient-to-r from-slate-900 to-slate-800`
- **Overlays**: `bg-gradient-to-t from-black/70 via-transparent to-black/20`
- **Button Gradient**: `bg-gradient-to-r from-cyan-500 to-blue-500`
- **Accent Gradient**: `bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500`

### Text Colors
- **Primary Text**: `text-white` - Headings, important content
- **Secondary Text**: `text-slate-300` - Body text, descriptions
- **Muted Text**: `text-slate-400`, `text-slate-500` - Supporting information
- **Accent Text**: `text-cyan-500` - Highlights, labels, active states
- **Secondary Accent**: `text-blue-500` - Links, secondary highlights
- **Warm Accent**: `text-orange-500` - CTAs, important actions
- **Inverted Text**: `text-slate-900` - Text on light backgrounds

### Border Colors
- **Active/Hover**: `border-cyan-500`
- **Secondary Active**: `border-blue-500`
- **Default**: `border-slate-700`
- **Light**: `border-slate-600`
- **Muted**: `border-slate-800`

## Typography System
### Font Family
- Use `font-sans` (Inter from Google Fonts) throughout all components
- Monospace: `font-mono` (JetBrains Mono) for code elements

### Font Weights
- **font-black**: Main headings, buttons, emphasis elements
- **font-bold**: Subheadings, labels, secondary emphasis
- **font-semibold**: Important body text, navigation
- **font-medium**: Body text requiring slight emphasis

### Text Transforms
- **uppercase**: All headings, buttons, labels, and accent text
- Use `tracking-tight`, `tracking-tighter` for large headings
- Use `tracking-wide` for buttons and small uppercase text
- Use `tracking-wider` for labels and badges

### Text Sizing Scale
- **Hero Headings**: `text-5xl md:text-6xl lg:text-7xl`
- **Section Headers**: `text-3xl lg:text-4xl`
- **Subsection Headers**: `text-xl lg:text-2xl`
- **Card Titles**: `text-lg lg:text-xl`
- **Body Text**: `text-base lg:text-lg`
- **Small Text**: `text-sm`
- **Labels**: `text-xs uppercase tracking-wider`

## Brand Elements
### Developer Header Stripes (Top)
```jsx
<div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
```

### Developer Footer Stripes (Bottom)
```jsx
<div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
```

### Section Badge/Label
```jsx
<div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">SECTION LABEL</span>
</div>
```

### Code Bracket Elements
```jsx
<div className="text-cyan-500 font-mono text-2xl">&lt;/&gt;</div>
```

## Layout System
### Container Structure
```jsx
<div className="container mx-auto px-6 lg:px-8 xl:px-16 2xl:px-20">
  <div className="max-w-7xl mx-auto">
    <!-- Content -->
  </div>
</div>
```

### Section Padding
- **Standard sections**: `py-16 lg:py-24`
- **Hero sections**: `py-20 lg:py-32`
- **Card padding**: `p-6`, `p-8` (based on importance)
- **Button padding**: `px-8 py-4` (primary), `px-6 py-3` (secondary)

### Grid Systems
- **Two-column main layout**: `grid lg:grid-cols-2 gap-16`
- **Three-column features**: `grid md:grid-cols-3 gap-8`
- **Four-column stats**: `grid grid-cols-2 md:grid-cols-4 gap-6`
- **Project grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Always mobile-first with responsive breakpoints

### Spacing Scale
- **Small gaps**: `gap-4` (16px), `gap-6` (24px)
- **Medium gaps**: `gap-8` (32px), `gap-12` (48px)
- **Large gaps**: `gap-16` (64px), `gap-20` (80px)

## Visual Effects & Backgrounds
### Background Glow Effects
```jsx
<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
```

### Geometric Decorative Elements
```jsx
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
```

### Decorative Lines
```jsx
<div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full"></div>
```

## Component Patterns
### Primary Button
```jsx
<button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wide">
  BUTTON TEXT
</button>
```

### Secondary/Outline Button
```jsx
<button className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 uppercase tracking-wide">
  BUTTON TEXT
</button>
```

### Icon Navigation Button
```jsx
<button className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300">
  <Icon className="w-5 h-5" />
</button>
```

### Feature Card
```jsx
<div className="group relative p-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
  {/* Glow effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  
  <div className="relative z-10">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">CARD TITLE</h3>
    <p className="text-slate-300 leading-relaxed">Card description text goes here.</p>
  </div>
</div>
```

### Project Card
```jsx
<div className="group relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]">
  <div className="aspect-video overflow-hidden">
    <img src="project-image.jpg" alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">PROJECT NAME</h3>
    <p className="text-slate-300 mb-4">Project description</p>
    <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">React</span>
    </div>
  </div>
</div>
```

### Stats Card
```jsx
<div className="text-center p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl">
  <Icon className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
  <div className="text-3xl font-black text-white mb-2">150+</div>
  <div className="text-sm text-slate-400 uppercase tracking-wider">PROJECTS</div>
</div>
```

## Animation Guidelines
### Framer Motion Container Variants
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};
```

### Framer Motion Item Variants
```jsx
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};
```

### Hover Animations
- **Buttons**: `hover:scale-105`
- **Cards**: `hover:scale-[1.02]`
- **Images**: `group-hover:scale-105 transition-transform duration-700`
- **Icons**: `group-hover:scale-110 transition-transform duration-300`

### Standard Transitions
- **General**: `transition-all duration-300`
- **Colors**: `transition-colors duration-300`
- **Transform**: `transition-transform duration-300`
- **Image transforms**: `transition-transform duration-700`

## Icon Usage Guidelines
### Icon Sources
- Use Lucide React icons throughout
- Developer icons: `Code2`, `Terminal`, `Laptop`, `Server`, `Database`
- General icons: `ChevronRight`, `ExternalLink`, `Mail`, `Phone`, `Download`

### Icon Sizes
- **Small**: `w-4 h-4`
- **Medium**: `w-5 h-5`, `w-6 h-6`
- **Large**: `w-8 h-8`, `w-12 h-12`

### Icon Colors
- **In accent circles**: `text-white`
- **Standalone**: `text-cyan-500`, `text-blue-500`
- **Muted**: `text-slate-400`

## Responsive Design Patterns
### Mobile-First Approach
- Start with single column layouts
- Use `md:` prefix for tablet (768px+)
- Use `lg:` prefix for desktop (1024px+)
- Use `xl:` prefix for large desktop (1280px+)

### Text Scaling
```jsx
className="text-5xl md:text-6xl lg:text-7xl"
className="text-3xl lg:text-4xl"
className="py-16 lg:py-24"
className="px-6 lg:px-8"
```

## Content Structure Templates
### Section Header Template
```jsx
<div className="max-w-3xl mx-auto text-center mb-16">
  <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">SECTION LABEL</span>
  </div>
  <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">
    SECTION HEADING
  </h2>
  <p className="text-lg text-slate-300 leading-relaxed">
    Section description text goes here.
  </p>
</div>
```

### CTA Section Template
```jsx
<div className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
  <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
    <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">
      CTA HEADING
    </h2>
    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
      CTA description text.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="primary-button">PRIMARY ACTION</button>
      <button className="secondary-button">SECONDARY ACTION</button>
    </div>
  </div>
</div>
```

## Usage Guidelines
### Do's
- Always use cyan/blue gradients as primary accents
- Include developer brand elements (code brackets, stripes)
- Use uppercase text for all headings, buttons, and labels
- Implement smooth transitions and hover effects
- Use dark backgrounds with high-contrast text
- Include geometric background elements for visual interest
- Maintain consistent spacing and grid systems
- Use Framer Motion for animations

### Don'ts
- Don't use colors other than the defined palette
- Don't mix font weights inappropriately
- Don't forget mobile responsiveness
- Don't skip hover states on interactive elements
- Don't use inconsistent spacing
- Don't place light text on light backgrounds
- Don't omit the brand stripe elements
- Don't use animations that are too fast or jarring

### Accessibility Requirements
- Ensure all text meets WCAG contrast requirements
- Include visible focus states for keyboard navigation
- Use semantic HTML elements
- Provide alt text for all images
- Test with screen readers
- Ensure touch targets are at least 44px on mobile

This comprehensive design system ensures consistency across all portfolio components while maintaining a modern, developer-focused aesthetic.
