# Case Study Template Usage Guide

## Overview
The `CaseStudyTemplate` component provides a reusable, consistent structure for all case studies following the TurfNations design pattern with floating sidebar, expandable navigation, and consistent sections.

## Quick Start

### 1. Import Required Components

```jsx
'use client';

import CaseStudyTemplate, { 
  CaseStudySection, 
  FeatureGrid, 
  TechStack, 
  MetricsGrid 
} from '@/components/case-studies/CaseStudyTemplate';
import { CheckCircle, Code, Star, Award } from 'lucide-react';
```

### 2. Define Project Data

```jsx
const projectData = {
  company: 'Your Company Name',
  category: 'Mobile App / Web App / SaaS',
  liveUrl: 'https://example.com', // optional
  timeline: '6 Months',
  services: [
    'UI/UX Design',
    'Frontend Development',
    'Backend Development',
    'API Integration',
    'Quality Assurance'
  ]
};
```

### 3. Define Navigation Items

```jsx
const navItems = [
  { id: 'overview', label: 'Overview', icon: Star },
  { id: 'challenge', label: 'The Challenge', icon: AlertCircle },
  { id: 'solution', label: 'Our Solution', icon: Lightbulb },
  { id: 'features', label: 'Key Features', icon: CheckCircle },
  { id: 'tech-stack', label: 'Tech Stack', icon: Code },
  { id: 'results', label: 'Results & Impact', icon: Award }
];
```

### 4. Create Custom Hero Section

```jsx
const HeroSection = () => (
  <div className="relative h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center text-white overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 opacity-20">
      <Image
        src="/images/projects/your-project/hero.png"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
        <Star className="w-4 h-4" />
        CASE STUDY
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
        Your Project Title
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
        Brief project description highlighting the main achievement or value proposition.
      </p>
    </div>
  </div>
);
```

### 5. Assemble the Case Study

```jsx
export default function YourCaseStudyPage() {
  return (
    <CaseStudyTemplate
      project={projectData}
      navItems={navItems}
      heroSection={<HeroSection />}
    >
      {/* Overview Section */}
      <CaseStudySection
        id="overview"
        label="PROJECT OVERVIEW"
        icon={Star}
        title="Transforming Ideas into Reality"
        description="Project overview describing the context and goals"
        bgColor="bg-white"
      >
        <div className="prose max-w-none">
          <p>Detailed project overview...</p>
        </div>
      </CaseStudySection>

      {/* Challenge Section */}
      <CaseStudySection
        id="challenge"
        label="THE CHALLENGE"
        icon={AlertCircle}
        title="Complex Problems Require Smart Solutions"
        description="The challenges faced and obstacles overcome"
        bgColor="bg-gray-50"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl border-2 border-gray-200">
            <h3 className="text-xl font-bold mb-4">Challenge 1</h3>
            <p className="text-gray-600">Description...</p>
          </div>
          {/* More challenges */}
        </div>
      </CaseStudySection>

      {/* Solution Section */}
      <CaseStudySection
        id="solution"
        label="OUR SOLUTION"
        icon={Lightbulb}
        title="Strategic Approach to Excellence"
        description="How we solved the challenges"
        bgColor="bg-white"
      >
        {/* Solution content */}
      </CaseStudySection>

      {/* Features Section */}
      <CaseStudySection
        id="features"
        label="KEY FEATURES"
        icon={CheckCircle}
        title="Powerful Features That Deliver Results"
        bgColor="bg-gray-50"
      >
        <FeatureGrid features={[
          {
            icon: Star,
            title: 'Feature 1',
            description: 'Feature description'
          },
          {
            icon: CheckCircle,
            title: 'Feature 2',
            description: 'Feature description'
          },
          // More features...
        ]} />
      </CaseStudySection>

      {/* Tech Stack Section */}
      <CaseStudySection
        id="tech-stack"
        label="TECHNOLOGY STACK"
        icon={Code}
        title="Built with Modern Technologies"
        bgColor="bg-white"
      >
        <TechStack technologies={{
          'Frontend': ['React', 'Next.js', 'Tailwind CSS'],
          'Backend': ['Node.js', 'Express', 'PostgreSQL'],
          'Mobile': ['React Native', 'Expo'],
          'DevOps': ['Docker', 'AWS', 'GitHub Actions']
        }} />
      </CaseStudySection>

      {/* Results Section */}
      <CaseStudySection
        id="results"
        label="RESULTS & IMPACT"
        icon={Award}
        title="Measurable Success"
        bgColor="bg-gray-50"
      >
        <MetricsGrid metrics={[
          { value: '250%', label: 'Increase in Engagement', sublabel: 'Year over year' },
          { value: '50K+', label: 'Active Users', sublabel: 'First 6 months' },
          { value: '4.8', label: 'App Store Rating', sublabel: 'Out of 5.0' },
          { value: '98%', label: 'Customer Satisfaction', sublabel: 'Based on surveys' }
        ]} />
      </CaseStudySection>
    </CaseStudyTemplate>
  );
}
```

