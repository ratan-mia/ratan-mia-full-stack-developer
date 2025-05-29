import { motion } from 'framer-motion';

const Experience = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "Kawasaki Bangladesh",
      period: "September 2018 – Present",
      achievements: [
        "Led design and development of dynamic web applications and APIs",
        "Built comprehensive Car Parts E-commerce platform with 200% sales increase",
        "Developed Chery Bangladesh website with 97% speed optimization",
        "Managed deployment using Docker, Digital Ocean, and Google Cloud"
      ]
    },
    {
      title: "IT Manager",
      company: "Continental Motors",
      period: "October 2018 – Present",
      achievements: [
        "Strategically managed IT operations and budget optimization",
        "Reduced operational costs by 40% through strategic vendor selection",
        "Implemented real-time attendance system with automated payroll",
        "Maintained server infrastructure including Windows Server and VPS"
      ]
    },
    {
      title: "Sr. Software Developer",
      company: "Bengal Group of Industries",
      period: "January 2018 – September 2018",
      achievements: [
        "Led team of 15 developers with 25% client satisfaction increase",
        "Developed scalable Laravel-based e-commerce solutions",
        "Created Marlax Technologies with WHMCS integration",
        "Managed end-to-end project lifecycle using Agile methodologies"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl text-center mb-16 text-slate-800 font-bold"
        >
          Professional Experience
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 
                  ? 'md:pr-1/2 md:text-right' 
                  : 'md:pl-1/2 md:ml-8'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-4 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-md hidden md:block z-10"></div>
              
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-2">
                  {exp.title}
                </h3>
                <h4 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
                  {exp.company}
                </h4>
                <p className="text-slate-600 text-sm md:text-base mb-4 font-medium">
                  {exp.period}
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills & Certifications */}
        <motion.div 
          className="mt-16 bg-white p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-blue-600 mb-2">Education</h4>
              <p className="text-slate-600 mb-1">Bachelor of Arts (English)</p>
              <p className="text-slate-500 text-sm">University of Dhaka | 2011-2017</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-blue-600 mb-2">Key Certifications</h4>
              <ul className="text-slate-600 text-sm space-y-1">
                <li>• Complete React.js Course - Advanced (Udemy)</li>
                <li>• Modern JavaScript for React JS (Udemy)</li>
                <li>• Advanced PHP: Debugging (LinkedIn)</li>
                <li>• Node.js and Express Development (IBM)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;