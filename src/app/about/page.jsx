'use client';

import { motion } from 'framer-motion';
import { Award, Code, Users, Target, TrendingUp, Heart, Zap, Globe } from 'lucide-react';
import Skills from '@/app/components/home/Skills';
import TrainingCertificates from '@/app/components/home/TrainingCertificates';
import Contact from '@/app/components/home/Contact';

export default function AboutPage() {
  return (
    <main className="bg-white text-black">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
              ABOUT ME
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Building Digital
              <span className="text-accent-lime"> Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I'm Ratan Mia, a passionate full stack developer with 5+ years of experience 
              crafting scalable web applications that drive business growth and user satisfaction.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { value: '100+', label: 'Projects Completed', icon: Code },
              { value: '50+', label: 'Happy Clients', icon: Users },
              { value: '5+', label: 'Years Experience', icon: Award },
              { value: '95%', label: 'Success Rate', icon: TrendingUp }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-accent-lime/50 hover:shadow-lg transition-all"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent-lime" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "The Beginning",
                  icon: "🌱",
                  color: "accent-lime",
                  content: "My journey into web development started during my computer science studies when I built my first website. I was fascinated by how lines of code could create beautiful, interactive experiences that people around the world could use."
                },
                {
                  title: "Professional Growth",
                  icon: "🚀",
                  color: "orange-500",
                  content: "Over the past 5+ years, I've had the privilege of working with startups, established businesses, and individual entrepreneurs. Each project has taught me something new and reinforced my passion for creating solutions that truly matter."
                },
                {
                  title: "Current Focus",
                  icon: "🎯",
                  color: "green-600",
                  content: "Today, I focus on building modern, scalable applications using cutting-edge technologies. I'm particularly passionate about performance optimization, user experience, and helping businesses achieve their digital goals."
                }
              ].map((story, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:border-accent-lime/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{story.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{story.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{story.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-4">What Drives Me</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Core values that shape every project and client relationship
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Passion",
                  description: "Genuine love for creating beautiful, functional solutions"
                },
                {
                  icon: Target,
                  title: "Excellence",
                  description: "Commitment to delivering the highest quality work"
                },
                {
                  icon: Zap,
                  title: "Innovation",
                  description: "Always learning and adopting cutting-edge technologies"
                },
                {
                  icon: Globe,
                  title: "Impact",
                  description: "Building solutions that make a real difference"
                }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-accent-lime/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent-lime/20 rounded-full flex items-center justify-center group-hover:bg-accent-lime/30 transition-colors">
                    <value.icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
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
      <section className="px-4 py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to bring your ideas to life? Let's discuss how I can help.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-accent-lime text-black font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
