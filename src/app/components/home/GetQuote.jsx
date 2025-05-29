// components/GetQuote.jsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const GetQuote = () => {
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

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const projectTypes = [
    { id: 'web-development', name: 'Full Stack Web Development', icon: '💻' },
    { id: 'ecommerce', name: 'E-commerce Solution', icon: '🛒' },
    { id: 'wordpress', name: 'WordPress Development', icon: '📝' },
    { id: 'performance', name: 'Performance Optimization', icon: '⚡' },
    { id: 'ai-integration', name: 'AI Integration', icon: '🤖' },
    { id: 'devops', name: 'DevOps & Cloud Solutions', icon: '☁️' },
    { id: 'mobile-app', name: 'Mobile App Development', icon: '📱' },
    { id: 'other', name: 'Other / Custom Solution', icon: '🔧' }
  ];

  const budgetRanges = [
    { id: 'under-5k', label: 'Under $5,000', value: 'under-5k' },
    { id: '5k-15k', label: '$5,000 - $15,000', value: '5k-15k' },
    { id: '15k-30k', label: '$15,000 - $30,000', value: '15k-30k' },
    { id: '30k-50k', label: '$30,000 - $50,000', value: '30k-50k' },
    { id: 'over-50k', label: 'Over $50,000', value: 'over-50k' },
    { id: 'discuss', label: 'Let\'s Discuss', value: 'discuss' }
  ];

  const timelineOptions = [
    { id: 'asap', label: 'ASAP (Rush Job)', value: 'asap' },
    { id: '1-2weeks', label: '1-2 Weeks', value: '1-2weeks' },
    { id: '1month', label: '1 Month', value: '1month' },
    { id: '2-3months', label: '2-3 Months', value: '2-3months' },
    { id: '3-6months', label: '3-6 Months', value: '3-6months' },
    { id: 'flexible', label: 'Flexible Timeline', value: 'flexible' }
  ];

  const commonFeatures = [
    'Responsive Design',
    'SEO Optimization',
    'Content Management',
    'E-commerce Integration',
    'Payment Processing',
    'User Authentication',
    'API Integration',
    'Analytics Dashboard',
    'Social Media Integration',
    'Email Marketing',
    'Multi-language Support',
    'Performance Optimization'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
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
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
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
    <section id="quote" className="py-24 px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-indigo-500/8 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-500/8 to-pink-500/8 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-4 shadow-xl mb-8 border border-white/50"
          >
            <motion.div 
              className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">Get Quote</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-8 text-slate-800 capitalize"
          >
            Start Your Project Today
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Ready to transform your vision into reality? Get a detailed quote tailored to your specific needs. 
            Let's discuss your project and create something extraordinary together.
          </motion.p>
        </motion.div>

        {/* Quote Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-sm shadow-2xl border border-white/50 overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
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
                    className={`w-full px-4 py-4 bg-white border-2 ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:border-blue-500 focus:outline-none transition-colors duration-200 text-slate-800`}
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
                    className={`w-full px-4 py-4 bg-white border-2 ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:border-blue-500 focus:outline-none transition-colors duration-200 text-slate-800`}
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
                    className="w-full px-4 py-4 bg-white border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 text-slate-800"
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
                    className="w-full px-4 py-4 bg-white border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 text-slate-800"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-4 uppercase tracking-wider">
                  Project Type *
                </label>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {projectTypes.map((type) => (
                    <motion.label
                      key={type.id}
                      className={`relative cursor-pointer p-4 border-2 transition-all duration-300 ${
                        formData.projectType === type.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
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
                        <div className="text-sm font-medium text-slate-800">{type.name}</div>
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
                        className={`flex items-center p-3 cursor-pointer border transition-colors duration-200 ${
                          formData.budget === budget.value
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="budget"
                          value={budget.value}
                          checked={formData.budget === budget.value}
                          onChange={handleInputChange}
                          className="mr-3 text-blue-600"
                        />
                        <span className="text-slate-800">{budget.label}</span>
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
                        className={`flex items-center p-3 cursor-pointer border transition-colors duration-200 ${
                          formData.timeline === timeline.value
                            ? 'border-green-500 bg-green-50'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeline"
                          value={timeline.value}
                          checked={formData.timeline === timeline.value}
                          onChange={handleInputChange}
                          className="mr-3 text-green-600"
                        />
                        <span className="text-slate-800">{timeline.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-4 uppercase tracking-wider">
                  Required Features (Select All That Apply)
                </label>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {commonFeatures.map((feature) => (
                    <motion.label
                      key={feature}
                      className={`flex items-center p-3 cursor-pointer border transition-all duration-200 ${
                        formData.features.includes(feature)
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.features.includes(feature)}
                        onChange={() => handleFeatureToggle(feature)}
                        className="mr-3 text-purple-600"
                      />
                      <span className="text-sm text-slate-800">{feature}</span>
                    </motion.label>
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
                  className={`w-full px-4 py-4 bg-white border-2 ${errors.description ? 'border-red-500' : 'border-slate-200'} focus:border-blue-500 focus:outline-none transition-colors duration-200 text-slate-800 resize-vertical`}
                  placeholder="Please describe your project in detail. Include any specific requirements, features, or goals you have in mind..."
                />
                {errors.description && <p className="text-red-500 text-sm mt-2">{errors.description}</p>}
              </div>

              {/* Priority Level */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-4 uppercase tracking-wider">
                  Project Priority
                </label>
                <div className="flex gap-4">
                  {['low', 'medium', 'high', 'urgent'].map((priority) => (
                    <label
                      key={priority}
                      className={`flex-1 text-center p-3 cursor-pointer border transition-colors duration-200 ${
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
                      <span className={`font-medium capitalize ${
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
                  className={`w-full py-5 px-8 font-bold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  } text-white shadow-xl hover:shadow-2xl`}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white animate-spin"></div>
                      Sending Your Quote Request...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-3">
                      Get My Free Quote
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Status Messages */}
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-8 p-6 border-l-4 ${
              submitStatus === 'success'
                ? 'bg-green-50 border-green-500 text-green-800'
                : 'bg-red-50 border-red-500 text-red-800'
            }`}
          >
            {submitStatus === 'success' ? (
              <div>
                <h3 className="font-bold mb-2">Quote Request Sent Successfully! 🎉</h3>
                <p>Thank you for your interest! I'll review your project details and get back to you within 24 hours with a detailed quote and project timeline.</p>
              </div>
            ) : (
              <div>
                <h3 className="font-bold mb-2">Oops! Something went wrong 😞</h3>
                <p>There was an error sending your quote request. Please try again or contact me directly at shorifull@gmail.com</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: '⚡',
              title: 'Quick Response',
              description: 'Get your detailed quote within 24 hours'
            },
            {
              icon: '💰',
              title: 'Transparent Pricing',
              description: 'No hidden fees, clear project breakdown'
            },
            {
              icon: '🤝',
              title: 'Free Consultation',
              description: '30-minute strategy call included with every quote'
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center p-6 bg-white/60 backdrop-blur-sm border border-white/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 font-light">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GetQuote;