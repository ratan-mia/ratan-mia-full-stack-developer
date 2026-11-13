
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Shield, Sparkles, Star, Zap } from 'lucide-react';

const FeaturesStep = ({ formData, handleInputChange, errors, compact = false }) => {
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

  const featureCategories = [
    {
      id: 'essential',
      name: 'Essential Features',
      description: 'Must-have functionality for modern websites',
      icon: Shield,
      color: 'green',
      features: [
        { name: 'Responsive Design', description: 'Mobile-friendly across all devices' },
        { name: 'SEO Optimization', description: 'Search engine optimized structure' },
        { name: 'Performance Optimization', description: 'Fast loading and optimized code' },
        { name: 'Security Implementation', description: 'SSL, data protection & security' },
        { name: 'Cross-browser Compatibility', description: 'Works on all major browsers' },
        { name: 'Basic Analytics', description: 'Google Analytics integration' }
      ]
    },
    {
      id: 'standard',
      name: 'Standard Features',
      description: 'Enhanced functionality for better user experience',
      icon: Star,
      color: 'blue',
      features: [
        { name: 'Content Management', description: 'Easy-to-use admin panel' },
        { name: 'User Authentication', description: 'Login/register functionality' },
        { name: 'Contact Forms', description: 'Custom contact and inquiry forms' },
        { name: 'Social Media Integration', description: 'Social sharing and feeds' },
        { name: 'Email Marketing', description: 'Newsletter and email campaigns' },
        { name: 'Search Functionality', description: 'Site-wide search capabilities' }
      ]
    },
    {
      id: 'advanced',
      name: 'Advanced Features',
      description: 'Cutting-edge functionality for competitive advantage',
      icon: Zap,
      color: 'purple',
      features: [
        { name: 'E-commerce Integration', description: 'Online store and shopping cart' },
        { name: 'Payment Processing', description: 'Secure payment gateways' },
        { name: 'API Integration', description: 'Third-party service connections' },
        { name: 'Multi-language Support', description: 'Internationalization features' },
        { name: 'Advanced Analytics', description: 'Custom dashboards and reports' },
        { name: 'Real-time Features', description: 'Live chat, notifications, updates' }
      ]
    }
  ];

  const handleFeatureToggle = (featureName) => {
    const currentFeatures = formData.features || [];
    const updatedFeatures = currentFeatures.includes(featureName)
      ? currentFeatures.filter(f => f !== featureName)
      : [...currentFeatures, featureName];
    
    handleInputChange('features', updatedFeatures);
  };

  const getColorClasses = (color, selected = false) => {
    const colors = {
      green: {
        border: selected ? 'border-green-500' : 'border-green-200',
        bg: selected ? 'bg-green-50' : 'bg-green-25',
        text: selected ? 'text-green-800' : 'text-green-700',
        accent: 'bg-green-100 text-green-800'
      },
      blue: {
        border: selected ? 'border-blue-500' : 'border-blue-200',
        bg: selected ? 'bg-blue-50' : 'bg-blue-25',
        text: selected ? 'text-blue-800' : 'text-blue-700',
        accent: 'bg-blue-100 text-blue-800'
      },
      purple: {
        border: selected ? 'border-purple-500' : 'border-purple-200',
        bg: selected ? 'bg-purple-50' : 'bg-purple-25',
        text: selected ? 'text-purple-800' : 'text-purple-700',
        accent: 'bg-purple-100 text-purple-800'
      }
    };
    return colors[color] || colors.blue;
  };

  const selectedCount = (formData.features || []).length;

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
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          Choose Your Features
        </h3>
        <p className="text-slate-600 text-lg font-light">
          Select the functionality you need for your project
        </p>
        
        {selectedCount > 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mt-4"
          >
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">{selectedCount} features selected</span>
          </motion.div>
        )}
      </motion.div>

      {/* Feature Categories */}
      <motion.div variants={fadeInUp} className="space-y-8">
        {featureCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="space-y-4"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getColorClasses(category.color).accent}`}>
                <category.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">{category.name}</h4>
                <p className="text-sm text-slate-600 font-light">{category.description}</p>
              </div>
            </div>

            {/* Features Grid */}
            <div className={`grid ${compact ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'} gap-3`}>
              {category.features.map((feature, featureIndex) => {
                const isSelected = (formData.features || []).includes(feature.name);
                const colorClasses = getColorClasses(category.color, isSelected);
                
                return (
                  <motion.label
                    key={feature.name}
                    className={`flex items-start gap-3 p-4 cursor-pointer rounded-xl border-2 transition-all duration-200 group ${colorClasses.border} ${colorClasses.bg} hover:shadow-md`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (categoryIndex * 0.2) + (featureIndex * 0.05) }}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleFeatureToggle(feature.name)}
                      className="sr-only"
                    />
                    
                    {/* Custom Checkbox */}
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 ${
                      isSelected 
                        ? `${colorClasses.border} ${colorClasses.bg}`
                        : 'border-slate-300 bg-white'
                    }`}>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                          <CheckCircle className={`w-3 h-3 ${colorClasses.text}`} />
                        </motion.div>
                      )}
                    </div>
                    
                    {/* Feature Info */}
                    <div className="flex-1">
                      <div className={`font-semibold text-sm ${colorClasses.text} group-hover:text-opacity-80 transition-colors duration-200`}>
                        {feature.name}
                      </div>
                      <div className="text-xs text-slate-600 font-light leading-relaxed mt-1">
                        {feature.description}
                      </div>
                    </div>
                  </motion.label>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Selection Buttons */}
      <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 justify-center">
        <motion.button
          onClick={() => {
            const allFeatures = featureCategories.flatMap(cat => cat.features.map(f => f.name));
            handleInputChange('features', allFeatures);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Select All
        </motion.button>
        
        <motion.button
          onClick={() => {
            const essentialFeatures = featureCategories
              .find(cat => cat.id === 'essential')?.features
              .map(f => f.name) || [];
            handleInputChange('features', essentialFeatures);
          }}
          className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Essential Only
        </motion.button>
        
        <motion.button
          onClick={() => handleInputChange('features', [])}
          className="px-4 py-2 bg-slate-600 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Clear All
        </motion.button>
      </motion.div>

      {/* Info Card */}
      <motion.div 
        variants={fadeInUp}
        className="bg-indigo-50 border border-indigo-200 rounded-xl p-6"
      >
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4 text-indigo-600" />
          </div>
          <div>
            <h4 className="font-semibold text-indigo-900 mb-1">
              Flexible Feature Selection
            </h4>
            <p className="text-indigo-800 text-sm leading-relaxed">
              Don't worry about getting this perfect! These selections help me understand your needs, 
              but we can always adjust features during our consultation call. You can also add custom 
              requirements in the next step.
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
          <span className="text-sm font-medium text-slate-600">Step 4 of 6</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeaturesStep;