import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, 
  LineChart, Line, CartesianGrid, Legend 
} from 'recharts';
import { 
  CheckSquare, Square, Award, Bell, Shield, 
  FileText, Star, Brain, ArrowUpRight, Zap 
} from 'lucide-react';
import { 
  CAREER_SCORES, WEEKLY_PROGRESS, SKILL_GROWTH, 
  ACHIEVEMENTS, TODAY_TASKS, NOTIFICATIONS 
} from '../utils/mockData';

export default function DashboardOverview({ onSwitchTab, addToast }) {
  const [tasks, setTasks] = useState(TODAY_TASKS);
  const [currentScore, setCurrentScore] = useState(CAREER_SCORES.overall);

  const toggleTask = (taskId) => {
    setTasks(prevTasks => {
      const updated = prevTasks.map(t => {
        if (t.id === taskId) {
          const newStatus = !t.completed;
          // Calculate score modification
          let scoreDiff = 0;
          if (t.id === 1) scoreDiff = 1;
          if (t.id === 2) scoreDiff = 2;
          if (t.id === 3) scoreDiff = 2;
          if (t.id === 4) scoreDiff = 1;

          if (newStatus) {
            setCurrentScore(prev => Math.min(prev + scoreDiff, 100));
            addToast(`Task completed! +${scoreDiff} to Career Score`, 'success');
          } else {
            setCurrentScore(prev => Math.max(prev - scoreDiff, 80));
            addToast(`Task unchecked. -${scoreDiff} Career Score`, 'info');
          }
          return { ...t, completed: newStatus };
        }
        return t;
      });
      return updated;
    });
  };

  // SVGs Circular Progress Circle
  const radius = 60;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (currentScore / 100) * circumference;

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white font-display">Dashboard Overview</h1>
          <p className="text-slate-400 text-xs mt-1">Real-time career readiness analytics & daily milestones.</p>
        </div>
        <div className="flex items-center space-x-3 text-xs bg-slate-900 border border-white/5 rounded-xl px-4 py-2.5">
          <Bell className="w-4 h-4 text-purple-400 animate-pulse" />
          <span className="text-slate-300 font-semibold">Activity Synchronized</span>
        </div>
      </div>

      {/* Main Readiness and Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Readiness Gauge Main Card */}
        <div className="lg:col-span-4 glass-panel rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />
          
          <div className="flex justify-between items-center z-10">
            <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Career Readiness</span>
            <span className="text-xs text-purple-300 font-semibold px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20">Target: {CAREER_SCORES.targetScore}</span>
          </div>

          <div className="flex items-center justify-center my-6 z-10">
            <div className="relative flex items-center justify-center">
              <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
                <circle
                  stroke="rgba(255, 255, 255, 0.05)"
                  fill="transparent"
                  strokeWidth={stroke}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />
                <circle
                  stroke="url(#gradient-score)"
                  fill="transparent"
                  strokeWidth={stroke}
                  strokeDasharray={circumference + ' ' + circumference}
                  style={{ strokeDashoffset }}
                  strokeLinecap="round"
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />
                <defs>
                  <linearGradient id="gradient-score" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute text-center">
                <span className="text-4xl font-extrabold text-white font-display leading-none">{currentScore}</span>
                <span className="text-xs text-slate-500 block mt-1">/ 100</span>
              </div>
            </div>
          </div>

          <div className="text-center z-10">
            <h4 className="text-sm font-bold text-white">Excellent Standing</h4>
            <p className="text-[11px] text-slate-400 mt-1">You are in the top 15% of candidates this week. Complete tasks to hit your target.</p>
          </div>
        </div>

        {/* Score Breakdowns Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {CAREER_SCORES.breakdown.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => {
                if (item.title.includes("Resume") || item.title.includes("ATS")) onSwitchTab("resume");
                else if (item.title.includes("Skill")) onSwitchTab("skills");
                else if (item.title.includes("Interview")) onSwitchTab("coach");
                else if (item.title.includes("Job")) onSwitchTab("jobs");
              }}
              className="glass-card p-5 rounded-2xl border border-white/5 flex flex-col justify-between cursor-pointer group"
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-semibold text-slate-400 group-hover:text-purple-300 transition-colors">{item.title}</span>
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${item.color} bg-opacity-20 flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                  {item.score}
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                  <div className={`bg-gradient-to-r ${item.color} h-full`} style={{ width: `${item.score}%` }} />
                </div>
                <div className="flex justify-between items-center mt-2.5 text-[10px]">
                  <span className="text-slate-500 font-medium">{item.desc}</span>
                  <span className="text-purple-400 group-hover:underline flex items-center font-semibold">
                    Optimize <ArrowUpRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Charts & Actions Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Analytics Charts */}
        <div className="lg:col-span-8 space-y-6">
          {/* Weekly Progress Chart */}
          <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold text-white">Weekly score trajectory</h3>
                <p className="text-[10px] text-slate-500">Comparing current progress against target benchmark</p>
              </div>
              <div className="flex space-x-4 text-[10px]">
                <div className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                  <span className="text-slate-400 font-semibold">Current Score</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-slate-400 font-semibold">Target Score</span>
                </div>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={WEEKLY_PROGRESS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorScore" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="5%" stopColor="#818cf8" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorTarget" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} />
                  <YAxis domain={[75, 95]} stroke="#64748b" fontSize={10} tickLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: 11, borderRadius: 8 }} />
                  <Area type="monotone" dataKey="score" stroke="#818cf8" strokeWidth={2} fillOpacity={1} fill="url(#colorScore)" />
                  <Area type="monotone" dataKey="target" stroke="#60a5fa" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#colorTarget)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly Skill Growth Chart */}
          <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-bold text-white">Monthly Skill Growth</h3>
                <p className="text-[10px] text-slate-500">Skill index improvements in key roles</p>
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={SKILL_GROWTH} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={10} />
                  <YAxis stroke="#64748b" fontSize={10} />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: 11, borderRadius: 8 }} />
                  <Legend wrapperStyle={{ fontSize: 10, color: '#94a3b8' }} />
                  <Line type="monotone" dataKey="Frontend" stroke="#a78bfa" strokeWidth={2.5} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="Backend" stroke="#38bdf8" strokeWidth={2} />
                  <Line type="monotone" dataKey="Cloud" stroke="#2dd4bf" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Career Action Plan & Achievements */}
        <div className="lg:col-span-4 space-y-6">
          {/* AI Career Action Plan Widget */}
          <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-5">
            <div>
              <div className="flex items-center space-x-1 text-purple-400">
                <Zap className="w-4 h-4" />
                <h3 className="text-sm font-bold text-white">Today's Career Tasks</h3>
              </div>
              <p className="text-[10px] text-slate-500 mt-1">Complete daily tasks to update your career readiness rating.</p>
            </div>

            {/* Score Delta Indicator */}
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-white/5 flex items-center justify-between text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 rounded-full blur-lg pointer-events-none" />
              <div>
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Current Score</span>
                <span className="text-2xl font-black text-white">{currentScore}</span>
              </div>
              <div className="text-purple-400 font-black">→</div>
              <div>
                <span className="text-[10px] text-slate-500 block uppercase tracking-wider">Estimated Score</span>
                <span className="text-2xl font-black text-purple-300">93</span>
              </div>
            </div>

            {/* Tasks Checklist */}
            <div className="space-y-3">
              {tasks.map((task) => (
                <div 
                  key={task.id} 
                  onClick={() => toggleTask(task.id)}
                  className={`flex items-start justify-between p-3.5 rounded-2xl cursor-pointer border transition-all ${
                    task.completed 
                      ? 'bg-purple-950/20 border-purple-500/30' 
                      : 'bg-slate-900/40 border-white/5 hover:bg-slate-900/80 hover:border-white/10'
                  }`}
                >
                  <div className="flex space-x-3 items-start">
                    <button className="focus:outline-none mt-0.5 text-purple-400">
                      {task.completed ? <CheckSquare className="w-4.5 h-4.5" /> : <Square className="w-4.5 h-4.5 text-slate-500" />}
                    </button>
                    <div>
                      <h4 className={`text-xs font-bold ${task.completed ? 'text-slate-500 line-through' : 'text-white'}`}>
                        {task.text}
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">{task.desc}</p>
                    </div>
                  </div>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${
                    task.completed 
                      ? 'bg-purple-500/20 text-purple-300' 
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {task.xp}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements list */}
          <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Key Achievements</span>
            </h3>
            
            <div className="space-y-3">
              {ACHIEVEMENTS.map((a) => (
                <div key={a.id} className="flex items-center space-x-3.5 bg-slate-900/30 p-3 rounded-2xl border border-white/5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500/10 to-orange-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Star className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xs font-bold text-white">{a.title}</h5>
                    <p className="text-[10px] text-slate-500">{a.desc}</p>
                  </div>
                  <span className="text-[9px] text-slate-500 font-semibold">{a.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Notifications / System Alerts */}
          <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center space-x-1.5">
              <Bell className="w-4 h-4 text-purple-400" />
              <span>Platform Alerts</span>
            </h3>

            <div className="space-y-3">
              {NOTIFICATIONS.map((n) => (
                <div key={n.id} className="flex items-start space-x-3 p-3 bg-slate-900/20 border border-white/5 rounded-2xl text-[11px] leading-relaxed">
                  <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                    n.type === 'success' ? 'bg-emerald-500' : n.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-grow">
                    <p className="text-slate-300 font-medium">{n.text}</p>
                    <span className="text-[9px] text-slate-500 block mt-1">{n.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
