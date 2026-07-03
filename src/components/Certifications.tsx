import { useState } from 'react';
import { CERTIFICATIONS } from '../data';
import { Certification } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Server, Cpu, FileText, Globe, CheckCircle2, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getCertIcon = (id: string) => {
    switch (id) {
      case 'AWS-ASA':
        return <Server className="w-6 h-6 text-amber-500" />;
      case 'AWS-CCP':
        return <Server className="w-6 h-6 text-blue-500" />;
      case 'ROB-AUTO':
        return <Cpu className="w-6 h-6 text-teal-500" />;
      case 'HTML5-SPEC':
        return <Globe className="w-6 h-6 text-orange-500" />;
      case 'WEB-DEV':
        return <Award className="w-6 h-6 text-purple-500" />;
      default:
        return <Award className="w-6 h-6 text-zinc-500" />;
    }
  };

  const getCertDetails = (id: string) => {
    switch (id) {
      case 'AWS-ASA':
        return {
          idCode: 'AWS-ASA-994102',
          topics: ['Secure Architectures', 'High-Performing Compute/Storage', 'Resilient Network VPCs', 'Cost-Optimized Serverless'],
          summary: 'Validates advanced expertise in architecting secure, reliable, cost-efficient, and scalable enterprise cloud solutions on Amazon Web Services.'
        };
      case 'AWS-CCP':
        return {
          idCode: 'AWS-CCP-104921',
          topics: ['Cloud Concepts', 'AWS Billing & Pricing', 'Core Cloud Security', 'AWS Global Infrastructure'],
          summary: 'Validates fundamental system architectural concepts, core AWS cloud services, identity management policies, and billing structures.'
        };
      case 'ROB-AUTO':
        return {
          idCode: 'ROB-ADV-77291',
          topics: ['UiPath / Automation Core', 'Process Mapping', 'Event-Driven Trigger Orchestration', 'Error-Catch Protocols'],
          summary: 'Validates expertise in designing automated system process loops, managing background services, and streamlining complex software processes.'
        };
      case 'HTML5-SPEC':
        return {
          idCode: 'W3S-HTML5-44910',
          topics: ['Semantic Structure', 'Accessible Web Forms', 'Audio & Video Media APIs', 'Canvas Graphic Layouts'],
          summary: 'Demonstrates deep knowledge of HTML5 structures, form constraints, responsive DOM layout guidelines, and accessibility specs.'
        };
      case 'WEB-DEV':
        return {
          idCode: 'WEB-DEV-2021-39',
          topics: ['CSS Grid & Flexbox layouts', 'JavaScript Web APIs', 'Cross-Browser Optimization', 'Asset Compression'],
          summary: 'Validates comprehensive knowledge in web standards, design theory, structural page building, DOM events management, and UI responsive styling.'
        };
      default:
        return {
          idCode: 'CERT-99001',
          topics: ['Web Standards', 'Code Organization'],
          summary: 'Validates professional mastery of standard software engineering tools and concepts.'
        };
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="certifications" className="py-20 relative bg-zinc-50 dark:bg-zinc-950/20 border-y border-zinc-200/50 dark:border-zinc-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            Credentials
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white mt-1.5">
            Industry Certifications & Badges
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-base">
            Professional accomplishments demonstrating a dedicated pursuit of knowledge, ranging from high-performing cloud infrastructures to responsive frontend web architectures.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CERTIFICATIONS.map(cert => {
            const certId = cert.id || '';
            const isExpanded = expandedId === certId;
            const details = getCertDetails(certId);

            return (
              <motion.div
                key={certId}
                layout="position"
                className={`rounded-2xl border bg-white dark:bg-zinc-900 shadow-sm transition-all duration-300 overflow-hidden cursor-pointer ${
                  isExpanded
                    ? 'border-blue-500/50 dark:border-blue-500/40 ring-1 ring-blue-500/20'
                    : 'border-zinc-200/60 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
                onClick={() => toggleExpand(certId)}
              >
                {/* Header Row */}
                <div className="p-5 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-850 rounded-xl shrink-0">
                      {getCertIcon(certId)}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-zinc-950 dark:text-white leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-mono">
                        {cert.issuer} {cert.year && `• ${cert.year}`}
                      </p>
                    </div>
                  </div>
                  <button
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 cursor-pointer"
                    aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expanded Details Body */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="border-t border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/30 overflow-hidden"
                    >
                      <div className="p-5 space-y-4 text-xs sm:text-sm">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-widest block">
                            Credential Code ID
                          </span>
                          <span className="font-mono text-xs text-zinc-800 dark:text-zinc-200 font-bold bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-200/40 dark:border-zinc-800/40">
                            {details.idCode}
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          <span className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-widest block">
                            Summary Description
                          </span>
                          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans text-xs">
                            {details.summary}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <span className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-widest block">
                            Core Modules Mastered:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                            {details.topics.map((topic, i) => (
                              <div key={i} className="flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                <span className="truncate">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
