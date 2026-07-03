import { useState, useEffect } from 'react';
import { Menu, X, Code, Mail, Phone, MapPin, Award, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';
import { PERSONAL_INFO } from '../data';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'demo', label: 'Banking Simulator' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 no-print ${
        scrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      {/* Top micro-contact bar (Desktop only) */}
      <div className="hidden lg:block border-b border-zinc-100 dark:border-zinc-900/50 py-1.5 bg-zinc-50/50 dark:bg-zinc-950/30 text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer">
              <Mail className="w-3.5 h-3.5 text-zinc-400" /> {PERSONAL_INFO.email}
            </span>
            <span className="flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer">
              <Phone className="w-3.5 h-3.5 text-zinc-400" /> {PERSONAL_INFO.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" /> {PERSONAL_INFO.location}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for New Opportunities
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Name */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-200">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <span className="font-sans font-bold text-lg leading-none tracking-tight text-zinc-900 dark:text-white block">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mt-0.5 font-semibold">
                Front End Engineer
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium tracking-tight transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5">
            <a
              href="assets/files/Gokulsrinath Resume 1_1480.pdf"
              download="gokulsrinath-portfolio-project.zip"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-200 cursor-pointer shadow-sm shadow-blue-500/10 no-print"
              title="Download full project source code as a ZIP file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download CV</span>
            </a>

            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-200 shadow-sm focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-900 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5 max-h-[80vh] overflow-y-auto">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 font-semibold'
                      : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                </button>
              ))}

              <div className="border-t border-zinc-100 dark:border-zinc-900 pt-4 mt-4 px-4 space-y-3.5">
                <a
                  href="/project.zip"
                  download="gokulsrinath-portfolio-project.zip"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 cursor-pointer text-center"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Project ZIP</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <Phone className="w-4 h-4 text-zinc-400" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
