'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  DollarSign,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Star,
  X,
  Zap
} from 'lucide-react';
import { useMemo, useState } from 'react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle, count: 0 },
    { id: 'general', name: 'General', icon: MessageSquare, count: 0 },
    { id: 'pricing', name: 'Pricing', icon: DollarSign, count: 0 },
    { id: 'technical', name: 'Technical', icon: Zap, count: 0 }
  ];

  const faqData = [
    {
      id: 1,
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines vary based on complexity and scope. Simple websites typically take 1-2 weeks, while complex web applications can take 4-8 weeks. During our initial consultation, I'll provide a detailed timeline based on your specific requirements and project goals.",
      category: "general",
      featured: true
    },
    {
      id: 2,
      question: "What is your typical project cost range?",
      answer: "Project costs vary significantly based on complexity, features, and requirements. Simple websites start from $1,000-$3,000, while complex web applications range from $5,000-$25,000+. I provide detailed, transparent quotes after understanding your specific needs and business objectives.",
      category: "pricing",
      featured: true
    },
    {
      id: 3,
      question: "What technologies and frameworks do you specialize in?",
      answer: "I specialize in modern web technologies including React.js, Next.js, JavaScript/TypeScript for frontend development; PHP, Laravel, Node.js for backend systems; and WordPress, Shopify for CMS/e-commerce solutions. I also work extensively with MySQL and MongoDB databases.",
      category: "technical",
      featured: true
    },
    {
      id: 4,
      question: "Do you work with international clients?",
      answer: "Yes! I work with clients worldwide from my base in Dhaka, Bangladesh. I'm experienced in collaborating across different time zones and use modern communication tools like Slack, Zoom, and project management platforms to ensure smooth collaboration regardless of location.",
      category: "general",
      featured: false
    },
    {
      id: 5,
      question: "Do you provide ongoing maintenance and support?",
      answer: "Absolutely! I offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support. Basic support is included for the first month after project launch, with extended support packages available.",
      category: "general",
      featured: false
    },
    {
      id: 6,
      question: "How do you handle project payments and contracts?",
      answer: "I typically work with 50% upfront and 50% upon completion for smaller projects. Larger projects are divided into milestones with payments tied to deliverable completion. All projects include a detailed contract outlining scope, timeline, and terms.",
      category: "pricing",
      featured: false
    },
    {
      id: 7,
      question: "Can you integrate third-party services and APIs?",
      answer: "Yes! I have extensive experience integrating various third-party services including payment gateways, CRM systems, email marketing tools, social media APIs, Google services, and custom APIs. Integration complexity is assessed during project planning.",
      category: "technical",
      featured: false
    },
    {
      id: 8,
      question: "What makes you different from other developers?",
      answer: "I combine 10+ years of experience with a client-first approach, focusing on understanding your business goals rather than just technical requirements. My proven process ensures transparent communication, on-time delivery, and exceptional results that drive business growth.",
      category: "general",
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

  const filteredFAQs = useMemo(() => {
    return faqData.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = searchTerm === '' || 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const featuredFAQs = faqData.filter(item => item.featured);

  return (
    <section id="faq" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Everything You Need to Know
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Get answers to common questions about my services, process, and pricing.
          </motion.p>
        </motion.div>

        {/* Quick Contact Card */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Have a Specific Question?</h3>
            <p className="text-blue-100 mb-4 text-base">
              Can't find what you're looking for? I'm here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-base hover:bg-blue-50 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="w-4 h-4" />
                Send Message
              </motion.a>
              <motion.a
                href="tel:+8801751010966"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-white/20 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Featured Questions */}
        <motion.div 
          className="mb-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-6 text-center"
            variants={fadeInUp}
          >
            Popular Questions
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredFAQs.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300 cursor-pointer group"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                onClick={() => {
                  setActiveCategory('all');
                  setOpenItems([item.id]);
                  document.getElementById(`faq-${item.id}`)?.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                  });
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <Star className="w-5 h-5 text-yellow-500 mt-1" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2 text-base leading-tight">
                      {item.question}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                      {item.answer}
                    </p>
                    <div className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all duration-200">
                      Read Full Answer
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Controls */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                    activeCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-full h-full" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* FAQ List */}
        <motion.div 
          className="space-y-4 mb-10"
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-6 text-left flex items-start justify-between hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      {item.featured && (
                        <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      )}
                      <h3 className="text-lg font-semibold text-gray-900 leading-tight pr-4">
                        {item.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
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
                        <div className="px-6 pb-6">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-base text-gray-700 leading-relaxed">
                              {item.answer}
                            </p>
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
                transition={{ duration: 0.4 }}
              >
                <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Questions Found</h3>
                <p className="text-gray-500 text-base">Try adjusting your search terms or category filter.</p>
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg text-base font-medium hover:bg-blue-700 transition-colors"
                  >
                    Clear Search
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center bg-gray-50 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-lg mx-auto">
            I'm here to help! Contact me directly for personalized answers to your specific questions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-base hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Send a Message
            </motion.a>
            
            <motion.a
              href="https://calendly.com/your-link"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-3 rounded-lg font-semibold text-base hover:bg-gray-50 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;