
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    // { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <img src="./logo.png" alt="logo" className={`h-8 w-auto transition-all ${isScrolled ? '' : 'filter brightness-0 invert'}`} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`font-medium text-sm uppercase tracking-wider hover:text-accent transition-colors ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-accent hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-accent/20 transition-all flex items-center group"
          >
            Get in Touch
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-primary' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-slate-700 font-medium text-lg border-b border-slate-100 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-primary text-white text-center py-3 rounded-lg font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start a Project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
