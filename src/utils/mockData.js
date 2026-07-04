// Mock data store for HireLens AI

export const STATS = [
  { value: "50K+", label: "Students Guided" },
  { value: "95%", label: "Resume Accuracy" },
  { value: "100K+", label: "Career Insights Generated" },
  { value: "90%", label: "Interview Success Improvement" }
];

export const FAQS = [
  {
    question: "How does the ATS Compatibility Checker work?",
    answer: "Our AI scans your resume using parsing algorithms similar to those used by modern Applicant Tracking Systems (ATS). It evaluates keyword density, formatting, section headers, and file parsing compatibility, highlighting exactly why recruiters might miss your profile."
  },
  {
    question: "What is the Career Readiness Score?",
    answer: "It is an aggregated score out of 100 computed from multiple facets: Resume quality, ATS score, technical skills match, interview readiness checkpoints, and alignment with target job markets. It updates dynamically as you complete preparation tasks."
  },
  {
    question: "Is my resume data secure with HireLens AI?",
    answer: "Absolutely. All resume parsing and analysis are simulated locally for this platform demonstration. In production, we encrypt your resumes end-to-end, and your personal data is never shared with third parties without your explicit authorization."
  },
  {
    question: "Can I customize the Dream Company Tracker?",
    answer: "Yes! You can add companies to your tracking list and target specific job descriptions. The tracker parses the public roles at those companies, finds the skill delta, and creates a customized 1-to-6 month preparation timeline."
  },
  {
    question: "What does the AI Career Coach do?",
    answer: "The AI Career Coach is an interactive assistant trained on mock career mentoring. It can critique resume bullet points, conduct simulated technical or behavioral mock interviews, recommend learning pathways, and suggest negotiations strategies."
  }
];

export const TESTIMONIALS = [
  {
    quote: "HireLens AI completely changed my job hunting strategy. I went from getting rejected by ATS systems to securing 4 interviews in a single week, including my dream offer at Google!",
    author: "Elena Rostova",
    role: "Software Engineering Graduate",
    company: "Google",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
  },
  {
    quote: "The skill gap analysis was a wake-up call. I didn't realize how much System Design and Cloud skills recruiters were looking for. The custom roadmap helped me bridge the gap in 2 months.",
    author: "Marcus Chen",
    role: "Self-Taught Developer",
    company: "Microsoft",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
  },
  {
    quote: "As a fresh graduate, I felt lost. The AI Career Coach helped me write an impactful resume summary and guided my interview prep. I'm now a junior full-stack developer at Vercel!",
    author: "Aaliyah Jackson",
    role: "Computer Science Major",
    company: "Vercel",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150"
  }
];

export const CAREER_SCORES = {
  overall: 87,
  targetScore: 93,
  breakdown: [
    { title: "Resume Score", score: 84, color: "from-purple-500 to-indigo-500", desc: "Grammar, impact, metrics" },
    { title: "ATS Score", score: 89, color: "from-blue-500 to-cyan-500", desc: "Keyword compatibility" },
    { title: "Skill Score", score: 82, color: "from-teal-500 to-emerald-500", desc: "Technical skill coverage" },
    { title: "Interview Readiness", score: 91, color: "from-amber-500 to-orange-500", desc: "Communication & practice" },
    { title: "Job Match Score", score: 88, color: "from-rose-500 to-pink-500", desc: "Overall role compatibility" }
  ]
};

export const WEEKLY_PROGRESS = [
  { name: "Mon", score: 81, target: 85 },
  { name: "Tue", score: 82, target: 85 },
  { name: "Wed", score: 84, target: 87 },
  { name: "Thu", score: 84, target: 87 },
  { name: "Fri", score: 85, target: 90 },
  { name: "Sat", score: 87, target: 90 },
  { name: "Sun", score: 87, target: 93 }
];

export const SKILL_GROWTH = [
  { name: "Jan", Frontend: 70, Backend: 40, Cloud: 20 },
  { name: "Feb", Frontend: 75, Backend: 45, Cloud: 25 },
  { name: "Mar", Frontend: 80, Backend: 50, Cloud: 30 },
  { name: "Apr", Frontend: 85, Backend: 52, Cloud: 35 },
  { name: "May", Frontend: 90, Backend: 58, Cloud: 40 },
  { name: "Jun", Frontend: 90, Backend: 60, Cloud: 45 }
];

export const ACHIEVEMENTS = [
  { id: 1, title: "Resume Architect", desc: "Achieved >80 resume score", icon: "FileText", date: "June 25" },
  { id: 2, title: "ATS Optimizer", desc: "Secured >85 ATS rating", icon: "Shield", date: "June 28" },
  { id: 3, title: "Interview Ready", desc: "Passed initial behavioral simulation", icon: "Award", date: "July 01" }
];

