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

    const badge = visual.querySelector<HTMLElement>('.compliance-badge');
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = visual.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      const t = Math.max(-1, Math.min(1, center / window.innerHeight));
      card.style.translate = `0 ${t * -18}px`;
      if (badge) badge.style.translate = `0 ${t * -42}px`;
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
            <span className="eyebrow reveal">Spécial Organismes de Formation &amp; CFA</span>
            <h1 className="reveal delay-1">
              Moins d&apos;administration. Plus de <span className="accent">transmission</span>.
            </h1>
            <p className="sub-h1 reveal delay-2">
              Centralisez toute votre activité sur une plateforme unique.
            </p>
            <p className="intro reveal delay-3">
              De la gestion des plannings à la signature des stagiaires, beTool automatise votre conformité
              Qualiopi pour vous redonner le contrôle.
            </p>
            <div className="cta-row reveal delay-3">
              <button
                type="button"
                className="btn btn-accent btn-large"
                onClick={() => open({ source: 'hero' })}
              >
                Commencer mon essai gratuit
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
              Configuration en 15 minutes. Tout le monde au même niveau d&apos;information.
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
                <div className="dash-title">Score de conformité global</div>
                <div className="dash-sub">Audit Qualiopi simulé · 12 mai 2026</div>

                <div className="conformity-score" aria-hidden="true">
                  <svg viewBox="0 0 120 120" className="conformity-ring">
                    <circle cx="60" cy="60" r="50" className="conformity-ring-bg" />
                    <circle cx="60" cy="60" r="50" className="conformity-ring-fill" />
                  </svg>
                  <div className="conformity-score-inner">
                    <strong>100&nbsp;%</strong>
                    <span>Audit-Ready</span>
                  </div>
                </div>

                <div className="dash-stats">
                  <div className="stat-card">
                    <div className="stat-num">15/15</div>
                    <div className="stat-lbl">Émargements</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-num">8/8</div>
                    <div className="stat-lbl">Pièces signées</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-num">0</div>
                    <div className="stat-lbl">Alertes</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="compliance-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Zéro stress en cas d&apos;audit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
