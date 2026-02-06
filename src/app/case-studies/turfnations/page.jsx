'use client';

import CaseStudyDetail from '@/components/case-studies/CaseStudyDetail';

export default function TurfLetCaseStudy() {
  const project = {
    id: 'TurfLet',
    title: 'TurfLet',
    subtitle: 'Sports Booking & Reservation Platform',
    category: 'SaaS Product',
    type: 'featured',
    year: '2024',
    status: 'live',
    client: 'Sports Venues & Recreation Centers',
    thumbnail: '/images/projects/turflet/www.turflet.app.png',
    images: [
      '/images/projects/turflet/www.turflet.app.png',
    ],
    description: 'Complete booking platform for sports grounds, resorts, convention centers, and recreational venues. Features real-time availability calendar, dynamic pricing engine, SSL Commerce payment integration, and comprehensive venue management system.',
    shortDescription: 'Real-time booking system for sports venues with dynamic pricing',
    
    technologies: {
      frontend: ['React Native', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Supabase', 'Prisma ORM', 'PostgreSQL', 'Node.js'],
      features: ['Real-time Calendar', 'Payment Gateway', 'Google Maps', 'Analytics Dashboard'],
      payment: ['SSL Commerce', 'bKash', 'Nagad', 'Visa/Mastercard'],
    },
    
    features: [
      'Real-time availability calendar with 30-day view',
      'Hourly slot booking system with time selection',
      'Dynamic pricing (weekend surcharges, peak hours, early bird discounts)',
      'SSL Commerce payment integration with multiple payment methods',
      'Multi-venue support with independent management',
      'Ground owner dashboard with earnings analytics',
      'Real-time earnings and booking reports',
      'Player profile management with booking history',
      'Booking history with status tracking and filters',
      'Cancellation and refund management',
      'Interactive map with venue locations and directions',
      'Rating and review system for venues',
      'Push notifications for booking confirmations',
      'Email notifications with booking details',
      'Field type selection (5-a-side, 7-a-side, 11-a-side)',
      'Amenities display (Parking, changing rooms, cafeteria, etc.)',
      'Photo gallery for each venue',
      'Operating hours management',
      'Venue search and filtering system',
      'Deep linking for mobile app integration',
    ],
    
    impact: [
      'Automated venue booking process',
      'Subscription-based recurring revenue model',
      'Real-time payment processing with 99.9% uptime',
      'Multi-role system (Player, Owner, Admin)',
      'Reduced booking conflicts by 100%',
      'Increased venue utilization by 40%',
      '85% reduction in manual booking work',
      'Average booking time under 2 minutes',
    ],
    
    challenges: [
      {
        title: 'Real-time Slot Management',
        description: 'Built conflict-free booking system with real-time updates using Supabase subscriptions to prevent double bookings.',
      },
      {
        title: 'Dynamic Pricing Engine',
        description: 'Implemented flexible pricing rules supporting base prices, weekend surcharges, peak hours, and time-based discounts.',
      },
      {
        title: 'Payment Gateway Integration',
        description: 'Integrated SSL Commerce with auto-redirect, deep linking, and comprehensive error handling for smooth user experience.',
      },
      {
        title: 'Multi-venue Scalability',
        description: 'Designed architecture to support unlimited venues with independent pricing, schedules, and analytics.',
      },
    ],
    
    liveUrl: 'https://www.turflet.app',
    demoVideo: null,
  };

  return <CaseStudyDetail project={project} />;
}
