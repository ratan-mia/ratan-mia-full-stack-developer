// Portfolio Data - Complete Project Collection
// Based on actual case studies and project screenshots

export const PORTFOLIO_PROJECTS = [
  // Featured Projects - Main Products
  {
    id: 'gamify',
    title: 'Gamify (PieQR)',
    subtitle: 'QR Loyalty & Engagement Platform',
    category: 'SaaS Product',
    type: 'featured',
    year: '2024',
    status: 'live',
    client: 'FMCG & Automotive Brands',
    thumbnail: '/images/projects/pieqr/screenshots/gamify-thumb.png',
    images: [
      '/images/projects/pieqr/screenshots/01-splash.jpg',
      '/images/projects/pieqr/screenshots/02-home.jpg',
      '/images/projects/pieqr/screenshots/03-games.jpg',
    ],
    description: 'Complete engagement engine for FMCG, oil companies, automotive parts, and nationwide campaigns with QR-based loyalty system.',
    shortDescription: 'QR-based loyalty platform with gamification for nationwide campaigns',
    
    technologies: {
      frontend: ['React Native', 'Expo', 'Redux Toolkit'],
      backend: ['Node.js', 'Express', 'PostgreSQL'],
      features: ['QR Scanner', 'OTP Verification', 'Geo-tracking', 'Game Engine'],
    },
    
    features: [
      'QR Scan Engine with unique code tracking',
      'OTP Verification & device tracking',
      'Spin Wheel + Flip Card game systems',
      'Probability-based reward logic',
      'Digital wallet & points management',
      'Multi-category user profiles (Customer, Driver, Retailer, Mechanic)',
      'Geo-tagged scans for distribution analytics',
      'Fraud detection & abuse prevention',
      'Admin dashboard with real-time visualization',
      'Bilingual support (English/Bangla)',
    ],
    
    impact: [
      '10x increase in customer engagement',
      'Nationwide distribution tracking',
      'Reduced fraudulent claims by 85%',
      'Multi-tier reward system',
    ],
    
    caseStudyPath: '/contents/case-studies/Gamify.md',
    liveUrl: '#',
    demoVideo: null,
  },
  
  {
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
      '/images/projects/cherymobileapp/01-onboarding-splash.jpg',
      '/images/projects/cherymobileapp/02-home-screen.jpg',
      '/images/projects/cherymobileapp/11-service-booking-vehicle.jpg',
      '/images/projects/cherymobileapp/17-testdrive-vehicle-selection.jpg',
      '/images/projects/cherymobileapp/22-products-vehicle-browse.jpg',
      '/images/projects/cherymobileapp/28-shop-accessories.jpg',
    ],
    description: 'Full-stack automotive platform with test drive booking, service scheduling, e-commerce, and complete vehicle ecosystem.',
    shortDescription: 'Comprehensive automotive app with booking, service, and e-commerce',
    
    technologies: {
      frontend: ['React Native', 'Expo SDK 54', 'TypeScript'],
      backend: ['Supabase', 'PostgreSQL', 'REST API'],
      features: ['Push Notifications', 'Maps Integration', 'Payment Gateway', '360° Vehicle Viewer'],
    },
    
    features: [
      'Test drive booking with scheduling',
      'Service booking & workshop management',
      'Warranty registration & claims',
      'Parts store & e-commerce',
      '360° vehicle viewer',
      'Push notifications & campaigns',
      'Dealer network locator with maps',
      'Service history & reminders',
      'Digital vehicle manuals',
      'Multiple user roles (Customer, Dealer, Admin)',
      'Real-time inventory sync',
      'Payment integration (SSL Commerce)',
    ],
    
    impact: [
      '43 app screens with full functionality',
      'Multi-role authentication system',
      'Real-time booking management',
      'Complete e-commerce integration',
    ],
    
    caseStudyPath: '/contents/case-studies/Chery-bangladesh-app.md',
    liveUrl: '#',
    playStoreUrl: '#',
    appStoreUrl: '#',
  },
  
  {
    id: 'turfnations',
    title: 'TurfNations',
    subtitle: 'Sports Booking & Reservation Platform',
    category: 'SaaS Product',
    type: 'featured',
    year: '2024',
    status: 'live',
    client: 'Sports Venues',
    thumbnail: '/images/projects/turflet/www.turflet.app.png',
    images: [
      '/images/projects/turflet/mockup/turflet-1.jpg',
      '/images/projects/turflet/mockup/turflet-2.jpg',
      '/images/projects/turflet/screenshots/turflet-home.png',
    ],
    description: 'Complete booking platform for sports grounds, resorts, convention centers with real-time availability and payment integration.',
    shortDescription: 'Real-time booking system for sports venues and event spaces',
    
    technologies: {
      frontend: ['React Native', 'Next.js', 'TypeScript'],
      backend: ['Supabase', 'Prisma', 'PostgreSQL'],
      features: ['Real-time Calendar', 'Payment Gateway', 'Map Integration', 'Analytics Dashboard'],
    },
    
    features: [
      'Real-time availability calendar (30-day view)',
      'Hourly slot booking system',
      'Dynamic pricing (weekend, peak hours, early bird)',
      'SSL Commerce payment integration',
      'Multi-venue support',
      'Ground owner dashboard',
      'Earnings & analytics reports',
      'Player profile management',
      'Booking history & cancellations',
      'Interactive map with venue locations',
      'Rating & review system',
      'Push notifications for bookings',
    ],
    
    impact: [
      'Automated venue management',
      'Subscription-based revenue model',
      'Real-time payment processing',
      'Multi-role system (Player, Owner, Admin)',
    ],
    
    caseStudyPath: '/contents/case-studies/Booking app.md',
    liveUrl: 'https://www.turflet.app',
    demoVideo: null,
  },
  
  // E-commerce Projects
  {
    id: 'matchlyzer',
    title: 'Matchlyzer',
    subtitle: 'AI-Powered Upwork Job Analyzer',
    category: 'Chrome Extension',
    type: 'product',
    year: '2024',
    status: 'live',
    client: 'Freelancers',
    thumbnail: '/images/projects/matchlyzer.png',
    images: ['/images/projects/matchlyzer.png'],
    description: 'AI-powered tool for freelancers to analyze Upwork jobs with scoring, competition prediction, and auto-proposal suggestions.',
    shortDescription: 'Chrome extension for smart Upwork job matching with AI',
    
    technologies: {
      frontend: ['JavaScript', 'Chrome Extension API', 'React'],
      backend: ['Node.js', 'OpenAI API'],
      features: ['AI Analysis', 'Job Scoring', 'Competition Prediction'],
    },
    
    features: [
      'Job score analysis',
      'Profile matching algorithm',
      'Competition prediction',
      'Auto-proposal suggestions',
      'Filtered job feed',
      'Success probability calculation',
      'Real-time job alerts',
    ],
    
    impact: [
      'Helps freelancers find best-fit jobs',
      'Reduces job application time',
      'Increases proposal success rate',
    ],
    
    liveUrl: 'https://www.matchlyzer.com/',
  },
  
  {
    id: 'chery-nextjs',
    title: 'Chery Bangladesh Website',
    subtitle: 'Next.js E-commerce Platform',
    category: 'E-commerce',
    type: 'client',
    year: '2024',
    status: 'live',
    client: 'Chery Bangladesh',
    thumbnail: '/images/projects/other-projects/cherybd-nextjs.png',
    images: ['/images/projects/other-projects/cherybd-nextjs.png'],
    description: 'Modern automotive e-commerce website built with Next.js, featuring vehicle catalog, financing options, and dealer network.',
    shortDescription: 'High-performance automotive website with Next.js',
    
    technologies: {
      frontend: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
      backend: ['Prisma', 'PostgreSQL', 'REST API'],
      features: ['SSR', 'ISR', 'Image Optimization', 'SEO'],
    },
    
    features: [
      'Server-side rendering for performance',
      'Vehicle catalog with filters',
      '360° vehicle viewer',
      'Financing calculator',
      'Dealer locator with maps',
      'Test drive booking',
      'Service appointment scheduling',
      'News & events section',
      'Multilingual support',
    ],
    
    liveUrl: 'https://chery-bd.com/',
  },
  
  {
    id: 'chery-shopify',
    title: 'Chery Bangladesh Shopify',
    subtitle: 'Automotive E-commerce Store',
    category: 'E-commerce',
    type: 'client',
    year: '2023',
    status: 'live',
    client: 'Chery Bangladesh',
    thumbnail: '/images/projects/other-projects/cherybd-mockup.png',
    images: ['/images/projects/other-projects/cherybd-mockup.png'],
    description: 'Shopify-based e-commerce platform for automotive parts and accessories with custom theme development.',
    shortDescription: 'Custom Shopify store for automotive accessories',
    
    technologies: {
      frontend: ['Liquid', 'JavaScript', 'CSS'],
      backend: ['Shopify API', 'Webhooks'],
      features: ['Custom Theme', 'Product Variants', 'Inventory Management'],
    },
    
    features: [
      'Custom Shopify theme',
      'Product catalog with variants',
      'Advanced filtering',
      'Inventory management',
      'Multi-currency support',
      'Customer accounts',
      'Order tracking',
      'Blog integration',
    ],
    
    liveUrl: 'https://chery-bd.myshopify.com/',
  },
  
  {
    id: 'motojp-headless',
    title: 'MotoJP Shopify Headless',
    subtitle: 'High-Performance Motorcycle Parts Store',
    category: 'E-commerce',
    type: 'client',
    year: '2023',
    status: 'live',
    client: 'MotoJP',
    thumbnail: '/images/projects/other-projects/motojp-shopify-headless.png',
    images: ['/images/projects/other-projects/motojp-shopify-headless.png'],
    description: 'Modern headless commerce solution for motorcycle parts with React.js frontend and Shopify backend via GraphQL.',
    shortDescription: 'Headless Shopify with React for motorcycle parts',
    
    technologies: {
      frontend: ['React.js', 'Next.js', 'Tailwind CSS'],
      backend: ['Shopify Storefront API', 'GraphQL'],
      features: ['Headless Commerce', 'Advanced Search', 'Real-time Inventory'],
    },
    
    features: [
      'Headless architecture',
      'Lightning-fast performance',
      'Advanced product filtering',
      'GraphQL API integration',
      'Real-time inventory sync',
      'Custom checkout experience',
      'SEO optimized',
      'Mobile-first design',
    ],
    
    liveUrl: 'https://motojp.vercel.app/',
  },
  
  {
    id: 'japan-parts-headless',
    title: 'Japan Parts Headless',
    subtitle: 'Next.js Auto Parts Platform',
    category: 'E-commerce',
    type: 'client',
    year: '2023',
    status: 'live',
    client: 'Japan Auto Parts',
    thumbnail: '/images/projects/other-projects/japan-parts-headless.png',
    images: ['/images/projects/other-projects/japan-parts-headless.png'],
    description: 'High-performance headless e-commerce platform for auto parts with advanced search and B2B features.',
    shortDescription: 'Headless commerce for auto parts with B2B features',
    
    technologies: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Strapi CMS', 'PostgreSQL'],
      features: ['Headless CMS', 'B2B Portal', 'Advanced Search'],
    },
    
    features: [
      'Headless CMS with Strapi',
      'B2B wholesale portal',
      'Advanced part search',
      'Bulk ordering',
      'Quote requests',
      'Customer-specific pricing',
      'Order history',
      'Invoice management',
    ],
    
    liveUrl: '#',
  },
  
  {
    id: 'japan-parts',
    title: 'Japan Auto Parts',
    subtitle: 'WordPress E-commerce Marketplace',
    category: 'E-commerce',
    type: 'client',
    year: '2021',
    status: 'live',
    client: 'Japan Auto Parts',
    thumbnail: '/images/projects/other-projects/japan-parts-mockup.png',
    images: ['/images/projects/other-projects/japan-parts-mockup.png'],
    description: 'Auto parts marketplace built with WordPress and WooCommerce, featuring advanced inventory management.',
    shortDescription: 'WooCommerce marketplace for auto parts',
    
    technologies: {
      frontend: ['WordPress', 'PHP', 'JavaScript'],
      backend: ['WooCommerce', 'MySQL'],
      features: ['Multi-vendor', 'Inventory Management', 'B2B Features'],
    },
    
    features: [
      'WooCommerce multi-vendor',
      'Advanced inventory system',
      'Product variations',
      'B2B pricing tiers',
      'Customer accounts',
      'Order management',
      'Payment gateway integration',
      'Shipping calculations',
    ],
    
    liveUrl: 'https://japanparts.com.bd/',
  },
  
  // Corporate Websites
  {
    id: 'elf-international',
    title: 'ELF International',
    subtitle: 'Corporate Energy Website',
    category: 'Corporate',
    type: 'client',
    year: '2022',
    status: 'live',
    client: 'ELF Lubricants',
    thumbnail: '/images/projects/other-projects/elf-international-mockup.png',
    images: ['/images/projects/other-projects/elf-international-mockup.png'],
    description: 'Corporate website for international energy company with multi-language support and product catalog.',
    shortDescription: 'Multi-language corporate site for energy sector',
    
    technologies: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['Strapi CMS', 'PostgreSQL'],
      features: ['Multi-language', 'CMS', 'SEO'],
    },
    
    features: [
      'Multi-language support',
      'Product catalog',
      'Dealer locator',
      'News & events',
      'Contact forms',
      'SEO optimized',
      'Content management system',
    ],
    
    liveUrl: 'https://elf-bangladesh.vercel.app/',
  },
  
  {
    id: 'elf-apl',
    title: 'ELF APL',
    subtitle: 'Internal Management System',
    category: 'Web App',
    type: 'client',
    year: '2021',
    status: 'live',
    client: 'Asian Petroleum Ltd',
    thumbnail: '/images/projects/other-projects/elf-apl-mockup.jpg',
    images: ['/images/projects/other-projects/elf-apl-mockup.jpg'],
    description: 'Internal management system for tracking sales performance, inventory, and dealer network.',
    shortDescription: 'Sales and inventory management system',
    
    technologies: {
      frontend: ['Laravel Blade', 'Vue.js', 'Bootstrap'],
      backend: ['Laravel', 'MySQL', 'Redis'],
      features: ['Dashboard', 'Reports', 'User Management'],
    },
    
    features: [
      'Sales performance tracking',
      'Inventory management',
      'Dealer network management',
      'Real-time reporting',
      'User role management',
      'Analytics dashboard',
      'Export to Excel/PDF',
    ],
    
    liveUrl: 'https://asian-petroleum.com/',
  },
  
  {
    id: 'elf-mobile-app',
    title: 'Elf BD Mobile App',
    subtitle: 'Product Catalog & Dealer Network',
    category: 'Mobile App',
    type: 'client',
    year: '2023',
    status: 'live',
    client: 'Elf Lubricant Bangladesh',
    thumbnail: '/images/projects/other-projects/elf-international-mockup.png',
    images: ['/images/projects/other-projects/elf-international-mockup.png'],
    description: 'React Native app for Elf Lubricant with product catalog, dealer network, and distributor tools.',
    shortDescription: 'Mobile app for lubricant products and dealers',
    
    technologies: {
      frontend: ['React Native', 'Redux', 'TypeScript'],
      backend: ['Firebase', 'Cloud Functions'],
      features: ['Offline Mode', 'Push Notifications', 'Maps'],
    },
    
    features: [
      'Product catalog with search',
      'Dealer locator with maps',
      'Distributor dashboard',
      'Order placement',
      'Push notifications',
      'Offline mode',
      'Multi-language support',
    ],
    
    liveUrl: '#',
  },
];

// Filter functions
export const getProjectsByType = (type) => {
  return PORTFOLIO_PROJECTS.filter(project => project.type === type);
};

export const getProjectsByCategory = (category) => {
  return PORTFOLIO_PROJECTS.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return PORTFOLIO_PROJECTS.filter(project => project.type === 'featured');
};

export const getProjectById = (id) => {
  return PORTFOLIO_PROJECTS.find(project => project.id === id);
};

// Categories for filtering
export const PROJECT_CATEGORIES = [
  'All',
  'SaaS Product',
  'Mobile App',
  'E-commerce',
  'Chrome Extension',
  'Corporate',
  'Web App',
];

// Technologies used across projects
export const ALL_TECHNOLOGIES = {
  frontend: ['React Native', 'Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'WordPress'],
  backend: ['Node.js', 'Supabase', 'PostgreSQL', 'Laravel', 'Firebase', 'Prisma', 'MySQL'],
  mobile: ['React Native', 'Expo', 'Redux Toolkit'],
  ecommerce: ['Shopify', 'WooCommerce', 'Headless Commerce'],
  ai: ['OpenAI API', 'Machine Learning'],
};
