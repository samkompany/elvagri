import {
  ClipboardCheck,
  Carrot,
  Beef,
  Fish,
  Hexagon,
  Factory,
  Sprout,
  Droplets,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  cover: string;
  images: string[];
}

export const servicesData: ServiceItem[] = [
  {
    icon: ClipboardCheck,
    title: 'Études de Projets Agricoles',
    description:
      'Analyse complète et étude de faisabilité pour vos projets agricoles avec des recommandations personnalisées.',
    cover: '/farming.jpg',
    images: ['/farming.jpg'],
  },
  {
    icon: Carrot,
    title: 'Cultures Maraîchères & Vivrières',
    description:
      'Accompagnement dans la production de légumes, céréales et cultures vivrières pour une alimentation durable.',
    cover: '/cl1.JPG',
    images: ['/cl1.JPG', '/cl2.jpeg', '/cl3.jpeg'],
  },
  {
    icon: Beef,
    title: 'Élevage',
    description:
      'Expertise en élevage de porcs, poulets, chèvres et autres animaux avec des techniques modernes et durables.',
    cover: '/elv.JPG',
    images: ['/elv.JPG', '/elv1.jpeg', '/elv2.jpeg'],
  },
  {
    icon: Fish,
    title: 'Pisciculture',
    description:
      'Mise en place et gestion d\'étangs piscicoles, formation à l\'alimentation et au suivi des alevins.',
    cover: '/ps1.JPG',
    images: ['/ps1.JPG', '/ps2.JPG'],
  },
  {
    icon: Hexagon,
    title: 'Apiculture',
    description:
      'Formation complète à la production de miel et professionnalisation de l\'apiculture locale.',
    cover: '/apiculture.jpg',
    images: ['/apiculture.jpg'],
  },
  {
    icon: Factory,
    title: 'Transformation & Vente Bio',
    description:
      'Transformation et commercialisation de produits agricoles biologiques de haute qualité.',
    cover: '/tr.jpeg',
    images: ['/tr.jpeg', '/tr2.jpeg', '/tr3.jpeg'],
  },
  {
    icon: Sprout,
    title: 'Fourniture de Semences',
    description:
      'Vente de semences certifiées, plantules et arbres fruitiers adaptés au climat local.',
    cover: '/vegetables.jpg',
    images: ['/vegetables.jpg'],
  },
  {
    icon: Droplets,
    title: 'Engrais & Irrigation',
    description:
      'Fourniture d\'engrais bio et matériels d\'irrigation modernes pour optimiser vos rendements.',
    cover: '/farming.jpg',
    images: ['/farming.jpg'],
  },
];
