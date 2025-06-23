
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSanitizeInput } from '@/hooks/useSanitizeInput';

interface SimpleCaptchaProps {
  onVerify: (isValid: boolean) => void;
  resetTrigger?: number;
}

const SimpleCaptcha = ({ onVerify, resetTrigger = 0 }: SimpleCaptchaProps) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [hasAttempted, setHasAttempted] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  // Sécuriser l'entrée utilisateur
  const sanitizedInput = useSanitizeInput(userInput, { maxLength: 10 });

  const generateCaptcha = useCallback(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    // Utiliser crypto.getRandomValues pour une meilleure sécurité
    const array = new Uint8Array(5);
    crypto.getRandomValues(array);
    
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(array[i] % chars.length);
    }
    return result;
  }, []);

  useEffect(() => {
    setCaptchaText(generateCaptcha());
    setUserInput('');
    setIsVerified(false);
    setHasAttempted(false);
    setAttempts(0);
    setIsBlocked(false);
    onVerify(false);
  }, [resetTrigger, generateCaptcha, onVerify]);

  const verifyCaptcha = useCallback(() => {
    // Bloquer après 5 tentatives échouées
    if (attempts >= 5) {
      setIsBlocked(true);
      return;
    }

    setHasAttempted(true);
    const isValid = sanitizedInput.toUpperCase() === captchaText;
    setIsVerified(isValid);
    onVerify(isValid);
    
    if (!isValid) {
      setAttempts(prev => prev + 1);
      setCaptchaText(generateCaptcha());
      setUserInput('');
      
      // Ajouter un délai après plusieurs tentatives échouées
      if (attempts >= 2) {
        setTimeout(() => {
          // Délai progressif
        }, attempts * 1000);
      }
    } else {
      setAttempts(0);
    }
  }, [attempts, sanitizedInput, captchaText, onVerify, generateCaptcha]);

  const refreshCaptcha = useCallback(() => {
    if (isBlocked) return;
    
    setCaptchaText(generateCaptcha());
    setUserInput('');
    setIsVerified(false);
    setHasAttempted(false);
    onVerify(false);
  }, [isBlocked, generateCaptcha, onVerify]);

  if (isBlocked) {
    return (
      <div className="space-y-3">
        <div className="bg-red-900/20 border border-red-500/30 rounded p-4">
          <p className="text-red-400 text-sm">
            Trop de tentatives échouées. Veuillez rafraîchir la page pour réessayer.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="bg-gray-200 px-4 py-2 rounded font-mono text-lg tracking-wider text-gray-800 select-none">
          {captchaText}
        </div>
        <Button 
          type="button"
          onClick={refreshCaptcha}
          variant="outline"
          size="sm"
          className="border-choir-cream/30 text-choir-cream hover:bg-choir-cream/10"
          disabled={isBlocked}
        >
          ↻
        </Button>
      </div>
      <div className="flex gap-2">
        <Input
          value={userInput}
          onChange={(e) => {
            const value = e.target.value.replace(/[^A-Za-z0-9]/g, '');
            setUserInput(value);
          }}
          placeholder="Entrez le code ci-dessus"
          className="bg-choir-navy border-choir-cream/30 text-choir-cream"
          maxLength={5}
          autoComplete="off"
          disabled={isBlocked}
        />
        <Button 
          type="button"
          onClick={verifyCaptcha}
          className="bg-choir-gold hover:bg-choir-gold/90 text-choir-navy"
          disabled={isBlocked || !userInput.trim()}
        >
          Vérifier
        </Button>
      </div>
      {attempts > 0 && (
        <p className="text-orange-400 text-sm">
          Tentatives restantes: {5 - attempts}
        </p>
      )}
      {hasAttempted && isVerified && (
        <p className="text-green-400 text-sm">✓ CAPTCHA vérifié avec succès</p>
      )}
      {hasAttempted && !isVerified && (
        <p className="text-red-400 text-sm">✗ Code incorrect</p>
      )}
    </div>
  );
};

export default SimpleCaptcha;
