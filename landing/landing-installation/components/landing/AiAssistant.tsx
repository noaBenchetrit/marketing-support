type Pillar = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const PILLARS: Pillar[] = [
  {
    title: 'Vérificateur de pièces',
    description:
      "Analyse automatique des CNI, justificatifs de domicile et avis d'imposition. Le RFR est extrait et comparé aux barèmes en temps réel.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <polyline points="9 15 11 17 15 13" />
      </svg>
    ),
  },
  {
    title: 'Contrôle de cohérence',
    description:
      "L'IA vérifie que la date de pose est cohérente avec le devis et respecte le délai légal de rétractation. Plus de dossier rejeté pour incompatibilité de dates.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <polyline points="9 16 11 18 15 14" />
      </svg>
    ),
  },
  {
    title: 'Alerte de conformité',
    description:
      "Signale les mentions obligatoires manquantes sur les devis RGE : qualification, date de validité, label, mentions Eco-PTZ — avant l'envoi du dossier.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

export default function AiAssistant() {
  return (
    <section className="ai-assistant" id="ai">
      <div className="ai-glow" aria-hidden="true" />
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Le bouclier anti-rejet</span>
          <h2>L&apos;IA qui valide vos dossiers.</h2>
          <p className="lead">
            Trois lignes de défense IA, déclenchées en un clic, pour passer chaque dossier au crible avant
            l&apos;envoi à l&apos;Anah, à l&apos;ADEME ou à votre obligé CEE.
          </p>
        </div>

        <div className="ai-pillars">
          {PILLARS.map((p, i) => (
            <div key={p.title} className={`ai-pillar reveal${i > 0 ? ` delay-${i}` : ''}`}>
              <div className="ai-pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
