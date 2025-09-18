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
const ContactForm = ({ formData, handleChange, handleSubmit, isInView }) => (
  <motion.div
    className="text-black flex flex-col justify-center px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 sm:py-12 md:py-16 lg:py-20 relative"
    variants={ANIMATION_VARIANTS.slideInRight}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    transition={{ delay: 0.2 }}
  >
    {/* Header */}
    <motion.h2
      className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 sm:mb-6"
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: 0.3 }}
    >
      Have Any Project on Your Mind?
    </motion.h2>

    <motion.p
      className="text-base sm:text-lg lg:text-xl text-black/80 leading-relaxed mb-8 sm:mb-12 max-w-lg"
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay: 0.4 }}
    >
      Great! We're excited to hear from you and let's start something
    </motion.p>

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

    {/* Form */}
    <div className="space-y-4 sm:space-y-6">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <FormInput
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full name*"
          isInView={isInView}
          delay={0.5}
        />
        
        <FormInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address*"
          isInView={isInView}
          delay={0.6}
        />
      </div>

      {/* Website Link */}
      <FormInput
        type="url"
        name="website"
        value={formData.website}
        onChange={handleChange}
        placeholder="Website link"
        isInView={isInView}
        delay={0.7}
      />

      {/* Message */}
      <FormInput
        type="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="How Can We Help You*"
        rows={4}
        isInView={isInView}
        delay={0.8}
      />

      {/* Submit Button */}
      <motion.div
        variants={ANIMATION_VARIANTS.fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.9 }}
      >
        <motion.button
          type="button"
          onClick={handleSubmit}
          className="bg-black text-accent-lime px-6 sm:px-8 py-3 sm:py-4 rounded-none font-semibold text-base sm:text-lg hover:bg-black/90 transition-colors inline-flex items-center gap-2 sm:gap-3 mt-6 sm:mt-8 uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-black/20 w-full sm:w-auto justify-center sm:justify-start"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Send Message</span>
          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </motion.div>
    </div>
  </motion.div>
);

// --- MAIN CONTACT COMPONENT ---
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleSubmit = useCallback(async () => {
    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    try {
      // Handle form submission
      console.log('Form submitted:', formData);
      
      // Reset form after successful submission
      setFormData(INITIAL_FORM_DATA);
    } catch (error) {
      console.error('Form submission error:', error);
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
            isInView={isInView}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;