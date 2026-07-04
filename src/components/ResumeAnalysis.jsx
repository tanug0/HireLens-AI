import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UploadCloud, FileText, CheckCircle, XCircle, AlertTriangle, 
  Sparkles, Check, ChevronRight, File, RefreshCw 
} from 'lucide-react';
import { RESUME_ANALYSIS_DATA } from '../utils/mockData';

export default function ResumeAnalysis({ addToast }) {
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0] || { name: 'resume_tanu_shree_cv.pdf', size: 124000 };
    triggerAnalysis(uploadedFile);
  };

  const triggerAnalysis = (uploadedFile) => {
    setFile(uploadedFile);
    setAnalyzing(true);
    setCompleted(false);
    addToast('Parsing resume layout & structure...', 'info');

    // Simulate AI parsing delay
    setTimeout(() => {
      setAnalyzing(false);
      setCompleted(true);
      addToast('Resume career intelligence parsing complete!', 'success');
    }, 1800);
  };

  const formatSize = (bytes) => {
    if (!bytes) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const resetUpload = () => {
    setFile(null);
    setCompleted(false);
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white font-display">Resume Intelligence</h1>
        <p className="text-slate-400 text-xs mt-1">Review layout parsing, keywords matching, and formatting compliance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Upload and Simulation zone */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-6">
            <h3 className="text-sm font-bold text-white">Upload Resume</h3>
            
            {!file && (
              <div 
                className="border-2 border-dashed border-white/10 hover:border-purple-500/50 rounded-2xl p-8 text-center cursor-pointer transition-all bg-slate-900/20 hover:bg-slate-900/60 group relative"
                onClick={() => document.getElementById('resume-file-input').click()}
              >
                <input 
                  type="file" 
                  id="resume-file-input" 
                  className="hidden" 
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto text-purple-400 group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Drag & drop files here</h5>
                    <p className="text-[10px] text-slate-500 mt-1">Supports PDF, DOCX up to 10MB</p>
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-slate-800 border border-white/5 text-[10px] font-bold text-slate-300 hover:text-white group-hover:bg-purple-600 group-hover:border-purple-500 transition-all">
                    Browse File
                  </button>
                </div>
              </div>
            )}

            {file && (
              <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <File className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white truncate max-w-[140px]">{file.name}</h5>
                    <p className="text-[9px] text-slate-500">{formatSize(file.size)}</p>
                  </div>
                </div>
                {completed && (
                  <button 
                    onClick={resetUpload}
                    className="p-2 rounded-lg bg-slate-800 border border-white/5 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}

            {analyzing && (
              <div className="space-y-4 py-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-purple-400 font-semibold flex items-center space-x-1.5">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Analyzing content layout...</span>
                  </span>
                  <span className="text-slate-500">65%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-purple-500 h-full rounded-full animate-[pulse_1.5s_infinite]" style={{ width: '65%' }} />
                </div>
                {/* Skeletons */}
                <div className="space-y-2.5 pt-4">
                  <div className="h-3 bg-slate-900 rounded w-3/4 animate-pulse" />
                  <div className="h-3 bg-slate-900 rounded w-1/2 animate-pulse" />
                  <div className="h-3 bg-slate-900 rounded w-5/6 animate-pulse" />
                </div>
              </div>
            )}

            {!file && (
              <div className="text-center">
                <p className="text-[10px] text-slate-500">Don't have a resume handy?</p>
                <button 
                  onClick={() => triggerAnalysis({ name: 'demo_resume_tanu_shree.pdf', size: 184000 })}
                  className="mt-2 text-xs font-bold text-purple-400 hover:underline hover:text-purple-300"
                >
                  Load Demo Resume Analysis
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Analysis Results Display */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            {!completed && !analyzing && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="glass-panel rounded-3xl p-12 text-center border-white/5 flex flex-col items-center justify-center min-h-[400px] space-y-4"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-600">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-300">No active analysis</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm">Please upload your CV or click 'Load Demo Resume' to inspect the detailed grammar, compatibility, and keyword matches.</p>
                </div>
              </motion.div>
            )}

            {completed && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                {/* Score stats header widget */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="glass-panel rounded-2xl p-5 border-white/5 text-center space-y-2">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Resume Quality</span>
                    <div className="inline-flex items-baseline space-x-1">
                      <span className="text-3xl font-black text-white">{RESUME_ANALYSIS_DATA.resumeScore}</span>
                      <span className="text-xs text-slate-500">/100</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full" style={{ width: `${RESUME_ANALYSIS_DATA.resumeScore}%` }} />
                    </div>
                  </div>

                  <div className="glass-panel rounded-2xl p-5 border-white/5 text-center space-y-2">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">ATS Compliance</span>
                    <div className="inline-flex items-baseline space-x-1">
                      <span className="text-3xl font-black text-blue-400">{RESUME_ANALYSIS_DATA.atsScore}</span>
                      <span className="text-xs text-slate-500">/100</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: `${RESUME_ANALYSIS_DATA.atsScore}%` }} />
                    </div>
                  </div>

                  <div className="glass-panel rounded-2xl p-5 border-white/5 text-center space-y-2">
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">Keywords Match</span>
                    <div className="inline-flex items-baseline space-x-1">
                      <span className="text-3xl font-black text-teal-400">{RESUME_ANALYSIS_DATA.keywordMatch}%</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1 rounded-full overflow-hidden">
                      <div className="bg-teal-500 h-full rounded-full" style={{ width: `${RESUME_ANALYSIS_DATA.keywordMatch}%` }} />
                    </div>
                  </div>
                </div>

                {/* Strengths & Weaknesses */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-4">
                    <h4 className="text-xs font-bold text-white flex items-center space-x-1.5 uppercase tracking-wider">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Strengths ({RESUME_ANALYSIS_DATA.strengths.length})</span>
                    </h4>
                    <ul className="space-y-3">
                      {RESUME_ANALYSIS_DATA.strengths.map((str, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs leading-relaxed text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-4">
                    <h4 className="text-xs font-bold text-white flex items-center space-x-1.5 uppercase tracking-wider">
                      <XCircle className="w-4 h-4 text-rose-400" />
                      <span>Areas for Improvement ({RESUME_ANALYSIS_DATA.weaknesses.length})</span>
                    </h4>
                    <ul className="space-y-3">
                      {RESUME_ANALYSIS_DATA.weaknesses.map((weak, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-xs leading-relaxed text-slate-300">
                          <AlertTriangle className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                          <span>{weak}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Missing Keywords list */}
                <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-4">
                  <h4 className="text-xs font-bold text-white flex items-center space-x-1.5 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span>Missing keywords (Based on benchmark)</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {RESUME_ANALYSIS_DATA.missingKeywords.map((kw, idx) => (
                      <span key={idx} className="text-xs px-3 py-1.5 rounded-xl bg-slate-900 border border-white/5 hover:border-purple-500/20 text-purple-300 font-semibold transition-all">
                        + {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Grammar & Verbs Suggestions table */}
                <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-4 overflow-hidden">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Grammar & Impact Suggestions</h4>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-white/5 text-slate-500">
                          <th className="pb-3 pr-4 font-semibold">Original formulation</th>
                          <th className="pb-3 px-4 font-semibold text-purple-300">AI Proposed revision</th>
                          <th className="pb-3 pl-4 font-semibold">Suggested reasoning</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {RESUME_ANALYSIS_DATA.grammarSuggestions.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-900/20 transition-colors">
                            <td className="py-4 pr-4 text-slate-400 italic">"{item.original}"</td>
                            <td className="py-4 px-4 font-bold text-purple-200">"{item.suggestion}"</td>
                            <td className="py-4 pl-4 text-slate-400">{item.reason}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Additional Formatting suggestions */}
                <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-4">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Formatting & layout alignment</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {RESUME_ANALYSIS_DATA.formattingSuggestions.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 bg-slate-900/30 p-3 rounded-xl border border-white/5 text-xs text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
