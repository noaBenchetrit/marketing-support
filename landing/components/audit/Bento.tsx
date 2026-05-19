const PILIERS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Logistique & Application Terrain',
    impact: 'Finies les tournées chaotiques et les photos perdues.',
    body: "Planning intelligent sectorisé par zone. Application mobile 100 % hors-ligne qui guide l'auditeur pas à pas. Preuves médias (plaques signalétiques, isolants) horodatées au clic.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
    title: 'Usine Documentaire & Signature',
    impact: 'Saisissez sur le terrain, vos rapports sont déjà prêts.',
    body: "Zéro double saisie. Les données terrain génèrent au clic vos Audits Réglementaires, fiches CEE (Résidentiel / Tertiaire / Industrie) et Attestations sur l'Honneur. Signature électronique sécurisée directement sur tablette.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'Le Bouclier Anti-Redressement IA',
    impact: 'Sécurisez vos marges avant le contrôle COFRAC.',
    body: (
      <>
        Notre IA scanne et croise en temps réel vos devis, factures, fiches EPREL et notes de
        dimensionnement. Le système détecte les incohérences de surfaces ou d&apos;efficience
        énergétique (η<sub>s</sub>) et bloque le dossier avant le dépôt en cas d&apos;anomalie.
      </>
    ),
  },
];

export default function Bento() {
  return (
    <section className="piliers-perf">
      <div className="container">
        <header className="piliers-perf-head reveal">
          <h2>Divisez par 2 le temps de traitement. Éliminez 100 % des rejets.</h2>
        </header>
        <div className="piliers-perf-grid">
          {PILIERS.map(({ icon, title, impact, body }, i) => (
            <article
              key={title}
              className={`pilier-perf-card reveal delay-${i + 1}`}
            >
              <span className="pilier-perf-icon" aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p className="pilier-perf-impact">{impact}</p>
              <p className="pilier-perf-body">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
