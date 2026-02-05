'use client';

import { motion, useInView } from 'framer-motion';
import {
    ArrowRight,
    Award, CheckCircle,
    Code2, Database, Download, Github, Linkedin, Mail, ShoppingBag,
    Sparkles, Star
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// --- Typewriter ---
const useTypewriter = (words, keySpeed = 110, deleteSpeed = 55, delay = 2000) => {
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
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (charIndex < currentWord.length) {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
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

const getMaxRole = (roles) => roles.reduce((a, b) => (a.length > b.length ? a : b), '');

const HeroMain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const roles = [
    'Full Stack',
    'React Native Expert',
    'IT Manager',
    'Shopify Expert',
    'WordPress Developer',
    'React & Next.js',
    'Mobile App Developer',
    'E-Commerce Specialist',
  ];
  const typedRole = useTypewriter(roles, 110, 55, 2000);
  const widestRole = getMaxRole(roles);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shorifull', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/shorifull', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shorifull@gmail.com', label: 'Email' },
  ];

  const visualElements = [
    { icon: Code2, position: 'top-20 right-20', delay: 0.5 },
    { icon: Database, position: 'bottom-32 right-24', delay: 1.0 },
    { icon: ShoppingBag, position: 'bottom-16 right-40', delay: 1.2 },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-accent-lime" id="home">
      {/* Decorative floating icons, desktop only */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {visualElements.map((el, i) => (
          <motion.div
            key={i}
            className={`hidden lg:block absolute ${el.position} text-black/10`}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.08, 0.12, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: el.delay,
            }}
          >
            <el.icon size={56} strokeWidth={1} />
          </motion.div>
        ))}
      </div>

      <section
        ref={ref}
        className="relative h-screen flex items-center w-full z-20 focus:outline-none"
        tabIndex={-1}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 h-full min-h-screen">
            {/* Left: Hero Main Content */}
            <motion.div
              className="col-span-1 lg:col-span-7 flex flex-col justify-center h-full py-24"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="space-y-10"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
                  },
                }}
              >
                {/* Brand/Subtitle */}
                <motion.div
                  className="inline-flex items-center gap-6"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                  }}
                >
                  <div className="w-12 h-1.5 bg-black" />
                  <div>
                    <span className="text-2xl font-black uppercase text-black tracking-wider">
                      Ratan Mia
                    </span>
                    <p className="text-sm text-black/70 font-semibold tracking-wide">
                      IBM Certified Developer
                    </p>
                  </div>
                </motion.div>
                {/* Main Hero Heading, fixed-size for stable typewriter */}
                <motion.div className="space-y-2"
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                  }}
                >
                  <div className="w-full">
                    <h1
                      className="font-extrabold tracking-tight leading-tight text-black"
                      style={{
                        fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
                        minHeight: '1.15em',
                        whiteSpace: 'nowrap',
                        display: 'inline-block',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      <span
                        aria-live="polite"
                        aria-atomic="true"
                        className="inline-block align-bottom"
                        style={{ minWidth: `${Math.max(widestRole.length, 14)}ch` }}
                      >
                        {typedRole}
                      </span>
                      <motion.span
                        className="ml-1"
                        aria-hidden
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        style={{ display: 'inline-block', width: '1ch' }}
                      >
                        |
                      </motion.span>
                    </h1>
                  </div>
                  <h2 className="font-extrabold text-black text-4xl md:text-5xl leading-tight">
                    Developer
                  </h2>
                </motion.div>
                {/* Description */}
                <motion.p
                  className="text-lg lg:text-xl text-black/80 leading-relaxed max-w-2xl"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                >
                  IBM-certified developer specializing in React Native mobile apps, full-stack web solutions, e-commerce platforms (Shopify/WordPress), and modern tech stacks including Next.js, TypeScript, and Supabase.
                </motion.p>
                {/* Stats */}
                <motion.div
                  className="grid grid-cols-3 gap-6 py-6"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                  }}
                >
                  <div>
                    <div className="text-4xl lg:text-5xl font-extrabold text-black mb-1">10+</div>
                    <div className="text-xs tracking-wide font-medium text-black/70 uppercase">
                      Years Exp
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-extrabold text-black mb-1">150+</div>
                    <div className="text-xs tracking-wide font-medium text-black/70 uppercase">
                      Projects
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl lg:text-5xl font-extrabold text-black mb-1">15+</div>
                    <div className="text-xs tracking-wide font-medium text-black/70 uppercase">
                      Tech Stacks
                    </div>
                  </div>
                </motion.div>
                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                  }}
                >
                  <motion.a
                    href="#contact"
                    className="bg-black text-accent-lime font-semibold px-8 py-4 rounded-xl
                      hover:bg-black/95 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30
                      transition-all duration-300 inline-flex items-center gap-2 text-lg"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Let&apos;s Build Something</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="/resume.pdf"
                    download
                    className="border-2 border-black text-black font-semibold px-8 py-4 rounded-xl
                      hover:bg-black hover:text-accent-lime hover:-translate-y-1
                      transition-all duration-300 inline-flex items-center gap-2 text-lg"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </motion.a>
                </motion.div>
                {/* Social Links */}
                <motion.div
                  className="flex items-center gap-4 pt-8"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                  }}
                >
                  <span className="text-black/60 font-normal text-sm uppercase tracking-wider">Follow</span>
                  <div className="w-8 h-px bg-black/30"></div>
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-black/20 hover:border-black/60 rounded-lg 
                        flex items-center justify-center text-black/70 hover:text-black 
                        transition-all duration-300 hover:-translate-y-1"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.5 + idx * 0.08 }}
                      title={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right: DRAMATICALLY ENHANCED IMAGE DESIGN - IMPROVED HEIGHT */}
            <div className="col-span-1 lg:col-span-5 flex items-center justify-end h-full relative">
              
              {/* Desktop Enhanced Image - Better proportioned height */}
              <div className="hidden lg:block relative w-full h-4/5 z-0">
                
                {/* Background Enhancement Layer */}
                <motion.div
                  className="absolute -right-20 top-1/4 w-80 h-80 bg-black/5 rounded-full blur-3xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 2, delay: 0.8 }}
                />
                
                <motion.div
                  className="absolute -right-32 bottom-1/3 w-60 h-60 bg-black/3 rounded-full blur-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 2.5, delay: 1.2 }}
                />

                <motion.div
                  className="relative w-full h-full overflow-hidden rounded-2xl shadow-xl shadow-black/20"
                  initial={{ opacity: 0, scale: 1.1, x: 120 }}
                  animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                  transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                >
                  <img
                    src="/images/hero-image.png"
                    alt="Ratan Mia - Full Stack Developer"
                    className="w-full h-full object-cover object-center rounded-2xl"
                    loading="lazy"
                  />
                  
                  {/* Enhanced gradient overlays for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-l from-white/0 via-accent-lime/8 to-accent-lime/40" />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-lime/25 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/15" />
                  
                  {/* Professional Status Indicator */}
                  <motion.div
                    className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg shadow-black/20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div>
                        <div className="text-sm font-bold text-black">Available</div>
                        <div className="text-xs text-black/60">For Projects</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* IBM Certification Badge */}
                  <motion.div
                    className="absolute top-8 right-8 bg-black/80 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.8, type: "spring", bounce: 0.3 }}
                  >
                    <div className="flex items-center gap-2">
                      <Award size={18} className="text-accent-lime" />
                      <div>
                        <div className="text-sm font-bold text-white">IBM</div>
                        <div className="text-xs text-white/70">Certified</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Tech Stack Icons */}
                  <motion.div
                    className="absolute left-12 top-1/3 text-white/60"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { 
                      opacity: [0.6, 1, 0.6], 
                      x: 0,
                      y: [-5, 5, -5]
                    } : {}}
                    transition={{ 
                      duration: 4, 
                      delay: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Code2 size={32} />
                  </motion.div>

                  <motion.div
                    className="absolute right-16 bottom-1/3 text-white/60"
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { 
                      opacity: [0.6, 1, 0.6], 
                      x: 0,
                      y: [5, -5, 5]
                    } : {}}
                    transition={{ 
                      duration: 4, 
                      delay: 2.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Database size={28} />
                  </motion.div>

                  <motion.div
                    className="absolute left-16 bottom-1/4 text-white/60"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { 
                      opacity: [0.6, 1, 0.6], 
                      y: 0,
                      rotate: [0, 360]
                    } : {}}
                    transition={{ 
                      duration: 8, 
                      delay: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles size={24} />
                  </motion.div>

                  {/* Experience Counter */}
                  <motion.div
                    className="absolute bottom-8 left-8 bg-accent-lime/90 backdrop-blur-sm rounded-xl px-6 py-4 shadow-xl shadow-black/20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 2.2 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-black text-black">10+</div>
                      <div className="text-sm font-medium text-black/70">Years Experience</div>
                    </div>
                  </motion.div>

                  {/* Signature Monogram */}
                  <motion.div
                    className="absolute bottom-8 right-8 w-16 h-16 bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-accent-lime/60 shadow-lg shadow-black/30"
                    initial={{ opacity: 0, scale: 0, rotate: -90 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 1, delay: 2.5, type: "spring", bounce: 0.4 }}
                  >
                    <div className="text-accent-lime text-xl font-black">RM</div>
                  </motion.div>

                  {/* Success Projects Indicator */}
                  <motion.div
                    className="absolute left-1/2 bottom-12 -translate-x-1/2 bg-white/85 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 2.8 }}
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="font-semibold text-black">150+ Projects Delivered</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Enhanced Mobile image with better proportions */}
              <div className="lg:hidden w-full h-80 mt-6 overflow-hidden relative rounded-2xl shadow-lg shadow-black/20">
                <img
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=300&fit=crop&crop=faces"
                  alt="Ratan Mia - Full Stack Developer"
                  className="w-full h-full object-cover object-top rounded-2xl"
                  loading="lazy"
                />
                
                {/* Enhanced mobile overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-lime/70 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                
                {/* Mobile Professional Badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-black/70 backdrop-blur-md rounded-lg px-3 py-2"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <Star size={16} className="text-accent-lime" />
                    <span className="text-white text-xs font-medium">IBM Certified</span>
                  </div>
                </motion.div>

                {/* Mobile Stats */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-lg p-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="flex justify-between text-white text-center">
                    <div>
                      <div className="text-lg font-bold text-accent-lime">10+</div>
                      <div className="text-xs">Years</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-accent-lime">150+</div>
                      <div className="text-xs">Projects</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-accent-lime">Full Stack</div>
                      <div className="text-xs">Developer</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 group"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8 }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="w-7 h-12 border-2 border-black/40 group-hover:border-black rounded-full flex justify-center p-2 transition-colors duration-300">
              <motion.div
                className="w-1.5 h-4 bg-black/60 group-hover:bg-black rounded-full transition-colors duration-300"
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="text-black/70 group-hover:text-black transition-colors duration-300 text-center">
              <div className="text-xs font-normal uppercase tracking-wider">Scroll</div>
              <div className="text-[11px] opacity-70">Explore</div>
            </div>
          </div>
        </motion.a>
      </section>
    </div>
  );
};

export default HeroMain;