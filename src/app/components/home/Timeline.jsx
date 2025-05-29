'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Timeline = () => {
  const [activeTab, setActiveTab] = useState('career');
  const [selectedItem, setSelectedItem] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
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
      description: "Leading full-stack development initiatives and managing complex web applications.",
      achievements: [
        "Built Chery Bangladesh website with 97% speed optimization",
        "Developed Car Parts E-commerce platform with 200% sales increase",
        "Managed deployment using Docker, Digital Ocean, and Google Cloud",
        "Led cross-functional teams in API development and integration"
      ],
      technologies: ["React.js", "Next.js", "PHP", "Laravel", "Docker", "AWS"],
      icon: "💼",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      year: "2018",
      title: "IT Manager",
      company: "Continental Motors",
      type: "management",
      duration: "2018 - Present",
      description: "Strategic IT operations management and infrastructure optimization.",
      achievements: [
        "Reduced IT operational costs by 40% through strategic optimization",
        "Implemented real-time attendance system with automated payroll",
        "Managed server infrastructure including Windows Server and VPS",
        "Established integrated call center for enhanced customer support"
      ],
      technologies: ["Windows Server", "VPS", "Network Management", "System Administration"],
      icon: "⚙️",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      year: "2018",
      title: "Sr. Software Developer",
      company: "Bengal Group of Industries",
      type: "development",
      duration: "Jan 2018 - Sep 2018",
      description: "Led development team and created scalable e-commerce solutions.",
      achievements: [
        "Led team of 15 developers with 25% client satisfaction increase",
        "Developed scalable Laravel-based e-commerce solutions",
        "Created Marlax Technologies with WHMCS integration",
        "Managed end-to-end project lifecycle using Agile methodologies"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "WHMCS"],
      icon: "🚀",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      year: "2017",
      title: "Bachelor of Arts (English)",
      company: "University of Dhaka",
      type: "education",
      duration: "2011 - 2017",
      description: "Completed comprehensive English literature and language studies.",
      achievements: [
        "Graduated with strong communication and critical thinking skills",
        "Enhanced written and verbal communication abilities",
        "Developed analytical and problem-solving capabilities",
        "Built foundation for technical documentation and client communication"
      ],
      technologies: ["Academic Research", "Writing", "Communication", "Analysis"],
      icon: "🎓",
      gradient: "from-orange-500 to-red-500"
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
      description: "Official website with 360° car viewer and exceptional performance optimization.",
      achievements: [
        "Achieved 97% speed optimization score",
        "Implemented 360-degree car model viewer",
        "Integrated CRM and Facebook Pixel",
        "Enhanced customer engagement with WhatsApp Business API"
      ],
      technologies: ["Next.js", "React.js", "CRM Integration", "Performance Optimization"],
      icon: "🚗",
      gradient: "from-blue-600 to-purple-600",
      link: "cherybd.vercel.app"
    },
    {
      id: 2,
      year: "2023",
      title: "OpenAI Counselling Chatbot",
      company: "Custom Development",
      type: "innovation",
      duration: "2 months",
      description: "WordPress plugin integrating ChatGPT for mental health counselling services.",
      achievements: [
        "Integrated OpenAI ChatGPT API",
        "Implemented Text-to-Speech functionality",
        "Created topic-based counselling system",
        "Added chat download and export features"
      ],
      technologies: ["WordPress", "OpenAI API", "ChatGPT", "Text-to-Speech"],
      icon: "🤖",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 3,
      year: "2023",
      title: "Car Parts E-commerce Platform",
      company: "Japan Parts Limited",
      type: "ecommerce",
      duration: "4 months",
      description: "Comprehensive e-commerce platform with advanced car parts specification system.",
      achievements: [
        "Built make, model, and year specification system",
        "Integrated WhatsApp Business API",
        "Implemented Facebook Pixel tracking",
        "Connected CRM for enhanced customer service"
      ],
      technologies: ["React.js", "PHP", "API Integration", "E-commerce"],
      icon: "🛒",
      gradient: "from-green-600 to-blue-600"
    },
    {
      id: 4,
      year: "2022",
      title: "SK Japan Export Platform",
      company: "Custom Development",
      type: "integration",
      duration: "3 months",
      description: "Custom Shopify app connecting with Japanese car auction systems.",
      achievements: [
        "Developed custom Shopify App using Laravel",
        "Connected with Japanese reconditioned car auctions",
        "Created Car Price Calculator with custom functionality",
        "Implemented automated pricing and cost evaluation"
      ],
      technologies: ["Laravel", "Shopify API", "Custom App Development", "Price Calculator"],
      icon: "🏭",
      gradient: "from-cyan-600 to-teal-600"
    },
    {
      id: 5,
      year: "2021",
      title: "Continental Motors Platform",
      company: "Continental Motors",
      type: "platform",
      duration: "5 months",
      description: "Comprehensive car listing platform with automated brochure generation.",
      achievements: [
        "Built car listing and filtering system",
        "Automated car brochure generation",
        "Customized email template referrals",
        "Enhanced user experience with advanced search"
      ],
      technologies: ["PHP", "Laravel", "PDF Generation", "Email Templates"],
      icon: "🏢",
      gradient: "from-orange-600 to-pink-600"
    }
  ];

  const milestones = [
    {
      id: 1,
      year: "2025",
      title: "10+ Years Milestone",
      description: "Celebrating over a decade of excellence in web development",
      icon: "🏆",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 2,
      year: "2024",
      title: "100+ Projects Completed",
      description: "Successfully delivered over 100 diverse WordPress and web projects",
      icon: "📈",
      gradient: "from-green-500 to-blue-500"
    },
    {
      id: 3,
      year: "2023",
      title: "AI Integration Pioneer",
      description: "Early adopter of AI technologies in web development solutions",
      icon: "🤖",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      year: "2020",
      title: "DevOps Mastery",
      description: "Achieved expertise in Docker, cloud deployment, and CI/CD pipelines",
      icon: "⚡",
      gradient: "from-cyan-500 to-teal-500"
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

  return (
    <section className="py-24 px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">
              My Journey
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent"
          >
            Timeline
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
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
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 flex gap-2">
            {[
              { id: 'career', label: 'Career', icon: '💼' },
              { id: 'projects', label: 'Projects', icon: '🚀' },
              { id: 'milestones', label: 'Milestones', icon: '🏆' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id 
                    ? 'bg-white text-slate-800 shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Timeline Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-indigo-400 opacity-30 hidden lg:block" 
                 style={{ height: `${getCurrentData().length * 400}px` }}></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {getCurrentData().map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:relative`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-2xl shadow-2xl border-4 border-white/20`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-slate-800 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      {item.year}
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    className="lg:w-5/12 w-full"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 cursor-pointer hover:bg-white/15 transition-all duration-300"
                      onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center text-xl lg:hidden`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm text-blue-300 font-semibold lg:hidden">{item.year}</div>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-blue-200 font-semibold">{item.company}</p>
                          {item.duration && (
                            <p className="text-blue-300 text-sm">{item.duration}</p>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-blue-100 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      {item.technologies && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.technologies.map((tech, i) => (
                            <span key={i} className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Link */}
                      {item.link && (
                        <a 
                          href={`https://${item.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-300 hover:text-blue-200 font-semibold text-sm"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Project 
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}

                      {/* Expandable Achievements */}
                      <AnimatePresence>
                        {selectedItem === item.id && item.achievements && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6 pt-6 border-t border-white/20"
                          >
                            <h4 className="text-lg font-bold text-white mb-3">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {item.achievements.map((achievement, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-3 text-blue-100 text-sm"
                                >
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
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

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Ready to Add Your Project to My Timeline?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Let's create the next milestone together. I'm excited to bring your vision to life with cutting-edge technology and exceptional craftsmanship.
          </p>
          <motion.button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Start Our Journey Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;