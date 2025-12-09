import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green text-brand-cream py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif font-bold text-2xl">ETA VESIEZ</h3>
            <p className="text-sm opacity-70">Travaux agricoles à Lucheux</p>
          </div>
          
          <div className="flex gap-8 text-sm opacity-80">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-sm opacity-50">
            © 2025 Louis Vésiez
          </div>
      </div>
    </footer>
  );
};

export default Footer;