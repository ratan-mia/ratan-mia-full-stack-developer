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
  Zap, Smartphone, Gift, Users, TrendingUp, ArrowLeft
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Project Data
const projectData = {
  company: 'Gamify',
  category: 'Mobile App / Loyalty Platform / FMCG',
  liveUrl: null,
  timeline: '4 Months',
  services: [
    'Mobile App Development',
    'Backend Development',
    'Gamification Design',
    'Payment Integration',
    'Admin Dashboard',
    'Analytics & Reporting'
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
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-accent-lime">
      {/* Decorative floating elements - desktop only */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
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

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-32 w-full">
          {/* Back Button */}
          <Link 
            href="/case-studies"
            className="inline-flex items-center gap-2 text-black/70 hover:text-black mb-12 font-bold transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-block px-6 py-2 bg-black/15 text-black rounded-full text-sm font-bold mb-6">
                🎮 LOYALTY & GAMIFICATION
              </div>

              {/* Hero Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-6 leading-tight">
                Gamify<br />
                <span className="text-black/80">Loyalty Platform</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-black/80 mb-8 max-w-xl leading-relaxed">
                QR-powered engagement platform with interactive games, digital wallet, and 
                comprehensive analytics for FMCG and automotive brands nationwide.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Users, label: "Active Users", value: "8K+" },
                  { icon: Zap, label: "QR Scans", value: "50K+" },
                  { icon: Award, label: "Games Played", value: "25K+" },
                  { icon: TrendingUp, label: "Redemptions", value: "3K+" },
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
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
                {["React Native", "Node.js", "PostgreSQL", "QR Scanner"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-black/15 text-black rounded-lg text-sm font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-black/10">
                <Image
                  src="/images/projects/pieqr/screenshots/home-screen.jpg"
                  alt="Gamify Platform"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-black text-accent-lime px-6 py-4 rounded-2xl font-extrabold text-xl shadow-2xl">
                2025
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GamifyCaseStudy() {
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
        title="QR-Powered Customer Engagement"
        description="Revolutionizing brand loyalty for FMCG and automotive companies across Bangladesh"
        bgColor="bg-white"
      >
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Gift, title: 'Industry', value: 'FMCG & Automotive' },
            { icon: Zap, title: 'Duration', value: '4 Months' },
            { icon: Smartphone, title: 'Platform', value: 'iOS & Android' }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200 hover:border-accent-lime transition-all">
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
            FMCG and automotive brands needed a scalable platform to track product distribution, prevent fraud, and drive customer loyalty across 64 districts in Bangladesh. Traditional loyalty programs lacked engagement and provided limited insights into customer behavior.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Gamify is a comprehensive <strong>QR-powered loyalty platform</strong> featuring interactive games, digital wallet, and real-time analytics. Built with <strong>React Native</strong> and <strong>Node.js</strong>, the platform serves 8,000+ active users with multi-tier profiles, fraud detection, and payment integration.
          </p>
        </div>
      </CaseStudySection>

      {/* Challenge Section */}
      <CaseStudySection
        id="challenge"
        label="THE CHALLENGE"
        icon={AlertCircle}
        title="Complex Engagement Challenge"
        description="Multiple obstacles in tracking, preventing fraud, and managing diverse user categories"
        bgColor="bg-gray-50"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Challenge Card */}
          <div className="p-8 rounded-3xl bg-red-50 border-2 border-red-200">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span>Track product distribution across entire country (64 districts)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span>Prevent QR code fraud and duplicate scans with device fingerprinting</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span>Manage 4 different user categories with unique workflows and permissions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <span>Complex reward tiers and eligibility rules for different customer segments</span>
              </li>
            </ul>
          </div>

          {/* Solution Card */}
          <div className="p-8 rounded-3xl bg-green-50 border-2 border-green-200">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-bold mb-4">The Solution</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <span>QR scanning with geo-location tracking and device fingerprinting for fraud prevention</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <span>Interactive games (Spin Wheel & Flip Card) with probability-based reward engine</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <span>Category-based user profiles with document verification and role permissions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <span>Comprehensive admin dashboard with heat maps and real-time analytics</span>
              </li>
            </ul>
          </div>
        </div>
      </CaseStudySection>

      {/* Features Section */}
      <CaseStudySection
        id="features"
        label="CORE FEATURES"
        icon={CheckCircle}
        title="Complete Engagement Ecosystem"
        description="A comprehensive suite of features designed to maximize customer engagement"
        bgColor="bg-white"
      >
        <FeatureGrid features={[
          {
            icon: Zap,
            title: "QR Code Scanner",
            description: "Instant product verification with unique codes, geo-location tracking, and fraud detection through device fingerprinting."
          },
          {
            icon: Smartphone,
            title: "OTP Authentication",
            description: "Secure phone-based user verification with SMS integration ensuring genuine user registration and account security."
          },
          {
            icon: Gift,
            title: "Spin Wheel & Flip Card",
            description: "Engaging probability-based games with dynamic prize distribution, customizable win rates, and instant reward delivery."
          },
          {
            icon: Award,
            title: "Reward Engine",
            description: "Sophisticated prize distribution system with tier-based rewards, eligibility rules, and redemption tracking."
          },
          {
            icon: Users,
            title: "Multi-Tier Users",
            description: "Support for Customer, Driver, Retailer, and Mechanic categories with unique workflows and document verification."
          },
          {
            icon: CheckCircle,
            title: "Digital Wallet",
            description: "Comprehensive coin balance tracking, transaction history, redemption management, and payment gateway integration."
          }
        ]} />
      </CaseStudySection>

      {/* Tech Stack Section */}
      <CaseStudySection
        id="tech-stack"
        label="TECHNOLOGY STACK"
        icon={Code}
        title="Built with Modern Technology"
        bgColor="bg-gray-50"
      >
        <TechStack technologies={{
          'Frontend': ['React Native', 'Expo SDK', 'Redux Toolkit', 'TypeScript'],
          'Backend': ['Node.js', 'Express.js', 'PostgreSQL', 'Redis'],
          'Features': ['QR Scanner', 'OTP System', 'Geo-tracking', 'Fraud Detection'],
          'Payment': ['bKash', 'Nagad', 'SSL Commerce', 'Mobile Recharge']
        }} />
      </CaseStudySection>

      {/* Screenshots Section */}
      <CaseStudySection
        id="screenshots"
        label="APP SCREENSHOTS"
        icon={Smartphone}
        title="Intuitive Interface Design"
        description="Explore the app's user experience through key screens"
        bgColor="bg-white"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { src: "/images/projects/pieqr/screenshots/home-screen.jpg", title: "Home & QR Scanner" },
            { src: "/images/projects/pieqr/screenshots/game-screen.jpg", title: "Spin Wheel Game" },
            { src: "/images/projects/pieqr/screenshots/game-2-screen.jpg", title: "Flip Card Game" },
            { src: "/images/projects/pieqr/screenshots/wallet.jpg", title: "Digital Wallet" },
            { src: "/images/projects/pieqr/screenshots/gifts.jpg", title: "Gifts Catalog" },
            { src: "/images/projects/pieqr/screenshots/trasactions-insights.jpg", title: "Transaction Insights" },
          ].map((screenshot, idx) => (
            <div key={idx} className="group relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-accent-lime hover:shadow-lg transition-all">
              <Image
                src={screenshot.src}
                alt={screenshot.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-bold text-sm">{screenshot.title}</span>
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Results Section */}
      <CaseStudySection
        id="results"
        label="RESULTS & IMPACT"
        icon={Award}
        title="Measurable Business Impact"
        description="Increased brand engagement by 200% while providing valuable customer insights"
        bgColor="bg-gray-50"
      >
        <MetricsGrid metrics={[
          { value: '200%', label: 'Brand Engagement', sublabel: 'Year over year' },
          { value: '8K+', label: 'Active Users', sublabel: 'Nationwide reach' },
          { value: '64', label: 'Districts Covered', sublabel: 'Complete Bangladesh' },
          { value: '50K+', label: 'QR Scans', sublabel: 'Product verifications' }
        ]} />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-accent-lime/10 p-8 rounded-2xl border-2 border-accent-lime/30">
            <h3 className="text-2xl font-black mb-4">Business Impact</h3>
            <ul className="space-y-3">
              {[
                'Real-time distribution tracking across 64 districts',
                'Fraud prevention through device fingerprinting',
                'Data-driven insights into customer behavior',
                'Increased customer retention and brand loyalty'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-lime flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
            <h3 className="text-2xl font-black mb-4">Technical Achievements</h3>
            <ul className="space-y-3">
              {[
                'Scalable React Native architecture',
                'Real-time analytics and reporting',
                'Multi-tier user management system',
                'Integrated payment gateway support'
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
