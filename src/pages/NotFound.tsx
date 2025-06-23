import { useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const [shouldRedirect, setShouldRedirect] = useState<string | null>(null);

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    console.log("Full URL:", window.location.href);
    console.log("Search params:", location.search);

    // Logique de redirection intelligente avec les nouvelles ancres
    if (path.includes('/blog') || path.includes('/post')) {
      setShouldRedirect('/#presse_et_medias');
    } else if (path.includes('/choriste') || path.includes('/chanteur') || path.includes('/membre')) {
      setShouldRedirect('/#ensemble');
    } else if (path.includes('/calendrier') || path.includes('/spectacle') || path.includes('/concert') || path.includes('/calendar')) {
      setShouldRedirect('/calendrier');
    } else if (path.includes('/audition') || path.includes('/rejoindre')) {
      setShouldRedirect('/auditions');
    } else if (path.includes('/contact')) {
      setShouldRedirect('/#nous_contacter');
    } else if (path.includes('/video') || path.includes('/photo') || path.includes('/tout-en-photo-video')) {
      setShouldRedirect('/#ensemble');
    } else if (path.includes('/about') || path.includes('/propos')) {
      setShouldRedirect('/#a_propos_du_choeur');
    } else if (path.includes('/press') || path.includes('/presse')) {
      setShouldRedirect('/#presse_et_medias');
    }
  }, [location.pathname, location.search]);

  // Si une redirection intelligente est déterminée, l'exécuter
  if (shouldRedirect) {
    return <Navigate to={shouldRedirect} replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-choir-navy">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold mb-4 text-choir-gold font-playfair">404</h1>
        <h2 className="text-2xl text-choir-cream mb-4 font-playfair">Page non trouvée</h2>
        <p className="text-choir-cream/80 mb-6 font-lato">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="space-y-3">
          <a 
            href="/" 
            className="block bg-choir-gold text-choir-navy px-6 py-3 rounded font-semibold hover:bg-choir-gold/90 transition-colors font-lato"
          >
            Retour à l'accueil
          </a>
          <a 
            href="/#nous_contacter" 
            className="block border border-choir-gold text-choir-gold px-6 py-3 rounded font-semibold hover:bg-choir-gold/10 transition-colors font-lato"
          >
            Nous contacter
          </a>
        </div>
        <p className="text-choir-cream/60 text-sm mt-8 font-lato">
          URL demandée : <code className="text-choir-gold">{location.pathname}</code>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
