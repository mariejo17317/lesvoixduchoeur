
import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="nous_contacter" className="py-20 bg-gradient-to-b from-choir-navy to-choir-blue/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-choir-gold text-center mb-4 font-semibold">Contactez-nous</h2>
        <p className="text-choir-cream text-center mb-12 font-lato max-w-2xl mx-auto">Vous avez des questions? Contactez-nous et nous répondrons dès que possible.</p>
        
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
