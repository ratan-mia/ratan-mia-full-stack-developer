import Contact from '@/components/home/Contact';
import TrainingCertificates from '@/components/home/TrainingCertificates';
import Skills from '@/components/home/Skills';

export const metadata = {
  title: 'About Ratan Mia - Full Stack Developer & Web Development Expert',
  description: 'Learn about Ratan Mia, a passionate full stack developer specializing in React, Next.js, Laravel, and modern web technologies. 5+ years of experience building scalable applications.',
  keywords: 'Ratan Mia, full stack developer, React developer, Next.js expert, Laravel developer, web development',
};

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 text-slate-900 dark:text-slate-100 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
                👋 Hello, I'm Ratan
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
                Crafting Digital Experiences with Code
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                I'm a passionate full stack developer with 5+ years of experience building scalable web applications. 
                I specialize in modern technologies like React, Next.js, and Laravel to create solutions that make a difference.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🚀</span>
                  <span className="font-medium">100+ Projects Delivered</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">🌍</span>
                  <span className="font-medium">Global Client Base</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-2">⚡</span>
                  <span className="font-medium">Performance Focused</span>
                </div>
              </div>
            </div>

            {/* Image/Avatar */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-8xl shadow-2xl">
                👨‍💻
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                ⚡
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-xl animate-pulse">
                🎯
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 py-20 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Journey</h2>
          
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">🌱 The Beginning</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                My journey into web development started during my computer science studies when I built my first website. 
                I was fascinated by how lines of code could create beautiful, interactive experiences that people around the world could use.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">🚀 Professional Growth</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Over the past 5+ years, I've had the privilege of working with startups, established businesses, and individual entrepreneurs. 
                Each project has taught me something new and reinforced my passion for creating solutions that truly matter.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">🎯 Current Focus</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Today, I focus on building modern, scalable applications using cutting-edge technologies. 
                I'm particularly passionate about performance optimization, user experience, and helping businesses achieve their digital goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Drives Me</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🎨
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Craftsmanship</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Every line of code matters. I believe in writing clean, maintainable code that stands the test of time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🤝
              </div>
              <h3 className="text-xl font-bold mb-3">Client Partnership</h3>
              <p className="text-slate-600 dark:text-slate-300">
                I don't just build applications; I partner with clients to understand their vision and bring it to life.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                📚
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Focus</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Fast, responsive applications aren't just nice to have—they're essential for user satisfaction and business success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3">Results Driven</h3>
              <p className="text-slate-600 dark:text-slate-300">
                I measure success by the impact my solutions have on users and businesses, not just by features delivered.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                🌍
              </div>
              <h3 className="text-xl font-bold mb-3">Global Perspective</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Working with clients worldwide has given me insights into different markets and user expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="px-4 py-20 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Fun Facts About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">☕</div>
              <h3 className="text-lg font-bold mb-2">Coffee Enthusiast</h3>
              <p className="text-slate-600 dark:text-slate-300">
                I probably consume way too much coffee while coding. My best debugging sessions happen with a perfect cup of coffee.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-lg font-bold mb-2">Night Owl</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Some of my most productive coding happens late at night when the world is quiet and I can focus deeply.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-lg font-bold mb-2">Gaming Break</h3>
              <p className="text-slate-600 dark:text-slate-300">
                When I need a mental break from coding, I enjoy playing strategy games—they keep my problem-solving skills sharp!
              </p>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-lg font-bold mb-2">Tech Reader</h3>
              <p className="text-slate-600 dark:text-slate-300">
                I'm always reading tech blogs, documentation, and staying updated with the latest in web development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Certifications */}
      <TrainingCertificates />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
