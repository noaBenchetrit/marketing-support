'use client';

import { useDemoModal } from './DemoModalProvider';

const IconX = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconCheck = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const BEFORE = [
  'Relances manuelles oubliées',
  'Marges calculées au jugé',
  'Photos perdues sur WhatsApp',
  'Stress des dossiers Anah',
];

const AFTER = [
  'Marge nette visible, recalculée à chaque étape',
  'Journal photo scellé, archivé 10 ans',
  'Dossiers 100 % conformes',
];

export default function Comparison() {
  const { open } = useDemoModal();

  return (
    <section className="comparison" id="comparison">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Le choix est simple</span>
          <h2>Le chaos, ou beTool.</h2>
          <p className="lead">D&apos;un côté l&apos;administratif qui ronge la trésorerie. De l&apos;autre, le pilotage industriel.</p>
        </div>

        <div className="comparison-grid">
          <div className="comp-card comp-before reveal">
            <span className="comp-label">Artisan classique</span>
            <h3>L&apos;ancien monde</h3>
            <ul className="comp-list">
              {BEFORE.map((item) => (
                <li key={item}>
                  <span className="comp-icon comp-icon-x">
                    <IconX />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="comp-card comp-after reveal delay-1">
            <div className="comp-after-head">
              <span className="comp-label">Méthode beTool Install</span>
              <button
                type="button"
                className="btn btn-accent comp-cta"
                onClick={() => open({ source: 'comparison', ctaLabel: 'Passer à beTool Install' })}
              >
                Passer à beTool Install
                <svg
                  className="arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <h3>Avec beTool Install</h3>
            <ul className="comp-list">
              {AFTER.map((item) => (
                <li key={item}>
                  <span className="comp-icon comp-icon-check">
                    <IconCheck />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
