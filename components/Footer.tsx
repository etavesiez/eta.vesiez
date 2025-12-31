import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green text-brand-cream pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        <img
          src="./images/logo/carre_light.png"
          alt="Logo ETA Vesiez"
          className="h-14 w-auto mb-4"
          style={{ maxWidth: 180 }}
        />
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 mb-4">
          <a href="#" className="hover:text-white transition-colors text-sm opacity-80">Mentions Légales</a>
        </div>
        <div className="text-xs opacity-50 text-center">
          © 2025 Louis Vésiez
        </div>
      </div>
    </footer>
  );
};

export default Footer;