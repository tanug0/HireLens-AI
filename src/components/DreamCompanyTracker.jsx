import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, CheckSquare, Target, Clock, AlertCircle, 
  ArrowRight, ShieldCheck, Zap, Sparkles, BookOpen 
} from 'lucide-react';
import { DREAM_COMPANIES } from '../utils/mockData';

export default function DreamCompanyTracker({ addToast }) {
  const [selectedCompany, setSelectedCompany] = useState(DREAM_COMPANIES[0]);

  const handleSelectCompany = (comp) => {
    setSelectedCompany(comp);
  };

  const handleStartPrep = (compName) => {
    addToast(`Syncing ${compName} training items to career action plan`, 'success');
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white font-display">Dream Company Tracker</h1>
        <p className="text-slate-400 text-xs mt-1">Review specific benchmarks and readiness levels for your target employers.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Companies Grid List */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex justify-between items-center px-1">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Target Companies ({DREAM_COMPANIES.length})</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DREAM_COMPANIES.map((comp, idx) => {
              const isSelected = selectedCompany.name === comp.name;
              return (
                <div 
                  key={idx}
                  onClick={() => handleSelectCompany(comp)}
                  className={`glass-card p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between space-y-4 ${
                    isSelected 
                      ? 'border-purple-500 bg-purple-950/10 shadow-lg shadow-purple-500/10' 
                      : 'border-white/5 bg-slate-900/30'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center p-2 flex-shrink-0">
                        {comp.logo ? (
                          <img src={comp.logo} className="w-full h-full object-contain" alt={comp.name} />
                        ) : (
                          <Building className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-white">{comp.name}</h4>
                    </div>
                    <span className={`text-xs font-black ${
                      comp.prep >= 90 ? 'text-emerald-400' : comp.prep >= 70 ? 'text-purple-300' : 'text-slate-400'
                    }`}>
                      {comp.prep}%
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${
                        comp.prep >= 90 ? 'bg-emerald-500' : 'bg-gradient-to-r from-purple-500 to-blue-500'
                      }`} style={{ width: `${comp.prep}%` }} />
                    </div>
                    <div className="flex justify-between text-[9px] text-slate-500">
                      <span>Timeline: {comp.timeline}</span>
                      <span>{comp.missing.length} missing skills</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Inspector Panel */}
        <div className="lg:col-span-6">
          <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

            <div className="flex justify-between items-start border-b border-white/5 pb-5">
              <div className="flex items-center space-x-3.5">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center p-3">
                  {selectedCompany.logo ? (
                    <img src={selectedCompany.logo} className="w-full h-full object-contain" alt={selectedCompany.name} />
                  ) : (
                    <Building className="w-6 h-6 text-slate-400" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedCompany.name} Readiness</h3>
                  <p className="text-[10px] text-slate-500 mt-0.5">Custom targeting metrics & training checklists</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Estimated Score</span>
                <span className="text-2xl font-black text-white">{selectedCompany.prep}%</span>
              </div>
            </div>

            {/* Preparation Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/40 p-4 rounded-2xl border border-white/5 space-y-1">
                <span className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1 text-slate-600" /> Prep Duration
                </span>
                <span className="text-xs font-bold text-slate-200 block">{selectedCompany.timeline}</span>
              </div>

              <div className="bg-slate-900/40 p-4 rounded-2xl border border-white/5 space-y-1">
                <span className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold flex items-center">
                  <Target className="w-3.5 h-3.5 mr-1 text-slate-600" /> Suggested Roles
                </span>
                <span className="text-xs font-bold text-slate-200 block">SDE / Systems Intern</span>
              </div>
            </div>

            {/* Missing Skills list */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white flex items-center space-x-1.5 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-purple-400" />
                <span>Missing Skills for eligibility</span>
              </h4>

              <div className="flex flex-wrap gap-2">
                {selectedCompany.missing.map((sk, idx) => (
                  <span key={idx} className="text-xs px-3 py-1.5 rounded-xl bg-purple-950/20 border border-purple-500/20 text-purple-300 font-semibold">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Simulated Action check items */}
            <div className="space-y-3 border-t border-white/5 pt-5">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Preparation checklist</h4>
              
              <div className="space-y-2.5">
                <div className="flex items-center space-x-3 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Resume parsed and optimized to ATS formatting</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Frontend core index verified (React/JS)</span>
                </div>
                <div className="flex items-center space-x-3 text-xs text-slate-400">
                  <span className="w-4 h-4 rounded border border-white/20 flex items-center justify-center text-[10px] text-purple-400 font-bold">!</span>
                  <span className="text-purple-300">Complete System Design Foundations roadmap</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleStartPrep(selectedCompany.name)}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-purple-500/10 flex items-center justify-center space-x-1 transition-all"
            >
              <span>Sync Preparation Checklist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
