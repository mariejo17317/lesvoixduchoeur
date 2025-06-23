
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-choir-navy border-t border-choir-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-choir-gold font-playfair text-xl mb-4">Les Voix Du Choeur</h3>
              <p className="text-choir-cream/80 font-lato">Un ensemble vocal où la passion et le chant résonnent en harmonie.</p>
            </div>
            
            <div>
              <h3 className="text-choir-gold font-playfair text-xl mb-4">Navigation</h3>
              <ul className="space-y-2">
                <FooterLink href="/">Accueil</FooterLink>
                <FooterLink href="#a_propos_du_choeur">À propos du choeur</FooterLink>
                <FooterLink href="#ensemble">Les membres de l'ensemble</FooterLink>
                <FooterLink href="#videos">Vidéos</FooterLink>
                <FooterLink href="#presse_et_medias">On parle de nous</FooterLink>
              </ul>
            </div>
            
            <div>
              <h3 className="text-choir-gold font-playfair text-xl mb-4">Services</h3>
              <ul className="space-y-2">
                <FooterLink href="/calendrier">Calendrier des spectacles</FooterLink>
                <FooterLink href="/auditions">Devenir choriste</FooterLink>
                <FooterLink href="#nous_contacter">Contactez-nous</FooterLink>
                <FooterLink href="https://apophis.bounceme.net:4455/cgi-bin/" target="_blank">Intranet</FooterLink>
              </ul>
            </div>
            
            <div>
              <h3 className="text-choir-gold font-playfair text-xl mb-4">Suivez-Nous</h3>
              <p className="text-choir-cream/80 font-lato mb-4">Restez connectés avec nous sur les réseaux sociaux</p>
              <div className="flex space-x-4">
                <SocialLink href="https://www.facebook.com/groups/lesvoixduchoeur/" label="Facebook">
                  <Facebook className="h-5 w-5" />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/lesvoixduchoeurdedrummondville/" label="Instagram">
                  <Instagram className="h-5 w-5" />
                </SocialLink>
                <SocialLink href="https://www.youtube.com/user/VoixduChoeurDrummond" label="YouTube">
                  <Youtube className="h-5 w-5" />
                </SocialLink>
              </div>
            </div>
          </div>
          
          <div className="border-t border-choir-gold/20 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-choir-cream/70 font-lato text-sm mb-4 md:mb-0">
              &copy; {currentYear} Les Voix Du Choeur. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <FooterRouterLink to="/politique-confidentialite">Politique de confidentialité</FooterRouterLink>
              <FooterRouterLink to="/conditions-utilisation">Conditions d'utilisation</FooterRouterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, target, children }: { href: string; target?: string; children: React.ReactNode }) => {
  return (
    <li>
      <a 
        href={href} 
        target={target}
        className="text-choir-cream/80 hover:text-choir-gold transition-colors duration-300 font-lato"
      >
        {children}
      </a>
    </li>
  );
};

const FooterRouterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="text-choir-cream/60 hover:text-choir-gold transition-colors duration-300 font-lato text-sm"
    >
      {children}
    </Link>
  );
};

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-choir-cream/30 hover:border-choir-gold flex items-center justify-center text-choir-cream hover:text-choir-gold transition-all duration-300"
    aria-label={label}
  >
    {children}
  </a>
);

export default Footer;
