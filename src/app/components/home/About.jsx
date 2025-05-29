'use client';

import { motion } from 'framer-motion';

const About = () => {
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

  const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-24 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl text-center mb-12 text-slate-800 font-bold"
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={slideInLeft}>
              <h3 className="text-2xl mb-4 text-blue-600 font-bold">
                10+ Years of Excellence
              </h3>
              <p className="text-lg mb-6 text-slate-600 leading-relaxed">
                As a highly accomplished Full Stack Developer, I bring a robust background in crafting 
                high-performance, scalable web applications with specialized focus on React.js and Next.js.
              </p>
              <p className="text-lg mb-6 text-slate-600 leading-relaxed">
                My expertise lies in delivering comprehensive modern web solutions, consistently exceeding 
                project goals by optimizing development workflows and fostering collaborative environments.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                  React.js Expert
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Next.js Specialist
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                  WordPress Pro
                </span>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h4 className="text-xl mb-4 text-slate-800 font-bold">
                Key Achievements
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-600">Reduced IT costs by 40% through strategic optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-600">Achieved 200% sales increase with Car Price Calculator</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-600">97% speed optimization on Chery Bangladesh website</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-600">Led team of 15 developers with 25% client satisfaction increase</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;