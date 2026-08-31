import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
const courses = [{
  href: '/courses/ai-machine-learning',
  label: 'AI & Machine Learning'
}, {
  href: '/courses/generative-ai',
  label: 'Generative AI & Prompt Engineering'
}, {
  href: '/courses/data-science',
  label: 'Data Science'
}, {
  href: '/courses/data-analytics-power-bi',
  label: 'Data Analytics & Power BI'
}, {
  href: '/courses/python',
  label: 'Python Programming'
}, {
  href: '/courses/full-stack',
  label: 'Full Stack Development'
}];
const quickLinks = [{
  href: '/',
  label: 'Home'
}, {
  href: '/about',
  label: 'About Us'
}, {
  href: '/corporate-training',
  label: 'Corporate Training'
}, {
  href: '/schools-colleges',
  label: 'Schools & Colleges'
}, {
  href: '/placements',
  label: 'Placements'
}, {
  href: '/blogs',
  label: 'Blog & Resources'
}, {
  href: '/contact',
  label: 'Contact Us'
}, {
  href: '/privacy',
  label: 'Privacy Policy'
}, {
  href: '/terms',
  label: 'Terms of Service'
}];
export default function Footer() {
  return <footer className="bg-[#0A1628] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img src="/assets/media/layouts-footer-cheekira-tech-aptech-learning-whitefield-616ef643.jpg" alt="Cheekira Tech — Aptech Learning Whitefield" className="h-16 w-auto object-contain" />
              
            </Link>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-400 font-bold text-sm tracking-wide">Aptech Learning</span>
              <span className="text-slate-400 text-xs">·</span>
              <span className="text-slate-400 text-xs italic">Unleash your potential</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Aptech Learning Whitefield is an Authorized Aptech Learning Franchise Centre, operated by Cheekira Tech Pvt. Ltd. We deliver industry-ready IT training for students, professionals and corporates.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-700/40 rounded-lg px-3 py-2 mb-5">
            </div>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                
                <Instagram size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                
                <Linkedin size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                
                <Youtube size={16} />
              </a>
              <a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors">
                
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Courses */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 pb-2 border-b border-white/10">Our Courses</h3>
            <ul className="flex flex-col gap-2.5">
              {courses.map(course => <li key={course.href}>
                  <Link to={course.href} className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                  
                    <span className="w-1 h-1 rounded-full bg-primary group-hover:bg-white transition-colors shrink-0"></span>
                    {course.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 pb-2 border-b border-white/10">Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(link => <li key={link.href}>
                  <Link to={link.href} className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                  
                    <span className="w-1 h-1 rounded-full bg-primary group-hover:bg-white transition-colors shrink-0"></span>
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 pb-2 border-b border-white/10">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Aptech Learning Whitefield<br />
                  Near Kadugodi Tree Park Metro<br />
                  Whitefield, Bangalore 560066
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+917411333500" className="text-slate-400 text-sm hover:text-white transition-colors">
                  +91 74113 33500
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:aptechlearningwhitefield@gmail.com" className="text-slate-400 text-sm hover:text-white transition-colors break-all">
                  aptechlearningwhitefield@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:admin@cheekiratech.in" className="text-slate-400 text-sm hover:text-white transition-colors">
                  admin@cheekiratech.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                <div className="text-slate-400 text-sm">
                  <div>Mon – Sat: 10:00 AM – 7:00 PM</div>
                  <div className="text-slate-500">Sunday: Closed</div>
                </div>
              </li>
            </ul>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
              
              Book Free Counselling
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © 2026 Cheekira Tech Pvt. Ltd. | Aptech Learning Whitefield | Authorized Aptech Learning Franchise Centre
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">|</span>
            <Link to="/terms" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-700">|</span>
            <a href="https://www.cheekiratech.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">
              cheekiratech.com
            </a>
          </div>
        </div>
      </div>
    </footer>;
}
