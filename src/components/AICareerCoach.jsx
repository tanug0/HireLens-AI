import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Bot, User, Trash2, ArrowUpRight, Zap } from 'lucide-react';
import { SUGGESTED_PROMPTS } from '../utils/mockData';

const MOCK_BOT_RESPONSES = {
  "how can i increase my ats score from 89 to 95?": `Here is a concrete checklist to boost your ATS compatibility:

1. **Remove complex grid layouts**: Standard ATS parsers read from left-to-right, top-to-bottom. Double-column templates often merge text incorrectly. Stick to a clean single-column structure.
2. **Expand abbreviations**: Write both technical acronyms and full names (e.g., "Continuous Integration / Continuous Deployment (CI/CD)").
3. **Customize your skills index**: Make sure keywords match the target job description exactly (e.g. use "React.js" if they list "React.js", instead of "React").
4. **Rename section headers**: Use standard headers. Replace "Where I've Been" with "Professional Experience" and "My Tech Toolkit" with "Skills".
5. **Quantify achievements**: Every bullet point should follow the Google X-Y-Z formula: "Accomplished [X] as measured by [Y], by doing [Z]".`,

  "practice a mock interview for a frontend engineer role": `Let's practice! I will act as the interviewer. Here is your first behavioral question:

**"Tell me about a challenging frontend performance bottleneck you encountered in a recent project, how you diagnosed it, and what quantitative results you achieved by resolving it."**

*Pro-tip: Structure your answer using the STAR method (Situation, Task, Action, Result) and highlight tools like Chrome DevTools Performance tab, Lighthouse, or bundle analyzers.*

Reply below, and I will critique your answer!`,

  "generate a learning roadmap to learn system design in 3 weeks": `Here is your expedited 3-week System Design Syllabus:

* **Week 1: Vertical vs Horizontal Scaling & Networking**
  * Learn Load Balancers (Nginx, HAProxy) and Round-Robin routing algorithms.
  * Master DNS resolution, TCP vs UDP, and CDN cache policies.
* **Week 2: Databases, Caching & Message Queues**
  * Learn SQL vs NoSQL trade-offs (normalization vs scale).
  * Implement caching layers (Redis, Memcached) and eviction strategies (LRU).
  * Study message queues (RabbitMQ, Kafka) for asynchronous task execution.
* **Week 3: Microservices & Design Patterns**
  * Understand Rate Limiters, API Gateways, and token bucket algorithms.
  * Design a real-world system (e.g., "Design Twitter/Netflix") and draw the data-flow diagrams.`,

  "critique my resume summary: 'enthusiastic cs grad looking for front end role'": `Your current summary is a bit too generic and doesn't state your unique value. 

**Here is why:** Recruiters see "enthusiastic CS grad" hundreds of times a day. It focuses on what *you* want, rather than what *value* you bring to the company.

**Here are 3 optimized alternatives:**
* **Option 1 (Focused on metrics):** *“CS Graduate with 6+ months of internship experience building production-grade React apps, specializing in state management (Redux/Zustand) and web performance. Optimized page load speeds by 25% for an aesthetic web startup.”*
* **Option 2 (Focused on tools):** *“Frontend Engineer skilled in TypeScript, React, and Tailwind CSS. Passionate about building accessible, pixel-perfect user experiences and integrating RESTful APIs.”*
* **Option 3 (General AI/SaaS-focused):** *“Software Engineer specializing in modern frontend stacks. Proven ability to translate designs into responsive web apps and implement client-side data caching structures.”*`,

  "what are the top ai skills in high demand in 2026?": `For Frontend and Fullstack developers, these are the highly-valued AI integration skills for 2026:

1. **Retrieval-Augmented Generation (RAG)**: Understanding how to chunk documents, generate embeddings, and query Vector Databases (like Pinecone, Supabase pgvector) to feed context into LLMs.
2. **AI SDK Integrations**: Proficiency with libraries like Vercel AI SDK, LangChain, and OpenAI/Gemini SDKs to build chat interfaces, streaming UI, and generative dashboards.
3. **Structured Outputs & Tool Use (Function Calling)**: Programming LLMs to return JSON payloads instead of plain text, and configuring AI agents that can trigger REST API endpoints dynamically.
4. **Client-Side Processing**: Running lightweight models directly on the client using ONNX runtime or WebGPU libraries for offline AI tasks.`
};

