// components/GetQuote.jsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, ChevronLeft, ChevronRight, Clock, Shield, Star } from 'lucide-react';
import { useState } from 'react';

// Import step components
import BudgetTimelineStep from './quote-steps/BudgetTimelineStep';
import FeaturesStep from './quote-steps/FeaturesStep';
import PersonalInfoStep from './quote-steps/PersonalInfoStep';
import ProjectDetailsStep from './quote-steps/ProjectDetailsStep';
import ProjectTypeStep from './quote-steps/ProjectTypeStep';
import ReviewSubmitStep from './quote-steps/ReviewSubmitStep';

const GetQuote = ({ compact = false }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    features: [],
    priority: 'medium'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  // Form steps configuration
  const steps = [
    { id: 1, title: 'Personal Info', subtitle: 'Let\'s start with your details' },
    { id: 2, title: 'Project Type', subtitle: 'What are you looking to build?' },
    { id: 3, title: 'Budget & Timeline', subtitle: 'Investment and timeline expectations' },
    { id: 4, title: 'Features', subtitle: 'What functionality do you need?' },
    { id: 5, title: 'Project Details', subtitle: 'Tell us more about your vision' },
    { id: 6, title: 'Review & Submit', subtitle: 'Final review and submission' }
  ];

  const totalSteps = steps.length;

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0
    })
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  // Dynamic classes based on compact prop - Following Guidelines
  const sectionClasses = compact
    ? "py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    : "py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden";

  const containerClasses = compact ? "max-w-4xl mx-auto relative z-10" : "max-w-6xl mx-auto relative z-10";

  // Form handlers
  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleStepClick = (stepNumber) => {
    if (stepNumber < currentStep || validateStepsUpTo(stepNumber - 1)) {
      setCurrentStep(stepNumber);
    }
  };

  const validateCurrentStep = () => {
    const newErrors = {};
    
    switch (currentStep) {
      case 1: // Personal Info
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        break;
      case 2: // Project Type
        if (!formData.projectType) newErrors.projectType = 'Please select a project type';
        break;
      case 3: // Budget & Timeline
        if (!formData.budget) newErrors.budget = 'Please select a budget range';
        break;
      case 4: // Features
        // Features are optional, no validation needed
        break;
      case 5: // Project Details
        if (!formData.description.trim()) newErrors.description = 'Project description is required';
        break;
      case 6: // Review & Submit
        // Final validation happens in the component
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStepsUpTo = (stepNumber) => {
    // Validate all steps up to the given step number
    for (let i = 1; i <= stepNumber; i++) {
      setCurrentStep(i);
      if (!validateCurrentStep()) return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          setCurrentStep(1);
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            projectType: '',
            budget: '',
            timeline: '',
            description: '',
            features: [],
            priority: 'medium'
          });
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepComponent = () => {
    const stepProps = {
      formData,
      handleInputChange,
      errors,
      compact
    };

    switch (currentStep) {
      case 1:
        return <PersonalInfoStep {...stepProps} />;
      case 2:
        return <ProjectTypeStep {...stepProps} />;
      case 3:
        return <BudgetTimelineStep {...stepProps} />;
      case 4:
        return <FeaturesStep {...stepProps} />;
      case 5:
        return <ProjectDetailsStep {...stepProps} />;
      case 6:
        return <ReviewSubmitStep {...stepProps} onSubmit={handleSubmit} isSubmitting={isSubmitting} submitStatus={submitStatus} />;
      default:
        return <PersonalInfoStep {...stepProps} />;
    }
  };

  const getStepStatus = (stepNumber) => {
    if (stepNumber < currentStep) return 'completed';
    if (stepNumber === currentStep) return 'active';
    return 'upcoming';
  };

  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <section id="quote" className={sectionClasses}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-blue-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className={containerClasses}>
        {/* Header Section - Following Typography Guidelines */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl mb-6 border border-white/50"
          >
            <motion.div 
              className="w-2.5 h-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Labels & Small Text - Following Guidelines */}
            <span className="text-blue-800 font-semibold text-sm uppercase tracking-wider">Get Quote</span>
          </motion.div>

          {/* Main Section Title - Following Guidelines */}
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Start Your Project Today
          </motion.h2>

          {/* Body Text - Primary - Following Guidelines */}
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your vision into reality? Get a detailed quote tailored to your specific needs. 
            Let's discuss your project and create something extraordinary together.
          </motion.p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {/* Meta Information - Following Guidelines */}
              <span className="text-sm font-medium text-gray-500">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-gray-500">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between items-center gap-2">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                className="flex flex-col items-center cursor-pointer flex-1"
                onClick={() => handleStepClick(step.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  getStepStatus(step.id) === 'completed' 
                    ? 'bg-green-500 text-white' 
                    : getStepStatus(step.id) === 'active'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {getStepStatus(step.id) === 'completed' ? (
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                  ) : (
                    step.id
                  )}
                </div>
                <div className="text-center mt-2">
                  {/* Labels - Following Guidelines */}
                  <div className={`text-sm font-semibold ${
                    getStepStatus(step.id) === 'active' ? 'text-blue-600' : 'text-gray-700'
                  }`}>
                    <span className="hidden sm:inline">{step.title}</span>
                    <span className="sm:hidden">{step.title.split(' ')[0]}</span>
                  </div>
                  {!compact && (
                    /* Captions & Meta Info - Following Guidelines */
                    <div className="hidden md:block text-xs font-medium text-gray-500 mt-1 max-w-20 lg:max-w-24 leading-tight">
                      {step.subtitle}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Step Content */}
          <div className="p-6 md:p-8 lg:p-10">
            <AnimatePresence mode="wait" custom={currentStep}>
              <motion.div
                key={currentStep}
                custom={currentStep}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="min-h-[400px]"
              >
                {renderStepComponent()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Footer */}
          {currentStep < 6 && (
            <div className="flex items-center justify-between p-6 md:p-8 bg-gray-50 border-t border-gray-200">
              <motion.button
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-200 ${
                  currentStep === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
                whileHover={currentStep !== 1 ? { scale: 1.02 } : {}}
                whileTap={currentStep !== 1 ? { scale: 0.98 } : {}}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
              </motion.button>

              <div className="flex items-center gap-2">
                {steps.slice(0, -1).map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index + 1 <= currentStep ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-base hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Clock,
              title: 'Quick Response',
              description: 'Get your detailed quote within 24 hours'
            },
            {
              icon: Shield,
              title: 'Transparent Pricing',
              description: 'No hidden fees, clear project breakdown'
            },
            {
              icon: Star,
              title: 'Free Consultation',
              description: '30-minute strategy call included with every quote'
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              {/* Card Titles - Following Guidelines */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              {/* Body Text - Secondary - Following Guidelines */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information for non-compact */}
        {!compact && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-400" />
                {/* Section Headings - Following Guidelines */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Quick Response Guarantee</h3>
              </div>
              {/* Body Text - Primary - Following Guidelines */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                I typically respond to all quote requests within 24 hours with a detailed proposal, 
                project timeline, and next steps. For urgent projects, feel free to call or WhatsApp me directly 
                at <span className="font-semibold text-blue-600">+8801751010966</span>.
              </p>
            </div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div 
          className="text-center mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Captions & Meta Info - Following Guidelines */}
          <p className="text-xs md:text-sm font-medium text-gray-500">
            © 2025 Ratan Mia. Crafted with ❤️ using Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetQuote;