
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Event = {
  id: string;
  date: Date;
  title: string;
  venue: string;
  time: string;
  description: string;
};

interface EventListProps {
  selectedDate: Date | undefined;
  events: Event[];
  onAddEventClick: () => void;
}

const EventList = ({ selectedDate, events, onAddEventClick }: EventListProps) => {
  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  if (!selectedDate) return null;

  return (
    <Card className="border-choir-gold/30 bg-choir-navy/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-choir-gold">
          Spectacles du {selectedDate.toLocaleDateString('fr-FR')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {getEventsForDate(selectedDate).length > 0 ? (
          <div className="space-y-4">
            {getEventsForDate(selectedDate).map(event => (
              <div key={event.id} className="border border-choir-cream/20 rounded-lg p-4">
                <h3 className="text-choir-gold font-semibold text-lg">{event.title}</h3>
                <p className="text-choir-cream/80">{event.venue}</p>
                <p className="text-choir-cream/80">Heure: {event.time}</p>
                {event.description && (
                  <p className="text-choir-cream/70 mt-2">{event.description}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-choir-cream/70">Aucun spectacle prévu pour cette date.</p>
        )}
        
        <Button 
          onClick={onAddEventClick}
          className="mt-4 bg-choir-gold hover:bg-choir-gold/90 text-choir-navy"
        >
          Ajouter un spectacle
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventList;
