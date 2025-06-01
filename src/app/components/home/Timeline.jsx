'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Bot,
  Briefcase,
  Building2,
  Calendar,
  Car,
  ChevronDown,
  ChevronUp,
  Clock,
  Code2,
  ExternalLink,
  Factory,
  Globe,
  GraduationCap,
  MapPin,
  Rocket,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const Timeline = () => {
  const [activeTab, setActiveTab] = useState('career');
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" }
    }
  };

  const careerTimeline = [
    {
      id: 1,
      year: "2025",
      title: "Senior Full Stack Developer",
      company: "Kawasaki Bangladesh",
      type: "current",
      duration: "2018 - Present",
      location: "Dhaka, Bangladesh",
      description: "Leading full-stack development initiatives and managing complex web applications with modern technologies.",
      achievements: [
        "Built Chery Bangladesh website with 97% speed optimization",
        "Developed Car Parts E-commerce platform with 200% sales increase",
        "Managed deployment using Docker, Digital Ocean, and Google Cloud",
        "Led cross-functional teams in API development and integration"
      ],
      technologies: ["React.js", "Next.js", "PHP", "Laravel", "Docker", "AWS"],
      icon: Briefcase,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10 dark:bg-blue-400/10",
      borderColor: "border-blue-400/30 dark:border-blue-300/30",
      glowColor: "shadow-blue-500/20"
    },
    {
      id: 2,
      year: "2018",
      title: "IT Manager",
      company: "Continental Motors",
      type: "management",
      duration: "2018 - Present",
      location: "Dhaka, Bangladesh",
      description: "Strategic IT operations management and infrastructure optimization for automotive industry solutions.",
      achievements: [
        "Reduced IT operational costs by 40% through strategic optimization",
        "Implemented real-time attendance system with automated payroll",
        "Managed server infrastructure including Windows Server and VPS",
        "Established integrated call center for enhanced customer support"
      ],
      technologies: ["Windows Server", "VPS", "Network Management", "System Administration"],
      icon: Building2,
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10 dark:bg-purple-400/10",
      borderColor: "border-purple-400/30 dark:border-purple-300/30",
      glowColor: "shadow-purple-500/20"
    },
    {
      id: 3,
      year: "2018",
      title: "Sr. Software Developer",
      company: "Bengal Group of Industries",
      type: "development",
      duration: "Jan 2018 - Sep 2018",
      location: "Dhaka, Bangladesh",
      description: "Led development team and created scalable e-commerce solutions for diverse business requirements.",
      achievements: [
        "Led team of 15 developers with 25% client satisfaction increase",
        "Developed scalable Laravel-based e-commerce solutions",
        "Created Marlax Technologies with WHMCS integration",
        "Managed end-to-end project lifecycle using Agile methodologies"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "WHMCS"],
      icon: Code2,
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10 dark:bg-emerald-400/10",
      borderColor: "border-emerald-400/30 dark:border-emerald-300/30",
      glowColor: "shadow-emerald-500/20"
    },
    {
      id: 4,
      year: "2017",
      title: "Bachelor of Arts (English)",
      company: "University of Dhaka",
      type: "education",
      duration: "2011 - 2017",
      location: "Dhaka, Bangladesh",
      description: "Completed comprehensive English literature and language studies with focus on communication skills.",
      achievements: [
        "Graduated with strong communication and critical thinking skills",
        "Enhanced written and verbal communication abilities",
        "Developed analytical and problem-solving capabilities",
        "Built foundation for technical documentation and client communication"
      ],
      technologies: ["Academic Research", "Writing", "Communication", "Analysis"],
      icon: GraduationCap,
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10 dark:bg-orange-400/10",
      borderColor: "border-orange-400/30 dark:border-orange-300/30",
      glowColor: "shadow-orange-500/20"
    }
  ];

  const projectTimeline = [
    {
      id: 1,
      year: "2024",
      title: "Chery Bangladesh Website",
      company: "Kawasaki Bangladesh",
      type: "featured",
      duration: "3 months",
      location: "Remote",
      description: "Official automotive website with 360° car viewer and exceptional performance optimization.",
      achievements: [
        "Achieved 97% speed optimization score",
        "Implemented 360-degree car model viewer",
        "Integrated CRM and Facebook Pixel",
        "Enhanced customer engagement with WhatsApp Business API"
      ],
      technologies: ["Next.js", "React.js", "CRM Integration", "Performance Optimization"],
      icon: Car,
      gradient: "from-blue-600 to-purple-600",
      bgColor: "bg-blue-500/10 dark:bg-blue-400/10",
      borderColor: "border-blue-400/30 dark:border-blue-300/30",
      glowColor: "shadow-blue-500/20",
      link: "cherybd.vercel.app",
      featured: true
    },
    {
      id: 2,
      year: "2023",
      title: "OpenAI Counselling Chatbot",
      company: "Custom Development",
      type: "innovation",
      duration: "2 months",
      location: "Remote",
      description: "WordPress plugin integrating ChatGPT for mental health counselling services.",
      achievements: [
        "Integrated OpenAI ChatGPT API",
        "Implemented Text-to-Speech functionality",
        "Created topic-based counselling system",
        "Added chat download and export features"
      ],
      technologies: ["WordPress", "OpenAI API", "ChatGPT", "Text-to-Speech"],
      icon: Bot,
      gradient: "from-indigo-600 to-purple-600",
      bgColor: "bg-indigo-500/10 dark:bg-indigo-400/10",
      borderColor: "border-indigo-400/30 dark:border-indigo-300/30",
      glowColor: "shadow-indigo-500/20"
    },
    {
      id: 3,
      year: "2023",
      title: "Car Parts E-commerce Platform",
      company: "Japan Parts Limited",
      type: "ecommerce",
      duration: "4 months",
      location: "Remote",
      description: "Comprehensive e-commerce platform with advanced car parts specification system.",
      achievements: [
        "Built make, model, and year specification system",
        "Integrated WhatsApp Business API",
        "Implemented Facebook Pixel tracking",
        "Connected CRM for enhanced customer service"
      ],
      technologies: ["React.js", "PHP", "API Integration", "E-commerce"],
      icon: ShoppingCart,
      gradient: "from-emerald-600 to-blue-600",
      bgColor: "bg-emerald-500/10 dark:bg-emerald-400/10",
      borderColor: "border-emerald-400/30 dark:border-emerald-300/30",
      glowColor: "shadow-emerald-500/20"
    },
    {
      id: 4,
      year: "2022",
      title: "SK Japan Export Platform",
      company: "Custom Development",
      type: "integration",
      duration: "3 months",
      location: "Remote",
      description: "Custom Shopify app connecting with Japanese car auction systems.",
      achievements: [
        "Developed custom Shopify App using Laravel",
        "Connected with Japanese reconditioned car auctions",
        "Created Car Price Calculator with custom functionality",
        "Implemented automated pricing and cost evaluation"
      ],
      technologies: ["Laravel", "Shopify API", "Custom App Development", "Price Calculator"],
      icon: Factory,
      gradient: "from-cyan-600 to-teal-600",
      bgColor: "bg-cyan-500/10 dark:bg-cyan-400/10",
      borderColor: "border-cyan-400/30 dark:border-cyan-300/30",
      glowColor: "shadow-cyan-500/20"
    },
    {
      id: 5,
      year: "2021",
      title: "Continental Motors Platform",
      company: "Continental Motors",
      type: "platform",
      duration: "5 months",
      location: "Dhaka, Bangladesh",
      description: "Comprehensive car listing platform with automated brochure generation.",
      achievements: [
        "Built car listing and filtering system",
        "Automated car brochure generation",
        "Customized email template referrals",
        "Enhanced user experience with advanced search"
      ],
      technologies: ["PHP", "Laravel", "PDF Generation", "Email Templates"],
      icon: Building2,
      gradient: "from-orange-600 to-pink-600",
      bgColor: "bg-orange-500/10 dark:bg-orange-400/10",
      borderColor: "border-orange-400/30 dark:border-orange-300/30",
      glowColor: "shadow-orange-500/20"
    }
  ];

  const milestones = [
    {
      id: 1,
      year: "2025",
      title: "10+ Years Milestone",
      company: "Professional Achievement",
      description: "Celebrating over a decade of excellence in web development with continuous innovation.",
      achievements: [
        "Completed 100+ successful projects",
        "Maintained 97% client satisfaction rate",
        "Mastered modern web technologies",
        "Built strong industry reputation"
      ],
      icon: Trophy,
      gradient: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10 dark:bg-amber-400/10",
      borderColor: "border-amber-400/30 dark:border-amber-300/30",
      glowColor: "shadow-amber-500/20"
    },
    {
      id: 2,
      year: "2024",
      title: "100+ Projects Completed",
      company: "Portfolio Milestone",
      description: "Successfully delivered over 100 diverse WordPress and web projects across multiple industries.",
      achievements: [
        "Diverse project portfolio spanning multiple industries",
        "Consistent delivery and quality standards",
        "Strong client relationships and referrals",
        "Technical expertise across multiple platforms"
      ],
      icon: Target,
      gradient: "from-emerald-500 to-blue-500",
      bgColor: "bg-emerald-500/10 dark:bg-emerald-400/10",
      borderColor: "border-emerald-400/30 dark:border-emerald-300/30",
      glowColor: "shadow-emerald-500/20"
    },
    {
      id: 3,
      year: "2023",
      title: "AI Integration Pioneer",
      company: "Technology Innovation",
      description: "Early adopter of AI technologies in web development solutions for enhanced user experiences.",
      achievements: [
        "First to integrate OpenAI in local market",
        "Pioneered AI-powered web solutions",
        "Created innovative chatbot systems",
        "Established expertise in AI integration"
      ],
      icon: Bot,
      gradient: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-500/10 dark:bg-purple-400/10",
      borderColor: "border-purple-400/30 dark:border-purple-300/30",
      glowColor: "shadow-purple-500/20"
    },
    {
      id: 4,
      year: "2020",
      title: "DevOps Mastery",
      company: "Technical Achievement",
      description: "Achieved expertise in Docker, cloud deployment, and CI/CD pipelines for modern development workflows.",
      achievements: [
        "Mastered containerization with Docker",
        "Implemented CI/CD pipelines",
        "Expertise in cloud deployment",
        "Modern development workflow optimization"
      ],
      icon: Zap,
      gradient: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-500/10 dark:bg-cyan-400/10",
      borderColor: "border-cyan-400/30 dark:border-cyan-300/30",
      glowColor: "shadow-cyan-500/20"
    }
  ];

  const getCurrentData = () => {
    switch(activeTab) {
      case 'career': return careerTimeline;
      case 'projects': return projectTimeline;
      case 'milestones': return milestones;
      default: return careerTimeline;
    }
  };

  const getTabIcon = (tabId) => {
    switch(tabId) {
      case 'career': return Briefcase;
      case 'projects': return Rocket;
      case 'milestones': return Trophy;
      default: return Briefcase;
    }
  };

  const getTabColor = (tabId) => {
    switch(tabId) {
      case 'career': return 'from-blue-500 to-cyan-500';
      case 'projects': return 'from-purple-500 to-pink-500';
      case 'milestones': return 'from-amber-500 to-orange-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  return (
    <section className="py-20 md:py-32 lg:py-40 px-6 md:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Decorative Dots Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-blue-300 rounded-full"></div>
          <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-purple-300 rounded-full"></div>
          <div className="absolute bottom-20 right-40 w-1 h-1 bg-cyan-300 rounded-full"></div>
          <div className="absolute top-1/2 left-20 w-1 h-1 bg-pink-300 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-indigo-300 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-blue-300 px-6 py-3 rounded-full font-semibold text-sm tracking-wider uppercase mb-8 shadow-2xl border border-white/20"
          >
            <Calendar className="w-4 h-4" />
            My Journey
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent"
          >
            Professional Timeline
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Explore my professional journey, breakthrough projects, and significant milestones that shaped my expertise in modern web development
          </motion.p>
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 flex gap-2 flex-wrap justify-center shadow-2xl border border-white/20">
            {[
              { id: 'career', label: 'Career Path' },
              { id: 'projects', label: 'Key Projects' },
              { id: 'milestones', label: 'Milestones' }
            ].map((tab) => {
              const TabIcon = getTabIcon(tab.id);
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 text-sm md:text-base relative overflow-hidden ${
                    isActive 
                      ? 'bg-white text-slate-800 shadow-xl' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${getTabColor(tab.id)} opacity-10`}
                      layoutId="activeTab"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <TabIcon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced Timeline Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Enhanced Timeline Line - Desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:block" 
                 style={{ height: `${getCurrentData().length * 400}px` }}>
              <div className="w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 via-pink-400 to-cyan-400 opacity-50 rounded-full shadow-lg"></div>
              <motion.div
                className="w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 via-pink-500 to-cyan-500 rounded-full"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              ></motion.div>
            </div>

            {/* Enhanced Timeline Items */}
            <div className="space-y-12 lg:space-y-16">
              {getCurrentData().map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:relative`}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Enhanced Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
                    <motion.div
                      variants={nodeVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="relative"
                    >
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/30 relative z-10`}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        animate={{ 
                          boxShadow: hoveredCard === item.id 
                            ? `0 0 30px rgba(59, 130, 246, 0.5)` 
                            : `0 0 20px rgba(0, 0, 0, 0.3)`
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                        {item.featured && (
                          <motion.div
                            className="absolute -top-2 -right-2 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-3 h-3 text-white" />
                          </motion.div>
                        )}
                      </motion.div>
                      
                      {/* Year Badge */}
                      <motion.div 
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-bold shadow-xl border border-slate-200"
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {item.year}
                      </motion.div>
                      
                      {/* Connecting Line */}
                      <div className={`absolute top-1/2 ${index % 2 === 0 ? 'left-16' : 'right-16'} w-8 h-0.5 bg-gradient-to-r ${item.gradient} transform -translate-y-1/2`}></div>
                    </motion.div>
                  </div>

                  {/* Enhanced Content Card */}
                  <motion.div 
                    className="lg:w-5/12 w-full"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`bg-white/10 backdrop-blur-md rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/20 cursor-pointer transition-all duration-500 relative overflow-hidden group ${
                        selectedItem === item.id ? 'bg-white/20 shadow-3xl' : 'hover:bg-white/15'
                      } ${hoveredCard === item.id ? item.glowColor : ''}`}
                      onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                      animate={{
                        borderColor: hoveredCard === item.id ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl lg:rounded-3xl`}></div>
                      
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6 relative z-10">
                        <motion.div 
                          className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center lg:hidden flex-shrink-0 shadow-xl`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <item.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3 lg:hidden">
                            <Calendar className="w-4 h-4 text-blue-300" />
                            <span className="text-sm text-blue-300 font-semibold px-3 py-1 bg-blue-500/20 rounded-full">
                              {item.year}
                            </span>
                          </div>
                          
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                                {item.title}
                              </h3>
                              <p className="text-blue-200 font-semibold text-lg mb-3">{item.company}</p>
                            </div>
                            
                            {item.featured && (
                              <motion.div
                                className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                FEATURED
                              </motion.div>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-blue-300 mb-4">
                            {item.duration && (
                              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                                <Clock className="w-3 h-3" />
                                <span>{item.duration}</span>
                              </div>
                            )}
                            {item.location && (
                              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                                <MapPin className="w-3 h-3" />
                                <span>{item.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <motion.div
                          animate={{ rotate: selectedItem === item.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                        >
                          {selectedItem === item.id ? 
                            <ChevronUp className="w-5 h-5 text-blue-300" /> : 
                            <ChevronDown className="w-5 h-5 text-blue-300" />
                          }
                        </motion.div>
                      </div>
                      
                      <p className="text-blue-100 mb-6 leading-relaxed text-base lg:text-lg relative z-10">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      {item.technologies && (
                        <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                          {item.technologies.map((tech, i) => (
                            <motion.span 
                              key={i} 
                              className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30 hover:bg-white/30 transition-colors duration-200"
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      )}

                      {/* Project Link */}
                      {item.link && (
                        <motion.a 
                          href={`https://${item.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-semibold text-sm mb-6 px-4 py-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-all duration-200 relative z-10"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Globe className="w-4 h-4" />
                          View Project
                          <ExternalLink className="w-3 h-3" />
                        </motion.a>
                      )}

                      {/* Expandable Achievements */}
                      <AnimatePresence>
                        {selectedItem === item.id && item.achievements && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="pt-6 border-t border-white/20 relative z-10"
                          >
                            <div className="flex items-center gap-3 mb-6">
                              <Star className="w-5 h-5 text-amber-400" />
                              <h4 className="text-lg lg:text-xl font-bold text-white">Key Achievements</h4>
                            </div>
                            <div className="grid gap-3">
                              {item.achievements.map((achievement, i) => (
                                <motion.div 
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-colors duration-200"
                                >
                                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-blue-100 text-sm lg:text-base leading-relaxed">{achievement}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="lg:w-5/12 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { number: '10+', label: 'Years Experience', icon: Award, color: 'text-amber-400', gradient: 'from-amber-500 to-orange-500' },
            { number: '100+', label: 'Projects Delivered', icon: Target, color: 'text-emerald-400', gradient: 'from-emerald-500 to-teal-500' },
            { number: '15+', label: 'Team Members Led', icon: Users, color: 'text-blue-400', gradient: 'from-blue-500 to-cyan-500' },
            { number: '97%', label: 'Client Satisfaction', icon: TrendingUp, color: 'text-purple-400', gradient: 'from-purple-500 to-pink-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 lg:p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -6 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              <motion.div
                className={`w-12 h-12 lg:w-16 lg:h-16 ${stat.color} mx-auto mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}
                whileHover={{ rotate: 5 }}
              >
                <stat.icon className="w-full h-full" />
              </motion.div>
              
              <motion.div 
                className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${stat.color} mb-2 lg:mb-3 group-hover:scale-105 transition-transform duration-300 relative z-10`}
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              
              <div className="text-sm lg:text-base text-blue-200 font-medium leading-relaxed relative z-10">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center mt-20 lg:mt-24"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-12 xl:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6"
                whileHover={{ scale: 1.02 }}
              >
                Ready to Create the Next Milestone?
              </motion.h3>
              
              <p className="text-blue-100 mb-8 lg:mb-10 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed">
                Let's collaborate to build something extraordinary that will become the next highlight in both our professional timelines
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket className="w-6 h-6" />
                  Start Our Journey
                </motion.button>
                
                <motion.button
                  className="inline-flex items-center gap-3 bg-transparent border-2 border-white/50 text-white px-8 lg:px-10 py-4 lg:py-5 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-6 h-6" />
                  View Portfolio
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;