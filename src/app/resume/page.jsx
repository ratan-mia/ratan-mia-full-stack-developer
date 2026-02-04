import Contact from '@/components/home/Contact';

export const metadata = {
  title: 'Resume - Ratan Mia | Full Stack Developer CV',
  description: 'Download the resume of Ratan Mia, experienced full stack developer specializing in React, Next.js, Laravel, and modern web technologies.',
  keywords: 'Ratan Mia resume, full stack developer CV, React developer resume, web developer CV',
};

const experience = [
  {
    position: "Senior Full Stack Developer",
    company: "Freelance / Contract",
    period: "2021 - Present",
    location: "Remote",
    responsibilities: [
      "Developed 50+ web applications using React, Next.js, and Laravel",
      "Led technical architecture decisions for enterprise-level projects",
      "Improved application performance by 60% through optimization techniques",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with clients globally to deliver custom solutions"
    ]
  },
  {
    position: "Full Stack Developer",
    company: "TechSolutions Inc.",
    period: "2019 - 2021",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Built and maintained multiple SaaS applications",
      "Implemented CI/CD pipelines reducing deployment time by 75%",
      "Designed RESTful APIs serving 100K+ daily requests",
      "Optimized database queries improving response time by 40%",
      "Worked in agile development environment with cross-functional teams"
    ]
  },
  {
    position: "Junior Web Developer",
    company: "Digital Innovations Ltd.",
    period: "2018 - 2019",
    location: "Dhaka, Bangladesh",
    responsibilities: [
      "Developed responsive websites using HTML, CSS, and JavaScript",
      "Assisted in WordPress theme development and customization",
      "Participated in client meetings and requirement gathering",
      "Maintained and updated existing web applications",
      "Learned modern frameworks and best practices"
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Dhaka",
    period: "2014 - 2018",
    location: "Dhaka, Bangladesh",
    details: "Graduated with distinction. Specialized in software engineering and web technologies."
  }
];

const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"],
  "Backend": ["Laravel", "Node.js", "Express.js", "PHP", "Python", "RESTful APIs", "GraphQL"],
  "Database": ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Database Design", "Query Optimization"],
  "DevOps": ["AWS", "Docker", "Git", "GitHub Actions", "Linux", "Nginx", "Apache"],
  "Tools": ["VS Code", "Figma", "Postman", "Webpack", "Vite", "npm/yarn", "Composer"]
};

const certifications = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    credential: "AWS-DEV-2023-001"
  },
  {
    name: "React Professional Certificate",
    issuer: "Meta",
    date: "2022",
    credential: "META-REACT-2022"
  },
  {
    name: "Laravel Certified Developer",
    issuer: "Laravel",
    date: "2022",
    credential: "LARAVEL-2022-045"
  }
];

const projects = [
  {
    name: "E-commerce Platform",
    tech: "Next.js, Laravel, MySQL",
    description: "Full-featured e-commerce platform with payment integration",
    metrics: "40% increase in conversion rate"
  },
  {
    name: "SaaS Analytics Dashboard",
    tech: "React, Node.js, PostgreSQL",
    description: "Real-time analytics dashboard for business intelligence",
    metrics: "95% user satisfaction score"
  },
  {
    name: "Real Estate Portal",
    tech: "Next.js, Laravel, MapBox",
    description: "Comprehensive property listing platform",
    metrics: "50K+ properties, 10K+ users"
  }
];

export default function ResumePage() {
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
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-32 w-full text-center">
            {/* Badge */}
            <div className="inline-block px-6 py-2 bg-black/15 text-black rounded-full text-sm font-bold mb-6">
              📄 PROFESSIONAL RESUME
            </div>

            {/* Hero Title */}
            <h1 className="hero-title text-black mb-6">
              Ratan Mia
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-black/90 mb-6">
              Senior Full Stack Developer
            </h2>
            
            {/* Description */}
            <p className="body-text text-black/80 mb-12 max-w-2xl mx-auto">
              Passionate full stack developer with 10+ years of experience building scalable web applications 
              using modern technologies like React, Next.js, and Laravel.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-black text-accent-lime rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </button>
              <button className="px-8 py-4 bg-white border-2 border-black text-black rounded-xl font-semibold hover:bg-black hover:text-white transition-all">
                Print Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-4 md:px-6 lg:px-8 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-10 h-10 rounded-xl bg-accent-lime flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">ratan.mia@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-10 h-10 rounded-xl bg-accent-lime flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-medium">+880 1751-010966</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-10 h-10 rounded-xl bg-accent-lime flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-medium">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Professional Summary */}
            <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <div className="w-2 h-8 bg-accent-lime rounded-full"></div>
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Experienced Full Stack Developer with 10+ years of expertise in building scalable web applications. 
                Proficient in modern JavaScript frameworks, PHP, and cloud technologies. Proven track record of 
                delivering high-quality solutions that improve business efficiency and user experience. Strong 
                problem-solving skills and ability to work in fast-paced, collaborative environments.
              </p>
            </section>

            {/* Experience */}
            <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-accent-lime rounded-full"></div>
                Work Experience
              </h2>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-accent-lime pl-6">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{job.position}</h3>
                      <span className="px-3 py-1 bg-accent-lime/20 text-black text-sm font-bold rounded-lg">{job.period}</span>
                    </div>
                    <div className="flex flex-wrap justify-between items-center mb-3">
                      <h4 className="text-lg text-gray-700 font-semibold">{job.company}</h4>
                      <span className="text-sm text-gray-600 font-medium">{job.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-lime mt-2 flex-shrink-0"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-accent-lime rounded-full"></div>
                Education
              </h2>
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-accent-lime pl-6">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <span className="px-3 py-1 bg-accent-lime/20 text-black text-sm font-bold rounded-lg">{edu.period}</span>
                  </div>
                  <div className="flex flex-wrap justify-between items-center mb-3">
                    <h4 className="text-lg text-gray-700 font-semibold">{edu.institution}</h4>
                    <span className="text-sm text-gray-600 font-medium">{edu.location}</span>
                  </div>
                  <p className="text-gray-600">{edu.details}</p>
                </div>
              ))}
            </section>

            {/* Key Projects */}
            <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-accent-lime rounded-full"></div>
                Key Projects
              </h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-accent-lime/50 hover:shadow-lg transition-all">
                    <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                    <p className="text-sm text-black font-semibold mb-2 px-3 py-1 bg-accent-lime/20 rounded-lg inline-block">{project.tech}</p>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    <div className="text-sm font-bold text-black flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-lime"></div>
                      Result: {project.metrics}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            
            {/* Skills */}
            <section className="bg-accent-lime text-black rounded-3xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="font-bold mb-3 text-lg">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-black/15 text-black rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-accent-lime pl-4">
                    <h3 className="font-bold">{cert.name}</h3>
                    <p className="text-gray-600 text-sm font-medium">{cert.issuer}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500 font-medium">{cert.date}</span>
                      <span className="text-xs px-2 py-1 bg-accent-lime/20 text-black rounded font-bold">{cert.credential}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-6">Languages</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold">English</span>
                  <span className="text-sm px-3 py-1 bg-accent-lime/20 text-black rounded-lg font-semibold">Fluent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Bengali</span>
                  <span className="text-sm px-3 py-1 bg-accent-lime/20 text-black rounded-lg font-semibold">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Hindi</span>
                  <span className="text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded-lg font-semibold">Intermediate</span>
                </div>
              </div>
            </section>

            {/* References */}
            <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-4">References</h2>
              <p className="text-gray-600 text-center italic">
                Available upon request
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
