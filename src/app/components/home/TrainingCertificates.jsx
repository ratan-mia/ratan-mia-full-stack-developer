'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { Award, BookOpen, Code, Database, Globe, GraduationCap, Minus, Plus, Smartphone } from 'lucide-react';
import { useRef, useState } from 'react';

// --- Accordion Item Component ---
const AccordionItem = ({ item, index, expanded, onToggle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isOpen = index === expanded;
  const accentColor = index % 2 === 0 ? 'text-accent-lime' : 'text-accent-orange';
  const bgColor = index % 2 === 0 ? 'bg-accent-lime' : 'bg-accent-orange';

  const getTypeIcon = (type) => {
    switch(type) {
      case 'certificate': return BookOpen;
      case 'award': return Award;
      case 'ibm': return Code;
      default: return BookOpen;
    }
  };

  const TypeIcon = getTypeIcon(item.type);

  return (
    <motion.div 
      ref={ref}
      className="border-b border-gray-200 group hover:bg-gray-50/50 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
    >
      <motion.header
        onClick={() => onToggle(isOpen ? false : index)}
        className="flex justify-between items-center cursor-pointer py-6 lg:py-8 group-hover:py-8 transition-all duration-300"
        whileHover={{ x: 4 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Type Icon */}
          <motion.div 
            className={`w-12 h-12 rounded-xl ${isOpen ? bgColor : 'bg-gray-200'} flex items-center justify-center transition-all duration-300`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <TypeIcon className={`w-6 h-6 ${isOpen ? 'text-white' : 'text-gray-600'}`} />
          </motion.div>
          
          {/* Number and Title */}
          <div>
            <span className="text-gray-400 font-mono text-sm block mb-1">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className={`text-xl lg:text-2xl xl:text-3xl font-bold transition-colors duration-300 ${
              isOpen ? accentColor : 'text-black group-hover:text-gray-700'
            }`}>
              {item.title}
            </h3>
          </div>
        </div>
        
        {/* Toggle Button */}
        <motion.div 
          className={`w-10 h-10 rounded-lg ${isOpen ? bgColor : 'bg-gray-100'} flex items-center justify-center transition-all duration-300`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <Minus className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-gray-600'}`} />
            ) : (
              <Plus className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-gray-600'}`} />
            )}
          </motion.div>
        </motion.div>
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 lg:pb-12 grid md:grid-cols-3 gap-6 lg:gap-8 pl-16">
              <div className="md:col-span-2">
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-6">
                  {item.description}
                </p>
                {item.skills && (
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map(skill => (
                      <motion.span 
                        key={skill} 
                        className="px-4 py-2 bg-gray-100 hover:bg-accent-lime hover:text-black text-gray-700 text-sm font-semibold rounded-xl border border-gray-200 hover:border-accent-lime transition-all duration-300 cursor-default"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                )}
                {item.highlights && (
                  <div className="mt-6">
                    <h4 className="font-bold text-black mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-accent-lime mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="text-left md:text-right">
                <div className="space-y-2">
                  <p className="font-bold text-black text-lg">
                    {item.provider || item.organization}
                  </p>
                  <p className="text-gray-500 font-medium">
                    {item.duration || item.date}
                  </p>
                  {item.credential && (
                    <div className="inline-flex items-center gap-2 bg-accent-lime/10 px-3 py-1 rounded-lg">
                      <Award className="w-4 h-4 text-accent-lime" />
                      <span className="text-accent-lime font-medium text-sm">
                        {item.credential}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Provider Logo Component ---
const ProviderLogo = ({ provider, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      className="bg-gray-50 hover:bg-white border border-gray-200 hover:border-accent-lime/30 p-6 rounded-xl flex flex-col items-center justify-center text-center h-32 transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{ scale: 1.05, y: -4 }}
    >
      <provider.icon className={`w-8 h-8 ${provider.color} mb-2 group-hover:scale-110 transition-transform`} />
      <p className="font-bold text-gray-700 group-hover:text-gray-900 transition-colors">{provider.name}</p>
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const TrainingCertificates = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const educationRef = useRef(null);
  
  const sectionInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const educationInView = useInView(educationRef, { once: true, margin: "-100px" });
  
  const [expanded, setExpanded] = useState(0);

  // Education data
  const education = {
    degree: "Bachelor of Arts (English)",
    institution: "University of Dhaka",
    period: "2011 – 2017",
    description: "Comprehensive study of English literature, language, and writing, developing strong communication and analytical skills essential for technical documentation and client interaction.",
    icon: GraduationCap,
  };

  // Enhanced achievements with better descriptions
  const allAchievements = [
    { 
      id: 1, 
      type: 'ibm', 
      title: "IBM Certified Developer", 
      provider: "IBM", 
      skills: ["Node.js", "Express.js", "API Development", "Cloud Computing"],
      description: "Professional certification demonstrating expertise in building scalable backend applications with Node.js and Express, including API design and cloud deployment strategies.",
      duration: "40+ hours",
      credential: "Professional Certificate",
      highlights: [
        "Advanced backend development with Node.js",
        "RESTful API design and implementation", 
        "Cloud-native application development",
        "Database integration and optimization"
      ]
    },
    { 
      id: 2, 
      type: 'certificate', 
      title: "Advanced React.js & Next.js Mastery", 
      provider: "Udemy", 
      skills: ["React.js", "Next.js", "JavaScript ES6+", "State Management"],
      description: "Comprehensive full-stack React development covering advanced patterns, performance optimization, and modern Next.js features including SSR and static generation.",
      duration: "60+ hours",
      highlights: [
        "Advanced React patterns and hooks",
        "Next.js 13+ with App Router",
        "Performance optimization techniques",
        "State management with Redux/Zustand"
      ]
    },
    { 
      id: 3, 
      type: 'certificate', 
      title: "Full-Stack PHP & Laravel Development", 
      provider: "Udemy", 
      skills: ["PHP 8+", "Laravel", "MySQL", "API Development"],
      description: "Complete Laravel framework mastery including MVC architecture, Eloquent ORM, authentication systems, and building RESTful APIs with advanced PHP concepts.",
      duration: "45+ hours",
      highlights: [
        "Laravel 10+ framework expertise",
        "Advanced Eloquent relationships",
        "Authentication & authorization systems",
        "API development with Laravel Sanctum"
      ]
    },
    { 
      id: 4, 
      type: 'certificate', 
      title: "React Native Mobile Development", 
      provider: "Udemy", 
      skills: ["React Native", "Mobile Development", "Redux", "Firebase"],
      description: "Cross-platform mobile app development using React Native, including navigation, state management, and integration with native device features.",
      duration: "35+ hours",
      highlights: [
        "Cross-platform mobile app development",
        "Native device integration",
        "Performance optimization for mobile",
        "App store deployment processes"
      ]
    },
    { 
      id: 5, 
      type: 'certificate', 
      title: "Modern DevOps & Docker", 
      provider: "Udemy", 
      skills: ["Docker", "Containers", "CI/CD", "AWS"],
      description: "Containerization and deployment strategies using Docker, including CI/CD pipelines and cloud deployment with AWS services.",
      duration: "25+ hours",
      highlights: [
        "Docker containerization strategies",
        "CI/CD pipeline automation",
        "AWS cloud deployment",
        "Container orchestration basics"
      ]
    },
    { 
      id: 6, 
      type: 'award', 
      title: "Academic Excellence Award", 
      organization: "Dhaka Education Board", 
      date: "September 2008", 
      description: "Recognized for outstanding academic performance and consistent excellence throughout secondary education, ranking in the top 5% of students.",
      highlights: [
        "Top 5% academic ranking",
        "Consistent academic excellence",
        "Leadership in student activities"
      ]
    }
  ];
  
  const providerLogos = [
    { name: 'IBM', icon: Code, color: 'text-blue-600' },
    { name: 'Udemy', icon: BookOpen, color: 'text-purple-600' },
    { name: 'AWS', icon: Database, color: 'text-orange-600' },
    { name: 'Google', icon: Globe, color: 'text-green-600' },
    { name: 'Meta', icon: Smartphone, color: 'text-blue-500' },
    { name: 'Dhaka Board', icon: Award, color: 'text-gray-600' },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-24 bg-white text-black" id="education">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-12 h-1 bg-accent-lime" />
            <span className="text-gray-400 font-semibold text-sm uppercase tracking-wider">Education & Certifications</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Continuous Learning &
            <br />
            <span className="text-accent-lime">Professional Growth</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            My commitment to staying current with emerging technologies and industry best practices through formal education and professional certifications.
          </motion.p>
        </motion.div>

        {/* Education Foundation */}
        <motion.div 
          ref={educationRef}
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-block bg-accent-lime/10 p-6 rounded-2xl mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={educationInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <GraduationCap className="w-12 h-12 text-accent-lime mx-auto" />
          </motion.div>
          
          <motion.h3 
            className="text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Academic Foundation
          </motion.h3>
          
          <motion.p 
            className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {education.degree}
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {education.institution} • {education.period}
          </motion.p>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={educationInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {education.description}
          </motion.p>
        </motion.div>

        {/* Certifications Accordion */}
        <div className="border-t border-gray-200 mb-20">
          {allAchievements.map((item, index) => (
            <AccordionItem 
              key={item.id} 
              item={item} 
              index={index} 
              expanded={expanded} 
              onToggle={setExpanded}
            />
          ))}
        </div>

        {/* Provider Logos */}
        <motion.div 
          className="mt-20 pt-12 border-t border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.h3 
            className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            Trusted Learning Partners
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {providerLogos.map((provider, index) => (
              <ProviderLogo 
                key={provider.name}
                provider={provider}
                index={index}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TrainingCertificates;