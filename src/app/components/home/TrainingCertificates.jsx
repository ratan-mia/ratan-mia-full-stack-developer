'use client';

import { motion, useInView } from 'framer-motion';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  Code,
  Database,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  Layers,
  MapPin,
  Server,
  Shield,
  Star,
  Target,
  Trophy,
  Zap
} from 'lucide-react';
import { useRef } from 'react';

// Enhanced Education Data
const EDUCATION = {
  degree: "BACHELOR OF ARTS (ENGLISH)",
  institution: "UNIVERSITY OF DHAKA",
  period: "2011 – 2017",
  location: "DHAKA, BANGLADESH",
  gpa: "3.8/4.0",
  description: "Enhanced communication and critical thinking skills essential for technical documentation and client interaction in software development.",
  highlights: [
    "Technical Writing & Documentation",
    "Research & Problem-solving Skills",
    "Client Communication Excellence",
    "Cross-functional Team Collaboration"
  ]
};

// Enhanced Awards Data
const AWARDS = [
  {
    title: "JUNIOR SCHOLARSHIP",
    organization: "DHAKA EDUCATION BOARD",
    date: "SEPTEMBER 2008",
    achievement: "TOP 5% ACADEMIC PERFORMANCE",
    description: "Recognized for academic excellence and commitment to continuous learning and professional development."
  }
];

// Enhanced Certificates Data with solid/gradient colors
const CERTIFICATES = [
  {
    id: 1,
    title: "COMPLETE REACT.JS DEVELOPMENT",
    provider: "UDEMY",
    instructor: "Jonas Schmedtmann",
    category: "FRONTEND",
    icon: Code,
    gradient: "from-cyan-500 to-blue-500",
    solidColor: "bg-cyan-500",
    skills: ["React.js", "Redux", "Hooks", "JSX"],
    duration: "40 HOURS",
    date: "2023",
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    title: "NODE.JS & EXPRESS.JS PROFESSIONAL",
    provider: "IBM",
    instructor: "IBM Skills Network",
    category: "BACKEND",
    icon: Server,
    gradient: "from-blue-500 to-violet-600",
    solidColor: "bg-blue-500",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
    duration: "24 HOURS",
    date: "2023",
    rating: 4.7,
    featured: true
  },
  {
    id: 3,
    title: "NEXT.JS FULL-STACK DEVELOPMENT",
    provider: "VERCEL",
    instructor: "Lee Robinson",
    category: "FULL STACK",
    icon: Layers,
    gradient: "from-violet-600 to-cyan-500",
    solidColor: "bg-violet-600",
    skills: ["Next.js", "SSR", "API Routes", "Deployment"],
    duration: "32 HOURS",
    date: "2023",
    rating: 4.9,
    featured: true
  },
  {
    id: 4,
    title: "AWS CLOUD COMPUTING FUNDAMENTALS",
    provider: "AMAZON WEB SERVICES",
    instructor: "AWS Training",
    category: "CLOUD",
    icon: Globe,
    gradient: "from-orange-500 to-cyan-500",
    solidColor: "bg-orange-500",
    skills: ["AWS", "EC2", "S3", "Lambda"],
    duration: "15 HOURS",
    date: "2022",
    rating: 4.8,
    featured: true
  },
  {
    id: 5,
    title: "PHP & MYSQL DEVELOPMENT",
    provider: "UDEMY",
    instructor: "Edwin Diaz",
    category: "BACKEND",
    icon: Database,
    gradient: "from-blue-500 to-cyan-500",
    solidColor: "bg-blue-600",
    skills: ["PHP", "MySQL", "CRUD", "Security"],
    duration: "42 HOURS",
    date: "2022",
    rating: 4.5,
    featured: false
  },
  {
    id: 6,
    title: "DOCKER CONTAINERIZATION",
    provider: "UDEMY",
    instructor: "Stephen Grider",
    category: "DEVOPS",
    icon: Shield,
    gradient: "from-cyan-500 to-blue-500",
    solidColor: "bg-cyan-600",
    skills: ["Docker", "Containers", "Docker Compose"],
    duration: "18 HOURS",
    date: "2023",
    rating: 4.6,
    featured: false
  }
];

