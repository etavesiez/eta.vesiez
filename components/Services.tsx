import React from 'react';
import { Sprout, Truck, Hammer, Tractor } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Plantation",
      desc: "Préparation du sol et semis de précision réalisés par mes soins pour un rendement optimal.",
      icon: Sprout
    },
    {
      title: "Arrachage",
      desc: "Récolte soignée de vos pommes de terre avec mon propre matériel performant.",
      icon: Tractor
    },
    {
      title: "Location Manuscopic",
      desc: "Je viens effectuer vos travaux de manutention avec mon manuscopique (prestation avec chauffeur).",
      icon: Hammer
    },
    {
      title: "Transport & Bennes",
      desc: "Location de bennes agricoles et TP pour le transport de vos récoltes.",
      icon: Truck
    }
  ];

  return (
    <section className="py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-green mb-4">Mes Prestations</h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border-none transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-brand-cream flex items-center justify-center mb-6 text-brand-green">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-green mb-3">{service.title}</h3>
              <p className="text-brand-brown/80 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;