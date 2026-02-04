'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Smartphone,
  Layout,
  Palette,
  Terminal,
  GitBranch,
  Package,
  Zap,
  Shield,
  Rocket,
  Target,
  Award
} from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend Development",
      icon: Layout,
      color: "bg-accent-lime",
      textColor: "text-black",
      techs: [
        { name: "React.js", level: 95, icon: Code2 },
        { name: "Next.js", level: 90, icon: Zap },
        { name: "TypeScript", level: 85, icon: Code2 },
        { name: "Tailwind CSS", level: 95, icon: Palette },
        { name: "JavaScript ES6+", level: 95, icon: Code2 },
        { name: "HTML5/CSS3", level: 98, icon: Layout }
      ]
    },
    {
      category: "Backend Development",
      icon: Server,
      color: "bg-accent-orange",
      textColor: "text-white",
      techs: [
        { name: "Laravel", level: 90, icon: Server },
        { name: "Node.js", level: 85, icon: Server },
        { name: "PHP", level: 90, icon: Code2 },
        { name: "Express.js", level: 80, icon: Zap },
        { name: "Python", level: 75, icon: Code2 },
        { name: "RESTful APIs", level: 95, icon: Package }
      ]
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      color: "bg-black",
      textColor: "text-white",
      techs: [
        { name: "React Native", level: 90, icon: Smartphone },
        { name: "Expo", level: 85, icon: Zap },
        { name: "iOS Development", level: 80, icon: Smartphone },
        { name: "Android Development", level: 80, icon: Smartphone },
        { name: "Mobile UI/UX", level: 90, icon: Layout },
        { name: "Push Notifications", level: 85, icon: Package }
      ]
    },
    {
      category: "Database & Cloud",
      icon: Database,
      color: "bg-gray-900",
      textColor: "text-white",
      techs: [
        { name: "MySQL", level: 90, icon: Database },
        { name: "PostgreSQL", level: 85, icon: Database },
        { name: "MongoDB", level: 80, icon: Database },
        { name: "AWS", level: 80, icon: Cloud },
        { name: "Docker", level: 75, icon: Package },
        { name: "Redis", level: 75, icon: Zap }
      ]
    }
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
            ⚡ TECH STACK
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Technologies & Expertise
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            The modern technologies and tools I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {technologies.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${category.color} rounded-3xl p-8 md:p-10 shadow-xl border-2 border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all group`}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`w-20 h-20 ${category.textColor === 'text-white' ? 'bg-white' : 'bg-black'} rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <category.icon className={`w-10 h-10 ${category.textColor === 'text-white' ? 'text-black' : 'text-accent-lime'}`} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className={`text-2xl md:text-3xl font-extrabold ${category.textColor}`}>{category.category}</h3>
                  <p className={`${category.textColor === 'text-white' ? 'text-white/80' : 'text-black/70'} text-sm font-bold`}>
                    {category.techs.length} Technologies
                  </p>
                </div>
              </div>

              {/* Technology List */}
              <div className="space-y-5">
                {category.techs.map((tech, techIndex) => (
                  <motion.div 
                    key={tech.name} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                    className="group/tech"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <tech.icon className={`w-5 h-5 mr-3 ${category.textColor}`} strokeWidth={2.5} />
                        <span className={`font-bold ${category.textColor}`}>{tech.name}</span>
                      </div>
                      <span className={`text-sm font-extrabold px-3 py-1 rounded-full ${
                        category.textColor === 'text-white' 
                          ? 'bg-white/20 text-white' 
                          : 'bg-black/10 text-black'
                      }`}>
                        {tech.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className={`w-full ${category.textColor === 'text-white' ? 'bg-white/20' : 'bg-black/10'} rounded-full h-2.5 overflow-hidden`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: techIndex * 0.1 }}
                        className={`h-full rounded-full ${
                          category.textColor === 'text-white' 
                            ? 'bg-accent-lime' 
                            : 'bg-black'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
              💡 PHILOSOPHY
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Development Principles</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
              Core principles that guide every project I build
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Rocket,
                title: "Performance First",
                description: "Every application is optimized for speed, scalability, and efficiency from day one.",
                color: "bg-accent-lime",
                iconBg: "bg-black",
                iconColor: "text-accent-lime"
              },
              {
                icon: Shield,
                title: "Clean Code",
                description: "Writing maintainable, readable code that follows industry best practices and standards.",
                color: "bg-accent-orange",
                iconBg: "bg-white",
                iconColor: "text-accent-orange"
              },
              {
                icon: Target,
                title: "User-Centric",
                description: "Focusing on user experience and business goals to deliver solutions that matter.",
                color: "bg-black",
                iconBg: "bg-accent-lime",
                iconColor: "text-black"
              }
            ].map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`${principle.color} rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group`}
              >
                <div className={`${principle.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <principle.icon className={`w-8 h-8 ${principle.iconColor}`} strokeWidth={2.5} />
                </div>
                <h4 className={`font-extrabold mb-3 text-xl md:text-2xl ${principle.color === 'bg-accent-lime' ? 'text-black' : 'text-white'}`}>
                  {principle.title}
                </h4>
                <p className={`text-base leading-relaxed font-medium ${
                  principle.color === 'bg-accent-lime' ? 'text-black/80' : 'text-white/90'
                }`}>
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
