import { useState } from 'react';
import {
  ClipboardCheck,
  Carrot,
  Beef,
  Fish,
  Hexagon,
  Factory,
  Sprout,
  Droplets,
  ArrowLeft,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const categories = [
  {
    icon: ClipboardCheck,
    title: 'Études de Projets Agricoles',
    cover: '/farming.jpg',
    images: ['/farming.jpg'],
  },
  {
    icon: Carrot,
    title: 'Cultures Maraîchères & Vivrières',
    cover: '/cl1.JPG',
    images: ['/cl1.JPG', '/cl2.jpeg', '/cl3.jpeg'],
  },
  {
    icon: Beef,
    title: 'Élevage',
    cover: '/elv.JPG',
    images: ['/elv.JPG', '/elv1.jpeg', '/elv2.jpeg'],
  },
  {
    icon: Fish,
    title: 'Pisciculture',
    cover: '/ps1.JPG',
    images: ['/ps1.JPG', '/ps7.JPG', '/ps4.JPG', '/ps3.JPG', '/ps5.JPG', '/ps6.JPG', '/ps2.JPG'],
  },
  {
    icon: Hexagon,
    title: 'Apiculture',
    cover: '/apiculture.jpg',
    images: ['/apiculture.jpg'],
  },
  {
    icon: Factory,
    title: 'Transformation & Vente Bio',
    cover: '/tr.jpeg',
    images: ['/tr.jpeg', '/tr2.jpeg', '/tr3.jpeg'],
  },
  {
    icon: Sprout,
    title: 'Fourniture de Semences',
    cover: '/vegetables.jpg',
    images: ['/vegetables.jpg'],
  },
  {
    icon: Droplets,
    title: 'Engrais & Irrigation',
    cover: '/farming.jpg',
    images: ['/farming.jpg'],
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentImages = selectedCategory !== null ? categories[selectedCategory].images : [];

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + currentImages.length) % currentImages.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % currentImages.length);
  };

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── VUE CATÉGORIES ── */}
        {selectedCategory === null && (
          <>
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-600 rounded-full" />
                <span className="text-sm font-medium text-green-700">Galerie</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Nos Réalisations en
                <span className="text-green-600"> Images</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Cliquez sur une catégorie pour voir les photos correspondantes.
              </p>
            </div>

            {/* Grid de catégories */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={index}
                    onClick={() => setSelectedCategory(index)}
                    className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image de couverture */}
                    <div className="h-52 overflow-hidden">
                      <img
                        src={cat.cover}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Contenu */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-white font-bold text-sm leading-tight">
                          {cat.title}
                        </h3>
                      </div>
                      <p className="text-white/70 text-xs ml-10">
                        {cat.images.length} photo{cat.images.length > 1 ? 's' : ''}
                      </p>
                    </div>

                    {/* Hover badge */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                        Voir →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* ── VUE PHOTOS D'UNE CATÉGORIE ── */}
        {selectedCategory !== null && (
          <>
            {/* Header avec retour */}
            <div className="mb-10">
              <button
                type="button"
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-6 group transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Retour à la galerie
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  {(() => {
                    const Icon = categories[selectedCategory].icon;
                    return <Icon className="w-6 h-6 text-green-600" />;
                  })()}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {categories[selectedCategory].title}
                  </h2>
                  <p className="text-gray-500 text-sm mt-0.5">
                    {currentImages.length} photo{currentImages.length > 1 ? 's' : ''}
                  </p>
                </div>
              </div>
            </div>

            {/* Grille de photos */}
            <div
              className={`grid gap-5 ${
                currentImages.length === 1
                  ? 'grid-cols-1 max-w-2xl mx-auto'
                  : currentImages.length === 2
                  ? 'grid-cols-2 max-w-3xl mx-auto'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {currentImages.map((src, i) => (
                <div
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={src}
                    alt={`${categories[selectedCategory].title} ${i + 1}`}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">
                      Agrandir
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Fermer */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Précédent */}
          {currentImages.length > 1 && (
            <button
              type="button"
              title="Image précédente"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          )}

          {/* Image */}
          <img
            src={currentImages[lightboxIndex]}
            alt=""
            className="max-h-[88vh] max-w-full object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Suivant */}
          {currentImages.length > 1 && (
            <button
              type="button"
              title="Image suivante"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          )}

          {/* Compteur */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {currentImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
