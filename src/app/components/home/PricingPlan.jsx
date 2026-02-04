'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, Bot, Check, Code, Globe, Server, ShoppingCart, Star, TrendingUp, Zap } from 'lucide-react';
import { useRef } from 'react';

// --- Individual Pricing Card Component ---
const PricingCard = ({ plan, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const isMonthly = plan.price.includes('/mo');
  const priceValue = isMonthly ? plan.price.replace('/mo', '') : plan.price;
  const isPopular = plan.popular;

  return (
    <motion.div
      ref={ref}
      className={`relative bg-white border-2 ${
        isPopular 
          ? 'border-accent-lime shadow-xl shadow-accent-lime/10' 
          : 'border-gray-200 hover:border-accent-lime/30'
      } p-8 lg:p-10 rounded-2xl text-left h-full flex flex-col group transition-all duration-500 hover:shadow-xl ${
        isPopular ? 'scale-105' : 'hover:scale-105'
      }`}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: isPopular ? 1.05 : 1 } : { opacity: 0, y: 40, scale: 0.95 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{ y: -8, scale: isPopular ? 1.08 : 1.05 }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <motion.div 
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-lime text-black px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 300 }}
        >
          <Star className="w-4 h-4 inline mr-2" />
          Most Popular
        </motion.div>
      )}

      {/* Service Icon */}
      <motion.div 
        className={`w-16 h-16 ${isPopular ? 'bg-accent-lime/20' : 'bg-gray-100'} rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent-lime/30 transition-colors`}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <plan.icon className={`w-8 h-8 ${isPopular ? 'text-accent-lime' : 'text-gray-600'} group-hover:text-accent-lime transition-colors`} />
      </motion.div>

      {/* Title and Category */}
      <div className="mb-8">
        <span className="text-accent-lime font-semibold text-xs uppercase tracking-[0.15em] mb-3 block leading-none">
          {plan.category}
        </span>
        <h3 className="text-2xl lg:text-[28px] font-bold text-gray-900 mb-3 leading-tight tracking-[-0.02em] group-hover:text-gray-800 transition-colors">
          {plan.title}
        </h3>
      </div>

      {/* Pricing */}
      <div className="mb-8">
        {!isMonthly && <span className="text-sm font-medium text-gray-500 block mb-2 leading-relaxed">Starting from</span>}
        <div className="flex items-baseline gap-1 mb-1">
          <span className="text-5xl lg:text-[56px] font-black text-gray-900 tracking-[-0.04em] leading-none">{priceValue}</span>
          {isMonthly && <span className="text-xl font-bold text-gray-500 leading-none">/mo</span>}
        </div>
        {plan.timeline && (
          <span className="text-sm font-medium text-gray-500 mt-2 block leading-relaxed">{plan.timeline}</span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-10 flex-grow leading-[1.65] text-base font-normal">
        {plan.description}
      </p>
      
      {/* Features List */}
      <ul className="space-y-5 mb-12">
        {plan.features.map((feature, i) => (
          <motion.li 
            key={i} 
            className="flex items-start gap-4 group/item"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
          >
            <motion.div 
              className="w-6 h-6 bg-accent-lime rounded-lg flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform"
              whileHover={{ rotate: 90 }}
            >
              <Check className="w-4 h-4 text-black" />
            </motion.div>
            <span className="text-gray-800 font-medium text-base leading-[1.6]">{feature}</span>
          </motion.li>
        ))}
      </ul>
      
      {/* CTA Button */}
      <motion.a 
        href="#contact" 
        className={`w-full ${
          isPopular 
            ? 'bg-accent-lime text-black hover:bg-lime-300' 
            : 'bg-black text-white hover:bg-gray-800'
        } font-bold py-4 px-6 rounded-xl text-center mt-auto transition-all duration-300 inline-flex items-center justify-center gap-3 group/btn text-base leading-none tracking-[-0.01em]`}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>{plan.cta}</span>
        <motion.div
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

  // Enhanced pricing plans with realistic developer services
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
      popular: true,
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