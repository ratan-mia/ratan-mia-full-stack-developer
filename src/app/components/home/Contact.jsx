'use client';

import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useRef, useState } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ratanmiadev@gmail.com',
      href: 'mailto:ratanmiadev@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+880 1234 567890',
      href: 'tel:+8801234567890',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
    }
  ];

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'Quick Chat',
      description: 'Let\'s discuss your project',
      action: 'Start Chat',
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a consultation',
      action: 'Book Now',
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
    <div className="relative" id="contact">
      {/* Map Section */}
      <div className="absolute left-0 top-0 w-1/2 z-10 -mt-20">
        <motion.div
          className="h-[60vh]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Embedded Google Map for Dhaka, Bangladesh */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d90.25487292343747!3d23.780753239723563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1703123456789!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dhaka, Bangladesh Location"
          />
        </motion.div>
        {/* Contact Information */}
        <motion.div
          className="mt-16 space-y-6 px-5"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                className="flex items-center gap-3 p-4 bg-black/10 rounded-lg hover:bg-black/20 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-4 h-4 text-accent-lime" />
                </div>
                <div>
                  <h4 className="font-semibold text-black text-sm">{item.title}</h4>
                  <p className="text-black/70 text-xs">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                className="p-4 bg-black/20 rounded-lg group cursor-pointer hover:bg-black/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <action.icon className="w-4 h-4 text-accent-lime" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black text-sm">{action.title}</h4>
                      <p className="text-xs text-black/70">{action.description}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 bg-black text-accent-lime rounded text-xs hover:bg-black/80 transition-colors">
                    {action.action}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Availability Status & Response Time */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.6 }}
          >
            <div className="flex items-center gap-3 p-3 bg-black/10 rounded-lg">
              <motion.div
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Clock className="w-4 h-4 text-black/70" />
              <span className="text-black font-medium text-sm">Available for new projects</span>
            </div>

            <div className="text-center">
              <p className="text-black/70 text-sm">
                📧 I typically respond within 24 hours • 🚀 Ready to start your project
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Main lime section */}
      <section ref={ref} className="bg-accent-lime relative min-h-[70vh] overflow-visible">
        <motion.div
          className="grid lg:grid-cols-2 min-h-[70vh]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Left Column: Space for map */}
          <div className="relative">
            {/* Empty space - map is positioned absolutely outside */}
          </div>

          {/* Right Column: Contact Form on lime background */}
          <motion.div
            className="text-black flex flex-col justify-center px-12 py-16 lg:px-16 xl:px-20 lg:py-20 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Have Any Project on Your Mind?
            </motion.h2>

            <motion.p
              className="text-lg lg:text-xl text-black/80 leading-relaxed mb-12 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Great! We're excited to hear from you and let's start something
            </motion.p>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/30 text-black placeholder-black/60 focus:outline-none focus:border-black transition-colors text-lg"
                    placeholder="Full name*"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/30 text-black placeholder-black/60 focus:outline-none focus:border-black transition-colors text-lg"
                    placeholder="Email address*"
                    required
                  />
                </motion.div>
              </div>

              {/* Website Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/30 text-black placeholder-black/60 focus:outline-none focus:border-black transition-colors text-lg"
                  placeholder="Website link"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/30 text-black placeholder-black/60 focus:outline-none focus:border-black transition-colors resize-none text-lg"
                  placeholder="How Can We Help You*"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
              >
                <motion.button
                  type="submit"
                  className="bg-black text-accent-lime px-8 py-4 rounded-none font-semibold text-lg hover:bg-black/90 transition-colors inline-flex items-center gap-3 mt-8 uppercase tracking-wider"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </form>


          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;