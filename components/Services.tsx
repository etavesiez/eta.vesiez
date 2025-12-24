import React, { useState, useEffect } from 'react';
import { Sprout, Truck, Hammer, Tractor, ChevronLeft, ChevronRight } from 'lucide-react';

const Services: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Configuration manuelle des images par catégorie
  // Pour ajouter des images : ajoutez-les dans public/images/[categorie]/ et listez-les ici
  const carouselImages = [
    // Plantation
    { src: '/images/plantation/planteuse-pommes-de-terre.jpg', title: 'Planteuse Pommes De Terre', category: 'Plantation' },
    { src: '/images/plantation/semis-precision.jpg', title: 'Semis Précision', category: 'Plantation' },
    { src: '/images/plantation/semis-rangees.jpg', title: 'Semis Rangées', category: 'Plantation' },
    
    // Arrachage
    { src: '/images/arrachage/recolte-batteuse.jpg', title: 'Récolte Batteuse', category: 'Arrachage' },
    { src: '/images/arrachage/moisson-ete.jpg', title: 'Moisson Été', category: 'Arrachage' },
    { src: '/images/arrachage/recolte-cereales.jpg', title: 'Récolte Céréales', category: 'Arrachage' },
    
    // Préparation
    { src: '/images/preparation/labour-profond.jpg', title: 'Labour Profond', category: 'Préparation' },
    { src: '/images/preparation/travail-du-sol.jpg', title: 'Travail Du Sol', category: 'Préparation' },
    { src: '/images/preparation/dechaumage.jpg', title: 'Déchaumage', category: 'Préparation' },
    { src: '/images/preparation/preparation-terrain.jpg', title: 'Préparation Terrain', category: 'Préparation' },
    { src: '/images/preparation/preparation-sol-franquet.jpg', title: 'Préparation Sol Franquet', category: 'Préparation' },
    { src: '/images/preparation/compactage-sol.jpg', title: 'Compactage Sol', category: 'Préparation' },
    { src: '/images/preparation/tassage-terrain.jpg', title: 'Tassage Terrain', category: 'Préparation' },
    
    // Entretien
    { src: '/images/entretien/fauchage-bordures.jpg', title: 'Fauchage Bordures', category: 'Entretien' },
    { src: '/images/entretien/entretien-haies.jpg', title: 'Entretien Haies', category: 'Entretien' },
    
    // Fourrage
    { src: '/images/fourrage/pressage-foin.jpg', title: 'Pressage Foin', category: 'Fourrage' },
    { src: '/images/fourrage/pressage-herbe.jpg', title: 'Pressage Herbe', category: 'Fourrage' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

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

        {/* Carrousel de photos */}
        <div className="relative mb-20 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
          <div className="relative h-[500px]">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="inline-block px-3 py-1 bg-brand-gold text-brand-brown rounded-full text-sm font-semibold mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-3xl font-bold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-green p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-green p-3 rounded-full shadow-lg transition-all z-10"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicateurs */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-brand-gold'
                    : 'w-2 bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            ))}
          </div>
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