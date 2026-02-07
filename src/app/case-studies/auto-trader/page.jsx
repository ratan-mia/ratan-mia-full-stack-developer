'use client';

import CaseStudyTemplate, {
    BusinessImpactCards,
    CaseStudySection,
    CTASection,
    FullWidthImageContent,
    ImageContentGrid,
    ImageShowcaseGrid,
    KeyAchievementsCard,
    MetricsGrid,
    OverviewSection
} from '@/app/components/case-studies/CaseStudyTemplate';
import {
    ArrowLeft,
    Award,
    BarChart,
    Calendar,
    Check,
    CheckCircle,
    Code,
    ExternalLink,
    FileText,
    Lock,
    Monitor,
    Search,
    Shield,
    Star,
    TrendingUp,
    Users,
    Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Project Data
const projectData = {
  company: 'AutoTrader BD',
  category: 'B2B Car Trading Platform',
  liveUrl: 'https://autotraderbd.com',
  timeline: '6 Months',
  services: [
    'Full-Stack Development',
    'System Architecture',
    'Database Design',
    'Authentication System'
  ]
};

export default function AutoTraderCaseStudy() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const screenshots = [
    {
      image: 'mockup/web-home.png',
      title: 'Browse Premium Vehicles',
      description: 'Explore a curated selection of reconditioned and used vehicles with detailed specifications, high-quality images, and verified documentation.'
    },
    {
      image: 'mockup/web-listing-page.png',
      title: 'Advanced Search & Filters',
      description: 'Find your perfect vehicle using powerful search filters including brand, model, year, price range, transmission, and more.'
    },
    {
      image: 'mockup/admin-dashboard.png',
      title: 'Admin Dashboard',
      description: 'Comprehensive admin panel for managing users, approving listings, monitoring applications, and tracking all platform activities.'
    },
    {
      image: 'mockup/user-dashboard.png',
      title: 'User Dashboard',
      description: 'Manage your listings, track purchase applications, monitor favorites, and view detailed analytics from your personal dashboard.'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CaseStudyTemplate
      project={projectData}
      heroSection={
        <section className="relative min-h-[80vh] overflow-hidden bg-accent-lime flex items-center justify-center">
          <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-20">
            <Link 
              href="/case-studies" 
              className="inline-flex items-center gap-2 mb-8 text-black hover:text-black/70 transition-colors font-bold"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Case Studies
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-6 py-2 bg-black/10 text-black rounded-full text-sm font-extrabold mb-6">
                  🚗 B2B TRADING PLATFORM
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                  AutoTrader<br />Bangladesh
                </h1>
                <p className="text-xl md:text-2xl text-black/80 mb-8 font-medium leading-relaxed">
                  A comprehensive B2B car trading platform connecting dealers, importers, and buyers with secure authentication, advanced search, and complete admin management.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">Next.js 14</span>
                  <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">Supabase</span>
                  <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">Prisma ORM</span>
                  <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">JWT Auth</span>
                </div>

                <div className="flex gap-4">
                  <a 
                    href="https://autotraderbd.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-black text-accent-lime rounded-xl font-extrabold hover:shadow-2xl transition-all hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Platform
                  </a>
                </div>
              </div>

              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/projects/auto-trader/mockup/web-home.png"
                  alt="AutoTrader Platform"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      }
    >
      {/* Overview Section */}
      <OverviewSection
        title="About the Project"
        paragraphs={[
          "AutoTrader BD is a comprehensive B2B car trading platform designed specifically for the Bangladesh automotive market. The platform connects car dealers, importers, and buyers through a sophisticated web application featuring advanced search capabilities, role-based access control, and comprehensive admin management tools.",
          "Built with Next.js 14, Supabase, and Prisma ORM, AutoTrader handles complex business workflows including JWT authentication, multi-tenant user management, vehicle listing management with automated expiry, purchase application processing, and detailed activity tracking. The platform supports 24+ active users with 58+ vehicle listings and comprehensive analytics."
        ]}
        image="/images/projects/auto-trader/mockup/web-listing-page.png"
        imageAlt="AutoTrader Platform Overview"
      />

      {/* Challenge Section */}
      <CaseStudySection
        id="challenge"
        label="REQUIREMENTS & CHALLENGES"
        icon={Zap}
        title="Complex B2B Requirements"
        description={
          <>
            Building a production-ready B2B automotive trading platform required solving several complex challenges. 
            We implemented <span className="font-bold text-black">multi-tenant authentication</span> with role-based 
            access control supporting Admin, Dealer, Buyer, and hybrid roles with granular permissions and JWT-based 
            security. The platform features a <span className="font-bold text-black">sophisticated vehicle management 
            system</span> handling reconditioned and used cars with complex specifications, auction grades, multiple 
            document types, and automated listing expiry management. We developed a{' '}
            <span className="font-bold text-black">comprehensive admin panel</span> with user verification workflows, 
            listing approval systems, application management, and detailed activity tracking. Additionally, we 
            implemented <span className="font-bold text-black">advanced search and filtering</span> with multi-parameter 
            queries, real-time availability updates, and market price insights to help buyers make informed decisions.
          </>
        }
        bgColor="bg-gray-50"
        centered={true}
      />

      {/* Solution Section */}
      <CaseStudySection
        id="solution"
        label="OUR SOLUTIONS"
        icon={CheckCircle}
        title="Our Approach"
        description="We built a comprehensive full-stack solution combining modern web technologies with a robust database architecture and secure authentication system."
        bgColor="bg-white"
        centered={true}
      >
        {/* Web Platform */}
        <ImageContentGrid
          image="/images/projects/auto-trader/mockup/web-listing-page.png"
          imageAlt="Web Platform - Home Page"
          badge="WEB PLATFORM"
          badgeIcon={Monitor}
          title="Modern Web Experience"
          description="Next.js 14 powered web application with server-side rendering, optimized performance, and responsive design for seamless browsing across all devices."
          imagePosition="left"
          features={[
            {
              icon: Search,
              title: 'Advanced Search',
              description: 'Multi-parameter filtering with real-time results and saved searches'
            },
            {
              icon: Lock,
              title: 'Secure Authentication',
              description: 'JWT-based authentication with role-based access control'
            },
            {
              icon: Star,
              title: 'Vehicle Listings',
              description: 'Comprehensive listings with specifications, images, and documentation'
            }
          ]}
        />

        {/* Admin Dashboard */}
        <ImageContentGrid
          image="/images/projects/auto-trader/mockup/admin-dashboard.png"
          imageAlt="Admin Dashboard - Management Panel"
          badge="ADMIN PANEL"
          badgeIcon={Shield}
          title="Complete Platform Control"
          description="Comprehensive admin dashboard for managing users, verifying dealers, approving listings, monitoring applications, and tracking all platform activities in real-time."
          imagePosition="right"
          features={[
            {
              icon: Users,
              title: 'User Management',
              description: 'Verify dealers, approve registrations, manage roles and permissions'
            },
            {
              icon: FileText,
              title: 'Listing Approval',
              description: 'Review and approve vehicle listings with documentation verification'
            },
            {
              icon: BarChart,
              title: 'Activity Tracking',
              description: 'Monitor all platform activities with detailed audit logs'
            }
          ]}
        />

        {/* Car Management System */}
        <ImageContentGrid
          image="/images/projects/auto-trader/mockup/admin-dashboard.png"
          imageAlt="Car Management System"
          badge="CAR MANAGEMENT"
          badgeIcon={FileText}
          title="Vehicle Listing Management"
          description="Advanced vehicle management system supporting both reconditioned and used cars with comprehensive specifications, grading systems, multiple image types, and automated expiry management."
          imagePosition="left"
          containerClass="bg-gray-50 rounded-3xl overflow-hidden"
          features={[
            {
              icon: Check,
              title: 'Stock Management',
              description: 'Auto-generated stock IDs with unique tracking for each vehicle'
            },
            {
              icon: Award,
              title: 'Grading System',
              description: 'Auction grades, exterior/interior ratings, and JAAI certification'
            },
            {
              icon: Calendar,
              title: 'Expiry Management',
              description: 'Automated listing expiry with configurable periods and reminders'
            }
          ]}
        />
      </CaseStudySection>

      {/* Key Features - User Dashboard */}
      <FullWidthImageContent
        image="/images/projects/auto-trader/mockup/user-dashboard.png"
        imageAlt="User Dashboard - Personal Management"
        badge="USER DASHBOARD"
        badgeIcon={Users}
        title="Personalized Dashboard"
        description="Comprehensive dashboard for dealers and buyers to manage their listings, track purchase applications, monitor favorite vehicles, and analyze their trading activities with detailed insights."
        imagePosition="left"
        bgColor="bg-white"
        features={[
          {
            icon: FileText,
            title: 'My Listings',
            description: 'Create, edit, and manage your vehicle listings with real-time status'
          },
          {
            icon: TrendingUp,
            title: 'Applications',
            description: 'Track submitted and received purchase applications'
          },
          {
            icon: Star,
            title: 'Favorites',
            description: 'Save and organize vehicles you are interested in'
          },
          {
            icon: BarChart,
            title: 'Analytics',
            description: 'View detailed statistics about your trading activities'
          }
        ]}
      />

      {/* Purchase Application System */}
      <FullWidthImageContent
        image="/images/projects/auto-trader/mockup/my-purchase-application.png"
        imageAlt="Purchase Application Management"
        badge="APPLICATION SYSTEM"
        badgeIcon={FileText}
        title="Streamlined Purchase Process"
        description="Simplified purchase application system allowing buyers to submit offers directly through the platform. Track application status, communicate with sellers, and manage all purchase inquiries from a centralized dashboard."
        imagePosition="right"
        bgColor="bg-white"
        features={[
          {
            icon: Check,
            title: 'Quick Applications',
            description: 'Submit purchase applications with all required details in seconds'
          },
          {
            icon: Users,
            title: 'Direct Communication',
            description: 'Connect with sellers through integrated messaging system'
          },
          {
            icon: BarChart,
            title: 'Status Tracking',
            description: 'Monitor application progress with real-time status updates'
          },
          {
            icon: FileText,
            title: 'Document Management',
            description: 'Upload and manage required purchase documentation securely'
          }
        ]}
      />

      {/* Market Price Insights */}
      <FullWidthImageContent
        image="/images/projects/auto-trader/mockup/market-price-insight.png"
        imageAlt="Market Price Insights"
        badge="MARKET INSIGHTS"
        badgeIcon={TrendingUp}
        title="Data-Driven Pricing Intelligence"
        description="Make informed decisions with comprehensive market price insights. Analyze pricing trends, compare similar vehicles, and understand market dynamics with detailed analytics and historical data."
        imagePosition="left"
        bgColor="bg-white"
        features={[
          {
            icon: BarChart,
            title: 'Price Analytics',
            description: 'View detailed price breakdowns and market comparisons'
          },
          {
            icon: TrendingUp,
            title: 'Market Trends',
            description: 'Track pricing trends over time for specific models and brands'
          },
          {
            icon: Search,
            title: 'Smart Comparisons',
            description: 'Compare prices across similar vehicles with matching specifications'
          },
          {
            icon: Award,
            title: 'Value Assessment',
            description: 'Get instant market value estimates based on vehicle condition'
          }
        ]}
      />

      {/* Admin Features - Dealer Registration */}
      <FullWidthImageContent
        image="/images/projects/auto-trader/mockup/user-dashboard-on-tv.png"
        imageAlt="Admin Dealer Registration Management"
        badge="DEALER VERIFICATION"
        badgeIcon={Shield}
        title="Secure Dealer Onboarding"
        description="Comprehensive dealer verification system ensuring platform quality and security. Admin panel for reviewing business documents, verifying credentials, and approving dealer registrations with detailed business information."
        imagePosition="right"
        bgColor="bg-gradient-to-br from-gray-50 to-white"
        features={[
          {
            icon: FileText,
            title: 'Document Verification',
            description: 'Review business licenses, trade certificates, and TIN documents'
          },
          {
            icon: Shield,
            title: 'Security Checks',
            description: 'Multi-step verification process ensuring legitimate businesses'
          },
          {
            icon: Users,
            title: 'Business Profiles',
            description: 'Complete dealer profiles with company information and history'
          },
          {
            icon: Check,
            title: 'Approval Workflow',
            description: 'Streamlined approval process with notification system'
          }
        ]}
      />

      {/* Platform Screenshots Showcase */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-lime via-accent-lime to-accent-lime/70 p-12">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-extrabold mb-3">Complete Platform Solution</h3>
              <p className="text-lg text-black/80 font-medium">Web Application + Admin Dashboard + User Management</p>
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-black/10">
              <Image
                src="/images/projects/auto-trader/mockup/user-dashboard.png"
                alt="Complete Platform Overview"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Platform Screenshots Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl border-2 border-gray-100">
            {/* Left - Desktop Mockup with Slider */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[600px]">
                {/* Desktop Frame */}
                <div className="relative w-full aspect-[16/10] bg-gray-900 rounded-lg shadow-2xl p-2">
                  <div className="relative w-full h-full bg-white rounded-md overflow-hidden">
                    {/* Screenshot Display */}
                    <div className="relative w-full h-full">
                      <Image
                        src={`/images/projects/auto-trader/${screenshots[currentScreenshot].image}`}
                        alt={screenshots[currentScreenshot].title}
                        fill
                        className="object-cover transition-opacity duration-500"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Navigation Dots */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentScreenshot(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentScreenshot 
                          ? 'bg-accent-lime w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                <Monitor className="w-4 h-4" />
                PLATFORM FEATURES
              </div>
              
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
                Powerful Trading Platform
              </h3>
              
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive B2B platform makes car trading efficient and secure. From browsing vehicles to managing applications, everything is streamlined for your business.
              </p>

              {/* Feature List */}
              <div className="space-y-6">
                {screenshots.map((screenshot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentScreenshot(idx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all ${
                      idx === currentScreenshot
                        ? 'bg-accent-lime shadow-lg scale-105'
                        : 'bg-white hover:bg-gray-50 border-2 border-gray-100'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        idx === currentScreenshot ? 'bg-black' : 'bg-accent-lime'
                      }`}>
                        <Check className={`w-5 h-5 ${
                          idx === currentScreenshot ? 'text-accent-lime' : 'text-black'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-1">{screenshot.title}</h4>
                        <p className={`text-sm ${
                          idx === currentScreenshot ? 'text-black/80' : 'text-gray-600'
                        }`}>
                          {screenshot.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <CaseStudySection
        id="tech-stack"
        label="TECHNOLOGY STACK"
        icon={Code}
        title="Built with Modern Technologies"
        description={
          <>
            The AutoTrader platform is built using <span className="font-bold text-black">Next.js 14</span> with 
            App Router and server-side rendering for optimal performance and SEO. We leverage{' '}
            <span className="font-bold text-black">Supabase PostgreSQL</span> as our real-time database with 
            42 carefully designed tables managing complex relationships. <span className="font-bold text-black">Prisma ORM</span>{' '}
            provides type-safe database queries and migrations, ensuring data integrity across the platform. 
            Authentication is handled through <span className="font-bold text-black">JWT tokens</span> with 512-bit 
            cryptographic security and bcrypt password hashing. The platform uses{' '}
            <span className="font-bold text-black">React Query</span> for efficient data fetching and caching,{' '}
            <span className="font-bold text-black">Cloudinary</span> for image and document storage, and{' '}
            <span className="font-bold text-black">Tailwind CSS</span> for a modern, responsive interface. The 
            architecture supports role-based access control with enum-based user roles (ADMIN, DEALER, BUYER, 
            DEALER_BUYER) and comprehensive status management (PENDING, APPROVED, REJECTED, SUSPENDED).
          </>
        }
        bgColor="bg-gray-50"
        centered={true}
      />

      {/* Results Section */}
      <CaseStudySection
        id="results"
        label="RESULTS & METRICS"
        icon={BarChart}
        title="Platform Performance"
        bgColor="bg-white"
        centered={true}
      >
        <MetricsGrid
          metrics={[
            { icon: Users, value: '24+', label: 'Registered Users' },
            { icon: FileText, value: '58+', label: 'Vehicle Listings' },
            { icon: TrendingUp, value: '7+', label: 'Purchase Applications' },
            { icon: Shield, value: '79%', label: 'Approval Rate' }
          ]}
        />

        <div className="mt-12">
          <ImageShowcaseGrid
            items={[
              {
                title: 'Admin Dashboard Analytics',
                image: '/images/projects/auto-trader/mockup/admin-dashboard.png',
                alt: 'Admin Dashboard with Analytics',
                caption: 'Comprehensive admin panel showing user statistics, listing approvals, and platform activity.'
              },
              {
                title: 'User Management System',
                image: '/images/projects/auto-trader/mockup/user-dashboard.png',
                alt: 'User Dashboard Interface',
                caption: 'Personal dashboard for managing listings, applications, and tracking trading activities.'
              }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* Business Impact Section */}
      <CaseStudySection
        id="impact"
        label="🚀 BUSINESS IMPACT"
        title="Transforming Car Trading"
        bgColor="bg-gray-50"
        centered={true}
      >
        <BusinessImpactCards
          cards={[
            {
              title: 'For Dealers',
              benefits: [
                'Streamlined listing management with automated expiry',
                'Direct access to verified buyers and their applications',
                'Real-time notifications for purchase inquiries',
                'Comprehensive analytics to track business performance',
                'Secure document management and verification'
              ]
            },
            {
              title: 'For Buyers',
              benefits: [
                'Access to verified vehicle listings with complete documentation',
                'Advanced search and filtering for finding perfect vehicles',
                'Market price insights for informed decision making',
                'Simplified purchase application process',
                'Direct communication with verified dealers'
              ]
            }
          ]}
        />

        <div className="mt-12">
          <KeyAchievementsCard
            achievements={[
              { value: '42', label: 'Database Tables' },
              { value: '686+', label: 'Tracked Activities' },
              { value: '100%', label: 'Secure Authentication' }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* CTA Section */}
      <CTASection
        title="Need a B2B Trading Platform?"
        subtitle="Let's build a custom trading solution that transforms your business operations and connects your market."
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
