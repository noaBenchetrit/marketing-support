'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useDemoModal } from './DemoModalProvider';

type ScanPhase = 'before' | 'scanning' | 'error';

const PHASE_DURATIONS: Record<ScanPhase, number> = {
  before: 3000,
  scanning: 1800,
  error: 4500,
};
const NEXT_PHASE: Record<ScanPhase, ScanPhase> = {
  before: 'scanning',
  scanning: 'error',
  error: 'before',
};

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { open } = useDemoModal();
  const [phase, setPhase] = useState<ScanPhase>('before');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleNext = useCallback((current: ScanPhase) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const next = NEXT_PHASE[current];
      setPhase(next);
      scheduleNext(next);
    }, PHASE_DURATIONS[current]);
  }, []);

  useEffect(() => {
    scheduleNext('before');
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scheduleNext]);

  const triggerScan = () => {
    if (phase !== 'before') return;
    setPhase('scanning');
    scheduleNext('scanning');
  };

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
      const rotY = ((x - cx) / cx) * 3;
      const rotX = -((y - cy) / cy) * 2;
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
            <span className="hero-positioning reveal" aria-label="Positionnement">
              <span className="hero-positioning-icon" aria-hidden="true">🏷️</span>
              Le CRM des professionnels de l&apos;audit et du contrôle
            </span>
            <h1 className="reveal delay-1">
              L&apos;audit énergétique est une science. <span className="accent">beTool</span> est
              votre coffre-fort à dossiers conformes.
            </h1>
            <p className="sub-h1 reveal delay-2">
              Du planning terrain au dépôt, automatisez la logistique de vos inspecteurs, générez
              vos rapports en un clic et blindez votre conformité. Reprenez le contrôle de vos
              marges.
            </p>

            <div className="hero-cta-row reveal delay-3">
              <button
                type="button"
                className="btn btn-accent btn-large"
                onClick={() => open({ source: 'hero' })}
              >
                Demander une démo
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

            <p className="hero-reassurance reveal delay-3">
              <span>Déploiement en 15&nbsp;min</span>
              <span aria-hidden="true">·</span>
              <span>Hébergement souverain UE</span>
              <span aria-hidden="true">·</span>
              <span>Sans engagement</span>
            </p>
          </div>

          <div className="hero-visual reveal delay-1" ref={visualRef}>
            <div className="audit-dashboard" ref={cardRef}>
              <div className="audit-dashboard-head">
                <span className="audit-dashboard-tag">
                  <span className="audit-status-pulse" aria-hidden="true"></span>
                  Tableau de bord conformité
                </span>
              </div>

              <ul className="audit-dossiers">
                <li
                  className={`audit-dossier audit-dossier--demo audit-dossier--${phase}`}
                  aria-live="polite"
                >
                  <div className="audit-dossier-row">
                    <span className="audit-dossier-id">📋 Dossier #8294</span>
                    <span className="audit-dossier-type">Audit Réglementaire</span>
                    {phase === 'before' && (
                      <span className="audit-pill audit-pill--before">Avant contrôle</span>
                    )}
                    {phase === 'scanning' && (
                      <span className="audit-pill audit-pill--scanning">Analyse IA…</span>
                    )}
                    {phase === 'error' && (
                      <span className="audit-pill audit-pill--error">Erreur</span>
                    )}
                  </div>

                  {phase === 'before' && (
                    <button
                      type="button"
                      className="audit-scan-inline"
                      onClick={triggerScan}
                    >
                      <span className="audit-scan-inline-icon" aria-hidden="true">🔍</span>
                      Contrôler le dossier
                    </button>
                  )}

                  {phase === 'scanning' && (
                    <div className="audit-scan-progress">
                      <span className="audit-scan-progress-icon" aria-hidden="true">🤖</span>
                      <span>Analyse IA en cours…</span>
                      <span className="audit-scan-progress-bar">
                        <span className="audit-scan-progress-fill"></span>
                      </span>
                    </div>
                  )}

                  {phase === 'error' && (
                    <div className="audit-dossier-meta audit-dossier-meta--error">
                      <span className="audit-icon-warn" aria-hidden="true">⚠️</span>
                      <strong>Erreur dossier :</strong>&nbsp;devis non signé
                    </div>
                  )}
                </li>

                <li className="audit-dossier audit-dossier--ok">
                  <div className="audit-dossier-row">
                    <span className="audit-dossier-id">📋 Dossier #8291</span>
                    <span className="audit-dossier-type">Audit Réglementaire</span>
                    <span className="audit-pill audit-pill--ok">Rapport Généré</span>
                  </div>
                  <div className="audit-dossier-meta">
                    <span className="audit-icon-ok" aria-hidden="true">🔒</span>
                    GPS Validé · Photos horodatées sur site
                  </div>
                </li>

                <li className="audit-dossier audit-dossier--warn">
                  <div className="audit-dossier-row">
                    <span className="audit-dossier-id">📋 Dossier #8292</span>
                    <span className="audit-dossier-type">Parcours MAR</span>
                    <span className="audit-pill audit-pill--review">En Revue</span>
                  </div>
                  <div className="audit-dossier-meta audit-dossier-meta--warn">
                    <span className="audit-icon-warn" aria-hidden="true">⚠️</span>
                    <strong>Alerte IA :</strong>&nbsp;Incohérence η<sub>s</sub> vs note de
                    dimensionnement
                  </div>
                </li>

                <li className="audit-dossier audit-dossier--ready">
                  <div className="audit-dossier-row">
                    <span className="audit-dossier-id">📋 Dossier #8293</span>
                    <span className="audit-dossier-type">CEE Tertiaire (BAT)</span>
                    <span className="audit-pill audit-pill--ready">Prêt pour Dépôt</span>
                  </div>
                  <div className="audit-dossier-meta">
                    <span className="audit-icon-success" aria-hidden="true">✅</span>
                    COFRAC OK · 12 pièces vérifiées
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