// Enhanced Stats
const STATS = [
  { number: '8+', label: 'CERTIFICATIONS', icon: Award },
  { number: '180+', label: 'STUDY HOURS', icon: BookOpen },
  { number: '4.7', label: 'AVG RATING', icon: Star },
  { number: '6+', label: 'YEARS LEARNING', icon: Target }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Enhanced Certificate Card Component with solid/gradient colors
const CertificateCard = ({ certificate, index, useGradient = true }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={cardRef}
      className="group relative p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full flex flex-col"
      variants={itemVariants}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Featured Badge */}
        {certificate.featured && (
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4 self-start">
            <Star className="w-3 h-3 fill-current" />
            FEATURED
          </div>
        )}

        {/* Header with Icon */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-16 h-16 ${useGradient ? `bg-gradient-to-r ${certificate.gradient}` : certificate.solidColor} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <certificate.icon className="w-8 h-8" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-black text-white mb-2 uppercase tracking-tight line-clamp-2">
              {certificate.title}
            </h3>
            <p className="text-cyan-400 font-bold text-sm mb-1 uppercase tracking-wide">{certificate.provider}</p>
            <p className="text-slate-300 text-sm">BY {certificate.instructor.toUpperCase()}</p>
          </div>
        </div>

        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{certificate.category}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-cyan-500 fill-current" />
            <span className="text-sm font-bold text-white">{certificate.rating}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6 flex-grow">
          <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">KEY SKILLS:</h4>
          <div className="flex flex-wrap gap-2">
            {certificate.skills.map((skill, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Duration & Date */}
        <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 mb-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-slate-300">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">{certificate.duration}</span>
            </div>
            <div className="text-slate-400 font-medium">{certificate.date}</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm uppercase tracking-wide">
            <ExternalLink className="w-4 h-4" />
            VIEW
          </button>
          <button className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Education/Award Card Component
const InfoCard = ({ data, type, icon: Icon, gradient, solidColor, useGradient = true }) => {
  return (
    <div className="group relative p-8 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 ${useGradient ? `bg-gradient-to-r ${gradient}` : solidColor} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white mb-1 uppercase tracking-tight">
              {type === 'education' ? data.degree : data.title}
            </h3>
            <p className="text-cyan-400 font-bold uppercase tracking-wide">
              {type === 'education' ? data.institution : data.organization}
            </p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span className="font-medium">{data.period || data.date}</span>
          </div>
          {type === 'education' && data.location && (
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="font-medium">{data.location}</span>
            </div>
          )}
          {type === 'education' && data.gpa && (
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Star className="w-4 h-4 text-cyan-400" />
              <span className="font-medium">GPA: {data.gpa}</span>
            </div>
          )}
          {type === 'award' && data.achievement && (
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="font-medium">{data.achievement}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-300 leading-relaxed mb-6">{data.description}</p>
        
        {/* Highlights */}
        {type === 'education' && data.highlights && (
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">KEY OUTCOMES:</h4>
            <div className="space-y-3">
              {data.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Component
const TrainingCertificates = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const educationRef = useRef(null);
  const featuredRef = useRef(null);
  const allCertsRef = useRef(null);
  const ctaRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const statsInView = useInView(statsRef, { once: true, threshold: 0.1 });
  const educationInView = useInView(educationRef, { once: true, threshold: 0.1 });
  const featuredInView = useInView(featuredRef, { once: true, threshold: 0.1 });
  const allCertsInView = useInView(allCertsRef, { once: true, threshold: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, threshold: 0.1 });

  const featuredCertificates = CERTIFICATES.filter(cert => cert.featured);

  return (
    <>
      {/* Developer Header Stripe */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
      
      <section 
        ref={sectionRef}
        id="education" 
        className="py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden"
        aria-label="Education and certifications"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-violet-600/10 rounded-full blur-3xl"></div>
          
          {/* Geometric Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 xl:px-16 2xl:px-20">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">EDUCATION & CERTIFICATIONS</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                CONTINUOUS LEARNING JOURNEY
              </h2>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Committed to staying current with latest technologies through formal education and specialized training programs to deliver cutting-edge solutions.
              </p>

              {/* Code Bracket Element */}
              <div className="text-cyan-500 font-mono text-2xl mb-8">&lt;/&gt;</div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
              variants={containerVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
            >
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]"
                  variants={itemVariants}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
                  <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Education & Awards */}
            <motion.div 
              ref={educationRef}
              className="grid lg:grid-cols-2 gap-8 mb-20"
              variants={containerVariants}
              initial="hidden"
              animate={educationInView ? "visible" : "hidden"}
            >
              <InfoCard 
                data={EDUCATION} 
                type="education" 
                icon={GraduationCap}
                gradient="from-blue-500 to-cyan-500"
                solidColor="bg-blue-500"
                useGradient={true}
              />
              
              {AWARDS.map((award, index) => (
                <InfoCard 
                  key={index}
                  data={award} 
                  type="award" 
                  icon={Trophy}
                  gradient="from-orange-500 to-cyan-500"
                  solidColor="bg-orange-500"
                  useGradient={true}
                />
              ))}
            </motion.div>

            {/* Decorative Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full mb-20"></div>

            {/* Featured Certifications */}
            <motion.div
              ref={featuredRef}
              initial={{ opacity: 0, y: 30 }}
              animate={featuredInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                  FEATURED CERTIFICATIONS
                </h3>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Highlighting the most impactful and recent certifications that drive my development expertise.
                </p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={featuredInView ? "visible" : "hidden"}
              >
                {featuredCertificates.map((certificate, index) => (
                  <CertificateCard 
                    key={certificate.id} 
                    certificate={certificate} 
                    index={index}
                    useGradient={true}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* All Certifications */}
            <motion.div
              ref={allCertsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={allCertsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                  ALL CERTIFICATIONS
                </h3>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Complete collection of professional development certifications and specialized training programs.
                </p>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={allCertsInView ? "visible" : "hidden"}
              >
                {CERTIFICATES.map((certificate, index) => (
                  <CertificateCard 
                    key={certificate.id} 
                    certificate={certificate} 
                    index={index}
                    useGradient={index % 2 === 0} // Alternate between gradient and solid colors
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced Call to Action */}
            <motion.div 
              ref={ctaRef}
              className="text-center mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative p-8 lg:p-12 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight">
                    CONTINUOUS LEARNING, BETTER SOLUTIONS
                  </h3>
                  <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    My commitment to continuous learning ensures I stay current with the latest technologies and best practices to deliver exceptional results.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wide">
                      <span>LET'S WORK TOGETHER</span>
                      <Zap className="w-5 h-5" />
                    </button>
                    
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 uppercase tracking-wide">
                      <ExternalLink className="w-5 h-5" />
                      VIEW PROJECTS
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer Footer Stripe */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
    </>
  );
};

export default TrainingCertificates;
