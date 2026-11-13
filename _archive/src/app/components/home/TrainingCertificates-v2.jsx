'use client';

import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle,
  Clock,
  Code,
  Database,
  Download,
  Eye,
  Globe,
  GraduationCap,
  Search,
  Server,
  Shield,
  Star,
  Target,
  TrendingUp,
  Trophy
} from 'lucide-react';
import { useState } from 'react';

const TrainingCertificates = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCert, setHoveredCert] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Education data
  const education = {
    degree: "Bachelor of Arts (English)",
    institution: "University of Dhaka",
    period: "February 2011 – November 2017",
    location: "Dhaka, Bangladesh",
    description: "Studied a diverse range of English literature, language, and writing courses, enhancing communication and critical thinking skills.",
    achievements: [
      "Enhanced written and verbal communication abilities",
      "Developed analytical and problem-solving capabilities",
      "Built foundation for technical documentation",
      "Improved client communication skills"
    ],
    icon: GraduationCap,
    gradient: "from-blue-600 to-indigo-600"
  };

  // Awards data
  const awards = [
    {
      id: 1,
      title: "Junior Scholarship",
      organization: "Dhaka Education Board",
      date: "September 15, 2008",
      description: "Secured the top position under the Dhaka Education Board, showcasing dedication to academic excellence and a commitment to continuous learning and growth.",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-500",
      category: "academic"
    }
  ];

  // Certificates data
  const certificates = [
    {
      id: 1,
      title: "The Complete React.js Course - Basics to Advanced",
      provider: "Udemy",
      category: "frontend",
      skills: ["React.js", "JavaScript", "Frontend Development"],
      description: "Comprehensive course covering React fundamentals to advanced concepts including hooks, context, and state management.",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      level: "Advanced",
      duration: "40+ hours",
      featured: true
    },
    {
      id: 2,
      title: "Modern JavaScript for React JS",
      provider: "Udemy",
      category: "frontend",
      skills: ["JavaScript ES6+", "React.js", "Modern JS"],
      description: "In-depth JavaScript course focusing on modern ES6+ features essential for React development.",
      icon: Code,
      gradient: "from-yellow-500 to-orange-500",
      level: "Intermediate",
      duration: "25+ hours",
      featured: false
    },
    {
      id: 3,
      title: "Advanced PHP: Debugging Techniques",
      provider: "LinkedIn Learning",
      category: "backend",
      skills: ["PHP", "Debugging", "Error Handling"],
      description: "Advanced debugging techniques and best practices for PHP application development.",
      icon: Server,
      gradient: "from-purple-500 to-indigo-500",
      level: "Advanced",
      duration: "3 hours",
      featured: false
    },
    {
      id: 4,
      title: "Build CRUD Application - PHP & MySQL",
      provider: "Udemy",
      category: "backend",
      skills: ["PHP", "MySQL", "CRUD Operations"],
      description: "Complete guide to building database-driven applications with PHP and MySQL.",
      icon: Database,
      gradient: "from-green-500 to-teal-500",
      level: "Intermediate",
      duration: "15+ hours",
      featured: true
    },
    {
      id: 5,
      title: "Developing Back-End Apps with Node.js and Express",
      provider: "IBM",
      category: "backend",
      skills: ["Node.js", "Express.js", "API Development"],
      description: "Professional course on building scalable backend applications with Node.js and Express framework.",
      icon: Server,
      gradient: "from-green-600 to-blue-600",
      level: "Professional",
      duration: "20+ hours",
      featured: true
    },
    {
      id: 6,
      title: "PHP & MySQL Course: The Complete Guide (Step by Step)",
      provider: "Udemy",
      category: "backend",
      skills: ["PHP", "MySQL", "Web Development"],
      description: "Comprehensive course covering PHP and MySQL from basics to advanced web development.",
      icon: Database,
      gradient: "from-purple-600 to-pink-600",
      level: "Complete",
      duration: "50+ hours",
      featured: false
    },
    {
      id: 7,
      title: "JavaScript - Basics to Advanced step by step",
      provider: "Udemy",
      category: "frontend",
      skills: ["JavaScript", "DOM Manipulation", "ES6+"],
      description: "Complete JavaScript course covering fundamentals to advanced programming concepts.",
      icon: Code,
      gradient: "from-yellow-600 to-red-600",
      level: "Complete",
      duration: "30+ hours",
      featured: false
    },
    {
      id: 8,
      title: "Docker Course for beginners",
      provider: "Udemy",
      category: "devops",
      skills: ["Docker", "Containerization", "DevOps"],
      description: "Introduction to containerization and Docker for modern application deployment.",
      icon: Shield,
      gradient: "from-cyan-500 to-blue-500",
      level: "Beginner",
      duration: "10+ hours",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Certificates', icon: Award },
    { id: 'frontend', name: 'Frontend', icon: Globe },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'devops', name: 'DevOps', icon: Shield },
    { id: 'academic', name: 'Academic', icon: BookOpen }
  ];

  const filteredCertificates = certificates.filter(cert => {
    const matchesCategory = activeFilter === 'all' || cert.category === activeFilter;
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredCertificates = certificates.filter(cert => cert.featured);

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'text-green-600 bg-green-100 border-green-200';
      case 'Intermediate': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'Advanced': return 'text-purple-600 bg-purple-100 border-purple-200';
      case 'Professional': return 'text-indigo-600 bg-indigo-100 border-indigo-200';
      case 'Complete': return 'text-orange-600 bg-orange-100 border-orange-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  return (
    <section id="certificates" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/3 left-1/3 w-2 h-2 bg-blue-400/30 rounded-full"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-400/30 rounded-full"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-orange-100 text-orange-800 px-6 py-3 font-medium text-sm tracking-wider uppercase mb-6"
          >
            <Award className="w-4 h-4" />
            Education & Certifications
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-800"
          >
            Training & Certificates
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Continuous learning and professional development through formal education, 
            industry certifications, and specialized training programs.
          </motion.p>
        </motion.div>

        {/* Featured Certificates Showcase */}
        <motion.div 
          className="mb-16 md:mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center"
            variants={fadeInUp}
          >
            Featured Certifications
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="group relative bg-white/90 backdrop-blur-sm p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -8 }}
                onHoverStart={() => setHoveredCert(cert.id)}
                onHoverEnd={() => setHoveredCert(null)}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-md transition-all duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className={`px-2 py-1 text-xs font-medium border ${getLevelColor(cert.level)}`}>
                          {cert.level}
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors duration-300">
                        {cert.title}
                      </h4>
                    </div>
                  </div>
                  
                  <p className="text-blue-600 font-semibold text-sm mb-1">{cert.provider}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs">{cert.duration}</span>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors duration-300" />
                      <span className="text-xs text-slate-500 group-hover:text-blue-600 transition-colors duration-300">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover indicator */}
                {hoveredCert === cert.id && (
                  <motion.div
                    className="absolute top-3 right-3 w-3 h-3 bg-blue-500 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section with Enhanced Design */}
        <motion.div 
          className="mb-16 md:mb-20"
          variants={slideInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="group relative bg-white/90 backdrop-blur-sm p-8 md:p-10 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
            {/* Enhanced Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-8">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${education.gradient} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <education.icon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 text-xs font-medium tracking-wider uppercase mb-3 border border-blue-200">
                    <GraduationCap className="w-3 h-3" />
                    Higher Education
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {education.degree}
                  </h3>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4 p-3 bg-blue-50 border border-blue-100 group-hover:bg-blue-100 transition-colors duration-300">
                      <Briefcase className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-slate-700">{education.institution}</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-green-50 border border-green-100 group-hover:bg-green-100 transition-colors duration-300">
                      <Calendar className="w-5 h-5 text-green-500" />
                      <span className="text-slate-700">{education.period}</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-purple-50 border border-purple-100 group-hover:bg-purple-100 transition-colors duration-300">
                      <Target className="w-5 h-5 text-purple-500" />
                      <span className="text-slate-700">{education.location}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mt-6 leading-relaxed text-base">{education.description}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                    <Star className="w-6 h-6 text-yellow-500" />
                    Key Learning Outcomes
                  </h4>
                  <ul className="space-y-4">
                    {education.achievements.map((achievement, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start gap-4 p-3 bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Awards Section with Enhanced Styling */}
        <motion.div 
          className="mb-16 md:mb-20"
          variants={slideInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
            Academic Excellence & Awards
          </h3>
          {awards.map((award, index) => (
            <motion.div 
              key={award.id}
              className="group relative bg-gradient-to-r from-yellow-50 to-orange-50 p-8 md:p-10 border border-yellow-200 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Enhanced Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-6 mb-6">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${award.gradient} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <award.icon className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
                      {award.title}
                    </h4>
                    <p className="text-orange-600 font-bold text-lg">{award.organization}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <p className="text-slate-600 font-medium">{award.date}</p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed text-lg">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Filter and Search */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`group relative flex items-center gap-3 px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white shadow-xl'
                      : 'bg-white/80 text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 hover:border-blue-300'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Glow effect for inactive buttons */}
                  {activeFilter !== category.id && (
                    <div className="absolute -inset-1 bg-blue-500/10 opacity-0 group-hover:opacity-100 rounded-lg blur transition-all duration-300"></div>
                  )}
                  
                  <category.icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{category.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Enhanced Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search certificates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg hover:shadow-xl transition-all duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Enhanced Certificates Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group relative bg-white/90 backdrop-blur-sm p-6 shadow-xl border border-white/50 hover:shadow-3xl transition-all duration-500"
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredCert(cert.id)}
              onHoverEnd={() => setHoveredCert(null)}
            >
              {/* Enhanced Glow Effect */}
              <div className={`absolute -inset-2 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-15 rounded-2xl blur-lg transition-all duration-500`}></div>
              
              <div className="relative z-10">
                {/* Certificate Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <cert.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-medium border ${getLevelColor(cert.level)} group-hover:scale-105 transition-transform duration-300`}>
                      <Award className="w-3 h-3" />
                      {cert.level}
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="mb-5">
                  <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-blue-500" />
                    <p className="text-blue-600 font-semibold text-sm">{cert.provider}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-green-500" />
                    <p className="text-slate-500 text-sm">{cert.duration}</p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{cert.description}</p>
                </div>

                {/* Enhanced Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium border hover:bg-slate-200 hover:shadow-md transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Certificate Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Completed
                  </div>
                  <div className="flex items-center gap-3">
                    <motion.button
                      className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-200" />
                      View
                    </motion.button>
                    <motion.button
                      className="flex items-center gap-1 text-xs text-green-600 hover:text-green-800 font-medium group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="w-3 h-3 group-hover/btn:scale-110 transition-transform duration-200" />
                      Download
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Hover indicator */}
              {hoveredCert === cert.id && (
                <motion.div
                  className="absolute top-3 right-3 w-2 h-2 bg-blue-500 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Summary Stats */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: certificates.length, label: 'Certificates Earned', icon: Award, color: 'text-blue-500', bg: 'from-blue-500/10 to-blue-600/10' },
            { number: '6', label: 'Years of Learning', icon: Calendar, color: 'text-green-500', bg: 'from-green-500/10 to-green-600/10' },
            { number: '200+', label: 'Study Hours', icon: Clock, color: 'text-purple-500', bg: 'from-purple-500/10 to-purple-600/10' },
            { number: '8', label: 'Technology Areas', icon: TrendingUp, color: 'text-orange-500', bg: 'from-orange-500/10 to-orange-600/10' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative text-center p-6 md:p-8 bg-white/80 backdrop-blur-sm border border-white/50 hover:bg-white/95 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Enhanced Glow Effect */}
              <div className={`absolute -inset-2 bg-gradient-to-br ${stat.bg} opacity-0 group-hover:opacity-100 rounded-2xl blur-lg transition-all duration-500`}></div>
              
              <div className="relative z-10">
                <stat.icon className={`w-8 h-8 md:w-10 md:h-10 ${stat.color} mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`} />
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-3 group-hover:scale-105 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-slate-600 font-medium leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingCertificates;