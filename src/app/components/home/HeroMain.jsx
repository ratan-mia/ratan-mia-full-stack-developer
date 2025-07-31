'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
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
    "Senior Full Stack Developer",
    "IT Manager & Lead Developer", 
    "React & Next.js Expert",
    "Laravel & PHP Specialist",
  ];
  const typedRole = useTypewriter(roles, 80, 40, 1500);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
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

  return (
    <div className="relative w-full overflow-hidden" id="home">
      {/* Background Image that bleeds out */}
      <div className="absolute right-0 top-0 w-1/2 h-screen z-10">
        <motion.div
          className="h-full w-full "
          initial={{ opacity: 0, scale: 1.1 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=800&h=1200&fit=crop&crop=faces" 
              alt="Ratan Mia - Full Stack Developer"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-accent-lime/20"></div>
          </div>
        </motion.div>
      </div>

      {/* Main Hero Section */}
      <section 
        ref={ref}
        className="bg-accent-lime relative h-screen w-full flex items-center"
      >
        <motion.div 
          className="grid lg:grid-cols-2 min-h-screen w-full"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Left Content */}
          <motion.div 
            className="text-black flex flex-col justify-center px-12 py-16 lg:px-16 xl:px-20 lg:py-20 relative z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Greeting */}
              <motion.div 
                className="inline-flex items-center gap-3 mb-8"
                variants={itemVariants}
              >
                <div className="w-12 h-1 bg-black"></div>
                <p className="text-xl lg:text-2xl font-bold text-black">
                  Hi, I'm Ratan Mia
                </p>
              </motion.div>
              
              {/* Main Heading with Typewriter */}
              <motion.h1 
                className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black leading-[1.1] tracking-tight mb-8 min-h-[200px] lg:min-h-[250px]"
                variants={itemVariants}
              >
                {typedRole}
                <motion.span 
                  className="text-black"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </motion.h1>
              
              {/* Description */}
              <motion.p 
                className="text-lg lg:text-xl text-black/80 leading-relaxed mb-12 max-w-2xl"
                variants={itemVariants}
              >
                I craft immersive and engaging user experiences that drive results, blending creative design with clean, high-performance code.
              </motion.p>

              {/* Stats Row */}
              <motion.div 
                className="grid grid-cols-3 gap-8 mb-12"
                variants={itemVariants}
              >
                <div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-black mb-1">8+</div>
                  <div className="text-sm font-medium text-black/70 uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-black mb-1">150+</div>
                  <div className="text-sm font-medium text-black/70 uppercase tracking-wider">Projects Done</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-black mb-1">98%</div>
                  <div className="text-sm font-medium text-black/70 uppercase tracking-wider">Client Satisfaction</div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                variants={itemVariants} 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12"
              >
                <motion.a
                  href="#contact"
                  className="group bg-black text-accent-lime font-bold px-8 py-4 hover:bg-black/90 transition-all duration-300 inline-flex items-center gap-3 text-lg uppercase tracking-wider"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Work With Me</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.a>
                
                <motion.a
                  href="/resume.pdf"
                  download
                  className="group border-2 border-black text-black font-bold px-8 py-4 hover:bg-black hover:text-accent-lime transition-all duration-300 inline-flex items-center gap-3 text-lg uppercase tracking-wider"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <span className="text-black/70 font-medium text-sm uppercase tracking-wider mr-2">Follow:</span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black/10 hover:bg-black hover:text-accent-lime rounded-lg flex items-center justify-center text-black transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column: Space for bleeding image */}
          <div className="relative">
            {/* Empty space - image is positioned absolutely outside */}
          </div>
        </motion.div>

        {/* Animated Scroll Down Indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-14 border-2 border-black/30 rounded-full flex justify-center p-2 group-hover:border-black transition-colors">
              <motion.div
                className="w-1.5 h-3 bg-black/60 group-hover:bg-black rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="text-black/70 group-hover:text-black transition-colors text-center">
              <div className="text-sm font-medium uppercase tracking-wider">Scroll</div>
              <div className="text-xs">to explore</div>
            </div>
          </div>
        </motion.a>
      </section>
    </div>
  );
};

export default HeroMain;