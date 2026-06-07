'use client';

import { useDemoModal } from './DemoModalProvider';

type Feature = { title: string; desc: string; icon: React.ReactNode };

const FEATURES: Feature[] = [
  {
    title: 'Gestion des commerciaux',
    desc: 'Suivez vos équipes sur le terrain en temps réel, attribuez les leads instantanément et boostez vos taux de signature.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Rapporteurs d'affaires",
    desc: "Suivez précisément l'origine de chaque opportunité, calculez les commissions automatiquement et fidélisez vos partenaires.",
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
  {
    title: 'Rapports de performance',
    desc: 'Visualisez vos statistiques clés via un tableau de bord intuitif pour prendre les bonnes décisions au bon moment.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Automatisation intelligente',
    desc: 'Finie la saisie manuelle. Vos leads sont dispatchés et relancés automatiquement pour ne plus jamais perdre un contrat.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function Section1() {
  const { open } = useDemoModal();

  return (
    <section id="sec-1" className="deck-section is-dark">
      <span className="deck-orb orb-accent orb-1" aria-hidden="true" />
      <span className="deck-orb orb-blue orb-2" aria-hidden="true" />

      <div className="container">
        <div className="sec-split">
          <div className="sec-head">
            <span className="sec-eyebrow reveal reveal-left">
              <span className="sec-num">01</span>
              <span className="eyebrow">Performance commerciale</span>
            </span>
            <h2 className="reveal reveal-left delay-1">
              Centralisez vos leads et pilotez vos performances commerciales.
            </h2>
            <p className="sec-lead reveal reveal-left delay-2">
              Connectez, automatisez et bénéficiez d&apos;une vision globale grâce à l&apos;IA pour
              piloter vos dossiers de manière plus performante.
            </p>
            <div className="sec-cta reveal reveal-left delay-3">
              <button
                type="button"
                className="btn btn-accent btn-large"
                onClick={() => open({ source: 'sec-1', ctaLabel: 'Obtenir ma démo offerte' })}
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
