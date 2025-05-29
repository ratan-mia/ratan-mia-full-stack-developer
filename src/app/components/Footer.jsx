
'use client';
import { motion } from 'framer-motion';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Full Stack Development',
    'React.js Applications',
    'Next.js Websites', 
    'WordPress Development',
    'E-commerce Solutions',
    'Performance Optimization'
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shorifull',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shorifull',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'Website',
      href: 'https://shorifullislamratan.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
        </svg>
      )
    },
    {
      name: 'Email',
      href: 'mailto:shorifull@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {/* Brand Section */}
            <motion.div variants={fadeInUp} className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  Ratan Mia
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Full Stack Developer with 10+ years of experience creating 
                  exceptional web applications and digital solutions.
                </p>
              </div>
              
              {/* Status Indicator */}
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-300 font-medium text-sm">Available for Projects</span>
              </div>

              {/* Quick Contact */}
              <div className="space-y-2 text-sm">
                <a href="mailto:shorifull@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  shorifull@gmail.com
                </a>
                <a href="tel:+8801751010966" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +880 175 101 0966
                </a>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Dhaka, Bangladesh
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <motion.span
                        className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.5 }}
                      />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-slate-300 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-bold mb-6 text-white">Stay Connected</h4>
              
              {/* Newsletter */}
              <div className="mb-6">
                <p className="text-slate-300 text-sm mb-4">
                  Get updates on new projects and tech insights
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <motion.button
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-slate-300 text-sm mb-4">Follow me on</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700/50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="border-t border-slate-700 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm text-center md:text-left">
              <p>© {currentYear} Ratan Mia. All rights reserved.</p>
              <p className="mt-1">
                Crafted with ❤️ using Next.js, Tailwind CSS & Framer Motion
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                <span>Back to top</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;