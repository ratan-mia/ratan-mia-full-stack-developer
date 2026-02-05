'use client';

import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';

// --- CONSTANTS ---
const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
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
        duration: 0.8,
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
    href: 'tel:+8801234567890',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Dhaka, Bangladesh',
    href: '#',
  }
];

const QUICK_ACTIONS = [
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

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  website: '',
  message: ''
};

// --- CONTACT INFO ITEM COMPONENT ---
const ContactInfoItem = ({ item, index, isInView }) => (
  <motion.a
    href={item.href}
    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-black/10 rounded-lg hover:bg-black/20 transition-colors group focus:outline-none focus:ring-2 focus:ring-black/20"
    variants={ANIMATION_VARIANTS.fadeUp}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    transition={{ delay: 1.1 + index * 0.1 }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
      <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-accent-lime" />
    </div>
    <div className="min-w-0 flex-1">
      <h4 className="font-semibold text-black text-xs sm:text-sm truncate">{item.title}</h4>
      <p className="text-black/70 text-xs truncate">{item.value}</p>
    </div>
  </motion.a>
);

// --- QUICK ACTION ITEM COMPONENT ---
const QuickActionItem = ({ action, index, isInView }) => (
  <motion.div
    className="p-3 sm:p-4 bg-black/20 rounded-lg group cursor-pointer hover:bg-black/30 transition-colors focus-within:ring-2 focus-within:ring-black/20"
    variants={ANIMATION_VARIANTS.fadeUp}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    transition={{ delay: 1.4 + index * 0.1 }}
    whileHover={{ scale: 1.02 }}
    role="button"
    tabIndex={0}
  >
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
          <action.icon className="w-3 h-3 sm:w-4 sm:h-4 text-accent-lime" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-semibold text-black text-xs sm:text-sm truncate">{action.title}</h4>
          <p className="text-xs text-black/70 truncate">{action.description}</p>
        </div>
      </div>
      <button className="px-2 sm:px-3 py-1 bg-black text-accent-lime rounded text-xs hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-lime/20 whitespace-nowrap">
        {action.action}
      </button>
    </div>
  </motion.div>
);

// --- FORM INPUT COMPONENT ---
const FormInput = ({ 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  rows,
  isInView,
  delay 
}) => {
  const Component = type === 'textarea' ? 'textarea' : 'input';
  
  return (
    <motion.div
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
    >
      <Component
        type={type !== 'textarea' ? type : undefined}
        name={name}
        value={value}
        onChange={onChange}
        rows={type === 'textarea' ? rows : undefined}
        className="w-full px-0 py-3 sm:py-4 bg-transparent border-0 border-b-2 border-black/30 text-black placeholder-black/60 focus:outline-none focus:border-black transition-colors text-base sm:text-lg resize-none"
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </motion.div>
  );
};

// --- MAP SECTION COMPONENT ---
const MapSection = ({ isInView }) => (
  <div className="hidden lg:block absolute left-0 top-0 w-1/2 z-10 -mt-20">
    <motion.div
      className="h-[60vh]"
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
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
    
    {/* Contact Information - Desktop Only */}
    <motion.div
      className="mt-16 space-y-6 px-5"
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: 1.0 }}
    >
      {/* Contact Methods */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {CONTACT_INFO.map((item, index) => (
          <ContactInfoItem
            key={item.title}
            item={item}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {QUICK_ACTIONS.map((action, index) => (
          <QuickActionItem
            key={action.title}
            action={action}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>

      {/* Availability Status */}
      <motion.div
        className="space-y-3"
        variants={ANIMATION_VARIANTS.fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 1.6 }}
      >
        <div className="flex items-center gap-2 sm:gap-3 p-3 bg-black/10 rounded-lg">
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Clock className="w-4 h-4 text-black/70" />
          <span className="text-black font-medium text-xs sm:text-sm">Available for new projects</span>
        </div>

        <div className="text-center">
          <p className="text-black/70 text-xs sm:text-sm">
            📧 I typically respond within 24 hours • 🚀 Ready to start your project
          </p>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

// --- CONTACT FORM COMPONENT ---
const ContactForm = ({ formData, handleChange, handleSubmit, isSubmitting, isInView }) => (
  <motion.div
    className="text-black flex flex-col justify-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 sm:py-16 md:py-20 relative"
    variants={ANIMATION_VARIANTS.slideInRight}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    transition={{ delay: 0.2 }}
  >
    {/* Modern Header with Badge */}
    <motion.div
      className="mb-10"
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: 0.3 }}
    >
      <div className="inline-block bg-black text-accent-lime px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-widest mb-6 shadow-lg">
        ✉️ Get In Touch
      </div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
        Let's Create<br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">Something Amazing</span>
      </h2>
      <p className="text-lg sm:text-xl text-black/80 leading-relaxed max-w-xl font-medium">
        Have a project in mind? Drop me a message and I'll get back to you within 24 hours. Let's turn your ideas into reality! 🚀
      </p>
    </motion.div>

    {/* Mobile Contact Info */}
    <motion.div
      className="lg:hidden mb-8 space-y-4"
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: 0.45 }}
    >
      {/* Contact Methods - Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {CONTACT_INFO.map((item, index) => (
          <ContactInfoItem
            key={item.title}
            item={item}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>

      {/* Quick Actions - Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {QUICK_ACTIONS.map((action, index) => (
          <QuickActionItem
            key={action.title}
            action={action}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>

      {/* Availability Status - Mobile */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 sm:gap-3 p-3 bg-black/10 rounded-lg">
          <motion.div
            className="w-3 h-3 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Clock className="w-4 h-4 text-black/70" />
          <span className="text-black font-medium text-xs sm:text-sm">Available for new projects</span>
        </div>

        <div className="text-center">
          <p className="text-black/70 text-xs sm:text-sm">
            📧 I typically respond within 24 hours • 🚀 Ready to start your project
          </p>
        </div>
      </div>
    </motion.div>

    {/* Enhanced Form Card */}
    <motion.div
      className="bg-white border-2 border-black/10 rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-500"
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: 0.45 }}
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Name and Email Row - Modern Floating Labels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            className="relative"
            variants={ANIMATION_VARIANTS.fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full px-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl text-black placeholder-transparent focus:outline-none focus:border-black focus:bg-white transition-all duration-300 text-lg font-medium"
              placeholder="Full name"
              id="name"
            />
            <label
              htmlFor="name"
              className="absolute left-6 -top-3 bg-white px-2 text-sm font-bold text-black/70 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black/50 peer-placeholder-shown:top-5 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-focus:bg-white transition-all duration-300"
            >
              Full Name *
            </label>
          </motion.div>
          
          <motion.div
            className="relative"
            variants={ANIMATION_VARIANTS.fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.55 }}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full px-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl text-black placeholder-transparent focus:outline-none focus:border-black focus:bg-white transition-all duration-300 text-lg font-medium"
              placeholder="Email address"
              id="email"
            />
            <label
              htmlFor="email"
              className="absolute left-6 -top-3 bg-white px-2 text-sm font-bold text-black/70 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black/50 peer-placeholder-shown:top-5 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-focus:bg-white transition-all duration-300"
            >
              Email Address *
            </label>
          </motion.div>
        </div>

        {/* Phone and Subject Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            className="relative"
            variants={ANIMATION_VARIANTS.fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
          >
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="peer w-full px-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl text-black placeholder-transparent focus:outline-none focus:border-black focus:bg-white transition-all duration-300 text-lg font-medium"
              placeholder="Phone number"
              id="phone"
            />
            <label
              htmlFor="phone"
              className="absolute left-6 -top-3 bg-white px-2 text-sm font-bold text-black/70 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black/50 peer-placeholder-shown:top-5 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-focus:bg-white transition-all duration-300"
            >
              Phone Number (optional)
            </label>
          </motion.div>
          
          <motion.div
            className="relative"
            variants={ANIMATION_VARIANTS.fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.65 }}
          >
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="peer w-full px-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl text-black placeholder-transparent focus:outline-none focus:border-black focus:bg-white transition-all duration-300 text-lg font-medium"
              placeholder="Subject"
              id="subject"
            />
            <label
              htmlFor="subject"
              className="absolute left-6 -top-3 bg-white px-2 text-sm font-bold text-black/70 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black/50 peer-placeholder-shown:top-5 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-focus:bg-white transition-all duration-300"
            >
              Subject *
            </label>
          </motion.div>
        </div>

        {/* Website Link */}
        <motion.div
          className="relative"
          variants={ANIMATION_VARIANTS.fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.7 }}
        >
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="peer w-full px-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl text-black placeholder-transparent focus:outline-none focus:border-black focus:bg-white transition-all duration-300 text-lg font-medium"
            placeholder="Website link"
            id="website"
          />
          <label
            htmlFor="website"
            className="absolute left-6 -top-3 bg-white px-2 text-sm font-bold text-black/70 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black/50 peer-placeholder-shown:top-5 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-focus:bg-white transition-all duration-300"
          >
            Website (optional)
          </label>
        </motion.div>

        {/* Message Textarea */}
        <motion.div
          className="relative"
          variants={ANIMATION_VARIANTS.fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.75 }}
        >
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="peer w-full px-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl text-black placeholder-transparent focus:outline-none focus:border-black focus:bg-white transition-all duration-300 resize-none text-lg font-medium"
            placeholder="Your message"
            id="message"
          />
          <label
            htmlFor="message"
            className="absolute left-6 -top-3 bg-white px-2 text-sm font-bold text-black/70 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black/50 peer-placeholder-shown:top-5 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:text-black peer-focus:bg-white transition-all duration-300"
          >
            Your Message *
          </label>
        </motion.div>

        {/* Premium Submit Button */}
        <motion.div
          variants={ANIMATION_VARIANTS.fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full bg-black text-accent-lime px-10 py-6 rounded-2xl font-extrabold text-lg hover:bg-black/90 transition-all duration-300 inline-flex items-center justify-center gap-4 uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-black/20 shadow-2xl hover:shadow-black/30 border-3 border-black disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
            whileHover={!isSubmitting ? { scale: 1.02, y: -3 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            <span className="absolute inset-0 bg-accent-lime opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            {isSubmitting ? (
              <>
                <div className="w-6 h-6 border-3 border-accent-lime border-t-transparent rounded-full animate-spin"></div>
                <span className="relative z-10">Sending Your Message...</span>
              </>
            ) : (
              <>
                <span className="relative z-10">Send Message</span>
                <Send className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Form Footer Note */}
        <motion.p
          className="text-center text-sm text-black/60 mt-6"
          variants={ANIMATION_VARIANTS.fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.85 }}
        >
          🔒 Your information is secure and will never be shared. I'll respond within 24 hours.
        </motion.p>
      </form>
    </motion.div>
  </motion.div>
);

// --- MAIN CONTACT COMPONENT ---
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Basic form validation
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
    <div className="relative" id="contact">
      {/* Map Section - Desktop Only */}
      <MapSection isInView={isInView} />

      {/* Main Contact Section */}
      <section 
        ref={ref} 
        className="contact-section relative min-h-screen lg:min-h-[70vh] overflow-visible"
        aria-labelledby="contact-heading"
      >
        <motion.div
          className="flex flex-col lg:grid lg:grid-cols-2 min-h-screen lg:min-h-[70vh]"
          variants={ANIMATION_VARIANTS.fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column: Space for map on desktop, hidden on mobile */}
          <div className="hidden lg:block relative" />

          {/* Right Column: Contact Form - Full width on mobile, half on desktop */}
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            isInView={isInView}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;