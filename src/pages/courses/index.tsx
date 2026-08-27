import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { useState } from 'react';
import { Clock, ArrowRight, CheckCircle, Cpu, Zap, BarChart3, TrendingUp, Code, Globe, Cloud, Monitor, BookOpen, Award, Users } from 'lucide-react';
import { courses } from 'virtual:content';
const courseIcons: Record<string, React.ReactNode> = {
  'ai-machine-learning': <Cpu size={28} />,
  'generative-ai': <Zap size={28} />,
  'data-science': <BarChart3 size={28} />,
  'data-analytics-power-bi': <TrendingUp size={28} />,
  'python': <Code size={28} />,
  // 'cybersecurity': <Shield size={28} />,
  'full-stack': <Globe size={28} />,
  'cloud-computing': <Cloud size={28} />,
  'microsoft-technologies': <Monitor size={28} />,
};
const colorMap: Record<string, {
  card: string;
  icon: string;
  badge: string;
  btn: string;
}> = {
  blue: {
    card: 'border-blue-100 hover:border-blue-300 hover:shadow-blue-100',
    icon: 'bg-blue-100 text-blue-600',
    badge: 'bg-blue-50 text-blue-700',
    btn: 'bg-blue-600 hover:bg-blue-700'
  },
  purple: {
    card: 'border-purple-100 hover:border-purple-300 hover:shadow-purple-100',
    icon: 'bg-purple-100 text-purple-600',
    badge: 'bg-purple-50 text-purple-700',
    btn: 'bg-purple-600 hover:bg-purple-700'
  },
  green: {
    card: 'border-green-100 hover:border-green-300 hover:shadow-green-100',
    icon: 'bg-green-100 text-green-600',
    badge: 'bg-green-50 text-green-700',
    btn: 'bg-green-600 hover:bg-green-700'
  },
  orange: {
    card: 'border-orange-100 hover:border-orange-300 hover:shadow-orange-100',
    icon: 'bg-orange-100 text-orange-600',
    badge: 'bg-orange-50 text-orange-700',
    btn: 'bg-orange-600 hover:bg-orange-700'
  },
  yellow: {
    card: 'border-yellow-100 hover:border-yellow-300 hover:shadow-yellow-100',
    icon: 'bg-yellow-100 text-yellow-600',
    badge: 'bg-yellow-50 text-yellow-700',
    btn: 'bg-yellow-500 hover:bg-yellow-600'
  },
  red: {
    card: 'border-red-100 hover:border-red-300 hover:shadow-red-100',
    icon: 'bg-red-100 text-red-600',
    badge: 'bg-red-50 text-red-700',
    btn: 'bg-red-600 hover:bg-red-700'
  },
  teal: {
    card: 'border-teal-100 hover:border-teal-300 hover:shadow-teal-100',
    icon: 'bg-teal-100 text-teal-600',
    badge: 'bg-teal-50 text-teal-700',
    btn: 'bg-teal-600 hover:bg-teal-700'
  },
  sky: {
    card: 'border-sky-100 hover:border-sky-300 hover:shadow-sky-100',
    icon: 'bg-sky-100 text-sky-600',
    badge: 'bg-sky-50 text-sky-700',
    btn: 'bg-sky-600 hover:bg-sky-700'
  },
  indigo: {
    card: 'border-indigo-100 hover:border-indigo-300 hover:shadow-indigo-100',
    icon: 'bg-indigo-100 text-indigo-600',
    badge: 'bg-indigo-50 text-indigo-700',
    btn: 'bg-indigo-600 hover:bg-indigo-700'
  },
  pink: {
    card: 'border-pink-100 hover:border-pink-300 hover:shadow-pink-100',
    icon: 'bg-pink-100 text-pink-600',
    badge: 'bg-pink-50 text-pink-700',
    btn: 'bg-pink-600 hover:bg-pink-700'
  }
};

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('All Courses');
  const site = 'https://www.cheekiratech.com';
  const availableCourses = courses.items.filter((course) => !['cloud-computing', 'microsoft-technologies', 'cybersecurity', 'digital-marketing'].includes(course.id));
  return <>
      <Helmet>
        <title>IT Courses in Whitefield Bangalore | Aptech Learning Whitefield</title>
        <meta name="description" content="Explore 10+ industry-ready IT courses at Aptech Learning Whitefield — AI, Machine Learning, Data Science, Python, Full Stack Development, Cloud Computing and more. Classroom & online batches available." />
        <link rel="canonical" href={`${site}/courses`} />
        <meta property="og:title" content="IT Courses in Whitefield Bangalore | Aptech Learning Whitefield" />
        <meta property="og:description" content="10+ industry-ready IT courses in Whitefield, Bangalore. AI, Data Science, Python, Full Stack, Cloud Computing and more." />
        <meta property="og:url" content={`${site}/courses`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'IT Courses at Aptech Learning Whitefield',
          url: `${site}/courses`,
          numberOfItems: availableCourses.length,
          itemListElement: availableCourses.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.name,
            url: `${site}/courses/${c.id}`
          }))
        })}</script>
      </Helmet>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0F2347 50%, #1a3a6b 100%)'
      }} aria-label="Courses hero">
          <div className="absolute inset-0 opacity-5" style={{
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
                <span className="text-white/90 text-xs font-medium">{courses.hero.badge}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">{courses.hero.title}</h1>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">{courses.hero.subtitle}</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {[{
                icon: <Users size={16} />,
                text: '500+ Students Trained'
              }, {
                icon: <Award size={16} />,
                text: 'Aptech Certified Programs'
              }, {
                icon: <CheckCircle size={16} />,
                text: '95% Placement Rate'
              }].map((item, i) => <div key={i} className="flex items-center gap-2 text-blue-200">
                    <span className="text-blue-400">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="bg-white border-b border-slate-100 sticky top-[80px] z-30 shadow-sm" aria-label="Course filters">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
              {courses.filters.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeFilter === filter ? 'bg-primary text-white shadow-md shadow-blue-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                  {filter}
                </button>)}
            </div>
          </div>
        </section>

        {/* Course grid */}
        <section className="py-14 bg-[#F8FAFC]" aria-labelledby="courses-list-heading">
          <div className="container mx-auto px-4">
            <h2 id="courses-list-heading" className="sr-only">Course listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableCourses.map((course, i) => {
              const hidden = activeFilter !== 'All Courses' && course.category !== activeFilter;
              const c = colorMap[course.color] ?? colorMap.blue;
              return <motion.div key={course.id} initial={{
                opacity: 0,
                y: 24
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: i % 6 * 0.07,
                ease: 'easeOut' as const
              }} whileHover={{
                y: -4,
                transition: {
                  duration: 0.2
                }
              }} className={`bg-white border rounded-2xl overflow-hidden transition-all hover:shadow-xl ${c.card} ${hidden ? 'hidden' : ''}`}>
                    {/* Card top */}
                    <div className="p-6 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${c.icon}`}>
                          {courseIcons[course.id]}
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          {course.popular && <span className="bg-primary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">Popular</span>}
                          <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${c.badge}`}>{course.category}</span>
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 mb-1 leading-snug">{course.name}</h2>
                      <p className="text-slate-500 text-sm mb-4">{course.tagline}</p>

                      {/* Meta row */}
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg">
                          <Clock size={12} className="text-slate-400" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg">
                          <BookOpen size={12} className="text-slate-400" />
                          {course.level}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg">
                          <Monitor size={12} className="text-slate-400" />
                          {course.mode}
                        </span>
                      </div>

                      {/* Skills preview */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {course.skills.slice(0, 5).map((skill, si) => <span key={si} className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-md">{skill}</span>)}
                        {course.skills.length > 5 && <span className="bg-slate-100 text-slate-500 text-[11px] px-2 py-0.5 rounded-md">+{course.skills.length - 5} more</span>}
                      </div>

                      {/* Careers preview */}
                      <div className="mb-5">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Career Paths</p>
                        <div className="flex flex-wrap gap-1.5">
                          {course.careers.slice(0, 3).map((career, ci) => <span key={ci} className="text-xs text-slate-600 flex items-center gap-1">
                              <span className="w-1 h-1 rounded-full bg-primary inline-block"></span>
                              {career}
                            </span>)}
                        </div>
                      </div>
                    </div>

                    {/* Card footer */}
                    <div className="px-6 pb-6 flex gap-2">
                      <Link to={`/courses/${course.id}`} className={`flex-1 flex items-center justify-center gap-1.5 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors ${c.btn}`}>
                        View Details <ArrowRight size={14} />
                      </Link>
                      <Link to="/contact" className="px-4 py-2.5 border border-slate-200 text-slate-600 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-colors">
                        Enroll
                      </Link>
                    </div>
                  </motion.div>;
            })}
            </div>

            {availableCourses.every(c => activeFilter !== 'All Courses' && c.category !== activeFilter) && <div className="text-center py-20 text-slate-400">No courses found in this category.</div>}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #1a3a6b 100%)'
      }} aria-label="Enroll CTA">
          <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            ease: 'easeOut' as const
          }}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Not sure which course is right for you?</h2>
              <p className="text-blue-200 mb-8 max-w-xl mx-auto">Book a free career counselling session and our experts will guide you to the perfect program based on your background and goals.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-primary text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
                  <BookOpen size={18} /> Book Free Counselling
                </Link>
                <a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-green-600 transition-all flex items-center gap-2">
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>;
}
