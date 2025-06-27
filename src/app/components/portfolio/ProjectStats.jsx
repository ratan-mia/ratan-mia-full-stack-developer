const ProjectStats = () => {
  const stats = [
    {
      number: "50+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "35+",
      label: "Happy Clients",
      description: "Satisfied clients from startups to enterprise companies",
      icon: "😊",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "5+",
      label: "Years Experience",
      description: "Years of professional web development experience",
      icon: "⏰",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "100%",
      label: "Success Rate",
      description: "All projects delivered on time and within budget",
      icon: "🎯",
      color: "from-orange-500 to-red-500"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Continuous support and maintenance for all projects",
      icon: "🛠️",
      color: "from-indigo-500 to-purple-500"
    },
    {
      number: "95%",
      label: "Client Retention",
      description: "Clients who come back for additional projects",
      icon: "🔄",
      color: "from-teal-500 to-green-500"
    }
  ];

  const achievements = [
    {
      title: "Top Rated Developer",
      platform: "Upwork",
      description: "Maintained 5-star rating with 100% job success score",
      year: "2023",
      icon: "⭐"
    },
    {
      title: "Featured Project",
      platform: "Awwwards",
      description: "E-commerce platform recognized for outstanding design",
      year: "2023",
      icon: "🏆"
    },
    {
      title: "Community Contributor",
      platform: "GitHub",
      description: "Active contributor to open source projects",
      year: "2022-2024",
      icon: "🌟"
    },
    {
      title: "Speaker",
      platform: "Tech Conference",
      description: "Spoke about modern web development practices",
      year: "2023",
      icon: "🎤"
    }
  ];

  const technologies = [
    { name: "React", projects: 35, percentage: 70 },
    { name: "Laravel", projects: 28, percentage: 56 },
    { name: "Next.js", projects: 25, percentage: 50 },
    { name: "MySQL", projects: 30, percentage: 60 },
    { name: "Tailwind CSS", projects: 32, percentage: 64 },
    { name: "Node.js", projects: 20, percentage: 40 }
  ];

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Statistics</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Numbers that showcase my experience, dedication, and the impact of my work in the web development industry.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold mb-1 bg-gradient-to-r bg-clip-text text-transparent from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400">
                    {stat.number}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{stat.label}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Usage */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 mb-16 shadow-lg border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold mb-6 text-center">Most Used Technologies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{tech.name}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {tech.projects} projects
                  </span>
                </div>
                <div className="relative">
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${tech.percentage}%` }}
                    />
                  </div>
                  <span className="absolute right-0 top-4 text-xs text-slate-500 dark:text-slate-400">
                    {tech.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">Recent Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold">{achievement.title}</h4>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {achievement.platform}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Join the growing list of satisfied clients who have transformed their ideas into successful web applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
              Start Your Project
            </button>
            <button className="px-8 py-3 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 font-medium">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;
