import { useState } from 'react';
import { SKILLS } from '../data';
import { Skill } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Cpu, Layout, FileCode, Terminal, HelpCircle, Layers } from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Language', 'Framework', 'Library', 'API & Core', 'Tool & Method'];

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Language':
        return <FileCode className="w-4 h-4 text-emerald-500" />;
      case 'Framework':
        return <Layout className="w-4 h-4 text-blue-500" />;
      case 'Library':
        return <Layers className="w-4 h-4 text-purple-500" />;
      case 'API & Core':
        return <Cpu className="w-4 h-4 text-amber-500" />;
      case 'Tool & Method':
        return <Terminal className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />;
      default:
        return <HelpCircle className="w-4 h-4 text-blue-500" />;
    }
  };

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-zinc-50 dark:bg-zinc-950/30 border-y border-zinc-200/50 dark:border-zinc-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            Technical Stack
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white mt-1.5">
            Core Expertise & Framework Proficiency
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-base">
            Gokulsrinath G's specialized front-end stack, fine-tuned over 4+ years of building robust reactive web modules and secure enterprise banking solutions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mb-10 max-w-4xl mx-auto no-print">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-tight transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10 dark:shadow-none'
                  : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/80'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map(skill => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
                className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-zinc-200/50 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800/60">
                        {getCategoryIcon(skill.category)}
                      </div>
                      <span className="font-semibold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded-md shrink-0">
                      {skill.proficiency}%
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 dark:text-zinc-500 font-mono mb-4 flex items-center gap-1">
                    <span>Category:</span>
                    <span className="text-zinc-600 dark:text-zinc-300 font-semibold">{skill.category}</span>
                    <span className="mx-1">•</span>
                    <span>Exp:</span>
                    <span className="text-zinc-600 dark:text-zinc-300 font-semibold">{skill.experienceYears}+ years</span>
                  </p>
                </div>

                {/* Progress Bar Container */}
                <div className="space-y-1.5">
                  <div className="w-full bg-zinc-100 dark:bg-zinc-950 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 h-full rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono">
                    <span>Fundamental</span>
                    <span>Expert</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Highlight Section: Methodologies */}
        <div className="mt-14 bg-white dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight text-base pt-1">
              Component-Based Architecture
            </h4>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Highly modular components styled with atomic Tailwind/SCSS classes, promoting high reusability and ease of testability.
            </p>
          </div>
          <div className="space-y-1.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight text-base pt-1">
              Reactive RxJS Streams
            </h4>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Managing complex, multi-source state streams elegantly with functional reactive pipelines, avoiding memory leaks and stream blocks.
            </p>
          </div>
          <div className="space-y-1.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight text-base pt-1">
              Performance & Lazy Loading
            </h4>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Optimized bundles, deferred module lazy-loading, and advanced browser cache management for near-instant rendering in critical situations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
