'use client';

import CaseStudyTemplate, {
  BusinessImpactCards,
  CaseStudySection,
  CTASection,
  FullWidthImageContent,
  ImageContentGrid,
  ImageShowcaseGrid,
  KeyAchievementsCard,
  MetricsGrid
} from '@/app/components/case-studies/CaseStudyTemplate';
import CaseStudyHero from '@/app/components/case-studies/CaseStudyHero';
import CaseStudyAbout from '@/app/components/case-studies/CaseStudyAbout';
import {
  Award,
  BarChart,
  Calendar,
  Check,
  CheckCircle, Code,
  DollarSign,
  Monitor, Smartphone,
  Star,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Project Data
const projectData = {
  company: 'TurfLet',
  category: 'Booking Platform',
  liveUrl: 'https://www.turflet.app',
  timeline: '3 Months',
  services: [
    'User Research',
    'UI Design',
    'Development',
    'Backend Integration'
  ]
};

export default function TurfLetCaseStudy() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const screenshots = [
    {
      image: '03-home-search-turfs.jpg',
      title: 'Discover Sports Venues',
      description: 'Browse and search through a wide selection of turf venues with detailed information, photos, and real-time availability.'
    },
    {
      image: '04-turf-details-champions.jpg',
      title: 'Venue Details & Reviews',
      description: 'View comprehensive venue information including amenities, pricing, location, and authentic user reviews to make informed decisions.'
    },
    {
      image: '06-booking-date-time.jpg',
      title: 'Easy Booking Process',
      description: 'Select your preferred date and time with an intuitive calendar interface showing real-time slot availability.'
    },
    {
      image: '08-my-bookings-list.jpg',
      title: 'Manage Your Bookings',
      description: 'Track all your bookings in one place with options to view details, cancel, or rebook your favorite venues.'
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
        <CaseStudyHero
          category="Booking Platform"
          categoryIcon={Smartphone}
          title="TurfLet"
          subtitle="Booking System"
          description="A comprehensive real-time booking platform for sports turfs with integrated payments, availability management, and owner dashboard."
          techStack={['React Native', 'Next.js', 'Prisma', 'SSL Commerz']}
          liveUrl="https://www.turflet.app"
          heroImage="/images/projects/turflet/www.turflet.app.png"
          imageAlt="TurfLet Platform"
          badge1Text="Live Platform"
          badge1Icon={TrendingUp}
          badge2Text="50K+ Users"
          badge2Icon={Users}
        />
      }
    >
      {/* About Section */}
      <CaseStudyAbout
        title="About the Project"
        paragraphs={[
          "TurfLet is a revolutionary booking platform designed to connect sports enthusiasts with turf owners. The platform needed to handle real-time availability checks, prevent double bookings, integrate secure payment processing, and provide comprehensive management tools for turf owners.",
          "The solution includes a mobile app for players to browse and book turfs, a web-based admin panel for owners to manage their facilities, and a robust backend system that handles complex booking logic, payment processing, and analytics."
        ]}
        image="/images/projects/turflet/mockup/owner-dashboard and player -app.png"
        imageAlt="TurfLet Platform Overview"
      />

      {/* Challenge Section */}
      <CaseStudySection
        id="challenge"
        label="REQUIREMENTS & CHALLENGES"
        icon={Zap}
        title="Complex Requirements"
        description={
          <>
            Building a real-time booking platform required solving several technical challenges including{' '}
            <span className="font-bold text-black">real-time availability management</span> with a 30-day calendar 
            view that prevents double bookings and handles concurrent requests seamlessly. We integrated{' '}
            <span className="font-bold text-black">SSL Commerz payment gateway</span> to support multiple payment 
            methods with secure transaction validation. The platform features a{' '}
            <span className="font-bold text-black">dynamic pricing engine</span> that adjusts rates based on peak 
            hours, weekends, and promotional discounts. Additionally, we developed{' '}
            <span className="font-bold text-black">multi-role dashboards</span> with distinct interfaces for players, 
            venue owners, and administrators, each optimized for their specific workflows and requirements.
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
        description="We built a comprehensive multi-platform solution combining mobile apps and web dashboards with modern technology stack."
        bgColor="bg-white"
        centered={true}
      >
        {/* Mobile App */}
        <ImageContentGrid
          image="/images/projects/turflet/owner-dashboard and player.png"
          imageAlt="Mobile App - Player & Owner Interface"
          badge="MOBILE APP"
          badgeIcon={Smartphone}
          title="Player & Owner Experience"
          description="Cross-platform mobile application built with React Native and Expo, featuring intuitive interfaces for both players and turf owners with real-time booking capabilities."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Real-time Availability',
              description: 'Live calendar with instant slot updates and conflict prevention'
            },
            {
              icon: Check,
              title: 'Secure Payments',
              description: 'SSL Commerz integration with multiple payment methods'
            },
            {
              icon: Check,
              title: 'Push Notifications',
              description: 'Instant booking confirmations and real-time updates'
            }
          ]}
        />

        {/* Owner Dashboard */}
        <ImageContentGrid
          image="/images/projects/turflet/owners-dashboard.png"
          imageAlt="Owner Dashboard - Analytics & Management"
          badge="OWNER DASHBOARD"
          badgeIcon={Monitor}
          title="Business Management"
          description="Comprehensive dashboard for venue owners to manage bookings, track revenue, and optimize their business operations with real-time analytics."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: 'Revenue Analytics',
              description: 'Real-time financial tracking with detailed reports'
            },
            {
              icon: Check,
              title: 'Booking Management',
              description: 'Complete control over schedules and reservations'
            },
            {
              icon: Check,
              title: 'Client Insights',
              description: 'Customer data and booking patterns analysis'
            }
          ]}
        />

        {/* Admin Panel */}
        <ImageContentGrid
          image="/images/projects/turflet/clients-revenue-details.png"
          imageAlt="Admin Dashboard - Revenue & Client Management"
          badge="ADMIN PANEL"
          badgeIcon={BarChart}
          title="Platform Administration"
          description="Next.js powered web dashboard with advanced analytics, complete platform oversight, and comprehensive management tools for administrators."
          imagePosition="left"
          containerClass="bg-gray-50 rounded-3xl overflow-hidden"
          features={[
            {
              icon: Check,
              title: 'Revenue Tracking',
              description: 'Comprehensive financial reports and transaction history'
            },
            {
              icon: Check,
              title: 'Turf Management',
              description: 'Approval workflow and venue listing control'
            },
            {
              icon: Check,
              title: 'User Administration',
              description: 'Role-based access and permission management'
            }
          ]}
        />
      </CaseStudySection>

      {/* Key Features - Players Community */}
      <FullWidthImageContent
        image="/images/projects/turflet/players-community.png"
        imageAlt="Players Community - Social Features"
        badge="SOCIAL & COMMUNITY"
        badgeIcon={Users}
        title="Players Community"
        description="Connect with fellow players, share experiences, and find playing partners in your area. Build your sports network and never play alone again."
        imagePosition="left"
        bgColor="bg-white"
        features={[
          {
            icon: Users,
            title: 'Find Players',
            description: 'Connect with players nearby and organize games together'
          },
          {
            icon: Star,
            title: 'Share Experiences',
            description: 'Post photos, reviews, and connect with the community'
          },
          {
            icon: Award,
            title: 'Build Network',
            description: 'Create your sports circle and grow your connections'
          }
        ]}
      />

      {/* Team Management */}
      <FullWidthImageContent
        image="/images/projects/turflet/team-details.png"
        imageAlt="Team Management - Create, Organize, and Compete"
        badge="TEAM FEATURES"
        badgeIcon={Users}
        title="Create & Manage Your Teams"
        description="Form your own sports teams, manage rosters, track performance statistics, and organize competitive matches. Challenge other teams and build a winning legacy with comprehensive team management tools."
        imagePosition="right"
        bgColor="bg-white"
        features={[
          {
            icon: Users,
            title: 'Roster Management',
            description: 'Add players, assign positions, and manage team members'
          },
          {
            icon: BarChart,
            title: 'Team Statistics',
            description: 'Track wins, losses, goals, and player performance metrics'
          },
          {
            icon: Calendar,
            title: 'Match Scheduling',
            description: 'Organize practice sessions and competitive matches'
          },
          {
            icon: Award,
            title: 'Team Challenges',
            description: 'Challenge other teams and compete in tournaments'
          }
        ]}
      />

      {/* Owner Analytics Dashboard */}
      <FullWidthImageContent
        image="/images/projects/turflet/owners-dashboard.png"
        imageAlt="Owner Dashboard Analytics Overview"
        badge="OWNER DASHBOARD"
        badgeIcon={Monitor}
        title="Complete Analytics Overview"
        description="Comprehensive analytics dashboard providing real-time insights into your turf business. Track revenue, monitor bookings, analyze customer behavior, and make data-driven decisions to grow your sports facility."
        imagePosition="left"
        bgColor="bg-white"
        features={[
          {
            icon: BarChart,
            title: 'Real-Time Analytics',
            description: 'Live dashboard showing booking trends, revenue growth, and occupancy rates with interactive charts'
          },
          {
            icon: DollarSign,
            title: 'Revenue Tracking',
            description: 'Monitor daily, weekly, and monthly revenue with detailed breakdown by turf and time slot'
          },
          {
            icon: Calendar,
            title: 'Booking Statistics',
            description: 'Track total bookings, cancellations, peak hours, and customer retention metrics'
          },
          {
            icon: Users,
            title: 'Customer Insights',
            description: 'Analyze customer demographics, booking patterns, and identify your most valuable clients'
          }
        ]}
      />

      {/* Revenue & Client Details */}
      <FullWidthImageContent
        image="/images/projects/turflet/clients-revenue-details.png"
        imageAlt="Revenue and Client Details"
        badge="REVENUE MANAGEMENT"
        badgeIcon={DollarSign}
        title="Revenue & Client Details"
        description="Detailed financial insights with comprehensive revenue breakdown by client, booking history, payment transactions, and payout management. Keep track of every penny and understand your business performance."
        imagePosition="right"
        bgColor="bg-gradient-to-br from-gray-50 to-white"
        features={[
          {
            icon: DollarSign,
            title: 'Revenue Breakdown',
            description: 'Detailed analysis of revenue by client, time period, and booking type with export options'
          },
          {
            icon: Users,
            title: 'Client Management',
            description: 'Complete client profiles with booking history, spending patterns, and loyalty status'
          },
          {
            icon: Check,
            title: 'Transaction History',
            description: 'Detailed payment records with filtering and search capabilities'
          },
          {
            icon: Calendar,
            title: 'Payout Management',
            description: 'Automated payout scheduling and financial reconciliation'
          }
        ]}
      />

      {/* Dual Platform Showcase */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-lime via-accent-lime to-accent-lime/70 p-12">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-extrabold mb-3">Complete Platform Solution</h3>
              <p className="text-lg text-black/80 font-medium">Player Mobile App + Owner Dashboard</p>
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-black/10">
              <Image
                src="/images/projects/turflet/mockup/owner-dashboard and player -app.png"
                alt="Complete Platform - Owner Dashboard and Player App"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Mobile App Screenshots Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl border-2 border-gray-100">
            {/* Left - Mobile Mockup with Slider */}
            <div className="flex justify-center">
              <div className="relative w-[300px] h-[600px]">
                {/* Mobile Frame */}
                <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl p-3">
                  <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                    
                    {/* Screenshot Display */}
                    <div className="relative w-full h-full">
                      <Image
                        src={`/images/projects/turflet/screenshots/${screenshots[currentScreenshot].image}`}
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
                <Smartphone className="w-4 h-4" />
                MOBILE APP FEATURES
              </div>
              
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
                Seamless Mobile Experience
              </h3>
              
              <p className="text-lg text-gray-600 mb-8">
                Our intuitive mobile app makes booking sports venues effortless. From discovering venues to managing bookings, everything is just a tap away.
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
            The TurfLet platform is built using <span className="font-bold text-black">React Native</span> and{' '}
            <span className="font-bold text-black">Expo</span> for cross-platform mobile development, ensuring a 
            seamless experience on both iOS and Android devices. The admin dashboard is powered by{' '}
            <span className="font-bold text-black">Next.js 14</span> with server-side rendering for optimal 
            performance. We leverage <span className="font-bold text-black">Supabase PostgreSQL</span> for our 
            real-time database and authentication, with <span className="font-bold text-black">Prisma ORM</span>{' '}
            providing type-safe database queries. Payment processing is handled through{' '}
            <span className="font-bold text-black">SSL Commerz</span>, the leading payment gateway in Bangladesh. 
            The application features smooth navigation via <span className="font-bold text-black">React Navigation</span>{' '}
            and is beautifully styled with <span className="font-bold text-black">Tailwind CSS</span>, delivering a 
            modern and responsive user interface across all devices.
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
        title="Outstanding Performance"
        bgColor="bg-white"
        centered={true}
      >
        <MetricsGrid
          metrics={[
            { icon: Calendar, value: '5K+', label: 'Bookings Processed' },
            { icon: Users, value: '2.5K+', label: 'Active Users' },
            { icon: Award, value: '0%', label: 'Double Booking Rate' },
            { icon: Zap, value: '95%', label: 'Payment Success Rate' }
          ]}
        />

        <div className="mt-12">
          <ImageShowcaseGrid
            items={[
              {
                title: 'Owner Analytics Dashboard',
                image: '/images/projects/turflet/owners-dashboard.png',
                alt: 'Owner Analytics Dashboard',
                caption: 'Real-time analytics showing booking trends, revenue growth, and occupancy rates.'
              },
              {
                title: 'Revenue & Client Tracking',
                image: '/images/projects/turflet/clients-revenue-details.png',
                alt: 'Revenue and Client Details',
                caption: 'Comprehensive revenue breakdown with transaction history and client management.'
              }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* Business Impact Section */}
      <CaseStudySection
        id="impact"
        label="🚀 BUSINESS IMPACT"
        title="Transforming Sports Booking"
        bgColor="bg-gray-50"
        centered={true}
      >
        <BusinessImpactCards
          cards={[
            {
              title: 'For Players',
              benefits: [
                'Instant booking confirmation without phone calls',
                'Transparent pricing with no hidden charges',
                'Multiple payment options for convenience',
                'Loyalty rewards on every booking',
                'Easy cancellation and refund process'
              ]
            },
            {
              title: 'For Owners',
              benefits: [
                'Automated booking management system',
                'Real-time revenue tracking and analytics',
                'Reduced administrative overhead',
                'Increased booking efficiency and revenue',
                'Direct customer feedback and ratings'
              ]
            }
          ]}
        />

        <div className="mt-12">
          <KeyAchievementsCard
            achievements={[
              { value: '100%', label: 'Booking Accuracy' },
              { value: '3x', label: 'Faster Booking Process' },
              { value: '50+', label: 'Active Turf Venues' }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* CTA Section */}
      <CTASection
        title="Need a Booking Platform?"
        subtitle="Let's build a custom booking solution that transforms your business operations."
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