export const TODAY_TASKS = [
  { id: 1, text: "Improve Resume Summary", desc: "Add active verbs and career goals", difficulty: "Easy", xp: "+15 XP", category: "Resume", completed: false },
  { id: 2, text: "Learn SQL Joins & Subqueries", desc: "Complete interactive SQL problems", difficulty: "Medium", xp: "+25 XP", category: "Skill", completed: false },
  { id: 3, text: "Deploy React Project to Vercel", desc: "Ensure project builds and has meta tags", difficulty: "Medium", xp: "+30 XP", category: "Project", completed: false },
  { id: 4, text: "Practice 15-min Behavioral Mock Interview", desc: "Answer 'Tell me about yourself'", difficulty: "Hard", xp: "+50 XP", category: "Interview", completed: false }
];

export const DREAM_COMPANIES = [
  { name: "Google", prep: 72, logo: "https://cdn.cdnlogo.com/logos/g/35/google-icon.svg", missing: ["System Design", "Docker", "AWS"], timeline: "3 Months" },
  { name: "Microsoft", prep: 85, logo: "https://cdn.cdnlogo.com/logos/m/82/microsoft.svg", missing: ["C# / .NET", "Azure Basics"], timeline: "1 Month" },
  { name: "Amazon", prep: 68, logo: "https://cdn.cdnlogo.com/logos/a/38/amazon-icon.svg", missing: ["Distributed Systems", "SQL Opt."], timeline: "4 Months" },
  { name: "TCS", prep: 94, logo: "https://cdn.cdnlogo.com/logos/t/79/tcs-tata-consultancy-services.svg", missing: ["Aptitude Tests"], timeline: "2 Weeks" },
  { name: "Infosys", prep: 96, logo: "https://cdn.cdnlogo.com/logos/i/85/infosys.svg", missing: ["HR Interview Prep"], timeline: "1 Week" },
  { name: "Accenture", prep: 90, logo: "https://cdn.cdnlogo.com/logos/a/13/accenture.svg", missing: ["Case Studies"], timeline: "3 Weeks" }
];

export const RESUME_ANALYSIS_DATA = {
  resumeScore: 84,
  atsScore: 89,
  keywordMatch: 78,
  strengths: [
    "Strong action verbs (e.g. 'Engineered', 'Optimized', 'Secured')",
    "Quantitative metrics used to measure impact in 3 different project descriptions",
    "Proper single-column, ATS-scannable format"
  ],
  weaknesses: [
    "Professional summary is generic and lacks focus on target role (Frontend/Fullstack)",
    "Missing critical cloud technologies in the skill index",
    "Inconsistent bullet point indentation in experience sections"
  ],
  missingKeywords: ["Docker", "Kubernetes", "CI/CD", "TypeScript", "System Design"],
  grammarSuggestions: [
    { original: "responsible for managing application state using Redux", suggestion: "Managed application state using Redux, improving latency by 12%", reason: "Use active verbs and quantify results" },
    { original: "did code reviews and wrote unit tests", suggestion: "Conducted code reviews and authored comprehensive unit tests", reason: "Elevate professional tone" }
  ],
  formattingSuggestions: [
    "Ensure line spacing is set to 1.15pt consistently",
    "Section headers should be simple: 'Experience', 'Education', 'Skills'"
  ],
  aiTips: [
    "Add your Github profile URL at the very top",
    "Tailor the professional summary to specifically mention React, Node, and SaaS engineering",
    "Limit resume to exactly 1 page based on your experience levels"
  ]
};

export const SKILL_RADAR_DATA = [
  { subject: "Frontend", user: 90, benchmark: 85, fullMark: 100 },
  { subject: "Backend", user: 60, benchmark: 80, fullMark: 100 },
  { subject: "Cloud/DevOps", user: 45, benchmark: 75, fullMark: 100 },
  { subject: "System Design", user: 50, benchmark: 80, fullMark: 100 },
  { subject: "Databases", user: 70, benchmark: 85, fullMark: 100 },
  { subject: "Soft Skills", user: 85, benchmark: 80, fullMark: 100 }
];

export const SKILLS_BREAKDOWN = {
  current: ["HTML5 / CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Node.js", "Git / GitHub", "MongoDB"],
  missing: ["System Design", "Docker", "Amazon Web Services (AWS)", "TypeScript", "GraphQL", "CI/CD Pipelines"],
  priority: [
    { name: "System Design", level: "High", time: "3 weeks" },
    { name: "Docker & AWS Basics", level: "Medium", time: "2 weeks" },
    { name: "TypeScript", level: "Medium", time: "1 week" }
  ]
};

