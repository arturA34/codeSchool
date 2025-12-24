import React from 'react';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 flex items-center justify-center text-primary">
                 <Code2 size={28} />
               </div>
               <span className="text-dark font-display text-lg font-bold">CodeSchool</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering the next generation of developers with practical skills and career support.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-dark transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-dark mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">Frontend Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Backend Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Python & AI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fullstack Zero to Hero</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-dark mb-4">School</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mentors</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Career Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-dark mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>hello@codeschool.dev</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Tech Avenue, Silicon Valley, CA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
           <p>© 2024 CodeSchool. All rights reserved.</p>
           <div className="flex gap-6">
             <a href="#" className="hover:text-dark">Privacy Policy</a>
             <a href="#" className="hover:text-dark">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;