
import React from 'react';
import { Users } from 'lucide-react';

const AuditionProcess = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
      <div className="flex items-center mb-6">
        <Users className="text-choir-gold mr-3" size={28} />
        <h3 className="font-playfair text-2xl text-choir-navy">Processus d'audition</h3>
      </div>
      <div className="space-y-6">
        <div className="border-l-4 border-choir-gold pl-6">
          <h4 className="font-lato font-semibold text-choir-navy mb-2">1. Préparation</h4>
          <p className="font-lato text-choir-navy/80">
            Lorsque vous vous inscrivez pour l'audition, assurez-vous d'être bien certains(nes) d'être disponibles et pour l'audition et pour les répétitions et que vous êtes vraiment prêts(tes) à vous engager : vous devez être sérieux(ses) dans cette démarche; par contre, si vous ne vous présentez pas à l'audition, même à la dernière minute, il serait apprécié d'en être avisé; </p>
        </div>
        <div className="border-l-4 border-choir-gold pl-6">
          <h4 className="font-lato font-semibold text-choir-navy mb-2">2. Audition individuelle</h4>
          <p className="font-lato text-choir-navy/80">
            Présentation de votre pièce, exercices vocaux et discussion 
            avec notre directeur musical (durée: 15 minutes).
          </p>
        </div>
        <div className="border-l-4 border-choir-gold pl-6">
          <h4 className="font-lato font-semibold text-choir-navy mb-2">3. Période d'essai</h4>
          <p className="font-lato text-choir-navy/80">
            Les candidats retenus auront 8 semaines pour décider s'ils souhaitent poursuivre l'aventure ou non.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuditionProcess;
