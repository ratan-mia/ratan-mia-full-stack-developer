// Content for the inner pages. Most of it was carried over from the previous
// versions of each page and trimmed; job history comes from Ratan's résumé.

export const SERVICES = [
  {
    id: 'mobile',
    title: 'Mobile app development',
    summary:
      'React Native apps for iOS and Android with native performance, smooth animations, offline support and a release pipeline to both stores.',
    features: [
      'React Native & Expo for iOS and Android',
      'Offline-first data and sync',
      'Push notifications and deep links',
      'In-app payments: bKash, Nagad, SSLCommerz, Stripe',
      'Real-time features with WebSockets',
      'App Store and Play Store release',
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-stack web apps & SaaS',
    summary:
      'Web applications and SaaS products from concept to deployment — Next.js and TypeScript on the front, Supabase, Node.js or Laravel behind it.',
    features: [
      'Next.js, React & TypeScript',
      'Supabase / PostgreSQL, Node.js and Laravel APIs',
      'Multi-tenant architecture, roles and auth',
      'Admin dashboards and reporting',
      'Technical SEO and Core Web Vitals',
      'PWA and real-time features',
    ],
  },
  {
    id: 'commerce',
    title: 'E-commerce & Shopify',
    summary:
      'Over 100 Shopify stores built and managed: custom themes, private apps and headless storefronts, plus WooCommerce where it fits.',
    features: [
      'Shopify themes, apps and headless storefronts',
      'Vehicle fitment and make/model/year search',
      'Payment gateways and EMI options',
      'Inventory, orders and fulfilment flows',
      'WooCommerce & custom carts',
      'Analytics and conversion tracking',
    ],
  },
  {
    id: 'automation',
    title: 'WhatsApp, CRM & AI automation',
    summary:
      'Conversations turned into pipelines: WhatsApp Cloud API, CRM sync, chatbots and AI assistants that answer in Bangla and English.',
    features: [
      'WhatsApp Business / Cloud API',
      'Zoho and custom CRM integrations',
      'AI chatbots and reply assistants',
      'No-code flows, broadcasts and follow-ups',
      'Facebook Pixel & conversion APIs',
      'Lead routing and reporting',
    ],
  },
  {
    id: 'wordpress',
    title: 'WordPress development',
    summary:
      'Custom themes, plugins and Elementor widgets built for speed, security and editors who need to update things themselves.',
    features: [
      'Custom themes and Gutenberg blocks',
      'Plugin and Elementor widget development',
      'Advanced Custom Fields setups',
      'Security hardening and updates',
      'Migrations and multisite',
      'WooCommerce integration',
    ],
  },
  {
    id: 'it',
    title: 'IT management & DevOps',
    summary:
      'A decade of running IT for real companies: servers, hosting, deployments, backups, vendors and the budget behind them.',
    features: [
      'DigitalOcean, Google Cloud & VPS setup',
      'WHM/cPanel, Windows Server, Active Directory',
      'Docker and CI/CD pipelines',
      'Monitoring, backups and disaster recovery',
      'Security patching and SSL',
      'Vendor selection and IT budgeting',
    ],
  },
  {
    id: 'performance',
    title: 'Performance optimisation',
    summary:
      'Slow sites cost sales. Audits and fixes for Core Web Vitals, database queries, images, caching and CDN setup.',
    features: [
      'Core Web Vitals audits and fixes',
      'Database and query optimisation',
      'Image compression and modern formats',
      'Code splitting and lazy loading',
      'CDN and caching strategy',
      'Performance monitoring',
    ],
  },
];

export const PROCESS = [
  { step: '01', title: 'Discovery call', body: 'We talk through goals, users, constraints and timeline. I ask a lot of questions.' },
  { step: '02', title: 'Proposal & plan', body: 'A written proposal with scope, milestones, stack and a fixed or capped price.' },
  { step: '03', title: 'Design & architecture', body: 'Flows, UI and the technical architecture are agreed before a line of production code.' },
  { step: '04', title: 'Build', body: 'Short iterations with a staging link you can click through, and updates every week.' },
  { step: '05', title: 'Launch & support', body: 'Testing, deployment, monitoring and a support window after go-live.' },
];

export const PRICING = [
  {
    category: 'Mobile',
    title: 'Mobile app',
    price: '$8,000',
    timeline: '8–12 weeks',
    description: 'Native-quality iOS and Android app with React Native, from design to store release.',
    features: ['React Native & Expo', 'Backend & admin panel', 'Push notifications & APIs', 'Store deployment'],
    popular: true,
  },
  {
    category: 'Full stack',
    title: 'Web app / SaaS',
    price: '$4,500',
    timeline: '4–8 weeks',
    description: 'A modern web application with auth, database design and an admin area.',
    features: ['Next.js front end', 'Supabase or Laravel API', 'Database design', 'Authentication & roles'],
  },
  {
    category: 'E-commerce',
    title: 'Online store',
    price: '$6,000',
    timeline: '6–10 weeks',
    description: 'Shopify, headless or WooCommerce store with payments and inventory.',
    features: ['Shopify / WooCommerce setup', 'Payment gateways', 'Inventory & orders', 'Analytics'],
  },
  {
    category: 'AI',
    title: 'AI & automation',
    price: '$3,500',
    timeline: '3–6 weeks',
    description: 'Chatbots, WhatsApp automation and AI features wired into your existing systems.',
    features: ['OpenAI / LLM integration', 'WhatsApp & CRM flows', 'Custom chatbot', 'Content automation'],
  },
  {
    category: 'Web',
    title: 'WordPress site',
    price: '$2,000',
    timeline: '2–4 weeks',
    description: 'Custom WordPress build with security hardening and performance tuning.',
    features: ['Custom theme', 'Plugins & integrations', 'SEO & speed', 'Responsive design'],
  },
  {
    category: 'Operations',
    title: 'IT management',
    price: '$1,500',
    per: '/month',
    timeline: 'Monthly retainer',
    description: 'Servers, deployments, monitoring and support handled for you.',
    features: ['Cloud & VPS management', 'Docker & CI/CD', 'Monitoring & backups', 'Database administration'],
  },
];

export const FAQ = [
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope. A WordPress site can ship in two to four weeks; a mobile app or SaaS product usually takes two to three months. You get a detailed timeline in the proposal.',
  },
  {
    q: 'How do you price projects?',
    a: 'Every project gets a custom quote based on scope. The prices on this site are starting points so you know the range before we talk.',
  },
  {
    q: 'Which technologies do you use?',
    a: 'React Native and Expo for mobile; Next.js, TypeScript and Supabase or Laravel for the web; Shopify for commerce; and WhatsApp Cloud API and modern AI APIs for automation.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. I have worked with clients across time zones since 2015, including through Upwork, with clear written updates and scheduled calls.',
  },
  {
    q: 'What happens after launch?',
    a: 'Every project includes a support window. After that I offer maintenance and IT retainers so the product stays secure and up to date.',
  },
  {
    q: 'How does payment work?',
    a: 'Milestone-based: a deposit to start, then payments tied to delivered milestones, so both sides are protected and work keeps moving.',
  },
];

