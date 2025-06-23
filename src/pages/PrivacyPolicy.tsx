import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-choir-navy text-choir-cream font-lato">
      <div className="pt-24">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-playfair font-bold text-choir-gold mb-8">
              Politique de confidentialité
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <p className="text-lg mb-6">
                  <strong>Dernière mise à jour :</strong> 10 juin 2025
                </p>
                
                <p>
                  Les Voix Du Choeur s'engage à protéger votre vie privée et vos renseignements personnels 
                  conformément aux lois applicables du Québec, notamment la Loi sur la protection des 
                  renseignements personnels dans le secteur privé (LPRPSP) et la Loi 25.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  1. Responsable du traitement
                </h2>
                <p>
                  Les Voix Du Choeur<br />
                  Drummondville, Québec, Canada<br />
                  Courriel : lesvoixduchoeur@outlook.com
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  2. Renseignements collectés
                </h2>
                <p>Nous collectons les renseignements suivants :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Renseignements d'identification :</strong> nom, prénom, adresse courriel</li>
                  <li><strong>Renseignements de contact :</strong> numéro de téléphone, adresse postale</li>
                  <li><strong>Renseignements relatifs aux auditions :</strong> tessiture vocale, expérience musicale</li>
                  <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  3. Finalités de la collecte
                </h2>
                <p>Vos renseignements personnels sont utilisés pour :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gérer les demandes d'audition et de participation</li>
                  <li>Communiquer avec les membres et les candidats</li>
                  <li>Organiser et promouvoir nos spectacles</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  4. Fondement juridique
                </h2>
                <p>
                  Le traitement de vos données est fondé sur votre consentement explicite ou sur 
                  l'exécution d'un contrat ou de mesures précontractuelles prises à votre demande.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  5. Communication et divulgation
                </h2>
                <p>
                  Nous ne vendons, ne louons ni ne divulguons vos renseignements personnels à des tiers, 
                  sauf dans les cas suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour se conformer à une obligation légale</li>
                  <li>À nos prestataires de services (sous contrat de confidentialité)</li>
                  <li>En cas de restructuration organisationnelle</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  6. Conservation des données
                </h2>
                <p>
                  Nous conservons vos renseignements personnels uniquement le temps nécessaire aux 
                  fins pour lesquelles ils ont été collectés, ou selon les exigences légales applicables.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  7. Sécurité
                </h2>
                <p>
                  Nous mettons en place des mesures de sécurité appropriées pour protéger vos 
                  renseignements personnels contre tout accès, utilisation, modification ou 
                  divulgation non autorisés.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  8. Vos droits
                </h2>
                <p>
                  Conformément à la législation québécoise, vous avez le droit de :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Demander l'accès à vos renseignements personnels</li>
                  <li>Demander la correction de renseignements inexacts</li>
                  <li>Retirer votre consentement</li>
                  <li>Demander la suppression de vos données (sous certaines conditions)</li>
                  <li>Porter plainte auprès de la Commission d'accès à l'information du Québec</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  9. Témoins (cookies)
                </h2>
                <p>
                  Notre site web utilise des témoins pour améliorer votre expérience de navigation. 
                  Vous pouvez configurer votre navigateur pour refuser les témoins, mais cela pourrait 
                  affecter certaines fonctionnalités du site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  10. Modifications
                </h2>
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité en tout temps. 
                  Les modifications seront publiées sur cette page avec la date de mise à jour.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-playfair font-semibold text-choir-gold mb-4">
                  11. Contact
                </h2>
                <p>
                  Pour toute question concernant cette politique de confidentialité ou pour exercer 
                  vos droits, contactez-nous à :
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

export default PrivacyPolicy;
