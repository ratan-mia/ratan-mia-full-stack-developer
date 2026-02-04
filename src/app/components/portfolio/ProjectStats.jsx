const ProjectStats = () => {
  const stats = [
    {
      number: "15+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "12+",
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
      number: "97%",
      label: "Performance Score",
      description: "Average PageSpeed Insights score across all projects",
      icon: "⚡",
      color: "from-teal-500 to-green-500"
    }
  ];

  const achievements = [
    {
      title: "Best Performance Award",
      platform: "Client Recognition",
      description: "Achieved 97% PageSpeed score for Chery Bangladesh automotive website",
      year: "2023",
      icon: "🏆"
    },
    {
      title: "E-commerce Excellence",
      platform: "Industry Recognition",
      description: "ELF International e-commerce platform achieved 150% conversion rate increase",
      year: "2024",
      icon: "⭐"
    },
    {
      title: "AI Innovation",
      platform: "Tech Community",
      description: "Revolutionary AI chatbot integration with OpenAI APIs for healthcare",
      year: "2024",
      icon: "🤖"
    },
    {
      title: "CRM Integration Expert",
      platform: "Technical Excellence",
      description: "Seamless Zoho CRM integration for Asian Petroleum business automation",
      year: "2024",
      icon: "🎤"
    }
  ];

  const technologies = [
    { name: "Next.js", projects: 8, percentage: 53 },
    { name: "React.js", projects: 12, percentage: 80 },
    { name: "Laravel", projects: 6, percentage: 40 },
    { name: "Tailwind CSS", projects: 10, percentage: 67 },
    { name: "Node.js", projects: 5, percentage: 33 },
    { name: "WordPress", projects: 4, percentage: 27 }
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
            📊 STATISTICS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Statistics</h2>
          <p className="body-text text-gray-600 max-w-2xl mx-auto">
            Numbers that showcase my experience, dedication, and the impact of my work in the web development industry.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-accent-lime group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-accent-lime rounded-2xl flex items-center justify-center text-black text-2xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {stat.icon}
                </div>
                <div className="flex-1">
                  <div className="text-4xl font-extrabold mb-2">
                    {stat.number}
                  </div>
                  <h3 className="font-extrabold text-lg mb-2">{stat.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Usage */}
        <div className="bg-gray-50 rounded-3xl p-10 mb-16 shadow-lg border-2 border-gray-100">
          <h3 className="text-3xl font-extrabold mb-8 text-center">Most Used Technologies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-lg">{tech.name}</span>
                  <span className="text-sm font-bold text-black px-3 py-1 bg-accent-lime/20 rounded-full">
                    {tech.projects} projects
                  </span>
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full bg-accent-lime rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${tech.percentage}%` }}
                    />
                  </div>
                  <span className="absolute right-0 top-5 text-xs font-bold text-gray-600">
                    {tech.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-accent-lime rounded-3xl p-10">
          <h3 className="text-3xl font-extrabold mb-10 text-center">Recent Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-extrabold">{achievement.title}</h4>
                      <span className="text-xs bg-black text-accent-lime px-3 py-1 rounded-full font-bold">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-sm font-bold mb-2 text-black/70">
                      {achievement.platform}
                    </p>
                    <p className="text-gray-600 text-sm">
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
          <h3 className="text-3xl font-extrabold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-medium">
            Join the growing list of satisfied clients who have transformed their ideas into successful web applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-black text-accent-lime rounded-xl hover:shadow-xl transition-all duration-300 font-extrabold hover:scale-105">
              Start Your Project
            </button>
            <button className="px-10 py-4 border-2 border-black text-black rounded-xl hover:bg-black hover:text-white transition-all duration-300 font-extrabold hover:scale-105">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;
