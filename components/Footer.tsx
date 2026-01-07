import React from 'react';
import { SocialIcon } from 'react-social-icons';
import footerData from '../public/texte/footer.json';

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
        <div className="flex flex-col items-center mb-6">
          <span className="uppercase tracking-widest text-brand-gold font-block text-lg mb-2">Réseaux sociaux</span>
          <div className="flex flex-row items-center gap-6 font-sans">
            <SocialIcon
              url={footerData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 44, width: 44 }}
              fgColor="#fff"
              bgColor="transparent"
              className="hover:scale-110 hover:opacity-90 transition-transform duration-200"
              aria-label="Instagram"
            />
            <SocialIcon
              url={footerData.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 44, width: 44 }}
              fgColor="#fff"
              bgColor="transparent"
              className="hover:scale-110 hover:opacity-90 transition-transform duration-200"
              aria-label="Facebook"
            />
            <SocialIcon
              url={footerData.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 44, width: 44 }}
              fgColor="#fff"
              bgColor="transparent"
              className="hover:scale-110 hover:opacity-90 transition-transform duration-200"
              aria-label="TikTok"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 mb-2">
          <a href={footerData.mentions_lien} className="hover:text-white transition-colors text-sm opacity-80">{footerData.mentions}</a>
        </div>
        <div className="text-xs opacity-50 text-center">
          {footerData.texte}
        </div>
      </div>
    </footer>
  );
};

export default Footer;