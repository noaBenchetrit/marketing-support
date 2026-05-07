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
      const rotY = ((x - cx) / cx) * 4;
      const rotX = -((y - cy) / cy) * 3;
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
      card.style.translate = `0 ${t * -14}px`;
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
            <span className="eyebrow reveal">Pour les auditeurs et bureaux de contrôle</span>
            <h1 className="reveal delay-1">
              L&apos;audit est une science. <span className="accent">beTool</span> est votre laboratoire.
            </h1>
            <p className="sub-h1 reveal delay-2">
              Centralisez vos dossiers, mandats et historique des échanges au même endroit. Votre source de
              vérité unique pour une conformité sans faille.
            </p>
            <div className="cta-row reveal delay-3">
              <button
                type="button"
                className="btn btn-accent btn-large"
                onClick={() => open({ source: 'hero' })}
              >
                Démarrer mon premier audit
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
                <div className="dash-title">Rapport d&apos;audit en cours</div>
                <div className="dash-sub">Mission #2026-014 · Atelier Lefèvre SAS</div>

                <div className="report-gen" aria-hidden="true">
                  <div className="report-gen-header">
                    <span className="report-gen-stamp">RAPPORT D&apos;AUDIT · 2026</span>
                    <span className="report-gen-status">
                      <span className="report-gen-pulse"></span>
                      Génération en cours
                    </span>
                  </div>
                  <div className="report-gen-lines">
                    <div className="report-gen-line"></div>
                    <div className="report-gen-line report-gen-line--med"></div>
                    <div className="report-gen-line"></div>
                    <div className="report-gen-line report-gen-line--short"></div>
                    <div className="report-gen-line report-gen-line--typing">
                      <span className="report-gen-typing-bar"></span>
                      <span className="report-gen-cursor"></span>
                    </div>
                  </div>
                  <div className="report-gen-progress">
                    <div className="report-gen-progress-bar">
                      <div className="report-gen-progress-fill"></div>
                    </div>
                    <span className="report-gen-progress-pct">67 %</span>
                  </div>
                </div>

                <div className="dash-stats">
                  <div className="stat-card">
                    <div className="stat-num">14</div>
                    <div className="stat-lbl">Points contrôlés</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-num">2</div>
                    <div className="stat-lbl">Vigilances IA</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-num">42s</div>
                    <div className="stat-lbl">Temps restant</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="compliance-badge">
              <span className="badge-dot"></span>
              <span className="badge-text">Horodatage Certifié</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
