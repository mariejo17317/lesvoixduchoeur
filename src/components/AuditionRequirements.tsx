
import React from 'react';
import { Music } from 'lucide-react';

const AuditionRequirements = () => {
  return (
    <div className="bg-choir-navy rounded-lg p-8 mb-12">
      <div className="flex items-center mb-6">
        <Music className="text-choir-gold mr-3" size={28} />
        <h3 className="font-playfair text-2xl text-white">Prérequis et attentes</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-lato font-semibold text-choir-gold mb-3">Ce qu'il faut savoir:</h4>
          <ul className="font-lato text-choir-cream/90 space-y-2">
            <li>• La lecture des notes n'est pas obligatoire</li>
            <li>• Il faut savoir démontrer une oreille juste</li>
            <li>• Il faut pouvoir chanter en polyphonie</li>
            <li>• L'expérience en chorale est un atout, mais pas une obligation</li>
            <li>• Nous chantons en français et anglais</li>
            <li>• Parfois même en espagnol et en italien</li>
            <li>• Oui, il est possible de faire des solos</li>
          </ul>
        </div>
        <div>
          <h4 className="font-lato font-semibold text-choir-gold mb-3">Les 10 commandements:</h4>
          <ul className="font-lato text-choir-cream/90 space-y-2">
            <li>• Les pièces, avec passion tu chanteras</li>
            <li>• Les horaires de répétition, tu respecteras</li>
            <li>• Le matériel requis, tu apporteras</li>
            <li>• Les arrangements vocaux et partitions, tu ne prêteras ni copieras</li>
            <li>• Le solo des autres tu ne désireras pas injustement</li>
             <li>• Le nom des autres choristes, tu prononceras avec respect</li>
             <li>• Un costume préalablement approuvé, pour les concerts tu porteras</li>
             <li>• Qu'aux personnes concernées, tes commentaires tu ne passeras</li>
             <li>• Ta cotisation annuelle, tu honoreras (après une probation de 8 semaines)</li>
             <li>• Les membres du choeur seulement, aux répétitions assisteront</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AuditionRequirements;
