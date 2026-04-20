import { 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  Building2, 
  Receipt,
  Send,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+243 893 320 135',
      href: 'tel:+243893320135',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'elvagriproconsult@gmail.com',
      href: 'mailto:elvagriproconsult@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value:
        'Route LUBUMBASHI, Quartier Joli site, Commune de SHITURU, Ville de Likasi, Province du Haut-Katanga',
      href: '#',
    },
  ];

  const legalInfo = [
    { icon: FileText, label: 'RCCM', value: 'CD/LSH/RCCM/22-B-02130' },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            <span className="text-sm font-medium text-green-700">
              Contactez-nous
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Parlons de Votre
            <span className="text-green-600"> Projet Agricole</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Prêt à développer votre projet agricole ? Contactez-nous dès
            maintenant pour un accompagnement personnalisé.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-green-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <Input
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-white border-gray-200 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-white border-gray-200 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <Input
                    type="tel"
                    placeholder="+243..."
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-white border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <Input
                    type="text"
                    placeholder="Sujet de votre message"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="bg-white border-gray-200 focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Décrivez votre projet ou votre demande..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-white border-gray-200 focus:border-green-500 focus:ring-green-500 min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <Send className="w-5 h-5 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                      <info.icon className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        {info.label}
                      </div>
                      <div className="text-gray-900 font-medium group-hover:text-green-600 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Legal Info */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Informations légales
              </h4>
              <div className="space-y-4">
                {legalInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <info.icon className="w-5 h-5 text-green-600" />
                    <div>
                      <span className="text-sm text-gray-500">
                        {info.label}:{' '}
                      </span>
                      <span className="text-gray-900 font-medium">
                        {info.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-green-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6" />
                <h4 className="text-lg font-bold">Heures de travail</h4>
              </div>
              <div className="space-y-2 text-green-100">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>08:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>08:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
