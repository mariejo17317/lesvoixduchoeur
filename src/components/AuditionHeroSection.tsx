
import React from 'react';

const AuditionHeroSection = () => {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-b from-choir-navy to-choir-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair font-bold text-4xl md:text-6xl text-white mb-6">
            <span className="text-choir-gold">Information</span> Audition
          </h1>
          <p className="font-lato text-choir-cream text-xl md:text-2xl max-w-3xl mx-auto">
            Rejoignez notre ensemble vocal d'exception et découvrez la magie du chant choral au plus haut niveau.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuditionHeroSection;
