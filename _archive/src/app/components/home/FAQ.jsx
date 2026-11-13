'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
    ArrowRight,
    Calendar,
    Clock,
    Code2,
    CreditCard,
    DollarSign,
    Globe,
    Mail,
    Minus,
    Plus,
    Shield
} from 'lucide-react';
import { useRef, useState } from 'react';

// --- FAQ Item Component with Individual Animation ---
const AccordionItem = ({ item, index, expanded, onToggle }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isOpen = index === expanded;
  const accentColor = index % 2 === 0 ? 'text-accent-lime' : 'text-accent-orange';
  const bgColor = index % 2 === 0 ? 'bg-accent-lime' : 'bg-accent-orange';

  return (
    <motion.div 
      ref={ref}
      className="border-b border-gray-200 group hover:bg-gray-50/50 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
    >
      <motion.header
        onClick={() => onToggle(isOpen ? null : index)}
        className="flex justify-between items-center cursor-pointer py-6 lg:py-8 group-hover:py-8 transition-all duration-300"
        whileHover={{ x: 4 }}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Question Icon */}
          <motion.div 
            className={`w-12 h-12 rounded-xl ${isOpen ? bgColor : 'bg-gray-200'} flex items-center justify-center transition-all duration-300`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <item.icon className={`w-6 h-6 ${isOpen ? 'text-white' : 'text-gray-600'}`} />
          </motion.div>
          
          {/* Question */}
          <div>
            <span className="text-gray-400 font-mono text-sm block mb-1">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
              isOpen ? accentColor : 'text-black group-hover:text-gray-700'
            }`}>
              {item.question}
            </h3>
          </div>
        </div>
        
        {/* Toggle Button */}
        <motion.div 
          className={`w-10 h-10 rounded-lg ${isOpen ? bgColor : 'bg-gray-100'} flex items-center justify-center transition-all duration-300`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <Minus className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-gray-600'}`} />
            ) : (
              <Plus className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-gray-600'}`} />
            )}
          </motion.div>
        </motion.div>
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 lg:pb-12 pl-16">
              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-4">
                {item.answer}
              </p>
              {item.details && (
                <div className="mt-6">
                  <h4 className="font-bold text-black mb-3">Additional Details:</h4>
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-lime mt-2 flex-shrink-0" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Contact Card Component ---
const ContactCard = ({ card, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      className="bg-gray-50 hover:bg-white border border-gray-200 hover:border-accent-lime/30 p-8 lg:p-10 rounded-2xl relative group transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      {/* Background Icon */}
      <motion.div 
        className="absolute top-8 right-8 opacity-20 group-hover:opacity-30 transition-opacity"
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <card.icon className="w-12 h-12 text-gray-400" />
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10">
        <motion.div 
          className="w-16 h-16 bg-accent-lime/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent-lime/20 transition-colors"
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          <card.icon className="w-8 h-8 text-accent-lime" />
        </motion.div>
        
        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-black group-hover:text-gray-800 transition-colors">
          {card.title}
        </h3>
        
        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          {card.description}
        </p>
        
        <motion.a 
          href={card.link} 
          className="group/link font-bold inline-flex items-center gap-3 text-lg text-black hover:text-accent-lime transition-colors"
          whileHover={{ x: 4 }}
        >
          <span>{card.cta}</span>
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </div>
    </motion.div>
  );
};

// --- MAIN FAQ COMPONENT ---
const FAQ = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  
  const sectionInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  
  const [expanded, setExpanded] = useState(0);

  const faqData = [
    { 
      id: 1, 
      icon: Clock,
      question: "How long does a typical project take?", 
      answer: "Project timelines vary based on complexity and requirements. I provide detailed timelines during our initial consultation to set clear expectations.",
      details: [
        "Simple websites: 2-3 weeks",
        "Mobile apps (React Native): 6-12 weeks", 
        "E-commerce platforms: 4-8 weeks",
        "Complex web applications: 8-16 weeks"
      ]
    },
    { 
      id: 2, 
      icon: DollarSign,
      question: "What are your development rates?", 
      answer: "I offer competitive rates based on project scope and complexity. Every project receives a custom quote tailored to your specific requirements and budget.",
      details: [
        "Landing pages: Starting from $1,500",
        "Business websites: $3,000 - $8,000",
        "Mobile apps (React Native): $8,000 - $25,000",
        "E-commerce platforms: $5,000 - $15,000",
        "Custom web applications: $10,000+"
      ]
    },
    { 
      id: 3, 
      icon: Code2,
      question: "What technologies and frameworks do you use?", 
      answer: "I specialize in modern, industry-standard technologies that ensure scalability, performance, and maintainability for your mobile and web projects.",
      details: [
        "Mobile: React Native, Expo, TypeScript",
        "Frontend: React.js, Next.js, TypeScript, Tailwind CSS",
        "Backend: Laravel, Node.js, Express.js",
        "Database: Supabase, PostgreSQL, MySQL, Firebase",
        "Cloud: AWS, Vercel, Netlify, DigitalOcean"
      ]
    },
    { 
      id: 4, 
      icon: Globe,
      question: "Do you work with international clients?", 
      answer: "Absolutely! I collaborate with clients worldwide and have experience working across different time zones with clear communication protocols.",
      details: [
        "Flexible working hours to accommodate time zones",
        "Regular progress updates via Slack/Email/WhatsApp",
        "Weekly video calls for project alignment",
        "English as primary communication language",
        "Experience with clients in Bangladesh, USA, Europe, and Middle East"
      ]
    },
    { 
      id: 5, 
      icon: Shield,
      question: "What kind of ongoing support do you provide?", 
      answer: "I offer comprehensive maintenance and support packages to ensure your mobile app or web application runs smoothly and stays up-to-date with the latest security standards.",
      details: [
        "First month of support included with every project",
        "Monthly maintenance packages available",
        "Security updates and bug fixes",
        "Performance monitoring and optimization",
        "Content updates and feature additions"
      ]
    },
    { 
      id: 6, 
      icon: CreditCard,
      question: "How does the payment process work?", 
      answer: "I use a transparent, milestone-based payment structure that protects both parties and ensures project momentum throughout development.",
      details: [
        "Small projects: 50% upfront, 50% on completion",
        "Large projects: Split into 3-4 milestone payments",
        "Payment methods: Bank transfer, PayPal, Stripe",
        "Invoices provided for all transactions"
      ]
    }
  ];

  const contactCards = [
    {
      icon: Calendar,
      title: "Schedule a Consultation",
      description: "Book a free 30-minute consultation to discuss your project requirements and get a detailed proposal.",
      cta: "BOOK FREE CONSULTATION",
      link: "#contact"
    },
    {
      icon: Mail,
      title: "Send Direct Message",
      description: "Prefer email? Send me a detailed message about your project and I'll respond within 24 hours.",
      cta: "shorifull@gmail.com",
      link: "mailto:shorifull@gmail.com"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-24 bg-white text-black" id="faq">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-12 h-1 bg-accent-lime" />
            <span className="text-gray-400 font-semibold text-sm uppercase tracking-wider">Frequently Asked Questions</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Common Questions About
            <br />
            <span className="text-accent-lime">My Services</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Find answers to the most common questions about my development process, pricing, and services.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="border-t border-gray-200 mb-20">
          {faqData.map((item, index) => (
            <AccordionItem 
              key={item.id} 
              item={item} 
              index={index} 
              expanded={expanded} 
              onToggle={setExpanded} 
            />
          ))}
        </div>

        {/* Contact Cards Section */}
        <motion.div 
          className="mt-20 pt-12 border-t border-gray-200"
          initial={{ opacity: 0, y: 40 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't hesitate to reach out. I'm here to help clarify any doubts and discuss your project in detail.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {contactCards.map((card, index) => (
              <ContactCard 
                key={card.title}
                card={card}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;