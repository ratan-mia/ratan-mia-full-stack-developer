'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  Lightbulb,
  Palette,
  Code,
  Rocket,
  Clock,
  CheckCircle,
  Zap
} from 'lucide-react';
import { useRef } from 'react';

const ProcessHowIWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const processSteps = [
    {
      id: '01',
      title: 'Discovery',
      subtitle: 'Understanding Your Vision',
      icon: Lightbulb,
      duration: '1-2 Days',
      description: 'Deep-dive consultation to understand your goals.',
      color: 'accent',
      bgGradient: 'from-accent/20 to-accent/10'
    },
    {
      id: '02',
      title: 'Design',
      subtitle: 'Visual Excellence',
      icon: Palette,
      duration: '3-5 Days',
      description: 'Creating stunning, user-focused designs.',
      color: 'accent-secondary',
      bgGradient: 'from-accent-secondary/20 to-accent-secondary/10'
    },
    {
      id: '03',
      title: 'Development',
      subtitle: 'Bringing Ideas to Life',
      icon: Code,
      duration: '1-4 Weeks',
      description: 'Clean, scalable code using modern technologies.',
      color: 'accent',
      bgGradient: 'from-accent/20 to-accent/10'
    },
    {
      id: '04',
      title: 'Launch',
      subtitle: 'Going Live & Beyond',
      icon: Rocket,
      duration: 'Ongoing',
      description: 'Smooth deployment with ongoing support.',
      color: 'accent-secondary',
      bgGradient: 'from-accent-secondary/20 to-accent-secondary/10'
    }
  ];

  const stats = [
    { icon: Zap, number: '4', label: 'Step Process', color: 'text-accent' },
    { icon: CheckCircle, number: '98%', label: 'Success Rate', color: 'text-accent-secondary' },
    { icon: Clock, number: '150+', label: 'Projects', color: 'text-accent' },
    { icon: Rocket, number: '24/7', label: 'Support', color: 'text-accent-secondary' }
  ];

  return (
    <section ref={ref} className="section-padding bg-black relative overflow-hidden" id="process">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-30">
        {/* Process Flow Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent via-transparent to-transparent"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-accent/10 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-16 w-48 h-48 bg-accent-secondary/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Geometric Patterns */}
        <div className="absolute top-32 left-1/4 w-16 h-16 border-2 border-accent/20 rounded-design rotate-45"></div>
        <div className="absolute bottom-32 right-1/4 w-12 h-12 bg-accent-secondary/20 rounded-design"></div>
      </div>

      <div className="container-design relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.h2
            className="section-header text-primary-text mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How I Work
          </motion.h2>
          
          <motion.div
            className="accent-line mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p
            className="body-text text-neutral max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A streamlined process designed for exceptional results
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
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
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <motion.div
                className={`w-16 h-16 ${stat.color} bg-card rounded-design-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>
              <motion.div
                className={`text-3xl font-bold ${stat.color} mb-2`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="caption-text text-neutral">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line for Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-px bg-gradient-to-r from-accent via-accent-secondary to-accent opacity-30"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} rounded-design-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <motion.div
                  className="card-design text-center relative z-10 h-full"
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Step Number & Icon */}
                  <div className="relative mb-6">
                    <motion.div
                      className={`w-20 h-20 bg-${step.color} rounded-design-lg flex items-center justify-center mx-auto relative`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="w-10 h-10 text-black" />
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-card border-2 border-accent rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-accent">{step.id}</span>
                      </div>
                    </motion.div>

                    {/* Connection Dot for Line */}
                    <div className="hidden lg:block absolute top-10 -right-4 w-4 h-4 bg-accent rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className={`text-xl font-bold text-primary-text mb-2 group-hover:text-${step.color} transition-colors`}>
                      {step.title}
                    </h3>
                    <p className={`text-${step.color} caption-text font-medium mb-3`}>
                      {step.subtitle}
                    </p>
                    
                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-2 bg-card-dark px-3 py-1 rounded-design mb-4">
                      <Clock className="w-4 h-4 text-neutral" />
                      <span className="caption-text text-neutral">{step.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="body-text-small text-neutral leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    className="flex items-center justify-center gap-2 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <span className={`text-${step.color} caption-text font-medium`}>Learn More</span>
                    <ArrowRight className={`w-4 h-4 text-${step.color}`} />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          {[
            { icon: '🎯', title: 'Transparent Process', desc: 'Clear milestones and regular updates' },
            { icon: '⚡', title: 'Fast Delivery', desc: 'Efficient workflow and timely completion' },
            { icon: '🔧', title: 'Ongoing Support', desc: '24/7 support and maintenance' }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.7 + index * 0.1 }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h4 className="text-lg font-bold text-primary-text mb-2">{benefit.title}</h4>
              <p className="body-text-small text-neutral">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <div className="relative bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent/20 p-12 rounded-design-lg border border-accent/30 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-4 w-24 h-24 border-2 border-accent/20 rounded-design rotate-45"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent-secondary/10 rounded-full"></div>
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-text mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="body-text text-neutral mb-8 max-w-2xl mx-auto">
                Let's transform your vision into reality with my proven process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="btn-primary group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Project</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.a>
                
                <motion.a
                  href="#projects"
                  className="btn-secondary group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Examples</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessHowIWork;
