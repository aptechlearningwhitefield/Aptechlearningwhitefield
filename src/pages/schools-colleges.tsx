import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { useState } from 'react';
import { seoMetadata } from '../lib/seo-metadata';
import { School, GraduationCap, CheckCircle, ChevronDown, ChevronUp, Send, Phone, MessageCircle, ArrowRight, Users, Award, Clock, BookOpen } from 'lucide-react';
import { schools } from 'virtual:content';
const site = 'https://www.cheekiratech.com';
const benefitIcons = [Award, Users, Clock, School, BookOpen, GraduationCap];
const schoolCollegeCourses = [
  {
    id: 'warrior-of-logic-building',
    name: 'Warrior of Logic Building',
    duration: '30 hours',
    topics: ['Basics of Logic Building and Programming', 'Understanding C Programming'],
    level: 'Foundation program'
  },
  {
    id: 'gladiator-in-website-designing',
    name: 'Gladiator in Website Designing',
    duration: '30 hours',
    topics: ['Basics of Web Designing', 'Designing Modernistic Websites'],
    level: 'Beginner program'
  },
  {
    id: 'gladiator-of-python-programming',
    name: 'Gladiator of Python Programming',
    duration: '30 hours',
    topics: ['Programming with Python'],
    level: 'Beginner program'
  }
];

