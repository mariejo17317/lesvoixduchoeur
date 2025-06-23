import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
interface Member {
  name: string;
  image?: string;
  role?: string;
}
interface MemberCardProps {
  member: Member;
}
const MemberCard: React.FC<MemberCardProps> = ({
  member
}) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log(`Failed to load image for ${member.name}: ${member.image}`);
    const target = e.currentTarget;
    target.src = `https://via.placeholder.com/300x300/1a365d/d4af37?text=${encodeURIComponent(getInitials(member.name))}`;
  };
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log(`Successfully loaded image for ${member.name}: ${member.image}`);
  };
  return <Card className="border-choir-gold/30 bg-choir-navy/60 backdrop-blur-sm h-full">
      <CardContent className="p-4">
        <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-choir-navy/20">
          <img src={member.image || `https://via.placeholder.com/300x300/1a365d/d4af37?text=${encodeURIComponent(getInitials(member.name))}`} alt={member.name} onError={handleImageError} onLoad={handleImageLoad} loading="lazy" className="w-full h-full object-center transition-transform duration-300 hover:scale-105 object-contain" />
        </div>
        <div className="text-center">
          <h4 className="text-sm font-semibold text-choir-gold leading-tight">
            {member.name}
          </h4>
          {member.role && <p className="text-xs text-choir-cream/70 mt-1">{member.role}</p>}
        </div>
      </CardContent>
    </Card>;
};
export default MemberCard;