export const RECOMMENDED_COURSES = [
  { name: "System Design Fundamentals", provider: "ByteByteGo", progress: 40, duration: "12 hours", rating: 4.9 },
  { name: "Docker & Kubernetes for Developers", provider: "Academind", progress: 15, duration: "18 hours", rating: 4.8 },
  { name: "Advanced TypeScript & Design Patterns", provider: "Frontend Masters", progress: 75, duration: "8 hours", rating: 4.9 }
];

export const MOCK_JOBS = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Vercel",
    logo: "⚡",
    match: 95,
    salary: "$110,000 - $130,000",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    location: "San Francisco, CA (Remote)",
    exp: "Junior - Mid",
    type: "Full-time"
  },
  {
    id: 2,
    role: "AI Application Engineer",
    company: "OpenAI",
    logo: "🤖",
    match: 82,
    salary: "$160,000 - $210,000",
    skills: ["Python", "PyTorch", "LLMs", "React"],
    location: "San Francisco, CA (Onsite)",
    exp: "Mid - Senior",
    type: "Full-time"
  },
  {
    id: 3,
    role: "Fullstack Engineer",
    company: "Stripe",
    logo: "💳",
    match: 88,
    salary: "$130,000 - $160,000",
    skills: ["React", "Node.js", "Ruby", "PostgreSQL"],
    location: "Seattle, WA (Hybrid)",
    exp: "Mid Level",
    type: "Full-time"
  },
  {
    id: 4,
    role: "Data Analyst / Analytics Engineer",
    company: "Netflix",
    logo: "🎬",
    match: 75,
    salary: "$95,000 - $120,000",
    skills: ["Python", "SQL", "Tableau", "dbt"],
    location: "Los Gatos, CA",
    exp: "Junior - Mid",
    type: "Contract"
  }
];

export const SUGGESTED_PROMPTS = [
  "How can I increase my ATS score from 89 to 95?",
  "Practice a Mock Interview for a Frontend Engineer role",
  "Generate a learning roadmap to learn System Design in 3 weeks",
  "Critique my resume summary: 'Enthusiastic CS grad looking for front end role'",
  "What are the top AI skills in high demand in 2026?"
];

export const PROFILE_DATA = {
  name: "Tanu Shree",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
  title: "Frontend Engineer Intern",
  location: "New Delhi, India",
  completion: 82,
  leaderboardRank: 142,
  totalXp: 4250,
  badges: [
    { title: "ATS Ninja", desc: "Reached >85 ATS Score", color: "from-blue-500 to-indigo-500", icon: "Shield" },
    { title: "React Wizard", desc: "React skills verified", color: "from-purple-500 to-pink-500", icon: "Code" },
    { title: "Interview Ready", desc: "Finished 3 behavioral mocks", color: "from-teal-500 to-emerald-500", icon: "Award" },
    { title: "Overachiever", desc: "Completed all weekly tasks", color: "from-amber-500 to-orange-500", icon: "Zap" }
  ],
  education: [
    { degree: "Bachelor of Technology in Computer Science", school: "Delhi Technological University", period: "2022 - 2026", grade: "GPA 9.1/10" }
  ],
  experience: [
    { role: "Frontend Developer Intern", company: "Aesthetic Web LLC", period: "May 2025 - August 2025", desc: "Built dynamic web interfaces using React and Tailwind CSS. Improved page load speed by 25% through image optimization and code-splitting." }
  ],
  projects: [
    { name: "HireLens AI SaaS", desc: "A premium AI-powered Career Intelligence platform built using React, Recharts, and Framer Motion.", url: "#" },
    { name: "Glassmorphic Kanban Board", desc: "Drag-and-drop workspace manager with local persistence and elegant UI transitions.", url: "#" }
  ],
  certificates: [
    { name: "Advanced React & Web Performance", issuer: "Frontend Masters", date: "April 2025" },
    { name: "UX Design Specialization", issuer: "Google Coursera", date: "December 2024" }
  ]
};

export const NOTIFICATIONS = [
  { id: 1, type: "info", text: "Your Resume Score increased by 2 points after editing summary", time: "10m ago" },
  { id: 2, type: "warning", text: "Google preparation checklist is missing AWS details", time: "1h ago" },
  { id: 3, type: "success", text: "Mock Interview Simulation evaluation complete", time: "1d ago" }
];
