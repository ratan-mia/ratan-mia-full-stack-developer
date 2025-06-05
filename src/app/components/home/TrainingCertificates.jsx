'use client';

import { AnimatePresence, motion } from 'framer-motion';
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
  Trophy,
  User
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

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Compact Education data
  const education = {
    degree: "Bachelor of Arts (English)",
    institution: "University of Dhaka",
    period: "2011 – 2017",
    location: "Dhaka, Bangladesh",
    description: "Enhanced communication and critical thinking skills essential for technical documentation and client interaction.",
    achievements: [
      "Enhanced communication abilities",
      "Developed analytical capabilities", 
      "Built technical documentation foundation",
      "Improved client interaction skills"
    ],
    icon: GraduationCap,
    gradient: "from-blue-600 to-indigo-600"
  };

  // Compact Awards data
  const awards = [
    {
      id: 1,
      title: "Junior Scholarship",
      organization: "Dhaka Education Board",
      date: "September 2008",
      description: "Secured top position demonstrating academic excellence and commitment to continuous learning.",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-500",
      category: "academic"
    }
  ];

  // Compact Certificates data
  const certificates = [
    {
      id: 1,
      title: "Complete React.js Course",
      provider: "Udemy",
      category: "frontend",
      skills: ["React.js", "JavaScript", "Frontend"],
      description: "Comprehensive React course covering fundamentals to advanced concepts.",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      level: "Advanced",
      duration: "40h",
      featured: true
    },
    {
      id: 2,
      title: "Modern JavaScript for React",
      provider: "Udemy",
      category: "frontend",
      skills: ["JavaScript ES6+", "React.js"],
      description: "Modern ES6+ features essential for React development.",
      icon: Code,
      gradient: "from-yellow-500 to-orange-500",
      level: "Intermediate",
      duration: "25h",
      featured: false
    },
    {
      id: 3,
      title: "Advanced PHP Debugging",
      provider: "LinkedIn Learning",
      category: "backend",
      skills: ["PHP", "Debugging"],
      description: "Advanced debugging techniques for PHP applications.",
      icon: Server,
      gradient: "from-purple-500 to-indigo-500",
      level: "Advanced",
      duration: "3h",
      featured: false
    },
    {
      id: 4,
      title: "PHP & MySQL CRUD",
      provider: "Udemy",
      category: "backend",
      skills: ["PHP", "MySQL", "CRUD"],
      description: "Complete guide to database-driven applications.",
      icon: Database,
      gradient: "from-green-500 to-teal-500",
      level: "Intermediate",
      duration: "15h",
      featured: true
    },
    {
      id: 5,
      title: "Node.js & Express Development",
      provider: "IBM",
      category: "backend",
      skills: ["Node.js", "Express.js", "API"],
      description: "Professional backend development with Node.js.",
      icon: Server,
      gradient: "from-green-600 to-blue-600",
      level: "Professional",
      duration: "20h",
      featured: true
    },
    {
      id: 6,
      title: "PHP & MySQL Complete Guide",
      provider: "Udemy",
      category: "backend",
      skills: ["PHP", "MySQL"],
      description: "Comprehensive PHP and MySQL web development.",
      icon: Database,
      gradient: "from-purple-600 to-pink-600",
      level: "Complete",
      duration: "50h",
      featured: false
    },
    {
      id: 7,
      title: "JavaScript Basics to Advanced",
      provider: "Udemy",
      category: "frontend",
      skills: ["JavaScript", "DOM", "ES6+"],
      description: "Complete JavaScript programming concepts.",
      icon: Code,
      gradient: "from-yellow-600 to-red-600",
      level: "Complete",
      duration: "30h",
      featured: false
    },
    {
      id: 8,
      title: "Docker for Beginners",
      provider: "Udemy",
      category: "devops",
      skills: ["Docker", "Containerization"],
      description: "Introduction to containerization and Docker.",
      icon: Shield,
      gradient: "from-cyan-500 to-blue-500",
      level: "Beginner",
      duration: "10h",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: Award },
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
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-blue-600 bg-blue-100';
      case 'Advanced': return 'text-purple-600 bg-purple-100';
      case 'Professional': return 'text-indigo-600 bg-indigo-100';
      case 'Complete': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="certificates" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
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
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Improved Typography */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-orange-200/50 text-orange-800 px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider mb-6 shadow-lg"
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Education & Certifications</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Learning Journey
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Continuous growth through formal education, industry certifications, and specialized training programs.
          </motion.p>

          {/* Stats with Improved Typography */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto"
          >
            {[
              { number: certificates.length, label: 'Certificates', icon: Award, color: 'text-blue-500' },
              { number: '6+', label: 'Years Learning', icon: Calendar, color: 'text-green-500' },
              { number: '200+', label: 'Study Hours', icon: Clock, color: 'text-purple-500' },
              { number: '8', label: 'Tech Areas', icon: TrendingUp, color: 'text-orange-500' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
                <div className={`text-xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Certificates with Improved Typography */}
        <motion.div 
          className="mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center"
            variants={fadeInUp}
          >
            Featured Certifications
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {featuredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                onHoverStart={() => setHoveredCert(cert.id)}
                onHoverEnd={() => setHoveredCert(null)}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getLevelColor(cert.level)}`}>
                        {cert.level}
                      </span>
                      <Star className="w-3 h-3 text-yellow-500" />
                    </div>
                  </div>
                </div>
                
                <h4 className="font-bold text-gray-900 text-base md:text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {cert.title}
                </h4>
                <p className="text-blue-600 font-semibold text-sm md:text-base mb-2">{cert.provider}</p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3 line-clamp-2">
                  {cert.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm font-medium">{cert.duration}</span>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-300 font-medium">
                      Details
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Award Section with Improved Typography */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-6 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Education */}
          <motion.div 
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-xl"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${education.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                <education.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 text-xs font-semibold rounded-full mb-2">
                  <GraduationCap className="w-3 h-3" />
                  Higher Education
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  {education.degree}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 mb-4">
              <div className="flex items-center gap-3 p-2 bg-blue-50 rounded-lg">
                <Briefcase className="w-4 h-4 text-blue-500" />
                <span className="text-sm md:text-base font-semibold text-gray-800">{education.institution}</span>
              </div>
              <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                <Calendar className="w-4 h-4 text-green-500" />
                <span className="text-sm md:text-base text-gray-700 font-medium">{education.period}</span>
              </div>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{education.description}</p>
            
            <div className="space-y-2">
              {education.achievements.slice(0, 3).map((achievement, index) => (
                <div key={index} className="flex items-start gap-2 text-sm md:text-base">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
              {education.achievements.length > 3 && (
                <div className="text-sm text-gray-500 ml-5 font-medium">+{education.achievements.length - 3} more outcomes</div>
              )}
            </div>
          </motion.div>

          {/* Award */}
          <motion.div 
            className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200 shadow-xl"
            variants={fadeInUp}
          >
            {awards.map((award, index) => (
              <div key={award.id}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${award.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    <award.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 text-xs font-semibold rounded-full mb-2">
                      <Trophy className="w-3 h-3" />
                      Academic Award
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {award.title}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg">
                    <Target className="w-4 h-4 text-orange-500" />
                    <span className="text-sm md:text-base font-semibold text-gray-800">{award.organization}</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-yellow-50 rounded-lg">
                    <Calendar className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm md:text-base text-gray-700 font-medium">{award.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{award.description}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Filter and Search with Improved Typography */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-3 md:px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white/80 backdrop-blur-md text-gray-700 hover:bg-white hover:text-blue-600 border border-white/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search certificates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/90 backdrop-blur-md border border-white/50 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-sm"
              />
            </div>
          </div>
        </motion.div>

        {/* Certificates Grid with Improved Typography */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -3, scale: 1.02 }}
                onHoverStart={() => setHoveredCert(cert.id)}
                onHoverEnd={() => setHoveredCert(null)}
                transition={{ delay: index * 0.05 }}
              >
                {/* Certificate Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-lg ${getLevelColor(cert.level)}`}>
                      <Award className="w-3 h-3" />
                      {cert.level}
                    </div>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="mb-3">
                  <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                    {cert.title}
                  </h4>
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-3 h-3 text-blue-500" />
                    <p className="text-blue-600 font-semibold text-sm">{cert.provider}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-3 h-3 text-green-500" />
                    <p className="text-gray-500 text-sm font-medium">{cert.duration}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{cert.description}</p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {cert.skills.slice(0, 2).map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-lg">
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                      +{cert.skills.length - 2}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <CheckCircle className="w-3 h-3 text-green-500" />
                    <span className="font-medium">Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.button
                      className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Eye className="w-3 h-3" />
                      View
                    </motion.button>
                    <motion.button
                      className="flex items-center gap-1 text-sm text-green-600 hover:text-green-800 font-semibold"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Download className="w-3 h-3" />
                      Get
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action with Improved Typography */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, 25, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Committed to staying current with latest technologies and best practices through ongoing education.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <User className="w-5 h-5" />
                  <span>Work Together</span>
                </motion.a>

                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-5 h-5" />
                  <span>View Projects</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingCertificates;