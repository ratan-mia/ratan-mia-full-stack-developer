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
    Check,
    CheckCircle, Code,
    Gift,
    QrCode,
    Star,
    TrendingUp,
    Trophy,
    Users,
    Wallet,
    Zap
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Project Data
const projectData = {
  company: 'Gamify',
  category: 'Mobile App / Loyalty Platform / FMCG',
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
              🎮 LOYALTY & GAMIFICATION
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Gamify
              <span className="block text-black/70">Loyalty Platform</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-black/80 mb-8 leading-relaxed font-medium">
              QR-powered engagement platform with interactive games, digital wallet, and comprehensive analytics for FMCG and automotive brands nationwide.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Users, label: "Active Users", value: "8K+" },
                { icon: Zap, label: "QR Scans", value: "50K+" },
                { icon: Trophy, label: "Games Played", value: "25K+" },
                { icon: TrendingUp, label: "Redemptions", value: "3K+" },
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
              {["React Native", "Node.js", "PostgreSQL", "QR Scanner"].map((tech) => (
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
                src="/images/projects/pieqr/home-screen.png"
                alt="Gamify Platform"
                fill
                className="object-cover"
                priority
              />
              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-black text-accent-lime px-6 py-4 rounded-2xl font-extrabold text-xl shadow-2xl">
                2025
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function GamifyCaseStudy() {
  return (
    <CaseStudyTemplate
      project={projectData}
      heroSection={<HeroSection />}
    >
      {/* Overview Section */}
      <OverviewSection
        title="About the Project"
        paragraphs={[
          "FMCG and automotive brands needed a scalable platform to track product distribution, prevent fraud, and drive customer loyalty across 64 districts in Bangladesh. Traditional loyalty programs lacked engagement and provided limited insights into customer behavior.",
          "The solution is a QR-powered gamification platform built with React Native, enabling brands to create interactive experiences while collecting valuable consumer data. The app features games, digital wallets, reward catalogs, and comprehensive analytics dashboards for brand managers to track campaign performance in real-time."
        ]}
        image="/images/projects/pieqr/home-screen.png"
        imageAlt="Gamify Platform Overview"
      />

      {/* Challenge Section */}
      <CaseStudySection
        id="challenge"
        label="THE CHALLENGE"
        icon={Zap}
        title="Complex Brand Requirements"
        description={
          <>
            Building a multi-tenant loyalty platform required addressing several key challenges including{' '}
            <span className="font-bold text-black">fraud prevention</span> through unique QR codes and scan 
            validation. We needed to create <span className="font-bold text-black">engaging gamification</span>{' '}
            with multiple game types and reward mechanisms. The platform demanded{' '}
            <span className="font-bold text-black">real-time analytics</span> for brand managers to track 
            campaigns across 64 districts. Additionally, we built a <span className="font-bold text-black">scalable 
            architecture</span> to support multiple brands with isolated data and custom branding.
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
        description="We built a comprehensive loyalty platform combining QR technology, gamification, and analytics with multi-tenant architecture."
        bgColor="bg-white"
        centered={true}
      >
        {/* QR Scanning System */}
        <ImageContentGrid
          image="/images/projects/pieqr/earning-souces.png"
          imageAlt="QR Scanning System"
          badge="QR TECHNOLOGY"
          badgeIcon={QrCode}
          title="Smart QR Scanning"
          description="Advanced QR code scanning with fraud detection, offline support, and instant validation for product authentication and point earning."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Fraud Prevention',
              description: 'Unique QR codes with one-time scan validation'
            },
            {
              icon: Check,
              title: 'Offline Support',
              description: 'Queue scans when offline, sync when connected'
            },
            {
              icon: Check,
              title: 'Instant Rewards',
              description: 'Real-time point crediting upon successful scan'
            }
          ]}
        />

        {/* Gamification Engine */}
        <ImageContentGrid
          image="/images/projects/pieqr/game-selection.png"
          imageAlt="Gamification System"
          badge="GAMIFICATION"
          badgeIcon={Trophy}
          title="Interactive Games"
          description="Engaging game experiences including spin-the-wheel, scratch cards, and lucky draws to boost user engagement and brand loyalty."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: 'Multiple Game Types',
              description: 'Spin wheel, scratch cards, lucky draws, quizzes'
            },
            {
              icon: Check,
              title: 'Dynamic Prizes',
              description: 'Configurable reward pools with probability settings'
            },
            {
              icon: Check,
              title: 'Fair Play System',
              description: 'Anti-cheat mechanisms and play limits'
            }
          ]}
        />

        {/* Rewards Catalog */}
        <ImageContentGrid
          image="/images/projects/pieqr/Profile-menu.png"
          imageAlt="Rewards Catalog"
          badge="REWARDS"
          badgeIcon={Gift}
          title="Digital Rewards"
          description="Comprehensive rewards catalog with product redemption, vouchers, and exclusive brand offers with real-time inventory management."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Product Catalog',
              description: 'Browse and redeem rewards with points'
            },
            {
              icon: Check,
              title: 'Voucher System',
              description: 'Digital vouchers for partner stores'
            },
            {
              icon: Check,
              title: 'Order Tracking',
              description: 'Track redemption status and delivery'
            }
          ]}
        />
      </CaseStudySection>

      {/* Digital Wallet */}
      <FullWidthImageContent
        image="/images/projects/pieqr/wallet.png"
        imageAlt="Digital Wallet"
        badge="DIGITAL WALLET"
        badgeIcon={Wallet}
        title="Points & Wallet Management"
        description="Comprehensive digital wallet system for managing loyalty points, viewing transaction history, tracking rewards, and monitoring balance across all brand activities."
        imagePosition="left"
        bgColor="bg-white"
        features={[
          {
            icon: Wallet,
            title: 'Points Balance',
            description: 'Real-time points with earning and spending history'
          },
          {
            icon: TrendingUp,
            title: 'Transaction History',
            description: 'Complete audit trail of all point activities'
          },
          {
            icon: Gift,
            title: 'Rewards Tracking',
            description: 'Track redeemed and pending rewards'
          },
          {
            icon: Star,
            title: 'Multi-Brand Support',
            description: 'Separate wallets for different brand campaigns'
          }
        ]}
      />

      {/* Admin Dashboard */}
      <FullWidthImageContent
        image="/images/projects/pieqr/Profile-menu.png"
        imageAlt="Admin Dashboard"
        badge="ANALYTICS DASHBOARD"
        badgeIcon={BarChart}
        title="Real-Time Analytics"
        description="Powerful analytics dashboard for brand managers to monitor campaign performance, track user engagement, analyze scan patterns, and optimize reward strategies across all districts."
        imagePosition="right"
        bgColor="bg-gray-50"
        features={[
          {
            icon: BarChart,
            title: 'Campaign Analytics',
            description: 'Track scans, redemptions, and engagement metrics'
          },
          {
            icon: Users,
            title: 'User Insights',
            description: 'Demographic data and behavior patterns'
          },
          {
            icon: TrendingUp,
            title: 'District Tracking',
            description: 'Performance breakdown across 64 districts'
          },
          {
            icon: Award,
            title: 'ROI Reporting',
            description: 'Calculate campaign effectiveness and returns'
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
            <span className="font-bold text-black">Expo</span> for cross-platform mobile development. The backend 
            leverages <span className="font-bold text-black">Node.js</span> with{' '}
            <span className="font-bold text-black">PostgreSQL</span> for scalable data management. We implemented{' '}
            <span className="font-bold text-black">QR code scanning</span> with fraud detection algorithms. The 
            analytics dashboard is powered by <span className="font-bold text-black">React</span> with real-time 
            data visualization. The system features <span className="font-bold text-black">multi-tenant 
            architecture</span> with isolated brand data and custom configurations.
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
            { icon: Users, value: '8K+', label: 'Active Users' },
            { icon: QrCode, value: '50K+', label: 'QR Scans' },
            { icon: Trophy, value: '25K+', label: 'Games Played' },
            { icon: Gift, value: '3K+', label: 'Rewards Redeemed' }
          ]}
        />

        <div className="mt-12">
          <ImageShowcaseGrid
            items={[
              {
                title: 'QR Scanner',
                image: '/images/projects/pieqr/earning-souces.png',
                alt: 'QR Code Scanner',
                caption: 'Advanced QR scanning with fraud detection and instant validation for secure product authentication.'
              },
              {
                title: 'Gamification',
                image: '/images/projects/pieqr/game-selection.png',
                alt: 'Interactive Games',
                caption: 'Engaging game experiences including spin-the-wheel and scratch cards to boost user engagement.'
              }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* Business Impact Section */}
      <CaseStudySection
        id="impact"
        label="🚀 BUSINESS IMPACT"
        title="Transforming Brand Loyalty"
        bgColor="bg-white"
        centered={true}
      >
        <BusinessImpactCards
          cards={[
            {
              title: 'For Consumers',
              benefits: [
                'Scan products to earn instant rewards',
                'Play interactive games for bonus points',
                'Redeem points for products and vouchers',
                'Track loyalty points across multiple brands',
                'Access exclusive brand offers and promotions'
              ]
            },
            {
              title: 'For Brands',
              benefits: [
                'Real-time campaign performance tracking',
                'Valuable consumer behavior insights',
                'Fraud prevention with unique QR codes',
                'Increased customer engagement and retention',
                'Scalable platform for nationwide campaigns'
              ]
            }
          ]}
        />

        <div className="mt-12">
          <KeyAchievementsCard
            achievements={[
              { value: '4x', label: 'User Engagement' },
              { value: '60%', label: 'Campaign ROI Increase' },
              { value: '64', label: 'Districts Covered' }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* CTA Section */}
      <CTASection
        title="Need a Loyalty Platform?"
        subtitle="Let's build a gamification solution that drives engagement and brand loyalty."
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
