
import React from 'react';
import AuditionBookingButton from '@/components/AuditionBookingButton';

const AuditionContactCTA = () => {
  return (
    <div className="text-center">
      <h3 className="font-playfair text-2xl text-choir-navy mb-4">
        Prêt à franchir le pas?
      </h3>
      <p className="font-lato text-choir-navy/80 mb-6">
        Les prochaines dates d'audition seront communiquées sous peu
      </p>
      
      <div className="flex flex-col items-center gap-4 mb-6">
        <AuditionBookingButton />
      </div>
      
      <a 
        href="https://www.facebook.com/groups/lesvoixduchoeur/" 
        className="inline-block bg-transparent border border-choir-navy hover:bg-choir-navy hover:text-choir-cream text-choir-navy font-medium px-8 py-3 rounded transition-all duration-300 font-lato uppercase tracking-wider"
      >
        Suivez-nous sur Facebook pour ne pas les manquer
      </a>
    </div>
  );
};

export default AuditionContactCTA;
