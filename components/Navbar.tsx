import React, { useState, useEffect } from 'react';
import menuData from '../public/texte/menu.json';
import { Menu, X, Tractor } from 'lucide-react';
import { SectionId } from '../types';

interface NavbarProps {
  scrollToSection: (id: SectionId) => void;
  openQuoteModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ scrollToSection, openQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On suppose que les ids du JSON correspondent à SectionId
  const navItems = (menuData as Array<{ label: string; id: string }>)
    .filter(item => item.id !== 'DEVIS_BTN')
    .map(item => ({
      label: item.label,
      id: (SectionId as any)[item.id] || item.id
    }));
  const devisBtn = (menuData as Array<{ label: string; id: string }>).find(item => item.id === 'DEVIS_BTN');

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
            <img
              src={scrolled ? "./images/logo/bandeau_couleur.png" : "./images/logo/bandeau_light.png"}
              alt="Logo ETA Vesiez"
              className="h-12 w-auto transition-all duration-300"
              style={{ maxWidth: 220 }}
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 ml-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-bold transition-colors ${
                  scrolled 
                    ? 'text-brand-brown hover:text-brand-green' 
                    : 'text-brand-cream hover:text-brand-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
            {devisBtn && (
              <button
                onClick={openQuoteModal}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  scrolled
                    ? 'bg-brand-green text-brand-cream hover:bg-brand-gold hover:text-brand-brown'
                    : 'bg-brand-gold text-brand-brown hover:bg-brand-cream hover:text-brand-green'
                }`}
              >
                {devisBtn.label}
              </button>
            )}
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
                className="text-2xl font-block font-bold text-brand-green hover:text-brand-gold"
              >
                {item.label}
              </button>
            ))}
            {devisBtn && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  openQuoteModal();
                }}
                className="px-8 py-3 bg-brand-green text-brand-cream rounded-full text-xl font-bold hover:bg-brand-gold hover:text-brand-brown transition-colors"
              >
                {devisBtn.label}
              </button>
            )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;