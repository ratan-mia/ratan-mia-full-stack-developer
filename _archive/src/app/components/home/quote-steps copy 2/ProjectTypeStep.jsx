
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Rocket } from 'lucide-react';

const ProjectTypeStep = ({ formData, handleInputChange, errors, compact = false }) => {
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

  const projectTypes = [
    { 
      id: 'web-development', 
      name: 'Full Stack Web Development', 
      icon: '💻', 
      description: 'Complete web solutions with modern frameworks',
      features: ['React/Next.js', 'Node.js Backend', 'Database Integration', 'API Development'],
      popular: true
    },
    { 
      id: 'ecommerce', 
      name: 'E-commerce Solution', 
      icon: '🛒', 
      description: 'Online store platforms and payment integration',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Order Tracking']
    },
    { 
      id: 'wordpress', 
      name: 'WordPress Development', 
      icon: '📝', 
      description: 'Custom themes, plugins and CMS solutions',
      features: ['Custom Themes', 'Plugin Development', 'Content Management', 'SEO Optimization']
    },
    { 
      id: 'performance', 
      name: 'Performance Optimization', 
      icon: '⚡', 
      description: 'Speed optimization and technical improvements',
      features: ['Speed Optimization', 'Core Web Vitals', 'Database Tuning', 'Caching Solutions']
    },
    { 
      id: 'ai-integration', 
      name: 'AI Integration', 
      icon: '🤖', 
      description: 'Smart automation and AI-powered features',
      features: ['ChatGPT Integration', 'Machine Learning', 'Automation', 'Smart Analytics'],
      trending: true
    },
    { 
      id: 'devops', 
      name: 'DevOps & Cloud Solutions', 
      icon: '☁️', 
      description: 'Infrastructure, deployment and cloud services',
      features: ['Cloud Deployment', 'CI/CD Pipeline', 'Server Management', 'Monitoring']
    },
    { 
      id: 'mobile-app', 
      name: 'Mobile App Development', 
      icon: '📱', 
      description: 'Cross-platform mobile applications',
      features: ['React Native', 'iOS & Android', 'App Store Deploy', 'Push Notifications']
    },
    { 
      id: 'other', 
      name: 'Custom Solution', 
      icon: '🔧', 
      description: 'Tailored development for unique requirements',
      features: ['Custom Requirements', 'Unique Solutions', 'Specialized Tech', 'Consultation']
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
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Rocket className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          What Are You Looking to Build?
        </h3>
        <p className="text-slate-600 text-lg font-light">
          Choose the type of project that best matches your vision
        </p>
      </motion.div>

      {/* Project Type Grid */}
      <motion.div variants={fadeInUp} className="space-y-6">
        <div className={`grid ${compact ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-4`}>
          {projectTypes.map((type, index) => (
            <motion.label
              key={type.id}
              className={`relative cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 group ${
                formData.projectType === type.id
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-slate-200 hover:border-slate-300 bg-white hover:shadow-md'
              }`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <input
                type="radio"
                name="projectType"
                value={type.id}
                checked={formData.projectType === type.id}
                onChange={(e) => handleInputChange('projectType', e.target.value)}
                className="sr-only"
              />
              
              {/* Selection Indicator */}
              {formData.projectType === type.id && (
                <motion.div 
                  className="absolute top-3 right-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <CheckCircle className="w-6 h-6 text-blue-500" />
                </motion.div>
              )}

              {/* Popular/Trending Badge */}
              {type.popular && (
                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  Popular
                </div>
              )}
              {type.trending && (
                <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  Trending
                </div>
              )}

              <div className="text-center">
                <div className="text-3xl mb-3">{type.icon}</div>
                <div className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {type.name}
                </div>
                <div className="text-sm text-slate-600 font-light mb-4 leading-relaxed">
                  {type.description}
                </div>
                
                {/* Features List */}
                <div className="space-y-1">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center gap-2 text-xs text-slate-500">
                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.label>
          ))}
        </div>

        {/* Error Message */}
        {errors.projectType && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm text-center flex items-center justify-center gap-1"
          >
            {errors.projectType}
          </motion.p>
        )}

        {/* Info Card */}
        <motion.div 
          variants={fadeInUp}
          className="bg-purple-50 border border-purple-200 rounded-xl p-6"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Rocket className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold text-purple-900 mb-1">
                Not sure which option fits your needs?
              </h4>
              <p className="text-purple-800 text-sm leading-relaxed">
                Don't worry! You can select "Custom Solution" and describe your project in detail. 
                I'll help identify the best approach and technologies for your specific requirements 
                during our consultation call.
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
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            <span className="text-sm font-medium text-slate-600">Step 2 of 6</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectTypeStep;