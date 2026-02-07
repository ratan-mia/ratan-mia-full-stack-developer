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
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowLeft,
    BarChart,
    Check,
    CheckCircle,
    ChevronLeft, ChevronRight,
    Code,
    Gift,
    MapPin,
    ShoppingCart,
    Smartphone,
    Star,
    Trophy,
    Wallet,
    Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Project Data
const projectData = {
  company: 'ELF Bangladesh',
  category: 'Mobile App / E-Commerce / Automotive',
  timeline: '6 Months (Ongoing)',
  services: [
    'UI/UX Design',
    'Mobile App Development',
    'Backend Development',
    'Payment Integration',
    'Gamification System',
    'Quality Assurance'
  ]
};

// Hero Section Component
function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    { src: '/images/projects/elf-mobile-store/01-splash-screen.jpg', alt: 'Splash Screen' },
    { src: '/images/projects/elf-mobile-store/02-products-listing.jpg', alt: 'Products Listing' },
    { src: '/images/projects/elf-mobile-store/03-product-detail-transmission-fluid.jpg', alt: 'Product Detail' },
    { src: '/images/projects/elf-mobile-store/04-qr-scan.jpg', alt: 'QR Scanner' },
    { src: '/images/projects/elf-mobile-store/07-gamification-spin-wheel.jpg', alt: 'Spin Wheel Game' },
    { src: '/images/projects/elf-mobile-store/11-rewards-catalog.jpg', alt: 'Rewards Catalog' },
    { src: '/images/projects/elf-mobile-store/12-elf-workshops.jpg', alt: 'Workshop Finder' },
    { src: '/images/projects/elf-mobile-store/13-roadside-assistance.jpg', alt: 'Roadside Assistance' },
    { src: '/images/projects/elf-mobile-store/18-wishlist.jpg', alt: 'Wishlist' },
    { src: '/images/projects/elf-mobile-store/21-my-wallet.jpg', alt: 'Digital Wallet' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-accent-lime flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
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
              MOBILE APP DEVELOPMENT
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              ELF Bangladesh
              <span className="block text-black/70">Automotive Mobile App</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-black/80 mb-8 leading-relaxed font-medium">
              A comprehensive automotive e-commerce platform with gamification, loyalty rewards, and service bookings for vehicle owners across Bangladesh.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-black/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <Smartphone className="w-5 h-5" />
                <span className="font-bold">iOS & Android</span>
              </div>
              <div className="flex items-center gap-3 bg-black/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <ShoppingCart className="w-5 h-5" />
                <span className="font-bold">E-Commerce</span>
              </div>
              <div className="flex items-center gap-3 bg-black/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <Trophy className="w-5 h-5" />
                <span className="font-bold">Gamification</span>
              </div>
            </div>
          </motion.div>

          {/* Mobile Mockup with Image Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative w-[280px] h-[560px]">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl p-3">
                <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
                  
                  {/* Image Carousel */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={heroImages[currentImageIndex].src}
                        alt={heroImages[currentImageIndex].alt}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Navigation arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-all z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          index === currentImageIndex 
                            ? 'bg-accent-lime w-4' 
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ELFBangladeshCaseStudy() {
  return (
    <CaseStudyTemplate
      project={projectData}
      heroSection={<HeroSection />}
    >
      {/* Overview Section */}
      <OverviewSection
        title="About the Project"
        paragraphs={[
          "ELF Bangladesh needed to transform their traditional automotive product sales into an engaging digital ecosystem. The challenge was to create a unified mobile platform that seamlessly integrates e-commerce, customer loyalty, service bookings, and emergency assistance while maintaining a user-friendly interface for diverse user segments.",
          "The solution is a feature-rich mobile application built with React Native and Expo 54, offering over 60 screens covering everything from browsing automotive products to booking workshop services and earning loyalty rewards through gamification. The app serves vehicle owners across Bangladesh with multi-language support and integrated payment gateways."
        ]}
        image="/images/projects/elf-mobile-store/app-overview.jpg"
        imageAlt="ELF Bangladesh App Overview"
      />

      {/* Challenge Section */}
      <CaseStudySection
        id="challenge"
        label="REQUIREMENTS & CHALLENGES"
        icon={Zap}
        title="Complex Requirements"
        description={
          <>
            Building a comprehensive automotive platform required solving several technical challenges including{' '}
            <span className="font-bold text-black">legacy system integration</span> while maintaining existing backend 
            compatibility. We implemented <span className="font-bold text-black">complex state management</span> across 
            60+ screens with offline-first architecture. The platform features{' '}
            <span className="font-bold text-black">multi-language support</span> with complete Bengali and English 
            translation coverage. Additionally, we developed a <span className="font-bold text-black">gamification system</span>{' '}
            with QR scanning, loyalty points, and reward redemption integrated with the e-commerce platform.
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
        description="We built a comprehensive mobile platform combining e-commerce, gamification, and service bookings with modern technology stack."
        bgColor="bg-white"
        centered={true}
      >
        {/* E-Commerce Platform */}
        <ImageContentGrid
          image="/images/projects/elf-mobile-store/02-products-listing.jpg"
          imageAlt="E-Commerce Platform - Product Browsing"
          badge="E-COMMERCE"
          badgeIcon={ShoppingCart}
          title="Product Catalog & Shopping"
          description="Full-featured e-commerce platform with product catalog, cart management, wishlist, and secure checkout process with multiple payment options."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Product Browsing',
              description: 'Advanced filtering and search with real-time inventory'
            },
            {
              icon: Check,
              title: 'Cart & Wishlist',
              description: 'Persistent shopping cart with offline support'
            },
            {
              icon: Check,
              title: 'Secure Checkout',
              description: 'Multiple payment gateways with order tracking'
            }
          ]}
        />

        {/* Gamification System */}
        <ImageContentGrid
          image="/images/projects/elf-mobile-store/07-gamification-spin-wheel.jpg"
          imageAlt="Gamification System - Loyalty Rewards"
          badge="GAMIFICATION"
          badgeIcon={Trophy}
          title="Loyalty & Rewards Program"
          description="Engaging gamification system with QR code scanning, spin-the-wheel games, loyalty points earning, and reward redemption catalog."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: 'QR Code Scanning',
              description: 'Scan products to earn points and unlock rewards'
            },
            {
              icon: Check,
              title: 'Interactive Games',
              description: 'Spin-the-wheel and other games for bonus points'
            },
            {
              icon: Check,
              title: 'Rewards Catalog',
              description: 'Redeem points for products and services'
            }
          ]}
        />

        {/* Service Bookings */}
        <ImageContentGrid
          image="/images/projects/elf-mobile-store/12-elf-workshops.jpg"
          imageAlt="Workshop Finder - Service Bookings"
          badge="SERVICES"
          badgeIcon={MapPin}
          title="Workshop & Service Bookings"
          description="Integrated workshop finder with map view, service booking system, and roadside assistance for vehicle emergencies."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Workshop Finder',
              description: 'Find authorized workshops with map integration'
            },
            {
              icon: Check,
              title: 'Service Booking',
              description: 'Book maintenance services with real-time availability'
            },
            {
              icon: Check,
              title: 'Emergency Assistance',
              description: 'Request roadside assistance with location tracking'
            }
          ]}
        />
      </CaseStudySection>

      {/* Digital Wallet */}
      <FullWidthImageContent
        image="/images/projects/elf-mobile-store/21-my-wallet.jpg"
        imageAlt="Digital Wallet - Points Management"
        badge="DIGITAL WALLET"
        badgeIcon={Wallet}
        title="Loyalty Points & Wallet"
        description="Comprehensive digital wallet system for managing loyalty points, viewing transaction history, tracking reward redemptions, and monitoring point balance across all activities."
        imagePosition="left"
        bgColor="bg-white"
        features={[
          {
            icon: Wallet,
            title: 'Points Balance',
            description: 'Real-time points balance with earning history'
          },
          {
            icon: Gift,
            title: 'Reward Tracking',
            description: 'Track redeemed rewards and available offers'
          },
          {
            icon: BarChart,
            title: 'Activity History',
            description: 'Complete history of points earned and spent'
          },
          {
            icon: Star,
            title: 'Tier Benefits',
            description: 'Unlock exclusive benefits based on loyalty tier'
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
            <span className="font-bold text-black">Expo 54</span> for cross-platform mobile development. The backend 
            is powered by <span className="font-bold text-black">Supabase PostgreSQL</span> for real-time database 
            and authentication. We utilize <span className="font-bold text-black">Redux Toolkit</span> for complex 
            state management with AsyncStorage persistence. The app features{' '}
            <span className="font-bold text-black">i18next</span> for multi-language support and integrates{' '}
            <span className="font-bold text-black">multiple payment gateways</span> for secure transactions. Map 
            integration via <span className="font-bold text-black">Google Maps API</span> enables workshop finder 
            and location services.
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
            { icon: ShoppingCart, value: '60+', label: 'App Screens' },
            { icon: Trophy, value: '10K+', label: 'Loyalty Points Earned' },
            { icon: MapPin, value: '100+', label: 'Workshops Registered' },
            { icon: Star, value: '4.8', label: 'App Store Rating' }
          ]}
        />

        <div className="mt-12">
          <ImageShowcaseGrid
            items={[
              {
                title: 'E-Commerce Platform',
                image: '/images/projects/elf-mobile-store/03-product-detail-transmission-fluid.jpg',
                alt: 'Product Detail Screen',
                caption: 'Comprehensive product information with ratings, reviews, and secure purchase options.'
              },
              {
                title: 'Gamification System',
                image: '/images/projects/elf-mobile-store/11-rewards-catalog.jpg',
                alt: 'Rewards Catalog',
                caption: 'Interactive rewards catalog where users can redeem their loyalty points for products and services.'
              }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* Business Impact Section */}
      <CaseStudySection
        id="impact"
        label="🚀 BUSINESS IMPACT"
        title="Transforming Automotive Retail"
        bgColor="bg-gray-50"
        centered={true}
      >
        <BusinessImpactCards
          cards={[
            {
              title: 'For Vehicle Owners',
              benefits: [
                'Easy online shopping for automotive products',
                'Earn loyalty points on every purchase',
                'Find and book authorized workshops nearby',
                'Access emergency roadside assistance',
                'Multi-language support for local users'
              ]
            },
            {
              title: 'For ELF Bangladesh',
              benefits: [
                'Digital transformation of traditional retail',
                'Increased customer engagement through gamification',
                'Direct channel for product distribution',
                'Valuable customer data and insights',
                'Stronger brand presence in Bangladesh market'
              ]
            }
          ]}
        />

        <div className="mt-12">
          <KeyAchievementsCard
            achievements={[
              { value: '3x', label: 'Customer Engagement' },
              { value: '50%', label: 'Increase in Loyalty Signups' },
              { value: '100+', label: 'Partner Workshops' }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* CTA Section */}
      <CTASection
        title="Need a Mobile App Platform?"
        subtitle="Let's build a custom mobile solution that transforms your business."
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
