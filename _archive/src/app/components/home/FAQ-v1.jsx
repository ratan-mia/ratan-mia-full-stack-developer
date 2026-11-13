'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  Code,
  DollarSign,
  HelpCircle,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Shield,
  Star,
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

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle, count: 0 },
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
      answer: "Project timelines vary based on complexity and scope. A simple website typically takes 1-2 weeks, while complex web applications can take 4-8 weeks. During our initial consultation, I'll provide a detailed timeline based on your specific requirements. I always include buffer time to ensure quality delivery without rushing.",
      category: "general",
      tags: ["timeline", "project duration", "planning"],
      featured: true
    },
    {
      id: 2,
      question: "What is your typical project cost range?",
      answer: "Project costs vary significantly based on complexity, features, and requirements. Simple websites start from $1,000-$3,000, while complex web applications range from $5,000-$25,000+. I provide detailed, transparent quotes after understanding your specific needs. All quotes include development, testing, deployment, and initial support.",
      category: "pricing",
      tags: ["cost", "budget", "pricing"],
      featured: true
    },
    {
      id: 3,
      question: "Do you work with clients internationally?",
      answer: "Yes! I work with clients worldwide. Based in Dhaka, Bangladesh, I'm experienced in collaborating across different time zones. I use modern communication tools like Slack, Zoom, and project management platforms to ensure smooth collaboration regardless of location. I'm available for calls during overlapping business hours.",
      category: "general",
      tags: ["international", "remote", "global"],
      featured: false
    },
    {
      id: 4,
      question: "What technologies and frameworks do you specialize in?",
      answer: "I specialize in modern web technologies including React.js, Next.js, JavaScript/TypeScript for frontend; PHP, Laravel, Node.js for backend; and WordPress, Shopify for CMS/e-commerce. I also work with MySQL, MongoDB, Firebase for databases, and use Docker, AWS, Digital Ocean for deployment. I stay updated with the latest industry trends.",
      category: "technical",
      tags: ["react", "nextjs", "php", "laravel", "wordpress"],
      featured: true
    },
    {
      id: 5,
      question: "Do you provide ongoing maintenance and support?",
      answer: "Absolutely! I offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support. Basic support is included for the first month after launch. Extended support packages are available monthly or annually based on your needs.",
      category: "support",
      tags: ["maintenance", "support", "updates"],
      featured: false
    },
    {
      id: 6,
      question: "What is your development process like?",
      answer: "I follow a proven 6-step process: Discovery & Planning, Research & Analysis, Design & Prototyping, Development & Integration, Testing & Optimization, and Launch & Support. Each phase includes regular client communication, feedback loops, and deliverable reviews to ensure we're aligned throughout the project.",
      category: "process",
      tags: ["methodology", "agile", "process"],
      featured: false
    },
    {
      id: 7,
      question: "Can you help with website redesigns and improvements?",
      answer: "Yes! I regularly help clients redesign existing websites to improve performance, user experience, and modern standards. This includes updating designs, optimizing for mobile, improving page speed, enhancing SEO, and adding new features. I can work with your existing content and gradually migrate to new technologies.",
      category: "general",
      tags: ["redesign", "improvement", "optimization"],
      featured: false
    },
    {
      id: 8,
      question: "What information do you need to start a project?",
      answer: "To get started, I need: project goals and objectives, target audience information, preferred timeline and budget, existing brand materials (if any), content and functionality requirements, and any reference websites you like. The more details you provide, the more accurate my proposal will be.",
      category: "process",
      tags: ["requirements", "getting started", "consultation"],
      featured: false
    },
    {
      id: 9,
      question: "Do you provide website hosting and domain services?",
      answer: "While I don't directly provide hosting, I help you choose the best hosting solution for your needs and can handle the setup process. I work with reliable providers like Digital Ocean, AWS, and others. I can also assist with domain registration and DNS configuration to ensure everything works seamlessly.",
      category: "technical",
      tags: ["hosting", "domain", "deployment"],
      featured: false
    },
    {
      id: 10,
      question: "How do you handle project payments and contracts?",
      answer: "I typically work with 50% upfront and 50% upon completion for smaller projects. Larger projects are divided into milestones with payments tied to deliverable completion. All projects include a detailed contract outlining scope, timeline, payments, and responsibilities. I accept bank transfers and online payment methods.",
      category: "pricing",
      tags: ["payments", "contracts", "terms"],
      featured: false
    },
    {
      id: 11,
      question: "What if I need changes after the project is completed?",
      answer: "Minor changes and bug fixes are included for the first month after launch. For additional features or significant changes, I provide detailed quotes for the extra work. I'm always available for ongoing improvements and can work on retainer for clients who need regular updates.",
      category: "support",
      tags: ["changes", "revisions", "post-launch"],
      featured: false
    },
    {
      id: 12,
      question: "Do you provide SEO services?",
      answer: "Yes! I include basic SEO optimization in all web projects - proper meta tags, structured data, fast loading speeds, and mobile responsiveness. For advanced SEO strategies, keyword research, and ongoing optimization, I can provide additional SEO services or work with your preferred SEO specialist.",
      category: "technical",
      tags: ["seo", "optimization", "search"],
      featured: false
    },
    {
      id: 13,
      question: "Can you integrate third-party services and APIs?",
      answer: "Absolutely! I have extensive experience integrating various third-party services including payment gateways (Stripe, PayPal), CRM systems, email marketing tools, social media APIs, Google services, and custom APIs. Integration complexity affects project timeline and cost, which I'll discuss during planning.",
      category: "technical",
      tags: ["api", "integration", "third-party"],
      featured: false
    },
    {
      id: 14,
      question: "What makes you different from other developers?",
      answer: "I combine 10+ years of experience with a client-first approach. I focus on understanding your business goals, not just technical requirements. My proven process ensures transparent communication, on-time delivery, and exceptional results. I provide ongoing support and treat every project as a long-term partnership.",
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
    <section id="faq" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 bg-green-100 text-green-800 px-6 py-3 font-medium text-sm tracking-wider uppercase mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-800"
          >
            Got Questions? We've Got Answers
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Everything you need to know about working with me, my process, pricing, and services. 
            Can't find what you're looking for? Just ask!
          </motion.p>
        </motion.div>

        {/* Quick Contact CTA */}
        <motion.div 
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 border border-white/50 inline-block">
            <p className="text-slate-600 mb-4">
              Have a specific question? I'm here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="w-4 h-4" />
                Send Message
              </motion.a>
              <motion.a
                href="tel:+8801751010966"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 hover:border-blue-300 hover:text-blue-600 font-medium transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Featured FAQs */}
        <motion.div 
          className="mb-12 md:mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center"
            variants={fadeInUp}
          >
            Most Popular Questions
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredFAQs.slice(0, 4).map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border border-blue-200 hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <h4 className="font-bold text-slate-800 text-lg leading-tight">{item.question}</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {item.answer.substring(0, 120)}...
                </p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setOpenItems([item.id]);
                    document.getElementById(`faq-${item.id}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Read Full Answer
                  <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter and Search */}
        <motion.div 
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                  <span className="bg-white/20 text-xs px-2 py-1 ml-1">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* FAQ List */}
        <motion.div 
          className="space-y-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, index) => (
              <motion.div
                key={item.id}
                id={`faq-${item.id}`}
                className="bg-white/80 backdrop-blur-sm border border-white/50 hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4 flex-1">
                    {item.featured && (
                      <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                    )}
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-tight pr-4">
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
                      <div className="px-6 pb-6">
                        <div className="border-t border-slate-200 pt-4">
                          <p className="text-slate-600 leading-relaxed mb-4">
                            {item.answer}
                          </p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="px-2 py-1 bg-slate-100 text-slate-600 text-xs"
                              >
                                {tag}
                              </span>
                            ))}
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
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
              I'm here to help! Get in touch and I'll answer any questions you have about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 font-bold hover:bg-blue-50 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Send Message
              </motion.a>
              <motion.a
                href="https://calendly.com/your-link"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 font-bold hover:bg-white hover:text-blue-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                Schedule Call
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;