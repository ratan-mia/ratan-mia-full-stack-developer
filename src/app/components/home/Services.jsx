'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, BarChart3, Cloud, Code2, Database, Globe, Layers, Palette, ShoppingCart, Smartphone, Star, TrendingUp, Zap } from 'lucide-react';
import { useRef } from 'react';

// --- Enhanced Service Card Component ---
const ServiceCard = ({ icon: Icon, title, description, features, price, index, inView, isPopular = false }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.2 + index * 0.15,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -12, scale: 1.02 }}
      className="relative p-8 rounded-3xl bg-accent-lime text-black h-full flex flex-col group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-lime-400/30"
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-2 -right-2 bg-black text-accent-lime px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider rotate-12 shadow-lg">
          <Star className="w-3 h-3 inline mr-1" />
          Popular
        </div>
      )}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-gradient-to-br from-black to-transparent blur-2xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full bg-gradient-to-tr from-black to-transparent blur-xl"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon with enhanced styling */}
        <motion.div 
          className="mb-8 w-18 h-18 rounded-2xl flex items-center justify-center bg-black/15 group-hover:scale-110 transition-all duration-300"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Icon className="w-9 h-9 text-black" />
        </motion.div>
        
        {/* Title with better typography */}
        <h3 className="text-2xl lg:text-3xl font-extrabold text-black mb-4 leading-tight">
          {title}
        </h3>
        
        {/* Price */}
        {price && (
          <div className="mb-4">
            <span className="text-sm text-black/60 font-medium">Starting from</span>
            <div className="text-3xl lg:text-4xl font-black text-black">{price}</div>
          </div>
        )}
        
        {/* Description */}
        <p className="text-black/80 mb-6 text-lg leading-relaxed flex-grow">
          {description}
        </p>

        {/* Features List */}
        <div className="mb-8">
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <motion.li 
                key={idx}
                className="flex items-center gap-3 text-sm text-black/70"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 + idx * 0.1 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-black/40"></div>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
        
        {/* Enhanced CTA */}
        <motion.a 
          href="#contact" 
          className="flex items-center justify-between p-4 rounded-2xl bg-black/10 hover:bg-black/20 text-black mt-auto font-semibold transition-all duration-300 group-hover:translate-x-1"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="uppercase tracking-wider text-sm">Get Started</span>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </div>
    </motion.div>
  );
};

// --- MAIN SERVICES COMPONENT ---
const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const services = [
    {
      icon: Code2,
      title: 'Frontend Development',
      price: '$1,500',
      description: 'Stunning, responsive user interfaces built with modern React, Next.js, and cutting-edge CSS frameworks.',
      features: ['React & Next.js', 'Responsive Design', 'Performance Optimization', 'Modern UI/UX'],
      isPopular: false
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      price: '$8,000',
      description: 'Native-quality mobile applications for iOS and Android using React Native, delivering seamless cross-platform experiences.',
      features: ['React Native Development', 'iOS & Android Apps', 'Cross-Platform Solutions', 'App Store Deployment'],
      isPopular: true
    },
    {
      icon: Database,
      title: 'Backend Development',
      price: '$2,500',
      description: 'Scalable server-side solutions with robust APIs, secure authentication, and optimized database architecture.',
      features: ['Laravel & Node.js', 'RESTful APIs', 'Database Design', 'Security Implementation'],
      isPopular: false
    },
    {
      icon: Cloud,
      title: 'Full Stack Solutions',
      price: '$5,000',
      description: 'Complete web and mobile applications from concept to deployment, handling both frontend and backend development.',
      features: ['End-to-End Development', 'Supabase & Firebase', 'Cloud Deployment', 'Maintenance & Support'],
      isPopular: true
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      price: '$6,000',
      description: 'High-converting online stores with secure payment processing, inventory management, and real-time analytics.',
      features: ['Mobile E-commerce Apps', 'Payment Gateway Integration', 'Inventory Management', 'Analytics & Reporting'],
      isPopular: false
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      price: '$1,200',
      description: 'Beautiful, intuitive interfaces designed with user experience in mind, from wireframes to high-fidelity prototypes.',
      features: ['User Interface Design', 'Prototyping & Wireframes', 'Design Systems', 'Usability Testing'],
      isPopular: false
    },
    {
      icon: BarChart3,
      title: 'API Integration',
      price: '$1,800',
      description: 'Seamless integration of third-party services, payment gateways, and custom APIs to extend your application capabilities.',
      features: ['Third-party APIs', 'Payment Integration', 'Data Synchronization', 'Webhook Implementation'],
      isPopular: false
    },
    {
      icon: Layers,
      title: 'CMS Development',
      price: '$2,000',
      description: 'Custom content management systems and WordPress solutions including themes, plugins, and headless CMS integration.',
      features: ['WordPress Development', 'Headless CMS', 'Custom Themes', 'Plugin Development'],
      isPopular: false
    },
    {
      icon: Globe,
      title: 'Web Optimization',
      price: '$1,200',
      description: 'Performance enhancement, SEO optimization, and technical improvements to boost your online presence and rankings.',
      features: ['SEO Optimization', 'Speed Enhancement', 'Technical Audits', 'Analytics Setup'],
      isPopular: false
    }
  ];

  const stats = [
    { icon: TrendingUp, number: '150+', label: 'Projects Completed' },
    { icon: Star, number: '98%', label: 'Client Satisfaction' },
    { icon: Zap, number: '10+', label: 'Years Experience' }
  ];

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-lime/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent-lime/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-1 bg-accent-lime"></div>
            <span className="text-accent-lime font-semibold uppercase tracking-wider text-sm">Services</span>
            <div className="w-12 h-1 bg-accent-lime"></div>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-8 leading-tight">
            What I Can Do for
            <span className="block text-accent-lime">My Clients</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From custom front-end designs to complex back-end systems, I provide comprehensive development services that transform your vision into powerful digital solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-accent-lime/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-accent-lime" />
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              price={service.price}
              index={index}
              inView={isInView}
              isPopular={service.isPopular}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-gradient-to-r from-accent-lime/20 via-accent-lime/10 to-accent-lime/20 p-12 rounded-3xl border border-accent-lime/20 backdrop-blur-xl">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss your requirements and create something amazing together.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-accent-lime text-black font-bold px-8 py-4 rounded-2xl hover:bg-accent-lime/90 transition-all duration-300 text-lg uppercase tracking-wider"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;