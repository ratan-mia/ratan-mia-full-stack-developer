'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle,
  Clock,
  Code,
  ExternalLink,
  Globe,
  Layers,
  Mail,
  Phone,
  Search,
  Server,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const services = [
    {
      id: 1,
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end web applications using React.js, Next.js, Node.js, and PHP Laravel with modern architecture.",
      features: [
        "Responsive Design & Mobile-First",
        "RESTful API Development", 
        "Database Architecture",
        "Performance Optimization",
        "SEO Implementation",
        "Progressive Web Apps"
      ],
      pricing: "$2,500+",
      gradient: "from-blue-600 to-indigo-600",
      category: "development",
      complexity: "High",
      timeline: "4-12 weeks",
      technologies: ["React", "Next.js", "Node.js", "Laravel"],
      featured: true
    },
    {
      id: 2,
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "High-converting online stores with secure payments, inventory management, and analytics dashboard.",
      features: [
        "Custom E-commerce Development",
        "Shopify & WooCommerce",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Processing",
        "Analytics & Reporting"
      ],
      pricing: "$4,000+",
      gradient: "from-purple-600 to-pink-600",
      category: "ecommerce",
      complexity: "High",
      timeline: "6-16 weeks",
      technologies: ["Shopify", "WooCommerce", "Stripe", "React"],
      featured: true
    },
    {
      id: 3,
      icon: Globe,
      title: "WordPress Development",
      description: "Custom WordPress solutions including themes, plugins, and complete CMS implementations.",
      features: [
        "Custom Theme Development",
        "Plugin Development",
        "Performance Optimization",
        "Security Hardening",
        "Migration & Multi-site",
        "Gutenberg Blocks"
      ],
      pricing: "$1,500+",
      gradient: "from-green-600 to-teal-600",
      category: "cms",
      complexity: "Medium",
      timeline: "2-8 weeks",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
      featured: false
    },
    {
      id: 4,
      icon: Server,
      title: "DevOps & Cloud",
      description: "Complete IT infrastructure, cloud deployment, containerization, and automated CI/CD pipelines.",
      features: [
        "AWS/Digital Ocean Setup",
        "Docker Containerization",
        "CI/CD Implementation",
        "Server Monitoring",
        "Database Administration",
        "Security & SSL Setup"
      ],
      pricing: "$1,200/mo",
      gradient: "from-orange-600 to-red-600",
      category: "devops",
      complexity: "High",
      timeline: "1-4 weeks",
      technologies: ["AWS", "Docker", "Jenkins", "Linux"],
      featured: false
    },
    {
      id: 5,
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed optimization for existing websites using advanced techniques and modern best practices.",
      features: [
        "Core Web Vitals Optimization",
        "Database Query Optimization",
        "Image Compression",
        "Code Splitting & Lazy Loading",
        "CDN Implementation",
        "Bundle Size Reduction"
      ],
      pricing: "$800+",
      gradient: "from-indigo-600 to-purple-600",
      category: "optimization",
      complexity: "Medium",
      timeline: "1-3 weeks",
      technologies: ["Lighthouse", "GTmetrix", "Redis", "CloudFlare"],
      featured: false
    },
    {
      id: 6,
      icon: Brain,
      title: "AI Integration",
      description: "Cutting-edge AI solutions including chatbots, NLP, and intelligent automation for modern apps.",
      features: [
        "OpenAI GPT Integration",
        "Custom Chatbot Development",
        "Voice Recognition & TTS",
        "Natural Language Processing",
        "Automated Content Generation",
        "Machine Learning Implementation"
      ],
      pricing: "$2,000+",
      gradient: "from-teal-600 to-cyan-600",
      category: "ai",
      complexity: "High",
      timeline: "3-8 weeks",
      technologies: ["OpenAI", "Python", "TensorFlow", "Node.js"],
      featured: true
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "Requirements analysis and comprehensive project roadmap creation.",
      icon: Search,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      step: "02", 
      title: "Design",
      description: "UX design, system architecture, and interactive prototypes.",
      icon: Target,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with continuous integration and testing.",
      icon: Code,
      gradient: "from-green-500 to-green-600"
    },
    {
      step: "04",
      title: "Deployment",
      description: "Production deployment, monitoring, and ongoing support.",
      icon: TrendingUp,
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: Award },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'cms', name: 'CMS', icon: Globe },
    { id: 'devops', name: 'DevOps', icon: Server },
    { id: 'optimization', name: 'Optimization', icon: Zap },
    { id: 'ai', name: 'AI', icon: Brain }
  ];

  const filteredServices = services.filter(service => 
    activeFilter === 'all' || service.category === activeFilter
  );

  const featuredServices = services.filter(service => service.featured);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Medium': return 'text-blue-600 bg-blue-100';
      case 'High': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="services" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Compact Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-purple-200/50 text-purple-800 px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider mb-6 shadow-lg"
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Professional Services</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            Web Solutions
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            From concept to deployment, delivering exceptional digital solutions that drive business growth and exceed expectations.
          </motion.p>

          {/* Compact Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto"
          >
            {[
              { number: '100+', label: 'Projects' },
              { number: '97%', label: 'Success Rate' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xl md:text-2xl font-black text-blue-600 mb-1">{stat.number}</div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Compact Featured Services */}
        <motion.div 
          className="mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-black text-slate-800 mb-6 text-center"
            variants={fadeInUp}
          >
            Most Popular Services
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    <service.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getLevelColor(service.complexity)}`}>
                        {service.complexity}
                      </span>
                      <Star className="w-4 h-4 text-yellow-500" />
                    </div>
                  </div>
                </div>
                
                <h4 className="font-bold text-slate-800 text-base md:text-lg mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {service.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-lg font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.pricing}
                  </span>
                  <button
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
                    onClick={() => {
                      setActiveFilter('all');
                      document.getElementById(`service-${service.id}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Learn More
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compact Filter Categories */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white hover:text-blue-600 border border-white/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Compact Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div 
                key={service.id}
                id={`service-${service.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group h-full"
                onHoverStart={() => setHoveredService(service.id)}
                onHoverEnd={() => setHoveredService(null)}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Compact Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col gap-1">
                        {service.featured && (
                          <Star className="w-4 h-4 text-yellow-500 ml-auto" />
                        )}
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getLevelColor(service.complexity)}`}>
                          {service.complexity}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{service.timeline}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Layers className="w-3 h-3" />
                        <span>{service.technologies.length} techs</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Compact Features */}
                  <div className="flex-grow mb-4">
                    <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-2 text-sm text-slate-600"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mt-1.5 flex-shrink-0`}></div>
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-slate-500 ml-3">+{service.features.length - 4} more features</li>
                      )}
                    </ul>
                  </div>

                  {/* Compact Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                      {service.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                          +{service.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Compact Footer */}
                  <div className="pt-3 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className={`text-lg font-black bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.pricing}
                      </span>
                      <motion.button
                        className={`px-4 py-2 bg-gradient-to-r ${service.gradient} text-white font-semibold text-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-200`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Get Started
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Compact Process Section */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/50 shadow-xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <motion.h3 
              className="text-2xl md:text-3xl font-black mb-4 text-slate-800"
              variants={fadeInUp}
            >
              Development Process
            </motion.h3>
            <motion.p 
              className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              A proven methodology ensuring successful delivery from consultation to ongoing support.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((process, index) => (
              <motion.div 
                key={index}
                className="text-center bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${process.gradient} rounded-xl flex items-center justify-center text-white mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <process.icon className="w-6 h-6" />
                </div>

                <div className={`text-xl font-black bg-gradient-to-r ${process.gradient} bg-clip-text text-transparent mb-2`}>
                  {process.step}
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {process.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compact Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, 25, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
                Ready To Transform Your Vision?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
                Let's collaborate to create exceptional digital solutions that drive your business forward with proven expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 font-bold text-base rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Start Project</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                
                <motion.a
                  href="tel:+8801751010966"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-6 md:px-8 py-3 md:py-4 font-bold text-base rounded-2xl hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Schedule Call</span>
                </motion.a>
              </div>

              {/* Compact Bottom Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20">
                {[
                  { number: '100+', label: 'Projects' },
                  { number: '97%', label: 'Satisfaction' },
                  { number: '24/7', label: 'Support' }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 font-medium text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;