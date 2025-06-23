
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import SimpleCaptcha from './SimpleCaptcha';

const TicketForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    courriel: '',
    nombreBillets: 1
  });
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [captchaResetTrigger, setCaptchaResetTrigger] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isCaptchaValid) {
      toast({
        title: "Erreur",
        description: "Veuillez vérifier le CAPTCHA.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.nom || !formData.prenom || !formData.courriel || !formData.telephone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simuler l'envoi d'email (vous devrez implémenter l'envoi réel avec Supabase)
    try {
      // Ici vous devrez ajouter l'appel à votre fonction Supabase Edge Function
      console.log("Données du formulaire:", formData);
      
      toast({
        title: "Demande envoyée",
        description: "Votre demande de billets a été envoyée avec succès. Nous vous contactons bientôt.",
      });
      
      // Réinitialiser le formulaire
      setFormData({
        nom: '',
        prenom: '',
        telephone: '',
        courriel: '',
        nombreBillets: 1
      });
      setCaptchaResetTrigger(prev => prev + 1);
      setIsCaptchaValid(false);
      
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-choir-gold/30 bg-choir-navy/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-choir-gold">Pour obtenir vos billets</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-choir-cream mb-2">Nom *</label>
              <Input
                value={formData.nom}
                onChange={(e) => handleInputChange('nom', e.target.value)}
                className="bg-choir-navy border-choir-cream/30 text-choir-cream"
                required
              />
            </div>
            <div>
              <label className="block text-choir-cream mb-2">Prénom *</label>
              <Input
                value={formData.prenom}
                onChange={(e) => handleInputChange('prenom', e.target.value)}
                className="bg-choir-navy border-choir-cream/30 text-choir-cream"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-choir-cream mb-2">Numéro de téléphone *</label>
            <Input
              type="tel"
              value={formData.telephone}
              onChange={(e) => handleInputChange('telephone', e.target.value)}
              className="bg-choir-navy border-choir-cream/30 text-choir-cream"
              required
            />
          </div>
          
          <div>
            <label className="block text-choir-cream mb-2">Courriel *</label>
            <Input
              type="email"
              value={formData.courriel}
              onChange={(e) => handleInputChange('courriel', e.target.value)}
              className="bg-choir-navy border-choir-cream/30 text-choir-cream"
              required
            />
          </div>
          
          <div>
            <label className="block text-choir-cream mb-2">Nombre de billets</label>
            <Input
              type="number"
              min="1"
              max="10"
              value={formData.nombreBillets}
              onChange={(e) => handleInputChange('nombreBillets', parseInt(e.target.value) || 1)}
              className="bg-choir-navy border-choir-cream/30 text-choir-cream"
              required
            />
          </div>

          <div>
            <label className="block text-choir-cream mb-2">Vérification de sécurité *</label>
            <SimpleCaptcha 
              onVerify={setIsCaptchaValid} 
              resetTrigger={captchaResetTrigger}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-choir-gold hover:bg-choir-gold/90 text-choir-navy"
            disabled={!isCaptchaValid || isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TicketForm;
