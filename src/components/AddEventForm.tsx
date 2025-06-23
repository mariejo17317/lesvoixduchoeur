
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Event = {
  id: string;
  date: Date;
  title: string;
  venue: string;
  time: string;
  description: string;
};

interface AddEventFormProps {
  selectedDate: Date | undefined;
  onAddEvent: (event: Omit<Event, 'id'>) => void;
  onCancel: () => void;
}

const AddEventForm = ({ selectedDate, onAddEvent, onCancel }: AddEventFormProps) => {
  const [newEvent, setNewEvent] = useState({
    title: '',
    venue: '',
    time: '',
    description: ''
  });

  const handleSubmit = () => {
    if (!selectedDate || !newEvent.title || !newEvent.venue || !newEvent.time) {
      return;
    }

    onAddEvent({
      date: selectedDate,
      title: newEvent.title,
      venue: newEvent.venue,
      time: newEvent.time,
      description: newEvent.description
    });

    setNewEvent({ title: '', venue: '', time: '', description: '' });
  };

  return (
    <Card className="border-choir-gold/30 bg-choir-navy/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-choir-gold">Ajouter un spectacle</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-choir-cream mb-2">Titre du spectacle *</label>
          <Input
            value={newEvent.title}
            onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
            className="bg-choir-navy border-choir-cream/30 text-choir-cream"
            placeholder="Ex: Concert de Noël"
          />
        </div>
        
        <div>
          <label className="block text-choir-cream mb-2">Lieu *</label>
          <Input
            value={newEvent.venue}
            onChange={(e) => setNewEvent({...newEvent, venue: e.target.value})}
            className="bg-choir-navy border-choir-cream/30 text-choir-cream"
            placeholder="Ex: Église Saint-Pierre"
          />
        </div>
        
        <div>
          <label className="block text-choir-cream mb-2">Heure *</label>
          <Input
            value={newEvent.time}
            onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
            className="bg-choir-navy border-choir-cream/30 text-choir-cream"
            placeholder="Ex: 19h30"
          />
        </div>
        
        <div>
          <label className="block text-choir-cream mb-2">Description</label>
          <Textarea
            value={newEvent.description}
            onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
            className="bg-choir-navy border-choir-cream/30 text-choir-cream"
            placeholder="Description du spectacle..."
            rows={3}
          />
        </div>
        
        <div className="flex gap-2">
          <Button 
            onClick={handleSubmit}
            className="bg-choir-gold hover:bg-choir-gold/90 text-choir-navy"
          >
            Ajouter
          </Button>
          <Button 
            onClick={onCancel}
            variant="outline"
            className="border-choir-cream/30 text-choir-cream hover:bg-choir-cream/10"
          >
            Annuler
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddEventForm;
