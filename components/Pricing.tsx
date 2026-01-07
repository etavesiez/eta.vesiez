import React from 'react';
import servicesData from '../public/texte/services.json';
import menuData from '../public/texte/menu.json';
import { FileText } from 'lucide-react';

interface PricingProps {
  openQuoteModal: () => void;
}

const Pricing: React.FC<PricingProps> = ({ openQuoteModal }) => {
  const prices = (servicesData as Array<{ title: string; unite?: string }> ).map(item => ({
    service: item.title,
    unit: item.unite || "-"
  }));

  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-block font-bold text-brand-green mb-4">
            {menuData.find((item: { id: string }) => item.id === 'PRICING')?.label || 'Tarifs'}
          </h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full"></div>
          <div className="text-brand-brown/70 text-lg mt-4">Pour assurer un tarif adapté à chaque chantier, toutes nos prestations sont uniquement sur devis personnalisé.</div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-brand-green text-brand-cream">
              <tr>
                <th className="p-6 font-block text-lg">Prestation</th>
                <th className="p-6 font-block text-lg hidden sm:table-cell">Unité</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-cream">
              {prices.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="p-6 text-brand-brown font-medium">{item.service}</td>
                  <td className="p-6 text-gray-500 hidden sm:table-cell">{item.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-10 text-center">
             <button 
               onClick={openQuoteModal}
               className="inline-flex items-center gap-2 px-8 py-3 bg-brand-gold text-brand-brown font-bold rounded-full transition-colors hover:bg-opacity-90 shadow-lg"
             >
                <FileText className="h-5 w-5" />
                Demander un devis en ligne
             </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;