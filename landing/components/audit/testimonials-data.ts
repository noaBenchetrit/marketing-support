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
    name: 'Sylvain T.',
    role: 'Directeur Technique',
    organism: 'Cabinet Éco-Audit',
    avatar: 'ST',
    color: 'blue',
    quote:
      "BeTool a apporté à notre structure le niveau de rigueur que l'instruction des dossiers d'éco-rénovation exige. On a divisé par deux le temps de traitement administratif.",
    metric: { num: '÷2', label: 'temps administratif' },
  },
  {
    name: 'Marina B.',
    role: 'Auditrice MAR',
    organism: 'Energetik Conseil',
    avatar: 'MB',
    color: 'green',
    quote:
      "L'application mobile sur le terrain change tout. Mes photos sont horodatées au clic et le rapport est prêt avant même de rentrer au bureau.",
    metric: { num: '0 min', label: "d'admin retour bureau" },
  },
  {
    name: 'Thomas L.',
    role: 'Responsable Qualité',
    organism: "Diag'Pro Énergie",
    avatar: 'TL',
    color: 'teal',
    quote:
      "Le contrôle IA nous a évité trois redressements COFRAC depuis le début de l'année. Sans le système d'alertes, on déposait à l'aveugle.",
    metric: { num: '0', label: 'redressement COFRAC' },
  },
  {
    name: 'Florence M.',
    role: 'Gérante',
    organism: 'AuditEco Solutions',
    avatar: 'FM',
    color: 'purple',
    quote:
      "Migration depuis Excel faite en deux jours par l'équipe beTool. Mes auditeurs étaient autonomes en moins d'une heure, sans formation complémentaire.",
    metric: { num: '2 jours', label: 'de migration' },
  },
  {
    name: 'Karim H.',
    role: 'Directeur',
    organism: 'Conformitec',
    avatar: 'KH',
    color: 'orange',
    quote:
      "La centralisation des mandats et des pièces réglementaires nous a permis de doubler notre volume sans recruter. Le ROI a été immédiat.",
    metric: { num: '×2', label: 'volume géré' },
  },
  {
    name: 'Anne-Sophie P.',
    role: 'Auditrice senior',
    organism: 'CertifAudit',
    avatar: 'AP',
    color: 'pink',
    quote:
      "Le suivi MaPrimeRénov' intégré nous fait gagner un temps fou. Les pièces manquantes remontent avant que le dossier parte à l'Anah.",
    metric: { num: '100%', label: 'dossiers complets' },
  },
  {
    name: 'Mehdi R.',
    role: 'Auditeur RGE',
    organism: "Conform'Audit",
    avatar: 'MR',
    color: 'green',
    quote:
      "Avant on perdait des heures à courir après les photos terrain. Maintenant tout est sur la fiche dossier, horodaté et géolocalisé au clic.",
    metric: { num: '+6h/sem', label: 'gagnées par auditeur' },
  },
  {
    name: 'Caroline V.',
    role: 'Directrice',
    organism: 'Diag-Énergie 21',
    avatar: 'CV',
    color: 'blue',
    quote:
      "Renouvellement de notre qualification RGE sans la moindre remarque. Le dossier était traçable de A à Z. L'audit est devenu une formalité.",
    metric: { num: '0', label: 'remarque audit' },
  },
  {
    name: 'Olivier D.',
    role: 'Co-fondateur',
    organism: 'AuditClair',
    avatar: 'OD',
    color: 'teal',
    quote:
      "L'historique des échanges client est centralisé. Quand un technicien quitte la boîte, le dossier reste reprenable en cinq minutes.",
    metric: { num: '5 min', label: 'pour reprendre un dossier' },
  },
  {
    name: 'Sarah B.',
    role: 'Auditrice CEE',
    organism: 'EnerControl',
    avatar: 'SB',
    color: 'orange',
    quote:
      "Les fiches CEE Tertiaire se génèrent toutes seules à partir de mes relevés terrain. Plus jamais de double saisie, plus jamais d'oubli de pièce.",
    metric: { num: '0', label: 'double saisie' },
  },
  {
    name: 'Jean-Marc P.',
    role: 'Gérant',
    organism: 'Bureau de Contrôle Loiret',
    avatar: 'JP',
    color: 'purple',
    quote:
      "Le ROI a été immédiat. En six semaines, on avait remboursé l'outil rien qu'avec les dossiers qu'on ne perdait plus.",
    metric: { num: '6 sem', label: 'pour le ROI' },
  },
  {
    name: 'Élise T.',
    role: 'Coordinatrice',
    organism: 'AccompagnementRénov',
    avatar: 'ET',
    color: 'pink',
    quote:
      "Les alertes proactives nous signalent les mandats qui expirent avant qu'on les oublie. Plus aucun client laissé sans suivi.",
    metric: { num: '0', label: 'mandat expiré' },
  },
];
