'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle,
  Clock,
  Code2,
  Eye,
  Globe,
  Palette,
  Rocket,
  Search,
  Server,
  ShoppingCart,
  Star,
  Target,
  Wrench,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  // Optimized animation variants following design guidelines
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  };

  const services = [
    {
      id: 1,
      icon: Code2,
      title: "Full Stack Web Development",
      description: "End-to-end web applications using cutting-edge technologies like React.js, Next.js, Node.js, and PHP Laravel with modern architecture patterns.",
      features: [
        "Responsive Design & Mobile-First Approach",
        "RESTful API Development & Integration", 
        "Database Architecture & Optimization",
        "Performance Optimization & Caching",
        "SEO Implementation & Analytics",
        "Progressive Web App (PWA) Development"
      ],
      pricing: "Starting from $2,500",
      gradient: "from-blue-500 to-indigo-600",
      accentColor: "blue",
      complexity: "High",
      timeline: "4-12 weeks",
      technologies: ["React", "Next.js", "Node.js", "Laravel", "MySQL"],
      bgColor: "bg-blue-50 dark:bg-blue-900/10",
      textColor: "text-blue-600 dark:text-blue-400",
      borderColor: "border-blue-200 dark:border-blue-800",
      rating: "4.9"
    },
    {
      id: 2,
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "High-converting online stores with advanced features, secure payment processing, inventory management, and comprehensive analytics dashboard.",
      features: [
        "Custom E-commerce Development",
        "Shopify & WooCommerce Expertise",
        "Payment Gateway Integration (Stripe, PayPal)",
        "Inventory Management Systems",
        "Order Processing & Fulfillment",
        "Advanced Analytics & Reporting"
      ],
      pricing: "Starting from $4,000",
      gradient: "from-purple-500 to-pink-600",
      accentColor: "purple",
      complexity: "High",
      timeline: "6-16 weeks",
      technologies: ["Shopify", "WooCommerce", "Stripe", "React", "Laravel"],
      bgColor: "bg-purple-50 dark:bg-purple-900/10",
      textColor: "text-purple-600 dark:text-purple-400",
      borderColor: "border-purple-200 dark:border-purple-800",
      rating: "4.8"
    },
    {
      id: 3,
      icon: Globe,
      title: "WordPress Development",
      description: "Custom WordPress solutions including themes, plugins, and complete CMS implementations with advanced functionality and security measures.",
      features: [
        "Custom Theme Development from Scratch",
        "Plugin Development & Customization",
        "WordPress Performance Optimization",
        "Security Hardening & Maintenance",
        "Migration & Multi-site Setup",
        "Gutenberg Block Development"
      ],
      pricing: "Starting from $1,500",
      gradient: "from-emerald-500 to-green-600",
      accentColor: "green",
      complexity: "Medium",
      timeline: "2-8 weeks",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS"],
      bgColor: "bg-emerald-50 dark:bg-emerald-900/10",
      textColor: "text-emerald-600 dark:text-emerald-400",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      rating: "4.9"
    },
    {
      id: 4,
      icon: Server,
      title: "DevOps & Cloud Solutions",
      description: "Complete IT infrastructure management, cloud deployment, containerization, and automated CI/CD pipelines for scalable applications.",
      features: [
        "AWS/Digital Ocean Cloud Setup",
        "Docker Containerization & Orchestration",
        "CI/CD Pipeline Implementation",
        "Server Management & Monitoring",
        "Database Administration & Backup",
        "SSL Certificate & Security Setup"
      ],
      pricing: "Starting from $1,200/month",
      gradient: "from-orange-500 to-red-600",
      accentColor: "orange",
      complexity: "High",
      timeline: "1-4 weeks setup",
      technologies: ["AWS", "Docker", "Jenkins", "Linux", "Nginx"],
      bgColor: "bg-orange-50 dark:bg-orange-900/10",
      textColor: "text-orange-600 dark:text-orange-400",
      borderColor: "border-orange-200 dark:border-orange-800",
      rating: "4.7"
    },
    {
      id: 5,
      icon: Zap,
      title: "Performance Optimization",
      description: "Comprehensive speed optimization for existing websites and applications using advanced techniques and modern best practices.",
      features: [
        "Core Web Vitals Optimization",
        "Database Query Optimization",
        "Image Compression & WebP Conversion",
        "Code Splitting & Lazy Loading",
        "CDN Implementation & Caching",
        "Bundle Size Reduction"
      ],
      pricing: "Starting from $800",
      gradient: "from-amber-500 to-orange-600",
      accentColor: "yellow",
      complexity: "Medium",
      timeline: "1-3 weeks",
      technologies: ["Lighthouse", "GTmetrix", "Redis", "CloudFlare", "Webpack"],
      bgColor: "bg-amber-50 dark:bg-amber-900/10",
      textColor: "text-amber-600 dark:text-amber-400",
      borderColor: "border-amber-200 dark:border-amber-800",
      rating: "5.0"
    },
    {
      id: 6,
      icon: Brain,
      title: "AI Integration & Automation",
      description: "Cutting-edge AI solutions including chatbots, natural language processing, and intelligent automation for modern applications.",
      features: [
        "OpenAI GPT Integration",
        "Custom Chatbot Development",
        "Voice Recognition & Text-to-Speech",
        "Natural Language Processing",
        "Automated Content Generation",
        "Machine Learning Implementation"
      ],
      pricing: "Starting from $2,000",
      gradient: "from-cyan-500 to-blue-600",
      accentColor: "cyan",
      complexity: "High",
      timeline: "3-8 weeks",
      technologies: ["OpenAI", "Python", "TensorFlow", "Node.js", "API"],
      bgColor: "bg-cyan-50 dark:bg-cyan-900/10",
      textColor: "text-cyan-600 dark:text-cyan-400",
      borderColor: "border-cyan-200 dark:border-cyan-800",
      rating: "4.8"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your business requirements, target audience analysis, and comprehensive project roadmap creation.",
      icon: Search,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500"
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "User experience design, system architecture planning, and interactive prototypes with stakeholder feedback.",
      icon: Palette,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous integration, comprehensive testing, and quality assurance protocols.",
      icon: Wrench,
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-500"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Production deployment, performance monitoring, ongoing maintenance, and dedicated technical support.",
      icon: Rocket,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-500"
    }
  ];

  const serviceCategories = [
    { name: 'Development', icon: Code2, count: '3', color: 'text-blue-600 dark:text-blue-400' },
    { name: 'E-commerce', icon: ShoppingCart, count: '1', color: 'text-purple-600 dark:text-purple-400' },
    { name: 'Optimization', icon: Zap, count: '1', color: 'text-amber-600 dark:text-amber-400' },
    { name: 'AI Integration', icon: Brain, count: '1', color: 'text-cyan-600 dark:text-cyan-400' }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: Target, color: 'text-amber-400' },
    { number: '98%', label: 'Client Satisfaction', icon: Award, color: 'text-emerald-400' },
    { number: '24/7', label: 'Support Available', icon: Clock, color: 'text-blue-400' }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/8 dark:bg-blue-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500/8 dark:bg-purple-400/5 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute top-1/2 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500/5 dark:bg-cyan-400/3 rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 sm:w-48 h-32 sm:h-48 bg-emerald-500/5 dark:bg-emerald-400/3 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/90 dark:bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg mb-6 border border-white/50 dark:border-white/20"
          >
            <motion.div 
              className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-blue-800 dark:text-blue-200 font-semibold text-xs sm:text-sm uppercase tracking-wider">
              Professional Services
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white text-balance"
          >
            Comprehensive Web Solutions
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            From concept to deployment, I deliver exceptional digital solutions that drive business growth. 
            Each service is tailored to meet your specific needs and exceed expectations.
          </motion.p>

          {/* Service Categories */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12"
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/90 dark:bg-white/10 backdrop-blur-sm text-slate-700 dark:text-slate-300 font-semibold rounded-full border border-white/50 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 hover:scale-102 transition-all duration-300 cursor-pointer shadow-md min-h-[44px] touch-manipulation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -1 }}
              >
                <category.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${category.color}`} />
                <span className="text-xs sm:text-sm">{category.name}</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full text-xs font-bold">
                  {category.count}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              variants={fadeInUp}
              className="group relative h-full"
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
            >
              {/* Service Card */}
              <div className="bg-white/90 dark:bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50 dark:border-white/20 relative overflow-hidden group-hover:-translate-y-1 h-full flex flex-col">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl md:rounded-2xl`}></div>
                
                {/* Header Section */}
                <div className="relative z-10 mb-6">
                  {/* Icon and Badges */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-lg md:rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className={`px-2 sm:px-3 py-1 ${service.bgColor} ${service.textColor} rounded-full text-xs font-bold uppercase tracking-wider`}>
                        {service.complexity}
                      </span>
                      <span className="px-2 sm:px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span className="hidden sm:inline">{service.timeline}</span>
                        <span className="sm:hidden">{service.timeline.split(' ')[0]}</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Title, Rating and Description */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-900 dark:group-hover:from-white group-hover:to-blue-600 dark:group-hover:to-blue-400 transition-all duration-300 flex-1 pr-3">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1 text-amber-500 flex-shrink-0">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      <span className="text-xs sm:text-sm font-semibold">{service.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
                
                {/* Features List */}
                <div className="relative z-10 flex-grow">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">Key Features:</h4>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed font-light">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 text-xs sm:text-sm uppercase tracking-wider">Technologies:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {service.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-2 sm:px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="relative z-10 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className={`text-base sm:text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.pricing}
                    </span>
                    <motion.button
                      className={`px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${service.gradient} text-white font-bold rounded-lg md:rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 text-xs sm:text-sm min-h-[44px] min-w-[44px] touch-manipulation`}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <span className="hidden sm:inline">Get Started</span>
                      <span className="sm:hidden">Start</span>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 rounded-xl md:rounded-2xl blur transition-opacity duration-500 -z-10`}
                initial={false}
                animate={{ opacity: hoveredService === service.id ? 0.2 : 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Process Section */}
        <motion.div 
          className="bg-white/90 dark:bg-white/10 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-xl md:rounded-2xl shadow-lg border border-white/50 dark:border-white/20 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8 sm:mb-12">
            <motion.h3 
              className="text-xl sm:text-2xl md:text-4xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white text-balance"
              variants={fadeInUp}
            >
              My Development Process
            </motion.h3>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
              variants={fadeInUp}
            >
              A proven methodology that ensures successful project delivery, 
              from initial consultation to ongoing support and maintenance.
            </motion.p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((process, index) => (
              <motion.div 
                key={index}
                className="text-center group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -2 }}
              >
                {/* Step Icon */}
                <div className="relative mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${process.bgColor} rounded-lg md:rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-md relative z-10`}>
                    <process.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>

                {/* Step Info */}
                <div className="relative z-10">
                  <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${process.color} bg-clip-text text-transparent mb-2 sm:mb-3`}>
                    {process.step}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">{process.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-light">{process.description}</p>
                </div>

                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 sm:top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-300 dark:from-slate-600 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-6 sm:p-8 md:p-12 rounded-xl md:rounded-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -90, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance">
                Ready to Transform Your Vision Into Reality?
              </h3>
              <p className="text-blue-200 mb-6 sm:mb-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-light">
                Let's collaborate to create exceptional digital solutions that drive your business forward. 
                With proven expertise and dedication to excellence, I'm committed to exceeding your expectations.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-full hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 group min-h-[44px] text-sm sm:text-base touch-manipulation"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
                
                <motion.button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 focus:ring-offset-2 group min-h-[44px] text-sm sm:text-base touch-manipulation"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Portfolio</span>
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-white/20">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                      <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400">{stat.number}</div>
                    </div>
                    <div className="text-blue-200 font-light text-xs sm:text-sm">{stat.label}</div>
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