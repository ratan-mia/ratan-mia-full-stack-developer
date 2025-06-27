
'use client';

import { motion } from 'framer-motion';
import { Building, Mail, Phone, User } from 'lucide-react';

const PersonalInfoStep = ({ formData, handleInputChange, errors, compact = false }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {/* Step Header */}
      <motion.div variants={fadeInUp} className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          Let's Start With Your Details
        </h3>
        <p className="text-slate-600 text-lg font-light">
          Tell us a bit about yourself so we can personalize your quote
        </p>
      </motion.div>

      {/* Form Fields */}
      <motion.div variants={fadeInUp} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">
              <User className="w-4 h-4 text-blue-600" />
              Full Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full px-4 py-4 bg-white rounded-xl border-2 ${
                errors.name ? 'border-red-500' : 'border-slate-200'
              } focus:border-blue-500 focus:outline-none transition-all duration-200 text-slate-800 placeholder-slate-400`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-2 flex items-center gap-1"
              >
                {errors.name}
              </motion.p>
            )}
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">
              <Mail className="w-4 h-4 text-blue-600" />
              Email Address *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-4 bg-white rounded-xl border-2 ${
                errors.email ? 'border-red-500' : 'border-slate-200'
              } focus:border-blue-500 focus:outline-none transition-all duration-200 text-slate-800 placeholder-slate-400`}
              placeholder="your.email@company.com"
            />
            {errors.email && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-2 flex items-center gap-1"
              >
                {errors.email}
              </motion.p>
            )}
          </div>
        </div>

        {/* Company and Phone Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">
              <Building className="w-4 h-4 text-slate-600" />
              Company Name
              <span className="text-xs normal-case text-slate-500 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="w-full px-4 py-4 bg-white rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-all duration-200 text-slate-800 placeholder-slate-400"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">
              <Phone className="w-4 h-4 text-slate-600" />
              Phone Number
              <span className="text-xs normal-case text-slate-500 font-normal">(Optional)</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="w-full px-4 py-4 bg-white rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none transition-all duration-200 text-slate-800 placeholder-slate-400"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        {/* Info Card */}
        <motion.div 
          variants={fadeInUp}
          className="bg-blue-50 border border-blue-200 rounded-xl p-6"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Mail className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">
                Why do we need this information?
              </h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Your contact details help us personalize the quote and ensure we can reach you 
                with questions or updates. We respect your privacy and will never share your 
                information with third parties.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div 
          variants={fadeInUp}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm font-medium text-slate-600">Step 1 of 6</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PersonalInfoStep;