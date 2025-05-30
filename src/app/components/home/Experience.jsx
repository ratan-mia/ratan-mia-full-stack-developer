'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "Kawasaki Bangladesh",
      period: "September 2018 – Present",
      achievements: [
        "Led design and development of dynamic web applications and APIs",
        "Built comprehensive Car Parts E-commerce platform with 200% sales increase",
        "Developed Chery Bangladesh website with 97% speed optimization",
        "Managed deployment using Docker, Digital Ocean, and Google Cloud"
      ],
      tags: ["React.js", "Next.js", "Laravel", "E-commerce"]
    },
    {
      title: "IT Manager",
      company: "Continental Motors",
      period: "October 2018 – Present",
      achievements: [
        "Strategically managed IT operations and budget optimization",
        "Reduced operational costs by 40% through strategic vendor selection",
        "Implemented real-time attendance system with automated payroll",
        "Maintained server infrastructure including Windows Server and VPS"
      ],
      tags: ["IT Management", "DevOps", "Infrastructure", "Leadership"]
    },
    {
      title: "Sr. Software Developer",
      company: "Bengal Group of Industries",
      period: "January 2018 – September 2018",
      achievements: [
        "Led team of 15 developers with 25% client satisfaction increase",
        "Developed scalable Laravel-based e-commerce solutions",
        "Created Marlax Technologies with WHMCS integration",
        "Managed end-to-end project lifecycle using Agile methodologies"
      ],
      tags: ["Laravel", "WordPress", "Team Leadership", "E-commerce"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 text-indigo-800 font-medium text-sm mb-6">
            CAREER JOURNEY
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Over 10 years of full-stack development expertise, leading teams and delivering 
            high-performance web solutions that drive business growth.
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Enhanced Timeline line with gradient */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-indigo-600 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 blur-3xl animate-pulse delay-2000"></div>
          
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={index % 2 === 0 ? slideInLeft : fadeInUp}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 
                  ? 'md:pr-1/2 md:text-right' 
                  : 'md:pl-1/2 md:ml-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Enhanced Timeline dot */}
              <div className="absolute left-1/2 top-6 w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 transform -translate-x-1/2 border-4 border-white shadow-xl hidden md:block z-10">
                <div className="absolute inset-1 bg-white/50 backdrop-blur-sm"></div>
              </div>
              
              <motion.div 
                className="bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {/* Company badge */}
                <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 text-sm font-medium mb-4">
                  {exp.company}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2 capitalize">
                  {exp.title}
                </h3>
                
                <p className="text-slate-600 text-sm md:text-base mb-6 font-medium">
                  {exp.period}
                </p>

                {/* Key achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed font-light">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="bg-white/20 text-slate-700 px-3 py-1 text-xs font-medium border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Education & Certifications */}
        <motion.div 
          className="mt-16 bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-white/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <div className="inline-block bg-green-500/20 border border-green-400/30 px-6 py-3 backdrop-blur-sm text-green-800 font-medium text-sm mb-4">
              CREDENTIALS
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
              Education & Certifications
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">Education</h4>
              <div className="bg-slate-50 p-6 border border-slate-200">
                <p className="text-slate-800 font-semibold mb-2">Bachelor of Arts (English)</p>
                <p className="text-slate-600 text-sm mb-1">University of Dhaka</p>
                <p className="text-slate-500 text-sm">2011-2017</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-bold text-blue-600 mb-4 uppercase tracking-wider">Key Certifications</h4>
              <div className="space-y-3">
                {[
                  "Complete React.js Course - Advanced (Udemy)",
                  "Modern JavaScript for React JS (Udemy)",
                  "Advanced PHP: Debugging (LinkedIn)",
                  "Node.js and Express Development (IBM)"
                ].map((cert, i) => (
                  <div key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-cyan-400 mt-2 flex-shrink-0"></div>
                    <span className="font-light">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Next Project?</h3>
            <p className="text-blue-100 text-lg mb-6 font-light">
              Let's discuss how my expertise can help bring your vision to life.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 font-bold hover:bg-blue-50 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;