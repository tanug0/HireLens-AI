import React from 'react';
import { 
  User, Mail, MapPin, Award, Calendar, 
  BookOpen, Star, Code, Shield, Zap, ExternalLink 
} from 'lucide-react';
import { PROFILE_DATA } from '../utils/mockData';

export default function Profile() {
  const getBadgeIcon = (iconName) => {
    switch (iconName) {
      case 'Shield': return <Shield className="w-5 h-5 text-blue-400" />;
      case 'Code': return <Code className="w-5 h-5 text-purple-400" />;
      case 'Award': return <Award className="w-5 h-5 text-teal-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      default: return <Star className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white font-display">User Profile</h1>
        <p className="text-slate-400 text-xs mt-1">Manage credentials, review achievements, badges, and verified accomplishments.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Personal info & Badges */}
        <div className="lg:col-span-4 space-y-6">
          {/* Main User Card */}
          <div className="glass-panel rounded-3xl p-6 border-white/5 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />
            
            <div className="space-y-4">
              <div className="relative inline-block">
                <img 
                  src={PROFILE_DATA.avatar} 
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-purple-500/30 p-1"
                  alt={PROFILE_DATA.name} 
                />
                <div className="absolute bottom-0 right-2 w-6 h-6 rounded-full bg-purple-600 border-2 border-slate-950 flex items-center justify-center text-white text-[10px] font-bold">
                  ★
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{PROFILE_DATA.name}</h3>
                <p className="text-xs text-purple-300 font-semibold">{PROFILE_DATA.title}</p>
                <p className="text-[10px] text-slate-500 flex items-center justify-center mt-1"><MapPin className="w-3.5 h-3.5 mr-0.5" /> {PROFILE_DATA.location}</p>
              </div>
            </div>

            {/* Profile Completeness */}
            <div className="space-y-1.5 text-left border-t border-white/5 pt-4">
              <div className="flex justify-between text-[10px]">
                <span className="text-slate-400 font-semibold">Profile Completeness</span>
                <span className="text-purple-300 font-bold">{PROFILE_DATA.completion}%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full" style={{ width: `${PROFILE_DATA.completion}%` }} />
              </div>
            </div>

            {/* XP & Leaderboard Position */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 text-center">
              <div>
                <span className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold block">Total Career XP</span>
                <span className="text-lg font-black text-white">{PROFILE_DATA.totalXp} XP</span>
              </div>
              <div>
                <span className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold block">Leaderboard Rank</span>
                <span className="text-lg font-black text-purple-300">#{PROFILE_DATA.leaderboardRank}</span>
              </div>
            </div>
          </div>

          {/* Badges Inventory */}
          <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Award className="w-4.5 h-4.5 text-amber-400" />
              <span>Earned Badges</span>
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {PROFILE_DATA.badges.map((badge, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-white/5 rounded-2xl p-3 flex flex-col items-center text-center space-y-2">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${badge.color} bg-opacity-10 border border-white/10 flex items-center justify-center`}>
                    {getBadgeIcon(badge.icon)}
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold text-white">{badge.title}</h5>
                    <p className="text-[8px] text-slate-500 mt-0.5">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Timeline, Education, Projects */}
        <div className="lg:col-span-8 space-y-6">
          {/* Work Experience Timeline */}
          <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-5">
            <h3 className="text-sm font-bold text-white flex items-center space-x-2">
              <Calendar className="w-4.5 h-4.5 text-purple-400" />
              <span>Career Timeline</span>
            </h3>

            <div className="relative pl-6 border-l border-white/10 space-y-6">
              {PROFILE_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[30px] top-1 w-3.5 h-3.5 rounded-full bg-purple-500 border-2 border-slate-950 shadow-md shadow-purple-500/50" />
                  
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-500 font-bold">{exp.period}</span>
                    <h4 className="text-xs font-bold text-white">{exp.role}</h4>
                    <p className="text-[10px] text-purple-300 font-semibold">{exp.company}</p>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certificates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <BookOpen className="w-4.5 h-4.5 text-blue-400" />
                <span>Education</span>
              </h3>

              {PROFILE_DATA.education.map((edu, idx) => (
                <div key={idx} className="space-y-1 bg-slate-900/20 p-3.5 rounded-2xl border border-white/5">
                  <span className="text-[9px] text-slate-500 font-bold">{edu.period}</span>
                  <h4 className="text-xs font-bold text-white">{edu.school}</h4>
                  <p className="text-[10px] text-slate-400">{edu.degree}</p>
                  <span className="inline-block text-[9px] px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded font-semibold mt-1">
                    {edu.grade}
                  </span>
                </div>
              ))}
            </div>

            {/* Certificates */}
            <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <Award className="w-4.5 h-4.5 text-teal-400" />
                <span>Certifications</span>
              </h3>

              <div className="space-y-3">
                {PROFILE_DATA.certificates.map((cert, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-slate-900/20 p-3.5 rounded-2xl border border-white/5">
                    <div>
                      <h4 className="text-xs font-bold text-white">{cert.name}</h4>
                      <p className="text-[9px] text-slate-500 mt-0.5">{cert.issuer} • {cert.date}</p>
                    </div>
                    <span className="text-[9px] text-teal-400 font-semibold px-2 py-0.5 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center">
                      Verified
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="glass-panel rounded-3xl p-6 border-white/5 space-y-4">
            <h3 className="text-sm font-bold text-white">Featured Projects</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROFILE_DATA.projects.map((proj, idx) => (
                <div key={idx} className="bg-slate-900/30 border border-white/5 p-4 rounded-2xl space-y-3 flex flex-col justify-between hover:border-white/10 transition-colors">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold text-white flex items-center">
                      {proj.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 leading-relaxed">{proj.desc}</p>
                  </div>
                  <a 
                    href={proj.url} 
                    className="text-[9px] text-purple-400 hover:text-purple-300 font-bold flex items-center space-x-1"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
