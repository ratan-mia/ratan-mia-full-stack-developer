'use client';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  Clock,
  Globe,
  Shield,
  Smartphone,
  Users,
  Zap
} from 'lucide-react';

const ServicesSlide = () => {
  const services = [
    { 
      icon: Globe, 
      title: 'Full Stack Development', 
      desc: 'Custom web applications with modern technologies',
      features: ['Web Apps', 'APIs', 'Database', 'Performance'],
      color: 'from-blue-600 to-cyan-600',
      clients: 50,
      time: '2-8 weeks'
    },
    { 
      icon: Smartphone, 
      title: 'E-commerce Solutions', 
      desc: 'High-converting online stores and marketplaces',
      features: ['Shopify', 'WooCommerce', 'Payments', 'Inventory'],
      color: 'from-emerald-600 to-green-600',
      clients: 30,
      time: '3-6 weeks'
    },
    { 
      icon: Shield, 
      title: 'Enterprise Applications', 
      desc: 'Scalable solutions for business processes',
      features: ['CRM', 'ERP', 'Cloud', 'Security'],
      color: 'from-purple-600 to-pink-600',
      clients: 15,
      time: '8-16 weeks'
    },
    { 
      icon: Zap, 
      title: 'Performance Optimization', 
      desc: 'Speed improvements for existing applications',
      features: ['Speed', 'SEO', 'Review', 'Refactor'],
      color: 'from-orange-600 to-red-600',
      clients: 40,
      time: '1-4 weeks'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'Understanding requirements' },
    { step: '02', title: 'Strategy', desc: 'Technical planning' },
    { step: '03', title: 'Development', desc: 'Building solutions' },
    { step: '04', title: 'Delivery', desc: 'Launch & support' }
  ];

  const stats = [
    { icon: Users, number: '99%', label: 'Satisfaction' },
    { icon: Clock, number: '24/7', label: 'Support' },
    { icon: Zap, number: '2hrs', label: 'Response' },
    { icon: Globe, number: '30+', label: 'Technologies' }
  ];

  return (
    <section className="h-screen flex items-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Compact Header */}
          <div className="text-center space-y-2">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-xl border border-emerald-400/30 px-3 py-1.5 rounded-full text-sm font-semibold text-emerald-300"
              whileHover={{ scale: 1.05 }}
            >
              <Briefcase className="w-3 h-3" />
              <span className="tracking-wider uppercase">Premium Solutions</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Services That{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Transform
              </span>
            </h2>
            
            <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
              Revolutionary solutions that drive real business results
            </p>
          </div>

          {/* Services Grid - 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-xl p-4 hover:bg-white/[0.15] hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -2, scale: 1.01 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center shrink-0`}
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-gray-200 mb-3">{service.desc}</p>
                    
                    {/* Features - Inline */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {service.features.map((feature, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-xs text-gray-300">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {service.clients}+ clients
                      </span>
                      <span className="text-emerald-400 font-medium">{service.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Steps - Horizontal */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white text-center mb-4">Our Process</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2 text-sm font-bold text-white">
                    {step.step}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-300">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Section - Stats + CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
            {/* Stats */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center bg-white/[0.05] border border-white/10 rounded-lg p-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md flex items-center justify-center mx-auto mb-1">
                    <stat.icon className="w-3 h-3 text-white" />
                  </div>
                  <div className="text-sm font-bold text-white">{stat.number}</div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="text-center lg:text-right"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-sm md:text-base px-6 py-3 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSlide;