import Contact from '@/components/home/Contact';
import GetQuote from '@/components/home/GetQuote';
import { ArrowRight, Bot, Calendar, Code2, DollarSign, Globe, Handshake, Settings, ShoppingCart, Smartphone, TrendingUp, Zap } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Mobile & Web Development Services - Ratan Mia | Full Stack Solutions',
  description: 'Professional mobile app and web development services including React Native apps, Next.js development, Laravel APIs, e-commerce solutions, and custom applications.',
  keywords: 'mobile app development, React Native, web development services, React development, Laravel development, e-commerce, custom web applications',
};

// Real service data from home page
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
    projectImage: "/images/projects/cherybd-mockup.png",
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
    projectImage: "/images/projects/elf-international-mockup.png",
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
    projectImage: "/images/projects/elf-apl-mockup.jpg",
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
    projectImage: "/images/projects/japan-parts-mockup.png",
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
    projectImage: "/images/projects/cherybd-nextjs.png",
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
    projectImage: "/images/projects/matchlyzer.png",
    projectExample: "AI Analytics Platform",
    testimonial: {
      text: "The AI chatbot revolutionized our customer service completely.",
      author: "James Wilson",
      company: "Support Solutions"
    }
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We start with a detailed discussion about your project requirements, goals, and timeline."
  },
  {
    step: "02",
    title: "Proposal & Planning",
    description: "I create a detailed proposal with timeline, milestones, and technical specifications."
  },
  {
    step: "03",
    title: "Design & Architecture",
    description: "UI/UX design and technical architecture planning before development begins."
  },
  {
    step: "04",
    title: "Development",
    description: "Agile development with regular updates and milestone deliveries."
  },
  {
    step: "05",
    title: "Testing & Launch",
    description: "Thorough testing, deployment, and post-launch support to ensure success."
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] w-full overflow-hidden bg-accent-lime flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=2025&auto=format&fit=crop" 
            alt="Services Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-accent-lime/80"></div>
        </div>

        {/* Decorative elements - desktop only */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-black/5 animate-pulse" />
          <div className="absolute bottom-40 left-20 w-24 h-24 rounded-2xl bg-black/5 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-black/5 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-20 text-center relative z-20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-black/10 text-black rounded-full text-sm font-extrabold mb-6">
            <Code2 className="w-4 h-4" />
            <span>PROFESSIONAL SERVICES</span>
          </div>
          <h1 className="hero-title text-black mb-6">
            Mobile & Web Development<br />Services
          </h1>
          <p className="text-xl md:text-2xl text-black/80 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
            Transform your ideas into powerful mobile apps and web applications with React Native, Next.js, and modern technologies. 
            From concept to deployment, I deliver cross-platform solutions that drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-5 bg-black text-accent-lime rounded-xl font-extrabold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              View All Services
            </button>
            <button className="px-10 py-5 border-2 border-black text-black rounded-xl font-extrabold hover:bg-black hover:text-white transition-all duration-300">
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 md:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
              <Zap className="w-4 h-4" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              What I <span className="text-accent-lime">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Comprehensive mobile and web development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_DATA.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-accent-lime group"
              >
                {/* Project Image with Overlay */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={service.projectImage}
                    alt={service.projectExample}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-14 h-14 bg-accent-lime rounded-2xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-7 h-7 text-black" />
                  </div>
                  
                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute top-4 right-4 px-4 py-1.5 bg-accent-lime text-black rounded-full text-xs font-extrabold shadow-lg">
                      ⭐ FEATURED
                    </div>
                  )}
                  
                  {/* Project Example Label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs text-white/80 font-bold mb-1">Example Project:</div>
                    <div className="text-white font-extrabold text-lg">{service.projectExample}</div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  {/* Title */}
                  <h3 className="text-2xl font-extrabold mb-3 group-hover:text-accent-lime transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                    {service.shortDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-extrabold mb-4 text-sm uppercase tracking-wider">Key Features:</h4>
                    <ul className="space-y-3">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="w-1.5 h-1.5 bg-accent-lime rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm font-bold text-black pl-5">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-extrabold mb-3 text-sm uppercase tracking-wider">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-xs font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 3 && (
                        <span className="px-3 py-1.5 bg-accent-lime/20 text-black rounded-lg text-xs font-bold">
                          +{service.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex justify-end items-center mb-6 p-5 bg-accent-lime rounded-2xl">
                    <div className="text-right">
                      <div className="text-sm text-black/70 font-bold mb-1">Timeline</div>
                      <div className="font-extrabold">{service.timeline}</div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <a href="#quote" className="block w-full px-4 py-3 bg-black text-accent-lime rounded-xl hover:shadow-lg transition-all font-extrabold hover:scale-105 text-center">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 md:px-6 lg:px-8 py-24 bg-black relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/15 border border-accent-lime/30 text-accent-lime rounded-full text-sm font-extrabold mb-6">
              <Settings className="w-4 h-4" />
              <span>WORK PROCESS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-5">
              How I <span className="text-accent-lime">Work</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">
              A battle-tested process that delivers on time, on budget, and beyond expectations — every single time.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative">
            {/* Connecting line desktop */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent-lime/40 to-transparent z-0" />

            {processSteps.map((step, index) => (
              <div key={step.step} className="relative z-10 flex flex-col items-center text-center group">
                {/* Number bubble */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-accent-lime rounded-2xl flex items-center justify-center text-2xl font-extrabold text-black shadow-lg shadow-accent-lime/20 group-hover:scale-110 group-hover:shadow-accent-lime/40 transition-all duration-300">
                    {step.step}
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-accent-lime/30 scale-110 group-hover:scale-125 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
                </div>

                {/* Content card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 w-full group-hover:bg-white/10 group-hover:border-accent-lime/30 transition-all duration-300">
                  <h3 className="font-extrabold text-white text-lg mb-2 group-hover:text-accent-lime transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <p className="text-white/50 text-lg mb-6 font-medium">Ready to kick off your project?</p>
            <a
              href="#quote"
              className="inline-flex items-center gap-3 px-10 py-5 bg-accent-lime text-black rounded-xl font-extrabold text-lg hover:shadow-2xl hover:shadow-accent-lime/30 hover:scale-105 transition-all duration-300"
            >
              <Calendar className="w-5 h-5" />
              Start the Process
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="px-4 md:px-6 lg:px-8 py-24 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-20 right-0 w-72 h-72 bg-accent-lime/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent-lime/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/15 border border-accent-lime/40 text-black rounded-full text-sm font-extrabold mb-6">
              <Handshake className="w-4 h-4" />
              <span>HOW IT WORKS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-5">
              Built on <span className="text-accent-lime">Trust</span> & Transparency
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
              No surprises. No hidden fees. Just honest collaboration and results that speak for themselves.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="group relative bg-black rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-accent-lime/15 border border-accent-lime/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-lime group-hover:border-accent-lime transition-all duration-300">
                  <DollarSign className="w-7 h-7 text-accent-lime group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-accent-lime transition-colors duration-300">No Hidden Costs</h3>
                <p className="text-white/50 leading-relaxed font-medium mb-6 group-hover:text-white/70 transition-colors duration-300">
                  All costs are discussed upfront with detailed proposals and clear milestones. You'll always know exactly what you're paying for.
                </p>
                <ul className="space-y-3">
                  {["Detailed project breakdown", "Clear deliverables list", "No surprise charges"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      <span className="w-5 h-5 rounded-full bg-accent-lime/20 border border-accent-lime/40 flex items-center justify-center flex-shrink-0">
                        <span className="w-1.5 h-1.5 bg-accent-lime rounded-full" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 2 - Featured */}
            <div className="group relative bg-accent-lime rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 overflow-hidden shadow-2xl shadow-accent-lime/20">
              <div className="absolute top-4 right-4 px-3 py-1 bg-black text-accent-lime rounded-full text-xs font-extrabold flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>RECOMMENDED</span>
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-black/15 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-2xl font-extrabold text-black mb-3">Value-Based Pricing</h3>
                <p className="text-black/70 leading-relaxed font-medium mb-6">
                  Pricing based on ROI and value delivered to your business — not just hours. Your growth is my success metric.
                </p>
                <ul className="space-y-3">
                  {["ROI-focused approach", "Business goal alignment", "Long-term partnership"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-black/80 font-medium">
                      <span className="w-5 h-5 rounded-full bg-black/15 flex items-center justify-center flex-shrink-0">
                        <span className="w-1.5 h-1.5 bg-black rounded-full" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-black rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-accent-lime/15 border border-accent-lime/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-lime group-hover:border-accent-lime transition-all duration-300">
                  <Handshake className="w-7 h-7 text-accent-lime group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3 group-hover:text-accent-lime transition-colors duration-300">Flexible Payment</h3>
                <p className="text-white/50 leading-relaxed font-medium mb-6 group-hover:text-white/70 transition-colors duration-300">
                  Multiple payment options and milestone-based payments for larger projects. Pay as we progress through each phase.
                </p>
                <ul className="space-y-3">
                  {["Milestone-based payments", "Multiple payment methods", "Easy invoicing"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      <span className="w-5 h-5 rounded-full bg-accent-lime/20 border border-accent-lime/40 flex items-center justify-center flex-shrink-0">
                        <span className="w-1.5 h-1.5 bg-accent-lime rounded-full" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-black rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent-lime/8 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-lime/5 rounded-full blur-2xl" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Discuss Your <span className="text-accent-lime">Project?</span>
              </h3>
              <p className="text-lg text-white/60 leading-relaxed font-medium mb-10">
                Every project is unique. I'll provide a detailed custom quote based on your specific requirements, timeline, and business goals during our discovery call.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#quote" className="px-10 py-5 bg-accent-lime text-black rounded-xl font-extrabold hover:shadow-2xl hover:shadow-accent-lime/30 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Discovery Call</span>
                </a>
                <a href="#quote" className="px-10 py-5 border-2 border-white/20 text-white rounded-xl font-extrabold hover:border-accent-lime hover:text-accent-lime transition-all duration-300 inline-flex items-center justify-center gap-3">
                  <span>Get Instant Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Quote Section */}
      <GetQuote />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
