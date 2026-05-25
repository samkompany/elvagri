import {
  ClipboardList,
  Users,
  GraduationCap,
  Fish,
  Hexagon,
  Recycle,
  TrendingUp,
  ShoppingCart,
  TreePine,
  Package,
  Stethoscope,
  Hammer,
  ShoppingBag,
  Store
} from 'lucide-react';

const Domaines = () => {
  const domaines = [
    {
      icon: ClipboardList,
      title: 'Études et Gestion de Projets',
      description:
        'Études et gestion de projets agricoles et environnementaux avec suivi-évaluation complet.',
    },
    {
      icon: Users,
      title: 'Projets Communautaires',
      description:
        'Conception et exécution de projets communautaires pour l\'autonomisation rurale.',
    },
    {
      icon: GraduationCap,
      title: 'Formation Agriculture',
      description:
        'Formation en agriculture maraîchère, vivrière, fruitière et oléagineuse.',
    },
    {
      icon: Stethoscope,
      title: 'Formation Élevage',
      description:
        'Formation en élevage : porc, volailles, lapins, caprins et autres animaux.',
    },
    {
      icon: Fish,
      title: 'Formation Pisciculture',
      description:
        'Formation complète en pisciculture : étangs, alimentation, alevins.',
    },
    {
      icon: Hammer,
      title: 'Construction des Étangs',
      description:
        'Conception et construction d\'étangs piscicoles adaptés à votre terrain et à vos besoins de production.',
    },
    {
      icon: ShoppingBag,
      title: 'Vente d\'Alevins',
      description:
        'Fourniture d\'alevins de qualité pour le démarrage et le renouvellement de vos élevages piscicoles.',
    },
    {
      icon: Store,
      title: 'Vente de Poisson Frais',
      description:
        'Commercialisation de poisson frais issu de nos étangs piscicoles, disponible pour les particuliers et les revendeurs.',
    },
    {
      icon: Hexagon,
      title: 'Formation Apiculture',
      description:
        'Formation en apiculture : production de miel et professionnalisation.',
    },
    {
      icon: Recycle,
      title: 'Gestion des Déchets',
      description:
        'Gestion des déchets organiques et compostage pour une agriculture durable.',
    },
    {
      icon: TrendingUp,
      title: 'Suivi-Évaluation',
      description:
        'Suivi-évaluation des projets agricoles pour optimiser les résultats.',
    },
    {
      icon: ShoppingCart,
      title: 'Transformation & Commercialisation',
      description:
        'Transformation et commercialisation des produits agricoles locaux.',
    },
    {
      icon: Package,
      title: 'Vente de Légumes',
      description:
        'Vente de légumes frais et sain tomates, choux, oignons, etc.',
    },
    {
      icon: TreePine,
      title: 'Plantules & Arbres Fruitiers',
      description:
        'Vente de plantules et mise en terre d\'arbres fruitiers.',
    },
    {
      icon: Package,
      title: 'Intrants Agricoles',
      description:
        'Vente de semences, engrais et matériels d\'irrigation. Facilitation d\'accès aux vente d\'animaux d\'élevage et intrants vétérinaires.',
    },
  ];

  return (
    <section id="domaines" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            <span className="text-sm font-medium text-green-700">
              Nos Domaines d'Intervention
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Une Expertise
            <span className="text-green-600"> Complète</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nous intervenons dans tous les aspects de l'agriculture moderne, de
            la formation à la commercialisation, pour un développement agricole
            intégré et durable.
          </p>
        </div>

        {/* Domaines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {domaines.map((domaine, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-200"
            >
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                <domaine.icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                {domaine.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {domaine.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domaines;
