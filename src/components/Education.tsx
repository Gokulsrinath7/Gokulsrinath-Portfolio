import { EDUCATIONS, LANGUAGES } from '../data';
import { GraduationCap, Calendar, MapPin, Globe, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            Background
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white mt-1.5">
            Education & Language Assets
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-base">
            Professional qualifications demonstrating a dual foundation in engineering principles and operational management methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="text-xl font-extrabold tracking-tight text-zinc-950 dark:text-white flex items-center gap-2.5">
              <GraduationCap className="w-5.5 h-5.5 text-blue-600" /> Academic Qualifications
            </h3>

            <div className="border-l-2 border-zinc-200/60 dark:border-zinc-800 pl-6 sm:pl-8 space-y-10 relative">
              {EDUCATIONS.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot Indicator */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-blue-600 group-hover:scale-125 transition-transform duration-200" />
                  
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-0.5 rounded-full w-fit">
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold tracking-tight text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h4>

                    <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      {edu.institution}
                    </p>

                    {edu.specialization && (
                      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 font-sans leading-relaxed">
                        <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>Specialization: <strong className="text-zinc-600 dark:text-zinc-300 font-medium">{edu.specialization}</strong></span>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Language assets */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xl font-extrabold tracking-tight text-zinc-950 dark:text-white flex items-center gap-2.5">
              <Globe className="w-5.5 h-5.5 text-blue-600" /> Language Proficiency
            </h3>

            <div className="bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800 rounded-3xl p-6 space-y-5">
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                Strong linguistic capabilities enabling efficient, professional global collaboration in diverse agile teams.
              </p>

              <div className="space-y-4">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="p-4 bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-850 rounded-2xl flex items-center justify-between shadow-sm">
                    <div className="space-y-1">
                      <p className="font-bold text-sm text-zinc-900 dark:text-white">
                        {lang.name}
                      </p>
                      <p className="text-[10px] text-zinc-400 font-mono">
                        Speaking & Writing
                      </p>
                    </div>
                    
                    <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md ${
                      lang.proficiency === 'Native' 
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100/60' 
                        : 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-100/60'
                    }`}>
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
