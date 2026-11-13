'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Code,
  Cog,
  CreditCard,
  Database,
  Globe,
  Laptop,
  Layout,
  MessageSquare,
  Monitor,
  Package,
  Smartphone,
  Store,
  Users,
  Zap
} from 'lucide-react';
import { useRef, useState } from 'react';

const ProjectTypes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('web');

  const categories = [
    { id: 'web', label: 'Web Development', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { id: 'ecommerce', label: 'E-commerce', icon: Store, color: 'from-green-500 to-emerald-500' },
    { id: 'apps', label: 'Web Apps', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
    { id: 'api', label: 'API & Backend', icon: Database, color: 'from-orange-500 to-red-500' }
  ];

  const projectTypes = {
    web: [
      {
        icon: Layout,
        title: "Business Websites",
        description: "Professional corporate websites that establish credibility and drive conversions.",
        features: ["Responsive Design", "SEO Optimized", "Contact Forms", "Analytics"],
        price: "Starting at $2,500",
        timeline: "2-3 weeks",
        popular: false
      },
      {
        icon: Monitor,
        title: "Portfolio Websites",
        description: "Stunning showcases for creative professionals, agencies, and freelancers.",
        features: ["Gallery Management", "Blog Integration", "Custom Animations", "Admin Panel"],
        price: "Starting at $1,800",
        timeline: "1-2 weeks",
        popular: true
      },
      {
        icon: Laptop,
        title: "Landing Pages",
        description: "High-converting landing pages designed to maximize your marketing campaigns.",
        features: ["A/B Testing Ready", "Form Integration", "Speed Optimized", "Mobile First"],
        price: "Starting at $800",
        timeline: "3-5 days",
        popular: false
      }
    ],
    ecommerce: [
      {
        icon: Store,
        title: "Online Stores",
        description: "Complete e-commerce solutions with payment processing and inventory management.",
        features: ["Payment Integration", "Inventory Management", "Order Tracking", "Admin Dashboard"],
        price: "Starting at $4,500",
        timeline: "4-6 weeks",
        popular: true
      },
      {
        icon: CreditCard,
        title: "Marketplace Platforms",
        description: "Multi-vendor platforms connecting buyers and sellers with advanced features.",
        features: ["Multi-vendor Support", "Commission System", "Review System", "Analytics"],
        price: "Starting at $8,000",
        timeline: "8-12 weeks",
        popular: false
      },
      {
        icon: Package,
        title: "Subscription Platforms",
        description: "Recurring billing platforms with member management and content control.",
        features: ["Subscription Management", "Member Portal", "Content Protection", "Analytics"],
        price: "Starting at $3,500",
        timeline: "3-5 weeks",
        popular: false
      }
    ],
    apps: [
      {
        icon: Users,
        title: "SaaS Applications",
        description: "Scalable software-as-a-service platforms with user management and billing.",
        features: ["User Authentication", "Subscription Billing", "Real-time Features", "API Integration"],
        price: "Starting at $6,000",
        timeline: "6-10 weeks",
        popular: true
      },
      {
        icon: BarChart3,
        title: "Dashboard Applications",
        description: "Data visualization and management dashboards for business intelligence.",
        features: ["Data Visualization", "Real-time Updates", "Export Features", "User Roles"],
        price: "Starting at $3,800",
        timeline: "4-6 weeks",
        popular: false
      },
      {
        icon: MessageSquare,
        title: "Communication Platforms",
        description: "Real-time messaging and collaboration tools for teams and communities.",
        features: ["Real-time Messaging", "File Sharing", "Video Calls", "Team Management"],
        price: "Starting at $5,500",
        timeline: "6-8 weeks",
        popular: false
      }
    ],
    api: [
      {
        icon: Database,
        title: "REST APIs",
        description: "Robust and scalable REST APIs for mobile apps and third-party integrations.",
        features: ["Authentication", "Rate Limiting", "Documentation", "Testing Suite"],
        price: "Starting at $2,800",
        timeline: "3-4 weeks",
        popular: true
      },
      {
        icon: Cog,
        title: "System Integration",
        description: "Connect different systems and automate workflows with custom integrations.",
        features: ["Third-party APIs", "Webhook Support", "Data Sync", "Error Handling"],
        price: "Starting at $3,200",
        timeline: "4-5 weeks",
        popular: false
      },
      {
        icon: Zap,
        title: "Microservices",
        description: "Scalable microservice architectures for enterprise-level applications.",
        features: ["Service Discovery", "Load Balancing", "Monitoring", "Container Support"],
        price: "Starting at $5,000",
        timeline: "6-8 weeks",
        popular: false
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="py-20 lg:py-28 bg-white dark:bg-slate-900 relative overflow-hidden"
      id="project-types"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Code className="w-4 h-4" />
            Project Types
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
          >
            What Can We
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Build Together?
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            From simple landing pages to complex web applications, I've got you covered. 
            Choose your project type and get a detailed quote tailored to your specific needs.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12 lg:mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(category.id)}
              className={`relative flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'text-white bg-gradient-to-r ' + category.color + ' shadow-lg'
                  : 'text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.label}</span>
              {activeCategory === category.id && (
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-xl"
                  layoutId="activeTab"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projectTypes[activeCategory].map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300/50 dark:hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Popular Badge */}
              {project.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">
                  Popular
                </div>
              )}

              {/* Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <project.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Pricing and Timeline */}
              <div className="flex justify-between items-center mb-6 p-4 bg-white dark:bg-slate-700/50 rounded-xl">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {project.price}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {project.timeline}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-slate-800 dark:text-white">
                    Get Quote
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Free consultation
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Detailed Quote
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </motion.button>

              {/* Hover Effect */}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="p-8 lg:p-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Don't See Your Project Type?
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              I specialize in custom solutions. Let's discuss your unique requirements 
              and create something amazing together.
            </p>
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5" />
              Let's Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectTypes;