import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 text-primary transition-transform group-hover:scale-110 duration-300 flex items-center justify-center">
             <Code2 size={32} className="text-primary" />
            </div>
            <span className="text-dark font-display text-xl font-bold tracking-tight">CodeSchool</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {['Programs', 'Mentors', 'Pricing', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-dark hover:text-primary transition-colors font-display"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Login Button */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center justify-center h-10 px-6 rounded-lg bg-primary hover:bg-primary-hover text-dark font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 font-display">
              Login
            </button>
            <button 
              className="md:hidden p-2 text-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-lg">
           {['Programs', 'Mentors', 'Pricing', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium text-dark hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full h-12 rounded-lg bg-primary text-dark font-bold">
              Login
            </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;