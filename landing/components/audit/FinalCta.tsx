'use client';

import { useDemoModal } from './DemoModalProvider';

const PILIERS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Suivi MaPrimeRénov'",
    body: "Visualisez l'état d'avancement et les pièces manquantes de chaque dossier en un coup d'œil.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4Z" />
        <circle cx="9" cy="14" r="1" />
        <circle cx="15" cy="14" r="1" />
      </svg>
    ),
    title: 'Vigilance IA au clic',
    body: "Déclenchez une analyse instantanée pour corriger les anomalies avant l'envoi aux organismes.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3Z" />
      </svg>
    ),
    title: 'Souveraineté totale',
    body: "Vos données et rapports sont sécurisés et hébergés en Europe, conformément aux exigences des bureaux de contrôle.",
  },
];

export default function FinalCta() {
  const { open } = useDemoModal();

  return (
    <section className="pillars-rdv" id="cta-final">
      <div className="container">
        <div className="pillars-rdv-grid">
          <div className="pillars-col reveal">
            <span className="eyebrow pillars-eyebrow">Pourquoi beTool</span>
            <h2>Les trois piliers de votre conformité quotidienne.</h2>
            <ul className="pillars-list">
              {PILIERS.map(({ icon, title, body }) => (
                <li key={title} className="pillar-item">
                  <span className="pillar-icon" aria-hidden="true">{icon}</span>
                  <div className="pillar-text">
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rdv-card reveal delay-1">
            <div className="rdv-avatar" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3 className="rdv-title">
              Planifiez votre session de cadrage avec un expert pour configurer votre démo.
            </h3>
            <p className="rdv-desc">
              15&nbsp;minutes chrono pour adapter beTool à votre flux de travail actuel.
            </p>
            <button
              type="button"
              className="btn btn-light-textured btn-large rdv-cta"
              onClick={() => open({ source: 'pillars-rdv' })}
            >
              Prendre rendez-vous pour planifier ma démo
              <span className="rdv-emoji" aria-hidden="true">📅</span>
            </button>
            <p className="rdv-note">Rappel sous 24h ouvrées · Confidentialité absolue</p>
          </div>
        </div>
      </div>
    </section>
  );
}
