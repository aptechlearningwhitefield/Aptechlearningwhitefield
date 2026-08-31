import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { seoMetadata } from '../lib/seo-metadata';
import { useState } from 'react';
import { Phone, MessageCircle, ArrowRight, CheckCircle, Star, ChevronDown, ChevronUp, BookOpen, Users, Award, Briefcase, Clock, Monitor, Building2, GraduationCap, TrendingUp, Shield, Code, Cloud, BarChart3, Cpu, Globe, Zap, MapPin, Mail } from 'lucide-react';
import { home } from 'virtual:content';
import GoogleReviews from '@/components/GoogleReviews';

// ─── Course icon map ──────────────────────────────────────────────────────────
const courseIcons: Record<string, React.ReactNode> = {
  c1: <Cpu size={24} />,
  c2: <Zap size={24} />,
  c3: <BarChart3 size={24} />,
  c4: <TrendingUp size={24} />,
  c5: <Code size={24} />,
  c6: <Shield size={24} />,
  c7: <Globe size={24} />,
  c8: <Cloud size={24} />,
  c9: <Monitor size={24} />,
  c10: <TrendingUp size={24} />
};
const courseRoutes: Record<string, string> = {
  c1: 'ai-machine-learning',
  c2: 'generative-ai',
  c3: 'data-science',
  c4: 'data-analytics-power-bi',
  c5: 'python',
  c7: 'full-stack',
  c8: 'cloud-computing',
  c9: 'microsoft-technologies'
};
const courseColorMap: Record<string, string> = {
  blue: 'bg-blue-50 border-blue-100 hover:border-blue-300',
  purple: 'bg-purple-50 border-purple-100 hover:border-purple-300',
  green: 'bg-green-50 border-green-100 hover:border-green-300',
  orange: 'bg-orange-50 border-orange-100 hover:border-orange-300',
  yellow: 'bg-yellow-50 border-yellow-100 hover:border-yellow-300',
  red: 'bg-red-50 border-red-100 hover:border-red-300',
  teal: 'bg-teal-50 border-teal-100 hover:border-teal-300',
  sky: 'bg-sky-50 border-sky-100 hover:border-sky-300',
  indigo: 'bg-indigo-50 border-indigo-100 hover:border-indigo-300',
  pink: 'bg-pink-50 border-pink-100 hover:border-pink-300'
};
const courseIconColorMap: Record<string, string> = {
  blue: 'text-blue-600 bg-blue-100',
  purple: 'text-purple-600 bg-purple-100',
  green: 'text-green-600 bg-green-100',
  orange: 'text-orange-600 bg-orange-100',
  yellow: 'text-yellow-600 bg-yellow-100',
  red: 'text-red-600 bg-red-100',
  teal: 'text-teal-600 bg-teal-100',
  sky: 'text-sky-600 bg-sky-100',
  indigo: 'text-indigo-600 bg-indigo-100',
  pink: 'text-pink-600 bg-pink-100'
};

// ─── Fade-in wrapper ──────────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = ''




}: {children: React.ReactNode;delay?: number;className?: string;}) {
  return <motion.div initial={{
    opacity: 0,
    y: 24
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay,
    ease: 'easeOut' as const
  }} className={className}>
      
      {children}
    </motion.div>;
}