## Component API Reference

### CaseStudyTemplate Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| project | Object | Yes | Project metadata (company, category, etc.) |
| navItems | Array | Yes | Navigation items for sidebar |
| heroSection | ReactNode | Yes | Custom hero section component |
| children | ReactNode | Yes | Content sections |

### CaseStudySection Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| id | string | Yes | Section ID for navigation |
| label | string | No | Small label above title |
| icon | Component | No | Lucide icon component |
| title | string | No | Section title |
| description | string | No | Section description |
| bgColor | string | No | Tailwind background class (default: 'bg-white') |
| children | ReactNode | Yes | Section content |

### FeatureGrid Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| features | Array | Yes | Array of feature objects with icon, title, description |

### TechStack Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| technologies | Object | Yes | Object with category keys and tech array values |

### MetricsGrid Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| metrics | Array | Yes | Array of metric objects with value, label, sublabel |

## Design Guidelines Compliance

The template automatically follows these design principles:

- ✅ Accent lime (#ccff00) for CTAs and highlights
- ✅ Black/white high contrast
- ✅ Bold, extrabold typography (Inter font)
- ✅ Consistent spacing (py-20 sections, gap-8 grids)
- ✅ Rounded corners (rounded-2xl, rounded-3xl)
- ✅ Smooth transitions and hover effects
- ✅ Responsive design (mobile-first)
- ✅ Floating sidebar with expand/collapse
- ✅ Project details card
- ✅ Share buttons (Facebook, Twitter, LinkedIn, WhatsApp)

## File Structure

```
src/app/
├── components/
│   └── case-studies/
│       └── CaseStudyTemplate.jsx      # Reusable template
└── case-studies/
    └── your-project/
        └── page.jsx                    # Your implementation
```

## Tips & Best Practices

1. **Navigation Items**: Keep 5-7 items max for better UX
2. **Hero Section**: Use high-quality images with proper contrast
3. **Sections**: Alternate background colors (white/gray-50) for visual rhythm
4. **Features**: Use meaningful icons from Lucide React
5. **Metrics**: Use actual data, round numbers look better
6. **Images**: Always use Next/Image with proper width/height
7. **Content**: Keep sections focused, break long content into subsections
8. **Responsive**: Test on mobile, tablet, desktop
9. **Accessibility**: Include proper alt text, ARIA labels
10. **Performance**: Lazy load images below the fold

## Example Case Studies Using Template

- ✅ TurfNations Booking Platform (reference implementation)
- 🔜 Future case studies will use this template

## Customization

The template is designed to be flexible. You can:

- Override styles with additional Tailwind classes
- Add custom sections between standard ones
- Modify hero section completely
- Add custom components within sections
- Adjust colors while maintaining design system
- Add animations with Framer Motion

## Support

For questions or issues with the template, refer to:
- `/DESIGN_GUIDELINES.md` for design system details
- TurfNations case study for reference implementation
- Component source code for API details
