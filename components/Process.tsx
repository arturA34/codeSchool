import React from 'react';
import { Search, GraduationCap, Terminal, FileSearch, Handshake, Trophy, ArrowRight } from 'lucide-react';

const steps = [
  { id: '01', icon: Search, title: 'Diagnostics', desc: 'We define your goals, current level, and create a personal development plan.', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600' },
  { id: '02', icon: GraduationCap, title: 'Learning', desc: 'Deep dive into theory and basics. Interactive lectures, tests, and homework.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600' },
  { id: '03', icon: Terminal, title: 'Practice', desc: 'Work on real commercial projects. Write code for your portfolio and learn teamwork.', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600' },
  { id: '04', icon: FileSearch, title: 'Code Review', desc: 'Detailed analysis of your code with a mentor. Learn to write clean, optimized code.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600' },
  { id: '05', icon: Handshake, title: 'Interviews', desc: 'Mock interviews, HR screening preparation, and resume assistance.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600' },
];

const Process: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Shapes */}
      <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-primary/15 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary/20 text-dark text-sm font-bold tracking-wide uppercase mb-4">
            Your Path to IT
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-dark mb-6 font-display">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
             We built a process not just for knowledge, but to get you your dream job. A transparent path from newbie to offer.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative w-full flex flex-col gap-12 lg:gap-0">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col lg:flex-row items-center justify-between w-full lg:mb-24 group">
               {/* Content Card */}
               <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-3'} w-full lg:w-[45%] bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative z-10 hover:-translate-y-1 transition-transform duration-300`}>
                  <div className={`absolute -top-4 ${index % 2 === 0 ? '-right-4 lg:-right-6' : '-left-4 lg:-left-6'} w-12 h-12 ${index % 2 === 0 ? 'bg-primary text-dark' : 'bg-dark text-white'} font-bold flex items-center justify-center rounded-xl text-xl shadow-lg z-20`}>
                    {step.id}
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <step.icon size={32} className="text-primary shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-dark mb-2 font-display">{step.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
               </div>

               {/* Connector Dot */}
               <div className="hidden lg:flex order-2 absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary z-10"></div>

               {/* Visual Image */}
               <div className={`order-1 ${index % 2 === 0 ? 'lg:order-3 justify-start lg:pl-12' : 'lg:order-1 justify-end lg:pr-12'} w-full lg:w-[45%] flex pb-6 lg:pb-0`}>
                  <div className={`relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden shadow-sm ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} opacity-80 hover:opacity-100 transition-opacity`}>
                     <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                  </div>
               </div>
            </div>
          ))}

          {/* Final Step: Offer */}
          <div className="relative w-full flex justify-center pt-8">
            <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary z-10"></div>
            <div className="w-full lg:w-[60%] bg-dark text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden z-10 text-center">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary rounded-full blur-3xl opacity-30"></div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 text-dark shadow-glow mx-auto">
                <Trophy size={32} />
              </div>
              <div className="inline-block px-3 py-1 bg-white/10 rounded-lg text-sm font-medium mb-3 text-primary tracking-wider uppercase">Final Step</div>
              <h3 className="text-3xl font-bold mb-4 font-display">06. Offer</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg mx-auto mb-8">
                Receive job offers. We support you even during salary negotiations to ensure you get the best deal.
              </p>
              <button className="inline-flex items-center justify-center gap-2 h-14 px-8 bg-primary hover:bg-primary-hover text-dark text-lg font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30">
                Start Learning <ArrowRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;