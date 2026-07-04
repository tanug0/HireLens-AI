import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, FileText, Compass, Briefcase, Bot, 
  Building, User, LogOut, Bell, Menu, X, CheckCircle, 
  AlertCircle, Info, Sparkles 
} from 'lucide-react';

import LandingPage from './components/LandingPage';
import DashboardOverview from './components/DashboardOverview';
import ResumeAnalysis from './components/ResumeAnalysis';
import SkillGapAnalysis from './components/SkillGapAnalysis';
import JobMatch from './components/JobMatch';
import AICareerCoach from './components/AICareerCoach';
import DreamCompanyTracker from './components/DreamCompanyTracker';
import Profile from './components/Profile';

export default function App() {
  const [viewMode, setViewMode] = useState('landing'); // 'landing' | 'dashboard'
  const [activeTab, setActiveTab] = useState('overview'); // overview, resume, skills, jobs, coach, company, profile
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const handleExploreDashboard = () => {
    setViewMode('dashboard');
    setActiveTab('overview');
    addToast('Welcome Tanu! Active career intelligence synced.', 'success');
  };

  const handleSignOut = () => {
    setViewMode('landing');
    addToast('Signed out of HireLens AI workspace.', 'info');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'resume', label: 'Resume Analysis', icon: <FileText className="w-4 h-4" /> },
    { id: 'skills', label: 'Skill Gap Analysis', icon: <Compass className="w-4 h-4" /> },
    { id: 'jobs', label: 'Job Predictions', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'coach', label: 'AI Career Coach', icon: <Bot className="w-4 h-4" /> },
    { id: 'company', label: 'Company Tracker', icon: <Building className="w-4 h-4" /> },
    { id: 'profile', label: 'My Profile', icon: <User className="w-4 h-4" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview onSwitchTab={setActiveTab} addToast={addToast} />;
      case 'resume':
        return <ResumeAnalysis addToast={addToast} />;
      case 'skills':
        return <SkillGapAnalysis addToast={addToast} />;
      case 'jobs':
        return <JobMatch addToast={addToast} />;
      case 'coach':
        return <AICareerCoach addToast={addToast} />;
      case 'company':
        return <DreamCompanyTracker addToast={addToast} />;
      case 'profile':
        return <Profile />;
      default:
        return <DashboardOverview onSwitchTab={setActiveTab} addToast={addToast} />;
    }
  };

  return (
    <div className="min-h-screen text-slate-100 font-sans relative overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* Toast Notification Stack */}
      <div className="fixed top-6 right-6 z-[100] space-y-3 pointer-events-none max-w-sm w-full">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.15 } }}
              className="pointer-events-auto glass-panel-heavy p-4 rounded-2xl flex items-start space-x-3 shadow-2xl border-white/10"
            >
              <div className="flex-shrink-0 mt-0.5">
                {t.type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-400" />}
                {t.type === 'warning' && <AlertCircle className="w-5 h-5 text-amber-400" />}
                {t.type === 'info' && <Info className="w-5 h-5 text-purple-400" />}
              </div>
              <div className="flex-grow">
                <p className="text-xs font-semibold text-white">{t.message}</p>
              </div>
              <button 
                onClick={() => removeToast(t.id)} 
                className="text-slate-500 hover:text-white text-xs font-bold leading-none focus:outline-none"
              >
                ×
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === 'landing' ? (
          <motion.div
            key="landing-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LandingPage onExploreDashboard={handleExploreDashboard} />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard-workspace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex min-h-screen bg-slate-950"
          >
            {/* Sidebar Desktop navigation */}
            <aside className="hidden lg:flex flex-col w-64 border-r border-white/5 bg-slate-950/80 backdrop-blur-md p-6 justify-between flex-shrink-0 z-40">
              <div className="space-y-8">
                {/* Logo branding */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">H</span>
                  </div>
                  <span className="text-lg font-bold tracking-tight text-white font-display">
                    HireLens <span className="text-gradient-purple-blue">AI</span>
                  </span>
                </div>

                {/* Tabs selection list */}
                <nav className="space-y-1">
                  {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                          isActive 
                            ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/15' 
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                        }`}
                      >
                        {tab.icon}
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Sidebar footer signout */}
              <button 
                onClick={handleSignOut}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold text-slate-400 hover:text-rose-400 hover:bg-rose-500/5 transition-all mt-8"
              >
                <LogOut className="w-4 h-4" />
                <span>Exit Dashboard</span>
              </button>
            </aside>

            {/* Mobile Sidebar overlay */}
            <AnimatePresence>
              {sidebarOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm lg:hidden"
                  onClick={() => setSidebarOpen(false)}
                >
                  <motion.aside
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="w-64 max-w-[80vw] h-full border-r border-white/5 bg-slate-950 p-6 flex flex-col justify-between"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="space-y-8">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">H</span>
                          </div>
                          <span className="text-base font-bold text-white font-display">HireLens AI</span>
                        </div>
                        <button onClick={() => setSidebarOpen(false)} className="text-slate-400 hover:text-white">
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <nav className="space-y-1">
                        {tabs.map((tab) => {
                          const isActive = activeTab === tab.id;
                          return (
                            <button
                              key={tab.id}
                              onClick={() => {
                                setActiveTab(tab.id);
                                setSidebarOpen(false);
                              }}
                              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                                isActive 
                                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/15' 
                                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                              }`}
                            >
                              {tab.icon}
                              <span>{tab.label}</span>
                            </button>
                          );
                        })}
                      </nav>
                    </div>

                    <button 
                      onClick={handleSignOut}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold text-slate-400 hover:text-rose-400 hover:bg-rose-500/5 transition-all mt-8"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Exit Dashboard</span>
                    </button>
                  </motion.aside>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Dashboard Workspace Main Container */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Header dashboard navbar */}
              <header className="h-16 border-b border-white/5 px-6 flex justify-between items-center bg-slate-950/40 backdrop-blur-md sticky top-0 z-30">
                <div className="flex items-center space-x-4 lg:hidden">
                  <button 
                    onClick={() => setSidebarOpen(true)}
                    className="p-2 rounded-lg bg-slate-900 border border-white/5 text-slate-300 hover:text-white"
                  >
                    <Menu className="w-5 h-5" />
                  </button>
                  <span className="text-sm font-bold text-white font-display">HireLens AI</span>
                </div>

                <div className="hidden lg:block text-xs font-bold text-purple-400 flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  <span>Welcome to the HireLens AI dashboard environment</span>
                </div>

                {/* Profile notification right controls */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" 
                      className="w-8 h-8 rounded-lg object-cover border border-white/10" 
                      alt="Tanu Shree avatar" 
                    />
                    <div className="hidden md:block text-left">
                      <span className="text-xs font-bold text-white block">Tanu Shree</span>
                      <span className="text-[9px] text-slate-500 block leading-none">Delhi, India</span>
                    </div>
                  </div>
                </div>
              </header>

              {/* Dynamic scrollable dashboard viewport container */}
              <main className="flex-1 overflow-y-auto px-6 py-8 max-w-7xl mx-auto w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderContent()}
                  </motion.div>
                </AnimatePresence>
              </main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
