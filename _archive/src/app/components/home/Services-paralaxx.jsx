'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Database, Smartphone, Cloud, ShoppingCart, Palette, BarChart3, Layers, Globe } from 'lucide-react';
import { useRef } from 'react';

// Service Item Component with Parallax Effect
const ServiceItem = ({ service, index }) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect - items scale down and fade as you scroll past them
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={itemRef}
      style={{ 
        opacity,
        scale,
        position: 'sticky',
        top: `${index * 20}px`,
        zIndex: index
      }}
      className="bg-black py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Number */}
          <div className="col-span-12 lg:col-span-1">
            <motion.div 
              className="text-white/10 font-black text-6xl lg:text-7xl leading-none"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {String(index + 1).padStart(2, '0')}.
            </motion.div>
          </div>

          {/* Middle: Content */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            {/* Title */}
            <motion.h3 
              className="text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight uppercase tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {service.title}
            </motion.h3>

            {/* Description */}
            <motion.p 
              className="text-sm lg:text-base text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {service.description}
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-full hover:bg-accent-lime transition-all duration-300 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span className="uppercase tracking-wider text-sm">See Our Services</span>
            </motion.a>

            {/* Tags */}
            <motion.div 
              className="flex flex-wrap gap-3 pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {service.features.map((feature, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-white/10 text-white text-xs font-medium rounded-md border border-white/20 hover:bg-white/20 transition-colors cursor-default"
                >
                  {feature}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div 
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: service.bgGradient
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Placeholder with icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <service.icon className="w-32 h-32 lg:w-48 lg:h-48 text-white/30" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Services Component
const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.',
      features: ['UX Design', 'User Testing', 'Motion Design'],
      bgGradient: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)'
    },
    {
      icon: Code2,
      title: 'User Research',
      description: 'Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.',
      features: ['UX Design', 'User Testing', 'Motion Design'],
      bgGradient: 'linear-gradient(135deg, #FFA500 0%, #FFD700 100%)'
    },
    {
      icon: Layers,
      title: 'Branding',
      description: 'Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.',
      features: ['UX Design', 'User Testing', 'Motion Design'],
      bgGradient: 'linear-gradient(135deg, #90EE90 0%, #98FB98 100%)'
    },
    {
      icon: Globe,
      title: '3D & Motion',
      description: 'Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.',
      features: ['UX Design', 'User Testing', 'Motion Design'],
      bgGradient: 'linear-gradient(135deg, #4169E1 0%, #87CEEB 100%)'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.',
      features: ['React Native', 'iOS & Android', 'Cross-Platform'],
      bgGradient: 'linear-gradient(135deg, #9370DB 0%, #DDA0DD 100%)'
    },
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.',
      features: ['React & Next.js', 'Responsive Design', 'Performance'],
      bgGradient: 'linear-gradient(135deg, #FF69B4 0%, #FFB6C1 100%)'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.',
      features: ['Laravel & Node.js', 'RESTful APIs', 'Database Design'],
      bgGradient: 'linear-gradient(135deg, #20B2AA 0%, #48D1CC 100%)'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.',
      features: ['Payment Integration', 'Inventory', 'Analytics'],
      bgGradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
    },
    {
      icon: BarChart3,
      title: 'Web Optimization',
      description: 'Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.',
      features: ['SEO', 'Performance', 'Analytics'],
      bgGradient: 'linear-gradient(135deg, #32CD32 0%, #7FFF00 100%)'
    }
  ];

  return (
    <section ref={ref} className="bg-black relative overflow-hidden" id="services">
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-32 pb-12 lg:pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-1 bg-accent-lime rounded-full"></div>
            <span className="text-white font-bold uppercase tracking-wider text-sm">What I Do</span>
            <div className="w-12 h-1 bg-accent-lime rounded-full"></div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-400 mb-4 leading-relaxed max-w-4xl mx-auto">
            I help brands build intuitive and user-friendly digital products through a strategic design approach.
          </h2>
        </motion.div>
      </div>

      {/* Services List */}
      <div className="relative">
        {services.map((service, index) => (
          <ServiceItem 
            key={service.title}
            service={service}
            index={index}
          />
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="py-20 lg:py-32 px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="bg-accent-lime p-12 lg:p-20 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-4xl lg:text-6xl font-black text-black mb-6 uppercase">
                Ready to Start Your Project?
              </h3>
              <p className="text-black/80 mb-10 max-w-2xl mx-auto text-lg lg:text-xl font-medium">
                Let's discuss your requirements and create something amazing together.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-4 bg-black text-accent-lime font-black px-12 py-6 rounded-full hover:bg-gray-900 transition-all duration-300 text-lg uppercase tracking-wider shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;