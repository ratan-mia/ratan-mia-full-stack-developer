'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
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
      gradient: "from-blue-600 via-blue-700 to-indigo-800",
      accentColor: "blue",
      complexity: "High",
      timeline: "4-12 weeks",
      technologies: ["React", "Next.js", "Node.js", "Laravel", "MySQL"]
    },
    {
      id: 2,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
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
      gradient: "from-purple-600 via-purple-700 to-pink-800",
      accentColor: "purple",
      complexity: "High",
      timeline: "6-16 weeks",
      technologies: ["Shopify", "WooCommerce", "Stripe", "React", "Laravel"]
    },
    {
      id: 3,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
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
      gradient: "from-green-600 via-green-700 to-teal-800",
      accentColor: "green",
      complexity: "Medium",
      timeline: "2-8 weeks",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS"]
    },
    {
      id: 4,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
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
      gradient: "from-orange-600 via-red-600 to-red-800",
      accentColor: "orange",
      complexity: "High",
      timeline: "1-4 weeks setup",
      technologies: ["AWS", "Docker", "Jenkins", "Linux", "Nginx"]
    },
    {
      id: 5,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
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
      gradient: "from-indigo-600 via-purple-600 to-purple-800",
      accentColor: "indigo",
      complexity: "Medium",
      timeline: "1-3 weeks",
      technologies: ["Lighthouse", "GTmetrix", "Redis", "CloudFlare", "Webpack"]
    },
    {
      id: 6,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
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
      gradient: "from-teal-600 via-cyan-600 to-blue-800",
      accentColor: "teal",
      complexity: "High",
      timeline: "3-8 weeks",
      technologies: ["OpenAI", "Python", "TensorFlow", "Node.js", "API"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your business requirements, target audience analysis, and comprehensive project roadmap creation.",
      icon: "🔍",
      color: "from-blue-500 to-blue-600"
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "User experience design, system architecture planning, and interactive prototypes with stakeholder feedback.",
      icon: "🎨",
      color: "from-purple-500 to-purple-600"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous integration, comprehensive testing, and quality assurance protocols.",
      icon: "⚡",
      color: "from-green-500 to-green-600"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Production deployment, performance monitoring, ongoing maintenance, and dedicated technical support.",
      icon: "🚀",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="services" className="py-24 px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 blur-2xl"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-green-500/5 to-teal-500/5 blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-8 py-4 shadow-xl mb-8 border border-white/50"
          >
            <motion.div 
              className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">
              Professional Services
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent capitalize"
          >
            Comprehensive Web Solutions
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            From concept to deployment, I deliver exceptional digital solutions that drive business growth. 
            Each service is tailored to meet your specific needs and exceed expectations.
          </motion.p>

          {/* Service Categories */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {['Development', 'E-commerce', 'Optimization', 'AI Integration'].map((category, index) => (
              <span 
                key={category}
                className="px-6 py-3 bg-white/60 backdrop-blur-sm text-slate-700 font-medium border border-white/50 hover:bg-white/80 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {category}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-24"
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
              <div className="bg-white/80 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden group-hover:-translate-y-2 h-full flex flex-col">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Header Section */}
                <div className="relative z-10 mb-6">
                  {/* Icon and Complexity Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {service.icon}
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className={`px-3 py-1 bg-${service.accentColor}-100 text-${service.accentColor}-800 text-xs font-semibold uppercase tracking-wider`}>
                        {service.complexity}
                      </span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium">
                        {service.timeline}
                      </span>
                    </div>
                  </div>
                  
                  {/* Title and Description */}
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-800 group-hover:to-blue-600 transition-all duration-300 capitalize">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
                
                {/* Features List */}
                <div className="relative z-10 flex-grow">
                  <h4 className="font-semibold text-slate-800 mb-4">Key Features:</h4>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3 text-sm text-slate-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`}></div>
                        <span className="leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium hover:bg-slate-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="relative z-10 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.pricing}
                    </span>
                    <motion.button
                      className={`px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10`}
                initial={false}
                animate={{ opacity: hoveredService === service.id ? 0.2 : 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Process Section */}
        <motion.div 
          className="bg-white/60 backdrop-blur-sm p-12 md:p-16 shadow-xl border border-white/50 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent capitalize"
              variants={fadeInUp}
            >
              My Development Process
            </motion.h3>
            <motion.p 
              className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
              variants={fadeInUp}
            >
              A proven methodology that ensures successful project delivery, 
              from initial consultation to ongoing support and maintenance.
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <motion.div 
                key={index}
                className="text-center group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${process.color} flex items-center justify-center text-3xl mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                    {process.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-sm border border-white/30 group-hover:border-white/50 transition-all duration-300"></div>
                </div>

                {/* Step Info */}
                <div className="relative z-10">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${process.color} bg-clip-text text-transparent mb-3`}>
                    {process.step}
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3 capitalize">{process.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">{process.description}</p>
                </div>

                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-slate-300 to-transparent"></div>
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
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-12 md:p-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-400 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 capitalize">
                Ready To Transform Your Vision Into Reality?
              </h3>
              <p className="text-blue-200 mb-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
                Let's collaborate to create exceptional digital solutions that drive your business forward. 
                With proven expertise and dedication to excellence, I'm committed to exceeding your expectations.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 font-bold text-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-3">
                    Start Your Project
                    <motion.svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </span>
                </motion.button>
                
                <motion.button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-3">
                    View Portfolio
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </motion.button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
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
                    <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                    <div className="text-blue-200 font-light">{stat.label}</div>
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