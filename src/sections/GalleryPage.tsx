import { useState, useEffect } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { servicesData } from '@/data/servicesData';

interface GalleryPageProps {
  serviceIndex: number;
  onClose: () => void;
  onNavigate?: (index: number) => void;
}

const GalleryPage = ({ serviceIndex, onClose, onNavigate }: GalleryPageProps) => {
  const service = servicesData[serviceIndex];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Bloquer le scroll de la page en dessous
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Fermer avec Echap
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) setLightboxIndex(null);
        else onClose();
      }
      if (e.key === 'ArrowLeft' && lightboxIndex !== null) prev();
      if (e.key === 'ArrowRight' && lightboxIndex !== null) next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + service.images.length) % service.images.length);
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % service.images.length);
  };

  const Icon = service.icon;

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto">

      {/* ── HEADER ── */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium group transition-colors"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Retour aux services</span>
          </button>

          <div className="h-6 w-px bg-gray-200" />

          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-green-600" />
            </div>
            <h1 className="text-base sm:text-lg font-bold text-gray-900 truncate">
              {service.title}
            </h1>
          </div>

          <div className="flex items-center gap-1.5 text-gray-400 text-sm flex-shrink-0">
            <Images className="w-4 h-4" />
            <span>{service.images.length} photo{service.images.length > 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>

      {/* ── CONTENU ── */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">

        {/* Description */}
        <div className="mb-10 max-w-2xl">
          <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
        </div>

        {/* Grille de photos */}
        <div
          className={`grid gap-5 ${
            service.images.length === 1
              ? 'grid-cols-1 max-w-2xl'
              : service.images.length === 2
              ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {service.images.map((src, i) => (
            <div
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={src}
                alt={`${service.title} — photo ${i + 1}`}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">
                  Agrandir
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation entre services */}
        <div className="mt-16 pt-10 border-t border-gray-100">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            Autres services
          </p>
          <div className="flex flex-wrap gap-3">
            {servicesData.map((s, i) => {
              if (i === serviceIndex) return null;
              const SIcon = s.icon;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => { setLightboxIndex(null); onNavigate?.(i); }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-green-400 hover:text-green-600 transition-colors bg-white"
                >
                  <SIcon className="w-4 h-4" />
                  {s.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/93 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            title="Fermer"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {service.images.length > 1 && (
            <button
              type="button"
              title="Image précédente"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
          )}

          <img
            src={service.images[lightboxIndex]}
            alt=""
            className="max-h-[88vh] max-w-full object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {service.images.length > 1 && (
            <button
              type="button"
              title="Image suivante"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {service.images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
