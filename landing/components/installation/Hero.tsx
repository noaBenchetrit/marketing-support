'use client';

import { useEffect, useRef } from 'react';
import { useDemoModal } from './DemoModalProvider';

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { open } = useDemoModal();

  useEffect(() => {
    const visual = visualRef.current;
    const card = cardRef.current;
    if (!visual || !card) return;
    if (!window.matchMedia('(hover: hover)').matches) return;

    const onEnter = () => {
      card.style.transition = 'transform 0.12s ease-out, box-shadow 0.4s';
    };
    const onMove = (e: MouseEvent) => {
      const rect = visual.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotY = ((x - cx) / cx) * 6;
      const rotX = -((y - cy) / cy) * 4;
      card.style.transform = `perspective(1200px) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    };
    const onLeave = () => {
      card.style.transition = 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s';
      card.style.transform = '';
    };

    visual.addEventListener('mouseenter', onEnter);
    visual.addEventListener('mousemove', onMove);
    visual.addEventListener('mouseleave', onLeave);
    return () => {
      visual.removeEventListener('mouseenter', onEnter);
      visual.removeEventListener('mousemove', onMove);
      visual.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="eyebrow reveal">L&apos;outil tout-en-un des entreprises du bâtiment</span>
            <h1 className="reveal delay-1">
              Arrêtez de perdre vos marges.
              <br />
              Centralisez toute votre activité sur une <span className="accent">seule plateforme</span>.
            </h1>
            <p className="sub-h1 reveal delay-2">
              Fini l&apos;éparpillement entre Excel, les papiers et les SMS. Betool devient votre unique
              source de vérité pour automatiser vos relances de devis, piloter vos plannings et
              verrouiller votre rentabilité.
            </p>
            <div className="cta-row reveal delay-3">
              <button
                type="button"
                className="btn btn-accent btn-large"
                onClick={() => open({ source: 'hero', ctaLabel: 'Réserver ma démo' })}
              >
                Réserver ma démo
                <svg
                  className="arrow"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className="cta-note reveal delay-3">
              <span aria-hidden="true">⚡️</span> Test gratuit — Sans carte bancaire — Configuration en 5 minutes
            </p>
          </div>

          <div className="hero-visual reveal delay-2" ref={visualRef}>
            <div className="planning-card" ref={cardRef}>
              <div className="planning-card-header">
                <span className="dot r"></span>
                <span className="dot y"></span>
                <span className="dot g"></span>
                <span className="planning-card-title">Planning équipes · Semaine 21</span>
              </div>
              <div className="planning-card-body">
                <div className="planning-days">
                  <span>Lun 18</span>
                  <span>Mar 19</span>
                  <span>Mer 20</span>
                  <span>Jeu 21</span>
                  <span>Ven 22</span>
                </div>

                <div className="planning-row">
                  <div className="planning-team">
                    <span className="planning-avatar a">JM</span>
                    <span className="planning-name">Jean-Marc</span>
                  </div>
                  <div className="planning-track">
                    <span className="planning-block blue" style={{ gridColumn: '1 / span 2' }}>PAC · Lefèvre</span>
                    <span className="planning-block green" style={{ gridColumn: '3 / span 1' }}>Visite</span>
                    <span className="planning-block orange" style={{ gridColumn: '4 / span 2' }}>Isolation · Bertrand</span>
                  </div>
                </div>

                <div className="planning-row">
                  <div className="planning-team">
                    <span className="planning-avatar b">SA</span>
                    <span className="planning-name">Sami</span>
                  </div>
                  <div className="planning-track">
                    <span className="planning-block teal" style={{ gridColumn: '1 / span 1' }}>SAV</span>
                    <span className="planning-block blue" style={{ gridColumn: '2 / span 3' }}>Photovoltaïque · Marais</span>
                    <span className="planning-block green" style={{ gridColumn: '5 / span 1' }}>Devis</span>
                  </div>
                </div>

                <div className="planning-row">
                  <div className="planning-team">
                    <span className="planning-avatar c">RO</span>
                    <span className="planning-name">Romain</span>
                  </div>
                  <div className="planning-track">
                    <span className="planning-block green" style={{ gridColumn: '1 / span 1' }}>Visite</span>
                    <span className="planning-block orange" style={{ gridColumn: '2 / span 2' }}>Pose VMC</span>
                    <span className="planning-block blue" style={{ gridColumn: '4 / span 2' }}>PAC · Dupuis</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="planning-phone" aria-hidden="true">
              <div className="planning-phone-screen">
                <div className="planning-phone-head">Aujourd&apos;hui · Jean-Marc</div>
                <div className="planning-phone-row">
                  <span className="phone-dot blue" /> 09:00 · PAC Lefèvre
                </div>
                <div className="planning-phone-row">
                  <span className="phone-dot green" /> 11:30 · Visite SCI
                </div>
                <div className="planning-phone-row">
                  <span className="phone-dot orange" /> 14:00 · Isolation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
