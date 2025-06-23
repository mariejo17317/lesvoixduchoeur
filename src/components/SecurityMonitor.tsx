
import { useEffect } from 'react';

const SecurityMonitor = () => {
  useEffect(() => {
    // Politique de sécurité de contenu mise à jour pour permettre YouTube et zcal.co
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://zcal.co https://*.zcal.co",
      "style-src 'self' 'unsafe-inline' https://zcal.co https://*.zcal.co",
      "img-src 'self' data: blob: https: https://zcal.co https://*.zcal.co",
      "font-src 'self' data: https://zcal.co https://*.zcal.co",
      "connect-src 'self' wss: https: https://zcal.co https://*.zcal.co",
      "frame-src 'self' https://www.youtube.com https://youtube.com https://zcal.co https://*.zcal.co",
      "object-src 'none'",
      "base-uri 'self'"
    ].join('; ');
    
    // Remplacer la CSP existante s'il y en a une
    const existingCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (existingCSP) {
      existingCSP.remove();
    }
    
    document.head.appendChild(meta);

    // Détecter les tentatives de manipulation de la console
    const originalConsole = console;
    let warningShown = false;

    const showSecurityWarning = () => {
      if (!warningShown) {
        originalConsole.warn(
          '%cATTENTION!',
          'color: red; font-size: 24px; font-weight: bold;'
        );
        originalConsole.warn(
          'Ceci est une fonction de développement réservée aux développeurs. ' +
          'Si quelqu\'un vous a dit de copier/coller quelque chose ici, ' +
          'il s\'agit probablement d\'une tentative d\'escroquerie qui pourrait ' +
          'compromettre votre compte.'
        );
        warningShown = true;
      }
    };

    // Surveiller l'ouverture des outils de développement
    let devtools = { open: false, orientation: null };
    
    const devToolsCheck = setInterval(() => {
      if (window.outerHeight - window.innerHeight > 200 || 
          window.outerWidth - window.innerWidth > 200) {
        if (!devtools.open) {
          devtools.open = true;
          showSecurityWarning();
        }
      } else {
        devtools.open = false;
      }
    }, 500);

    // Détecter les tentatives de copie de contenu sensible
    const handleCopy = (e: ClipboardEvent) => {
      const selection = window.getSelection()?.toString();
      if (selection && selection.length > 100) {
        originalConsole.warn('Copie de contenu détectée');
      }
    };

    // Détecter les tentatives de clic droit
    const handleContextMenu = (e: MouseEvent) => {
      // Ne pas bloquer complètement, juste surveiller
      originalConsole.log('Menu contextuel ouvert');
    };

    document.addEventListener('copy', handleCopy);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      clearInterval(devToolsCheck);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return null;
};

export default SecurityMonitor;
