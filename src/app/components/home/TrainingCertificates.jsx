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
    ExternalLink,
    Globe,
    GraduationCap,
    Search,
    Server,
    Shield,
    Star,
    Target,
    Trophy
} from 'lucide-react';
import { useState } from 'react';

const TrainingCertificates = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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

  // Certificates data from resume
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
      duration: "40+ hours"
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
      duration: "25+ hours"
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
      duration: "3 hours"
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
      duration: "15+ hours"
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
      duration: "20+ hours"
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
      duration: "50+ hours"
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
      duration: "30+ hours"
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
      duration: "10+ hours"
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

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-blue-600 bg-blue-100';
      case 'Advanced': return 'text-purple-600 bg-purple-100';
      case 'Professional': return 'text-indigo-600 bg-indigo-100';
      case 'Complete': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
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

        {/* Education Section */}
        <motion.div 
          className="mb-16 md:mb-20"
          variants={slideInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-xl border border-white/50">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${education.gradient} flex items-center justify-center text-white`}>
                <education.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 text-xs font-medium tracking-wider uppercase mb-2">
                  Higher Education
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">{education.degree}</h3>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Briefcase className="w-4 h-4 text-blue-500" />
                    <span className="font-semibold">{education.institution}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Target className="w-4 h-4 text-purple-500" />
                    <span>{education.location}</span>
                  </div>
                </div>
                <p className="text-slate-600 mt-4 leading-relaxed">{education.description}</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Key Learning Outcomes
                </h4>
                <ul className="space-y-3">
                  {education.achievements.map((achievement, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3 text-slate-600"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div 
          className="mb-16 md:mb-20"
          variants={slideInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
            Academic Excellence
          </h3>
          {awards.map((award, index) => (
            <motion.div 
              key={award.id}
              className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm p-6 md:p-8 border border-yellow-400/30"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -3 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${award.gradient} flex items-center justify-center text-white`}>
                  <award.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-800">{award.title}</h4>
                  <p className="text-orange-600 font-semibold">{award.organization}</p>
                  <p className="text-slate-600 text-sm">{award.date}</p>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter and Search */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search certificates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="bg-white/80 backdrop-blur-sm p-6 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Certificate Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}>
                  <cert.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className={`inline-block px-2 py-1 text-xs font-medium ${getLevelColor(cert.level)}`}>
                    {cert.level}
                  </div>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="mb-4">
                <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {cert.title}
                </h4>
                <p className="text-blue-600 font-semibold text-sm mb-1">{cert.provider}</p>
                <p className="text-slate-500 text-xs mb-3">{cert.duration}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{cert.description}</p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Certificate Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  Completed
                </div>
                <motion.button
                  className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                  <ExternalLink className="w-3 h-3" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div 
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: certificates.length, label: 'Certificates Earned', icon: Award, color: 'text-blue-500' },
            { number: '6', label: 'Years of Learning', icon: Calendar, color: 'text-green-500' },
            { number: '200+', label: 'Study Hours', icon: Clock, color: 'text-purple-500' },
            { number: '8', label: 'Technology Areas', icon: Code, color: 'text-orange-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 md:p-6 bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-200`} />
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1 group-hover:scale-105 transition-transform duration-200`}>
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-slate-600 font-light leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingCertificates;