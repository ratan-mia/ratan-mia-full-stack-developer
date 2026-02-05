'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, BarChart3, Bot, Check, Code, Database, Globe, Palette, Server, ShoppingCart, Smartphone, Star, TrendingUp, Zap } from 'lucide-react';
import { useRef } from 'react';

// --- Individual Pricing Card Component ---
const PricingCard = ({ plan, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const isMonthly = plan.price.includes('/mo');
  const priceValue = isMonthly ? plan.price.replace('/mo', '') : plan.price;
  const isPopular = plan.popular;

  // Get card color configuration
  const cardColor = plan.color || {};

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${cardColor.gradient || 'bg-white'} border-2 ${
        isPopular 
          ? `${cardColor.border || 'border-accent-lime'} shadow-xl ${cardColor.shadow || 'shadow-accent-lime/20'}` 
          : `${cardColor.border || 'border-gray-200'} hover:${cardColor.hoverBorder || 'border-gray-300'}`
      } p-8 lg:p-10 rounded-3xl text-left h-full flex flex-col group transition-all duration-500 hover:shadow-2xl`}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 blur-3xl pointer-events-none">
        <div className={`w-full h-full ${cardColor.blurBg || 'bg-accent-lime'} rounded-full`} />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10 blur-3xl pointer-events-none">
        <div className={`w-full h-full ${cardColor.blurBg || 'bg-accent-lime'} rounded-full`} />
      </div>
      {/* Popular Badge */}
      {isPopular && (
        <motion.div 
          className={`absolute top-6 right-6 ${cardColor.badgeBg || 'bg-accent-lime'} ${cardColor.badgeText || 'text-black'} px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg z-10`}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 300 }}
        >
          <Star className="w-3 h-3 inline mr-1" />
          Most Popular
        </motion.div>
      )}

      {/* Service Icon */}
      <motion.div 
        className={`relative w-20 h-20 ${cardColor.iconBg || 'bg-white/80'} backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 shadow-lg z-10 group-hover:shadow-xl transition-all`}
        whileHover={{ scale: 1.15, rotate: 360 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {/* Icon glow effect */}
        <div className={`absolute inset-0 ${cardColor.iconGlow || 'bg-accent-lime/20'} rounded-2xl blur-md`} />
        <plan.icon className={`relative w-10 h-10 ${cardColor.iconColor || 'text-accent-lime'} transition-all`} />
      </motion.div>

      {/* Title and Category */}
      <div className="mb-8 relative z-10">
        <motion.span 
          className={`inline-block ${cardColor.categoryBg || 'bg-white/50'} backdrop-blur-sm ${cardColor.categoryText || 'text-accent-lime'} px-4 py-2 rounded-full font-bold text-xs uppercase tracking-[0.15em] mb-4 shadow-sm`}
          whileHover={{ scale: 1.05 }}
        >
          {plan.category}
        </motion.span>
        <h3 className={`text-2xl lg:text-[28px] font-bold ${cardColor.titleText || 'text-gray-900'} mb-3 leading-tight tracking-[-0.02em] transition-all`}>
          {plan.title}
        </h3>
      </div>

      {/* Pricing */}
      <div className="mb-8 relative z-10">
        {!isMonthly && <span className={`text-sm font-medium ${cardColor.priceLabel || 'text-gray-600'} block mb-2 leading-relaxed`}>Starting from</span>}
        <div className="flex items-baseline gap-1 mb-1">
          <span className={`text-5xl lg:text-[56px] font-black ${cardColor.priceText || 'text-gray-900'} tracking-[-0.04em] leading-none`}>{priceValue}</span>
          {isMonthly && <span className={`text-xl font-bold ${cardColor.priceLabel || 'text-gray-600'} leading-none`}>/mo</span>}
        </div>
        {plan.timeline && (
          <span className={`text-sm font-medium ${cardColor.timeline || 'text-gray-600'} mt-2 block leading-relaxed`}>{plan.timeline}</span>
        )}
      </div>

      {/* Description */}
      <p className={`${cardColor.descText || 'text-gray-700'} mb-10 flex-grow leading-[1.65] text-base font-normal relative z-10`}>
        {plan.description}
      </p>
      
      {/* Features List */}
      <ul className="space-y-5 mb-12 relative z-10">
        {plan.features.map((feature, i) => (
          <motion.li 
            key={i} 
            className="flex items-start gap-4 group/item"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
          >
            <motion.div 
              className={`w-6 h-6 ${cardColor.checkBg || 'bg-white/90'} backdrop-blur-sm shadow-md rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform`}
              whileHover={{ rotate: 180, scale: 1.2 }}
            >
              <Check className={`w-4 h-4 ${cardColor.checkIcon || 'text-accent-lime'}`} />
            </motion.div>
            <span className={`${cardColor.featureText || 'text-gray-800'} font-medium text-base leading-[1.6]`}>{feature}</span>
          </motion.li>
        ))}
      </ul>
      
      {/* CTA Button */}
      <motion.a 
        href="#contact" 
        className={`relative w-full overflow-hidden ${cardColor.ctaBg || 'bg-white'} ${cardColor.ctaText || 'text-gray-900'} border-2 ${cardColor.ctaBorder || 'border-gray-900'} font-bold py-4 px-6 rounded-xl text-center mt-auto transition-all duration-300 inline-flex items-center justify-center gap-3 group/btn text-base leading-none tracking-[-0.01em] shadow-lg hover:shadow-xl z-10`}
        whileHover={{ scale: 1.03, y: -4 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Button shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
        />
        <span className="relative z-10">{plan.cta}</span>
        <motion.div
          className="relative z-10"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </motion.div>
  );
};

// --- Stats Component ---
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "150+", label: "Projects Completed", icon: Code },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "10+", label: "Years Experience", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Zap }
  ];

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 p-10 bg-gray-50 rounded-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {stats.map((stat, index) => (
        <motion.div 
          key={stat.label}
          className="text-center group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <stat.icon className="w-8 h-8 text-accent-lime mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <div className="text-3xl lg:text-[40px] font-black text-gray-900 mb-3 leading-none tracking-[-0.03em]">{stat.number}</div>
          <div className="text-gray-600 font-semibold text-sm uppercase tracking-[0.1em] leading-tight">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// --- MAIN PRICING PLANS COMPONENT ---
const PricingPlans = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  
  const sectionInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  // Enhanced pricing plans with realistic developer services and colorful themes
  const pricingPlans = [
    {
      icon: Code,
      category: 'Web Development',
      title: 'WordPress Solutions',
      price: '$2,000',
      timeline: '2-4 weeks delivery',
      description: "Custom WordPress development with advanced functionality, security hardening, and performance optimization.",
      features: [
        "Custom Theme Development",
        "Plugin Development & Integration",
        "Performance & SEO Optimization",
        "Security Implementation",
        "Mobile Responsive Design"
      ],
      cta: "Start WordPress Project",
      color: {
        gradient: 'bg-white',
        border: 'border-gray-200',
        hoverBorder: 'border-accent-lime',
        shadow: 'shadow-gray-200',
        blurBg: 'bg-accent-lime',
        iconBg: 'bg-accent-lime/10',
        iconColor: 'text-black',
        iconGlow: 'bg-accent-lime/20',
        categoryBg: 'bg-accent-lime/20',
        categoryText: 'text-black',
        titleText: 'text-black',
        priceText: 'text-black',
        priceLabel: 'text-gray-600',
        timeline: 'text-gray-600',
        descText: 'text-gray-700',
        checkBg: 'bg-accent-lime',
        checkIcon: 'text-black',
        featureText: 'text-black',
        ctaBg: 'bg-black',
        ctaText: 'text-accent-lime',
        ctaBorder: 'border-black'
      }
    },
    {
      icon: Smartphone,
      category: 'Mobile Development',
      title: 'Mobile App Development',
      price: '$8,000',
      timeline: '8-12 weeks delivery',
      description: "Native-quality mobile applications for iOS and Android using React Native, delivering seamless cross-platform experiences.",
      features: [
        "React Native Development",
        "iOS & Android Apps",
        "Cross-Platform Solutions",
        "App Store Deployment",
        "Push Notifications & APIs"
      ],
      cta: "Build Mobile App",
      popular: true,
      color: {
        gradient: 'bg-accent-lime',
        border: 'border-black',
        hoverBorder: 'border-black',
        shadow: 'shadow-accent-lime/40',
        blurBg: 'bg-black',
        badgeBg: 'bg-black',
        badgeText: 'text-accent-lime',
        iconBg: 'bg-black/10',
        iconColor: 'text-black',
        iconGlow: 'bg-black/30',
        categoryBg: 'bg-black/20',
        categoryText: 'text-black',
        titleText: 'text-black',
        priceText: 'text-black',
        priceLabel: 'text-black/70',
        timeline: 'text-black/70',
        descText: 'text-black/80',
        checkBg: 'bg-black',
        checkIcon: 'text-accent-lime',
        featureText: 'text-black',
        ctaBg: 'bg-black',
        ctaText: 'text-accent-lime',
        ctaBorder: 'border-black'
      }
    },
    {
      icon: Globe,
      category: 'Full Stack',
      title: 'React/Next.js Apps',
      price: '$4,500',
      timeline: '4-8 weeks delivery',
      description: "Modern web applications built with React.js, Next.js, and Laravel backend with database architecture.",
      features: [
        "React.js/Next.js Frontend",
        "Laravel Backend API",
        "Database Design & Setup",
        "Authentication System",
        "Progressive Web App (PWA)"
      ],
      cta: "Build My App",
      color: {
        gradient: 'bg-white',
        border: 'border-gray-200',
        hoverBorder: 'border-accent-lime',
        shadow: 'shadow-gray-200',
        blurBg: 'bg-accent-lime',
        iconBg: 'bg-accent-lime/10',
        iconColor: 'text-black',
        iconGlow: 'bg-accent-lime/20',
        categoryBg: 'bg-accent-lime/20',
        categoryText: 'text-black',
        titleText: 'text-black',
        priceText: 'text-black',
        priceLabel: 'text-gray-600',
        timeline: 'text-gray-600',
        descText: 'text-gray-700',
        checkBg: 'bg-accent-lime',
        checkIcon: 'text-black',
        featureText: 'text-black',
        ctaBg: 'bg-black',
        ctaText: 'text-accent-lime',
        ctaBorder: 'border-black'
      }
    },
    {
      icon: ShoppingCart,
      category: 'E-commerce',
      title: 'Online Store',
      price: '$6,000',
      timeline: '6-10 weeks delivery',
      description: "Complete e-commerce solution with Shopify or custom development, payment integration, and inventory management.",
      features: [
        "Shopify/WooCommerce Setup",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Management System",
        "Analytics & Reporting"
      ],
      cta: "Launch My Store",
      color: {
        gradient: 'bg-gray-50',
        border: 'border-gray-200',
        hoverBorder: 'border-accent-lime',
        shadow: 'shadow-gray-200',
        blurBg: 'bg-accent-lime',
        iconBg: 'bg-white',
        iconColor: 'text-black',
        iconGlow: 'bg-accent-lime/20',
        categoryBg: 'bg-white',
        categoryText: 'text-black',
        titleText: 'text-black',
        priceText: 'text-black',
        priceLabel: 'text-gray-600',
        timeline: 'text-gray-600',
        descText: 'text-gray-700',
        checkBg: 'bg-accent-lime/20',
        checkIcon: 'text-black',
        featureText: 'text-black',
        ctaBg: 'bg-black',
        ctaText: 'text-accent-lime',
        ctaBorder: 'border-black'
      }
    },
    {
      icon: Server,
      category: 'DevOps & Cloud',
      title: 'IT Management',
      price: '$1,500',
      timeline: 'Monthly retainer',
      description: "Complete IT infrastructure management including cloud deployment, server maintenance, and CI/CD pipelines.",
      features: [
        "AWS/DigitalOcean Setup",
        "Docker Containerization",
        "CI/CD Pipeline Setup",
        "Server Monitoring",
        "Database Administration"
      ],
      cta: "Get IT Support",
      color: {
        gradient: 'bg-white',
        border: 'border-gray-200',
        hoverBorder: 'border-accent-lime',
        shadow: 'shadow-gray-200',
        blurBg: 'bg-accent-lime',
        iconBg: 'bg-accent-lime/10',
        iconColor: 'text-black',
        iconGlow: 'bg-accent-lime/20',
        categoryBg: 'bg-accent-lime/20',
        categoryText: 'text-black',
        titleText: 'text-black',
        priceText: 'text-black',
        priceLabel: 'text-gray-600',
        timeline: 'text-gray-600',
        descText: 'text-gray-700',
        checkBg: 'bg-accent-lime',
        checkIcon: 'text-black',
        featureText: 'text-black',
        ctaBg: 'bg-black',
        ctaText: 'text-accent-lime',
        ctaBorder: 'border-black'
      }
    },
    {
      icon: TrendingUp,
      category: 'Optimization',
      title: 'Performance Boost',
      price: '$1,200',
      timeline: '1-2 weeks delivery',
      description: "Comprehensive website optimization to improve loading speed, Core Web Vitals, and search engine rankings.",
      features: [
        "Core Web Vitals Optimization",
        "Database Query Optimization",
        "Image & Asset Optimization",
        "CDN & Caching Setup",
        "Performance Monitoring"
      ],
      cta: "Speed Up My Site",
      color: {
        gradient: 'bg-gray-50',
        border: 'border-gray-200',
        hoverBorder: 'border-accent-lime',
        shadow: 'shadow-gray-200',
        blurBg: 'bg-accent-lime',
        iconBg: 'bg-white',
        iconColor: 'text-black',
        iconGlow: 'bg-accent-lime/20',
        categoryBg: 'bg-white',
        categoryText: 'text-black',
        titleText: 'text-black',
        priceText: 'text-black',
        priceLabel: 'text-gray-600',
        timeline: 'text-gray-600',
        descText: 'text-gray-700',
        checkBg: 'bg-accent-lime/20',
        checkIcon: 'text-black',
        featureText: 'text-black',
        ctaBg: 'bg-black',
        ctaText: 'text-accent-lime',
        ctaBorder: 'border-black'
      }
    },
    {
      icon: Bot,
      category: 'AI Integration',
      title: 'AI-Powered Features',
      price: '$3,500',
      timeline: '3-6 weeks delivery',
      description: "Integration of AI capabilities including chatbots, automation, and intelligent data processing using modern AI APIs.",
      features: [
        "OpenAI GPT Integration",
        "Custom Chatbot Development",
        "Automated Content Generation",
        "Natural Language Processing",
        "Intelligent Data Analysis"
      ],
      cta: "Add AI Features",
      color: {
        gradient: 'bg-white',
        border: 'border-gray-200',
        hoverBorder: 'border-accent-lime',
        shadow: 'shadow-gray-200',
        blurBg: 'bg-accent-lime',
        iconBg: 'bg-accent-lime/10',
        iconColor: 'text-black',
        iconGlow: 'bg-accent-lime/20',
        categoryBg: 'bg-accent-lime/20',
        categoryText: 'text-black',
        titleText: 'text-black',
        priceText: 'text-black',
        priceLabel: 'text-gray-600',
        timeline: 'text-gray-600',
        descText: 'text-gray-700',
        checkBg: 'bg-accent-lime',
        checkIcon: 'text-black',
        featureText: 'text-black',
        ctaBg: 'bg-black',
        ctaText: 'text-accent-lime',
        ctaBorder: 'border-black'
      }
    },
    {
      icon: Code,
      category: 'Web Development',
      title: 'Frontend Development',
      price: '$1,500',
      timeline: '2-3 weeks delivery',
      description: "Stunning, responsive user interfaces built with modern React, Next.js, and cutting-edge CSS frameworks.",
      features: [
        "React & Next.js Development",
        "Responsive Design Implementation",
        "Performance Optimization",
        "Modern UI/UX",
        "Cross-browser Compatibility"
      ],
      cta: "Start Frontend Project",
      color: {
        gradient: 'bg-gray-50',
        border: 'border-gray-200',
        hoverBorder: 'border-accent-lime',
        shadow: 'shadow-gray-200',
        blurBg: 'bg-accent-lime',
        iconBg: 'bg-white',
        iconColor: 'text-black',
        iconGlow: 'bg-accent-lime/20',
        categoryBg: 'bg-white',
        categoryText: 'text-black',
        titleText: 'text-black',
        priceText: 'text-black',
        priceLabel: 'text-gray-600',
        timeline: 'text-gray-600',
        descText: 'text-gray-700',
        checkBg: 'bg-accent-lime/20',
        checkIcon: 'text-black',
        featureText: 'text-black',
        ctaBg: 'bg-black',
        ctaText: 'text-accent-lime',
        ctaBorder: 'border-black'
      }
    },
    {
      icon: Database,
      category: 'Backend Development',
      title: 'Backend API Development',
      price: '$2,500',
      timeline: '3-5 weeks delivery',
      description: "Scalable server-side solutions with robust APIs, secure authentication, and optimized database architecture.",
      features: [
        "Laravel & Node.js APIs",
        "RESTful API Development",
        "Database Design & Setup",
        "Security Implementation",
        "API Documentation"
      ],
      cta: "Build Backend",
      color: {
        gradient: 'bg-gray-50',
        border: 'border-gray-200',
        hoverBorder: 'border-accent-lime',
        shadow: 'shadow-gray-200',
        blurBg: 'bg-accent-lime',
        iconBg: 'bg-white',
        iconColor: 'text-black',
        iconGlow: 'bg-accent-lime/20',
        categoryBg: 'bg-white',
        categoryText: 'text-black',
        titleText: 'text-black',
        priceText: 'text-black',
        priceLabel: 'text-gray-600',
        timeline: 'text-gray-600',
        descText: 'text-gray-700',
        checkBg: 'bg-accent-lime/20',
        checkIcon: 'text-black',
        featureText: 'text-black',
        ctaBg: 'bg-black',
        ctaText: 'text-accent-lime',
        ctaBorder: 'border-black'
      }
    },
    {
      icon: Palette,
      category: 'Design',
      title: 'UI/UX Design',
      price: '$1,200',
      timeline: '1-2 weeks delivery',
      description: "Beautiful, intuitive interfaces designed with user experience in mind, from wireframes to high-fidelity prototypes.",
      features: [
        "User Interface Design",
        "Prototyping & Wireframes",
        "Design Systems",
        "Usability Testing",
        "Brand Guidelines"
      ],
      cta: "Start Design Project",
      color: {
        gradient: 'bg-white',
        border: 'border-gray-200',
        hoverBorder: 'border-accent-lime',
        shadow: 'shadow-gray-200',
        blurBg: 'bg-accent-lime',
        iconBg: 'bg-accent-lime/10',
        iconColor: 'text-black',
        iconGlow: 'bg-accent-lime/20',
        categoryBg: 'bg-accent-lime/20',
        categoryText: 'text-black',
        titleText: 'text-black',
        priceText: 'text-black',
        priceLabel: 'text-gray-600',
        timeline: 'text-gray-600',
        descText: 'text-gray-700',
        checkBg: 'bg-accent-lime',
        checkIcon: 'text-black',
        featureText: 'text-black',
        ctaBg: 'bg-black',
        ctaText: 'text-accent-lime',
        ctaBorder: 'border-black'
      }
    },
    {
      icon: BarChart3,
      category: 'Integration',
      title: 'API Integration',
      price: '$1,800',
      timeline: '2-3 weeks delivery',
      description: "Seamless integration of third-party services, payment gateways, and custom APIs to extend your application capabilities.",
      features: [
        "Third-party API Integration",
        "Payment Gateway Setup",
        "Data Synchronization",
        "Webhook Implementation",
        "API Testing & Documentation"
      ],
      cta: "Integrate APIs",
      color: {
        gradient: 'bg-gray-50',
        border: 'border-gray-200',
        hoverBorder: 'border-accent-lime',
        shadow: 'shadow-gray-200',
        blurBg: 'bg-accent-lime',
        iconBg: 'bg-white',
        iconColor: 'text-black',
        iconGlow: 'bg-accent-lime/20',
        categoryBg: 'bg-white',
        categoryText: 'text-black',
        titleText: 'text-black',
        priceText: 'text-black',
        priceLabel: 'text-gray-600',
        timeline: 'text-gray-600',
        descText: 'text-gray-700',
        checkBg: 'bg-accent-lime/20',
        checkIcon: 'text-black',
        featureText: 'text-black',
        ctaBg: 'bg-black',
        ctaText: 'text-accent-lime',
        ctaBorder: 'border-black'
      }
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white text-black" id="services">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-5 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-12 h-1 bg-accent-lime" />
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-[0.15em] leading-none">Services & Pricing</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-black mb-8 tracking-[-0.04em] leading-[1.1] text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Solutions for Every
            <br />
            <span className="text-accent-lime">Business Need</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-[22px] text-gray-600 max-w-3xl mx-auto leading-[1.6] font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From simple websites to complex enterprise applications, I provide transparent pricing and reliable delivery timelines for all your development needs.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <StatsSection />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              plan={plan}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-24 pt-16 border-t border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-3xl lg:text-[36px] font-bold text-gray-900 mb-5 leading-tight tracking-[-0.02em]">
            Need a Custom Solution?
          </h3>
          <p className="text-xl lg:text-[22px] text-gray-600 mb-10 max-w-2xl mx-auto leading-[1.6] font-normal">
            Every project is unique. Let's discuss your specific requirements and create a tailored proposal.
          </p>
          <motion.a 
            href="#contact" 
            className="bg-accent-lime text-black font-bold px-12 py-5 rounded-xl hover:bg-lime-300 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-4 text-lg shadow-lg hover:shadow-xl leading-none tracking-[-0.01em]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Custom Quote</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;