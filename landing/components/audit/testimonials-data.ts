export type Testimonial = {
  name: string;
  role: string;
  organism: string;
  avatar: string;
  color: 'green' | 'blue' | 'orange' | 'purple' | 'pink' | 'teal';
  quote: string;
  metric: { num: string; label: string };
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Camille Lambert',
    role: 'Directrice',
    organism: 'Académie Pro',
    avatar: 'CL',
    color: 'green',
    quote:
      "Avant beTool, on perdait deux jours par mois à courir après les signatures. Aujourd'hui, on absorbe 200 stagiaires sans recruter.",
    metric: { num: '+200', label: 'stagiaires absorbés' },
  },
  {
    name: 'Julien Marchand',
    role: 'Gérant',
    organism: 'FormaPlus',
    avatar: 'JM',
    color: 'blue',
    quote:
      "L'audit Qualiopi a duré 4h au lieu d'une journée. L'auditeur n'a posé aucune question sur la conformité — uniquement sur la pédagogie.",
    metric: { num: '4h', label: "d'audit, zéro non-conformité" },
  },
  {
    name: 'Sophie Renaud',
    role: 'Directrice pédagogique',
    organism: 'CFC Paris',
    avatar: 'SR',
    color: 'orange',
    quote:
      'On a divisé par trois le temps administratif. Mes formateurs forment, ils ne remplissent plus de tableaux Excel.',
    metric: { num: '÷3', label: 'temps admin' },
  },
  {
    name: 'Karim Belkacem',
    role: 'Fondateur',
    organism: 'Tech Académie',
    avatar: 'KB',
    color: 'purple',
    quote:
      "La synchro EDOF nous fait gagner 6 heures par semaine. Plus jamais de double saisie. C'est une renaissance pour mon équipe.",
    metric: { num: '6h/sem', label: 'économisées' },
  },
  {
    name: 'Élodie Guérin',
    role: 'Responsable qualité',
    organism: 'Formation Plus',
    avatar: 'EG',
    color: 'pink',
    quote:
      "L'équipe support répond en moins d'une heure. C'est un changement de culture par rapport à nos anciens outils.",
    metric: { num: '<1h', label: 'réponse support' },
  },
  {
    name: 'Marc Dubois',
    role: 'Gérant',
    organism: 'Centre Excellence',
    avatar: 'MD',
    color: 'teal',
    quote:
      "Renouvellement Qualiopi sans la moindre non-conformité. Tout était traçable, archivé, prêt — l'audit est devenu une formalité.",
    metric: { num: '0', label: 'non-conformité' },
  },
  {
    name: 'Léa Boucher',
    role: 'Coordinatrice',
    organism: 'École des Pros',
    avatar: 'LB',
    color: 'orange',
    quote:
      'Les stagiaires signent en 30 secondes depuis leur téléphone. Plus de papier, plus de scans, plus de stress en fin de session.',
    metric: { num: '30s', label: 'pour signer' },
  },
  {
    name: 'Antoine Mercier',
    role: 'Directeur',
    organism: 'Institut Numérique',
    avatar: 'AM',
    color: 'blue',
    quote:
      "On encaisse les financements deux semaines plus tôt qu'avant. La trésorerie respire enfin et on peut investir dans le contenu.",
    metric: { num: '+2 sem', label: 'encaissement' },
  },
  {
    name: 'Nadia Hassan',
    role: 'Directrice',
    organism: 'ProForm',
    avatar: 'NH',
    color: 'green',
    quote:
      "Le pack de preuves Qualiopi se génère en un clic. C'est devenu un non-sujet pour nous, on n'y pense même plus.",
    metric: { num: '1 clic', label: 'preuves prêtes' },
  },
  {
    name: 'Thomas Leroy',
    role: 'Fondateur',
    organism: 'DigitalEdu',
    avatar: 'TL',
    color: 'purple',
    quote:
      "Migration depuis Digiforma faite en cinq jours. Pas une donnée perdue, pas une session manquante. L'équipe beTool a tout pris en charge.",
    metric: { num: '5 jours', label: 'de migration' },
  },
  {
    name: 'Inès Vidal',
    role: 'Directrice administrative',
    organism: 'Akadémia',
    avatar: 'IV',
    color: 'pink',
    quote:
      "On gérait 80 dossiers par mois à la main. Aujourd'hui on en pilote 250 sans avoir embauché. Le ROI est arrivé en 6 semaines.",
    metric: { num: '×3', label: 'volume géré' },
  },
  {
    name: 'Pierre Costa',
    role: 'Directeur',
    organism: 'FormaCloud',
    avatar: 'PC',
    color: 'teal',
    quote:
      'Les relances automatiques nous ont fait passer de 70% à 98% de signatures complètes. On ne perd plus aucun financement.',
    metric: { num: '98%', label: 'taux de signature' },
  },
];
