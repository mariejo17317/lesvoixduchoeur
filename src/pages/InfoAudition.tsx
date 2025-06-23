
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AuditionHeroSection from '@/components/AuditionHeroSection';
import AuditionPhotoCarousel from '@/components/AuditionPhotoCarousel';
import AuditionInfoCards from '@/components/AuditionInfoCards';
import AuditionRequirements from '@/components/AuditionRequirements';
import AuditionProcess from '@/components/AuditionProcess';
import AuditionContactCTA from '@/components/AuditionContactCTA';

const InfoAudition = () => {
  return (
    <div className="min-h-screen bg-choir-cream">
      <Navigation />
      
      <AuditionHeroSection />
      <AuditionPhotoCarousel />

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl text-choir-navy mb-6">
                Une aventure musicale vous attend
              </h2>
              <p className="font-lato text-choir-navy/80 text-lg leading-relaxed">
                Les Voix Du Choeur recherchent des choristes passionnés et expérimentés pour enrichir notre ensemble. 
                Découvrez ci-dessous toutes les informations essentielles pour rejoindre notre famille musicale.
              </p>
            </div>

            <AuditionInfoCards />
            <AuditionRequirements />
            <AuditionProcess />
            <AuditionContactCTA />

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfoAudition;
