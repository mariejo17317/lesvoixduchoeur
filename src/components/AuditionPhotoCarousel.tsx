
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const AuditionPhotoCarousel = () => {
  const auditionPhotos = [
    {
      src: "/lovable-uploads/8455e38f-d0b0-4cdb-afc2-560a14700138.png",
      alt: "Soliste en performance avec éclairage dramatique en noir et blanc"
    },
    {
      src: "/lovable-uploads/fd65c5b3-a57f-468e-b577-9515744f302e.png",
      alt: "Performance musicale en noir et blanc avec soliste et accompagnement"
    }
  ];

  return (
    <section className="py-12 bg-choir-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-playfair text-choir-gold text-center mb-8">
            L'art de la performance
          </h3>
          
          <Carousel
            opts={{
              align: "center",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {auditionPhotos.map((photo, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2">
                  <div className="p-3">
                    <div className="aspect-[4/3] max-w-md mx-auto overflow-hidden rounded-lg bg-choir-navy/20 border border-choir-gold/30 shadow-xl">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mx-3 bg-choir-navy border-choir-gold/30 text-choir-gold hover:bg-choir-navy/80 w-12 h-12" />
              <CarouselNext className="relative static mx-3 bg-choir-navy border-choir-gold/30 text-choir-gold hover:bg-choir-navy/80 w-12 h-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AuditionPhotoCarousel;
