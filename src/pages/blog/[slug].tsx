import { Helmet } from '@dr.pogodin/react-helmet';
import { Link, useParams, useNavigate } from "react-router";
import { ArrowLeft, Clock, User, Calendar, Tag, ArrowRight, BookOpen } from 'lucide-react';
import { useEffect } from 'react';
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

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blog_posts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/blogs', { replace: true });
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  // Get related articles (same category, excluding current)
  const relatedPosts = blog_posts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${site}/blogs/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    image: `${site}/airo-assets/images/blogs/default-blog-image`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author
    },
    publisher: {
      '@id': `${site}/#organization`
    }
  };

  return <>
    <Helmet>
      <title>{post.title} | Aptech Learning Whitefield Blog</title>
      <meta name="description" content={post.excerpt} />
      <link rel="canonical" href={`${site}/blogs/${post.slug}`} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:url" content={`${site}/blogs/${post.slug}`} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={`${site}/airo-assets/images/blogs/default-blog-image`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${site}/airo-assets/images/blogs/default-blog-image`} />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={post.excerpt} />
      <meta name="robots" content="index, follow" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>

    <main>
      {/* ── Back Button ─────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* ── Article Header ────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6 flex flex-wrap gap-3 items-center">
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${categoryColors[post.category] ?? 'bg-slate-100 text-slate-600'}`}>
              {post.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Article Content ─────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
            <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="font-semibold text-primary mb-2">Article Overview</p>
              <p>{post.excerpt}</p>
            </div>

            <div className="space-y-6 text-slate-600">
              <p>
                This article from Aptech Learning Whitefield covers essential insights about <strong>{post.category}</strong>. 
                Whether you're a student looking to start your career, a working professional aiming to upskill, or someone 
                curious about the IT industry, this guide provides practical knowledge and actionable steps.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Takeaways</h2>
              <ul className="space-y-3 list-disc list-inside">
                <li>Understanding the current market demand for {post.category} professionals</li>
                <li>Essential skills and certifications to build a successful career</li>
                <li>Real-world applications and job opportunities in Bangalore and beyond</li>
                <li>How structured training accelerates your career growth</li>
                <li>Why hands-on learning is crucial in the IT industry</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why This Matters</h2>
              <p>
                The IT industry is evolving rapidly, and staying updated with trends is essential for career success. 
                At Aptech Learning Whitefield, we ensure our curriculum aligns with industry requirements, helping you 
                build relevant skills that employers actually look for.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Next Steps</h2>
              <p>
                Ready to take action? Our comprehensive training programs in {post.category} are designed to equip you 
                with the skills and confidence needed to excel in this field. Whether you're starting from scratch or 
                looking to advance your expertise, we have the right course for you.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mt-12 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Ready to Master {post.category}?
              </h3>
              <p className="text-slate-600 mb-6">
                Join hundreds of students at Aptech Learning Whitefield who are building successful IT careers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/courses" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Explore Our Courses <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-200 text-slate-900 font-semibold px-6 py-3 rounded-lg hover:bg-slate-300 transition-colors">
                  Get Free Counselling
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Articles ─────────────────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="py-12 md:py-16 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
                Related Articles
              </h2>
              <p className="text-slate-600">
                Explore more {post.category} insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.id}
                  to={`/blogs/${relPost.slug}`}
                  className="group bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-blue-900/30 flex items-center justify-center group-hover:from-primary/30 group-hover:to-blue-900/40 transition-all">
                    <BookOpen size={32} className="text-primary/40 group-hover:text-primary/60 transition-colors" />
                  </div>
                  <div className="p-5">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[relPost.category] ?? 'bg-slate-100 text-slate-600'}`}>
                      {relPost.category}
                    </span>
                    <h3 className="font-bold text-slate-900 mt-3 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {relPost.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                      {relPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <Clock size={12} />
                      {relPost.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA Section ──────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Transform Your IT Career Today
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Don't just read about IT careers — build one with our industry-ready training programs at Aptech Learning Whitefield, Bangalore.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/courses" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all hover:shadow-lg">
              Start Your Course <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-lg border-2 border-white hover:bg-blue-700 transition-all">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  </>;
}
