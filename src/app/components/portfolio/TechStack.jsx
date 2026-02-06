'use client';

import { motion } from 'framer-motion';

const TechStack = () => {

  return (
    <section className="relative w-full py-20 px-4 md:px-6 lg:px-8 bg-accent-lime overflow-hidden">
      {/* Watermark Background Text - Random Positions */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <div className="absolute top-[10%] left-[5%] text-[6rem] md:text-[8rem] font-black text-black leading-none whitespace-nowrap transform -rotate-12">
          REACT
        </div>
        <div className="absolute top-[25%] right-[10%] text-[5rem] md:text-[7rem] font-black text-black leading-none whitespace-nowrap transform rotate-6">
          NEXT.JS
        </div>
        <div className="absolute top-[50%] left-[15%] text-[7rem] md:text-[9rem] font-black text-black leading-none whitespace-nowrap transform -rotate-6">
          LARAVEL
        </div>
        <div className="absolute bottom-[20%] right-[5%] text-[5rem] md:text-[7rem] font-black text-black leading-none whitespace-nowrap transform rotate-12">
          NODE.JS
        </div>
        <div className="absolute top-[60%] right-[20%] text-[4rem] md:text-[6rem] font-black text-black leading-none whitespace-nowrap transform -rotate-3">
          TYPESCRIPT
        </div>
        <div className="absolute bottom-[35%] left-[8%] text-[5rem] md:text-[7rem] font-black text-black leading-none whitespace-nowrap transform rotate-8">
          AWS
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-black/15 text-black rounded-full text-sm font-bold mb-6">
            TECH STACK
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-black leading-tight">
            Technologies I Master
          </h2>
        </motion.div>

        {/* Tech Stack Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left Column */}
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-black group-hover:scale-105 transition-transform">Frontend & Mobile</h3>
              <p className="text-black/80 text-xl leading-relaxed font-semibold">
                React.js, Next.js, TypeScript, React Native, Tailwind CSS — Building fast, responsive interfaces that users love.
              </p>
            </div>

            <div className="group">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-black group-hover:scale-105 transition-transform">Backend & APIs</h3>
              <p className="text-black/80 text-xl leading-relaxed font-semibold">
                Laravel, Node.js, Express.js, RESTful APIs — Crafting robust server architectures that scale.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="group">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-black group-hover:scale-105 transition-transform">Database & Cloud</h3>
              <p className="text-black/80 text-xl leading-relaxed font-semibold">
                PostgreSQL, MySQL, MongoDB, AWS, Redis, Docker — Secure, scalable data solutions in the cloud.
              </p>
            </div>

            <div className="group">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-black group-hover:scale-105 transition-transform">Design & Quality</h3>
              <p className="text-black/80 text-xl leading-relaxed font-semibold">
                Figma, Git, CI/CD, Testing — Pixel-perfect execution with industry best practices.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tech Icons/Pills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'React.js', 'Next.js', 'TypeScript', 'React Native', 'Tailwind CSS',
              'Laravel', 'Node.js', 'Express.js', 'PostgreSQL', 'MySQL',
              'MongoDB', 'AWS', 'Docker', 'Redis', 'Figma', 'Git'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.03 }}
                className="px-5 py-3 bg-black text-accent-lime rounded-xl text-sm font-bold hover:scale-110 hover:shadow-lg transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-black/90 leading-relaxed max-w-3xl mx-auto">
            10+ years turning complex problems into elegant solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
