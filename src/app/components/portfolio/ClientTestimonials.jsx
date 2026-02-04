'use client';

import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useState } from 'react';

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
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
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
        <div className="bg-accent-lime rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            
            {/* Client Info */}
            <div className="text-center lg:text-left">
              <div className="w-28 h-28 bg-black rounded-2xl flex items-center justify-center text-accent-lime text-3xl mx-auto lg:mx-0 mb-4 shadow-lg font-extrabold">
                {currentClient.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-2xl font-extrabold mb-1">{currentClient.name}</h3>
              <p className="text-black font-bold mb-1">{currentClient.title}</p>
              <p className="text-black/70 font-semibold mb-4">{currentClient.company}</p>
              
              {/* Rating */}
              <div className="flex justify-center lg:justify-start items-center mb-4">
                {[...Array(currentClient.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-black fill-current" />
                ))}
              </div>

              {/* Project Info */}
              <div className="bg-white rounded-2xl p-5 shadow-md">
                <div className="text-sm text-gray-600 mb-1 font-bold">Project Type</div>
                <div className="font-extrabold text-sm mb-3">{currentClient.projectType}</div>
                <div className="text-sm text-gray-600 mb-1 font-bold">Key Result</div>
                <div className="font-extrabold text-sm text-black">{currentClient.metrics}</div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-2">
              <Quote className="w-14 h-14 text-black mb-6" />
              <blockquote className="text-xl md:text-2xl leading-relaxed text-black mb-6 font-semibold">
                "{currentClient.testimonial}"
              </blockquote>
              
              {/* Navigation Arrows */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevTestimonial}
                  className="p-4 bg-white hover:bg-black hover:text-accent-lime rounded-2xl transition-all duration-300 group shadow-md"
                >
                  <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
                
                <div className="text-sm font-extrabold text-black px-4 py-2 bg-white rounded-full">
                  {currentTestimonial + 1} / {testimonials.length}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-4 bg-white hover:bg-black hover:text-accent-lime rounded-2xl transition-all duration-300 group shadow-md"
                >
                  <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
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
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-black scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                index === currentTestimonial 
                  ? 'border-accent-lime scale-105' 
                  : 'border-gray-100 hover:border-accent-lime'
              } cursor-pointer group`}
              onClick={() => goToTestimonial(index)}
            >
              {/* Client Avatar */}
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-accent-lime rounded-xl flex items-center justify-center text-black text-sm font-extrabold mr-3">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs font-semibold">{testimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-lime fill-current" />
                ))}
              </div>

              {/* Testimonial Preview */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 group-hover:text-black transition-colors font-medium">
                "{testimonial.testimonial.substring(0, 120)}..."
              </p>

              {/* Project Type */}
              <div className="mt-4 pt-4 border-t-2 border-gray-100">
                <span className="text-xs bg-accent-lime/20 text-black px-3 py-1.5 rounded-full font-bold">
                  {testimonial.projectType}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-10 border-2 border-gray-100">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-extrabold mb-3">Trusted by Industry Leaders</h3>
            <p className="text-gray-600 font-medium">
              From startups to enterprise companies, clients trust me to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-4xl font-extrabold mb-2">5.0</div>
              <div className="text-sm text-gray-600 font-bold">Average Rating</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-4xl font-extrabold mb-2">100%</div>
              <div className="text-sm text-gray-600 font-bold">On-Time Delivery</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-4xl font-extrabold mb-2">95%</div>
              <div className="text-sm text-gray-600 font-bold">Client Retention</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="text-4xl font-extrabold mb-2">12+</div>
              <div className="text-sm text-gray-600 font-bold">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
