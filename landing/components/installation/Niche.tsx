type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: 'Formulaires techniques dédiés',
    description:
      "Parcours préconfigurés pour Audit énergétique, Isolation, PAC, photovoltaïque. Toutes les pièces obligatoires en un seul écran.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: 'Barèmes de primes intégrés',
    description:
      "Calcul automatique CEE et MaPrimeRénov' selon le profil du foyer, le matériel posé et la zone climatique. Mise à jour en continu.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Workflow conformité Anah',
    description:
      "Contrôle pré-envoi spécifique aux exigences Anah. L'IA bloque le dossier au moindre écart, avant que l'instructeur ne le rejette.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

export default function Niche() {
  return (
    <section className="niche" id="niche">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Expertise rénovation &amp; subventions</span>
          <h2>Devenez le roi du montage MaPrimeRénov&apos; &amp; CEE.</h2>
          <p className="lead">
            Une couche d&apos;expertise dédiée aux artisans RGE pour transformer chaque dossier en
            encaissement, pour vos clients comme pour votre trésorerie.
          </p>
        </div>

        <div className="ai-pillars">
          {FEATURES.map((f, i) => (
            <div key={f.title} className={`ai-pillar reveal${i > 0 ? ` delay-${i}` : ''}`}>
              <div className="ai-pillar-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>

        <div className="niche-update reveal delay-3" aria-label="Mises à jour réglementaires">
          <div className="niche-update-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10" />
              <polyline points="1 20 1 14 7 14" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </div>
          <div className="niche-update-text">
            <strong>Mise à jour réglementaire en temps réel.</strong>
            <span>
              Nos formulaires s&apos;adaptent automatiquement aux nouveaux arrêtés ministériels et barèmes 2026.
            </span>
          </div>
        </div>

        <div className="niche-benefit reveal delay-3">
          <strong>Encaissement des aides accéléré.</strong> Pour vos clients comme pour votre trésorerie.
        </div>
      </div>
    </section>
  );
}
