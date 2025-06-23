
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Clock } from 'lucide-react';

const CalendarPage = () => {
  return (
    <div className="min-h-screen bg-choir-navy text-choir-cream">
      <Navigation />
      
      {/* Section avec image de fond */}
      <div 
        className="pt-20 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/lovable-uploads/VueRegie.png')",
        }}
      >
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-choir-navy/70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair text-choir-gold text-center mb-12 font-semibold">
            Prochain Spectacle
          </h1>
          
          <div className="max-w-4xl mx-auto">
            {/* Message temporaire */}
            <div className="bg-choir-navy/80 backdrop-blur-sm border border-choir-gold/30 rounded-lg p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-choir-gold/20 p-4 rounded-full">
                  <Calendar className="h-12 w-12 text-choir-gold" />
                </div>
              </div>
              
              <h2 className="text-choir-gold font-playfair text-3xl md:text-4xl mb-6">
                Bientôt disponible
              </h2>
              
              <p className="text-choir-cream/90 text-lg md:text-xl mb-8 leading-relaxed">
                Les informations sur notre prochain spectacle seront disponibles très bientôt. 
                Restez à l'affût pour découvrir notre nouvelle création musicale !
              </p>
              
              <div className="flex items-center justify-center gap-2 text-choir-cream/70">
                <Clock className="h-5 w-5" />
                <span className="font-lato">En préparation...</span>
              </div>
              
              <div className="mt-8 pt-8 border-t border-choir-gold/30">
                <p className="text-choir-cream/80 font-lato">
                  Suivez-nous sur nos réseaux sociaux pour être les premiers informés !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CalendarPage;
