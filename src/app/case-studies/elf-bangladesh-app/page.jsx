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
    Award,
    BarChart,
    Check,
    CheckCircle,
    Code,
    Gift,
    ShoppingCart,
    Smartphone,
    Star,
    TrendingUp,
    Trophy,
    Wallet,
    Zap
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Project Data
const projectData = {
  company: 'ELF Bangladesh',
  category: 'E-Commerce / Mobile App',
  liveUrl: 'https://elf.zestgeek.com',
  timeline: '6 Months',
  services: [
    'UI/UX Design',
    'Mobile App Development',
    'Backend Development',
    'Payment Integration',
    'Gamification System'
  ]
};

export default function ELFBangladeshCaseStudy() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const screenshots = [
    {
      image: 'app-home-screen.png',
      title: 'Home & Discovery',
      description: 'Browse 500+ automotive products with smart search and category navigation for easy product discovery.'
    },
    {
      image: 'elf-mobile-onboarding.png',
      title: 'Smooth Onboarding',
      description: 'User-friendly onboarding experience introducing key features and benefits to new users.'
    },
    {
      image: 'gamify-rewards-system.png',
      title: 'Rewards & Loyalty',
      description: 'Earn points on purchases and activities, unlock achievements, and enjoy exclusive member benefits.'
    },
    {
      image: 'wallet-management.png',
      title: 'Digital Wallet',
      description: 'Integrated wallet with bKash, Nagad, and SSL Commerz for secure and convenient payments.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <CaseStudyTemplate
      project={projectData}
      heroSection={
        <CaseStudyHero
          category="E-Commerce / Mobile App"
          categoryIcon={Smartphone}
          title="ELF Bangladesh"
          subtitle="Mobile App"
          description="Enterprise-grade automotive e-commerce platform with gamification, loyalty rewards, service booking, and emergency assistance."
          techStack={['React Native', 'Expo 54', 'Supabase', 'Redux Toolkit', 'TypeScript']}
          liveUrl="https://elf.zestgeek.com"
          heroImage="/images/projects/elf-mobile-store/mockup/web-store-and-mobile-app.png"
          imageAlt="ELF Bangladesh Platform"
          badge1Text="95% Complete"
          badge1Icon={TrendingUp}
          badge2Text="60+ Screens"
          badge2Icon={Smartphone}
        />
      }
    >
      {/* About Section */}
      <CaseStudyAbout
        title="About the Project"
        paragraphs={[
          "ELF Bangladesh Mobile App is a feature-rich, enterprise-grade mobile commerce platform built for the automotive industry. Developed using React Native and Expo 54, the app serves as a comprehensive digital ecosystem combining e-commerce, loyalty programs, gamification, service bookings, and emergency assistance.",
          "With 60+ screens, 25+ database tables, and 50,000+ lines of code, this platform represents a complete digital transformation of traditional automotive product sales into an engaging, service-integrated experience. The app employs a unique dual-service architecture connecting legacy systems with modern Supabase infrastructure."
        ]}
        image="/images/projects/elf-mobile-store/mockup/web-store-and-mobile-app.png"
        imageAlt="ELF Bangladesh Platform Overview"
      />

      {/* Challenge Section */}
      <CaseStudyChallenge
        id="challenge"
        label="REQUIREMENTS & CHALLENGES"
        icon={Zap}
        title="Complex Business Requirements"
        description={
          <>
            Transforming traditional automotive retail required solving multiple challenges including{' '}
            <span className="font-bold text-black">managing 500+ products</span> with technical specifications 
            and compatibility data. We needed to build <span className="font-bold text-black">customer engagement 
            mechanisms</span> to compete with traditional retail relationships. The platform required{' '}
            <span className="font-bold text-black">legacy system integration</span> while adding modern features, 
            and we had to make <span className="font-bold text-black">service centers accessible</span> through 
            an integrated GPS-based workshop finder with online booking capabilities.
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
        title="Comprehensive Digital Ecosystem"
        description="We built a feature-rich mobile platform that combines shopping, rewards, services, and community features into one seamless experience."
        bgColor="bg-white"
        centered={true}
      >
        {/* E-Commerce Marketplace */}
        <ImageContentGrid
          image="/images/projects/elf-mobile-store/mockup/app-home-screen.png"
          imageAlt="E-Commerce Marketplace"
          badge="E-COMMERCE"
          badgeIcon={ShoppingCart}
          title="Product Marketplace"
          description="Browse and purchase 500+ automotive products including engine oils, lubricants, and accessories with advanced filtering by viscosity, API grade, and vehicle compatibility."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Smart Search',
              description: 'Advanced filtering by category, brand, viscosity, and specifications'
            },
            {
              icon: Check,
              title: 'Product Details',
              description: 'Complete specs, TDS downloads, and compatibility information'
            },
            {
              icon: Check,
              title: 'Wishlist & Cart',
              description: 'Save favorites and manage purchases with ease'
            }
          ]}
        />

        {/* Gamification System */}
        <ImageContentGrid
          image="/images/projects/elf-mobile-store/mockup/game-selection.png"
          imageAlt="Gamification & Rewards"
          badge="GAMIFICATION"
          badgeIcon={Trophy}
          title="Interactive Games & Rewards"
          description="Engage users with interactive games, achievement systems, and loyalty rewards that boost customer engagement and retention significantly."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: 'Game Hub',
              description: 'Multiple interactive games with leaderboards and prizes'
            },
            {
              icon: Check,
              title: 'Achievements',
              description: 'Unlock badges and rewards for completing activities'
            },
            {
              icon: Check,
              title: 'Loyalty Points',
              description: 'Earn points on purchases and redeem exclusive benefits'
            }
          ]}
        />

        {/* Digital Wallet */}
        <ImageContentGrid
          image="/images/projects/elf-mobile-store/mockup/wallet-management.png"
          imageAlt="Digital Wallet & Payments"
          badge="PAYMENTS"
          badgeIcon={Wallet}
          title="Integrated Payment Solution"
          description="Secure digital wallet with multiple payment methods including bKash, Nagad, and SSL Commerz for seamless and convenient transactions."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Multiple Methods',
              description: 'bKash, Nagad, credit/debit cards, and cash on delivery'
            },
            {
              icon: Check,
              title: 'Transaction History',
              description: 'Complete payment records with detailed invoices'
            },
            {
              icon: Check,
              title: 'Secure Processing',
              description: 'SSL Commerz integration with encrypted transactions'
            }
          ]}
        />

        {/* Service Center Booking */}
        <FullWidthImageContent
          image="/images/projects/elf-mobile-store/mockup/app-referral-and-achivements.png"
          imageAlt="Referral & Achievements System"
          badge="REFERRALS"
          badgeIcon={Gift}
          title="Referral Program & Achievements"
          description="Share the app with friends and earn rewards. Track your achievements, view referral history, and unlock exclusive benefits as you grow your network."
          imagePosition="left"
          bgColor="bg-white"
          features={[
            {
              icon: Gift,
              title: 'Earn Rewards',
              description: 'Get points for every successful referral and unlock bonuses'
            },
            {
              icon: Trophy,
              title: 'Achievement Tracking',
              description: 'Complete challenges and earn badges for milestones'
            },
            {
              icon: Star,
              title: 'Exclusive Benefits',
              description: 'Access special discounts and early product launches'
            }
          ]}
        />

        {/* Practice & Learning */}
        <FullWidthImageContent
          image="/images/projects/elf-mobile-store/mockup/game-hub-and-prctice.png"
          imageAlt="Game Hub & Practice Mode"
          badge="LEARNING"
          badgeIcon={Zap}
          title="Interactive Learning Experience"
          description="Practice mode helps users learn about automotive products through engaging games. Improve knowledge about engine oils, maintenance, and product selection while having fun."
          imagePosition="right"
          bgColor="bg-gray-50"
          features={[
            {
              icon: Zap,
              title: 'Practice Games',
              description: 'Learn through interactive quizzes and challenges'
            },
            {
              icon: BarChart,
              title: 'Track Progress',
              description: 'Monitor your learning journey with detailed statistics'
            },
            {
              icon: Award,
              title: 'Level Up',
              description: 'Unlock advanced content as you progress'
            }
          ]}
        />
      </CaseStudySolution>

      {/* Platform Showcase */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-lime via-accent-lime to-accent-lime/70 p-12">
            <div className="text-center mb-8">
              <h3 className="text-4xl font-extrabold mb-3">Complete Platform Solution</h3>
              <p className="text-lg text-black/80 font-medium">Web Store + Mobile App Integration</p>
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-black/10">
              <Image
                src="/images/projects/elf-mobile-store/mockup/website-ui-ux-enhancement.png"
                alt="Website UI/UX Enhancement"
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
                        src={`/images/projects/elf-mobile-store/mockup/${screenshots[currentScreenshot].image}`}
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
                Seamless Mobile Experience
              </h3>
              
              <p className="text-lg text-gray-600 mb-8">
                Our intuitive mobile app makes shopping for automotive products effortless. From discovering products to managing orders, everything is just a tap away.
              </p>

              {/* Feature List */}
              <div className="space-y-6">
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
            The ELF Bangladesh platform is built using <span className="font-bold text-black">React Native</span> and{' '}
            <span className="font-bold text-black">Expo 54</span> for cross-platform mobile development, ensuring a 
            seamless experience on both iOS and Android devices. State management is handled by{' '}
            <span className="font-bold text-black">Redux Toolkit 2.0</span> with persistent storage. The UI leverages{' '}
            <span className="font-bold text-black">React Native Paper 5.14</span> for Material Design 3 components. 
            We use <span className="font-bold text-black">Supabase</span> for our backend infrastructure with{' '}
            <span className="font-bold text-black">PostgreSQL</span> database and Row-Level Security. Payment processing 
            is handled through <span className="font-bold text-black">SSL Commerz</span>, <span className="font-bold text-black">bKash</span>, 
            and <span className="font-bold text-black">Nagad</span> integrations. The app features full{' '}
            <span className="font-bold text-black">internationalization</span> support with Bengali and English using{' '}
            <span className="font-bold text-black">i18next</span>, delivering a localized experience for all users.
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
            { icon: Smartphone, value: '60+', label: 'App Screens' },
            { icon: ShoppingCart, value: '500+', label: 'Products' },
            { icon: Code, value: '50K+', label: 'Lines of Code' },
            { icon: Award, value: '95%', label: 'Project Complete' }
          ]}
        />

        <div className="mt-12">
          <ImageShowcaseGrid
            items={[
              {
                title: 'Mobile App Interface',
                image: '/images/projects/elf-mobile-store/mockup/app-home-screen.png',
                alt: 'ELF Mobile App Home Screen',
                caption: 'Intuitive home screen with quick actions and featured products.'
              },
              {
                title: 'Rewards System',
                image: '/images/projects/elf-mobile-store/mockup/gamify-rewards-system.png',
                alt: 'Gamification & Rewards',
                caption: 'Engaging gamification system with loyalty points and achievements.'
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
              title: 'For Customers',
              benefits: [
                'Browse and purchase 500+ automotive products anytime, anywhere',
                'Earn rewards and points through gamification and purchases',
                'Find and book service centers with GPS integration',
                'Access emergency roadside assistance instantly',
                'Track orders and manage vehicles in one convenient app'
              ]
            },
            {
              title: 'For Business',
              benefits: [
                'Digital transformation of traditional retail operations',
                'Increased customer engagement through gamification',
                'Automated order processing and inventory management',
                'Data-driven insights into customer behavior and preferences',
                'Reduced operational costs with integrated digital services'
              ]
            }
          ]}
        />

        <div className="mt-12">
          <KeyAchievementsCard
            achievements={[
              { value: '25+', label: 'Database Tables' },
              { value: 'iOS+Android', label: 'Cross-Platform' },
              { value: '100%', label: 'Type Safety' }
            ]}
          />
        </div>
      </CaseStudySection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        subtitle="Let's build an enterprise-grade mobile platform that drives customer engagement and business growth."
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
