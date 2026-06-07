'use client';

import { useDemoModal } from './DemoModalProvider';

type Feature = { title: string; desc: string; icon: React.ReactNode };

const FEATURES: Feature[] = [
  {
    title: 'Primes CEE & MaPrimeRénov’',
    desc: 'Montez, vérifiez et validez vos dossiers de subvention en un temps record, sans erreur humaine.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    title: 'Collaboration en temps réel',
    desc: 'Partagez les documents instantanément entre le siège, les techniciens sur le terrain et vos clients.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
];

export default function Section3() {
  const { open } = useDemoModal();

  return (
    <section id="sec-3" className="deck-section is-dark">
      <span className="deck-orb orb-accent orb-1" aria-hidden="true" />
      <span className="deck-orb orb-blue orb-2" aria-hidden="true" />

      <div className="container">
        <div className="sec-split">
          <div className="sec-head">
            <span className="sec-eyebrow reveal reveal-left">
              <span className="sec-num">03</span>
              <span className="eyebrow">Conformité &amp; dossiers</span>
            </span>
            <h2 className="reveal reveal-left delay-1">
              Vos dossiers CEE &amp; MaPrimeRénov&apos; validés par l&apos;IA.{' '}
              <span className="accent">Zéro rejet.</span>
            </h2>
            <p className="sec-lead reveal reveal-left delay-2">
              Notre IA scanne chaque pièce justificative et détecte les anomalies avant l&apos;envoi,
              chez tous les obligés, délégataires et mandataires CEE.
            </p>

            <div className="stat-row reveal reveal-left delay-2">
              <div className="stat reveal stat-pop delay-2">
                <span className="stat-num">0%</span>
                <span className="stat-label">de rejet de vos dossiers</span>
              </div>
              <div className="stat reveal stat-pop delay-3">
                <span className="stat-num">100%</span>
                <span className="stat-label">de vos primes sécurisées</span>
              </div>
            </div>

            <div className="trust-badges reveal reveal-left delay-3" aria-label="Dispositifs et conformité">
              <img src="/logos/cee.jpeg" alt="Certificats d'économies d'énergie (CEE)" />
              <img src="/logos/maprimerenov.png" alt="MaPrimeRénov'" />
              <img src="/logos/rgpd.jpg" alt="Conforme RGPD" />
            </div>

            <div className="sec-cta reveal reveal-left delay-3">
              <button
                type="button"
                className="btn btn-accent btn-large"
                onClick={() => open({ source: 'sec-3', ctaLabel: 'Obtenir ma démo offerte' })}
              >
                Obtenir ma démo offerte
                <svg className="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <ul className="feat-list">
            {FEATURES.map((f, i) => (
              <li key={f.title} className={`feat-row reveal reveal-right delay-${i + 1}`}>
                <span className="feat-ico">{f.icon}</span>
                <div className="feat-txt">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
