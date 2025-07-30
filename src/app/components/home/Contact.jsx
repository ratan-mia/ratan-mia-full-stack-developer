'use client';

import { motion, useInView } from 'framer-motion';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ratanmiadev@gmail.com',
      href: 'mailto:ratanmiadev@gmail.com'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+880 1234567890',
      href: 'https://wa.me/8801234567890'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+880 1234567890',
      href: 'tel:+8801234567890'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      ref={ref} 
      className="contact-section section-padding relative overflow-hidden" 
      id="contact"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
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
            Ready to start your next project? Get in touch and let's create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Methods */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div>
              <h3 className="text-xl font-bold text-black mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : '_self'}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-center gap-4 p-4 bg-black/10 hover:bg-black/20 rounded-design-lg smooth-transition group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-12 h-12 bg-black rounded-design flex items-center justify-center group-hover:scale-110 smooth-transition">
                      <method.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-black mb-1">
                        {method.title}
                      </div>
                      <div className="text-black/80 caption-text">
                        {method.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              className="p-6 bg-black/10 rounded-design-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9 }}
            >
              <h4 className="font-bold text-black mb-2">
                Response Time
              </h4>
              <p className="text-black/80 caption-text">
                I typically respond within 24 hours. For urgent projects, please call or message directly.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-black font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-design text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent smooth-transition"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-black font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-design text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent smooth-transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-black font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/10 border border-black/20 rounded-design text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent smooth-transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-black text-accent font-semibold py-4 px-6 rounded-design hover:bg-black/90 smooth-transition"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 pt-16 border-t border-black/20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <p className="text-black/80 mb-6">
            Prefer a quick chat? Schedule a free consultation call.
          </p>
          
          <motion.a
            href="https://calendly.com/ratanmia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-accent font-semibold py-3 px-8 rounded-design hover:bg-black/90 smooth-transition"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5" />
            <span>Schedule a Call</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
