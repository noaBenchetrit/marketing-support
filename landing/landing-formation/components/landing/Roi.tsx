'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useDemoModal } from './DemoModalProvider';

const HOURS_PER_TRAINEE = 1;
const EUROS_PER_TRAINEE = 80;

function formatNumber(n: number) {
  return n.toLocaleString('fr-FR');
}

export default function Roi() {
  const [n, setN] = useState(30);
  const { open } = useDemoModal();
  const sliderRef = useRef<HTMLInputElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);
  const moneyRef = useRef<HTMLDivElement>(null);

  const { hours, money } = useMemo(
    () => ({
      hours: n * HOURS_PER_TRAINEE,
      money: n * EUROS_PER_TRAINEE,
    }),
    [n],
  );

  // Met à jour le remplissage vert du track
  useEffect(() => {
    if (!sliderRef.current) return;
    const min = 5;
    const max = 200;
    const pct = ((n - min) / (max - min)) * 100;
    sliderRef.current.style.setProperty('--rng-pct', pct + '%');
  }, [n]);

  // Pulse les chiffres quand ils changent
  useEffect(() => {
    [hoursRef.current, moneyRef.current].forEach((el) => {
      if (!el) return;
      el.classList.add('pulse');
      const t = setTimeout(() => el.classList.remove('pulse'), 180);
      return () => clearTimeout(t);
    });
  }, [n]);

  return (
    <section className="roi" id="roi">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Le gain</span>
          <h2>
            Combien betool peut <span style={{ color: 'var(--accent)' }}>vous rendre</span> ?
          </h2>
          <p className="lead">Faites glisser le curseur pour estimer votre gain mensuel.</p>
        </div>

        <div className="roi-row">
        <div className="roi-card reveal delay-1">
          <div className="roi-slider-wrap">
            <label htmlFor="roi-slider">Stagiaires accompagnés / mois</label>
            <div className="roi-slider-row">
              <input
                ref={sliderRef}
                type="range"
                id="roi-slider"
                min={5}
                max={200}
                value={n}
                step={1}
                onChange={(e) => setN(parseInt(e.target.value, 10))}
              />
              <div className="roi-slider-value">
                <span>{n}</span>
                <small>stagiaires</small>
              </div>
            </div>
          </div>

          <div className="roi-results">
            <div className="roi-result">
              <div className="roi-result-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="roi-result-num" ref={hoursRef}>
                <span>{formatNumber(hours)}</span>
                <small>h / mois</small>
              </div>
              <div className="roi-result-label">
                Vous libérez du temps administratif pour vous concentrer sur la pédagogie.
              </div>
            </div>
            <div className="roi-result">
              <div className="roi-result-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="roi-result-num" ref={moneyRef}>
                <span>{formatNumber(money)}</span>
                <small>€ / mois</small>
              </div>
              <div className="roi-result-label">
                Trésorerie sécurisée des erreurs de conformité et des dossiers refusés.
              </div>
            </div>
          </div>
        </div>

        <aside className="roi-aside reveal delay-2">
          <button
            type="button"
            className="btn btn-accent btn-large roi-cta"
            onClick={() =>
              open({
                source: `roi-${n}-stagiaires`,
                ctaLabel: `Récupérer mes ${formatNumber(hours)}h par mois`,
              })
            }
          >
            Récupérer mes {formatNumber(hours)}h par mois
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
        </aside>
        </div>
      </div>
    </section>
  );
}