export default function AICareerCoach({ addToast }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am your HireLens AI Career Coach. I can analyze your resume, suggest optimizations, conduct simulated mock interviews, or generate a tailored learning roadmap. How can I guide you today?",
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg = {
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate coach response
    setTimeout(() => {
      setIsTyping(false);
      const query = text.toLowerCase().trim().replace(/[?]/g, '');
      const responseText = MOCK_BOT_RESPONSES[query] || 
        `That's a very interesting query! As your AI Career Coach, I recommend focusing on standardizing your skills index, quantifying your project descriptions with concrete numbers, and preparing a strong STAR-method answer for behavioral interviews. How can I expand on this for you?`;

      const botMsg = {
        sender: 'bot',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1600);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        sender: 'bot',
        text: "Hello! History cleared. Ask me any career question or pick a prompt chip below.",
        time: 'Just now'
      }
    ]);
    addToast('Chat history cleared', 'info');
  };

  return (
    <div className="space-y-6 pb-12 flex flex-col h-[calc(100vh-140px)]">
      {/* Title */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white font-display">AI Career Coach</h1>
          <p className="text-slate-400 text-xs mt-1">Converse with our virtual career advisor to prepare, critique, and strategize.</p>
        </div>
        <button 
          onClick={handleClearHistory}
          className="p-2 bg-slate-900 border border-white/5 hover:border-rose-500/20 text-slate-400 hover:text-rose-400 rounded-xl transition-all"
          title="Clear chat"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 glass-panel rounded-3xl p-6 border-white/5 flex flex-col justify-between overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none" />

        {/* Scrollable messages container */}
        <div className="flex-grow overflow-y-auto space-y-4 pr-2 mb-6">
          {messages.map((msg, index) => {
            const isBot = msg.sender === 'bot';
            return (
              <div 
                key={index} 
                className={`flex items-start space-x-3.5 max-w-[85%] ${
                  isBot ? 'mr-auto' : 'ml-auto flex-row-reverse space-x-reverse'
                }`}
              >
                {/* Avatar Icon */}
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  isBot 
                    ? 'bg-gradient-to-tr from-purple-600 to-indigo-600 text-white' 
                    : 'bg-slate-900 border border-white/10 text-purple-300'
                }`}>
                  {isBot ? <Bot className="w-4.5 h-4.5" /> : <User className="w-4.5 h-4.5" />}
                </div>

                {/* Message Bubble */}
                <div className={`rounded-2xl p-4 text-xs md:text-sm leading-relaxed ${
                  isBot 
                    ? 'bg-slate-900/60 border border-white/5 text-slate-300 whitespace-pre-line' 
                    : 'bg-gradient-to-tr from-purple-900/40 to-indigo-900/40 border border-purple-500/20 text-white'
                }`}>
                  {msg.text}
                  <span className="text-[9px] text-slate-500 block mt-2 text-right">{msg.time}</span>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start space-x-3.5 mr-auto max-w-[85%]">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center flex-shrink-0">
                <Bot className="w-4.5 h-4.5" />
              </div>
              <div className="bg-slate-900/60 border border-white/5 rounded-2xl px-5 py-4 flex items-center space-x-1">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Action input and Prompt suggestions */}
        <div className="space-y-4 z-10">
          {/* Suggestion Chips */}
          <div className="flex flex-wrap gap-2">
            {SUGGESTED_PROMPTS.map((prompt, idx) => (
              <button 
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="text-[10px] md:text-xs font-semibold px-3.5 py-2 rounded-xl bg-slate-900 border border-white/5 hover:border-purple-500/30 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-left transition-all"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Textarea submit row */}
          <div className="flex space-x-2">
            <input 
              type="text" 
              placeholder="Ask anything about resume layout, keywords optimization, and mock preparation..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(inputValue); }}
              className="flex-1 bg-slate-900 border border-white/5 rounded-2xl px-4 py-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button 
              onClick={() => handleSendMessage(inputValue)}
              className="px-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-2xl shadow-lg shadow-purple-500/10 flex items-center justify-center transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
