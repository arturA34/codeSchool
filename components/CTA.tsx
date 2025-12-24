import React from 'react';
import { ArrowRight, Code, User, AtSign, ShieldCheck } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-light-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-green-200/20 rounded-full blur-[80px]"></div>

      <div className="relative z-10 w-full max-w-[1200px] px-4 py-20 lg:py-32">
        <div className="relative bg-white rounded-[2.5rem] lg:rounded-[4rem] shadow-2xl overflow-hidden border border-gray-100">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
          
          {/* Mock Code */}
          <div className="absolute top-10 right-10 opacity-5 select-none pointer-events-none hidden md:block">
            <pre className="font-mono text-sm leading-relaxed text-dark">
{`function initFuture() {
  const skills = ['React', 'Node', 'AI'];
  return skills.map(s => s.master());
}`}
            </pre>
          </div>

          <div className="relative flex flex-col items-center px-6 py-16 md:px-16 md:py-24 text-center">
             <div className="max-w-3xl flex flex-col gap-6 mb-12">
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-dark self-center">
                   <Code size={16} className="font-bold" />
                   <span className="text-sm font-bold tracking-wide uppercase">IT Career</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-[1.1] tracking-tight font-display">
                  Become a high-demand developer today
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Leave a request, and we will help you choose a training program for your goals. Start your path to a high salary and interesting projects.
                </p>
             </div>

             <div className="w-full max-w-4xl bg-light-background p-2 md:p-3 rounded-[2rem] border border-gray-200 shadow-inner">
                <form className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch p-4 md:p-6 bg-white rounded-[1.5rem] shadow-sm">
                   <div className="flex-1 min-w-[200px] group">
                      <div className="relative flex items-center h-14 md:h-16 px-5 bg-light-background rounded-full border border-transparent focus-within:border-primary transition-all duration-300">
                         <User className="text-gray-400 mr-3 group-focus-within:text-primary transition-colors" />
                         <input className="w-full bg-transparent border-none focus:outline-none text-dark placeholder-gray-400 font-medium text-base md:text-lg" placeholder="Your Name" required type="text" />
                      </div>
                   </div>
                   <div className="flex-1 min-w-[200px] group">
                      <div className="relative flex items-center h-14 md:h-16 px-5 bg-light-background rounded-full border border-transparent focus-within:border-primary transition-all duration-300">
                         <AtSign className="text-gray-400 mr-3 group-focus-within:text-primary transition-colors" />
                         <input className="w-full bg-transparent border-none focus:outline-none text-dark placeholder-gray-400 font-medium text-base md:text-lg" placeholder="Email or Telegram" required type="text" />
                      </div>
                   </div>
                   <div className="w-full md:w-auto">
                      <button className="group relative w-full md:w-auto h-14 md:h-16 px-8 md:px-12 rounded-full bg-primary hover:bg-primary-hover text-dark font-bold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden">
                         <span className="relative z-10">Start Learning</span>
                         <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" />
                         <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent z-0"></div>
                      </button>
                   </div>
                </form>
             </div>

             <div className="mt-8 flex flex-col items-center gap-2 text-center opacity-80">
                <div className="flex items-center gap-2 text-emerald-700 mb-1">
                   <ShieldCheck size={16} />
                   <span className="text-xs font-bold uppercase tracking-wider">Data Protected</span>
                </div>
                <p className="text-xs md:text-sm text-gray-500 max-w-md">
                   By clicking the button, you agree to our <a href="#" className="underline decoration-gray-300 hover:decoration-primary">privacy policy</a> and consent to data processing.
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;