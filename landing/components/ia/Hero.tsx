'use client';

import { useEffect, useRef, useState } from 'react';
import { scrollToForm } from './scrollToForm';

const AGENTS = [
  { icon: '✉️', name: 'Agent Relance', result: '142 relances' },
  { icon: '🧾', name: 'Agent Facturation', result: '38 factures' },
  { icon: '💬', name: 'Agent Support', result: '24 tickets résolus' },
] as const;

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  // Compteur « heures économisées » : count-up au montage.
  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = '6,2 h';
      return;
    }
    const target = 6.2;
    const duration = 1400;
    let raf = 0;
    let start = 0;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = `${(target * eased).toFixed(1).replace('.', ',')} h`;
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Tilt magnétique au survol (desktop uniquement).
  useEffect(() => {
    const visual = visualRef.current;
    const card = cardRef.current;
    if (!visual || !card) return;
    if (!window.matchMedia('(hover: hover)').matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = visual.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 4;
      const rotX = -((y - rect.height / 2) / (rect.height / 2)) * 3;
      card.style.transition = 'transform 0.12s ease-out';
      card.style.transform = `perspective(1400px) rotateY(${rotY}deg) rotateX(${rotX}deg)`;
    };
    const onLeave = () => {
      card.style.transition = 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
      card.style.transform = '';
    };

    visual.addEventListener('mousemove', onMove);
    visual.addEventListener('mouseleave', onLeave);
    return () => {
      visual.removeEventListener('mousemove', onMove);
      visual.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className="ia-hero">
      <div className="ia-hero-bg" aria-hidden="true" />
      <div className="container">
        <div className="ia-hero-grid">
          <div className="ia-hero-text">
            <span className="eyebrow reveal">
              <span className="eyebrow-dot" aria-hidden="true" />
              beTool IA · Agents autonomes pour entreprises
            </span>
            <h1 className="reveal delay-1">
              Arrêtez de payer des salariés pour faire ce qu&apos;une{' '}
              <span className="accent-text">IA peut faire</span>.
            </h1>
            <p className="sub-h1 reveal delay-2">
              Confiez les tâches répétitives à nos agents IA autonomes et libérez vos
              collaborateurs pour des missions à forte valeur ajoutée.
            </p>

            <div className="ia-cta-row reveal delay-3">
              <button type="button" className="btn btn-accent btn-large" onClick={scrollToForm}>
                Réserver mon audit offert (30 min)
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

            <p className="ia-reassurance reveal delay-3">
              <span>
                <span className="tick" aria-hidden="true">✓</span> 100 % offert
              </span>
              <span aria-hidden="true">·</span>
              <span>
                <span className="tick" aria-hidden="true">✓</span> Sans engagement
              </span>
              <span aria-hidden="true">·</span>
              <span>
                <span className="tick" aria-hidden="true">✓</span> Résultats sous 30 min
              </span>
            </p>
          </div>

          <div className="ia-visual reveal delay-1" ref={visualRef}>
            <div className="ia-agents-card" ref={cardRef}>
              <div className="ia-agents-head">
                <span className="ia-agents-title">
                  <span className="ia-agents-avatar" aria-hidden="true">🤖</span>
                  Vos agents IA
                </span>
                <span className="ia-agents-status">
                  <span className="dot" aria-hidden="true" />
                  En ligne
                </span>
              </div>

              <ul className="ia-agent-list">
                {AGENTS.map((agent) => (
                  <li className="ia-agent" key={agent.name}>
                    <span className="ia-agent-icon" aria-hidden="true">
                      {agent.icon}
                    </span>
                    <span className="ia-agent-name">{agent.name}</span>
                    <span className="ia-agent-result">
                      {agent.result}
                      <span className="check" aria-hidden="true">✓</span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="ia-agents-foot">
                <span className="ia-agents-foot-label">Temps humain économisé · aujourd&apos;hui</span>
                <span className="ia-agents-foot-value" ref={counterRef}>
                  6,2 h
                </span>
              </div>
            </div>

            <div className="ia-float-badge" aria-hidden="true">
              <span className="emoji">🧑‍💼</span>
              <span className="ia-float-text">
                <span className="ia-float-num">+ de temps</span>
                <span className="ia-float-sub">pour ce qui compte vraiment</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