export const JOURNEY = [
  {
    year: '2015',
    title: 'The beginning',
    body: 'Started building for the web during university — first e-commerce site, first paying clients on Upwork, and a lot of PHP, MySQL and JavaScript.',
  },
  {
    year: '2017–2023',
    title: 'Teams & IT',
    body: 'Led a 15-person dev team at Bengal Group, then spent five years running IT at Continental Motors while building automotive commerce for Kawasaki Bangladesh.',
  },
  {
    year: '2024–2026',
    title: 'Automotive platforms',
    body: 'IT manager and lead developer at Asian Holdings: Chery and OMODA & JAECOO, AutoTrader BD, Japan Parts, the ELF app and the Asian Imports CRM.',
  },
  {
    year: 'Now',
    title: 'Building products',
    body: 'Consulting for Asian Automotive while building my own products — NextPilot Chat, TurfLet and PieQR — with React Native, Next.js and Supabase.',
  },
];

export const VALUES = [
  {
    title: 'Passion for craft',
    body: 'Every project is a chance to build something that makes a real difference — I care about every line, interaction and edge case.',
  },
  {
    title: 'Quality, always',
    body: 'Maintainable, documented, secure code that someone else can pick up in a year. Quality isn’t a phase at the end.',
  },
  {
    title: 'Pragmatic innovation',
    body: 'New tools when they earn their place — React Native, Next.js, Supabase and AI where they genuinely help the business.',
  },
  {
    title: 'Results that matter',
    body: 'Success is measured in sales, bookings and hours saved, not in features shipped.',
  },
];

