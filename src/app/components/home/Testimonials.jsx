'use client';

import { motion, useInView } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Building2, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

// Simplified testimonials data - focus on quality over quantity
const TESTIMONIALS = [
  {
    id: 1,
    name: "Dewan Saidur Rahman",
    position: "Managing Director",
    company: "Kawasaki Bangladesh",
    location: "Dhaka, Bangladesh",
    rating: 5,
    testimonial: "Ratan delivered an exceptional website for Chery Bangladesh with incredible 97% speed optimization. His expertise in React.js and Next.js, combined with 360-degree car model integration, exceeded our expectations.",
    project: "Chery Bangladesh Website",
    results: [
      "97% Speed Optimization",
      "360° Car Integration", 
      "On-time Delivery"
    ],
    featured: true
  },
  {
    id: 2,
    name: "Mohammad Nayab Mahmood",
    position: "Operation Manager", 
    company: "Chery Bangladesh",
    location: "Dhaka, Bangladesh",
    rating: 5,
    testimonial: "Working with Ratan was a game-changer for our business. He integrated CRM, Facebook Pixel, and WhatsApp Business API seamlessly. The 200% sales increase speaks for itself!",
    project: "Corporate Website Development",
    results: [
      "200% Sales Increase",
      "5+ API Integrations",
      "100% Client Satisfaction"
    ],
    featured: true
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Founder & CEO",
    company: "Digital Innovations Inc.",
    location: "New York, USA",
    rating: 5,
    testimonial: "Ratan transformed our vision into reality with exceptional full-stack development skills. The Laravel-based e-commerce platform is scalable, user-friendly, and performs excellently.",
    project: "E-commerce Platform",
    results: [
      "300% Online Growth",
      "95% Performance Score",
      "$500K Revenue Generated"
    ],
    featured: true
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    position: "Business Owner",
    company: "Hassan Enterprises",
    location: "Dubai, UAE",
    rating: 5,
    testimonial: "Complete website overhaul delivered beyond expectations. The site is fast, mobile-responsive, and has significantly improved our online inquiries. Great value for money!",
    project: "Business Website Redesign",
    results: [
      "400% Inquiry Increase",
      "98% Mobile Score",
      "1st Google Ranking"
    ],
    featured: false
  },
  {
    id: 5,
    name: "Emily Chen",
    position: "Marketing Director", 
    company: "TechStart Solutions",
    location: "Toronto, Canada",
    rating: 5,
    testimonial: "Impressive expertise in React.js and modern web technologies. Clean code, excellent performance, and intuitive user experience. Problem-solving skills made development smooth.",
    project: "React.js Web Application",
    results: [
      "99% Uptime",
      "50ms Load Time",
      "95% User Satisfaction"
    ],
    featured: false
  }
];

// Stats data
const STATS = [
  { number: '50+', label: 'Happy Clients' },
  { number: '98%', label: 'Success Rate' },
  { number: '5.0', label: 'Average Rating' },
  { number: '24/7', label: 'Support' }
];

// Testimonial Card Component
const TestimonialCard = ({ testimonial, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col"
    >
      {/* Quote Icon */}
      <Quote className="w-8 h-8 text-blue-100 mb-6" />
      
      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }, (_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'}`} 
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow">
        "{testimonial.testimonial}"
      </blockquote>

      {/* Results - Simple Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {testimonial.results.map((result, i) => (
          <span 
            key={i}
            className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100"
          >
            {result}
          </span>
        ))}
      </div>

      {/* Client Info */}
      <div className="border-t border-gray-100 pt-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-1">
              {testimonial.name}
            </h4>
            <p className="text-blue-600 font-medium text-sm mb-1">
              {testimonial.position}
            </p>
            <p className="text-gray-600 text-sm flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4" />
              {testimonial.company}
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {testimonial.location}
            </p>
          </div>
          
          {/* Avatar */}
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl font-bold ml-4">
            {testimonial.name.charAt(0)}
          </div>
        </div>
        
        {/* Project */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700">
            Project: {testimonial.project}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Featured Carousel Component
const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredTestimonials = TESTIMONIALS.filter(t => t.featured);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => 
        prev >= featuredTestimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredTestimonials.length]);

  const currentTestimonial = featuredTestimonials[currentIndex];

  if (!currentTestimonial) return null;

  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white mb-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Featured Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Star className="w-4 h-4 text-yellow-300 fill-current" />
          Featured Success Story
        </div>

        {/* Content */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Rating */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 font-light">
            "{currentTestimonial.testimonial}"
          </blockquote>

          {/* Client */}
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-1">{currentTestimonial.name}</h4>
            <p className="text-blue-200 mb-1">{currentTestimonial.position}</p>
            <p className="text-blue-100">{currentTestimonial.company}</p>
          </div>

          {/* Results */}
          <div className="flex flex-wrap justify-center gap-4">
            {currentTestimonial.results.map((result, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="font-semibold">{result}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setCurrentIndex(prev => prev === 0 ? featuredTestimonials.length - 1 : prev - 1)}
            className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {featuredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-white w-8' : 'bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={() => setCurrentIndex(prev => prev >= featuredTestimonials.length - 1 ? 0 : prev + 1)}
            className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Testimonials Component
const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            Client Success Stories
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from satisfied clients who trusted me to transform their digital presence and drive business growth.
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

        {/* Featured Carousel */}
        <FeaturedCarousel />

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            What My Clients Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create your next success story together. I'm excited to help transform your vision into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Your Project
              </a>
              
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                View Portfolio
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;