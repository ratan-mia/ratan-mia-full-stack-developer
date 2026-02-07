'use client';

import CaseStudyAbout from '@/app/components/case-studies/CaseStudyAbout';
import CaseStudyChallenge from '@/app/components/case-studies/CaseStudyChallenge';
import CaseStudyHero from '@/app/components/case-studies/CaseStudyHero';
import CaseStudySolution from '@/app/components/case-studies/CaseStudySolution';
import CaseStudyTemplate, {
    BusinessImpactCards,
    CaseStudySection,
    FullWidthImageContent,
    ImageContentGrid,
    KeyAchievementsCard,
    MetricsGrid
} from '@/app/components/case-studies/CaseStudyTemplate';
import {
    Award,
    BarChart,
    Check,
    CheckCircle,
    Code,
    CreditCard,
    Database,
    Globe,
    Layers,
    Lock,
    Monitor,
    Package,
    Search,
    Server,
    ShoppingCart,
    Smartphone,
    Star,
    TrendingUp,
    Users,
    Zap
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Project Data
const projectData = {
  company: 'Japan Parts Bangladesh',
  category: 'E-commerce / Headless CMS',
  liveUrl: 'https://japanparts.com.bd',
  timeline: '2024-2026',
  services: [
    'Headless Commerce Development',
    'Custom CMS Integration',
    'Mobile App Development',
    'API Architecture',
    'Performance Optimization'
  ]
};

export default function ShopifyHeadlessCMSCaseStudy() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const screenshots = [
    {
      image: 'mockup/headless-cms-launch.png',
      title: 'Modern E-commerce Platform',
      description: 'Next.js 14 powered headless commerce platform with Shopify backend, delivering blazing-fast performance and seamless shopping experience.'
    },
    {
      image: 'mockup/vehicle-fitment-search.png',
      title: 'Dynamic Vehicle Fitment Search',
      description: 'Intelligent search system with 218+ vehicle models, cascading filters for make, model, year, engine, and chassis compatibility.'
    },
    {
      image: 'mockup/single-product-with-car-applications.png',
      title: 'Product Details & Compatibility',
      description: 'Comprehensive product pages with vehicle applications, specifications, pricing, and real-time inventory tracking.'
    },
    {
      image: 'mockup/shopify-headless-mobile-app.png',
      title: 'Native Mobile Experience',
      description: 'Cross-platform mobile app with seamless synchronization, offline support, and native performance for iOS and Android.'
    },
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
          category="Headless Commerce"
          categoryIcon={Layers}
          title="Japan Parts"
          subtitle="Bangladesh"
          description="Enterprise-level headless commerce platform serving 50,000+ automotive parts with advanced vehicle fitment search, multi-channel selling, and seamless mobile experience."
          techStack={['Next.js 14', 'Shopify Headless', 'TypeScript', 'Tailwind CSS 4']}
          liveUrl="https://japanparts.com.bd"
          heroImage="/images/projects/headless-cms/mockup/headless-cms-launch.png"
          imageAlt="Japan Parts Headless CMS Platform"
          badge1Text="Live Platform"
          badge1Icon={TrendingUp}
          badge2Text="50K+ Products"
          badge2Icon={Package}
        />
      }
    >
      {/* About Section */}
      <CaseStudyAbout
        title="About the Project"
        paragraphs={[
          "Japan Parts Bangladesh is an enterprise-level automotive e-commerce platform specializing in authentic Japanese auto parts serving the Bangladesh market. The platform needed to handle 50,000+ SKUs with sophisticated vehicle fitment search, multi-dimensional filtering, and seamless integration between web and mobile experiences.",
          "Built with Next.js 14 and Shopify Headless CMS, the solution combines the power of Shopify's commerce engine with a custom frontend that delivers exceptional performance, advanced search capabilities, and a mobile-first experience. The platform features dynamic vehicle fitment search with 218+ vehicle models, real-time inventory management, custom checkout optimization, and comprehensive analytics."
        ]}
        image="/images/projects/headless-cms/mockup/headless-cms-web-and-mobile-app.png"
        imageAlt="Japan Parts Platform Overview"
      />

      {/* Challenge Section */}
      <CaseStudyChallenge
        id="challenge"
        label="REQUIREMENTS & CHALLENGES"
        icon={Zap}
        title="Complex E-commerce Requirements"
        description={
          <>
            Building an enterprise-level automotive e-commerce platform required solving several complex challenges. 
            We implemented a <span className="font-bold text-black">dynamic vehicle fitment search system</span> with 
            cascading filters handling 218+ vehicle models across 6 major Japanese brands, enabling customers to find 
            compatible parts without technical knowledge. The platform features{' '}
            <span className="font-bold text-black">sophisticated multi-dimensional filtering</span> across 50,000+ 
            SKUs with brand, type, price, availability, and vehicle compatibility filters working in real-time. We 
            developed <span className="font-bold text-black">custom checkout optimization</span> for the Bangladesh 
            market with local payment gateways, phone validation, and post-purchase engagement workflows. Additionally, 
            we built a <span className="font-bold text-black">headless architecture</span> that seamlessly integrates 
            Shopify's commerce backend with custom Next.js frontend and native mobile apps while maintaining sub-200ms 
            response times.
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
        description="We built a comprehensive headless commerce solution combining Next.js 14 frontend with Shopify backend, custom vehicle fitment system, and native mobile apps."
        bgColor="bg-white"
        centered={true}
      >
        {/* Headless CMS Architecture */}
        <ImageContentGrid
          image="/images/projects/headless-cms/mockup/headless-cms-launch.png"
          imageAlt="Headless CMS Architecture"
          badge="HEADLESS ARCHITECTURE"
          badgeIcon={Layers}
          title="Modern Commerce Stack"
          description="Next.js 14 powered frontend with Shopify Storefront API, delivering server-side rendering, optimized performance, and seamless shopping experience across all devices."
          imagePosition="left"
          features={[
            {
              icon: Server,
              title: 'Shopify Backend',
              description: 'Leveraging Shopify\'s robust commerce engine for inventory and order management'
            },
            {
              icon: Code,
              title: 'Custom Frontend',
              description: 'Next.js 14 with TypeScript for type-safe, performant user experience'
            },
            {
              icon: Zap,
              title: 'Blazing Fast',
              description: 'Sub-200ms response times with edge caching and optimized queries'
            }
          ]}
        />

        {/* Vehicle Fitment Search */}
        <ImageContentGrid
          image="/images/projects/headless-cms/mockup/vehicle-fitment-search.png"
          imageAlt="Vehicle Fitment Search System"
          badge="SMART SEARCH"
          badgeIcon={Search}
          title="Dynamic Vehicle Fitment"
          description="Intelligent cascading search system with 218+ vehicle models across Toyota, Honda, Nissan, Mitsubishi, Lexus, and Mazda, helping customers find compatible parts instantly."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: 'Cascading Filters',
              description: '5-stage filtration: Make → Model → Year → Engine → Chassis'
            },
            {
              icon: Check,
              title: 'Real-time Updates',
              description: 'Dynamic dropdown population with <100ms response time'
            },
            {
              icon: Check,
              title: 'Smart Validation',
              description: 'Contextual placeholders and error handling for seamless UX'
            }
          ]}
        />

        {/* Product Details & Applications */}
        <ImageContentGrid
          image="/images/projects/headless-cms/mockup/single-product-with-car-applications.png"
          imageAlt="Product Details with Vehicle Applications"
          badge="PRODUCT EXPERIENCE"
          badgeIcon={Package}
          title="Comprehensive Product Pages"
          description="Detailed product information with vehicle compatibility matrix, specifications, high-quality images, pricing variants, and real-time inventory status for informed purchasing decisions."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Vehicle Applications',
              description: 'Compatible vehicle list with make, model, year, and chassis details'
            },
            {
              icon: Check,
              title: 'Multi-variant Support',
              description: 'Color, size, material options with dynamic pricing'
            },
            {
              icon: Check,
              title: 'Live Inventory',
              description: 'Real-time stock status and availability tracking'
            }
          ]}
        />

        {/* Mobile App Experience */}
        <ImageContentGrid
          image="/images/projects/headless-cms/mockup/shopify-headless-mobile-app.png"
          imageAlt="Mobile App Experience"
          badge="MOBILE APP"
          badgeIcon={Smartphone}
          title="Native Mobile Experience"
          description="Cross-platform mobile application built with React Native, featuring seamless synchronization with web platform, offline support, and optimized for iOS and Android."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: 'Native Performance',
              description: 'Optimized UI/UX with native components and gestures'
            },
            {
              icon: Check,
              title: 'Offline Support',
              description: 'Browse products and sync cart when connection restored'
            },
            {
              icon: Check,
              title: 'Push Notifications',
              description: 'Real-time updates for orders, offers, and inventory'
            }
          ]}
        />

        {/* Authentication & Profile */}
        <ImageContentGrid
          image="/images/projects/headless-cms/mockup/shopify-auth-and-my-profile.png"
          imageAlt="Authentication and User Profile"
          badge="USER MANAGEMENT"
          badgeIcon={Lock}
          title="Secure Authentication System"
          description="Shopify customer authentication with JWT tokens, profile management, order history, saved addresses, and wishlist functionality integrated across web and mobile."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Social Login',
              description: 'Google, Facebook authentication with Shopify integration'
            },
            {
              icon: Check,
              title: 'Profile Management',
              description: 'Manage addresses, payment methods, and preferences'
            },
            {
              icon: Check,
              title: 'Order Tracking',
              description: 'Real-time order status and delivery tracking'
            }
          ]}
        />

        {/* Collections & Navigation */}
        <ImageContentGrid
          image="/images/projects/headless-cms/mockup/collections-dynamic-mega-menu.png"
          imageAlt="Dynamic Collections and Mega Menu"
          badge="NAVIGATION"
          badgeIcon={Globe}
          title="Dynamic Mega Menu System"
          description="Intelligent navigation with dynamic collections, hierarchical categories, and mega menu featuring product images, descriptions, and real-time inventory counts."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: 'Smart Collections',
              description: 'Auto-updating collections based on tags and metafields'
            },
            {
              icon: Check,
              title: 'Visual Navigation',
              description: 'Image-rich mega menu with product previews'
            },
            {
              icon: Check,
              title: 'SEO Optimized',
              description: 'Clean URLs and metadata for search engine visibility'
            }
          ]}
        />

        {/* Payment & Checkout */}
        <ImageContentGrid
          image="/images/projects/headless-cms/mockup/emi-options.png"
          imageAlt="EMI Options and Payment Integration"
          badge="PAYMENTS"
          badgeIcon={CreditCard}
          title="Flexible Payment Options"
          description="Local payment gateway integration with bKash, Nagad, credit cards, and EMI options tailored for Bangladesh market with secure checkout process."
          imagePosition="left"
          features={[
            {
              icon: Check,
              title: 'Local Gateways',
              description: 'bKash, Nagad, and major credit/debit card support'
            },
            {
              icon: Check,
              title: 'EMI Calculator',
              description: 'Transparent EMI breakdown with flexible tenure options'
            },
            {
              icon: Check,
              title: 'Secure Checkout',
              description: 'PCI compliant payment processing with fraud detection'
            }
          ]}
        />

        {/* Order Tracking */}
        <ImageContentGrid
          image="/images/projects/headless-cms/mockup/real-time-order-tracking.png"
          imageAlt="Real-time Order Tracking"
          badge="LOGISTICS"
          badgeIcon={Package}
          title="Real-time Order Tracking"
          description="Comprehensive order management system with real-time tracking, delivery updates, and customer notifications integrated with local logistics partners."
          imagePosition="right"
          features={[
            {
              icon: Check,
              title: 'Live Tracking',
              description: 'Real-time order status from processing to delivery'
            },
            {
              icon: Check,
              title: 'SMS Notifications',
              description: 'Automated updates at each fulfillment stage'
            },
            {
              icon: Check,
              title: 'Delivery Partners',
              description: 'Integration with Pathao, RedX, and local couriers'
            }
          ]}
        />
      </CaseStudySolution>

      {/* Technical Stack Section */}
      <CaseStudySection
        id="tech-stack"
        label="TECHNOLOGY STACK"
        icon={Code}
        title="Modern Tech Architecture"
        description="Enterprise-grade technology stack ensuring scalability, performance, and maintainability."
        bgColor="bg-gray-50"
        centered={true}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Globe,
              title: 'Frontend',
              items: ['Next.js 14', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion']
            },
            {
              icon: Database,
              title: 'Backend',
              items: ['Shopify Storefront API', 'GraphQL', 'Webhooks', 'Metaobjects']
            },
            {
              icon: Smartphone,
              title: 'Mobile',
              items: ['React Native', 'Expo', 'Native APIs', 'Push Notifications']
            },
            {
              icon: Server,
              title: 'Infrastructure',
              items: ['Vercel Edge', 'CDN', 'Redis Cache', 'Analytics']
            }
          ].map((stack, idx) => {
            const Icon = stack.icon;
            return (
              <div key={idx} className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-accent-lime transition-all duration-300">
                <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-3">{stack.title}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-lime"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </CaseStudySection>

      {/* Key Achievements */}
      <CaseStudySection
        id="results"
        label="KEY ACHIEVEMENTS"
        icon={Award}
        title="Project Impact"
        description="Measurable results demonstrating the success of the headless commerce implementation."
        bgColor="bg-white"
        centered={true}
      >
        <MetricsGrid
          metrics={[
            {
              icon: Package,
              value: '50,000+',
              label: 'Products',
              description: 'Automotive parts in inventory'
            },
            {
              icon: Monitor,
              value: '218+',
              label: 'Vehicle Models',
              description: 'Supported for fitment search'
            },
            {
              icon: Zap,
              value: '<200ms',
              label: 'Response Time',
              description: 'Average API response time'
            },
            {
              icon: Users,
              value: '71.3%',
              label: 'Data Accuracy',
              description: 'Vehicle import success rate'
            },
            {
              icon: ShoppingCart,
              value: '15%',
              label: 'Cart Recovery',
              description: 'Reduced abandonment rate'
            },
            {
              icon: TrendingUp,
              value: '60%',
              label: 'Search Speed',
              description: 'Faster part discovery'
            }
          ]}
        />
      </CaseStudySection>

      {/* Business Impact */}
      <CaseStudySection
        id="impact"
        label="BUSINESS IMPACT"
        icon={TrendingUp}
        title="Transforming Automotive E-commerce"
        bgColor="bg-gray-50"
        centered={false}
      >
        <BusinessImpactCards
          cards={[
            {
              title: 'For Customers',
              benefits: [
                'Find compatible parts in seconds without technical knowledge',
                'Seamless shopping experience across web and mobile',
                'Transparent pricing with EMI options for expensive parts',
                'Real-time order tracking and delivery updates',
                'Comprehensive product information with vehicle compatibility'
              ]
            },
            {
              title: 'For Business',
              benefits: [
                'Reduced customer support inquiries about compatibility',
                'Increased conversion rate for first-time buyers',
                '15% reduction in checkout abandonment',
                'Scalable architecture supporting 50,000+ SKUs',
                'Competitive advantage in Bangladesh automotive market'
              ]
            }
          ]}
        />
      </CaseStudySection>

      {/* Key Features Highlight */}
      <CaseStudySection
        id="features"
        label="KEY FEATURES"
        icon={Star}
        title="Platform Capabilities"
        bgColor="bg-white"
        centered={true}
      >
        <KeyAchievementsCard
          achievements={[
            {
              icon: Search,
              title: 'Dynamic Vehicle Fitment Search',
              description: '5-stage cascading filtration across 218+ vehicle models with real-time updates and intelligent validation'
            },
            {
              icon: Layers,
              title: 'Headless Commerce Architecture',
              description: 'Decoupled frontend and backend enabling flexibility, scalability, and seamless multi-channel experience'
            },
            {
              icon: Package,
              title: 'Advanced Product Discovery',
              description: 'Multi-dimensional filtering across brand, type, price, availability, and vehicle compatibility'
            },
            {
              icon: Smartphone,
              title: 'Native Mobile Apps',
              description: 'iOS and Android apps with offline support, push notifications, and seamless synchronization'
            },
            {
              icon: CreditCard,
              title: 'Local Payment Integration',
              description: 'bKash, Nagad, cards, and EMI options optimized for Bangladesh market'
            },
            {
              icon: BarChart,
              title: 'Comprehensive Analytics',
              description: 'Real-time insights on sales, inventory, customer behavior, and search patterns'
            }
          ]}
        />
      </CaseStudySection>
    </CaseStudyTemplate>
  );
}
