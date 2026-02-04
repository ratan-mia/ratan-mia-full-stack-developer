'use client';

import CaseStudyDetail from '@/components/case-studies/CaseStudyDetail';

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
    
    technologies: {
      frontend: ['React Native', 'Expo', 'Redux Toolkit', 'TypeScript'],
      backend: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
      features: ['QR Scanner', 'OTP Verification', 'Geo-tracking', 'Game Engine', 'Fraud Detection'],
      payment: ['bKash', 'Nagad', 'SSL Commerce'],
    },
    
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
    ],
    
    impact: [
      '10x increase in customer engagement',
      'Nationwide distribution tracking across 64 districts',
      'Reduced fraudulent claims by 85%',
      'Multi-tier reward system with 4 membership levels',
      '50,000+ active users within first 3 months',
      'Real-time analytics for business insights',
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
