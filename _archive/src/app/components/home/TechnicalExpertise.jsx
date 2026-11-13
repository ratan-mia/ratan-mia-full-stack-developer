'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cloud, Code2, Database, Gauge, Globe, Lock, Server, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

// Service Feature Component
const ServiceFeature = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="flex gap-4 group"
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-lg bg-accent-lime flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
          <Icon className="w-5 h-5 text-black" />
        </div>
      </div>
      <div>
        <h4 className="text-base lg:text-lg font-bold text-white mb-2 group-hover:text-accent-lime transition-colors duration-300">
          {title}
        </h4>
        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Main Technical Expertise Component
const TechnicalExpertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const services = [
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native iOS & Android apps using React Native, Flutter, and Swift with seamless UX.'
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Modern web apps with Next.js, React, and Vue.js focusing on performance and SEO.'
    },
    {
      icon: Database,
      title: 'Backend Systems',
      description: 'Scalable APIs with Node.js, Python, and PostgreSQL for robust data management.'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'AWS, Supabase, and Vercel deployments with CI/CD automation and monitoring.'
    },
    {
      icon: Server,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation and testing.'
    },
    {
      icon: Lock,
      title: 'Security & Auth',
      description: 'JWT, OAuth, and role-based access control implementation for secure systems.'
    }
  ];

  const techStack = [
    'React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
    'AWS', 'Docker', 'TypeScript', 'GraphQL', 'Redis', 'Supabase'
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-black" id="technical-expertise">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/20 via-gray-900 to-black" />
              
              {/* Optional: Replace with actual image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <Code2 className="w-24 h-24 text-accent-lime mx-auto mb-4" />
                  <p className="text-white/60 text-sm">Technical Expertise Visual</p>
                </div>
              </div>

              {/* Stats Overlay */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-extrabold text-black">150+</div>
                    <div className="text-xs text-gray-600 font-medium">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-black">10+</div>
                    <div className="text-xs text-gray-600 font-medium">Years Exp</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-black">50+</div>
                    <div className="text-xs text-gray-600 font-medium">Clients</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Accent decoration */}
            <motion.div
              className="absolute -z-10 top-8 -left-8 w-32 h-32 bg-accent-lime/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-accent-lime rounded-full" />
                <span className="text-accent-lime font-bold text-sm uppercase tracking-wider">
                  Technical Expertise
                </span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-4 leading-tight">
                Full-Stack Development Excellence
              </h2>
              
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed">
                Delivering enterprise-grade solutions with modern technologies and best practices for scalable, secure, and performant applications.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.08, duration: 0.5 }}
                >
                  <ServiceFeature {...service} />
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-white transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.9 + index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(204, 255, 0, 0.5)' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link href="/portfolio">
                <motion.button
                  className="px-6 py-3 bg-accent-lime text-black font-bold rounded-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:border-accent-lime/50 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let's Talk
                  <CheckCircle2 className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="mt-8 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-accent-lime" />
                  <span className="text-sm text-gray-400">
                    <span className="font-bold text-white">99.9%</span> Uptime
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-lime" />
                  <span className="text-sm text-gray-400">
                    <span className="font-bold text-white">24/7</span> Support
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-accent-lime" />
                  <span className="text-sm text-gray-400">
                    <span className="font-bold text-white">Enterprise</span> Security
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
