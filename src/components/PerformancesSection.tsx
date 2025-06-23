import React from 'react';
import { cn } from "@/lib/utils";

type PressArticle = {
  date: string;
  title: string;
  publication: string;
  excerpt: string;
  url: string;
  featured: boolean;
};

const pressArticles: PressArticle[] = [
  {
    date: "19 octobre 2023",
    title: "Un grand retour pour la chorale Les Voix du Chœur",
    publication: "Journal Express",
    excerpt: "Après une pause forcée, la chorale Les Voix du Chœur fait son grand retour sur scène avec un répertoire renouvelé et une énergie débordante.",
    url: "https://www.journalexpress.ca/2023/10/19/un-grand-retour-pour-la-chorale-les-voix-du-choeur/",
    featured: true
  },
  {
    date: "2023",
    title: "L'amour a pris son temps",
    publication: "Arts et Culture",
    excerpt: "Les Voix du Chœur nous transportent avec leur interprétation touchante de ce classique, démontrant une fois de plus leur talent exceptionnel.",
    url: "https://artsetculture.ca/les-voix-du-choeur-lamour-a-pris-son-temps/",
    featured: false
  },
  {
    date: "2023",
    title: "La chorale pop Les Voix du Chœur de Drummondville entrent en période de recrutement",
    publication: "Vingt55",
    excerpt: "La chorale drummondvilloise ouvre ses portes à de nouveaux membres pour enrichir son ensemble vocal et continuer à faire vibrer la région.",
    url: "https://vingt55.ca/la-chorale-pop-les-voix-du-choeur-de-drummondville-entrent-en-periode-de-recrutement/",
    featured: false
  },
  {
    date: "2023",
    title: "Métamorphose : Les Voix du Chœur ont 15 ans",
    publication: "Arts et Culture",
    excerpt: "Un anniversaire marquant pour la chorale qui célèbre 15 années d'existence avec un concert spécial mettant en valeur leur évolution artistique.",
    url: "https://artsetculture.ca/metamorphose-les-voix-du-choeur-ont-15-ans/",
    featured: false
  }
];

const PerformancesSection = () => {
  return (
    <section id="presse_et_medias" className="py-20 bg-gradient-to-b from-choir-blue/90 to-choir-navy">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-choir-gold text-center mb-12 font-semibold">
            On parle de nous
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {pressArticles.map((article, index) => (
              <PressArticleCard key={index} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PressArticleCard = ({
  article
}: {
  article: PressArticle;
}) => {
  return (
    <div className={cn("rounded-lg overflow-hidden h-full flex flex-col", article.featured ? "bg-gradient-to-r from-choir-gold/20 to-choir-navy border border-choir-gold/30" : "bg-choir-blue/20 border border-choir-blue/20")}>
      <div className="p-4 flex flex-col h-full">
        <div className="text-center mb-4">
          <span className="block text-choir-cream/70 text-sm font-lato">{article.date}</span>
          <span className="block text-choir-gold font-playfair text-base mt-1">{article.publication}</span>
        </div>
        
        <div className="flex-1 flex flex-col">
          <h3 className={cn("font-playfair text-lg mb-3", article.featured ? "text-choir-gold" : "text-choir-cream")}>{article.title}</h3>
          <p className="text-choir-cream/90 font-lato text-sm leading-relaxed flex-1">
            {article.excerpt}
          </p>
        </div>
        
        <div className="text-center mt-4">
          <a href={article.url} target="_blank" rel="noopener noreferrer" className={cn("inline-block px-4 py-2 rounded transition-all duration-300 font-lato text-sm", article.featured ? "bg-choir-gold text-choir-navy hover:bg-choir-gold/90" : "border border-choir-cream/40 text-choir-cream hover:border-choir-gold/60 hover:text-choir-gold")}>
            Lire l'article
          </a>
        </div>
      </div>
    </div>
  );
};

export default PerformancesSection;
