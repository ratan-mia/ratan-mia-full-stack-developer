'use client';
import { LiveCounter } from '@/utils/shared/heroSlider';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Clock,
  Download,
  Eye,
  Mail,
  MessageCircle,
  Phone,
  Rocket,
  Target
} from 'lucide-react';

const ContactSlide = () => {
  const contactMethods = [
    { 
      icon: Phone, 
      label: 'Call Now', 
      value: '+8801751010966', 
      description: 'Direct line for urgent projects',
      href: 'tel:+8801751010966', 
      color: 'from-green-600 to-emerald-600', 
      response: '< 1 min' 
    },
    { 
      icon: MessageCircle, 
      label: 'WhatsApp', 
      value: 'Quick Chat', 
      description: 'Instant messaging and file sharing',
      href: 'https://wa.me/8801751010966', 
      color: 'from-emerald-600 to-green-600', 
      response: '< 5 min' 
    },
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'shorifull@gmail.com', 
      description: 'Detailed project discussions',
      href: 'mailto:shorifull@gmail.com', 
      color: 'from-blue-600 to-indigo-600', 
      response: '< 2 hours' 
    }
  ];

  const quickStats = [
    { icon: Clock, number: 24, label: 'Hours Available', suffix: '/7', color: 'from-blue-500 to-cyan-500' },
    { icon: Target, number: 98, label: 'Success Rate', suffix: '%', color: 'from-green-500 to-emerald-500' },
    { icon: Eye, number: 2, label: 'Response Time', suffix: 'hrs', color: 'from-purple-500 to-pink-500' },
    { icon: Award, number: 150, label: 'Happy Clients', suffix: '+', color: 'from-orange-500 to-red-500' }
  ];

  const availability = {
    timezone: 'UTC+6 (Dhaka)',
    workingHours: '9 AM - 11 PM',
    emergencySupport: '24/7 Available'
  };

  return (
    <div className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="space-y-8">
            {/* Badge - Labels & Small Text */}
            <motion.div
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 px-6 py-3 rounded-full text-sm md:text-base font-semibold text-blue-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Rocket className="w-4 h-4" />
              </motion.div>
              <span className="tracking-wider uppercase">Let's Create Magic</span>
            </motion.div>

            {/* Main Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Ready to Build Something{' '}
              <span className="block">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Extraordinary?
                </span>
              </span>
            </h2>
            
            {/* Body Text - Primary */}
            <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Transform your wildest ideas into digital reality with cutting-edge technology and unmatched expertise.
            </p>
          </div>

          {/* Contact Methods - Card Design Standards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === 'WhatsApp' ? '_blank' : undefined}
                rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className="group relative flex flex-col items-center gap-4 bg-white/[0.08] backdrop-blur-xl border border-white/20 text-white font-semibold p-6 rounded-2xl hover:bg-white/[0.15] hover:border-cyan-400/50 transition-all duration-500 overflow-hidden"
                whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                <motion.div 
                  className={`relative z-10 w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                  animate={{
                    boxShadow: [
                      '0 20px 40px rgba(6, 182, 212, 0.3)',
                      '0 25px 50px rgba(59, 130, 246, 0.5)',
                      '0 20px 40px rgba(6, 182, 212, 0.3)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotateY: 15,
                    boxShadow: '0 30px 60px rgba(6, 182, 212, 0.6)'
                  }}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <div className="relative z-10 text-center">
                  {/* Card/Component Title */}
                  <div className="text-base md:text-lg font-bold mb-2">{method.label}</div>
                  {/* Body Text - Secondary */}
                  <div className="text-sm md:text-base text-gray-300 mb-1">{method.value}</div>
                  {/* Caption & Meta Info */}
                  <div className="text-xs md:text-sm text-gray-400 mb-3">{method.description}</div>
                  
                  <motion.div 
                    className="inline-flex items-center gap-1 bg-green-500/20 px-3 py-1 rounded-full"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-300 text-xs md:text-sm font-bold">Response: {method.response}</span>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            {/* Primary Button */}
            <motion.a
              href="#quote"
              className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base md:text-lg px-12 py-6 rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ x: [-100, 200] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative z-10">Get Free Consultation</span>
              <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              href="/resume.pdf"
              download
              className="group inline-flex items-center justify-center gap-3 bg-white/[0.08] backdrop-blur-xl border border-white/20 text-white font-bold text-base md:text-lg px-12 py-6 rounded-2xl hover:bg-white/[0.15] hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <Download className="relative z-10 w-6 h-6" />
              <span className="relative z-10">Download Resume</span>
            </motion.a>
          </div>

          {/* Quick Stats - Enhanced Card Design */}
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            {quickStats.map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-center bg-white/[0.08] backdrop-blur-xl border border-white/20 rounded-xl p-4 hover:bg-white/[0.12] transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <motion.div
                  className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2`}
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  <stat.icon className="w-5 h-5 text-white" />
                </motion.div>
                
                {/* Stats Display */}
                <div className="text-base md:text-lg font-bold text-white">
                  <LiveCounter end={stat.number} duration={2} />
                  {stat.suffix}
                </div>
                {/* Caption & Meta Info */}
                <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Availability Info */}
          <motion.div
            className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-md mx-auto mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
          >
            {/* Subsection Title */}
            <h4 className="text-base md:text-lg font-bold text-white mb-4">Availability</h4>
            
            <div className="space-y-2 text-sm md:text-base">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Timezone:</span>
                <span className="text-white font-medium">{availability.timezone}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Working Hours:</span>
                <span className="text-white font-medium">{availability.workingHours}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Emergency:</span>
                <span className="text-emerald-300 font-bold">{availability.emergencySupport}</span>
              </div>
            </div>
          </motion.div>

          {/* Status Indicator */}
          <motion.div
            className="inline-flex items-center gap-3 bg-emerald-500/20 backdrop-blur-xl border border-emerald-400/30 px-8 py-4 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div 
              className="w-3 h-3 bg-emerald-400 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                boxShadow: [
                  '0 0 0 0 rgba(34, 197, 94, 0.7)',
                  '0 0 0 10px rgba(34, 197, 94, 0)',
                  '0 0 0 0 rgba(34, 197, 94, 0)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Labels & Small Text */}
            <span className="text-sm md:text-base font-semibold text-emerald-300">
              Available for elite projects • Lightning-fast response guaranteed
            </span>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            className="pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            {/* Caption & Meta Info */}
            <p className="text-xs md:text-sm text-gray-400 max-w-md mx-auto">
              Ready to start your next project? Choose your preferred communication method above and let's turn your vision into reality.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSlide;