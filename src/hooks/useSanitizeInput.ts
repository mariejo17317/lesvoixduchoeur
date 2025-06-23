
import { useMemo } from 'react';

interface SanitizeOptions {
  allowHtml?: boolean;
  maxLength?: number;
}

export const useSanitizeInput = (input: string, options: SanitizeOptions = {}) => {
  const { allowHtml = false, maxLength = 1000 } = options;

  const sanitizedInput = useMemo(() => {
    if (!input) return '';

    let sanitized = input.trim();

    // Limiter la longueur
    if (maxLength && sanitized.length > maxLength) {
      sanitized = sanitized.substring(0, maxLength);
    }

    // Supprimer le HTML si non autorisé
    if (!allowHtml) {
      sanitized = sanitized.replace(/<[^>]*>/g, '');
    }

    // Échapper les caractères dangereux
    sanitized = sanitized
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');

    return sanitized;
  }, [input, allowHtml, maxLength]);

  return sanitizedInput;
};
