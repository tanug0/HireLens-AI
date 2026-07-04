import React from 'react';
import { motion } from 'framer-motion';
import { 
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, 
  PolarRadiusAxis, Radar, Legend, Tooltip 
} from 'recharts';
import { 
  CheckCircle, AlertTriangle, BookOpen, Clock, 
  Star, Compass, ArrowRight, Play 
} from 'lucide-react';
import { SKILL_RADAR_DATA, SKILLS_BREAKDOWN, RECOMMENDED_COURSES } from '../utils/mockData';

export default function SkillGapAnalysis({ addToast }) {
  const handleStartCourse = (courseName) => {
    addToast(`Launched syllabus for: ${courseName}`, 'success');
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white font-display">Skill Gap Analysis</h1>
        <p className="text-slate-400 text-xs mt-1">Review missing competencies, benchmarks, and curated learning roadmaps.</p>
      </div>

      {/* Radar Chart & High-Priority Skills Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Radar Chart Card */}
        <div className="lg:col-span-6 glass-panel rounded-3xl p-6 border-white/5 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white">Skill Index Benchmark</h3>
            <p className="text-[10px] text-slate-500 mt-0.5">Competency index compared with target Junior-Mid developer levels</p>
          </div>

          <div className="h-72 w-full my-4 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={SKILL_RADAR_DATA}>
                <PolarGrid stroke="rgba(255, 255, 255, 0.05)" />
                <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={10} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" fontSize={8} />
                <Radar name="Your Index" dataKey="user" stroke="#818cf8" fill="#818cf8" fillOpacity={0.2} />
                <Radar name="Target Level" dataKey="benchmark" stroke="#2dd4bf" fill="#2dd4bf" fillOpacity={0.1} />
                <Legend wrapperStyle={{ fontSize: 10, paddingTop: 10 }} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: 11, borderRadius: 8 }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-900/40 p-3.5 rounded-xl border border-white/5 text-[11px] text-slate-400 leading-relaxed">
            <span className="text-purple-300 font-semibold">AI Summary:</span> Your frontend index exceeds the target by 5 points. However, cloud/DevOps and System Design have significant score gaps of 30 points. Focus on these areas.
          </div>
        </div>

        {/* Priorities & Skill Categories */}
        <div className="lg:col-span-6 space-y-6">
          {/* Priority Items */}
          <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <AlertTriangle className="w-4.5 h-4.5 text-amber-400" />
              <span>Priority Skills to Build</span>
            </h3>

            <div className="space-y-3.5">
              {SKILLS_BREAKDOWN.priority.map((p, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-slate-900/40 border border-white/5 rounded-2xl">
                  <div>
                    <h5 className="text-xs font-bold text-white">{p.name}</h5>
                    <p className="text-[10px] text-slate-500 mt-0.5">Est. time requirement: {p.time}</p>
                  </div>
                  <span className={`text-[9px] px-2 py-0.5 rounded font-extrabold uppercase ${
                    p.level === 'High' 
                      ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' 
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {p.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Current & Missing Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Current Skills */}
            <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-white flex items-center space-x-1.5 uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Current Skills</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {SKILLS_BREAKDOWN.current.map((skill, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-1 rounded bg-slate-900 border border-white/5 text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Missing Skills */}
            <div className="bg-slate-900/30 border border-white/5 rounded-2xl p-5 space-y-3">
              <h4 className="text-xs font-bold text-white flex items-center space-x-1.5 uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 text-purple-400" />
                <span>Missing Skills</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {SKILLS_BREAKDOWN.missing.map((skill, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-1 rounded bg-purple-950/20 border border-purple-500/20 text-purple-300 font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Roadmap Course Widgets */}
      <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-6">
        <div>
          <h3 className="text-sm font-bold text-white flex items-center space-x-2">
            <BookOpen className="w-4.5 h-4.5 text-purple-400" />
            <span>Recommended Learning Roadmap</span>
          </h3>
          <p className="text-[10px] text-slate-500 mt-0.5">Custom training pathways chosen by AI to address score gaps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RECOMMENDED_COURSES.map((course, idx) => (
            <div key={idx} className="bg-slate-900/40 border border-white/5 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-white/10 transition-colors">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] text-slate-400 font-medium">{course.provider}</span>
                  <div className="flex items-center text-[10px] text-amber-400 space-x-0.5">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <h4 className="text-xs font-bold text-white leading-snug">{course.name}</h4>
              </div>

              {/* Progress Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px]">
                  <span className="text-slate-500 flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {course.duration}</span>
                  <span className="text-purple-400 font-bold">{course.progress}% done</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full" style={{ width: `${course.progress}%` }} />
                </div>
              </div>

              <button 
                onClick={() => handleStartCourse(course.name)}
                className="w-full py-2 bg-slate-900 hover:bg-purple-600 border border-white/5 hover:border-purple-500 text-slate-300 hover:text-white rounded-xl text-[10px] font-bold transition-all flex items-center justify-center space-x-1.5"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{course.progress > 0 ? 'Resume Course' : 'Start Syllabus'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
