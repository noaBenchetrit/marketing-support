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
          Le CRM intelligent qui automatise vos dossiers, de la capture du lead jusqu&apos;à la{' '}
          <span className="accent">conformité CEE &amp; MPR</span>.
        </h1>
        <p className="sec-lead reveal delay-2">
          Pilotez vos commerciaux, optimisez vos plannings par IA et sécurisez 100% de vos primes
          sans effort administratif.
        </p>

        <div className="hero-chips reveal delay-2" aria-hidden="true">
          <span className="hero-chip">Leads &amp; commerciaux</span>
          <span className="hero-chip">Planning IA</span>
          <span className="hero-chip">Primes CEE &amp; MaPrimeRénov&apos;</span>
          <span className="hero-chip">Conformité 0 rejet</span>
        </div>

        <div className="sec-cta reveal delay-3">
          <button
            type="button"
            className="btn btn-accent btn-large"
            onClick={() => open({ source: 'hero', ctaLabel: 'Programmer ma démo' })}
          >
            Programmer ma démo
            <ArrowIcon />
          </button>
        </div>

        <p className="cta-note reveal delay-3">
          <span aria-hidden="true">⚡️</span> Test gratuit · Sans carte bancaire · Configuration en 5 minutes
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
