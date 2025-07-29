'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Code,
  ExternalLink,
  Globe,
  Mail,
  ShoppingCart,
  Star,
  Zap
} from 'lucide-react';
import { useRef } from 'react';

// Simplified Service Data - Only Essential Services
const CORE_SERVICES = [
  {
    id: 1,
    icon: Code,
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
    featured: true
  }
];

const SERVICE_STATS = [
  { number: '150+', label: 'Projects Delivered' },
  { number: '98%', label: 'Success Rate' },
  { number: '24/7', label: 'Support' },
  { number: '5', label: 'Core Services' }
];

// Service Card Component
const ServiceCard = ({ service, index, inView }) => {
  return (
    <motion.div
      className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 hover:border-cyan-400 transition-all duration-300 h-full flex flex-col group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
          <service.icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              {service.title}
            </h3>
            {service.featured && (
              <motion.span
                className="inline-flex items-center gap-1 bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 px-2 py-1 rounded-full text-xs font-bold"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-3 h-3" />
                Featured
              </motion.span>
            )}
          </div>
          <p className="text-gray-300 leading-relaxed">{service.description}</p>
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
          <div className="text-lg font-bold text-cyan-400">
            {service.basePrice}
          </div>
          <div className="text-xs text-gray-400">Starting Price</div>
        </div>
        <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
          <div className="text-lg font-bold text-white">{service.timeline}</div>
          <div className="text-xs text-gray-400">Timeline</div>
        </div>
      </div>

      {/* Features */}
      <div className="flex-1 mb-6">
        <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-cyan-400" />
          Key Features
        </h4>
        <ul className="space-y-3">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <motion.button
        className="w-full py-4 px-6 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Get Started
        <ArrowRight className="w-4 h-4" />
      </motion.button>
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
      className="py-24 bg-black relative overflow-hidden"
      aria-label="Professional web development services"
    >
      {/* Background Decoration */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400 opacity-5 rounded-full blur-3xl" />
      
      {/* Enhanced glow for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow Text */}
          <motion.span
            className="text-cyan-400 font-semibold tracking-wider uppercase mb-2 inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            Services
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            Professional <span className="text-cyan-400">Web Solutions</span>
          </motion.h2>

          {/* Accent Line */}
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6" />
          
          <motion.p 
            className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            From concept to deployment, delivering exceptional digital solutions that drive business growth and exceed expectations.
          </motion.p>
        </motion.div>

        {/* Service Stats */}
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {SERVICE_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Services Preview */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.0 }}
          >
            ⭐ Most Popular Services
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 hover:border-cyan-400 transition-all duration-300 text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{service.title}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-400 mb-2">
                  {service.basePrice}
                </div>
                <div className="text-xs text-gray-400 mb-4">Starting price</div>
                <motion.button
                  className="w-full py-3 px-4 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-gray-900 font-semibold rounded-lg text-sm transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
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
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Complete Service Portfolio
          </h3>
          
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
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 p-12 rounded-2xl text-white shadow-2xl relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-48 h-48 bg-gray-200 rounded-full blur-3xl"
                animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-cyan-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's discuss your project requirements and create a custom solution that drives your business forward.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="bg-white hover:bg-gray-100 text-cyan-600 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  Get Free Quote
                </motion.a>
                
                <motion.a
                  href="/services"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Services
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;