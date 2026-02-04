'use client';

import CaseStudyDetail from '@/components/case-studies/CaseStudyDetail';

export default function CheryBangladeshAppCaseStudy() {
  const project = {
    id: 'chery-mobile-app',
    title: 'Chery Bangladesh Mobile App',
    subtitle: 'Automotive Digital Ecosystem',
    category: 'Mobile App',
    type: 'featured',
    year: '2024',
    status: 'live',
    client: 'Chery Bangladesh',
    thumbnail: '/images/projects/cherymobileapp/02-home-screen.jpg',
    images: [
      '/images/projects/cherymobileapp/02-home-screen.jpg',
      '/images/projects/cherymobileapp/11-service-booking-vehicle.jpg',
      '/images/projects/cherymobileapp/17-testdrive-vehicle-selection.jpg',
      '/images/projects/cherymobileapp/22-products-vehicle-browse.jpg',
      '/images/projects/cherymobileapp/28-shop-accessories.jpg',
      '/images/projects/cherymobileapp/23-products-vehicle-details.jpg',
      '/images/projects/cherymobileapp/30-shop-cart.jpg',
    ],
    description: 'Comprehensive automotive platform built with React Native and Expo, featuring full e-commerce capabilities, service management, test drive booking, and complete vehicle information systems. A one-stop digital solution for Chery Bangladesh customers.',
    shortDescription: 'Complete automotive app with booking, service, and e-commerce',
    
    technologies: {
      frontend: ['React Native', 'Expo SDK 54', 'TypeScript', 'React Navigation'],
      backend: ['Supabase', 'PostgreSQL', 'REST API', 'Row Level Security'],
      features: ['Push Notifications', 'Maps Integration', 'Payment Gateway', '360° Vehicle Viewer'],
      tools: ['Figma', 'Postman', 'Git', 'VS Code'],
    },
    
    features: [
      'User authentication with email/password and social login',
      'Test drive booking with date/time scheduling system',
      'Service booking with vehicle selection and service type',
      'Workshop scheduling with preferred dealer selection',
      'Warranty registration and claims management',
      'Parts store with full e-commerce functionality',
      '360° vehicle viewer with interactive controls',
      'Push notifications for bookings, offers, and updates',
      'Dealer network locator with Google Maps integration',
      'Service history tracking and reminders',
      'Digital vehicle manuals and documentation',
      'Multi-role system (Customer, Dealer, Admin)',
      'Real-time inventory sync with backend',
      'Payment integration with SSL Commerce',
      'News and events section with rich content',
      'Promotional offers and campaign management',
      'Vehicle comparison with specs side-by-side',
      'Review and rating system for services',
      'Profile management with document upload',
      'Order tracking with status updates',
    ],
    
    impact: [
      '43 comprehensive app screens',
      'Multi-role authentication system',
      'Real-time booking management',
      'Complete e-commerce integration',
      'Reduced customer service calls by 60%',
      'Increased test drive bookings by 3x',
      '5000+ downloads in first month',
      '4.5+ star rating on app stores',
    ],
    
    challenges: [
      {
        title: '360° Vehicle Integration',
        description: 'Implemented smooth 360° viewer with touch controls, zoom functionality, and hotspot markers for vehicle features.',
      },
      {
        title: 'Real-time Synchronization',
        description: 'Built real-time inventory sync using Supabase subscriptions to keep stock levels accurate across all platforms.',
      },
      {
        title: 'Multi-dealer Management',
        description: 'Created system to handle multiple dealers with independent inventories, bookings, and service schedules.',
      },
      {
        title: 'Performance Optimization',
        description: 'Optimized app to load in under 3 seconds with lazy loading, image optimization, and efficient state management.',
      },
    ],
    
    liveUrl: '#',
    playStoreUrl: '#',
    appStoreUrl: '#',
  };

  return <CaseStudyDetail project={project} />;
}
