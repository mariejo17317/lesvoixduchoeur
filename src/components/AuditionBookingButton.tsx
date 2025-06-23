
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from 'lucide-react';

const AuditionBookingButton = () => {
  return (
    <div className="text-center">
      <Button 
        disabled
        className="bg-choir-gold/50 hover:bg-choir-gold/50 text-choir-navy/70 font-medium px-8 py-3 rounded transition-all duration-300 font-lato uppercase tracking-wider cursor-not-allowed"
      >
        <Calendar className="mr-2 h-5 w-5" />
        Réserver mon audition
      </Button>
      <p className="text-choir-navy/70 text-sm mt-2 font-lato">
        Les dates d'audition seront bientôt disponibles
      </p>
    </div>
  );
};

export default AuditionBookingButton;
