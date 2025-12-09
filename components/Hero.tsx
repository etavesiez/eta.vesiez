import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Full screen background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2940&auto=format&fit=crop")',
        }}
      >
        {/* Simple uniform overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="inline-block py-2 px-6 rounded-full bg-brand-green text-brand-cream text-sm font-semibold mb-8 tracking-wider uppercase">
          Fondée en 2025
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-brand-cream mb-6 tracking-tight">
          ETA VESIEZ
        </h1>
        
        <p className="text-xl md:text-2xl text-brand-cream/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Travaux agricoles et spécialiste de la pomme de terre à <span className="text-brand-gold font-medium">Lucheux</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => scrollToSection(SectionId.SERVICES)}
            className="bg-brand-gold text-brand-brown font-bold py-4 px-10 rounded-full transition-transform hover:scale-105 flex items-center gap-2"
          >
            Nos Services
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="px-10 py-4 rounded-full text-brand-cream border-2 border-brand-cream hover:bg-brand-cream hover:text-brand-green transition-all font-bold"
          >
            Contact
          </button>
        </div>
      </div>

      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer text-brand-cream/70 hover:text-brand-gold transition-colors" 
        onClick={() => scrollToSection(SectionId.ABOUT)}
      >
        <ChevronDown className="h-10 w-10 animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;