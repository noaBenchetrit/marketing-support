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
    role: 'Gérante',
    organism: 'EnerAudit',
    avatar: 'CL',
    color: 'green',
    quote:
      "Avant betool, on perdait deux jours par mois à reconstituer les pièces justificatives CEE. Aujourd'hui, on dépose 3x plus de dossiers sans avoir embauché.",
    metric: { num: '×3', label: 'dossiers déposés' },
  },
  {
    name: 'Julien Marchand',
    role: 'Dirigeant',
    organism: 'Thermika',
    avatar: 'JM',
    color: 'blue',
    quote:
      "L'audit OPQIBI a duré 3h au lieu d'une journée. Tous les rapports étaient horodatés, signés, archivés. Zéro non-conformité.",
    metric: { num: '3h', label: "d'audit, zéro non-conformité" },
  },
  {
    name: 'Sophie Renaud',
    role: 'Responsable CEE',
    organism: 'CEE Pro',
    avatar: 'SR',
    color: 'orange',
    quote:
      'On a divisé par trois le temps administratif sur chaque dossier. Mes ingénieurs auditent, ils ne remplissent plus de PDF à la chaîne.',
    metric: { num: '÷3', label: 'temps admin' },
  },
  {
    name: 'Karim Belkacem',
    role: 'Fondateur',
    organism: 'Audit Énergie+',
    avatar: 'KB',
    color: 'purple',
    quote:
      "Les calculs cumac auto nous font gagner 5 heures par semaine. Plus jamais de fiche d'opération à recalculer. C'est une renaissance pour l'équipe.",
    metric: { num: '5h/sem', label: 'économisées' },
  },
  {
    name: 'Élodie Guérin',
    role: 'Responsable qualité',
    organism: 'BET Conseil',
    avatar: 'EG',
    color: 'pink',
    quote:
      "L'équipe support répond en moins d'une heure. C'est un changement de culture par rapport aux outils CEE qu'on utilisait avant.",
    metric: { num: '<1h', label: 'réponse support' },
  },
  {
    name: 'Marc Dubois',
    role: 'Gérant',
    organism: 'Calorit',
    avatar: 'MD',
    color: 'teal',
    quote:
      "Renouvellement RGE sans la moindre non-conformité. Tout était traçable, archivé, prêt — l'audit est devenu une formalité.",
    metric: { num: '0', label: 'non-conformité' },
  },
  {
    name: 'Léa Boucher',
    role: 'Coordinatrice CEE',
    organism: 'Audéa',
    avatar: 'LB',
    color: 'orange',
    quote:
      'Les bénéficiaires signent leurs attestations en 30 secondes depuis leur téléphone. Plus de papier, plus de scans, plus de relances.',
    metric: { num: '30s', label: 'pour signer' },
  },
  {
    name: 'Antoine Mercier',
    role: 'Directeur',
    organism: 'EcoAudit',
    avatar: 'AM',
    color: 'blue',
    quote:
      "On encaisse les primes CEE deux semaines plus tôt qu'avant. La trésorerie respire enfin et on peut investir dans le terrain.",
    metric: { num: '+2 sem', label: 'encaissement' },
  },
  {
    name: 'Nadia Hassan',
    role: 'Directrice',
    organism: 'AuditHome',
    avatar: 'NH',
    color: 'green',
    quote:
      "Le pack de preuves PNCEE se génère en un clic. C'est devenu un non-sujet pour nous, on n'y pense même plus.",
    metric: { num: '1 clic', label: 'preuves prêtes' },
  },
  {
    name: 'Thomas Leroy',
    role: 'Fondateur',
    organism: 'Iso Audit',
    avatar: 'TL',
    color: 'purple',
    quote:
      "Migration depuis notre ancien tableur en cinq jours. Pas un dossier perdu, pas une fiche manquante. L'équipe betool a tout pris en charge.",
    metric: { num: '5 jours', label: 'de migration' },
  },
  {
    name: 'Inès Vidal',
    role: 'Directrice administrative',
    organism: 'PrimaCEE',
    avatar: 'IV',
    color: 'pink',
    quote:
      "On gérait 40 dossiers par mois à la main. Aujourd'hui on en pilote 130 sans avoir embauché. Le ROI est arrivé en 8 semaines.",
    metric: { num: '×3', label: 'volume géré' },
  },
  {
    name: 'Pierre Costa',
    role: 'Directeur',
    organism: 'CumacExpert',
    avatar: 'PC',
    color: 'teal',
    quote:
      'Le contrôle préalable PNCEE nous a fait passer de 78% à 99% de dossiers acceptés. On ne perd plus de primes pour un détail oublié.',
    metric: { num: '99%', label: 'taux de validation' },
  },
];
