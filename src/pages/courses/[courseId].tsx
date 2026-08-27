import { Helmet } from '@dr.pogodin/react-helmet';
import { Link, useParams } from "react-router";
import { motion } from 'motion/react';
import { useState } from 'react';
import { Clock, ArrowRight, CheckCircle, ChevronDown, ChevronUp, Monitor, BookOpen, Award, Users, Briefcase, Phone, MessageCircle, Cpu, Zap, BarChart3, TrendingUp, Code, Globe, Cloud } from 'lucide-react';
import { courses } from 'virtual:content';
const courseIcons: Record<string, React.ReactNode> = {
  'ai-machine-learning': <Cpu size={32} />,
  'generative-ai': <Zap size={32} />,
  'data-science': <BarChart3 size={32} />,
  'data-analytics-power-bi': <TrendingUp size={32} />,
  'python': <Code size={32} />,
  'full-stack': <Globe size={32} />,
  'cloud-computing': <Cloud size={32} />,
  'microsoft-technologies': <Monitor size={32} />,
};
const colorMap: Record<string, {
  hero: string;
  icon: string;
  badge: string;
  accent: string;
}> = {
  blue: {
    hero: 'from-blue-900 to-blue-700',
    icon: 'bg-blue-100 text-blue-600',
    badge: 'bg-blue-100 text-blue-700',
    accent: 'text-blue-600'
  },
  purple: {
    hero: 'from-purple-900 to-purple-700',
    icon: 'bg-purple-100 text-purple-600',
    badge: 'bg-purple-100 text-purple-700',
    accent: 'text-purple-600'
  },
  green: {
    hero: 'from-green-900 to-green-700',
    icon: 'bg-green-100 text-green-600',
    badge: 'bg-green-100 text-green-700',
    accent: 'text-green-600'
  },
  orange: {
    hero: 'from-orange-900 to-orange-700',
    icon: 'bg-orange-100 text-orange-600',
    badge: 'bg-orange-100 text-orange-700',
    accent: 'text-orange-600'
  },
  yellow: {
    hero: 'from-yellow-800 to-yellow-600',
    icon: 'bg-yellow-100 text-yellow-600',
    badge: 'bg-yellow-100 text-yellow-700',
    accent: 'text-yellow-600'
  },
  red: {
    hero: 'from-red-900 to-red-700',
    icon: 'bg-red-100 text-red-600',
    badge: 'bg-red-100 text-red-700',
    accent: 'text-red-600'
  },
  teal: {
    hero: 'from-teal-900 to-teal-700',
    icon: 'bg-teal-100 text-teal-600',
    badge: 'bg-teal-100 text-teal-700',
    accent: 'text-teal-600'
  },
  sky: {
    hero: 'from-sky-900 to-sky-700',
    icon: 'bg-sky-100 text-sky-600',
    badge: 'bg-sky-100 text-sky-700',
    accent: 'text-sky-600'
  },
  indigo: {
    hero: 'from-indigo-900 to-indigo-700',
    icon: 'bg-indigo-100 text-indigo-600',
    badge: 'bg-indigo-100 text-indigo-700',
    accent: 'text-indigo-600'
  },
  pink: {
    hero: 'from-pink-900 to-pink-700',
    icon: 'bg-pink-100 text-pink-600',
    badge: 'bg-pink-100 text-pink-700',
    accent: 'text-pink-600'
  }
};

