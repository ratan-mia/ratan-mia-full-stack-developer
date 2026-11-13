import Contact from '@/components/home/Contact';
import GetQuote from '@/components/home/GetQuote';

export const metadata = {
  title: 'Web Development Services - Ratan Mia | Full Stack Solutions',
  description: 'Professional web development services including React development, Laravel APIs, e-commerce solutions, and custom web applications.',
  keywords: 'web development services, React development, Laravel development, e-commerce, custom web applications',
};

// Real service data from home page
const SERVICE_DATA = [
  {
    id: 1,
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
    testimonial: {
      text: "Exceptional full-stack development that exceeded our expectations.",
      author: "Sarah Johnson",
      company: "TechCorp"
    }
  },
  {
    id: 2,
    icon: '🛒',
    title: "E-commerce Solutions",
    shortDescription: "High-converting online stores with advanced features",
    description: "Complete e-commerce solutions with secure payments, inventory management, analytics dashboard, and conversion optimization for maximum sales performance.",
    features: [
      "Custom E-commerce Development",
      "Shopify & WooCommerce Integration",
      "Payment Gateway Integration (Stripe, PayPal)",
      "Inventory Management System",
      "Order Processing & Fulfillment",
      "Analytics & Sales Reporting",
      "Multi-currency & Multi-language",
      "Advanced SEO & Marketing Tools"
    ],
    technologies: ["Shopify", "WooCommerce", "Stripe", "React", "PHP", "MySQL"],
    basePrice: "$4,000",
    timeline: "6-16 weeks",
    category: "ecommerce",
    featured: true,
    gradient: "from-purple-600 to-pink-600",
    testimonial: {
      text: "Our sales increased by 300% after the new e-commerce platform launch.",
      author: "Michael Chen",
      company: "Fashion Hub"
    }
  },
  {
    id: 3,
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
    testimonial: {
      text: "Perfect WordPress solution that boosted our online presence significantly.",
      author: "Lisa Rodriguez",
      company: "Local Business"
    }
  },
  {
    id: 4,
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
    testimonial: {
      text: "Excellent DevOps setup that improved our deployment efficiency dramatically.",
      author: "David Park",
      company: "StartupTech"
    }
  },
  {
    id: 5,
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
    testimonial: {
      text: "Incredible performance boost - our site now loads in under 1 second!",
      author: "Emma Thompson",
      company: "E-commerce Plus"
    }
  },
  {
    id: 6,
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
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            💼 Professional Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
            Web Development Services
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into powerful web applications with modern technologies and best practices. 
            From concept to deployment, I deliver solutions that drive business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_DATA.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group"
              >
                {/* Icon and Title */}
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-blue-600 dark:text-blue-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing and Timeline */}
                <div className="flex justify-between items-center mb-6 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Starting from</div>
                    <div className="text-xl font-bold text-green-600 dark:text-green-400">{service.basePrice}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-500 dark:text-slate-400">Timeline</div>
                    <div className="font-semibold">{service.timeline}</div>
                  </div>
                </div>

                {/* Testimonial */}
                {service.testimonial && (
                  <div className="mb-6 p-4 bg-slate-100 dark:bg-slate-700 rounded-lg">
                    <p className="text-sm italic text-slate-600 dark:text-slate-300 mb-2">
                      "{service.testimonial.text}"
                    </p>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      - {service.testimonial.author}, {service.testimonial.company}
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Get Started
                  </button>
                  <button className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors font-medium text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-20 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Work</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A proven process that ensures project success and client satisfaction every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
                
                {/* Arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-blue-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">No Hidden Costs</h3>
              <p className="text-slate-600 dark:text-slate-300">
                All costs are discussed upfront with detailed proposals and clear pricing structure.
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Value-Based Pricing</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Pricing based on the value delivered to your business, not just hours worked.
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Flexible Payment</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Multiple payment options and milestone-based payments for larger projects.
              </p>
            </div>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Every project is unique. The prices shown are starting points, and I'll provide a detailed 
            quote based on your specific requirements during our discovery call.
          </p>
        </div>
      </section>

      {/* Get Quote Section */}
      <GetQuote />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
