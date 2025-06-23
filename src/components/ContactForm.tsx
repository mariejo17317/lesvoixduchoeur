
import React, { useState, useCallback } from 'react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useSanitizeInput } from '@/hooks/useSanitizeInput';
import ContactFormFields from './ContactFormFields';
import ContactFormActions from './ContactFormActions';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [captchaResetTrigger, setCaptchaResetTrigger] = useState(0);

  // Sécuriser toutes les entrées
  const sanitizedName = useSanitizeInput(formData.name, { maxLength: 100 });
  const sanitizedEmail = useSanitizeInput(formData.email, { maxLength: 200 });
  const sanitizedMessage = useSanitizeInput(formData.message, { maxLength: 2000 });

  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 200;
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Limiter la saisie en temps réel
    let sanitizedValue = value;
    if (name === 'name' && value.length > 100) return;
    if (name === 'email' && value.length > 200) return;
    if (name === 'message' && value.length > 2000) return;
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  }, []);

  const handleSubjectChange = useCallback((value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  }, []);

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

    // Validation stricte côté client
    if (!sanitizedName || !sanitizedEmail || !formData.subject || !sanitizedMessage) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    if (!validateEmail(sanitizedEmail)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive"
      });
      return;
    }

    if (sanitizedMessage.length < 10) {
      toast({
        title: "Erreur",
        description: "Le message doit contenir au moins 10 caractères.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Sending email with data:", {
        name: sanitizedName,
        email: sanitizedEmail,
        subject: formData.subject,
        message: sanitizedMessage
      });
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: sanitizedName,
          email: sanitizedEmail,
          subject: formData.subject,
          message: sanitizedMessage
        }
      });

      if (error) {
        throw error;
      }

      console.log("Email sent successfully:", data);

      toast({
        title: "Message envoyé!",
        description: "Votre message a été envoyé avec succès. Nous vous répondrons dès que possible.",
        duration: 5000
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setCaptchaResetTrigger(prev => prev + 1);
      setIsCaptchaValid(false);

    } catch (error: any) {
      console.error("Error sending email:", error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
        variant: "destructive",
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <ContactFormFields 
          formData={formData}
          handleChange={handleChange}
          handleSubjectChange={handleSubjectChange}
        />
        
        <ContactFormActions 
          isSubmitting={isSubmitting}
          isCaptchaValid={isCaptchaValid}
          setIsCaptchaValid={setIsCaptchaValid}
          captchaResetTrigger={captchaResetTrigger}
        />
      </form>
    </div>
  );
};

export default ContactForm;
