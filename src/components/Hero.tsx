import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Printer, ArrowDownCircle, ExternalLink, Code2, Briefcase, Award, Milestone, Download } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, CERTIFICATIONS } from '../data';

export default function Hero() {
  const handlePrint = () => {
    window.print();
  };

  const stats = [
    {
      icon: Briefcase,
      value: '4+ Years',
      label: 'Professional Experience',
      sub: 'At Leading IT & Fintech Consultancy',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/30'
    },
    {
      icon: Milestone,
      value: '3 Major Banks',
      label: 'Client Implementations',
      sub: 'CUB, CBI, TNSC Bank',
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/30'
    },
    {
      icon: Award,
      value: '5 Certifications',
      label: 'Industry Badges',
      sub: 'AWS Associate & Web Dev',
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950/30'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Decorative background grid and ambient blobs */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#18181b_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[300px] bg-gradient-to-tr from-blue-300/20 to-indigo-300/20 dark:from-blue-950/10 dark:to-indigo-950/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            <motion.div variants={itemVariants} className="space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-100/60 dark:border-blue-900/40 text-xs font-mono font-semibold tracking-wider uppercase shadow-sm">
                <Code2 className="w-3.5 h-3.5 animate-pulse text-blue-500" />
                Available for Roles
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
                Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">{PERSONAL_INFO.name}</span>
              </h1>
              
              <p className="text-lg sm:text-xl font-medium text-zinc-800 dark:text-zinc-200 tracking-tight font-sans">
                {PERSONAL_INFO.title} — <span className="text-zinc-500 dark:text-zinc-400 font-normal">{PERSONAL_INFO.subtitle}</span>
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
              {PERSONAL_INFO.summary}
            </motion.p>

            {/* Quick contact tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1.5 py-1 px-2.5 rounded-md bg-zinc-100 dark:bg-zinc-900/60">
                <Mail className="w-4 h-4 text-zinc-400" /> {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5 py-1 px-2.5 rounded-md bg-zinc-100 dark:bg-zinc-900/60">
                <Phone className="w-4 h-4 text-zinc-400" /> {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1.5 py-1 px-2.5 rounded-md bg-zinc-100 dark:bg-zinc-900/60">
                <MapPin className="w-4 h-4 text-zinc-400" /> {PERSONAL_INFO.location}
              </span>
            </motion.div>

            {/* CTA Actions */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('demo');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-all duration-200 shadow-lg shadow-blue-500/15 dark:shadow-blue-900/10 cursor-pointer flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Interactive Banking Demo</span>
                <ArrowDownCircle className="w-4.5 h-4.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={handlePrint}
                className="px-6 py-3.5 border border-zinc-200 dark:border-zinc-800 bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold rounded-xl text-sm transition-all duration-200 shadow-sm cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Printer className="w-4.5 h-4.5 text-zinc-400 dark:text-zinc-500" />
                <span>Print Professional CV</span>
              </button>
            </motion.div>
          </div>

          {/* Interactive Hero Side Column: Personal Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-5 self-center">
            {stats.map((stat, index) => {
              const IconComp = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-md shadow-zinc-100/50 dark:shadow-none flex items-start gap-4.5"
                >
                  <div className={`p-3.5 rounded-xl ${stat.bg} ${stat.color} shrink-0`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-white leading-none">
                      {stat.value}
                    </h3>
                    <p className="text-sm font-semibold tracking-tight text-zinc-800 dark:text-zinc-200 mt-1">
                      {stat.label}
                    </p>
                    <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500 mt-1">
                      {stat.sub}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
