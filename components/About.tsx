import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1527847263472-aa5338d178b8?q=80&w=2944&auto=format&fit=crop" 
              alt="Champs de pommes de terre" 
              className="rounded-2xl w-full object-cover h-[500px]"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2">L'Entrepreneur</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-green mb-8">
              Un service de proximité par Louis Vésiez
            </h2>
            
            <div className="space-y-6 text-brand-brown text-lg leading-relaxed">
              <p>
                <strong>ETA Vesiez</strong> est une Entreprise Individuelle (EI) fondée en décembre 2025. Je dirige seul cette structure pour offrir un service direct et sans intermédiaire.
              </p>
              <p>
                Passionné par le machinisme et la culture de la pomme de terre, <strong>je me déplace personnellement</strong> sur vos exploitations à <span className="text-brand-green font-bold">Lucheux</span> et ses alentours. En faisant appel à moi, vous avez la garantie que c'est le patron qui effectue le travail, avec soin et rigueur.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-brand-cream grid grid-cols-2 gap-8">
               <div>
                  <span className="block text-3xl font-bold text-brand-gold mb-1">Lucheux</span>
                  <span className="text-sm text-gray-500">Localisation</span>
               </div>
               <div>
                  <span className="block text-3xl font-bold text-brand-gold mb-1">EI</span>
                  <span className="text-sm text-gray-500">Statut Juridique</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;