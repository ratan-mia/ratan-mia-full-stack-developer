'use client';

import CaseStudyDetail from '@/app/components/case-studies/CaseStudyDetail';

export default function GamifyCaseStudy() {
  const project = {
    id: 'gamify',
    title: 'Gamify (PieQR)',
    subtitle: 'QR Loyalty & Engagement Platform',
    category: 'SaaS Product',
    type: 'featured',
    year: '2024',
    status: 'live',
    client: 'FMCG & Automotive Brands',
    thumbnail: '/images/projects/pieqr/screenshots/home-screen.jpg',
    images: [
      '/images/projects/pieqr/screenshots/home-screen.jpg',
      '/images/projects/pieqr/screenshots/game-screen.jpg',
      '/images/projects/pieqr/screenshots/game-2-screen.jpg',
      '/images/projects/pieqr/screenshots/wallet.jpg',
      '/images/projects/pieqr/screenshots/gifts.jpg',
      '/images/projects/pieqr/screenshots/trasactions-insights.jpg',
    ],
    description: 'Complete engagement engine designed for FMCG, oil companies, automotive parts, beverage brands, and nationwide campaigns. Features QR-based loyalty system with gamification, fraud detection, and multi-tier reward management.',
    shortDescription: 'QR-based loyalty platform with gamification for nationwide campaigns',
    
    challenge: 'FMCG and automotive brands needed a scalable engagement platform to track product distribution, prevent fraud, and incentivize customer loyalty across 64 districts while managing multiple user categories with unique verification requirements.',
    
    solution: 'Built a comprehensive React Native mobile app with Node.js backend featuring QR scanning, gamification (Spin Wheel & Flip Card), category-based user profiles, geo-tracking, fraud detection algorithms, and a powerful admin dashboard with real-time analytics and heat map visualizations.',
    
    keyHighlights: [
      {
        title: 'Multi-Category User System',
        description: '4 user types (Customer, Driver, Retailer, Mechanic) with unique verification workflows'
      },
      {
        title: 'Advanced Fraud Prevention',
        description: 'Device fingerprinting, geo-location tracking, and pattern recognition algorithms'
      },
      {
        title: 'Real-Time Distribution Analytics',
        description: 'Heat maps and insights down to store/shop level across entire country'
      },
      {
        title: 'Tier-Based Reward System',
        description: 'Dynamic membership tiers with automated eligibility and benefits'
      }
    ],
    
    technologies: {
      frontend: ['React Native', 'Expo SDK', 'Redux Toolkit', 'TypeScript', 'React Navigation'],
      backend: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'JWT Auth'],
      features: ['QR Scanner', 'OTP Verification', 'Geo-tracking', 'Game Engine', 'Fraud Detection'],
      payment: ['bKash', 'Nagad', 'SSL Commerce', 'Mobile Recharge API'],
      devops: ['Docker', 'AWS EC2', 'S3', 'CloudFront', 'PM2']
    },
    
    detailedFeatures: [
      {
        title: 'QR Scan & Authentication System',
        description: 'Entry point featuring secure QR code scanning with unique code validation, OTP-based phone verification, and geo-location capture for campaign tracking. Supports bilingual interface (English/Bangla) with seamless flow from scan to dashboard access.',
        image: '/images/projects/pieqr/screenshots/home-screen.jpg',
        badge: 'Core Feature',
        highlights: [
          'Unique QR code generation with batch export capabilities',
          'OTP verification with SMS integration and retry logic',
          'Device fingerprinting for security',
          'Location capture on initial login for distribution analytics',
          'Profile completion check before redemption actions',
          'Language toggle for English/Bangla support'
        ],
        technologies: ['React Native Camera', 'Expo Location', 'Twilio SMS', 'JWT']
      },
      {
        title: 'Gamification Module - Spin Wheel & Flip Card',
        description: 'Engaging game mechanics with probability-based reward systems. Features two game types with dynamic configuration from admin panel, membership tier-based prize eligibility, and multiple prize types including coins, physical gifts, cashback, and try again options.',
        image: '/images/projects/pieqr/screenshots/game-screen.jpg',
        badge: 'User Engagement',
        highlights: [
          'Spin Wheel game with smooth animations and haptic feedback',
          'Flip Card matching game with multiple difficulty levels',
          'Probability engine with configurable win rates per tier',
          '4 prize types: Coins, Physical Gifts, Cashback, Try Again',
          'Post-game flow with immediate redemption or scan again option',
          'Congratulations popup with reward details',
          'Game history tracking and analytics'
        ],
        technologies: ['React Native Reanimated', 'Lottie Animations', 'Redux']
      },
      {
        title: 'Digital Wallet & Rewards System',
        description: 'Comprehensive wallet system featuring coin balance management, transaction history, redemption request submission, and status tracking. Supports multiple redemption types including physical gifts, mobile recharge, and digital wallet transfers.',
        image: '/images/projects/pieqr/screenshots/wallet.jpg',
        highlights: [
          'Real-time coin balance with transaction history',
          'Redemption request submission with admin approval workflow',
          'Status tracking: Pending, Approved, Rejected with notifications',
          'Multiple redemption types: Physical gifts, Mobile recharge, Nagad, bKash',
          'Gift catalog with tier-based filtering',
          'Campaign duration and availability status indicators',
          'Redemption history with export capabilities'
        ],
        technologies: ['PostgreSQL', 'Redis Cache', 'Push Notifications']
      },
      {
        title: 'Category-Specific Profile Management',
        description: 'Advanced profile system supporting 4 user categories (Customer, Driver, Retailer, Mechanic) with unique document verification workflows. Each category has tailored fields, mandatory document uploads, and admin verification processes.',
        image: '/images/projects/pieqr/screenshots/home-screen.jpg',
        highlights: [
          'Customer: Vehicle details, ID document upload',
          'Driver: Driving license (front/back), vehicle model/year',
          'Retailer: Trade License, BIN Certificate, shop images, business card',
          'Mechanic: Workshop details, mechanic ID, association documents',
          'Profile completion percentage tracking',
          'Document verification status indicators',
          'Admin review and approval dashboard',
          'Multiple image upload with compression'
        ],
        technologies: ['React Native Image Picker', 'S3', 'Image Compression']
      },
      {
        title: 'Interactive Gift Catalog',
        description: 'Beautifully designed gift catalog with grid layout, detailed product views, and smart filtering. Shows eligibility criteria, availability status, campaign duration, and step-by-step redemption instructions with terms and conditions.',
        image: '/images/projects/pieqr/screenshots/gifts.jpg',
        highlights: [
          'Grid-based responsive layout with high-quality images',
          'Gift detail modal with specifications',
          'Tier + points eligibility criteria display',
          'Real-time availability status',
          'Campaign duration countdown',
          'Step-by-step redemption process',
          'Search and filter by category',
          'Favorites and wishlist functionality'
        ],
        technologies: ['React Native FlatList', 'Image CDN', 'Search Algorithm']
      },
      {
        title: 'Admin Dashboard & Analytics',
        description: 'Powerful admin panel with Google Analytics-style charts, real-time data visualization, and comprehensive reports. Features heat maps for distribution tracking, user management, QR generation, and campaign performance monitoring.',
        image: '/images/projects/pieqr/screenshots/trasactions-insights.jpg',
        badge: 'Admin Panel',
        highlights: [
          'Interactive charts with date range filters',
          'Key metrics: Total Scans, Users, Rewards, ROI',
          'Scan and redemption trends (daily/monthly/yearly)',
          'Heat map with district-level distribution insights',
          'User list with advanced filtering and search',
          'QR code batch generation with PDF export',
          'Marketplace product management',
          'Game probability configuration',
          'Redemption approval workflow',
          'Export functionality for all reports'
        ],
        technologies: ['React.js', 'Chart.js', 'Leaflet Maps', 'PDF Generation']
      }
    ],
    
    features: [
      'QR Scan Engine with unique code tracking and validation',
      'OTP Verification with device tracking and security',
      'Spin Wheel and Flip Card game systems with animations',
      'Probability-based reward logic with admin configuration',
      'Digital wallet with coin balance and transaction history',
      'Multi-category user profiles (Customer, Driver, Retailer, Mechanic)',
      'Category-specific document upload and verification',
      'Geo-tagged scans for distribution analytics and tracking',
      'Fraud detection and abuse prevention algorithms',
      'Admin dashboard with real-time visualization and reports',
      'Bilingual support (English/Bangla) with language toggle',
      'Gift catalog with tier-based eligibility filtering',
      'Multiple redemption types (Physical gifts, Mobile recharge, Digital wallets)',
      'Campaign duration management with availability tracking',
      'Push notifications for rewards and updates',
      'Batch QR code generation with PDF export',
      'Heat map visualization with district-level insights',
      'User verification workflow with document review',
      'Transaction history with export capabilities',
      'Mobile recharge integration (All Operators)',
      'bKash & Nagad wallet transfers',
      'Gift inventory management',
      'Campaign scheduling and automation',
      'Performance analytics by user category',
      'Scan pattern detection for fraud prevention',
      'Device fingerprinting and IP tracking',
      'Profile completion enforcement',
      'Multi-language content management',
      'SMS notification system',
      'Email verification and notifications',
      'Role-based admin access control',
      'Audit logs for all admin actions',
      'Data export for business intelligence',
      'API integration for third-party services',
      'Offline mode with sync capability',
      'Image compression and optimization',
      'CDN integration for fast asset delivery'
    ],
    
    technicalDetails: [
      {
        title: 'Scalable Architecture',
        description: 'Built with microservices architecture to handle high traffic and concurrent users.',
        specs: [
          'Node.js cluster mode for load balancing',
          'Redis caching for frequent queries',
          'PostgreSQL with optimized indexes',
          'AWS S3 for media storage',
          'CloudFront CDN for global delivery'
        ]
      },
      {
        title: 'Security Implementation',
        description: 'Multi-layered security with encryption, authentication, and fraud prevention.',
        specs: [
          'JWT-based authentication with refresh tokens',
          'Device fingerprinting for fraud detection',
          'IP whitelisting for admin access',
          'SQL injection prevention with parameterized queries',
          'Rate limiting on all API endpoints'
        ]
      },
      {
        title: 'Mobile Performance',
        description: 'Optimized React Native app for smooth user experience.',
        specs: [
          'Code splitting and lazy loading',
          'Image optimization and caching',
          'Offline-first architecture with sync',
          'Hermes JavaScript engine',
          'Native module integration for camera'
        ]
      },
      {
        title: 'Analytics & Monitoring',
        description: 'Comprehensive tracking and error monitoring system.',
        specs: [
          'Custom event tracking',
          'Error logging with Sentry',
          'Performance monitoring',
          'User behavior analytics',
          'Real-time dashboard updates'
        ]
      }
    ],
    
    impact: [
      { value: '10x', label: 'Increase in customer engagement' },
      { value: '64', label: 'Districts covered nationwide' },
      { value: '85%', label: 'Reduction in fraudulent claims' },
      { value: '50K+', label: 'Active users in 3 months' },
      { value: '4', label: 'User categories supported' },
      { value: '100K+', label: 'Daily QR scans processed' },
      { value: '95%', label: 'User satisfaction rate' },
      { value: '24/7', label: 'System uptime' }
    ],
    
    challenges: [
      {
        title: 'Fraud Prevention',
        description: 'Implemented device fingerprinting, geo-location tracking, and pattern recognition to prevent duplicate scans and fraudulent redemptions.',
      },
      {
        title: 'Scalability',
        description: 'Designed system to handle 100,000+ daily scans with Redis caching and optimized database queries.',
      },
      {
        title: 'Offline Support',
        description: 'Built offline-first architecture allowing users to scan QR codes without internet and sync later.',
      },
      {
        title: 'Multi-tier Management',
        description: 'Created flexible tier system supporting different user categories with unique benefits and redemption rules.',
      },
    ],
    
    liveUrl: '#',
    demoVideo: null,
  };

  return <CaseStudyDetail project={project} />;
}
