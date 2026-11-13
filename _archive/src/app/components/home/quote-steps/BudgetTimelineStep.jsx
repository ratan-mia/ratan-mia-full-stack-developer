
'use client';

import { motion } from 'framer-motion';
import { Clock, DollarSign, TrendingUp, Zap } from 'lucide-react';

const BudgetTimelineStep = ({ formData, handleInputChange, errors, compact = false }) => {
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

  const budgetRanges = [
    { 
      id: 'under-5k', 
      label: 'Under $5,000', 
      value: 'under-5k', 
      description: 'Small projects & MVPs',
      recommended: false,
      icon: '🌱'
    },
    { 
      id: '5k-15k', 
      label: '$5,000 - $15,000', 
      value: '5k-15k', 
      description: 'Standard business websites',
      recommended: true,
      icon: '📈'
    },
    { 
      id: '15k-30k', 
      label: '$15,000 - $30,000', 
      value: '15k-30k', 
      description: 'Complex web applications',
      recommended: true,
      icon: '🚀'
    },
    { 
      id: '30k-50k', 
      label: '$30,000 - $50,000', 
      value: '30k-50k', 
      description: 'Enterprise solutions',
      recommended: false,
      icon: '🏢'
    },
    { 
      id: 'over-50k', 
      label: 'Over $50,000', 
      value: 'over-50k', 
      description: 'Large-scale platforms',
      recommended: false,
      icon: '💎'
    },
    { 
      id: 'discuss', 
      label: 'Let\'s Discuss', 
      value: 'discuss', 
      description: 'Custom pricing needed',
      recommended: false,
      icon: '💬'
    }
  ];

  const timelineOptions = [
    { 
      id: 'asap', 
      label: 'ASAP', 
      value: 'asap', 
      description: 'Rush delivery available',
      urgent: true,
      fee: '+25%',
      icon: '🔥'
    },
    { 
      id: '1-2weeks', 
      label: '1-2 Weeks', 
      value: '1-2weeks', 
      description: 'Quick turnaround',
      urgent: false,
      icon: '⚡'
    },
    { 
      id: '1month', 
      label: '1 Month', 
      value: '1month', 
      description: 'Standard timeline',
      urgent: false,
      popular: true,
      icon: '📅'
    },
    { 
      id: '2-3months', 
      label: '2-3 Months', 
      value: '2-3months', 
      description: 'Complex projects',
      urgent: false,
      icon: '📊'
    },
    { 
      id: '3-6months', 
      label: '3-6 Months', 
      value: '3-6months', 
      description: 'Enterprise solutions',
      urgent: false,
      icon: '🏗️'
    },
    { 
      id: 'flexible', 
      label: 'Flexible', 
      value: 'flexible', 
      description: 'No rush needed',
      urgent: false,
      icon: '🌸'
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
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <DollarSign className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          Investment & Timeline
        </h3>
        <p className="text-slate-600 text-lg font-light">
          Help us understand your budget and timeline expectations
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Budget Range */}
        <motion.div variants={fadeInUp}>
          <div className="flex items-center gap-2 mb-6">
            <DollarSign className="w-5 h-5 text-green-600" />
            <h4 className="text-xl font-bold text-slate-800">Budget Range *</h4>
          </div>
          
          <div className="space-y-3">
            {budgetRanges.map((budget, index) => (
              <motion.label
                key={budget.id}
                className={`flex items-center justify-between p-4 cursor-pointer rounded-xl border-2 transition-all duration-200 group ${
                  formData.budget === budget.value
                    ? 'border-green-500 bg-green-50 shadow-md'
                    : 'border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{budget.icon}</div>
                  <input
                    type="radio"
                    name="budget"
                    value={budget.value}
                    checked={formData.budget === budget.value}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="sr-only"
                  />
                  <div>
                    <span className={`font-bold ${
                      formData.budget === budget.value ? 'text-green-800' : 'text-slate-800'
                    }`}>
                      {budget.label}
                    </span>
                    <div className="text-sm text-slate-600">{budget.description}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {budget.recommended && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                      Popular
                    </span>
                  )}
                  {formData.budget === budget.value && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-3 h-3 bg-green-500 rounded-full"
                    />
                  )}
                </div>
              </motion.label>
            ))}
          </div>
          
          {errors.budget && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-3"
            >
              {errors.budget}
            </motion.p>
          )}
        </motion.div>

        {/* Timeline */}
        <motion.div variants={fadeInUp}>
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-blue-600" />
            <h4 className="text-xl font-bold text-slate-800">Project Timeline</h4>
          </div>
          
          <div className="space-y-3">
            {timelineOptions.map((timeline, index) => (
              <motion.label
                key={timeline.id}
                className={`flex items-center justify-between p-4 cursor-pointer rounded-xl border-2 transition-all duration-200 group ${
                  formData.timeline === timeline.value
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{timeline.icon}</div>
                  <input
                    type="radio"
                    name="timeline"
                    value={timeline.value}
                    checked={formData.timeline === timeline.value}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="sr-only"
                  />
                  <div>
                    <span className={`font-bold ${
                      formData.timeline === timeline.value ? 'text-blue-800' : 'text-slate-800'
                    }`}>
                      {timeline.label}
                    </span>
                    <div className="text-sm text-slate-600">{timeline.description}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {timeline.urgent && timeline.fee && (
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-bold">
                      {timeline.fee}
                    </span>
                  )}
                  {timeline.popular && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold">
                      Popular
                    </span>
                  )}
                  {formData.timeline === timeline.value && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-3 h-3 bg-blue-500 rounded-full"
                    />
                  )}
                </div>
              </motion.label>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Info Cards */}
      <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
        {/* Budget Info */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h4 className="font-semibold text-green-900 mb-1">
                Transparent Pricing
              </h4>
              <p className="text-green-800 text-sm leading-relaxed">
                All quotes include detailed breakdowns with no hidden fees. 
                You'll know exactly what you're paying for and why.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Info */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Zap className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-1">
                Flexible Delivery
              </h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                Rush jobs are available with premium pricing. Standard timelines 
                include testing, revisions, and quality assurance.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div 
        variants={fadeInUp}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          <span className="text-sm font-medium text-slate-600">Step 3 of 6</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BudgetTimelineStep;