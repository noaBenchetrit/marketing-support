type Capability = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const CAPABILITIES: Capability[] = [
  {
    title: 'Formulaires Énergie',
    description:
      'Checklists spécifiques isolation, chauffage (PAC, biomasse) et ventilation, pré-câblées pour vos diagnostics.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12l2-2 4 4 8-8 4 4" />
        <path d="M3 21h18" />
      </svg>
    ),
  },
  {
    title: 'Calculs Intégrés',
    description:
      'Algorithmes de déperdition thermique natifs. Zéro calcul manuel, zéro tableur Excel à maintenir.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="10" y2="10" />
        <line x1="13" y1="10" x2="16" y2="10" />
        <line x1="8" y1="14" x2="10" y2="14" />
        <line x1="13" y1="14" x2="16" y2="14" />
        <line x1="8" y1="18" x2="10" y2="18" />
        <line x1="13" y1="18" x2="16" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Suivi Subventions',
    description:
      "Entonnoir de conversion dédié pour garantir des dossiers 100 % conformes Anah et CEE.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function EnergyNiche() {
  return (
    <section className="energy-niche" id="energy">
      <div className="energy-glow" aria-hidden="true" />
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow eyebrow--gold">La niche métier</span>
          <h2>L&apos;expertise MaPrimeRénov&apos;, intégrée nativement.</h2>
          <p className="lead">
            beTool ne se contente pas de générer un PDF. Le moteur connaît les barèmes Anah, les exigences
            CEE et les calculs thermiques de votre métier.
          </p>
        </div>

        <div className="ai-pillars energy-pillars">
          {CAPABILITIES.map((c, i) => (
            <div key={c.title} className={`ai-pillar energy-pillar reveal${i > 0 ? ` delay-${i}` : ''}`}>
              <div className="ai-pillar-icon energy-pillar-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
