import { Check, Target, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: Target,
      title: 'Développement Durable',
      description:
        'Promouvoir l\'agriculture durable et respectueuse de l\'environnement',
    },
    {
      icon: TrendingUp,
      title: 'Transformation Agroalimentaire',
      description:
        'Transformer les produits agricoles locaux pour créer de la valeur ajoutée',
    },
    {
      icon: Heart,
      title: 'Accompagnement Technique',
      description:
        'Soutenir les exploitants agricoles et communautés rurales pour améliorer leurs rendements',
    },
  ];

  const features = [
    'Entreprise agricole congolaise basée à Lubumbashi',
    'Plus de 10 ans d\'expertise dans le domaine agricole',
    'Vision ambitieuse de l\'agro-transformation',
    'Accompagnement personnalisé des fermiers',
    'Amélioration des rendements et du niveau de vie',
    'Couverture du Haut-Katanga et régions environnantes',
  ];

  return (
    <section id="about" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/about-image.jpg"
                alt="Agricultural expert"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white rounded-2xl p-6 shadow-xl">
              <div className="text-4xl font-bold">+10</div>
              <div className="text-sm text-green-100">Ans d'expérience</div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-50 -z-10" />
            <div className="absolute -bottom-8 left-1/4 w-16 h-16 bg-green-300 rounded-full opacity-30 -z-10" />
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-600 rounded-full" />
                <span className="text-sm font-medium text-green-700">
                  Qui Sommes-nous ?
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                ELVAGRI Production
                <br />
                <span className="text-green-600">and Consulting Sarl</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Une entreprise agricole congolaise basée à 
                Haut-Katanga, œuvrant pour le développement de l'agriculture
                durable, la transformation agroalimentaire, et l'accompagnement
                technique des exploitants agricoles et des communautés rurales.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Objectives Section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Nos Objectifs
            </h3>
            <p className="text-gray-600">
              L'entreprise œuvre dans le domaine agroalimentaire avec une grande
              vision de l'agro-transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <objective.icon className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {objective.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
