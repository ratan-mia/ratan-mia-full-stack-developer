// Single source of truth for the home page content.
// Kept in sync with Ratan's resume and LinkedIn profile (Nov 2026).

export const PROFILE = {
  name: 'Ratan Mia',
  role: 'Full-Stack & Mobile Engineer',
  secondaryRole: 'IT Manager',
  location: 'Dhaka, Bangladesh',
  email: 'shorifull@gmail.com',
  site: 'https://www.ratanmia.pro',
  resume: '/resume.pdf',
  intro:
    'I design and build web, mobile and commerce platforms end-to-end — from architecture and code to deployment and the IT that keeps it running.',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shorifull/' },
    { label: 'GitHub', href: 'https://github.com/ratan-mia' },
    { label: 'Upwork', href: 'https://www.upwork.com/freelancers/ratanmia' },
    { label: 'Email', href: 'mailto:shorifull@gmail.com' },
  ],
};

export const STATS = [
  { value: 10, suffix: '+', label: 'Years building for the web' },
  { value: 100, suffix: '+', label: 'Shopify stores built & managed' },
  { value: 30, prefix: '$', suffix: 'M+', label: 'Annual sales powered for clients' },
  { value: 150, suffix: '+', label: 'Projects delivered' },
];

export const MANIFESTO =
  'Most businesses here don’t run on software — they run on WhatsApp, spreadsheets and memory. I build the systems that change that: storefronts that sell, apps people open every day, CRMs that remember every customer, and the infrastructure underneath that simply stays up.';

export const STACK = [
  'React Native',
  'Expo',
  'Next.js',
  'React',
  'TypeScript',
  'Supabase',
  'PostgreSQL',
  'Node.js',
  'Laravel',
  'Shopify Headless',
  'WordPress',
  'Tailwind CSS',
  'WhatsApp Cloud API',
  'AI Automation',
  'Docker',
  'DigitalOcean',
  'Google Cloud',
];

export const PROJECTS = [
  {
    id: 'nextpilot',
    title: 'NextPilot Chat',
    category: 'SaaS · WhatsApp CRM & AI',
    year: '2026',
    summary:
      'A WhatsApp-first CRM: shared team inbox, pipelines, broadcasts, no-code flows and AI replies in Bangla and English — in one workspace.',
    tags: ['Next.js', 'Supabase', 'WhatsApp Cloud API', 'AI'],
    image: '/images/projects/nextpilot/nextpilot-home.jpg',
    live: 'https://www.nextpilot.chat',
    accent: '#8b7cf6',
  },
  {
    id: 'turflet',
    title: 'TurfLet',
    category: 'Marketplace · Web & Mobile',
    year: '2025',
    summary:
      'Turf booking marketplace with live slots, bKash/Nagad/card payments, waitlists and loyalty — plus a multi-tenant owner dashboard.',
    tags: ['React Native', 'Supabase', 'Multi-tenant SaaS'],
    image: '/images/projects/turflet/mockup/owner-dashboard and player -app.png',
    caseStudy: '/case-studies/turfnations-booking',
    live: 'https://turflet.app',
    accent: '#1f7a3a',
  },
  {
    id: 'elf',
    title: 'ELF Bangladesh',
    category: 'Loyalty super-app · Commerce',
    year: '2025',
    summary:
      'QR loyalty and e-commerce super-app for a lubricant brand — 41,000+ QR codes live, gamified rewards, wallet and automated disbursements.',
    tags: ['React Native', 'Next.js', 'Zoho CRM'],
    image: '/images/projects/elf-mobile-store/mockup/web-store-and-mobile-app.png',
    caseStudy: '/case-studies/elf-bangladesh-app',
    accent: '#d6402e',
  },
  {
    id: 'autotrader',
    title: 'AutoTrader BD',
    category: 'B2B Automotive Marketplace',
    year: '2025',
    summary:
      'Trading platform for car importers and dealers: inventory, verified listings, estimates, purchase applications and market price insight.',
    tags: ['Next.js', 'CRM Sync', 'Admin Dashboards'],
    image: '/images/projects/auto-trader/mockup/web-home.png',
    caseStudy: '/case-studies/auto-trader',
    live: 'https://autotraderbd.com',
    accent: '#f2b632',
  },
  {
    id: 'omoda',
    title: 'OMODA & JAECOO',
    category: 'Automotive brand app & sites',
    year: '2024',
    summary:
      'Dual-brand platform with vehicle configurators, 360° views, test-drive and service booking, digital glovebox and finance calculator.',
    tags: ['React Native', 'Nuxt.js', '360° Views'],
    image: '/images/projects/omodajaecoo/home.png',
    caseStudy: '/case-studies/omoda-jaecoo',
    live: 'https://www.omodajaecoobd.com',
    accent: '#3d8bd6',
  },
  {
    id: 'chery',
    title: 'Chery Bangladesh',
    category: 'Automotive brand platform',
    year: '2024',
    summary:
      'Vehicle catalog with 360° views, brochure downloads and a test-drive enquiry flow wired straight into the CRM.',
    tags: ['Shopify', 'Next.js', 'Zoho'],
    image: '/images/projects/cherybd-mockup.png',
    caseStudy: '/case-studies/chery-bangladesh-app',
    live: 'https://www.cherybd.com',
    accent: '#b8202f',
  },
  {
    id: 'headless',
    title: 'Shopify Headless Commerce',
    category: 'Headless storefront · Web & App',
    year: '2024',
    summary:
      'Headless Shopify storefront with vehicle-fitment search, mega menus, EMI options and real-time order tracking across web and mobile.',
    tags: ['Shopify Storefront API', 'Next.js', 'React Native'],
    image: '/images/projects/headless-cms/mockup/headless-cms-web-and-mobile-app.png',
    caseStudy: '/case-studies/shopify-headless-cms',
    accent: '#c43a2b',
  },
  {
    id: 'pieqr',
    title: 'PieQR · Gamify',
    category: 'White-label loyalty SaaS',
    year: '2024',
    summary:
      'Scan-to-win engagement engine for FMCG and automotive brands: QR codes, spin & flip games, wallets and fraud-aware reward logic.',
    tags: ['React Native', 'Node.js', 'PostgreSQL'],
    image: '/images/projects/pieqr/home-screen.png',
    caseStudy: '/case-studies/gamify',
    accent: '#f07a2b',
  },
  {
    id: 'japanparts',
    title: 'Japan Parts',
    category: 'Automotive parts e-commerce',
    year: '2023',
    summary:
      'Parts, lubricants and tyres store with search by category and brand, delivery or store pickup — headless Shopify with a React front end.',
    tags: ['Shopify Headless', 'React'],
    image: '/images/projects/japan-parts-mockup.png',
    live: 'https://www.japanparts.com.bd',
    accent: '#d33a2c',
  },
  {
    id: 'skjapan',
    title: 'SK Japan Export',
    category: 'Vehicle export platform',
    year: '2022',
    summary:
      'Japanese vehicle export site with live auction search, stock browsing and pricing for international buyers.',
    tags: ['Shopify', 'Auction API'],
    image: '/images/projects/skjapanexport/skjapanexport-home.jpg',
    live: 'https://skjapanexport.co.jp',
    accent: '#a3242b',
  },
];

