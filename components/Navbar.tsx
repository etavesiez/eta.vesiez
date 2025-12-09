import React, { useState, useEffect } from 'react';
import { Menu, X, Tractor } from 'lucide-react';
import { SectionId } from '../types';

interface NavbarProps {
  scrollToSection: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', id: SectionId.HOME },
    { label: 'Services', id: SectionId.SERVICES },
    { label: 'À Propos', id: SectionId.ABOUT },
    { label: 'Tarifs', id: SectionId.PRICING },
    { label: 'Contact', id: SectionId.CONTACT },
  ];

  const handleNavClick = (id: SectionId) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-brand-cream py-3 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer gap-3" onClick={() => handleNavClick(SectionId.HOME)}>
             <Tractor className={`h-8 w-8 ${scrolled ? 'text-brand-green' : 'text-brand-gold'}`} />
             <span className={`font-serif font-bold text-xl tracking-wide ${scrolled ? 'text-brand-green' : 'text-brand-cream'}`}>
                ETA VESIEZ
              </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                    scrolled 
                      ? 'text-brand-brown hover:bg-brand-green hover:text-brand-cream' 
                      : 'text-brand-cream hover:bg-brand-cream hover:text-brand-green'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${
                scrolled ? 'text-brand-green' : 'text-brand-cream'
              } hover:opacity-80 focus:outline-none`}
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-cream absolute w-full h-screen top-0 left-0 flex flex-col items-center justify-center space-y-8 z-40">
           <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-brand-green">
              <X className="h-8 w-8" />
           </button>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className="text-2xl font-serif font-bold text-brand-green hover:text-brand-gold"
              >
                {item.label}
              </button>
            ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;