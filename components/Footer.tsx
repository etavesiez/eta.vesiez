import React from 'react';
import { SocialIcon } from 'react-social-icons';
import footerData from '../public/texte/footer.json';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { X } from 'lucide-react';
import { Scrollbar } from 'react-scrollbars-custom';
import './FooterScrollbar.css';
import mentionsData from '../public/texte/mentions-legales.json';

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
            {footerData.instagram && (
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
            )}
            {footerData.facebook && (
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
            )}
            {footerData.tiktok && (
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
            )}
            {footerData.linkedin && (
              <SocialIcon
                url={footerData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 44, width: 44 }}
                fgColor="#fff"
                bgColor="transparent"
                className="hover:scale-110 hover:opacity-90 transition-transform duration-200"
                aria-label="LinkedIn"
              />
            )}
            {footerData.whatsapp && (
              <SocialIcon
                url={footerData.whatsapp}
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
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="hover:text-white transition-colors text-sm opacity-80 underline focus:outline-none focus:ring-2 focus:ring-brand-gold rounded"
                type="button"
              >
                {footerData.mentions}
              </button>
            </DialogTrigger>
                <DialogContent className="w-full max-w-3xl max-h-[100vh]">
                  {/* Bouton de fermeture explicite */}
                  <button
                    onClick={() => document.activeElement && (document.activeElement as HTMLElement).blur()}
                    className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-brand-gold hover:text-brand-brown transition-colors z-10"
                    aria-label="Fermer"
                    tabIndex={0}
                    type="button"
                  >
                    <X className="h-6 w-6" />
                  </button>
              <DialogHeader>
                <DialogTitle className="text-brand-green text-3xl mb-6 text-center tracking-tight font-block">{mentionsData.mentions_label}</DialogTitle>
              </DialogHeader>
                  <Scrollbar
                    style={{ maxHeight: '100vh', minHeight: 350 }}
                    trackYProps={{ style: { background: 'transparent', width: 10, right: 0 } }}
                    thumbYProps={{
                      style: { background: '#5B4636', borderRadius: 6, width: 8, minHeight: 40, transition: 'background 0.2s' },
                      className: 'custom-scrollbar-thumb',
                    }}
                    trackXProps={{ style: { display: 'none' } }}
                  >
                    <div className="prose prose-lg max-w-none text-brand-brown leading-relaxed space-y-6 pr-6">
                  {mentionsData.contenu.map((item: { titre?: string, texte: string }, idx: number) => {
                    if (item.titre === 'Adresse :') {
                      return (
                        <p key={idx} className="first:mt-0 last:mb-0 text-justify">
                          <span className="font-bold text-brand-green">{item.titre} </span>
                          <a href="https://www.google.com/maps/search/?api=1&query=10+Rue+Wallon+80600+Lucheux" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-gold">{item.texte}</a>
                        </p>
                      );
                    }
                    if (item.titre === 'Hébergeur :') {
                      return (
                        <p key={idx} className="first:mt-0 last:mb-0 text-justify">
                          <span className="font-bold text-brand-green">{item.titre} </span>
                          <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-gold">GitHub Pages</a>
                        </p>
                      );
                    }
                    if (item.titre === 'Téléphone :') {
                      return (
                        <p key={idx} className="first:mt-0 last:mb-0 text-justify">
                          <span className="font-bold text-brand-green">{item.titre} </span>
                          <a href="tel:+33769651430" className="underline hover:text-brand-gold">{item.texte}</a>
                        </p>
                      );
                    }
                    if (item.titre === 'Email :') {
                      return (
                        <p key={idx} className="first:mt-0 last:mb-0 text-justify">
                          <span className="font-bold text-brand-green">{item.titre} </span>
                          <a href="mailto:eta-vesiez@gmail.com" className="underline hover:text-brand-gold">{item.texte}</a>
                        </p>
                      );
                    }
                    return (
                      <p key={idx} className="first:mt-0 last:mb-0 text-justify">
                        {item.titre && <span className="font-bold text-brand-green">{item.titre} </span>}
                        <span>{item.texte}</span>
                      </p>
                    );
                  })}
                </div>
              </Scrollbar>
            </DialogContent>
          </Dialog>
        </div>
        <div className="text-xs opacity-50 text-center">
          {footerData.texte}
        </div>
      </div>
    </footer>
  );
};

export default Footer;