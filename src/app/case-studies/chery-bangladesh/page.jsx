'use client';

import CaseStudyTemplate, { 
  CaseStudySection, 
  FeatureGrid, 
  TechStack, 
  MetricsGrid 
} from '@/app/components/case-studies/CaseStudyTemplate';
import { motion } from 'framer-motion';
import { 
  Star, AlertCircle, Lightbulb, CheckCircle, Code, Award,
  Car, Calendar, Wrench, ShoppingCart, MapPin, Bell, Newspaper, Gift, User,
  ArrowLeft, ExternalLink
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Project Data
const projectData = {
  company: 'Chery Bangladesh',
  category: 'Mobile App / Automotive Platform',
  liveUrl: 'https://www.cherybd.com',
  timeline: '4 Months',
  services: [
    'Mobile App Development',
    'Backend Development',
    'Booking System',
    'E-Commerce Integration',
    'Payment Gateway',
    'Map Integration'
  ]
};

// Navigation Items
const navItems = [
  { id: 'overview', label: 'Overview', icon: Star },
  { id: 'challenge', label: 'The Challenge', icon: AlertCircle },
  { id: 'solution', label: 'Our Solution', icon: Lightbulb },
  { id: 'features', label: 'Key Features', icon: CheckCircle },
  { id: 'tech-stack', label: 'Tech Stack', icon: Code },
  { id: 'screenshots', label: 'Screenshots', icon: Car },
  { id: 'results', label: 'Results & Impact', icon: Award }
];

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-accent-lime flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 relative z-10 w-full">
        <Link 
          href="/case-studies" 
          className="inline-flex items-center gap-2 mb-8 text-black hover:text-black/70 transition-colors font-bold"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Case Studies
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-2 bg-black/10 text-black rounded-full text-sm font-extrabold mb-6">
              🚗 AUTOMOTIVE PLATFORM
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Chery Bangladesh<br />Mobile App
            </h1>
            <p className="text-xl md:text-2xl text-black/80 mb-8 font-medium leading-relaxed">
              A comprehensive automotive platform revolutionizing the car buying experience with seamless test drives, service bookings, and parts e-commerce.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">React Native</span>
              <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">Expo SDK</span>
              <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">Supabase</span>
              <span className="px-4 py-2 bg-black text-accent-lime rounded-xl font-bold text-sm">PostgreSQL</span>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://www.cherybd.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-accent-lime rounded-xl font-extrabold hover:shadow-2xl transition-all hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                View Website
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/projects/cherybd-mockup.png"
              alt="Chery Bangladesh App"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function CheryBangladeshCaseStudy() {
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
        title="Revolutionizing Automotive Retail"
        description="Comprehensive mobile platform for the complete car ownership journey"
        bgColor="bg-gray-50"
      >
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: User, title: 'Client', value: 'Chery Bangladesh' },
            { icon: Calendar, title: 'Duration', value: '4 Months' },
            { icon: Car, title: 'Platform', value: 'Android & iOS' }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-accent-lime transition-all">
                <div className="w-12 h-12 rounded-xl bg-accent-lime/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.value}</p>
              </div>
            );
          })}
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Chery Bangladesh needed a comprehensive mobile application to streamline their customer journey from browsing vehicles to booking test drives and managing after-sales services. The platform had to handle multiple user types, integrate with their existing systems, and provide a seamless experience across both iOS and Android devices.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The solution combines modern mobile development with robust backend architecture, featuring real-time booking systems, secure payment processing, and an intuitive user interface that reflects the premium Chery brand experience.
          </p>
        </div>
      </CaseStudySection>

      {/* Challenge Section */}
      <CaseStudySection
        id="challenge"
        label="THE CHALLENGE"
        icon={AlertCircle}
        title="Key Challenges"
        description="Complex requirements across multiple business domains"
        bgColor="bg-white"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Complex Booking System",
              description: "Managing real-time availability for test drives and service appointments across multiple dealerships with conflicting schedules and varying operational hours."
            },
            {
              title: "Multi-Role Access",
              description: "Creating distinct experiences for customers, dealers, and service centers while maintaining a unified codebase and consistent brand experience."
            },
            {
              title: "E-commerce Integration",
              description: "Implementing a full-featured parts store with inventory management, secure payments, and order tracking while ensuring fast performance."
            },
            {
              title: "Offline Capability",
              description: "Ensuring the app remains functional with limited connectivity, storing critical data locally and syncing when connection is restored."
            }
          ].map((challenge, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-3xl border-l-4 border-accent-lime">
              <h3 className="text-2xl font-extrabold mb-4">{challenge.title}</h3>
              <p className="text-gray-700 leading-relaxed">{challenge.description}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Solution Section */}
      <CaseStudySection
        id="solution"
        label="OUR SOLUTION"
        icon={Lightbulb}
        title="Technical Architecture"
        description="Modern technology stack powering a seamless experience"
        bgColor="bg-gray-50"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-3xl font-extrabold mb-6">Implementation Highlights</h3>
            <ul className="space-y-4">
              {[
                'React Native with Expo for cross-platform development',
                'Supabase PostgreSQL for real-time data synchronization',
                'Row-Level Security (RLS) for data protection',
                'Custom booking engine with conflict resolution',
                'Offline-first architecture with local storage',
                'Push notifications for booking confirmations',
                'Integrated payment gateway (SSL Commerz)',
                'Google Maps API for dealership locations'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-lime flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-accent-lime transition-all">
              <Image
                src="/images/projects/cherymobileapp/02-home-screen.jpg"
                alt="Home Screen"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-accent-lime transition-all">
              <Image
                src="/images/projects/cherymobileapp/03-services-menu.jpg"
                alt="Services Menu"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-accent-lime transition-all">
              <Image
                src="/images/projects/cherymobileapp/05-featured-products.jpg"
                alt="Products"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 hover:border-accent-lime transition-all">
              <Image
                src="/images/projects/cherymobileapp/06-latest-news.jpg"
                alt="News"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Features Section */}
      <CaseStudySection
        id="features"
        label="CORE FEATURES"
        icon={CheckCircle}
        title="Core Functionality"
        description="Comprehensive features covering the entire customer journey"
        bgColor="bg-white"
      >
        <FeatureGrid features={[
          {
            icon: Car,
            title: "Vehicle Showroom",
            description: "Browse complete vehicle lineup with specs, images, 360° views, and pricing information"
          },
          {
            icon: Calendar,
            title: "Test Drive Booking",
            description: "Schedule test drives with preferred dealerships, select time slots, and receive confirmations"
          },
          {
            icon: Wrench,
            title: "Service Booking",
            description: "Book maintenance and repairs with service centers, track service history, and get reminders"
          },
          {
            icon: ShoppingCart,
            title: "Parts E-commerce",
            description: "Purchase genuine parts and accessories with secure payments and doorstep delivery"
          },
          {
            icon: MapPin,
            title: "Dealer Locator",
            description: "Find nearest dealerships and service centers with map integration and directions"
          },
          {
            icon: Bell,
            title: "Push Notifications",
            description: "Real-time updates for bookings, promotions, and service reminders"
          },
          {
            icon: Newspaper,
            title: "News & Events",
            description: "Stay updated with latest automotive news, launches, and company events"
          },
          {
            icon: Gift,
            title: "Promotions",
            description: "Access exclusive offers, discounts, and seasonal campaigns"
          },
          {
            icon: User,
            title: "Profile Management",
            description: "Manage personal details, vehicle information, and booking history"
          }
        ]} />
      </CaseStudySection>

      {/* Tech Stack Section */}
      <CaseStudySection
        id="tech-stack"
        label="TECHNOLOGY STACK"
        icon={Code}
        title="Technologies Used"
        bgColor="bg-gray-50"
      >
        <TechStack technologies={{
          'Frontend': ['React Native', 'Expo SDK 54', 'React Navigation', 'AsyncStorage', 'Expo Camera', 'React Native Maps'],
          'Backend': ['Supabase', 'PostgreSQL', 'Row Level Security', 'Supabase Auth', 'Real-time APIs', 'Cloud Functions'],
          'Integrations': ['SSL Commerz', 'Google Maps', 'Push Notifications', 'Firebase Analytics', 'Sentry', 'AWS S3']
        }} />
      </CaseStudySection>

      {/* Results Section */}
      <CaseStudySection
        id="results"
        label="RESULTS & IMPACT"
        icon={Award}
        title="Measurable Success"
        description="Significant improvements across all key business metrics"
        bgColor="bg-white"
      >
        <MetricsGrid metrics={[
          { value: '300%', label: 'Test Drive Bookings', sublabel: 'Increase in bookings' },
          { value: '50K+', label: 'Active App Users', sublabel: 'Growing user base' },
          { value: '4.8', label: 'App Store Rating', sublabel: 'Out of 5.0 stars' },
          { value: '85%', label: 'Customer Satisfaction', sublabel: 'Based on surveys' }
        ]} />

        <div className="mt-12 bg-white p-10 rounded-3xl border-2 border-gray-200">
          <h3 className="text-3xl font-extrabold mb-6">Business Impact</h3>
          <ul className="grid md:grid-cols-2 gap-6">
            {[
              'Streamlined customer journey from discovery to purchase',
              'Reduced booking management overhead by 60%',
              'Increased service center utilization by 45%',
              'Enhanced brand presence in digital marketplace',
              'Improved customer retention through engagement features',
              'Generated additional revenue stream through parts sales'
            ].map((impact, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent-lime rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-lg text-gray-700">{impact}</span>
              </li>
            ))}
          </ul>
        </div>
      </CaseStudySection>
    </CaseStudyTemplate>
  );
}
