
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface LeaderProfileProps {
  name: string;
  title: string;
  image: string;
  alt: string;
}

const LeaderProfile: React.FC<LeaderProfileProps> = ({ name, title, image, alt }) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log(`Failed to load image for ${name}: ${image}`);
    const target = e.currentTarget;
    target.src = `https://via.placeholder.com/300x300/1a365d/d4af37?text=${encodeURIComponent(getInitials(name))}`;
  };

  return (
    <Card className="border-choir-gold/30 bg-choir-navy/60 backdrop-blur-sm h-full">
      <CardContent className="p-4">
        <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-choir-navy/20">
          <img
            src={image}
            alt={alt}
            onError={handleImageError}
            loading="lazy"
            className="w-full h-full object-center transition-transform duration-300 hover:scale-105 object-contain"
          />
        </div>
        
        <div className="text-center">
          <h4 className="text-sm font-semibold text-choir-gold leading-tight mb-1">
            {title}
          </h4>
          <p className="text-xs text-choir-cream/70">{name}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderProfile;
