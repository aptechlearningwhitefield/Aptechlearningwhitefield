import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { useState } from 'react';
import { seoMetadata } from '../lib/seo-metadata';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, ChevronDown, ChevronUp, Building2, GraduationCap, School, HelpCircle, Send, ArrowRight } from 'lucide-react';
import { contact } from 'virtual:content';
const site = 'https://www.cheekiratech.com';
const enquiryIcons: Record<string, React.ReactNode> = {
  student: <GraduationCap size={22} />,
  corporate: <Building2 size={22} />,
  schools: <School size={22} />,
  other: <HelpCircle size={22} />
};

// ─── Student Enquiry Form ─────────────────────────────────────────────────────
function StudentEnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [gotcha, setGotcha] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [qualification, setQualification] = useState('');
  const [currentStatus, setCurrentStatus] = useState('');
  const [interestedCourse, setInterestedCourse] = useState('');
  const [learningMode, setLearningMode] = useState('');
  const [joiningMonth, setJoiningMonth] = useState('');
  const [message, setMessage] = useState('');
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
              body: message || 'Student enquiry from contact page'
            }],
            data: {
              __gd_contact_form_title: 'Student Enquiry',
              'Mobile': mobile,
              'City': city,
              'Qualification': qualification,
              'Current Status': currentStatus,
              'Interested Course': interestedCourse,
              'Learning Mode': learningMode,
              'Joining Month': joiningMonth
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
    return <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Enquiry Submitted!</h3>
        <p className="text-slate-500 mb-6">Our counsellor will call you back within 24 hours.</p>
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
          <label htmlFor="s-name" className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
          <input id="s-name" type="text" required value={name} onChange={e => setName(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="Your full name" />
        </div>
        <div>
          <label htmlFor="s-mobile" className="block text-xs font-semibold text-slate-600 mb-1.5">Mobile Number *</label>
          <input id="s-mobile" type="tel" required value={mobile} onChange={e => setMobile(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="s-email" className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
          <input id="s-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="your@email.com" />
        </div>
        <div>
          <label htmlFor="s-city" className="block text-xs font-semibold text-slate-600 mb-1.5">City</label>
          <input id="s-city" type="text" value={city} onChange={e => setCity(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="Your city" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="s-qualification" className="block text-xs font-semibold text-slate-600 mb-1.5">Qualification</label>
          <select id="s-qualification" value={qualification} onChange={e => setQualification(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
            <option value="">Select qualification</option>
            <option>10th / SSLC</option>
            <option>12th / PUC</option>
            <option>Diploma</option>
            <option>B.E / B.Tech</option>
            <option>BCA / BSc</option>
            <option>MCA / M.Tech</option>
            <option>Other Graduation</option>
            <option>Post Graduation</option>
          </select>
        </div>
        <div>
          <label htmlFor="s-status" className="block text-xs font-semibold text-slate-600 mb-1.5">Current Status</label>
          <select id="s-status" value={currentStatus} onChange={e => setCurrentStatus(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
            <option value="">Select status</option>
            <option>Student</option>
            <option>Fresh Graduate</option>
            <option>Working Professional</option>
            <option>Career Break</option>
            <option>Freelancer</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="s-course" className="block text-xs font-semibold text-slate-600 mb-1.5">Interested Course</label>
          <select id="s-course" value={interestedCourse} onChange={e => setInterestedCourse(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
            <option value="">Select a course</option>
            <option>AI & Machine Learning</option>
            <option>Generative AI & Prompt Engineering</option>
            <option>Data Science</option>
            <option>Data Analytics & Power BI</option>
            <option>Python Programming</option>
            <option>Full Stack Development</option>
            <option>Digital Marketing</option>
            <option>Not Sure – Need Counselling</option>
          </select>
        </div>
        <div>
          <label htmlFor="s-mode" className="block text-xs font-semibold text-slate-600 mb-1.5">Learning Mode</label>
          <select id="s-mode" value={learningMode} onChange={e => setLearningMode(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
            <option value="">Select mode</option>
            <option>Classroom (Whitefield)</option>
            <option>Online (Live)</option>
            <option>Hybrid</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="s-month" className="block text-xs font-semibold text-slate-600 mb-1.5">Preferred Joining Month</label>
        <select id="s-month" value={joiningMonth} onChange={e => setJoiningMonth(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
          <option value="">Select month</option>
          <option>Immediately</option>
          <option>July 2026</option>
          <option>August 2026</option>
          <option>September 2026</option>
          <option>October 2026</option>
          <option>November 2026</option>
          <option>December 2026</option>
          <option>January 2027</option>
        </select>
      </div>

      <div>
        <label htmlFor="s-message" className="block text-xs font-semibold text-slate-600 mb-1.5">Message (optional)</label>
        <textarea id="s-message" rows={3} value={message} onChange={e => setMessage(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none" placeholder="Any specific questions or requirements..." />
      </div>

      <button type="submit" disabled={status === 'loading'} className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 disabled:opacity-60 flex items-center justify-center gap-2 text-sm">
        {status === 'loading' ? 'Submitting...' : <><Send size={16} /> Submit Enquiry</>}
      </button>
      {status === 'error' && <p className="text-red-500 text-xs text-center">Something went wrong. Please call us directly at +91 74113 33500.</p>}
    </form>;
}

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
              body: message || 'Corporate training enquiry from contact page'
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
    return <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Enquiry Received!</h3>
        <p className="text-slate-500 mb-6">Our corporate training team will reach out within 24 hours.</p>
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
          <label htmlFor="c-company" className="block text-xs font-semibold text-slate-600 mb-1.5">Company Name *</label>
          <input id="c-company" type="text" required value={company} onChange={e => setCompany(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="Your company name" />
        </div>
        <div>
          <label htmlFor="c-person" className="block text-xs font-semibold text-slate-600 mb-1.5">Contact Person *</label>
          <input id="c-person" type="text" required value={contactPerson} onChange={e => setContactPerson(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="Your name" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="c-designation" className="block text-xs font-semibold text-slate-600 mb-1.5">Designation</label>
          <input id="c-designation" type="text" value={designation} onChange={e => setDesignation(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="e.g. HR Manager, CTO" />
        </div>
        <div>
          <label htmlFor="c-phone" className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number *</label>
          <input id="c-phone" type="tel" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>

      <div>
        <label htmlFor="c-email" className="block text-xs font-semibold text-slate-600 mb-1.5">Business Email *</label>
        <input id="c-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="you@company.com" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="c-training" className="block text-xs font-semibold text-slate-600 mb-1.5">Training Requirement</label>
          <select id="c-training" value={trainingReq} onChange={e => setTrainingReq(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
            <option value="">Select topic</option>
            <option>AI & Machine Learning</option>
            <option>Generative AI</option>
            <option>Data Science & Analytics</option>
            <option>Python Programming</option>
            <option>Full Stack Development</option>
            <option>Digital Marketing</option>
            <option>Custom / Multiple Topics</option>
          </select>
        </div>
        <div>
          <label htmlFor="c-employees" className="block text-xs font-semibold text-slate-600 mb-1.5">Number of Employees</label>
          <select id="c-employees" value={employees} onChange={e => setEmployees(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
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
        <label htmlFor="c-mode" className="block text-xs font-semibold text-slate-600 mb-1.5">Preferred Training Mode</label>
        <select id="c-mode" value={mode} onChange={e => setMode(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
          <option value="">Select mode</option>
          <option>On-site (at your office)</option>
          <option>At our Whitefield centre</option>
          <option>Online (Live)</option>
          <option>Hybrid</option>
        </select>
      </div>

      <div>
        <label htmlFor="c-message" className="block text-xs font-semibold text-slate-600 mb-1.5">Additional Requirements</label>
        <textarea id="c-message" rows={3} value={message} onChange={e => setMessage(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none" placeholder="Describe your training needs, preferred dates, or any other details..." />
      </div>

      <button type="submit" disabled={status === 'loading'} className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-all hover:shadow-lg disabled:opacity-60 flex items-center justify-center gap-2 text-sm">
        {status === 'loading' ? 'Submitting...' : <><Send size={16} /> Send Corporate Enquiry</>}
      </button>
      {status === 'error' && <p className="text-red-500 text-xs text-center">Something went wrong. Please email us at aptechlearningwhitefield@gmail.com</p>}
    </form>;
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<'student' | 'corporate'>('student');
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  return <>
      <Helmet>
        <title>{seoMetadata.contact.title}</title>
        <meta name="description" content={seoMetadata.contact.description} />
        <meta name="keywords" content={seoMetadata.contact.keywords} />
        <link rel="canonical" href={seoMetadata.contact.canonical} />
        <meta property="og:title" content={seoMetadata.contact.ogTitle} />
        <meta property="og:description" content={seoMetadata.contact.ogDescription} />
        <meta property="og:url" content={seoMetadata.contact.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoMetadata.contact.ogTitle} />
        <meta name="twitter:description" content={seoMetadata.contact.ogDescription} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-14 md:py-20" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0F2347 55%, #1a3a6b 100%)'
      }} aria-label="Contact hero">
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
                <MessageCircle size={14} className="text-blue-300" />
                <span className="text-white/90 text-xs font-medium">{contact.hero.badge}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">{contact.hero.title}</h1>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">{contact.hero.subtitle}</p>

              {/* Quick contact pills */}
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`tel:${contact.info.phone.replace(/\s/g, '')}`} className="flex items-center gap-2.5 bg-white/10 border border-white/20 hover:bg-white/20 transition-colors rounded-full px-5 py-2.5 text-white text-sm font-medium">
                  <Phone size={16} className="text-blue-300" />
                  <span>{contact.info.phone}</span>
                </a>
                <a href={`mailto:${contact.info.email}`} className="flex items-center gap-2.5 bg-white/10 border border-white/20 hover:bg-white/20 transition-colors rounded-full px-5 py-2.5 text-white text-sm font-medium">
                  <Mail size={16} className="text-blue-300" />
                  <span>{contact.info.email}</span>
                </a>
                <a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-green-500/80 border border-green-400/40 hover:bg-green-500 transition-colors rounded-full px-5 py-2.5 text-white text-sm font-medium">
                  <MessageCircle size={16} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enquiry type selector */}
        <section className="bg-white border-b border-slate-100" aria-label="Enquiry type">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {contact.enquiryTypes.map(type => <button key={type.id} onClick={() => {
              if (type.id === 'student' || type.id === 'corporate') setActiveForm(type.id);
            }} className={`flex flex-col items-center gap-1.5 py-5 px-3 border-b-2 transition-all text-center ${type.id === activeForm || type.id === 'schools' && activeForm === 'student' || type.id === 'other' && activeForm === 'student' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700'} ${type.id === activeForm ? 'border-primary text-primary' : 'border-transparent'}`}>
                  <span className={`${type.id === activeForm ? 'text-primary' : 'text-slate-400'}`}>{enquiryIcons[type.id]}</span>
                  <span className="font-semibold text-sm">{type.label}</span>
                  <span className="text-xs text-slate-400 hidden md:block">{type.description}</span>
                </button>)}
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-14 bg-[#F8FAFC]" aria-label="Contact forms and info">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Forms */}
              <div className="lg:col-span-2">
                <motion.div key={activeForm} initial={{
                opacity: 0,
                y: 12
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.3,
                ease: 'easeOut' as const
              }} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
                  {/* Form toggle tabs */}
                  <div className="flex gap-2 mb-7">
                    <button onClick={() => setActiveForm('student')} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeForm === 'student' ? 'bg-primary text-white shadow-md shadow-blue-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                      <GraduationCap size={16} /> Student Enquiry
                    </button>
                    <button onClick={() => setActiveForm('corporate')} className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${activeForm === 'corporate' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                      <Building2 size={16} /> Corporate Enquiry
                    </button>
                  </div>

                  {activeForm === 'student' ? <>
                      <h2 className="text-xl font-bold text-slate-900 mb-1">Student Enquiry Form</h2>
                      <p className="text-slate-500 text-sm mb-6">Fill in your details and our counsellor will call you back within 24 hours.</p>
                      <StudentEnquiryForm />
                    </> : <>
                      <h2 className="text-xl font-bold text-slate-900 mb-1">Corporate Training Enquiry</h2>
                      <p className="text-slate-500 text-sm mb-6">Tell us about your training needs and we'll send you a customized proposal.</p>
                      <CorporateEnquiryForm />
                    </>}
                </motion.div>
              </div>

              {/* Sidebar: contact info + map */}
              <div className="space-y-6">
                {/* Contact info card */}
                <motion.div initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1,
                ease: 'easeOut' as const
              }} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-5">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">Address</p>
                        <p className="text-slate-700 text-sm leading-relaxed">{contact.info.address}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">Phone</p>
                        <a href={`tel:${contact.info.phone.replace(/\s/g, '')}`} className="text-slate-700 text-sm hover:text-primary transition-colors font-medium">{contact.info.phone}</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">Email</p>
                        <a href={`mailto:${contact.info.email}`} className="text-slate-700 text-sm hover:text-primary transition-colors break-all">{contact.info.email}</a>
                        <br />
                        <a href={`mailto:${contact.info.adminEmail}`} className="text-slate-500 text-xs hover:text-primary transition-colors">{contact.info.adminEmail}</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">Hours</p>
                        <p className="text-slate-700 text-sm">{contact.info.hours}</p>
                        <p className="text-slate-400 text-xs">{contact.info.sunday}</p>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-5 pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                    <a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-semibold py-3 rounded-xl hover:bg-green-600 transition-colors">
                      <MessageCircle size={16} /> Chat on WhatsApp
                    </a>
                    <a href={`tel:${contact.info.phone.replace(/\s/g, '')}`} className="flex items-center justify-center gap-2 border border-slate-200 text-slate-700 text-sm font-semibold py-3 rounded-xl hover:bg-slate-50 transition-colors">
                      <Phone size={16} /> Call Now
                    </a>
                  </div>
                </motion.div>

                {/* Quick links */}
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-4">Explore More</h3>
                  <div className="space-y-2">
                    {[{
                    to: '/courses',
                    label: 'Browse All Courses'
                  }, {
                    to: '/corporate-training',
                    label: 'Corporate Training'
                  }, {
                    to: '/placements',
                    label: 'Placement Assistance'
                  }, {
                    to: '/schools-colleges',
                    label: 'Schools & Colleges'
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

        {/* Google Map */}
        <section className="bg-white" aria-label="Location map">
          <div className="container mx-auto px-4 py-10">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Find Us in Whitefield</h2>
              <p className="text-slate-500 text-sm">Near Kadugodi Tree Park Metro Station, Whitefield, Bangalore – 560066</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm" style={{
            height: '400px'
          }}>
              <iframe title="Aptech Learning Whitefield location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.799066371987!2d77.74653247540166!3d12.984699887331908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0fda424af2a3%3A0x4f2a86074212fb34!2sAptech%20Learning%20Whitefield!5e0!3m2!1sen!2sin!4v1787247367708!5m2!1sen!2sin" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
            </div>
            <div className="mt-4 text-center">
              <a href="https://maps.google.com/?q=Aptech+Learning+Whitefield+Bangalore" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
                <MapPin size={16} /> Open in Google Maps <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 bg-[#F8FAFC]" aria-labelledby="contact-faq-heading">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h2 id="contact-faq-heading" className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-slate-500">Quick answers to the most common questions we receive.</p>
            </div>
            <div className="space-y-3">
              {contact.faqs.map(faq => <div key={faq.id} className="border border-slate-100 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)} className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors text-left" aria-expanded={openFaq === faq.id}>
                    <span className="font-semibold text-slate-800 text-sm pr-4">{faq.q}</span>
                    {openFaq === faq.id ? <ChevronUp size={18} className="text-primary shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                  </button>
                  {openFaq === faq.id && <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{faq.a}</div>}
                </div>)}
            </div>
            <div className="mt-8 text-center">
              <p className="text-slate-500 text-sm mb-3">Still have questions?</p>
              <a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors">
                <MessageCircle size={18} /> Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>;
}
