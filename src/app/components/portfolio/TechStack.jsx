'use client';

import { motion } from 'framer-motion';

const TechStack = () => {

  return (
    <section className="relative w-full py-20 px-4 md:px-6 lg:px-8 bg-accent-lime">
      <div className="max-w-5xl mx-auto">
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
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">Frontend & Mobile</h3>
              <p className="text-black/80 text-xl leading-relaxed font-semibold">
                React.js, Next.js, TypeScript, React Native, Tailwind CSS — Building fast, responsive interfaces that users love.
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">Backend & APIs</h3>
              <p className="text-black/80 text-xl leading-relaxed font-semibold">
                Laravel, Node.js, Express.js, RESTful APIs — Crafting robust server architectures that scale.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">Database & Cloud</h3>
              <p className="text-black/80 text-xl leading-relaxed font-semibold">
                PostgreSQL, MySQL, MongoDB, AWS, Redis, Docker — Secure, scalable data solutions in the cloud.
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-black">Design & Quality</h3>
              <p className="text-black/80 text-xl leading-relaxed font-semibold">
                Figma, Git, CI/CD, Testing — Pixel-perfect execution with industry best practices.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
