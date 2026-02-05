import Contact from '@/components/home/Contact';
import GetQuote from '@/components/home/GetQuote';
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
    icon: '�',
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
    icon: '💻',
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
    icon: '🛒',
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
    icon: '🌐',
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
    icon: '⚙️',
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
    icon: '⚡',
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
    icon: '🤖',
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
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-20 text-center">
          <div className="inline-block px-6 py-2 bg-black/10 text-black rounded-full text-sm font-extrabold mb-6">
            💼 PROFESSIONAL SERVICES
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
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
              🚀 OUR SERVICES
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
                  <div className="absolute top-4 left-4 w-14 h-14 bg-accent-lime rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                    {service.icon}
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

                  {/* Pricing and Timeline */}
                  <div className="flex justify-between items-center mb-6 p-5 bg-accent-lime rounded-2xl">
                    <div>
                      <div className="text-sm text-black/70 font-bold mb-1">Starting from</div>
                      <div className="text-2xl font-extrabold text-black">{service.basePrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-black/70 font-bold mb-1">Timeline</div>
                      <div className="font-extrabold">{service.timeline}</div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  {service.testimonial && (
                    <div className="mb-6 p-5 bg-gray-50 rounded-2xl border-l-4 border-accent-lime">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        "{service.testimonial.text}"
                      </p>
                      <div className="text-xs text-gray-600 font-bold">
                        - {service.testimonial.author}, {service.testimonial.company}
                      </div>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <button className="w-full px-4 py-3 bg-black text-accent-lime rounded-xl hover:shadow-lg transition-all font-extrabold hover:scale-105">
                      Get Started
                    </button>
                    <button className="w-full px-4 py-3 border-2 border-black text-black rounded-xl hover:bg-black hover:text-white transition-all font-bold">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 md:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
              📋 WORK PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">How I Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              A proven process that ensures project success and client satisfaction every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative text-center">
                <div className="w-20 h-20 bg-accent-lime text-black rounded-2xl flex items-center justify-center text-2xl font-extrabold mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>
                <h3 className="font-extrabold mb-3 text-lg">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  {step.description}
                </p>
                
                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-accent-lime">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="px-4 md:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
              💰 PRICING
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Transparent Pricing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-accent-lime">
              <div className="text-5xl mb-6">💰</div>
              <h3 className="text-2xl font-extrabold mb-4">No Hidden Costs</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                All costs are discussed upfront with detailed proposals and clear pricing structure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-accent-lime">
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-2xl font-extrabold mb-4">Value-Based Pricing</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Pricing based on the value delivered to your business, not just hours worked.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-accent-lime">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-2xl font-extrabold mb-4">Flexible Payment</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Multiple payment options and milestone-based payments for larger projects.
              </p>
            </div>
          </div>

          <div className="bg-accent-lime rounded-3xl p-10 text-center">
            <p className="text-xl text-black leading-relaxed font-bold mb-6">
              Every project is unique. The prices shown are starting points, and I'll provide a detailed 
              quote based on your specific requirements during our discovery call.
            </p>
            <button className="px-10 py-5 bg-black text-accent-lime rounded-xl font-extrabold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Schedule Discovery Call
            </button>
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
