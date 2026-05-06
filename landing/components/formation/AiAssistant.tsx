type Pillar = {
  name: string;
  title: string;
  description: string;
  action: string;
  icon: React.ReactNode;
};

const PILLARS: Pillar[] = [
  {
    name: 'Audit de Conformité',
    title: 'Zéro rejet financeur.',
    description:
      "D'un clic, scannez la validité des CNI et la cohérence des dates de contrats. Détectez les erreurs avant l'envoi au CPF/OPCO.",
    action: 'Analyser le dossier',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'Ingénierie Pédagogique',
    title: 'Programmes Qualiopi instantanés.',
    description:
      "Saisissez un titre, cliquez sur «Générer». Obtenez une fiche produit et un livret d'accueil structurés selon les normes.",
    action: 'Générer le programme',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  {
    name: 'Assistant Rédactionnel',
    title: 'Finie la page blanche.',
    description:
      "Décrivez votre message, cliquez pour rédiger. Emails, SMS et notes pro sont prêts à l'envoi en 3 secondes.",
    action: "Rédiger l'email",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
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
          <span className="eyebrow">L&apos;intelligence au clic</span>
          <h2>Gagnez des heures. Gardez le contrôle.</h2>
          <p className="lead">
            Un clic pour déléguer vos tâches ingrates. L&apos;IA beTool analyse et rédige,
            vous validez.
          </p>
        </div>

        <div className="ai-pillars">
          {PILLARS.map((p, i) => (
            <div key={p.name} className={`ai-pillar reveal${i > 0 ? ` delay-${i}` : ''}`}>
              <div className="ai-pillar-icon">{p.icon}</div>
              <p className="ai-pillar-kicker">{p.name}</p>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="ai-pillar-action" aria-hidden="true">
                <span className="ai-pillar-action-icon">✨</span>
                {p.action}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
