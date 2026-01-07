import React from 'react';
import menuData from '../public/texte/menu.json';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white">
       <div className="text-center mb-16">
        <h2 className="text-4xl font-block font-bold text-brand-green mb-4">
          {menuData.find((item: { id: string }) => item.id === 'ABOUT')?.label || 'À Propos'}
        </h2>
        <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full"></div>
       </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
     
            <img 
              src="./images/a-propos.jpeg" 
              alt="A propos" 
              className="rounded-2xl w-full object-cover h-[320px]"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
                    
            <h4 className="text-brand-gold font-block uppercase tracking-widest text-sm mb-2">L'Entrepreneur</h4>
            
            <div className="text-brand-brown/70 text-lg mb-8">Un service de proximité par Louis Vésiez</div>
            
            <div className="space-y-6 text-brand-brown text-lg leading-relaxed">
              <p>
                <strong>ETA Vesiez</strong> est une Entreprise Individuelle (EI) fondée en décembre 2025. Je dirige seul cette structure pour offrir un service direct et sans intermédiaire.
              </p>
              <p>
                Passionné par le machinisme et la culture de la pomme de terre, <strong>je me déplace sur le secteur des Hauts-de-France</strong> afin de vous offrir un travail avec soin et rigueur.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-brand-cream grid grid-cols-2 gap-8">
               <div>
                  <span className="block text-3xl font-bold text-brand-gold mb-1">Lucheux</span>
                  <span className="text-sm text-gray-500 font-sans">Localisation</span>
               </div>
               <div>
                  <span className="block text-3xl font-bold text-brand-gold mb-1">EI</span>
                  <span className="text-sm text-gray-500 font-sans">Statut Juridique</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;