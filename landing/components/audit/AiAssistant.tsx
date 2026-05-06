type Pillar = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const PILLARS: Pillar[] = [
  {
    title: 'Vérification de cohérence assistée',
    description:
      "Scan des documents (CNI, attestations, certificats) pour vérifier les dates et mentions obligatoires avant validation.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: 'Synthèse décisionnelle',
    description:
      "Rédaction assistée des conclusions à partir de vos notes terrain — vous gardez la main sur la signature.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Communication instantanée',
    description:
      "Génération de résumés d'emails et SMS de relance pour les pièces manquantes — prêts à envoyer en un clic.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22 6 12 13 2 6" />
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
          <span className="eyebrow">L&apos;assistant opérationnel</span>
          <h2>L&apos;IA prépare le diagnostic. Vous gardez la décision.</h2>
          <p className="lead">
            Aucun envoi automatique sans votre clic. beTool prépare, vous validez — chaque action reste
            tracée et signée par l&apos;auditeur.
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