// ─── Student Enquiry Form ─────────────────────────────────────────────────────
function StudentEnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    qualification: '',
    currentStatus: '',
    interestedCourse: '',
    learningMode: '',
    message: ''
  });
  const [gotcha, setGotcha] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
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
              body: formData.message || 'New student enquiry submitted'
            }],
            data: {
              __gd_contact_form_title: 'Student Enquiry',
              'Mobile': formData.mobile,
              'City': formData.city,
              'Qualification': formData.qualification,
              'Current Status': formData.currentStatus,
              'Interested Course': formData.interestedCourse,
              'Learning Mode': formData.learningMode
            }
          },
          user: {
            email: formData.email,
            name: formData.name
          }
        })
      });
      const data = await res.json();
      if (data.success) setStatus('success');else setStatus('error');
    } catch {
      setStatus('error');
    }
  };
  if (status === 'success') {
    return <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Enquiry Submitted!</h3>
        <p className="text-slate-600 text-sm">Thank you! Our counsellor will contact you within 24 hours.</p>
      </div>;
  }
  return <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{
      position: 'absolute',
      left: '-9999px'
    }} aria-hidden="true" value={gotcha} onChange={(e) => setGotcha(e.target.value)} />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="enq-name" className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
          <input id="enq-name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="enq-mobile" className="block text-sm font-medium text-slate-700 mb-1">Mobile Number *</label>
          <input id="enq-mobile" name="mobile" type="tel" required value={formData.mobile} onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>
      <div>
        <label htmlFor="enq-email" className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
        <input id="enq-email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="your@email.com" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="enq-city" className="block text-sm font-medium text-slate-700 mb-1">City</label>
          <input id="enq-city" name="city" type="text" value={formData.city} onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your city" />
        </div>
        <div>
          <label htmlFor="enq-qualification" className="block text-sm font-medium text-slate-700 mb-1">Qualification</label>
          <input id="enq-qualification" name="qualification" type="text" value={formData.qualification} onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="e.g. B.Tech, BCA, 12th" />
        </div>
      </div>
      <div>
        <label htmlFor="enq-status" className="block text-sm font-medium text-slate-700 mb-1">Current Status</label>
        <select id="enq-status" name="currentStatus" value={formData.currentStatus} onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
          <option value="">Select your status</option>
          <option value="Student">Student</option>
          <option value="Fresher">Fresher / Recent Graduate</option>
          <option value="Working Professional">Working Professional</option>
          <option value="Job Seeker">Job Seeker</option>
          <option value="Career Break">Career Break</option>
        </select>
      </div>
      <div>
        <label htmlFor="enq-course" className="block text-sm font-medium text-slate-700 mb-1">Interested Course *</label>
        <select id="enq-course" name="interestedCourse" required value={formData.interestedCourse} onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
          <option value="">Select a course</option>
          <option value="AI & Machine Learning">AI & Machine Learning</option>
          <option value="Data Science">Data Science</option>
          <option value="Data Analytics & Power BI">Data Analytics & Power BI</option>
          <option value="Python Programming">Python Programming</option>
          // <option value="Cybersecurity">Cybersecurity</option>
          <option value="Full Stack Development">Full Stack Development</option>
          <option value="Digital Marketing">Digital Marketing</option>
        </select>
      </div>
      <div>
        <label htmlFor="enq-mode" className="block text-sm font-medium text-slate-700 mb-1">Learning Mode</label>
        <select id="enq-mode" name="learningMode" value={formData.learningMode} onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
          <option value="">Select learning mode</option>
          <option value="Classroom">Classroom (Whitefield Centre)</option>
          <option value="Online">Online (Live Classes)</option>
          <option value="Both">Both (Hybrid)</option>
        </select>
      </div>
      <div>
        <label htmlFor="enq-message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
        <textarea id="enq-message" name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none" placeholder="Any specific questions or requirements..." />
      </div>
      <button type="submit" disabled={status === 'loading'} className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
        
        {status === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
        {status !== 'loading' && <ArrowRight size={16} />}
      </button>
      {status === 'error' && <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or call us directly.</p>}
    </form>;
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const site = 'https://www.cheekiratech.com';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [{
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      name: 'Aptech Learning Whitefield',
      url: `${site}/`
    }, {
      '@type': 'EducationalOrganization',
      '@id': `${site}/#organization`,
      name: 'Aptech Learning Whitefield',
      alternateName: 'Cheekira Tech Pvt. Ltd.',
      url: `${site}/`,
      telephone: '+917411333500',
      email: 'aptechlearningwhitefield@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Near Kadugodi Tree Park Metro, Whitefield',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560066',
        addressCountry: 'IN'
      },
      openingHours: 'Mo-Sa 10:00-19:00',
      description: 'Authorized Aptech Learning Franchise Centre offering industry-ready IT training in AI, Data Science, Python, Full Stack Development and more in Whitefield, Bangalore.'
    }, {
      '@type': 'WebPage',
      '@id': `${site}/#webpage`,
      url: `${site}/`,
      name: 'Aptech Learning Whitefield | Best IT Training Institute in Whitefield Bangalore',
      isPartOf: {
        '@id': `${site}/#website`
      },
      about: {
        '@id': `${site}/#organization`
      },
      datePublished: '2026-07-15',
      dateModified: '2026-07-15'
    }]
  };
  return <>
      <Helmet>
        <title>{seoMetadata.home.title}</title>
        <meta name="description" content={seoMetadata.home.description} />
        <meta name="keywords" content={seoMetadata.home.keywords} />
        <link rel="canonical" href={seoMetadata.home.canonical} />
        <meta property="og:title" content={seoMetadata.home.ogTitle} />
        <meta property="og:description" content={seoMetadata.home.ogDescription} />
        <meta property="og:url" content={seoMetadata.home.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoMetadata.home.ogTitle} />
        <meta name="twitter:description" content={seoMetadata.home.ogDescription} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(seoMetadata.home.structuredData)}</script>
      </Helmet>

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0F2347 40%, #1a3a6b 70%, #2563EB 100%)'
      }} aria-label="Hero section">
          
          {/* Tech pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10" style={{
          background: 'radial-gradient(ellipse at top right, #2563EB 0%, transparent 70%)'
        }} />

          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
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
                  
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-base text-white/90 font-medium font-bold">APTECH LEARNING NOW IN WHITEFIELD</span>
                  </div>
                </motion.div>

                <motion.h1 initial={{
                opacity: 0,
                y: 24
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 0.1,
                ease: 'easeOut' as const
              }} className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
                  
                  {home.hero.headline}
                </motion.h1>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.2,
                ease: 'easeOut' as const
              }} className="mb-4">
                  
                  <p className="text-blue-200 font-semibold text-lg">{home.hero.subheading}</p>
                  <p className="text-blue-300 text-sm">{home.hero.brandLine1}</p>
                  <p className="text-blue-300 text-sm">{home.hero.brandLine2}</p>
                </motion.div>

                <motion.p initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.3,
                ease: 'easeOut' as const
              }} className="text-slate-300 text-base leading-relaxed mb-6">
                  
                  {home.hero.description}
                </motion.p>

                {/* CTAs */}
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.5,
                ease: 'easeOut' as const
              }} className="flex flex-wrap gap-3"><a className="bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 flex items-center gap-2" href="/contact" data-discover="true"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-open"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg>Book Free Career Counselling</a><a className="border-2 border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2" href="/courses" data-discover="true">Explore Courses<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a><a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white font-semibold px-5 py-3 rounded-xl hover:bg-green-600 transition-all flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>WhatsApp</a><a href="tel:+917411333500" className="bg-white/10 border border-white/20 text-white font-semibold px-5 py-3 rounded-xl hover:bg-white/20 transition-all flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>Call Now</a>































                </motion.div>
              </div>

              {/* Right: image */}
              <motion.div initial={{
              opacity: 0,
              x: 40
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.7,
              delay: 0.3,
              ease: 'easeOut' as const
            }} className="relative hidden lg:block">
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                  <img src="https://img1.wsimg.com/isteam/getty/1387157405" alt="Students learning technology at Aptech Learning Whitefield, Bangalore" className="w-full h-[420px] object-cover" loading="eager" fetchPriority="high" width={600} height={420} />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/40 to-transparent pointer-events-none" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Placement Rate</div>
                    <div className="text-lg font-bold text-slate-800">90%</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Students Trained</div>
                    <div className="text-lg font-bold text-slate-800">50+</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
        <section className="bg-white border-b border-slate-100 shadow-sm" aria-label="Trust statistics">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {home.trustBar.stats.map((stat, i) => <motion.div key={stat.id} initial={{
              opacity: 0,
              y: 16
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: i * 0.1,
              ease: 'easeOut' as const
            }} className="text-center">
                
                  <div className="text-3xl md:text-4xl font-extrabold text-primary">
                    <span>{stat.value}</span>
                  </div>
                  <div className="text-sm text-slate-600 font-medium mt-1">{stat.label}</div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────────────────────── */}
        <section className="py-20 bg-white" id="about" aria-labelledby="about-heading">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="text-primary text-xs font-semibold">{home.about.badge}</span>
                </div>
                <h2 id="about-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
                  {home.about.title}
                </h2>
                <p className="text-primary font-semibold mb-4">{home.about.subtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-4">{home.about.description}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{home.about.description2}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {home.about.highlights.map((item) => <li key={item.id} className="flex items-start gap-2.5">
                      <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-slate-700 text-sm">{item.text}</span>
                    </li>)}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link to="/about" className="bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2">
                    Learn More About Us <ArrowRight size={16} />
                  </Link>
                  <Link to="/contact" className="border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:bg-slate-50 transition-colors">
                    Book Free Counselling
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src="https://img1.wsimg.com/isteam/getty/2246315787" alt="Aptech Learning Whitefield IT training institute classroom in Bangalore" className="w-full h-[420px] object-cover" loading="lazy" width={600} height={420} />
                    
                  </div>
                  <div className="absolute -bottom-5 -right-5 bg-[#0A1628] text-white rounded-xl p-5 shadow-xl max-w-[200px]">
                    <div className="text-2xl font-extrabold text-primary mb-1">Aptech</div>
                    <div className="text-xs text-slate-300 leading-snug">Authorized Learning Franchise Centre</div>
                    <div className="mt-2 flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── POPULAR COURSES ───────────────────────────────────────────────── */}
        <section className="py-20 bg-[#F8FAFC]" id="courses" aria-labelledby="courses-heading">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-12">
              <h2 id="courses-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                {home.courses.sectionTitle}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">{home.courses.sectionSubtitle}</p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {home.courses.items.filter((course) => !['c2', 'c8', 'c9'].includes(course.id)).map((course, i) => <motion.div key={course.id} initial={{
              opacity: 0,
              y: 24
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: i * 0.06,
              ease: 'easeOut' as const
            }} whileHover={{
              y: -4,
              transition: {
                duration: 0.2
              }
            }} className={`relative bg-white border rounded-2xl p-5 cursor-pointer transition-all hover:shadow-lg ${courseColorMap[course.color] || 'border-slate-100 hover:border-blue-200'}`}>
                
                  {course.popular && <span className="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Popular
                    </span>}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${courseIconColorMap[course.color] || 'text-primary bg-blue-100'}`}>
                    {courseIcons[course.id]}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1 leading-snug">{course.name}</h3>
                  <div className="flex items-center gap-2 mb-3"><span className="flex items-center gap-1 text-xs text-slate-500">{course.duration}</span><span className="text-slate-300">•</span><span className="text-xs text-slate-500">Beginner Level</span>






              </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.skills.map((skill, si) => <span key={si} className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2 py-0.5 rounded-md">
                        {skill}
                      </span>)}
                  </div>

                  <Link to={`/courses/${courseRoutes[course.id] || course.id}`} className="w-full flex items-center justify-center gap-1.5 bg-primary text-white text-sm font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  
                    Enroll Now <ArrowRight size={14} />
                  </Link>
                </motion.div>)}
            </div>

            <FadeIn className="text-center mt-10">
              <Link to="/courses" className="inline-flex items-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3 rounded-xl hover:bg-primary hover:text-white transition-all">
                
                View All Courses <ArrowRight size={18} />
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
        <section className="py-20 bg-white" id="why-us" aria-labelledby="why-heading">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-12">
              <h2 id="why-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                {home.whyUs.sectionTitle}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">{home.whyUs.sectionSubtitle}</p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {home.whyUs.features.map((feature, i) => <motion.div key={feature.id} initial={{
              opacity: 0,
              y: 24
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: i * 0.1,
              ease: 'easeOut' as const
            }} className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-8 hover:shadow-md transition-all group">
                
                  <div className="flex items-start gap-5">
                    <div className="text-4xl font-extrabold text-primary/20 group-hover:text-primary/40 transition-colors leading-none">
                      {feature.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 h-1 w-16 bg-primary rounded-full group-hover:w-32 transition-all duration-300"></div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* ── LEARNING JOURNEY ─────────────────────────────────────────────── */}
        <section className="py-20 bg-[#F8FAFC]" aria-labelledby="journey-heading">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-14">
              <h2 id="journey-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                {home.journey.sectionTitle}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">{home.journey.sectionSubtitle}</p>
            </FadeIn>

            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 mx-20" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
                {home.journey.steps.map((step, i) => <motion.div key={step.id} initial={{
                opacity: 0,
                y: 24
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: i * 0.1,
                ease: 'easeOut' as const
              }} className="relative flex flex-col items-center text-center">
                  
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-lg mb-4 relative z-10">
                      <span className="text-xl font-extrabold text-primary">{step.step}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                  </motion.div>)}
              </div>
            </div>

            <FadeIn className="text-center mt-12">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                
                Start Your Journey Today <ArrowRight size={18} />
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* ── PLACEMENT ────────────────────────────────────────────────────── */}
        <section className="py-20 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0F2347 60%, #1a3a6b 100%)'
      }} id="placements" aria-labelledby="placement-heading">
          
          <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <FadeIn>
                <h2 id="placement-heading" className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                  {home.placement.sectionTitle}
                </h2>
                <p className="text-blue-200 mb-8">{home.placement.sectionSubtitle}</p>

                  <div className="grid grid-cols-2 gap-5 mb-8">
                  {home.placement.stats.map((stat, i) => <motion.div key={stat.id} initial={{
                  opacity: 0,
                  scale: 0.9
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                  ease: 'easeOut' as const
                }} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center">
                    
                      <div className="text-3xl font-extrabold text-white mb-1">
                        <span>{stat.value}</span>
                      </div>
                      <div className="text-blue-200 text-sm">{stat.label}</div>
                    </motion.div>)}
                </div>

                <ul className="space-y-2.5 mb-8">
                  {home.placement.features.map((feat) => <li key={feat.id} className="flex items-center gap-2.5">
                      <CheckCircle size={16} className="text-green-400 shrink-0" />
                      <span className="text-slate-300 text-sm">{feat.text}</span>
                    </li>)}
                </ul>

                <Link to="/placements" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/30">
                  
                  Start Your Career Journey <ArrowRight size={18} />
                </Link>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3 className="text-white font-bold text-lg mb-6 text-center">Our Hiring Partners</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {home.placement.partners.map((partner) => <div key={partner.id} className="bg-white/10 border border-white/20 rounded-xl py-4 px-3 flex items-center justify-center hover:bg-white/20 transition-colors">
                      
                        <span className="text-white font-bold text-sm text-center">{partner.name}</span>
                      </div>)}
                  </div>
                  <p className="text-blue-300 text-xs text-center mt-4">+ 40 more hiring partners</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── CORPORATE TRAINING ───────────────────────────────────────────── */}
        <section className="py-20 bg-white" id="corporate" aria-labelledby="corporate-heading">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
                  <Briefcase size={14} className="text-primary" />
                  <span className="text-primary text-xs font-semibold">For Corporates & Enterprises</span>
                </div>
                <h2 id="corporate-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                  {home.corporate.sectionTitle}
                </h2>
                <p className="text-slate-600 mb-6">{home.corporate.sectionSubtitle}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{home.corporate.description}</p>

                <h3 className="font-bold text-slate-800 mb-3">Training Programs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {home.corporate.programs.map((prog) => <div key={prog.id} className="flex items-center gap-2.5 bg-[#F8FAFC] border border-slate-100 rounded-lg px-3 py-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                      <span className="text-slate-700 text-sm font-medium">{prog.name}</span>
                    </div>)}
                </div>

                <h3 className="font-bold text-slate-800 mb-3">Key Benefits</h3>
                <ul className="space-y-2">
                  {home.corporate.benefits.map((b) => <li key={b.id} className="flex items-center gap-2.5">
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      <span className="text-slate-600 text-sm">{b.text}</span>
                    </li>)}
                </ul>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Request a Training Proposal</h3>
                  <p className="text-slate-500 text-sm mb-6">Tell us your requirements and we'll get back within 24 hours</p>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Company Name</label>
                        <input type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white" placeholder="Your company" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Contact Person</label>
                        <input type="text" className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white" placeholder="Your name" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                      <input type="email" className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white" placeholder="work@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                      <input type="tel" className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Training Requirement</label>
                      <select className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                        <option value="">Select training topic</option>
                        <option>AI & Machine Learning</option>
                        <option>Data Science & Analytics</option>
                        <option>Microsoft Intune & M365</option>
                        <option>Power BI</option>
                        <option>Python for Business</option>
                        // <option>Cybersecurity</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                      <textarea rows={3} className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white resize-none" placeholder="Number of employees, preferred dates, location..." />
                    </div>
                    <Link to="/corporate-training" className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      
                      Send Proposal Request <ArrowRight size={16} />
                    </Link>
                    <p className="text-xs text-slate-400 text-center">Or email us at admin@cheekiratech.in</p>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── SCHOOLS & COLLEGES ───────────────────────────────────────────── */}
        <section className="py-20 bg-[#F8FAFC]" id="schools-colleges" aria-labelledby="schools-heading">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-12">
              <h2 id="schools-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                {home.schoolsColleges.sectionTitle}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">{home.schoolsColleges.sectionSubtitle}</p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* For Schools */}
              <FadeIn>
                <div className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition-all h-full">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-5">
                    <GraduationCap size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{home.schoolsColleges.schools.title}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{home.schoolsColleges.schools.subtitle}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">{home.schoolsColleges.schools.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {home.schoolsColleges.schools.programs.map((prog) => <li key={prog.id} className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <CheckCircle size={14} className="text-primary" />
                        </div>
                        <span className="text-slate-700 text-sm font-medium">{prog.name}</span>
                      </li>)}
                  </ul>
                  <Link to="/schools-colleges" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
                    
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeIn>

              {/* For Colleges */}
              <FadeIn delay={0.1}>
                <div className="bg-[#0A1628] border border-white/10 rounded-2xl p-8 hover:shadow-lg transition-all h-full">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                    <Building2 size={28} className="text-blue-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{home.schoolsColleges.colleges.title}</h3>
                  <p className="text-blue-300 font-medium text-sm mb-3">{home.schoolsColleges.colleges.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{home.schoolsColleges.colleges.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {home.schoolsColleges.colleges.programs.map((prog) => <li key={prog.id} className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                          <CheckCircle size={14} className="text-blue-300" />
                        </div>
                        <span className="text-slate-300 text-sm font-medium">{prog.name}</span>
                      </li>)}
                  </ul>
                  <Link to="/schools-colleges" className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-white/10 transition-colors">
                    
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
        <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-12">
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                {home.testimonials.sectionTitle}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">{home.testimonials.sectionSubtitle}</p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {home.testimonials.items.map((t, i) => <motion.div key={t.id} initial={{
              opacity: 0,
              y: 24
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: i * 0.1,
              ease: 'easeOut' as const
            }} className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-7 hover:shadow-md transition-all">
                
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({
                  length: t.rating
                }).map((_, si) => <Star key={si} size={16} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center text-white font-bold text-base">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.course}</div>
                      <div className="text-xs text-primary font-medium">{t.company}</div>
                    </div>
                  </div>
                </motion.div>)}
            </div>

            <FadeIn className="text-center mt-10">
              <Link to="/student-success" className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 font-semibold px-7 py-3 rounded-xl hover:bg-slate-50 transition-colors">
                View More Success Stories <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* ── Google Reviews ───────────────────────────────────────────────── */}
        <GoogleReviews
        reviews={[
        { reviewId: "AbFvOqmsc46TKzkIGL8HVtEoNhUlypGW2IocMSAoZBJ00dnDnpLJo26YVDkuLmDeJtmGQzU8asco", reviewer: { displayName: "Nisha" }, starRating: "FIVE", comment: "", createTime: "2026-07-19T07:11:40.071339Z", updateTime: "2026-07-19T07:11:40.071339Z" },
        { reviewId: "AbFvOqlOGvt8v-6GG8QKVbb1fJ7Em62ECcZO_f9yiH4P46QhmEJ8-xOq3kyl73S0Fy3FQHcsypEgpg", reviewer: { displayName: "Pavithra M" }, starRating: "FIVE", comment: "Aptech Learning Institute is a well-known training center that offers courses in areas like IT, software development, animation, and hardware networking. The institute has built a strong reputation over the years for providing structured learning programs aimed at improving employability.\nOne of the key strengths of Aptech is its industry-oriented curriculum. The courses are designed to match current market requirements, which is helpful for students looking to build practical skills. Trainers are generally knowledgeable and supportive, and many centers focus on hands-on learning rather than just theory.\nThe institute also provides placement assistance, which is beneficial for freshers entering the job market. However, placement outcomes can vary depending on the branch and the student's performance, so it's important not to rely solely on the institute for job opportunities.\nOn the downside, course fees can be relatively high compared to some local training centers. Additionally, the quality of training and infrastructure may differ from one branch to another, so it's advisable to check reviews of the specific center before enrolling.\nOverall, Aptech Learning Institute is a decent choice for students who are serious about upgrading their technical skills, especially if they actively engage in learning and practice beyond classroom sessions.", createTime: "2026-04-11T06:56:48.712099Z", updateTime: "2026-04-11T06:56:48.712099Z" }]
        }
        title="What Our Students Say on Google"
        maxVisible={6} />
      

        {/* ── FAQs ─────────────────────────────────────────────────────────── */}
        <section className="py-20 bg-[#F8FAFC]" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                {home.faqs.sectionTitle}
              </h2>
              <p className="text-slate-600">{home.faqs.sectionSubtitle}</p>
            </FadeIn>

            <div className="space-y-3">
              {home.faqs.items.map((faq, i) => <motion.div key={faq.id} initial={{
              opacity: 0,
              y: 16
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.3,
              delay: i * 0.05,
              ease: 'easeOut' as const
            }} className="bg-white border border-slate-100 rounded-xl overflow-hidden">
                
                  <button onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors" aria-expanded={openFaq === faq.id}>
                  
                    <span className="font-semibold text-slate-900 text-sm pr-4">{faq.question}</span>
                    {openFaq === faq.id ? <ChevronUp size={18} className="text-primary shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                  </button>
                  {openFaq === faq.id && <div className="px-6 pb-5">
                      <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>}
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* ── BLOG ─────────────────────────────────────────────────────────── */}
        <section className="py-20 bg-white" aria-labelledby="blog-heading">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-12">
              <h2 id="blog-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                {home.blogs.sectionTitle}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">{home.blogs.sectionSubtitle}</p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {home.blogs.items.map((blog, i) => <motion.article key={blog.id} initial={{
              opacity: 0,
              y: 24
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: i * 0.1,
              ease: 'easeOut' as const
            }} className="bg-[#F8FAFC] border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-all group">
                
                  <div className="h-44 bg-gradient-to-br from-primary/10 to-blue-100 flex items-center justify-center">
                    <BookOpen size={40} className="text-primary/40" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {blog.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <Link to={`/blog/${blog.slug}`} className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      
                        Read More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.article>)}
            </div>

            <FadeIn className="text-center mt-10">
              <Link to="/blog" className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 font-semibold px-7 py-3 rounded-xl hover:bg-slate-50 transition-colors">
                View All Articles <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* ── CONTACT & ENQUIRY ────────────────────────────────────────────── */}
        <section className="py-20 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0F2347 60%, #1a3a6b 100%)'
      }} id="contact" aria-labelledby="contact-heading">
          
          <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
          <div className="container mx-auto px-4 relative z-10">
            <FadeIn className="text-center mb-12">
              <h2 id="contact-heading" className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                {home.contact.sectionTitle}
              </h2>
              <p className="text-blue-200 max-w-xl mx-auto">{home.contact.sectionSubtitle}</p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact info */}
              <FadeIn>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-blue-300" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Address</div>
                      <div className="text-slate-300 text-sm leading-relaxed">
                        Aptech Learning Whitefield<br />
                        {home.contact.address}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-blue-300" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Phone</div>
                      <a href="tel:+917411333500" className="text-slate-300 text-sm hover:text-white transition-colors">
                        {home.contact.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={22} className="text-blue-300" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Email</div>
                      <a href={`mailto:${home.contact.studentEmail}`} className="text-slate-300 text-sm hover:text-white transition-colors block">
                        {home.contact.studentEmail}
                      </a>
                      <a href={`mailto:${home.contact.corporateEmail}`} className="text-slate-300 text-sm hover:text-white transition-colors block mt-1">
                        {home.contact.corporateEmail}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-blue-300" />
                    </div>
                    <div>
                      <div className="text-white font-semibold mb-1">Working Hours</div>
                      <div className="text-slate-300 text-sm">{home.contact.hours}</div>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="rounded-2xl overflow-hidden border border-white/10 mt-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.799066371987!2d77.74653247540166!3d12.984699887331908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0fda424af2a3%3A0x4f2a86074212fb34!2sAptech%20Learning%20Whitefield!5e0!3m2!1sen!2sin!4v1787247367708!5m2!1sen!2sin" width="100%" height="220" style={{
                    border: 0
                  }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" title="Aptech Learning Whitefield location map" />
                    
                  </div>
                </div>
              </FadeIn>

              {/* Enquiry form */}
              <FadeIn delay={0.15}>
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Student Enquiry Form</h3>
                  <p className="text-slate-500 text-sm mb-6">Fill in your details and we'll call you back within 24 hours</p>
                  <StudentEnquiryForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      {/* ── STICKY FLOATING BUTTONS ──────────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="tel:+917411333500" aria-label="Call Aptech Learning Whitefield" className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all hover:scale-110 hover:shadow-xl">
          
          <Phone size={22} />
        </a>
        <a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Aptech Learning Whitefield" className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110 hover:shadow-xl">
          
          <MessageCircle size={22} />
        </a>
      </div>
    </>;
}
