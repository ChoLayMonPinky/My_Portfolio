import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, 
  ArrowUpRight, Cpu, Play, CheckCircle2, Server, FolderGit2,
  ChevronRight, ChevronDown, ChevronUp, Award, GraduationCap, Briefcase
} from 'lucide-react';
import { 
  PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCE, EDUCATION, CERTIFICATIONS 
} from './constants';

const NAV_SECTIONS = ['about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];

// ── Project Links Dropdown Component ─────────────────────────────────────────
function ProjectLinks({ links }: { links: { label: string; url: string; }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  if (links.length <= 1) {
    return (
      <div className="space-y-2">
        {links.map(link => (
          <a 
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider px-4 py-3 bg-white border border-slate-100 text-slate-800 hover:bg-[#0071e3] hover:text-white hover:border-transparent transition-all rounded-xl"
          >
            <span className="flex items-center gap-1.5 font-mono text-[10px]">
              <FolderGit2 size={13} />
              {link.label}
            </span>
            <ArrowUpRight size={13} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider px-4 py-3 transition-all rounded-xl cursor-pointer ${
          isOpen 
            ? 'bg-[#0071e3] text-white border border-transparent' 
            : 'bg-white border border-slate-100 text-slate-800 hover:bg-slate-50'
        }`}
      >
        <span className="flex items-center gap-1.5 font-mono text-[10px]">
          <FolderGit2 size={13} />
          Source Code ({links.length})
        </span>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mt-2 bg-white border border-slate-100 rounded-xl shadow-lg z-10 flex flex-col divide-y divide-slate-100"
          >
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider px-4 py-3 text-slate-700 hover:bg-slate-50 hover:text-[#0071e3] transition-colors"
              >
                <span className="font-mono text-[10px]">{link.label}</span>
                <ArrowUpRight size={12} className="opacity-60" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



// ── Main Page App ─────────────────────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const PROJECT_CATEGORIES = ['All', 'Uni Projects', 'Internship Projects'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const all = ['hero', ...NAV_SECTIONS];
      for (const id of all) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          // Offset top by 100px to account for sticky navbar height
          if (top <= 100 && bottom > 100) { 
            setActiveSection(id); 
            break; 
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 60; // offset of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-primary antialiased selection:bg-accent/10 font-sans">

      {/* ── Sticker Nav Header ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 h-14 flex items-center justify-between ${
        scrolled 
          ? 'bg-white/85 backdrop-blur-xl border-b border-black/5 shadow-sm' 
          : 'bg-white/70 backdrop-blur-md border-b border-transparent'
      }`}>
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between">
          <span 
            onClick={() => scrollTo('hero')} 
            className="text-base font-semibold tracking-tight cursor-pointer hover:opacity-75 transition-opacity"
          >
            {PERSONAL_INFO.name}
          </span>
          
          <div className="hidden md:flex gap-6 items-center">
            {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map(sec => (
              <button 
                key={sec} 
                onClick={() => scrollTo(sec)} 
                className={`text-xs font-medium capitalize transition-colors hover:text-[#0071e3] ${
                  activeSection === sec ? 'text-[#0071e3]' : 'text-[#6e6e73]'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>
          
          {/* Mobile indicator badge */}
          <div className="md:hidden flex items-center">
            <span className="text-[10px] font-mono tracking-wider uppercase bg-slate-100 px-3 py-1 rounded-full text-slate-500 font-bold border border-black/5">
              {activeSection}
            </span>
          </div>
        </div>
      </nav>

      {/* Spacer for sticky header */}
      <div className="h-14" />

      {/* ── Hero Section ── */}
      <section id="hero" className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-12 bg-gradient-to-b from-[#fbfbfd]/70 to-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-xs md:text-sm font-semibold tracking-[0.08em] uppercase text-[#6e6e73]">
            {PERSONAL_INFO.title}
          </p>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-[#1d1d1f] leading-[1.05] font-sans">
            Turning data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#0071e3] to-indigo-600">decisions</span>.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-[#6e6e73] max-w-2xl mx-auto leading-relaxed font-sans">
            National University of Singapore (NUS) graduate specializing in high-performance automation workflows, dynamic KPI dashboards, and enterprise-grade system architecture.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center justify-center pt-6">
            <button 
              onClick={() => scrollTo('projects')} 
              className="px-8 py-3.5 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:shadow-accent/15 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Selected Work
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="px-8 py-3.5 bg-slate-100 hover:bg-slate-200/80 text-primary border border-transparent rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>



      {/* ── About Section ── */}
      <section id="about" className="py-28 px-6 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-2">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0071e3]">About Me</p>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1d1d1f] font-serif italic">
              Analyst by practice.<br />Architect by heart.
            </h2>
          </div>
          <div className="w-16 h-[3px] bg-[#0071e3] mx-auto rounded-full" />
          <p className="text-[#6e6e73] text-base md:text-lg leading-relaxed text-justify max-w-3xl mx-auto pt-4 font-sans">
            {PERSONAL_INFO.summary}
          </p>
        </div>
      </section>

      {/* ── Skills Section ── */}
      <section id="skills" className="py-28 px-6 bg-[#1c1c1e] text-[#f5f5f7] border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-xs font-bold tracking-widest uppercase text-[#2997ff]">Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Tech &amp; Tools</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map(({ category, items }) => (
              <div key={category} className="bg-[#2c2c2e] rounded-2xl p-8 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-all duration-300">
                <div>
                  <p className="text-[10px] font-bold text-[#2997ff] tracking-widest uppercase mb-6">{category}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map(item => (
                      <span 
                        key={item} 
                        className="text-xs font-medium px-3.5 py-1.5 rounded-lg bg-[#3a3a3c] text-slate-200 border border-white/5 hover:border-[#2997ff]/40 hover:bg-[#2997ff]/10 transition-all duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Section ── */}
      <section id="projects" className="py-28 px-6 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0071e3]">Projects</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1d1d1f]">Selected Work</h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {PROJECT_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 text-xs font-bold rounded-full transition-all duration-300 border cursor-pointer uppercase tracking-wider ${
                  selectedCategory === category
                    ? 'bg-[#0071e3] text-white border-transparent'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={project.title} 
                  className="bg-slate-50 rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                >
                  <div className="h-60 bg-slate-100 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <h3 className="text-lg font-bold text-primary group-hover:text-[#0071e3] transition-colors">{project.title}</h3>
                        <span className="text-[9px] font-bold text-[#0071e3] bg-[#0071e3]/5 border border-[#0071e3]/10 px-2.5 py-0.5 rounded-full select-none shrink-0 uppercase tracking-wider">
                          {project.category.replace(' Projects', '')}
                        </span>
                      </div>
                      <p className="text-secondary text-xs leading-relaxed mb-6 block text-justify">{project.description}</p>
                    </div>
                    
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map(tag => (
                          <span key={tag} className="text-[9px] font-mono font-bold uppercase tracking-tight bg-white text-slate-500 border border-slate-100 px-2.5 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <ProjectLinks links={project.links} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Experience Section ── */}
      <section id="experience" className="py-28 px-6 bg-[#fbfbfd]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0071e3]">Timeline</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1d1d1f]">Work History</h2>
          </div>

          <div className="space-y-12 max-w-3xl mx-auto">
            {EXPERIENCE.map(({ role, company, period, bullets, tags }) => (
              <div key={role} className="grid grid-cols-[3px_1fr] gap-[1.5rem] relative group">
                <div className="bg-[#0071e3]/20 group-hover:bg-[#0071e3] w-[3px] rounded-full transition-colors duration-300" />
                
                <div className="space-y-3 pl-3">
                  <span className="text-[10px] font-mono font-bold text-[#0071e3] uppercase tracking-wider block">{period}</span>
                  <h3 className="text-xl font-bold text-[#1d1d1f] tracking-tight">{role}</h3>
                  <p className="text-xs text-[#6e6e73] font-semibold">{company}</p>
                  
                  <ul className="list-disc list-outside pl-4 space-y-2 text-xs text-secondary leading-relaxed">
                    {bullets.map(b => (
                      <li key={b} className="text-justify">{b}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-3">
                    {tags.map(t => (
                      <span key={t} className="text-[9px] font-bold uppercase tracking-wider px-3 py-1 bg-white border border-slate-100 text-slate-600 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education Section ── */}
      <section id="education" className="py-28 px-6 bg-[#1c1c1e] text-[#f5f5f7] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-xs font-bold tracking-widest uppercase text-[#2997ff]">Education</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Academic Background</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {EDUCATION.map(({ degree, school, period }) => (
              <div key={degree} className="bg-[#2c2c2e] rounded-2xl p-6 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-all duration-300">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#2997ff] block mb-3 uppercase tracking-wider">{period}</span>
                  <h4 className="text-sm font-bold text-white leading-snug mb-1">{degree}</h4>
                </div>
                <p className="text-xs text-slate-400 font-medium leading-normal pt-4">{school}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications Section ── */}
      <section id="certifications" className="py-28 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0071e3]">Credentials</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1d1d1f]">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {CERTIFICATIONS.map(({ title, institution, period }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-black/5 flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#0071e3] block mb-3 uppercase tracking-wider">{period}</span>
                  <h4 className="text-sm font-bold text-[#1d1d1f] leading-snug mb-1">{title}</h4>
                </div>
                <p className="text-xs text-secondary font-medium leading-normal pt-4">{institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="contact" className="py-28 px-6 bg-[#1c1c1e] text-[#f5f5f7] text-center border-t border-white/5">
        <div className="max-w-2xl mx-auto space-y-10">
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-widest uppercase text-[#2997ff]">Contact</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
              Let's build something today.
            </h2>
            <p className="text-sm md:text-base text-[#86868b] max-w-lg mx-auto leading-relaxed pt-2">
              Open to Data Analyst, Software Developer, Business Analyst, and AI Automation roles. I review every message.
            </p>
          </div>

          <div className="space-y-3 max-w-xl mx-auto pt-4">
            {[
              { label: 'EMAIL', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
              { label: 'LINKEDIN', value: 'linkedin.com/in/cholaymon', href: PERSONAL_INFO.linkedin },
              { label: 'PHONE', value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
            ].map(({ label, value, href }) => (
              <a 
                key={label} 
                href={href} 
                target={href.startsWith('http') ? '_blank' : undefined} 
                rel="noreferrer"
                className="flex justify-between items-center py-5 px-6 bg-[#2c2c2e] hover:bg-[#3a3a3c] border border-white/5 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.2)] hover:border-[#2997ff]/40 transition-all duration-300 group"
              >
                <span className="text-[10px] font-bold text-[#86868b] uppercase tracking-wider font-mono">{label}</span>
                <span className="text-xs sm:text-[13px] text-white font-bold truncate pl-4 tracking-tight group-hover:text-[#2997ff] transition-colors">{value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#1c1c1e] border-t border-white/5 py-12 px-6 text-center text-xs text-slate-500 space-y-2">
        <p className="font-semibold select-none">© 2026 CHO LAY MON @ PINKY • Singapore</p>
      </footer>
    </div>
  );
}
