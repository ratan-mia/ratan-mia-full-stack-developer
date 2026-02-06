'use client';

/**
 * EXAMPLE CASE STUDY - Following TurfNations Structure EXACTLY
 * This file demonstrates how to create a case study that looks identical to TurfNations
 * Copy this structure and replace with your own content
 */

import { 
  CheckCircle, Code, Monitor, Smartphone, Star, BarChart, Award, 
  Check, Zap, Calendar, Users, DollarSign, Database 
} from 'lucide-react';
import CaseStudyTemplate, {
  OverviewSection,
  CaseStudySection,
  ImageContentGrid,
  FullWidthImageContent,
  MetricsGrid,
  ImageShowcaseGrid,
  BusinessImpactCards,
  KeyAchievementsCard,
  CTASection
} from '@/app/components/case-studies/CaseStudyTemplate';
import YourHeroSection from './HeroSection'; // Create your own hero

// 1. PROJECT DATA - Update with your project info
const projectData = {
  company: 'Your Company Name',
  category: 'Your Category (e.g., Booking Platform)',
  liveUrl: 'https://yourproject.com', // Optional - remove if no live site
  timeline: '3 Months',
  services: [
    'User Research',
    'UI Design', 
    'Development',
    'Backend Integration',
    // Add more services
  ]
};

