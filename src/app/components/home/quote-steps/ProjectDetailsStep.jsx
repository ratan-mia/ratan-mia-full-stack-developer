
'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, FileText, Lightbulb, Target } from 'lucide-react';

const ProjectDetailsStep = ({ formData, handleInputChange, errors, compact = false }) => {
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

  const priorityOptions = [
    {
      id: 'low',
      label: 'Low Priority',
      description: 'Standard development pace',
      icon: '🌱',
      color: 'green'
    },
    {
      id: 'medium',
      label: 'Medium Priority',
      description: 'Balanced timeline and quality',
      icon: '⭐',
      color: 'blue',
      popular: true
    },
    {
      id: 'high',
      label: 'High Priority',
      description: 'Faster delivery timeline',
      icon: '🔥',
      color: 'orange'
    },
    {
      id: 'urgent',
      label: 'Urgent Priority',
      description: 'Rush delivery with premium',
      icon: '⚡',
      color: 'red',
      premium: '+25%'
    }
  ];

  const getPriorityColorClasses = (color, selected = false) => {
    const colors = {
      green: {
        border: selected ? 'border-green-500 bg-green-50' : 'border-slate-200 hover:border-green-300',
        text: selected ? 'text-green-800' : 'text-slate-800'
      },
      blue: {
        border: selected ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-blue-300',
        text: selected ? 'text-blue-800' : 'text-slate-800'
      },
      orange: {
        border: selected ? 'border-orange-500 bg-orange-50' : 'border-slate-200 hover:border-orange-300',
        text: selected ? 'text-orange-800' : 'text-slate-800'
      },
      red: {
        border: selected ? 'border-red-500 bg-red-50' : 'border-slate-200 hover:border-red-300',
        text: selected ? 'text-red-800' : 'text-slate-800'
      }
    };
    return colors[color] || colors.blue;
  };

  const wordCount = formData.description ? formData.description.trim().split(/\s+/).length : 0;
  const charCount = formData.description ? formData.description.length : 0;

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {/* Step Header */}
      <motion.div variants={fadeInUp} className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          Tell Us About Your Vision
        </h3>
        <p className="text-slate-600 text-lg font-light">
          Share your project details, goals, and any specific requirements
        </p>
      </motion.div>

      {/* Project Description */}
      <motion.div variants={fadeInUp} className="space-y-4">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-5 h-5 text-indigo-600" />
          <label className="text-lg font-bold text-slate-800">
            Project Description *
          </label>
        </div>
        
        <textarea
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={8}
          className={`w-full px-6 py-4 bg-white rounded-xl border-2 ${
            errors.description ? 'border-red-500' : 'border-slate-200'
          } focus:border-indigo-500 focus:outline-none transition-all duration-200 text-slate-800 placeholder-slate-400 resize-vertical`}
          placeholder="Please describe your project in detail. Include:

• What you want to build and why
• Your target audience and their needs
• Key goals and success metrics
• Any specific design preferences or inspirations
• Technical requirements or integrations needed
• Content strategy and who will manage updates
• Any existing branding guidelines or assets
• Timeline constraints or important deadlines
• Budget considerations or payment preferences

The more details you provide, the more accurate and comprehensive your quote will be!"
        />
        
        {/* Character/Word Count */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4 text-slate-500">
            <span>{wordCount} words</span>
            <span>{charCount} characters</span>
          </div>
          <div className={`${charCount >= 200 ? 'text-green-600' : 'text-slate-500'}`}>
            {charCount >= 200 ? '✓ Good detail level' : 'More details help create better quotes'}
          </div>
        </div>
        
        {errors.description && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-sm flex items-center gap-1"
          >
            <AlertTriangle className="w-4 h-4" />
            {errors.description}
          </motion.p>
        )}
      </motion.div>

      {/* Priority Level */}
      <motion.div variants={fadeInUp} className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-orange-600" />
          <label className="text-lg font-bold text-slate-800">
            Project Priority Level
          </label>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {priorityOptions.map((priority, index) => {
            const isSelected = formData.priority === priority.id;
            const colorClasses = getPriorityColorClasses(priority.color, isSelected);
            
            return (
              <motion.label
                key={priority.id}
                className={`relative text-center p-4 cursor-pointer rounded-xl border-2 transition-all duration-200 ${colorClasses.border}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <input
                  type="radio"
                  name="priority"
                  value={priority.id}
                  checked={isSelected}
                  onChange={(e) => handleInputChange('priority', e.target.value)}
                  className="sr-only"
                />
                
                {/* Popular Badge */}
                {priority.popular && (
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    Popular
                  </div>
                )}
                
                {/* Premium Badge */}
                {priority.premium && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {priority.premium}
                  </div>
                )}
                
                <div className="text-3xl mb-2">{priority.icon}</div>
                <div className={`font-bold text-sm mb-1 ${colorClasses.text}`}>
                  {priority.label}
                </div>
                <div className="text-xs text-slate-600 font-light">
                  {priority.description}
                </div>
              </motion.label>
            );
          })}
        </div>
      </motion.div>

      {/* Helpful Tips */}
      <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
        {/* Tips Card */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Lightbulb className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <h4 className="font-semibold text-yellow-900 mb-2">
                💡 Tips for Better Quotes
              </h4>
              <ul className="text-yellow-800 text-sm space-y-1 leading-relaxed">
                <li>• Be specific about your target audience</li>
                <li>• Mention any existing websites you like</li>
                <li>• Include technical requirements</li>
                <li>• Describe your content strategy</li>
                <li>• Mention any integrations needed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Goals Card */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Target className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">
                🎯 Consider Including
              </h4>
              <ul className="text-blue-800 text-sm space-y-1 leading-relaxed">
                <li>• Business goals and success metrics</li>
                <li>• Competitor websites you admire</li>
                <li>• Branding guidelines or assets</li>
                <li>• User journey expectations</li>
                <li>• Post-launch maintenance needs</li>
              </ul>
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
          <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
          <span className="text-sm font-medium text-slate-600">Step 5 of 6</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailsStep;