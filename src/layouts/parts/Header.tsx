import { Link, useLocation } from "react-router";
import { Menu, X, Phone, MessageCircle, ChevronDown, Cpu, Zap, BarChart3, TrendingUp, Code, Globe, Brain, Database, Layers } from 'lucide-react';
import { useState } from 'react';
interface NavChild {
  href: string;
  label: string;
  children?: NavChild[];
}
interface NavItem {
  href: string;
  label: string;
  children?: NavChild[];
}
const navItems: NavItem[] = [{
  href: '/',
  label: 'Home'
}, {
  href: '/about',
  label: 'About'
}, {
  href: '/courses',
  label: 'Courses',
  children: [{
    href: '/courses/ai-machine-learning',
    label: 'AI & Machine Learning'
  }, {
    href: '/courses/data-science',
    label: 'Data Science'
  }, {
    href: '/courses/generative-ai',
    label: 'Generative AI',
    children: [{
      href: '/courses/genai-accelerator',
      label: 'GenAI Accelerator'
    }, {
      href: '/courses/prompt-engineering',
      label: 'Prompt Engineering'
    }, {
      href: '/courses/innovate-generative-ai',
      label: 'Innovate with Generative AI'
    }, {
      href: '/courses/rapid-app-development',
      label: 'Rapid App Development (Low/No-Code)'
    }]
  }, {
    href: '/courses/data-analytics-power-bi',
    label: 'Data Analytics & Power BI'
  }, {
    href: '/courses/python',
    label: 'Python Programming'
  }, {
    href: '/courses/full-stack',
    label: 'Full Stack Development'
  }, {
    href: '/courses/data-science-essentials',
    label: 'Data Science Essentials'
  }, {
    href: '/courses/data-visualization-power-bi',
    label: 'Data Visualization using Power BI'
  }, {
    href: '/courses/foundation-ai-ml',
    label: 'Foundation AI & Machine Learning'
  }, {
    href: '/courses/advanced-ai-ml',
    label: 'Advanced AI & Machine Learning'
  }]
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
  label: 'Blogs'
}, {
  href: '/contact',
  label: 'Contact'
}];
const courseMenuIcons: Record<string, React.ReactNode> = {
  '/courses/ai-machine-learning': <Cpu size={16} />,
  '/courses/data-science': <BarChart3 size={16} />,
  '/courses/generative-ai': <Brain size={16} />,
  '/courses/genai-accelerator': <Zap size={16} />,
  '/courses/prompt-engineering': <Layers size={16} />,
  '/courses/innovate-generative-ai': <Zap size={16} />,
  '/courses/rapid-app-development': <Code size={16} />,
  '/courses/data-analytics-power-bi': <TrendingUp size={16} />,
  '/courses/python': <Code size={16} />,
  '/courses/full-stack': <Globe size={16} />,
  '/courses/data-science-essentials': <Database size={16} />,
  '/courses/data-visualization-power-bi': <TrendingUp size={16} />,
  '/courses/foundation-ai-ml': <Cpu size={16} />,
  '/courses/advanced-ai-ml': <Brain size={16} />
};
export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  return <>
      {/* Top bar */}
      <div className="hidden md:block bg-[#0A1628] text-white text-xs py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-slate-300 font-bold">APTECH LEARNING WHITEFIELD | LEADING IT TRAINING INSTITUTE IN BANGALORE                                                                                                                                                                                                                       CONTACT

        </span>
          <div className="flex items-center gap-4">
            <a href="tel:+917411333500" className="flex items-center gap-1 hover:text-blue-300 transition-colors">
              <Phone size={12} />
              +91 74113 33500
            </a>
            <a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-green-300 transition-colors">
              
              <MessageCircle size={12} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img src="/airo-assets/images/layouts/header/cheekira-tech-aptech-learning-whitefield" alt="Cheekira Tech — Aptech Learning Whitefield" className="h-20 w-auto object-contain shrink-0" />
              
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-[11px] font-bold text-slate-800 tracking-wide uppercase">APTECH LEARNING</span>
                <span className="text-[10px] text-slate-500 font-medium">Whitefield · Unleash your potential</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center">
              {navItems.map((item) => item.children ? <div key={item.href} className="relative" onMouseEnter={() => setOpenDropdown(item.href)} onMouseLeave={() => setOpenDropdown(null)}>
                
                    <button className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md transition-colors hover:text-primary hover:bg-blue-50 ${location.pathname.startsWith(item.href) && item.href !== '/' ? 'text-primary' : 'text-slate-700'}`}>
                  
                      {item.label}
                      <ChevronDown size={14} />
                    </button>
                    {openDropdown === item.href && <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                        {item.children.map((child) => <div key={child.href}>
                          <Link to={child.href} className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${child.children ? 'font-semibold text-slate-900' : 'text-slate-700 hover:bg-blue-50 hover:text-primary'}`}>
                            <span className="text-primary/80 shrink-0">{courseMenuIcons[child.href]}</span>{child.label}
                          </Link>
                          {child.children && <div className="border-l-2 border-blue-100 ml-4 mb-1">
                            {child.children.map((subChild) => <Link key={subChild.href} to={subChild.href} className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-600 hover:bg-blue-50 hover:text-primary transition-colors"><span className="text-primary/70 shrink-0">{courseMenuIcons[subChild.href]}</span>{subChild.label}</Link>)}
                          </div>}
                        </div>)}
                      </div>}
                  </div> : <Link key={item.href} to={item.href} className={`text-sm font-medium px-3 py-2 rounded-md transition-colors hover:text-primary hover:bg-blue-50 ${location.pathname === item.href ? 'text-primary font-semibold' : 'text-slate-700'}`}>
                
                    {item.label}
                  </Link>)}
            </nav>

            {/* CTA */}
            <div className="hidden xl:flex items-center gap-2 shrink-0">
              <Link to="/contact" className="bg-primary text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                
                Book Free Counselling
              </Link>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="xl:hidden p-2 hover:bg-slate-100 rounded-md transition-colors" aria-label="Toggle menu">
              
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && <div className="xl:hidden border-t border-slate-100 bg-white shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => <div key={item.href}>
                  <Link to={item.href} className={`block text-sm font-medium py-2.5 px-3 rounded-md transition-colors hover:bg-blue-50 hover:text-primary ${location.pathname === item.href ? 'text-primary bg-blue-50' : 'text-slate-700'}`} onClick={() => setIsMobileMenuOpen(false)}>
                
                    {item.label}
                  </Link>
                  {item.children && <div className="pl-4 flex flex-col gap-0.5">
                      {item.children.map((child) => <div key={child.href}>
                        <Link to={child.href} className={`flex items-center gap-2 text-xs py-1.5 px-3 transition-colors ${child.children ? 'font-semibold text-slate-700' : 'text-slate-500 hover:text-primary'}`} onClick={() => setIsMobileMenuOpen(false)}><span className="text-primary/80">{courseMenuIcons[child.href]}</span>{child.label}</Link>
                        {child.children && <div className="border-l-2 border-blue-100 ml-3">
                          {child.children.map((subChild) => <Link key={subChild.href} to={subChild.href} className="flex items-center gap-2 text-xs text-slate-400 py-1 px-3 hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}><span className="text-primary/70">{courseMenuIcons[subChild.href]}</span>{subChild.label}</Link>)}
                        </div>}
                      </div>)}
                    </div>}
                </div>)}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <Link to="/contact" className="bg-primary text-white text-sm font-semibold px-4 py-3 rounded-lg text-center hover:bg-blue-700 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                
                  Book Free Career Counselling
                </Link>
                <div className="flex gap-2">
                  <a href="tel:+917411333500" className="flex-1 flex items-center justify-center gap-2 border border-slate-200 text-slate-700 text-sm font-medium py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                  
                    <Phone size={16} />
                    Call Now
                  </a>
                  <a href="https://wa.me/917411333500" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-green-600 transition-colors">
                  
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>}
      </header>
    </>;
}
