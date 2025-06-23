
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Member {
  name: string;
  image?: string;
  role?: string;
}

interface OptimizedMemberCardProps {
  member: Member;
  isVisible?: boolean;
  preloadedImages?: Set<string>;
}

const OptimizedMemberCard: React.FC<OptimizedMemberCardProps> = ({
  member,
  isVisible = true,
  preloadedImages = new Set()
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const placeholderSrc = `https://via.placeholder.com/300x300/1a365d/d4af37?text=${encodeURIComponent(getInitials(member.name))}`;

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  // Check if image is preloaded
  useEffect(() => {
    if (member.image && preloadedImages.has(member.image)) {
      setImageLoaded(true);
      setShouldLoad(true);
    }
  }, [member.image, preloadedImages]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const imageSrc = imageError ? placeholderSrc : (member.image || placeholderSrc);

  return (
    <Card ref={cardRef} className="border-choir-gold/30 bg-choir-navy/60 backdrop-blur-sm h-full">
      <CardContent className="p-4">
        <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-choir-navy/20 relative">
          {!imageLoaded && shouldLoad && (
            <Skeleton className="w-full h-full absolute inset-0 bg-choir-navy/40" />
          )}
          
          {shouldLoad && (
            <img
              ref={imgRef}
              src={imageSrc}
              alt={member.name}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
              className={`w-full h-full object-center transition-all duration-300 hover:scale-105 object-contain ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out' 
              }}
            />
          )}
        </div>
        
        <div className="text-center">
          <h4 className="text-sm font-semibold text-choir-gold leading-tight">
            {member.name}
          </h4>
          {member.role && (
            <p className="text-xs text-choir-cream/70 mt-1">{member.role}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default OptimizedMemberCard;
