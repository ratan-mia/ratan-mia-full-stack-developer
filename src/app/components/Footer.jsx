'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowUp,
  Award,
  Briefcase,
  Clock,
  Code2,
  FileText,
  Github,
  Globe,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Shield,
  Star,
  User,
  Users,
  Zap
} from 'lucide-react';
import { useRef, useState } from 'react';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, threshold: 0.1 });
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const currentYear = new Date().getFullYear();

  // Navigation Links
  const quickLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Services', href: '#services', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Globe },
    { name: 'Testimonials', href: '#testimonials', icon: Star },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  // Service Categories
  const serviceCategories = [
    { title: 'Frontend Development', services: ['React.js Applications', 'Next.js Websites', 'Vue.js Projects'] },
    { title: 'Backend Development', services: ['Laravel APIs', 'Node.js Backend', 'PHP Development'] },
    { title: 'Full Stack Solutions', services: ['E-commerce Platforms', 'CMS Development', 'Custom Web Apps'] }
  ];

  // Resources
  const resources = [
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'Free Tools', href: '/tools', icon: Zap }
  ];

  // Legal Links
  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' }
  ];

  // Social Links
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shorifull',
      icon: Linkedin,
      followers: '2.5K+'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shorifull',
      icon: Github,
      followers: '500+'
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/8801751010966',
      icon: MessageCircle,
      followers: 'Chat'
    }
  ];

  // Achievements with enhanced data
  const achievements = [
    { icon: Award, number: '150+', label: 'Projects Completed', sublabel: 'Across 25+ countries' },
    { icon: Users, number: '120+', label: 'Happy Clients', sublabel: '98% satisfaction rate' },
    { icon: Star, number: '5.0', label: 'Average Rating', sublabel: 'Based on client reviews' },
    { icon: Clock, number: '24/7', label: 'Support Available', sublabel: 'Dedicated assistance' }
  ];

  // Business Information
  const businessInfo = {
    companyName: 'Ratan Mia Development',
    registrationNumber: 'BD-DEV-2016',
    taxId: 'TIN-123456789',
    businessHours: 'Mon-Fri: 9:00 AM - 6:00 PM (GMT+6)',
    emergencySupport: '24/7 Available',
    certifications: ['Google Partner', 'AWS Certified', 'Certified PHP Developer']
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ 
        top: elementPosition, 
        behavior: 'smooth' 
      });
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubscribing(false);
    setEmail('');
    
    // Show success message (you can implement toast notification)
    alert('Successfully subscribed to newsletter!');
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ratan Mia Development",
            "url": "https://ratanmia.dev",
            "logo": "https://ratanmia.dev/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+8801751010966",
              "contactType": "customer service",
              "email": "shorifull@gmail.com",
              "availableLanguage": ["English", "Bengali"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dhaka",
              "addressCountry": "Bangladesh"
            },
            "sameAs": [
              "https://linkedin.com/in/shorifull",
              "https://github.com/shorifull"
            ]
          })
        }}
      />

      <footer 
        ref={footerRef}
        className="py-24 bg-black relative overflow-hidden"
        role="contentinfo"
        aria-label="Website footer"
      >
        {/* Background Decoration */}
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-400 opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400 opacity-5 rounded-full blur-3xl" />
        
        {/* Enhanced glow for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 font-semibold tracking-wider uppercase mb-2 inline-block">
              Let's Connect
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Ready to Start Your <span className="text-cyan-400">Next Project</span>?
            </h2>
            
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6" />
            
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              Let's transform your ideas into powerful digital solutions that drive growth and success.
            </p>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-400/10"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center p-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border border-gray-700 shadow-xl">
                  <achievement.icon className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:scale-110 group-hover:text-white transition-all duration-300" />
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{achievement.number}</div>
                  <div className="text-sm text-gray-300 font-medium mb-1">{achievement.label}</div>
                  <div className="text-xs text-gray-500">{achievement.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Footer Content */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Brand & Contact Section */}
            <div className="lg:col-span-4">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300 h-full">
                {/* Brand */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center text-gray-900 shadow-lg shadow-cyan-400/25">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Ratan Mia</h3>
                    <p className="text-cyan-400 font-semibold text-sm tracking-wider">FULL STACK DEVELOPER</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-base">
                  Crafting exceptional digital experiences with 8+ years of expertise in modern web technologies. 
                  Specialized in React.js, Next.js, Laravel, and WordPress development.
                </p>
                
                {/* Contact Information */}
                <div className="space-y-4 mb-6">
                  <a
                    href="mailto:shorifull@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">shorifull@gmail.com</span>
                  </a>
                  <a
                    href="tel:+8801751010966"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm">+880 175 101 0966</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">{businessInfo.businessHours}</span>
                  </div>
                </div>

                {/* Business Certifications */}
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {businessInfo.certifications.map((cert, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-cyan-900/30 text-cyan-300 rounded text-xs border border-cyan-700/30"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300 h-full">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  Navigation
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={link.name}>
                      <button 
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-cyan-400 transition-all duration-300 text-left flex items-center gap-3 group w-full"
                      >
                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm">{link.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300 h-full">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-cyan-400" />
                  Services
                </h4>
                <div className="space-y-4">
                  {serviceCategories.map((category, index) => (
                    <div key={category.title}>
                      <h5 className="text-sm font-semibold text-cyan-400 mb-2">{category.title}</h5>
                      <ul className="space-y-1 ml-3">
                        {category.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="text-gray-300 flex items-center gap-2 text-xs">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300 h-full">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-cyan-400" />
                  Stay Connected
                </h4>
                
                {/* Newsletter Signup */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-gray-300 mb-3">Get Updates</h5>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubscribing}
                      className="w-full bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 inline-flex items-center justify-center gap-2"
                    >
                      {isSubscribing ? (
                        <>
                          <div className="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                          Subscribing...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Subscribe
                        </>
                      )}
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 mt-2">
                    Weekly insights on web development and tech trends.
                  </p>
                </div>

                {/* Social Links */}
                <div className="border-t border-gray-700 pt-4">
                  <h5 className="text-sm font-semibold text-gray-300 mb-3">Follow Me</h5>
                  <div className="grid grid-cols-1 gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 bg-gray-700/50 hover:bg-gray-700 border border-gray-600 hover:border-cyan-400 rounded-lg transition-all duration-300 group"
                      >
                        <div className="flex items-center gap-3">
                          <social.icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-sm text-gray-300 group-hover:text-white">{social.name}</span>
                        </div>
                        <span className="text-xs text-gray-500">{social.followers}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resources & Legal Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Resources */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                Resources
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {resources.map((resource, index) => (
                  <a
                    key={resource.name}
                    href={resource.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group"
                  >
                    <resource.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    {resource.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                Legal & Compliance
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {legalLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-500">
                  Business Registration: {businessInfo.registrationNumber}
                </p>
                <p className="text-xs text-gray-500">
                  Tax ID: {businessInfo.taxId}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div 
            className="border-t border-gray-700 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-gray-400 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2 flex-wrap">
                  <span className="text-sm">© {currentYear} {businessInfo.companyName}. Made with</span>
                  <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                  <span className="text-sm">in Bangladesh</span>
                </div>
                <p className="text-xs text-gray-500 mb-1">
                  Built with Next.js, Tailwind CSS & Framer Motion
                </p>
                <p className="text-xs text-gray-500">
                  Committed to excellence in web development and client satisfaction
                </p>
              </div>
              
              <div className="flex items-center gap-6 flex-wrap justify-center">
                <a 
                  href="/sitemap.xml" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Sitemap
                </a>
                <a 
                  href="/rss.xml" 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  RSS Feed
                </a>
                <button
                  onClick={scrollToTop}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 group hover:scale-105"
                  aria-label="Scroll to top"
                >
                  <span className="text-sm">Back to top</span>
                  <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Emergency Contact & Support */}
            <div className="mt-6 pt-6 border-t border-gray-700/50 text-center">
              <p className="text-xs text-gray-500">
                Emergency Support: Available 24/7 • Response Time: Within 2 hours
              </p>
              <p className="text-xs text-gray-500 mt-1">
                For urgent matters, call <a href="tel:+8801751010966" className="text-cyan-400 hover:underline">+880 175 101 0966</a>
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