export const CAPABILITIES = [
  {
    no: '01',
    title: 'Product engineering',
    body: 'SaaS products from first sketch to paying customers — multi-tenant architecture, auth, billing, dashboards and the boring parts done properly.',
    points: ['Next.js & TypeScript', 'Supabase / PostgreSQL', 'Node.js & Laravel APIs'],
  },
  {
    no: '02',
    title: 'Mobile apps',
    body: 'Cross-platform apps people actually keep on their phones: loyalty, booking, wallets, QR and gamification, shipped to both stores.',
    points: ['React Native & Expo', 'Offline-first data', 'Push, payments & QR'],
  },
  {
    no: '03',
    title: 'Commerce that sells',
    body: '100+ Shopify stores built and managed — themes, custom apps and headless storefronts tuned for speed and conversion.',
    points: ['Shopify Headless & apps', 'WooCommerce & WordPress', 'bKash, SSLCommerz, Stripe'],
  },
  {
    no: '04',
    title: 'Automation & IT',
    body: 'WhatsApp and CRM integrations, AI automation, plus the servers, security and vendors behind them — a decade of running IT for real businesses.',
    points: ['WhatsApp Cloud API & CRM', 'AI assistants & workflows', 'Servers, hosting & security'],
  },
];

export const EXPERIENCE = [
  {
    period: 'Aug 2026 — Now',
    role: 'Full-Stack Developer & IT Consultant',
    company: 'Asian Automotive Limited',
    type: 'Contract',
    detail:
      'Development and maintenance for SK Japan Export, Japan Parts, Moto JP, Asian Imports, AutoTrader BD and the ELF Bangladesh app.',
  },
  {
    period: 'Jan 2024 — Jul 2026',
    role: 'IT Manager / Full-Stack Developer',
    company: 'Asian Holdings Limited',
    type: 'Full-time',
    detail:
      'Led IT and digital platforms across the group: Chery and OMODA & JAECOO sites, Asian Imports CRM, AutoTrader BD and the ELF app.',
  },
  {
    period: '2015 — Now',
    role: 'WordPress & Shopify Expert',
    company: 'Upwork',
    type: 'Freelance',
    detail: '80+ projects for global clients, including a store doing ~$13M in annual sales. Top Rated.',
  },
  {
    period: 'Oct 2018 — Apr 2023',
    role: 'IT Manager',
    company: 'Continental Motors',
    type: 'Full-time',
    detail: 'Ran IT operations and servers, cut IT costs by 40%, launched smart attendance with payroll and an integrated call centre.',
  },
  {
    period: 'Sep 2018 — Apr 2023',
    role: 'Full Stack Developer',
    company: 'Kawasaki Bangladesh',
    type: 'Full-time',
    detail: 'Automotive e-commerce with CRM, Facebook Pixel and WhatsApp integrations; car price calculator; Chery site with 360° views.',
  },
  {
    period: 'Jan 2018 — Sep 2018',
    role: 'Senior Software Developer',
    company: 'Bengal Group of Industries',
    type: 'Full-time',
    detail: 'Led a 15-person team on Laravel e-commerce (Pick4Less) and a WHMCS hosting platform.',
  },
];

export const CERTIFICATIONS = [
  { title: 'Developing Back-End Apps with Node.js and Express', issuer: 'IBM', year: '2023' },
  { title: 'GraphQL Essential Training', issuer: 'LinkedIn', year: '2023' },
  { title: 'Advanced PHP: Debugging Techniques', issuer: 'LinkedIn', year: '2023' },
  { title: 'The Complete React.js Course', issuer: 'Udemy', year: '2023' },
  { title: 'Docker Course for Beginners', issuer: 'Udemy', year: '2023' },
  { title: 'Modern JavaScript for React JS', issuer: 'Udemy', year: '2023' },
];
