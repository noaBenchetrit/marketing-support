'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useDemoModal } from '@/components/landing/DemoModalProvider';

const HOURS_PER_DOSSIER = 1.5;
const EUROS_PER_DOSSIER = 120;

function formatNumber(n: number) {
  return n.toLocaleString('fr-FR');
}

export default function Roi() {
  const [n, setN] = useState(20);
  const { open } = useDemoModal();
  const sliderRef = useRef<HTMLInputElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);
  const moneyRef = useRef<HTMLDivElement>(null);

  const { hours, money } = useMemo(
    () => ({
      hours: Math.round(n * HOURS_PER_DOSSIER),
      money: n * EUROS_PER_DOSSIER,
    }),
    [n],
  );

  useEffect(() => {
    if (!sliderRef.current) return;
    const min = 5;
    const max = 150;
    const pct = ((n - min) / (max - min)) * 100;
    sliderRef.current.style.setProperty('--rng-pct', pct + '%');
  }, [n]);

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
            <label htmlFor="roi-slider">Dossiers CEE déposés / mois</label>
            <div className="roi-slider-row">
              <input
                ref={sliderRef}
                type="range"
                id="roi-slider"
                min={5}
                max={150}
                value={n}
                step={1}
                onChange={(e) => setN(parseInt(e.target.value, 10))}
              />
              <div className="roi-slider-value">
                <span>{n}</span>
                <small>dossiers</small>
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
                Vous libérez du temps sur le montage des dossiers pour vous concentrer sur le terrain.
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
                Trésorerie sécurisée des refus PNCEE et des dossiers incomplets.
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
                source: `audits-roi-${n}-dossiers`,
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
