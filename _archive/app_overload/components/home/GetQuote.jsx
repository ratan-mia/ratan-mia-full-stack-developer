'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Shield, 
  Star,
  Award,
  Users,
  Target,
  Sparkles,
  TrendingUp,
  MessageCircle,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';
import { useState, useRef, useCallback, useMemo } from 'react';

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

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  // Form steps configuration
  const steps = [
    { id: 1, title: 'Personal Info', subtitle: 'Let\'s start with your details', icon: Users, color: 'blue' },
    { id: 2, title: 'Project Type', subtitle: 'What are you looking to build?', icon: Target, color: 'purple' },
    { id: 3, title: 'Budget & Timeline', subtitle: 'Investment and timeline expectations', icon: TrendingUp, color: 'green' },
    { id: 4, title: 'Features', subtitle: 'What functionality do you need?', icon: Sparkles, color: 'yellow' },
    { id: 5, title: 'Project Details', subtitle: 'Tell us more about your vision', icon: MessageCircle, color: 'indigo' },
    { id: 6, title: 'Review & Submit', subtitle: 'Final review and submission', icon: CheckCircle, color: 'emerald' }
  ];

  const totalSteps = steps.length;

  const STATS = useMemo(() => [
    { number: '24h', label: 'Response Time', icon: Clock, color: 'text-blue-500', description: 'Quick turnaround guaranteed' },
    { number: '100%', label: 'Success Rate', icon: Award, color: 'text-green-500', description: 'Project completion rate' },
    { number: '50+', label: 'Happy Clients', icon: Users, color: 'text-purple-500', description: 'Satisfied customers worldwide' },
    { number: '0$', label: 'Quote Cost', icon: Star, color: 'text-yellow-500', description: 'Free detailed estimates' }
  ], []);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  // Dynamic classes based on compact prop
  const sectionClasses = compact
    ? "py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    : "py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden";

  const containerClasses = compact ? "max-w-5xl mx-auto relative z-10" : "max-w-7xl mx-auto relative z-10";

  // Form handlers
  const handleInputChange = useCallback((name, value) => {
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
  }, [errors]);

  const validateCurrentStep = useCallback(() => {
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
  }, [currentStep, formData]);

  const handleNext = useCallback(() => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  }, [validateCurrentStep, totalSteps]);

  const handlePrev = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  }, []);

  const handleStepClick = useCallback((stepNumber) => {
    if (stepNumber < currentStep) {
      setCurrentStep(stepNumber);
    } else if (stepNumber === currentStep + 1) {
      handleNext();
    }
  }, [currentStep, handleNext]);

  const handleSubmit = useCallback(async () => {
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
        }, 8000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const renderStepComponent = useCallback(() => {
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
  }, [currentStep, formData, handleInputChange, errors, compact, handleSubmit, isSubmitting, submitStatus]);

  const getStepStatus = useCallback((stepNumber) => {
    if (stepNumber < currentStep) return 'completed';
    if (stepNumber === currentStep) return 'active';
    return 'upcoming';
  }, [currentStep]);

  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const getStepColorClasses = (step, status) => {
    const colors = {
      blue: { bg: 'bg-blue-600', ring: 'ring-blue-500', text: 'text-blue-600' },
      purple: { bg: 'bg-purple-600', ring: 'ring-purple-500', text: 'text-purple-600' },
      green: { bg: 'bg-green-600', ring: 'ring-green-500', text: 'text-green-600' },
      yellow: { bg: 'bg-yellow-500', ring: 'ring-yellow-400', text: 'text-yellow-600' },
      indigo: { bg: 'bg-indigo-600', ring: 'ring-indigo-500', text: 'text-indigo-600' },
      emerald: { bg: 'bg-emerald-600', ring: 'ring-emerald-500', text: 'text-emerald-600' }
    };

    if (status === 'completed') return 'bg-green-500 text-white ring-green-400';
    if (status === 'active') return `${colors[step.color]?.bg || 'bg-blue-600'} text-white ${colors[step.color]?.ring || 'ring-blue-500'}`;
    return 'bg-gray-200 text-gray-500 ring-gray-300';
  };

  return (
    <section ref={sectionRef} id="quote" className={sectionClasses}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
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
        {/* Header Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-blue-200/50 text-blue-800 px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider mb-6 shadow-lg"
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Get Your Quote</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            Start Your Dream Project
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Ready to transform your vision into a stunning digital reality? Get a detailed, personalized quote tailored to your specific needs and timeline.
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <div className={`w-8 h-8 mx-auto mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-full h-full" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-slate-800 mb-1">{stat.number}</div>
                <div className="text-sm font-medium text-slate-600 mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          {/* Progress Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm font-semibold text-slate-600">
              Step {currentStep} of {totalSteps}
            </div>
            <div className="text-sm font-semibold text-slate-600">
              {Math.round(progressPercentage)}% Complete
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-8 shadow-inner">
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between items-start gap-2">
            {steps.map((step, index) => {
              const status = getStepStatus(step.id);
              return (
                <motion.div 
                  key={step.id}
                  className="flex flex-col items-center cursor-pointer flex-1 group"
                  onClick={() => handleStepClick(step.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-lg group-hover:shadow-xl ${getStepColorClasses(step, status)}`}>
                    {status === 'completed' ? (
                      <CheckCircle className="w-6 h-6 md:w-7 md:h-7" />
                    ) : (
                      <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                    )}
                    
                    {status === 'active' && (
                      <motion.div
                        className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-30"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                  
                  <div className="text-center mt-3">
                    <div className={`text-sm font-semibold transition-colors duration-300 ${
                      status === 'active' ? 'text-blue-600' : 'text-slate-700'
                    }`}>
                      <span className="hidden sm:inline">{step.title}</span>
                      <span className="sm:hidden">{step.title.split(' ')[0]}</span>
                    </div>
                    {!compact && (
                      <div className="hidden md:block text-xs text-slate-500 mt-1 max-w-20 lg:max-w-24 leading-tight">
                        {step.subtitle}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
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
                  opacity: { duration: 0.3 }
                }}
                className="min-h-[500px]"
              >
                {renderStepComponent()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Footer */}
          {currentStep < 6 && (
            <div className="flex items-center justify-between p-6 md:p-8 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-200/50">
              <motion.button
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 shadow-md hover:shadow-lg'
                }`}
                whileHover={currentStep !== 1 ? { scale: 1.02, x: -2 } : {}}
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
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index + 1 <= currentStep ? 'bg-blue-600 scale-110' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Next Step</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Clock,
              title: 'Quick Response',
              description: 'Get your detailed quote within 24 hours',
              gradient: 'from-blue-500 to-cyan-500'
            },
            {
              icon: Shield,
              title: 'Transparent Pricing',
              description: 'No hidden fees, clear project breakdown',
              gradient: 'from-green-500 to-emerald-500'
            },
            {
              icon: Star,
              title: 'Free Consultation',
              description: '30-minute strategy call included with every quote',
              gradient: 'from-yellow-500 to-orange-500'
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information for non-compact */}
        {!compact && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-br from-green-50 to-blue-50 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 text-center sm:text-left">
                  Quick Response Guarantee
                </h3>
              </div>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto text-center">
                I typically respond to all quote requests within 24 hours with a detailed proposal, 
                project timeline, and next steps. For urgent projects, feel free to reach out directly:
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                <motion.a
                  href="tel:+8801751010966"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4" />
                  +8801751010966
                </motion.a>
                <motion.a
                  href="mailto:shorifull@gmail.com"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4" />
                  shorifull@gmail.com
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-8 md:p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" aria-hidden="true">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
                transition={{ duration: 12, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, 25, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Ready to Bring Your Vision to Life?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Join 50+ satisfied clients who chose me to transform their ideas into successful digital solutions. Let's create something extraordinary together.
              </p>
              
              <motion.button
                onClick={() => {
                  document.getElementById('quote').scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                  });
                  if (currentStep === 1) {
                    const nameField = document.querySelector('input[name="name"]');
                    if (nameField) nameField.focus();
                  }
                }}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="w-5 h-5" />
                <span>Start Your Quote Now</span>
                <Sparkles className="w-5 h-5" />
              </motion.button>

              <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-white/20">
                {[
                  { number: '150+', label: 'Projects Delivered', icon: Award },
                  { number: '98%', label: 'Client Satisfaction', icon: Star },
                  { number: '24h', label: 'Response Time', icon: Clock }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
                    <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-blue-200 font-medium text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-xs md:text-sm text-slate-500">
            © 2025 Ratan Mia. Crafted with ❤️ using Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetQuote;