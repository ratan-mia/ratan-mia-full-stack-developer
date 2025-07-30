'use client';

import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, User, Clock } from 'lucide-react';
import { useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ratanmiadev@gmail.com',
      href: 'mailto:ratanmiadev@gmail.com',
      color: 'bg-black/10'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+880 1234 567890',
      href: 'tel:+8801234567890',
      color: 'bg-black/10'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
      color: 'bg-black/10'
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'Quick Chat',
      description: 'Let\'s discuss your project',
      action: 'Start Chat',
      color: 'bg-black/20'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a consultation',
      action: 'Book Now',
      color: 'bg-black/20'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section ref={ref} className="contact-section section-padding relative overflow-hidden" id="contact">
      {/* Background Graphics - Following Design Guidelines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circles */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-black/20 rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-black/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black/5 rounded-full"></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-16 right-16 w-32 h-32 border-4 border-black/10 rounded-design-lg rotate-45"></div>
        <div className="absolute bottom-16 left-16 w-24 h-24 bg-black/15 rounded-full"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 left-1/4 w-6 h-6 bg-black/20 rounded-sm"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-8 h-8 bg-black/15 rounded-design"
          animate={{ 
            y: [0, 20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
            className="section-header text-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Work Together
          </motion.h2>
          
          <motion.div
            className="w-16 h-1 bg-black mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p
            className="body-text text-black/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className={`flex items-center gap-4 p-6 ${item.color} rounded-design-lg hover:bg-black/20 transition-colors group`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="w-12 h-12 bg-black rounded-design-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">{item.title}</h4>
                    <p className="text-black/70">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  className={`p-6 ${action.color} rounded-design-lg group cursor-pointer hover:bg-black/30 transition-colors`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-black rounded-design flex items-center justify-center group-hover:scale-110 transition-transform">
                        <action.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">{action.title}</h4>
                        <p className="text-sm text-black/70">{action.description}</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-black text-accent rounded-design hover:bg-black/80 transition-colors">
                      {action.action}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              className="flex items-center gap-3 p-4 bg-black/10 rounded-design-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.1 }}
            >
              <motion.div
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Clock className="w-4 h-4 text-black/70" />
              <span className="text-black font-medium">Available for new projects</span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-black/10 p-8 rounded-design-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-black font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-design text-black placeholder-black/50 focus:outline-none focus:border-black/50 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.9 }}
                >
                  <label className="block text-black font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-design text-black placeholder-black/50 focus:outline-none focus:border-black/50 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.0 }}
              >
                <label className="block text-black font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-design text-black placeholder-black/50 focus:outline-none focus:border-black/50 transition-colors"
                  placeholder="Project discussion"
                  required
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.1 }}
              >
                <label className="block text-black font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-design text-black placeholder-black/50 focus:outline-none focus:border-black/50 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2 }}
              >
                <motion.button
                  type="submit"
                  className="w-full bg-black text-accent py-4 px-6 rounded-design font-semibold hover:bg-black/80 transition-colors flex items-center justify-center gap-3 group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Response Time Notice */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.3 }}
        >
          <p className="text-black/70 text-sm">
            📧 I typically respond within 24 hours • 🚀 Ready to start your project
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
