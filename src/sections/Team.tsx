import { UserCheck, Sprout, Leaf, TrendingUp, Truck } from 'lucide-react';

const Team = () => {
  const teamCategories = [
    {
      icon: Sprout,
      title: 'Ingénieurs Agroéconomistes',
      description:
        'Experts en agroéconomie, phytotechniciens et zootechniciens pour des solutions techniques avancées.',
    },
    {
      icon: Leaf,
      title: 'Environnementalistes',
      description:
        'Spécialistes de l\'environnement et agronomes pour une agriculture durable et responsable.',
    },
    {
      icon: TrendingUp,
      title: 'Développeurs Start-up',
      description:
        'Experts en développement de start-up agrobusiness pour l\'innovation agricole.',
    },
    {
      icon: Truck,
      title: 'Logistique Agricole',
      description:
        'Professionnels de la logistique pour optimiser la chaîne d\'approvisionnement agricole.',
    },
  ];

  return (
    <section id="equipe" className="py-24 bg-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-800 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="text-sm font-medium text-green-300">
              Notre Équipe
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Une Équipe
            <span className="text-green-400"> Pluridisciplinaire</span>
          </h2>
          <p className="text-green-100 text-lg leading-relaxed">
            Notre équipe expérimentée cumule plus de 10 ans d'expertise dans le
            domaine agricole, avec des profils variés pour répondre à tous vos
            besoins.
          </p>
        </div>

        {/* Experience Banner */}
        <div className="bg-green-800 rounded-3xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-white">+10 Ans</div>
                <div className="text-green-300">d'expertise cumulée</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-green-700" />
            <div className="text-green-100 max-w-md text-left">
              Une équipe passionnée et dévouée à l'autonomisation des
              agriculteurs congolais et au développement de l'agriculture
              durable.
            </div>
          </div>
        </div>

        {/* Team Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamCategories.map((category, index) => (
            <div
              key={index}
              className="bg-green-800/50 backdrop-blur-sm rounded-2xl p-6 border border-green-700 hover:bg-green-800 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {category.title}
              </h3>
              <p className="text-green-200 text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
