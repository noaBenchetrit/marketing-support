type Pillar = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const PILLARS: Pillar[] = [
  {
    title: 'Vérification de cohérence assistée',
    description:
      "D'un simple clic, sollicitez l'IA pour analyser vos PDF. Elle détecte les dates de validité, vérifie la présence des mentions obligatoires et vous alerte sur les documents périmés.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: 'Synthèse Décisionnelle',
    description:
      "À partir de vos notes de terrain, l'IA prépare conclusions, résumés exécutifs et points de vigilance — formatés selon votre charte, prêts à signer.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: 'Communication Instantanée',
    description:
      "Génération automatique d'emails de relance, de listes de tâches de remédiation et de SMS clients en cas d'anomalie. Vous validez, beTool envoie.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="8" y1="9" x2="16" y2="9" />
        <line x1="8" y1="13" x2="13" y2="13" />
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
          <span className="eyebrow">L&apos;assistant IA</span>
          <h2>Rédigez moins, auditez mieux.</h2>
          <p className="lead">
            L&apos;IA prépare le message — vous gardez le contrôle total sur la validation. Aucun envoi
            automatique sans votre clic.
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
