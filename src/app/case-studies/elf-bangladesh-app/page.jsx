'use client';

import { motion, useInView } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, CheckCircle, Code, Database, Globe, 
  MapPin, Palette, Server, ShoppingCart, Smartphone, Star, 
  Trophy, Wallet, Zap 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function ELFBangladeshCaseStudy() {
  const featuresRef = useRef(null);
  const techRef = useRef(null);
  const screenshotsRef = useRef(null);
  
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const techInView = useInView(techRef, { once: true, margin: "-100px" });
  const screenshotsInView = useInView(screenshotsRef, { once: true, margin: "-100px" });

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-lime/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-lime/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/case-studies" 
              className="inline-flex items-center gap-2 mb-8 text-white hover:text-accent-lime transition-colors font-bold uppercase tracking-wider text-sm"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Case Studies
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-5 py-2 bg-accent-lime/10 border-2 border-accent-lime/30 text-accent-lime rounded-full text-sm font-bold mb-6 uppercase tracking-wider"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Smartphone className="w-4 h-4" />
                Mobile App Development
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black mb-8 leading-[1.1] tracking-[-0.04em] text-white">
                ELF Bangladesh
                <br />
                <span className="text-accent-lime">Mobile App</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 mb-10 font-medium leading-[1.6]">
                Enterprise-grade automotive e-commerce ecosystem combining loyalty rewards, gamification, and service bookings in one powerful platform.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {['React Native', 'Expo 54', 'TypeScript', 'Supabase', 'Redux Toolkit'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-5 py-2 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-sm hover:bg-accent-lime hover:text-black hover:border-accent-lime transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[
                  { value: '60+', label: 'Screens' },
                  { value: '500+', label: 'Products' },
                  { value: '25+', label: 'DB Tables' },
                  { value: '95%', label: 'Complete' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="text-4xl lg:text-5xl font-black text-accent-lime mb-2 tracking-[-0.02em]">{stat.value}</div>
                    <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-accent-lime/20 rounded-[3rem] blur-3xl" />
                
                {/* Phone mockup */}
                <div className="relative bg-black p-3 rounded-[3rem] border-4 border-accent-lime/30 shadow-2xl">
                  <Image
                    src="/images/projects/elf-mobile-store/02-products-listing.jpg"
                    alt="ELF Bangladesh App - Products Listing"
                    width={350}
                    height={700}
                    className="rounded-[2.5rem] object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { icon: <ShoppingCart className="w-7 h-7" />, title: 'Industry', value: 'Automotive Products & Services' },
              { icon: <Zap className="w-7 h-7" />, title: 'Duration', value: '6 Months (Ongoing)' },
              { icon: <Smartphone className="w-7 h-7" />, title: 'Platform', value: 'iOS & Android' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-accent-lime transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-14 h-14 rounded-xl bg-accent-lime/10 flex items-center justify-center mb-4 text-black">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black mb-2 tracking-[-0.01em]">{item.title}</h3>
                <p className="text-gray-600 font-semibold">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-white p-10 lg:p-12 rounded-2xl border-2 border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-8 tracking-[-0.02em]">
              Project <span className="text-accent-lime">Overview</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-[1.7]">
              <p className="font-medium">
                ELF Bangladesh needed to transform their traditional automotive product sales into an engaging digital ecosystem. The challenge was to create a unified mobile platform that seamlessly integrates e-commerce, customer loyalty, service bookings, and emergency assistance while maintaining a user-friendly interface for diverse user segments.
              </p>
              <p className="font-medium">
                The solution is a feature-rich mobile application built with <strong className="text-black">React Native and Expo 54</strong>, offering over <strong className="text-black">60 screens</strong> covering everything from browsing automotive products to booking workshop services and earning loyalty rewards through gamification. The app serves vehicle owners across Bangladesh with multi-language support and integrated payment gateways.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section ref={featuresRef} className="py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-1 bg-accent-lime" />
              <span className="text-gray-500 font-semibold text-sm uppercase tracking-[0.15em]">Core Features</span>
              <div className="w-12 h-1 bg-accent-lime" />
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-[-0.04em]">
              Powerful Features for
              <br />
              <span className="text-accent-lime">Modern Automotive</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-[1.6]">
              A comprehensive suite designed to create an unmatched shopping and service experience
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate={featuresInView ? "animate" : "initial"}
          >
            {[
              {
                icon: <ShoppingCart className="w-8 h-8" />,
                title: "E-Commerce Marketplace",
                description: "Browse 500+ automotive products including engine oils, lubricants, and accessories with advanced filtering and smart search."
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Loyalty & Rewards",
                description: "Earn coins with every purchase, redeem rewards from catalog, and enjoy exclusive benefits for loyal customers."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Gamification System",
                description: "Play interactive games like spin wheel, flip cards to win prizes, boost engagement, and earn rewards."
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Service Center Booking",
                description: "Find nearby workshops, view time slots, book maintenance appointments, and manage vehicle service history."
              },
              {
                icon: <Wallet className="w-8 h-8" />,
                title: "Digital Wallet",
                description: "Integrated wallet for storing coins, processing payments with bKash, Nagad, and SSL Commerz support."
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Emergency Assistance",
                description: "24/7 roadside assistance with GPS location sharing, real-time tracking, and immediate emergency response."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-accent-lime hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 rounded-xl bg-accent-lime/10 flex items-center justify-center mb-6 group-hover:bg-accent-lime transition-all duration-300">
                  <div className="text-black group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-black mb-3 tracking-[-0.01em]">{feature.title}</h3>
                <p className="text-gray-600 leading-[1.7]">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section ref={techRef} className="py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={techInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-1 bg-accent-lime" />
              <span className="text-gray-400 font-semibold text-sm uppercase tracking-[0.15em]">Technology Stack</span>
              <div className="w-12 h-1 bg-accent-lime" />
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-[-0.04em] text-white">
              Built With Modern
              <br />
              <span className="text-accent-lime">Technology</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate={techInView ? "animate" : "initial"}
          >
            {[
              { icon: <Code className="w-6 h-6" />, category: "Frontend", items: ["React Native 0.81.5", "Expo 54", "TypeScript 5.9", "React 19.1.0"] },
              { icon: <Database className="w-6 h-6" />, category: "Backend", items: ["Supabase", "PostgreSQL", "Row-Level Security", "Axios 1.6"] },
              { icon: <Palette className="w-6 h-6" />, category: "UI/UX", items: ["React Native Paper 5.14", "React Navigation 7.1", "Lucide Icons", "Reanimated"] },
              { icon: <Server className="w-6 h-6" />, category: "State Management", items: ["Redux Toolkit 2.0", "React Redux 9.1", "AsyncStorage", "Redux Persist"] },
              { icon: <Wallet className="w-6 h-6" />, category: "Payments", items: ["bKash", "Nagad", "SSL Commerz", "Cash on Delivery"] },
              { icon: <Smartphone className="w-6 h-6" />, category: "Native Features", items: ["expo-camera", "expo-location", "expo-notifications", "expo-print"] },
              { icon: <Globe className="w-6 h-6" />, category: "i18n", items: ["i18next 25.7", "react-i18next 16.5", "expo-localization"] },
              { icon: <Zap className="w-6 h-6" />, category: "Dev Tools", items: ["ESLint", "Babel", "Metro Bundler", "TypeScript"] }
            ].map((stack, index) => (
              <motion.div
                key={stack.category}
                className="bg-white/5 border-2 border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-accent-lime/30 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={techInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-lime/10 flex items-center justify-center text-accent-lime">
                    {stack.icon}
                  </div>
                  <h3 className="text-lg font-black text-white tracking-[-0.01em]">{stack.category}</h3>
                </div>
                <ul className="space-y-2">
                  {stack.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-400 font-medium flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent-lime flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Screenshots Showcase */}
      <section ref={screenshotsRef} className="py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={screenshotsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-4 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={screenshotsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-1 bg-accent-lime" />
              <span className="text-gray-500 font-semibold text-sm uppercase tracking-[0.15em]">App Screenshots</span>
              <div className="w-12 h-1 bg-accent-lime" />
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-[-0.04em]">
              Visual Design
              <br />
              <span className="text-accent-lime">Showcase</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-[1.6]">
              Explore the app's interface and user experience through key screens
            </p>
          </motion.div>

          {/* E-Commerce Experience */}
          <div className="mb-20">
            <motion.h3
              className="text-3xl font-black mb-10 text-center tracking-[-0.02em]"
              initial={{ opacity: 0, y: 20 }}
              animate={screenshotsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              E-Commerce Experience
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { img: '02-products-listing.jpg', title: 'Products Listing', desc: 'Browse 500+ products' },
                { img: '03-product-detail-transmission-fluid.jpg', title: 'Product Detail', desc: 'Complete specifications' },
                { img: '18-wishlist.jpg', title: 'Wishlist', desc: 'Save favorites' }
              ].map((screen, index) => (
                <motion.div
                  key={screen.img}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={screenshotsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative h-[550px] mb-6 rounded-2xl overflow-hidden border-4 border-gray-200 group-hover:border-accent-lime transition-all duration-300 bg-black">
                    <Image
                      src={`/images/projects/elf-mobile-store/${screen.img}`}
                      alt={screen.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-black text-xl mb-2 tracking-[-0.01em]">{screen.title}</h4>
                  <p className="text-gray-600">{screen.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gamification & Rewards */}
          <div className="mb-20">
            <motion.h3
              className="text-3xl font-black mb-10 text-center tracking-[-0.02em]"
              initial={{ opacity: 0, y: 20 }}
              animate={screenshotsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Gamification & Loyalty
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { img: '07-gamification-spin-wheel.jpg', title: 'Spin Wheel', desc: 'Win prizes & earn coins' },
                { img: '11-rewards-catalog.jpg', title: 'Rewards Catalog', desc: 'Redeem exclusive rewards' },
                { img: '19-rewards-balance.jpg', title: 'Rewards Balance', desc: 'Track your earnings' }
              ].map((screen, index) => (
                <motion.div
                  key={screen.img}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={screenshotsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="relative h-[550px] mb-6 rounded-2xl overflow-hidden border-4 border-gray-200 group-hover:border-accent-lime transition-all duration-300 bg-black">
                    <Image
                      src={`/images/projects/elf-mobile-store/${screen.img}`}
                      alt={screen.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-black text-xl mb-2 tracking-[-0.01em]">{screen.title}</h4>
                  <p className="text-gray-600">{screen.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services & Assistance */}
          <div>
            <motion.h3
              className="text-3xl font-black mb-10 text-center tracking-[-0.02em]"
              initial={{ opacity: 0, y: 20 }}
              animate={screenshotsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Services & Assistance
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { img: '12-elf-workshops.jpg', title: 'Workshop Finder', desc: 'Locate service centers' },
                { img: '13-roadside-assistance.jpg', title: 'Roadside Help', desc: '24/7 emergency support' },
                { img: '22-my-appointments.jpg', title: 'Appointments', desc: 'Manage bookings' }
              ].map((screen, index) => (
                <motion.div
                  key={screen.img}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={screenshotsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="relative h-[550px] mb-6 rounded-2xl overflow-hidden border-4 border-gray-200 group-hover:border-accent-lime transition-all duration-300 bg-black">
                    <Image
                      src={`/images/projects/elf-mobile-store/${screen.img}`}
                      alt={screen.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-black text-xl mb-2 tracking-[-0.01em]">{screen.title}</h4>
                  <p className="text-gray-600">{screen.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-accent-lime">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl lg:text-6xl font-black mb-8 tracking-[-0.04em] text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Build Your
            <br />
            <span className="text-black">Next Mobile App?</span>
          </motion.h2>
          <motion.p
            className="text-xl text-black/80 mb-10 leading-[1.6]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss your project and create something amazing together
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-3 bg-black text-accent-lime font-black px-10 py-5 rounded-2xl hover:bg-gray-900 transition-all text-lg shadow-xl uppercase tracking-wider"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-3 bg-black/10 text-black border-2 border-black font-black px-10 py-5 rounded-2xl hover:bg-black/20 transition-all text-lg uppercase tracking-wider"
            >
              <span>View More Cases</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
