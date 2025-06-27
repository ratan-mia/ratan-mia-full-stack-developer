import Contact from '@/components/home/Contact';

export const metadata = {
  title: 'Tech Blog - Ratan Mia | Full Stack Development Insights',
  description: 'Read my latest articles on web development, React, Next.js, Laravel, and modern development practices. Learn from real-world development experiences.',
  keywords: 'web development blog, React tutorials, Next.js guides, Laravel tips, full stack development',
};

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices for 2025",
    excerpt: "Learn the latest patterns and practices for building maintainable React applications that scale with your business needs.",
    date: "2025-06-15",
    readTime: "8 min read",
    category: "React",
    image: "/blog/react-best-practices.jpg",
    slug: "scalable-react-applications-2025"
  },
  {
    id: 2,
    title: "Next.js App Router: Complete Migration Guide",
    excerpt: "Step-by-step guide to migrating from Pages Router to App Router in Next.js 14, with real-world examples and gotchas.",
    date: "2025-06-10",
    readTime: "12 min read",
    category: "Next.js",
    image: "/blog/nextjs-app-router.jpg",
    slug: "nextjs-app-router-migration-guide"
  },
  {
    id: 3,
    title: "Laravel 11 Features Every Developer Should Know",
    excerpt: "Explore the powerful new features in Laravel 11 and how they can improve your backend development workflow.",
    date: "2025-06-05",
    readTime: "6 min read",
    category: "Laravel",
    image: "/blog/laravel-11-features.jpg",
    slug: "laravel-11-essential-features"
  },
  {
    id: 4,
    title: "Optimizing Database Performance in Full Stack Applications",
    excerpt: "Database optimization techniques that every full stack developer should implement for better application performance.",
    date: "2025-05-28",
    readTime: "10 min read",
    category: "Database",
    image: "/blog/database-optimization.jpg",
    slug: "database-performance-optimization"
  },
  {
    id: 5,
    title: "Modern CSS Techniques for Better UI Development",
    excerpt: "Master the latest CSS features including Container Queries, CSS Grid subgrid, and modern layout techniques.",
    date: "2025-05-20",
    readTime: "7 min read",
    category: "CSS",
    image: "/blog/modern-css.jpg",
    slug: "modern-css-techniques-2025"
  },
  {
    id: 6,
    title: "API Design Best Practices: RESTful vs GraphQL",
    excerpt: "Compare RESTful and GraphQL API design patterns and learn when to use each approach in your projects.",
    date: "2025-05-15",
    readTime: "9 min read",
    category: "API Design",
    image: "/blog/api-design.jpg",
    slug: "api-design-rest-vs-graphql"
  }
];

const categories = ["All", "React", "Next.js", "Laravel", "Database", "CSS", "API Design"];

export default function BlogPage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            💡 Knowledge Sharing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
            Tech Blog & Insights
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Sharing my experiences, insights, and knowledge from building modern web applications. 
            Learn from real-world development challenges and solutions.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-500 transition-all duration-300 text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-slate-200 dark:border-slate-700"
              >
                {/* Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-3xl mb-2">📝</div>
                      <div className="text-sm opacity-90">{post.category}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="px-4 py-20 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8">
            Subscribe to get notified about new articles and development insights.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-slate-300 dark:border-slate-600 dark:bg-slate-700 focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
