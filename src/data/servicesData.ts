import {
  ClipboardCheck,
  Carrot,
  Beef,
  Fish,
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
      'Accompagnement dans la production de légumes et cultures vivrières pour une alimentation saine est durable.',
    cover: '/cl1.JPG',
    images: ['/cl1.JPG', '/cl2.jpeg', '/cl3.jpeg'],
  },
  {
    icon: Beef,
    title: 'Élevage',
    description:
      'Spécialisés dans l\'élevage de poulets : poule saso (locale), poulet de chair et pondeuses. Également présents dans l\'élevage de porcs, chèvres et autres animaux avec des techniques modernes et durables.',
    cover: '/elv.JPG',
    images: ['/elv.JPG', '/elv1.jpeg', '/elv2.jpeg'],
  },
  {
    icon: Fish,
    title: 'Pisciculture',
    description:
      'Aménagement de sites piscicoles (construction d\'étangs en terre, d\'étangs hors-sol avec géomembrane, élevage en tanks), vente d\'aliments pour poissons, vente d\'alevins et de poissons frais, et formation pratique en pisciculture',
    cover: '/ps1.JPG',
    images: ['/ps1.JPG', '/ps2.JPG'],
  },
  {
    icon: Sprout,
    title: 'Fourniture de Semences',
    description:
      'Fourniture et vente de semences certifiées de qualité, d\'engrais spécifiques (chimiques et biologiques), ainsi que la vente d\'arbres fruitiers adaptés au climat local',
    cover: '/vegetables.jpg',
    images: ['/vegetables.jpg'],
  },
  {
    icon: Droplets,
    title: 'Irrigation',
    description:
      'Fourniture de matériel d\'irrigation (motopompes diesel et à essence, tuyaux d\'aspiration et de refoulement avec accessoires, systèmes de goutte-à-goutte avec accessoires) et installation de systèmes d\'irrigation',
    cover: '/farming.jpg',
    images: ['/farming.jpg'],
  },
];
