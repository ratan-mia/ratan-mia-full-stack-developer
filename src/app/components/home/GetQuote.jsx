'use client';

import { motion, useInView } from 'framer-motion';
import { 
  Clock, 
  Star, 
  CheckCircle, 
  Users, 
  Mail, 
  Phone, 
  Send,
  MessageCircle,
  DollarSign,
  Calendar
} from 'lucide-react';
import { useState, useRef } from 'react';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  // Stats data
  const STATS = [
    { number: '24h', label: 'Response Time', icon: Clock },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '98%', label: 'Success Rate', icon: Star },
    { number: '$0', label: 'Quote Cost', icon: CheckCircle }
  ];

  // Project types
  const PROJECT_TYPES = [
    'Website Development',
    'E-commerce Store',
    'Web Application',
    'Landing Page',
    'WordPress Site',
    'Mobile App',
    'Other'
  ];

  // Budget ranges
  const BUDGET_RANGES = [
    'Under $2,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$20,000+',
    'Discuss Budget'
  ];

  // Timeline options
  const TIMELINE_OPTIONS = [
    'ASAP (Rush Job)',
    '2-4 weeks',
    '1-2 months',
    '2-3 months',
    '3+ months',
    'Flexible'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="quote" 
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400 opacity-5 rounded-full blur-3xl" />
      
      {/* Enhanced glow for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />

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
            className="text-cyan-400 font-semibold tracking-wider uppercase mb-2 inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            Get Your Quote
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            Start Your <span className="text-cyan-400">Dream Project</span>
          </motion.h2>

          {/* Accent Line */}
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6" />
          
          <motion.p 
            className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            Ready to transform your vision into reality? Get a detailed, personalized quote tailored to your needs.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-20"
        >
          {STATS.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              className="text-center p-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300 p-8 md:p-12"
        >
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-900/50 border border-green-700 rounded-xl">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <div>
                  <h3 className="text-lg font-semibold text-green-300">Quote Request Sent!</h3>
                  <p className="text-green-200">I'll get back to you within 24 hours with a detailed proposal.</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-900/50 border border-red-700 rounded-xl">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-red-400" />
                <div>
                  <h3 className="text-lg font-semibold text-red-300">Oops! Something went wrong</h3>
                  <p className="text-red-200">Please try again or contact me directly.</p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Get Started</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400"
                    placeholder="Your company (optional)"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Project Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white"
                  >
                    <option value="">Select project type</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-300 mb-2">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white"
                  >
                    <option value="">Select budget range</option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-gray-300 mb-2">
                    Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white"
                  >
                    <option value="">Select timeline</option>
                    {TIMELINE_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400"
                  placeholder="Tell me about your project goals, features needed, target audience, and any specific requirements..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-gray-900 font-semibold text-lg rounded-xl shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-xl'
                }`}
                whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                    Sending Quote Request...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Get My Free Quote
                  </>
                )}
              </motion.button>
              
              <p className="text-sm text-gray-400 mt-4">
                Free consultation included • No obligation • 24-hour response
              </p>
            </div>
          </form>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center p-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300">
            <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Quick Response</h3>
            <p className="text-gray-300">Get your detailed quote within 24 hours with project breakdown and timeline.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300">
            <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Transparent Pricing</h3>
            <p className="text-gray-300">No hidden fees, clear project costs, and flexible payment options available.</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300">
            <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Free Consultation</h3>
            <p className="text-gray-300">30-minute strategy call included to discuss your project in detail.</p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden"
        >
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
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need to Discuss Your Project Right Away?
            </h3>
            <p className="text-cyan-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              For urgent projects or detailed discussions, feel free to reach out directly. I'm here to help!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+8801751010966"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-cyan-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                +880 175 101 0966
              </motion.a>
              
              <motion.a
                href="mailto:shorifull@gmail.com"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                shorifull@gmail.com
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetQuote;