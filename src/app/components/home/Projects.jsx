import { motion } from 'framer-motion';

const Projects = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projects = [
    {
      title: "Chery Bangladesh",
      description: "Official website with 360° car viewer and 97% speed optimization using Next.js and React.js for optimal performance and SEO.",
      tech: ["Next.js", "React.js", "CRM Integration", "Facebook Pixel"],
      link: "cherybd.vercel.app",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Car Parts E-commerce",
      description: "Comprehensive platform with make/model/year specification system, integrated with WhatsApp Business API, Facebook Pixel, and CRM.",
      tech: ["React.js", "PHP", "API Integration", "WhatsApp API"],
      link: "japanparts.com",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "ELF Bangladesh",
      description: "High-converting e-commerce platform built with React.js and Tailwind CSS, showcasing scalable online retail solutions.",
      tech: ["React.js", "Tailwind CSS", "E-commerce", "SEO"],
      link: "elf-bangladesh.vercel.app",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "OpenAI Counselling Chatbot",
      description: "WordPress plugin integrating ChatGPT and OpenAI APIs with Text-to-Speech functionality for mental health counselling.",
      tech: ["WordPress", "OpenAI API", "Text-to-Speech", "ChatGPT"],
      link: "Custom Plugin",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "CWL Detailing Web",
      description: "Responsive service business website leveraging React.js and Tailwind CSS with intuitive UI/UX and cross-browser compatibility.",
      tech: ["React.js", "Tailwind CSS", "Responsive Design"],
      link: "cwl-detailing-web.vercel.app",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "SK Japan Export",
      description: "Custom Shopify App using Laravel to connect with Japanese car auctions, featuring Car Price Calculator with custom functionality.",
      tech: ["Laravel", "Shopify", "Custom App", "Price Calculator"],
      link: "Custom Development",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-center mb-16 text-slate-800 font-bold"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Header with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <h3 className="text-white text-2xl font-bold text-center z-10 px-4">
                  {project.title}
                </h3>
                <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/50 rounded-full"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Link */}
                <motion.a 
                  href={project.link.startsWith('http') ? project.link : `https://${project.link}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors duration-200 group"
                  whileHover={{ x: 5 }}
                >
                  {project.link.includes('vercel.app') || project.link.includes('.com') ? 'View Live Site' : 'View Details'}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-slate-800">
            Ready to Start Your Project?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new challenges and bring innovative ideas to life. 
            Let's discuss how I can help you achieve your goals.
          </p>
          <motion.button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;