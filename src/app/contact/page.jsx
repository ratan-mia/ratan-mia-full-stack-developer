'use client';

import FAQ from '@/components/home/FAQ';
import { motion } from 'framer-motion';
import {
    AlertCircle,
    Building,
    CheckCircle,
    Globe,
    Loader2,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Send,
    User
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    projectTimeline: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        subject: '',
        message: '',
        preferredContact: 'email',
        projectTimeline: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: null });
      }, 5000);

    } catch (error) {
      setStatus({ 
        submitting: false, 
        submitted: false, 
        error: error.message || 'Something went wrong. Please try again.' 
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shorifull@gmail.com',
      link: 'mailto:shorifull@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1751-010966',
      link: 'tel:+8801751010966'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      link: null
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-accent-lime flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop" 
            alt="Contact Background"
            className="w-full h-full object-cover opacity-6"
          />
          <div className="absolute inset-0 bg-accent-lime/90"></div>
        </div>

        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-10">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-32 h-32 rounded-full bg-black/5"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-40 h-40 rounded-2xl bg-black/5"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 relative z-20 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-6 py-2 bg-black/10 backdrop-blur-sm text-black rounded-full text-sm font-bold mb-6">
                📧 GET IN TOUCH
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black mb-6 leading-tight">
                Let's Build Something
                <span className="block text-black/70">Amazing Together</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-black/80 leading-relaxed font-medium max-w-3xl mx-auto">
                Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative w-full py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 relative z-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gray-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-800 hover:border-accent-lime group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent-lime flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{info.label}</h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-gray-400 hover:text-accent-lime transition-colors font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-400 font-medium">{info.value}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative w-full py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-full min-h-[600px] lg:min-h-[800px] rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
                alt="Contact Us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Text Overlay on Image */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-block px-6 py-2 bg-accent-lime/20 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-4">
                  CONTACT FORM
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  Send Me a Message
                </h2>
                
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  Fill out the form and I'll get back to you as soon as possible. Whether you have a question, 
                  project idea, or just want to connect, I'm here to help.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-lime/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1">Quick Response</h3>
                      <p className="text-white/80 text-sm">Within 24 hours on business days.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-lime/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1">Confidential</h3>
                      <p className="text-white/80 text-sm">Your information is kept private and secure.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="bg-gray-900 rounded-3xl p-8 md:p-10 shadow-xl border-2 border-gray-800">
                {/* Success Message */}
                {status.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-accent-lime rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-black flex-shrink-0" />
                    <div>
                      <p className="font-bold text-black">Message Sent Successfully!</p>
                      <p className="text-sm text-black/70">I'll get back to you within 24 hours.</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 rounded-xl flex items-center gap-3 border-2 border-red-200"
                  >
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-red-900">Error</p>
                      <p className="text-sm text-red-700">{status.error}</p>
                    </div>
                  </motion.div>
                )}

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-700 bg-gray-800 text-white rounded-xl focus:border-accent-lime focus:outline-none hover:border-gray-600 transition-all font-medium placeholder:text-gray-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-700 bg-gray-800 text-white rounded-xl focus:border-accent-lime focus:outline-none hover:border-gray-600 transition-all font-medium placeholder:text-gray-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Company Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-white mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-700 bg-gray-800 text-white rounded-xl focus:border-accent-lime focus:outline-none hover:border-gray-600 transition-all font-medium placeholder:text-gray-500"
                          placeholder="+880 1751-010966"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-white mb-2">
                        Company
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-700 bg-gray-800 text-white rounded-xl focus:border-accent-lime focus:outline-none hover:border-gray-600 transition-all font-medium placeholder:text-gray-500"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label htmlFor="website" className="block text-sm font-bold text-white mb-2">
                      Website
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-700 bg-gray-800 text-white rounded-xl focus:border-accent-lime focus:outline-none hover:border-gray-600 transition-all font-medium placeholder:text-gray-500"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-white mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-700 bg-gray-800 text-white rounded-xl focus:border-accent-lime focus:outline-none hover:border-gray-600 transition-all font-medium placeholder:text-gray-500"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  {/* Project Timeline */}
                  <div>
                    <label htmlFor="projectTimeline" className="block text-sm font-bold text-white mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="projectTimeline"
                      name="projectTimeline"
                      value={formData.projectTimeline}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-accent-lime focus:outline-none transition-colors font-medium bg-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="urgent">Urgent (1-2 weeks)</option>
                      <option value="soon">Soon (1 month)</option>
                      <option value="flexible">Flexible (2-3 months)</option>
                      <option value="exploring">Just Exploring</option>
                    </select>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleChange}
                          className="w-5 h-5 accent-accent-lime"
                        />
                        <span className="font-medium text-gray-300">Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleChange}
                          className="w-5 h-5 accent-accent-lime"
                        />
                        <span className="font-medium text-gray-300">Phone</span>
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-700 bg-gray-800 text-white rounded-xl focus:border-accent-lime focus:outline-none hover:border-gray-600 transition-all font-medium placeholder:text-gray-500 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full bg-accent-lime text-black py-4 rounded-xl font-extrabold text-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {status.submitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-400 text-center">
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-accent-lime rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-accent-lime rounded-xl font-extrabold hover:scale-105 transition-transform"
              >
                Get a Quote
              </Link>
              <Link 
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black/10 text-black rounded-xl font-extrabold hover:bg-black/20 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
