'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Dribbble,
  Facebook,
  Instagram,
  Shield,
  Star,
  Target,
  Twitter,
  Users,
  Zap
} from 'lucide-react';
import { useRef, useState } from 'react';

const GetQuote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    priority: 'medium',
    description: '',
    features: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stats = [
    { icon: Clock, number: '24h', label: 'Response', color: 'text-black' },
    { icon: Users, number: '50+', label: 'Happy Clients', color: 'text-black' },
    { icon: Star, number: '98%', label: 'Success Rate', color: 'text-black' },
    { icon: CheckCircle, number: '$0', label: 'Quote Cost', color: 'text-black' }
  ];

  const projectTypes = [
    'Website Development',
    'E-commerce Store', 
    'Web Application',
    'WordPress Site',
    'Landing Page',
    'Mobile App'
  ];

  const budgetRanges = [
    'Under $2,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$20,000+',
    'Let\'s Discuss'
  ];

  const timelineOptions = [
    'ASAP (Rush Job)',
    '1-2 Weeks',
    '1 Month',
    '2-3 Months',
    '3-6 Months',
    'Flexible Timeline'
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'high', label: 'High Priority' },
    { value: 'urgent', label: 'Urgent Priority' }
  ];

  const benefits = [
    { icon: Zap, title: 'Quick Response', desc: '24-hour detailed quote' },
    { icon: Shield, title: 'Transparent Pricing', desc: 'No hidden fees' },
    { icon: Target, title: 'Free Consultation', desc: '30-min strategy call' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert(`Quote request sent successfully! 🎉\n\nReference ID: #${data.referenceId}\n\nI'll respond within 24 hours with a detailed quote.`);
        setFormData({ 
          name: '', 
          email: '', 
          company: '',
          phone: '',
          projectType: '', 
          budget: '', 
          timeline: '',
          priority: 'medium',
          description: '',
          features: []
        });
      } else {
        alert(`Error: ${data.error || 'Failed to send quote request'}`);
      }
    } catch (error) {
      console.error('Error sending quote request:', error);
      alert('Error sending request. Please try again or contact me directly at shorifull@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="contact-section py-32 lg:py-40 relative overflow-hidden" id="quote">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Stats Grid - Minimal */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-black mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-black/70 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Heading */}
            <div>
              <div className="inline-block bg-black text-accent-lime px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider mb-4">
                Get Your Quote
              </div>
              <h2 className="text-5xl lg:text-7xl font-extrabold text-black leading-tight mb-6">
                Start Your<br />
                <span className="text-black">Project Today</span>
              </h2>
              <p className="text-xl text-black/90 max-w-lg leading-relaxed font-medium">
                Fill out the form and get a detailed quote within 24 hours. Free consultation included.
              </p>
            </div>

            {/* Benefits - Simplified */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-lg">{benefit.title}</h4>
                    <p className="text-black/70 text-sm">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              {[Facebook, Instagram, Twitter, Dribbble].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-black/10 rounded-lg flex items-center justify-center hover:bg-black/20 transition-colors"
                >
                  <Icon className="w-5 h-5 text-black" />
                </a>
              ))}
            </motion.div>

            {/* Copyright */}
            <div className="pt-8 text-sm text-black/60">
              Copyright © 2025 ThemeGenix
            </div>
          </motion.div>

          {/* Right Form - Enhanced */}
          <motion.div
            className="lg:pl-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-black rounded-3xl p-8 lg:p-10 shadow-2xl border-4 border-black">
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-accent-lime mb-2">Request Your Quote</h3>
                <p className="text-white/80 text-sm">All fields marked with * are required</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-accent-lime transition-colors text-lg"
                    placeholder="Full name*"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-accent-lime transition-colors text-lg"
                    placeholder="Email address*"
                  />
                </div>
              </div>

              {/* Company & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-accent-lime transition-colors text-lg"
                    placeholder="Company name (optional)"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-accent-lime transition-colors text-lg"
                    placeholder="Phone number (optional)"
                  />
                </div>
              </div>

              {/* Project Type & Budget Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/30 text-white focus:outline-none focus:border-accent-lime transition-colors text-lg appearance-none"
                  >
                    <option value="" className="bg-black text-white">Project Type*</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type} className="bg-black text-white">{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/30 text-white focus:outline-none focus:border-accent-lime transition-colors text-lg appearance-none"
                  >
                    <option value="" className="bg-black text-white">Budget Range*</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range} className="bg-black text-white">{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Timeline & Priority Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/30 text-white focus:outline-none focus:border-accent-lime transition-colors text-lg appearance-none"
                  >
                    <option value="" className="bg-black text-white">Timeline*</option>
                    {timelineOptions.map(time => (
                      <option key={time} value={time} className="bg-black text-white">{time}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/30 text-white focus:outline-none focus:border-accent-lime transition-colors text-lg appearance-none"
                  >
                    <option value="" className="bg-black text-white">Priority*</option>
                    {priorityOptions.map(opt => (
                      <option key={opt.value} value={opt.value} className="bg-black text-white">{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-accent-lime transition-colors resize-none text-lg"
                  placeholder="Project description & requirements*"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-lime text-black px-8 py-5 rounded-xl font-extrabold text-lg hover:bg-accent-lime/90 transition-all duration-300 inline-flex items-center justify-center gap-3 mt-8 uppercase tracking-wider shadow-lg hover:shadow-accent-lime/30 border-2 border-accent-lime"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Quote Request...</span>
                  </>
                ) : (
                  <>
                    <span>Get My Quote Now</span>
                    <ArrowRight className="w-6 h-6" />
                  </>
                )}
              </motion.button>
            </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;