'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  CheckCircle,
  ChevronDown,
  Code,
  Globe,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Star,
  Zap
} from 'lucide-react';
import { useRef, useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([1]); // First item open by default
  const [searchTerm, setSearchTerm] = useState('');
  
  const sectionRef = useRef(null);
  const faqRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const faqInView = useInView(faqRef, { once: true, threshold: 0.1 });

  // Compact FAQ data with categories
  const faqData = [
    {
      id: 1,
      category: "GENERAL",
      question: "HOW LONG DOES IT TAKE TO COMPLETE A PROJECT?",
      answer: "Simple websites: 1-2 weeks. Complex applications: 4-8 weeks. I provide detailed timelines during consultation.",
      tags: ["timeline", "project"],
      featured: true
    },
    {
      id: 2,
      category: "PRICING",
      question: "WHAT ARE YOUR PROJECT COSTS?",
      answer: "Simple websites: $1,000-$3,000. Complex applications: $5,000-$25,000+. Transparent quotes provided after consultation.",
      tags: ["cost", "pricing"],
      featured: true
    },
    {
      id: 3,
      category: "TECHNICAL",
      question: "WHAT TECHNOLOGIES DO YOU USE?",
      answer: "Frontend: React.js, Next.js, TypeScript. Backend: PHP, Laravel, Node.js. Databases: MySQL, MongoDB. Cloud: AWS.",
      tags: ["technology", "stack"],
      featured: true
    },
    {
      id: 4,
      category: "GENERAL",
      question: "DO YOU WORK INTERNATIONALLY?",
      answer: "Yes! I work with clients worldwide with experience across different time zones using modern collaboration tools.",
      tags: ["international", "remote"],
      featured: false
    },
    {
      id: 5,
      category: "SUPPORT",
      question: "DO YOU PROVIDE ONGOING SUPPORT?",
      answer: "Yes! Comprehensive maintenance packages including security updates, monitoring, and 24/7 emergency support.",
      tags: ["maintenance", "support"],
      featured: false
    },
    {
      id: 6,
      category: "PRICING",
      question: "HOW DO PAYMENTS WORK?",
      answer: "50% upfront, 50% completion for small projects. Larger projects use milestone-based payments with detailed contracts.",
      tags: ["payment", "contract"],
      featured: false
    },
    {
      id: 7,
      category: "TECHNICAL",
      question: "CAN YOU INTEGRATE APIS?",
      answer: "Yes! Extensive experience with payment gateways, CRM systems, social media APIs, and custom integrations.",
      tags: ["integration", "api"],
      featured: false
    },
    {
      id: 8,
      category: "GENERAL",
      question: "WHAT MAKES YOU DIFFERENT?",
      answer: "10+ years experience, client-first approach, transparent communication, on-time delivery, and business growth focus.",
      tags: ["difference", "experience"],
      featured: false
    }
  ];

  // Compact stats
  const stats = [
    { number: '< 24H', label: 'RESPONSE', icon: CheckCircle },
    { number: '100%', label: 'CONFIDENTIAL', icon: Star },
    { number: 'FREE', label: 'CONSULTATION', icon: Zap }
  ];

  // Filter FAQs based on search
  const filteredFAQs = faqData.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleItem = (itemId) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Get category colors
  const getCategoryColor = (category) => {
    const colors = {
      'GENERAL': 'from-cyan-500 to-blue-500',
      'PRICING': 'from-blue-500 to-violet-600',
      'TECHNICAL': 'from-violet-600 to-cyan-500',
      'SUPPORT': 'from-orange-500 to-cyan-500'
    };
    return colors[category] || 'from-cyan-500 to-blue-500';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <>
      {/* Developer Header Stripe */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
      
      <section 
        ref={sectionRef}
        id="faq" 
        className="py-12 lg:py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden"
        aria-label="Frequently asked questions"
      >
        {/* Compact Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-500/8 to-violet-600/8 rounded-full blur-3xl"></div>
          
          {/* Geometric Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.02\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 xl:px-16 2xl:px-20">
          <div className="max-w-5xl mx-auto relative z-10">
            {/* Compact Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Section Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">FAQ</span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                QUICK ANSWERS
              </h2>
              
              <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Common questions about services, process, and pricing. Can't find what you need? Just ask!
              </p>

              {/* Code Bracket Element */}
              <div className="text-cyan-500 font-mono text-xl mt-4">&lt;/&gt;</div>
            </motion.div>

            {/* Compact Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
                  variants={itemVariants}
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-2 text-cyan-400" />
                  <div className="text-lg font-black text-white mb-1">{stat.number}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Compact Search */}
            <motion.div
              className="max-w-lg mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 placeholder:text-slate-400 text-sm"
                />
              </div>
            </motion.div>

            {/* Compact FAQ List */}
            <motion.div 
              ref={faqRef}
              className="space-y-3 mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={faqInView ? "visible" : "hidden"}
            >
              {filteredFAQs.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
                  variants={itemVariants}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/3 to-blue-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-3 right-3 w-2 h-2 bg-cyan-500 rounded-full"></div>
                  )}

                  <button
                    onClick={() => toggleItem(item.id)}
                    className="relative z-10 w-full p-5 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors duration-200"
                  >
                    <div className="flex-1 pr-4">
                      {/* Compact Category Badge */}
                      <div className={`inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r ${getCategoryColor(item.category)}/10 border border-cyan-500/20 rounded-md text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2`}>
                        <div className="w-1 h-1 bg-cyan-500 rounded-full"></div>
                        {item.category}
                      </div>
                      
                      <h3 className="text-base font-black text-white uppercase tracking-tight leading-tight">
                        {item.question}
                      </h3>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500 transition-all duration-300"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openItems.includes(item.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="px-5 pb-5">
                          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent w-full mb-4"></div>
                          <p className="text-slate-300 leading-relaxed mb-3">
                            {item.answer}
                          </p>
                          
                          {/* Compact Tags */}
                          <div className="flex flex-wrap gap-1">
                            {item.tags.map((tag, i) => (
                              <span 
                                key={i}
                                className="px-2 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium rounded-md"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* No results message */}
              {filteredFAQs.length === 0 && (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <HelpCircle className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">NO RESULTS</h3>
                  <p className="text-slate-400 mb-4 text-sm">Try different search terms or browse all questions.</p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide text-sm"
                  >
                    CLEAR SEARCH
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Compact Contact CTA */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative p-6 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">
                    STILL HAVE QUESTIONS?
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Contact me directly for personalized answers and free consultation.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wide text-sm">
                      <Mail className="w-4 h-4" />
                      MESSAGE
                    </button>
                    
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 uppercase tracking-wide text-sm">
                      <Phone className="w-4 h-4" />
                      CALL
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Compact Trust Indicators */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-center p-4 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-black text-white mb-1 uppercase tracking-tight">QUICK RESPONSE</h4>
                <p className="text-slate-300 text-xs">Response within 24 hours guaranteed</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-black text-white mb-1 uppercase tracking-tight">FREE CONSULTATION</h4>
                <p className="text-slate-300 text-xs">30-minute strategy call included</p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-sm font-black text-white mb-1 uppercase tracking-tight">FLEXIBLE SCHEDULING</h4>
                <p className="text-slate-300 text-xs">Accommodating global time zones</p>
              </div>
            </motion.div>

            {/* Compact Footer */}
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative p-4 bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                  <p className="text-slate-400 text-xs">
                    © 2025 RATAN MIA. BUILT WITH NEXT.JS & TAILWIND CSS
                  </p>
                  <div className="flex items-center gap-3">
                    <Code className="w-4 h-4 text-cyan-400" />
                    <Globe className="w-4 h-4 text-blue-400" />
                    <Zap className="w-4 h-4 text-violet-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Developer Footer Stripe */}
      <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
    </>
  );
};

export default FAQ;
