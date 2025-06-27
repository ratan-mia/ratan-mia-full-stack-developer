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
    gradient: "from-blue-600 to-indigo-600",
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
    gradient: "from-purple-600 to-pink-600",
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
    gradient: "from-green-600 to-teal-600",
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
    gradient: "from-indigo-600 to-purple-600",
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
    gradient: "from-teal-600 to-cyan-600",
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
      className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col group"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
              {service.title}
            </h3>
            {service.featured && (
              <motion.span
                className="inline-flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-3 h-3" />
                Featured
              </motion.span>
            )}
          </div>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
            {service.basePrice}
          </div>
          <div className="text-xs text-gray-600">Starting Price</div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-lg font-bold text-gray-800">{service.timeline}</div>
          <div className="text-xs text-gray-600">Timeline</div>
        </div>
      </div>

      {/* Features */}
      <div className="flex-1 mb-6">
        <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-500" />
          Key Features
        </h4>
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <motion.button
        className={`w-full py-3 px-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
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
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      aria-label="Professional web development services"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-200/50 text-purple-800 px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Services</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            Professional Web Solutions
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {SERVICE_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 hover:bg-white/80 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
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
            className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.0 }}
          >
            ⭐ Most Popular Services
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{service.title}</h4>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2`}>
                  {service.basePrice}
                </div>
                <div className="text-xs text-gray-500 mb-4">Starting price</div>
                <motion.button
                  className={`w-full py-2 px-4 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg text-sm`}
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
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12 text-center">
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
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 md:p-12 rounded-2xl text-white shadow-2xl relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-48 h-48 bg-purple-200 rounded-full blur-3xl"
                animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project requirements and create a custom solution that drives your business forward.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  Get Free Quote
                </motion.a>
                
                <motion.a
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
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