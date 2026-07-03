import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!message.trim()) {
      setFormError('Please write a message.');
      return;
    }

    setSubmitStatus('sending');

    // Simulate sending progress
    setTimeout(() => {
      setSubmitStatus('success');
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950/20 border-t border-zinc-200/50 dark:border-zinc-900/60">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#18181b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            Get In Touch
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white mt-1.5">
            Contact & Partnership Opportunities
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-base">
            Have an opening, a contract requirement, or want to discuss a banking client transformation? Reach out directly using the form below or via official communication tags.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white">
                Contact Credentials
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans">
                Official communication details for GOKULSRINATH G. Direct calls and emails are monitored, with standard SLAs under 24 hours.
              </p>

              <div className="space-y-4">
                {/* Email Card */}
                <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 rounded-2xl flex items-start gap-4 shadow-sm">
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-widest block">
                      Send Email
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block mt-0.5"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 rounded-2xl flex items-start gap-4 shadow-sm">
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-widest block">
                      Call Direct
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors block mt-0.5"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-4 bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 rounded-2xl flex items-start gap-4 shadow-sm">
                  <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-semibold text-zinc-400 uppercase tracking-widest block">
                      Postal Node
                    </span>
                    <span className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white block mt-0.5">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Compliance Banner */}
            <div className="p-4.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-850 rounded-2xl text-[11px] text-zinc-400 dark:text-zinc-500 font-mono">
              <p className="font-bold">🔒 SECURITY NOTICE</p>
              <p className="mt-1 leading-normal">
                This channel utilizes end-to-end sandbox routing. Communication payloads remain strictly confidential.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200/65 dark:border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col justify-between">
            <h3 className="text-xl font-bold tracking-tight text-zinc-950 dark:text-white mb-6">
              Write secure message
            </h3>

            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-zinc-950 dark:text-white text-base">
                      Message Dispatched!
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-sm">
                      Thank you. Your message has been encrypted and committed to the simulated inbox. Gokulsrinath will respond shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold rounded-lg text-xs transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4 flex-1 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {formError && (
                      <div className="p-3.5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs rounded-xl flex items-center gap-2.5">
                        <ShieldAlert className="w-4.5 h-4.5 shrink-0" />
                        <span>{formError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest block">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          disabled={submitStatus === 'sending'}
                          className="w-full text-sm font-semibold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="you@organization.com"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          disabled={submitStatus === 'sending'}
                          className="w-full text-sm font-semibold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest block">
                        Organization (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Fintech Corp"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                        disabled={submitStatus === 'sending'}
                        className="w-full text-sm font-semibold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold font-mono text-zinc-400 uppercase tracking-widest block">
                        Message Content
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Write your message here..."
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        disabled={submitStatus === 'sending'}
                        className="w-full text-sm font-semibold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3.5 py-2.5 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'sending'}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-all duration-200 shadow-md shadow-blue-500/15 flex items-center justify-center gap-2 mt-4 cursor-pointer disabled:opacity-50"
                  >
                    {submitStatus === 'sending' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Encrypting & Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Direct Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