// ─── Partnership Enquiry Form ─────────────────────────────────────────────────
function PartnershipForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [gotcha, setGotcha] = useState('');
  const [institution, setInstitution] = useState('');
  const [contact, setContact] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [programType, setProgramType] = useState('');
  const [students, setStudents] = useState('');
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
              body: message || 'School/College partnership enquiry'
            }],
            data: {
              __gd_contact_form_title: 'Schools & Colleges Partnership Enquiry',
              'Institution Name': institution,
              'Contact Person': contact,
              'Role / Designation': role,
              'Phone': phone,
              'Program Type': programType,
              'Number of Students': students
            }
          },
          user: {
            email,
            name: contact
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
        <h3 className="text-xl font-bold text-slate-900 mb-2">Enquiry Received!</h3>
        <p className="text-slate-500 mb-4">We'll reach out within 24 hours to discuss a partnership.</p>
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
          <label htmlFor="sc-institution" className="block text-xs font-semibold text-slate-600 mb-1.5">Institution Name *</label>
          <input id="sc-institution" type="text" required value={institution} onChange={e => setInstitution(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="School or college name" />
        </div>
        <div>
          <label htmlFor="sc-contact" className="block text-xs font-semibold text-slate-600 mb-1.5">Contact Person *</label>
          <input id="sc-contact" type="text" required value={contact} onChange={e => setContact(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="Your name" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="sc-role" className="block text-xs font-semibold text-slate-600 mb-1.5">Role / Designation</label>
          <input id="sc-role" type="text" value={role} onChange={e => setRole(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="e.g. Principal, HOD, TPO" />
        </div>
        <div>
          <label htmlFor="sc-phone" className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number *</label>
          <input id="sc-phone" type="tel" required value={phone} onChange={e => setPhone(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>
      <div>
        <label htmlFor="sc-email" className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
        <input id="sc-email" type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder="official@institution.edu" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="sc-program" className="block text-xs font-semibold text-slate-600 mb-1.5">Program Type</label>
          <select id="sc-program" value={programType} onChange={e => setProgramType(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
            <option value="">Select program</option>
            <option>Coding for Kids</option>
            <option>AI & Robotics</option>
            <option>Python Programming</option>
            <option>Holiday Tech Camp</option>
            <option>Digital Literacy</option>
            <option>Campus Placement Readiness</option>
            <option>Final Year Project Support</option>
            <option>Industry Workshop</option>
            <option>Internship Program</option>
            <option>MoU Partnership</option>
            <option>Multiple / Custom</option>
          </select>
        </div>
        <div>
          <label htmlFor="sc-students" className="block text-xs font-semibold text-slate-600 mb-1.5">Approx. Number of Students</label>
          <select id="sc-students" value={students} onChange={e => setStudents(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white">
            <option value="">Select range</option>
            <option>15–30</option>
            <option>31–60</option>
            <option>61–100</option>
            <option>101–200</option>
            <option>200+</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="sc-message" className="block text-xs font-semibold text-slate-600 mb-1.5">Additional Details</label>
        <textarea id="sc-message" rows={3} value={message} onChange={e => setMessage(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none" placeholder="Tell us about your requirements, preferred dates, or any specific needs..." />
      </div>
      <button type="submit" disabled={status === 'loading'} className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 disabled:opacity-60 flex items-center justify-center gap-2 text-sm">
        {status === 'loading' ? 'Submitting...' : <><Send size={16} /> Send Partnership Enquiry</>}
      </button>
      {status === 'error' && <p className="text-red-500 text-xs text-center mt-2">Something went wrong. Please call us at +91 74113 33500.</p>}
    </form>;
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function SchoolsCollegesPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  return <>
      <Helmet>
        <title>{seoMetadata.schoolsColleges.title}</title>
        <meta name="description" content={seoMetadata.schoolsColleges.description} />
        <meta name="keywords" content={seoMetadata.schoolsColleges.keywords} />
        <link rel="canonical" href={seoMetadata.schoolsColleges.canonical} />
        <meta property="og:title" content={seoMetadata.schoolsColleges.ogTitle} />
        <meta property="og:description" content={seoMetadata.schoolsColleges.ogDescription} />
        <meta property="og:url" content={seoMetadata.schoolsColleges.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoMetadata.schoolsColleges.ogTitle} />
        <meta name="twitter:description" content={seoMetadata.schoolsColleges.ogDescription} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0F2347 55%, #1a3a6b 100%)'
      }} aria-label="Schools and colleges hero">
          <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
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
                  <School size={14} className="text-blue-300" />
                  <span className="text-white/90 text-xs font-medium">{schools.hero.badge}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">{schools.hero.title}</h1>
                <p className="text-blue-200 text-lg mb-8 leading-relaxed">{schools.hero.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <a href="#partnership-form" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/30">
                    <Send size={16} /> {schools.hero.cta1}
                  </a>
                  <a href="tel:+917411333500" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors">
                    <Phone size={16} /> {schools.hero.cta2}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-14 bg-[#F8FAFC]" aria-labelledby="programs-section-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 id="programs-section-heading" className="text-3xl font-extrabold text-slate-900 mb-3">Explore Our Courses</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Focused technology programs designed to build practical, future-ready skills for students.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schoolCollegeCourses.map((course, i) => <motion.div key={course.id} initial={{
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
            }} className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <BookOpen size={22} />
                    </div>
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">{course.level}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{course.name}</h3>
                  <p className="flex items-center gap-1.5 text-xs text-slate-400 mb-4"><Clock size={13} /> {course.duration}</p>
                  <ol className="space-y-1.5 text-sm text-slate-500 leading-relaxed list-decimal list-inside">
                    {course.topics.map(topic => <li key={topic}>{topic}</li>)}
                  </ol>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-14 bg-white" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 id="benefits-heading" className="text-3xl font-extrabold text-slate-900 mb-3">Why Partner With Us?</h2>
              <p className="text-slate-500 max-w-xl mx-auto">We make it easy for institutions to deliver world-class technology education without the overhead.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schools.benefits.map((b, i) => {
              const Icon = benefitIcons[i % benefitIcons.length];
              return <motion.div key={b.id} initial={{
                opacity: 0,
                y: 16
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.35,
                delay: i * 0.07,
                ease: 'easeOut' as const
              }} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{b.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  </motion.div>;
            })}
            </div>
          </div>
        </section>

        {/* Partnership Form + Sidebar */}
        <section id="partnership-form" className="py-14 bg-[#F8FAFC]" aria-labelledby="partner-form-heading">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
                  <h2 id="partner-form-heading" className="text-2xl font-extrabold text-slate-900 mb-1">Partner With Us</h2>
                  <p className="text-slate-500 text-sm mb-7">Fill in your details and our team will reach out within 24 hours to discuss a tailored program for your institution.</p>
                  <PartnershipForm />
                </div>
              </div>
              <div className="space-y-5">
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-4">Contact Us Directly</h3>
                  <div className="space-y-3">
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
                <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-4">Explore More</h3>
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
        <section className="py-14 bg-white" aria-labelledby="sc-faq-heading">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <h2 id="sc-faq-heading" className="text-3xl font-extrabold text-slate-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-slate-500">Common questions from principals, HODs, and placement officers.</p>
            </div>
            <div className="space-y-3">
              {schools.faqs.map(faq => <div key={faq.id} className="border border-slate-100 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)} className="w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors text-left" aria-expanded={openFaq === faq.id}>
                    <span className="font-semibold text-slate-800 text-sm pr-4">{faq.q}</span>
                    {openFaq === faq.id ? <ChevronUp size={18} className="text-primary shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                  </button>
                  {openFaq === faq.id && <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{faq.a}</div>}
                </div>)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #1a3a6b 100%)'
      }} aria-label="Schools colleges CTA">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-3">Ready to Bring Tech Education to Your Institution?</h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">Join 50+ schools and colleges across Bangalore that trust Aptech Learning Whitefield.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#partnership-form" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-xl hover:bg-blue-600 transition-all">
                <Send size={16} /> Partner With Us
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
