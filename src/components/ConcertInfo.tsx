
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ConcertInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [concertDetails, setConcertDetails] = useState({
    date: '',
    heure: '',
    lieu: '',
    prixAdulte: '',
    prixEnfant: ''
  });

  const handleSave = () => {
    setIsEditing(false);
    // Ici vous pourriez sauvegarder les données dans une base de données
  };

  return (
    <Card className="border-choir-gold/30 bg-choir-navy/60 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-choir-gold">Informations du Concert</CardTitle>
        <Button 
          onClick={() => setIsEditing(!isEditing)}
          variant="outline"
          size="sm"
          className="border-choir-cream/30 text-choir-cream hover:bg-choir-cream/10"
        >
          {isEditing ? 'Annuler' : 'Modifier'}
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center mb-6">
          <img 
            src="/lovable-uploads/VueRegie.png" 
            alt="Vue de la régie" 
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
        
        <div className="text-center text-choir-cream text-lg mb-6">
          <p className="font-semibold">Notre prochain concert aura lieu bientôt</p>
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <div>
              <label className="block text-choir-cream mb-2">Date</label>
              <Input
                type="date"
                value={concertDetails.date}
                onChange={(e) => setConcertDetails({...concertDetails, date: e.target.value})}
                className="bg-choir-navy border-choir-cream/30 text-choir-cream"
              />
            </div>
            
            <div>
              <label className="block text-choir-cream mb-2">Heure</label>
              <Input
                type="time"
                value={concertDetails.heure}
                onChange={(e) => setConcertDetails({...concertDetails, heure: e.target.value})}
                className="bg-choir-navy border-choir-cream/30 text-choir-cream"
              />
            </div>
            
            <div>
              <label className="block text-choir-cream mb-2">Lieu</label>
              <Input
                value={concertDetails.lieu}
                onChange={(e) => setConcertDetails({...concertDetails, lieu: e.target.value})}
                className="bg-choir-navy border-choir-cream/30 text-choir-cream"
                placeholder="Ex: Église Saint-Pierre, Drummondville"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-choir-cream mb-2">Prix par adulte</label>
                <Input
                  value={concertDetails.prixAdulte}
                  onChange={(e) => setConcertDetails({...concertDetails, prixAdulte: e.target.value})}
                  className="bg-choir-navy border-choir-cream/30 text-choir-cream"
                  placeholder="Ex: 25$"
                />
              </div>
              
              <div>
                <label className="block text-choir-cream mb-2">Prix par enfant (12 ans et -)</label>
                <Input
                  value={concertDetails.prixEnfant}
                  onChange={(e) => setConcertDetails({...concertDetails, prixEnfant: e.target.value})}
                  className="bg-choir-navy border-choir-cream/30 text-choir-cream"
                  placeholder="Ex: 15$"
                />
              </div>
            </div>
            
            <Button 
              onClick={handleSave}
              className="w-full bg-choir-gold hover:bg-choir-gold/90 text-choir-navy"
            >
              Sauvegarder
            </Button>
          </div>
        ) : (
          <div className="space-y-3 text-choir-cream">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="font-semibold text-choir-gold">Date: </span>
                {concertDetails.date || 'À déterminer'}
              </div>
              <div>
                <span className="font-semibold text-choir-gold">Heure: </span>
                {concertDetails.heure || 'À déterminer'}
              </div>
            </div>
            
            <div>
              <span className="font-semibold text-choir-gold">Lieu: </span>
              {concertDetails.lieu || 'À déterminer'}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="font-semibold text-choir-gold">Prix adulte: </span>
                {concertDetails.prixAdulte || 'À déterminer'}
              </div>
              <div>
                <span className="font-semibold text-choir-gold">Prix enfant (12 ans et -): </span>
                {concertDetails.prixEnfant || 'À déterminer'}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ConcertInfo;
