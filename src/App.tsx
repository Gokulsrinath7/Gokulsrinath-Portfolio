import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import BankingShowcase from './components/BankingShowcase';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import { PERSONAL_INFO } from './data';
import { Terminal, Shield, Cpu, Code2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300">
      
      {/* Fixed Sticky Header */}
      <Header />

      {/* Main Content Layout */}
      <main>
        {/* About / Introduction */}
        <Hero />

        {/* Technical Skills Stack */}
        <Skills />

        {/* Professional Career Journey */}
        <Experience />

        {/* Showstopper Showcases */}
        <BankingShowcase />

        {/* Certifications and Badges */}
        <Certifications />

        {/* Education & Languages */}
        <Education />

        {/* Secure Contact Block */}
        <Contact />
      </main>

      {/* High-End Professional Footer */}
      <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900/60 font-sans no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-zinc-900 pb-8 mb-8">
            {/* Logo/Identity */}
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/10">
                  <Code2 className="w-4.5 h-4.5" />
                </div>
                <span className="font-sans font-bold text-base text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed font-sans">
                Professional Senior Front End Developer specializing in robust Angular, TypeScript, and RxJS-driven financial web modules.
              </p>
            </div>

            {/* Quick navigations */}
            <div className="md:col-span-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium justify-start md:justify-center">
              <a href="#home" className="hover:text-white transition-colors">About</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <a href="#demo" className="hover:text-white transition-colors">Sandbox Demo</a>
              <a href="#certifications" className="hover:text-white transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            {/* Core Badges */}
            <div className="md:col-span-4 flex justify-start md:justify-end gap-3 text-xs font-mono font-bold uppercase tracking-wider text-zinc-600">
              <span className="flex items-center gap-1 bg-zinc-900 px-2.5 py-1.5 rounded-lg border border-zinc-850/50">
                <Shield className="w-3.5 h-3.5 text-blue-500" /> CUB SECURED
              </span>
              <span className="flex items-center gap-1 bg-zinc-900 px-2.5 py-1.5 rounded-lg border border-zinc-850/50">
                <Terminal className="w-3.5 h-3.5 text-emerald-500" /> ANGULAR 14
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</p>
            <p className="flex items-center gap-1.5 text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Engineered using React, Vite, and Tailwind CSS.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
