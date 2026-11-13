'use client';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Award,
    CheckCircle,
    Code2,
    Database,
    ExternalLink,
    Globe,
    Mail,
    MessageCircle,
    Palette,
    Phone,
    Server,
    Shield,
    Smartphone,
    Star,
    Target,
    Users,
    Zap
} from 'lucide-react';
import { useState } from 'react';

const CompactTechSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Enhanced animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  // Technology data with enhanced categorization
  const technologies = [
    { name: 'React.js', expertise: 95, category: 'frontend', icon: Code2, color: 'from-blue-500 to-cyan-500' },
    { name: 'Next.js', expertise: 92, category: 'frontend', icon: Globe, color: 'from-gray-700 to-gray-900' },
    { name: 'Vue.js', expertise: 85, category: 'frontend', icon: Code2, color: 'from-green-500 to-emerald-500' },
    { name: 'JavaScript', expertise: 97, category: 'language', icon: Code2, color: 'from-yellow-500 to-orange-500' },
    { name: 'TypeScript', expertise: 88, category: 'language', icon: Code2, color: 'from-blue-600 to-blue-800' },
    { name: 'PHP', expertise: 96, category: 'backend', icon: Server, color: 'from-purple-600 to-purple-800' },
    { name: 'Laravel', expertise: 94, category: 'backend', icon: Server, color: 'from-red-500 to-red-700' },
    { name: 'Node.js', expertise: 88, category: 'backend', icon: Server, color: 'from-green-600 to-green-800' },
    { name: 'MySQL', expertise: 90, category: 'database', icon: Database, color: 'from-orange-600 to-orange-800' },
    { name: 'PostgreSQL', expertise: 85, category: 'database', icon: Database, color: 'from-blue-700 to-indigo-700' },
    { name: 'MongoDB', expertise: 82, category: 'database', icon: Database, color: 'from-green-700 to-green-900' },
    { name: 'Docker', expertise: 85, category: 'devops', icon: Shield, color: 'from-blue-500 to-blue-700' },
    { name: 'AWS', expertise: 80, category: 'devops', icon: Shield, color: 'from-orange-500 to-yellow-500' },
    { name: 'React Native', expertise: 78, category: 'mobile', icon: Smartphone, color: 'from-purple-500 to-pink-500' },
    { name: 'Tailwind CSS', expertise: 95, category: 'frontend', icon: Palette, color: 'from-teal-500 to-cyan-500' },
    { name: 'GraphQL', expertise: 75, category: 'backend', icon: Server, color: 'from-pink-500 to-rose-500' }
  ];

  const categories = [
    { id: 'all', name: 'All Technologies', icon: Zap },
    { id: 'frontend', name: 'Frontend', icon: Globe },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'devops', name: 'DevOps', icon: Shield }
  ];

  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  // Contact methods
  const contactMethods = [
    {
      icon: Phone,
      label: 'Call',
      value: '+8801751010966',
      href: 'tel:+8801751010966',
      color: 'from-green-500 to-emerald-600',
      description: 'Direct consultation'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat Now',
      href: 'https://wa.me/8801751010966',
      color: 'from-emerald-500 to-green-600',
      description: 'Quick messaging'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Contact',
      href: 'mailto:shorifull@gmail.com',
      color: 'from-blue-500 to-indigo-600',
      description: 'Project discussion'
    }
  ];

  // Service highlights
  const serviceHighlights = [
    {
      icon: Target,
      title: 'Custom Development',
      description: 'Tailored solutions for your business',
      features: ['Web Apps', 'E-commerce', 'APIs']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up existing applications',
      features: ['Code Optimization', 'Database Tuning', 'Caching']
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Technical guidance and management',
      features: ['Code Reviews', 'Architecture', 'Mentoring']
    },
    {
      icon: Award,
      title: 'Consultation',
      description: 'Expert technology advice',
      features: ['Tech Stack', 'Planning', 'Best Practices']
    }
  ];

  return (
    <section id="tech" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/8 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/8 blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Technology Stack Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <motion.div
              className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 border border-white/50 shadow-lg mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-blue-800 font-semibold text-sm tracking-wider uppercase">Technical Expertise</span>
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Technologies I Master
            </h2>
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
              Cutting-edge tools and frameworks for modern web development
            </p>
          </div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 font-medium text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'bg-white/60 text-slate-700 hover:bg-white/80 border border-slate-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
          
          {/* Technology Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto"
            layout
          >
            {filteredTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative p-4 bg-white/80 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                layout
                transition={{ delay: index * 0.03, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${tech.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-slate-800 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    {tech.name}
                  </div>
                  <div className="text-slate-600 text-xs font-medium capitalize">{tech.category}</div>
                  
                  {/* Expertise Bar */}
                  <div className="w-full bg-slate-200 h-1.5">
                    <motion.div
                      className={`bg-gradient-to-r ${tech.color} h-1.5`}
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.expertise}%` }}
                      transition={{ delay: 0.3 + index * 0.03, duration: 0.8 }}
                    />
                  </div>
                  <div className="text-slate-700 text-xs font-semibold">{tech.expertise}%</div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Service Highlights Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <motion.div
              className="inline-block bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm px-6 py-2 border border-green-400/30 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-green-800 font-semibold text-sm tracking-wider uppercase">What I Offer</span>
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Professional Services
            </h2>
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title}
                className="group p-5 bg-white/80 backdrop-blur-sm border border-white/50 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 font-light mb-3 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <motion.div
              className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm px-6 py-2 border border-purple-400/30 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-purple-800 font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
            </motion.div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
              Let's discuss your requirements and create something amazing together
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === 'WhatsApp' ? '_blank' : undefined}
                rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className={`group flex flex-col items-center gap-3 p-6 bg-gradient-to-br ${method.color} text-white font-semibold transition-all duration-300 hover:shadow-xl`}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <method.icon className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
                <div className="text-center">
                  <div className="text-xl font-bold mb-1">{method.label}</div>
                  <div className="text-base opacity-90 mb-1">{method.value}</div>
                  <div className="text-sm opacity-80">{method.description}</div>
                </div>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            ))}
          </div>

          {/* Bottom Call-to-Actions */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-800">Let's Build Something Amazing Together</h3>
              <p className="text-base text-slate-600 font-light max-w-xl mx-auto">
                Whether you need a complete web application, optimization, or consultation, 
                I'm here to help bring your vision to life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <motion.a
                href="#quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Star className="w-4 h-4" />
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              
              <div className="flex gap-3">
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white/80 hover:bg-white text-slate-800 border border-slate-200 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Globe className="w-4 h-4" />
                  <span>Portfolio</span>
                </motion.a>
                
                <motion.a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>Resume</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompactTechSection;