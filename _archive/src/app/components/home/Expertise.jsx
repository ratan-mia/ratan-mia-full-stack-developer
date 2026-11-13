'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Globe,
  Layers,
  Smartphone,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const expertiseAreas = [
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform iOS & Android apps with React Native and Flutter',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'App Store Deploy']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications with cutting-edge frameworks',
      skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: Database,
      title: 'Backend & APIs',
      description: 'Scalable server-side solutions and RESTful/GraphQL APIs',
      skills: ['Node.js', 'Laravel', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: Layers,
      title: 'Full Stack Solutions',
      description: 'End-to-end development from database to user interface',
      skills: ['MERN Stack', 'LAMP Stack', 'JAMstack', 'Microservices']
    },
    {
      icon: Code2,
      title: 'E-commerce Platforms',
      description: 'Complete online stores with payment integration and inventory',
      skills: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Custom Carts']
    },
    {
      icon: Zap,
      title: 'DevOps & Cloud',
      description: 'CI/CD pipelines, cloud infrastructure, and deployment automation',
      skills: ['AWS', 'Docker', 'Vercel', 'Digital Ocean', 'GitHub Actions']
    }
  ];

  const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '10+', label: 'Years Experience' },
    { value: '50+', label: 'Happy Clients' },
    { value: '98%', label: 'Success Rate' }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-black relative overflow-hidden" id="expertise">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-lime/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-1 bg-accent-lime rounded-full" />
            <span className="text-accent-lime font-bold text-sm uppercase tracking-wider">
              What I Do Best
            </span>
            <div className="w-12 h-1 bg-accent-lime rounded-full" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Core Expertise &<br />Technical Skills
          </motion.h2>
          
          <motion.p 
            className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Full-stack development expertise across mobile, web, and cloud technologies
          </motion.p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-accent-lime/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-accent-lime/10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent-lime/10 flex items-center justify-center group-hover:bg-accent-lime group-hover:scale-110 transition-all duration-300">
                  <area.icon className="w-7 h-7 text-accent-lime group-hover:text-black transition-colors" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-extrabold text-white mb-3 group-hover:text-accent-lime transition-colors">
                {area.title}
              </h3>
              
              <p className="text-gray-400 text-sm lg:text-base mb-6 leading-relaxed">
                {area.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-gray-400 rounded-full group-hover:bg-accent-lime/10 group-hover:border-accent-lime/30 group-hover:text-accent-lime transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8 lg:p-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                <div className="text-3xl lg:text-4xl font-extrabold text-accent-lime mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/portfolio">
              <motion.button
                className="px-8 py-4 bg-accent-lime text-black font-bold rounded-xl hover:shadow-xl hover:shadow-accent-lime/20 transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                className="px-8 py-4 bg-white/5 border border-white/20 hover:bg-white/10 hover:border-accent-lime/50 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <CheckCircle2 className="w-5 h-5" />
                Hire Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
