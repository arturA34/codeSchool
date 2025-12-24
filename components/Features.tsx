import React from 'react';
import { ShieldCheck, UserCheck, Terminal, FolderGit2, Users, Clock } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Why Us?</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark leading-[1.1] tracking-tight font-display">
             More than just an <br className="hidden md:block"/>
             <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-dark to-gray-600">
               online school
               <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-60" preserveAspectRatio="none" viewBox="0 0 100 10">
                 <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
               </svg>
             </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl">
             We removed the fluff. Only practice, expert support, and results guaranteed by contract.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
            {/* Job Guarantee */}
            <div className="group relative md:col-span-2 lg:col-span-2 lg:row-span-2 bg-light-background rounded-[2rem] lg:rounded-tr-[5rem] p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between h-full min-h-[400px]">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent rounded-bl-full -mr-20 -mt-20 transition-transform group-hover:scale-110 duration-700"></div>
                <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-inner">
                        <ShieldCheck size={32} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4 font-display">Job Guarantee</h3>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                        We are confident in our program. If you don't find a job within 6 months of graduation, we refund 100% of the tuition.
                    </p>
                </div>
                <div className="relative z-10 mt-8 pt-6 border-t border-gray-200/50">
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex -space-x-4">
                            {[1,2,3].map((i) => (
                                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-12 h-12 rounded-full border-[3px] border-white object-cover" />
                            ))}
                            <div className="w-12 h-12 rounded-full border-[3px] border-white bg-primary text-emerald-900 flex items-center justify-center text-xs font-bold">
                                +4k
                            </div>
                        </div>
                        <div>
                           <div className="text-sm font-bold text-dark">Graduates</div>
                           <div className="text-xs text-primary font-bold">93% hired</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mentor */}
            <div className="group md:col-span-1 lg:col-span-1 lg:row-span-2 bg-[#0E1116] rounded-[2rem] p-8 shadow-xl hover:translate-y-[-4px] transition-transform duration-300 flex flex-col relative overflow-hidden text-white">
                <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/10">
                        <UserCheck size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 tracking-wide font-display">Personal Mentor</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                        Personal guidance, code review, and development plans. You never code alone.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                            <Clock size={20} className="text-primary" />
                            <span className="text-sm font-medium">15 min response</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                            <Terminal size={20} className="text-primary" />
                            <span className="text-sm font-medium">Code Review</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stack */}
            <div className="group md:col-span-1 lg:col-span-1 bg-light-background rounded-[2rem] p-6 border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:rotate-6 transition-transform">
                        <Terminal size={24} />
                    </div>
                    <div className="px-2 py-1 rounded bg-gray-100 text-[10px] font-bold uppercase text-gray-500 tracking-wider">Top 2024</div>
                </div>
                <h3 className="text-lg font-bold text-dark mb-2 font-display">Modern Stack</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    React, Node.js, Python. We teach what the market demands right now.
                </p>
            </div>

            {/* Projects */}
            <div className="group md:col-span-1 lg:col-span-1 bg-light-background rounded-[2rem] lg:rounded-br-[4rem] p-6 border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:rotate-6 transition-transform">
                        <FolderGit2 size={24} />
                    </div>
                </div>
                <h3 className="text-lg font-bold text-dark mb-2 font-display">Real Projects</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                    5+ full-scale cases for your portfolio from real clients, not toy problems.
                </p>
            </div>

            {/* Community */}
            <div className="group md:col-span-1 lg:col-span-2 bg-[#E8FDF1] rounded-[2rem] p-6 border border-primary/20 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:shadow-md transition-shadow">
                <div className="shrink-0 relative">
                    <div className="w-16 h-16 rounded-full bg-primary text-emerald-950 flex items-center justify-center shadow-lg shadow-primary/20 relative z-10 group-hover:scale-110 transition-transform">
                        <Users size={32} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-dark mb-2 font-display">Alumni Community</h3>
                    <p className="text-[#618973] text-sm sm:text-base leading-relaxed">
                       Access to a closed chat with experts from Google, Amazon, and Yandex. Strong networking is half the success.
                    </p>
                </div>
            </div>

            {/* Flexible Schedule */}
            <div className="group md:col-span-1 lg:col-span-2 bg-light-background rounded-[2rem] p-6 border border-gray-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-6 hover:shadow-md transition-shadow">
                <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <Clock size={32} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-dark mb-2 font-display">Flexible Schedule</h3>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                        Learn at your own pace without hard deadlines. We help you balance courses with work or university.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Features;