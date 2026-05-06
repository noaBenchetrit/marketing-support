'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import { useDemoModal } from './DemoModalProvider';

const PRIME_MOYENNE = 3500;
const MARGIN_BOOST = 22;

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
  const [chantiers, setChantiers] = useState(30);
  const [rejet, setRejet] = useState(15);
  const { open } = useDemoModal();
  const chantiersSliderRef = useRef<HTMLInputElement>(null);
  const rejetSliderRef = useRef<HTMLInputElement>(null);

  const missed = useMemo(
    () => Math.round(chantiers * 12 * (rejet / 100) * PRIME_MOYENNE),
    [chantiers, rejet],
  );

  const animatedMissed = useAnimatedNumber(missed);

  useEffect(() => {
    if (chantiersSliderRef.current) {
      const pct = ((chantiers - 5) / (100 - 5)) * 100;
      chantiersSliderRef.current.style.setProperty('--rng-pct', pct + '%');
    }
  }, [chantiers]);

  useEffect(() => {
    if (rejetSliderRef.current) {
      const pct = ((rejet - 5) / (30 - 5)) * 100;
      rejetSliderRef.current.style.setProperty('--rng-pct', pct + '%');
    }
  }, [rejet]);

  return (
    <section className="roi" id="roi">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Le levier de rentabilité</span>
          <h2>
            Combien vos rejets vous <span style={{ color: 'var(--alert, #E8742C)' }}>coûtent</span> chaque année&nbsp;?
          </h2>
          <p className="lead">
            Calculez le manque à gagner sur vos primes rejetées et le potentiel de marge récupérable avec
            beTool.
          </p>
        </div>

        <div className="roi-card reveal delay-1">
          <div className="roi-slider-wrap">
            <label htmlFor="roi-chantiers">Nombre de chantiers / mois</label>
            <div className="roi-slider-row">
              <input
                ref={chantiersSliderRef}
                type="range"
                id="roi-chantiers"
                min={5}
                max={100}
                value={chantiers}
                step={1}
                onChange={(e) => setChantiers(parseInt(e.target.value, 10))}
              />
              <div className="roi-slider-value">
                <span>{chantiers}</span>
                <small>chantiers</small>
              </div>
            </div>
          </div>

          <div className="roi-slider-wrap">
            <label htmlFor="roi-rejet">Taux de rejet actuel des dossiers de prime</label>
            <div className="roi-slider-row">
              <input
                ref={rejetSliderRef}
                type="range"
                id="roi-rejet"
                min={5}
                max={30}
                value={rejet}
                step={1}
                onChange={(e) => setRejet(parseInt(e.target.value, 10))}
              />
              <div className="roi-slider-value">
                <span>{rejet}</span>
                <small>% rejetés</small>
              </div>
            </div>
          </div>

          <div className="roi-results">
            <div className="roi-result roi-result--risk">
              <div className="roi-result-icon roi-result-icon--alert">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="roi-result-num roi-result-num--alert">
                <span>{formatNumber(animatedMissed)}</span>
                <small>€ / an de manque à gagner</small>
              </div>
              <div className="roi-result-label">
                Estimation des primes perdues sur la base d&apos;une aide moyenne de {formatNumber(PRIME_MOYENNE)}&nbsp;€
                par dossier rejeté.
              </div>
            </div>
            <div className="roi-result roi-result--coverage">
              <div className="roi-result-icon roi-result-icon--coverage">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div className="roi-result-num roi-result-num--coverage">
                <span>+{MARGIN_BOOST}</span>
                <small>% de marge nette avec beTool</small>
              </div>
              <div className="roi-result-label">
                IA de conformité, signature eIDAS, archivage automatique : votre taux de rejet tombe sous
                les 2&nbsp;%.
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-accent btn-large roi-cta"
            onClick={() =>
              open({
                source: `roi-${chantiers}-${rejet}`,
                ctaLabel: `Sécuriser ${formatNumber(missed)} €/an`,
              })
            }
          >
            Sécuriser mes marges
            <svg className="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
          <p className="roi-disclaimer">
            Estimation basée sur les barèmes MaPrimeRénov&apos; / CEE 2026 et un taux de rejet moyen observé
            chez nos partenaires installateurs.
          </p>
        </div>
      </div>
    </section>
  );
}
