'use client';

import { useEffect, useRef } from 'react';
import { useDemoModal } from '@/components/landing/DemoModalProvider';

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

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <span className="eyebrow reveal">Pour les bureaux d&apos;audit énergétique</span>
            <h1 className="reveal delay-1">
              Le CEE n&apos;a jamais été <span className="accent">aussi fluide</span>.
            </h1>
            <p className="sub-h1 reveal delay-2">
              Calculez, déposez et facturez en toute sérénité.
            </p>
            <p className="intro reveal delay-3">
              Bienvenue dans votre nouvel espace de travail. Un CRM pensé pour automatiser vos
              calculs cumac, blinder vos dépôts PNCEE et vous redonner le temps d&apos;auditer.
            </p>
            <div className="cta-row reveal delay-3">
              <button
                type="button"
                className="btn btn-accent btn-large"
                onClick={() => open({ source: 'audits-hero' })}
              >
                Programmer ma démo gratuite
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
              15 min pour transformer vos dépôts CEE. Pas de carte bancaire.
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
                <div className="dash-title">Dossier — BAR-TH-104 · Chaudière biomasse</div>
                <div className="dash-sub">3 logements · déposé il y a 1 jour</div>

                <div className="dash-stats">
                  <div className="stat-card">
                    <div className="stat-num">412 MWh</div>
                    <div className="stat-lbl">cumac</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-num">100%</div>
                    <div className="stat-lbl">Conformité</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-num">5 720€</div>
                    <div className="stat-lbl">Prime estimée</div>
                  </div>
                </div>

                <div className="dash-rows">
                  <div className="dash-row">
                    <div className="left">
                      <div className="avatar"></div>Foyer Martin · 78
                    </div>
                    <span className="pill">Validé</span>
                  </div>
                  <div className="dash-row">
                    <div className="left">
                      <div className="avatar b"></div>Copropriété Lilas · 92
                    </div>
                    <span className="pill">Validé</span>
                  </div>
                  <div className="dash-row">
                    <div className="left">
                      <div className="avatar o"></div>Foyer Dubois · 95
                    </div>
                    <span className="pill">Validé</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="compliance-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Conforme PNCEE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
