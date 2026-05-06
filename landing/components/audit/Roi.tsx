'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useDemoModal } from './DemoModalProvider';

const HOURS_PER_AUDIT = 2;

function formatNumber(n: number) {
  return n.toLocaleString('fr-FR');
}

function useAnimatedNumber(target: number, duration = 240) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    fromRef.current = value;
    let start: number | null = null;
    const from = fromRef.current;
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const step = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / duration, 1);
      setValue(Math.round(from + (target - from) * ease(progress)));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  return value;
}

export default function Roi() {
  const [n, setN] = useState(15);
  const { open } = useDemoModal();
  const sliderRef = useRef<HTMLInputElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);

  const { hours, days } = useMemo(
    () => ({
      hours: n * HOURS_PER_AUDIT,
      days: Math.round((n * HOURS_PER_AUDIT) / 7),
    }),
    [n],
  );

  const animatedHours = useAnimatedNumber(hours);
  const animatedDays = useAnimatedNumber(days);

  useEffect(() => {
    if (!sliderRef.current) return;
    const min = 1;
    const max = 50;
    const pct = ((n - min) / (max - min)) * 100;
    sliderRef.current.style.setProperty('--rng-pct', pct + '%');
  }, [n]);

  return (
    <section className="roi" id="roi">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Le coût de la rédaction</span>
          <h2>
            Combien d&apos;heures vous reprenez <span style={{ color: 'var(--gold)' }}>chaque mois</span> ?
          </h2>
          <p className="lead">
            Estimez le temps gagné sur la mise en page Word, la relecture et l&apos;envoi des rapports.
          </p>
        </div>

        <div className="roi-card reveal delay-1">
          <div className="roi-slider-wrap">
            <label htmlFor="roi-slider">Nombre d&apos;audits réalisés / mois</label>
            <div className="roi-slider-row">
              <input
                ref={sliderRef}
                type="range"
                id="roi-slider"
                min={1}
                max={50}
                value={n}
                step={1}
                onChange={(e) => setN(parseInt(e.target.value, 10))}
              />
              <div className="roi-slider-value">
                <span>{n}</span>
                <small>audits</small>
              </div>
            </div>
          </div>

          <div className="roi-results">
            <div className="roi-result roi-result--coverage">
              <div className="roi-result-icon roi-result-icon--coverage">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className="roi-result-num roi-result-num--coverage" ref={hoursRef}>
                <span>{formatNumber(animatedHours)}</span>
                <small>h / mois</small>
              </div>
              <div className="roi-result-label">
                De temps gagné sur la mise en page Word, la relecture et l&apos;envoi de rapports — replacé sur
                des missions à valeur ajoutée.
              </div>
            </div>
            <div className="roi-result roi-result--risk">
              <div className="roi-result-icon roi-result-icon--alert">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="roi-result-num roi-result-num--alert">
                <span>≈ {formatNumber(animatedDays)}</span>
                <small>jours équivalents</small>
              </div>
              <div className="roi-result-label">
                Soit l&apos;équivalent de plusieurs jours-homme par mois — récupérables pour développer votre
                portefeuille client.
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-accent btn-large roi-cta"
            onClick={() =>
              open({
                source: `roi-${n}-audits`,
                ctaLabel: `Récupérer mes ${formatNumber(hours)}h par mois`,
              })
            }
          >
            Récupérer ce temps maintenant
            <svg className="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
          <p className="roi-disclaimer">
            Basé sur 2h par audit en mise en page Word + relecture, observées en moyenne chez nos partenaires
            audit en 2025.
          </p>
        </div>
      </div>
    </section>
  );
}
