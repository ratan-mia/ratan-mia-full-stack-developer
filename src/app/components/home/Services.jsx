'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle,
  Code,
  Globe,
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

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      id: 1,
      icon: Code,
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
      gradient: "from-blue-600 to-indigo-600",
      category: "development",
      complexity: "High",
      timeline: "4-12 weeks",
      technologies: ["React", "Next.js", "Node.js", "Laravel", "MySQL"],
      featured: true
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
      gradient: "from-purple-600 to-pink-600",
      category: "ecommerce",
      complexity: "High",
      timeline: "6-16 weeks",
      technologies: ["Shopify", "WooCommerce", "Stripe", "React", "Laravel"],
      featured: true
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
      gradient: "from-green-600 to-teal-600",
      category: "cms",
      complexity: "Medium",
      timeline: "2-8 weeks",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS"],
      featured: false
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
      gradient: "from-orange-600 to-red-600",
      category: "devops",
      complexity: "High",
      timeline: "1-4 weeks setup",
      technologies: ["AWS", "Docker", "Jenkins", "Linux", "Nginx"],
      featured: false
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
      gradient: "from-indigo-600 to-purple-600",
      category: "optimization",
      complexity: "Medium",
      timeline: "1-3 weeks",
      technologies: ["Lighthouse", "GTmetrix", "Redis", "CloudFlare", "Webpack"],
      featured: false
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
      gradient: "from-teal-600 to-cyan-600",
      category: "ai",
      complexity: "High",
      timeline: "3-8 weeks",
      technologies: ["OpenAI", "Python", "TensorFlow", "Node.js", "API"],
      featured: true
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your business requirements, target audience analysis, and comprehensive project roadmap creation.",
      icon: Search,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "User experience design, system architecture planning, and interactive prototypes with stakeholder feedback.",
      icon: Target,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous integration, comprehensive testing, and quality assurance protocols.",
      icon: Code,
      gradient: "from-green-500 to-green-600"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Production deployment, performance monitoring, ongoing maintenance, and dedicated technical support.",
      icon: TrendingUp,
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Award },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'cms', name: 'CMS', icon: Globe },
    { id: 'devops', name: 'DevOps', icon: Server },
    { id: 'optimization', name: 'Optimization', icon: Zap },
    { id: 'ai', name: 'AI Integration', icon: Brain }
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
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
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
        <motion.div 
          className="absolute top-1/2 right-1/3 w-32 h-32 md:w-64 md:h-64 bg-green-500/5 rounded-full blur-2xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-purple-100 text-purple-800 px-6 py-3 font-medium text-sm tracking-wider uppercase mb-6"
          >
            <Award className="w-4 h-4" />
            Professional Services
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-800"
          >
            Comprehensive Web Solutions
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            From concept to deployment, I deliver exceptional digital solutions that drive business growth. 
            Each service is tailored to meet your specific needs and exceed expectations.
          </motion.p>
        </motion.div>

        {/* Featured Services */}
        <motion.div 
          className="mb-12 md:mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center"
            variants={fadeInUp}
          >
            Most Popular Services
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border border-blue-200 hover:shadow-xl transition-all duration-300 group"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className={`inline-block px-2 py-1 text-xs font-medium ${getLevelColor(service.complexity)} mb-2`}>
                      {service.complexity}
                    </div>
                    <Star className="w-5 h-5 text-yellow-500" />
                  </div>
                </div>
                
                <h4 className="font-bold text-slate-800 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {service.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {service.description.substring(0, 120)}...
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.pricing}
                  </span>
                  <button
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
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

        {/* Filter Categories */}
        <motion.div 
          className="mb-8 md:mb-12"
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
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-16"
        >
          {filteredServices.map((service, index) => (
            <motion.div 
              key={service.id}
              id={`service-${service.id}`}
              variants={fadeInUp}
              className="group h-full"
              onHoverStart={() => setHoveredService(service.id)}
              onHoverEnd={() => setHoveredService(null)}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                {/* Header Section */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8" />
                    </div>
                    <div className="flex flex-col gap-2">
                      {service.featured && (
                        <Star className="w-5 h-5 text-yellow-500" />
                      )}
                      <span className={`px-3 py-1 text-xs font-semibold ${getLevelColor(service.complexity)}`}>
                        {service.complexity}
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium">
                        {service.timeline}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Features List */}
                <div className="flex-grow mb-6">
                  <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3 text-sm text-slate-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Footer */}
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.pricing}
                    </span>
                    <motion.button
                      className={`px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-medium hover:shadow-lg transition-all duration-200`}
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
        </motion.div>

        {/* Process Section */}
        <motion.div 
          className="bg-white/80 backdrop-blur-sm p-8 md:p-12 shadow-xl border border-white/50 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-6 text-slate-800"
              variants={fadeInUp}
            >
              My Development Process
            </motion.h3>
            <motion.p 
              className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              A proven methodology that ensures successful project delivery, 
              from initial consultation to ongoing support and maintenance.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((process, index) => (
              <motion.div 
                key={index}
                className="text-center bg-white/60 backdrop-blur-sm p-6 border border-white/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${process.gradient} flex items-center justify-center text-white mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <process.icon className="w-8 h-8" />
                  </div>
                </div>

                <div className={`text-2xl font-bold bg-gradient-to-r ${process.gradient} bg-clip-text text-transparent mb-3`}>
                  {process.step}
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {process.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready To Transform Your Vision Into Reality?
            </h3>
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Let's collaborate to create exceptional digital solutions that drive your business forward. 
              With proven expertise and dedication to excellence, I'm committed to exceeding your expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 font-bold hover:bg-blue-50 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Start Your Project
              </motion.a>
              
              <motion.a
                href="tel:+8801751010966"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 font-bold hover:bg-white hover:text-blue-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Schedule Call
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/20">
              {[
                { number: '100+', label: 'Projects Completed' },
                { number: '97%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;