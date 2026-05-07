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
      const rotY = ((x - cx) / cx) * 7;
      const rotX = -((y - cy) / cy) * 5;
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

  useEffect(() => {
    const visual = visualRef.current;
    const card = cardRef.current;
    if (!visual || !card) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = visual.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      const t = Math.max(-1, Math.min(1, center / window.innerHeight));
      card.style.translate = `0 ${t * -18}px`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="eyebrow reveal">L&apos;allié des artisans et entreprises du bâtiment en 2026</span>
            <h1 className="reveal delay-1">
              Le chantier commence au clic.
              <br />
              Le profit se joue à la <span className="accent">signature</span>.
            </h1>
            <p className="sub-h1 reveal delay-2">
              Ne laissez plus vos marges s&apos;évaporer. Centralisez vos demandes, automatisez vos relances de
              devis et encaissez vos factures plus vite.
            </p>
            <div className="cta-row reveal delay-3">
              <button
                type="button"
                className="btn btn-accent btn-large"
                onClick={() => open({ source: 'hero' })}
              >
                Sécuriser mon profit maintenant
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
              Mise en route en 15 min. Sans carte bancaire.
            </p>
          </div>

          <div className="hero-visual reveal delay-2" ref={visualRef}>
            <div className="dashboard-card" ref={cardRef}>
              <div className="dashboard-header">
                <span className="dot r"></span>
                <span className="dot y"></span>
                <span className="dot g"></span>
              </div>
              <div className="dashboard-body">
                <div className="dash-title">Chantier #2026-014 · Pompe à chaleur</div>
                <div className="dash-sub">Famille Lefèvre · Toulouse · MaPrimeRénov&apos; validée</div>

                <div className="dash-stats">
                  <div className="stat-card stat-card--cash">
                    <div className="stat-num">12 450 €</div>
                    <div className="stat-lbl">Devis en attente</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-num">4 320 €</div>
                    <div className="stat-lbl">Prime validée</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-num">J + 0</div>
                    <div className="stat-lbl">Encaissement</div>
                  </div>
                </div>

                <div className="dash-rows">
                  <div className="dash-row">
                    <div className="left">
                      <div className="avatar"></div>Devis signé
                    </div>
                    <span className="pill">eIDAS</span>
                  </div>
                  <div className="dash-row">
                    <div className="left">
                      <div className="avatar b"></div>AFT validée
                    </div>
                    <span className="pill">Conforme</span>
                  </div>
                  <div className="dash-row">
                    <div className="left">
                      <div className="avatar o"></div>Devis relancé
                    </div>
                    <span className="pill">Auto J+3</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="compliance-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Signature eIDAS Certifiée</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
