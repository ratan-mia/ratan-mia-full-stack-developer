'use client';

import { motion, useInView } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Star, 
  Code,
  Server,
  Database,
  Globe,
  Shield,
  Layers,
  Trophy,
  CheckCircle,
  TrendingUp,
  Zap,
  Target
} from 'lucide-react';
import { useRef } from 'react';

const TrainingCertificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const achievements = [
    {
      id: 1,
      title: 'React.js Expert',
      category: 'Frontend',
      provider: 'Udemy',
      icon: Code,
      year: '2023',
      skills: ['React.js', 'Redux', 'Hooks'],
      level: 'Advanced',
      color: 'accent',
      gradient: 'from-accent/20 to-accent/10'
    },
    {
      id: 2,
      title: 'Laravel Professional', 
      category: 'Backend',
      provider: 'Udemy',
      icon: Server,
      year: '2023',
      skills: ['Laravel', 'PHP', 'APIs'],
      level: 'Expert',
      color: 'accent-secondary',
      gradient: 'from-accent-secondary/20 to-accent-secondary/10'
    },
    {
      id: 3,
      title: 'Next.js Developer',
      category: 'Full Stack',
      provider: 'Vercel',
      icon: Layers,
      year: '2023',
      skills: ['Next.js', 'SSR', 'API Routes'],
      level: 'Advanced',
      color: 'accent',
      gradient: 'from-accent/20 to-accent/10'
    },
    {
      id: 4,
      title: 'AWS Cloud Computing',
      category: 'Cloud',
      provider: 'AWS',
      icon: Globe,
      year: '2022',
      skills: ['AWS', 'EC2', 'S3'],
      level: 'Professional',
      color: 'accent-secondary',
      gradient: 'from-accent-secondary/20 to-accent-secondary/10'
    }
  ];

  const stats = [
    { icon: Trophy, number: '8+', label: 'Certifications', color: 'text-accent' },
    { icon: TrendingUp, number: '180+', label: 'Study Hours', color: 'text-accent-secondary' },
    { icon: Target, number: '4.8', label: 'Avg Rating', color: 'text-accent' },
    { icon: Zap, number: '6+', label: 'Years Learning', color: 'text-accent-secondary' }
  ];

  const education = {
    degree: 'Bachelor of Arts',
    field: 'English Literature',
    institution: 'University of Dhaka',
    period: '2011 – 2017',
    gpa: '3.8/4.0'
  };

  return (
    <section ref={ref} className="section-padding bg-black relative overflow-hidden" id="education">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Achievement Badges Background */}
        <div className="absolute top-20 right-20 grid grid-cols-3 gap-4 transform rotate-12 scale-75">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-8 h-8 bg-accent/20 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute bottom-32 left-16 w-32 h-32 bg-accent-secondary/10 rounded-full blur-2xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/4 w-16 h-16 border-2 border-accent/20 rounded-design rotate-45"></div>
        <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-accent-secondary/20 rounded-design"></div>
      </div>

      <div className="container-design relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.h2
            className="section-header text-primary-text mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Education & Growth
          </motion.h2>
          
          <motion.div
            className="accent-line"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <motion.div
                className={`w-16 h-16 ${stat.color} bg-card rounded-design-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>
              <motion.div
                className={`text-3xl font-bold ${stat.color} mb-2`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="caption-text text-neutral">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education & Awards Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Education Card */}
          <motion.div
            className="card-design group overflow-hidden"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-16 h-16 bg-accent rounded-design-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 15 }}
                >
                  <GraduationCap className="w-8 h-8 text-black" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-primary-text group-hover:text-accent transition-colors">
                    {education.degree}
                  </h3>
                  <p className="text-accent font-medium">{education.field}</p>
                  <p className="text-neutral text-sm">{education.institution}</p>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-sm text-neutral">
                  <span className="font-medium">Period:</span> {education.period}
                </div>
                <div className="text-sm text-neutral">
                  <span className="font-medium">GPA:</span> {education.gpa}
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-design text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                Strong Foundation
              </div>
            </div>
          </motion.div>

          {/* Award Card */}
          <motion.div
            className="card-design group overflow-hidden"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-16 h-16 bg-accent-secondary rounded-design-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 15 }}
                >
                  <Trophy className="w-8 h-8 text-black" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-primary-text group-hover:text-accent-secondary transition-colors">
                    Junior Scholarship
                  </h3>
                  <p className="text-accent-secondary font-medium">Academic Excellence</p>
                  <p className="text-neutral text-sm">Dhaka Education Board</p>
                </div>
              </div>

              {/* Details */}
              <div className="text-sm text-neutral mb-4">
                <span className="font-medium">Achievement:</span> Top 5% Performance
              </div>

              <div className="inline-flex items-center gap-2 bg-accent-secondary/10 text-accent-secondary px-3 py-1 rounded-design text-sm font-medium">
                <Award className="w-4 h-4" />
                September 2008
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-text mb-4">
              Professional Certifications
            </h3>
            <div className="accent-line"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="card-design group cursor-pointer relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 text-center">
                  {/* Level Badge */}
                  <div className={`inline-flex items-center gap-1 bg-${cert.color}/10 text-${cert.color} px-2 py-1 rounded-design text-xs font-medium mb-4`}>
                    <Star className="w-3 h-3" />
                    {cert.level}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-${cert.color} rounded-design-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <cert.icon className="w-8 h-8 text-black" />
                  </motion.div>

                  {/* Content */}
                  <h4 className={`font-bold text-primary-text mb-2 group-hover:text-${cert.color} transition-colors`}>
                    {cert.title}
                  </h4>
                  <p className="text-sm text-neutral mb-3">{cert.provider}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-1 mb-4">
                    {cert.skills.slice(0, 2).map((skill, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 bg-${cert.color}/10 text-${cert.color} text-xs rounded-design`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Year */}
                  <div className="text-neutral text-sm font-medium">{cert.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Continuous Learning', desc: 'Staying current with latest tech' },
              { icon: '🚀', title: 'Practical Application', desc: 'Real-world project experience' },
              { icon: '⭐', title: 'Quality Focus', desc: 'High standards in every course' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold text-primary-text mb-2">{item.title}</h4>
                <p className="body-text-small text-neutral">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="relative bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent/20 p-12 rounded-design-lg border border-accent/30 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-accent/20 rounded-design rotate-45"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent-secondary/10 rounded-full"></div>
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-text mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="body-text text-neutral mb-8 max-w-2xl mx-auto">
                My commitment to continuous learning ensures cutting-edge solutions.
              </p>
              
              <motion.a
                href="#contact"
                className="btn-primary group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Work With Me</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <CheckCircle className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingCertificates;
