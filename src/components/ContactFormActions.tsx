
import React from 'react';
import SimpleCaptcha from './SimpleCaptcha';

interface ContactFormActionsProps {
  isSubmitting: boolean;
  isCaptchaValid: boolean;
  setIsCaptchaValid: (isValid: boolean) => void;
  captchaResetTrigger: number;
}

const ContactFormActions = ({ 
  isSubmitting, 
  isCaptchaValid, 
  setIsCaptchaValid, 
  captchaResetTrigger 
}: ContactFormActionsProps) => {
  return (
    <>
      <div>
        <label className="block text-choir-cream font-lato mb-2">Vérification de sécurité *</label>
        <SimpleCaptcha 
          onVerify={setIsCaptchaValid} 
          resetTrigger={captchaResetTrigger}
        />
      </div>
      
      <div className="text-center">
        <button 
          type="submit" 
          disabled={isSubmitting || !isCaptchaValid}
          className="bg-choir-gold hover:bg-choir-gold/90 disabled:bg-choir-gold/50 text-choir-navy font-medium px-8 py-3 rounded transition-all duration-300 font-lato uppercase tracking-wider text-sm disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
      </div>
    </>
  );
};

export default ContactFormActions;
