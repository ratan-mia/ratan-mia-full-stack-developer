// components/GetQuote.jsx
'use client';

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Clock, Loader, Send, Shield, Star } from 'lucide-react';
import { useState } from 'react';

const GetQuote = ({ compact = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    features: [],
    priority: 'medium'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Animation variants following design guidelines
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
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

  // Dynamic classes based on compact prop
  const sectionClasses = compact
    ? "py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    : "py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden";

  const containerClasses = compact ? "max-w-4xl mx-auto relative z-10" : "max-w-6xl mx-auto relative z-10";
  
  const headingClasses = compact
    ? "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent"
    : "text-4xl md:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent";

  const cardPadding = compact ? "p-6 md:p-8" : "p-8 md:p-12";
  const gridGap = compact ? "gap-4 md:gap-6" : "gap-6 md:gap-8";

  const projectTypes = [
    { id: 'web-development', name: 'Full Stack Web Development', icon: '💻', description: 'Complete web solutions' },
    { id: 'ecommerce', name: 'E-commerce Solution', icon: '🛒', description: 'Online store platforms' },
    { id: 'wordpress', name: 'WordPress Development', icon: '📝', description: 'CMS & custom themes' },
    { id: 'performance', name: 'Performance Optimization', icon: '⚡', description: 'Speed & efficiency' },
    { id: 'ai-integration', name: 'AI Integration', icon: '🤖', description: 'Smart automation' },
    { id: 'devops', name: 'DevOps & Cloud Solutions', icon: '☁️', description: 'Infrastructure & deployment' },
    { id: 'mobile-app', name: 'Mobile App Development', icon: '📱', description: 'iOS & Android apps' },
    { id: 'other', name: 'Custom Solution', icon: '🔧', description: 'Tailored development' }
  ];

  const budgetRanges = [
    { id: 'under-5k', label: 'Under $5,000', value: 'under-5k', recommended: false },
    { id: '5k-15k', label: '$5,000 - $15,000', value: '5k-15k', recommended: true },
    { id: '15k-30k', label: '$15,000 - $30,000', value: '15k-30k', recommended: true },
    { id: '30k-50k', label: '$30,000 - $50,000', value: '30k-50k', recommended: false },
    { id: 'over-50k', label: 'Over $50,000', value: 'over-50k', recommended: false },
    { id: 'discuss', label: 'Let\'s Discuss', value: 'discuss', recommended: false }
  ];

  const timelineOptions = [
    { id: 'asap', label: 'ASAP', value: 'asap', description: 'Rush delivery (+25% fee)', urgent: true },
    { id: '1-2weeks', label: '1-2 Weeks', value: '1-2weeks', description: 'Quick turnaround', urgent: false },
    { id: '1month', label: '1 Month', value: '1month', description: 'Standard timeline', urgent: false },
    { id: '2-3months', label: '2-3 Months', value: '2-3months', description: 'Complex projects', urgent: false },
    { id: '3-6months', label: '3-6 Months', value: '3-6months', description: 'Enterprise solutions', urgent: false },
    { id: 'flexible', label: 'Flexible', value: 'flexible', description: 'No rush needed', urgent: false }
  ];

  const commonFeatures = [
    { name: 'Responsive Design', category: 'essential' },
    { name: 'SEO Optimization', category: 'essential' },
    { name: 'Content Management', category: 'standard' },
    { name: 'E-commerce Integration', category: 'advanced' },
    { name: 'Payment Processing', category: 'advanced' },
    { name: 'User Authentication', category: 'standard' },
    { name: 'API Integration', category: 'advanced' },
    { name: 'Analytics Dashboard', category: 'standard' },
    { name: 'Social Media Integration', category: 'standard' },
    { name: 'Email Marketing', category: 'advanced' },
    { name: 'Multi-language Support', category: 'advanced' },
    { name: 'Performance Optimization', category: 'essential' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature.name)
        ? prev.features.filter(f => f !== feature.name)
        : [...prev.features, feature.name]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.budget) newErrors.budget = 'Please select a budget range';
    if (!formData.description.trim()) newErrors.description = 'Project description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
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
      
      const data = await response.json();
      
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
          description: '',
          features: [],
          priority: 'medium'
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
    <section id="quote" className={sectionClasses}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className={containerClasses}>
        {/* Enhanced Header Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={compact ? "text-center mb-12" : "text-center mb-16"}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl mb-8 border border-white/50"
          >
            <motion.div 
              className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">Get Quote</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className={headingClasses}
          >
            Start Your Project Today
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className={compact 
              ? "text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
              : "text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
            }
          >
            Ready to transform your vision into reality? Get a detailed quote tailored to your specific needs. 
            Let's discuss your project and create something extraordinary together.
          </motion.p>
        </motion.div>

        {/* Quote Form - Full Width */}
        <motion.div 
          variants={slideInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden"
        >
            <div className={cardPadding}>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Status Message */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl border-l-4 ${
                      submitStatus === 'success'
                        ? 'bg-green-50 border-green-500 text-green-800'
                        : 'bg-red-50 border-red-500 text-red-800'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {submitStatus === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <div>
                        {submitStatus === 'success' ? (
                          <div>
                            <h3 className="font-bold">Quote Request Sent Successfully! 🎉</h3>
                            <p className="text-sm mt-1">Thank you! I'll review your project details and get back to you within 24 hours with a detailed quote and timeline.</p>
                          </div>
                        ) : (
                          <div>
                            <h3 className="font-bold">Oops! Something went wrong 😞</h3>
                            <p className="text-sm mt-1">Please try again or contact me directly at shorifull@gmail.com</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 bg-white rounded-xl border-2 ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:border-blue-500 focus:outline-none transition-all duration-200 text-slate-800`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-4 bg-white rounded-xl border-2 ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:border-blue-500 focus:outline-none transition-all duration-200 text-slate-800`}
                      placeholder="your.email@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-all duration-200 text-slate-800"
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-all duration-200 text-slate-800"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-4 uppercase tracking-wider">
                    Project Type *
                  </label>
                  <div className={`grid ${compact ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-4'} gap-4`}>
                    {projectTypes.map((type) => (
                      <motion.label
                        key={type.id}
                        className={`relative cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ${
                          formData.projectType === type.id
                            ? 'border-blue-500 bg-blue-50 shadow-lg'
                            : 'border-slate-200 hover:border-slate-300 bg-white hover:shadow-md'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={type.id}
                          checked={formData.projectType === type.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="text-center">
                          <div className="text-2xl mb-2">{type.icon}</div>
                          <div className="text-sm font-bold text-slate-800 mb-1">{type.name}</div>
                          <div className="text-xs text-slate-600 font-light">{type.description}</div>
                        </div>
                      </motion.label>
                    ))}
                  </div>
                  {errors.projectType && <p className="text-red-500 text-sm mt-2">{errors.projectType}</p>}
                </div>

                {/* Budget and Timeline */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-4 uppercase tracking-wider">
                      Budget Range *
                    </label>
                    <div className="space-y-2">
                      {budgetRanges.map((budget) => (
                        <label
                          key={budget.id}
                          className={`flex items-center justify-between p-3 cursor-pointer rounded-xl border transition-colors duration-200 ${
                            formData.budget === budget.value
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name="budget"
                              value={budget.value}
                              checked={formData.budget === budget.value}
                              onChange={handleInputChange}
                              className="mr-3 text-blue-600"
                            />
                            <span className="text-slate-800 font-medium">{budget.label}</span>
                          </div>
                          {budget.recommended && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                              Popular
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                    {errors.budget && <p className="text-red-500 text-sm mt-2">{errors.budget}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-4 uppercase tracking-wider">
                      Project Timeline
                    </label>
                    <div className="space-y-2">
                      {timelineOptions.map((timeline) => (
                        <label
                          key={timeline.id}
                          className={`flex items-center justify-between p-3 cursor-pointer rounded-xl border transition-colors duration-200 ${
                            formData.timeline === timeline.value
                              ? 'border-green-500 bg-green-50'
                              : 'border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name="timeline"
                              value={timeline.value}
                              checked={formData.timeline === timeline.value}
                              onChange={handleInputChange}
                              className="mr-3 text-green-600"
                            />
                            <div>
                              <span className="text-slate-800 font-medium">{timeline.label}</span>
                              <div className="text-xs text-slate-600">{timeline.description}</div>
                            </div>
                          </div>
                          {timeline.urgent && (
                            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                              +25%
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-4 uppercase tracking-wider">
                    Required Features
                  </label>
                  <div className="space-y-4">
                    {['essential', 'standard', 'advanced'].map((category) => (
                      <div key={category}>
                        <h4 className="text-sm font-bold text-slate-700 mb-2 capitalize">{category} Features</h4>
                        <div className={`grid ${compact ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-3`}>
                          {commonFeatures.filter(f => f.category === category).map((feature) => (
                            <motion.label
                              key={feature.name}
                              className={`flex items-center p-3 cursor-pointer rounded-xl border transition-all duration-200 ${
                                formData.features.includes(feature.name)
                                  ? 'border-purple-500 bg-purple-50'
                                  : 'border-slate-200 hover:bg-slate-50'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <input
                                type="checkbox"
                                checked={formData.features.includes(feature.name)}
                                onChange={() => handleFeatureToggle(feature)}
                                className="mr-3 text-purple-600 rounded"
                              />
                              <span className="text-sm text-slate-800 font-medium">{feature.name}</span>
                            </motion.label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-4 bg-white rounded-xl border-2 ${errors.description ? 'border-red-500' : 'border-slate-200'} focus:border-blue-500 focus:outline-none transition-colors duration-200 text-slate-800 resize-vertical`}
                    placeholder="Please describe your project in detail. Include any specific requirements, features, or goals you have in mind..."
                  />
                  {errors.description && <p className="text-red-500 text-sm mt-2">{errors.description}</p>}
                </div>

                {/* Priority Level */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-4 uppercase tracking-wider">
                    Project Priority
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['low', 'medium', 'high', 'urgent'].map((priority) => (
                      <label
                        key={priority}
                        className={`text-center p-3 cursor-pointer rounded-xl border transition-colors duration-200 ${
                          formData.priority === priority
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="priority"
                          value={priority}
                          checked={formData.priority === priority}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className={`font-bold capitalize ${
                          formData.priority === priority ? 'text-orange-800' : 'text-slate-800'
                        }`}>
                          {priority}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t border-slate-200">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 px-8 font-bold text-lg rounded-xl transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-slate-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                    } text-white shadow-xl hover:shadow-2xl`}
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-3">
                        <Loader className="w-5 h-5 animate-spin" />
                        Sending Your Quote Request...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-3">
                        Get My Free Quote
                        <Send className="w-5 h-5" />
                      </div>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

        {/* Trust Indicators - Show below form for both compact and non-compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Clock,
              title: 'Quick Response',
              description: 'Get your detailed quote within 24 hours'
            },
            {
              icon: Shield,
              title: 'Transparent Pricing',
              description: 'No hidden fees, clear project breakdown'
            },
            {
              icon: Star,
              title: 'Free Consultation',
              description: '30-minute strategy call included with every quote'
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 font-light">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section - Always show but adjust layout */}
        {compact && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Clock,
                title: 'Quick Response',
                description: 'Get your detailed quote within 24 hours'
              },
              {
                icon: Shield,
                title: 'Transparent Pricing',
                description: 'No hidden fees, clear project breakdown'
              },
              {
                icon: Star,
                title: 'Free Consultation',
                description: '30-minute strategy call included with every quote'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 font-light">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Additional Information for non-compact */}
        {!compact && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-slate-800">Quick Response Guarantee</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed font-light max-w-3xl mx-auto">
                I typically respond to all quote requests within 24 hours with a detailed proposal, 
                project timeline, and next steps. For urgent projects, feel free to call or WhatsApp me directly 
                at <span className="font-semibold text-blue-600">+8801751010966</span>.
              </p>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div 
          className="text-center mt-12 pt-8 border-t border-slate-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-slate-500 text-sm md:text-base font-light">
            © 2025 Shorifull Islam Ratan. Crafted with ❤️ using Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetQuote;