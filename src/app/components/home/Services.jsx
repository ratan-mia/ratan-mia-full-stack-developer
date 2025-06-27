'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Code2,
  ExternalLink,
  Globe,
  Mail,
  Server,
  ShoppingCart,
  Star,
  Terminal,
  Zap
} from 'lucide-react';
import { useRef } from 'react';

// Updated Service Data with new design system
const CORE_SERVICES = [
  {
    id: 1,
    icon: Code2,
    title: "Full Stack Development",
    description: "Complete web applications with React.js, Next.js, and Laravel. From concept to deployment.",
    features: [
      "Responsive Design & Mobile-First",
      "RESTful API Development",
      "Database Architecture",
      "Performance Optimization"
    ],
    basePrice: "$2,500",
    timeline: "4-12 weeks",
    gradient: "from-cyan-500 to-blue-500",
    color: "text-cyan-400",
    featured: true
  },
  {
    id: 2,
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "High-converting online stores with secure payments and inventory management.",
    features: [
      "Custom E-commerce Development",
      "Payment Gateway Integration",
      "Inventory Management",
      "Analytics & Reporting"
    ],
    basePrice: "$4,000",
    timeline: "6-16 weeks",
    gradient: "from-purple-500 to-pink-500",
    color: "text-purple-400",
    featured: true
  },
  {
    id: 3,
    icon: Globe,
    title: "WordPress Development",
    description: "Custom WordPress solutions with themes, plugins, and performance optimization.",
    features: [
      "Custom Theme Development",
      "Plugin Development",
      "Performance Optimization",
      "Security Implementation"
    ],
    basePrice: "$1,500",
    timeline: "2-8 weeks",
    gradient: "from-emerald-500 to-teal-500",
    color: "text-emerald-400",
    featured: false
  },
  {
    id: 4,
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed optimization for existing websites achieving perfect Core Web Vitals scores.",
    features: [
      "Core Web Vitals Optimization",
      "Database Query Optimization",
      "Image Compression & WebP",
      "CDN Implementation"
    ],
    basePrice: "$800",
    timeline: "1-3 weeks",
    gradient: "from-orange-500 to-red-500",
    color: "text-orange-400",
    featured: false
  },
  {
    id: 5,
    icon: Brain,
    title: "AI Integration",
    description: "Advanced AI solutions including chatbots and intelligent automation.",
    features: [
      "OpenAI GPT Integration",
      "Custom Chatbot Development",
      "Natural Language Processing",
      "Machine Learning Implementation"
    ],
    basePrice: "$2,000",
    timeline: "3-8 weeks",
    gradient: "from-indigo-500 to-purple-500",
    color: "text-indigo-400",
    featured: true
  },
  {
    id: 6,
    icon: Server,
    title: "DevOps & Deployment",
    description: "Cloud infrastructure setup and CI/CD pipeline implementation.",
    features: [
      "AWS/Digital Ocean Setup",
      "Docker Containerization",
      "CI/CD Pipeline Setup",
      "Monitoring & Security"
    ],
    basePrice: "$1,200",
    timeline: "2-6 weeks",
    gradient: "from-teal-500 to-cyan-500",
    color: "text-teal-400",
    featured: false
  }
];

const SERVICE_STATS = [
  { number: '150+', label: 'Projects Delivered', color: 'text-cyan-400' },
  { number: '98%', label: 'Success Rate', color: 'text-blue-400' },
  { number: '24/7', label: 'Support', color: 'text-purple-400' },
  { number: '6', label: 'Core Services', color: 'text-orange-400' }
];

// Updated Service Card Component
const ServiceCard = ({ service, index, inView }) => {
  return (
    <motion.div
      className="card-primary group h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <service.icon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 uppercase tracking-wide">
                {service.title}
              </h3>
              {service.featured && (
                <motion.span
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-3 h-3" />
                  Featured
                </motion.span>
              )}
            </div>
            <p className="text-slate-300 leading-relaxed">{service.description}</p>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-4 bg-slate-800 border border-slate-700 rounded-xl">
            <div className={`text-lg font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent uppercase tracking-tight`}>
              {service.basePrice}
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Starting Price</div>
          </div>
          <div className="text-center p-4 bg-slate-800 border border-slate-700 rounded-xl">
            <div className="text-lg font-black text-white uppercase tracking-tight">{service.timeline}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Timeline</div>
          </div>
        </div>

        {/* Features */}
        <div className="flex-1 mb-6">
          <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider">
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            Key Features
          </h4>
          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`} />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <motion.button
          className={`btn-primary w-full group`}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  );
};

// Featured Service Preview Component
const FeaturedServicePreview = ({ service, index, inView }) => {
  return (
    <motion.div
      className="card-primary group text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: 1.2 + index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="relative z-10">
        <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="w-8 h-8" />
        </div>
        <h4 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{service.title}</h4>
        <p className="text-slate-300 text-sm mb-4 leading-relaxed">{service.description}</p>
        <div className={`text-2xl font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2 uppercase tracking-tight`}>
          {service.basePrice}
        </div>
        <div className="text-xs text-slate-400 mb-6 uppercase tracking-wider">Starting price</div>
        <motion.button
          className={`w-full py-3 px-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-lg`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

// Main Services Component
const Services = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const statsInView = useInView(statsRef, { once: true, threshold: 0.1 });
  const servicesInView = useInView(servicesRef, { once: true, threshold: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, threshold: 0.1 });

  const featuredServices = CORE_SERVICES.filter(service => service.featured);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-16 lg:py-24 px-6 lg:px-8 xl:px-16 2xl:px-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden"
      aria-label="Professional web development services"
    >
      {/* Developer Brand Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      {/* Code Brackets Decoration */}
      <motion.div
        className="absolute top-20 left-10 text-6xl font-mono text-cyan-500/20 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        &lt;Services/&gt;
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Badge */}
          <motion.div
            className="section-badge mx-auto mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            Services Portfolio
          </motion.div>
          
          <motion.h2 
            className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            Professional Web Solutions
          </motion.h2>
          
          <motion.p 
            className="text-lg text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            From concept to deployment, delivering exceptional digital solutions that drive business growth and exceed expectations.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-20 mx-auto mt-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>

        {/* Service Stats */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {SERVICE_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10">
                <div className={`text-3xl font-black text-white mb-2 uppercase tracking-tight group-hover:${stat.color} transition-colors duration-300`}>{stat.number}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Services Preview */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h3 
              className="text-2xl lg:text-3xl font-black text-white mb-4 uppercase tracking-tight flex items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.0 }}
            >
              <Star className="w-8 h-8 text-orange-400" />
              Most Popular Services
            </motion.h3>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-32 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <FeaturedServicePreview
                key={service.id}
                service={service}
                index={index}
                inView={isInView}
              />
            ))}
          </div>
        </motion.div>

        {/* All Services Grid */}
        <motion.div 
          ref={servicesRef}
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">
              Complete Service Portfolio
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-32 mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                inView={servicesInView}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          ref={ctaRef}
          className="relative p-8 lg:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
          
          {/* Animated Background Effects */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <motion.div 
              className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
              animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="relative z-10 text-center">
            <Terminal className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            
            <motion.h3 
              className="text-3xl lg:text-4xl font-black text-white mb-4 uppercase tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              Ready to Start Your Project?
            </motion.h3>
            
            <motion.p 
              className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="btn-primary group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Get Free Quote</span>
              </motion.a>
              
              <motion.a
                href="/services"
                className="btn-secondary group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Services</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Developer Brand Stripe Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
    </section>
  );
};

export default Services;
