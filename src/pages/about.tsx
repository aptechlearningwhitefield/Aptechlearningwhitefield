import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from "react-router";
import { motion } from 'motion/react';
import { seoMetadata } from '../lib/seo-metadata';
import { CheckCircle, ArrowRight, Phone, MessageCircle, Star, Award, Users, Target, Eye, Heart, MapPin, Wifi, Monitor, BookOpen, Briefcase, Clock } from 'lucide-react';
import { about } from 'virtual:content';
const site = 'https://www.cheekiratech.com';

// ─── Fade-in helper ───────────────────────────────────────────────────────────
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

// Icon map for centre features
const centreIcons = [Monitor, Award, Wifi, Briefcase, BookOpen, Clock];

// Icon map for values
const valueIcons = [Award, Target, Heart, Users];
export default function AboutPage() {
  return <>
      <Helmet>
        <title>{seoMetadata.about.title}</title>
        <meta name="description" content={seoMetadata.about.description} />
        <meta name="keywords" content={seoMetadata.about.keywords} />
        <link rel="canonical" href={seoMetadata.about.canonical} />
        <meta property="og:title" content={seoMetadata.about.ogTitle} />
        <meta property="og:description" content={seoMetadata.about.ogDescription} />
        <meta property="og:url" content={seoMetadata.about.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoMetadata.about.ogTitle} />
        <meta name="twitter:description" content={seoMetadata.about.ogDescription} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-16 md:py-24" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0F2347 55%, #1a3a6b 100%)'
      }} aria-label="About hero">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
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
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/90 text-xs font-medium">{about.hero.badge}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                  {about.hero.title}
                </h1>
                <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                  {about.hero.subtitle}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-xl hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/30">
                    <BookOpen size={16} /> Book Free Counselling
                  </Link>
                  <a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-green-600 transition-colors">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS BAR ─────────────────────────────────────────────── */}
        <section className="bg-white border-b border-slate-100 shadow-sm" aria-label="Key achievements">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {about.achievements.map((item, i) => <motion.div key={item.id} initial={{
              opacity: 0,
              y: 16
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: i * 0.07,
              ease: 'easeOut' as const
            }} className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-primary mb-0.5">
                    {item.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-800">{item.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{item.sub}</div>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* ── OUR STORY ────────────────────────────────────────────────────── */}
        <section className="py-20 bg-white" aria-labelledby="story-heading">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Left: text */}
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-primary text-xs font-semibold">{about.story.badge}</span>
                </div>
                <h2 id="story-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                  {about.story.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">{about.story.body1}</p>
                <p className="text-slate-600 leading-relaxed mb-4">{about.story.body2}</p>
                <p className="text-slate-600 leading-relaxed mb-7">{about.story.body3}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {about.story.highlights.map((h) => <li key={h.id} className="flex items-start gap-2.5">
                      <CheckCircle size={17} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-slate-700 text-sm">{h.text}</span>
                    </li>)}
                </ul>
              </FadeIn>

              {/* Right: image + badge */}
              <FadeIn delay={0.15}>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src="https://img1.wsimg.com/isteam/getty/1072471128" alt="Aptech Learning Whitefield training centre in Bangalore" className="w-full h-[420px] object-cover" loading="lazy" width={600} height={420} />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-5 -left-5 bg-[#0A1628] text-white rounded-xl p-5 shadow-xl">
                    <div className="flex items-center gap-2 mb-1">
                      {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={13} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <div className="text-white font-bold text-sm">Authorized Aptech Centre</div>
                    <div className="text-slate-400 text-xs mt-0.5">Whitefield, Bangalore</div>
                  </div>
                  {/* Top-right badge */}
                  <div className="absolute -top-4 -right-4 bg-primary text-white rounded-xl px-4 py-3 shadow-lg text-center">
                    <div className="text-2xl font-extrabold">40+</div>
                    <div className="text-xs text-blue-200">Years of Aptech</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── MISSION, VISION & VALUES ─────────────────────────────────────── */}
        <section className="py-20 bg-[#F8FAFC]" aria-labelledby="mission-heading">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-12">
              <h2 id="mission-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                {about.mission.title}
              </h2>
            </FadeIn>

            {/* Mission + Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Mission */}
              <FadeIn>
                <div className="rounded-2xl p-8 h-full" style={{
                background: 'linear-gradient(135deg, #0A1628 0%, #1a3a6b 100%)'
              }}>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                    <Target size={24} className="text-blue-300" />
                  </div>
                  <div className="text-blue-300 text-xs font-semibold uppercase tracking-wide mb-2">
                    {about.mission.mission.label}
                  </div>
                  <p className="text-white text-lg font-medium leading-relaxed">
                    {about.mission.mission.text}
                  </p>
                </div>
              </FadeIn>

              {/* Vision */}
              <FadeIn delay={0.1}>
                <div className="bg-primary rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                    <Eye size={24} className="text-white" />
                  </div>
                  <div className="text-blue-200 text-xs font-semibold uppercase tracking-wide mb-2">
                    {about.mission.vision.label}
                  </div>
                  <p className="text-white text-lg font-medium leading-relaxed">
                    {about.mission.vision.text}
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {about.mission.values.map((val, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return <motion.div key={val.id} initial={{
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
              }} className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{val.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
                  </motion.div>;
            })}
            </div>
          </div>
        </section>

        {/* ── THE APTECH ADVANTAGE ─────────────────────────────────────────── */}
        <section className="py-20 bg-white" aria-labelledby="aptech-heading">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Left: image */}
              <FadeIn>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src="https://img1.wsimg.com/isteam/getty/2275807131" alt="Aptech Learning global IT training network" className="w-full h-[400px] object-cover" loading="lazy" width={600} height={400} />
                  </div>
                  {/* Stats overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-0 right-0 md:right-2 lg:right-8 p-6 pr-0 md:pr-2 lg:pr-6">
                    <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
                        {about.aptech.stats.map((stat) => <div key={stat.id} className="w-[150px] sm:w-[170px] md:w-[190px] bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 flex min-h-[88px] flex-col items-center justify-center text-center">
                            <div className="w-full text-center text-[1.8rem] md:text-[2.5rem] font-extrabold text-white leading-none tracking-tight tabular-nums whitespace-nowrap"><span className="inline-block text-center">{stat.value}</span></div>
                            <div className="text-blue-200 text-[11px] md:text-xs mt-2 leading-snug text-center max-w-[150px]">{stat.label}</div>
                          </div>)}
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Right: text */}
              <FadeIn delay={0.15}>
                <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
                  <Award size={14} className="text-primary" />
                  <span className="text-primary text-xs font-semibold">{about.aptech.badge}</span>
                </div>
                <h2 id="aptech-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
                  {about.aptech.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-7">{about.aptech.body}</p>
                <ul className="space-y-3">
                  {about.aptech.points.map((pt) => <li key={pt.id} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle size={14} className="text-primary" />
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">{pt.text}</span>
                    </li>)}
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── OUR CENTRE ───────────────────────────────────────────────────── */}
        <section className="py-20 bg-[#F8FAFC]" aria-labelledby="centre-heading">
          <div className="container mx-auto px-4">
            <FadeIn className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
                <MapPin size={14} className="text-primary" />
                <span className="text-primary text-xs font-semibold">{about.centre.badge}</span>
              </div>
              <h2 id="centre-heading" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
                {about.centre.title}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">{about.centre.body}</p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {about.centre.features.map((feat, i) => {
              const Icon = centreIcons[i % centreIcons.length];
              return <motion.div key={feat.id} initial={{
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
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{feat.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
                  </motion.div>;
            })}
            </div>

            {/* Map */}
            <FadeIn>
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d77.7480!3d12.9698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzExLjMiTiA3N8KwNDQnNTIuOCJF!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin" width="100%" height="300" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Aptech Learning Whitefield location — near Kadugodi Tree Park Metro" />
              </div>
              <p className="text-center text-slate-500 text-sm mt-3 flex items-center justify-center gap-1.5">
                <MapPin size={14} className="text-primary" />
                Near Kadugodi Tree Park Metro Station, Whitefield, Bangalore 560066
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-20 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #0A1628 0%, #0F2347 60%, #1a3a6b 100%)'
      }} aria-label="About page CTA">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-1.5 mb-5">
                  <CheckCircle size={14} className="text-green-400" />
                  <span className="text-green-300 text-xs font-medium">Free Career Counselling Available</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  {about.cta.title}
                </h2>
                <p className="text-blue-200 text-lg mb-8 leading-relaxed">{about.cta.subtitle}</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-xl hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/30">
                    <ArrowRight size={16} /> {about.cta.cta1}
                  </Link>
                  <a href="tel:+917411333500" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-colors">
                    <Phone size={16} /> {about.cta.cta2}
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-300">
                  <Link to="/courses" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <ArrowRight size={13} /> Browse Courses
                  </Link>
                  <Link to="/placements" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <ArrowRight size={13} /> Placement Record
                  </Link>
                  <Link to="/corporate-training" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <ArrowRight size={13} /> Corporate Training
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </>;
}
