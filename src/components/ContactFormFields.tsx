
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContactFormFieldsProps {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubjectChange: (value: string) => void;
}

const ContactFormFields = ({ formData, handleChange, handleSubjectChange }: ContactFormFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-choir-cream font-lato mb-2">
            Votre nom * <span className="text-sm text-choir-cream/60">({formData.name.length}/100)</span>
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full bg-choir-navy border border-choir-cream/30 focus:border-choir-gold rounded px-4 py-2 text-choir-cream font-lato focus:outline-none focus:ring-1 focus:ring-choir-gold" 
            maxLength={100}
            autoComplete="name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-choir-cream font-lato mb-2">
            Adresse Courriel * <span className="text-sm text-choir-cream/60">({formData.email.length}/200)</span>
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full bg-choir-navy border border-choir-cream/30 focus:border-choir-gold rounded px-4 py-2 text-choir-cream font-lato focus:outline-none focus:ring-1 focus:ring-choir-gold" 
            maxLength={200}
            autoComplete="email"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-choir-cream font-lato mb-2">Sujet *</label>
        <Select value={formData.subject} onValueChange={handleSubjectChange} required>
          <SelectTrigger className="w-full bg-choir-navy border border-choir-cream/30 focus:border-choir-gold text-choir-cream">
            <SelectValue placeholder="Sélectionnez un sujet" />
          </SelectTrigger>
          <SelectContent className="bg-choir-navy border border-choir-cream/30">
            <SelectItem value="spectacles" className="text-choir-cream hover:bg-choir-gold/20">
              Question à propos des spectacles
            </SelectItem>
            <SelectItem value="audition" className="text-choir-cream hover:bg-choir-gold/20">
              Information sur les auditions
            </SelectItem>
            <SelectItem value="organisation" className="text-choir-cream hover:bg-choir-gold/20">
              Contacter un responsable de l'organisation
            </SelectItem>
            <SelectItem value="autre" className="text-choir-cream hover:bg-choir-gold/20">
              Autre demande
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-choir-cream font-lato mb-2">
          Message * <span className="text-sm text-choir-cream/60">({formData.message.length}/2000)</span>
        </label>
        <textarea 
          id="message" 
          name="message" 
          required 
          rows={6} 
          value={formData.message} 
          onChange={handleChange} 
          className="w-full bg-choir-navy border border-choir-cream/30 focus:border-choir-gold rounded px-4 py-2 text-choir-cream font-lato focus:outline-none focus:ring-1 focus:ring-choir-gold resize-none"
          placeholder="Décrivez votre demande..."
          maxLength={2000}
          minLength={10}
        />
      </div>
    </>
  );
};

export default ContactFormFields;
