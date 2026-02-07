'use client';
import Contact from '@/app/components/home/Contact';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Calendar, Check, CheckCircle, Code, Monitor, Smartphone, Star, TrendingUp, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Simplified case studies listing - Each case study has its own unique page
const caseStudies = [
  {
    id: 1,
    title: "AutoTrader BD",
    subtitle: "B2B Car Trading Platform",
    client: "AutoTrader Bangladesh",
    category: "B2B Trading Platform",
    year: "2025",
    duration: "6 months",
    platform: "Web Application",
    technologies: ["Next.js 14", "Supabase", "Prisma ORM", "JWT Auth", "TypeScript"],
    heroImage: "/images/projects/auto-trader/mockup/web-home.png",
    screenshots: [
      "/images/projects/auto-trader/mockup/web-listing-page.png",
      "/images/projects/auto-trader/mockup/admin-dashboard.png",
      "/images/projects/auto-trader/mockup/user-dashboard.png",
      "/images/projects/auto-trader/mockup/web-home.png",
    ],
    challenge: "Bangladesh's automotive B2B market lacked a professional digital platform for dealers, importers, and buyers. Manual processes, lack of transparency, and no standardized system for vehicle trading created inefficiencies.",
    solution: "Developed a comprehensive B2B trading platform with advanced search, role-based access control, automated listing management, purchase application processing, and real-time analytics for the automotive industry.",
    features: [
      "JWT authentication with role-based access (Buyer/Seller/Admin)",
      "Advanced vehicle search with 15+ filter criteria",
      "Automated listing expiry and renewal system",
      "Purchase application workflow with admin approval",
      "Comprehensive admin dashboard for platform management",
      "User dashboard with favorites, listings, and analytics",
      "Real-time notifications and activity tracking",
      "Multi-tenant user management system"
    ],
    results: [
      { label: "Active Users", value: "24+", icon: Users },
      { label: "Vehicle Listings", value: "58+", icon: TrendingUp },
      { label: "Applications", value: "120+", icon: Award },
      { label: "Platform Score", value: "4.7/5", icon: Smartphone }
    ],
    impact: "Revolutionized B2B car trading in Bangladesh with professional digital infrastructure, reducing transaction time by 60% and increasing market transparency.",
    slug: "auto-trader",
    bgColor: "bg-white",
    accentColor: "accent-lime"
  },
  {
    id: 2,
    title: "Japan Parts Bangladesh",
    subtitle: "Shopify Headless Commerce Platform",
    client: "Japan Parts Bangladesh",
    category: "E-commerce / Headless CMS",
    year: "2024-2026",
    duration: "Ongoing",
    platform: "Web + Mobile App",
    technologies: ["Next.js 14", "Shopify Headless", "TypeScript", "Tailwind CSS 4", "React Native"],
    heroImage: "/images/projects/headless-cms/mockup/headless-cms-launch.png",
    screenshots: [
      "/images/projects/headless-cms/mockup/vehicle-fitment-search.png",
      "/images/projects/headless-cms/mockup/single-product-with-car-applications.png",
      "/images/projects/headless-cms/mockup/shopify-headless-mobile-app.png",
      "/images/projects/headless-cms/mockup/collections-dynamic-mega-menu.png",
    ],
    challenge: "Managing 50,000+ automotive SKUs required sophisticated vehicle fitment search, multi-dimensional filtering, mobile app integration, and seamless Shopify backend while maintaining sub-200ms response times.",
    solution: "Built enterprise headless commerce platform combining Next.js 14 frontend with Shopify Storefront API, custom vehicle fitment system across 218+ models, native mobile apps, and local payment gateway integration for Bangladesh market.",
    features: [
      "Dynamic vehicle fitment search (218+ models, 6 brands)",
      "Advanced multi-dimensional filtering (50K+ products)",
      "Shopify Headless CMS with Metaobjects",
      "Cross-platform mobile apps (iOS & Android)",
      "Local payment integration (bKash, Nagad, EMI)",
      "Real-time inventory & order tracking",
      "SEO optimization (98/100 Lighthouse score)",
      "Store availability API for local pickup"
    ],
    results: [
      { label: "Products", value: "50K+", icon: Users },
      { label: "Vehicle Models", value: "218+", icon: TrendingUp },
      { label: "Response Time", value: "<200ms", icon: Award },
      { label: "Cart Recovery", value: "15%↓", icon: Smartphone }
    ],
    impact: "Transformed automotive e-commerce in Bangladesh with advanced fitment search, reducing part discovery time by 60% and increasing conversion rate by 15%.",
    slug: "shopify-headless-cms",
    bgColor: "bg-gray-50",
    accentColor: "accent-lime"
  },
  {
    id: 3,
    title: "Chery Bangladesh",
    subtitle: "Complete Automotive Ecosystem",
    client: "Chery Bangladesh",
    category: "Automotive & E-commerce",
    year: "2025",
    duration: "4 months",
    platform: "Android & iOS",
    technologies: ["React Native", "Expo SDK 54", "Supabase", "PostgreSQL", "SSL Commerz"],
    heroImage: "/images/projects/cherymobileapp/02-home-screen.jpg",
    screenshots: [
      "/images/projects/cherymobileapp/22-products-vehicle-browse.jpg",
      "/images/projects/cherymobileapp/11-service-booking-vehicle.jpg",
      "/images/projects/cherymobileapp/17-testdrive-vehicle-selection.jpg",
      "/images/projects/cherymobileapp/28-shop-accessories.jpg",
    ],
    challenge: "Traditional automotive dealerships needed a comprehensive digital platform to showcase vehicles, manage service bookings, enable test drives, and sell parts & accessories online.",
    solution: "Built a feature-rich mobile application with complete vehicle catalog, intelligent booking system, e-commerce functionality, and real-time service management.",
    features: [
      "Complete vehicle showroom with 360° views",
      "Service booking with vehicle selection",
      "Test drive scheduling system",
      "Parts & accessories e-commerce",
      "User profile & vehicle management",
      "Push notifications for bookings",
      "Dealer locator with maps",
      "News, events & promotions"
    ],
    results: [
      { label: "Downloads", value: "50K+", icon: Users },
      { label: "Test Drives", value: "300%↑", icon: TrendingUp },
      { label: "User Rating", value: "4.8/5", icon: Award },
      { label: "Active Users", value: "35K+", icon: Smartphone }
    ],
    impact: "The app transformed Chery Bangladesh's customer engagement, digitizing the entire vehicle ownership journey from discovery to after-sales service.",
    slug: "chery-bangladesh-app",
    bgColor: "bg-white",
    accentColor: "accent-lime"
  },
  {
    id: 4,
    title: "TurfLet",
    subtitle: "Smart Sports Venue Booking",
    client: "TurfLet Bangladesh",
    category: "Sports & Recreation",
    year: "2025",
    duration: "3 months",
    platform: "Mobile App + Admin Panel",
    technologies: ["React Native", "Next.js", "Prisma ORM", "Supabase", "SSL Commerz"],
    heroImage: "/images/projects/turflet/screenshots/03-home-search-turfs.jpg",
    screenshots: [
      "/images/projects/turflet/screenshots/04-turf-details-champions.jpg",
      "/images/projects/turflet/screenshots/06-booking-date-time.jpg",
      "/images/projects/turflet/screenshots/08-my-bookings-list.jpg",
      "/images/projects/turflet/screenshots/16-owner-dashboard.jpg",
    ],
    challenge: "Sports venues struggled with manual booking management, pricing complexity, and payment collection. Players had difficulty finding and booking turfs in real-time.",
    solution: "Developed a comprehensive booking platform with 30-day calendar view, dynamic pricing engine, secure payment gateway, and dual interfaces for players and venue owners.",
    features: [
      "Real-time availability calendar (30 days)",
      "Dynamic pricing (weekend/peak/early bird)",
      "SSL Commerz payment integration",
      "Instant booking confirmation",
      "Owner dashboard with analytics",
      "Venue management & pricing control",
      "Reviews & ratings system",
      "Community features (teams & friends)"
    ],
    results: [
      { label: "Bookings", value: "5K+", icon: Calendar },
      { label: "Active Users", value: "2.5K+", icon: Users },
      { label: "Payment Success", value: "95%", icon: TrendingUp },
      { label: "Venues", value: "25+", icon: Award }
    ],
    impact: "Streamlined the entire sports venue booking ecosystem, increasing venue utilization by 40% and reducing booking conflicts to near zero.",
    slug: "turfnations-booking",
    bgColor: "bg-gray-50",
    accentColor: "accent-lime"
  },
  {
    id: 5,
    title: "ELF Bangladesh",
    subtitle: "Automotive E-Commerce & Service Ecosystem",
    client: "ELF Bangladesh",
    category: "E-Commerce & Services",
    year: "2025-2026",
    duration: "6 months (Ongoing)",
    platform: "iOS & Android",
    technologies: ["React Native", "Expo 54", "TypeScript", "Supabase", "Redux Toolkit"],
    heroImage: "/images/projects/elf-mobile-store/02-products-listing.jpg",
    screenshots: [
      "/images/projects/elf-mobile-store/07-gamification-spin-wheel.jpg",
      "/images/projects/elf-mobile-store/11-rewards-catalog.jpg",
      "/images/projects/elf-mobile-store/15-my-vehicles.jpg",
      "/images/projects/elf-mobile-store/12-elf-workshops.jpg",
    ],
    challenge: "ELF Bangladesh needed to transform traditional automotive product sales into an engaging digital ecosystem integrating e-commerce, loyalty programs, service bookings, and emergency assistance.",
    solution: "Built a comprehensive mobile app with 60+ screens combining product marketplace, gamification, workshop bookings, digital wallet, and multi-language support for complete customer lifecycle management.",
    features: [
      "500+ automotive products marketplace",
      "Loyalty rewards & coin system",
      "Interactive spin wheel gamification",
      "Service center booking system",
      "Vehicle management & registration",
      "Emergency roadside assistance",
      "Digital wallet with bKash/Nagad",
      "English/Bengali language support"
    ],
    results: [
      { label: "Screens Built", value: "60+", icon: Smartphone },
      { label: "Products", value: "500+", icon: TrendingUp },
      { label: "DB Tables", value: "25+", icon: Award },
      { label: "Complete", value: "95%", icon: Zap }
    ],
    impact: "Created a unified digital ecosystem that transforms the automotive shopping experience with integrated services, loyalty programs, and emergency assistance features.",
    slug: "elf-bangladesh-app",
    bgColor: "bg-white",
    accentColor: "accent-lime"
  },
  {
    id: 6,
    title: "Gamify",
    subtitle: "QR-Powered Loyalty Platform",
    client: "FMCG & Automotive Brands",
    category: "Loyalty & Gamification",
    year: "2025",
    duration: "2.5 months",
    platform: "Mobile App + Admin Panel",
    technologies: ["React Native", "Supabase", "QR Scanner", "PostgreSQL", "Admin Dashboard"],
    heroImage: "/images/projects/pieqr/screenshots/home-screen.jpg",
    screenshots: [
      "/images/projects/pieqr/screenshots/game-screen.jpg",
      "/images/projects/pieqr/screenshots/wallet.jpg",
      "/images/projects/pieqr/screenshots/gifts.jpg",
      "/images/projects/pieqr/screenshots/trasactions-insights.jpg",
    ],
    challenge: "Brands needed an engaging loyalty system to drive product purchases, prevent fraud, and manage complex reward distributions across multiple customer categories.",
    solution: "Created a QR-based gamification platform with interactive games (Spin Wheel, Flip Card), digital wallet, tiered rewards, and comprehensive admin analytics.",
    features: [
      "QR code scanner with instant verification",
      "OTP-based authentication",
      "Spin Wheel & Flip Card games",
      "Probability-based reward engine",
      "Digital wallet with coin balance",
      "Multi-tier user system (Customer/Driver/Retailer/Mechanic)",
      "Gift catalog with redemption",
      "Admin analytics dashboard"
    ],
    results: [
      { label: "Active Users", value: "8K+", icon: Users },
      { label: "QR Scans", value: "50K+", icon: Zap },
      { label: "Games Played", value: "25K+", icon: Award },
      { label: "Redemptions", value: "3K+", icon: TrendingUp }
    ],
    impact: "Increased brand engagement by 200% and provided valuable customer insights through gamified interactions and purchase tracking.",
    slug: "gamify",
    bgColor: "bg-gray-50",
    accentColor: "accent-lime"
  }
];

