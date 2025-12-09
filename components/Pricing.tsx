import React from 'react';
import { PriceItem } from '../types';

const Pricing: React.FC = () => {
  const prices: PriceItem[] = [
    { service: "Plantation Pomme de Terre", unit: "Hectare", price: "Sur Devis" },
    { service: "Arrachage Pomme de Terre", unit: "Hectare", price: "Sur Devis" },
    { service: "Location Manuscopic + Chauffeur", unit: "Heure / Journée", price: "Me contacter" },
    { service: "Location Benne", unit: "Forfait", price: "Selon distance" },
  ];

  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-green mb-4">Tarifs</h2>
          <p className="text-brand-brown/70">
            Une tarification claire et adaptée à vos chantiers.
          </p>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-brand-green text-brand-cream">
              <tr>
                <th className="p-6 font-serif text-lg">Prestation</th>
                <th className="p-6 font-serif text-lg hidden sm:table-cell">Unité</th>
                <th className="p-6 font-serif text-lg text-right">Prix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-cream">
              {prices.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 text-brand-brown font-medium">{item.service}</td>
                  <td className="p-6 text-gray-500 hidden sm:table-cell">{item.unit}</td>
                  <td className="p-6 text-right font-bold text-brand-green">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-10 text-center">
             <a href="#contact" className="inline-block px-8 py-3 bg-brand-gold text-brand-brown font-bold rounded-full transition-colors hover:bg-opacity-90">
                Demander un devis
             </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;