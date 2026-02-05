'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Award, Smartphone, Calendar, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '@/app/components/home/Contact';

// Simplified case studies listing - Each case study has its own unique page
const caseStudies = [
  {
    id: 1,
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
      { label: "Test Drives", value: "300%", icon: TrendingUp },
      { label: "User Rating", value: "4.8/5", icon: Award },
      { label: "Active Users", value: "35K+", icon: Smartphone }
    ],
    impact: "The app transformed Chery Bangladesh's customer engagement, digitizing the entire vehicle ownership journey from discovery to after-sales service.",
    slug: "chery-bangladesh-app",
    bgColor: "bg-white",
    accentColor: "accent-lime"
  },
  {
    id: 2,
    title: "TufLet",
    subtitle: "Smart Sports Venue Booking",
    client: "TufLet Bangladesh",
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
    slug: "TufLet-booking",
    bgColor: "bg-gray-50",
    accentColor: "accent-lime"
  },
  {
    id: 3,
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
    bgColor: "bg-white",
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
      <section className="relative min-h-screen w-full overflow-hidden bg-accent-lime">
        {/* Decorative floating elements - desktop only */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-black/5 animate-pulse" />
          <div className="absolute bottom-40 right-20 w-24 h-24 rounded-2xl bg-black/5 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Main content */}
        <div className="relative z-20 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-32 w-full">
            {/* Badge */}
            <div className="inline-block px-6 py-2 bg-black/15 text-black rounded-full text-sm font-bold mb-6">
              📊 CASE STUDIES
            </div>

            {/* Hero Title */}
            <h1 className="hero-title text-black mb-6">
              Case Studies
            </h1>
            
            {/* Description */}
            <p className="body-text text-black/80 mb-12 max-w-3xl text-xl md:text-2xl">
              Explore in-depth analysis of real projects, the challenges faced, solutions implemented, 
              and the measurable results achieved for clients.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="px-4 py-2 bg-accent-lime/20 text-black rounded-lg text-sm font-bold">
                        {study.category}
                      </span>
                      <span className="text-gray-600 text-sm font-medium">
                        {study.duration}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{study.title}</h2>
                    <p className="text-lg text-gray-700 font-semibold">
                      Client: {study.client}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h3 className="font-bold mb-3 text-lg">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Challenge */}
                    <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-xl">
                      <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                        <span className="text-xl">🎯</span> Challenge
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="p-6 bg-green-50 border-l-4 border-green-500 rounded-xl">
                      <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                        <span className="text-xl">💡</span> Solution
                      </h3>
                      <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="font-bold mb-4 text-lg">Key Features:</h3>
                      <div className="grid gap-3">
                        {study.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-lg bg-accent-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-black font-bold text-xs">✓</span>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results Metrics */}
                    <div className="bg-accent-lime text-black rounded-3xl p-8">
                      <h3 className="font-bold mb-6 text-xl">Impact & Results:</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                        {study.results.map((result, idx) => {
                          const Icon = result.icon;
                          return (
                            <div key={idx} className="text-center">
                              <div className="w-12 h-12 bg-black/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                                <Icon className="w-6 h-6 text-black" />
                              </div>
                              <div className="text-2xl md:text-3xl font-extrabold mb-1">
                                {result.value}
                              </div>
                              <div className="text-sm font-semibold text-black/70">
                                {result.label}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-black/80 text-sm leading-relaxed">{study.impact}</p>
                    </div>

                    <Link 
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center px-8 py-4 bg-black text-accent-lime rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105 group"
                    >
                      View Full Case Study
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Screenshots Grid */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-4">
                    {/* Hero Image */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <div className="aspect-[9/16] md:aspect-video bg-gray-100 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 relative">
                        <Image
                          src={study.heroImage}
                          alt={`${study.title} - Main Screenshot`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        />
                      </div>
                      
                      {/* Year Badge */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent-lime rounded-full flex items-center justify-center text-lg font-extrabold border-4 border-white shadow-lg">
                        {study.year}
                      </div>
                    </motion.div>

                    {/* Additional Screenshots */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {study.screenshots.slice(0, 4).map((screenshot, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 relative hover:scale-105 transition-transform cursor-pointer"
                        >
                          <Image
                            src={screenshot}
                            alt={`${study.title} - Screenshot ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 200px"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 md:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
              METHODOLOGY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Process</h2>
            <p className="body-text text-gray-600 max-w-3xl mx-auto">
              Every successful project follows a proven methodology that ensures quality results and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-accent-lime text-black rounded-2xl flex items-center justify-center text-2xl font-extrabold mx-auto mb-4 shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="font-bold mb-3 text-lg">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-accent-lime">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="body-text text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can achieve similar outstanding results for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/quote" className="px-8 py-4 bg-accent-lime text-black rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
              Start Your Project
            </a>
            <a href="/#contact" className="px-8 py-4 bg-white border-2 border-black text-black rounded-xl font-semibold hover:bg-black hover:text-white transition-all">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
