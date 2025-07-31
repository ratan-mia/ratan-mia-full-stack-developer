'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  MessageCircle,
  Minus,
  Phone,
  Plus
} from 'lucide-react';
import { useRef, useState } from 'react';

// --- Reusable Accordion Item Component ---
const AccordionItem = ({ item, index, expanded, onToggle }) => {
    const isOpen = index === expanded;
    const accentColor = index % 2 === 0 ? 'text-accent-lime' : 'text-accent-orange';

    return (
        <div className="border-b border-gray-200">
            <motion.header
                initial={false}
                onClick={() => onToggle(isOpen ? null : index)}
                className="flex justify-between items-center cursor-pointer py-6"
            >
                <h3 className={`text-2xl font-bold transition-colors ${isOpen ? accentColor : 'text-black'}`}>
                    {item.question}
                </h3>
                <div className="text-black">
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                </div>
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
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                >
                    <div className="pb-8">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {item.answer}
                        </p>
                    </div>
                </motion.section>
                )}
            </AnimatePresence>
        </div>
    );
};


// --- MAIN FAQ COMPONENT ---
const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [expanded, setExpanded] = useState(0); // First item open by default

  const faqData = [
    { id: 1, question: "How long does a project take?", answer: "Simple websites: 1-2 weeks. Complex applications: 4-8 weeks. I'll provide an exact timeline during our consultation." },
    { id: 2, question: "What are your rates?", answer: "Websites start from $1,000 and complex applications from $5,000. Every project receives a custom quote based on its specific requirements." },
    { id: 3, question: "What technologies do you use?", answer: "I specialize in React.js, Next.js, Laravel, WordPress, and Node.js. I always choose the best and most appropriate tech stack for your project's needs." },
    { id: 4, question: "Do you work internationally?", answer: "Yes! I collaborate with clients worldwide. With clear communication and project management, time zones are never an issue." },
    { id: 5, question: "Do you provide ongoing support?", answer: "Absolutely! Various maintenance packages are available to ensure your project runs smoothly long-term. The first month of support is included with every project." },
    { id: 6, question: "How do payments work?", answer: "For smaller projects, it's 50% upfront and 50% on completion. Larger projects are split into milestone-based payments for transparency and convenience." }
  ];

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-white text-black" id="faq">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Accordion Section */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20"
        >
            <div className="border-t border-gray-200">
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
        </motion.div>

        {/* Contact Cards Section */}
        <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
            {/* Contact Card */}
            <div className="bg-gray-100 p-10 rounded-lg relative">
                <Phone className="absolute top-8 right-8 w-8 h-8 text-gray-300" />
                <h3 className="text-3xl font-bold mb-4">Contact with Us</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Have a question or want to discuss a project? Feel free to reach out directly.
                </p>
                <a href="#quote" className="group font-bold inline-flex items-center gap-2 text-lg">
                    <span>GET A FREE QUOTE</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
            </div>

            {/* Send a Message Card */}
            <div className="bg-gray-100 p-10 rounded-lg relative">
                <MessageCircle className="absolute top-8 right-8 w-8 h-8 text-gray-300" />
                <h3 className="text-3xl font-bold mb-4">Send a Message</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Prefer email? Send me a message and I'll get back to you within 24 hours.
                </p>
                <a href="mailto:ratanmiadev@gmail.com" className="group font-bold inline-flex items-center gap-2 text-lg">
                    <span>ratanmiadev@gmail.com</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
