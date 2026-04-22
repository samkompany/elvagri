import { ArrowRight, ChevronDown, Award, Users, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Award, value: '+10', label: 'Ans d\'expertise' },
    { icon: Users, value: '500+', label: 'Clients satisfaits' },
    { icon: Sprout, value: '1000+', label: 'Projets réalisés' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Agricultural landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-300">
                Elvagri production and consulting sarl
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">+10 Ans</span>
              <br />
              <span className="text-green-400">d'Expertise</span>
              <br />
              <span className="text-white">Agricole</span>
            </h1>

            <p className="text-lg text-white/80 max-w-xl leading-relaxed">
              ELVAGRI Production and Consulting Sarl accompagne les fermiers et
              communautés rurales du Haut-Katanga pour le développement de
              l'agriculture durable et la transformation agroalimentaire.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('#services')}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-base group"
              >
                Découvrir nos services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                variant="outline"
                className="border-white/60 text-white bg-white/10 hover:bg-white/20 px-8 py-6 text-base"
              >
                Nous contacter
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="hidden lg:grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="lg:hidden grid grid-cols-3 gap-4 mt-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center"
            >
              <div className="text-xl font-bold text-white">{stat.value}</div>
              <div className="text-white/70 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#services')}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
