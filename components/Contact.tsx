import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import menuData from '../public/texte/menu.json';
// import { SocialIcon } from 'react-social-icons';

const Contact: React.FC = () => {

  // Message dynamique pour les horaires
const HorairesMessage: React.FC = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = dimanche, 1 = lundi, ...
  const hour = now.getHours();
  const minute = now.getMinutes();
  // Horaires d'ouverture : 8h-19h, lundi-samedi
  const isOpen = day >= 1 && day <= 6 && hour >= 8 && hour < 19;
  let message = "";
  if (isOpen) {
    message = `Je suis disponible, appelez-moi maintenant !`;
  } else if (day === 0 || hour >= 19) {
    message = `Vous pourrez m'appeler demain à partir de 8h00.`;
  } else if (hour < 8) {
    const minutesToOpen = (8 - hour) * 60 - minute;
    const h = Math.floor(minutesToOpen / 60);
    const m = minutesToOpen % 60;
    message = `Vous pourrez m'appeler dans ${h > 0 ? h + 'h ' : ''}${m} minutes.`;
  }
  return <div className="text-brand-gold text-sm mb-1 font-semibold">{message}</div>;
};

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-block font-bold text-brand-green mb-4">
            {menuData.find((item: { id: string }) => item.id === 'CONTACT')?.label || 'Contact'}
          </h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full"></div>
          <div className="text-brand-brown/70 text-lg mb-4 max-w-2xl mx-auto font-sans mt-4">
            Besoin d'un renseignement direct ? Je suis à votre écoute.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
            <div className="bg-brand-cream p-8 rounded-2xl flex flex-col items-center text-center gap-4 transition-transform hover:-translate-y-1 h-full">
                <div className="bg-brand-green p-4 rounded-full text-brand-cream mb-2">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-block text-xl font-bold text-brand-green mb-2">Adresse</h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=10+Rue+Wallon+80600+Lucheux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-brown hover:text-brand-gold font-bold block text-base transition-colors underline"
                  >
                    10 Rue Wallon<br />80600 Lucheux
                  </a>
                </div>
            </div>

            <div className="bg-brand-cream p-8 rounded-2xl flex flex-col items-center text-center gap-4 transition-transform hover:-translate-y-1 h-full">
                <div className="bg-brand-green p-4 rounded-full text-brand-cream mb-2">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-block text-xl font-bold text-brand-green mb-2">Téléphone</h3>
                  <a
                    href="tel:+33769651430"
                    className="text-brand-brown hover:text-brand-gold font-bold text-base transition-colors underline"
                  >
                    +33 7 69 65 14 30
                  </a>
                </div>
            </div>

            <div className="bg-brand-cream p-8 rounded-2xl flex flex-col items-center text-center gap-4 transition-transform hover:-translate-y-1 h-full">
                <div className="bg-brand-green p-4 rounded-full text-brand-cream mb-2">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-block text-xl font-bold text-brand-green mb-2">Email</h3>
                  <a
                    href="mailto:eta-vesiez@gmail.com"
                    className="text-brand-brown hover:text-brand-gold font-bold text-base transition-colors underline break-all"
                  >
                    eta-vesiez@gmail.com
                  </a>
                </div>
            </div>

            <div className="bg-brand-cream p-8 rounded-2xl flex flex-col items-center text-center gap-4 transition-transform hover:-translate-y-1 h-full">
                <div className="bg-brand-green p-4 rounded-full text-brand-cream mb-2">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-block text-xl font-bold text-brand-green mb-2">Horaires</h3>
                  <HorairesMessage />
                  <p className="text-brand-brown font-sans">Lundi - Samedi</p>
                  <p className="text-brand-brown font-bold font-sans">8h00 - 19h00</p>
                </div>
            </div>
        </div>

        <div className="text-center pt-16">
            <a 
              href="https://www.google.com/maps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-brand-brown font-bold text-lg group hover:text-brand-gold transition-colors"
            >
              <SocialIcon
                url="https://www.google.com/maps"
                network="google"
                style={{ height: 40, width: 40 }}
                fgColor="currentColor"
                bgColor="transparent"
                className="inline-block align-middle "
                aria-label="Google"
              />
              <span className="align-middle">Laisser un avis sur Google</span>
            </a>
        </div>

        {/* Réseaux sociaux déplacés dans le Footer */}
      </div>
    </section>
  );
};

export default Contact;