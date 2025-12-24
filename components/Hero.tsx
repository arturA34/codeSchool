import React from 'react';
import { Play, GraduationCap, FolderOpen, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[80px] -top-24 -left-24 -z-10 opacity-60"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[80px] top-1/2 right-0 -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-dark font-display"
            >
              Online programming school: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-primary">master in-demand skills</span>, get mentorship and build your portfolio.
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {[
                { icon: GraduationCap, text: "1:1 Mentorship" },
                { icon: FolderOpen, text: "Portfolio Projects" },
                { icon: Rocket, text: "Career Support" }
              ].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-dark">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start pt-2"
            >
              <button className="flex items-center justify-center h-14 px-8 rounded-xl bg-primary hover:bg-primary-hover text-dark text-base font-bold transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1">
                Start Free Lesson
              </button>
              <button className="flex items-center justify-center h-14 px-8 rounded-xl bg-white border-2 border-gray-100 hover:border-primary/50 text-dark text-base font-bold transition-all duration-300 hover:bg-gray-50">
                View Curriculum
              </button>
            </motion.div>

            <div className="pt-6 border-t border-gray-200/60">
               <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12">
                 {[
                   { val: "4.9/5", label: "School Rating" },
                   { val: "1000+", label: "Students" },
                   { val: "60+", label: "Projects" }
                 ].map((stat, i) => (
                   <div key={i} className="flex flex-col items-center lg:items-start gap-1">
                     <div className="flex items-center gap-1.5">
                       {i === 0 && <span className="text-yellow-500">★</span>}
                       <span className="text-2xl font-bold text-dark font-display">{stat.val}</span>
                     </div>
                     <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Right Visual (Code Editor) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative w-full perspective-1000"
          >
            {/* Background shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-50/50 rounded-[3rem] rotate-3 scale-95 transform transition-transform duration-700 hover:rotate-1"></div>
            
            {/* Editor Card */}
            <div className="relative w-full max-w-lg mx-auto bg-[#1E1E1E] rounded-2xl shadow-2xl overflow-hidden border border-gray-800 transform transition-transform hover:scale-[1.02] duration-500 z-20">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono">App.tsx</div>
                <div className="w-4"></div>
              </div>
              
              {/* Code */}
              <div className="p-6 font-mono text-sm leading-relaxed text-gray-300 overflow-y-auto">
                <div><span className="text-[#C586C0]">import</span> React <span className="text-[#C586C0]">from</span> <span className="text-[#CE9178]">'react'</span>;</div>
                <div className="mt-2"><span className="text-[#C586C0]">const</span> <span className="text-[#DCDCAA]">StudentProfile</span> = <span class="text-[#FFD700]">()</span> <span class="text-[#569CD6]">{'=>'}</span> {'{'}</div>
                <div className="pl-4 mt-1"><span className="text-[#C586C0]">const</span> [skills, setSkills] = <span className="text-[#4EC9B0]">useState</span>([</div>
                <div className="pl-8"><span className="text-[#CE9178]">'JavaScript'</span>,</div>
                <div className="pl-8"><span className="text-[#CE9178]">'React'</span>,</div>
                <div className="pl-8"><span className="text-[#CE9178]">'Node.js'</span></div>
                <div className="pl-4">]);</div>
                <div className="mt-2 pl-4"><span className="text-[#C586C0]">return</span> (</div>
                <div className="pl-8 text-white">{'<div className="card">'}</div>
                <div className="pl-12">{'<h1>Portfolio Ready!</h1>'}</div>
                <div className="pl-12">{'<button>'}</div>
                <div className="pl-16">Find a Job 🚀</div>
                <div className="pl-12 text-white">{'</button>'}</div>
                <div className="pl-8 text-white">{'</div>'}</div>
                <div className="pl-4">);</div>
                <div>{'};'}</div>
              </div>
            </div>

            {/* Floating Notifications */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-10 -right-4 lg:-right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-30 max-w-[200px]"
            >
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                   <FolderOpen size={16} />
                 </div>
                 <div>
                   <div className="text-xs text-gray-500 font-medium">Notification</div>
                   <div className="text-sm font-bold text-dark">Offer Received!</div>
                 </div>
               </div>
               <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                 <div className="h-full bg-primary w-3/4 rounded-full"></div>
               </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute bottom-16 -left-4 lg:-left-12 bg-white py-3 px-4 rounded-xl shadow-xl border border-gray-100 z-30 flex items-center gap-3"
            >
              <div className="bg-primary/20 p-2 rounded-lg text-emerald-700">
                <Code2 size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Skill</span>
                <span className="text-sm font-bold text-dark">Fullstack Dev</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Helper icon
const Code2 = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export default Hero;