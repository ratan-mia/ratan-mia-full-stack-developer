'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    Award,
    Building2,
    Calendar,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Heart,
    Mail,
    MapPin,
    Play,
    Quote,
    Shield,
    Star,
    Target,
    ThumbsUp,
    Users,
    Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

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

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Dewan Saidur Rahman",
      position: "Managing Director",
      company: "Kawasaki Bangladesh",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      category: "ecommerce",
      project: "Chery Bangladesh Website",
      date: "2024",
      testimonial: "Ratan delivered an exceptional website for Chery Bangladesh with incredible 97% speed optimization. His expertise in React.js and Next.js, combined with 360-degree car model integration, exceeded our expectations. The project was completed on time and within budget. Highly recommend his services for any complex web development project.",
      results: ["97% Speed Optimization", "360° Car Model Integration", "On-time Delivery", "Exceeded Expectations"],
      featured: true,
      verified: true,
      location: "Dhaka, Bangladesh",
      projectValue: "$15,000+",
      videoTestimonial: false
    },
    {
      id: 2,
      name: "Mohammad Nayab Mahmood",
      position: "Operation Manager",
      company: "Chery Bangladesh",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      category: "corporate",
      project: "Corporate Website Development",
      date: "2024",
      testimonial: "Working with Ratan was a game-changer for our business. He not only developed a stunning website but also integrated CRM, Facebook Pixel, and WhatsApp Business API seamlessly. His attention to detail and technical expertise is outstanding. The 200% sales increase speaks for itself!",
      results: ["200% Sales Increase", "CRM Integration", "API Integration", "Professional Design"],
      featured: true,
      verified: true,
      location: "Dhaka, Bangladesh",
      projectValue: "$12,000+",
      videoTestimonial: false
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
      date: "2023",
      testimonial: "Ratan transformed our vision into reality with his exceptional full-stack development skills. The Laravel-based e-commerce platform he built is scalable, user-friendly, and performs excellently. His communication throughout the project was transparent and professional. We saw immediate improvements in our online presence.",
      results: ["Scalable Architecture", "User-friendly Design", "Performance Optimization", "Professional Communication"],
      featured: false,
      verified: true,
      location: "New York, USA",
      projectValue: "$8,000+",
      videoTestimonial: false
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
      date: "2023",
      testimonial: "I needed a complete website overhaul for my business, and Ratan delivered beyond expectations. His WordPress expertise combined with custom development created exactly what we needed. The site is fast, mobile-responsive, and has significantly improved our online inquiries. Great value for money!",
      results: ["Mobile Responsive", "Fast Loading", "Increased Inquiries", "Custom Development"],
      featured: false,
      verified: true,
      location: "Dubai, UAE",
      projectValue: "$5,000+",
      videoTestimonial: false
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
      date: "2023",
      testimonial: "Ratan's expertise in React.js and modern web technologies is impressive. He built our complex web application with clean code, excellent performance, and intuitive user experience. His problem-solving skills and attention to detail made the entire development process smooth and efficient.",
      results: ["Clean Code", "Excellent Performance", "Intuitive UX", "Efficient Process"],
      featured: false,
      verified: true,
      location: "Toronto, Canada",
      projectValue: "$10,000+",
      videoTestimonial: false
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
      date: "2022",
      testimonial: "Ratan created an amazing Shopify store for our business with custom features and integrations. His expertise in Shopify development and API integrations helped us achieve our e-commerce goals. The store is performing excellently and our sales have increased significantly since launch.",
      results: ["Custom Features", "API Integrations", "Increased Sales", "Excellent Performance"],
      featured: false,
      verified: true,
      location: "Los Angeles, USA",
      projectValue: "$7,500+",
      videoTestimonial: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Reviews', icon: Users, count: testimonials.length },
    { id: 'ecommerce', name: 'E-commerce', icon: Building2, count: testimonials.filter(t => t.category === 'ecommerce').length },
    { id: 'corporate', name: 'Corporate', icon: Building2, count: testimonials.filter(t => t.category === 'corporate').length },
    { id: 'startup', name: 'Startups', icon: Zap, count: testimonials.filter(t => t.category === 'startup').length },
    { id: 'business', name: 'Business', icon: Target, count: testimonials.filter(t => t.category === 'business').length },
    { id: 'tech', name: 'Tech', icon: Shield, count: testimonials.filter(t => t.category === 'tech').length }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial(prev => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  const featuredTestimonials = testimonials.filter(t => t.featured);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-purple-100 text-purple-800 px-6 py-3 font-medium text-sm tracking-wider uppercase mb-6"
          >
            <Heart className="w-4 h-4" />
            Client Testimonials
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-800"
          >
            What Clients Say About My Work
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Real feedback from satisfied clients who trusted me with their projects. 
            Their success stories speak louder than any portfolio.
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            { number: '50+', label: 'Happy Clients', icon: Users, color: 'text-blue-500' },
            { number: '97%', label: 'Client Satisfaction', icon: ThumbsUp, color: 'text-green-500' },
            { number: '5.0', label: 'Average Rating', icon: Star, color: 'text-yellow-500' },
            { number: '100%', label: 'Project Success', icon: Award, color: 'text-purple-500' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 md:p-6 bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.color} mx-auto mb-2`} />
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-slate-600 font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Testimonials Carousel */}
        <motion.div 
          className="mb-12 md:mb-16"
          variants={slideInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
            Featured Client Reviews
          </h3>

          <div className="relative">
            {/* Main Testimonial Display */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 md:p-12 border border-blue-200 relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-200" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  {featuredTestimonials[activeTestimonial] && (
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                      {/* Client Info */}
                      <div className="text-center md:text-left">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto md:mx-0 mb-4 flex items-center justify-center text-white text-2xl font-bold">
                          {featuredTestimonials[activeTestimonial].name.charAt(0)}
                        </div>
                        <h4 className="text-xl font-bold text-slate-800 mb-1">
                          {featuredTestimonials[activeTestimonial].name}
                        </h4>
                        <p className="text-blue-600 font-semibold mb-1">
                          {featuredTestimonials[activeTestimonial].position}
                        </p>
                        <p className="text-slate-600 text-sm mb-3">
                          {featuredTestimonials[activeTestimonial].company}
                        </p>
                        
                        {/* Rating */}
                        <div className="flex justify-center md:justify-start gap-1 mb-3">
                          {renderStars(featuredTestimonials[activeTestimonial].rating)}
                        </div>

                        {/* Verification Badge */}
                        {featuredTestimonials[activeTestimonial].verified && (
                          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 text-xs font-medium">
                            <CheckCircle className="w-3 h-3" />
                            Verified Client
                          </div>
                        )}
                      </div>

                      {/* Testimonial Content */}
                      <div className="md:col-span-2">
                        <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 italic">
                          "{featuredTestimonials[activeTestimonial].testimonial}"
                        </blockquote>

                        {/* Project Results */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {featuredTestimonials[activeTestimonial].results.map((result, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {result}
                            </div>
                          ))}
                        </div>

                        {/* Project Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {featuredTestimonials[activeTestimonial].date}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {featuredTestimonials[activeTestimonial].location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            {featuredTestimonials[activeTestimonial].projectValue}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {featuredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTestimonial(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`w-3 h-3 transition-all duration-200 ${
                      activeTestimonial === index ? 'bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <motion.button
                  onClick={prevTestimonial}
                  className="p-2 bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </motion.button>
                <motion.button
                  onClick={nextTestimonial}
                  className="p-2 bg-white border border-slate-200 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </motion.button>
                <motion.button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`p-2 border transition-all duration-200 ${
                    isAutoPlaying 
                      ? 'bg-blue-600 border-blue-600 text-white' 
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-blue-50'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="bg-white/20 text-xs px-2 py-1 ml-1">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {filteredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white/80 backdrop-blur-sm p-6 border border-white/50 hover:shadow-xl transition-all duration-300 group"
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.position}</p>
                  <p className="text-slate-500 text-xs">{testimonial.company}</p>
                </div>
                {testimonial.featured && (
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                )}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial */}
              <blockquote className="text-slate-600 text-sm leading-relaxed mb-4 italic">
                "{testimonial.testimonial.substring(0, 150)}..."
              </blockquote>

              {/* Project Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Target className="w-3 h-3" />
                  {testimonial.project}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="w-3 h-3" />
                  {testimonial.date}
                </div>
              </div>

              {/* Verification */}
              {testimonial.verified && (
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-xs font-medium">
                    Read Full Review
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
              Let's create your next success story together. I'm excited to help bring your vision to life!
            </p>
            <motion.button
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 font-bold hover:bg-blue-50 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;