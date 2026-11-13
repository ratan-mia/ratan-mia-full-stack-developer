'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// --- DATA CONSTANTS ---
const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Dewan Saidur Rahman",
    position: "Managing Director",
    company: "Kawasaki Bangladesh",
    quote: "The mobile app development and speed optimization work exceeded all our expectations, leading to a significant impact on our sales and customer engagement.",
    avatar: "D",
    projectTitle: "Gamify (PieQR)",
    projectCategory: "SaaS Product",
    projectImage: "/images/projects/pieqr/home-screen.png",
    projectTechnologies: ["React Native", "Node.js", "PostgreSQL", "QR Engine"]
  },
  {
    id: 2,
    name: "Mohammad Nayab",
    position: "Managing Director",
    company: "Chery Bangladesh",
    quote: "The React Native mobile app and CRM integration delivered were game-changers for our operations. The cross-platform solution works flawlessly on both iOS and Android.",
    avatar: "M",
    projectTitle: "Chery Bangladesh Mobile App",
    projectCategory: "Mobile App",
    projectImage: "/images/projects/cherymobileapp/chery-mobile-app.png",
    projectTechnologies: ["React Native", "Expo", "Supabase", "TypeScript"]
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    position: "Managing Director",
    company: "ELF Bangladesh",
    quote: "The e-commerce mobile app built with React Native transformed how we connect with customers. The intuitive design and smooth performance have significantly boosted our online sales.",
    avatar: "A",
    projectTitle: "ELF Bangladesh Mobile App",
    projectCategory: "Mobile App",
    projectImage: "/images/projects/elf-mobile-store/Elf-home.png",
    projectTechnologies: ["React Native", "TypeScript", "Supabase", "Redux"]
  },
  {
    id: 4,
    name: "Sarah Thompson",
    position: "Co-Founder & CEO",
    company: "TurfLet",
    quote: "The booking platform's mobile app is exceptional. React Native expertise delivered a seamless experience for our users with real-time availability and payment integration.",
    avatar: "S",
    projectTitle: "TurfLet",
    projectCategory: "SaaS Product",
    projectImage: "/images/projects/turflet/TurfLet.png",
    projectTechnologies: ["React Native", "Next.js", "Prisma", "PostgreSQL"]
  },
  {
    id: 5,
    name: "David Chen",
    position: "Freelance Manager",
    company: "Matchlyzer",
    quote: "The Chrome extension revolutionized how I find jobs on Upwork. The AI-powered matching and proposal suggestions have increased my success rate by 300%.",
    avatar: "D",
    projectTitle: "Matchlyzer",
    projectCategory: "Chrome Extension",
    projectImage: "/images/projects/matchlyzer.png",
    projectTechnologies: ["JavaScript", "Chrome API", "Machine Learning", "OpenAI"]
  },
  {
    id: 6,
    name: "Kamal Ahmed",
    position: "Marketing Director",
    company: "ELF International",
    quote: "The corporate website perfectly represents our global brand. The performance optimization and multilingual support have significantly improved our reach.",
    avatar: "K",
    projectTitle: "Elf BD",
    projectCategory: "Mobile App",
    projectImage: "/images/projects/elf-international-mockup.png",
    projectTechnologies: ["React Native", "Redux", "Firebase", "Analytics"]
  },
  {
    id: 7,
    name: "Rahman Hossain",
    position: "Sales Director",
    company: "Chery Bangladesh",
    quote: "The automotive e-commerce platform with 360° car viewing has transformed our customer experience. Sales inquiries have doubled since launch.",
    avatar: "R",
    projectTitle: "Chery Bangladesh",
    projectCategory: "E-commerce",
    projectImage: "/images/projects/cherybd-mockup.png",
    projectTechnologies: ["React.js", "Laravel", "360° View", "MySQL"]
  },
  {
    id: 8,
    name: "Michael Torres",
    position: "Operations Manager",
    company: "MotoJP",
    quote: "The headless Shopify solution delivered exceptional performance. Our page load times improved by 60% and conversion rates increased significantly.",
    avatar: "M",
    projectTitle: "Chery Bangladesh",
    projectCategory: "E-commerce",
    projectImage: "/images/projects/cherybd-mockup.png",
    projectTechnologies: ["Next.js", "Shopify API", "GraphQL", "Tailwind"]
  }
];

