import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-choir-navy text-choir-cream font-lato">
      <div className="pt-24">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-playfair font-bold text-choir-gold mb-8">
              Conditions d'utilisation
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <p className="text-lg mb-6">
                  <strong>Dernière mise à jour :</strong> 10 juin 2025
                </p>
                
                <p>
                  En accédant et en utilisant le site web de Les Voix Du Choeur, vous acceptez 
                  d'être lié par les présentes conditions d'utilisation. Ces conditions sont 
                  régies par les lois du Québec et du Canada.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  1. Définitions
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>"Site"</strong> : le site web de Les Voix Du Choeur</li>
                  <li><strong>"Utilisateur"</strong> : toute personne accédant au Site</li>
                  <li><strong>"Ensemble"</strong> : Les Voix Du Choeur</li>
                  <li><strong>"Services"</strong> : tous les services offerts par l'Ensemble</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  2. Acceptation des conditions
                </h2>
                <p>
                  L'utilisation de ce Site constitue votre acceptation des présentes conditions. 
                  Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  3. Utilisation du site
                </h2>
                <p>Vous vous engagez à :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Utiliser le Site de manière légale et respectueuse</li>
                  <li>Ne pas porter atteinte aux droits d'autrui</li>
                  <li>Fournir des informations exactes et à jour</li>
                  <li>Respecter la propriété intellectuelle</li>
                  <li>Ne pas utiliser le Site à des fins commerciales non autorisées</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  4. Propriété intellectuelle
                </h2>
                <p>
                  Tous les contenus du Site (textes, images, vidéos, musiques, logos, etc.) sont 
                  protégés par les lois sur le droit d'auteur et autres droits de propriété 
                  intellectuelle. Ils appartiennent à Les Voix Du Choeur ou à ses partenaires.
                </p>
                <p>
                  Toute reproduction, distribution, modification ou utilisation commerciale 
                  non autorisée est strictement interdite.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  5. Contenu généré par les utilisateurs
                </h2>
                <p>
                  En soumettant du contenu (commentaires, photos, etc.), vous accordez à 
                  Les Voix Du Choeur une licence non exclusive pour utiliser, reproduire et 
                  diffuser ce contenu dans le cadre de ses activités.
                </p>
                <p>
                  Vous garantissez que votre contenu ne viole aucun droit de tiers et 
                  respecte les lois applicables.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  6. Auditions et participation
                </h2>
                <p>
                  Les demandes d'audition sont soumises à l'approbation de la direction musicale. 
                  L'Ensemble se réserve le droit d'accepter ou de refuser toute candidature 
                  selon ses critères artistiques.
                </p>
                <p>
                  La participation aux activités de l'Ensemble implique le respect du 
                  règlement intérieur et des directives de la direction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  7. Spectacles et événements
                </h2>
                <p>
                  Les informations sur les spectacles sont données à titre indicatif. 
                  L'Ensemble se réserve le droit de modifier les dates, lieux ou programmes 
                  pour des raisons indépendantes de sa volonté.
                </p>
                <p>
                  Les billets vendus sont soumis aux conditions générales de vente 
                  des organisateurs ou des salles de spectacle.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  8. Limitation de responsabilité
                </h2>
                <p>
                  Dans les limites permises par la loi, Les Voix Du Choeur ne saurait être 
                  tenu responsable de :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dommages directs ou indirects résultant de l'utilisation du Site</li>
                  <li>Interruptions temporaires du Site</li>
                  <li>Erreurs ou omissions dans le contenu</li>
                  <li>Actions de tiers utilisant le Site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  9. Protection des données personnelles
                </h2>
                <p>
                  La collecte et le traitement de vos données personnelles sont régis par 
                  notre Politique de confidentialité, disponible sur le Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  10. Liens externes
                </h2>
                <p>
                  Le Site peut contenir des liens vers des sites tiers. Nous ne sommes pas 
                  responsables du contenu ou des pratiques de ces sites externes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  11. Modification des conditions
                </h2>
                <p>
                  Ces conditions peuvent être modifiées en tout temps. Les modifications 
                  prennent effet dès leur publication sur le Site. Il est de votre 
                  responsabilité de consulter régulièrement ces conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  12. Droit applicable et juridiction
                </h2>
                <p>
                  Ces conditions sont régies par les lois du Québec et du Canada. 
                  Tout litige sera soumis à la juridiction exclusive des tribunaux 
                  compétents du Québec.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  13. Résiliation
                </h2>
                <p>
                  Nous nous réservons le droit de suspendre ou de résilier l'accès au Site 
                  en cas de violation de ces conditions, sans préavis et sans indemnité.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  14. Contact
                </h2>
                <p>
                  Pour toute question concernant ces conditions d'utilisation, 
                  contactez-nous à :
                </p>
                <p>
                  <strong>Courriel :</strong> lesvoixduchoeur@outlook.com<br />
                  <strong>Adresse :</strong> Drummondville, Québec, Canada
                </p>
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default TermsOfService;
