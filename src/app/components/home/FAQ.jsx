'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  ChevronDown,
  HelpCircle,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { useState, useRef } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([1]); // First item open by default
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  const faqData = [
    {
      id: 1,
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines vary based on complexity and scope. Simple websites typically take 1-2 weeks, while complex web applications can take 4-8 weeks. During our initial consultation, I'll provide a detailed timeline based on your specific requirements."
    },
    {
      id: 2,
      question: "What is your typical project cost range?",
      answer: "Project costs vary based on complexity and features. Simple websites start from $1,000-$3,000, while complex web applications range from $5,000-$25,000+. I provide detailed, transparent quotes after understanding your specific needs."
    },
    {
      id: 3,
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern web technologies including React.js, Next.js, JavaScript/TypeScript for frontend; PHP, Laravel, Node.js for backend; and WordPress, Shopify for CMS/e-commerce solutions. I also work with MySQL and MongoDB databases."
    },
    {
      id: 4,
      question: "Do you work with international clients?",
      answer: "Yes! I work with clients worldwide from my base in Dhaka, Bangladesh. I'm experienced in collaborating across different time zones and use modern communication tools to ensure smooth collaboration regardless of location."
    },
    {
      id: 5,
      question: "Do you provide ongoing maintenance and support?",
      answer: "Absolutely! I offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support. Basic support is included for the first month after project launch."
    },
    {
      id: 6,
      question: "How do you handle project payments?",
      answer: "I typically work with 50% upfront and 50% upon completion for smaller projects. Larger projects are divided into milestones with payments tied to deliverable completion. All projects include a detailed contract outlining scope, timeline, and terms."
    },
    {
      id: 7,
      question: "Can you integrate third-party services and APIs?",
      answer: "Yes! I have extensive experience integrating various third-party services including payment gateways, CRM systems, email marketing tools, social media APIs, Google services, and custom APIs."
    },
    {
      id: 8,
      question: "What makes you different from other developers?",
      answer: "I combine 10+ years of experience with a client-first approach, focusing on understanding your business goals rather than just technical requirements. My proven process ensures transparent communication, on-time delivery, and results that drive business growth."
    },
    {
      id: 9,
      question: "Do you offer website redesigns?",
      answer: "Yes! I can redesign existing websites to improve performance, user experience, and modern design standards. This includes migrating to new platforms, improving mobile responsiveness, and enhancing overall functionality."
    },
    {
      id: 10,
      question: "How do we communicate during the project?",
      answer: "I use a combination of email, WhatsApp, video calls, and project management tools to keep you updated. You'll receive regular progress reports and have direct access to me throughout the project development process."
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
    <section 
      ref={sectionRef}
      id="faq" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Know
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about my services, process, and pricing. Can't find what you're looking for? Just ask!
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 mb-16"
        >
          {faqData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
              className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
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
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            I'm here to help! Contact me directly for personalized answers to your specific questions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send a Message
            </a>
            
            <a
              href="tel:+8801751010966"
              className="inline-flex items-center justify-center gap-2 bg-white/20 border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h4>
            <p className="text-gray-600">I typically respond to all inquiries within 24 hours, often much sooner.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Free Consultation</h4>
            <p className="text-gray-600">30-minute strategy call included to discuss your project in detail.</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h4>
            <p className="text-gray-600">I work across time zones to accommodate your schedule and needs.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;