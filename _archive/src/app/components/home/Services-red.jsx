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

  // Optimized animation variants following automotive design guidelines
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
      complexity: "High",
      timeline: "4-12 weeks",
      technologies: ["React", "Next.js", "Node.js", "Laravel", "MySQL"],
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
      complexity: "High",
      timeline: "6-16 weeks",
      technologies: ["Shopify", "WooCommerce", "Stripe", "React", "Laravel"],
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
      complexity: "Medium",
      timeline: "2-8 weeks",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS"],
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
      complexity: "High",
      timeline: "1-4 weeks setup",
      technologies: ["AWS", "Docker", "Jenkins", "Linux", "Nginx"],
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
      complexity: "Medium",
      timeline: "1-3 weeks",
      technologies: ["Lighthouse", "GTmetrix", "Redis", "CloudFlare", "Webpack"],
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
      complexity: "High",
      timeline: "3-8 weeks",
      technologies: ["OpenAI", "Python", "TensorFlow", "Node.js", "API"],
      rating: "4.8"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your business requirements, target audience analysis, and comprehensive project roadmap creation.",
      icon: Search
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "User experience design, system architecture planning, and interactive prototypes with stakeholder feedback.",
      icon: Palette
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous integration, comprehensive testing, and quality assurance protocols.",
      icon: Wrench
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Production deployment, performance monitoring, ongoing maintenance, and dedicated technical support.",
      icon: Rocket
    }
  ];

  const serviceCategories = [
    { name: 'Development', icon: Code2, count: '3' },
    { name: 'E-commerce', icon: ShoppingCart, count: '1' },
    { name: 'Optimization', icon: Zap, count: '1' },
    { name: 'AI Integration', icon: Brain, count: '1' }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: Target },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <section id="services" className="relative py-16 overflow-hidden bg-gray-950">
      {/* Carbon Fiber Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Ambient Glow Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-48 h-48 bg-red-600/5 rounded-full blur-2xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-600/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-red-600/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Enhanced Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-800/30 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
          >
            <motion.div 
              className="w-2.5 h-2.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-red-400 font-medium text-sm uppercase tracking-wider">
              Professional Services
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Comprehensive Web Solutions
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            From concept to deployment, I deliver exceptional digital solutions that drive business growth. 
            Each service is tailored to meet your specific needs and exceed expectations.
          </motion.p>

          {/* Service Categories */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                className="group cursor-pointer flex items-center gap-3 px-6 py-3 bg-red-900/40 border border-red-800/30 rounded-full backdrop-blur-sm text-gray-300 font-medium hover:bg-red-600/10 hover:border-red-600/50 hover:text-white transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                whileHover={{ y: -1, scale: 1.02 }}
              >
                <category.icon className="w-4 h-4 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                <span className="text-sm">{category.name}</span>
                <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
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
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              variants={fadeInUp}
              className="group relative h-full cursor-pointer"
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Service Card */}
              <div className="relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl border border-gray-800 group-hover:border-red-800/50 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                
                {/* Item Glow Effect */}
                <div className="absolute -right-5 -top-5 w-20 h-20 bg-red-600/0 group-hover:bg-red-600/10 rounded-full blur-xl transition-all duration-500"></div>
                
                {/* Header Section */}
                <div className="relative z-10 mb-6">
                  {/* Icon and Badges */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-800/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="px-3 py-1 bg-red-900/40 border border-red-800/30 rounded-full text-xs font-medium uppercase tracking-wider text-white">
                        {service.complexity}
                      </span>
                      <span className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-400 rounded-full text-xs font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {service.timeline}
                      </span>
                    </div>
                  </div>
                  
                  {/* Title, Rating and Description */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-medium text-white group-hover:text-red-100 transition-colors duration-300 flex-1 pr-3">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1 text-red-500 flex-shrink-0">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                {/* Features List */}
                <div className="relative z-10 flex-grow">
                  <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Key Features:</h4>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-400 rounded-full text-xs font-medium hover:bg-gray-700 hover:text-white transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="relative z-10 pt-6 border-t border-gray-800">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                      {service.pricing}
                    </span>
                    <motion.button
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/20 text-sm"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </div>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/0 group-hover:via-red-600/50 to-transparent transition-all duration-300"></div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-red-600/0 via-red-600/20 to-red-600/0 opacity-0 group-hover:opacity-100 rounded-xl blur transition-opacity duration-500 -z-10"
                initial={false}
                animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Process Section */}
        <motion.div 
          className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 p-12 rounded-xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h3 
              className="text-4xl font-bold mb-6 text-white"
              variants={fadeInUp}
            >
              My Development Process
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              A proven methodology that ensures successful project delivery, 
              from initial consultation to ongoing support and maintenance.
            </motion.p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <motion.div 
                key={index}
                className="text-center group relative cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -2 }}
              >
                {/* Step Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-900/20 border border-red-800/30 rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <process.icon className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                  </div>
                </div>

                {/* Step Info */}
                <div className="relative z-10">
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-3">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300">{process.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{process.description}</p>
                </div>

                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-700 to-transparent"></div>
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
          <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white p-12 rounded-2xl relative overflow-hidden border border-gray-800">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-600 to-red-700 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
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
                className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-red-700 to-red-800 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
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
              <h3 className="text-4xl font-bold mb-4">
                Ready to Transform Your Vision Into Reality?
              </h3>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Let's collaborate to create exceptional digital solutions that drive your business forward. 
                With proven expertise and dedication to excellence, I'm committed to exceeding your expectations.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 font-bold rounded-full hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-500/20 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
                
                <motion.button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center gap-3 border-2 border-gray-700 text-gray-300 hover:border-red-600 hover:text-white px-8 py-4 font-bold rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View Portfolio</span>
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-800">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                  >
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <stat.icon className="w-6 h-6 text-red-500" />
                      <div className="text-3xl font-bold text-white">{stat.number}</div>
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
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