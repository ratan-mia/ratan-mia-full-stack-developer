'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  Award,
  Building2,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ExternalLink,
  Globe,
  Heart,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Pause,
  Play,
  Quote,
  Search,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
  Zap
} from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Enhanced testimonials data with more comprehensive information
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Dewan Saidur Rahman",
    position: "Managing Director",
    company: "Kawasaki Bangladesh",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    category: "automotive",
    project: "Chery Bangladesh Website",
    projectType: "Corporate Website",
    date: "2024",
    location: "Dhaka, Bangladesh",
    projectValue: "$15,000+",
    duration: "3 months",
    technologies: ["React.js", "Next.js", "Performance Optimization", "3D Integration"],
    testimonial: "Ratan delivered an exceptional website for Chery Bangladesh with incredible 97% speed optimization. His expertise in React.js and Next.js, combined with 360-degree car model integration, exceeded our expectations. The project was completed on time and within budget. Highly recommend his services for any complex web development project.",
    results: [
      { metric: "97%", label: "Speed Optimization", icon: Zap },
      { metric: "360°", label: "Car Model Integration", icon: Globe },
      { metric: "100%", label: "On-time Delivery", icon: CheckCircle },
      { metric: "200%", label: "Performance Increase", icon: TrendingUp }
    ],
    highlights: ["Award-winning design", "Performance optimization", "Complex integrations", "Automotive industry"],
    featured: true,
    verified: true,
    priority: 1,
    videoTestimonial: false,
    caseStudyUrl: "/case-studies/chery-bangladesh",
    clientSince: "2023",
    projectsCompleted: 2,
    relationshipType: "Long-term Client"
  },
  {
    id: 2,
    name: "Mohammad Nayab Mahmood",
    position: "Operation Manager", 
    company: "Chery Bangladesh",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    category: "automotive",
    project: "Corporate Website Development",
    projectType: "Full-Stack Development",
    date: "2024",
    location: "Dhaka, Bangladesh", 
    projectValue: "$12,000+",
    duration: "2.5 months",
    technologies: ["React.js", "CRM Integration", "Facebook Pixel", "WhatsApp API"],
    testimonial: "Working with Ratan was a game-changer for our business. He not only developed a stunning website but also integrated CRM, Facebook Pixel, and WhatsApp Business API seamlessly. His attention to detail and technical expertise is outstanding. The 200% sales increase speaks for itself!",
    results: [
      { metric: "200%", label: "Sales Increase", icon: TrendingUp },
      { metric: "5+", label: "API Integrations", icon: Zap },
      { metric: "100%", label: "Client Satisfaction", icon: Heart },
      { metric: "3", label: "Awards Won", icon: Award }
    ],
    highlights: ["Sales transformation", "Complex integrations", "API expertise", "Business growth"],
    featured: true,
    verified: true,
    priority: 2,
    videoTestimonial: false,
    caseStudyUrl: "/case-studies/chery-operations",
    clientSince: "2023",
    projectsCompleted: 3,
    relationshipType: "Strategic Partner"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Founder & CEO",
    company: "Digital Innovations Inc.",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    category: "startup",
    project: "E-commerce Platform",
    projectType: "E-commerce Development",
    date: "2023",
    location: "New York, USA",
    projectValue: "$8,000+",
    duration: "4 months",
    technologies: ["Laravel", "React.js", "E-commerce", "Payment Integration"],
    testimonial: "Ratan transformed our vision into reality with his exceptional full-stack development skills. The Laravel-based e-commerce platform he built is scalable, user-friendly, and performs excellently. His communication throughout the project was transparent and professional. We saw immediate improvements in our online presence.",
    results: [
      { metric: "300%", label: "Online Growth", icon: TrendingUp },
      { metric: "95%", label: "Performance Score", icon: Zap },
      { metric: "50+", label: "Features Built", icon: Sparkles },
      { metric: "$500K", label: "Revenue Generated", icon: Target }
    ],
    highlights: ["Startup success", "Scalable architecture", "International client", "Revenue growth"],
    featured: true,
    verified: true,
    priority: 3,
    videoTestimonial: true,
    caseStudyUrl: "/case-studies/digital-innovations",
    clientSince: "2023",
    projectsCompleted: 1,
    relationshipType: "Success Story"
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    position: "Business Owner",
    company: "Hassan Enterprises",
    avatar: "/api/placeholder/80/80", 
    rating: 5,
    category: "business",
    project: "Business Website Redesign",
    projectType: "WordPress Development",
    date: "2023",
    location: "Dubai, UAE",
    projectValue: "$5,000+",
    duration: "1.5 months",
    technologies: ["WordPress", "Custom Development", "SEO", "Mobile Optimization"],
    testimonial: "I needed a complete website overhaul for my business, and Ratan delivered beyond expectations. His WordPress expertise combined with custom development created exactly what we needed. The site is fast, mobile-responsive, and has significantly improved our online inquiries. Great value for money!",
    results: [
      { metric: "400%", label: "Inquiry Increase", icon: MessageCircle },
      { metric: "98%", label: "Mobile Score", icon: Globe },
      { metric: "85%", label: "Speed Improvement", icon: Zap },
      { metric: "1st", label: "Google Ranking", icon: Award }
    ],
    highlights: ["Small business", "Cost-effective", "SEO success", "Mobile-first"],
    featured: false,
    verified: true,
    priority: 4,
    videoTestimonial: false,
    caseStudyUrl: "/case-studies/hassan-enterprises",
    clientSince: "2023",
    projectsCompleted: 1,
    relationshipType: "Satisfied Client"
  },
  {
    id: 5,
    name: "Emily Chen",
    position: "Marketing Director", 
    company: "TechStart Solutions",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    category: "tech",
    project: "React.js Web Application",
    projectType: "Web Application",
    date: "2023",
    location: "Toronto, Canada",
    projectValue: "$10,000+",
    duration: "3 months",
    technologies: ["React.js", "Node.js", "Modern Architecture", "Cloud Deployment"],
    testimonial: "Ratan's expertise in React.js and modern web technologies is impressive. He built our complex web application with clean code, excellent performance, and intuitive user experience. His problem-solving skills and attention to detail made the entire development process smooth and efficient.",
    results: [
      { metric: "99%", label: "Uptime Achieved", icon: Shield },
      { metric: "50ms", label: "Load Time", icon: Zap },
      { metric: "95%", label: "User Satisfaction", icon: Heart },
      { metric: "25+", label: "Features Delivered", icon: Sparkles }
    ],
    highlights: ["Technical excellence", "Clean code", "Modern stack", "Performance focus"],
    featured: false,
    verified: true,
    priority: 5,
    videoTestimonial: false,
    caseStudyUrl: "/case-studies/techstart-solutions",
    clientSince: "2023",
    projectsCompleted: 1,
    relationshipType: "Tech Partner"
  },
  {
    id: 6,
    name: "Michael Rodriguez",
    position: "E-commerce Manager",
    company: "Global Retail Co.",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    category: "ecommerce",
    project: "Shopify Store Development", 
    projectType: "E-commerce Platform",
    date: "2022",
    location: "Los Angeles, USA",
    projectValue: "$7,500+",
    duration: "2 months",
    technologies: ["Shopify", "Custom Apps", "API Integration", "Analytics"],
    testimonial: "Ratan created an amazing Shopify store for our business with custom features and integrations. His expertise in Shopify development and API integrations helped us achieve our e-commerce goals. The store is performing excellently and our sales have increased significantly since launch.",
    results: [
      { metric: "250%", label: "Sales Growth", icon: TrendingUp },
      { metric: "40%", label: "Conversion Rate", icon: Target },
      { metric: "10+", label: "Custom Features", icon: Sparkles },
      { metric: "24/7", label: "Store Uptime", icon: Shield }
    ],
    highlights: ["E-commerce success", "Custom development", "API mastery", "Sales growth"],
    featured: false,
    verified: true,
    priority: 6,
    videoTestimonial: false,
    caseStudyUrl: "/case-studies/global-retail",
    clientSince: "2022",
    projectsCompleted: 2,
    relationshipType: "Repeat Client"
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All Reviews', icon: Users, color: 'text-blue-600', count: TESTIMONIALS_DATA.length },
  { id: 'automotive', name: 'Automotive', icon: Building2, color: 'text-purple-600', count: 2 },
  { id: 'startup', name: 'Startups', icon: Lightbulb, color: 'text-green-600', count: 1 },
  { id: 'business', name: 'Business', icon: Target, color: 'text-orange-600', count: 1 },
  { id: 'tech', name: 'Technology', icon: Zap, color: 'text-indigo-600', count: 1 },
  { id: 'ecommerce', name: 'E-commerce', icon: TrendingUp, color: 'text-rose-600', count: 1 }
];

