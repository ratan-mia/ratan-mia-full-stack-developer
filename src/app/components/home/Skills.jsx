'use client';

import { motion, useInView } from 'framer-motion';
import {
  Briefcase,
  Code,
  Eye,
  Globe,
  Mail,
  Server,
  Settings,
  Star,
  Terminal,
  Trophy
} from 'lucide-react';
import { useMemo, useRef } from 'react'; // Added useEffect

// Constants
const SKILL_CATEGORIES = {
  frontend: {
    title: "Frontend",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    textColor: "text-cyan-400",
    description: "Responsive user interfaces",
    skills: [
      { name: "React.js", level: 95, years: 6, specialty: "Component Architecture", certifications: ["React Dev Cert"], projects: 45, trending: true, description: "Building scalable component-based UIs" },
      { name: "Next.js", level: 92, years: 4, specialty: "SSR & Performance", certifications: ["Next.js Expert"], projects: 25, trending: true, description: "Full-stack React framework for production" },
      { name: "JavaScript", level: 95, years: 8, specialty: "Modern Syntax", certifications: ["JS Expert"], projects: 80, trending: false, description: "Modern JavaScript features and patterns" },
      { name: "TypeScript", level: 88, years: 3, specialty: "Type Safety", certifications: ["TS Pro"], projects: 20, trending: true, description: "Strongly typed JavaScript for better development" },
      { name: "Tailwind CSS", level: 93, years: 4, specialty: "Utility First", certifications: ["CSS Master"], projects: 50, trending: true, description: "Utility-first CSS framework for rapid UI development" },
      { name: "Framer Motion", level: 87, years: 3, specialty: "Animations", certifications: ["Animation Spec."], projects: 30, trending: true, description: "Production-ready motion library for React" }
    ]
  },
  backend: {
    title: "Backend",
    icon: Server,
    color: "from-blue-500 to-purple-500",
    textColor: "text-blue-400",
    description: "Robust server-side applications",
    skills: [
      { name: "PHP & Laravel", level: 92, years: 7, specialty: "MVC Architecture", certifications: ["Laravel Cert.", "PHP Expert"], projects: 60, trending: false, description: "Elegant PHP framework for web artisans" },
      { name: "Node.js", level: 85, years: 4, specialty: "Runtime Environment", certifications: ["Node.js Dev"], projects: 25, trending: true, description: "JavaScript runtime for server-side development" },
      { name: "RESTful APIs", level: 93, years: 6, specialty: "API Design", certifications: ["API Design Expert"], projects: 70, trending: false, description: "Designing scalable and maintainable APIs" },
      { name: "MySQL", level: 88, years: 8, specialty: "Database Design", certifications: ["DB Admin"], projects: 65, trending: false, description: "Relational database management and optimization" },
      { name: "GraphQL", level: 78, years: 2, specialty: "Query Language", certifications: ["GraphQL Fund."], projects: 8, trending: true, description: "A query language for your API" },
      { name: "Redis", level: 82, years: 3, specialty: "Caching", certifications: ["Redis Expert"], projects: 15, trending: true, description: "In-memory data structure store for caching" }
    ]
  },
  fullstack: {
    title: "Full Stack",
    icon: Globe,
    color: "from-purple-500 to-orange-500",
    textColor: "text-purple-400",
    description: "End-to-end application development",
    skills: [
      { name: "WordPress", level: 96, years: 8, specialty: "Custom Development", certifications: ["WP Expert", "WooCommerce Spec."], projects: 90, trending: false, description: "Custom WordPress themes and plugins" },
      { name: "Shopify", level: 87, years: 5, specialty: "E-commerce", certifications: ["Shopify Partner"], projects: 35, trending: true, description: "Custom Shopify apps and theme development" },
      { name: "WooCommerce", level: 91, years: 6, specialty: "Online Stores", certifications: ["WooCommerce Expert"], projects: 55, trending: false, description: "Custom e-commerce solutions" },
      { name: "MERN Stack", level: 86, years: 4, specialty: "Full Stack", certifications: ["Full Stack Dev"], projects: 20, trending: true, description: "MongoDB, Express, React, Node.js stack" },
      { name: "JAMstack", level: 83, years: 3, specialty: "Modern Arch.", certifications: ["JAMstack Dev"], projects: 15, trending: true, description: "JavaScript, APIs, and Markup architecture" },
      { name: "Headless CMS", level: 88, years: 3, specialty: "Content Mgmt", certifications: ["Headless CMS Spec."], projects: 18, trending: true, description: "Decoupled content management systems" }
    ]
  },
  devops: {
    title: "DevOps & Tools",
    icon: Settings,
    color: "from-orange-500 to-red-500",
    textColor: "text-orange-400",
    description: "Infrastructure automation",
    skills: [
      { name: "Docker", level: 85, years: 3, specialty: "Containerization", certifications: ["Docker Cert."], projects: 25, trending: true, description: "Application containerization and deployment" },
      { name: "Git & GitHub", level: 94, years: 8, specialty: "Version Control", certifications: ["Git Expert"], projects: 100, trending: false, description: "Version control and collaborative development" },
      { name: "AWS", level: 82, years: 3, specialty: "Cloud Services", certifications: ["AWS Solutions Arch."], projects: 20, trending: true, description: "Amazon Web Services cloud platform" },
      { name: "Digital Ocean", level: 86, years: 5, specialty: "VPS Management", certifications: ["Cloud Infra."], projects: 40, trending: false, description: "Cloud hosting and server management" },
      { name: "CI/CD", level: 78, years: 2, specialty: "Automation", certifications: ["DevOps Fund."], projects: 12, trending: true, description: "Continuous integration and deployment" },
      { name: "Linux", level: 83, years: 6, specialty: "System Admin.", certifications: ["Linux Admin."], projects: 50, trending: false, description: "Unix-like operating system administration" }
    ]
  }
};

