import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { BookOpen, Clock, ArrowRight, Tag } from 'lucide-react';
import { blog_posts } from 'virtual:content';
const site = 'https://www.cheekiratech.com';
const categoryColors: Record<string, string> = {
  'AI & Machine Learning': 'bg-blue-50 text-blue-700',
  'Data Science': 'bg-purple-50 text-purple-700',
  'Python': 'bg-green-50 text-green-700',
  'Cybersecurity': 'bg-red-50 text-red-700',
  'Generative AI': 'bg-orange-50 text-orange-700',
  'Cloud Computing': 'bg-sky-50 text-sky-700'
};
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${site}/blogs#blog`,
  name: 'Aptech Learning Whitefield Blog',
  url: `${site}/blogs`,
  description: 'IT career guides and tech tutorials from Aptech Learning Whitefield, Bangalore',
  publisher: {
    '@id': `${site}/#organization`
  }
};
export default function BlogPage() {
  return <>
      <Helmet>
        <title>IT Training Blog | AI, Data Science, Python Tips | Aptech Learning Whitefield</title>
        <meta name="description" content="Expert articles on AI, Machine Learning, Data Science, Python, Cybersecurity, and IT careers in Bangalore. Learn from Aptech Learning Whitefield's training experts." />
        <link rel="canonical" href={`${site}/blogs`} />
        <meta property="og:title" content="IT Training Blog | Aptech Learning Whitefield Bangalore" />
        <meta property="og:description" content="Career guides, tech tutorials, and industry insights on AI, Data Science, Python, Cybersecurity, and Cloud Computing from Aptech Learning Whitefield." />
        <meta property="og:url" content={`${site}/blogs`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${site}/assets/cheekira-logo.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${site}/assets/cheekira-logo.jpg`} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-14 md:py-20" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0F2347 55%, #1a3a6b 100%)'
      }} aria-label="Blog hero">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            ease: 'easeOut' as const
          }}>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
                <BookOpen size={14} className="text-blue-300" />
                <span className="text-white/90 text-xs font-medium">Blog &amp; Resources</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                IT Career Insights &amp; Tech Guides
              </h1>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                Expert articles on AI, Data Science, Python, Cybersecurity, and IT careers — written by Aptech Learning Whitefield's training team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Featured Articles ─────────────────────────────────────────────── */}
        <section className="py-14 bg-white" aria-labelledby="featured-heading">
          <div className="container mx-auto px-4">
            <h2 id="featured-heading" className="text-2xl font-extrabold text-slate-900 mb-8">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blog_posts.map((post, i) => <motion.article key={post.id} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: i % 3 * 0.08,
              ease: 'easeOut' as const
            }} className={`bg-[#F8FAFC] border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group ${!post.featured ? 'hidden' : ''}`}>
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-blue-900/30 flex items-center justify-center">
                    <BookOpen size={40} className="text-primary/40" />
                  </div>
                  <div className="p-6">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-slate-100 text-slate-600'}`}>
                      {post.category}
                    </span>
                    <h3 className="font-bold text-slate-900 mt-3 mb-2 leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                      <Link to={`/blogs/${post.slug}`} className="text-primary text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                        Read More <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </motion.article>)}
            </div>
          </div>
        </section>

        {/* ── More Articles ─────────────────────────────────────────────────── */}
        <section className="py-14 bg-[#F8FAFC]" aria-labelledby="all-posts-heading">
          <div className="container mx-auto px-4">
            <h2 id="all-posts-heading" className="text-2xl font-extrabold text-slate-900 mb-8">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {blog_posts.map((post, i) => <motion.article key={post.id} initial={{
              opacity: 0,
              y: 16
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.35,
              delay: i % 2 * 0.07,
              ease: 'easeOut' as const
            }} className={`bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow group flex gap-5 ${post.featured ? 'hidden' : ''}`}>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen size={24} className="text-primary/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] ?? 'bg-slate-100 text-slate-600'}`}>
                      {post.category}
                    </span>
                    <h3 className="font-bold text-slate-900 mt-2 mb-1 leading-snug group-hover:text-primary transition-colors text-sm">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                      <Link to={`/blogs/${post.slug}`} className="text-primary text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                        Read <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.article>)}
            </div>
          </div>
        </section>

        {/* ── Explore by Topic ──────────────────────────────────────────────── */}
        <section className="py-14 bg-white" aria-labelledby="topics-heading">
          <div className="container mx-auto px-4 text-center">
            <h2 id="topics-heading" className="text-2xl font-extrabold text-slate-900 mb-3">
              Explore by Topic
            </h2>
            <p className="text-slate-500 mb-8">Browse articles by the technology you want to learn.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(categoryColors).map(([cat, cls]) => <span key={cat} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border border-transparent ${cls}`}>
                  <Tag size={13} />
                  {cat}
                </span>)}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-14 bg-[#F8FAFC]" aria-label="Blog CTA">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
              Ready to Start Your IT Career?
            </h2>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto">
              Reading is just the start. Take the next step with hands-on training at Aptech Learning Whitefield.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/courses" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200">
                <ArrowRight size={16} /> Explore Courses
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-50 transition-colors">
                Book Free Counselling
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>;
}
