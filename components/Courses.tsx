import React from 'react';
import { ArrowRight, CheckCircle2, Download, ArrowUpRight, Terminal, BrainCircuit } from 'lucide-react';
import { Course } from '../types';

const courses: Course[] = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    duration: '6 months',
    level: 'Junior',
    tags: ['HTML5, CSS3, JS', 'React, Redux, Next.js', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=800&auto=format&fit=crop',
    features: ['HTML5, CSS3, JavaScript (ES6+)', 'React, Redux Toolkit, Next.js', 'TypeScript & Architecture'],
    type: 'card'
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    duration: '7 months',
    level: 'Middle',
    tags: ['Node.js', 'PostgreSQL', 'Docker', 'Microservices'],
    image: 'https://images.unsplash.com/photo-1558494949-efdeb6bf80d1?q=80&w=800&auto=format&fit=crop',
    features: [],
    type: 'wide'
  },
  {
    id: 'python-ai',
    title: 'Python & AI',
    duration: '8 months',
    level: 'Senior Mentor',
    tags: ['Python Core', 'Pandas', 'Machine Learning', 'PyTorch'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    features: ['Python Core & Pandas', 'Machine Learning & PyTorch'],
    type: 'large',
    avgSalary: '$3,500+'
  }
];

const Courses: React.FC = () => {
  return (
    <section id="programs" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4 font-display">
            Choose Your Path in IT
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Master an in-demand profession with a personal mentor and job guarantee.
          </p>
        </div>
        <div className="inline-flex bg-[#e8ebe9] p-1.5 rounded-2xl">
          <button className="px-6 py-2.5 rounded-xl text-sm font-bold bg-white shadow-sm text-dark transition-all">Overview</button>
          <button className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:text-dark transition-all">Compare Skills</button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        {/* Card 1: Frontend (Tall) */}
        <div className="lg:col-span-4 flex flex-col h-full">
          <div className="group relative flex flex-col h-full bg-white rounded-[2.5rem] rounded-tr-lg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="h-64 w-full bg-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${courses[0].image})` }}></div>
              <div className="absolute top-4 left-4">
                 <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-dark shadow-sm">
                   {courses[0].level}
                 </span>
              </div>
            </div>
            <div className="flex flex-col flex-grow p-6 md:p-8">
               <div className="mb-4">
                 <p className="text-gray-500 text-sm font-medium mb-1">{courses[0].duration}</p>
                 <h3 className="text-2xl font-bold text-dark tracking-tight font-display">{courses[0].title}</h3>
               </div>
               <ul className="space-y-3 mb-8 flex-grow">
                 {courses[0].features.map((f, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <CheckCircle2 size={18} className="text-primary mt-0.5" />
                     <span className="text-sm text-dark">{f}</span>
                   </li>
                 ))}
               </ul>
               <button className="w-full flex items-center justify-between px-6 py-4 bg-light-background group-hover:bg-primary transition-colors rounded-2xl text-dark font-bold text-sm">
                 <span>Course Details</span>
                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8 flex flex-col gap-6">
           {/* Card 2: Backend (Wide) */}
           <div className="group relative flex flex-col md:flex-row bg-white rounded-xl rounded-tl-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden min-h-[320px]">
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between order-2 md:order-1">
                 <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-gray-500 text-sm font-medium">{courses[1].duration}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className="text-primary text-sm font-bold">{courses[1].level}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-dark tracking-tight mb-4 font-display">{courses[1].title}</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {courses[1].tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-light-background rounded-lg text-xs font-medium text-gray-600">{tag}</span>
                      ))}
                    </div>
                 </div>
                 <button className="w-fit flex items-center gap-2 px-6 py-3 border border-gray-200 hover:border-primary hover:bg-primary/10 rounded-xl text-dark transition-all text-sm font-bold">
                   Download Syllabus
                   <Download size={18} />
                 </button>
              </div>
              <div className="w-full md:w-2/5 relative order-1 md:order-2 min-h-[200px] md:min-h-full">
                 <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${courses[1].image})` }}></div>
                 <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-black/60 to-transparent"></div>
              </div>
           </div>

           {/* Card 3: Python (Large) */}
           <div className="group relative flex flex-col md:flex-row bg-white rounded-[2.5rem] rounded-bl-lg border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex-grow">
              <div className="w-full md:w-1/2 relative min-h-[240px] md:min-h-full overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${courses[2].image})` }}></div>
                <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <BrainCircuit className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-white/70">Avg. Salary</p>
                      <p className="text-sm font-bold text-white">{courses[2].avgSalary}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                 <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                       <p className="text-gray-500 text-sm font-medium">{courses[2].duration} • {courses[2].level}</p>
                    </div>
                    <h3 className="text-3xl font-bold text-dark tracking-tight mb-2 font-display">{courses[2].title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                       Dive into the world of Artificial Intelligence. From Python basics to neural networks and big data analysis.
                    </p>
                 </div>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-light-background">
                       <Terminal className="text-gray-500" size={20} />
                       <span className="text-sm font-medium text-dark">Python Core & Pandas</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-light-background">
                       <BrainCircuit className="text-gray-500" size={20} />
                       <span className="text-sm font-medium text-dark">Machine Learning & PyTorch</span>
                    </div>
                 </div>
                 <button className="mt-8 w-full py-3.5 rounded-xl bg-dark text-white font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                   <span>Start for Free</span>
                   <ArrowUpRight size={18} />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;