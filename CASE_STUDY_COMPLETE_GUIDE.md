# Complete Case Study Template Guide

## All Available Components (Matching TurfNations Exactly)

### 1. CaseStudyTemplate (Main Wrapper)

The main wrapper component with fixed sidebar.

```jsx
import CaseStudyTemplate from "@/app/components/case-studies/CaseStudyTemplate";

<CaseStudyTemplate
  project={{
    company: "Company Name",
    category: "Category",
    liveUrl: "https://example.com", // optional
    timeline: "3 Months",
    services: ["Service 1", "Service 2", "Service 3"],
  }}
  heroSection={<YourHeroComponent />}
>
  {/* All your sections go here */}
</CaseStudyTemplate>;
```

---

### 2. OverviewSection (Pattern #1)

Simple text overview with optional image.

```jsx
import { OverviewSection } from "@/app/components/case-studies/CaseStudyTemplate";

<OverviewSection
  title="About the Project"
  paragraphs={[
    "First paragraph describing the project...",
    "Second paragraph with more details...",
  ]}
  image="/images/projects/your-project/overview.png"
  imageAlt="Project Overview"
/>;
```

---

### 3. CaseStudySection (Pattern #2 - Centered Text)

General purpose section with badge, centered text, and children.

```jsx
import { CaseStudySection } from "@/app/components/case-studies/CaseStudyTemplate";
import { Zap } from "lucide-react";

<CaseStudySection
  id="challenge"
  label="REQUIREMENTS & CHALLENGES"
  icon={Zap}
  title="Complex Requirements"
  description="Description with <span className='font-bold text-black'>highlighted text</span>"
  bgColor="bg-gray-50"
  centered={true}
>
  {/* Your content here */}
</CaseStudySection>;
```

---

### 4. ImageContentGrid (Pattern #3 - Rounded Containers)

Image + content grid with rounded bg-gray-50 container. Use INSIDE CaseStudySection.

```jsx
import { CaseStudySection, ImageContentGrid } from '@/app/components/case-studies/CaseStudyTemplate';
import { CheckCircle, Smartphone, Check } from 'lucide-react';

<CaseStudySection
  id="solution"
  label="OUR SOLUTIONS"
  icon={CheckCircle}
  title="Our Approach"
  description="We built a comprehensive solution..."
  bgColor="bg-white"
  centered={true}
>
  {/* Grid 1 - Image Left */}
  <ImageContentGrid
    image="/images/projects/your-project/mobile-app.png"
    imageAlt="Mobile App Interface"
    badge="MOBILE APP"
    badgeIcon={Smartphone}
    title="Player & Owner Experience"
    description="Cross-platform mobile application..."
    imagePosition="left"
    features={[
      {
        icon: Check,
        title: "Real-time Availability",
        description: "Live calendar with instant updates"
      },
      {
        icon: Check,
        title: "Secure Payments",
        description: "Multiple payment methods"
      }
    ]}
  />

  {/* Grid 2 - Image Right */}
  <ImageContentGrid
    image="/images/projects/your-project/dashboard.png"
    imageAlt="Owner Dashboard"
    badge="OWNER DASHBOARD"
    badgeIcon={Monitor}
    title="Business Management"
    description="Comprehensive dashboard..."
    imagePosition="right"
    features={[...]}
  />
</CaseStudySection>
```

---

### 5. FullWidthImageContent (Pattern #4 - No Container)

Full-width image + content split. NO rounded container. Larger icons (w-12 h-12).

```jsx
import { FullWidthImageContent } from "@/app/components/case-studies/CaseStudyTemplate";
import { Monitor, BarChart, DollarSign } from "lucide-react";

<FullWidthImageContent
  image="/images/projects/your-project/analytics.png"
  imageAlt="Analytics Dashboard"
  badge="OWNER DASHBOARD"
  badgeIcon={Monitor}
  title="Complete Analytics Overview"
  description="Comprehensive analytics dashboard..."
  imagePosition="left"
  bgColor="bg-white"
  features={[
    {
      icon: BarChart,
      title: "Real-Time Analytics",
      description: "Live dashboard showing trends",
    },
    {
      icon: DollarSign,
      title: "Revenue Tracking",
      description: "Monitor daily and monthly revenue",
    },
  ]}
/>;

{
  /* Image Right Version */
}
<FullWidthImageContent
  imagePosition="right"
  bgColor="bg-gradient-to-br from-gray-50 to-white"
  {...otherProps}
/>;
```

---

### 6. FeatureGrid (Card Layout)

Grid of feature cards.

