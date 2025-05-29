import { motion } from 'framer-motion';

const Services = () => {
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

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Full Stack Web Development",
      description: "Complete web applications using modern technologies like React.js, Next.js, Node.js, and PHP Laravel.",
      features: [
        "Responsive Design",
        "API Integration",
        "Database Design",
        "Performance Optimization",
        "SEO Implementation"
      ],
      pricing: "Starting from $2,000",
      gradient: "from-blue-600 to-cyan-600",
      hoverGradient: "from-blue-700 to-cyan-700"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "E-commerce Solutions",
      description: "High-converting online stores with advanced features, payment integration, and inventory management.",
      features: [
        "Shopify Development",
        "Custom E-commerce",
        "Payment Gateway Integration",
        "Inventory Management",
        "Analytics & Reporting"
      ],
      pricing: "Starting from $3,500",
      gradient: "from-purple-600 to-pink-600",
      hoverGradient: "from-purple-700 to-pink-700"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "WordPress Development",
      description: "Custom WordPress themes, plugins, and complete CMS solutions with advanced functionality.",
      features: [
        "Custom Theme Development",
        "Plugin Development",
        "WordPress Optimization",
        "Security Implementation",
        "Migration & Maintenance"
      ],
      pricing: "Starting from $1,200",
      gradient: "from-green-600 to-teal-600",
      hoverGradient: "from-green-700 to-teal-700"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "IT Management & DevOps",
      description: "Complete IT infrastructure management, server setup, cloud deployment, and system optimization.",
      features: [
        "Server Management",
        "Cloud Deployment",
        "Docker Containerization",
        "CI/CD Pipelines",
        "Performance Monitoring"
      ],
      pricing: "Starting from $800/month",
      gradient: "from-orange-600 to-red-600",
      hoverGradient: "from-orange-700 to-red-700"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Performance Optimization",
      description: "Speed up your existing websites and applications with advanced optimization techniques.",
      features: [
        "Core Web Vitals",
        "Database Optimization",
        "Image Optimization",
        "Code Splitting",
        "CDN Implementation"
      ],
      pricing: "Starting from $500",
      gradient: "from-indigo-600 to-purple-600",
      hoverGradient: "from-indigo-700 to-purple-700"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "AI Integration & Chatbots",
      description: "Integrate AI solutions, chatbots, and machine learning features into your applications.",
      features: [
        "OpenAI Integration",
        "Custom Chatbots",
        "Text-to-Speech",
        "Natural Language Processing",
        "Automated Responses"
      ],
      pricing: "Starting from $1,500",
      gradient: "from-teal-600 to-green-600",
      hoverGradient: "from-teal-700 to-green-700"
    }
  ];

  return (
    <section id="services" className="py-24 px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6"
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              What I Offer
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent"
          >
            My Services
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            I provide comprehensive web development solutions that drive business growth. 
            From concept to deployment, I ensure every project exceeds expectations.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden group-hover:-translate-y-2">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-800 group-hover:to-blue-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Pricing */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                    <span className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.pricing}
                    </span>
                    <motion.button
                      className={`px-6 py-2 bg-gradient-to-r ${service.gradient} text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Get Quote
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div 
          className="mt-24 bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
            My Development Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "Understanding your needs, goals, and creating a detailed project roadmap.",
                icon: "🔍"
              },
              {
                step: "02", 
                title: "Design & Prototyping",
                description: "Creating wireframes, mockups, and interactive prototypes for approval.",
                icon: "🎨"
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Building your solution with clean code, testing, and quality assurance.",
                icon: "⚡"
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deploying your project and providing ongoing maintenance and support.",
                icon: "🚀"
              }
            ].map((process, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {process.icon}
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{process.step}</div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{process.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-slate-800">
            Ready to Start Your Project?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss your requirements and create something extraordinary together. 
            I'm committed to delivering exceptional results that exceed your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/80 backdrop-blur-sm text-slate-800 px-8 py-4 rounded-full font-bold text-lg border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;