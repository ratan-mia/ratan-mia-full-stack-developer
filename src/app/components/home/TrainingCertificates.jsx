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
    color: "bg-blue-500",
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
    color: "bg-green-500",
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
    color: "bg-purple-500",
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
    color: "bg-orange-500",
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
    color: "bg-teal-500",
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
    color: "bg-cyan-500",
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
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 ${
        certificate.featured ? 'ring-2 ring-blue-200' : ''
      }`}
    >
      {/* Featured Badge */}
      {certificate.featured && (
        <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold mb-4">
          <Star className="w-3 h-3 fill-current" />
          Featured
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-12 h-12 ${certificate.color} rounded-lg flex items-center justify-center text-white shadow-lg`}>
          <certificate.icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
            {certificate.title}
          </h3>
          <p className="text-blue-600 font-semibold text-sm">{certificate.provider}</p>
          <p className="text-gray-600 text-sm">by {certificate.instructor}</p>
        </div>
      </div>

      {/* Category & Rating */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg">
          {certificate.category}
        </span>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
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
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded border border-blue-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="text-sm text-gray-500">
          <Calendar className="w-4 h-4 inline mr-1" />
          {certificate.duration} • {certificate.date}
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <ExternalLink className="w-4 h-4" />
          </button>
          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4" />
            Education & Certifications
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Continuous Learning Journey
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Committed to staying current with latest technologies through formal education and specialized training programs.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {STATS.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
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
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{EDUCATION.degree}</h3>
                <p className="text-blue-600 font-semibold">{EDUCATION.institution}</p>
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

            <p className="text-gray-700 leading-relaxed mb-6">{EDUCATION.description}</p>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900">Key Outcomes:</h4>
              {EDUCATION.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-100">
            {AWARDS.map((award, index) => (
              <div key={index}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-white">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{award.title}</h3>
                    <p className="text-yellow-600 font-semibold">{award.organization}</p>
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
                
                <p className="text-gray-700 leading-relaxed">{award.description}</p>
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
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
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
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
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
          <div className="bg-gray-50 p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Continuous Learning, Better Solutions
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              My commitment to continuous learning ensures I stay current with the latest technologies and best practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Let's Work Together
              </a>
              
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                View Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingCertificates;