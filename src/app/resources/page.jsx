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
    <main className="bg-white text-black overflow-hidden">
      
      {/* Hero Section - Following Design Guidelines */}
      <section className="relative min-h-screen w-full overflow-hidden bg-accent-lime">
        {/* Decorative elements - desktop only */}
        <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
          <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-black/5 animate-pulse" />
          <div className="absolute bottom-40 left-20 w-24 h-24 rounded-2xl bg-black/5 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Main content */}
        <div className="relative z-20 min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-32 w-full">
            {/* Badge */}
            <div className="inline-block px-6 py-2 bg-black/15 text-black rounded-full text-sm font-bold mb-6">
              🎁 FREE RESOURCES
            </div>

            {/* Hero Title */}
            <h1 className="hero-title text-black mb-6">
              Developer Resources
            </h1>
            
            {/* Description */}
            <p className="body-text text-black/80 mb-12 max-w-3xl text-xl md:text-2xl">
              Free tools, templates, and guides to accelerate your web development journey. 
              Everything I use and recommend for building modern applications.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
              ⭐ FEATURED
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div
                key={index}
                className="bg-accent-lime text-black rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="text-6xl mb-4 text-center">{resource.image}</div>
                <h3 className="text-2xl font-bold mb-3">
                  {resource.title}
                </h3>
                <p className="text-black/80 mb-6">
                  {resource.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {resource.items.map((item, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-black/40 rounded-full mr-2"></div>
                      <span className="text-black/80 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-6 p-3 bg-black/10 rounded-xl">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">⭐</span>
                    <span className="text-sm font-bold">{resource.rating}</span>
                  </div>
                  <div className="text-sm font-bold text-black/70">
                    {resource.downloads} downloads
                  </div>
                </div>

                <button className="w-full px-6 py-4 bg-black text-accent-lime rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
                  Download Free
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="px-4 md:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-20">
            {resourceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <span className="text-5xl mr-4">{category.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-bold">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-accent-lime/50 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-lg group-hover:text-accent-lime transition-colors flex-1">
                          {item.name}
                        </h3>
                        <span className="px-3 py-1 bg-accent-lime/20 text-black rounded-lg text-xs font-bold flex-shrink-0 ml-2">
                          {item.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="w-full px-4 py-3 bg-black text-accent-lime rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105 text-sm">
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
      <section className="px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
            📬 NEWSLETTER
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get New Resources First</h2>
          <p className="body-text text-gray-600 mb-8">
            Subscribe to get notified when I release new tools, templates, and resources.
          </p>
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-accent-lime font-medium"
              />
              <button className="px-8 py-4 bg-black text-accent-lime rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">
            No spam, unsubscribe at any time. I respect your privacy.
          </p>
        </div>
      </section>

      {/* Contribution Section */}
      <section className="px-4 md:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contribute to the Community</h2>
          <p className="body-text text-gray-600 mb-8">
            Have a useful resource to share? I'm always looking for great tools and templates to feature.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-accent-lime text-black rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
              Submit Resource
            </button>
            <button className="px-8 py-4 bg-white border-2 border-black text-black rounded-xl font-semibold hover:bg-black hover:text-white transition-all">
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
