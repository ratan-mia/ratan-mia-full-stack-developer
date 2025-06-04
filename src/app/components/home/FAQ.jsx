'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  Code,
  DollarSign,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Shield,
  Star,
  Users,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const categories = [
    { id: 'all', name: 'All', icon: HelpCircle, count: 0 },
    { id: 'general', name: 'General', icon: MessageSquare, count: 0 },
    { id: 'pricing', name: 'Pricing', icon: DollarSign, count: 0 },
    { id: 'process', name: 'Process', icon: Code, count: 0 },
    { id: 'technical', name: 'Technical', icon: Zap, count: 0 },
    { id: 'support', name: 'Support', icon: Shield, count: 0 }
  ];

  const faqData = [
    {
      id: 1,
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines vary based on complexity and scope. A simple website typically takes 1-2 weeks, while complex web applications can take 4-8 weeks. During our initial consultation, I'll provide a detailed timeline based on your specific requirements.",
      category: "general",
      tags: ["timeline", "project duration", "planning"],
      featured: true
    },
    {
      id: 2,
      question: "What is your typical project cost range?",
      answer: "Project costs vary significantly based on complexity, features, and requirements. Simple websites start from $1,000-$3,000, while complex web applications range from $5,000-$25,000+. I provide detailed, transparent quotes after understanding your specific needs.",
      category: "pricing",
      tags: ["cost", "budget", "pricing"],
      featured: true
    },
    {
      id: 3,
      question: "Do you work with clients internationally?",
      answer: "Yes! I work with clients worldwide. Based in Dhaka, Bangladesh, I'm experienced in collaborating across different time zones. I use modern communication tools like Slack, Zoom, and project management platforms to ensure smooth collaboration.",
      category: "general",
      tags: ["international", "remote", "global"],
      featured: false
    },
    {
      id: 4,
      question: "What technologies and frameworks do you specialize in?",
      answer: "I specialize in modern web technologies including React.js, Next.js, JavaScript/TypeScript for frontend; PHP, Laravel, Node.js for backend; and WordPress, Shopify for CMS/e-commerce. I also work with MySQL, MongoDB for databases.",
      category: "technical",
      tags: ["react", "nextjs", "php", "laravel", "wordpress"],
      featured: true
    },
    {
      id: 5,
      question: "Do you provide ongoing maintenance and support?",
      answer: "Absolutely! I offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support. Basic support is included for the first month after launch.",
      category: "support",
      tags: ["maintenance", "support", "updates"],
      featured: false
    },
    {
      id: 6,
      question: "What is your development process like?",
      answer: "I follow a proven 6-step process: Discovery & Planning, Research & Analysis, Design & Prototyping, Development & Integration, Testing & Optimization, and Launch & Support. Each phase includes regular client communication and feedback loops.",
      category: "process",
      tags: ["methodology", "agile", "process"],
      featured: false
    },
    {
      id: 7,
      question: "Can you help with website redesigns and improvements?",
      answer: "Yes! I regularly help clients redesign existing websites to improve performance, user experience, and modern standards. This includes updating designs, optimizing for mobile, improving page speed, and enhancing SEO.",
      category: "general",
      tags: ["redesign", "improvement", "optimization"],
      featured: false
    },
    {
      id: 8,
      question: "What information do you need to start a project?",
      answer: "To get started, I need: project goals and objectives, target audience information, preferred timeline and budget, existing brand materials, content and functionality requirements, and any reference websites you like.",
      category: "process",
      tags: ["requirements", "getting started", "consultation"],
      featured: false
    },
    {
      id: 9,
      question: "Do you provide website hosting and domain services?",
      answer: "While I don't directly provide hosting, I help you choose the best hosting solution for your needs and can handle the setup process. I work with reliable providers like Digital Ocean, AWS, and others.",
      category: "technical",
      tags: ["hosting", "domain", "deployment"],
      featured: false
    },
    {
      id: 10,
      question: "How do you handle project payments and contracts?",
      answer: "I typically work with 50% upfront and 50% upon completion for smaller projects. Larger projects are divided into milestones with payments tied to deliverable completion. All projects include a detailed contract.",
      category: "pricing",
      tags: ["payments", "contracts", "terms"],
      featured: false
    },
    {
      id: 11,
      question: "What if I need changes after the project is completed?",
      answer: "Minor changes and bug fixes are included for the first month after launch. For additional features or significant changes, I provide detailed quotes for the extra work. I'm always available for ongoing improvements.",
      category: "support",
      tags: ["changes", "revisions", "post-launch"],
      featured: false
    },
    {
      id: 12,
      question: "Do you provide SEO services?",
      answer: "Yes! I include basic SEO optimization in all web projects - proper meta tags, structured data, fast loading speeds, and mobile responsiveness. For advanced SEO strategies, I can provide additional services.",
      category: "technical",
      tags: ["seo", "optimization", "search"],
      featured: false
    },
    {
      id: 13,
      question: "Can you integrate third-party services and APIs?",
      answer: "Absolutely! I have extensive experience integrating various third-party services including payment gateways, CRM systems, email marketing tools, social media APIs, Google services, and custom APIs.",
      category: "technical",
      tags: ["api", "integration", "third-party"],
      featured: false
    },
    {
      id: 14,
      question: "What makes you different from other developers?",
      answer: "I combine 10+ years of experience with a client-first approach. I focus on understanding your business goals, not just technical requirements. My proven process ensures transparent communication, on-time delivery, and exceptional results.",
      category: "general",
      tags: ["experience", "difference", "value"],
      featured: true
    }
  ];

  // Update category counts
  categories.forEach(category => {
    if (category.id === 'all') {
      category.count = faqData.length;
    } else {
      category.count = faqData.filter(item => item.category === category.id).length;
    }
  });

  const toggleItem = (itemId) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredFAQs = faqData.filter(item => item.featured);

  return (
    <section id="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-48 h-48 md:w-80 md:h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Compact Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-green-200/50 text-green-800 px-6 py-3 rounded-2xl font-semibold text-sm uppercase tracking-wider mb-6 shadow-lg"
          >
            <motion.div 
              className="w-2 h-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>Frequently Asked Questions</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent"
          >
            Got Questions?
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Everything you need to know about working with me, my process, pricing, and services.
          </motion.p>

          {/* Compact Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto"
          >
            {[
              { number: '14', label: 'FAQs', icon: HelpCircle, color: 'text-blue-500' },
              { number: '< 2h', label: 'Response Time', icon: Clock, color: 'text-green-500' },
              { number: '100%', label: 'Transparent', icon: CheckCircle, color: 'text-purple-500' },
              { number: '24/7', label: 'Available', icon: Users, color: 'text-orange-500' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
                <div className={`text-xl font-black ${stat.color} mb-1`}>{stat.number}</div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Compact Quick Contact */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg inline-block">
            <p className="text-slate-600 mb-3 text-sm">
              Have a specific question? I'm here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm rounded-xl shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="w-4 h-4" />
                Send Message
              </motion.a>
              <motion.a
                href="tel:+8801751010966"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-white/50 text-slate-700 hover:text-blue-600 font-semibold text-sm rounded-xl transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Compact Featured FAQs */}
        <motion.div 
          className="mb-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-black text-slate-800 mb-6 text-center"
            variants={fadeInUp}
          >
            Most Popular Questions
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredFAQs.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="flex items-start gap-2 mb-3">
                  <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                  <h4 className="font-bold text-slate-800 text-sm leading-tight line-clamp-2">{item.question}</h4>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed mb-3 line-clamp-3">
                  {item.answer}
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setOpenItems([item.id]);
                    document.getElementById(`faq-${item.id}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-xs group-hover:gap-2 transition-all duration-200"
                >
                  Read Full Answer
                  <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compact Filter and Search */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white/80 backdrop-blur-md text-slate-700 hover:bg-white hover:text-blue-600 border border-white/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${
                    activeCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Compact Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/90 backdrop-blur-md border border-white/50 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-sm"
              />
            </div>
          </div>
        </motion.div>

        {/* Compact FAQ List - Two Column Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="popLayout">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item, index) => (
                <motion.div
                  key={item.id}
                  id={`faq-${item.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 h-fit"
                  transition={{ delay: index * 0.03 }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-white/50 rounded-2xl transition-colors duration-200"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      {item.featured && (
                        <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                      )}
                      <h3 className="text-base md:text-lg font-bold text-slate-800 leading-tight pr-4">
                        {item.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-slate-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openItems.includes(item.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 md:px-6 pb-4 md:pb-6">
                          <div className="border-t border-slate-200 pt-4">
                            <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base">
                              {item.answer}
                            </p>
                            
                            {/* Compact Tags */}
                            <div className="flex flex-wrap gap-1.5">
                              {item.tags.slice(0, 3).map((tag, tagIndex) => (
                                <span 
                                  key={tagIndex}
                                  className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-lg font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                              {item.tags.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-medium">
                                  +{item.tags.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-600 mb-2">No questions found</h3>
                <p className="text-slate-500">Try adjusting your search or category filter.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Compact Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <motion.div 
                className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, 25, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">
                Still Have Questions?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
                I'm here to help! Get in touch and I'll answer any questions you have about your project.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.a>
                
                <motion.a
                  href="https://calendly.com/your-link"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Call</span>
                </motion.a>
              </div>

              {/* Compact Bottom Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-white/20">
                {[
                  { number: '< 2h', label: 'Response' },
                  { number: '100%', label: 'Helpful' },
                  { number: '24/7', label: 'Available' }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-1">{stat.number}</div>
                    <div className="text-blue-200 font-medium text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;