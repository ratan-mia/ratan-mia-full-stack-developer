'use client';

import Skills from '@/app/components/home/Skills';
import TrainingCertificates from '@/app/components/home/TrainingCertificates';
import { motion } from 'framer-motion';
import { Award, Heart, Target, Sparkles, Code, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="bg-white text-black overflow-hidden">
      
      {/* Hero Section - Following Design Guidelines */}
      <section className="relative min-h-screen w-full overflow-hidden bg-accent-lime">
        {/* Decorative elements - desktop only */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-black/5 animate-pulse" />
          <div className="absolute bottom-40 right-20 w-24 h-24 rounded-2xl bg-black/5 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Main content */}
        <div className="relative z-20 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-32 w-full">
            {/* Badge */}
            <div className="inline-block px-6 py-2 bg-black/15 text-black rounded-full text-sm font-extrabold mb-6">
              👋 ABOUT ME
            </div>

            {/* Hero Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-black">
              Building Digital<br />
              <span className="text-black/70">Experiences</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-black/80 mb-12 max-w-3xl font-medium leading-relaxed">
              I'm Ratan Mia, a passionate full stack developer with 10+ years of experience 
              crafting scalable web and mobile applications that drive business growth and user satisfaction.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12 max-w-4xl">
              {[
                { value: '50+', label: 'Projects', icon: Code },
                { value: '35+', label: 'Clients', icon: Users },
                { value: '10+', label: 'Years', icon: Award },
                { value: '98%', label: 'Success', icon: TrendingUp }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="text-center p-6 bg-black/10 rounded-xl backdrop-blur-sm"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-black" />
                  <div className="text-3xl md:text-4xl font-extrabold mb-1 text-black">{stat.value}</div>
                  <div className="text-sm font-bold text-black/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 md:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                📖 MY JOURNEY
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                The Story Behind the Code
              </h2>
              <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium">
                From building my first website to delivering enterprise solutions for global brands
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: "The Beginning",
                  icon: "🌱",
                  year: "2015",
                  highlight: "First E-commerce Site",
                  content: "Started my journey in web development during college. Built my first e-commerce website and discovered my passion for creating digital solutions that solve real problems.",
                  achievement: "Learned PHP, MySQL & JavaScript",
                  bgColor: "bg-accent-lime",
                  textColor: "text-black",
                  badgeBg: "bg-black/15",
                  borderColor: "border-black/10"
                },
                {
                  title: "Professional Growth",
                  icon: "🚀",
                  year: "2016-2020",
                  highlight: "50+ Projects Delivered",
                  content: "Worked with 30+ clients ranging from startups to established brands. Delivered mobile apps, SaaS platforms, and enterprise systems across multiple industries.",
                  achievement: "Mastered React, React Native & Node.js",
                  bgColor: "bg-accent-orange",
                  textColor: "text-white",
                  badgeBg: "bg-white/20",
                  borderColor: "border-white/10"
                },
                {
                  title: "Current Focus",
                  icon: "🎯",
                  year: "2021-Present",
                  highlight: "Building Products",
                  content: "Building innovative products like Gamify, TurfNations, and automotive ecosystems. Focused on React Native, Next.js, and scalable cloud architectures.",
                  achievement: "Leading full-stack development",
                  bgColor: "bg-black",
                  textColor: "text-white",
                  badgeBg: "bg-accent-lime/20",
                  borderColor: "border-accent-lime/20"
                }
              ].map((story, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`relative ${story.bgColor} rounded-3xl p-8 md:p-10 shadow-xl border-2 ${story.borderColor} hover:shadow-2xl hover:-translate-y-1 transition-all group`}
                >
                  {/* Timeline connector - hidden on mobile */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 group-hover:bg-accent-lime transition-colors z-10" />
                  )}
                  
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{story.icon}</div>
                  
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className={`px-4 py-1.5 ${story.badgeBg} ${story.textColor} rounded-full text-xs font-extrabold backdrop-blur-sm`}>
                      {story.year}
                    </div>
                    <div className={`px-4 py-1.5 ${story.badgeBg} ${story.textColor} rounded-full text-xs font-bold backdrop-blur-sm`}>
                      {story.highlight}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-extrabold mb-4 ${story.textColor}`}>{story.title}</h3>
                  <p className={`${story.textColor} ${story.textColor === 'text-white' ? 'opacity-90' : 'opacity-80'} text-base md:text-lg leading-relaxed font-medium mb-4`}>
                    {story.content}
                  </p>
                  
                  <div className={`pt-4 border-t-2 ${story.borderColor}`}>
                    <div className={`flex items-center gap-2 ${story.textColor === 'text-white' ? 'text-accent-lime' : 'text-black'}`}>
                      <span className="text-lg">✓</span>
                      <span className="text-sm font-bold">{story.achievement}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="px-4 md:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                🚀 FEATURED WORK
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Projects I'm Proud Of</h2>
              <p className="text-gray-600 max-w-3xl mx-auto font-medium">
                Real solutions for real businesses across automotive, sports, and loyalty industries
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Chery Bangladesh App",
                  description: "Complete automotive ecosystem with 50K+ users",
                  image: "/images/projects/cherybd-mockup.png",
                  link: "/case-studies/chery-bangladesh",
                  metrics: "50K+ Users • 4.8★ Rating"
                },
                {
                  title: "TurfNations Platform",
                  description: "Sports booking system with 5K+ bookings",
                  image: "/images/projects/turflet/www.turflet.app.png",
                  link: "/case-studies/turfnations-booking",
                  metrics: "5K+ Bookings • 95% Success"
                },
                {
                  title: "Gamify Loyalty",
                  description: "QR-based engagement for 8K+ users",
                  image: "/images/projects/pieqr/screenshots/home-screen.jpg",
                  link: "/case-studies/gamify",
                  metrics: "8K+ Users • 50K+ Scans"
                }
              ].map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border-2 border-gray-100 hover:border-accent-lime"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-extrabold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4 font-medium">{project.description}</p>
                    <div className="text-sm font-bold text-accent-lime mb-4">{project.metrics}</div>
                    <a
                      href={project.link}
                      className="inline-flex items-center px-6 py-3 bg-black text-accent-lime rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105"
                    >
                      View Case Study →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 md:px-6 lg:px-8 py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
                💎 CORE VALUES
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                What Drives Me
              </h2>
              <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium">
                Principles that guide every line of code I write
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  icon: Heart,
                  emoji: "❤️",
                  title: "Passion for Craft",
                  subtitle: "Love What I Do",
                  content: "Every project is an opportunity to create something meaningful that makes a real difference. I bring enthusiasm and dedication to every line of code, every design decision, and every user interaction.",
                  highlight: "10+ years of passionate coding",
                  bgColor: "bg-accent-lime",
                  textColor: "text-black",
                  iconBg: "bg-black",
                  iconText: "text-accent-lime",
                  subtitleColor: "text-black/70",
                  borderColor: "border-black/10"
                },
                {
                  icon: Award,
                  emoji: "🏆",
                  title: "Excellence Always",
                  subtitle: "No Compromise on Quality",
                  content: "Quality is non-negotiable. I take pride in delivering work that exceeds expectations, follows industry best practices, and stands the test of time through maintainable, scalable architecture.",
                  highlight: "98% client satisfaction rate",
                  bgColor: "bg-accent-orange",
                  textColor: "text-white",
                  iconBg: "bg-white",
                  iconText: "text-accent-orange",
                  subtitleColor: "text-white/80",
                  borderColor: "border-white/10"
                },
                {
                  icon: Sparkles,
                  emoji: "✨",
                  title: "Innovation First",
                  subtitle: "Stay Ahead of the Curve",
                  content: "I embrace cutting-edge technologies and modern approaches. Constantly learning and experimenting with new tools to deliver exceptional value and future-proof solutions.",
                  highlight: "Early adopter of React Native & Next.js",
                  bgColor: "bg-black",
                  textColor: "text-white",
                  iconBg: "bg-accent-lime",
                  iconText: "text-black",
                  subtitleColor: "text-accent-lime/90",
                  borderColor: "border-accent-lime/20"
                },
                {
                  icon: Target,
                  emoji: "🎯",
                  title: "Results That Matter",
                  subtitle: "Business Impact Focus",
                  content: "Success isn't just about shipping features - it's about creating solutions that drive measurable business results, revenue growth, and genuine user satisfaction.",
                  highlight: "50+ successful project launches",
                  bgColor: "bg-gray-900",
                  textColor: "text-white",
                  iconBg: "bg-accent-orange",
                  iconText: "text-white",
                  subtitleColor: "text-accent-orange/90",
                  borderColor: "border-accent-orange/20"
                }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`${value.bgColor} rounded-3xl p-8 md:p-10 lg:p-12 shadow-xl border-2 ${value.borderColor} hover:shadow-2xl hover:-translate-y-1 transition-all group`}
                >
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`${value.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <span className={`text-4xl ${value.iconText}`}>{value.emoji}</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className={`text-2xl md:text-3xl font-extrabold ${value.textColor} mb-2`}>{value.title}</h3>
                      <p className={`${value.subtitleColor} text-sm font-bold`}>{value.subtitle}</p>
                    </div>
                  </div>
                  <p className={`${value.textColor} ${value.textColor === 'text-white' ? 'opacity-90' : 'opacity-80'} text-base md:text-lg leading-relaxed font-medium mb-6`}>
                    {value.content}
                  </p>
                  <div className={`pt-4 border-t-2 ${value.borderColor}`}>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 ${value.textColor === 'text-white' ? 'bg-accent-lime' : 'bg-black'} rounded-full`} />
                      <span className={`text-sm font-bold ${value.textColor}`}>{value.highlight}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Training Certificates */}
      <TrainingCertificates />

      {/* Contact CTA */}
      <section className="px-4 md:px-6 lg:px-8 py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-accent-lime rounded-full text-sm font-extrabold mb-8">
              💬 LET'S CONNECT
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to Build Something Great?</h2>
            <p className="text-xl text-gray-300 mb-10 font-medium max-w-2xl mx-auto">
              Whether you need a mobile app, web platform, or custom solution - let's discuss how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent-lime text-black font-extrabold rounded-xl hover:shadow-2xl hover:shadow-accent-lime/50 transition-all duration-300 hover:scale-105"
              >
                Get In Touch →
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-extrabold rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
