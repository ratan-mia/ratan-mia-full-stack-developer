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
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            📄 Professional Resume
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
            Ratan Mia
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6">
            Senior Full Stack Developer
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Passionate full stack developer with 5+ years of experience building scalable web applications 
            using modern technologies like React, Next.js, and Laravel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
            <button className="px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors font-medium">
              Print Resume
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>ratan.mia.dev@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+880 1234-567890</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Professional Summary */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Professional Summary</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications. 
                Proficient in modern JavaScript frameworks, PHP, and cloud technologies. Proven track record of 
                delivering high-quality solutions that improve business efficiency and user experience. Strong 
                problem-solving skills and ability to work in fast-paced, collaborative environments.
              </p>
            </section>

            {/* Experience */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Work Experience</h2>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{job.position}</h3>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{job.period}</span>
                    </div>
                    <div className="flex flex-wrap justify-between items-center mb-3">
                      <h4 className="text-lg text-slate-600 dark:text-slate-300">{job.company}</h4>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{job.location}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-6">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">{edu.period}</span>
                  </div>
                  <div className="flex flex-wrap justify-between items-center mb-3">
                    <h4 className="text-lg text-slate-600 dark:text-slate-300">{edu.institution}</h4>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{edu.location}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{edu.details}</p>
                </div>
              ))}
            </section>

            {/* Key Projects */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Key Projects</h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="border border-slate-200 dark:border-slate-600 rounded-lg p-4">
                    <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{project.tech}</p>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">{project.description}</p>
                    <div className="text-sm font-medium text-green-600 dark:text-green-400">
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
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Technical Skills</h2>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="font-bold mb-2 text-slate-700 dark:text-slate-300">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-xs"
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
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="font-bold">{cert.name}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">{cert.issuer}</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-slate-500">{cert.date}</span>
                      <span className="text-xs text-yellow-600 dark:text-yellow-400">{cert.credential}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">Languages</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">English</span>
                  <span className="text-sm text-slate-600 dark:text-slate-300">Fluent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Bengali</span>
                  <span className="text-sm text-slate-600 dark:text-slate-300">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Hindi</span>
                  <span className="text-sm text-slate-600 dark:text-slate-300">Intermediate</span>
                </div>
              </div>
            </section>

            {/* References */}
            <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">References</h2>
              <p className="text-slate-600 dark:text-slate-300 text-center italic">
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
