import React from 'react';
import { Check, X, CheckCircle2 } from 'lucide-react';
import { Plan } from '../types';

const plans: Plan[] = [
  {
    id: 'self',
    name: 'Self-Paced',
    subtitle: 'For those who prefer learning at their own speed',
    price: '₽ 5,000',
    priceDetail: '/ mo',
    features: ['Access to all materials', 'Auto-code checks', 'Completion Certificate'],
    buttonText: 'Start Free'
  },
  {
    id: 'pro',
    name: 'With Mentor',
    subtitle: 'Perfect balance of support and independence',
    price: '₽ 12,000',
    priceDetail: '/ mo',
    features: ['Access to all materials', 'Homework check (24h)', 'Personal Mentor', 'Career Consultation', 'Mock Interview (1)'],
    highlight: true,
    buttonText: 'Become Pro'
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Maximum immersion and guaranteed results',
    price: '₽ 25,000',
    priceDetail: '/ mo',
    features: ['All Pro features', 'Weekly 1-on-1 calls', 'Job Support (VIP)', 'Unlimited Mock Interviews'],
    buttonText: 'Personal Coaching'
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative flex w-full flex-col overflow-x-hidden bg-white pb-24">
      <header className="relative w-full px-6 pt-20 pb-12 md:pt-32 md:pb-16 flex flex-col items-center text-center z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="inline-flex items-center justify-center gap-x-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm px-4 py-1.5 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Flexible Plans</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-dark max-w-3xl leading-[1.1] font-display">
          Choose Your Path
        </h2>
        <p className="mt-6 text-lg text-gray-500 max-w-2xl">
          Invest in your future with flexible learning plans. Start from scratch or upgrade skills with a personal mentor.
        </p>
      </header>

      <main className="w-full px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
           {plans.map((plan) => (
             <div 
               key={plan.id}
               className={`
                 relative flex flex-col rounded-2xl p-8 transition-all duration-300
                 ${plan.highlight 
                    ? 'bg-white border-2 border-primary/30 shadow-[0_20px_50px_-12px_rgba(116,231,168,0.3)] lg:-mt-4 lg:py-10 z-20' 
                    : 'bg-white border border-gray-100 shadow-sm hover:shadow-lg lg:mt-12'
                 }
               `}
             >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-dark shadow-lg">
                    Best Value
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-dark font-display">{plan.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{plan.subtitle}</p>
                </div>
                <div className="mb-8">
                   <div className="flex items-baseline gap-1">
                     <span className="text-4xl font-bold text-dark">{plan.price}</span>
                     <span className="text-sm font-medium text-gray-500">{plan.priceDetail}</span>
                   </div>
                   <p className="text-sm font-medium text-gray-400 mt-1">or pay fully at once</p>
                </div>
                <button 
                  className={`w-full rounded-full py-3 px-4 text-sm font-bold transition-all ${
                    plan.highlight 
                      ? 'bg-primary text-dark shadow-lg shadow-primary/20 hover:bg-primary-hover' 
                      : 'bg-gray-100 text-dark hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </button>
                <div className="mt-8 flex flex-col gap-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                       {plan.highlight 
                         ? <div className="rounded-full bg-primary/10 p-1"><Check size={14} className="text-primary" /></div>
                         : <CheckCircle2 size={20} className="text-primary" />
                       }
                       <span className="text-sm font-medium text-dark">{feature}</span>
                    </div>
                  ))}
                  {!plan.highlight && plan.id === 'self' && (
                     <div className="flex items-start gap-3 opacity-50">
                        <X size={20} className="text-gray-400" />
                        <span className="text-sm text-gray-400 line-through">Personal Mentor</span>
                     </div>
                  )}
                </div>
             </div>
           ))}
        </div>
      </main>
      
      {/* Guarantee */}
      <section className="w-full px-6 py-12 md:py-20 bg-gray-50 mt-20">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-gray-100 p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
           <div className="flex-shrink-0 h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center">
             <CheckCircle2 size={40} className="text-primary" />
           </div>
           <div className="flex flex-col gap-4">
             <h3 className="text-2xl font-bold text-dark font-display">Quality Guarantee</h3>
             <p className="text-gray-500 leading-relaxed">
               We are confident in our education. If the course doesn't suit you for any reason, we return the full amount within the first 14 days. No hidden conditions.
             </p>
           </div>
        </div>
      </section>
    </section>
  );
};

export default Pricing;