
'use client';

import { motion } from 'framer-motion';
import {
    AlertCircle,
    Building,
    CheckCircle,
    Clock,
    DollarSign,
    FileText,
    Loader,
    Mail,
    Phone,
    Rocket,
    Send,
    Sparkles,
    Target,
    User
} from 'lucide-react';

const ReviewSubmitStep = ({ 
  formData, 
  onSubmit, 
  isSubmitting, 
  submitStatus, 
  errors, 
  compact = false 
}) => {
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

  // Data mappings for display
  const projectTypeNames = {
    'web-development': 'Full Stack Web Development',
    'ecommerce': 'E-commerce Solution',
    'wordpress': 'WordPress Development',
    'performance': 'Performance Optimization',
    'ai-integration': 'AI Integration',
    'devops': 'DevOps & Cloud Solutions',
    'mobile-app': 'Mobile App Development',
    'other': 'Custom Solution'
  };

  const budgetLabels = {
    'under-5k': 'Under $5,000',
    '5k-15k': '$5,000 - $15,000',
    '15k-30k': '$15,000 - $30,000',
    '30k-50k': '$30,000 - $50,000',
    'over-50k': 'Over $50,000',
    'discuss': 'Let\'s Discuss'
  };

  const timelineLabels = {
    'asap': 'ASAP (Rush Job)',
    '1-2weeks': '1-2 Weeks',
    '1month': '1 Month',
    '2-3months': '2-3 Months',
    '3-6months': '3-6 Months',
    'flexible': 'Flexible Timeline'
  };

  const priorityLabels = {
    'low': 'Low Priority',
    'medium': 'Medium Priority',
    'high': 'High Priority',
    'urgent': 'Urgent Priority'
  };

  const getPriorityIcon = (priority) => {
    const icons = {
      'low': '🌱',
      'medium': '⭐',
      'high': '🔥',
      'urgent': '⚡'
    };
    return icons[priority] || '⭐';
  };

  const getProjectTypeIcon = (type) => {
    const icons = {
      'web-development': '💻',
      'ecommerce': '🛒',
      'wordpress': '📝',
      'performance': '⚡',
      'ai-integration': '🤖',
      'devops': '☁️',
      'mobile-app': '📱',
      'other': '🔧'
    };
    return icons[type] || '💻';
  };

  const reviewSections = [
    {
      title: 'Personal Information',
      icon: User,
      color: 'blue',
      items: [
        { label: 'Name', value: formData.name, icon: User },
        { label: 'Email', value: formData.email, icon: Mail },
        { label: 'Company', value: formData.company || 'Not provided', icon: Building },
        { label: 'Phone', value: formData.phone || 'Not provided', icon: Phone }
      ]
    },
    {
      title: 'Project Details',
      icon: Rocket,
      color: 'purple',
      items: [
        { 
          label: 'Project Type', 
          value: projectTypeNames[formData.projectType] || 'Not selected',
          icon: Rocket,
          emoji: getProjectTypeIcon(formData.projectType)
        },
        { 
          label: 'Budget Range', 
          value: budgetLabels[formData.budget] || 'Not selected',
          icon: DollarSign 
        },
        { 
          label: 'Timeline', 
          value: timelineLabels[formData.timeline] || 'Not specified',
          icon: Clock 
        },
        { 
          label: 'Priority', 
          value: priorityLabels[formData.priority] || 'Medium',
          icon: Target,
          emoji: getPriorityIcon(formData.priority)
        }
      ]
    }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {/* Step Header */}
      <motion.div variants={fadeInUp} className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          Review & Submit Your Quote Request
        </h3>
        <p className="text-slate-600 text-lg font-light">
          Please review your information before submitting your quote request
        </p>
      </motion.div>

      {/* Status Message */}
      {submitStatus && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-xl border-l-4 ${
            submitStatus === 'success'
              ? 'bg-green-50 border-green-500 text-green-800'
              : 'bg-red-50 border-red-500 text-red-800'
          }`}
        >
          <div className="flex items-center gap-3">
            {submitStatus === 'success' ? (
              <CheckCircle className="w-6 h-6 text-green-600" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-600" />
            )}
            <div>
              {submitStatus === 'success' ? (
                <div>
                  <h3 className="font-bold text-lg">Quote Request Sent Successfully! 🎉</h3>
                  <p className="text-sm mt-1 leading-relaxed">
                    Thank you! I've received your project details and will review everything carefully. 
                    You'll receive a detailed quote and project proposal within 24 hours. Check your 
                    email for a confirmation message with next steps.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="font-bold text-lg">Oops! Something went wrong 😞</h3>
                  <p className="text-sm mt-1">
                    Please try again or contact me directly at shorifull@gmail.com or +8801751010966
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      {/* Review Sections */}
      <div className="grid lg:grid-cols-2 gap-8">
        {reviewSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            variants={fadeInUp}
            transition={{ delay: sectionIndex * 0.2 }}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                section.color === 'blue' ? 'bg-blue-100' : 'bg-purple-100'
              }`}>
                <section.icon className={`w-5 h-5 ${
                  section.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                }`} />
              </div>
              <h4 className="text-xl font-bold text-slate-800">{section.title}</h4>
            </div>

            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div key={item.label} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                    {item.emoji ? (
                      <span className="text-lg">{item.emoji}</span>
                    ) : (
                      <item.icon className="w-4 h-4 text-slate-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-slate-800 font-medium">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Features Review */}
      {formData.features && formData.features.length > 0 && (
        <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-yellow-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-800">Selected Features</h4>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-bold">
              {formData.features.length} selected
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {formData.features.map((feature, index) => (
              <div key={feature} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm text-slate-800">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Project Description Review */}
      <motion.div variants={fadeInUp} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-indigo-600" />
          </div>
          <h4 className="text-xl font-bold text-slate-800">Project Description</h4>
        </div>

        <div className="bg-slate-50 rounded-lg p-4">
          <div className="text-slate-800 leading-relaxed whitespace-pre-wrap">
            {formData.description || 'No description provided'}
          </div>
          
          {formData.description && (
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-200 text-sm text-slate-500">
              <span>{formData.description.trim().split(/\s+/).length} words</span>
              <span>{formData.description.length} characters</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={fadeInUp} className="text-center space-y-6">
        <motion.button
          onClick={onSubmit}
          disabled={isSubmitting}
          className={`w-full max-w-md mx-auto py-6 px-8 font-bold text-lg rounded-xl transition-all duration-300 ${
            isSubmitting
              ? 'bg-slate-400 cursor-not-allowed text-white'
              : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 text-white shadow-xl hover:shadow-2xl'
          }`}
          whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-3">
              <Loader className="w-6 h-6 animate-spin" />
              Sending Your Quote Request...
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <Send className="w-6 h-6" />
              Send My Quote Request
            </div>
          )}
        </motion.button>

        {/* Terms and Privacy */}
        <motion.div 
          variants={fadeInUp}
          className="text-center text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          <p>
            By submitting this request, you agree to our{' '}
            <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms" className="text-blue-600 hover:text-blue-800 underline">
              Terms of Service
            </a>. 
            Your information is kept confidential and will never be shared with third parties.
          </p>
        </motion.div>

        {/* What Happens Next */}
        <motion.div 
          variants={fadeInUp}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
        >
          <h4 className="text-lg font-bold text-blue-900 mb-4 text-center">
            🚀 What Happens After You Submit?
          </h4>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                1
              </div>
              <h5 className="font-semibold text-blue-900">Instant Confirmation</h5>
              <p className="text-sm text-blue-800">
                You'll receive an email confirmation with your request details and reference number.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                2
              </div>
              <h5 className="font-semibold text-blue-900">Detailed Analysis</h5>
              <p className="text-sm text-blue-800">
                I'll review your requirements and prepare a comprehensive quote with timeline.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto font-bold">
                3
              </div>
              <h5 className="font-semibold text-blue-900">Personal Response</h5>
              <p className="text-sm text-blue-800">
                Within 24 hours, you'll receive a detailed proposal and consultation invitation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          variants={fadeInUp}
          className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
        >
          <h4 className="text-lg font-bold text-slate-800 mb-4 text-center">
            📞 Need Immediate Assistance?
          </h4>
          
          <div className="grid md:grid-cols-2 gap-4 text-center">
            <div className="space-y-1">
              <div className="font-semibold text-slate-800">Email</div>
              <a 
                href="mailto:shorifull@gmail.com" 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                shorifull@gmail.com
              </a>
            </div>
            
            <div className="space-y-1">
              <div className="font-semibold text-slate-800">WhatsApp</div>
              <a 
                href="https://wa.me/8801751010966" 
                className="text-green-600 hover:text-green-800 transition-colors duration-200"
              >
                +8801751010966
              </a>
            </div>
          </div>
          
          <p className="text-sm text-slate-600 mt-4 text-center">
            For urgent projects or questions, feel free to reach out directly!
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div 
          variants={fadeInUp}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <span className="text-sm font-medium text-slate-600">Step 6 of 6 - Ready to Submit!</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ReviewSubmitStep;