// Process steps
const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep dive into business requirements and user needs"
  },
  {
    step: "02",
    title: "Strategy",
    description: "Define scope, architecture, and development roadmap"
  },
  {
    step: "03",
    title: "Design",
    description: "Create wireframes, mockups, and interactive prototypes"
  },
  {
    step: "04",
    title: "Development",
    description: "Build with continuous testing and quality assurance"
  },
  {
    step: "05",
    title: "Launch",
    description: "Deploy and optimize based on user feedback"
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-accent-lime via-accent-lime to-accent-lime/80">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-black/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-black/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(black 2px, transparent 2px), linear-gradient(90deg, black 2px, transparent 2px)',
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
          }}></div>
        </div>

        {/* Main content */}
        <div className="relative z-20 min-h-screen flex items-center">
          <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-32 w-full">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-accent-lime rounded-2xl text-sm font-black mb-12 shadow-2xl shadow-black/20 border border-black/10"
            >
              <Award className="w-5 h-5" />
              CASE STUDIES
            </motion.div>

            {/* Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-black mb-10 leading-[0.85] tracking-tighter"
            >
              Real Projects.<br />
              <span className="relative inline-block">
                Real Impact.
                <div className="absolute -bottom-4 left-0 w-full h-3 bg-black/20 rounded-full blur-sm"></div>
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl text-black/80 mb-16 max-w-4xl leading-relaxed font-medium"
            >
              Explore in-depth analysis of <span className="font-black text-black bg-black/10 px-3 py-1 rounded-lg">6 production-ready projects</span> with detailed breakdowns of challenges, solutions, and measurable business results.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl"
            >
              {[
                { value: '6', label: 'Case Studies', icon: Award },
                { value: '50K+', label: 'Total Users', icon: Users },
                { value: '100%', label: 'Client Satisfaction', icon: Star },
                { value: '95%', label: 'Avg Performance', icon: TrendingUp }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative bg-black text-accent-lime rounded-3xl p-8 border-2 border-black/10 shadow-2xl hover:shadow-accent-lime/20 hover:scale-105 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Icon className="w-8 h-8 text-accent-lime mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                    <div className="text-4xl md:text-5xl font-black text-accent-lime mb-2 relative z-10">{stat.value}</div>
                    <div className="text-sm font-bold text-accent-lime/70 relative z-10">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-4 md:px-6 lg:px-8 py-32">
        <div className="container max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-black text-accent-lime rounded-2xl text-sm font-black mb-8 shadow-xl">
              <Zap className="w-5 h-5" />
              PORTFOLIO SHOWCASE
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-black mb-8 leading-[0.9] tracking-tight">
              Featured Projects
            </h2>
            <div className="h-2 w-32 bg-accent-lime rounded-full mb-8"></div>
            <p className="text-2xl text-gray-700 max-w-4xl leading-relaxed font-medium">
              From B2B trading platforms to mobile apps serving <span className="font-black text-black">50K+ users</span>, each project demonstrates technical excellence and measurable business impact.
            </p>
          </motion.div>

          <div className="space-y-40">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="space-y-12"
              >
                {/* Big Hero Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-200 relative transform group-hover:scale-[1.02] group-hover:shadow-accent-lime/20 transition-all duration-700">
                    <Image
                      src={study.heroImage}
                      alt={`${study.title} - Main Screenshot`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 1400px"
                      priority={index === 0}
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                        <div className="bg-accent-lime text-black px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-2xl">
                          <Monitor className="w-6 h-6" />
                          View Full Case Study
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent-lime to-accent-lime/80 rounded-3xl flex items-center justify-center text-2xl font-black border-4 border-white shadow-2xl transform rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-700">
                    {study.year.split('-')[0]}
                  </div>

                  {/* Platform Badge */}
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-black to-gray-900 text-accent-lime px-8 py-4 rounded-2xl font-black text-base shadow-2xl border-2 border-accent-lime/20 group-hover:border-accent-lime transition-all duration-500">
                    {study.platform}
                  </div>
                </motion.div>

                {/* Content Below Image */}
                <div className="space-y-8">
                  {/* Header */}
                  <div>
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      <span className="px-6 py-3 bg-black text-accent-lime rounded-2xl text-sm font-black shadow-2xl border border-black/10">
                        {study.category}
                      </span>
                      <span className="text-gray-600 text-sm font-black flex items-center gap-2 bg-gray-100 px-4 py-3 rounded-xl">
                        <Calendar className="w-4 h-4" />
                        {study.duration}
                      </span>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-black leading-[0.9] mb-6 tracking-tight">
                      {study.title}
                    </h2>
                    
                    {study.subtitle && (
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-1.5 w-16 bg-accent-lime rounded-full"></div>
                        <p className="text-2xl font-black text-gray-700">{study.subtitle}</p>
                      </div>
                    )}

                    <p className="text-xl text-gray-700 font-bold bg-gray-50 px-6 py-4 rounded-2xl inline-block">
                      Client: <span className="text-black font-black">{study.client}</span>
                    </p>
                  </div>

                  {/* 2 Column Layout */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* Technologies */}
                      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border-2 border-gray-200 shadow-lg overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-lime/10 rounded-full blur-3xl"></div>
                        <h3 className="font-black text-xl mb-6 flex items-center gap-3 relative z-10">
                          <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center">
                            <Code className="w-5 h-5 text-black" />
                          </div>
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-3 relative z-10">
                          {study.technologies.map((tech, techIdx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: techIdx * 0.05 }}
                              className="px-5 py-3 bg-white text-gray-900 rounded-xl text-sm font-black border-2 border-gray-200 hover:border-accent-lime hover:shadow-lg transition-all duration-300 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Challenge */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative p-10 bg-gradient-to-br from-red-50 via-red-50/50 to-white border-l-8 border-red-500 rounded-3xl shadow-2xl hover:shadow-red-100 transition-all duration-500 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
                        
                        <h3 className="font-black text-red-700 mb-4 flex items-center gap-3 text-2xl relative z-10">
                          <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                            <Zap className="w-6 h-6 text-white" />
                          </div>
                          Challenge
                        </h3>
                        <p className="text-gray-800 leading-relaxed relative z-10 font-medium text-lg">{study.challenge}</p>
                      </motion.div>

                      {/* Solution */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative p-10 bg-gradient-to-br from-green-50 via-green-50/50 to-white border-l-8 border-green-500 rounded-3xl shadow-2xl hover:shadow-green-100 transition-all duration-500 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
                        
                        <h3 className="font-black text-green-700 mb-4 flex items-center gap-3 text-2xl relative z-10">
                          <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                            <CheckCircle className="w-6 h-6 text-white" />
                          </div>
                          Solution
                        </h3>
                        <p className="text-gray-800 leading-relaxed relative z-10 font-medium text-lg">{study.solution}</p>
                      </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Key Features */}
                      <div className="relative bg-white rounded-3xl p-10 border-2 border-gray-200 shadow-2xl overflow-hidden group hover:border-accent-lime/50 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-lime/5 rounded-full blur-3xl group-hover:bg-accent-lime/10 transition-all duration-500"></div>
                        
                        <h3 className="font-black mb-8 text-2xl flex items-center gap-3 relative z-10">
                          <div className="w-12 h-12 bg-accent-lime rounded-2xl flex items-center justify-center shadow-xl">
                            <Star className="w-6 h-6 text-black" />
                          </div>
                          Key Features
                        </h3>
                        
                        <div className="grid gap-5 relative z-10">
                          {study.features.slice(0, 6).map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: idx * 0.05 }}
                              className="flex items-start gap-5 group/item p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                            >
                              <div className="w-10 h-10 rounded-xl bg-accent-lime flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300 shadow-lg">
                                <Check className="w-6 h-6 text-black font-bold" strokeWidth={3} />
                              </div>
                              <span className="text-gray-800 font-semibold leading-relaxed text-lg group-hover/item:text-black transition-colors">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Additional Screenshots */}
                      <div className="grid grid-cols-2 gap-4">
                        {study.screenshots.slice(0, 4).map((screenshot, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden border-2 border-gray-200 relative hover:scale-110 hover:z-20 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl group/img"
                          >
                            <Image
                              src={screenshot}
                              alt={`${study.title} - Screenshot ${idx + 1}`}
                              fill
                              className="object-cover group-hover/img:scale-110 transition-transform duration-500"
                              sizes="(max-width: 768px) 50vw, 300px"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors duration-500"></div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results Metrics - Full Width */}
                  <div className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-3xl p-12 overflow-hidden shadow-2xl group hover:shadow-accent-lime/20 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/10 via-transparent to-accent-lime/5"></div>
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent-lime/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent-lime/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                    
                    {/* Noise texture overlay */}
                    <div className="absolute inset-0 opacity-5 mix-blend-overlay" style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
                    }}></div>
                    
                    <h3 className="font-black mb-10 text-3xl relative z-10 flex items-center gap-3">
                      <div className="w-14 h-14 bg-accent-lime rounded-2xl flex items-center justify-center shadow-2xl">
                        <TrendingUp className="w-7 h-7 text-black" />
                      </div>
                      Impact & Results
                    </h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 relative z-10">
                      {study.results.map((result, idx) => {
                        const Icon = result.icon;
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-center group/stat"
                          >
                            <div className="w-16 h-16 bg-accent-lime rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-2xl group-hover/stat:scale-125 group-hover/stat:rotate-12 transition-all duration-500">
                              <Icon className="w-8 h-8 text-black" />
                            </div>
                            <div className="text-4xl md:text-5xl font-black mb-3 text-accent-lime group-hover/stat:scale-110 transition-transform duration-500">
                              {result.value}
                            </div>
                            <div className="text-sm font-black text-white/70 uppercase tracking-wider">
                              {result.label}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                    
                    <div className="relative z-10 pt-8 border-t-2 border-white/10">
                      <p className="text-white/90 leading-relaxed font-medium text-xl">{study.impact}</p>
                    </div>
                  </div>

                  {/* CTA Button - Full Width */}
                  <div className="text-center">
                    <Link 
                      href={`/case-studies/${study.slug}`}
                      className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-accent-lime to-accent-lime/90 text-black rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-accent-lime/30 transition-all duration-500 hover:scale-105 border-2 border-black/10 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/5 to-black/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <span className="relative z-10">View Full Case Study</span>
                      <ArrowRight className="relative z-10 w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={3} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative px-4 md:px-6 lg:px-8 py-32 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-accent-lime/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-accent-lime/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-lime/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-black text-accent-lime rounded-2xl text-sm font-black mb-8 shadow-xl">
              <Zap className="w-5 h-5" />
              METHODOLOGY
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tight">My Process</h2>
            <div className="h-2 w-32 bg-accent-lime rounded-full mb-8 mx-auto"></div>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Every successful project follows a <span className="font-black text-black">proven methodology</span> that ensures quality results and client satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="text-center bg-white rounded-3xl p-10 border-2 border-gray-200 hover:border-accent-lime transition-all duration-500 hover:shadow-2xl group h-full">
                  <div className="w-28 h-28 bg-gradient-to-br from-accent-lime to-accent-lime/80 text-black rounded-3xl flex items-center justify-center text-4xl font-black mx-auto mb-8 shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {step.step}
                  </div>
                  <h3 className="font-black mb-5 text-2xl">{step.title}</h3>
                  <p className="text-base text-gray-600 leading-relaxed font-semibold">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 text-accent-lime z-20">
                    <ArrowRight className="w-10 h-10 animate-pulse drop-shadow-lg" strokeWidth={4} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 md:px-6 lg:px-8 py-40 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-lime/20 via-transparent to-accent-lime/10"></div>
          <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-accent-lime/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-accent-lime/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px)',
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="container max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-accent-lime/20 backdrop-blur-sm text-accent-lime rounded-2xl text-sm font-black mb-10 shadow-xl border border-accent-lime/30">
              <Star className="w-5 h-5" />
              LET'S BUILD TOGETHER
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[0.9] tracking-tight">
              Ready to Create Your<br />
              <span className="bg-gradient-to-r from-accent-lime to-accent-lime/80 bg-clip-text text-transparent">Success Story?</span>
            </h2>
            
            <div className="h-2 w-32 bg-accent-lime rounded-full mb-10 mx-auto"></div>
            
            <p className="text-2xl text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
              Let's discuss your project and explore how we can achieve similar <span className="font-black text-accent-lime">outstanding results</span> for your business.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              <a 
                href="/quote" 
                className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-accent-lime to-accent-lime/90 text-black rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-accent-lime/30 transition-all duration-500 hover:scale-110 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/10 to-black/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="relative z-10 w-7 h-7 ml-4 group-hover:translate-x-2 transition-transform duration-300" strokeWidth={3} />
              </a>
              <a 
                href="/#contact" 
                className="group inline-flex items-center px-12 py-6 bg-transparent border-2 border-white text-white rounded-2xl font-black text-xl hover:bg-white hover:text-black transition-all duration-500"
              >
                Schedule a Call
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: '6+', label: 'Projects Delivered' },
                { value: '100%', label: 'Client Satisfaction' },
                { value: '50K+', label: 'Total Users Served' },
                { value: '24/7', label: 'Support Available' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-black text-accent-lime mb-3">{stat.value}</div>
                  <div className="text-sm font-bold text-white/70 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
