import React from 'react';
import { SocialIcon } from 'react-social-icons';
import footerData from '../public/texte/footer.json';
import contactData from '../public/texte/contact.json';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { X } from 'lucide-react';
import { Scrollbar } from 'react-scrollbars-custom';
import './FooterScrollbar.css';
interface FooterProps {
  openMentionsModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ openMentionsModal }) => {
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
          <span className="uppercase tracking-widest text-brand-gold font-block text-lg mb-2">{footerData.reseaux_titre}</span>
          <div className="flex flex-row items-center gap-6 font-sans">
            {contactData.instagram && (
              <SocialIcon
                url={contactData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 44, width: 44 }}
                fgColor="#fff"
                bgColor="transparent"
                className="hover:scale-110 hover:opacity-90 transition-transform duration-200"
                aria-label="Instagram"
              />
            )}
            {contactData.facebook && (
              <SocialIcon
                url={contactData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 44, width: 44 }}
                fgColor="#fff"
                bgColor="transparent"
                className="hover:scale-110 hover:opacity-90 transition-transform duration-200"
                aria-label="Facebook"
              />
            )}
            {contactData.tiktok && (
              <SocialIcon
                url={contactData.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 44, width: 44 }}
                fgColor="#fff"
                bgColor="transparent"
                className="hover:scale-110 hover:opacity-90 transition-transform duration-200"
                aria-label="TikTok"
              />
            )}
            {contactData.linkedin && (
              <SocialIcon
                url={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 44, width: 44 }}
                fgColor="#fff"
                bgColor="transparent"
                className="hover:scale-110 hover:opacity-90 transition-transform duration-200"
                aria-label="LinkedIn"
              />
            )}
            {contactData.whatsapp && (
              <SocialIcon
                url={contactData.whatsapp}
                network="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 44, width: 44 }}
                fgColor="#fff"
                bgColor="transparent"
                className="hover:scale-110 hover:opacity-90 transition-transform duration-200"
                aria-label="WhatsApp"
              />
            )}
          </div>
        </div>
        <button
          className="hover:text-white transition-colors text-sm opacity-80 underline focus:outline-none focus:ring-2 focus:ring-brand-gold rounded mb-4"
          type="button"
          onClick={openMentionsModal}
        >
          {footerData.mentions}
        </button>
        
        <div className="text-xs opacity-50 text-center">
          {footerData.texte}
        </div>
      </div>
    </footer>
  );
};

export default Footer;