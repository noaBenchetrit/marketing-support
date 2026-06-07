'use client';

import { useDemoModal } from './DemoModalProvider';

const ArrowIcon = () => (
  <svg className="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function Hero() {
  const { open } = useDemoModal();

  return (
    <section id="sec-hero" className="deck-section is-light hero-deck">
      <span className="deck-orb orb-accent orb-1" aria-hidden="true" />
      <span className="deck-orb orb-soft orb-2" aria-hidden="true" />

      <div className="container">
        <span className="eyebrow reveal">CRM nouvelle génération · Rénovation énergétique</span>
        <h1 className="reveal delay-1">
          Captez vos leads.<br />
          Planifiez vos poses.<br />
          <span className="accent">Sécurisez vos primes.</span>
        </h1>
        <p className="sec-lead reveal delay-2">
          Le CRM intelligent qui pilote vos commerciaux, vos plannings et vos primes CEE &amp;
          MaPrimeRénov&apos;.
        </p>

        <nav className="hero-nav reveal delay-2" aria-label="Aller à une section">
          <a href="#sec-1"><span className="hero-nav-num">01</span> Performance commerciale</a>
          <a href="#sec-2"><span className="hero-nav-num">02</span> Planning intelligent</a>
          <a href="#sec-3"><span className="hero-nav-num">03</span> Conformité &amp; primes</a>
        </nav>

        <div className="sec-cta reveal delay-3">
          <button
            type="button"
            className="btn btn-accent btn-large"
            onClick={() => open({ source: 'hero', ctaLabel: 'Obtenir ma démo offerte' })}
          >
            Obtenir ma démo offerte
            <ArrowIcon />
          </button>
        </div>

        <p className="cta-note reveal delay-3">
          <span aria-hidden="true">⚡️</span> Démo offerte de 30 min · Sans engagement · Déjà +300 professionnels du bâtiment
        </p>
      </div>

      <a href="#sec-1" className="scroll-cue" aria-label="Découvrir la suite">
        Découvrir
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
  );
}
