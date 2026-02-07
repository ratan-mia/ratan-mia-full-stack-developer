'use client';

import CaseStudyAbout from '@/app/components/case-studies/CaseStudyAbout';
import CaseStudyChallenge from '@/app/components/case-studies/CaseStudyChallenge';
import CaseStudyHero from '@/app/components/case-studies/CaseStudyHero';
import CaseStudySolution from '@/app/components/case-studies/CaseStudySolution';
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
import {
    BarChart,
    Bell,
    Calendar,
    Car,
    Check,
    CheckCircle, Code,
    Gift,
    MapPin,
    ShoppingCart,
    Smartphone,
    Star,
    TrendingUp,
    Users,
    Wrench,
    Zap
} from 'lucide-react';

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

export default function CheryBangladeshCaseStudy() {
  return (
    <CaseStudyTemplate
      project={projectData}
      heroSection={
        <CaseStudyHero
          category="Automotive Platform"
          categoryIcon={Car}
          title="Chery Bangladesh"
          subtitle="Mobile App"
          description="A comprehensive automotive platform revolutionizing the car buying experience with seamless test drives, service bookings, and parts e-commerce."
          techStack={['React Native', 'Expo SDK', 'Supabase', 'PostgreSQL']}
          liveUrl="https://www.cherybd.com"
          heroImage="/images/projects/cherymobileapp/chery-app-hero.jpg"
          imageAlt="Chery Bangladesh App"
          badge1Text="Live Platform"
          badge1Icon={TrendingUp}
          badge2Text="5K+ Users"
          badge2Icon={Users}
        />
      }
    >
      {/* About Section */}
      <CaseStudyAbout
        title="About the Project"
        paragraphs={[
          "Chery Bangladesh needed to modernize their customer experience by creating a unified digital platform that connects potential buyers with their showrooms, service centers, and parts inventory. The challenge was to build an intuitive mobile app that simplifies the entire car ownership journey from initial research to after-sales service.",
          "The solution is a comprehensive mobile application built with React Native and Expo, offering seamless vehicle browsing, test drive bookings, service appointments, and an integrated e-commerce platform for genuine Chery parts. The app serves as the primary digital touchpoint for Chery customers across Bangladesh."
        ]}
        image="/images/projects/cherymobileapp/chery-overview.jpg"
        imageAlt="Chery Bangladesh App Overview"
      />

      {/* Challenge Section */}
      <CaseStudyChallenge
        id="challenge"
        label="THE CHALLENGE"
        icon={Zap}
        title="Digital Transformation"
        description={
          <>
            Building a comprehensive automotive platform required addressing several key challenges including{' '}
            <span className="font-bold text-black">complex booking workflows</span> for test drives and service 
            appointments across multiple showrooms. We needed to create an <span className="font-bold text-black">integrated 
            e-commerce system</span> for genuine parts with inventory management. The platform demanded{' '}
            <span className="font-bold text-black">real-time availability tracking</span> for vehicles, service 
            slots, and parts. Additionally, we built <span className="font-bold text-black">location-based 
            services</span> to help customers find nearest showrooms and service centers with map integration.
          </>
        }
        bgColor="bg-gray-50"
        centered={true}
      />

      {/* Solution Section */}
      <CaseStudySolution
        id="solution"
        label="OUR SOLUTIONS"
        icon={CheckCircle}
        title="Our Approach"
        description="We built a comprehensive automotive platform combining vehicle browsing, booking management, and e-commerce with modern technology stack."
        bgColor="bg-white"
        centered={true}
      >
        {/* Vehicle Showroom */}
        <ImageContentGrid
          image="/images/projects/cherymobileapp/vehicle-showroom.jpg"
          imageAlt="Vehicle Showroom"
          badge="VEHICLE BROWSING"
          badgeIcon={Car}
          title="Digital Showroom"
          description="Comprehensive vehicle catalog with detailed specifications, 360° views, photo galleries, and comparison tools to help customers make informed decisions."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Vehicle Catalog',
              description: 'Browse all Chery models with detailed specs'
            },
            {
              icon: Check,
              title: 'Photo Galleries',
              description: '360° views and high-resolution images'
            },
            {
              icon: Check,
              title: 'Comparison Tool',
              description: 'Compare features and prices side-by-side'
            }
          ]}
        />

        {/* Test Drive Booking */}
        <ImageContentGrid
          image="/images/projects/cherymobileapp/test-drive.jpg"
          imageAlt="Test Drive Booking"
          badge="BOOKING SYSTEM"
          badgeIcon={Calendar}
          title="Test Drive Booking"
          description="Seamless test drive scheduling with real-time availability, showroom selection, and instant confirmation notifications."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: 'Real-Time Availability',
              description: 'Check available slots across showrooms'
            },
            {
              icon: Check,
              title: 'Easy Scheduling',
              description: 'Book test drives with preferred date and time'
            },
            {
              icon: Check,
              title: 'Instant Confirmation',
              description: 'Automated confirmations and reminders'
            }
          ]}
        />

        {/* Service Center */}
        <ImageContentGrid
          image="/images/projects/cherymobileapp/service-booking.jpg"
          imageAlt="Service Booking"
          badge="SERVICE CENTER"
          badgeIcon={Wrench}
          title="Service Appointments"
          description="Complete service booking system with service type selection, center locator, appointment tracking, and service history management."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Service Booking',
              description: 'Schedule maintenance and repairs easily'
            },
            {
              icon: Check,
              title: 'Center Locator',
              description: 'Find nearest authorized service centers'
            },
            {
              icon: Check,
              title: 'Service History',
              description: 'Track all service records and warranties'
            }
          ]}
        />
      </CaseStudySolution>
      <FullWidthImageContent
        image="/images/projects/cherymobileapp/parts-store.jpg"
        imageAlt="Parts E-Commerce"
        badge="E-COMMERCE"
        badgeIcon={ShoppingCart}
        title="Genuine Parts Store"
        description="Integrated e-commerce platform for browsing and purchasing genuine Chery parts with detailed product information, secure checkout, and doorstep delivery across Bangladesh."
        imagePosition="left"
        bgColor="bg-white"
        features={[
          {
            icon: ShoppingCart,
            title: 'Parts Catalog',
            description: 'Browse genuine parts with compatibility info'
          },
          {
            icon: Check,
            title: 'Secure Checkout',
            description: 'Multiple payment options with order tracking'
          },
          {
            icon: Gift,
            title: 'Delivery Service',
            description: 'Nationwide delivery to your doorstep'
          },
          {
            icon: Star,
            title: 'Warranty Support',
            description: 'All genuine parts with manufacturer warranty'
          }
        ]}
      />

      {/* Showroom Locator */}
      <FullWidthImageContent
        image="/images/projects/cherymobileapp/showroom-locator.jpg"
        imageAlt="Showroom Locator"
        badge="LOCATION SERVICES"
        badgeIcon={MapPin}
        title="Showroom & Service Center Finder"
        description="Interactive map integration helping customers locate nearest Chery showrooms and authorized service centers with directions, contact information, and real-time operating hours."
        imagePosition="right"
        bgColor="bg-gray-50"
        features={[
          {
            icon: MapPin,
            title: 'Map Integration',
            description: 'Find locations with Google Maps integration'
          },
          {
            icon: Smartphone,
            title: 'Turn-by-Turn Directions',
            description: 'Get navigation to selected location'
          },
          {
            icon: Bell,
            title: 'Contact Details',
            description: 'Phone numbers and operating hours'
          },
          {
            icon: Star,
            title: 'Center Info',
            description: 'Available services and facilities'
          }
        ]}
      />

      {/* Tech Stack Section */}
      <CaseStudySection
        id="tech-stack"
        label="TECHNOLOGY STACK"
        icon={Code}
        title="Built with Modern Technologies"
        description={
          <>
            The platform is built using <span className="font-bold text-black">React Native</span> and{' '}
            <span className="font-bold text-black">Expo SDK</span> for cross-platform mobile development. The backend 
            is powered by <span className="font-bold text-black">Supabase</span> with{' '}
            <span className="font-bold text-black">PostgreSQL</span> for database management. We integrated{' '}
            <span className="font-bold text-black">Google Maps API</span> for location services and navigation. The 
            app features <span className="font-bold text-black">secure payment gateways</span> for e-commerce 
            transactions and <span className="font-bold text-black">push notifications</span> for booking 
            confirmations and reminders.
          </>
        }
        bgColor="bg-white"
        centered={true}
      />

      {/* Results Section */}
      <CaseStudySection
        id="results"
        label="RESULTS & METRICS"
        icon={BarChart}
        title="Outstanding Performance"
        bgColor="bg-gray-50"
        centered={true}
      >
        <MetricsGrid
          metrics={[
            { icon: Calendar, value: '500+', label: 'Test Drives Booked' },
            { icon: Wrench, value: '300+', label: 'Service Appointments' },
            { icon: ShoppingCart, value: '200+', label: 'Parts Orders' },
            { icon: Star, value: '4.7', label: 'App Store Rating' }
          ]}
        />

        <div className="mt-12">
          <ImageShowcaseGrid
            items={[
              {
                title: 'Vehicle Showroom',
                image: '/images/projects/cherymobileapp/vehicle-detail.jpg',
                alt: 'Vehicle Detail Screen',
                caption: 'Comprehensive vehicle information with specifications, features, and high-quality images.'
              },
              {
                title: 'Service Booking',
                image: '/images/projects/cherymobileapp/booking-confirmation.jpg',
                alt: 'Booking Confirmation',
                caption: 'Seamless booking experience with instant confirmations and automated reminders.'
              }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* Business Impact Section */}
      <CaseStudySection
        id="impact"
        label="🚀 BUSINESS IMPACT"
        title="Transforming Car Buying Experience"
        bgColor="bg-white"
        centered={true}
      >
        <BusinessImpactCards
          cards={[
            {
              title: 'For Customers',
              benefits: [
                'Browse complete Chery vehicle lineup anytime',
                'Book test drives at convenient times',
                'Schedule service appointments hassle-free',
                'Purchase genuine parts from anywhere',
                'Find nearest showrooms and service centers'
              ]
            },
            {
              title: 'For Chery Bangladesh',
              benefits: [
                'Digital transformation of sales process',
                'Streamlined booking and appointment management',
                'Direct channel for parts sales',
                'Enhanced customer engagement and retention',
                'Valuable insights into customer preferences'
              ]
            }
          ]}
        />

        <div className="mt-12">
          <KeyAchievementsCard
            achievements={[
              { value: '40%', label: 'Increase in Test Drives' },
              { value: '60%', label: 'Service Booking Growth' },
              { value: '1000+', label: 'Active Users' }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* CTA Section */}
      <CTASection
        title="Need an Automotive Platform?"
        subtitle="Let's build a custom mobile solution for your automotive business."
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
