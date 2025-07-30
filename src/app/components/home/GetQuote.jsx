'use client';

import { motion, useInView } from 'framer-motion';
import { 
  Clock, 
  Star, 
  CheckCircle, 
  Users, 
  Send,
  MessageCircle,
  DollarSign,
  Calendar,
  ArrowRight,
  Zap,
  Shield,
  Target
} from 'lucide-react';
import { useState, useRef } from 'react';

const GetQuote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const stats = [
    { icon: Clock, number: '24h', label: 'Response', color: 'text-accent' },
    { icon: Users, number: '50+', label: 'Happy Clients', color: 'text-accent-secondary' },
    { icon: Star, number: '98%', label: 'Success Rate', color: 'text-accent' },
    { icon: CheckCircle, number: '$0', label: 'Quote Cost', color: 'text-accent-secondary' }
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
      
      if (response.ok) {
        alert('Quote request sent! I\'ll respond within 24 hours.');
        setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
      }
    } catch (error) {
      alert('Error sending request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="section-padding bg-black relative overflow-hidden" id="quote">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-30">
        {/* Large Gradient Circles */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tl from-accent-secondary/15 to-accent/15 rounded-full blur-3xl"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-40 left-1/4 w-24 h-24 bg-accent/20 rounded-design blur-xl"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-1/4 w-32 h-32 bg-accent-secondary/20 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-32 w-20 h-20 border-2 border-accent/20 rounded-design rotate-45"></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 bg-accent-secondary/20 rounded-design"></div>
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-accent/10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z"/>
        </svg>
      </div>

      <div className="container-design relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.h2
            className="section-header text-primary-text mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get Your <span className="text-accent">Free Quote</span>
          </motion.h2>
          
          <motion.div
            className="accent-line mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p
            className="body-text text-neutral max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your vision? Get a personalized quote in 24 hours.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <motion.div
                className={`w-16 h-16 ${stat.color} bg-card rounded-design-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>
              <motion.div
                className={`text-3xl font-bold ${stat.color} mb-2`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="caption-text text-neutral">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Quote Form */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="card-design">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary-text mb-2">Start Your Project</h3>
                <p className="text-neutral">Tell me about your vision</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-primary-text font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-design rounded-design text-primary-text placeholder-neutral focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-primary-text font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-design rounded-design text-primary-text placeholder-neutral focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Project Type & Budget */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-primary-text font-medium mb-2">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-design rounded-design text-primary-text focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-primary-text font-medium mb-2">Budget Range *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-design rounded-design text-primary-text focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-primary-text font-medium mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-card border border-design rounded-design text-primary-text placeholder-neutral focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Describe your project goals, features, and requirements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Free Quote</span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-primary-text mb-4">Why Choose My Service?</h3>
                <p className="text-neutral">Professional development with guaranteed results</p>
              </div>

              {/* Benefits List */}
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-accent rounded-design flex items-center justify-center group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-text mb-1">{benefit.title}</h4>
                      <p className="text-neutral text-sm">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact */}
              <motion.div
                className="bg-gradient-to-br from-accent/20 to-accent-secondary/20 p-6 rounded-design-lg border border-accent/30"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-accent" />
                  <h4 className="font-bold text-primary-text">Need Quick Discussion?</h4>
                </div>
                <p className="text-neutral text-sm mb-4">
                  For urgent projects or detailed conversations
                </p>
                <div className="flex gap-3">
                  <a
                    href="mailto:ratanmiadev@gmail.com"
                    className="flex-1 bg-accent text-black px-4 py-2 rounded-design text-sm font-medium text-center hover:bg-accent/90 transition-colors"
                  >
                    Email Me
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 bg-card border border-accent text-accent px-4 py-2 rounded-design text-sm font-medium text-center hover:bg-accent/10 transition-colors"
                  >
                    Contact Form
                  </a>
                </div>
              </motion.div>

              {/* Process Preview */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.6 }}
              >
                <h4 className="font-bold text-primary-text">What Happens Next?</h4>
                <div className="space-y-3">
                  {[
                    { step: '1', text: 'Receive your detailed quote', time: '24h' },
                    { step: '2', text: 'Free consultation call', time: '48h' },
                    { step: '3', text: 'Project kickoff', time: '72h' }
                  ].map((item, index) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent-secondary rounded-design flex items-center justify-center text-black text-sm font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <span className="text-primary-text text-sm">{item.text}</span>
                        <span className="text-neutral text-xs ml-2">({item.time})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="relative bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent/20 p-12 rounded-design-lg border border-accent/30 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-4 w-24 h-24 border-2 border-accent/20 rounded-design rotate-45"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent-secondary/10 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-text mb-4">
                Ready to Start Building?
              </h3>
              <p className="body-text text-neutral mb-8 max-w-2xl mx-auto">
                Join 50+ satisfied clients who transformed their vision into reality.
              </p>
              
              <motion.a
                href="#contact"
                className="btn-secondary group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Me Directly</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetQuote;
