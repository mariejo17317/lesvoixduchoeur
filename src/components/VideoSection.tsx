
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Video, ExternalLink } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="videos" className="py-20 bg-choir-navy">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Video className="text-choir-gold w-8 h-8 mr-3" />
          <h2 className="text-3xl md:text-4xl font-playfair text-choir-gold text-center font-semibold">Jugez par vous-même</h2>
        </div>
        
        <p className="text-choir-cream text-center mb-12 font-lato max-w-2xl mx-auto">
          Depuis des années, les membres du choeur offrent leur âme à chaque fois qu'ils frôlent la scène.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Video 1 */}
          <Card className="border-choir-gold/30 bg-choir-navy/60 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <AspectRatio ratio={16/9}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/Ouzljclro04?si=H2_rFtsIqp0VaqXG" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="rounded-lg"
                />
              </AspectRatio>
            </CardContent>
          </Card>

          {/* Video 2 */}
          <Card className="border-choir-gold/30 bg-choir-navy/60 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <AspectRatio ratio={16/9}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/7aUKiZGWBvk?si=nViq8mV9XtbMEvzh" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="rounded-lg"
                />
              </AspectRatio>
            </CardContent>
          </Card>

          {/* Video 3 */}
          <Card className="border-choir-gold/30 bg-choir-navy/60 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <AspectRatio ratio={16/9}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/4ktMgKT1qCU?si=ubVV-4wa788pUTRb" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="rounded-lg"
                />
              </AspectRatio>
            </CardContent>
          </Card>

          {/* Video 4 */}
          <Card className="border-choir-gold/30 bg-choir-navy/60 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <AspectRatio ratio={16/9}>
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/0v-5OqWXjNE?si=eCr6LTE_TKu8yfa0" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="rounded-lg"
                />
              </AspectRatio>
            </CardContent>
          </Card>
        </div>

        {/* Link to YouTube channel */}
        <div className="text-center mt-12">
          <a 
            href="https://www.youtube.com/@VoixduChoeurDrummond" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-choir-gold hover:text-choir-cream transition-colors font-lato font-semibold text-lg"
          >
            Pour en voir plus
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
