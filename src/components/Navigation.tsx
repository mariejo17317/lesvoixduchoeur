import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Secondary Menu - Fixed at top */}
      <div className="bg-choir-blue/20 border-b border-choir-gold/20 fixed w-full z-50 top-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-6">
              <SecondaryNavLink href="/calendrier">Calendrier des spectacles</SecondaryNavLink>
              <SecondaryNavLink href="/auditions">Devenir choriste</SecondaryNavLink>
              <SecondaryNavLink href="https://apophis.bounceme.net:4455/cgi-bin/" target="_blank">Intranet</SecondaryNavLink>
            </div>
            
            <div className="flex items-center space-x-4">
              <SocialLink href="https://www.facebook.com/groups/lesvoixduchoeur/" label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/lesvoixduchoeurdedrummondville/" label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href="https://www.youtube.com/user/VoixduChoeurDrummond" label="YouTube">
                <Youtube className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Fixed below secondary menu */}
      <nav className="bg-choir-navy/90 backdrop-blur-md fixed w-full z-40 top-12">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link to="/" className="hover:opacity-90 transition-opacity duration-300">
                <img 
                  src="/lovable-uploads/2f869423-2de6-4dd1-902e-6dd3125a90ba.png" 
                  alt="Les Voix Du Choeur" 
                  className="h-8 w-auto sm:h-10 md:h-12 lg:h-14"
                />
              </Link>
              <h1 className="font-playfair font-bold leading-tight">
                <div className="text-choir-gold text-sm sm:text-base md:text-lg lg:text-xl">Les Voix</div>
                <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl">Du Choeur</div>
              </h1>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="text-choir-cream hover:text-choir-gold"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {isHomePage ? (
                <>
                  <NavLink href="#a_propos_du_choeur">À propos du chœur</NavLink>
                  <NavLink href="#ensemble">L'ensemble</NavLink>
                  <NavLink href="#videos">Nos vidéos</NavLink>
                  <NavLink href="#presse_et_medias">Presse et médias</NavLink>
                  <NavLink href="#nous_contacter">Nous contacter</NavLink>
                </>
              ) : (
                <>
                  <HomeNavLink to="/#a_propos_du_choeur">À propos du chœur</HomeNavLink>
                  <HomeNavLink to="/#ensemble">L'ensemble</HomeNavLink>
                  <HomeNavLink to="/#videos">Nos vidéos</HomeNavLink>
                  <HomeNavLink to="/#presse_et_medias">Presse et médias</HomeNavLink>
                  <HomeNavLink to="/#nous_contacter">Nous contacter</HomeNavLink>
                </>
              )}
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className={cn(
            "md:hidden",
            isMenuOpen ? "max-h-[350px] opacity-100 transition-all duration-300 ease-in-out" : "max-h-0 opacity-0 overflow-hidden transition-all duration-300 ease-in-out"
          )}>
            <div className="pt-4 pb-3 border-t border-gray-700 space-y-3">
              {isHomePage ? (
                <>
                  <MobileNavLink href="#a_propos_du_choeur" onClick={() => setIsMenuOpen(false)}>À propos du chœur</MobileNavLink>
                  <MobileNavLink href="#ensemble" onClick={() => setIsMenuOpen(false)}>L'ensemble</MobileNavLink>
                  <MobileNavLink href="#videos" onClick={() => setIsMenuOpen(false)}>Nos vidéos</MobileNavLink>
                  <MobileNavLink href="#presse_et_medias" onClick={() => setIsMenuOpen(false)}>Presse et médias</MobileNavLink>
                  <MobileNavLink href="#nous_contacter" onClick={() => setIsMenuOpen(false)}>Nous contacter</MobileNavLink>
                </>
              ) : (
                <>
                  <MobileHomeNavLink to="/#a_propos_du_choeur" onClick={() => setIsMenuOpen(false)}>À propos du chœur</MobileHomeNavLink>
                  <MobileHomeNavLink to="/#ensemble" onClick={() => setIsMenuOpen(false)}>L'ensemble</MobileHomeNavLink>
                  <MobileHomeNavLink to="/#videos" onClick={() => setIsMenuOpen(false)}>Nos vidéos</MobileHomeNavLink>
                  <MobileHomeNavLink to="/#presse_et_medias" onClick={() => setIsMenuOpen(false)}>Presse et médias</MobileHomeNavLink>
                  <MobileHomeNavLink to="/#nous_contacter" onClick={() => setIsMenuOpen(false)}>Nous contacter</MobileHomeNavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-choir-cream hover:text-choir-gold transition-colors duration-300 font-lato text-sm uppercase tracking-wider"
  >
    {children}
  </a>
);

const HomeNavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-choir-cream hover:text-choir-gold transition-colors duration-300 font-lato text-sm uppercase tracking-wider"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="block text-choir-cream hover:text-choir-gold transition-colors duration-300 font-lato text-sm uppercase tracking-wider px-2 py-1"
    onClick={onClick}
  >
    {children}
  </a>
);

const MobileHomeNavLink = ({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="block text-choir-cream hover:text-choir-gold transition-colors duration-300 font-lato text-sm uppercase tracking-wider px-2 py-1"
    onClick={onClick}
  >
    {children}
  </Link>
);

const SecondaryNavLink = ({ href, target, children }: { href: string; target?: string; children: React.ReactNode }) => (
  <a 
    href={href}
    target={target}
    className="text-choir-cream/80 hover:text-choir-gold transition-colors duration-300 font-lato text-xs uppercase tracking-wider"
  >
    {children}
  </a>
);

const SocialLink = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-choir-cream/80 hover:text-choir-gold transition-colors duration-300"
    aria-label={label}
  >
    {children}
  </a>
);

export default Navigation;
