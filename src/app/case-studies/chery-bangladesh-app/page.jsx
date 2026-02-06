'use client';

import CaseStudyTemplate, {
    BusinessImpactCards,
    CaseStudySection,
    CTASection,
    ImageContentGrid,
    ImageShowcaseGrid,
    KeyAchievementsCard,
    MetricsGrid,
    OverviewSection
} from '@/app/components/case-studies/CaseStudyTemplate';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Calendar,
    Car,
    Check,
    Code,
    CreditCard,
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
        image="/images/projects/cherymobileapp/02-home-screen.jpg"
        imageAlt="Chery Bangladesh App Overview"
      />

      {/* Challenge Section */}
      <CaseStudySection
        id="challenge"
        label="THE CHALLENGE"
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

      {/* Key Features Section */}
      <CaseStudySection
        id="features"
        label="KEY FEATURES"
        icon={Star}
        title="Complete Automotive Platform"
        description="Six core modules providing end-to-end automotive experience from vehicle discovery to purchase and service."
        bgColor="bg-white"
        centered={true}
      >
        {/* Vehicle Showroom */}
        <ImageContentGrid
          image="/images/projects/cherymobileapp/22-products-vehicle-browse.jpg"
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
          image="/images/projects/cherymobileapp/11-service-booking-vehicle.jpg"
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

      {/* Tech Stack Section */}
      <CaseStudySection
        id="tech-stack"
        label="TECHNOLOGY"
        icon={Code}
        title="Modern Tech Stack"
        description="Built with cutting-edge technologies ensuring scalability, performance, and maintainability."
        bgColor="bg-white"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { name: "React Native", desc: "Cross-platform mobile framework", color: "from-blue-600 to-cyan-600" },
            { name: "Expo", desc: "Development platform & tools", color: "from-purple-600 to-pink-600" },
            { name: "Supabase", desc: "Backend & real-time database", color: "from-green-600 to-emerald-600" },
            { name: "TypeScript", desc: "Type-safe development", color: "from-blue-700 to-blue-500" }
          ].map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl border-2 border-gray-200 hover:border-accent-lime transition-all bg-white group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tech.color} mb-4 group-hover:scale-110 transition-transform`}></div>
              <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
              <p className="text-gray-600 text-sm">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </CaseStudySection>

      {/* Metrics Grid */}
      <MetricsGrid
        metrics={[
          { label: "App Downloads", value: "5,000+", icon: Users },
          { label: "Test Drives Booked", value: "500+", icon: Calendar },
          { label: "Service Bookings", value: "1,200+", icon: Wrench },
          { label: "Orders Processed", value: "800+", icon: ShoppingCart },
          { label: "Active Users", value: "3,500+", icon: TrendingUp },
          { label: "Customer Rating", value: "4.8/5", icon: Star }
        ]}
      />

      {/* Key Achievements */}
      <KeyAchievementsCard
        achievements={[
          "First comprehensive automotive app in Bangladesh",
          "Real-time booking system with 95% success rate",
          "360° vehicle viewer with native performance",
          "Complete e-commerce integration with 800+ orders",
          "Offline-first architecture for reliability",
          "4.8/5 customer satisfaction rating"
        ]}
      />

      {/* Business Impact */}
      <CaseStudySection
        id="impact"
        label="BUSINESS IMPACT"
        icon={TrendingUp}
        title="Transforming Customer Experience"
        description="Delivering measurable results across revenue, engagement, and operational efficiency."
        bgColor="bg-white"
        centered={true}
      >
        <BusinessImpactCards
          cards={[
            {
              title: 'For Customers',
              benefits: [
                'Seamless vehicle browsing with 360° views',
                'Convenient test drive booking from mobile',
                'Easy service appointment scheduling',
                'Shop genuine parts with doorstep delivery',
                'Track all bookings and orders in one place',
                'Access exclusive offers and promotions'
              ]
            },
            {
              title: 'For Business',
              benefits: [
                '150% increase in parts & accessories sales',
                '200% higher customer engagement rates',
                '80% faster service booking process',
                'Real-time inventory and booking management',
                'Reduced operational costs with digital workflows',
                'Enhanced brand loyalty and customer retention'
              ]
            }
          ]}
        />
      </CaseStudySection>

      {/* Mobile App Showcase with Slider */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Mobile App Screenshots Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl border-2 border-gray-100">
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

            {/* Right - Feature Description */}
            <div className="space-y-6">
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

      {/* Full Width Screenshots */}
      <CaseStudySection
        id="screenshots"
        label="APP SCREENS"
        icon={Star}
        title="Comprehensive User Experience"
        description="Every screen designed for intuitive navigation and delightful interactions."
        bgColor="bg-gray-50"
        centered={true}
      >
        <ImageShowcaseGrid
          items={[
            {
              title: 'Home Dashboard',
              image: '/images/projects/cherymobileapp/02-home-screen.jpg',
              alt: 'Home Dashboard',
              caption: 'Quick access to all features including services, showroom, e-commerce, and support with personalized recommendations.'
            },
            {
              title: 'Vehicle Browser',
              image: '/images/projects/cherymobileapp/22-products-vehicle-browse.jpg',
              alt: 'Vehicle Browser',
              caption: 'Browse complete vehicle lineup with filters, 360° views, and detailed specifications for informed decisions.'
            },
            {
              title: 'Test Drive Booking',
              image: '/images/projects/cherymobileapp/17-testdrive-vehicle-selection.jpg',
              alt: 'Test Drive Booking',
              caption: 'Multi-step booking flow with vehicle selection, dealership choice, and calendar-based scheduling.'
            },
            {
              title: 'Service Booking',
              image: '/images/projects/cherymobileapp/11-service-booking-vehicle.jpg',
              alt: 'Service Booking',
              caption: 'Schedule service appointments with vehicle selection from garage and multiple service type options.'
            },
            {
              title: 'Parts Shop',
              image: '/images/projects/cherymobileapp/28-shop-accessories.jpg',
              alt: 'Parts Shop',
              caption: 'Browse and shop for genuine Chery parts and accessories with detailed product information and stock status.'
            },
            {
              title: 'Shopping Cart',
              image: '/images/projects/cherymobileapp/30-shop-cart.jpg',
              alt: 'Shopping Cart',
              caption: 'Manage cart items with real-time stock checking, discount codes, and free shipping progress tracker.'
            }
          ]}
        />
      </CaseStudySection>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Build Your Mobile Platform?"
        description="Let's create a powerful mobile experience for your business."
      />
    </CaseStudyTemplate>
  );
}
