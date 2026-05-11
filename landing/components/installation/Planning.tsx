'use client';

import { useDemoModal } from './DemoModalProvider';

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: 'Calendrier partagé',
    description:
      "Toutes les équipes, toutes les interventions, sur un seul écran. Glissez-déposez pour replanifier sans appeler personne.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Notifications mission mobile',
    description:
      "Vos techniciens reçoivent leur mission, l'adresse et les pièces du dossier sur leur téléphone.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
  },
  {
    title: 'Tournées optimisées',
    description:
      "Itinéraires regroupés par zone, kilomètres inutiles supprimés. Vos techniciens enchaînent les poses sans détours.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z" />
      </svg>
    ),
  },
];

export default function Planning() {
  const { open } = useDemoModal();

  return (
    <section className="planning" id="planning">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Le flux terrain</span>
          <h2>Vos équipes au bon endroit, au bon moment.</h2>
          <p className="lead">
            Gestion des interventions facilitée : un calendrier qui parle à vos clients, un planning qui
            parle à vos techniciens.
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

        <div className="planning-cta reveal delay-3">
          <button
            type="button"
            className="btn btn-accent btn-large"
            onClick={() => open({ source: 'planning', ctaLabel: 'Réserver ma démo Install' })}
          >
            Réserver ma démo Install
            <svg className="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
