'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle,
  Globe,
  GraduationCap,
  Rocket,
  Shield,
  Star,
  Target,
  Timer,
  TrendingUp,
  Users
} from 'lucide-react';

const Experience = () => {
  // Enhanced animation variants following guidelines
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "Kawasaki Bangladesh",
      period: "September 2018 – Present",
      duration: "6+ years",
      type: "Full-time",
      status: "Current",
      achievements: [
        "Led design and development of dynamic web applications and APIs",
        "Built comprehensive Car Parts E-commerce platform with 200% sales increase",
        "Developed Chery Bangladesh website with 97% speed optimization",
        "Managed deployment using Docker, Digital Ocean, and Google Cloud"
      ],
      impact: {
        sales: "200%",
        performance: "97%",
        projects: "50+"
      },
      tags: ["React.js", "Next.js", "Laravel", "E-commerce", "Docker"],
      color: "blue"
    },
    {
      title: "IT Manager",
      company: "Continental Motors",
      period: "October 2018 – Present",
      duration: "6+ years",
      type: "Full-time",
      status: "Current",
      achievements: [
        "Strategically managed IT operations and budget optimization",
        "Reduced operational costs by 40% through strategic vendor selection",
        "Implemented real-time attendance system with automated payroll",
        "Maintained server infrastructure including Windows Server and VPS"
      ],
      impact: {
        savings: "40%",
        efficiency: "85%",
        uptime: "99.9%"
      },
      tags: ["IT Management", "DevOps", "Infrastructure", "Leadership"],
      color: "purple"
    },
    {
      title: "Sr. Software Developer",
      company: "Bengal Group of Industries",
      period: "January 2018 – September 2018",
      duration: "9 months",
      type: "Full-time",
      status: "Previous",
      achievements: [
        "Led team of 15 developers with 25% client satisfaction increase",
        "Developed scalable Laravel-based e-commerce solutions",
        "Created Marlax Technologies with WHMCS integration",
        "Managed end-to-end project lifecycle using Agile methodologies"
      ],
      impact: {
        team: "15",
        satisfaction: "25%",
        delivery: "100%"
      },
      tags: ["Laravel", "WordPress", "Team Leadership", "E-commerce"],
      color: "emerald"
    }
  ];

  const certifications = [
    {
      title: "Complete React.js Course - Advanced",
      provider: "Udemy",
      year: "2023",
      category: "Frontend Development",
      verified: true
    },
    {
      title: "Modern JavaScript for React JS",
      provider: "Udemy",
      year: "2023",
      category: "JavaScript",
      verified: true
    },
    {
      title: "Advanced PHP: Debugging",
      provider: "LinkedIn Learning",
      year: "2022",
      category: "Backend Development",
      verified: true
    },
    {
      title: "Node.js and Express Development",
      provider: "IBM",
      year: "2022",
      category: "Backend Development",
      verified: true
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-400/30',
        text: 'text-blue-600',
        gradient: 'from-blue-600 to-blue-500',
        badge: 'bg-blue-100 text-blue-800 border-blue-200'
      },
      purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-400/30',
        text: 'text-purple-600',
        gradient: 'from-purple-600 to-purple-500',
        badge: 'bg-purple-100 text-purple-800 border-purple-200'
      },
      emerald: {
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-400/30',
        text: 'text-emerald-600',
        gradient: 'from-emerald-600 to-emerald-500',
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-200'
      }
    };
    return colors[color];
  };

  return (
    <section 
      id="experience" 
      className="py-16 md:py-24 lg:py-32 px-6 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden"
    >
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm tracking-wider uppercase mb-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Briefcase className="w-4 h-4" />
            CAREER JOURNEY
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-800 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Over 10 years of full-stack development expertise, leading teams and delivering 
            high-performance web solutions that drive measurable business growth.
          </p>
          
          {/* Experience summary stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 md:gap-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {[
              { icon: Calendar, label: '10+ Years', desc: 'Experience' },
              { icon: Users, label: '200+', desc: 'Projects Delivered' },
              { icon: TrendingUp, label: '98%', desc: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white/60 dark:bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full border border-white/30 dark:border-white/20"
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div className="text-left">
                  <div className="text-sm font-bold text-slate-800 dark:text-white">{stat.label}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-300">{stat.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Enhanced Timeline line with animated gradient */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 hidden lg:block">
            <motion.div 
              className="w-full h-full bg-gradient-to-b from-blue-600 via-purple-600 to-emerald-600 rounded-full"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          
          {/* Experience Items */}
          {experiences.map((exp, index) => {
            const colorClasses = getColorClasses(exp.color);
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={index}
                variants={isEven ? slideInLeft : slideInRight}
                className={`relative mb-12 md:mb-16 lg:mb-20 ${
                  isEven 
                    ? 'lg:pr-1/2 lg:text-right lg:pr-12' 
                    : 'lg:pl-1/2 lg:pl-12'
                }`}
              >
                {/* Enhanced Timeline dot */}
                <motion.div 
                  className="absolute left-1/2 top-8 w-8 h-8 transform -translate-x-1/2 hidden lg:flex items-center justify-center z-20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`w-8 h-8 bg-gradient-to-r ${colorClasses.gradient} rounded-full border-4 border-white dark:border-slate-900 shadow-xl flex items-center justify-center`}>
                    {exp.status === 'Current' ? (
                      <motion.div 
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group bg-white/80 dark:bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-white/50 dark:border-white/20 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
                  whileHover={{ y: -8 }}
                >
                  {/* Status and Type badges */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {exp.status === 'Current' && (
                      <motion.div 
                        className="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold border border-emerald-200 dark:border-emerald-700"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        Current Role
                      </motion.div>
                    )}
                    <div className={`${colorClasses.badge} dark:bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold border`}>
                      {exp.type}
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.duration}
                    </div>
                  </div>

                  {/* Company and Title */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Building2 className={`w-6 h-6 ${colorClasses.text} dark:opacity-80`} />
                      <span className={`text-lg font-bold ${colorClasses.text} dark:opacity-80`}>
                        {exp.company}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    {Object.entries(exp.impact).map(([key, value], i) => (
                      <motion.div
                        key={key}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                      >
                        <div className={`text-2xl md:text-3xl font-bold ${colorClasses.text} dark:opacity-80 mb-1`}>
                          {value}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider">
                          {key === 'sales' && 'Sales Increase'}
                          {key === 'performance' && 'Performance'}
                          {key === 'projects' && 'Projects'}
                          {key === 'savings' && 'Cost Reduction'}
                          {key === 'efficiency' && 'Efficiency'}
                          {key === 'uptime' && 'System Uptime'}
                          {key === 'team' && 'Team Size'}
                          {key === 'satisfaction' && 'Satisfaction'}
                          {key === 'delivery' && 'On-time Delivery'}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Key achievements */}
                  <div className="mb-8">
                    <h4 className="flex items-center gap-2 text-lg font-bold text-slate-800 dark:text-white mb-4">
                      <Target className="w-5 h-5" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                        >
                          <motion.div 
                            className={`w-2 h-2 bg-gradient-to-r ${colorClasses.gradient} mt-3 flex-shrink-0 rounded-full`}
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology tags */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-3 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <motion.span 
                          key={i}
                          className="bg-white/60 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-2 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-600 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Education & Certifications */}
        <motion.div 
          className="mt-16 md:mt-24 grid lg:grid-cols-2 gap-8 md:gap-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Education */}
          <motion.div
            className="bg-white/80 dark:bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-white/50 dark:border-white/20"
            whileHover={{ y: -4 }}
          >
            <div className="mb-8">
              <motion.div 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-4 py-2 rounded-full font-semibold text-sm mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <GraduationCap className="w-4 h-4" />
                EDUCATION
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6">
                Academic Background
              </h3>
            </div>
            
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 md:p-8 rounded-xl border border-blue-100 dark:border-blue-800"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    Bachelor of Arts (English)
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 font-semibold mb-1">
                    University of Dhaka
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">
                    2011-2017
                  </p>
                  <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    <Award className="w-3 h-3" />
                    Honors Graduate
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            className="bg-white/80 dark:bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-white/50 dark:border-white/20"
            whileHover={{ y: -4 }}
          >
            <div className="mb-8">
              <motion.div 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-semibold text-sm mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-4 h-4" />
                CERTIFICATIONS
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6">
                Professional Certifications
              </h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  className="group bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700 p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors duration-300">
                      <Shield className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-slate-800 dark:text-white text-sm mb-1">
                            {cert.title}
                          </h4>
                          <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-1">
                            {cert.provider}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-500 dark:text-slate-400 text-xs">
                              {cert.year}
                            </span>
                            <span className="text-slate-400 dark:text-slate-500">•</span>
                            <span className="text-slate-500 dark:text-slate-400 text-xs">
                              {cert.category}
                            </span>
                          </div>
                        </div>
                        {cert.verified && (
                          <motion.div 
                            className="flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full text-xs font-medium"
                            whileHover={{ scale: 1.05 }}
                          >
                            <CheckCircle className="w-3 h-3" />
                            Verified
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="mt-16 md:mt-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-8 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-700/90"></div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Ready to Start Your Next Project?
              </motion.h3>
              <motion.p 
                className="text-blue-100 text-lg md:text-xl mb-8 font-light max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Let's leverage my proven expertise to transform your vision into a powerful digital solution that drives measurable results.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket className="w-5 h-5" />
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                
                <motion.button
                  className="bg-transparent border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-5 h-5" />
                  View Portfolio
                </motion.button>
              </motion.div>
              
              {/* Trust indicators */}
              <motion.div
                className="mt-8 flex items-center justify-center gap-6 text-blue-100 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4" />
                  Quick Response
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Quality Guaranteed
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Proven Results
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;