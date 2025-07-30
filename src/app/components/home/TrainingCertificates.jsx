'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { GraduationCap, Minus, Plus } from 'lucide-react';
import { useRef, useState } from 'react';

// --- Accordion Item Component ---
const AccordionItem = ({ item, index, expanded, onToggle }) => {
  const isOpen = index === expanded;
  const accentColor = index % 2 === 0 ? 'text-accent-lime' : 'text-accent-orange';

  return (
    <div className="border-b border-gray-200">
      <motion.header
        initial={false}
        onClick={() => onToggle(isOpen ? false : index)}
        className="flex justify-between items-center cursor-pointer py-6"
      >
        <div className="flex items-center gap-6">
          <span className="text-gray-400 font-mono text-sm">0{index + 1}</span>
          <h3 className={`text-2xl md:text-3xl font-bold transition-colors ${isOpen ? accentColor : 'text-black'}`}>
            {item.title}
          </h3>
        </div>
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
            <div className="pb-8 grid md:grid-cols-3 gap-8 pl-14">
                <div className="md:col-span-2">
                    <p className="text-gray-600 text-lg">
                        {item.description}
                    </p>
                    {item.skills && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {item.skills.map(skill => (
                                <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200">{skill}</span>
                            ))}
                        </div>
                    )}
                </div>
                <div className="text-left md:text-right">
                    <p className="font-bold text-black">{item.provider || item.organization}</p>
                    <p className="text-gray-500">{item.duration || item.date}</p>
                </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- MAIN COMPONENT ---
const TrainingCertificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.05 });
  const [expanded, setExpanded] = useState(0);

  // Education data
  const education = {
    degree: "Bachelor of Arts (English)",
    institution: "University of Dhaka",
    period: "2011 – 2017",
    description: "Studied a diverse range of English literature, language, and writing courses, enhancing communication and critical thinking skills.",
    icon: GraduationCap,
  };

  // Combined awards and certificates
  const allAchievements = [
    { id: 1, type: 'certificate', title: "The Complete React.js Course", provider: "Udemy", skills: ["React.js", "JavaScript", "Frontend"], description: "Comprehensive course covering React fundamentals to advanced concepts.", duration: "40+ hours" },
    { id: 2, type: 'certificate', title: "Back-End Apps with Node.js and Express", provider: "IBM", skills: ["Node.js", "Express.js", "API"], description: "Building scalable backend applications with Node.js and Express.", duration: "20+ hours" },
    { id: 3, type: 'certificate', title: "Build CRUD Application - PHP & MySQL", provider: "Udemy", skills: ["PHP", "MySQL", "CRUD"], description: "Guide to building database-driven applications with PHP and MySQL.", duration: "15+ hours" },
    { id: 4, type: 'award', title: "Junior Scholarship", organization: "Dhaka Education Board", date: "September 2008", description: "Secured a top position, showcasing dedication to academic excellence.", },
    { id: 5, type: 'certificate', title: "Modern JavaScript for React JS", provider: "Udemy", skills: ["JavaScript ES6+", "React.js"], description: "In-depth JavaScript course focusing on modern ES6+ features.", duration: "25+ hours" },
    { id: 6, type: 'certificate', title: "Docker Course for beginners", provider: "Udemy", skills: ["Docker", "Containers"], description: "Introduction to containerization and Docker for modern deployment.", duration: "10+ hours" }
  ];
  
  const providerLogos = [
    { name: 'Udemy' },
    { name: 'IBM' },
    { name: 'LinkedIn Learning' },
    { name: 'Vercel' },
    { name: 'AWS' },
    { name: 'Dhaka Board' },
  ];

  return (
    <section ref={ref} className="py-32 lg:py-40 bg-white text-black" id="education">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
        >
            {/* Education Section */}
            <div className="mb-20 text-center">
                <motion.div 
                    className="inline-block bg-gray-100 p-4 rounded-full mb-4"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.2, type: 'spring' }}
                >
                    <GraduationCap className="w-8 h-8 text-gray-700" />
                </motion.div>
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tighter">Academic Foundation</h2>
                <p className="text-2xl font-bold text-gray-800">{education.degree}</p>
                <p className="text-lg text-gray-500">{education.institution} ({education.period})</p>
            </div>

            {/* Accordion List */}
            <div className="border-t border-gray-200">
                {allAchievements.map((item, index) => (
                    <AccordionItem 
                        key={item.id} 
                        item={item} 
                        index={index} 
                        expanded={expanded} 
                        onToggle={setExpanded} 
                    />
                ))}
            </div>

            {/* Provider Logos */}
            <div className="mt-20 pt-10 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-200 border border-gray-200 rounded-lg">
                    {providerLogos.map((provider, index) => (
                        <div key={index} className="bg-white p-6 flex items-center justify-center text-center h-24">
                            <p className="font-bold text-gray-600 text-lg">{provider.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingCertificates;
