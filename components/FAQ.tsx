import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { FaqItem } from '../types';

const faqItems: FaqItem[] = [
  { question: "Do I need programming experience?", answer: "No, our course is designed for absolute beginners. We start from the basics: how the internet works, algorithms, and move to complex topics." },
  { question: "How much time do I need to study?", answer: "We recommend dedicating 15-20 hours per week for sustainable results. This allows combining courses with work or university." },
  { question: "Do you guarantee employment?", answer: "Yes, we provide a job guarantee in the contract, subject to successful completion of all homework and the final project." },
  { question: "How does mentorship work?", answer: "You are assigned a personal Senior developer mentor. You meet online weekly for code reviews and discuss career goals." },
  { question: "Can I pay in installments?", answer: "Yes. We partner with banks for 0% interest installments up to 24 months. First payment is only after the first month." },
  { question: "What if I don't like the course?", answer: "You can get a full refund within the first 14 days of training without explanation." }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-light-background py-16 md:py-24">
       <div className="max-w-[800px] mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
             <span className="inline-flex items-center justify-center py-1.5 px-4 rounded-full bg-primary/20 text-emerald-900 text-sm font-bold uppercase tracking-widest mb-6">
               FAQ
             </span>
             <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-dark font-display">
               Frequently Asked Questions
             </h2>
             <p className="text-gray-600 text-lg leading-relaxed">
               Answers to popular questions about the course, employment, and the process.
             </p>
          </div>

          <div className="flex flex-col gap-4">
             {faqItems.map((item, index) => (
               <div 
                 key={index} 
                 className={`
                    group border border-gray-200 bg-white rounded-xl overflow-hidden transition-all duration-300
                    ${openIndex === index ? 'ring-1 ring-primary/50 border-primary' : 'hover:border-primary/30 hover:shadow-lg'}
                 `}
               >
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                     <h3 className={`text-lg md:text-xl font-bold transition-colors font-display ${openIndex === index ? 'text-emerald-700' : 'text-dark'}`}>
                       {item.question}
                     </h3>
                     <div className={`flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${openIndex === index ? 'bg-primary text-dark rotate-180' : 'bg-gray-100 text-dark'}`}>
                        <ChevronDown size={20} />
                     </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                     <div className="px-6 pb-8 pt-0 pl-6 md:pl-6 md:pr-12">
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                           {item.answer}
                        </p>
                     </div>
                  </div>
               </div>
             ))}
          </div>

          <div className="flex justify-center mt-12">
             <button className="group flex min-w-[200px] items-center justify-center rounded-xl h-14 px-8 bg-primary hover:bg-primary-hover text-dark gap-3 text-base font-bold shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">
                <MessageCircle size={24} />
                <span>Still have questions? Chat with us</span>
             </button>
          </div>
       </div>
    </section>
  );
};

export default FAQ;