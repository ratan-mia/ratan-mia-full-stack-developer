'use client';

import CaseStudyTemplate, { 
  CaseStudySection, 
  FeatureGrid, 
  TechStack, 
  MetricsGrid 
} from '@/app/components/case-studies/CaseStudyTemplate';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, AlertCircle, Lightbulb, CheckCircle, Code, Award,
  ShoppingCart, Trophy, Zap, MapPin, Wallet, Smartphone,
  ChevronLeft, ChevronRight, ArrowLeft
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Project Data
const projectData = {
  company: 'ELF Bangladesh',
  category: 'Mobile App / E-Commerce / Automotive',
  liveUrl: null,
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

// Navigation Items
const navItems = [
  { id: 'overview', label: 'Overview', icon: Star },
  { id: 'challenge', label: 'The Challenge', icon: AlertCircle },
  { id: 'solution', label: 'Our Solution', icon: Lightbulb },
  { id: 'features', label: 'Key Features', icon: CheckCircle },
  { id: 'tech-stack', label: 'Tech Stack', icon: Code },
  { id: 'screenshots', label: 'Screenshots', icon: Smartphone },
  { id: 'results', label: 'Results & Impact', icon: Award }
];

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
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2 bg-black/10 border-2 border-black/20 text-black rounded-full text-sm font-bold mb-6 uppercase tracking-wider"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Smartphone className="w-4 h-4" />
              Mobile App Design & Development
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-[-0.04em] text-black">
              ELF Bangladesh Mobile App
            </h1>

            <p className="text-lg md:text-xl text-black/80 mb-8 font-medium leading-[1.6]">
              Enterprise-grade automotive e-commerce ecosystem combining loyalty rewards, gamification, and service bookings in one powerful platform.
            </p>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {['React Native', 'Expo 54', 'TypeScript', 'Supabase', 'Redux'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-black/10 border border-black/20 text-black rounded-lg text-xs font-bold hover:bg-black hover:text-accent-lime transition-all">
                  {tech}
                </span>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '60+', label: 'Screens' },
                { value: '500+', label: 'Products' },
                { value: '25+', label: 'DB Tables' },
                { value: '95%', label: 'Complete' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <div className="text-3xl lg:text-4xl font-black text-black mb-1 tracking-[-0.02em]">{stat.value}</div>
                  <div className="text-xs text-black/70 font-semibold uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Mockup with Carousel */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-black/10 rounded-[3rem] blur-3xl" />
              
              {/* Phone mockup */}
              <div className="relative bg-gray-900 p-3 rounded-[3rem] border-4 border-black/30 shadow-2xl">
                {/* Phone screen with carousel */}
                <div className="relative w-[280px] h-[560px] bg-black rounded-[2.5rem] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={heroImages[currentImageIndex].src}
                        alt={heroImages[currentImageIndex].alt}
                        fill
                        className="object-cover"
                        priority
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
      navItems={navItems}
      heroSection={<HeroSection />}
    >
      {/* Overview Section */}
      <CaseStudySection
        id="overview"
        label="PROJECT OVERVIEW"
        icon={Star}
        title="Transforming Automotive Retail"
        description="ELF Bangladesh needed to transform their traditional automotive product sales into an engaging digital ecosystem."
        bgColor="bg-gray-50"
      >
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: ShoppingCart, title: 'Industry', value: 'Automotive Products & Services' },
            { icon: Zap, title: 'Duration', value: '6 Months (Ongoing)' },
            { icon: Smartphone, title: 'Platform', value: 'iOS & Android' }
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
            The challenge was to create a unified mobile platform that seamlessly integrates e-commerce, customer loyalty, service bookings, and emergency assistance while maintaining a user-friendly interface for diverse user segments.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The solution is a feature-rich mobile application built with <strong>React Native and Expo 54</strong>, offering over <strong>60 screens</strong> covering everything from browsing automotive products to booking workshop services and earning loyalty rewards through gamification. The app serves vehicle owners across Bangladesh with multi-language support and integrated payment gateways.
          </p>
        </div>
      </CaseStudySection>

      {/* Challenge Section */}
      <CaseStudySection
        id="challenge"
        label="THE CHALLENGE"
        icon={AlertCircle}
        title="Complex Problems Require Smart Solutions"
        description="Overcoming technical and business challenges to deliver a seamless experience"
        bgColor="bg-white"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              challenge: "Legacy System Integration",
              problem: "ELF Bangladesh had an existing backend system that needed to be maintained while migrating to modern architecture.",
              solution: "Implemented dual-service architecture allowing gradual migration from legacy backend to modern Supabase while maintaining backward compatibility.",
              impact: "Zero downtime during transition with incremental feature rollout"
            },
            {
              challenge: "Complex State Management",
              problem: "Managing cart, wishlist, user preferences, and offline data across 60+ screens with consistent user experience.",
              solution: "Utilized Redux Toolkit with AsyncStorage persistence, ensuring data consistency across app restarts and offline scenarios.",
              impact: "Seamless UX with no data loss and offline-first architecture"
            },
            {
              challenge: "Multi-Language Support",
              problem: "Need to serve diverse user base with complete Bengali and English language support throughout the entire app.",
              solution: "Integrated i18next with expo-localization for automatic language detection and complete translation coverage.",
              impact: "Expanded user base and improved accessibility for local users"
            },
            {
              challenge: "Real-time Booking Conflicts",
              problem: "Multiple users attempting to book the same workshop time slot simultaneously causing double-bookings.",
              solution: "Implemented Supabase real-time subscriptions with optimistic locking to prevent appointment conflicts.",
              impact: "100% booking accuracy and enhanced user trust"
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200 hover:border-accent-lime transition-all">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-accent-lime flex items-center justify-center flex-shrink-0">
                  <span className="text-black font-black text-sm">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-black">{item.challenge}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                      <span className="text-xs">❌</span>
                    </div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500">Problem</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed pl-7">{item.problem}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-xs">✅</span>
                    </div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500">Solution</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed pl-7">{item.solution}</p>
                </div>
                
                <div className="bg-accent-lime/10 border-2 border-accent-lime/30 p-4 rounded-xl mt-4">
                  <p className="text-sm font-bold text-black">
                    <span className="text-accent-lime">Impact:</span> {item.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Features Section */}
      <CaseStudySection
        id="features"
        label="KEY FEATURES"
        icon={CheckCircle}
        title="Powerful Features for Modern Automotive"
        description="A comprehensive suite designed to create an unmatched shopping and service experience"
        bgColor="bg-gray-50"
      >
        <FeatureGrid features={[
          {
            icon: ShoppingCart,
            title: "E-Commerce Marketplace",
            description: "Browse 500+ automotive products including engine oils, lubricants, and accessories with advanced filtering and smart search."
          },
          {
            icon: Trophy,
            title: "Loyalty & Rewards",
            description: "Earn coins with every purchase, redeem rewards from catalog, and enjoy exclusive benefits for loyal customers."
          },
          {
            icon: Zap,
            title: "Gamification System",
            description: "Play interactive games like spin wheel, flip cards to win prizes, boost engagement, and earn rewards."
          },
          {
            icon: MapPin,
            title: "Service Center Booking",
            description: "Find nearby workshops, view time slots, book maintenance appointments, and manage vehicle service history."
          },
          {
            icon: Wallet,
            title: "Digital Wallet",
            description: "Integrated wallet for storing coins, processing payments with bKash, Nagad, and SSL Commerz support."
          },
          {
            icon: Star,
            title: "Emergency Assistance",
            description: "24/7 roadside assistance with GPS location sharing, real-time tracking, and immediate emergency response."
          }
        ]} />
      </CaseStudySection>

      {/* Tech Stack Section */}
      <CaseStudySection
        id="tech-stack"
        label="TECHNOLOGY STACK"
        icon={Code}
        title="Built with Modern Technology"
        bgColor="bg-white"
      >
        <TechStack technologies={{
          'Frontend': ['React Native 0.81.5', 'Expo 54', 'TypeScript 5.9', 'React 19.1.0'],
          'Backend': ['Supabase', 'PostgreSQL', 'Row-Level Security', 'Axios 1.6'],
          'UI/UX': ['React Native Paper 5.14', 'React Navigation 7.1', 'Lucide Icons', 'Reanimated'],
          'State Management': ['Redux Toolkit 2.0', 'React Redux 9.1', 'AsyncStorage', 'Redux Persist'],
          'Payments': ['bKash', 'Nagad', 'SSL Commerz', 'Cash on Delivery'],
          'Native Features': ['expo-camera', 'expo-location', 'expo-notifications', 'expo-print'],
          'i18n': ['i18next 25.7', 'react-i18next 16.5', 'expo-localization'],
          'Dev Tools': ['ESLint', 'Babel', 'Metro Bundler', 'TypeScript']
        }} />
      </CaseStudySection>

      {/* Screenshots Section */}
      <CaseStudySection
        id="screenshots"
        label="APP SCREENSHOTS"
        icon={Smartphone}
        title="Visual Design Showcase"
        description="Explore the app's interface and user experience through key screens"
        bgColor="bg-gray-50"
      >
        {/* E-Commerce Experience */}
        <div className="mb-20">
          <h3 className="text-3xl font-black mb-10 text-center">E-Commerce Experience</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: '02-products-listing.jpg', title: 'Products Listing', desc: 'Browse 500+ products' },
              { img: '03-product-detail-transmission-fluid.jpg', title: 'Product Detail', desc: 'Complete specifications' },
              { img: '18-wishlist.jpg', title: 'Wishlist', desc: 'Save favorites' }
            ].map((screen, index) => (
              <div key={index} className="group">
                <div className="relative h-[550px] mb-6 rounded-2xl overflow-hidden border-4 border-gray-200 group-hover:border-accent-lime transition-all duration-300 bg-black">
                  <Image
                    src={`/images/projects/elf-mobile-store/${screen.img}`}
                    alt={screen.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="font-black text-xl mb-2">{screen.title}</h4>
                <p className="text-gray-600">{screen.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gamification & Rewards */}
        <div className="mb-20">
          <h3 className="text-3xl font-black mb-10 text-center">Gamification & Loyalty</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: '07-gamification-spin-wheel.jpg', title: 'Spin Wheel', desc: 'Win prizes & earn coins' },
              { img: '11-rewards-catalog.jpg', title: 'Rewards Catalog', desc: 'Redeem exclusive rewards' },
              { img: '19-rewards-balance.jpg', title: 'Rewards Balance', desc: 'Track your earnings' }
            ].map((screen, index) => (
              <div key={index} className="group">
                <div className="relative h-[550px] mb-6 rounded-2xl overflow-hidden border-4 border-gray-200 group-hover:border-accent-lime transition-all duration-300 bg-black">
                  <Image
                    src={`/images/projects/elf-mobile-store/${screen.img}`}
                    alt={screen.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="font-black text-xl mb-2">{screen.title}</h4>
                <p className="text-gray-600">{screen.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services & Assistance */}
        <div>
          <h3 className="text-3xl font-black mb-10 text-center">Services & Assistance</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: '12-elf-workshops.jpg', title: 'Workshop Finder', desc: 'Locate service centers' },
              { img: '13-roadside-assistance.jpg', title: 'Roadside Help', desc: '24/7 emergency support' },
              { img: '22-my-appointments.jpg', title: 'Appointments', desc: 'Manage bookings' }
            ].map((screen, index) => (
              <div key={index} className="group">
                <div className="relative h-[550px] mb-6 rounded-2xl overflow-hidden border-4 border-gray-200 group-hover:border-accent-lime transition-all duration-300 bg-black">
                  <Image
                    src={`/images/projects/elf-mobile-store/${screen.img}`}
                    alt={screen.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="font-black text-xl mb-2">{screen.title}</h4>
                <p className="text-gray-600">{screen.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </CaseStudySection>

      {/* Results Section */}
      <CaseStudySection
        id="results"
        label="RESULTS & IMPACT"
        icon={Award}
        title="Measurable Success"
        description="The impact of our solution on ELF Bangladesh's business"
        bgColor="bg-white"
      >
        <MetricsGrid metrics={[
          { value: '60+', label: 'App Screens', sublabel: 'Comprehensive coverage' },
          { value: '500+', label: 'Products', sublabel: 'Complete catalog' },
          { value: '25+', label: 'Database Tables', sublabel: 'Robust infrastructure' },
          { value: '95%', label: 'Project Complete', sublabel: 'Ongoing development' }
        ]} />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-accent-lime/10 p-8 rounded-2xl border-2 border-accent-lime/30">
            <h3 className="text-2xl font-black mb-4">Business Impact</h3>
            <ul className="space-y-3">
              {[
                'Digital transformation of traditional automotive retail',
                'Enhanced customer engagement through gamification',
                'Streamlined service booking process',
                'Multi-channel payment integration'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-lime flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200">
            <h3 className="text-2xl font-black mb-4">Technical Achievements</h3>
            <ul className="space-y-3">
              {[
                'Scalable React Native architecture',
                'Real-time data synchronization',
                'Offline-first data persistence',
                'Multi-language support (EN/BN)'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CaseStudySection>
    </CaseStudyTemplate>
  );
}