const YOUTUBE_VIDEO_ID = 'eIGiaRxOqGk';

// Generate particles once to avoid hydration mismatch
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: [68, 0, 1, 54, 46, 39, 17, 95, 63, 74, 25, 20, 61, 15, 51, 20, 86, 76, 62, 64][i],
  top: [50, 41, 60, 41, 0, 53, 80, 46, 72, 17, 46, 5, 77, 69, 44, 23, 35, 50, 82, 48][i],
  duration: 3 + (i % 4),
  delay: (i % 5) * 0.4,
}));

const LARGE_DOTS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  left: [64, 18, 27, 75, 74, 21, 34, 63][i],
  top: [73, 81, 77, 25, 37, 71, 65, 43][i],
  width: [7.6, 8.5, 6.8, 11.9, 9.3, 5.0, 5.5, 7.3][i],
  height: [5.0, 5.6, 6.7, 4.5, 4.4, 9.0, 6.6, 6.0][i],
  duration: 4 + (i % 3),
  delay: (i % 4) * 0.75,
}));

// --- MAIN TESTIMONIALS COMPONENT ---
const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(handleNext, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section ref={ref} className="py-12 lg:py-20 bg-black relative overflow-hidden" id="testimonials">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Info & Video */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Section Label */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-lime" />
                <span className="text-accent-lime font-semibold text-sm uppercase tracking-wider">What're They Says</span>
              </div>

              {/* Description */}
              <p className="text-base text-gray-400 leading-relaxed">
                I pride myself on delivering innovative, impactful, and results-driven projects.
              </p>

              {/* Decorative Dot */}
              <div className="w-3 h-3 rounded-full bg-accent-lime" />

              {/* Video Introduction */}
              <motion.div
                className="relative aspect-[4/5] max-w-sm rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                onClick={() => setIsModalOpen(true)}
              >
                <img 
                  src="/images/about-image.jpg"
                  alt="Ratan Mia - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/70 transition-all" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-accent-lime flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-7 h-7 text-black fill-black ml-1" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Stats Counter */}
              <div>
                <div className="text-5xl font-bold text-accent-lime mb-1">&gt;208</div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Contract Agents</div>
              </div>
            </motion.div>

            {/* Right Column - Testimonial & Title */}
            <div className="space-y-8">
              {/* Main Title */}
              <motion.h2 
                className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                TESTIMONIALS
              </motion.h2>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl font-medium text-gray-300 leading-relaxed">
                    {TESTIMONIALS_DATA[currentIndex].quote}
                  </blockquote>

                  {/* Client Info */}
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">
                      {TESTIMONIALS_DATA[currentIndex].name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {TESTIMONIALS_DATA[currentIndex].position}, {TESTIMONIALS_DATA[currentIndex].company}
                    </p>
                  </div>

                  {/* Counter */}
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-accent-lime">
                      0{currentIndex + 1}
                    </span>
                    <div className="flex-1 h-px bg-gray-800" />
                    <span className="text-lg font-semibold text-gray-600">
                      0{TESTIMONIALS_DATA.length}
                    </span>
                  </div>

                  {/* Project Thumbnail */}
                  <motion.div
                    className="relative w-full max-w-xs h-48 rounded-2xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <img 
                      src={TESTIMONIALS_DATA[currentIndex].projectImage}
                      alt={TESTIMONIALS_DATA[currentIndex].projectTitle}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Lime Accent Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent-lime" />
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
                title="Video Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Testimonials;