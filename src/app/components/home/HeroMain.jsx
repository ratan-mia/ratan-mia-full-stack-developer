'use client';

import { motion, useInView } from 'framer-motion';
import {
  ArrowRight, Code2, Database, Download, Github, Linkedin, Mail, ShoppingBag,
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
    'IT Manager',
    'Shopify Expert',
    'WordPress Developer',
    'React & Next.js',
  ];
  const typedRole = useTypewriter(roles, 110, 55, 2000);
  const widestRole = getMaxRole(roles);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shorifull', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/shorifull', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:ratanmiadev@gmail.com', label: 'Email' },
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
                  IBM-certified developer specializing in full-stack solutions, e-commerce platforms, and modern web tech.
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
                    <div className="text-4xl lg:text-5xl font-extrabold text-black mb-1">8+</div>
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
                    <div className="text-4xl lg:text-5xl font-extrabold text-black mb-1">5+</div>
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

            {/* Right: Hero Image FULLY to corner - NO border radius or margins */}
            <div className="col-span-1 lg:col-span-5 flex items-center justify-end h-full relative">
              {/* Desktop full-width image/no rounding */}
              <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-full h-full z-0">
                <motion.div
                  className="absolute inset-0 w-full h-full overflow-hidden"
                  initial={{ opacity: 0, scale: 1.1, x: 120 }}
                  animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                  transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                >
                  <img
                    src="/images/hero-image.png"
                    alt="Ratan Mia - Full Stack Developer"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                    style={{
                      minHeight: '100%',
                      maxHeight: '100%',
                      minWidth: '100%',
                      borderRadius: 0,
                    }}
                  />
                  {/* Optional overlays */}
                  <div className="absolute inset-0 bg-gradient-to-l from-white/0 via-accent-lime/10 to-accent-lime/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-lime/20 via-transparent to-transparent" />
                </motion.div>
              </div>
              {/* Mobile image, full width/sharp edge */}
              <div className="lg:hidden w-full h-64 mt-6 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=400&h=300&fit=crop&crop=faces"
                  alt="Ratan Mia - Full Stack Developer"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  style={{ borderRadius: 0 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-lime/70 to-transparent"></div>
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