export const SKILL_GROUPS = [
  { group: 'Mobile', items: ['React Native', 'Expo', 'Push & deep links', 'Offline sync'] },
  { group: 'Front end', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Vue / Nuxt'] },
  { group: 'Back end', items: ['Supabase', 'PostgreSQL', 'Node.js / Express', 'Laravel', 'MySQL', 'Firebase', 'MongoDB'] },
  { group: 'Commerce & CMS', items: ['Shopify & Headless', 'Shopify apps', 'WordPress', 'WooCommerce', 'Elementor', 'ACF', 'WHMCS'] },
  { group: 'Integrations', items: ['WhatsApp Cloud API', 'Zoho & CRM sync', 'Facebook Pixel', 'Stripe', 'SSLCommerz', 'OpenAI'] },
  { group: 'Infra & IT', items: ['DigitalOcean', 'Google Cloud', 'Vercel', 'Docker', 'CI/CD', 'WHM/cPanel', 'Windows Server', 'MikroTik'] },
];

export const EDUCATION = [
  { title: 'Bachelor of Arts (English)', place: 'University of Dhaka', year: '2018' },
  { title: 'Higher Secondary Certificate — Science', place: 'Major General Mahmudul Hasan Ideal College, Tangail', year: '2011' },
  { title: 'Secondary School Certificate — Science', place: 'Daulatpur P.S. High School, Manikganj', year: '2008' },
];

export const AWARDS = [{ title: 'Junior Scholarship', issuer: 'Dhaka Education Board', year: '2008' }];

// Detailed résumé bullets per role (keyed by company in EXPERIENCE).
export const RESUME_DETAIL = {
  'Asian Automotive Limited': [
    'Maintain and develop SK Japan Export, Japan Parts, Moto JP, Asian Imports and AutoTrader BD.',
    'Asian Imports CRM and AutoTrader BD development, including CRM synchronisation.',
    'ELF Bangladesh app features, automated disbursements and the Asian Petroleum (ELF) website.',
    'Hosting, server support, security patching and deployments across all properties.',
  ],
  'Asian Holdings Limited': [
    'Led IT operations and digital-platform development across automotive, e-commerce and customer-facing systems.',
    'Built and maintained the Chery Bangladesh and OMODA & JAECOO Bangladesh websites.',
    'Drove Asian Imports CRM development and AutoTrader BD enhancements.',
    'Maintained the ELF Bangladesh mobile app; cut load times by 20% with caching and API improvements.',
    'Managed hosting, servers, security patching, deployments and QA.',
  ],
  Upwork: [
    'Built, redesigned and optimised WordPress and Shopify sites, with up to 30% faster load times.',
    'Built and maintained a store with about $13M in annual sales.',
    '80+ projects across WordPress, Shopify and PHP; Top Rated status.',
  ],
  'Continental Motors': [
    'Managed the IT department, suppliers, staff support and software delivery.',
    'Administered Windows Server, VPS, WHM and cPanel environments.',
    'Introduced real-time smart attendance with automated payroll and an integrated call centre.',
    'Cut IT and server costs by 40% through vendor selection and hands-on server management.',
  ],
  'Kawasaki Bangladesh': [
    'Built automotive e-commerce integrating CRM, Facebook Pixel and WhatsApp Business API.',
    'Developed car-price calculators and improved shipping-charge logic.',
    'Chery Bangladesh website with 360° vehicle views and up to 97% speed improvement.',
    'Code reviews, performance work and deployments on Docker, DigitalOcean and Google Cloud.',
  ],
  'Bengal Group of Industries': [
    'Led a 15-member team; client satisfaction up 25%.',
    'Laravel e-commerce for Pick4Less and custom WordPress themes and plugins.',
    'Domain and hosting sales platform with WHMCS, run with Agile practices.',
  ],
};

export const ARCHIVE = [
  {
    id: 'matchlyzer',
    title: 'Matchlyzer',
    category: 'Product',
    kind: 'Chrome extension · AI',
    year: '2024',
    summary: 'Chrome extension that scores Upwork jobs with AI and predicts competition.',
    image: '/images/projects/matchlyzer.png',
    live: 'https://www.matchlyzer.com/',
    tags: ['Chrome Extension', 'OpenAI', 'Node.js'],
  },
  {
    id: 'motojp',
    title: 'MotoJP',
    category: 'Commerce',
    kind: 'Headless Shopify',
    year: '2023',
    summary: 'High-performance headless Shopify store for motorcycle parts with real-time inventory.',
    image: '/images/projects/other-projects/motojp-shopify-headless.png',
    live: 'https://motojp.vercel.app/',
    tags: ['Next.js', 'Storefront API', 'GraphQL'],
  },
  {
    id: 'elf-international',
    title: 'ELF Bangladesh website',
    category: 'Web',
    kind: 'Corporate site',
    year: '2025',
    summary: 'Lead-generating corporate site for the ELF lubricant brand with Zoho CRM and WhatsApp integration.',
    image: '/images/projects/other-projects/elf-international-mockup.png',
    live: 'https://elf-bangladesh.vercel.app/',
    tags: ['Next.js', 'Zoho CRM', 'WhatsApp API'],
  },
  {
    id: 'elf-apl',
    title: 'ELF APL',
    category: 'Web',
    kind: 'Internal system',
    year: '2021',
    summary: 'Sales and inventory management system with dashboards, reports and user management.',
    image: '/images/projects/other-projects/elf-apl-mockup.jpg',
    tags: ['Laravel', 'Vue.js', 'MySQL'],
  },
];

export const BLOG = [
  { title: 'Building scalable React applications: best practices', topic: 'React', read: '8 min' },
  { title: 'Next.js App Router: a practical migration guide', topic: 'Next.js', read: '12 min' },
  { title: 'Laravel features every developer should know', topic: 'Laravel', read: '6 min' },
  { title: 'Optimising database performance in full-stack apps', topic: 'Database', read: '10 min' },
  { title: 'Modern CSS techniques for better UI', topic: 'CSS', read: '7 min' },
  { title: 'API design: REST vs GraphQL', topic: 'API design', read: '9 min' },
];

export const RESOURCES = [
  {
    group: 'Tools I use',
    items: [
      { name: 'React DevTools', note: 'Debugging React apps in the browser', href: 'https://react.dev/learn/react-developer-tools' },
      { name: 'Laravel Debugbar', note: 'Profiling and debugging for Laravel', href: 'https://github.com/barryvdh/laravel-debugbar' },
      { name: 'Expo', note: 'The fastest way to ship React Native apps', href: 'https://expo.dev' },
      { name: 'Supabase', note: 'Postgres, auth and storage in one place', href: 'https://supabase.com' },
    ],
  },
  {
    group: 'Design',
    items: [
      { name: 'Coolors', note: 'Generate cohesive colour palettes', href: 'https://coolors.co' },
      { name: 'Heroicons', note: 'Free, well-drawn SVG icons', href: 'https://heroicons.com' },
      { name: 'Type Scale', note: 'Typographic scale calculator', href: 'https://type-scale.com' },
      { name: 'Lucide', note: 'The icon set used on this site', href: 'https://lucide.dev' },
    ],
  },
  {
    group: 'Coming soon from me',
    items: [
      { name: 'Next.js starter kit', note: 'TypeScript, Tailwind and Supabase, ready to go' },
      { name: 'Laravel API boilerplate', note: 'Auth, roles and common endpoints' },
      { name: 'Shopify headless starter', note: 'Storefront API with fitment search' },
      { name: 'Database schema templates', note: 'E-commerce, booking and SaaS schemas' },
    ],
  },
];
