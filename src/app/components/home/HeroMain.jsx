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
    "IT Manager",
    "Shopify Expert",
    "Wordpress Expert",
  ];
  const typedRole = useTypewriter(roles);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
    <section 
      ref={ref}
      className="h-screen bg-black flex items-center justify-center relative overflow-hidden"
      id="home"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Main Content */}
              <motion.p 
                className="text-xl md:text-2xl text-accent-lime font-bold mb-4"
                variants={itemVariants}
              >
                Hi, I'm Ratan Mia
              </motion.p>
              
              <motion.h1 
                className="text-6xl md:text-8xl font-extrabold text-white leading-tight tracking-tighter min-h-[280px] md:min-h-[350px]"
                variants={itemVariants}
              >
                {typedRole}
                <span className="text-accent-lime">|</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mt-8 max-w-xl"
                variants={itemVariants}
              >
                I craft immersive and engaging user experiences that drive results, blending creative design with clean, high-performance code.
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                variants={itemVariants} 
                className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <motion.a
                  href="#contact"
                  className="group bg-accent-lime text-black font-bold px-8 py-4 rounded-xl hover:bg-lime-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-lime-400/40 transition-all duration-300 inline-flex items-center gap-3 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>WORK WITH ME</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
                 <motion.a
                    href="/resume.pdf"
                    download
                    className="group border-2 border-white/60 text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download CV</span>
                  </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="mt-16 flex items-center gap-6"
                variants={itemVariants}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-gray-300 hover:text-accent-lime hover:border-accent-lime transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    title={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-md mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=800&h=1000&fit=crop&crop=faces" 
                alt="Ratan Mia Headshot"
                className="w-full h-auto rounded-3xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
       {/* Animated Scroll Down Indicator */}
       <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <div className="w-8 h-14 border-2 border-gray-500 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1.5 h-3 bg-accent-lime rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.a>
    </section>
  );
};

export default HeroMain;
