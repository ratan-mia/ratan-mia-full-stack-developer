'use client';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, CheckCircle2, Gift, Smartphone, TrendingUp, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function GamifyCaseStudy() {
  const features = [
    { icon: Zap, title: "QR Code Scanner", desc: "Instant product verification with unique codes" },
    { icon: Smartphone, title: "OTP Authentication", desc: "Secure phone-based user verification" },
    { icon: Gift, title: "Spin Wheel & Flip Card", desc: "Engaging probability-based games" },
    { icon: Award, title: "Reward Engine", desc: "Dynamic prize distribution system" },
    { icon: Users, title: "Multi-Tier Users", desc: "Customer/Driver/Retailer/Mechanic categories" },
    { icon: CheckCircle2, title: "Digital Wallet", desc: "Coin balance and redemption tracking" },
  ];

  const screenshots = [
    { src: "/images/projects/pieqr/screenshots/home-screen.jpg", title: "Home & QR Scanner" },
    { src: "/images/projects/pieqr/screenshots/game-screen.jpg", title: "Spin Wheel Game" },
    { src: "/images/projects/pieqr/screenshots/game-2-screen.jpg", title: "Flip Card Game" },
    { src: "/images/projects/pieqr/screenshots/wallet.jpg", title: "Digital Wallet" },
    { src: "/images/projects/pieqr/screenshots/gifts.jpg", title: "Gifts Catalog" },
    { src: "/images/projects/pieqr/screenshots/trasactions-insights.jpg", title: "Transaction Insights" },
  ];

  const techStack = [
    { category: "Frontend", items: ["React Native", "Expo SDK", "Redux Toolkit", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Express.js", "PostgreSQL", "Redis"] },
    { category: "Features", items: ["QR Scanner", "OTP System", "Geo-tracking", "Fraud Detection"] },
    { category: "Payment", items: ["bKash", "Nagad", "SSL Commerce", "Mobile Recharge"] },
  ];

  return (
    <main className="bg-white text-black overflow-hidden">
      
      {/* Hero Section - Following Design Guidelines */}
      <section className="relative min-h-screen w-full overflow-hidden bg-accent-lime">
        {/* Decorative floating elements - desktop only */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-40 right-20 w-24 h-24 rounded-2xl bg-black/5"
          />
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-40 left-20 w-32 h-32 rounded-full bg-black/5"
          />
        </div>

        {/* Main content */}
        <div className="relative z-20 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-32 w-full">
            {/* Back Button */}
            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 text-black/70 hover:text-black mb-12 font-bold transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Case Studies
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <div className="inline-block px-6 py-2 bg-black/15 text-black rounded-full text-sm font-bold mb-6">
                  🎮 LOYALTY & GAMIFICATION
                </div>

                {/* Hero Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-6 leading-tight">
                  Gamify<br />
                  <span className="text-black/80">Loyalty Platform</span>
                </h1>
                
                {/* Description */}
                <p className="text-xl text-black/80 mb-8 max-w-xl leading-relaxed">
                  QR-powered engagement platform with interactive games, digital wallet, and 
                  comprehensive analytics for FMCG and automotive brands nationwide.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Users, label: "Active Users", value: "8K+" },
                    { icon: Zap, label: "QR Scans", value: "50K+" },
                    { icon: Award, label: "Games Played", value: "25K+" },
                    { icon: TrendingUp, label: "Redemptions", value: "3K+" },
                  ].map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="bg-black/10 backdrop-blur-sm p-4 rounded-2xl"
                      >
                        <Icon className="w-6 h-6 text-black mb-2" />
                        <div className="text-2xl font-extrabold text-black">{stat.value}</div>
                        <div className="text-sm font-semibold text-black/70">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {["React Native", "Node.js", "PostgreSQL", "QR Scanner"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-black/15 text-black rounded-lg text-sm font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-black/10">
                  <Image
                    src="/images/projects/pieqr/screenshots/home-screen.jpg"
                    alt="Gamify Platform"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-6 -left-6 bg-black text-accent-lime px-6 py-4 rounded-2xl font-extrabold text-xl shadow-2xl">
                  2025
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution - White Background */}
      <section className="relative w-full py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
                THE PROBLEM
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Complex <span className="text-accent-lime">Engagement Challenge</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                FMCG and automotive brands needed a scalable platform to track distribution, 
                prevent fraud, and drive customer loyalty across 64 districts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Challenge */}
              <div className="p-8 rounded-3xl bg-red-50 border-2 border-red-200">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                    <span>Track product distribution across entire country</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                    <span>Prevent QR code fraud and duplicate scans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                    <span>Manage 4 different user categories with unique workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                    <span>Complex reward tiers and eligibility rules</span>
                  </li>
                </ul>
              </div>

              {/* Solution */}
              <div className="p-8 rounded-3xl bg-green-50 border-2 border-green-200">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4">The Solution</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span>QR scanning with geo-location tracking and device fingerprinting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span>Interactive games (Spin Wheel & Flip Card) with probability engine</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span>Category-based profiles with document verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                    <span>Admin dashboard with heat maps and real-time analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid - Gray Background */}
      <section className="relative w-full py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
                CORE FEATURES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Complete Engagement <span className="text-accent-lime">Ecosystem</span>
              </h2>
            </div>

            {/* Feature Cards with Lime Background */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-8 rounded-3xl bg-accent-lime text-black hover:shadow-2xl transition-all duration-500 group"
                  >
                    {/* Icon */}
                    <div className="mb-6 w-16 h-16 rounded-2xl flex items-center justify-center bg-black/15">
                      <Icon className="w-8 h-8 text-black" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-extrabold mb-4">{feature.title}</h3>

                    {/* Description */}
                    <p className="text-black/80 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots Gallery - White Background */}
      <section className="relative w-full py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">App Screenshots</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Intuitive interface designed for maximum engagement
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {screenshots.map((screenshot, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-bold text-sm">{screenshot.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Gray Background */}
      <section className="relative w-full py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
              TECHNOLOGY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-accent-lime/50 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg mb-4 text-black">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="text-gray-600 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Results - Lime Background */}
      <section className="relative w-full py-20 px-4 md:px-6 lg:px-8 bg-accent-lime">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-black">
              Measurable Business Impact
            </h2>
            <p className="text-2xl text-black/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Increased brand engagement by 200% while providing valuable customer insights 
              through gamified interactions and purchase tracking.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { value: "200%", label: "Brand Engagement Increase" },
                { value: "8K+", label: "Active Users Nationwide" },
                { value: "64", label: "Districts Covered" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-black/10 p-8 rounded-3xl">
                  <div className="text-5xl font-extrabold text-black mb-2">{stat.value}</div>
                  <div className="text-black/80 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-accent-lime rounded-xl font-bold hover:shadow-2xl transition-all hover:scale-105"
            >
              Explore More Case Studies
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
