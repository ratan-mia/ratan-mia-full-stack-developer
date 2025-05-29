'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "PHP & Laravel", level: 90 },
    { name: "WordPress", level: 95 },
    { name: "Shopify", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "DevOps", level: 85 }
  ];

  return (
    <section id="skills" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-center mb-12 text-slate-800 font-bold"
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              variants={fadeInUp}
              className="mb-6"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-bold text-slate-800">{skill.name}</span>
                <span className="text-slate-600">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">
            Technical Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'HTML5', 'CSS3', 'Tailwind', 'JavaScript', 'React.js', 'Next.js',
              'PHP', 'Laravel', 'Node.js', 'WordPress', 'Shopify', 'MySQL',
              'MongoDB', 'Firebase', 'Git', 'Docker', 'AWS', 'Digital Ocean'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-slate-100 hover:bg-blue-50 p-3 rounded-lg text-center font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;