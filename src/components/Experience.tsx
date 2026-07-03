import { useState } from 'react';
import { EXPERIENCES } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Calendar, ShieldCheck, CheckCircle2, ChevronRight, Milestone, Sparkles } from 'lucide-react';

export default function Experience() {
  const tcsExperience = EXPERIENCES[0];
  const [selectedBank, setSelectedBank] = useState<'CUB' | 'CBI' | 'TNSC'>('CUB');

  const bankDetails = {
    CUB: {
      fullName: 'City Union Bank',
      role: 'Front-end Angular Developer',
      focus: 'Scalable Core Banking UI & Modular Architecture',
      duration: '2023 - Present',
      accomplishments: [
        'Built scalable, high-performance banking modules using Angular 10+ with component-based architecture.',
        'Developed a streamlined Fund Transfer module incorporating multi-factor security verification.',
        'Designed and implemented highly responsive, mobile-first user interfaces for seamless tablet and mobile banking experience.',
        'Managed state streams elegantly using RxJS pipelines, ensuring zero latency on data rendering.',
        'Utilized Reactive Forms with complex validations to enforce error-free user input.'
      ]
    },
    CBI: {
      fullName: 'Central Bank of India',
      role: 'Front-end Integration Specialist',
      focus: 'RESTful API integration, Security Guards, & JSON Data Processing',
      duration: '2022 - 2023',
      accomplishments: [
        'Integrated highly secure RESTful APIs to deliver live data dashboards for financial tracking.',
        'Implemented strict Role-Based Access Control (RBAC) using Angular Route Guards to enforce secure multi-level authentication.',
        'Streamlined JSON data parsing algorithms to optimize dashboard performance by 30%.',
        'Built reusable UI library blocks matching client brand guidelines, standardizing component design.',
        'Collaborated closely with backend security teams to patch and seal data transmission pipelines.'
      ]
    },
    TNSC: {
      fullName: 'TNSC Bank',
      role: 'Core Angular migration & Optimization Engineer',
      focus: 'Legacy Migration (Angular 14) & Stream Optimization',
      duration: '2021 - 2022',
      accomplishments: [
        'Led the migration of legacy front-end applications into modern Angular 14, improving maintainability.',
        'Engineered complex, responsive Transaction History and statement visualizers with lazy-loading filters.',
        'Applied lazy loading strategies and browser caching parameters to improve application start speeds by 25%.',
        'Implemented advanced Angular lifecycle hooks and change detection strategies (OnPush) to lower CPU footprint.',
        'Managed visual regression and cross-browser testing using Git workflows in Agile sprints.'
      ]
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            Career Journey
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white mt-1.5">
            Professional Experience & Client Roles
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-base">
            Over 4 years of continuous service as a specialized Front End Developer at a leading global IT consultancy, spearheading modern digital transformations for leading cooperative and commercial banking institutions.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: TCS Tenure Summary Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg shadow-zinc-100/50 dark:shadow-none relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                    {tcsExperience.company}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mt-0.5 font-mono">
                    <Calendar className="w-4 h-4 text-zinc-400" /> {tcsExperience.period}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
                <p className="leading-relaxed font-sans">
                  Served as a Front-end Developer collaborating in Agile/Scrum environments. Partnered with financial designers, backend security architects, and product managers to release clean, compliant web interfaces.
                </p>
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-2.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono block">
                    Core Technical Strengths:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Angular 10-14', 'TypeScript', 'RxJS', 'RESTful APIs', 'Reactive Forms', 'Git', 'Agile/Scrum'].map(tech => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/40 dark:border-zinc-700/40">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Callout Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center gap-4 shadow-md shadow-blue-500/10">
              <div className="p-2.5 rounded-lg bg-white/10 text-white shrink-0">
                <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
              </div>
              <div className="text-sm">
                <p className="font-semibold">Interactive Banking Switcher</p>
                <p className="text-xs text-white/85 mt-0.5">Select a banking client on the right to review specific modules, technologies, and achievements.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Client Switcher & Specific Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bank Navigation Selector Tabs */}
            <div className="flex rounded-xl bg-zinc-100 dark:bg-zinc-900/60 p-1.5 border border-zinc-200/50 dark:border-zinc-800 max-w-lg no-print">
              {(['CUB', 'CBI', 'TNSC'] as const).map(bankKey => (
                <button
                  key={bankKey}
                  onClick={() => setSelectedBank(bankKey)}
                  className={`flex-1 py-3 text-center text-xs sm:text-sm font-semibold tracking-tight rounded-lg transition-all duration-200 cursor-pointer ${
                    selectedBank === bankKey
                      ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  {bankDetails[bankKey].fullName}
                </button>
              ))}
            </div>

            {/* Selected Bank Details Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBank}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="p-6 sm:p-8 rounded-3xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-lg shadow-zinc-100/50 dark:shadow-none"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 mb-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold tracking-tight mb-2 border border-emerald-100 dark:border-emerald-900/40">
                      <ShieldCheck className="w-3.5 h-3.5" /> SECURE DEPLOYMENT
                    </div>
                    <h4 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white leading-none">
                      {bankDetails[selectedBank].fullName}
                    </h4>
                    <p className="text-sm font-semibold tracking-tight text-zinc-700 dark:text-zinc-300 mt-2">
                      {bankDetails[selectedBank].role}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full self-start shrink-0">
                    {bankDetails[selectedBank].duration}
                  </span>
                </div>

                <div className="space-y-1.5 border-b border-zinc-100 dark:border-zinc-800 pb-5 mb-5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 block">
                    Core Focus Area:
                  </span>
                  <p className="text-sm text-zinc-800 dark:text-zinc-200 font-semibold flex items-center gap-1.5">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    {bankDetails[selectedBank].focus}
                  </p>
                </div>

                {/* Key Accomplishments List */}
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400 block">
                    Key Accomplishments & Responsibilities:
                  </span>
                  <ul className="space-y-3.5">
                    {bankDetails[selectedBank].accomplishments.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
