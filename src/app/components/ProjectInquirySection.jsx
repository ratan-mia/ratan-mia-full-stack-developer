'use client';

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Loader2, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function ProjectInquirySection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    serviceRequired: '',
    projectBudget: '',
    projectDetails: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const services = [
    'Web Application Development',
    'Mobile App Development',
    'E-commerce Platform',
    'Custom Software Solution',
    'API Development & Integration',
    'UI/UX Design',
    'MVP Development',
    'Technical Consultation',
    'Other'
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'To be discussed'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/project-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message || 'Thank you! We\'ll get back to you soon.');
        setFormData({
          fullName: '',
          email: '',
          companyName: '',
          serviceRequired: '',
          projectBudget: '',
          projectDetails: ''
        });
      } else {
        setStatus('error');
        setMessage(data.error || data.errors?.join(', ') || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to send inquiry. Please try again later.');
      console.error('Submission error:', error);
    }
  };

  return (
    <section id="project-inquiry-section" className="relative py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-lime rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-lime rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-extrabold mb-6">
              <Mail className="w-4 h-4" />
              GET STARTED
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Have a project idea in mind?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600">
                Let's get started
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              We'll schedule a call to discuss your idea. After discovery sessions, we'll send a proposal, and upon approval, we'll get started.
            </p>

            {/* Profile Card */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-100 inline-block">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-lime to-accent-lime/60 rounded-2xl flex items-center justify-center overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center text-accent-lime text-2xl font-bold">
                    RM
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-black">Ratan Mia</h3>
                  <p className="text-sm text-gray-600 font-medium">Co-Founder & Chief Digital Officer</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent-lime rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-black" />
                </div>
                <p className="text-gray-700">Response within 24 hours</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent-lime rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-black" />
                </div>
                <p className="text-gray-700">Free consultation & project estimation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent-lime rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-black" />
                </div>
                <p className="text-gray-700">NDA available upon request</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border-2 border-gray-100">
              
              {/* Full Name */}
              <div className="mb-6">
                <label htmlFor="fullName" className="block text-sm font-bold text-black mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Jane Cooper"
                  required
                  className="w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-black outline-none transition-colors bg-transparent text-black placeholder-gray-400"
                />
              </div>

              {/* Email and Company Name */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-bold text-black mb-2">
                    Company name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Ex. Tesla Inc"
                    className="w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-black outline-none transition-colors bg-transparent text-black placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-black mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="You@Example.Com"
                    required
                    className="w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-black outline-none transition-colors bg-transparent text-black placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Service and Budget */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="serviceRequired" className="block text-sm font-bold text-black mb-2">
                    Service required<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-black outline-none transition-colors bg-transparent text-black appearance-none cursor-pointer"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23000\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                  >
                    <option value="">Select Your Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="projectBudget" className="block text-sm font-bold text-black mb-2">
                    Project budget<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="projectBudget"
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-base border-b-2 border-gray-300 focus:border-black outline-none transition-colors bg-transparent text-black appearance-none cursor-pointer"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23000\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                  >
                    <option value="">Select Your Range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-6">
                <label htmlFor="projectDetails" className="block text-sm font-bold text-black mb-2">
                  Project details<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Tell us more about your idea"
                  required
                  rows="5"
                  className="w-full px-4 py-3 text-base border-2 border-gray-300 focus:border-black outline-none transition-colors bg-transparent text-black placeholder-gray-400 rounded-xl resize-none"
                />
              </div>

              {/* Status Message */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-accent-lime/20 border-2 border-accent-lime rounded-xl flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-black shrink-0 mt-0.5" />
                  <p className="text-sm text-black font-medium">{message}</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-xl flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-600 font-medium">{message}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-black text-accent-lime py-4 px-8 rounded-xl font-extrabold text-lg hover:bg-gray-900 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending inquiry...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send inquiry
                  </>
                )}
              </button>

              {/* Alternative Contact */}
              <p className="text-center text-sm text-gray-600 mt-6">
                Not interested to submit the form?{' '}
                <a
                  href="https://calendly.com/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-bold hover:text-gray-700 transition-colors border-b-2 border-accent-lime"
                >
                  Book A Call Directly
                </a>
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
