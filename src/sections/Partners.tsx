const partners = [
  { name: 'Enabel', logo: '/partenaire/Enabel_Logo_.png' },
  { name: 'Secteur de Luilu', logo: '/partenaire/SECTEUR-DE-LUILU.svg' },
  { name: 'Agro Volailles', logo: '/partenaire/agro_volailles.png' },
  { name: 'APEFE', logo: '/partenaire/logoAPEFE.png' },
  { name: 'AgriAfrique', logo: '/partenaire/logo_agriAFRIQUE.png' },
  { name: 'Luba', logo: '/partenaire/logo_luba .jpg' },
];

const Partners = () => {
  return (
    <section id="partenaires" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            <span className="text-sm font-medium text-green-700">Nos Partenaires</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Ils nous font <span className="text-green-600">confiance</span>
          </h2>
        </div>

        {/* Logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
