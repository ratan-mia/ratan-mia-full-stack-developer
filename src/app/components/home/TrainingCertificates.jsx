'use client';

import { motion, useInView } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  Star, 
  Code,
  Server,
  Database,
  Globe,
  Shield,
  Layers,
  Trophy,
  CheckCircle,
  ExternalLink,
  Download
} from 'lucide-react';
import { useRef } from 'react';

// Education Data
const EDUCATION = {
  degree: "Bachelor of Arts (English)",
  institution: "University of Dhaka",
  period: "2011 – 2017",
  location: "Dhaka, Bangladesh",
  gpa: "3.8/4.0",
  description: "Enhanced communication and critical thinking skills essential for technical documentation and client interaction.",
  highlights: [
    "Technical Writing & Documentation",
    "Research & Problem-solving",
    "Client Communication Skills",
    "Cross-functional Collaboration"
  ]
};

// Awards Data
const AWARDS = [
  {
    title: "Junior Scholarship",
    organization: "Dhaka Education Board",
    date: "September 2008",
    achievement: "Top 5% Academic Performance",
    description: "Recognized for academic excellence and commitment to continuous learning."
  }
];

// Simplified Certificates Data
const CERTIFICATES = [
  {
    id: 1,
    title: "Complete React.js Development",
    provider: "Udemy",
    instructor: "Jonas Schmedtmann",
    category: "Frontend",
    icon: Code,
    skills: ["React.js", "Redux", "Hooks", "JSX"],
    duration: "40 hours",
    date: "2023",
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    title: "Node.js & Express.js Professional",
    provider: "IBM",
    instructor: "IBM Skills Network",
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
    duration: "24 hours",
    date: "2023",
    rating: 4.7,
    featured: true
  },
  {
    id: 3,
    title: "Next.js Full-Stack Development",
    provider: "Vercel",
    instructor: "Lee Robinson",
    category: "Full Stack",
    icon: Layers,
    skills: ["Next.js", "SSR", "API Routes", "Deployment"],
    duration: "32 hours",
    date: "2023",
    rating: 4.9,
    featured: true
  },
  {
    id: 4,
    title: "AWS Cloud Computing Fundamentals",
    provider: "Amazon Web Services",
    instructor: "AWS Training",
    category: "Cloud",
    icon: Globe,
    skills: ["AWS", "EC2", "S3", "Lambda"],
    duration: "15 hours",
    date: "2022",
    rating: 4.8,
    featured: true
  },
  {
    id: 5,
    title: "PHP & MySQL Development",
    provider: "Udemy",
    instructor: "Edwin Diaz",
    category: "Backend",
    icon: Database,
    skills: ["PHP", "MySQL", "CRUD", "Security"],
    duration: "42 hours",
    date: "2022",
    rating: 4.5,
    featured: false
  },
  {
    id: 6,
    title: "Docker Containerization",
    provider: "Udemy",
    instructor: "Stephen Grider",
    category: "DevOps",
    icon: Shield,
    skills: ["Docker", "Containers", "Docker Compose"],
    duration: "18 hours",
    date: "2023",
    rating: 4.6,
    featured: false
  }
];

// Stats
const STATS = [
  { number: '8+', label: 'Certifications' },
  { number: '180+', label: 'Study Hours' },
  { number: '4.7', label: 'Avg Rating' },
  { number: '6+', label: 'Years Learning' }
];

// Certificate Card Component
const CertificateCard = ({ certificate, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`bg-white rounded-xl border border-gray-200 shadow-xl hover:shadow-2xl hover:border-cyan-300 transition-all duration-300 p-6 ${
        certificate.featured ? 'ring-2 ring-cyan-200' : ''
      }`}
    >
      {/* Featured Badge */}
      {certificate.featured && (
        <div className="inline-flex items-center gap-1 bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full text-xs font-semibold mb-4">
          <Star className="w-3 h-3 fill-current" />
          Featured
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center text-white shadow-lg">
          <certificate.icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
            {certificate.title}
          </h3>
          <p className="text-cyan-500 font-semibold text-sm">{certificate.provider}</p>
          <p className="text-gray-600 text-sm">by {certificate.instructor}</p>
        </div>
      </div>

      {/* Category & Rating */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
          {certificate.category}
        </span>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-cyan-500 fill-current" />
          <span className="text-sm font-medium text-gray-600">{certificate.rating}</span>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Skills</h4>
        <div className="flex flex-wrap gap-2">
          {certificate.skills.map((skill, i) => (
            <span 
              key={i}
              className="px-2 py-1 bg-cyan-50 text-cyan-600 text-xs font-medium rounded border border-cyan-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-500">
          <Calendar className="w-4 h-4 inline mr-1" />
          {certificate.duration} • {certificate.date}
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-cyan-500 hover:bg-cyan-50 rounded-lg transition-colors">
            <ExternalLink className="w-4 h-4" />
          </button>
          <button className="p-2 text-green-500 hover:bg-green-50 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
const TrainingCertificates = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const featuredCertificates = CERTIFICATES.filter(cert => cert.featured);
  const allCertificates = CERTIFICATES;

  return (
    <section 
      ref={sectionRef}
      id="education" 
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400 opacity-10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Eyebrow Text */}
          <motion.span
            className="text-cyan-500 font-semibold tracking-wider uppercase mb-2 inline-block bg-cyan-50 px-4 py-2 rounded-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            Education & Certifications
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            Continuous <span className="text-cyan-500">Learning Journey</span>
          </motion.h2>

          {/* Accent Line */}
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6" />
          
          <motion.p 
            className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            Committed to staying current with latest technologies through formal education and specialized training programs.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20"
        >
          {STATS.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-xl hover:shadow-2xl hover:border-cyan-300 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education & Awards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Education */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{EDUCATION.degree}</h3>
                <p className="text-cyan-500 font-semibold">{EDUCATION.institution}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                {EDUCATION.period}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                {EDUCATION.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="w-4 h-4" />
                GPA: {EDUCATION.gpa}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">{EDUCATION.description}</p>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Key Outcomes:</h4>
              {EDUCATION.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-600">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl">
            {AWARDS.map((award, index) => (
              <div key={index}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{award.title}</h3>
                    <p className="text-cyan-500 font-semibold">{award.organization}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {award.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Award className="w-4 h-4" />
                    {award.achievement}
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Featured Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCertificates.map((certificate, index) => (
              <CertificateCard 
                key={certificate.id} 
                certificate={certificate} 
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* All Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            All Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCertificates.map((certificate, index) => (
              <CertificateCard 
                key={certificate.id} 
                certificate={certificate} 
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 p-12 rounded-2xl shadow-2xl relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-48 h-48 bg-gray-200 rounded-full blur-3xl"
                animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Continuous Learning, Better Solutions
              </h3>
              <p className="text-cyan-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                My commitment to continuous learning ensures I stay current with the latest technologies and best practices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="bg-white hover:bg-gray-100 text-cyan-600 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Work Together
                </motion.a>
                
                <motion.a
                  href="#projects"
                  className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  View Projects
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