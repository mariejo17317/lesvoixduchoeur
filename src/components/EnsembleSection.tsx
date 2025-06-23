
import React, { useState } from 'react';
import { voiceSections } from '../data/voiceSectionsData';
import VoiceSectionButtons from './VoiceSectionButtons';
import MembersGallery from './MembersGallery';
import LeaderProfile from './LeaderProfile';
import PhotoCarousel from './PhotoCarousel';

const EnsembleSection = () => {
  const [activeVoiceSection, setActiveVoiceSection] = useState<number>(0);

  return (
    <section id="ensemble" className="py-20 bg-gradient-to-b from-choir-navy to-choir-blue/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-choir-gold text-center mb-4 font-semibold">
          Nos chanteurs
        </h2>
        <p className="text-choir-cream text-center mb-12 font-lato max-w-2xl mx-auto">
          Voici les stars qui donnent le rythme à nos harmonies
        </p>
        
        <VoiceSectionButtons
          voiceSections={voiceSections}
          activeVoiceSection={activeVoiceSection}
          onSectionChange={setActiveVoiceSection}
        />

        <MembersGallery 
          voiceSection={voiceSections[activeVoiceSection]} 
          isActive={true}
        />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-playfair text-choir-gold text-center mb-8">
            Direction
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <LeaderProfile
                  name="Gilles Proulx"
                  title="Directeur Musical"
                  image="/lovable-uploads/Gilles_Proulx.png"
                  alt="Directeur Musical"
                />
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <LeaderProfile
                  name="Denis Pronovost"
                  title="Coordonnateur"
                  image="/lovable-uploads/Denis_Pronovost.png"
                  alt="Coordonnateur"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Carrousel de photos ajouté en dessous des directeurs */}
        <div className="mt-16">
          <PhotoCarousel />
        </div>
      </div>
    </section>
  );
};

export default EnsembleSection;
