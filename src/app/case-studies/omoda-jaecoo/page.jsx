'use client';

import CaseStudyAbout from '@/app/components/case-studies/CaseStudyAbout';
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
  Award,
  BarChart,
  Calendar,
  Car,
  Check,
  CheckCircle,
  Code,
  CreditCard,
  DollarSign,
  Package,
  ShoppingCart,
  Smartphone,
  Star,
  Users,
  Wrench,
  Zap
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Project Data
const projectData = {
  company: 'Omoda & Jaecoo Bangladesh',
  category: 'Mobile App / Automotive Platform / Finance Tools',
  timeline: '5 Months',
  services: [
    'Mobile App Development',
    'Backend Development',
    'Finance Calculator',
    'Booking System',
    'Admin Dashboard',
    'Payment Gateway'
  ]
};

export default function OmodaJaecooBangladeshAppCaseStudy() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const screenshots = [
    {
      image: 'home.png',
      title: 'Home Dashboard',
      description: 'Quick access to all features – vehicle showroom, services, finance tools, and dual-brand navigation for Omoda & Jaecoo.'
    },
    {
      image: 'quick-actions.png',
      title: 'Quick Actions',
      description: 'One-tap access to test drive booking, service scheduling, finance calculator, and dealership locator.'
    },
    {
      image: 'service-booking.png',
      title: 'Service Booking',
      description: 'Book service appointments with vehicle selection from your garage and full service history tracking.'
    },
    {
      image: 'digital-glovebox.png',
      title: 'Digital Glovebox',
      description: 'Store and access all vehicle documents securely – registration, insurance, warranty, and service records.'
    },
    {
      image: 'nearby-fuel-station.png',
      title: 'Nearby Fuel Stations',
      description: 'Find nearest fuel stations with real-time pricing, amenities info, and turn-by-turn navigation.'
    },
    {
      image: 'finance-calculator.png',
      title: 'Finance Calculator',
      description: 'Interactive EMI calculator with partner bank rate comparison, down payment sliders, and loan tenure options.'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  return (
    <CaseStudyTemplate
      project={projectData}
      heroSection={
        <CaseStudyHero
          category="Automotive Platform"
          categoryIcon={Car}
          title="Omoda & Jaecoo Bangladesh"
          subtitle="Mobile App"
          description="Full-stack automotive platform for two premium Chinese brands — Omoda and Jaecoo — featuring test drive booking, service scheduling, finance calculator, and a complete vehicle ecosystem for Bangladesh's growing automotive market."
          techStack={['React Native', 'Expo', 'Supabase', 'TypeScript']}
          liveUrl={null}
          heroImage="/images/projects/omodajaecoo/home.png"
          imageAlt="Omoda & Jaecoo Bangladesh App"
          badge1Text="3K+ Downloads"
          badge1Icon={Users}
          badge2Text="600+ Services"
          badge2Icon={Wrench}
        />
      }
    >
      {/* About Section */}
      <CaseStudyAbout
        title="About the Project"
        paragraphs={[
          "Omoda and Jaecoo, two bold automotive brands under Chery International, made their Bangladesh debut with a demand for a modern digital presence. Traditional dealership experiences lacked digital touchpoints, making it difficult for customers to explore dual-brand vehicles, compare finance options, or book services on the go.",
          "The solution is a full-stack mobile app built with React Native and Expo, enabling customers to browse the complete Omoda and Jaecoo lineup, book test drives in real-time, schedule service appointments, and manage all vehicle documents in a digital glovebox. The app integrates with Supabase for real-time data synchronisation and secure authentication, and features a built-in finance calculator with partner bank integration."
        ]}
        image="/images/projects/omodajaecoo/home.png"
        imageAlt="Omoda & Jaecoo Bangladesh App Overview"
      />

      {/* Challenge Section */}
      <CaseStudySection
        id="challenge"
        label="REQUIREMENTS & CHALLENGES"
        icon={Zap}
        title="Dual-Brand Automotive Ecosystem"
        description={
          <>
            Building a platform for two distinct brands required a{' '}
            <span className="font-bold text-black">unified yet brand-aware UI</span> that switches context between Omoda's bold, youth-driven identity and Jaecoo's rugged off-road character. We needed to integrate a{' '}
            <span className="font-bold text-black">finance calculator</span> with multiple bank APIs, deliver an{' '}
            <span className="font-bold text-black">immersive vehicle showcase</span>, and build{' '}
            <span className="font-bold text-black">real-time booking management</span> for both test drives and service appointments — all within a single cross-platform app.
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
        description="We built a comprehensive dual-brand automotive platform combining mobile excellence with finance tools, seamless booking, and a smart vehicle management system."
        bgColor="bg-white"
        centered={true}
      >
        {/* Home Dashboard */}
        <ImageContentGrid
          image="/images/projects/omodajaecoo/home.png"
          imageAlt="Home Dashboard"
          badge="HOME DASHBOARD"
          badgeIcon={Car}
          title="Dual-Brand Home Experience"
          description="A unified home screen giving customers immediate access to both the Omoda and Jaecoo ecosystems — vehicle browsing, quick actions, promotions, news, and live events all in one view."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Brand Switcher',
              description: 'Toggle seamlessly between Omoda and Jaecoo content'
            },
            {
              icon: Check,
              title: 'Dynamic Banners',
              description: 'Live promotional banners and launch campaign highlights'
            },
            {
              icon: Check,
              title: 'Personalised Feed',
              description: 'Relevant news, events, and offers based on brand preference'
            }
          ]}
        />

        {/* Quick Actions */}
        <ImageContentGrid
          image="/images/projects/omodajaecoo/quick-actions.png"
          imageAlt="Quick Actions"
          badge="QUICK ACTIONS"
          badgeIcon={Zap}
          title="One-Tap Action Hub"
          description="Purpose-built quick-action panel giving users instant access to the most-used features — test drive booking, service scheduling, finance calculator, dealership finder, and emergency support."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: 'Test Drive',
              description: 'Book a test drive for any Omoda or Jaecoo model in seconds'
            },
            {
              icon: Check,
              title: 'Service Booking',
              description: 'Schedule a service appointment from the home screen'
            },
            {
              icon: Check,
              title: 'Finance Calculator',
              description: 'Instantly estimate monthly payments and loan options'
            }
          ]}
        />

        {/* Service Booking */}
        <ImageContentGrid
          image="/images/projects/omodajaecoo/service-booking.png"
          imageAlt="Service Booking"
          badge="SERVICE CENTER"
          badgeIcon={Wrench}
          title="Complete Service Management"
          description="Book service appointments with vehicle selection from your garage, multiple service types, preferred centre selection, and full service history tracking for both Omoda and Jaecoo vehicles."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Vehicle Garage',
              description: 'Register and manage multiple vehicles in your garage'
            },
            {
              icon: Check,
              title: 'Service History',
              description: 'Track all past services and maintenance records'
            },
            {
              icon: Check,
              title: 'Reminders',
              description: 'Automated maintenance reminders and notifications'
            }
          ]}
        />

        {/* Finance Calculator */}
        <ImageContentGrid
          image="/images/projects/omodajaecoo/finance-calculator.png"
          imageAlt="Finance Calculator"
          badge="FINANCE"
          badgeIcon={DollarSign}
          title="Smart Finance Calculator"
          description="An interactive EMI and loan calculator with partner bank rate comparison, adjustable down payment, flexible loan tenure selection, and a complete amortisation schedule."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: 'EMI Calculator',
              description: 'Adjust down payment and tenure to see monthly costs'
            },
            {
              icon: Check,
              title: 'Bank Rate Comparison',
              description: 'Compare offers from multiple partner banks instantly'
            },
            {
              icon: Check,
              title: 'Pre-approval Request',
              description: 'Submit a digital loan pre-approval directly from the app'
            }
          ]}
        />
      </CaseStudySolution>

      {/* Key Features Section */}
      <CaseStudySection
        id="key-features"
        label="KEY FEATURES"
        icon={Star}
        title="Comprehensive Feature Set"
        description="Explore the powerful features that make the Omoda & Jaecoo Bangladesh app a complete automotive ecosystem, from vehicle exploration to emergency roadside assistance."
        bgColor="bg-white"
        centered={true}
      >
        <div className="space-y-0">
          <FullWidthImageContent
            image="/images/projects/omodajaecoo/home.png"
            imageAlt="Vehicle Showroom"
            badge="VEHICLE DISCOVERY"
            badgeIcon={Car}
            title="Immersive Vehicle Exploration"
            description="Browse the complete Omoda and Jaecoo lineup with high-resolution galleries, detailed specifications, colour pickers, trim comparisons, and pricing information with integrated finance estimates."
            imagePosition="left"
            bgColor="bg-gray-50"
            features={[
              {
                icon: Car,
                title: 'Dual Brand Lineup',
                description: 'Full model range for both Omoda and Jaecoo in one place'
              },
              {
                icon: Star,
                title: 'HD Image Gallery',
                description: 'High-resolution photos showcasing interior, exterior, and features'
              },
              {
                icon: Check,
                title: 'Spec Comparison',
                description: 'Side-by-side specification comparison across trims and models'
              }
            ]}
          />

          <FullWidthImageContent
            image="/images/projects/omodajaecoo/digital-glovebox.png"
            imageAlt="Digital Glovebox"
            badge="DIGITAL GLOVEBOX"
            badgeIcon={Package}
            title="Digital Glovebox & Documents"
            description="Store and manage all vehicle documents digitally. Access insurance papers, registration, service records, and warranty information anytime, anywhere — for every vehicle in your garage."
            imagePosition="right"
            bgColor="bg-white"
            features={[
              {
                icon: Package,
                title: 'Secure Document Storage',
                description: 'Cloud-backed storage for all vehicle documents'
              },
              {
                icon: Calendar,
                title: 'Expiry Reminders',
                description: 'Alerts before insurance and registration documents expire'
              },
              {
                icon: Check,
                title: 'Camera Upload',
                description: 'Upload documents directly from camera or phone gallery'
              },
              {
                icon: DollarSign,
                title: 'Invoice Management',
                description: 'Digital invoices and transaction records'
              }
            ]}
          />

          <FullWidthImageContent
            image="/images/projects/omodajaecoo/nearby-fuel-station.png"
            imageAlt="Nearby Fuel Stations"
            badge="NAVIGATION"
            badgeIcon={Car}
            title="Find Nearest Fuel Stations"
            description="Never run out of fuel. Find the nearest filling stations with real-time navigation, pricing information, and available amenities at each location — critical for both petrol and hybrid/EV Omoda and Jaecoo models."
            imagePosition="left"
            bgColor="bg-gray-50"
            features={[
              {
                icon: Star,
                title: 'Real-time Navigation',
                description: 'Turn-by-turn directions to nearest fuel stations'
              },
              {
                icon: DollarSign,
                title: 'Price Comparison',
                description: 'Compare fuel prices across stations in your area'
              },
              {
                icon: Check,
                title: 'Amenities Info',
                description: 'See available services like car wash, ATM, and shops'
              },
              {
                icon: Users,
                title: 'EV Charging Points',
                description: 'Locate EV charging stations for electric variants'
              }
            ]}
          />

          <FullWidthImageContent
            image="/images/projects/omodajaecoo/finance-calculator.png"
            imageAlt="Finance Calculator"
            badge="SMART FINANCE"
            badgeIcon={DollarSign}
            title="Finance Planning Made Easy"
            description="Customers can plan their Omoda or Jaecoo purchase with a powerful finance calculator. Compare bank rates, adjust loan tenures, and submit pre-approval requests — all without visiting a branch."
            imagePosition="right"
            bgColor="bg-white"
            features={[
              {
                icon: DollarSign,
                title: 'EMI Breakdown',
                description: 'Detailed monthly instalment breakdown with amortisation'
              },
              {
                icon: Star,
                title: 'Multi-bank Rates',
                description: 'Live rate comparison from partner banks'
              },
              {
                icon: Calendar,
                title: 'Flexible Tenure',
                description: '12 to 60-month loan tenure options'
              },
              {
                icon: Check,
                title: 'Digital Pre-approval',
                description: 'Apply for loan pre-approval directly within the app'
              }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* Dual Platform Showcase */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-lime via-accent-lime to-accent-lime/70 p-12">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-extrabold mb-3">Complete Dual-Brand Automotive Platform</h3>
              <p className="text-lg text-black/80 font-medium">Omoda + Jaecoo — Mobile App · Finance Tools · Booking System</p>
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-black/10">
              <Image
                src="/images/projects/omodajaecoo/home.png"
                alt="Complete Platform - Omoda & Jaecoo Bangladesh Mobile App"
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
                        src={`/images/projects/omodajaecoo/${screenshots[currentScreenshot].image}`}
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
                Complete Automotive Experience
              </h3>

              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive mobile app transforms the car-buying journey for both Omoda and Jaecoo customers. From browsing vehicles to booking services and calculating finance, everything is seamlessly integrated in one powerful platform.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
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
            The Omoda & Jaecoo Bangladesh app is built using{' '}
            <span className="font-bold text-black">React Native</span> and{' '}
            <span className="font-bold text-black">Expo</span> for cross-platform mobile development, ensuring a seamless experience on both iOS and Android. We leverage{' '}
            <span className="font-bold text-black">Supabase</span> for real-time database management and secure authentication. The application is written in{' '}
            <span className="font-bold text-black">TypeScript</span> for type safety and maintainability. The finance module integrates with multiple partner banks via secure APIs, while the booking system delivers real-time confirmations through push notifications.
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
            { icon: Users, value: '3K+', label: 'App Downloads' },
            { icon: Calendar, value: '300+', label: 'Test Drives Booked' },
            { icon: Wrench, value: '600+', label: 'Service Bookings' },
            { icon: DollarSign, value: '200+', label: 'Finance Inquiries' }
          ]}
        />

        <div className="mt-12">
          <ImageShowcaseGrid
            items={[
              {
                title: 'Service Booking Platform',
                image: '/images/projects/omodajaecoo/service-booking.png',
                alt: 'Service Booking - Omoda & Jaecoo',
                caption: 'Comprehensive service scheduling with real-time availability and instant confirmation for both brands.'
              },
              {
                title: 'Finance Calculator',
                image: '/images/projects/omodajaecoo/finance-calculator.png',
                alt: 'Finance Calculator - Omoda & Jaecoo',
                caption: 'Smart EMI calculator with multi-bank rate comparison and digital pre-approval workflow.'
              }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* Business Impact Section */}
      <CaseStudySection
        id="impact"
        label="🚗 BUSINESS IMPACT"
        title="Transforming Automotive Retail"
        bgColor="bg-gray-50"
        centered={true}
      >
        <BusinessImpactCards
          cards={[
            {
              title: 'For Customers',
              benefits: [
                'Browse Omoda & Jaecoo vehicles from anywhere',
                'Book test drives and services in seconds',
                'Calculate finance options with real bank rates',
                'Store all vehicle documents in Digital Glovebox',
                'Find nearby fuel stations and service centres',
                'Access exclusive launch offers and promotions'
              ]
            },
            {
              title: 'For Business',
              benefits: [
                '120% increase in digital customer engagement',
                '80% reduction in booking phone calls',
                'Real-time booking and inventory management',
                'Finance leads generated directly in-app',
                'Reduced operational costs through automation',
                'Enhanced dual-brand loyalty and retention'
              ]
            }
          ]}
        />

        <div className="mt-12">
          <KeyAchievementsCard
            achievements={[
              { value: '80%', label: 'Fewer Booking Calls' },
              { value: '4.7/5', label: 'App Store Rating' },
              { value: '2K+', label: 'Active Users' }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* CTA Section */}
      <CTASection
        title="Need an Automotive Platform?"
        subtitle="Let's build a comprehensive mobile solution that transforms your automotive business."
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
