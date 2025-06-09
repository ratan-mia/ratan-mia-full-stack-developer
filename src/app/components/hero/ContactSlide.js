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
      href: 'tel:+8801751010966', 
      color: 'from-green-600 to-emerald-600', 
      response: '< 1 min' 
    },
    { 
      icon: MessageCircle, 
      label: 'WhatsApp', 
      value: 'Quick Chat', 
      href: 'https://wa.me/8801751010966', 
      color: 'from-emerald-600 to-green-600', 
      response: '< 5 min' 
    },
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'shorifull@gmail.com', 
      href: 'mailto:shorifull@gmail.com', 
      color: 'from-blue-600 to-indigo-600', 
      response: '< 2 hours' 
    }
  ];

  const quickStats = [
    { icon: Clock, number: 24, label: 'Hours', suffix: '/7' },
    { icon: Target, number: 98, label: 'Success', suffix: '%' },
    { icon: Eye, number: 2, label: 'Response', suffix: 'hrs' },
    { icon: Award, number: 150, label: 'Clients', suffix: '+' }
  ];

  return (
    <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Compact Header */}
          <div className="text-center space-y-3">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 px-3 py-1.5 rounded-full text-sm font-semibold text-blue-300"
              whileHover={{ scale: 1.05 }}
            >
              <Rocket className="w-3 h-3" />
              <span className="tracking-wider uppercase">Let's Create Magic</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to Build Something{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>
            
            <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
              Transform your ideas into digital reality with cutting-edge technology
            </p>
          </div>

          {/* Contact Methods Grid - More Compact */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label === 'WhatsApp' ? '_blank' : undefined}
                rel={method.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className="group relative flex flex-col items-center gap-2 bg-white/[0.08] backdrop-blur-xl border border-white/20 text-white font-semibold p-3 rounded-xl hover:bg-white/[0.15] hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <motion.div 
                  className={`w-10 h-10 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center`}
                  whileHover={{ scale: 1.1 }}
                >
                  <method.icon className="w-5 h-5 text-white" />
                </motion.div>
                
                <div className="text-center">
                  <div className="text-sm font-bold mb-1">{method.label}</div>
                  <div className="text-xs text-gray-300 mb-2">{method.value}</div>
                  <div className="inline-flex items-center gap-1 bg-green-500/20 px-2 py-0.5 rounded-full">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span className="text-green-300 text-xs">{method.response}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Action Buttons - Inline */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <motion.a
              href="#quote"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm md:text-base px-6 py-3 rounded-lg"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-white/[0.08] border border-white/20 text-white font-bold text-sm md:text-base px-6 py-3 rounded-lg hover:bg-white/[0.15] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </motion.a>
          </div>

          {/* Combined Stats & Availability */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Quick Stats */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold text-white mb-3 text-center lg:text-left">Quick Stats</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {quickStats.map((stat, index) => (
                  <div key={stat.label} className="text-center bg-white/[0.08] border border-white/20 rounded-lg p-2">
                    <div className={`w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-md flex items-center justify-center mx-auto mb-1`}>
                      <stat.icon className="w-3 h-3 text-white" />
                    </div>
                    <div className="text-sm font-bold text-white">
                      <LiveCounter end={stat.number} duration={2} />
                      {stat.suffix}
                    </div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-white/[0.05] border border-white/10 rounded-lg p-3">
              <h4 className="text-lg font-bold text-white mb-2">Availability</h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-300">Timezone:</span>
                  <span className="text-white">UTC+6</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Hours:</span>
                  <span className="text-white">9AM-11PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Emergency:</span>
                  <span className="text-emerald-300 font-bold">24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status Indicator */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-4 py-2 rounded-full">
              <motion.div 
                className="w-2 h-2 bg-emerald-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold text-emerald-300">
                Available Now • Fast Response Guaranteed
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSlide;