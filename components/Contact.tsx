import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-6">Me Contacter</h2>
          <p className="text-brand-brown/70 text-lg max-w-2xl mx-auto">
            Besoin d'un renseignement ou d'un devis ? Louis Vésiez est à votre écoute pour vos chantiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-brand-cream p-8 rounded-2xl text-center hover:bg-brand-green hover:text-brand-cream group transition-all duration-300">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-brand-green group-hover:text-brand-gold" />
                <h3 className="font-bold text-lg mb-2">Adresse</h3>
                <p className="opacity-80">10 Rue Wallon<br/>80600 Lucheux</p>
            </div>

            <div className="bg-brand-cream p-8 rounded-2xl text-center hover:bg-brand-green hover:text-brand-cream group transition-all duration-300">
                <Phone className="h-8 w-8 mx-auto mb-4 text-brand-green group-hover:text-brand-gold" />
                <h3 className="font-bold text-lg mb-2">Téléphone</h3>
                <p className="opacity-80">06 XX XX XX XX</p>
            </div>

            <div className="bg-brand-cream p-8 rounded-2xl text-center hover:bg-brand-green hover:text-brand-cream group transition-all duration-300">
                <Mail className="h-8 w-8 mx-auto mb-4 text-brand-green group-hover:text-brand-gold" />
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a href="mailto:eta-vesiez@gmail.com" className="opacity-80 hover:underline">eta-vesiez@gmail.com</a>
            </div>

            <div className="bg-brand-cream p-8 rounded-2xl text-center hover:bg-brand-green hover:text-brand-cream group transition-all duration-300">
                <Clock className="h-8 w-8 mx-auto mb-4 text-brand-green group-hover:text-brand-gold" />
                <h3 className="font-bold text-lg mb-2">Disponibilité</h3>
                <p className="opacity-80">Lun - Sam<br/>8h00 - 19h00</p>
            </div>
        </div>

        <div className="mt-16 text-center">
            <a 
                href="https://www.google.com/maps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-green font-bold border-b-2 border-brand-green hover:text-brand-gold hover:border-brand-gold transition-colors pb-1"
            >
                Laisser un avis sur Google
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;