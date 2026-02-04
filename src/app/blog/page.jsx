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
              💡 KNOWLEDGE SHARING
            </div>

            {/* Hero Title */}
            <h1 className="hero-title text-black mb-6">
              Tech Blog & Insights
            </h1>
            
            {/* Description */}
            <p className="body-text text-black/80 mb-12 max-w-3xl text-xl md:text-2xl">
              Sharing my experiences, insights, and knowledge from building modern web applications. 
              Learn from real-world development challenges and solutions.
            </p>

            {/* Filter Section */}
            <div className="flex flex-wrap gap-3 mb-8 max-w-3xl">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-black/15 text-black text-sm font-semibold rounded-lg hover:bg-black/25 transition-all"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-accent-lime/50 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 bg-accent-lime overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="text-black text-center">
                      <div className="text-4xl mb-2">📝</div>
                      <div className="text-sm font-bold">{post.category}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3 font-medium">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent-lime transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-2 bg-accent-lime/20 text-black rounded-lg text-xs font-bold">
                      {post.category}
                    </span>
                    
                    <button className="text-black font-bold text-sm flex items-center hover:gap-2 transition-all">
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
            <button className="px-8 py-4 bg-accent-lime text-black rounded-xl font-bold hover:shadow-lg transition-all hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="px-4 md:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-2 bg-accent-lime/20 text-black rounded-full text-sm font-bold mb-6">
            📬 NEWSLETTER
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="body-text text-gray-600 mb-8">
            Subscribe to get notified about new articles and development insights.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
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
      </section>

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
