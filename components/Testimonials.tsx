import React from 'react';
import { Quote, Star, ArrowRight } from 'lucide-react';
import { Review } from '../types';
import { motion } from 'framer-motion';

const reviews: Review[] = [
  {
    id: '1',
    name: 'Maria Petrova',
    role: 'Marketer',
    targetRole: 'QA Engineer',
    image: 'https://i.pravatar.cc/150?img=5',
    content: "I never thought I could code, but this course broke my stereotypes. The learning structure is perfect for beginners.",
    rating: 5
  },
  {
    id: '2',
    name: 'Alexey Ivanov',
    role: 'Barista',
    targetRole: 'Frontend Dev',
    image: 'https://i.pravatar.cc/150?img=11',
    content: "The course completely changed my approach to code. Mentors were available 24/7, and I found a job just 3 months after starting. Best investment in myself.",
    rating: 5,
    isTop: true
  },
  {
    id: '3',
    name: 'Dmitry Sidorov',
    role: 'Student',
    targetRole: 'Backend Dev',
    image: 'https://i.pravatar.cc/150?img=3',
    content: "Practical tasks are as close to reality as possible. I got not just theory, but real development experience.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden bg-light-background">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-70 animate-blob"></div>
         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
         <div className="text-center max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
               <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
               Students
            </div>
            <h2 className="text-dark text-4xl md:text-5xl font-bold leading-tight tracking-[-0.02em] mb-4 font-display">
              Alumni Reviews
            </h2>
            <p className="text-gray-500 text-lg font-normal leading-relaxed">
              Stories of real people who changed their careers and lives with our mentors and programs.
            </p>
         </div>

         {/* Cards */}
         <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl">
            {reviews.map((review, i) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`
                  relative bg-white rounded-3xl p-8 border border-gray-100 flex flex-col gap-6
                  ${review.isTop ? 'shadow-[0_0_20px_rgba(116,231,168,0.3)] border-primary/30 z-10 lg:-mt-6 lg:mb-6 min-h-[420px]' : 'shadow-sm opacity-90 hover:opacity-100 min-h-[380px]'}
                  w-full md:w-[380px]
                `}
              >
                 {review.isTop && (
                   <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-emerald-300 rounded-t-3xl"></div>
                 )}
                 <div className="absolute top-8 right-8 opacity-10">
                   <Quote size={48} className="text-primary" />
                 </div>

                 <div className="flex items-center gap-5">
                    <div className="relative">
                       <img src={review.image} alt={review.name} className="w-16 h-16 rounded-2xl object-cover shadow-lg ring-2 ring-offset-2 ring-transparent" />
                       {review.isTop && (
                         <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-md">
                           <div className="bg-blue-500 rounded-full p-0.5">
                             <Star size={12} className="text-white fill-white" />
                           </div>
                         </div>
                       )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark leading-tight">{review.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                        </div>
                        {review.isTop && <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Top Review</span>}
                      </div>
                    </div>
                 </div>

                 <div className="inline-flex flex-wrap items-center gap-2 text-sm font-medium">
                    <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-500 line-through decoration-primary/50">{review.role}</span>
                    <ArrowRight size={14} className="text-primary" />
                    <span className={`px-3 py-1.5 rounded-lg ${review.isTop ? 'bg-primary text-dark font-bold' : 'bg-green-100 text-emerald-800'}`}>
                      {review.targetRole}
                    </span>
                 </div>

                 <p className="text-dark text-lg leading-relaxed italic">
                   "{review.content}"
                 </p>
              </motion.div>
            ))}
         </div>

         {/* Stats */}
         <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
            <div className="flex flex-col items-center">
               <span className="text-3xl font-bold text-dark font-display">500+</span>
               <span className="text-sm text-gray-500 mt-1">Hired</span>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
            <div className="flex flex-col items-center">
               <span className="text-3xl font-bold text-dark font-display">4.9/5</span>
               <span className="text-sm text-gray-500 mt-1">Course Rating</span>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden sm:block"></div>
            <div className="flex flex-col items-center">
               <span className="text-3xl font-bold text-dark font-display">85%</span>
               <span className="text-sm text-gray-500 mt-1">Salary Growth</span>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Testimonials;