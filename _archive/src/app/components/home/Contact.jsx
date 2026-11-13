'use client';

import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';

// --- CONSTANTS ---
const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }
};

const CONTACT_INFO = [
  {
    icon: Mail,
    title: 'Email',
    value: 'shorifull@gmail.com',
    href: 'mailto:shorifull@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+8801751010966',
    href: 'tel:+8801751010966',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Dhaka, Bangladesh',
    href: '#',
  }
];

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  website: '',
  message: ''
};

// --- MAIN CONTACT COMPONENT ---
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert('✅ Message sent successfully! I\'ll get back to you soon.');
        setFormData(INITIAL_FORM_DATA);
      } else {
        alert(`Error: ${data.error || 'Failed to send message'}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Error sending message. Please try emailing me directly at shorifull@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  return (
    <section 
      ref={ref} 
      className="py-20 relative overflow-hidden bg-white"
      id="contact"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/95"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Info */}
          <motion.div
            className="space-y-10"
            variants={ANIMATION_VARIANTS.slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            {/* Header */}
            <div>
              <motion.div
                className="inline-block bg-black text-accent-lime px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider mb-4"
                variants={ANIMATION_VARIANTS.fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.25 }}
              >
                Contact Me
              </motion.div>
              <motion.h2
                className="text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-4"
                variants={ANIMATION_VARIANTS.fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.3 }}
              >
                Let's Work<br />Together
              </motion.h2>
              <motion.p
                className="text-lg text-black/80 leading-relaxed"
                variants={ANIMATION_VARIANTS.fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.35 }}
              >
                Have a project in mind? Drop me a message and I'll get back to you within 24 hours.
              </motion.p>
            </div>

            {/* Contact Cards */}
            <motion.div
              className="space-y-4"
              variants={ANIMATION_VARIANTS.fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
            >
              {CONTACT_INFO.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-black/5 transition-all group"
                  variants={ANIMATION_VARIANTS.fadeUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.45 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-accent-lime" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-sm">{item.title}</h4>
                    <p className="text-black/70 text-sm">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              className="flex items-center gap-3 p-4 bg-accent-lime/10 rounded-xl border-2 border-accent-lime/20"
              variants={ANIMATION_VARIANTS.fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-black font-bold text-sm">Available for new projects</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            variants={ANIMATION_VARIANTS.slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div
                variants={ANIMATION_VARIANTS.fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/20 text-black placeholder-black/50 focus:outline-none focus:border-black transition-colors text-lg font-medium"
                  placeholder="Your Name*"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                variants={ANIMATION_VARIANTS.fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.45 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/20 text-black placeholder-black/50 focus:outline-none focus:border-black transition-colors text-lg font-medium"
                  placeholder="Email Address*"
                />
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={ANIMATION_VARIANTS.fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.5 }}
              >
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/20 text-black placeholder-black/50 focus:outline-none focus:border-black transition-colors text-lg font-medium"
                  placeholder="Phone (optional)"
                />
              </motion.div>

              {/* Subject */}
              <motion.div
                variants={ANIMATION_VARIANTS.fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.55 }}
              >
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/20 text-black placeholder-black/50 focus:outline-none focus:border-black transition-colors text-lg font-medium"
                  placeholder="Subject*"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                variants={ANIMATION_VARIANTS.fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.6 }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black/20 text-black placeholder-black/50 focus:outline-none focus:border-black transition-colors resize-none text-lg font-medium"
                  placeholder="Your Message*"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={ANIMATION_VARIANTS.fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.65 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-accent-lime px-8 py-5 rounded-xl font-extrabold text-lg hover:bg-black/90 transition-all duration-300 inline-flex items-center justify-center gap-3 uppercase tracking-wider shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-accent-lime border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



export default Contact;
