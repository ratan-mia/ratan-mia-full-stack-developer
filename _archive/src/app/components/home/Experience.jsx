'use client';

import { motion, useInView } from 'framer-motion';
import { Award, Briefcase } from 'lucide-react';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "Kawasaki Bangladesh",
      period: "2018 – Present",
      duration: "6+ years",
      description: "Led design and development of dynamic web applications, built comprehensive e-commerce platforms, and managed cloud deployments.",
      tags: ["React.js", "Next.js", "Laravel", "E-commerce", "Docker"]
    },
    {
      title: "IT Manager",
      company: "Continental Motors",
      period: "2018 – Present",
      duration: "6+ years",
      description: "Strategically managed IT operations, reduced costs by 40%, and maintained server infrastructure with 99.9% uptime.",
      tags: ["IT Management", "DevOps", "Infrastructure", "Leadership"]
    },
    {
      title: "Sr. Software Developer",
      company: "Bengal Group of Industries",
      period: "2018 – 2018",
      duration: "9 months",
      description: "Led team of 15 developers, developed scalable Laravel-based solutions, and managed projects using Agile methodologies.",
      tags: ["Laravel", "WordPress", "Team Leadership", "E-commerce"]
    }
  ];

  return (
    <section 
      ref={ref}
      id="experience" 
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-1 bg-accent-lime rounded-full" />
            <span className="text-black font-bold text-sm uppercase tracking-wider">
              Professional Journey
            </span>
            <div className="w-12 h-1 bg-accent-lime rounded-full" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 text-black leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Experience & Career Path
          </motion.h2>
          
          <motion.p 
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Over 6 years building enterprise solutions, leading development teams, and delivering high-impact projects
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:border-accent-lime/50 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                
                {/* Icon & Period */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-accent-lime flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Briefcase className="w-7 h-7 text-black" />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-sm font-bold text-gray-500">{exp.duration}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-extrabold text-black mb-2 group-hover:text-accent-lime transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-gray-600">
                      <span className="font-bold text-black">{exp.company}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-accent-lime/20 hover:text-black transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[3.5rem] top-full w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent hidden lg:block" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 pt-12 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, label: 'Years Experience', value: '6+' },
              { icon: Briefcase, label: 'Projects Completed', value: '150+' },
              { icon: Award, label: 'Client Satisfaction', value: '98%' },
              { icon: Briefcase, label: 'Team Leadership', value: '15+' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-xl bg-gray-50 hover:bg-accent-lime/10 transition-colors group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-black group-hover:text-accent-lime transition-colors" />
                <div className="text-2xl lg:text-3xl font-extrabold text-black mb-1">{stat.value}</div>
                <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
