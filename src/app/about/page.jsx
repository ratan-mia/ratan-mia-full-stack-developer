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
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">The Story Behind the Code</h2>
              <p className="text-gray-600 max-w-3xl mx-auto font-medium">
                From building my first website to delivering enterprise solutions for global brands
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "The Beginning",
                  icon: "🌱",
                  year: "2015",
                  content: "Started my journey in web development during college. Built my first e-commerce website and discovered my passion for creating digital solutions that solve real problems."
                },
                {
                  title: "Professional Growth",
                  icon: "🚀",
                  year: "2016-2020",
                  content: "Worked with 30+ clients ranging from startups to established brands. Delivered 50+ projects including mobile apps, SaaS platforms, and enterprise systems."
                },
                {
                  title: "Current Focus",
                  icon: "🎯",
                  year: "2021-Present",
                  content: "Building innovative products like Gamify, TurfNations, and automotive ecosystems. Focused on React Native, Next.js, and scalable cloud architectures."
                }
              ].map((story, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-gray-50 rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-accent-lime transition-all group"
                >
                  <div className="text-5xl mb-4">{story.icon}</div>
                  <div className="inline-block px-4 py-1.5 bg-accent-lime/20 text-black rounded-full text-xs font-extrabold mb-4">
                    {story.year}
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4">{story.title}</h3>
                  <p className="text-gray-700 leading-relaxed font-medium">{story.content}</p>
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
                  content: "I love what I do. Every project is an opportunity to create something meaningful that can make a real difference in people's lives and businesses."
                },
                {
                  icon: Award,
                  emoji: "🏆",
                  title: "Excellence Always",
                  content: "Quality is non-negotiable. I take pride in delivering work that exceeds expectations, follows best practices, and stands the test of time."
                },
                {
                  icon: Sparkles,
                  emoji: "✨",
                  title: "Innovation First",
                  content: "I embrace cutting-edge technologies and modern approaches, always looking for better ways to solve problems and deliver exceptional value."
                },
                {
                  icon: Target,
                  emoji: "🎯",
                  title: "Results That Matter",
                  content: "Success isn't just about shipping features - it's about creating solutions that drive real business results, growth, and user satisfaction."
                }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border-2 border-gray-200 hover:border-accent-lime transition-all group hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-accent-lime w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-3xl">{value.emoji}</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-black">{value.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                    {value.content}
                  </p>
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
