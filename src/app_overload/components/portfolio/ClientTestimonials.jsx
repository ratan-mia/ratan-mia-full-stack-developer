'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Real testimonials based on actual projects
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Rahman",
      title: "General Manager",
      company: "Asian Petroleum Limited",
      project: "Elf Bangladesh Digital Platform",
      rating: 5,
      avatar: "/testimonials/ahmed.jpg",
      testimonial: "Working with Ratan was exceptional. The new Elf Bangladesh platform exceeded all our expectations with 85% conversion rate increase and seamless CRM integration. His technical expertise in Next.js and business understanding made the difference.",
      metrics: "85% conversion rate increase",
      projectType: "Corporate Website & CRM"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Marketing Director",
      company: "Chery Bangladesh",
      project: "Automotive Website with 360° Viewer",
      rating: 5,
      avatar: "/testimonials/sarah.jpg",
      testimonial: "The automotive website Ratan built achieved 97% PageSpeed score and revolutionized our customer experience. The 360° car viewer and virtual showroom capabilities have significantly improved user engagement and sales.",
      metrics: "97% PageSpeed score",
      projectType: "Automotive Platform"
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "CEO",
      company: "Japan Parts Ltd",
      project: "E-commerce Platform",
      rating: 5,
      avatar: "/testimonials/michael.jpg",
      testimonial: "Our e-commerce platform saw 300% order volume increase after Ratan's development. The intelligent make/model/year system and inventory management have streamlined our operations completely.",
      metrics: "300% order volume increase",
      projectType: "E-commerce Development"
    },
    {
      id: 4,
      name: "Dr. Emily Rodriguez",
      title: "Director",
      company: "Healthcare Solutions",
      project: "AI Chatbot Integration",
      rating: 5,
      avatar: "/testimonials/emily.jpg",
      testimonial: "The OpenAI chatbot integration has transformed our patient support services. Available 24/7 with personalized responses, it's improved efficiency by 70% and patient satisfaction dramatically.",
      metrics: "70% efficiency improvement",
      projectType: "AI Integration"
    },
    {
      id: 5,
      name: "David Thompson",
      title: "Operations Manager",
      company: "ELF International",
      project: "E-commerce Rebranding",
      rating: 5,
      avatar: "/testimonials/david.jpg",
      testimonial: "The e-commerce platform rebranding delivered outstanding results - 150% conversion rate improvement and 40% cart recovery. Ratan's attention to performance and user experience is remarkable.",
      metrics: "150% conversion improvement",
      projectType: "E-commerce Optimization"
    },
    {
      id: 6,
      name: "Lisa Williams",
      title: "Owner",
      company: "CWL Detailing",
      project: "Service Business Website",
      rating: 5,
      avatar: "/testimonials/lisa.jpg",
      testimonial: "Our service business website looks amazing and performs perfectly. The booking system integration has increased our appointments by 200% and the mobile experience is flawless.",
      metrics: "200% booking increase",
      projectType: "Service Website"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const currentClient = testimonials[currentTestimonial];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what clients say about working with me 
            and the results we've achieved together.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-700 mb-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            
            {/* Client Info */}
            <div className="text-center lg:text-left">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl mx-auto lg:mx-0 mb-4">
                {currentClient.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-bold mb-1">{currentClient.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{currentClient.title}</p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{currentClient.company}</p>
              
              {/* Rating */}
              <div className="flex justify-center lg:justify-start items-center mb-4">
                {[...Array(currentClient.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Project Info */}
              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4">
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">Project Type</div>
                <div className="font-semibold text-sm">{currentClient.projectType}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 mb-1">Key Result</div>
                <div className="font-semibold text-sm text-green-600 dark:text-green-400">{currentClient.metrics}</div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-2">
              <Quote className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-6" />
              <blockquote className="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-200 mb-6 italic">
                "{currentClient.testimonial}"
              </blockquote>
              
              {/* Navigation Arrows */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevTestimonial}
                  className="p-3 bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-full transition-all duration-300 group"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  {currentTestimonial + 1} of {testimonials.length}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-3 bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-full transition-all duration-300 group"
                >
                  <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Dots Navigation */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-slate-300 dark:bg-slate-600 hover:bg-blue-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${
                index === currentTestimonial 
                  ? 'border-blue-500 dark:border-blue-400' 
                  : 'border-slate-200 dark:border-slate-700'
              } cursor-pointer group`}
              onClick={() => goToTestimonial(index)}
            >
              {/* Client Avatar */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm mr-3">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{testimonial.name}</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-xs">{testimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Preview */}
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                "{testimonial.testimonial.substring(0, 120)}..."
              </p>

              {/* Project Type */}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                  {testimonial.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-slate-100 dark:bg-slate-800 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Trusted by Industry Leaders</h3>
            <p className="text-slate-600 dark:text-slate-300">
              From startups to enterprise companies, clients trust me to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5.0</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">95%</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">12+</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