const ACHIEVEMENTS = [
  { icon: Trophy, value: "8+", label: "Years", color: "text-yellow-400", description: "Professional experience" },
  { icon: Code, value: "25+", label: "Techs", color: "text-blue-400", description: "Mastered skills" },
  { icon: Briefcase, value: "150+", label: "Projects", color: "text-green-400", description: "Completed successfully" },
  { icon: Star, value: "98%", label: "Success", color: "text-purple-400", description: "Client satisfaction" }
];

// Marquee Skill Item
const MarqueeSkillItem = ({ skill, category, isInView }) => (
  <span className="flex items-center whitespace-nowrap px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm font-semibold text-white uppercase tracking-wide mr-4 shadow-sm">
    <span className={`w-3 h-3 rounded-full mr-2 bg-gradient-to-r ${category.color}`} />
    {skill.name}
  </span>
);

// Main Skills Component
const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  // Flatten all skills for the marquee
  const allSkills = useMemo(() => {
    return Object.values(SKILL_CATEGORIES).flatMap(category => 
      category.skills.map(skill => ({ ...skill, category }))
    );
  }, []);

  // Duplicate skills to ensure seamless looping of the marquee
  const marqueeContent = useMemo(() => {
    // Repeat content multiple times to fill the marquee and allow smooth looping
    const repeatedContent = Array(5).fill(allSkills).flat(); 
    return repeatedContent;
  }, [allSkills]);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-16 lg:py-24 px-6 lg:px-8 xl:px-16 2xl:px-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden"
      aria-label="Technical skills and expertise"
    >
      {/* Developer Brand Stripe (Top) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      {/* Code Brackets Decoration */}
      <motion.div
        className="absolute top-20 left-10 text-6xl font-mono text-blue-500/20 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        &lt;Skills/&gt;
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mx-auto mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Technical Expertise</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            Core Competencies & Stack
          </motion.h2>
          
          <motion.p 
            className="text-lg text-slate-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            A dynamic display of my key technical skills and expertise across various development domains.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-20 mx-auto mt-6"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>

        {/* Achievement Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16" /* Adjusted mb */
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="text-center p-6 bg-slate-900 border border-slate-700 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 + 0.9 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10">
                <achievement.icon className={`w-8 h-8 mx-auto mb-4 ${achievement.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-3xl font-black text-white mb-2 uppercase tracking-tight">{achievement.value}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider font-medium mb-1">{achievement.label}</div>
                <p className="text-xs text-slate-500 leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Section */}
        <div className="mb-16"> {/* Reduced margin bottom */}
          <div className="text-center mb-8">
            <h3 className="text-xl lg:text-2xl font-black text-white mb-4 uppercase tracking-tight">
              Technologies in Motion
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24 mx-auto" />
          </div>
          
          <div className="relative w-full overflow-hidden py-4 border-y border-slate-700">
            {/* Removed the 'jsx' attribute as it's causing the warning */}
            <style>{`
              @keyframes marquee-scroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); } /* Scrolls half the duplicated content */
              }
              .marquee-container {
                display: flex;
                flex-wrap: nowrap; /* Ensure items don't wrap */
                animation: marquee-scroll 60s linear infinite; /* Adjust speed as needed */
                width: 200%; /* Ensure content is duplicated for seamless scroll */
              }
            `}</style>
            <motion.div 
              className="marquee-container"
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              {marqueeContent.map((skill, index) => (
                <MarqueeSkillItem key={index} skill={skill} category={skill.category} isInView={isInView} />
              ))}
            </motion.div>
          </div>
        </div>


        {/* CTA Section */}
        <motion.div
          className="relative p-8 lg:p-12 bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0 }}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
          
          {/* Animated Background Effects */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <motion.div 
              className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, -15, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
              animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="relative z-10 text-center">
            <Terminal className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
            
            <motion.h3 
              className="text-3xl lg:text-4xl font-black text-white mb-4 uppercase tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              Ready to Start Your Project?
            </motion.h3>
            
            <motion.p 
              className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 uppercase tracking-wide group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Get Free Quote</span>
              </motion.a>
              
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 uppercase tracking-wide group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-5 h-5" />
                <span>View My Work</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Developer Brand Stripe (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
    </section>
  );
};

export default Skills;
