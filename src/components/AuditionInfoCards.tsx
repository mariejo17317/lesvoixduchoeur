
import React from 'react';
import { Calendar, Clock, DollarSign, MapPin } from 'lucide-react';

const AuditionInfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      
      {/* Rehearsal Schedule */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-choir-gold">
        <div className="flex items-center mb-4">
          <Clock className="text-choir-gold mr-3" size={24} />
          <h3 className="font-playfair text-xl text-choir-navy">Horaires des répétitions</h3>
        </div>
        <div className="font-lato text-choir-navy/80 space-y-2">
          <p>Les répétitions se tiennent<strong> à tous les lundis soir</strong> de 19h00 - 21h15</p>
          <p>En plus du soir de répétition, il y a environ 2 heures de travail à faire à la maison avant la répétition suivante, cela dans le but de bien intégrer ce qui est appris et afin de préparer ce qui sera travaillé à la répétition suivante</p>
        </div>
      </div>

      {/* Season Duration */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-choir-gold">
        <div className="flex items-center mb-4">
          <Calendar className="text-choir-gold mr-3" size={24} />
          <h3 className="font-playfair text-xl text-choir-navy">Durée de la saison</h3>
        </div>
        <div className="font-lato text-choir-navy/80">
          <p className="mb-2"><strong>Fin janvier à Novembre</strong></p>
          <p>Le chœur fait relâche l'été, soit de la St-Jean-Baptiste jusqu'à la Fête du Travail</p>
          <p>Notre concert est habituellement en novembre et il se peut qu'il y ait quelques concerts supplémentaires au concert régulier</p>
        </div>
      </div>

      {/* Fees */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-choir-gold">
        <div className="flex items-center mb-4">
          <DollarSign className="text-choir-gold mr-3" size={24} />
          <h3 className="font-playfair text-xl text-choir-navy">Cotisation annuelle</h3>
        </div>
        <div className="font-lato text-choir-navy/80">
          <p className="text-2xl font-bold text-choir-navy mb-2">180$ CAD</p>
          <p>Inclut les partitions, les pistes audio, l'accès aux répétitions et la participation aux concerts</p>
          <p>Plusieurs activités de financement ont également lieu durant l'année</p>
        </div>
      </div>

      {/* Location */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-choir-gold">
        <div className="flex items-center mb-4">
          <MapPin className="text-choir-gold mr-3" size={24} />
          <h3 className="font-playfair text-xl text-choir-navy">Lieu des répétitions</h3>
        </div>
        <div className="font-lato text-choir-navy/80">
          <p className="font-semibold">École de la Marconi</p>
          <p>1205 Rue des Tours,</p>
          <p> Drummondville, QC J2B 0Y4</p>
        </div>
      </div>

    </div>
  );
};

export default AuditionInfoCards;
