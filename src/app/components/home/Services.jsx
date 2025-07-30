'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, Code2, Globe, Rocket, Shield, Smartphone, Zap } from 'lucide-react';
import { useRef } from 'react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const services = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Modern React.js applications with stunning interfaces.',
      features: ['React.js', 'Next.js', 'TypeScript'],
      accent: 'accent',
      bgPattern: 'from-accent/10 to-accent/5'
    },
    {
      icon: Globe,
      title: 'Backend Development', 
      description: 'Robust Laravel APIs that scale with your business.',
      features: ['Laravel', 'PHP', 'REST APIs'],
      accent: 'accent-secondary',
      bgPattern: 'from-accent-secondary/10 to-accent-secondary/5'
    },
    {
      icon: Smartphone,
      title: 'Full Stack Solutions',
      description: 'Complete web applications from database to deployment.',
      features: ['E-commerce', 'CMS', 'Custom Apps'],
      accent: 'accent',
      bgPattern: 'from-accent/5 to-accent-secondary/5'
    }
  ];

  const stats = [
    { icon: Zap, number: '150+', label: 'Projects', color: 'text-accent' },
    { icon: Shield, number: '98%', label: 'Success Rate', color: 'text-accent-secondary' },
    { icon: Rocket, number: '8+', label: 'Years Exp', color: 'text-accent' }
  ];

  return (
    <section ref={ref} className="section-padding bg-black relative overflow-hidden" id="services">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-accent-secondary/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-design relative z-10">
        
        {/* Section Header - Minimal Text */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.h2
            className="section-header text-primary-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What I Do
          </motion.h2>
          
          <motion.div
            className="accent-line mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Stats Row */}
          <motion.div
            className="flex justify-center gap-12 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className={`w-8 h-8 ${stat.color} opacity-70`}>
                  <stat.icon className="w-full h-full" />
                </div>
                <div>
                  <div className={`text-xl font-bold ${stat.color}`}>{stat.number}</div>
                  <div className="caption-text text-neutral">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid - Enhanced Visual Design */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
            >
              {/* Card Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgPattern} rounded-design-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <motion.div
                className="card-design card-service text-center relative z-10 h-full"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Large Icon with Animation */}
                <motion.div
                  className="relative mb-8"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-20 h-20 bg-accent rounded-design-lg flex items-center justify-center mx-auto relative overflow-hidden">
                    <service.icon className="w-10 h-10 text-black relative z-10" />
                    
                    {/* Icon Background Effect */}
                    <motion.div
                      className="absolute inset-0 bg-accent-secondary opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1, rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-secondary rounded-full opacity-70 group-hover:animate-bounce"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent rounded-full opacity-50"></div>
                </motion.div>

                {/* Title - Bold and Clear */}
                <h3 className="text-xl font-bold text-primary-text mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description - Reduced Text */}
                <p className="body-text-small text-neutral mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Tech Tags - Visual Enhancement */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {service.features.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-card-dark text-accent caption-text font-medium rounded-design border border-accent/20 hover:border-accent/50 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Hover CTA */}
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="flex items-center justify-center gap-2 text-accent caption-text font-medium">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Enhanced Visual */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-accent rounded-design blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            
            <motion.a
              href="#contact"
              className="btn-primary relative z-10 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Project</span>
              <motion.div
                className="w-5 h-5"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="w-full h-full" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
