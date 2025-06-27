const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
      techs: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "HTML5/CSS3", level: 98, icon: "🌐" }
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      techs: [
        { name: "Laravel", level: 90, icon: "🎵" },
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "PHP", level: 90, icon: "🐘" },
        { name: "Express.js", level: 80, icon: "🚀" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "RESTful APIs", level: 95, icon: "🔌" }
      ]
    },
    {
      category: "Database",
      icon: "🗄️",
      color: "from-purple-500 to-pink-500",
      techs: [
        { name: "MySQL", level: 90, icon: "🐬" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Redis", level: 75, icon: "🔴" },
        { name: "SQLite", level: 85, icon: "💎" },
        { name: "Database Design", level: 90, icon: "📊" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      color: "from-orange-500 to-red-500",
      techs: [
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "Git/GitHub", level: 95, icon: "🔄" },
        { name: "Linux", level: 85, icon: "🐧" },
        { name: "Nginx", level: 80, icon: "🌍" },
        { name: "CI/CD", level: 75, icon: "🔄" }
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: "☁️"
    },
    {
      name: "Laravel Certified Developer",
      issuer: "Laravel",
      year: "2022",
      icon: "🎵"
    },
    {
      name: "React Professional Certificate",
      issuer: "Meta",
      year: "2022",
      icon: "⚛️"
    },
    {
      name: "Google Cloud Professional",
      issuer: "Google Cloud",
      year: "2023",
      icon: "🌐"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack & Expertise</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The technologies and tools I use to bring ideas to life. 
            From frontend frameworks to cloud infrastructure, I work with modern tech stacks.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technologies.map((category, index) => (
            <div
              key={category.category}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white text-xl mr-4`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{category.category}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {category.techs.length} technologies
                  </p>
                </div>
              </div>

              {/* Technology List */}
              <div className="space-y-4">
                {category.techs.map((tech) => (
                  <div key={tech.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-lg mr-2">{tech.icon}</span>
                        <span className="font-medium">{tech.name}</span>
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {tech.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Professional Certifications</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Validated expertise through industry-recognized certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-700 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h4 className="font-bold mb-2 text-sm">{cert.name}</h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs mb-2">{cert.issuer}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Development Philosophy */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Development Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="font-bold mb-2">Performance First</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Every application is optimized for speed, scalability, and efficiency from day one.
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🔧</div>
              <h4 className="font-bold mb-2">Clean Code</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Writing maintainable, readable code that follows industry best practices and standards.
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-bold mb-2">User-Centric</h4>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Focusing on user experience and business goals to deliver solutions that matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
