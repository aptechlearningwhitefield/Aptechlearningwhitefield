import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { seoMetadata } from '../lib/seo-metadata';
import { Briefcase, CheckCircle, Star, ArrowRight, Phone, MessageCircle, TrendingUp, Users, Award, FileText, Linkedin, Github } from 'lucide-react';
import { placements } from 'virtual:content';
const site = 'https://www.cheekiratech.com';
const supportIcons = [FileText, Linkedin, Github, Users, Briefcase, Award];
export default function PlacementsPage() {
  return <>
      <Helmet>
        <title>{seoMetadata.placements.title}</title>
        <meta name="description" content={seoMetadata.placements.description} />
        <meta name="keywords" content={seoMetadata.placements.keywords} />
        <link rel="canonical" href={seoMetadata.placements.canonical} />
        <meta property="og:title" content={seoMetadata.placements.ogTitle} />
        <meta property="og:description" content={seoMetadata.placements.ogDescription} />
        <meta property="og:url" content={seoMetadata.placements.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoMetadata.placements.ogTitle} />
        <meta name="twitter:description" content={seoMetadata.placements.ogDescription} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(seoMetadata.placements.structuredData)}</script>
      </Helmet>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0F2347 55%, #1a3a6b 100%)'
      }} aria-label="Placements hero">
          <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  <Briefcase size={14} className="text-blue-300" />
                  <span className="text-white/90 text-xs font-medium">{placements.hero.badge}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">{placements.hero.title}</h1>
                <p className="text-blue-200 text-lg mb-8 leading-relaxed">{placements.hero.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/courses" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/30">
                    <ArrowRight size={16} /> {placements.hero.cta1}
                  </Link>
                  <a href="tel:+917411333500" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors">
                    <Phone size={16} /> {placements.hero.cta2}
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              x: 24
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5,
              delay: 0.15,
              ease: 'easeOut' as const
            }} className="grid grid-cols-2 gap-4">
                {placements.stats.map(stat => <div key={stat.id} className="bg-white/10 border border-white/15 rounded-2xl p-6 text-center backdrop-blur-sm">
                    <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>)}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Placement Process */}
        <section className="py-16 bg-white" aria-labelledby="process-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="process-heading" className="text-3xl font-extrabold text-slate-900 mb-3">Our Placement Process</h2>
              <p className="text-slate-500 max-w-xl mx-auto">A structured 4-step process that takes you from course completion to your first job offer.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {placements.process.map((step, i) => <motion.div key={step.id} initial={{
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
                  {i < placements.process.length - 1 && <div className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-slate-100" />}
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Hiring Partners */}
        <section className="py-16 bg-[#F8FAFC]" aria-labelledby="partners-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 id="partners-heading" className="text-3xl font-extrabold text-slate-900 mb-3">Our Hiring Partners</h2>
              <p className="text-slate-500 max-w-xl mx-auto">100+ companies actively recruit from Aptech Learning Whitefield — from MNCs to fast-growing startups.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {placements.hiringPartners.map((partner, i) => <motion.div key={partner.id} initial={{
              opacity: 0,
              scale: 0.95
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.3,
              delay: i * 0.04,
              ease: 'easeOut' as const
            }} className="bg-white border border-slate-100 rounded-xl p-4 text-center hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <div className="font-semibold text-slate-800 text-sm">{partner.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{partner.type}</div>
                </motion.div>)}
            </div>
            <p className="text-center text-slate-400 text-sm mt-6">+ 88 more companies in our hiring network</p>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 bg-white" aria-labelledby="success-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 id="success-heading" className="text-3xl font-extrabold text-slate-900 mb-3">Student Success Stories</h2>
              <p className="text-slate-500 max-w-xl mx-auto">Real students. Real jobs. Real salaries.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placements.successStories.map((story, i) => <motion.div key={story.id} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: i * 0.08,
              ease: 'easeOut' as const
            }} className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, si) => <Star key={si} size={13} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">"{story.quote}"</p>
                  <div className="border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-primary font-bold text-sm">{story.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{story.name}</div>
                        <div className="text-slate-400 text-xs">{story.course}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Briefcase size={12} />
                        <span>{story.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-green-600">
                        <TrendingUp size={12} />
                        <span>{story.package}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Placement Support */}
        <section className="py-16 bg-[#F8FAFC]" aria-labelledby="support-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 id="support-heading" className="text-3xl font-extrabold text-slate-900 mb-3">What Our Placement Cell Offers</h2>
              <p className="text-slate-500 max-w-xl mx-auto">End-to-end support from course completion to your first day at work.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placements.placementSupport.map((item, i) => {
              const Icon = supportIcons[i % supportIcons.length];
              return <motion.div key={item.id} initial={{
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
              }} className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
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

        {/* CTA */}
        <section className="py-14" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #1a3a6b 100%)'
      }} aria-label="Placements CTA">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-1.5 mb-5">
              <CheckCircle size={14} className="text-green-400" />
              <span className="text-green-300 text-xs font-medium">95%+ Placement Rate</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-3">Ready to Launch Your IT Career?</h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">Enroll in a course today and let our placement cell do the heavy lifting to get you hired.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/courses" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-xl hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/30">
                <ArrowRight size={16} /> Explore Courses
              </Link>
              <a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-green-600 transition-colors">
                <MessageCircle size={16} /> Talk to a Counsellor
              </a>
            </div>
          </div>
        </section>
      </main>
    </>;
}
