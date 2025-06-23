
import React from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Event = {
  id: string;
  date: Date;
  title: string;
  venue: string;
  time: string;
  description: string;
};

interface CalendarGridProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
  events: Event[];
}

const CalendarGrid = ({ selectedDate, onSelectDate, events }: CalendarGridProps) => {
  const hasEvents = (date: Date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    ).length > 0;
  };

  return (
    <Card className="border-choir-gold/30 bg-choir-navy/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-choir-gold">Sélectionnez une date</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onSelectDate}
          className="rounded-md border border-choir-gold/30 bg-choir-navy text-choir-cream pointer-events-auto"
          modifiers={{
            hasEvent: (date) => hasEvents(date)
          }}
          modifiersClassNames={{
            hasEvent: "bg-choir-gold/20 text-choir-gold font-bold"
          }}
        />
      </CardContent>
    </Card>
  );
};

export default CalendarGrid;
