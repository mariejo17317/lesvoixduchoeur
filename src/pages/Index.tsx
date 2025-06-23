
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EnsembleSection from '../components/EnsembleSection';
import VideoSection from '../components/VideoSection';
import PerformancesSection from '../components/PerformancesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-choir-navy text-choir-cream font-lato">
      <div className="pt-24"> {/* Augmenté l'espace pour les deux menus fixes */}
        <Navigation />
        <HeroSection />
        <AboutSection />
        <EnsembleSection />
        <VideoSection />
        <PerformancesSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
