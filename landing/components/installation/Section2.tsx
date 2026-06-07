'use client';

import { useDemoModal } from './DemoModalProvider';

type Feature = { title: string; desc: string; icon: React.ReactNode };

const FEATURES: Feature[] = [
  {
    title: 'Gestion du planning de pose',
    desc: 'Organisez le déploiement de vos équipes techniques sur les chantiers en minimisant les temps morts.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: 'Visites techniques & audits',
    desc: 'Planifiez vos rendez-vous de validation et audits de manière optimale pour réduire les déplacements inutiles.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
];

export default function Section2() {
  const { open } = useDemoModal();

  return (
    <section id="sec-2" className="deck-section is-light">
      <span className="deck-orb orb-soft orb-1" aria-hidden="true" />
      <span className="deck-orb orb-blue orb-2" aria-hidden="true" />

      <div className="container">
        <div className="sec-split">
          <div className="sec-head">
            <span className="sec-eyebrow reveal reveal-left">
              <span className="sec-num">02</span>
              <span className="eyebrow">Planning intelligent</span>
            </span>
            <h2 className="reveal reveal-left delay-1">
              Maximisez le temps de vos équipes avec la planification prédictive.
            </h2>
            <p className="sec-lead reveal reveal-left delay-2">
              Planifiez de manière optimale grâce à notre planning intelligent et notre IA active
              qui optimise vos temps, vos trajets et vos agendas.
            </p>
            <div className="sec-cta reveal reveal-left delay-3">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => open({ source: 'sec-2', ctaLabel: 'Planifier ma démo' })}
              >
                Planifier ma démo
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
