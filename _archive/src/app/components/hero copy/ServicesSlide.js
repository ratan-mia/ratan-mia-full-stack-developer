'use client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Globe,
  Smartphone,
  Shield,
  Zap,
  Users
} from 'lucide-react';

const ServicesSlide = () => {
  const services = [
    { 
      icon: Globe, 
      title: 'Full Stack Development', 
      desc: 'Custom web applications with modern technologies and scalable architecture',
      features: ['Custom Web Apps', 'API Development', 'Database Design', 'Performance Optimization'],
      color: 'from-blue-600 to-cyan-600',
      clients: 50,
      deliveryTime: '2-8 weeks'
    },
    { 
      icon: Smartphone, 
      title: 'E-commerce Solutions', 
      desc: 'High-converting online stores and marketplaces that drive sales',
      features: ['Shopify Stores', 'WooCommerce', 'Payment Systems', 'Inventory Management'],
      color: 'from-emerald-600 to-green-600',
      clients: 30,
      deliveryTime: '3-6 weeks'
    },
    { 
      icon: Shield, 
      title: 'Enterprise Applications', 
      desc: 'Scalable solutions for large-scale operations and business processes',
      features: ['Custom CRM', 'ERP Systems', 'Cloud Solutions', 'Security Implementation'],
      color: 'from-purple-600 to-pink-600',
      clients: 15,
      deliveryTime: '8-16 weeks'
    },
    { 
      icon: Zap, 
      title: 'Performance Optimization', 
      desc: 'Speed and efficiency improvements for existing applications',
      features: ['Site Speed', 'SEO Enhancement', 'Code Review', 'Architecture Refactoring'],
      color: 'from-orange-600 to-red-600',
      clients: 40,
      deliveryTime: '1-4 weeks'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your vision and requirements'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Planning the perfect technical approach'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building with cutting-edge technologies'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Launch and ongoing support'
    }
  ];

  return (
    <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section - Following design guidelines */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge - Labels & Small Text */}
          <motion.div
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-xl border border-emerald-400/30 px-6 py-3 rounded-full text-sm md:text-base font-semibold text-emerald-300 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Briefcase className="w-4 h-4" />
            <span className="tracking-wider uppercase">Premium Solutions</span>
          </motion.div>

          {/* Main Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Services That{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Transform
            </span>
          </h2>
          
          {/* Body Text - Primary */}
          <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Revolutionary solutions that drive real business results and exceed expectations
          </p>
        </motion.div>

        {/* Services Grid - Card Design Standards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/[0.15] hover:border-cyan-400/50 transition-all duration-500 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: '0 25px 50px rgba(6, 182, 212, 0.2)'
              }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex items-start gap-6">
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shrink-0 shadow-2xl`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 15,
                    boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4)'
                  }}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  {/* Card/Component Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Body Text - Primary */}
                  <p className="text-sm md:text-base text-gray-200 mb-6 leading-relaxed">{service.desc}</p>
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + featureIndex * 0.1 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-cyan-400 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                        />
                        {/* Body Text - Secondary */}
                        <span className="text-sm md:text-base text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-xs md:text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-cyan-400" />
                      <span>{service.clients}+ clients</span>
                    </div>
                    <div className="text-emerald-400 font-medium">
                      {service.deliveryTime}
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-8 h-8 text-cyan-400" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {/* Section Heading */}
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
            Our Proven Process
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl md:text-2xl font-bold text-white shadow-2xl"
                  whileHover={{ scale: 1.1, rotateY: 15 }}
                >
                  {step.step}
                </motion.div>
                
                {/* Subsection Title */}
                <h4 className="text-base md:text-lg font-bold text-white mb-2">{step.title}</h4>
                {/* Caption & Meta Info */}
                <p className="text-xs md:text-sm text-gray-300">{step.description}</p>
                
                {/* Connection Line (except for last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-cyan-400 to-transparent -translate-x-8" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-base md:text-lg px-10 py-5 rounded-2xl hover:from-emerald-400 hover:to-green-500 transition-all duration-300 shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ x: [-100, 200] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="relative z-10">Explore All Solutions</span>
            <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          {[
            { number: '99%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Support Available' },
            { number: '2hrs', label: 'Response Time' },
            { number: '30+', label: 'Technologies' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-xs md:text-sm font-medium text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSlide;