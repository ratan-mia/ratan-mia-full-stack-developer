import Contact from '@/components/home/Contact';

export const metadata = {
  title: 'Developer Resources - Ratan Mia | Tools, Templates & Guides',
  description: 'Free developer resources, tools, templates, and guides for web development. React components, Laravel packages, and productivity tools.',
  keywords: 'developer resources, React templates, Laravel packages, web development tools, free resources',
};

const resourceCategories = [
  {
    title: "Development Tools",
    icon: "🛠️",
    items: [
      {
        name: "VS Code Extensions Pack",
        description: "My curated collection of essential VS Code extensions for web development",
        type: "Extension Pack",
        link: "#",
        tags: ["VS Code", "Extensions", "Productivity"]
      },
      {
        name: "React DevTools",
        description: "Essential browser extension for debugging React applications",
        type: "Browser Extension",
        link: "https://chrome.google.com/webstore/detail/react-developer-tools",
        tags: ["React", "Debugging", "Chrome"]
      },
      {
        name: "Laravel Debugbar",
        description: "Powerful debugging tool for Laravel applications",
        type: "Package",
        link: "https://github.com/barryvdh/laravel-debugbar",
        tags: ["Laravel", "Debugging", "PHP"]
      },
      {
        name: "Postman Collection",
        description: "API testing collection templates for common scenarios",
        type: "Template",
        link: "#",
        tags: ["API", "Testing", "Postman"]
      }
    ]
  },
  {
    title: "Code Templates",
    icon: "📝",
    items: [
      {
        name: "Next.js Starter Kit",
        description: "Complete Next.js starter with TypeScript, Tailwind, and essential configurations",
        type: "Starter Kit",
        link: "#",
        tags: ["Next.js", "TypeScript", "Tailwind"]
      },
      {
        name: "Laravel API Boilerplate",
        description: "RESTful API boilerplate with authentication and common features",
        type: "Boilerplate",
        link: "#",
        tags: ["Laravel", "API", "Authentication"]
      },
      {
        name: "React Component Library",
        description: "Reusable React components built with Tailwind CSS",
        type: "Component Library",
        link: "#",
        tags: ["React", "Components", "Tailwind"]
      },
      {
        name: "Database Schema Templates",
        description: "Common database schemas for e-commerce, blog, and SaaS applications",
        type: "Schema",
        link: "#",
        tags: ["Database", "MySQL", "Schema"]
      }
    ]
  },
  {
    title: "Design Resources",
    icon: "🎨",
    items: [
      {
        name: "UI Component Figma Kit",
        description: "Complete UI component library designed in Figma",
        type: "Figma Template",
        link: "#",
        tags: ["Figma", "UI", "Design System"]
      },
      {
        name: "Color Palette Generator",
        description: "Tool to generate cohesive color palettes for web projects",
        type: "Tool",
        link: "https://coolors.co",
        tags: ["Colors", "Design", "Palette"]
      },
      {
        name: "Icon Library",
        description: "Curated collection of free icons for web development",
        type: "Icon Set",
        link: "https://heroicons.com",
        tags: ["Icons", "SVG", "UI"]
      },
      {
        name: "Typography Scale",
        description: "Perfect typography scale calculator for web projects",
        type: "Tool",
        link: "https://type-scale.com",
        tags: ["Typography", "CSS", "Design"]
      }
    ]
  },
  {
    title: "Learning Resources",
    icon: "📚",
    items: [
      {
        name: "JavaScript Fundamentals",
        description: "Comprehensive guide to modern JavaScript concepts and best practices",
        type: "Guide",
        link: "#",
        tags: ["JavaScript", "Tutorial", "Fundamentals"]
      },
      {
        name: "React Best Practices",
        description: "In-depth guide to React patterns and performance optimization",
        type: "Guide",
        link: "#",
        tags: ["React", "Best Practices", "Performance"]
      },
      {
        name: "Laravel Mastery Course",
        description: "Complete Laravel course from basics to advanced topics",
        type: "Course",
        link: "#",
        tags: ["Laravel", "PHP", "Backend"]
      },
      {
        name: "Full Stack Roadmap",
        description: "Complete roadmap for becoming a full stack developer",
        type: "Roadmap",
        link: "#",
        tags: ["Career", "Roadmap", "Full Stack"]
      }
    ]
  },
  {
    title: "Productivity Tools",
    icon: "⚡",
    items: [
      {
        name: "Project Planning Template",
        description: "Notion template for planning and tracking development projects",
        type: "Notion Template",
        link: "#",
        tags: ["Notion", "Planning", "Project Management"]
      },
      {
        name: "Time Tracking Dashboard",
        description: "Simple time tracking solution for freelance developers",
        type: "Tool",
        link: "#",
        tags: ["Time Tracking", "Freelance", "Productivity"]
      },
      {
        name: "Code Review Checklist",
        description: "Comprehensive checklist for conducting effective code reviews",
        type: "Checklist",
        link: "#",
        tags: ["Code Review", "Quality", "Checklist"]
      },
      {
        name: "Client Communication Kit",
        description: "Email templates and guides for professional client communication",
        type: "Template Kit",
        link: "#",
        tags: ["Communication", "Client", "Templates"]
      }
    ]
  },
  {
    title: "Deployment & DevOps",
    icon: "🚀",
    items: [
      {
        name: "Docker Compose Templates",
        description: "Ready-to-use Docker configurations for common development stacks",
        type: "Docker Templates",
        link: "#",
        tags: ["Docker", "DevOps", "Development"]
      },
      {
        name: "GitHub Actions Workflows",
        description: "CI/CD workflows for automated testing and deployment",
        type: "Workflow Templates",
        link: "#",
        tags: ["GitHub", "CI/CD", "Automation"]
      },
      {
        name: "AWS Deployment Guide",
        description: "Step-by-step guide for deploying applications on AWS",
        type: "Guide",
        link: "#",
        tags: ["AWS", "Deployment", "Cloud"]
      },
      {
        name: "SSL Configuration Helper",
        description: "Tool to generate SSL configurations for various web servers",
        type: "Tool",
        link: "#",
        tags: ["SSL", "Security", "Configuration"]
      }
    ]
  }
];

const featuredResources = [
  {
    title: "Ultimate Web Development Toolkit",
    description: "Everything you need to start building modern web applications",
    items: ["Next.js Starter", "Component Library", "API Boilerplate", "Deployment Scripts"],
    downloads: "2.5K",
    rating: "4.9",
    image: "🎯"
  },
  {
    title: "React Performance Optimization Guide",
    description: "Advanced techniques to make your React apps lightning fast",
    items: ["Performance Patterns", "Optimization Techniques", "Real Examples", "Benchmarks"],
    downloads: "1.8K",
    rating: "4.8",
    image: "⚡"
  },
  {
    title: "Full Stack Project Starter Pack",
    description: "Complete setup for full stack applications with best practices",
    items: ["Frontend Setup", "Backend API", "Database Schema", "Deployment Config"],
    downloads: "3.1K",
    rating: "4.9",
    image: "🚀"
  }
];

export default function ResourcesPage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            🎁 Free Resources
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
            Developer Resources
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Free tools, templates, and guides to accelerate your web development journey. 
            Everything I use and recommend for building modern applications.
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group"
              >
                <div className="text-6xl mb-4 text-center">{resource.image}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {resource.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {resource.items.map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="text-slate-600 dark:text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm font-medium ml-1">{resource.rating}</span>
                  </div>
                  <div className="text-sm text-slate-500">
                    {resource.downloads} downloads
                  </div>
                </div>

                <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <span className="text-4xl mr-4">{category.icon}</span>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-slate-800 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.name}
                        </h3>
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                          {item.type}
                        </span>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-lg transition-all duration-300 text-sm font-medium">
                        {item.link.startsWith('http') ? 'Visit Resource' : 'Download'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 py-20 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get New Resources First</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
            Subscribe to get notified when I release new tools, templates, and resources.
          </p>
          <div className="max-w-md mx-auto mb-8">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            No spam, unsubscribe at any time. I respect your privacy.
          </p>
        </div>
      </section>

      {/* Contribution Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contribute to the Community</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg">
            Have a useful resource to share? I'm always looking for great tools and templates to feature.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
              Submit Resource
            </button>
            <button className="px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors font-medium">
              Suggest Improvement
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
