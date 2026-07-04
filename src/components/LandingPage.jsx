import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, CheckCircle, UploadCloud, ShieldAlert, Cpu, 
  BookOpen, Briefcase, Award, Sparkles, ChevronDown, ChevronUp, 
  Star, ArrowRight, Activity, Users, FileText, Check 
} from 'lucide-react';
import { STATS, FAQS, TESTIMONIALS } from '../utils/mockData';

export default function LandingPage({ onExploreDashboard }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      title: "AI Resume Analysis",
      description: "Instantly score and review your resume layout, action verbs, and readability using career intelligence algorithms."
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      title: "ATS Compatibility Checker",
      description: "Verify if your resume parses correctly in Applicant Tracking Systems and matches target job descriptions."
    },
    {
      icon: <Award className="w-6 h-6 text-teal-400" />,
      title: "Career Readiness Score",
      description: "Track your transition progress out of 100 with a dynamic score based on skills, resume quality, and certifications."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-pink-400" />,
      title: "Skill Gap Analysis",
      description: "Compare your skills profile with target roles and industry benchmarks to identify critical technology gaps."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-amber-400" />,
      title: "Job Match Prediction",
      description: "Receive personalized job listings with compatibility scoring based on your skills and verified credentials."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-violet-400" />,
      title: "AI Career Coach",
      description: "Chat with a virtual career agent to refine resume summary bullets, practice mock interview scenarios, and negotiate salary."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
      title: "Learning Roadmap",
      description: "Access curated, structured course recommendations to bridge core gaps with progress bars tracking completion."
    },
    {
      icon: <Users className="w-6 h-6 text-rose-400" />,
      title: "Dream Company Tracker",
      description: "Monitor preparation benchmarks for top tech employers (Google, Microsoft, Amazon) and track readiness timelines."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-purple-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <span className="text-xl font-bold text-white tracking-wider">H</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white font-display">
              HireLens <span className="text-gradient-purple-blue">AI</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
            <a href="#hero" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a>
            <a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={onExploreDashboard} 
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={onExploreDashboard}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02] flex items-center space-x-1"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-24 overflow-hidden px-6">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-blue-700/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-card text-xs text-purple-300 font-semibold border-purple-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI-Powered Career Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
              Unlock Your <br />
              <span className="text-gradient-premium">Career Potential</span> <br />
              With AI
            </h1>

            <p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0">
              Analyze your resume against recruitment standards, identify core skill gaps, track dream companies, and receive customized career coaching.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={onExploreDashboard}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold shadow-xl shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>Analyze Resume</span>
              </button>
              <button 
                onClick={onExploreDashboard}
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-white hover:bg-slate-800/80 font-semibold flex items-center justify-center space-x-2"
              >
                <Activity className="w-5 h-5 text-blue-400" />
                <span>Explore Dashboard</span>
              </button>
            </div>
          </div>

          {/* Right Column - Premium Dashboard Preview */}
          <div className="lg:col-span-6 relative">
            {/* Main Preview Card */}
            <div className="relative glass-panel rounded-3xl p-6 md:p-8 shadow-2xl border-white/10 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 pointer-events-none" />
              
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400">Career Intelligence Dashboard</h4>
                  <p className="text-xs text-slate-500">Live preview (Mock Data)</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Syncing Ready</span>
                </div>
              </div>

              {/* Grid of Scores */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-900/60 p-4 rounded-2xl border border-white/5">
                  <span className="text-xs text-slate-400">Career Readiness</span>
                  <div className="flex items-baseline space-x-1.5 mt-1">
                    <span className="text-2xl font-bold text-white">87</span>
                    <span className="text-xs text-slate-500">/ 100</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: '87%' }} />
                  </div>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-2xl border border-white/5">
                  <span className="text-xs text-slate-400">ATS Match Rate</span>
                  <div className="flex items-baseline space-x-1.5 mt-1">
                    <span className="text-2xl font-bold text-blue-400">89%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '89%' }} />
                  </div>
                </div>
              </div>

              {/* Company Match Widget */}
              <div className="bg-slate-900/40 p-4 rounded-2xl border border-white/5 space-y-3 mb-6">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-medium">Dream Company Readiness</span>
                  <span className="text-purple-300 font-semibold">Google Target</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" className="w-5 h-5" alt="Google" />
                    <span className="text-sm font-semibold text-white">Google Preparation</span>
                  </div>
                  <span className="text-sm font-bold text-white">72%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full" style={{ width: '72%' }} />
                </div>
              </div>

              {/* Quick Insights List */}
              <div className="space-y-3">
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">AI Recommendations</h5>
                <div className="flex items-center space-x-3 text-xs bg-slate-900/50 p-3 rounded-xl border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">✓</div>
                  <span className="text-slate-300">Improve resume professional summary</span>
                </div>
                <div className="flex items-center space-x-3 text-xs bg-slate-900/50 p-3 rounded-xl border border-white/5">
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">⚡</div>
                  <span className="text-slate-300">Bridge gap in System Design skills (Google benchmark)</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Cards */}
            <div className="absolute -top-6 -right-6 glass-card p-4 rounded-2xl border-white/10 hidden md:block animate-float-slow w-40 text-center">
              <span className="text-2xl font-bold text-gradient-purple-blue">95%</span>
              <p className="text-[10px] text-slate-400 mt-1">Accuracy Score</p>
            </div>

            <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl border-white/10 hidden md:block animate-float-medium w-48">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-white">Ready for Jobs</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Matched with 12 positions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-slate-950/60 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, index) => (
              <div key={index} className="space-y-2">
                <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight text-gradient-premium">
                  {stat.value}
                </span>
                <p className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 relative">
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-700/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
              Smart Features for Career Success
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              A comprehensive toolkit tailored to transform you from a job seeker to a premium candidate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center shadow-inner">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
                <button 
                  onClick={onExploreDashboard}
                  className="pt-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors flex items-center space-x-1"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-24 px-6 border-t border-white/5 bg-slate-950/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
              How HireLens AI Works
            </h2>
            <p className="text-slate-400 text-sm">
              Your step-by-step pipeline to professional job readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="glass-card p-6 rounded-2xl relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-lg border border-purple-500/20">
                01
              </div>
              <UploadCloud className="w-8 h-8 text-purple-400" />
              <h4 className="font-bold text-white">Upload Resume</h4>
              <p className="text-xs text-slate-400">Upload your current PDF or Word resume in one click.</p>
            </div>

            {/* Step 2 */}
            <div className="glass-card p-6 rounded-2xl relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-500/20">
                02
              </div>
              <Cpu className="w-8 h-8 text-blue-400" />
              <h4 className="font-bold text-white">AI Analysis</h4>
              <p className="text-xs text-slate-400">AI parses your experience and benchmarks keywords.</p>
            </div>

            {/* Step 3 */}
            <div className="glass-card p-6 rounded-2xl relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-teal-600/20 text-teal-400 flex items-center justify-center font-bold text-lg border border-teal-500/20">
                03
              </div>
              <TrendingUp className="w-8 h-8 text-teal-400" />
              <h4 className="font-bold text-white">Career Insights</h4>
              <p className="text-xs text-slate-400">Discover skills gaps, and get dynamic company pathways.</p>
            </div>

            {/* Step 4 */}
            <div className="glass-card p-6 rounded-2xl relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-pink-600/20 text-pink-400 flex items-center justify-center font-bold text-lg border border-pink-500/20">
                04
              </div>
              <Award className="w-8 h-8 text-pink-400" />
              <h4 className="font-bold text-white">Become Job Ready</h4>
              <p className="text-xs text-slate-400">Verify skills and match directly with recruiting roles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
              Success Stories
            </h2>
            <p className="text-slate-400 text-sm">
              Read how candidates unlocked their careers at top employers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between space-y-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-xl group-hover:bg-purple-500/10 transition-all duration-300" />
                <div className="space-y-4">
                  <div className="flex space-x-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 italic leading-relaxed">"{t.quote}"</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <img src={t.avatar} className="w-12 h-12 rounded-full object-cover border border-white/10" alt={t.author} />
                  <div>
                    <h5 className="text-sm font-bold text-white">{t.author}</h5>
                    <p className="text-xs text-slate-400">{t.role}</p>
                    <span className="text-[10px] text-purple-400 font-semibold">{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 border-t border-white/5 bg-slate-950/40">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm">
              Quick answers to clear your queries about our AI Career Platform.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={index} className="glass-card rounded-2xl border border-white/5 overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none transition-colors"
                  >
                    <span className="font-semibold text-white text-sm md:text-base">{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-purple-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 text-xs md:text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-slate-950 py-16 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-purple-900/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                HireLens <span className="text-gradient-purple-blue">AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Your AI Career Intelligence Platform. Elevate your portfolio, master tech benchmarks, and secure your dream offer.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">Platform</h5>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#features" className="hover:text-purple-400 transition-colors">AI Analysis</a></li>
              <li><a href="#features" className="hover:text-purple-400 transition-colors">Skill Gap Finder</a></li>
              <li><a href="#features" className="hover:text-purple-400 transition-colors">Career Analytics</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">Support</h5>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              <li><span className="cursor-pointer hover:text-purple-400 transition-colors">Privacy Policy</span></li>
              <li><span className="cursor-pointer hover:text-purple-400 transition-colors">Terms of Service</span></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">Stay Updated</h5>
            <p className="text-xs text-slate-500">Join our newsletter to receive the latest career trends and platform updates.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-slate-900 border border-white/10 rounded-l-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500 flex-grow"
              />
              <button 
                onClick={onExploreDashboard}
                className="bg-purple-600 hover:bg-purple-500 text-white rounded-r-lg px-4 text-xs font-semibold"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 text-xs text-slate-600">
          <p>© 2026 HireLens AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-slate-400 cursor-pointer">Twitter</span>
            <span className="hover:text-slate-400 cursor-pointer">LinkedIn</span>
            <span className="hover:text-slate-400 cursor-pointer">GitHub</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