```jsx
import {
  CaseStudySection,
  FeatureGrid,
} from "@/app/components/case-studies/CaseStudyTemplate";
import { Star, Users, Calendar } from "lucide-react";

<CaseStudySection
  id="features"
  label="KEY FEATURES"
  icon={Star}
  title="Platform Features"
  bgColor="bg-gray-50"
  centered={true}
>
  <FeatureGrid
    features={[
      {
        icon: Calendar,
        title: "Real-time Booking",
        description: "Instant booking confirmation",
      },
      {
        icon: Users,
        title: "User Management",
        description: "Complete user profiles",
      },
    ]}
  />
</CaseStudySection>;
```

---

### 7. Tech Stack Section (Pattern #6)

Centered text with inline technology mentions.

```jsx
import { CaseStudySection } from "@/app/components/case-studies/CaseStudyTemplate";
import { Code } from "lucide-react";

<CaseStudySection
  id="tech-stack"
  label="TECHNOLOGY STACK"
  icon={Code}
  title="Built with Modern Technologies"
  description={
    <>
      The platform is built using{" "}
      <span className="font-bold text-black">React Native</span> and{" "}
      <span className="font-bold text-black">Expo</span> for cross-platform
      development...
    </>
  }
  bgColor="bg-gray-50"
  centered={true}
/>;
```

---

### 8. Results Section (Pattern #7)

Metrics grid + image showcase.

```jsx
import {
  CaseStudySection,
  MetricsGrid,
  ImageShowcaseGrid,
} from "@/app/components/case-studies/CaseStudyTemplate";
import { BarChart, Calendar, Users, Award, Zap } from "lucide-react";

<CaseStudySection
  id="results"
  label="RESULTS & METRICS"
  icon={BarChart}
  title="Outstanding Performance"
  bgColor="bg-white"
  centered={true}
>
  {/* Metrics Grid */}
  <MetricsGrid
    metrics={[
      { icon: Calendar, value: "5K+", label: "Bookings Processed" },
      { icon: Users, value: "2.5K+", label: "Active Users" },
      { icon: Award, value: "0%", label: "Double Booking Rate" },
      { icon: Zap, value: "95%", label: "Payment Success Rate" },
    ]}
  />

  {/* Image Showcase (after metrics) */}
  <div className="mt-12">
    <ImageShowcaseGrid
      items={[
        {
          title: "Owner Analytics Dashboard",
          image: "/images/projects/your-project/analytics.png",
          alt: "Analytics Dashboard",
          caption: "Real-time analytics showing trends",
        },
        {
          title: "Revenue Tracking",
          image: "/images/projects/your-project/revenue.png",
          alt: "Revenue Details",
          caption: "Comprehensive revenue breakdown",
        },
      ]}
    />
  </div>
</CaseStudySection>;
```

---

### 9. Business Impact Section (Pattern #8)

Benefit cards + achievements card.

```jsx
import {
  CaseStudySection,
  BusinessImpactCards,
  KeyAchievementsCard,
} from "@/app/components/case-studies/CaseStudyTemplate";
import { Award } from "lucide-react";

<CaseStudySection
  id="impact"
  label="🚀 BUSINESS IMPACT"
  title="Transforming Sports Booking"
  bgColor="bg-gray-50"
  centered={true}
>
  {/* Benefit Cards */}
  <BusinessImpactCards
    cards={[
      {
        title: "For Players",
        benefits: [
          "Instant booking confirmation without phone calls",
          "Transparent pricing with no hidden charges",
          "Multiple payment options",
          "Loyalty rewards on every booking",
          "Easy cancellation and refund",
        ],
      },
      {
        title: "For Owners",
        benefits: [
          "Automated booking management",
          "Real-time revenue tracking",
          "Reduced administrative overhead",
          "Increased booking efficiency",
          "Direct customer feedback",
        ],
      },
    ]}
  />

  {/* Key Achievements (after cards) */}
  <div className="mt-12">
    <KeyAchievementsCard
      achievements={[
        { value: "100%", label: "Booking Accuracy" },
        { value: "3x", label: "Faster Booking Process" },
        { value: "50+", label: "Active Turf Venues" },
      ]}
    />
  </div>
</CaseStudySection>;
```

---

### 10. CTA Section (Pattern #9)

Call-to-action with lime background.

```jsx
import { CTASection } from "@/app/components/case-studies/CaseStudyTemplate";

<CTASection
  title="Need a Booking Platform?"
  subtitle="Let's build a custom solution that transforms your business."
  primaryButton={{
    text: "Start Your Project",
    href: "/quote",
  }}
  secondaryButton={{
    text: "More Case Studies",
    href: "/case-studies",
  }}
/>;
```

---

## Complete Example Structure

