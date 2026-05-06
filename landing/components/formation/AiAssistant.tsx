type Pillar = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const PILLARS: Pillar[] = [
  {
    title: 'Audit Préventif',
    description:
      "Notre IA scanne vos dossiers au clic : conformité CPF/OPCO, cohérence des pièces justificatives et détection des erreurs avant l'envoi.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Ingénierie Pédagogique',
    description:
      "Générez vos livrets d'accueil et questionnaires d'évaluation personnalisés à partir d'un simple titre de formation.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
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
          <span className="eyebrow">Le bouclier spécifique</span>
          <h2>Une IA qui sécurise vos financements.</h2>
          <p className="lead">
            Deux gardes-fous en arrière-plan, déclenchés au clic, pour que vous gardiez l&apos;œil sur la
            pédagogie pendant que votre administratif se blinde tout seul.
          </p>
        </div>

        <div className="ai-pillars ai-pillars--two">
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
