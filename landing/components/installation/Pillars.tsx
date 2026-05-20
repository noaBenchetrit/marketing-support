import AiComplianceCard from './AiComplianceCard';

type SubFeature = {
  title: string;
  description: string;
};

type Pillar = {
  title: string;
  features?: SubFeature[];
  solutionLabel?: string;
  solutionBody?: string;
  icon: React.ReactNode;
};

const PILLAR_LEFT: Pillar = {
  title: 'Signez plus de chantiers et sécurisez vos gains',
  features: [
    {
      title: 'Formulaires techniques dédiés',
      description:
        "Parcours préconfigurés pour Audit énergétique, Isolation, PAC, photovoltaïque. Toutes les pièces obligatoires en un seul écran.",
    },
    {
      title: 'Barèmes de primes intégrés',
      description:
        "Calcul automatique CEE et MaPrimeRénov’ selon le profil du foyer, le matériel posé et la zone climatique. Mise à jour en continu.",
    },
  ],
  icon: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
};

const PILLAR_RIGHT: Pillar = {
  title: 'Zéro temps mort grâce au planning partagé',
  solutionLabel: 'Planning Optimal & Terrain :',
  solutionBody:
    "Une vue calendrier ultra-visuelle pour assigner vos équipes en un clic. Vos ouvriers reçoivent leur feuille de route directement sur leur mobile.",
  icon: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
};

function PillarCard({ p }: { p: Pillar }) {
  return (
    <article className="pillar-card reveal">
      <div className="pillar-icon">{p.icon}</div>
      <h3>{p.title}</h3>
      {p.features ? (
        <ul className="pillar-features">
          {p.features.map((f) => (
            <li key={f.title}>
              <strong>{f.title}</strong>
              <span>{f.description}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="pillar-solution">
          <span className="pillar-solution-label">{p.solutionLabel}</span>{' '}
          {p.solutionBody}
        </p>
      )}
    </article>
  );
}

export default function Pillars() {
  return (
    <section className="pillars" id="pillars">
      <div className="container">
        <div className="pillars-grid">
          <PillarCard p={PILLAR_LEFT} />
          <div className="pillar-stack">
            <PillarCard p={PILLAR_RIGHT} />
            <AiComplianceCard />
          </div>
        </div>
      </div>
    </section>
  );
}
