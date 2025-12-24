import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Marketplace',
    description: 'Designed and built a scalable marketplace architecture with Stripe integration and inventory management.',
    tags: ['React', 'Node.js'],
    outcome: 'Increased conversion by 20%',
    image: 'linear-gradient(135deg, #122018 0%, #1a3c2f 100%)',
    gradient: 'from-[#122018] to-[#1a3c2f]'
  },
  {
    id: '2',
    title: 'Fintech Dashboard',
    description: 'Real-time data visualization platform processing thousands of transactions per second.',
    tags: ['TypeScript', 'D3.js'],
    outcome: 'Reduced load time by 45%',
    image: 'linear-gradient(to bottom right, #2C3E50, #000000)',
    gradient: 'from-slate-800 to-black'
  },
  {
    id: '3',
    title: 'Social App Architecture',
    description: 'Backend architecture designed for high concurrency and real-time messaging features.',
    tags: ['Python', 'Django'],
    outcome: 'Supported 10k+ concurrent users',
    image: 'linear-gradient(45deg, #121714 25%, #1a2c22 25%)',
    gradient: 'from-gray-900 to-emerald-950'
  }
];

const Portfolio: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full py-20 lg:py-32 bg-light-background">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
       
       <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
         {/* Header */}
         <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-8 bg-primary"></span>
                <p className="text-primary font-medium tracking-wide text-sm uppercase">03 — Portfolio</p>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight text-dark font-display">
                Real Projects.<br/>
                <span className="text-gray-400">Real Experience.</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Don't just learn syntax. Gain experience by solving real business problems and shipping code that matters.
              </p>
            </div>
            
            {/* Nav Controls */}
            <div className="hidden lg:flex gap-4">
               <button onClick={() => scroll('left')} className="group flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-primary transition-colors duration-300">
                 <ArrowLeft className="text-dark" />
               </button>
               <button onClick={() => scroll('right')} className="group flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white hover:bg-primary transition-colors duration-300">
                 <ArrowRight className="text-dark" />
               </button>
            </div>
         </div>

         {/* Scroll Container */}
         <div ref={scrollRef} className="flex overflow-x-auto gap-6 lg:gap-8 pb-12 pt-4 pl-1 hide-scrollbar snap-x snap-mandatory">
            {projects.map((project) => (
              <div key={project.id} className="group relative flex-shrink-0 w-[85vw] md:w-[600px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 snap-center border border-gray-100">
                 <div className="relative h-[320px] overflow-hidden">
                    <div className="absolute inset-0" style={{ background: project.image }}></div>
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                       {project.tags.map(tag => (
                         <span key={tag} className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm rounded-md text-dark">
                           {tag}
                         </span>
                       ))}
                    </div>
                 </div>
                 <div className="p-8 flex flex-col gap-6">
                    <div className="flex justify-between items-start gap-4">
                       <div>
                         <h3 className="text-2xl font-bold text-dark mb-2 group-hover:text-primary transition-colors font-display">{project.title}</h3>
                         <p className="text-gray-500 font-normal leading-relaxed">{project.description}</p>
                       </div>
                       <div className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-light-background group-hover:bg-primary transition-colors duration-300">
                          <ArrowUpRight size={20} className="text-dark" />
                       </div>
                    </div>
                    <div className="h-px w-full bg-gray-100"></div>
                    <div className="flex justify-between items-center">
                       <div className="flex flex-col">
                          <span className="text-xs uppercase tracking-wider text-gray-400 mb-1">Outcome</span>
                          <span className="font-medium text-dark">{project.outcome}</span>
                       </div>
                    </div>
                 </div>
              </div>
            ))}
         </div>
       </div>
    </section>
  );
};

export default Portfolio;