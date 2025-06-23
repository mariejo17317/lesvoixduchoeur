import React from 'react';

const AboutSection = () => {
  return (
    <section id="a_propos_du_choeur" className="py-20 bg-gradient-to-b from-choir-navy to-choir-blue/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-choir-gold text-center mb-12 font-semibold">À propos du choeur</h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <p className="text-choir-cream font-lato mb-6 leading-relaxed">
                La Petite Histoire... <span className="text-choir-gold"></span> </p>
            <p className="text-choir-cream font-lato mb-6 leading-relaxed">Ce groupe, fondé en 2007, est né du désir de Gilles Proulx et de Diane Boudreau de créer un groupe avec une couleur différente et un son plus actuel. C'est ainsi, en janvier 2008, après une période de recrutement que le groupe a vraiment pris son envol.
Gilles Proulx a débuté l'étude du piano à l'âge de 6 ans et on lui reconnaît alors une oreille presque absolue.  Sa professeure de piano, madame Odette Lebel, s'amusait à l'appeler "son p'tit Mozart".  Par la suite, il a chanté quelques années dans la chorale de son église le dimanche, pour ensuite en devenir l'organiste à temps plein, et ce, de 12 à 22 ans approximativement.
              </p>
              <p className="text-choir-cream font-lato mb-6 leading-relaxed">
                Le goût pour la musique ne cesse de grandir et l'envie de vivre d'autres expériences musicales était toujours présente et importante dans sa vie. C'est ainsi qu'en 1986, il fait ses débuts, à titre de choriste, au sein du Chœur de Daveluy de Victoriaville.   Ensuite, il a le goût d'avoir sa propre chorale. Il implique, dans ce projet, les gens de son patelin et il fonde le Chœur de Chez Nous à St-Félix-de-Kingsey, chorale qu'il a dirigée de 1988 à 1998. Entre-temps, il met sur pied, à Drummondville, un autre groupe vocal, le groupe ArtZimut qu'il dirige de 1996 à 2007 : le voilà donc à la tête de deux groupes vocaux.
              </p>
              <p className="text-choir-cream font-lato leading-relaxed">
                Aujourd'hui, il est revenu aux sources avec Les Voix du Chœur qu'il espère diriger pour plusieurs années encore car il y a retrouvé le goût et le plaisir, non seulement de diriger, mais aussi... de chanter. 
              </p>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img alt="Choir performing" src="/lovable-uploads/37b7b95f-606f-43f9-8f65-13bb3863ebbd.png" className="w-full h-full object-contain" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-choir-gold rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard title="Excellence Musicale" description="Nous travaillons avec tout notre coeur pour offrir des spectacles de haute qualité avec des pièces magnifiquement harmonisées. " />
            <FeatureCard title="Répertoire Diverse" description="De la musique populaire aux rythmes africains,en passant par le disco et le gospel, nous offrons une diversité sans limite à notre auditoire." />
            <FeatureCard title="Passion et Plaisir" description="Ce qui nous réunit, c'est la passion du chant, le plaisir de partager la musique tous ensemble" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-choir-blue/30 rounded-lg p-6 border border-choir-gold/20">
      <h3 className="font-playfair text-xl text-choir-gold mb-4">{title}</h3>
      <p className="text-choir-cream/90 font-lato leading-relaxed">{description}</p>
    </div>
  );
};

export default AboutSection;