```jsx
'use client';

import { CheckCircle, Code, Monitor, Smartphone, Star, BarChart, Award } from 'lucide-react';
import CaseStudyTemplate, {
  OverviewSection,
  CaseStudySection,
  ImageContentGrid,
  FullWidthImageContent,
  FeatureGrid,
  MetricsGrid,
  ImageShowcaseGrid,
  BusinessImpactCards,
  KeyAchievementsCard,
  CTASection
} from '@/app/components/case-studies/CaseStudyTemplate';
import YourHeroSection from './HeroSection';

export default function YourCaseStudy() {
  return (
    <CaseStudyTemplate
      project={{
        company: "Your Company",
        category: "Category",
        liveUrl: "https://example.com",
        timeline: "3 Months",
        services: ['Service 1', 'Service 2']
      }}
      heroSection={<YourHeroSection />}
    >
      {/* 1. Overview */}
      <OverviewSection
        title="About the Project"
        paragraphs={["Description..."]}
        image="/images/overview.png"
        imageAlt="Overview"
      />

      {/* 2. Challenge */}
      <CaseStudySection
        id="challenge"
        label="CHALLENGES"
        icon={Star}
        title="The Challenge"
        description="Description..."
        bgColor="bg-gray-50"
        centered={true}
      />

      {/* 3. Solution with Image Grids */}
      <CaseStudySection
        id="solution"
        label="OUR SOLUTIONS"
        icon={CheckCircle}
        title="Our Approach"
        bgColor="bg-white"
        centered={true}
      >
        <ImageContentGrid
          image="/images/solution1.png"
          imageAlt="Solution 1"
          badge="MOBILE APP"
          badgeIcon={Smartphone}
          title="Mobile Experience"
          description="Description..."
          features={[...]}
        />

        <ImageContentGrid
          imagePosition="right"
          {...moreProps}
        />
      </CaseStudySection>

      {/* 4. Full-Width Features */}
      <FullWidthImageContent
        image="/images/dashboard.png"
        imageAlt="Dashboard"
        badge="DASHBOARD"
        badgeIcon={Monitor}
        title="Analytics Overview"
        description="Description..."
        features={[...]}
        bgColor="bg-white"
      />

      {/* 5. Tech Stack */}
      <CaseStudySection
        id="tech-stack"
        label="TECHNOLOGY STACK"
        icon={Code}
        title="Built with Modern Tech"
        description="Tech description..."
        bgColor="bg-gray-50"
        centered={true}
      />

      {/* 6. Results */}
      <CaseStudySection
        id="results"
        label="RESULTS & METRICS"
        icon={BarChart}
        title="Outstanding Performance"
        bgColor="bg-white"
        centered={true}
      >
        <MetricsGrid metrics={[...]} />
        <div className="mt-12">
          <ImageShowcaseGrid items={[...]} />
        </div>
      </CaseStudySection>

      {/* 7. Business Impact */}
      <CaseStudySection
        id="impact"
        label="🚀 BUSINESS IMPACT"
        title="Transforming Business"
        bgColor="bg-gray-50"
        centered={true}
      >
        <BusinessImpactCards cards={[...]} />
        <div className="mt-12">
          <KeyAchievementsCard achievements={[...]} />
        </div>
      </CaseStudySection>

      {/* 8. CTA */}
      <CTASection
        title="Ready to Start?"
        subtitle="Let's build something amazing together."
        primaryButton={{ text: 'Get Started', href: '/quote' }}
        secondaryButton={{ text: 'View More', href: '/case-studies' }}
      />
    </CaseStudyTemplate>
  );
}
```

---

## Key Differences Between Components

### ImageContentGrid vs FullWidthImageContent

| Feature      | ImageContentGrid                         | FullWidthImageContent          |
| ------------ | ---------------------------------------- | ------------------------------ |
| Container    | `bg-gray-50 rounded-3xl overflow-hidden` | None (direct grid)             |
| Icon Size    | `w-10 h-10`                              | `w-12 h-12`                    |
| Icon Content | `w-5 h-5`                                | `w-6 h-6`                      |
| Title Size   | `text-3xl md:text-4xl`                   | `text-4xl md:text-5xl`         |
| Padding      | `p-8 md:p-12`                            | `px-8 md:px-12 lg:px-16 py-12` |
| Spacing      | `space-y-4`                              | `space-y-6`                    |
| Usage        | Inside `CaseStudySection`                | Standalone section             |

---

## Tips

1. **Always use `centered={true}`** for sections with badges (Challenge, Solution, Tech Stack, Results, Impact)

2. **ImageContentGrid** is for multiple grids inside one section (like Solution with multiple approaches)

3. **FullWidthImageContent** is for standalone feature showcases (like Owner Dashboard, Revenue Management)

4. **Metrics should be in 4-column grid**, Image Showcase in 2-column

5. **Business Impact cards are 2-column**, Achievements card spans full width

6. **CTA is always the last section** before ProjectInquirySection (which is in the template automatically)
