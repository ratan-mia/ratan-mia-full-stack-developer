import { ArrowUpRight, Bot, Code2, Globe, Settings, ShoppingCart, Smartphone, Zap } from 'lucide-react';
import Image from 'next/image';

const SERVICE_DATA = [
  {
    id: 1,
    icon: Smartphone,
    title: "Mobile App Development",
    shortDescription: "Cross-platform mobile apps for iOS and Android",
    description: "Professional React Native mobile applications with native performance, smooth animations, offline capabilities, and seamless user experiences for both iOS and Android platforms.",
    features: [
      "React Native Development for iOS & Android",
      "Native Performance & Smooth Animations",
      "Offline-First Architecture & Data Sync",
      "Push Notifications & Deep Linking",
      "In-App Purchases & Payment Integration",
      "Real-time Features with WebSockets",
      "App Store & Play Store Deployment",
      "Post-Launch Support & Maintenance"
    ],
    technologies: ["React Native", "TypeScript", "Expo", "Supabase", "Firebase", "Redux"],
    basePrice: "$8,000",
    timeline: "8-16 weeks",
    category: "mobile",
    featured: true,
    gradient: "from-blue-600 to-indigo-600",
    projectImage: "/images/projects/elf-mobile-store/01-splash-screen.jpg",
    projectExample: "ELF Bangladesh Mobile App",
    testimonial: {
      text: "The mobile app transformed how we connect with customers and boosted sales significantly.",
      author: "Ahmed Hassan",
      company: "ELF Lubricants Bangladesh"
    }
  },
  {
    id: 2,
    icon: Code2,
    title: "Full Stack Development",
    shortDescription: "End-to-end web applications with modern architecture",
    description: "Complete web application development using cutting-edge technologies like React.js, Next.js, Node.js, and PHP Laravel. From concept to deployment with scalable architecture.",
    features: [
      "Responsive Design & Mobile-First Development",
      "RESTful API Development & Integration",
      "Database Architecture & Optimization",
      "Performance Optimization & Core Web Vitals",
      "SEO Implementation & Technical SEO",
      "Progressive Web Apps (PWA)",
      "Real-time Features with WebSockets",
      "Authentication & Security Implementation"
    ],
    technologies: ["React", "Next.js", "Node.js", "Laravel", "TypeScript", "Tailwind"],
    basePrice: "$2,500",
    timeline: "4-12 weeks",
    category: "development",
    featured: true,
    gradient: "from-blue-600 to-indigo-600",
    projectImage: "/images/projects/cherymobileapp/cherybd-mockup.png",
    projectExample: "Chery Bangladesh",
    testimonial: {
      text: "Exceptional full-stack development that exceeded our expectations.",
      author: "Mohammad Nayab",
      company: "Chery Bangladesh"
    }
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    shortDescription: "High-converting online stores and mobile commerce",
    description: "Complete e-commerce solutions including mobile apps, web stores, secure payments, inventory management, and analytics dashboard for maximum sales performance.",
    features: [
      "Mobile E-commerce Apps (React Native)",
      "Custom E-commerce Development",
      "Shopify & WooCommerce Integration",
      "Payment Gateway Integration (Stripe, PayPal, SSL Commerce)",
      "Inventory Management System",
      "Order Processing & Fulfillment",
      "Analytics & Sales Reporting",
      "Multi-currency & Multi-language"
    ],
    technologies: ["React Native", "Shopify", "WooCommerce", "Stripe", "React", "Laravel"],
    basePrice: "$5,000",
    timeline: "6-16 weeks",
    category: "ecommerce",
    featured: true,
    gradient: "from-purple-600 to-pink-600",
    projectImage: "/images/projects/elf-mobile-store/01-splash-screen.jpg",
    projectExample: "ELF International",
    testimonial: {
      text: "Our sales increased by 300% after the new e-commerce platform launch.",
      author: "Michael Chen",
      company: "Fashion Hub"
    }
  },
  {
    id: 4,
    icon: Globe,
    title: "WordPress Development",
    shortDescription: "Custom WordPress solutions and optimization",
    description: "Professional WordPress development including custom themes, plugins, performance optimization, and complete CMS implementations for businesses of all sizes.",
    features: [
      "Custom Theme Development",
      "Plugin Development & Customization",
      "Performance Optimization",
      "Security Hardening & Updates",
      "Migration & Multi-site Setup",
      "Gutenberg Blocks Development",
      "WooCommerce Integration",
      "SEO & Analytics Setup"
    ],
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "Gutenberg", "WooCommerce"],
    basePrice: "$1,500",
    timeline: "2-8 weeks",
    category: "cms",
    featured: false,
    gradient: "from-green-600 to-teal-600",
    projectImage: "/images/projects/other-projects/elf-apl-mockup.jpg",
    projectExample: "Asian Petroleum",
    testimonial: {
      text: "Perfect WordPress solution that boosted our online presence significantly.",
      author: "Lisa Rodriguez",
      company: "Local Business"
    }
  },
  {
    id: 5,
    icon: Settings,
    title: "DevOps & Cloud Services",
    shortDescription: "Infrastructure automation and cloud deployment",
    description: "Complete IT infrastructure setup, cloud deployment, containerization, automated CI/CD pipelines, and ongoing server management for optimal performance.",
    features: [
      "AWS/Digital Ocean Setup & Management",
      "Docker Containerization",
      "CI/CD Pipeline Implementation",
      "Server Monitoring & Alerts",
      "Database Administration",
      "Security & SSL Configuration",
      "Load Balancing & Scaling",
      "Backup & Disaster Recovery"
    ],
    technologies: ["AWS", "Docker", "Jenkins", "Linux", "Kubernetes", "Terraform"],
    basePrice: "$1,200",
    timeline: "1-4 weeks",
    category: "devops",
    featured: false,
    gradient: "from-orange-600 to-red-600",
    projectImage: "/images/projects/other-projects/japan-parts-mockup.png",
    projectExample: "Japan Parts",
    testimonial: {
      text: "Excellent DevOps setup that improved our deployment efficiency dramatically.",
      author: "David Park",
      company: "StartupTech"
    }
  },
  {
    id: 6,
    icon: Zap,
    title: "Performance Optimization",
    shortDescription: "Speed optimization for existing websites",
    description: "Comprehensive performance optimization for existing websites using advanced techniques, modern best practices, and cutting-edge tools to achieve perfect Core Web Vitals scores.",
    features: [
      "Core Web Vitals Optimization",
      "Database Query Optimization",
      "Image Compression & WebP Conversion",
      "Code Splitting & Lazy Loading",
      "CDN Implementation & Configuration",
      "Bundle Size Reduction",
      "Caching Strategy Implementation",
      "Performance Monitoring Setup"
    ],
    technologies: ["Lighthouse", "GTmetrix", "Redis", "CloudFlare", "WebP", "Critical CSS"],
    basePrice: "$800",
    timeline: "1-3 weeks",
    category: "optimization",
    featured: false,
    gradient: "from-indigo-600 to-purple-600",
    projectImage: "/images/projects/cherymobileapp/cherybd-nextjs.png",
    projectExample: "Chery Bangladesh (97% Score)",
    testimonial: {
      text: "Incredible performance boost - our site now loads in under 1 second!",
      author: "Emma Thompson",
      company: "E-commerce Plus"
    }
  },
  {
    id: 7,
    icon: Bot,
    title: "AI Integration",
    shortDescription: "Cutting-edge AI solutions and automation",
    description: "Advanced AI integration including chatbots, natural language processing, machine learning implementation, and intelligent automation for modern applications.",
    features: [
      "OpenAI GPT Integration",
      "Custom Chatbot Development",
      "Voice Recognition & Text-to-Speech",
      "Natural Language Processing",
      "Automated Content Generation",
      "Machine Learning Implementation",
      "Intelligent Data Analysis",
      "AI-powered Recommendations"
    ],
    technologies: ["OpenAI", "Python", "TensorFlow", "Node.js", "Machine Learning", "NLP"],
    basePrice: "$2,000",
    timeline: "3-8 weeks",
    category: "ai",
    featured: true,
    gradient: "from-teal-600 to-cyan-600",
    projectImage: "/images/projects/other-projects/matchlyzer.png",
    projectExample: "AI Analytics Platform",
    testimonial: {
      text: "The AI chatbot revolutionized our customer service completely.",
      author: "James Wilson",
      company: "Support Solutions"
    }
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-[#f5f4ef] py-24">

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-8 md:px-14 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-8 border-b-[3px] border-black">
          <h2
            className="font-black uppercase leading-none tracking-tighter text-black"
            style={{ fontSize: 'clamp(60px, 9vw, 128px)' }}
          >
            Services
          </h2>
          <div className="sm:text-right sm:mb-2 space-y-1.5">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/35">07 Specializations</p>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/35">150+ Projects Delivered</p>
          </div>
        </div>
      </div>

      {/* ── Neo-brutalist card grid ── */}
      <div className="max-w-7xl mx-auto px-8 md:px-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SERVICE_DATA.map((service, i) => {
          const isHero = i === 0;
          return (
            <a
              key={service.id}
              href="#quote"
              className={`group relative border-[3px] border-black bg-white flex flex-col transition-all duration-150 hover:-translate-y-1 hover:shadow-[8px_8px_0_#000] ${isHero ? 'lg:col-span-2' : ''}`}
            >
              {/* Image panel */}
              <div className={`relative overflow-hidden border-b-[3px] border-black ${isHero ? 'h-64' : 'h-44'}`}>
                <Image
                  src={service.projectImage}
                  alt={service.projectExample}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Scrim */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                {/* Number badge top-left */}
                <span className="absolute top-3 left-4 text-[10px] font-black text-white/70 tabular-nums tracking-widest">
                  {String(service.id).padStart(2, '0')} /
                </span>
                {/* Icon top-right */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-white border-2 border-black flex items-center justify-center">
                  <service.icon className="w-4 h-4 text-black" />
                </div>
                {/* Featured badge */}
                {service.featured && (
                  <span className="absolute bottom-3 left-4 text-[8px] font-black uppercase tracking-[0.25em] bg-accent-lime text-black px-2.5 py-1">
                    Popular
                  </span>
                )}
              </div>

              {/* Text content */}
              <div className={`flex flex-col justify-between flex-1 group-hover:bg-accent-lime transition-colors duration-150 ${isHero ? 'p-8' : 'p-6'}`}>
                <div>
                  <h3
                    className="font-black uppercase tracking-tighter text-black leading-[0.88] mb-2.5"
                    style={{ fontSize: isHero ? 'clamp(28px, 3.5vw, 48px)' : 'clamp(18px, 1.8vw, 24px)' }}
                  >
                    {service.title}
                  </h3>
                  <p className={`text-sm text-black/50 font-medium leading-relaxed mb-4 ${isHero ? '' : 'line-clamp-2'}`}>
                    {service.shortDescription}
                  </p>
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.technologies.slice(0, isHero ? 5 : 3).map(t => (
                      <span key={t} className="text-[9px] font-black uppercase tracking-wide border-2 border-black/15 group-hover:border-black/40 px-2.5 py-0.5 text-black/40 group-hover:text-black/70 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t-2 border-black/10 group-hover:border-black/25 transition-colors">
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-[0.3em] text-black/25 mb-0.5">From</p>
                    <p className="text-xl font-black text-black">{service.basePrice}</p>
                  </div>
                  <div className="w-10 h-10 border-2 border-black bg-transparent group-hover:bg-black flex items-center justify-center transition-colors duration-150">
                    <ArrowUpRight className="w-4 h-4 text-black group-hover:text-accent-lime transition-colors duration-150" />
                  </div>
                </div>
              </div>
            </a>
          );
        })}

        {/* ── CTA tile ── */}
        <a
          href="#quote"
          className="group border-[3px] border-black bg-black flex flex-col justify-between p-8 min-h-64 transition-all duration-150 hover:-translate-y-1 hover:shadow-[8px_8px_0_#ccff00]"
        >
          <div>
            <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/25 mb-1">08 /</p>
            <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white/25">Custom Build</p>
          </div>
          <div>
            <h3
              className="font-black uppercase tracking-tighter text-white leading-[0.88] mb-3"
              style={{ fontSize: 'clamp(28px, 3.2vw, 44px)' }}
            >
              Got a<br />Unique<br />Idea?
            </h3>
            <p className="text-sm text-white/40 font-medium leading-relaxed mb-7">
              Let's build something remarkable together.
            </p>
            <div className="inline-flex items-center gap-3 border-2 border-accent-lime px-5 py-3 group-hover:bg-accent-lime group-hover:text-black transition-colors duration-150">
              <span className="text-accent-lime group-hover:text-black font-black text-[10px] uppercase tracking-widest transition-colors duration-150">
                Start a Project
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent-lime group-hover:text-black transition-colors duration-150" />
            </div>
          </div>
        </a>
      </div>

    </section>
  );
}
