
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import OptimizedMemberCard from './OptimizedMemberCard';
import { VoiceSection } from '../data/voiceSectionsData';
import { useImagePreloader } from '../hooks/useImagePreloader';

interface MembersGalleryProps {
  voiceSection: VoiceSection;
  isActive: boolean;
}

const MembersGallery: React.FC<MembersGalleryProps> = ({ voiceSection, isActive }) => {
  // Extract image URLs for preloading
  const imageUrls = voiceSection.members
    .map(member => member.image)
    .filter((url): url is string => !!url);

  // Preload images when this gallery becomes active
  const { loadedImages } = useImagePreloader({
    images: imageUrls,
    enabled: isActive
  });

  return (
    <div className="max-w-6xl mx-auto mb-16">
      <h3 className="text-2xl font-playfair text-choir-gold text-center mb-8">
        Galerie {voiceSection.title}
      </h3>
      
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="w-auto"
      >
        <CarouselContent>
          {voiceSection.members.map((member, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 xl:basis-1/5">
              <div className="p-2">
                <OptimizedMemberCard 
                  member={member} 
                  isVisible={isActive}
                  preloadedImages={loadedImages}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-6">
          <CarouselPrevious className="relative static mx-2 bg-choir-navy border-choir-gold/30 text-choir-gold hover:bg-choir-navy/80" />
          <CarouselNext className="relative static mx-2 bg-choir-navy border-choir-gold/30 text-choir-gold hover:bg-choir-navy/80" />
        </div>
      </Carousel>
    </div>
  );
};

export default MembersGallery;
