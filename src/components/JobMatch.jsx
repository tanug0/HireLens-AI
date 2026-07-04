import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, Search, MapPin, DollarSign, Bookmark, 
  BookmarkCheck, Star, Filter, Send, Award, RefreshCw 
} from 'lucide-react';
import { MOCK_JOBS } from '../utils/mockData';

export default function JobMatch({ addToast }) {
  const [jobs, setJobs] = useState(MOCK_JOBS);
  const [savedJobs, setSavedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('All');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [applyingJobId, setApplyingJobId] = useState(null);

  const toggleSaveJob = (jobId, companyName) => {
    setSavedJobs(prev => {
      const exists = prev.includes(jobId);
      if (exists) {
        addToast(`Removed ${companyName} from bookmarks`, 'info');
        return prev.filter(id => id !== jobId);
      } else {
        addToast(`Saved ${companyName} position!`, 'success');
        return [...prev, jobId];
      }
    });
  };

  const handleApply = (jobId, companyName, roleName) => {
    setApplyingJobId(jobId);
    addToast(`Submitting HireLens profile to ${companyName}...`, 'info');

    setTimeout(() => {
      setApplyingJobId(null);
      addToast(`Application successfully sent for ${roleName} at ${companyName}!`, 'success');
    }, 1500);
  };

  // Filter logic
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = 
      job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesExp = 
      experienceFilter === 'All' ||
      (experienceFilter === 'Junior' && job.exp.toLowerCase().includes('junior')) ||
      (experienceFilter === 'Mid' && job.exp.toLowerCase().includes('mid')) ||
      (experienceFilter === 'Senior' && job.exp.toLowerCase().includes('senior'));

    const matchesRemote = !remoteOnly || job.location.toLowerCase().includes('remote');

    return matchesSearch && matchesExp && matchesRemote;
  });

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white font-display">Job Match Predictions</h1>
          <p className="text-slate-400 text-xs mt-1">Discover customized job listings prioritized by matching percentage.</p>
        </div>
      </div>

      {/* Filter Options Panel */}
      <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text"
              placeholder="Search by role, company, or technical skill..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-white/5 rounded-2xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Exp Level Filter */}
          <div className="md:col-span-3">
            <select
              value={experienceFilter}
              onChange={(e) => setExperienceFilter(e.target.value)}
              className="w-full bg-slate-900 border border-white/5 rounded-2xl px-4 py-3 text-xs text-slate-300 focus:outline-none focus:border-purple-500 transition-colors"
            >
              <option value="All">All Experience Levels</option>
              <option value="Junior">Junior Roles</option>
              <option value="Mid">Mid Level Roles</option>
              <option value="Senior">Senior Roles</option>
            </select>
          </div>

          {/* Remote Toggle */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end px-2">
            <label className="flex items-center space-x-2.5 cursor-pointer select-none">
              <input 
                type="checkbox"
                checked={remoteOnly}
                onChange={(e) => setRemoteOnly(e.target.checked)}
                className="w-4 h-4 bg-slate-900 border-white/5 rounded text-purple-600 focus:ring-0 focus:ring-offset-0 focus:outline-none"
              />
              <span className="text-xs text-slate-400 font-semibold">Remote Positions Only</span>
            </label>
          </div>
        </div>
      </div>

      {/* Jobs Listing */}
      <div className="space-y-4">
        <div className="flex justify-between items-center px-1">
          <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Results ({filteredJobs.length})</span>
          {searchTerm || experienceFilter !== 'All' || remoteOnly ? (
            <button 
              onClick={() => {
                setSearchTerm('');
                setExperienceFilter('All');
                setRemoteOnly(false);
              }}
              className="text-[10px] text-purple-400 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => {
              const isSaved = savedJobs.includes(job.id);
              const isApplying = applyingJobId === job.id;

              return (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden"
                >
                  {/* Decorative background glow for high matches */}
                  {job.match >= 90 && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                  )}

                  {/* Left Column: Role details */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-xl shadow-inner flex-shrink-0">
                      {job.logo}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-bold text-white leading-tight">{job.role}</h3>
                        <span className="text-xs text-purple-300 font-semibold px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                          {job.company}
                        </span>
                        {job.match >= 90 && (
                          <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center">
                            <Star className="w-3 h-3 fill-current mr-0.5" /> High Match
                          </span>
                        )}
                      </div>

                      {/* Info Row */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500">
                        <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-slate-600" /> {job.location}</span>
                        <span className="flex items-center"><DollarSign className="w-3.5 h-3.5 mr-0.5 text-slate-600" /> {job.salary}</span>
                        <span className="flex items-center"><Briefcase className="w-3.5 h-3.5 mr-1 text-slate-600" /> {job.exp}</span>
                      </div>

                      {/* Technical Skill Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {job.skills.map((s, idx) => (
                          <span key={idx} className="text-[9px] font-bold px-2 py-0.5 bg-slate-900 border border-white/5 text-slate-400 rounded">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Match Gauge & Action buttons */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto border-t md:border-t-0 border-white/5 pt-4 md:pt-0 gap-4">
                    {/* Match rate */}
                    <div className="text-left md:text-right">
                      <span className="text-[10px] text-slate-500 block uppercase tracking-widest font-semibold">Match Score</span>
                      <span className={`text-xl font-black ${
                        job.match >= 90 ? 'text-emerald-400' : job.match >= 80 ? 'text-blue-400' : 'text-slate-300'
                      }`}>
                        {job.match}%
                      </span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => toggleSaveJob(job.id, job.company)}
                        className={`p-2.5 rounded-xl border transition-colors ${
                          isSaved 
                            ? 'bg-purple-950/20 border-purple-500/30 text-purple-400' 
                            : 'bg-slate-900/50 border-white/5 hover:bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        {isSaved ? <BookmarkCheck className="w-4.5 h-4.5" /> : <Bookmark className="w-4.5 h-4.5" />}
                      </button>
                      
                      <button 
                        onClick={() => handleApply(job.id, job.company, job.role)}
                        disabled={isApplying}
                        className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:bg-purple-800 disabled:opacity-50 text-white text-xs font-semibold shadow-lg shadow-purple-500/10 flex items-center space-x-1.5 transition-all"
                      >
                        {isApplying ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            <span>Applying...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Apply Now</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {filteredJobs.length === 0 && (
            <div className="glass-panel rounded-3xl p-12 text-center border-white/5 text-slate-500">
              <Briefcase className="w-12 h-12 mx-auto text-slate-700 mb-4" />
              <h4 className="text-sm font-bold text-slate-300">No matching jobs found</h4>
              <p className="text-xs text-slate-600 mt-1">Try adjusting your filters or searching another keyword.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
