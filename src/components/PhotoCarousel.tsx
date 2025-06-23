import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import OptimizedImage from './OptimizedImage';

const PhotoCarousel = () => {
  const photos = [
    {
      src: "/lovable-uploads/58e7cbb9-b744-40bb-9bd0-141d79910eac.png",
      alt: "Les Voix du Chœur en concert - Vue d'ensemble"
    },
    {
      src: "/lovable-uploads/1efb0b3f-c20e-47bf-8223-e722b17a693d.png",
      alt: "Les Voix du Chœur en spectacle - Éclairage coloré"
    },
    {
      src: "/lovable-uploads/c6f4c511-0fb9-4885-bb0c-2e0160b80ae7.png",
      alt: "Choristes en performance"
    },
    {
      src: "/lovable-uploads/8ad54899-5844-472c-bdbe-641829b41d8b.png",
      alt: "Kim Martineau - Soprano"
    },
    {
      src: "/lovable-uploads/93be8b75-bbeb-4c49-8f35-2c4a0249a512.png",
      alt: "Directeur musical en action"
    },
    {
      src: "/lovable-uploads/340b5ce7-e9e2-4161-959c-7a633e78411f.png",
      alt: "Direction musicale pendant le concert"
    },
    {
      src: "/lovable-uploads/7fb6aac8-20b5-40de-b6a4-3fb7aadee451.png",
      alt: "Vue plongeante du chœur en concert"
    },
    {
      src: "/lovable-uploads/52d482c0-a57e-4b55-b77e-bef5691bacd1.png",
      alt: "Duo de choristes"
    },
    {
      src: "/lovable-uploads/3bcf49bf-bb8f-4f5d-aebd-1b949e79f943.png",
      alt: "Choristes masculins en performance"
    },
    {
      src: "/lovable-uploads/bf28f465-c71d-41b3-aa93-21b115ebf1a2.png",
      alt: "Section de choristes féminines"
    },
    {
      src: "/lovable-uploads/d907ab5e-dfea-4b54-9ebc-55a86b02cde5.png",
      alt: "Choriste soliste au microphone"
    },
    {
      src: "/lovable-uploads/7d8f25c9-ed28-418b-8d9d-c34cf8357dcf.png",
      alt: "Trio de choristes souriant en concert"
    },
    {
      src: "/lovable-uploads/d50182ae-7a27-4a9c-b6ff-a37951e64ba8.png",
      alt: "Vue d'ensemble de la chorale avec éclairage scénique"
    },
    {
      src: "/lovable-uploads/158ea169-8b95-4c0f-a06a-9be27ef0670d.png",
      alt: "Gros plan sur les choristes en performance"
    },
    {
      src: "/lovable-uploads/c313f1ea-69e9-4b2c-b810-0dde2289c4bc.png",
      alt: "Violoniste accompagnant la chorale"
    },
    {
      src: "/lovable-uploads/21dbcc40-ffb6-4a85-a23b-d02d587717a7.png",
      alt: "Ensemble musical avec instruments"
    },
    {
      src: "/lovable-uploads/fe9129ff-c4ec-457d-8e5a-b2619e8a7445.png",
      alt: "Choristes concentrés pendant la performance"
    },
    {
      src: "/lovable-uploads/ce696bae-c445-4f94-a58c-567fa60e32cd.png",
      alt: "Violoniste solo en concert"
    },
    {
      src: "/lovable-uploads/630624a3-b61d-48a1-bb7f-67632abdc60c.png",
      alt: "Section d'instruments à cordes"
    },
    {
      src: "/lovable-uploads/dd852119-4c8c-4095-9540-10bb18b17802.png",
      alt: "Section rythmique et claviers"
    },
    {
      src: "/lovable-uploads/488102d1-3130-4715-9084-5d5e2e210e38.png",
      alt: "Vue depuis les coulisses pendant le spectacle"
    },
    {
      src: "/lovable-uploads/1d683639-09ad-4a44-987f-d1b3e18807c6.png",
      alt: "Choristes en performance avec éclairage dramatique"
    },
    {
      src: "/lovable-uploads/76e88b9a-3438-4b6d-8bd4-c2e63a608254.png",
      alt: "Groupe de choristes souriant pendant le spectacle"
    },
    {
      src: "/lovable-uploads/5f1e1d70-8f00-45d8-916d-6dd553a2b0ce.png",
      alt: "Choristes en noir et blanc pendant la performance"
    },
    {
      src: "/lovable-uploads/d41c17f2-6213-465d-bc19-ca3f17d58885.png",
      alt: "Vue d'ensemble de la chorale avec piano en noir et blanc"
    },
    {
      src: "/lovable-uploads/c5594fcb-6ca0-469a-8bb4-272cf3e28666.png",
      alt: "Direction musicale vue de derrière en noir et blanc"
    },
    {
      src: "/lovable-uploads/b6b2fa13-54f8-485c-be1c-3d006dfce6a6.png",
      alt: "Soliste en performance avec éclairage dramatique"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-2xl font-playfair text-choir-gold text-center mb-8">
        Galerie Photos
      </h3>
      
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="w-full"
      >
        <CarouselContent>
          {photos.map((photo, index) => (
            <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className="p-2">
                <div className="aspect-[3/2] overflow-hidden rounded-lg bg-choir-navy/20 border border-choir-gold/30">
                  <OptimizedImage
                    src={photo.src}
                    alt={photo.alt}
                    loading={index < 3 ? "eager" : "lazy"}
                    priority={index < 3}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
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

export default PhotoCarousel;
