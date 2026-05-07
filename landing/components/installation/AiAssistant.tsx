type Pillar = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const PILLARS: Pillar[] = [
  {
    title: 'Vérificateur de pièces',
    description:
      "Analyse des CNI, attestations, justificatifs. L'IA extrait, compare et confirme. Plus aucune erreur de saisie.",
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
      "Devis, dates, montants, mentions légales : l'IA vérifie que toutes les pièces se répondent avant validation.",
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
    title: 'Analyse au clic',
    description:
      "Une analyse en un clic confirme que le dossier est complet et conforme avant de passer à l'étape suivante.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.663 17h4.673M12 3v1M3.293 6.293l.707.707M20.707 6.293l-.707.707M2 12h1M21 12h1M5.5 17.5A6 6 0 1 1 17 14c-.5 1-1 1.5-1.5 2.5L15 17.5z" />
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
          <span className="eyebrow">Le filet de sécurité</span>
          <h2>Zéro dossier rejeté. L&apos;IA vérifie, vous validez.</h2>
          <p className="lead">
            Un &laquo;&nbsp;correcteur d&apos;examen&nbsp;&raquo; pour vos documents administratifs. D&apos;un clic, l&apos;IA scanne
            devis, CNI et attestations et vous alerte sur la moindre date périmée ou incohérence avant
            l&apos;envoi.
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
