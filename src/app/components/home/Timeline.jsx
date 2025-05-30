'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
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
  GraduationCap,
  MapPin,
  Rocket,
  ShoppingCart,
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
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/30"
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
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-400/30"
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
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-400/30"
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
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-400/30"
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
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-400/30",
      link: "cherybd.vercel.app"
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
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-400/30"
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
      gradient: "from-green-600 to-blue-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-400/30"
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
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-400/30"
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
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-400/30"
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
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-400/30"
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
      gradient: "from-green-500 to-blue-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-400/30"
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
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-400/30"
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
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-400/30"
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

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-indigo-500/5 rounded-full blur-3xl"
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
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 mb-6"
          >
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-medium text-sm tracking-wider uppercase">
              My Journey
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent"
          >
            Professional Timeline
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Explore my professional journey, key projects, and major milestones that shaped my expertise in web development.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-md p-2 flex gap-2 flex-wrap justify-center">
            {[
              { id: 'career', label: 'Career' },
              { id: 'projects', label: 'Projects' },
              { id: 'milestones', label: 'Milestones' }
            ].map((tab) => {
              const TabIcon = getTabIcon(tab.id);
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 md:px-6 py-3 font-semibold transition-all duration-300 flex items-center gap-2 text-sm md:text-base ${
                    activeTab === tab.id 
                      ? 'bg-white text-slate-800 shadow-lg' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TabIcon className="w-4 h-4" />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Timeline Line - Desktop only */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-400 opacity-30 hidden lg:block" 
                 style={{ height: `${getCurrentData().length * 320}px` }}></div>

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {getCurrentData().map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:relative`}
                >
                  {/* Timeline Node - Desktop */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-2xl border-4 border-white/20`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-slate-800 px-3 py-1 text-sm font-bold shadow-lg">
                      {item.year}
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    className="lg:w-5/12 w-full"
                    whileHover={{ scale: 1.02, y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className={`bg-white/10 backdrop-blur-md p-6 md:p-8 shadow-2xl border border-white/20 cursor-pointer hover:bg-white/15 transition-all duration-300 ${
                        selectedItem === item.id ? 'bg-white/20' : ''
                      }`}
                      onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                    >
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} flex items-center justify-center lg:hidden flex-shrink-0`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 lg:hidden">
                            <Calendar className="w-4 h-4 text-blue-300" />
                            <span className="text-sm text-blue-300 font-semibold">{item.year}</span>
                          </div>
                          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-blue-200 font-semibold mb-1">{item.company}</p>
                          
                          <div className="flex flex-wrap items-center gap-4 text-sm text-blue-300">
                            {item.duration && (
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{item.duration}</span>
                              </div>
                            )}
                            {item.location && (
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                <span>{item.location}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <motion.div
                          animate={{ rotate: selectedItem === item.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0"
                        >
                          {selectedItem === item.id ? 
                            <ChevronUp className="w-5 h-5 text-blue-300" /> : 
                            <ChevronDown className="w-5 h-5 text-blue-300" />
                          }
                        </motion.div>
                      </div>
                      
                      <p className="text-blue-100 mb-4 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      {item.technologies && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.technologies.map((tech, i) => (
                            <span key={i} className="bg-white/20 text-white px-3 py-1 text-xs font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Link */}
                      {item.link && (
                        <motion.a 
                          href={`https://${item.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-semibold text-sm mb-4"
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.05 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </motion.a>
                      )}

                      {/* Expandable Achievements */}
                      <AnimatePresence>
                        {selectedItem === item.id && item.achievements && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pt-4 border-t border-white/20"
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <h4 className="text-base md:text-lg font-bold text-white">Key Achievements</h4>
                            </div>
                            <ul className="space-y-2">
                              {item.achievements.map((achievement, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-3 text-blue-100 text-sm"
                                >
                                  <div className="w-1.5 h-1.5 bg-blue-400 mt-2 flex-shrink-0"></div>
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="lg:w-5/12 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { number: '10+', label: 'Years Experience', icon: Award, color: 'text-yellow-400' },
            { number: '100+', label: 'Projects Delivered', icon: Target, color: 'text-green-400' },
            { number: '15+', label: 'Team Members Led', icon: Users, color: 'text-blue-400' },
            { number: '97%', label: 'Client Satisfaction', icon: TrendingUp, color: 'text-purple-400' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-200`} />
              <div className={`text-xl md:text-2xl lg:text-3xl font-bold ${stat.color} mb-1 group-hover:scale-105 transition-transform duration-200`}>
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-blue-200 font-light leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              Ready to Add Your Project to My Timeline?
            </h3>
            <p className="text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto text-base md:text-lg font-light">
              Let's create the next milestone together. I'm excited to bring your vision to life with cutting-edge technology and exceptional craftsmanship.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 font-bold text-sm md:text-base hover:bg-blue-50 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Our Journey Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;