const STATS = [
  { number: '50+', label: 'Happy Clients', icon: Users, color: 'text-blue-500', description: 'Satisfied customers worldwide' },
  { number: '98%', label: 'Success Rate', icon: Award, color: 'text-green-500', description: 'Project completion rate' },
  { number: '5.0', label: 'Average Rating', icon: Star, color: 'text-yellow-500', description: 'Client satisfaction score' },
  { number: '24/7', label: 'Support Available', icon: Shield, color: 'text-purple-500', description: 'Round-the-clock assistance' }
];

// Enhanced Testimonial Card Component
const TestimonialCard = ({ testimonial, index, searchTerm, inView, isExpanded, onToggleExpand, onViewCaseStudy }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const testimonialInView = useInView(cardRef, { once: true, threshold: 0.1 });

  const isHighlighted = searchTerm && (
    testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getCategoryColor = (category) => {
    const categoryData = CATEGORIES.find(cat => cat.id === category);
    return categoryData ? categoryData.color : 'text-gray-600';
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <motion.div
      ref={cardRef}
      className={`group h-full transition-all duration-300 ${
        isHighlighted ? 'ring-2 ring-yellow-400 ring-offset-2' : ''
      } ${isExpanded ? 'lg:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={testimonialInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      layout
    >
      <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {testimonial.name.charAt(0)}
                </div>
                {testimonial.verified && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-blue-600 font-semibold text-sm mb-1">{testimonial.position}</p>
                <p className="text-slate-600 text-sm flex items-center gap-1">
                  <Building2 className="w-3 h-3" />
                  {testimonial.company}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              {testimonial.featured && (
                <motion.div
                  className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-3 h-3 fill-current" />
                  <span>Featured</span>
                </motion.div>
              )}
              <button
                onClick={() => onToggleExpand(testimonial.id)}
                className="p-1 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${testimonial.name} testimonial`}
              >
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Rating and Quick Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-1">
              {renderStars(testimonial.rating)}
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {testimonial.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {testimonial.location}
              </span>
            </div>
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="text-center p-2 bg-gray-50 rounded-lg">
              <div className="text-sm font-bold text-slate-800">{testimonial.projectValue}</div>
              <div className="text-xs text-slate-600">Project Value</div>
            </div>
            <div className="text-center p-2 bg-gray-50 rounded-lg">
              <div className="text-sm font-bold text-slate-800">{testimonial.duration}</div>
              <div className="text-xs text-slate-600">Duration</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Project Details */}
          <div className="mb-4">
            <h5 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-500" />
              {testimonial.project}
            </h5>
            <p className={`text-sm font-medium ${getCategoryColor(testimonial.category)} mb-2`}>
              {testimonial.projectType}
            </p>
          </div>

          {/* Testimonial Text */}
          <blockquote className="text-slate-700 text-sm leading-relaxed mb-4 italic">
            "{isExpanded ? testimonial.testimonial : `${testimonial.testimonial.substring(0, 120)}...`}"
          </blockquote>

          {/* Key Results */}
          <div className="mb-4">
            <h6 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              Key Results
            </h6>
            <div className="grid grid-cols-2 gap-2">
              {testimonial.results.slice(0, isExpanded ? testimonial.results.length : 2).map((result, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <result.icon className="w-4 h-4 text-blue-500" />
                  <div>
                    <div className="text-sm font-bold text-slate-800">{result.metric}</div>
                    <div className="text-xs text-slate-600">{result.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <h6 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-500" />
              Technologies
            </h6>
            <div className="flex flex-wrap gap-1">
              {testimonial.technologies.slice(0, isExpanded ? testimonial.technologies.length : 3).map((tech, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-lg border border-blue-200"
                >
                  {tech}
                </span>
              ))}
              {!isExpanded && testimonial.technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-lg">
                  +{testimonial.technologies.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Highlights */}
                <div>
                  <h6 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    Project Highlights
                  </h6>
                  <div className="space-y-1">
                    {testimonial.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Relationship */}
                <div>
                  <h6 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    Client Relationship
                  </h6>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-sm font-bold text-slate-800">{testimonial.clientSince}</div>
                      <div className="text-xs text-slate-600">Client Since</div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="text-sm font-bold text-slate-800">{testimonial.projectsCompleted}</div>
                      <div className="text-xs text-slate-600">Projects</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-2 text-center">{testimonial.relationshipType}</p>
                </div>

                {/* Video Testimonial */}
                {testimonial.videoTestimonial && (
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 text-sm text-blue-700">
                      <Play className="w-4 h-4" />
                      <span className="font-medium">Video testimonial available</span>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {testimonial.verified && (
                <div className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                  <CheckCircle className="w-3 h-3" />
                  Verified
                </div>
              )}
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(testimonial.category)} bg-gray-100`}>
                {testimonial.category}
              </span>
            </div>
            
            <div className="flex gap-2">
              {testimonial.caseStudyUrl && (
                <button
                  onClick={() => onViewCaseStudy(testimonial)}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white font-medium text-xs rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  Case Study
                </button>
              )}
              <button
                className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 font-medium text-xs rounded-lg hover:bg-gray-200 transition-colors"
                onClick={() => console.log('Contact for similar project')}
              >
                <MessageCircle className="w-3 h-3" />
                Similar Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Featured Testimonial Carousel Component
const FeaturedCarousel = ({ testimonials, activeIndex, onIndexChange, isAutoPlaying, onToggleAutoPlay }) => {
  const currentTestimonial = testimonials[activeIndex];

  if (!currentTestimonial) return null;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 overflow-hidden shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-yellow-300 fill-current" />
            <h3 className="text-xl font-bold">Featured Success Story</h3>
          </div>
          <div className="text-blue-100 text-sm">
            {activeIndex + 1} of {testimonials.length}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`featured-${currentTestimonial.id}-${activeIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Quote Icon */}
            <Quote className="absolute top-0 right-0 w-16 h-16 text-blue-200" />
            
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Client Profile */}
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto lg:mx-0 mb-4 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <h4 className="text-2xl font-bold text-slate-800 mb-2">
                  {currentTestimonial.name}
                </h4>
                <p className="text-blue-600 font-semibold text-lg mb-2">
                  {currentTestimonial.position}
                </p>
                <p className="text-slate-600 mb-4 flex items-center justify-center lg:justify-start gap-2">
                  <Building2 className="w-4 h-4" />
                  {currentTestimonial.company}
                </p>
                
                {/* Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>

                {/* Verification and Details */}
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Verified Client</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{currentTestimonial.date}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{currentTestimonial.location}</span>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <h5 className="text-xl font-bold text-slate-800 mb-2">{currentTestimonial.project}</h5>
                  <p className="text-blue-600 font-medium mb-4">{currentTestimonial.projectType}</p>
                  
                  <blockquote className="text-lg text-slate-700 leading-relaxed italic mb-6">
                    "{currentTestimonial.testimonial}"
                  </blockquote>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {currentTestimonial.results.map((result, i) => (
                    <motion.div
                      key={i}
                      className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <result.icon className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                      <div className="text-xl font-bold text-slate-800 mb-1">{result.metric}</div>
                      <div className="text-xs text-slate-600">{result.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h6 className="text-sm font-bold text-slate-800 mb-3">Technologies Used</h6>
                  <div className="flex flex-wrap gap-2">
                    {currentTestimonial.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-lg border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-slate-800">{currentTestimonial.projectValue}</div>
                    <div className="text-xs text-slate-600">Project Value</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">{currentTestimonial.duration}</div>
                    <div className="text-xs text-slate-600">Duration</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-800">{currentTestimonial.relationshipType}</div>
                    <div className="text-xs text-slate-600">Client Type</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between p-6 border-t border-blue-100 bg-white/50">
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => onIndexChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                activeIndex === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onIndexChange(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1)}
            className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => onIndexChange(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1)}
            className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={onToggleAutoPlay}
            className={`p-2 border rounded-lg transition-all duration-200 ${
              isAutoPlaying 
                ? 'bg-blue-600 border-blue-600 text-white' 
                : 'bg-white border-gray-200 text-gray-600 hover:bg-blue-50'
            }`}
            aria-label={`${isAutoPlaying ? 'Pause' : 'Play'} auto-rotation`}
          >
            {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

// Search and Filter Component
const SearchAndFilter = ({ searchTerm, onSearchChange, activeCategory, onCategoryChange, showFeaturedOnly, onToggleFeatured, sortBy, onSortChange, totalCount, filteredCount }) => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-4 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search testimonials..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-10 py-3 bg-white/80 backdrop-blur-sm border border-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
          aria-label="Search testimonials"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 hover:bg-white hover:border-gray-300'
            }`}
            aria-label={`Filter by ${category.name}`}
          >
            <category.icon className="w-4 h-4" />
            <span className="hidden sm:inline">{category.name}</span>
            <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Additional Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleFeatured}
          className={`inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
            showFeaturedOnly
              ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
              : 'bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 hover:bg-white'
          }`}
        >
          <Star className="w-4 h-4" />
          <span>Featured</span>
        </button>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-sm"
          aria-label="Sort testimonials"
        >
          <option value="featured">Sort by Featured</option>
          <option value="rating">Rating</option>
          <option value="date">Date</option>
          <option value="value">Project Value</option>
          <option value="company">Company</option>
        </select>

        <div className="hidden lg:flex items-center px-4 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 text-sm text-gray-600">
          <span>{filteredCount} of {totalCount} testimonials</span>
        </div>
      </div>
    </motion.div>
  );
};

// Main Testimonials Component
const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [expandedTestimonials, setExpandedTestimonials] = useState(new Set());
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  // Get featured testimonials for carousel
  const featuredTestimonials = useMemo(() => 
    TESTIMONIALS_DATA.filter(t => t.featured).sort((a, b) => a.priority - b.priority),
    []
  );

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying || featuredTestimonials.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveCarouselIndex(prev => 
        prev >= featuredTestimonials.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredTestimonials.length]);

  // Filtered and sorted testimonials
  const filteredTestimonials = useMemo(() => {
    let testimonials = TESTIMONIALS_DATA;

    // Category filter
    if (activeCategory !== 'all') {
      testimonials = testimonials.filter(t => t.category === activeCategory);
    }

    // Search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      testimonials = testimonials.filter(t => 
        t.name.toLowerCase().includes(term) ||
        t.company.toLowerCase().includes(term) ||
        t.project.toLowerCase().includes(term) ||
        t.testimonial.toLowerCase().includes(term) ||
        t.technologies.some(tech => tech.toLowerCase().includes(term))
      );
    }

    // Featured filter
    if (showFeaturedOnly) {
      testimonials = testimonials.filter(t => t.featured);
    }

    // Sorting
    testimonials.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'date':
          return parseInt(b.date) - parseInt(a.date);
        case 'value':
          return parseInt(b.projectValue.replace(/\D/g, '')) - parseInt(a.projectValue.replace(/\D/g, ''));
        case 'company':
          return a.company.localeCompare(b.company);
        default: // featured
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.priority - b.priority;
      }
    });

    return testimonials;
  }, [activeCategory, searchTerm, showFeaturedOnly, sortBy]);

  const handleToggleExpand = useCallback((testimonialId) => {
    setExpandedTestimonials(prev => {
      const newSet = new Set(prev);
      if (newSet.has(testimonialId)) {
        newSet.delete(testimonialId);
      } else {
        newSet.add(testimonialId);
      }
      return newSet;
    });
  }, []);

  const handleViewCaseStudy = useCallback((testimonial) => {
    console.log('View case study for:', testimonial.name);
    // Navigate to case study or open modal
  }, []);

  // Animation variants
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

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      aria-label="Client testimonials and reviews"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-purple-200/50 text-purple-800 px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider mb-6 shadow-lg"
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Client Success Stories</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            Trusted by Industry Leaders
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Real stories from satisfied clients who trusted me to transform their digital presence. Their success speaks louder than any portfolio.
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className={`w-8 h-8 mx-auto mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-full h-full" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-slate-800 mb-1">{stat.number}</div>
                <div className="text-sm font-medium text-slate-600 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Testimonials Carousel */}
        {featuredTestimonials.length > 0 && (
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FeaturedCarousel
              testimonials={featuredTestimonials}
              activeIndex={activeCarouselIndex}
              onIndexChange={setActiveCarouselIndex}
              isAutoPlaying={isAutoPlaying}
              onToggleAutoPlay={() => setIsAutoPlaying(!isAutoPlaying)}
            />
          </motion.div>
        )}

        {/* Search and Filter */}
        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          showFeaturedOnly={showFeaturedOnly}
          onToggleFeatured={() => setShowFeaturedOnly(!showFeaturedOnly)}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalCount={TESTIMONIALS_DATA.length}
          filteredCount={filteredTestimonials.length}
        />

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.length > 0 ? (
              filteredTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                  searchTerm={searchTerm}
                  inView={isInView}
                  isExpanded={expandedTestimonials.has(testimonial.id)}
                  onToggleExpand={handleToggleExpand}
                  onViewCaseStudy={handleViewCaseStudy}
                />
              ))
            ) : (
              <motion.div
                className="col-span-full text-center py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No testimonials found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                    setShowFeaturedOnly(false);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, 25, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Ready to Join These Success Stories?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Let's create your next success story together. I'm excited to help transform your vision into a digital reality that drives real business results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Start your project with a free consultation"
                >
                  <Mail className="w-5 h-5" />
                  <span>Start Your Project</span>
                  <Sparkles className="w-5 h-5" />
                </motion.a>
                
                <motion.a
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 font-bold text-lg rounded-2xl hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="View my project portfolio"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Portfolio</span>
                </motion.a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                {[
                  { number: '98%', label: 'Client Satisfaction', icon: Heart },
                  { number: '150+', label: 'Projects Delivered', icon: Award },
                  { number: '24/7', label: 'Support Available', icon: Shield }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
                    <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 font-medium text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;