
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const NextEventInfo = () => {
  // Informations statiques du prochain spectacle - vous pourrez les modifier selon vos besoins
  const nextEvent = {
    title: "Kaléidoscope",
    date: "15 et 16 Novembre 2025",
    time: "20h00",
    venue: "Salle George-d'or, Cégep de Drummondville",
    description: "Un spectacle vibrant et éclaté où la musique vous offre un voyage haut en couleur et en émotion!",
    priceAdult: "30$",
    priceChild: "15$"
  };

  return (
    <Card className="border-choir-gold/30 bg-choir-navy/80 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Première colonne - Informations */}
          <div className="space-y-6">
            <h2 className="text-choir-gold font-semibold text-2xl md:text-3xl">
              {nextEvent.title}
            </h2>
            
            <p className="text-choir-cream/90 text-lg leading-relaxed">
              {nextEvent.description}
            </p>
            
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-choir-gold">Date: </span>
                <span className="text-choir-cream">{nextEvent.date}</span>
              </div>
              
              <div>
                <span className="font-semibold text-choir-gold">Heure: </span>
                <span className="text-choir-cream">{nextEvent.time}</span>
              </div>
              
              <div>
                <span className="font-semibold text-choir-gold">Lieu: </span>
                <span className="text-choir-cream">{nextEvent.venue}</span>
              </div>
              
              <div>
                <span className="font-semibold text-choir-gold">Prix adulte: </span>
                <span className="text-choir-cream">{nextEvent.priceAdult}</span>
              </div>
              
              <div>
                <span className="font-semibold text-choir-gold">Prix enfant (12 ans et -): </span>
                <span className="text-choir-cream">{nextEvent.priceChild}</span>
              </div>
            </div>
          </div>
          
          {/* Deuxième colonne - Affiche du spectacle */}
          <div className="flex items-center justify-center">
            <AspectRatio ratio={3/4} className="w-full max-w-sm">
              <div className="w-full h-full bg-choir-navy/40 border-2 border-dashed border-choir-gold/30 rounded-lg flex items-center justify-center">
                <p className="text-choir-cream/60 text-center px-4">
                  Espace réservé pour<br />l'affiche du spectacle
                </p>
              </div>
            </AspectRatio>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NextEventInfo;