// ─── Quick Enquiry Form ───────────────────────────────────────────────────────
function QuickEnquiry({
  courseId


}: {courseId: string;}) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [gotcha, setGotcha] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (gotcha) return;
    setStatus('loading');
    try {
      // Field mapping: only the message textarea goes in messages_attributes[0].body. All other fields must be added to conversation.data as { "Label": value } pairs.
      const res = await fetch('/api/contact/student-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          conversation: {
            messages_attributes: [{
              body: `Enquiry for course: ${courseId}`
            }],
            data: {
              __gd_contact_form_title: 'Course Enquiry',
              'Course ID': courseId,
              'Mobile': mobile
            }
          },
          user: {
            email,
            name
          }
        })
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };
  if (status === 'success') {
    return <div className="text-center py-6">
        <CheckCircle size={36} className="text-green-500 mx-auto mb-3" />
        <p className="font-bold text-slate-800">Enquiry Received!</p>
        <p className="text-slate-500 text-sm mt-1">We'll call you back within 24 hours.</p>
      </div>;
  }
  return <form onSubmit={handleSubmit} className="space-y-3">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{
      position: 'absolute',
      left: '-9999px'
    }} aria-hidden="true" value={gotcha} onChange={(e) => setGotcha(e.target.value)} />
      <div>
        <label htmlFor="qe-name" className="block text-xs font-medium text-slate-600 mb-1">Full Name *</label>
        <input id="qe-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="qe-mobile" className="block text-xs font-medium text-slate-600 mb-1">Mobile *</label>
        <input id="qe-mobile" type="tel" required value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+91 XXXXX XXXXX" />
      </div>
      <div>
        <label htmlFor="qe-email" className="block text-xs font-medium text-slate-600 mb-1">Email *</label>
        <input id="qe-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" />
      </div>
      <button type="submit" disabled={status === 'loading'} className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
        {status === 'loading' ? 'Submitting...' : <><BookOpen size={16} /> Enquire Now</>}
      </button>
      {status === 'error' && <p className="text-red-500 text-xs text-center">Something went wrong. Please call us directly.</p>}
    </form>;
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CourseDetailPage() {
  const {
    courseId
  } = useParams<{
    courseId: string;
  }>();
  const [openModule, setOpenModule] = useState<string | null>('m1');
  const site = 'https://www.cheekiratech.com';

  // Find course for SEO/meta only (not for rendering content)
  const metaCourse = courses.items.find((c) => c.id === courseId && !['cloud-computing', 'microsoft-technologies'].includes(c.id));
  if (!metaCourse) {
    return <main className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Course not found</h1>
          <Link to="/courses" className="text-primary hover:underline">Browse all courses</Link>
        </div>
      </main>;
  }
  const url = `${site}/courses/${courseId}`;
  return <>
      <Helmet>
        <title>{metaCourse.name} Course in Whitefield Bangalore | Aptech Learning</title>
        <meta name="description" content={`${metaCourse.name} course at Aptech Learning Whitefield. ${metaCourse.duration} program. ${metaCourse.overview.slice(0, 120)}...`} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${metaCourse.name} Course | Aptech Learning Whitefield`} />
        <meta property="og:description" content={metaCourse.overview.slice(0, 160)} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: metaCourse.name,
          description: metaCourse.overview,
          url,
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Aptech Learning Whitefield',
            url: site
          },
          educationalLevel: metaCourse.level
        })}</script>
      </Helmet>

      <main>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li className="text-slate-300">/</li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
              <li className="text-slate-300">/</li>
              <li className="text-slate-800 font-medium truncate max-w-[200px]">{metaCourse.name}</li>
            </ol>
          </div>
        </nav>

        {/* Render each course, show only the matching one */}
        {courses.items.filter((course) => !['cloud-computing', 'microsoft-technologies'].includes(course.id)).map((course) => {
        const c = colorMap[course.color] ?? colorMap.blue;
        return <div key={course.id} className={course.id !== courseId ? 'hidden' : ''}>

              {/* Hero */}
              <section className={`relative overflow-hidden py-14 md:py-20 bg-gradient-to-br ${c.hero}`} aria-label={`${course.name} hero`}>
                <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
                <div className="container mx-auto px-4 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                    <div className="lg:col-span-2">
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
                        <div className="flex items-center gap-3 mb-5">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${c.icon}`}>
                            {courseIcons[course.id]}
                          </div>
                          <div>
                            {course.popular && <span className="bg-primary text-white text-xs font-bold px-2.5 py-0.5 rounded-full block w-fit mb-1">Most Popular</span>}
                            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${c.badge}`}>{course.category}</span>
                          </div>
                        </div>
                        <h1 className="text-2xl font-extrabold text-white mb-2 leading-tight">{course.name}</h1>
                        <p className="text-white/70 text-lg mb-6">{course.tagline}</p>
                        <div className="flex flex-wrap gap-4 mb-6">
                          <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex items-center gap-2.5">
                            <Clock size={16} className="text-white/60" />
                            <div><div className="text-white/50 text-[10px] font-medium uppercase tracking-wide">Duration</div><div className="text-white text-sm font-semibold">{course.duration}</div></div>
                          </div>
                          <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex items-center gap-2.5">
                            <BookOpen size={16} className="text-white/60" />
                            <div><div className="text-white/50 text-[10px] font-medium uppercase tracking-wide">Level</div><div className="text-white text-sm font-semibold">{course.level}</div></div>
                          </div>
                          <div className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex items-center gap-2.5">
                            <Monitor size={16} className="text-white/60" />
                            <div><div className="text-white/50 text-[10px] font-medium uppercase tracking-wide">Mode</div><div className="text-white text-sm font-semibold">{course.mode}</div></div>
                          </div>

                        </div>
                        <p className="text-white/80 leading-relaxed max-w-2xl">{course.overview}</p>
                      </motion.div>
                    </div>
                    <motion.div initial={{
                  opacity: 0,
                  x: 20
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: 'easeOut' as const
                }} className="bg-white rounded-2xl shadow-2xl p-6">
                      <h2 className="text-lg font-bold text-slate-900 mb-1">Enroll in this Course</h2>
                      <p className="text-slate-500 text-xs mb-4">Get a callback from our counsellor within 24 hours</p>
                      <QuickEnquiry courseId={courseId ?? ""} />
                      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
                        <a href="tel:+917411333500" className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 text-sm font-medium py-2.5 rounded-xl hover:bg-slate-50 transition-colors"><Phone size={16} /> +91 74113 33500</a>
                        <a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-medium py-2.5 rounded-xl hover:bg-green-600 transition-colors"><MessageCircle size={16} /> WhatsApp Us</a>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>

              {/* Body */}
              <section className="py-14 bg-[#F8FAFC]" aria-label="Course details">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-10">

                      {/* Skills */}
                      <div className="bg-white border border-slate-100 rounded-2xl p-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2"><CheckCircle size={20} className="text-primary" /> Skills You'll Learn</h2>
                        <div className="flex flex-wrap gap-2.5">
                          {course.skills.map((skill, i) => <span key={i} className="bg-primary/5 border border-primary/20 text-primary text-sm font-medium px-3 py-1.5 rounded-lg">{skill}</span>)}
                        </div>
                      </div>

                      {/* Curriculum */}
                      <div className="bg-white border border-slate-100 rounded-2xl p-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2"><BookOpen size={20} className="text-primary" /> Course Curriculum</h2>
                        <div className="space-y-3">
                          {course.modules.map((mod, mi) => <div key={mod.id} className="border border-slate-100 rounded-xl overflow-hidden">
                              <button onClick={() => setOpenModule(openModule === mod.id ? null : mod.id)} className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50 transition-colors text-left" aria-expanded={openModule === mod.id}>
                                <div className="flex items-center gap-3">
                                  <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">{String(mi + 1).padStart(2, '0')}</span>
                                  <span className="font-semibold text-slate-800">{mod.title}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <span className="text-xs text-slate-400">{mod.topics.length} topics</span>
                                  {openModule === mod.id ? <ChevronUp size={16} className="text-primary" /> : <ChevronDown size={16} className="text-slate-400" />}
                                </div>
                              </button>
                              {openModule === mod.id && <div className="px-5 pb-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                                  {mod.topics.map((topic, ti) => <div key={ti} className="flex items-center gap-2 text-sm text-slate-600">
                                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                                      <span>{topic}</span>
                                    </div>)}
                                </div>}
                            </div>)}
                        </div>
                      </div>

                      {/* Projects */}
                      <div className="bg-white border border-slate-100 rounded-2xl p-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2"><Briefcase size={20} className="text-primary" /> Hands-on Projects</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {course.projects.map((project, i) => <div key={i} className="flex items-center gap-3 bg-[#F8FAFC] border border-slate-100 rounded-xl px-4 py-3">
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <span className="text-primary text-xs font-bold">{String(i + 1).padStart(2, '0')}</span>
                              </div>
                              <span className="text-slate-700 text-sm font-medium">{project}</span>
                            </div>)}
                        </div>
                      </div>

                      {/* Career Opportunities */}
                      <div className="bg-white border border-slate-100 rounded-2xl p-8">
                        <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2"><Users size={20} className="text-primary" /> Career Opportunities</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {course.careers.map((career, i) => <div key={i} className="flex items-center gap-3 bg-[#F8FAFC] border border-slate-100 rounded-xl px-4 py-3">
                              <CheckCircle size={16} className="text-primary shrink-0" />
                              <span className="text-slate-700 text-sm font-medium">{career}</span>
                            </div>)}
                        </div>
                      </div>

                      {/* Eligibility & Certification */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white border border-slate-100 rounded-2xl p-6">
                          <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2"><Users size={18} className="text-primary" /> Eligibility</h2>
                          <p className="text-slate-600 text-sm leading-relaxed">{course.eligibility}</p>
                        </div>
                        <div className="bg-white border border-slate-100 rounded-2xl p-6">
                          <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2"><Award size={18} className="text-primary" /> Certification</h2>
                          <p className="text-slate-600 text-sm leading-relaxed">{course.certification}</p>
                          <div className="mt-3 inline-flex items-center gap-1.5 bg-green-50 border border-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                            <CheckCircle size={12} /> Globally Recognized
                          </div>
                        </div>
                      </div>

                    </div>{/* end main content */}

                    {/* Sidebar */}
                    <div className="space-y-6">
                      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm sticky top-[100px]">
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Quick Enquiry</h3>
                        <p className="text-slate-500 text-xs mb-4">We'll call you back within 24 hours</p>
                        <QuickEnquiry courseId={courseId ?? ""} />
                        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
                          <a href="tel:+917411333500" className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 text-sm font-medium py-2.5 rounded-xl hover:bg-slate-50 transition-colors"><Phone size={16} /> +91 74113 33500</a>
                          <a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-medium py-2.5 rounded-xl hover:bg-green-600 transition-colors"><MessageCircle size={16} /> WhatsApp Us</a>
                        </div>
                      </div>
                      <div className="bg-white border border-slate-100 rounded-2xl p-6">
                        <h3 className="text-base font-bold text-slate-900 mb-4">Other Courses</h3>
                        <div className="space-y-2">
                          {courses.items.filter((other) => !['cloud-computing', 'microsoft-technologies'].includes(other.id)).map((other) => <div key={other.id} className={other.id === course.id ? 'hidden' : ''}>
                              <Link to={`/courses/${other.id}`} className="flex items-center gap-2.5 py-2 text-sm text-slate-600 hover:text-primary transition-colors group">
                                <ArrowRight size={14} className="text-slate-300 group-hover:text-primary transition-colors shrink-0" />
                                <span>{other.name}</span>
                              </Link>
                            </div>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>;
      })}
      </main>
    </>;
}
