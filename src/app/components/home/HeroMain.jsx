'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, Code2, Database, Download, Github, Linkedin, Mail, ShoppingBag } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Custom hook for the typewriter effect
const useTypewriter = (words, keySpeed = 100, deleteSpeed = 50, delay = 2000) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                if (charIndex > 0) {
                    setText(currentWord.substring(0, charIndex - 1));
                    setCharIndex(prev => prev - 1);
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            } else {
                if (charIndex < currentWord.length) {
                    setText(currentWord.substring(0, charIndex + 1));
                    setCharIndex(prev => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            }
        };

        const typingSpeed = isDeleting ? deleteSpeed : keySpeed;
        const timeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, words, keySpeed, deleteSpeed, delay]);

    return text;
};

const HeroMain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const roles = [
    "Full Stack",
    "IT Manager", 
    "Shopify Expert",
    "WordPress Developer",
    "React & Next.js",
  ];
  const typedRole = useTypewriter(roles, 120, 60, 1800);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/shorifull', 
      label: 'GitHub',
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/shorifull', 
      label: 'LinkedIn',
    },
    { 
      icon: Mail, 
      href: 'mailto:ratanmiadev@gmail.com', 
      label: 'Email',
    }
  ];

  const visualElements = [
    { icon: Code2, position: 'top-20 right-32', delay: 0.5 },
    { icon: Database, position: 'top-40 right-16', delay: 1.2 },
    { icon: ShoppingBag, position: 'top-60 right-28', delay: 0.8 },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-accent-lime" id="home">
      {/* Floating Visual Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {visualElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.position} text-black opacity-10`}
            variants={floatingVariants}
            animate="animate"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: element.delay, duration: 0.8 }}
          >
            <element.icon size={48} strokeWidth={1} />
          </motion.div>
        ))}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/5 to-transparent"></div>
      </div>

      {/* Hero Image */}
      <div className="absolute right-0 top-0 w-1/2 h-screen z-10 lg:block hidden">
        <motion.div
          className="h-full w-full relative overflow-hidden"
          initial={{ opacity: 0, scale: 1.1, x: 100 }}
          animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
          transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
        >
          <img 
            src="/images/hero-image.png" 
            alt="Ratan Mia - Full Stack Developer"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-accent-lime/20 to-accent-lime/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-accent-lime/40 via-transparent to-transparent"></div>
        </motion.div>
      </div>

      {/* Main Hero Content */}
      <section 
        ref={ref}
        className="relative h-screen w-full flex items-center z-20"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 min-h-screen w-full">
            {/* Left Content - Following 12 column grid system */}
            <motion.div 
              className="col-span-1 lg:col-span-7 flex flex-col justify-center py-16 lg:py-32"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-8"
              >
                {/* Brand Line - Visual Element */}
                <motion.div 
                  className="inline-flex items-center gap-6"
                  variants={itemVariants}
                >
                  <div className="w-16 h-1 bg-black"></div>
                  <div className="flex flex-col">
                    <p className="text-xl lg:text-2xl font-bold text-black uppercase tracking-wider">
                      Ratan Mia
                    </p>
                    <p className="text-sm text-black/70 font-medium tracking-wide">
                      IBM Certified Developer
                    </p>
                  </div>
                </motion.div>
                
                {/* Main Heading - Typography as Graphic Element */}
                <motion.div 
                  className="space-y-4"
                  variants={itemVariants}
                >
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-black leading-tight tracking-tight">
                    {typedRole}
                    <motion.span 
                      className="text-black ml-2"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  </h1>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
                    Developer
                  </h2>
                </motion.div>
                
                {/* Minimal Description */}
                <motion.p 
                  className="text-lg lg:text-xl text-black/80 leading-relaxed max-w-2xl"
                  variants={itemVariants}
                >
                  IBM-certified developer specializing in full-stack solutions, e-commerce platforms, and modern web technologies.
                </motion.p>

                {/* Visual Stats Grid */}
                <motion.div 
                  className="grid grid-cols-3 gap-8 py-8"
                  variants={itemVariants}
                >
                  <div className="text-center lg:text-left">
                    <div className="text-4xl lg:text-5xl font-extrabold text-black mb-2">8+</div>
                    <div className="text-sm font-normal text-black/70 uppercase tracking-wider">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-4xl lg:text-5xl font-extrabold text-black mb-2">150+</div>
                    <div className="text-sm font-normal text-black/70 uppercase tracking-wider">Projects Built</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-4xl lg:text-5xl font-extrabold text-black mb-2">5+</div>
                    <div className="text-sm font-normal text-black/70 uppercase tracking-wider">Tech Stacks</div>
                  </div>
                </motion.div>

                {/* CTA Buttons - Following Design Guidelines */}
                <motion.div 
                  variants={itemVariants} 
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
                >
                  <motion.a
                    href="#contact"
                    className="bg-black text-accent-lime font-semibold px-8 py-4 rounded-xl
                             hover:bg-black/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
                             transition-all duration-300 inline-flex items-center gap-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Let's Build Something</span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.a>
                  
                  <motion.a
                    href="/resume.pdf"
                    download
                    className="border-2 border-black text-black font-semibold px-8 py-4 rounded-xl
                             hover:bg-black hover:text-accent-lime hover:-translate-y-1
                             transition-all duration-300 inline-flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </motion.a>
                </motion.div>

                {/* Minimal Social Links */}
                <motion.div 
                  className="flex items-center gap-4 pt-8"
                  variants={itemVariants}
                >
                  <span className="text-black/70 font-normal text-sm uppercase tracking-wider">Follow</span>
                  <div className="w-8 h-px bg-black/30"></div>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-black/30 hover:border-black rounded-lg 
                               flex items-center justify-center text-black/70 hover:text-black 
                               transition-all duration-300 hover:-translate-y-1"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.5 + index * 0.1 }}
                      title={social.label}
                    >
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Column - Space for image */}
            <div className="col-span-1 lg:col-span-5 relative">
              {/* Mobile hero image */}
              <div className="lg:hidden relative h-64 w-full mt-8 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=300&fit=crop&crop=faces" 
                  alt="Ratan Mia - Full Stack Developer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-lime/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-14 border-2 border-black/40 group-hover:border-black rounded-full flex justify-center p-2 transition-colors duration-300">
              <motion.div
                className="w-1.5 h-3 bg-black/60 group-hover:bg-black rounded-full transition-colors duration-300"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="text-black/70 group-hover:text-black transition-colors duration-300 text-center">
              <div className="text-sm font-normal uppercase tracking-wider">Scroll</div>
              <div className="text-xs opacity-70">Explore</div>
            </div>
          </div>
        </motion.a>
      </section>
    </div>
  );
};

export default HeroMain;