
import React from 'react';
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
     <div className="absolute inset-0 bg-[url('/lovable-uploads/VueContrePlongeeChorale.png')] bg-cover bg-center">
  <div className="absolute inset-0 bg-gradient-to-b from-choir-navy/90 via-choir-navy/70 to-choir-navy/90"></div>
    </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="font-playfair font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 animate-fadeIn">
          <span className="text-choir-gold">Les Voix</span> Du Choeur
        </h1>
        <p className="font-lato text-choir-cream text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fadeIn opacity-90">Des voix tissées à l'unisson pour que résonnent la passion du chant et l'harmonie du cœur, une note à la fois.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/calendrier" className="bg-choir-gold hover:bg-choir-gold/90 text-choir-navy font-medium px-6 py-3 rounded transition-all duration-300 font-lato uppercase tracking-wider text-sm">
            Restez à l'affût de nos prochains spectacles
          </a>
          <a href="/auditions" className="bg-transparent border border-choir-cream hover:border-choir-gold text-choir-cream hover:text-choir-gold px-6 py-3 rounded transition-all duration-300 font-lato uppercase tracking-wider text-sm">
            Envie de devenir choriste?
          </a>
        </div>
      </div>
    </section>;
};

export default HeroSection;
