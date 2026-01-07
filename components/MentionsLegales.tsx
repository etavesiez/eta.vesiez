

import { useEffect } from 'react';
import { X } from 'lucide-react';
import { Scrollbar } from 'react-scrollbars-custom';
import './FooterScrollbar.css';
import mentionsData from '../public/texte/mentions-legales.json';

interface MentionsLegalesProps {
  isOpen: boolean;
  onClose: () => void;
}

const MentionsLegales: React.FC<MentionsLegalesProps> = ({ isOpen, onClose }) => {
  // Empêche le scroll du body quand le modal est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p7-4 sm:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-green/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl min-h-[60vh]  overflow-y-auto animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-brand-gold hover:text-brand-brown transition-colors z-10"
        >
          <X className="h-6 w-6" />
        </button>
        <Scrollbar
            style={{ maxHeight: '100vh', minHeight: 800 }}
            trackYProps={{ style: { background: 'transparent', width: 10, right: 0 } }}
            thumbYProps={{
              style: { background: '#4D3529', borderRadius: 6, width: 8, minHeight: 40, transition: 'background 0.2s' },
              className: 'custom-scrollbar-thumb',
            }}
            trackXProps={{ style: { display: 'none' } }}
          >

        <div className="p-6 sm:p-5">
          <h3 className="text-2xl sm:text-3xl font-block font-bold text-brand-green mb-4 sm:mb-6 text-center tracking-tight">{mentionsData.mentions_label}</h3>
          
            <div className="prose prose-base sm:prose-lg max-w-none text-brand-brown leading-relaxed space-y-4 sm:space-y-6 pr-1 sm:pr-3">
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
          
        </div>
        </Scrollbar>
      </div>
    </div>
  );
};

export default MentionsLegales;
