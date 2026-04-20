import { servicesData } from '@/data/servicesData';

interface ServicesProps {
  onServiceClick: (index: number) => void;
}

const Services = ({ onServiceClick }: ServicesProps) => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            <span className="text-sm font-medium text-green-700">
              Nos Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Solutions Agricoles
            <span className="text-green-600"> Complètes</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nous offrons une gamme complète de services pour accompagner les
            agriculteurs et communautés rurales dans le développement de leurs
            projets agricoles.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              onClick={() => onServiceClick(index)}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden relative">
                <img
                  src={service.cover}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow">
                    Voir la galerie →
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <service.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