export default function YourCaseStudy() {
  return (
    <CaseStudyTemplate
      project={projectData}
      heroSection={<YourHeroSection />}
    >
      
      {/* ========================================
          SECTION 1: OVERVIEW (Pattern #1)
          - No badge, no centered content
          - Simple title + paragraphs + image
          ======================================== */}
      <OverviewSection
        title="About the Project"
        paragraphs={[
          "First paragraph describing what the project is, what problem it solves, and key requirements. Keep it detailed and informative.",
          "Second paragraph explaining the solution approach, technologies used, and what was delivered. Mention specific platforms or features."
        ]}
        image="/images/projects/your-project/overview-mockup.png"
        imageAlt="Project Overview Mockup"
      />

      {/* ========================================
          SECTION 2: CHALLENGE (Pattern #2)
          - WITH badge (REQUIREMENTS & CHALLENGES)
          - centered={true}
          - Description uses inline <span> for bold text
          ======================================== */}
      <CaseStudySection
        id="challenge"
        label="REQUIREMENTS & CHALLENGES"
        icon={Zap}
        title="Complex Requirements"
        description={
          <>
            Building this platform required solving several technical challenges including{' '}
            <span className="font-bold text-black">real-time data synchronization</span> with a 
            seamless user experience that prevents conflicts. We integrated{' '}
            <span className="font-bold text-black">payment gateway</span> to support multiple 
            payment methods. The platform features a{' '}
            <span className="font-bold text-black">dynamic pricing engine</span> that adjusts 
            rates based on demand. Additionally, we developed{' '}
            <span className="font-bold text-black">multi-role dashboards</span> with distinct 
            interfaces for different user types.
          </>
        }
        bgColor="bg-gray-50"
        centered={true}
      >
        {/* No children content for Challenge section in TurfNations style */}
      </CaseStudySection>

      {/* ========================================
          SECTION 3: SOLUTION (Pattern #3)
          - WITH badge (OUR SOLUTIONS)
          - centered={true} 
          - Contains multiple ImageContentGrid components
          ======================================== */}
      <CaseStudySection
        id="solution"
        label="OUR SOLUTIONS"
        icon={CheckCircle}
        title="Our Approach"
        description="We built a comprehensive multi-platform solution combining mobile apps and web dashboards with modern technology stack."
        bgColor="bg-white"
        centered={true}
      >
        {/* Grid 1 - Image LEFT */}
        <ImageContentGrid
          image="/images/projects/your-project/mobile-app.png"
          imageAlt="Mobile App - Player Interface"
          badge="MOBILE APP"
          badgeIcon={Smartphone}
          title="Player & Owner Experience"
          description="Cross-platform mobile application built with React Native and Expo, featuring intuitive interfaces for both players and owners with real-time capabilities."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Real-time Updates',
              description: 'Live data sync with instant updates and conflict prevention'
            },
            {
              icon: Check,
              title: 'Secure Payments',
              description: 'Payment gateway integration with multiple payment methods'
            },
            {
              icon: Check,
              title: 'Push Notifications',
              description: 'Instant notifications and real-time updates'
            }
          ]}
        />

        {/* Grid 2 - Image RIGHT */}
        <ImageContentGrid
          image="/images/projects/your-project/dashboard.png"
          imageAlt="Owner Dashboard - Analytics & Management"
          badge="OWNER DASHBOARD"
          badgeIcon={Monitor}
          title="Business Management"
          description="Comprehensive dashboard for business owners to manage operations, track revenue, and optimize their business with real-time analytics."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: 'Revenue Analytics',
              description: 'Real-time financial tracking with detailed reports'
            },
            {
              icon: Check,
              title: 'Business Management',
              description: 'Complete control over operations and schedules'
            },
            {
              icon: Check,
              title: 'Customer Insights',
              description: 'Customer data and behavior pattern analysis'
            }
          ]}
        />

        {/* Grid 3 - Image LEFT (if you have more solutions) */}
        <ImageContentGrid
          image="/images/projects/your-project/admin-panel.png"
          imageAlt="Admin Panel - Platform Administration"
          badge="ADMIN PANEL"
          badgeIcon={BarChart}
          title="Platform Administration"
          description="Web-based admin dashboard with advanced analytics, complete platform oversight, and comprehensive management tools."
          imagePosition="left"
          containerClass="bg-gray-50 rounded-3xl overflow-hidden" // No mb-16 on last grid
          features={[
            {
              icon: Check,
              title: 'Revenue Tracking',
              description: 'Comprehensive financial reports and transaction history'
            },
            {
              icon: Check,
              title: 'User Management',
              description: 'Complete control over user accounts and permissions'
            },
            {
              icon: Check,
              title: 'System Monitoring',
              description: 'Real-time platform health and performance metrics'
            }
          ]}
        />
      </CaseStudySection>

      {/* ========================================
          SECTION 4: FULL-WIDTH FEATURES (Pattern #4)
          - NO CaseStudySection wrapper
          - Uses FullWidthImageContent directly
          - Larger icons (w-12 h-12), larger titles
          ======================================== */}
      <FullWidthImageContent
        image="/images/projects/your-project/analytics-dashboard.png"
        imageAlt="Analytics Dashboard Overview"
        badge="ANALYTICS DASHBOARD"
        badgeIcon={Monitor}
        title="Complete Analytics Overview"
        description="Comprehensive analytics dashboard providing real-time insights into your business. Track revenue, monitor activity, analyze customer behavior, and make data-driven decisions."
        imagePosition="left"
        bgColor="bg-white"
        features={[
          {
            icon: BarChart,
            title: 'Real-Time Analytics',
            description: 'Live dashboard showing trends, revenue growth, and key metrics with interactive charts'
          },
          {
            icon: DollarSign,
            title: 'Revenue Tracking',
            description: 'Monitor daily, weekly, and monthly revenue with detailed breakdown'
          },
          {
            icon: Calendar,
            title: 'Activity Statistics',
            description: 'Track total activities, cancellations, peak hours, and retention metrics'
          },
          {
            icon: Users,
            title: 'Customer Insights',
            description: 'Analyze customer demographics, patterns, and identify valuable clients'
          }
        ]}
      />

      {/* Another full-width feature - Image RIGHT */}
      <FullWidthImageContent
        image="/images/projects/your-project/revenue-details.png"
        imageAlt="Revenue & Client Details"
        badge="REVENUE MANAGEMENT"
        badgeIcon={DollarSign}
        title="Revenue & Client Details"
        description="Detailed financial insights with comprehensive revenue breakdown by client, transaction history, payment records, and payout management. Keep track of every penny."
        imagePosition="right"
        bgColor="bg-gradient-to-br from-gray-50 to-white"
        features={[
          {
            icon: DollarSign,
            title: 'Revenue Breakdown',
            description: 'Detailed analysis of revenue by client, time period, and type with export options'
          },
          {
            icon: Users,
            title: 'Client Management',
            description: 'Complete client profiles with transaction history and spending patterns'
          },
          {
            icon: Check,
            title: 'Transaction History',
            description: 'Detailed payment records with filtering and search capabilities'
          },
          {
            icon: Database,
            title: 'Data Export',
            description: 'Export financial data in multiple formats for accounting and analysis'
          }
        ]}
      />

      {/* ========================================
          SECTION 5: TECH STACK (Pattern #6)
          - WITH badge (TECHNOLOGY STACK)
          - centered={true}
          - Description uses inline <span> for bold tech names
          - NO children content
          ======================================== */}
      <CaseStudySection
        id="tech-stack"
        label="TECHNOLOGY STACK"
        icon={Code}
        title="Built with Modern Technologies"
        description={
          <>
            The platform is built using <span className="font-bold text-black">React Native</span> and{' '}
            <span className="font-bold text-black">Expo</span> for cross-platform mobile development, 
            ensuring a seamless experience on both iOS and Android devices. The admin dashboard is powered by{' '}
            <span className="font-bold text-black">Next.js 14</span> with server-side rendering for optimal 
            performance. We leverage <span className="font-bold text-black">Supabase PostgreSQL</span> for our 
            real-time database and authentication, with <span className="font-bold text-black">Prisma ORM</span>{' '}
            providing type-safe database queries. Payment processing is handled through{' '}
            <span className="font-bold text-black">Stripe</span>, the leading payment gateway. The application 
            features smooth navigation via <span className="font-bold text-black">React Navigation</span> and is 
            beautifully styled with <span className="font-bold text-black">Tailwind CSS</span>, delivering a 
            modern and responsive user interface across all devices.
          </>
        }
        bgColor="bg-gray-50"
        centered={true}
      />

      {/* ========================================
          SECTION 6: RESULTS (Pattern #7)
          - WITH badge (RESULTS & METRICS)
          - centered={true}
          - Contains MetricsGrid + ImageShowcaseGrid
          ======================================== */}
      <CaseStudySection
        id="results"
        label="RESULTS & METRICS"
        icon={BarChart}
        title="Outstanding Performance"
        bgColor="bg-white"
        centered={true}
      >
        {/* Metrics Grid - 4 columns */}
        <MetricsGrid
          metrics={[
            { icon: Calendar, value: '5K+', label: 'Transactions Processed' },
            { icon: Users, value: '2.5K+', label: 'Active Users' },
            { icon: Award, value: '99%', label: 'Customer Satisfaction' },
            { icon: Zap, value: '95%', label: 'Success Rate' }
          ]}
        />

        {/* Image Showcase - 2 columns */}
        <div className="mt-12">
          <ImageShowcaseGrid
            items={[
              {
                title: 'Analytics Dashboard',
                image: '/images/projects/your-project/analytics-screenshot.png',
                alt: 'Analytics Dashboard Screenshot',
                caption: 'Real-time analytics showing trends, revenue growth, and key performance indicators.'
              },
              {
                title: 'Revenue & Client Tracking',
                image: '/images/projects/your-project/revenue-screenshot.png',
                alt: 'Revenue Details Screenshot',
                caption: 'Comprehensive revenue breakdown with transaction history and client management.'
              }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* ========================================
          SECTION 7: BUSINESS IMPACT (Pattern #8)
          - WITH badge (🚀 BUSINESS IMPACT)
          - centered={true}
          - Contains BusinessImpactCards + KeyAchievementsCard
          ======================================== */}
      <CaseStudySection
        id="impact"
        label="🚀 BUSINESS IMPACT"
        title="Transforming the Industry"
        bgColor="bg-gray-50"
        centered={true}
      >
        {/* Business Impact Cards - 2 columns */}
        <BusinessImpactCards
          cards={[
            {
              title: 'For Users',
              benefits: [
                'Instant confirmation without phone calls',
                'Transparent pricing with no hidden charges',
                'Multiple payment options for convenience',
                'Rewards and loyalty programs',
                'Easy cancellation and refund process'
              ]
            },
            {
              title: 'For Business Owners',
              benefits: [
                'Automated management system',
                'Real-time revenue tracking and analytics',
                'Reduced administrative overhead',
                'Increased efficiency and revenue',
                'Direct customer feedback and ratings'
              ]
            }
          ]}
        />

        {/* Key Achievements Card */}
        <div className="mt-12">
          <KeyAchievementsCard
            achievements={[
              { value: '100%', label: 'Accuracy Rate' },
              { value: '3x', label: 'Faster Process' },
              { value: '50+', label: 'Active Partners' }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* ========================================
          SECTION 8: CTA (Pattern #9)
          - Lime background
          - Call-to-action buttons
          ======================================== */}
      <CTASection
        title="Need a Similar Solution?"
        subtitle="Let's build a custom platform that transforms your business operations."
        primaryButton={{
          text: 'Start Your Project',
          href: '/quote'
        }}
        secondaryButton={{
          text: 'More Case Studies',
          href: '/case-studies'
        }}
      />
    </CaseStudyTemplate>
  );
}
