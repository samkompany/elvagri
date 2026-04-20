import { Handshake } from 'lucide-react';

const Partners = () => {
  const partners = [
    { name: 'Agri-Afric Consult' },
    { name: 'Sud-Ouest Développement (SOD)' },
    { name: 'Fraternité' },
  ];

  return (
    <section id="partenaires" className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            <span className="text-sm font-medium text-green-700">
              Nos Partenaires
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Partenaires de
            <span className="text-green-600"> Référence</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nous collaborons avec des organisations de confiance pour maximiser
            l'impact de nos actions et offrir les meilleures solutions à nos
            clients.
          </p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 bg-white rounded-2xl px-10 py-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                <Handshake className="w-8 h-8 text-green-600" />
              </div>
              <span className="text-gray-800 font-semibold text-center text-sm">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
