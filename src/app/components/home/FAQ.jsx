'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Clock,
  CheckCircle,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';
import { useState, useRef } from 'react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [openItems, setOpenItems] = useState([1]); // First item open by default

  const faqData = [
    {
      id: 1,
      question: "How long does a project take?",
      answer: "Simple websites: 1-2 weeks. Complex applications: 4-8 weeks. I'll provide exact timeline during consultation."
    },
    {
      id: 2,
      question: "What are your rates?",
      answer: "Websites start from $1,000. Complex apps $5,000+. Every project gets a custom quote based on requirements."
    },
    {
      id: 3,
      question: "What technologies do you use?",
      answer: "React.js, Next.js, Laravel, WordPress, Node.js, MySQL. I choose the best tech stack for your needs."
    },
    {
      id: 4,
      question: "Do you work internationally?",
      answer: "Yes! I work with clients worldwide. Time zones are never an issue with proper communication."
    },
    {
      id: 5,
      question: "Do you provide ongoing support?",
      answer: "Absolutely! Maintenance packages available. First month support included with every project."
    },
    {
      id: 6,
      question: "How do payments work?",
      answer: "50% upfront, 50% completion for small projects. Larger projects split into milestone payments."
    }
  ];

  const toggleItem = (itemId) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <section ref={ref} className="section-padding bg-black relative overflow-hidden" id="faq">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Question Mark Pattern */}
        <div className="absolute top-20 left-16 text-6xl text-accent/10 font-bold">?</div>
        <div className="absolute top-40 right-20 text-8xl text-accent-secondary/10 font-bold">?</div>
        <div className="absolute bottom-32 left-1/4 text-5xl text-accent/10 font-bold">?</div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 right-32 w-32 h-32 bg-accent/10 rounded-full blur-xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-24 h-24 bg-accent-secondary/10 rounded-design blur-2xl"
          animate={{ 
            rotate: [0, 180, 360],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/4 w-16 h-16 border-2 border-accent/20 rounded-design rotate-45"></div>
        <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-accent-secondary/20 rounded-design"></div>
      </div>

      <div className="container-design relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.h2
            className="section-header text-primary-text mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Common Questions
          </motion.h2>
          
          <motion.div
            className="accent-line mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p
            className="body-text text-neutral max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Quick answers to help you get started
          </motion.p>
        </motion.div>

        {/* FAQ Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          
          {/* FAQ List */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="card-design overflow-hidden">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full text-left flex items-center justify-between p-6 hover:bg-card-dark transition-colors"
                    >
                      <h3 className="text-lg font-bold text-primary-text pr-4 group-hover:text-accent transition-colors">
                        {item.question}
                      </h3>
                      
                      <motion.div
                        animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        {openItems.includes(item.id) ? (
                          <Minus className="w-6 h-6 text-accent" />
                        ) : (
                          <Plus className="w-6 h-6 text-accent" />
                        )}
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {openItems.includes(item.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-design">
                            <motion.p
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              className="text-neutral leading-relaxed pt-4"
                            >
                              {item.answer}
                            </motion.p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <div className="space-y-8">
              
              {/* Quick Stats */}
              <div className="card-design text-center">
                <div className="mb-6">
                  <HelpCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary-text mb-2">Need More Help?</h3>
                  <p className="text-neutral text-sm">I'm here to answer your questions</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral">Response Time:</span>
                    <span className="text-accent font-medium">24 hours</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral">Consultation:</span>
                    <span className="text-accent font-medium">Free</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral">Support:</span>
                    <span className="text-accent font-medium">Included</span>
                  </div>
                </div>
              </div>

              {/* Contact Options */}
              <div className="space-y-4">
                <motion.a
                  href="#contact"
                  className="block w-full bg-accent text-black px-6 py-4 rounded-design font-semibold text-center hover:bg-accent/90 transition-colors group"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Ask a Question</span>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.a>

                <motion.a
                  href="#quote"
                  className="block w-full bg-card border border-accent text-accent px-6 py-4 rounded-design font-semibold text-center hover:bg-accent/10 transition-colors"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Free Quote
                </motion.a>
              </div>

              {/* Process Steps */}
              <div className="card-design">
                <h4 className="font-bold text-primary-text mb-4">Quick Process</h4>
                <div className="space-y-3">
                  {[
                    { step: '1', text: 'Ask your question', icon: '💬' },
                    { step: '2', text: 'Get detailed answer', icon: '📝' },
                    { step: '3', text: 'Schedule consultation', icon: '📅' }
                  ].map((item, index) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent-secondary rounded-design flex items-center justify-center text-black text-sm font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <span className="text-primary-text text-sm">{item.text}</span>
                        <span className="ml-2">{item.icon}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[
            { icon: Clock, title: 'Quick Response', desc: '24-hour answer guarantee' },
            { icon: MessageCircle, title: 'Free Consultation', desc: '30-min strategy call' },
            { icon: CheckCircle, title: 'No Obligation', desc: 'Ask anything, anytime' }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.3 + index * 0.1 }}
            >
              <motion.div
                className="w-16 h-16 bg-accent rounded-design-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 15 }}
              >
                <feature.icon className="w-8 h-8 text-black" />
              </motion.div>
              <h4 className="text-lg font-bold text-primary-text mb-2">{feature.title}</h4>
              <p className="body-text-small text-neutral">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <div className="relative bg-gradient-to-r from-accent/20 via-accent-secondary/20 to-accent/20 p-12 rounded-design-lg border border-accent/30 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-accent/20 rounded-design rotate-45"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-accent-secondary/10 rounded-full"></div>
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-text mb-4">
                Still Have Questions?
              </h3>
              <p className="body-text text-neutral mb-8 max-w-2xl mx-auto">
                I'm here to help! Get personalized answers to your specific questions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="btn-primary group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Contact Me</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </motion.div>
                </motion.a>
                
                <motion.a
                  href="#quote"
                  className="btn-secondary group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
