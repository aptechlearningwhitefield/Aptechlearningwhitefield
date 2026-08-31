import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { useState } from 'react';
import { seoMetadata } from '../lib/seo-metadata';
import { Building2, CheckCircle, ChevronDown, ChevronUp, Send, Phone, MessageCircle, ArrowRight, Users, Award, Clock, Monitor, Briefcase, Star, Zap } from 'lucide-react';
import { corporate, corporate_training } from 'virtual:content';
const site = 'https://www.cheekiratech.com';
// SEO: Get corporate training metadata
const seo = seoMetadata.corporateTraining;

const categoryColors: Record<string, string> = {
  'AI & Data': 'bg-blue-50 text-blue-700 border-blue-100',
  'Security & Cloud': 'bg-purple-50 text-purple-700 border-purple-100',
  'Development': 'bg-green-50 text-green-700 border-green-100',
  'Productivity': 'bg-orange-50 text-orange-700 border-orange-100'
};
const whyIcons = [Zap, Monitor, Users, Briefcase, Award, CheckCircle];

// ─── Corporate Enquiry Form ───────────────────────────────────────────────────
function CorporateEnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [gotcha, setGotcha] = useState('');
  const [company, setCompany] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [trainingReq, setTrainingReq] = useState('');
  const [employees, setEmployees] = useState('');
  const [mode, setMode] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (gotcha) return;
    setStatus('loading');
    try {
      // Field mapping: only the message textarea goes in messages_attributes[0].body. All other fields must be added to conversation.data as { "Label": value } pairs.
      const res = await fetch('/api/contact/corporate-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          conversation: {
            messages_attributes: [{
              body: message || 'Corporate training enquiry from corporate training page'
            }],
            data: {
              __gd_contact_form_title: 'Corporate Training Enquiry',
              'Company Name': company,
              'Contact Person': contactPerson,
              'Designation': designation,
              'Phone': phone,
              'Training Requirement': trainingReq,
              'Number of Employees': employees,
              'Preferred Mode': mode
            }
          },
          user: {
            email,
            name: contactPerson
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
    return <div className="text-center py-10">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Proposal Request Received!</h3>
        <p className="text-slate-500 mb-6">Our corporate training team will send you a customized proposal within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="text-primary text-sm font-medium hover:underline">Submit another enquiry</button>
      </div>;
  }
  return <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{
      position: 'absolute',
      left: '-9999px'
    }} aria-hidden="true" value={gotcha} onChange={e => setGotcha(e.target.value)} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="corp-company" className="block text-xs font-semibold text-slate-600 mb-1.5">Company Name *</label>
          <input id="corp-company" type="text" required value={company} onChange={e => setCompany(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="Your company name" />
        </div>
        <div>
          <label htmlFor="corp-person" className="block text-xs font-semibold text-slate-600 mb-1.5">Contact Person *</label>
          <input id="corp-person" type="text" required value={contactPerson} onChange={e => setContactPerson(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="Your name" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="corp-designation" className="block text-xs font-semibold text-slate-600 mb-1.5">Designation</label>
          <input id="corp-designation" type="text" value={designation} onChange={e => setDesignation(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="e.g. HR Manager, CTO" />
        </div>
        <div>
          <label htmlFor="corp-phone" className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number *</label>
          <input id="corp-phone" type="tel" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>

      <div>
        <label htmlFor="corp-email" className="block text-xs font-semibold text-slate-600 mb-1.5">Business Email *</label>
        <input id="corp-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="you@company.com" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="corp-training" className="block text-xs font-semibold text-slate-600 mb-1.5">Training Requirement</label>
          <select id="corp-training" value={trainingReq} onChange={e => setTrainingReq(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
            <option value="">Select topic</option>
            <option>AI & Machine Learning</option>
            <option>Generative AI</option>
            <option>Data Science & Analytics</option>
            <option>Data Analytics & Power BI</option>
            <option>Python Programming</option>
            <option>Full Stack Development</option>
            <option>Cloud Computing</option>
            <option>Microsoft Technologies</option>
            <option>Digital Marketing</option>
            <option>Custom / Multiple Topics</option>
          </select>
        </div>
        <div>
          <label htmlFor="corp-employees" className="block text-xs font-semibold text-slate-600 mb-1.5">Number of Employees</label>
          <select id="corp-employees" value={employees} onChange={e => setEmployees(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
            <option value="">Select range</option>
            <option>1–10</option>
            <option>11–25</option>
            <option>26–50</option>
            <option>51–100</option>
            <option>100+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="corp-mode" className="block text-xs font-semibold text-slate-600 mb-1.5">Preferred Training Mode</label>
        <select id="corp-mode" value={mode} onChange={e => setMode(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
          <option value="">Select mode</option>
          <option>On-site (at your office)</option>
          <option>At our Whitefield centre</option>
          <option>Online (Live)</option>
          <option>Hybrid</option>
        </select>
      </div>

      <div>
        <label htmlFor="corp-message" className="block text-xs font-semibold text-slate-600 mb-1.5">Additional Requirements</label>
        <textarea id="corp-message" rows={3} value={message} onChange={e => setMessage(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none" placeholder="Describe your training needs, preferred dates, or any specific tools/frameworks..." />
      </div>

      <button type="submit" disabled={status === 'loading'} className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 disabled:opacity-60 flex items-center justify-center gap-2 text-sm">
        {status === 'loading' ? 'Submitting...' : <><Send size={16} /> Request a Proposal</>}
      </button>
      {status === 'error' && <p className="text-red-500 text-xs text-center mt-2">Something went wrong. Please call us at +91 74113 33500.</p>}
    </form>;
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CorporateTrainingPage() {
  // Apply SEO Helmet metadata
  const helmetMeta = [
    { name: 'description', content: seo.description },
    { name: 'keywords', content: seo.keywords },
    { property: 'og:title', content: seo.ogTitle },
    { property: 'og:description', content: seo.ogDescription },
    { property: 'og:url', content: seo.canonical },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seo.ogTitle },
    { name: 'twitter:description', content: seo.ogDescription },
    { name: 'robots', content: 'index, follow' }
  ];
  
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${site}/corporate-training#service`,
    name: 'Corporate IT Training',
    description: 'Customized, instructor-led IT training programs for corporates in Bangalore. AI, Data Science, Cloud, and more.',
    url: `${site}/corporate-training`,
    provider: {
      '@id': `${site}/#organization`
    },
    areaServed: 'Bangalore, India',
    serviceType: 'Corporate Training'
  };
  return <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.ogTitle} />
        <meta name="twitter:description" content={seo.ogDescription} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0F2347 55%, #1a3a6b 100%)'
      }} aria-label="Corporate training hero">
          <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              {/* Left */}
              <motion.div initial={{
              opacity: 0,
              y: 24
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              ease: 'easeOut' as const
            }}>
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5">
                  <Building2 size={14} className="text-blue-300" />
                  <span className="text-white/90 text-xs font-medium">{corporate.hero.badge}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">{corporate.hero.title}</h1>
                <p className="text-blue-200 text-lg mb-8 leading-relaxed">{corporate.hero.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <a href="#enquiry-form" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/30">
                    <Send size={16} /> {corporate.hero.cta1}
                  </a>
                  <a href="tel:+917411333500" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors">
                    <Phone size={16} /> {corporate.hero.cta2}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-16 bg-white" aria-labelledby="why-corp-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="why-corp-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Why Companies Choose Us</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">We don't just deliver training — we deliver measurable skill improvement that impacts your bottom line.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corporate.why.map((item, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return <motion.div key={item.id} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: i * 0.07,
                ease: 'easeOut' as const
              }} className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>;
            })}
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-16 bg-[#F8FAFC]" aria-labelledby="programs-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 id="programs-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Training Programs</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">All programs can be customized in depth, duration, and delivery mode to fit your team's needs.</p>
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label="Filter by category">
              {corporate_training.categories.map(cat => <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-md shadow-blue-200' : 'bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary'}`}>
                  {cat}
                </button>)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {corporate.programs.map((prog, i) => <motion.div key={prog.id} initial={{
              opacity: 0,
              y: 16
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.35,
              delay: i % 4 * 0.07,
              ease: 'easeOut' as const
            }} className={`bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-all ${activeCategory !== 'All' && activeCategory !== prog.category ? 'hidden' : ''}`}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[prog.category] ?? 'bg-slate-50 text-slate-600 border-slate-100'}`}>{prog.category}</span>
                      <h3 className="font-bold text-slate-900 mt-2 text-base">{prog.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{prog.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5"><Clock size={13} /> {prog.duration}</span>
                    <span className="flex items-center gap-1.5"><Award size={13} /> {prog.level}</span>
                  </div>
                </motion.div>)}
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-500 text-sm mb-4">Need a topic not listed here? We build custom programs too.</p>
              <a href="#enquiry-form" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                <ArrowRight size={16} /> Discuss Custom Training
              </a>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white" aria-labelledby="process-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="process-heading" className="text-3xl font-extrabold text-slate-900 mb-3">How It Works</h2>
              <p className="text-slate-500">From enquiry to certified team — a simple 4-step process.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {corporate.process.map((step, i) => <motion.div key={step.id} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: i * 0.1,
              ease: 'easeOut' as const
            }} className="relative text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-white text-xl font-extrabold flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  {i < corporate.process.length - 1 && <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-slate-100" />}
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-[#F8FAFC]" aria-labelledby="corp-testimonials-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 id="corp-testimonials-heading" className="text-3xl font-extrabold text-slate-900 mb-3">What Our Clients Say</h2>
              <p className="text-slate-500">Trusted by leading companies across Bangalore.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {corporate.testimonials.map((t, i) => <motion.div key={t.id} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: i * 0.1,
              ease: 'easeOut' as const
            }} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, si) => <Star key={si} size={14} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-sm">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                      <div className="text-slate-400 text-xs">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Enquiry Form + Sidebar */}
        <section id="enquiry-form" className="py-16 bg-white" aria-labelledby="corp-form-heading">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-8">
                  <h2 id="corp-form-heading" className="text-2xl font-extrabold text-slate-900 mb-1">Request a Training Proposal</h2>
                  <p className="text-slate-500 text-sm mb-7">Fill in your details and we'll send a customized training plan and quote within 24 hours.</p>
                  <CorporateEnquiryForm />
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-4">Get in Touch Directly</h3>
                  <div className="space-y-4">
                    <a href="tel:+917411333500" className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 hover:bg-white/20 transition-colors">
                      <Phone size={18} className="text-blue-200 shrink-0" />
                      <div>
                        <div className="text-white/60 text-xs">Call Us</div>
                        <div className="text-white font-semibold text-sm">+91 74113 33500</div>
                      </div>
                    </a>
                    <a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-green-500/80 border border-green-400/30 rounded-xl px-4 py-3 hover:bg-green-500 transition-colors">
                      <MessageCircle size={18} className="text-white shrink-0" />
                      <div>
                        <div className="text-white/70 text-xs">WhatsApp</div>
                        <div className="text-white font-semibold text-sm">Chat with us now</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6">
                  <h3 className="font-bold text-slate-900 mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    {['Customized curriculum design', 'Expert industry instructors', 'Hands-on labs & projects', 'Study materials & recordings', 'Aptech certification', '3-month post-training support'].map((item, i) => <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <CheckCircle size={15} className="text-green-500 shrink-0" />
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>

                <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Explore More</h3>
                  <div className="space-y-2">
                    {[{
                    to: '/courses',
                    label: 'Browse All Courses'
                  }, {
                    to: '/schools-colleges',
                    label: 'Schools & Colleges'
                  }, {
                    to: '/placements',
                    label: 'Placement Assistance'
                  }, {
                    to: '/contact',
                    label: 'Contact Us'
                  }].map(link => <Link key={link.to} to={link.to} className="flex items-center gap-2.5 py-2 text-sm text-slate-600 hover:text-primary transition-colors group">
                        <ArrowRight size={14} className="text-slate-300 group-hover:text-primary transition-colors shrink-0" />
                        <span>{link.label}</span>
                      </Link>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-[#F8FAFC]" aria-labelledby="corp-faq-heading">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h2 id="corp-faq-heading" className="text-3xl font-extrabold text-slate-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-slate-500">Common questions from HR managers and L&D teams.</p>
            </div>
            <div className="space-y-3">
              {corporate.faqs.map(faq => <div key={faq.id} className="bg-white border border-slate-100 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)} className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors text-left" aria-expanded={openFaq === faq.id}>
                    <span className="font-semibold text-slate-800 text-sm pr-4">{faq.q}</span>
                    {openFaq === faq.id ? <ChevronUp size={18} className="text-primary shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                  </button>
                  {openFaq === faq.id && <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{faq.a}</div>}
                </div>)}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-14" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #1a3a6b 100%)'
      }} aria-label="Corporate training CTA">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-3">Ready to Upskill Your Team?</h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">Join 200+ companies that trust Aptech Learning Whitefield for their workforce development needs.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#enquiry-form" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-xl hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/30">
                <Send size={16} /> Request a Proposal
              </a>
              <a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-green-600 transition-colors">
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>;
}
