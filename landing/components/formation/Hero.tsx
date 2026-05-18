'use client';

import ImportSimulator from './ImportSimulator';
import { scrollToFinalForm } from './smoothScroll';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.6 6.3L21 9l-5 4.4L17.5 20 12 16.7 6.5 20 8 13.4 3 9l6.4-.7L12 2z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    className="arrow"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const TRUST_LOGOS = [
  { src: '/qualiopi.png', alt: 'Qualiopi' },
  { src: '/monCompteFormation.png', alt: 'EDOF' },
  { src: '/certigna.png', alt: 'Certigna' },
  { src: '/caisseDesDepots.png', alt: 'CDC' },
];

// Position des logos sur un cercle (en % du conteneur) — démarrage en haut
const ORBIT_RADIUS = 38;
const TRUST_POSITIONS = TRUST_LOGOS.map((logo, i) => {
  const angle = (i * 360) / TRUST_LOGOS.length - 90;
  const rad = (angle * Math.PI) / 180;
  return {
    ...logo,
    x: 50 + ORBIT_RADIUS * Math.cos(rad),
    y: 50 + ORBIT_RADIUS * Math.sin(rad),
  };
});

function scrollToSim() {
  if (typeof window === 'undefined') return;
  document.getElementById('sim-anchor')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-fold">
            <div className="hero-head">
              <div className="hero-text">
                <span className="eyebrow reveal">
                  <StarIcon />
                  Le premier CRM intelligent pour Organismes de Formation &amp; CFA
                </span>
                <h1 className="reveal delay-1" style={{ marginTop: 18 }}>
                  Divisez par <span className="accent-brand">3</span> le temps de gestion de vos dossiers
                  et automatisez votre conformité <span className="accent-success">Qualiopi</span>.
                </h1>
                <p className="hero-sub reveal delay-2">
                  Plannings, émargements eIDAS, gestion du RAC et BPF. Centralisez toute votre activité
                  sur une plateforme unique, sans aucune double saisie.
                </p>
                <div className="hero-cta-row reveal delay-3">
                  <button
                    type="button"
                    className="btn btn-accent btn-large"
                    onClick={scrollToFinalForm}
                  >
                    Commencer mon essai gratuit
                    <ArrowIcon />
                  </button>
                </div>
                <p className="hero-reassurance reveal delay-3">
                  Pas de carte bancaire · Configuration en 15 minutes
                </p>
              </div>

              <aside className="hero-trust reveal delay-3" aria-label="Certifications et conformités">
                <span className="hero-trust-label">Conforme à</span>
                <div className="hero-trust-orbit-stage">
                  <div className="hero-trust-orbit-rotor">
                    <svg
                      className="hero-trust-orbit-lines"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      {TRUST_POSITIONS.map((p, i) => (
                        <line
                          key={`line-${i}`}
                          x1="50"
                          y1="50"
                          x2={p.x}
                          y2={p.y}
                          className="hero-trust-orbit-line"
                          style={{ animationDelay: `${i * 0.3}s` }}
                        />
                      ))}
                    </svg>

                    {TRUST_POSITIONS.map((p) => (
                      <div
                        key={p.alt}
                        className="hero-trust-orbit-spoke"
                        style={{ left: `${p.x}%`, top: `${p.y}%` }}
                      >
                        <div className="hero-trust-orbit-counter">
                          <img src={p.src} alt={p.alt} />
                          <span className="hero-trust-orbit-name">{p.alt}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="hero-trust-orbit-center">
                    <img src="/beTool.png" alt="beTool" />
                    <span>beTool</span>
                  </div>
                </div>
              </aside>
            </div>

            <button
              type="button"
              className="hero-scroll-cue"
              onClick={scrollToSim}
              aria-label="Voir le produit en action"
            >
              <span>Voir le produit en action</span>
              <span className="hero-scroll-cue-chevron"><ChevronDown /></span>
            </button>
          </div>
        </div>
      </section>

      <section className="hero-sim" id="sim-anchor">
        <div className="container">
          <div className="hero-visual reveal">
            <ImportSimulator />
          </div>

          <div className="hero-sim-cta reveal delay-1">
            <p>
              Marre de copier-coller vos listes Excel&nbsp;? Oubliez les usines à gaz et les
              abonnements Zapier. Notre moteur d&apos;automatisation natif synchronise tout, sans
              effort.
            </p>
            <button
              type="button"
              className="btn btn-accent btn-large"
              onClick={scrollToFinalForm}
            >
              Commencer mon essai gratuit
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
