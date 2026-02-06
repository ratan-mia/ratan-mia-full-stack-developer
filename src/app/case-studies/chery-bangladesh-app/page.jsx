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
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Award,
    BarChart,
    Calendar,
    Car,
    Check,
    CheckCircle,
    Code,
    CreditCard,
    DollarSign,
    Monitor,
    Package,
    ShoppingCart,
    Smartphone,
    Star,
    TrendingUp,
    Users,
    Wrench,
    Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Project Data
const projectData = {
  company: 'Chery Bangladesh',
  category: 'Mobile App / Automotive Platform / E-commerce',
  timeline: '5 Months',
  services: [
    'Mobile App Development',
    'Backend Development',
    'E-commerce Integration',
    'Booking System',
    'Admin Dashboard',
    'Payment Gateway'
  ]
};

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-accent-lime flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-40 right-20 w-24 h-24 rounded-2xl bg-black/5"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-40 left-20 w-32 h-32 rounded-full bg-black/5"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            href="/case-studies" 
            className="inline-flex items-center gap-2 mb-8 text-black hover:text-black/70 transition-colors font-bold uppercase tracking-wider text-sm"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Case Studies
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-2 bg-black/10 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              🚗 AUTOMOTIVE PLATFORM
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Chery Bangladesh
              <span className="block text-black/70">Mobile App</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-black/80 mb-8 leading-relaxed font-medium">
              Full-stack automotive platform with test drive booking, service scheduling, e-commerce, and complete vehicle ecosystem for Bangladesh's leading automotive brand.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Users, label: "Downloads", value: "5K+" },
                { icon: Car, label: "Test Drives", value: "500+" },
                { icon: Wrench, label: "Services Booked", value: "1.2K+" },
                { icon: ShoppingCart, label: "Orders", value: "800+" },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="bg-black/10 backdrop-blur-sm p-4 rounded-2xl"
                  >
                    <Icon className="w-6 h-6 text-black mb-2" />
                    <div className="text-2xl font-extrabold text-black">{stat.value}</div>
                    <div className="text-sm font-semibold text-black/70">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {["React Native", "Expo", "Supabase", "TypeScript"].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-black/15 text-black rounded-lg text-sm font-bold">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-black/10">
              <Image
                src="/images/projects/cherymobileapp/chery-mobile-app.png"
                alt="Chery Bangladesh App"
                fill
                className="object-cover"
                priority
              />
              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-black text-accent-lime px-6 py-4 rounded-2xl font-extrabold text-xl shadow-2xl">
                2024
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function CheryBangladeshAppCaseStudy() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const screenshots = [
    {
      image: '02-home-screen.jpg',
      title: 'Home Dashboard',
      description: 'Quick access to all features - services, showroom, e-commerce, support with personalized recommendations.'
    },
    {
      image: '22-products-vehicle-browse.jpg',
      title: 'Vehicle Showroom',
      description: 'Browse complete vehicle lineup with 360° interactive views, HD galleries, and detailed specifications.'
    },
    {
      image: '17-testdrive-vehicle-selection.jpg',
      title: 'Test Drive Booking',
      description: 'Schedule test drives with real-time availability calendar and instant confirmation notifications.'
    },
    {
      image: '11-service-booking-vehicle.jpg',
      title: 'Service Booking',
      description: 'Book service appointments with vehicle selection from garage and service history tracking.'
    },
    {
      image: '28-shop-accessories.jpg',
      title: 'Parts & Accessories',
      description: 'Shop 500+ genuine Chery parts with category browsing and compatibility checking.'
    },
    {
      image: '30-shop-cart.jpg',
      title: 'Shopping Cart',
      description: 'Real-time cart sync with discount codes, stock checking, and free shipping progress.'
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
      heroSection={<HeroSection />}
    >
      {/* Overview Section */}
      <OverviewSection
        title="About the Project"
        paragraphs={[
          "Chery Bangladesh needed a comprehensive mobile platform to connect customers with their entire automotive ecosystem. Traditional car dealership experiences lacked digital touchpoints, making it difficult for customers to book test drives, schedule services, or purchase accessories.",
          "The solution is a full-stack mobile app built with React Native and Expo, enabling customers to browse vehicles with 360° views, book test drives in real-time, schedule service appointments, and shop for genuine parts and accessories. The app integrates with Supabase for real-time data synchronization and secure authentication."
        ]}
        image="/images/projects/cherymobileapp/mockup/chery-mobile-app-multi-screens.png"
        imageAlt="Chery Bangladesh App Overview"
      />

      {/* Challenge Section */}
      <CaseStudySection
        id="challenge"
        label="REQUIREMENTS & CHALLENGES"
        icon={Zap}
        title="Complex Automotive Ecosystem"
        description={
          <>
            Building a comprehensive automotive platform required integrating multiple complex systems including{' '}
            <span className="font-bold text-black">real-time booking management</span> for test drives and service appointments. 
            We needed to create an <span className="font-bold text-black">immersive vehicle showcase</span> with 360° views and 
            detailed specifications. The platform demanded <span className="font-bold text-black">e-commerce functionality</span>{' '}
            for parts and accessories with inventory management. Additionally, we built{' '}
            <span className="font-bold text-black">offline capabilities</span> to ensure the app works seamlessly 
            even with poor network connectivity.
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
        description="We built a comprehensive automotive platform combining mobile excellence with seamless e-commerce and booking capabilities."
        bgColor="bg-white"
        centered={true}
      >
        {/* Vehicle Showroom */}
        <ImageContentGrid
          image="/images/projects/cherymobileapp/mockup/Chery-website.png"
          imageAlt="Vehicle Showroom"
          badge="VEHICLE DISCOVERY"
          badgeIcon={Car}
          title="Interactive Vehicle Showroom"
          description="Browse complete vehicle lineup with 360° interactive views, high-resolution galleries, detailed specifications, and price information with financing calculator."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: '360° Interactive Viewer',
              description: 'Rotate and explore vehicles from every angle'
            },
            {
              icon: Check,
              title: 'Comparison Tool',
              description: 'Compare specifications side-by-side'
            },
            {
              icon: Check,
              title: 'Finance Calculator',
              description: 'Calculate monthly payments and down payment'
            }
          ]}
        />

        {/* Test Drive Booking */}
        <ImageContentGrid
          image="/images/projects/cherymobileapp/17-testdrive-vehicle-selection.jpg"
          imageAlt="Test Drive Booking"
          badge="TEST DRIVE"
          badgeIcon={Calendar}
          title="Seamless Test Drive Booking"
          description="Schedule test drives with intuitive multi-step flow, real-time availability calendar, dealership selection, and instant confirmation notifications."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: 'Real-time Availability',
              description: 'Check and book available time slots instantly'
            },
            {
              icon: Check,
              title: 'Dealership Selection',
              description: 'Choose preferred location with map view'
            },
            {
              icon: Check,
              title: 'Instant Confirmation',
              description: 'SMS and push notifications for booking status'
            }
          ]}
        />

        {/* Service Booking */}
        <ImageContentGrid
          image="/images/projects/cherymobileapp/mockup/book-service-online.png"
          imageAlt="Service Booking"
          badge="SERVICE CENTER"
          badgeIcon={Wrench}
          title="Complete Service Management"
          description="Book service appointments with vehicle selection from garage, multiple service types, preferred center booking, and service history tracking."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Vehicle Garage',
              description: 'Manage multiple vehicles in your garage'
            },
            {
              icon: Check,
              title: 'Service History',
              description: 'Track all past services and maintenance'
            },
            {
              icon: Check,
              title: 'Reminders',
              description: 'Automated maintenance reminders'
            }
          ]}
        />

        {/* E-commerce */}
        <ImageContentGrid
          image="/images/projects/cherymobileapp/28-shop-accessories.jpg"
          imageAlt="Parts & Accessories Store"
          badge="E-COMMERCE"
          badgeIcon={Package}
          title="Genuine Parts Store"
          description="Complete online store for genuine Chery parts with 500+ products, category browsing, compatibility checking, and stock availability."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: '500+ Products',
              description: 'Comprehensive catalog of genuine parts'
            },
            {
              icon: Check,
              title: 'Compatibility Check',
              description: 'Ensure parts fit your vehicle model'
            },
            {
              icon: Check,
              title: 'Stock Tracking',
              description: 'Real-time inventory updates'
            }
          ]}
        />

        {/* Shopping Cart */}
        <ImageContentGrid
          image="/images/projects/cherymobileapp/30-shop-cart.jpg"
          imageAlt="Shopping Cart"
          badge="CART"
          badgeIcon={ShoppingCart}
          title="Smart Shopping Cart"
          description="Seamless cart experience with real-time synchronization, quantity management, discount codes, free shipping tracker, and savings calculation."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Real-time Sync',
              description: 'Cart syncs across devices instantly'
            },
            {
              icon: Check,
              title: 'Discount Codes',
              description: 'Apply promotional codes and see savings'
            },
            {
              icon: Check,
              title: 'Shipping Progress',
              description: 'Track progress to free shipping threshold'
            }
          ]}
        />

        {/* Checkout */}
        <ImageContentGrid
          image="/images/projects/cherymobileapp/31-shop-checkout.jpg"
          imageAlt="Secure Checkout"
          badge="PAYMENT"
          badgeIcon={CreditCard}
          title="Secure Checkout Flow"
          description="Complete checkout flow with multiple payment options, address management, order summary, and payment confirmation."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: 'Multiple Payments',
              description: 'Credit card, mobile banking, cash on delivery'
            },
            {
              icon: Check,
              title: 'Address Book',
              description: 'Save and manage multiple addresses'
            },
            {
              icon: Check,
              title: 'Order Tracking',
              description: 'Real-time order status updates'
            }
          ]}
        />
      </CaseStudySection>

      {/* Vehicle 360 Viewer */}
      <FullWidthImageContent
        image="/images/projects/cherymobileapp/mockup/Chery-website.png"
        imageAlt="360° Vehicle Viewer"
        badge="360° EXPERIENCE"
        badgeIcon={Car}
        title="Immersive Vehicle Exploration"
        description="Interactive 360° vehicle viewer allowing customers to explore every angle of their dream car. High-resolution imagery with zoom capabilities and detailed feature highlights."
        imagePosition="left"
        bgColor="bg-white"
        features={[
          {
            icon: Car,
            title: '360° Rotation',
            description: 'Smooth rotation with gesture controls for complete vehicle exploration'
          },
          {
            icon: Star,
            title: 'HD Image Gallery',
            description: 'High-resolution photos showcasing interior, exterior, and features'
          },
          {
            icon: Check,
            title: 'Feature Highlights',
            description: 'Interactive hotspots highlighting key features and specifications'
          }
        ]}
      />

      {/* Order Tracking */}
      <FullWidthImageContent
        image="/images/projects/cherymobileapp/mockup/digital-glovebox.png"
        imageAlt="Order Tracking & Management"
        badge="DIGITAL GLOVEBOX"
        badgeIcon={Package}
        title="Digital Glovebox & Documents"
        description="Store and manage all your vehicle documents digitally. Access insurance papers, registration, service records, and warranty information anytime, anywhere."
        imagePosition="right"
        bgColor="bg-white"
        features={[
          {
            icon: Package,
            title: 'Real-time Tracking',
            description: 'Live updates on order processing, shipping, and delivery status'
          },
          {
            icon: Calendar,
            title: 'Order History',
            description: 'Complete purchase history with reorder capabilities'
          },
          {
            icon: Check,
            title: 'Delivery Updates',
            description: 'SMS and push notifications for every order milestone'
          },
          {
            icon: DollarSign,
            title: 'Invoice Management',
            description: 'Digital invoices and transaction records for all purchases'
          }
        ]}
      />

      {/* Booking Management */}
      <FullWidthImageContent
        image="/images/projects/cherymobileapp/mockup/my-garages.png"
        imageAlt="Booking Management Dashboard"
        badge="BOOKING DASHBOARD"
        badgeIcon={Calendar}
        title="Manage All Your Bookings"
        description="Centralized dashboard for managing test drives and service appointments. View upcoming bookings, track history, and easily reschedule or cancel when needed."
        imagePosition="left"
        bgColor="bg-gradient-to-br from-gray-50 to-white"
        features={[
          {
            icon: Calendar,
            title: 'Upcoming Bookings',
            description: 'View all scheduled test drives and service appointments'
          },
          {
            icon: Check,
            title: 'Easy Rescheduling',
            description: 'Modify bookings with real-time availability checking'
          },
          {
            icon: Award,
            title: 'Booking History',
            description: 'Track past appointments and service records'
          },
          {
            icon: Users,
            title: 'Quick Rebooking',
            description: 'One-tap rebooking for favorite services and vehicles'
          }
        ]}
      />

      {/* Emergency SOS */}
      <FullWidthImageContent
        image="/images/projects/cherymobileapp/mockup/sos.png"
        imageAlt="Emergency SOS Feature"
        badge="SAFETY FIRST"
        badgeIcon={Award}
        title="24/7 Emergency SOS"
        description="One-tap emergency assistance feature connecting you to roadside support, emergency services, and Chery service centers. Your safety is our priority."
        imagePosition="right"
        bgColor="bg-white"
        features={[
          {
            icon: Users,
            title: 'Instant Connect',
            description: 'One-tap connection to emergency services and roadside assistance'
          },
          {
            icon: Star,
            title: 'Location Sharing',
            description: 'Automatic GPS location sharing with emergency responders'
          },
          {
            icon: Calendar,
            title: '24/7 Availability',
            description: 'Round-the-clock support whenever you need help'
          },
          {
            icon: Check,
            title: 'Service Network',
            description: 'Access to nationwide network of service centers and towing'
          }
        ]}
      />

      {/* Events & Community */}
      <FullWidthImageContent
        image="/images/projects/cherymobileapp/mockup/Chery-events.png"
        imageAlt="Chery Events & Community"
        badge="COMMUNITY"
        badgeIcon={Users}
        title="Events & Owner Community"
        description="Stay connected with the Chery community. Discover exclusive events, meetups, and special promotions. Connect with fellow Chery owners and share your experiences."
        imagePosition="left"
        bgColor="bg-gradient-to-br from-gray-50 to-white"
        features={[
          {
            icon: Calendar,
            title: 'Exclusive Events',
            description: 'Access to launch events, test drive days, and owner meetups'
          },
          {
            icon: Star,
            title: 'Special Offers',
            description: 'Early access to promotions and exclusive deals for app users'
          },
          {
            icon: Users,
            title: 'Owner Network',
            description: 'Connect with other Chery owners and share experiences'
          },
          {
            icon: Award,
            title: 'Rewards Program',
            description: 'Earn points for app usage and redeem for services or products'
          }
        ]}
      />

      {/* Home Service */}
      <FullWidthImageContent
        image="/images/projects/cherymobileapp/mockup/chery-home-service.png"
        imageAlt="Home Service Booking"
        badge="CONVENIENCE"
        badgeIcon={Car}
        title="Home Service Booking"
        description="Book service appointments at your doorstep. Professional technicians will come to your location for routine maintenance, inspections, and minor repairs."
        imagePosition="right"
        bgColor="bg-white"
        features={[
          {
            icon: Calendar,
            title: 'Flexible Scheduling',
            description: 'Choose your preferred date and time for home service'
          },
          {
            icon: Check,
            title: 'Certified Technicians',
            description: 'Trained and certified Chery service professionals'
          },
          {
            icon: Package,
            title: 'Genuine Parts',
            description: 'Only authentic Chery parts used for all repairs'
          },
          {
            icon: DollarSign,
            title: 'Transparent Pricing',
            description: 'Clear pricing with no hidden charges or surprises'
          }
        ]}
      />

      {/* Fuel Stations */}
      <FullWidthImageContent
        image="/images/projects/cherymobileapp/mockup/nearest-fuel-stations.png"
        imageAlt="Nearest Fuel Stations Finder"
        badge="NAVIGATION"
        badgeIcon={Car}
        title="Find Nearest Fuel Stations"
        description="Never run out of fuel. Find the nearest gas stations with real-time navigation, pricing information, and amenities available at each location."
        imagePosition="left"
        bgColor="bg-gradient-to-br from-gray-50 to-white"
        features={[
          {
            icon: Star,
            title: 'Real-time Navigation',
            description: 'Turn-by-turn directions to the nearest fuel stations'
          },
          {
            icon: DollarSign,
            title: 'Price Comparison',
            description: 'Compare fuel prices across different stations'
          },
          {
            icon: Check,
            title: 'Amenities Info',
            description: 'View available services like car wash, ATM, and shops'
          },
          {
            icon: Users,
            title: 'User Reviews',
            description: 'Read ratings and reviews from other drivers'
          }
        ]}
      />

      {/* Dual Platform Showcase */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-lime via-accent-lime to-accent-lime/70 p-12">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-extrabold mb-3">Complete Automotive Platform</h3>
              <p className="text-lg text-black/80 font-medium">Mobile App + E-commerce + Booking System</p>
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-black/10">
              <Image
                src="/images/projects/cherymobileapp/mockup/chery-mobile-app-multi-screens.png"
                alt="Complete Platform - Chery Bangladesh Mobile App"
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
                        src={`/images/projects/cherymobileapp/${screenshots[currentScreenshot].image}`}
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
                Our comprehensive mobile app transforms the car buying journey. From browsing vehicles to booking services, everything is seamlessly integrated in one powerful platform.
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
            The Chery Bangladesh app is built using <span className="font-bold text-black">React Native</span> and{' '}
            <span className="font-bold text-black">Expo</span> for cross-platform mobile development, ensuring a 
            seamless experience on both iOS and Android devices. We leverage{' '}
            <span className="font-bold text-black">Supabase</span> for real-time database and secure authentication. 
            The application is written in <span className="font-bold text-black">TypeScript</span> for type safety 
            and better code quality. The e-commerce integration features secure payment processing and real-time 
            inventory management, delivering a comprehensive automotive platform experience.
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
            { icon: Users, value: '5K+', label: 'App Downloads' },
            { icon: Calendar, value: '500+', label: 'Test Drives Booked' },
            { icon: Wrench, value: '1.2K+', label: 'Service Bookings' },
            { icon: ShoppingCart, value: '800+', label: 'Orders Processed' }
          ]}
        />

        <div className="mt-12">
          <ImageShowcaseGrid
            items={[
              {
                title: 'Vehicle Showroom',
                image: '/images/projects/cherymobileapp/22-products-vehicle-browse.jpg',
                alt: 'Vehicle Showroom',
                caption: 'Interactive vehicle catalog with 360° views and detailed specifications.'
              },
              {
                title: 'E-commerce Integration',
                image: '/images/projects/cherymobileapp/28-shop-accessories.jpg',
                alt: 'Parts & Accessories Store',
                caption: 'Complete online store with 500+ genuine Chery parts and accessories.'
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
                'Browse vehicles with 360° views from anywhere',
                'Book test drives and services in seconds',
                'Shop genuine parts with doorstep delivery',
                'Track all bookings and orders in one place',
                'Access exclusive offers and promotions',
                'Seamless payment with multiple options'
              ]
            },
            {
              title: 'For Business',
              benefits: [
                '150% increase in parts & accessories sales',
                '200% higher customer engagement rates',
                '80% faster service booking process',
                'Real-time inventory and booking management',
                'Reduced operational costs with automation',
                'Enhanced brand loyalty and retention'
              ]
            }
          ]}
        />

        <div className="mt-12">
          <KeyAchievementsCard
            achievements={[
              { value: '95%', label: 'Booking Success Rate' },
              { value: '4.8/5', label: 'Customer Rating' },
              { value: '3.5K+', label: 'Active Users' }
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
